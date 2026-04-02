(async function () {
  const provinceSelect = document.querySelector("[data-birth-province]");
  const districtSelect = document.querySelector("[data-birth-district]");
  const neighborhoodSelect = document.querySelector("[data-birth-neighborhood]");
  const dateInput = document.querySelector("[data-birth-date]");
  const timeInput = document.querySelector("[data-birth-time]");
  const latitudeInput = document.querySelector("[data-birth-latitude]");
  const longitudeInput = document.querySelector("[data-birth-longitude]");
  const timezoneInput = document.querySelector("[data-birth-timezone]");
  const calculateButton = document.querySelector("[data-birth-chart-calculate]");
  const statusNode = document.querySelector("[data-birth-chart-status]");
  const interpretationNode = document.querySelector("[data-birth-interpretation]");
  const solarWheelNode = document.querySelector("[data-birth-solar-wheel]");
  const solarAnalysisNode = document.querySelector("[data-birth-solar-analysis]");
  const personalPlanetsNode = document.querySelector("[data-birth-personal-planets]");
  const birthForm = document.querySelector('.birth-form-card form');

  const resultNodes = {
    sun: document.querySelector("[data-birth-sun]"),
    moon: document.querySelector("[data-birth-moon]"),
    ascendant: document.querySelector("[data-birth-ascendant]"),
    midheaven: document.querySelector("[data-birth-midheaven]"),
  };
  const formCard = document.querySelector(".birth-form-card");
  const PROFILE_STORAGE_KEYS = {
    users: "astrohesap-users",
    session: "astrohesap-session",
  };

  if (
    !(provinceSelect instanceof HTMLSelectElement) ||
    !(districtSelect instanceof HTMLSelectElement) ||
    !(neighborhoodSelect instanceof HTMLSelectElement) ||
    !(dateInput instanceof HTMLInputElement) ||
    !(timeInput instanceof HTMLInputElement) ||
    !(latitudeInput instanceof HTMLInputElement) ||
    !(longitudeInput instanceof HTMLInputElement) ||
    !(timezoneInput instanceof HTMLInputElement) ||
    !(solarWheelNode instanceof HTMLElement) ||
    !(solarAnalysisNode instanceof HTMLElement)
  ) {
    return;
  }

  const PLANETS = [
    { key: "Mercury", label: "Merkür" },
    { key: "Venus", label: "Venüs" },
    { key: "Mars", label: "Mars" },
    { key: "Jupiter", label: "Jüpiter" },
    { key: "Saturn", label: "Satürn" },
    { key: "Uranus", label: "Uranüs" },
    { key: "Neptune", label: "Neptün" },
    { key: "Pluto", label: "Plüton" },
  ];

  const SIGNS = [
    "Koç",
    "Boğa",
    "İkizler",
    "Yengeç",
    "Aslan",
    "Başak",
    "Terazi",
    "Akrep",
    "Yay",
    "Oğlak",
    "Kova",
    "Balık",
  ];

  const HOUSE_LABELS = [
    "1. Ev",
    "2. Ev",
    "3. Ev",
    "4. Ev",
    "5. Ev",
    "6. Ev",
    "7. Ev",
    "8. Ev",
    "9. Ev",
    "10. Ev",
    "11. Ev",
    "12. Ev",
  ];
  const DETAIL_BODIES = [
    { key: "Sun", label: "Güneş", short: "SU" },
    { key: "Moon", label: "Ay", short: "MO" },
    { key: "Mercury", label: "Merkür", short: "ME" },
    { key: "Venus", label: "Venüs", short: "VE" },
    { key: "Mars", label: "Mars", short: "MA" },
    { key: "Jupiter", label: "Jüpiter", short: "JU" },
    { key: "Saturn", label: "Satürn", short: "SA" },
    { key: "Uranus", label: "Uranüs", short: "UR" },
    { key: "Neptune", label: "Neptün", short: "NE" },
    { key: "Pluto", label: "Plüton", short: "PL" },
  ];
  const DETAIL_EXTRA_BODIES = [
    { key: "Chiron", label: "Chiron", short: "CH", base: 250.2, speed: 0.01971, wobble: 6.1, cycle: 18500 },
    { key: "Lilith", label: "Lilith", short: "LI", base: 220.8, speed: 0.11141, wobble: 5.5, cycle: 3232 },
    { key: "Juno", label: "Juno", short: "JN", base: 192.4, speed: 0.0832, wobble: 4.2, cycle: 1592 },
    { key: "Ceres", label: "Ceres", short: "CE", base: 143.8, speed: 0.2141, wobble: 5.8, cycle: 1680 },
    { key: "Vesta", label: "Vesta", short: "VS", base: 316.1, speed: 0.2713, wobble: 4.1, cycle: 1325 },
    { key: "Pallas", label: "Pallas", short: "PA", base: 278.4, speed: 0.2138, wobble: 5.1, cycle: 1688 },
  ];
  const ASPECTS = [
    { key: "conjunction", label: "Kavuşum", angle: 0 },
    { key: "sextile", label: "Sextile", angle: 60 },
    { key: "square", label: "Kare", angle: 90 },
    { key: "trine", label: "Üçgen", angle: 120 },
    { key: "opposition", label: "Karşıt", angle: 180 },
  ];
  const ASPECT_SYMBOLS = {
    conjunction: "☌",
    sextile: "✶",
    square: "□",
    trine: "△",
    opposition: "☍",
  };
  const ZODIAC_GLYPHS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const SIGN_COLORS = [
    "#d6524a",
    "#5ca35c",
    "#d18a3a",
    "#4f93d8",
    "#d6524a",
    "#5ca35c",
    "#d18a3a",
    "#4f93d8",
    "#d6524a",
    "#5ca35c",
    "#d18a3a",
    "#4f93d8",
  ];
  const PLANET_GLYPHS = {
    Sun: "☉",
    Moon: "☽",
    Mercury: "☿",
    Venus: "♀",
    Mars: "♂",
    Jupiter: "♃",
    Saturn: "♄",
    Uranus: "♅",
    Neptune: "♆",
    Pluto: "♇",
    Chiron: "⚷",
    Lilith: "⚸",
    Juno: "⚵",
    Ceres: "⚳",
    Vesta: "⚶",
    Pallas: "⚴",
    NorthNode: "☊",
    SouthNode: "☋",
    Fortune: "⊗",
    Vertex: "VX",
    Ascendant: "AC",
    Midheaven: "MC",
  };
  const SIGN_THEMES = {
    Koç: { element: "Ateş", theme: "hızlı başlatan, direkt ve cesur bir çizgi" },
    Boğa: { element: "Toprak", theme: "istikrarlı, duyusal ve kalıcı bir çizgi" },
    İkizler: { element: "Hava", theme: "meraklı, zihinsel ve hareketli bir çizgi" },
    Yengeç: { element: "Su", theme: "koruyucu, sezgisel ve duygusal bir çizgi" },
    Aslan: { element: "Ateş", theme: "görünür, sıcak ve yaratıcı bir çizgi" },
    Başak: { element: "Toprak", theme: "ayıklayan, dikkatli ve düzenli bir çizgi" },
    Terazi: { element: "Hava", theme: "denge arayan, sosyal ve estetik bir çizgi" },
    Akrep: { element: "Su", theme: "derin, yoğun ve sezgisel bir çizgi" },
    Yay: { element: "Ateş", theme: "genişleyen, anlam arayan ve özgür bir çizgi" },
    Oğlak: { element: "Toprak", theme: "hedef odaklı, sabırlı ve kurucu bir çizgi" },
    Kova: { element: "Hava", theme: "özgün, mesafeli ve fikir odaklı bir çizgi" },
    Balık: { element: "Su", theme: "akışkan, empatik ve hayal gücü yüksek bir çizgi" },
  };

  const FALLBACK_LOCATION_TREE = {
    İstanbul: {
      Fatih: {
        "Sultanahmet": { latitude: 41.0054, longitude: 28.9768 },
        Aksaray: { latitude: 41.0106, longitude: 28.9497 },
      },
      Kadıköy: {
        Moda: { latitude: 40.9867, longitude: 29.0281 },
        Fenerbahçe: { latitude: 40.9709, longitude: 29.0436 },
      },
    },
    Ankara: {
      Çankaya: {
        Kızılay: { latitude: 39.9208, longitude: 32.8541 },
        Gaziosmanpaşa: { latitude: 39.9057, longitude: 32.8633 },
      },
      Keçiören: {
        Etlik: { latitude: 39.9755, longitude: 32.8334 },
        "Aşağı Eğlence": { latitude: 39.9772, longitude: 32.8442 },
      },
    },
    İzmir: {
      Konak: {
        Alsancak: { latitude: 38.4392, longitude: 27.1435 },
        Göztepe: { latitude: 38.4125, longitude: 27.1024 },
      },
      Karşıyaka: {
        Bostanlı: { latitude: 38.4553, longitude: 27.0978 },
        Mavişehir: { latitude: 38.479, longitude: 27.0586 },
      },
    },
    Antalya: {
      Muratpaşa: {
        Lara: { latitude: 36.8583, longitude: 30.8 },
        Meltem: { latitude: 36.8845, longitude: 30.6906 },
      },
      Konyaaltı: {
        Liman: { latitude: 36.8596, longitude: 30.6368 },
        Uncalı: { latitude: 36.8846, longitude: 30.6577 },
      },
    },
    Adana: {
      Seyhan: {
        Reşatbey: { latitude: 36.9927, longitude: 35.3303 },
        Kurtuluş: { latitude: 36.9889, longitude: 35.3213 },
      },
      Çukurova: {
        Toros: { latitude: 37.0442, longitude: 35.2868 },
        Huzurevleri: { latitude: 37.0518, longitude: 35.2874 },
      },
    },
    Trabzon: {
      Ortahisar: {
        Beşirli: { latitude: 41.0006, longitude: 39.6764 },
        Yalı: { latitude: 41.0056, longitude: 39.7112 },
      },
      Akçaabat: {
        Söğütlü: { latitude: 41.0209, longitude: 39.5604 },
        Yaylacık: { latitude: 41.0181, longitude: 39.5622 },
      },
    },
  };

  const DEFAULT_PROVINCE = "İstanbul";
  const DEFAULT_DISTRICT = "Fatih";
  const DEFAULT_NEIGHBORHOOD = "Sultanahmet";

  function getSavedBirthProfile() {
    try {
      const session = JSON.parse(window.localStorage.getItem(PROFILE_STORAGE_KEYS.session) ?? "null");
      const users = JSON.parse(window.localStorage.getItem(PROFILE_STORAGE_KEYS.users) ?? "[]");
      if (!session?.email || !Array.isArray(users)) {
        return null;
      }

      const currentUser = users.find((entry) => entry?.email === session.email);
      return currentUser?.birthInfo ?? null;
    } catch (_error) {
      return null;
    }
  }

  function injectAlternateBirthProfileBox() {
    if (!(formCard instanceof HTMLElement) || !(birthForm instanceof HTMLFormElement) || formCard.querySelector("[data-saved-birth-override]")) {
      return;
    }

    const profile = getSavedBirthProfile();
    if (!profile) {
      return;
    }

    const wrapper = document.createElement("section");
    wrapper.className = "saved-birth-override-card";
    wrapper.setAttribute("data-saved-birth-override", "true");
    wrapper.innerHTML = `
      <div class="saved-birth-override-copy">
        <p>Sistem, otomatik olarak senin kayıtlı doğum bilgilerini kullanıyor. İstersen farklı doğum bilgileri girerek formu yeniden doldurabilirsin.</p>
      </div>
      <button class="saved-birth-override-btn" type="button">Farklı doğum bilgisi gir</button>
    `;

    const actionButton = wrapper.querySelector("button");
    actionButton?.addEventListener("click", async () => {
      dateInput.value = "";
      timeInput.value = "";
      provinceSelect.value = "";
      districtSelect.value = "";
      neighborhoodSelect.value = "";
      districtSelect.innerHTML = '<option value="">İlçe seçiniz</option>';
      neighborhoodSelect.innerHTML = '<option value="">Mahalle seçiniz</option>';
      districtSelect.disabled = true;
      neighborhoodSelect.disabled = true;
      latitudeInput.value = "";
      longitudeInput.value = "";
      timezoneInput.value = "3";
      calculateChart();
      document.querySelector(".birth-form-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const actions = birthForm.querySelector(".tool-actions");
    if (actions instanceof HTMLElement) {
      actions.insertAdjacentElement("beforebegin", wrapper);
      return;
    }

    birthForm.appendChild(wrapper);
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  const TURKIYE_API_BASE = "https://api.turkiyeapi.dev/v1";
  const NOMINATIM_BASE = "https://nominatim.openstreetmap.org/search";
  const apiCache = {
    provinces: null,
    provinceDetails: new Map(),
    districts: new Map(),
    neighborhoods: new Map(),
    geocodes: new Map(),
  };

  function setSelectOptions(selectNode, values, placeholder) {
    const fragment = document.createDocumentFragment();
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = placeholder;
    fragment.append(placeholderOption);

    values.forEach((value) => {
      const option = document.createElement("option");
      if (typeof value === "string") {
        option.value = value;
        option.textContent = value;
      } else {
        option.value = value.name;
        option.textContent = value.name;
        if ("id" in value && value.id) {
          option.dataset.id = String(value.id);
        }
      }
      fragment.append(option);
    });

    selectNode.innerHTML = "";
    selectNode.append(fragment);
  }

  function setDefaults() {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    dateInput.value = local.toISOString().slice(0, 10);
    timeInput.value = `${pad(local.getHours())}:${pad(local.getMinutes())}`;
    timezoneInput.value = "3";
  }

  async function fetchApiPayload(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
  }

  async function fetchApiData(url) {
    const payload = await fetchApiPayload(url);
    return payload?.data;
  }

  async function fetchPaginatedApiData(path, options = {}) {
    const {
      baseParams = {},
      limit = 100,
      maxPages = 200,
    } = options;

    const items = [];
    const seenKeys = new Set();
    let nextUrl = null;
    let page = 1;
    let offset = 0;

    for (let index = 0; index < maxPages; index += 1) {
      const requestUrl = nextUrl
        ? nextUrl
        : (() => {
            const url = new URL(`${TURKIYE_API_BASE}${path}`);
            Object.entries(baseParams).forEach(([key, value]) => {
              url.searchParams.set(key, String(value));
            });
            url.searchParams.set("limit", String(limit));
            url.searchParams.set("offset", String(offset));
            url.searchParams.set("page", String(page));
            return url.toString();
          })();

      const payload = await fetchApiPayload(requestUrl);
      const batch = Array.isArray(payload?.data) ? payload.data : [];

      if (batch.length === 0) {
        break;
      }

      let addedCount = 0;
      batch.forEach((item) => {
        const key =
          item && typeof item === "object" && "id" in item && item.id
            ? String(item.id)
            : JSON.stringify(item);

        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          items.push(item);
          addedCount += 1;
        }
      });

      const payloadNextUrl =
        payload?.links?.next ??
        payload?.pagination?.next ??
        payload?.meta?.next ??
        null;
      const hasNextPage =
        payload?.meta?.hasNextPage ??
        payload?.pagination?.hasNextPage ??
        payload?.pagination?.hasNext ??
        payload?.meta?.hasNext ??
        false;

      if (typeof payloadNextUrl === "string" && payloadNextUrl) {
        nextUrl = payloadNextUrl.startsWith("http")
          ? payloadNextUrl
          : `${TURKIYE_API_BASE}${payloadNextUrl}`;
        page += 1;
        offset += limit;
        continue;
      }

      if (hasNextPage) {
        nextUrl = null;
        page += 1;
        offset += limit;
        continue;
      }

      if (batch.length < limit || addedCount === 0) {
        break;
      }

      page += 1;
      offset += limit;
    }

    return items;
  }

  async function fetchAllProvinces() {
    if (apiCache.provinces) {
      return apiCache.provinces;
    }

    const provinces = await fetchPaginatedApiData("/provinces", {
      baseParams: { fields: "id,name" },
      limit: 100,
      maxPages: 4,
    });
    apiCache.provinces = Array.isArray(provinces) ? provinces : [];
    return apiCache.provinces;
  }

  async function fetchProvinceDetails(provinceId) {
    if (apiCache.provinceDetails.has(provinceId)) {
      return apiCache.provinceDetails.get(provinceId);
    }

    const detail = await fetchApiData(`${TURKIYE_API_BASE}/provinces/${provinceId}?fields=id,name,coordinates`);
    apiCache.provinceDetails.set(provinceId, detail);
    return detail;
  }

  async function fetchDistrictsByProvinceId(provinceId) {
    if (apiCache.districts.has(provinceId)) {
      return apiCache.districts.get(provinceId);
    }

    const districts = await fetchPaginatedApiData("/districts", {
      baseParams: {
        provinceId,
        fields: "id,name",
      },
      limit: 100,
      maxPages: 40,
    });
    const normalized = Array.isArray(districts) ? districts : [];
    apiCache.districts.set(provinceId, normalized);
    return normalized;
  }

  async function fetchNeighborhoodsByDistrictId(districtId) {
    if (apiCache.neighborhoods.has(districtId)) {
      return apiCache.neighborhoods.get(districtId);
    }

    const neighborhoods = await fetchPaginatedApiData("/neighborhoods", {
      baseParams: {
        districtId,
        fields: "id,name",
      },
      limit: 100,
      maxPages: 300,
    });
    const normalized = Array.isArray(neighborhoods) ? neighborhoods : [];
    apiCache.neighborhoods.set(districtId, normalized);
    return normalized;
  }

  async function fetchNeighborhoodCoordinates(province, district, neighborhood) {
    const cacheKey = `${province}|${district}|${neighborhood}`;
    if (apiCache.geocodes.has(cacheKey)) {
      return apiCache.geocodes.get(cacheKey);
    }

    const query = new URLSearchParams({
      q: `${neighborhood}, ${district}, ${province}, Turkey`,
      format: "jsonv2",
      limit: "1",
      countrycodes: "tr",
      "accept-language": "tr",
    });

    const response = await fetch(`${NOMINATIM_BASE}?${query.toString()}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Geocode request failed: ${response.status}`);
    }

    const payload = await response.json();
    const first = Array.isArray(payload) ? payload[0] : null;
    const coordinates =
      first && Number.isFinite(Number.parseFloat(first.lat)) && Number.isFinite(Number.parseFloat(first.lon))
        ? {
            latitude: Number.parseFloat(first.lat),
            longitude: Number.parseFloat(first.lon),
          }
        : null;

    apiCache.geocodes.set(cacheKey, coordinates);
    return coordinates;
  }

  function getSelectedOption(selectNode) {
    return selectNode.options[selectNode.selectedIndex] ?? null;
  }

  function getSelectedOptionId(selectNode) {
    const option = getSelectedOption(selectNode);
    if (!(option instanceof HTMLOptionElement) || !option.value) {
      return "";
    }

    return option.dataset.id ?? "";
  }

  function getFallbackProvinceCoordinates(province) {
    const districts = FALLBACK_LOCATION_TREE[province];
    if (districts) {
      const firstDistrict = Object.keys(districts)[0];
      const firstNeighborhood = firstDistrict ? Object.keys(districts[firstDistrict])[0] : "";
      const node = firstDistrict && firstNeighborhood ? districts[firstDistrict][firstNeighborhood] : null;
      if (node) {
        return node;
      }
    }

    return { latitude: 41.0138, longitude: 28.9497 };
  }

  function normalizeDegrees(value) {
    return ((value % 360) + 360) % 360;
  }

  function normalizeSignedDegree(value) {
    const normalized = normalizeDegrees(value + 180) - 180;
    return normalized === -180 ? 180 : normalized;
  }

  function degreesToSign(value) {
    const normalized = normalizeDegrees(value);
    const signIndex = Math.floor(normalized / 30);
    const withinSign = normalized % 30;
    const degree = Math.floor(withinSign);
    const minute = Math.round((withinSign - degree) * 60);
    const normalizedMinute = minute === 60 ? 0 : minute;
    const normalizedDegree = minute === 60 ? degree + 1 : degree;
    return `${SIGNS[signIndex]} ${normalizedDegree}° ${pad(normalizedMinute)}′`;
  }

  function formatWheelLongitude(value) {
    const normalized = normalizeDegrees(value);
    const signIndex = Math.floor(normalized / 30);
    const withinSign = normalized % 30;
    const degree = Math.floor(withinSign);
    const minute = Math.round((withinSign - degree) * 60);
    const normalizedMinute = minute === 60 ? 0 : minute;
    const normalizedDegree = minute === 60 ? degree + 1 : degree;
    return `${normalizedDegree}°${pad(normalizedMinute)} ${ZODIAC_GLYPHS[signIndex]}`;
  }

  function polarToCartesian(cx, cy, radius, angleDegrees) {
    const radiansValue = ((angleDegrees - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(radiansValue),
      y: cy + radius * Math.sin(radiansValue),
    };
  }

  function getMajorAspect(leftDegree, rightDegree, orbValue = 5) {
    const distance = Math.abs(normalizeSignedDegree(leftDegree - rightDegree));
    let matched = null;

    ASPECTS.forEach((aspect) => {
      const delta = Math.abs(distance - aspect.angle);
      if (delta > orbValue) {
        return;
      }

      if (!matched || delta < matched.delta) {
        matched = { ...aspect, delta };
      }
    });

    return matched;
  }

  function getDetailedHouseCusps(ascendant) {
    return HOUSE_LABELS.map((label, index) => ({
      label,
      degree: normalizeDegrees(ascendant - index * 30),
    }));
  }

  function getHouseNumberForDegree(degree, houseCusps) {
    for (let index = 0; index < houseCusps.length; index += 1) {
      const current = houseCusps[index].degree;
      const next = houseCusps[(index + 1) % houseCusps.length].degree;
      const span = normalizeDegrees(current - next);
      const distance = normalizeDegrees(current - degree);
      if (distance >= 0 && distance < span) {
        return index + 1;
      }
    }

    return 1;
  }

  function getSignNameFromPosition(positionText) {
    return SIGNS.find((sign) => positionText.startsWith(`${sign} `)) ?? "";
  }

  function setInterpretation({ sunText, moonText, ascText }) {
    if (!(interpretationNode instanceof HTMLElement)) {
      return;
    }

    const sunSign = getSignNameFromPosition(sunText);
    const moonSign = getSignNameFromPosition(moonText);
    const ascSign = getSignNameFromPosition(ascText);

    if (!sunSign || !moonSign || !ascSign) {
      interpretationNode.innerHTML = `
        <h4>Yorum ekseni</h4>
        <p>Güneş, Ay ve Yükselen yerleşimlerin burada birlikte okunur. Hesaplama sonrası kısa yorum bu alanda görünür.</p>
      `;
      return;
    }

    const sunTheme = SIGN_THEMES[sunSign]?.theme ?? "temel kimlik tonunu";
    const moonTheme = SIGN_THEMES[moonSign]?.theme ?? "duygusal ritmi";
    const ascTheme = SIGN_THEMES[ascSign]?.theme ?? "dış dünyaya verdiğin ilk izlenimi";

    interpretationNode.innerHTML = `
      <h4>Yorum ekseni</h4>
      <p>${sunSign} Güneşi kimliğinde ${sunTheme} öne çıkarır. ${moonSign} Ayı iç dünyanda ${moonTheme} büyütür; ${ascSign} yükseleni ise dışarıya ${ascTheme} taşır.</p>
      <p class="result-inline-meta">
        Güneş: ${sunSign}
        <span class="divider-dot" aria-hidden="true"></span>
        Ay: ${moonSign}
        <span class="divider-dot" aria-hidden="true"></span>
        Yükselen: ${ascSign}
      </p>
    `;
  }

  async function populateProvinces() {
    try {
      const provinces = await fetchAllProvinces();
      setSelectOptions(provinceSelect, provinces, "İl seçiniz");
      provinceSelect.disabled = false;
      return;
    } catch (_error) {
      const provinces = Object.keys(FALLBACK_LOCATION_TREE).sort((left, right) => left.localeCompare(right, "tr"));
      setSelectOptions(provinceSelect, provinces, "İl seçiniz");
      provinceSelect.disabled = false;
    }
  }

  async function populateDistricts(province) {
    try {
      const provinceId = getSelectedOptionId(provinceSelect);
      if (provinceId) {
        const districts = await fetchDistrictsByProvinceId(provinceId);
        setSelectOptions(districtSelect, districts, "İlçe seçiniz");
        districtSelect.disabled = districts.length === 0;
        return;
      }
    } catch (_error) {
      // Falls back below.
    }

    const districts = province && FALLBACK_LOCATION_TREE[province] ? Object.keys(FALLBACK_LOCATION_TREE[province]) : [];
    setSelectOptions(districtSelect, districts, "İlçe seçiniz");
    districtSelect.disabled = districts.length === 0;
  }

  async function populateNeighborhoods(province, district) {
    try {
      const districtId = getSelectedOptionId(districtSelect);
      if (districtId) {
        const neighborhoods = await fetchNeighborhoodsByDistrictId(districtId);
        setSelectOptions(neighborhoodSelect, neighborhoods, "Mahalle seçiniz");
        neighborhoodSelect.disabled = neighborhoods.length === 0;
        return;
      }
    } catch (_error) {
      // Falls back below.
    }

    const neighborhoods =
      province && district && FALLBACK_LOCATION_TREE[province] && FALLBACK_LOCATION_TREE[province][district]
        ? Object.keys(FALLBACK_LOCATION_TREE[province][district])
        : [];
    setSelectOptions(neighborhoodSelect, neighborhoods, "Mahalle seçiniz");
    neighborhoodSelect.disabled = neighborhoods.length === 0;
  }

  async function ensureProvinceCoordinates() {
    const option = getSelectedOption(provinceSelect);
    if (!(option instanceof HTMLOptionElement) || !option.value) {
      return getFallbackProvinceCoordinates(DEFAULT_PROVINCE);
    }

    if (option.dataset.latitude && option.dataset.longitude) {
      return {
        latitude: Number.parseFloat(option.dataset.latitude),
        longitude: Number.parseFloat(option.dataset.longitude),
      };
    }

    try {
      const provinceId = option.dataset.id;
      if (provinceId) {
        const detail = await fetchProvinceDetails(provinceId);
        const latitude = detail?.coordinates?.latitude;
        const longitude = detail?.coordinates?.longitude;
        if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
          option.dataset.latitude = String(latitude);
          option.dataset.longitude = String(longitude);
          return { latitude, longitude };
        }
      }
    } catch (_error) {
      return getFallbackProvinceCoordinates(option.value);
    }

    return getFallbackProvinceCoordinates(option.value);
  }

  async function applyCoordinates() {
    const province = provinceSelect.value;
    const district = districtSelect.value;
    const neighborhood = neighborhoodSelect.value;

    if (!province) {
      return;
    }

    let coordinates = await ensureProvinceCoordinates();
    let statusLabel = province;

    if (province && district && neighborhood) {
      try {
        const neighborhoodCoordinates = await fetchNeighborhoodCoordinates(province, district, neighborhood);
        if (neighborhoodCoordinates) {
          coordinates = neighborhoodCoordinates;
          statusLabel = `${province} / ${district} / ${neighborhood}`;
        }
      } catch (_error) {
        const fallbackNode = FALLBACK_LOCATION_TREE[province]?.[district]?.[neighborhood];
        if (fallbackNode) {
          coordinates = fallbackNode;
          statusLabel = `${province} / ${district} / ${neighborhood}`;
        }
      }
    }

    latitudeInput.value = coordinates.latitude.toFixed(4);
    longitudeInput.value = coordinates.longitude.toFixed(4);
    setStatus(`${statusLabel} koordinatları uygulandı.`, false);
  }

  function createUtcDate() {
    if (!dateInput.value || !timeInput.value) {
      return null;
    }

    const [year, month, day] = dateInput.value.split("-").map(Number);
    const [hours, minutes] = timeInput.value.split(":").map(Number);
    const timezoneHours = Number(timezoneInput.value || 0);

    if (
      !Number.isFinite(year) ||
      !Number.isFinite(month) ||
      !Number.isFinite(day) ||
      !Number.isFinite(hours) ||
      !Number.isFinite(minutes) ||
      !Number.isFinite(timezoneHours)
    ) {
      return null;
    }

    return new Date(Date.UTC(year, month - 1, day, hours - timezoneHours, minutes, 0));
  }

  function julianDay(date) {
    return date.getTime() / 86400000 + 2440587.5;
  }

  function meanObliquity(date) {
    const tValue = (julianDay(date) - 2451545.0) / 36525;
    return 23.439291 - 0.0130042 * tValue;
  }

  function gmstDegrees(date) {
    const jd = julianDay(date);
    const tValue = (jd - 2451545.0) / 36525;
    return normalizeDegrees(
      280.46061837 +
        360.98564736629 * (jd - 2451545.0) +
        0.000387933 * tValue * tValue -
        (tValue * tValue * tValue) / 38710000,
    );
  }

  function radians(value) {
    return (value * Math.PI) / 180;
  }

  function degrees(value) {
    return (value * 180) / Math.PI;
  }

  function calculateMidheaven(lstDegrees, obliquityDegrees) {
    const lst = radians(lstDegrees);
    const obliquity = radians(obliquityDegrees);
    const longitude = Math.atan2(Math.sin(lst) * Math.cos(obliquity), Math.cos(lst));
    return normalizeDegrees(degrees(longitude));
  }

  function calculateAscendant(lstDegrees, latitudeDegrees, obliquityDegrees) {
    const lst = radians(lstDegrees);
    const latitude = radians(latitudeDegrees);
    const obliquity = radians(obliquityDegrees);
    const longitude = Math.atan2(
      -Math.cos(lst),
      Math.sin(lst) * Math.cos(obliquity) + Math.tan(latitude) * Math.sin(obliquity),
    );
    return normalizeDegrees(degrees(longitude) + 180);
  }

  function getPlanetLongitude(body, time) {
    if (!window.Astronomy) {
      throw new Error("Astronomy Engine yüklenemedi.");
    }

    if (body === "Sun") {
      return normalizeDegrees(window.Astronomy.SunPosition(time).elon);
    }

    if (body === "Moon") {
      const moon = window.Astronomy.EclipticGeoMoon(time);
      return normalizeDegrees(moon.lon ?? moon.elon);
    }

    const vector = window.Astronomy.GeoVector(body, time, false);
    const ecliptic = window.Astronomy.Ecliptic(vector);
    return normalizeDegrees(ecliptic.elon ?? ecliptic.lon);
  }

  function getDaysSinceEpoch(date) {
    return (date.getTime() - Date.UTC(2000, 0, 1, 12, 0, 0)) / (24 * 60 * 60 * 1000);
  }

  function getApproxPointDegree(date, pointConfig) {
    const days = getDaysSinceEpoch(date);
    const wave = Math.sin((2 * Math.PI * days) / pointConfig.cycle) * pointConfig.wobble;
    return normalizeDegrees(pointConfig.base + days * pointConfig.speed + wave);
  }

  function getPartOfFortune(sunDegree, moonDegree, ascDegree, isDayChart) {
    return normalizeDegrees(isDayChart ? ascDegree + moonDegree - sunDegree : ascDegree + sunDegree - moonDegree);
  }

  function distributeWheelBodies(bodies, minimumGap = 5.4) {
    if (bodies.length < 2) {
      return bodies.map((body) => ({ ...body, plotDegree: body.degree }));
    }

    const sorted = bodies
      .map((body, index) => ({ ...body, originalIndex: index }))
      .sort((left, right) => left.degree - right.degree);

    let breakIndex = 0;
    let largestGap = -1;
    for (let index = 0; index < sorted.length; index += 1) {
      const current = sorted[index].degree;
      const next = sorted[(index + 1) % sorted.length].degree;
      const gap = normalizeDegrees(next - current);
      if (gap > largestGap) {
        largestGap = gap;
        breakIndex = (index + 1) % sorted.length;
      }
    }

    const rotated = [...sorted.slice(breakIndex), ...sorted.slice(0, breakIndex)].map((body, index) => ({
      ...body,
      unwrappedDegree: index < sorted.length - breakIndex ? body.degree : body.degree + 360,
    }));

    const assigned = [rotated[0].unwrappedDegree];
    for (let index = 1; index < rotated.length; index += 1) {
      assigned[index] = Math.max(rotated[index].unwrappedDegree, assigned[index - 1] + minimumGap);
    }

    const spanLimit = 360 - minimumGap;
    const span = assigned[assigned.length - 1] - assigned[0];
    if (span > spanLimit) {
      const overflow = span - spanLimit;
      for (let index = 0; index < assigned.length; index += 1) {
        const ratio = assigned.length === 1 ? 0 : index / (assigned.length - 1);
        assigned[index] -= overflow * ratio;
      }
    }

    return rotated
      .map((body, index) => ({
        ...body,
        plotDegree: normalizeDegrees(assigned[index]),
      }))
      .sort((left, right) => left.originalIndex - right.originalIndex);
  }

  function renderPlanetGrid(time) {
    const fragment = document.createDocumentFragment();

    PLANETS.forEach((planet) => {
      const longitude = getPlanetLongitude(planet.key, time);
      const card = document.createElement("article");
      card.className = "other-result-card";

      const label = document.createElement("p");
      label.className = "other-result-label";
      label.textContent = planet.label;

      const value = document.createElement("p");
      value.className = "other-result-value";
      value.textContent = degreesToSign(longitude);

      card.append(label, value);
      fragment.append(card);
    });

    planetGrid.innerHTML = "";
    planetGrid.append(fragment);
  }

  function getEqualHouseCusps(ascendant) {
    return HOUSE_LABELS.map((_label, index) => normalizeDegrees(ascendant - index * 30));
  }

  function renderHouseGrid(ascendant) {
    const fragment = document.createDocumentFragment();
    const houseCusps = getEqualHouseCusps(ascendant);

    houseCusps.forEach((cusp, index) => {
      const card = document.createElement("article");
      card.className = "other-result-card";

      const label = document.createElement("p");
      label.className = "other-result-label";
      label.textContent = HOUSE_LABELS[index];

      const value = document.createElement("p");
      value.className = "other-result-value";
      value.textContent = degreesToSign(cusp);

      card.append(label, value);
      fragment.append(card);
    });

    houseGrid.innerHTML = "";
    houseGrid.append(fragment);
  }

  function renderSolarWheel(planets, extendedBodies, ascendant, midheaven) {
    const cx = 260;
    const cy = 260;
    const outerRadius = 238;
    const tickOuterRadius = 234;
    const tickInnerMinorRadius = 228;
    const tickInnerMediumRadius = 224;
    const tickInnerMajorRadius = 218;
    const signBandOuterRadius = 226;
    const signBandInnerRadius = 152;
    const houseBandOuterRadius = 138;
    const houseBandInnerRadius = 124;
    const aspectRadius = 108;
    const labelOrbitPrimary = 196;
    const labelOrbitSecondary = 186;
    const markerOrbit = 170;
    const zodiacWheelAngle = (zodiacDegree) => normalizeDegrees(zodiacDegree - ascendant + 270);
    const houseWheelAngle = (houseIndex) => normalizeDegrees(270 - houseIndex * 30);

    const tickMarkup = Array.from({ length: 360 }, (_, index) => {
      const angle = zodiacWheelAngle(index);
      const major = index % 30 === 0;
      const medium = !major && index % 10 === 0;
      const outer = polarToCartesian(cx, cy, tickOuterRadius, angle);
      const inner = polarToCartesian(
        cx,
        cy,
        major ? tickInnerMajorRadius : medium ? tickInnerMediumRadius : tickInnerMinorRadius,
        angle,
      );
      return `
        <line
          class="rising-wheel-tick${major ? " is-major" : medium ? " is-medium" : ""}"
          x1="${inner.x.toFixed(2)}"
          y1="${inner.y.toFixed(2)}"
          x2="${outer.x.toFixed(2)}"
          y2="${outer.y.toFixed(2)}"
        />
      `;
    }).join("");

    const signMarkup = SIGNS.map((sign, index) => {
      const startAngle = zodiacWheelAngle(index * 30);
      const lineOuter = polarToCartesian(cx, cy, signBandOuterRadius, startAngle);
      const lineInner = polarToCartesian(cx, cy, signBandInnerRadius, startAngle);
      const labelPoint = polarToCartesian(cx, cy, 247, zodiacWheelAngle(index * 30 + 15));
      const degreePoint = polarToCartesian(cx, cy, 221, zodiacWheelAngle(index * 30 + 2));
      return `
        <line class="rising-wheel-sign-divider" x1="${lineInner.x.toFixed(2)}" y1="${lineInner.y.toFixed(2)}" x2="${lineOuter.x.toFixed(2)}" y2="${lineOuter.y.toFixed(2)}" />
        <g class="rising-wheel-sign-hit" data-wheel-label="${sign}" tabindex="0">
          <text class="rising-wheel-sign" fill="${SIGN_COLORS[index]}" x="${labelPoint.x.toFixed(2)}" y="${labelPoint.y.toFixed(2)}">${ZODIAC_GLYPHS[index]}</text>
        </g>
        <text class="rising-wheel-degree" x="${degreePoint.x.toFixed(2)}" y="${degreePoint.y.toFixed(2)}">00°</text>
      `;
    }).join("");

    const houseMarkup = Array.from({ length: 12 }, (_, index) => {
      const angle = houseWheelAngle(index);
      const inner = polarToCartesian(cx, cy, houseBandInnerRadius, angle);
      const outer = polarToCartesian(cx, cy, houseBandOuterRadius, angle);
      const label = polarToCartesian(cx, cy, 144, normalizeDegrees(houseWheelAngle(index) - 15));
      return `
        <line class="rising-wheel-house-line" x1="${inner.x.toFixed(2)}" y1="${inner.y.toFixed(2)}" x2="${outer.x.toFixed(2)}" y2="${outer.y.toFixed(2)}" />
        <text class="rising-wheel-house-label" x="${label.x.toFixed(2)}" y="${label.y.toFixed(2)}">${index + 1}</text>
      `;
    }).join("");

    const aspectLines = [];
    planets.slice(0, 7).forEach((left, leftIndex) => {
      planets.slice(leftIndex + 1, 7).forEach((right) => {
        const aspect = getMajorAspect(left.degree, right.degree, 4.5);
        if (!aspect) {
          return;
        }

        const leftPoint = polarToCartesian(cx, cy, aspectRadius, zodiacWheelAngle(left.degree));
        const rightPoint = polarToCartesian(cx, cy, aspectRadius, zodiacWheelAngle(right.degree));
        aspectLines.push(`
          <line
            class="rising-wheel-aspect aspect-${aspect.key}"
            x1="${leftPoint.x.toFixed(2)}"
            y1="${leftPoint.y.toFixed(2)}"
            x2="${rightPoint.x.toFixed(2)}"
            y2="${rightPoint.y.toFixed(2)}"
          />
        `);
      });
    });

    const plottedBodies = distributeWheelBodies([
      ...planets.map((planet) => ({ ...planet, primary: true })),
      ...extendedBodies.map((body) => ({ ...body, primary: false })),
    ]);

    const planetMarkup = plottedBodies.map((planet) => {
      const markerPoint = polarToCartesian(cx, cy, markerOrbit, zodiacWheelAngle(planet.degree));
      const labelPoint = polarToCartesian(
        cx,
        cy,
        planet.primary ? labelOrbitPrimary : labelOrbitSecondary,
        zodiacWheelAngle(planet.plotDegree),
      );
      const plottedAngle = zodiacWheelAngle(planet.plotDegree);
      const angleRadians = ((plottedAngle - 90) * Math.PI) / 180;
      const xDirection = Math.cos(angleRadians);
      const anchor = Math.abs(xDirection) < 0.2 ? "middle" : xDirection > 0 ? "start" : "end";
      const lineXOffset = anchor === "start" ? 8 : anchor === "end" ? -8 : 0;
      const glyphY = labelPoint.y;
      const hasOffset = Math.abs(normalizeDegrees(planet.plotDegree - planet.degree)) > 1.25;
      return `
        <g class="rising-wheel-planet-hit" data-wheel-label="${planet.label} · ${degreesToSign(planet.degree)}" tabindex="0">
          <circle class="rising-wheel-planet-marker" cx="${markerPoint.x.toFixed(2)}" cy="${markerPoint.y.toFixed(2)}" r="${planet.primary ? "2.4" : "1.8"}" />
          ${
            hasOffset
              ? `<line class="rising-wheel-planet-link" x1="${markerPoint.x.toFixed(2)}" y1="${markerPoint.y.toFixed(2)}" x2="${labelPoint.x.toFixed(2)}" y2="${labelPoint.y.toFixed(2)}" />`
              : ""
          }
          <text class="rising-wheel-planet-label${planet.primary ? "" : " is-secondary"}" text-anchor="${anchor}" x="${(labelPoint.x + lineXOffset).toFixed(2)}" y="${glyphY.toFixed(2)}">${PLANET_GLYPHS[planet.key] ?? planet.short}</text>
        </g>
      `;
    }).join("");

    const ascAngle = zodiacWheelAngle(ascendant);
    const dscAngle = zodiacWheelAngle(normalizeDegrees(ascendant + 180));
    const mcAngle = zodiacWheelAngle(midheaven);
    const ascInner = polarToCartesian(cx, cy, 60, ascAngle);
    const ascOuter = polarToCartesian(cx, cy, outerRadius, ascAngle);
    const dscInner = polarToCartesian(cx, cy, 60, dscAngle);
    const dscOuter = polarToCartesian(cx, cy, outerRadius, dscAngle);
    const mcInner = polarToCartesian(cx, cy, 60, mcAngle);
    const mcOuter = polarToCartesian(cx, cy, outerRadius, mcAngle);

    solarWheelNode.innerHTML = `
      <div class="rising-wheel-shell birth-solar-wheel-shell">
        <svg viewBox="0 0 520 520" role="img" aria-label="Doğum haritası çemberi">
          <circle class="rising-wheel-ring outer-dial" cx="${cx}" cy="${cy}" r="${outerRadius}" />
          <circle class="rising-wheel-ring sign-band" cx="${cx}" cy="${cy}" r="${signBandOuterRadius}" />
          <circle class="rising-wheel-ring sign-band-cut" cx="${cx}" cy="${cy}" r="${signBandInnerRadius}" />
          <circle class="rising-wheel-ring house-band" cx="${cx}" cy="${cy}" r="${houseBandOuterRadius}" />
          <circle class="rising-wheel-ring house-band-cut" cx="${cx}" cy="${cy}" r="${houseBandInnerRadius}" />
          <circle class="rising-wheel-ring center-core" cx="${cx}" cy="${cy}" r="${aspectRadius}" />
          <g class="rising-wheel-tick-group">${tickMarkup}</g>
          <g class="rising-wheel-sign-group">${signMarkup}</g>
          <g class="rising-wheel-house-group">${houseMarkup}</g>
          <g class="rising-wheel-aspect-group">${aspectLines.join("")}</g>
          <line class="rising-wheel-axis asc" x1="${ascInner.x.toFixed(2)}" y1="${ascInner.y.toFixed(2)}" x2="${ascOuter.x.toFixed(2)}" y2="${ascOuter.y.toFixed(2)}" />
          <line class="rising-wheel-axis dsc" x1="${dscInner.x.toFixed(2)}" y1="${dscInner.y.toFixed(2)}" x2="${dscOuter.x.toFixed(2)}" y2="${dscOuter.y.toFixed(2)}" />
          <line class="rising-wheel-axis mc" x1="${mcInner.x.toFixed(2)}" y1="${mcInner.y.toFixed(2)}" x2="${mcOuter.x.toFixed(2)}" y2="${mcOuter.y.toFixed(2)}" />
          <g class="rising-wheel-planets">${planetMarkup}</g>
          <g class="rising-wheel-axis-hit" data-wheel-label="Yükselen (ASC)" tabindex="0">
            <text class="rising-wheel-axis-label" x="${ascOuter.x.toFixed(2)}" y="${ascOuter.y.toFixed(2)}">ASC</text>
          </g>
          <g class="rising-wheel-axis-hit" data-wheel-label="Alçalan" tabindex="0">
            <text class="rising-wheel-axis-label" x="${dscOuter.x.toFixed(2)}" y="${dscOuter.y.toFixed(2)}">DSC</text>
          </g>
          <g class="rising-wheel-axis-hit" data-wheel-label="Midheaven" tabindex="0">
            <text class="rising-wheel-axis-label" x="${mcOuter.x.toFixed(2)}" y="${mcOuter.y.toFixed(2)}">MC</text>
          </g>
        </svg>
        <div class="birth-solar-wheel-tooltip" data-birth-wheel-tooltip></div>
      </div>
    `;

    const shell = solarWheelNode.querySelector(".birth-solar-wheel-shell");
    const tooltip = solarWheelNode.querySelector("[data-birth-wheel-tooltip]");
    const hoverTargets = solarWheelNode.querySelectorAll("[data-wheel-label]");

    if (!(shell instanceof HTMLElement) || !(tooltip instanceof HTMLElement)) {
      return;
    }

    const hideTooltip = () => {
      tooltip.classList.remove("is-visible");
    };

    const showTooltip = (label, clientX, clientY) => {
      const shellRect = shell.getBoundingClientRect();
      tooltip.textContent = label;
      tooltip.style.left = `${clientX - shellRect.left + 10}px`;
      tooltip.style.top = `${clientY - shellRect.top - 10}px`;
      tooltip.classList.add("is-visible");
    };

    hoverTargets.forEach((target) => {
      const label = target.getAttribute("data-wheel-label");
      if (!label) {
        return;
      }

      target.addEventListener("mouseenter", (event) => {
        showTooltip(label, event.clientX, event.clientY);
      });

      target.addEventListener("mousemove", (event) => {
        showTooltip(label, event.clientX, event.clientY);
      });

      target.addEventListener("mouseleave", hideTooltip);
      target.addEventListener("focus", () => {
        const rect = target.getBoundingClientRect();
        showTooltip(label, rect.left + rect.width / 2, rect.top);
      });
      target.addEventListener("blur", hideTooltip);
    });
  }

  function renderSolarAnalysis(planets, extendedBodies, ascendant, midheaven, houseCusps) {
    const primaryBodies = [
      ...planets,
      { key: "Ascendant", label: "Yükselen", short: "AC", degree: ascendant },
      { key: "Midheaven", label: "Midheaven", short: "MC", degree: midheaven },
    ];
    const listBodies = [
      ...planets,
      ...extendedBodies,
      { key: "Ascendant", label: "Yükselen", short: "AC", degree: ascendant },
      { key: "Midheaven", label: "Midheaven", short: "MC", degree: midheaven },
    ];
    const matrixBodies = listBodies;

    const matrixRows = matrixBodies.map((rowBody, rowIndex) => {
      const cells = matrixBodies.slice(0, rowIndex + 1).map((colBody, colIndex) => {
        if (colIndex === rowIndex) {
          return `<td class="is-label" data-label="${rowBody.label}">${PLANET_GLYPHS[rowBody.key] ?? rowBody.short}</td>`;
        }

        const aspect = getMajorAspect(rowBody.degree, colBody.degree, 5);
        if (!aspect) {
          return '<td class="is-empty"></td>';
        }

        return `<td class="aspect-${aspect.key}" title="${rowBody.label} - ${colBody.label} ${aspect.label}">${ASPECT_SYMBOLS[aspect.key] ?? "•"}</td>`;
      }).join("");

      return `
        <tr>
          ${cells}
        </tr>
      `;
    }).join("");

    const legendMarkup = ASPECTS.map((aspect) => `
      <span class="rising-aspect-legend-item">
        <span class="rising-aspect-legend-symbol aspect-${aspect.key}">${ASPECT_SYMBOLS[aspect.key] ?? aspect.label}</span>
        <span class="rising-aspect-legend-text">${aspect.label}</span>
      </span>
    `).join("");

    const listMarkup = `
      <div class="birth-solar-body-head">
        <span></span>
        <span>Gezegen</span>
        <span></span>
        <span>Boylam</span>
        <span>Ev</span>
      </div>
      ${listBodies.map((body) => `
        <div class="birth-solar-body-row">
          <span class="birth-solar-body-glyph">${PLANET_GLYPHS[body.key] ?? body.short}</span>
          <span class="birth-solar-body-name">${body.label}</span>
          <span class="birth-solar-sign-glyph">${ZODIAC_GLYPHS[Math.floor(normalizeDegrees(body.degree) / 30)]}</span>
          <span class="birth-solar-body-value">${degreesToSign(body.degree)}</span>
          <span class="birth-solar-body-house">${getHouseNumberForDegree(body.degree, houseCusps)}</span>
        </div>
      `).join("")}
    `;

    solarAnalysisNode.innerHTML = `
      <section class="birth-solar-analysis-shell">
        <div class="birth-solar-analysis-top">
          <div class="birth-solar-matrix-block">
            <div class="rising-aspect-legend birth-solar-legend">
              ${legendMarkup}
            </div>
            <div class="rising-aspect-table-wrap">
              <table class="rising-aspect-table birth-solar-aspect-table">
                <tbody>
                  ${matrixRows}
                </tbody>
              </table>
            </div>
          </div>

          <div class="birth-solar-side-block">
            <div class="birth-solar-body-list">
              ${listMarkup}
            </div>
          </div>
        </div>

      </section>
    `;
  }

  function renderPersonalPlanetTable(planets, houseCusps) {
    if (!(personalPlanetsNode instanceof HTMLElement)) {
      return;
    }

    const rows = planets
      .filter((body) => ["Sun", "Moon", "Mercury", "Venus", "Mars"].includes(body.key))
      .map((body) => {
        const normalized = normalizeDegrees(body.degree);
        const signIndex = Math.floor(normalized / 30);
        const withinSign = normalized % 30;
        const degree = Math.floor(withinSign);
        const minute = Math.round((withinSign - degree) * 60);
        const normalizedMinute = minute === 60 ? 0 : minute;
        const normalizedDegree = minute === 60 ? degree + 1 : degree;

        return `
          <tr>
            <td>
              <span class="birth-personal-planet-name">
                <span class="birth-personal-planet-glyph">${PLANET_GLYPHS[body.key] ?? body.short}</span>
                <span>${body.label}</span>
              </span>
            </td>
            <td>
              <span class="birth-personal-sign-chip">
                <span class="birth-personal-sign-glyph">${ZODIAC_GLYPHS[signIndex]}</span>
                <span>${SIGNS[signIndex]}</span>
              </span>
            </td>
            <td>${normalizedDegree}° ${pad(normalizedMinute)}′</td>
            <td>${getHouseNumberForDegree(body.degree, houseCusps)}. Ev</td>
          </tr>
        `;
      })
      .join("");

    personalPlanetsNode.innerHTML = rows;
  }

  function resetPersonalPlanetTable() {
    if (!(personalPlanetsNode instanceof HTMLElement)) {
      return;
    }

    personalPlanetsNode.innerHTML = `
      <tr>
        <td colspan="4">Hesaplama sonrası kişisel gezegen konumları burada görünür.</td>
      </tr>
    `;
  }

  function setStatus(message, isError) {
    if (!(statusNode instanceof HTMLElement)) {
      return;
    }

    statusNode.textContent = message;
    statusNode.classList.toggle("other-error", Boolean(isError));
  }

  function setResult(node, value) {
    if (node) {
      node.textContent = value;
    }
  }

  function calculateChart() {
    const date = createUtcDate();
    const latitude = Number(latitudeInput.value);
    const longitude = Number(longitudeInput.value);

    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      setStatus("Geçerli doğum tarihi ve saati gir.", true);
      setInterpretation({ sunText: "", moonText: "", ascText: "" });
      solarWheelNode.innerHTML = "";
      solarAnalysisNode.innerHTML = "";
      resetPersonalPlanetTable();
      return;
    }

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      setStatus("Geçerli enlem ve boylam gir.", true);
      setInterpretation({ sunText: "", moonText: "", ascText: "" });
      solarWheelNode.innerHTML = "";
      solarAnalysisNode.innerHTML = "";
      resetPersonalPlanetTable();
      return;
    }

    try {
      const obliquity = meanObliquity(date);
      const lst = normalizeDegrees(gmstDegrees(date) + longitude);
      const ascendant = calculateAscendant(lst, latitude, obliquity);
      const midheaven = calculateMidheaven(lst, obliquity);
      const houseCusps = getDetailedHouseCusps(ascendant);
      const detailPlanets = DETAIL_BODIES.map((body) => ({
        ...body,
        degree: getPlanetLongitude(body.key, date),
      }));
      const northNodeDegree = getApproxPointDegree(date, {
        base: 125.4,
        speed: -0.05295,
        wobble: 1.5,
        cycle: 6798,
      });
      const isDayChart = true;
      const extendedBodies = [
        ...DETAIL_EXTRA_BODIES.map((body) => ({
          key: body.key,
          label: body.label,
          short: body.short,
          degree: getApproxPointDegree(date, body),
        })),
        {
          key: "NorthNode",
          label: "NorthNode",
          short: "NN",
          degree: northNodeDegree,
        },
        {
          key: "SouthNode",
          label: "SouthNode",
          short: "SN",
          degree: normalizeDegrees(northNodeDegree + 180),
        },
        {
          key: "Fortune",
          label: "P. of Fortune",
          short: "PF",
          degree: getPartOfFortune(detailPlanets[0].degree, detailPlanets[1].degree, ascendant, isDayChart),
        },
        {
          key: "Vertex",
          label: "Vertex",
          short: "VX",
          degree: normalizeDegrees(ascendant + 150),
        },
      ];

      const sunText = degreesToSign(getPlanetLongitude("Sun", date));
      const moonText = degreesToSign(getPlanetLongitude("Moon", date));
      const ascText = degreesToSign(ascendant);
      const mcText = degreesToSign(midheaven);

      setResult(resultNodes.sun, sunText);
      setResult(resultNodes.moon, moonText);
      setResult(resultNodes.ascendant, ascText);
      setResult(resultNodes.midheaven, mcText);
      setInterpretation({ sunText, moonText, ascText });
      renderSolarWheel(detailPlanets, extendedBodies, ascendant, midheaven);
      renderSolarAnalysis(detailPlanets, extendedBodies, ascendant, midheaven, houseCusps);
      renderPersonalPlanetTable(detailPlanets, houseCusps);
      setStatus("Doğum haritası yerleşimleri hesaplandı.", false);
    } catch (error) {
      const detail = error instanceof Error ? error.message : "";
      if (detail === "Astronomy Engine yüklenemedi.") {
        setStatus("Doğum haritası kütüphanesi yüklenemedi. Sayfayı yenileyip tekrar dene.", true);
        setInterpretation({ sunText: "", moonText: "", ascText: "" });
        solarWheelNode.innerHTML = "";
        solarAnalysisNode.innerHTML = "";
        resetPersonalPlanetTable();
        return;
      }

      setStatus("Hesaplama yapılamadı. Bilgileri kontrol edip tekrar dene.", true);
      setInterpretation({ sunText: "", moonText: "", ascText: "" });
      solarWheelNode.innerHTML = "";
      solarAnalysisNode.innerHTML = "";
      resetPersonalPlanetTable();
    }
  }

  provinceSelect.addEventListener("change", async () => {
    await populateDistricts(provinceSelect.value);
    setSelectOptions(neighborhoodSelect, [], "Mahalle seçiniz");
    neighborhoodSelect.disabled = true;
    districtSelect.value = districtSelect.options[1]?.value ?? "";
    if (districtSelect.value) {
      await populateNeighborhoods(provinceSelect.value, districtSelect.value);
      neighborhoodSelect.value = neighborhoodSelect.options[1]?.value ?? "";
    }
    await applyCoordinates();
    calculateChart();
    setStatus("İl seçildi. İlçe ve mahalle listesi güncellendi.", false);
  });

  districtSelect.addEventListener("change", async () => {
    await populateNeighborhoods(provinceSelect.value, districtSelect.value);
    neighborhoodSelect.value = neighborhoodSelect.options[1]?.value ?? "";
    await applyCoordinates();
    calculateChart();
    setStatus("İlçe seçildi. Mahalle listesi güncellendi.", false);
  });

  neighborhoodSelect.addEventListener("change", async () => {
    await applyCoordinates();
    calculateChart();
  });

  [dateInput, timeInput, latitudeInput, longitudeInput, timezoneInput].forEach((input) => {
    input.addEventListener("change", calculateChart);
  });

  if (calculateButton instanceof HTMLButtonElement) {
    calculateButton.addEventListener("click", calculateChart);
  }

  await populateProvinces();
  const savedProfile = getSavedBirthProfile();

  if (savedProfile) {
    provinceSelect.value = savedProfile.city || DEFAULT_PROVINCE;
    dateInput.value = savedProfile.birthDate ?? "";
    timeInput.value = savedProfile.timeUnknown ? "" : savedProfile.birthTime ?? "";
    if (!dateInput.value || !timeInput.value) {
      const now = new Date();
      const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
      if (!dateInput.value) {
        dateInput.value = local.toISOString().slice(0, 10);
      }
      if (!timeInput.value) {
        timeInput.value = `${pad(local.getHours())}:${pad(local.getMinutes())}`;
      }
    }
    if (!timezoneInput.value) {
      timezoneInput.value = "3";
    }
    await populateDistricts(provinceSelect.value);
    districtSelect.value = savedProfile.district || districtSelect.options[1]?.value || DEFAULT_DISTRICT;
    await populateNeighborhoods(provinceSelect.value, districtSelect.value);
    neighborhoodSelect.value = savedProfile.neighborhood || neighborhoodSelect.options[1]?.value || DEFAULT_NEIGHBORHOOD;
  } else {
    setDefaults();
    provinceSelect.value = DEFAULT_PROVINCE;
    await populateDistricts(DEFAULT_PROVINCE);
    districtSelect.value = DEFAULT_DISTRICT;
    await populateNeighborhoods(DEFAULT_PROVINCE, DEFAULT_DISTRICT);
    neighborhoodSelect.value = DEFAULT_NEIGHBORHOOD;
  }

  await applyCoordinates();
  calculateChart();
  injectAlternateBirthProfileBox();
})();
