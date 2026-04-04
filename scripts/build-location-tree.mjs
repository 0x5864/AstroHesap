import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const API_BASE = "https://api.turkiyeapi.dev/v1";
const OUTPUT_PATH = resolve("assets/location-tree-full.json");
const DISTRICT_LIMIT = 5000;
const CONCURRENCY = 16;

/**
 * Fetch JSON from the API.
 *
 * @param {string} url
 * @returns {Promise<any>}
 */
const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}): ${url}`);
  }

  return response.json();
};

/**
 * Fetch all districts in one request.
 *
 * @returns {Promise<Array<{id:number,name:string,provinceId:number}>>}
 */
const fetchDistricts = async () => {
  const url = `${API_BASE}/districts?fields=id,name,provinceId&limit=${DISTRICT_LIMIT}&offset=0&page=1`;
  const payload = await fetchJson(url);
  return Array.isArray(payload?.data) ? payload.data : [];
};

/**
 * Fetch a district detail, including neighborhoods.
 *
 * @param {number|string} districtId
 * @returns {Promise<{province:string,name:string,neighborhoods:Array<{name:string}>}>}
 */
const fetchDistrictDetail = async (districtId) => {
  const payload = await fetchJson(`${API_BASE}/districts/${districtId}`);
  return payload?.data ?? null;
};

/**
 * Run an async mapper with a small concurrency limit.
 *
 * @template T
 * @template R
 * @param {T[]} items
 * @param {number} concurrency
 * @param {(item:T, index:number)=>Promise<R>} mapper
 * @returns {Promise<R[]>}
 */
const mapWithConcurrency = async (items, concurrency, mapper) => {
  const results = new Array(items.length);
  let cursor = 0;

  const worker = async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  );

  return results;
};

/**
 * Sort object keys and neighborhood labels for stable output.
 *
 * @param {Record<string, Record<string, string[]>>} tree
 * @returns {Record<string, Record<string, string[]>>}
 */
const sortTree = (tree) => {
  /** @type {Record<string, Record<string, string[]>>} */
  const sortedTree = {};

  Object.keys(tree)
    .sort((left, right) => left.localeCompare(right, "tr"))
    .forEach((provinceLabel) => {
      const districtMap = tree[provinceLabel] ?? {};
      /** @type {Record<string, string[]>} */
      const sortedDistricts = {};

      Object.keys(districtMap)
        .sort((left, right) => left.localeCompare(right, "tr"))
        .forEach((districtLabel) => {
          sortedDistricts[districtLabel] = [...(districtMap[districtLabel] ?? [])].sort((left, right) =>
            left.localeCompare(right, "tr"),
          );
        });

      sortedTree[provinceLabel] = sortedDistricts;
    });

  return sortedTree;
};

const main = async () => {
  console.log("Fetching districts...");
  const districts = await fetchDistricts();
  console.log(`Found ${districts.length} districts.`);

  /** @type {Record<string, Record<string, string[]>>} */
  const tree = {};

  await mapWithConcurrency(districts, CONCURRENCY, async (district, index) => {
    const detail = await fetchDistrictDetail(district.id);
    if (!detail?.province || !detail?.name) {
      return;
    }

    const provinceLabel = String(detail.province).trim();
    const districtLabel = String(detail.name).trim();
    const neighborhoods = Array.isArray(detail.neighborhoods)
      ? detail.neighborhoods
          .map((entry) => String(entry?.name ?? "").trim())
          .filter(Boolean)
      : [];

    if (!tree[provinceLabel]) {
      tree[provinceLabel] = {};
    }

    tree[provinceLabel][districtLabel] = neighborhoods;

    if ((index + 1) % 50 === 0 || index === districts.length - 1) {
      console.log(`Processed ${index + 1}/${districts.length} districts...`);
    }
  });

  const sortedTree = sortTree(tree);
  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify(sortedTree));
  console.log(`Wrote full location tree to ${OUTPUT_PATH}`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
