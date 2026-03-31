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
  const planetGrid = document.querySelector("[data-birth-planet-grid]");

  const resultNodes = {
    sun: document.querySelector("[data-birth-sun]"),
    moon: document.querySelector("[data-birth-moon]"),
    ascendant: document.querySelector("[data-birth-ascendant]"),
    midheaven: document.querySelector("[data-birth-midheaven]"),
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
    !(calculateButton instanceof HTMLButtonElement) ||
    !(statusNode instanceof HTMLElement) ||
    !(planetGrid instanceof HTMLElement)
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

  async function fetchApiData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const payload = await response.json();
    return payload?.data;
  }

  async function fetchAllProvinces() {
    if (apiCache.provinces) {
      return apiCache.provinces;
    }

    const provinces = await fetchApiData(`${TURKIYE_API_BASE}/provinces?fields=id,name&limit=100`);
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

    const districts = await fetchApiData(
      `${TURKIYE_API_BASE}/districts?provinceId=${encodeURIComponent(provinceId)}&fields=id,name&limit=1000`,
    );
    const normalized = Array.isArray(districts) ? districts : [];
    apiCache.districts.set(provinceId, normalized);
    return normalized;
  }

  async function fetchNeighborhoodsByDistrictId(districtId) {
    if (apiCache.neighborhoods.has(districtId)) {
      return apiCache.neighborhoods.get(districtId);
    }

    const neighborhoods = await fetchApiData(
      `${TURKIYE_API_BASE}/neighborhoods?districtId=${encodeURIComponent(districtId)}&fields=id,name&limit=10000`,
    );
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
    return normalizeDegrees(degrees(longitude));
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

  function setStatus(message, isError) {
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
      return;
    }

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      setStatus("Geçerli enlem ve boylam gir.", true);
      return;
    }

    try {
      const obliquity = meanObliquity(date);
      const lst = normalizeDegrees(gmstDegrees(date) + longitude);
      const ascendant = calculateAscendant(lst, latitude, obliquity);
      const midheaven = calculateMidheaven(lst, obliquity);

      setResult(resultNodes.sun, degreesToSign(getPlanetLongitude("Sun", date)));
      setResult(resultNodes.moon, degreesToSign(getPlanetLongitude("Moon", date)));
      setResult(resultNodes.ascendant, degreesToSign(ascendant));
      setResult(resultNodes.midheaven, degreesToSign(midheaven));

      renderPlanetGrid(date);
      setStatus("Doğum haritası yerleşimleri hesaplandı.", false);
    } catch (error) {
      const detail = error instanceof Error ? error.message : "";
      if (detail === "Astronomy Engine yüklenemedi.") {
        setStatus("Doğum haritası kütüphanesi yüklenemedi. Sayfayı yenileyip tekrar dene.", true);
        return;
      }

      setStatus("Hesaplama yapılamadı. Bilgileri kontrol edip tekrar dene.", true);
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

  calculateButton.addEventListener("click", calculateChart);

  setDefaults();
  await populateProvinces();
  provinceSelect.value = DEFAULT_PROVINCE;
  await populateDistricts(DEFAULT_PROVINCE);
  districtSelect.value = DEFAULT_DISTRICT;
  await populateNeighborhoods(DEFAULT_PROVINCE, DEFAULT_DISTRICT);
  neighborhoodSelect.value = DEFAULT_NEIGHBORHOOD;
  await applyCoordinates();
  calculateChart();
})();
