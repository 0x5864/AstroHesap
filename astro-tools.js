const CITY_DATA = {
  istanbul: { label: "İstanbul", latitude: 41.0082, longitude: 28.9784 },
  ankara: { label: "Ankara", latitude: 39.9334, longitude: 32.8597 },
  izmir: { label: "İzmir", latitude: 38.4237, longitude: 27.1428 },
  antalya: { label: "Antalya", latitude: 36.8969, longitude: 30.7133 },
  adana: { label: "Adana", latitude: 37.0, longitude: 35.3213 },
  adiyaman: { label: "Adıyaman", latitude: 37.7648, longitude: 38.2786 },
  afyonkarahisar: { label: "Afyonkarahisar", latitude: 38.7569, longitude: 30.5387 },
  agri: { label: "Ağrı", latitude: 39.7191, longitude: 43.0503 },
  amasya: { label: "Amasya", latitude: 40.6565, longitude: 35.8373 },
  artvin: { label: "Artvin", latitude: 41.1828, longitude: 41.8183 },
  aydin: { label: "Aydın", latitude: 37.8560, longitude: 27.8416 },
  balikesir: { label: "Balıkesir", latitude: 39.6484, longitude: 27.8826 },
  bilecik: { label: "Bilecik", latitude: 40.1431, longitude: 29.9793 },
  bingol: { label: "Bingöl", latitude: 38.8854, longitude: 40.4983 },
  bitlis: { label: "Bitlis", latitude: 38.4012, longitude: 42.1085 },
  bolu: { label: "Bolu", latitude: 40.7395, longitude: 31.6116 },
  burdur: { label: "Burdur", latitude: 37.7203, longitude: 30.2908 },
  bursa: { label: "Bursa", latitude: 40.1950, longitude: 29.0600 },
  canakkale: { label: "Çanakkale", latitude: 40.1467, longitude: 26.4086 },
  cankiri: { label: "Çankırı", latitude: 40.6013, longitude: 33.6134 },
  corum: { label: "Çorum", latitude: 40.5506, longitude: 34.9556 },
  denizli: { label: "Denizli", latitude: 37.7765, longitude: 29.0864 },
  diyarbakir: { label: "Diyarbakır", latitude: 37.9144, longitude: 40.2306 },
  edirne: { label: "Edirne", latitude: 41.6771, longitude: 26.5557 },
  elazig: { label: "Elazığ", latitude: 38.6810, longitude: 39.2264 },
  erzincan: { label: "Erzincan", latitude: 39.7500, longitude: 39.5000 },
  erzurum: { label: "Erzurum", latitude: 39.9043, longitude: 41.2679 },
  eskisehir: { label: "Eskişehir", latitude: 39.7667, longitude: 30.5256 },
  gaziantep: { label: "Gaziantep", latitude: 37.0662, longitude: 37.3833 },
  giresun: { label: "Giresun", latitude: 40.9128, longitude: 38.3895 },
  gumushane: { label: "Gümüşhane", latitude: 40.4603, longitude: 39.4814 },
  hakkari: { label: "Hakkari", latitude: 37.5744, longitude: 43.7408 },
  hatay: { label: "Hatay", latitude: 36.2021, longitude: 36.1600 },
  isparta: { label: "Isparta", latitude: 37.7648, longitude: 30.5566 },
  mersin: { label: "Mersin", latitude: 36.8121, longitude: 34.6415 },
  kars: { label: "Kars", latitude: 40.6013, longitude: 43.0975 },
  kastamonu: { label: "Kastamonu", latitude: 41.3887, longitude: 33.7827 },
  kayseri: { label: "Kayseri", latitude: 38.7225, longitude: 35.4875 },
  kirklareli: { label: "Kırklareli", latitude: 41.7351, longitude: 27.2252 },
  kirsehir: { label: "Kırşehir", latitude: 39.1425, longitude: 34.1709 },
  kocaeli: { label: "Kocaeli", latitude: 40.8533, longitude: 29.8815 },
  konya: { label: "Konya", latitude: 37.8746, longitude: 32.4932 },
  kutahya: { label: "Kütahya", latitude: 39.4192, longitude: 29.9857 },
  malatya: { label: "Malatya", latitude: 38.3552, longitude: 38.3095 },
  manisa: { label: "Manisa", latitude: 38.6191, longitude: 27.4289 },
  kahramanmaras: { label: "Kahramanmaraş", latitude: 37.5753, longitude: 36.9228 },
  mardin: { label: "Mardin", latitude: 37.3212, longitude: 40.7245 },
  mugla: { label: "Muğla", latitude: 37.2153, longitude: 28.3636 },
  mus: { label: "Muş", latitude: 38.7346, longitude: 41.4910 },
  nevsehir: { label: "Nevşehir", latitude: 38.6244, longitude: 34.7141 },
  nigde: { label: "Niğde", latitude: 37.9667, longitude: 34.6833 },
  ordu: { label: "Ordu", latitude: 40.9862, longitude: 37.8797 },
  rize: { label: "Rize", latitude: 41.0201, longitude: 40.5234 },
  sakarya: { label: "Sakarya", latitude: 40.7569, longitude: 30.3781 },
  samsun: { label: "Samsun", latitude: 41.2867, longitude: 36.3300 },
  siirt: { label: "Siirt", latitude: 37.9333, longitude: 41.9500 },
  sinop: { label: "Sinop", latitude: 42.0264, longitude: 35.1511 },
  sivas: { label: "Sivas", latitude: 39.7477, longitude: 37.0179 },
  tekirdag: { label: "Tekirdağ", latitude: 40.9780, longitude: 27.5110 },
  tokat: { label: "Tokat", latitude: 40.3167, longitude: 36.5500 },
  trabzon: { label: "Trabzon", latitude: 41.0015, longitude: 39.7178 },
  tunceli: { label: "Tunceli", latitude: 39.1083, longitude: 39.5471 },
  sanliurfa: { label: "Şanlıurfa", latitude: 37.1674, longitude: 38.7955 },
  usak: { label: "Uşak", latitude: 38.6823, longitude: 29.4082 },
  van: { label: "Van", latitude: 38.4891, longitude: 43.4089 },
  yozgat: { label: "Yozgat", latitude: 39.8181, longitude: 34.8147 },
  zonguldak: { label: "Zonguldak", latitude: 41.4564, longitude: 31.7987 },
  aksaray: { label: "Aksaray", latitude: 38.3687, longitude: 34.0370 },
  bayburt: { label: "Bayburt", latitude: 40.2552, longitude: 40.2249 },
  karaman: { label: "Karaman", latitude: 37.1811, longitude: 33.2150 },
  kirikkale: { label: "Kırıkkale", latitude: 39.8468, longitude: 33.5153 },
  batman: { label: "Batman", latitude: 37.8812, longitude: 41.1351 },
  sirnak: { label: "Şırnak", latitude: 37.4187, longitude: 42.4918 },
  bartin: { label: "Bartın", latitude: 41.6344, longitude: 32.3375 },
  ardahan: { label: "Ardahan", latitude: 41.1105, longitude: 42.7022 },
  igdir: { label: "Iğdır", latitude: 39.9237, longitude: 44.0450 },
  yalova: { label: "Yalova", latitude: 40.6550, longitude: 29.2769 },
  karabuk: { label: "Karabük", latitude: 41.2061, longitude: 32.6204 },
  kilis: { label: "Kilis", latitude: 36.7184, longitude: 37.1212 },
  osmaniye: { label: "Osmaniye", latitude: 37.0742, longitude: 36.2478 },
  duzce: { label: "Düzce", latitude: 40.8438, longitude: 31.1565 },
};

const CITY_LOCATION_TREE = {
  istanbul: {
    Fatih: ["Sultanahmet", "Aksaray"],
    "Kadıköy": ["Moda", "Fenerbahçe"],
    "Beşiktaş": ["Levent", "Etiler"],
  },
  ankara: {
    "Çankaya": ["Kızılay", "Gaziosmanpaşa"],
    "Keçiören": ["Etlik", "Aşağı Eğlence"],
    Yenimahalle: ["Batıkent", "Demetevler"],
  },
  izmir: {
    Konak: ["Alsancak", "Göztepe"],
    "Karşıyaka": ["Bostanlı", "Mavişehir"],
    Bornova: ["Kazımdirik", "Erzene"],
  },
  antalya: {
    "Muratpaşa": ["Lara", "Meltem"],
    "Konyaaltı": ["Liman", "Uncalı"],
    Kepez: ["Varsak", "Gültepe"],
  },
  adana: {
    Seyhan: ["Reşatbey", "Kurtuluş"],
    "Çukurova": ["Toros", "Huzurevleri"],
    Yüreğir: ["Karşılar", "Atakent"],
  },
  trabzon: {
    Ortahisar: ["Beşirli", "Yalı"],
    Akçaabat: ["Söğütlü", "Yaylacık"],
    Yomra: ["Kaşüstü", "Sancak"],
  },
};

const ZODIAC_SIGNS = [
  { name: "Koç", element: "Ateş", mode: "Öncü", index: 0 },
  { name: "Boğa", element: "Toprak", mode: "Sabit", index: 1 },
  { name: "İkizler", element: "Hava", mode: "Değişken", index: 2 },
  { name: "Yengeç", element: "Su", mode: "Öncü", index: 3 },
  { name: "Aslan", element: "Ateş", mode: "Sabit", index: 4 },
  { name: "Başak", element: "Toprak", mode: "Değişken", index: 5 },
  { name: "Terazi", element: "Hava", mode: "Öncü", index: 6 },
  { name: "Akrep", element: "Su", mode: "Sabit", index: 7 },
  { name: "Yay", element: "Ateş", mode: "Değişken", index: 8 },
  { name: "Oğlak", element: "Toprak", mode: "Öncü", index: 9 },
  { name: "Kova", element: "Hava", mode: "Sabit", index: 10 },
  { name: "Balık", element: "Su", mode: "Değişken", index: 11 },
];

const ZODIAC_BY_BOUNDARY = [
  { start: 120, sign: ZODIAC_SIGNS[10] },
  { start: 219, sign: ZODIAC_SIGNS[11] },
  { start: 321, sign: ZODIAC_SIGNS[0] },
  { start: 420, sign: ZODIAC_SIGNS[1] },
  { start: 521, sign: ZODIAC_SIGNS[2] },
  { start: 621, sign: ZODIAC_SIGNS[3] },
  { start: 723, sign: ZODIAC_SIGNS[4] },
  { start: 823, sign: ZODIAC_SIGNS[5] },
  { start: 923, sign: ZODIAC_SIGNS[6] },
  { start: 1023, sign: ZODIAC_SIGNS[7] },
  { start: 1122, sign: ZODIAC_SIGNS[8] },
  { start: 1222, sign: ZODIAC_SIGNS[9] },
];

const WEEKDAY_RULERS = [
  "Güneş",
  "Ay",
  "Mars",
  "Merkür",
  "Jüpiter",
  "Venüs",
  "Satürn",
];

const TIME_SEGMENTS = [
  { limit: 300, label: "Gece derinliği", focus: "İç dünya ve sezgi" },
  { limit: 480, label: "Şafak eşiği", focus: "Yeni başlangıçlar" },
  { limit: 720, label: "Sabah akışı", focus: "Plan ve hareket" },
  { limit: 960, label: "Öğle hattı", focus: "Görünürlük ve yön" },
  { limit: 1140, label: "Akşam geçişi", focus: "İlişki ve denge" },
  { limit: 1440, label: "Gece kapanışı", focus: "Bırakma ve dinlenme" },
];

const PHASE_DETAILS = [
  { name: "Yeni Ay", theme: "Niyet ve başlangıç" },
  { name: "Hilal", theme: "Toparlanma ve ilk adım" },
  { name: "İlk Dördün", theme: "Karar ve yön değişimi" },
  { name: "Büyüyen Ay", theme: "Büyütme ve besleme" },
  { name: "Dolunay", theme: "Görünürlük ve tamamlanma" },
  { name: "Küçülen Ay", theme: "Ayıklama ve sadeleşme" },
  { name: "Son Dördün", theme: "Düzeltme ve kapanış" },
  { name: "Balsamik Ay", theme: "Dinlenme ve bırakma" },
];

const MONTH_LABELS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const HOUSE_SYSTEM_OPTIONS = [
  { value: "placidus", label: "Placidus" },
  { value: "koch", label: "Koch" },
  { value: "regiomontanus", label: "Regiomontanus" },
  { value: "campanus", label: "Campanus" },
  { value: "equal", label: "Equal" },
  { value: "equalmc", label: "Equal (MC)" },
  { value: "equalvehlow", label: "Equal (Vehlow)" },
  { value: "whole", label: "Whole Sign" },
  { value: "solar", label: "Solar Chart" },
  { value: "meridian", label: "Meridian/Axial" },
  { value: "carter", label: "Poli-Equatorial (Carter)" },
  { value: "topocentric", label: "Topocentric" },
  { value: "morinus", label: "Morinus" },
  { value: "porphyry", label: "Porphyry" },
  { value: "alcabitius", label: "Alcabitius" },
  { value: "none", label: "Ev yok" },
];

const HOUSE_SYSTEM_LABELS = Object.fromEntries(
  HOUSE_SYSTEM_OPTIONS.map((option) => [option.value, option.label]),
);

const ZODIAC_MODE_LABELS = {
  tropical: "Tropik",
  sidereal: "Sideral",
};

const ORB_LEVEL_LABELS = {
  balanced: "Dengeli orb",
  tight: "Dar orb",
  wide: "Geniş orb",
};

const FOCUS_AREA_LABELS = {
  general: "Genel profil",
  career: "Kariyer yönü",
  relationships: "İlişki dinamiği",
  spiritual: "Ruhsal eksen",
};

const AYANAMSA_OPTIONS = [
  { value: "lahiri", label: "Lahiri", degrees: 24.1 },
  { value: "raman", label: "Raman", degrees: 22.5 },
  { value: "krishnamurti", label: "Krishnamurti", degrees: 23.9 },
  { value: "takra", label: "Takra", degrees: 23.7 },
  { value: "fagan", label: "Fagan-Bradley", degrees: 24.8 },
  { value: "deluce", label: "De Luce", degrees: 26.1 },
  { value: "larry", label: "Larry Ely", degrees: 23.9 },
  { value: "ushashashi", label: "Usha/Shashi", degrees: 22.7 },
  { value: "yukteshwar", label: "Yukteshwar", degrees: 22.7 },
  { value: "jnbhasin", label: "J.N. Bhasin", degrees: 23.6 },
  { value: "djwhalkhul", label: "Djwhal Khul", degrees: 22.0 },
  { value: "hipparchos", label: "Hipparchus", degrees: 22.0 },
  { value: "sassanian", label: "Sassanian", degrees: 24.2 },
  { value: "citra", label: "True Citra 0°Lib", degrees: 23.9 },
  { value: "mula", label: "True Mula 0°Sag", degrees: 23.5 },
  { value: "pushya", label: "True Pushya 16°Can", degrees: 23.3 },
  { value: "revati", label: "True Revati", degrees: 24.0 },
  { value: "aldebaran", label: "Aldebaran 15°Tau", degrees: 24.6 },
  { value: "galactic0", label: "Galactic Center 0°Sag", degrees: 26.7 },
  { value: "galactic", label: "Galactic Eq. 5°Sag", degrees: 21.4 },
  { value: "0", label: "0° Ayanamsa (Tropikal)", degrees: 0 },
];

const AYANAMSA_LABELS = Object.fromEntries(
  AYANAMSA_OPTIONS.map((option) => [option.value, { label: option.label, degrees: option.degrees }]),
);

const TIMEZONE_OPTIONS = [
  { value: "auto", label: "Otomatik" },
  { value: "-12", label: "Manuel: UT/GMT -12:00 [w]" },
  { value: "-11", label: "Manuel: UT/GMT -11:00 [w]" },
  { value: "-10", label: "Manuel: UT/GMT -10:00 [w]" },
  { value: "-9.5", label: "Manuel: UT/GMT -09:30 [w]" },
  { value: "-9", label: "Manuel: UT/GMT -09:00 [w]" },
  { value: "-8", label: "Manuel: UT/GMT -08:00 [w]" },
  { value: "-7", label: "Manuel: UT/GMT -07:00 [w]" },
  { value: "-6", label: "Manuel: UT/GMT -06:00 [w]" },
  { value: "-5", label: "Manuel: UT/GMT -05:00 [w]" },
  { value: "-4.5", label: "Manuel: UT/GMT -04:30 [w]" },
  { value: "-4", label: "Manuel: UT/GMT -04:00 [w]" },
  { value: "-3.5", label: "Manuel: UT/GMT -03:30 [w]" },
  { value: "-3", label: "Manuel: UT/GMT -03:00 [w]" },
  { value: "-2", label: "Manuel: UT/GMT -02:00 [w]" },
  { value: "-1", label: "Manuel: UT/GMT -01:00 [w]" },
  { value: "0", label: "Manuel: UT/GMT" },
  { value: "1", label: "Manuel: UT/GMT +01:00 [e]" },
  { value: "2", label: "Manuel: UT/GMT +02:00 [e]" },
  { value: "3", label: "Manuel: UT/GMT +03:00 [e]" },
  { value: "3.5", label: "Manuel: UT/GMT +03:30 [e]" },
  { value: "4", label: "Manuel: UT/GMT +04:00 [e]" },
  { value: "4.5", label: "Manuel: UT/GMT +04:30 [e]" },
  { value: "5", label: "Manuel: UT/GMT +05:00 [e]" },
  { value: "5.5", label: "Manuel: UT/GMT +05:30 [e]" },
  { value: "5.75", label: "Manuel: UT/GMT +05:45 [e]" },
  { value: "6", label: "Manuel: UT/GMT +06:00 [e]" },
  { value: "6.5", label: "Manuel: UT/GMT +06:30 [e]" },
  { value: "7", label: "Manuel: UT/GMT +07:00 [e]" },
  { value: "8", label: "Manuel: UT/GMT +08:00 [e]" },
  { value: "8.75", label: "Manuel: UT/GMT +08:45 [e]" },
  { value: "9", label: "Manuel: UT/GMT +09:00 [e]" },
  { value: "9.5", label: "Manuel: UT/GMT +09:30 [e]" },
  { value: "10", label: "Manuel: UT/GMT +10:00 [e]" },
  { value: "10.5", label: "Manuel: UT/GMT +10:30 [e]" },
  { value: "11", label: "Manuel: UT/GMT +11:00 [e]" },
  { value: "11.5", label: "Manuel: UT/GMT +11:30 [e]" },
  { value: "12", label: "Manuel: UT/GMT +12:00 [e]" },
  { value: "12.75", label: "Manuel: UT/GMT +12:45 [e]" },
  { value: "13", label: "Manuel: UT/GMT +13:00 [e]" },
  { value: "14", label: "Manuel: UT/GMT +14:00 [e]" },
];

const DST_MODE_LABELS = {
  auto: "Otomatik",
  1: "Gözlenen",
  0: "Gözlenmeyen",
};

const TOLERANCE_OPTIONS = [
  { value: "1", label: "Varsayılan" },
  { value: "fixed_0.5", label: "Sabit 0°30′" },
  { value: "fixed_1.0", label: "Sabit 1°00′" },
  { value: "fixed_1.5", label: "Sabit 1°30′" },
  { value: "fixed_2.0", label: "Sabit 2°00′" },
  { value: "fixed_2.5", label: "Sabit 2°30′" },
  { value: "fixed_3.0", label: "Sabit 3°00′" },
  { value: "fixed_4.0", label: "Sabit 4°00′" },
  { value: "fixed_5.0", label: "Sabit 5°00′" },
  { value: "fixed_6.0", label: "Sabit 6°00′" },
  { value: "fixed_8.0", label: "Sabit 8°00′" },
  { value: "fixed_10.0", label: "Sabit 10°00′" },
];

const TOLERANCE_LABELS = Object.fromEntries(
  TOLERANCE_OPTIONS.map((option) => [option.value, option.label]),
);

const VEDIC_FOCUS_LABELS = {
  dharma: "Dharma ekseni",
  karma: "Karma ekseni",
  relationships: "İlişki ritmi",
  career: "Kariyer hattı",
};

const READING_STYLE_LABELS = {
  balanced: "Dengeli özet",
  spiritual: "Ruhsal vurgu",
  practical: "Pratik vurgu",
};

const NAKSHATRAS = [
  "Ashwini",
  "Bharani",
  "Krittika",
  "Rohini",
  "Mrigashira",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishta",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

const EPHEMERIS_PLANETS = [
  { key: "sun", label: "Güneş", base: 280.15, speed: 0.985647, wobble: 1.2, cycle: 365.25 },
  { key: "moon", label: "Ay", base: 218.32, speed: 13.176358, wobble: 3.8, cycle: 27.32 },
  { key: "mercury", label: "Merkür", base: 60.75, speed: 4.09235, wobble: 17.4, cycle: 116 },
  { key: "venus", label: "Venüs", base: 85.12, speed: 1.60213, wobble: 8.6, cycle: 224.7 },
  { key: "mars", label: "Mars", base: 120.44, speed: 0.52402, wobble: 12.4, cycle: 687 },
  { key: "jupiter", label: "Jüpiter", base: 240.01, speed: 0.08309, wobble: 4.8, cycle: 4332.6 },
  { key: "saturn", label: "Satürn", base: 300.33, speed: 0.03346, wobble: 3.6, cycle: 10759 },
  { key: "uranus", label: "Uranüs", base: 180.28, speed: 0.01173, wobble: 1.8, cycle: 30688 },
  { key: "neptune", label: "Neptün", base: 330.12, speed: 0.00598, wobble: 1.2, cycle: 60190 },
  { key: "pluto", label: "Plüton", base: 270.45, speed: 0.00397, wobble: 1.5, cycle: 90560 },
];

const EPHEMERIS_EXTRA_POINTS = {
  meanNode: { key: "node", label: "Ay Düğ.", shortLabel: "NO", base: 125.4, speed: -0.05295, wobble: 1.5, cycle: 6798 },
  trueNode: { key: "node", label: "Ay Düğ.", shortLabel: "NO", base: 125.4, speed: -0.05295, wobble: 3.2, cycle: 6798 },
  meanLilith: {
    key: "lilith",
    label: "Lilith",
    shortLabel: "LI",
    base: 220.8,
    speed: 0.11141,
    wobble: 5.5,
    cycle: 3232,
  },
  trueLilith: {
    key: "lilith",
    label: "Lilith",
    shortLabel: "LI",
    base: 220.8,
    speed: 0.11141,
    wobble: 8.4,
    cycle: 3232,
  },
  chiron: { key: "chiron", label: "Chiron", shortLabel: "CH", base: 250.2, speed: 0.01971, wobble: 6.1, cycle: 18500 },
};

const WEEKDAY_SHORT_LABELS = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
const SIGN_SHORT_LABELS = ["Koc", "Boga", "Ikiz", "Yeng", "Asln", "Bas", "Ter", "Akrep", "Yay", "Ogl", "Kova", "Bal"];

const DAY_MS = 24 * 60 * 60 * 1000;
const HOUR_MS = 60 * 60 * 1000;
const SYNODIC_MONTH = 29.530588853;
const KNOWN_NEW_MOON_UTC = Date.UTC(2000, 0, 6, 18, 14);
const TURKIYE_API_BASE = "https://api.turkiyeapi.dev/v1";
const NOMINATIM_BASE = "https://nominatim.openstreetmap.org/search";

const pageName = document.body.dataset.page ?? "";
const API_CACHE = {
  provinces: null,
  provinceDetails: new Map(),
  districts: new Map(),
  neighborhoods: new Map(),
  geocodes: new Map(),
};

const fetchApiData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const payload = await response.json();
  return payload?.data;
};

const fetchAllProvinces = async () => {
  if (API_CACHE.provinces) {
    return API_CACHE.provinces;
  }

  const provinces = await fetchApiData(`${TURKIYE_API_BASE}/provinces?fields=id,name&limit=100`);
  API_CACHE.provinces = Array.isArray(provinces) ? provinces : [];
  return API_CACHE.provinces;
};

const fetchProvinceDetails = async (provinceId) => {
  if (API_CACHE.provinceDetails.has(provinceId)) {
    return API_CACHE.provinceDetails.get(provinceId);
  }

  const detail = await fetchApiData(`${TURKIYE_API_BASE}/provinces/${provinceId}?fields=id,name,coordinates`);
  API_CACHE.provinceDetails.set(provinceId, detail);
  return detail;
};

const fetchDistrictsByProvinceId = async (provinceId) => {
  if (API_CACHE.districts.has(provinceId)) {
    return API_CACHE.districts.get(provinceId);
  }

  const districts = await fetchApiData(
    `${TURKIYE_API_BASE}/districts?provinceId=${encodeURIComponent(provinceId)}&fields=id,name&limit=1000`,
  );
  const normalized = Array.isArray(districts) ? districts : [];
  API_CACHE.districts.set(provinceId, normalized);
  return normalized;
};

const fetchNeighborhoodsByDistrictId = async (districtId) => {
  if (API_CACHE.neighborhoods.has(districtId)) {
    return API_CACHE.neighborhoods.get(districtId);
  }

  const neighborhoods = await fetchApiData(
    `${TURKIYE_API_BASE}/neighborhoods?districtId=${encodeURIComponent(districtId)}&fields=id,name&limit=10000`,
  );
  const normalized = Array.isArray(neighborhoods) ? neighborhoods : [];
  API_CACHE.neighborhoods.set(districtId, normalized);
  return normalized;
};

const fetchNeighborhoodCoordinates = async ({ province, district, neighborhood }) => {
  const cacheKey = `${province}|${district}|${neighborhood}`;
  if (API_CACHE.geocodes.has(cacheKey)) {
    return API_CACHE.geocodes.get(cacheKey);
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

  API_CACHE.geocodes.set(cacheKey, coordinates);
  return coordinates;
};

const populateCitySelects = async () => {
  const citySelects = Array.from(document.querySelectorAll('select[name="city"]'));
  if (citySelects.length === 0) {
    return;
  }

  try {
    const provinces = await fetchAllProvinces();
    citySelects.forEach((select) => {
      if (!(select instanceof HTMLSelectElement)) {
        return;
      }

      const selectedLabel =
        select.dataset.defaultCityLabel ??
        CITY_DATA[select.value]?.label ??
        select.options[select.selectedIndex]?.textContent?.trim() ??
        "İstanbul";

      const optionsMarkup = provinces
        .map(
          (province) =>
            `<option value="${province.name}" data-id="${province.id}">${province.name}</option>`,
        )
        .join("");

      select.innerHTML = optionsMarkup;
      select.value = provinces.some((province) => province.name === selectedLabel) ? selectedLabel : "İstanbul";
    });

    return;
  } catch (_error) {
    const optionsMarkup = Object.entries(CITY_DATA)
      .sort(([, left], [, right]) => left.label.localeCompare(right.label, "tr"))
      .map(([, city]) => `<option value="${city.label}">${city.label}</option>`)
      .join("");

    citySelects.forEach((select) => {
      if (!(select instanceof HTMLSelectElement)) {
        return;
      }

      const selectedLabel =
        select.dataset.defaultCityLabel ??
        CITY_DATA[select.value]?.label ??
        select.options[select.selectedIndex]?.textContent?.trim() ??
        "İstanbul";

      select.innerHTML = optionsMarkup;
      select.value = selectedLabel;
    });
  }
};

const fallbackLocationTree = (cityLabel) => ({
  Merkez: ["Cumhuriyet Mahallesi", "Atatürk Mahallesi"],
  Yenişehir: ["Bahçelievler Mahallesi", `${cityLabel} Merkez Mahallesi`],
});

const setSelectOptions = (selectNode, values, placeholder) => {
  if (!(selectNode instanceof HTMLSelectElement)) {
    return;
  }

  const optionsMarkup = [`<option value="">${placeholder}</option>`]
    .concat(
      values.map((value) => {
        if (typeof value === "string") {
          return `<option value="${value}">${value}</option>`;
        }

        return `<option value="${value.name}" data-id="${value.id ?? ""}">${value.name}</option>`;
      }),
    )
    .join("");

  selectNode.innerHTML = optionsMarkup;
};

const setStaticOptions = (selectNode, values, selectedValue = "") => {
  if (!(selectNode instanceof HTMLSelectElement)) {
    return;
  }

  selectNode.innerHTML = values
    .map((value) => `<option value="${value.value}">${value.label}</option>`)
    .join("");

  selectNode.value = values.some((value) => value.value === selectedValue)
    ? selectedValue
    : values[0]?.value ?? "";
};

const populateVedicSelectControls = (form) => {
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const daySelect = form.querySelector("[data-vedic-day]");
  const monthSelect = form.querySelector("[data-vedic-month]");
  const yearSelect = form.querySelector("[data-vedic-year]");
  const hourSelect = form.querySelector("[data-vedic-hour]");
  const minuteSelect = form.querySelector("[data-vedic-minute]");
  const timezoneSelect = form.querySelector("[data-vedic-timezone]");
  const houseSystemSelect = form.querySelector("[data-vedic-house-system]");
  const ayanamsaSelect = form.querySelector("[data-vedic-ayanamsa]");
  const toleranceSelect = form.querySelector("[data-vedic-tolerance]");

  setStaticOptions(
    daySelect,
    Array.from({ length: 31 }, (_, index) => ({
      value: String(index + 1),
      label: String(index + 1),
    })),
    daySelect instanceof HTMLSelectElement ? daySelect.dataset.selected ?? "1" : "1",
  );

  setStaticOptions(
    monthSelect,
    MONTH_LABELS.map((label, index) => ({
      value: String(index + 1),
      label,
    })),
    monthSelect instanceof HTMLSelectElement ? monthSelect.dataset.selected ?? "1" : "1",
  );

  setStaticOptions(
    yearSelect,
    Array.from({ length: 301 }, (_, index) => {
      const year = 1800 + index;
      return { value: String(year), label: String(year) };
    }),
    yearSelect instanceof HTMLSelectElement ? yearSelect.dataset.selected ?? "1990" : "1990",
  );

  setStaticOptions(
    hourSelect,
    Array.from({ length: 24 }, (_, index) => {
      const value = String(index).padStart(2, "0");
      return { value, label: value };
    }),
    hourSelect instanceof HTMLSelectElement ? hourSelect.dataset.selected ?? "00" : "00",
  );

  setStaticOptions(
    minuteSelect,
    Array.from({ length: 60 }, (_, index) => {
      const value = String(index).padStart(2, "0");
      return { value, label: value };
    }),
    minuteSelect instanceof HTMLSelectElement ? minuteSelect.dataset.selected ?? "00" : "00",
  );

  setStaticOptions(
    timezoneSelect,
    TIMEZONE_OPTIONS,
    timezoneSelect instanceof HTMLSelectElement ? timezoneSelect.dataset.selected ?? "auto" : "auto",
  );

  setStaticOptions(
    houseSystemSelect,
    HOUSE_SYSTEM_OPTIONS,
    houseSystemSelect instanceof HTMLSelectElement ? houseSystemSelect.dataset.selected ?? "placidus" : "placidus",
  );

  setStaticOptions(
    ayanamsaSelect,
    AYANAMSA_OPTIONS.map((option) => ({
      value: option.value,
      label: option.label,
    })),
    ayanamsaSelect instanceof HTMLSelectElement ? ayanamsaSelect.dataset.selected ?? "lahiri" : "lahiri",
  );

  setStaticOptions(
    toleranceSelect,
    TOLERANCE_OPTIONS,
    toleranceSelect instanceof HTMLSelectElement ? toleranceSelect.dataset.selected ?? "1" : "1",
  );
};

const getLocationTreeForCity = (cityLabel) => {
  const cityKey =
    Object.entries(CITY_DATA).find(([, city]) => city.label === cityLabel)?.[0] ?? "istanbul";
  const city = CITY_DATA[cityKey] ?? CITY_DATA.istanbul;
  return CITY_LOCATION_TREE[cityKey] ?? fallbackLocationTree(city.label);
};

const getSelectedOption = (selectNode) =>
  selectNode instanceof HTMLSelectElement ? selectNode.options[selectNode.selectedIndex] ?? null : null;

const getSelectedOptionLabel = (selectNode) => {
  const option = getSelectedOption(selectNode);
  if (!(option instanceof HTMLOptionElement) || !option.value) {
    return "";
  }

  return option.textContent?.trim() ?? "";
};

const getSelectedOptionId = (selectNode) => {
  const option = getSelectedOption(selectNode);
  if (!(option instanceof HTMLOptionElement) || !option.value) {
    return "";
  }

  return option.dataset.id ?? "";
};

const getSelectedOptionValue = (selectNode) => {
  const option = getSelectedOption(selectNode);
  if (!(option instanceof HTMLOptionElement)) {
    return "";
  }

  return option.value ?? "";
};

const getFallbackCityContext = (cityLabel) =>
  Object.values(CITY_DATA).find((city) => city.label === cityLabel) ?? CITY_DATA.istanbul;

const resolveSelectedLocationCoordinates = async ({
  citySelect,
  districtSelect,
  neighborhoodSelect,
}) => {
  const provinceContext = await ensureProvinceCoordinates(citySelect);
  const province = getSelectedOptionLabel(citySelect);
  const district = getSelectedOptionLabel(districtSelect);
  const neighborhood = getSelectedOptionLabel(neighborhoodSelect);

  if (!province || !district || !neighborhood) {
    return {
      ...provinceContext,
      source: "province",
    };
  }

  try {
    const coordinates = await fetchNeighborhoodCoordinates({
      province,
      district,
      neighborhood,
    });

    if (coordinates) {
      return {
        label: provinceContext.label,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        source: "neighborhood",
      };
    }
  } catch (_error) {
    return {
      ...provinceContext,
      source: "province",
    };
  }

  return {
    ...provinceContext,
    source: "province",
  };
};

const ensureProvinceCoordinates = async (citySelect) => {
  const option = getSelectedOption(citySelect);
  if (!(option instanceof HTMLOptionElement) || !option.value) {
    return getFallbackCityContext("İstanbul");
  }

  if (option.dataset.latitude && option.dataset.longitude) {
    return {
      label: option.textContent?.trim() ?? option.value,
      latitude: Number.parseFloat(option.dataset.latitude),
      longitude: Number.parseFloat(option.dataset.longitude),
    };
  }

  const provinceId = option.dataset.id;
  if (!provinceId) {
    return getFallbackCityContext(option.textContent?.trim() ?? option.value);
  }

  try {
    const detail = await fetchProvinceDetails(provinceId);
    const latitude = detail?.coordinates?.latitude;
    const longitude = detail?.coordinates?.longitude;
    if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
      option.dataset.latitude = String(latitude);
      option.dataset.longitude = String(longitude);
      return {
        label: option.textContent?.trim() ?? option.value,
        latitude,
        longitude,
      };
    }
  } catch (_error) {
    return getFallbackCityContext(option.textContent?.trim() ?? option.value);
  }

  return getFallbackCityContext(option.textContent?.trim() ?? option.value);
};

const bindLocationSelects = async ({ citySelect, districtSelect, neighborhoodSelect }) => {
  if (
    !(citySelect instanceof HTMLSelectElement) ||
    !(districtSelect instanceof HTMLSelectElement) ||
    !(neighborhoodSelect instanceof HTMLSelectElement)
  ) {
    return;
  }

  const notifyResolved = () => {
    citySelect.dispatchEvent(new CustomEvent("locationresolved"));
  };

  const populateNeighborhoods = async () => {
    const selectedNeighborhood = neighborhoodSelect.dataset.selectedNeighborhood ?? getSelectedOptionLabel(neighborhoodSelect);
    const districtId = getSelectedOptionId(districtSelect);

    try {
      if (districtId) {
        const neighborhoods = await fetchNeighborhoodsByDistrictId(districtId);
        setSelectOptions(neighborhoodSelect, neighborhoods, "Mahalle seçiniz");
        neighborhoodSelect.disabled = neighborhoods.length === 0;
        neighborhoodSelect.value = neighborhoods.some((item) => item.name === selectedNeighborhood)
          ? selectedNeighborhood
          : neighborhoods[0]?.name ?? "";
        delete neighborhoodSelect.dataset.selectedNeighborhood;
        return;
      }
    } catch (_error) {
      // Fall back to local sample data below.
    }

    const locationTree = getLocationTreeForCity(citySelect.value);
    const fallbackNeighborhoods = districtSelect.value ? locationTree[districtSelect.value] ?? [] : [];
    setSelectOptions(neighborhoodSelect, fallbackNeighborhoods, "Mahalle seçiniz");
    neighborhoodSelect.disabled = fallbackNeighborhoods.length === 0;
    neighborhoodSelect.value = fallbackNeighborhoods.includes(selectedNeighborhood)
      ? selectedNeighborhood
      : fallbackNeighborhoods[0] ?? "";
    delete neighborhoodSelect.dataset.selectedNeighborhood;
  };

  const populateDistricts = async () => {
    const selectedDistrict = districtSelect.dataset.selectedDistrict ?? getSelectedOptionLabel(districtSelect);
    const provinceId = getSelectedOptionId(citySelect);

    try {
      if (provinceId) {
        const districts = await fetchDistrictsByProvinceId(provinceId);
        setSelectOptions(districtSelect, districts, "İlçe seçiniz");
        districtSelect.disabled = districts.length === 0;
        districtSelect.value = districts.some((item) => item.name === selectedDistrict)
          ? selectedDistrict
          : districts[0]?.name ?? "";
        delete districtSelect.dataset.selectedDistrict;
        await populateNeighborhoods();
        return;
      }
    } catch (_error) {
      // Fall back to local sample data below.
    }

    const locationTree = getLocationTreeForCity(citySelect.value);
    const fallbackDistricts = Object.keys(locationTree);
    setSelectOptions(districtSelect, fallbackDistricts, "İlçe seçiniz");
    districtSelect.disabled = fallbackDistricts.length === 0;
    districtSelect.value = fallbackDistricts.includes(selectedDistrict) ? selectedDistrict : fallbackDistricts[0] ?? "";
    delete districtSelect.dataset.selectedDistrict;
    await populateNeighborhoods();
  };

  citySelect.addEventListener("change", () => {
    populateDistricts().then(() => {
      notifyResolved();
    });
  });

  districtSelect.addEventListener("change", () => {
    populateNeighborhoods().then(() => {
      notifyResolved();
    });
  });

  await populateDistricts();
  notifyResolved();
};

const mod = (value, divisor) => ((value % divisor) + divisor) % divisor;

const parseTimeToMinutes = (value) => {
  const [hours = "0", minutes = "0"] = String(value).split(":");
  return Number.parseInt(hours, 10) * 60 + Number.parseInt(minutes, 10);
};

const parseNumericInput = (value, fallback = 0) => {
  const parsed = Number.parseFloat(String(value));
  return Number.isFinite(parsed) ? parsed : fallback;
};

const degreesMinutesToDecimal = (degreesValue, minutesValue, negativeDirections, directionValue) => {
  const degrees = Math.abs(parseNumericInput(degreesValue));
  const minutes = Math.max(0, Math.min(59, Math.abs(parseNumericInput(minutesValue))));
  const base = degrees + minutes / 60;
  return negativeDirections.includes(directionValue) ? -base : base;
};

const decimalToDegreesMinutes = (value, positiveDirection, negativeDirection) => {
  const absolute = Math.abs(value);
  const degrees = Math.floor(absolute);
  const minutes = Math.round((absolute - degrees) * 60);
  const normalizedDegrees = minutes === 60 ? degrees + 1 : degrees;
  const normalizedMinutes = minutes === 60 ? 0 : minutes;

  return {
    degrees: normalizedDegrees,
    minutes: normalizedMinutes,
    direction: value < 0 ? negativeDirection : positiveDirection,
  };
};

const formatCoordinateValue = (value, positiveLabel, negativeLabel) => {
  const absolute = Math.abs(value);
  const degrees = Math.floor(absolute);
  const minutes = Math.round((absolute - degrees) * 60);
  const safeDegrees = minutes === 60 ? degrees + 1 : degrees;
  const safeMinutes = minutes === 60 ? 0 : minutes;
  const direction = value < 0 ? negativeLabel : positiveLabel;
  return `${safeDegrees}° ${String(safeMinutes).padStart(2, "0")}′ ${direction}`;
};

const buildBirthDate = ({ yearValue, monthValue, dayValue, hourValue, minuteValue }) => {
  const year = Number.parseInt(yearValue, 10);
  const month = Number.parseInt(monthValue, 10);
  const day = Number.parseInt(dayValue, 10);
  const hour = Number.parseInt(hourValue, 10);
  const minute = Number.parseInt(minuteValue, 10);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    !Number.isInteger(hour) ||
    !Number.isInteger(minute)
  ) {
    return null;
  }

  const date = new Date(year, month - 1, day, hour, minute, 0);
  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
};

const formatDate = (date) =>
  date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const formatDateTime = (date) =>
  date.toLocaleString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const toFixedCoordinate = (value, fallback) => {
  const parsed = Number.parseFloat(String(value));
  if (Number.isFinite(parsed)) {
    return parsed.toFixed(4);
  }

  return fallback.toFixed(4);
};

const getApproxTropicalSunDegree = (date) => {
  const sign = getSunSign(date);
  return sign.index * 30 + ((date.getDate() % 30) + 1);
};

const getDaysSinceEpoch = (date) => (date.getTime() - Date.UTC(2000, 0, 1, 12, 0, 0)) / DAY_MS;

const getApproxPlanetDegree = (date, planetConfig) => {
  const days = getDaysSinceEpoch(date);
  const wave = Math.sin((2 * Math.PI * days) / planetConfig.cycle) * planetConfig.wobble;
  return mod(planetConfig.base + days * planetConfig.speed + wave, 360);
};

const formatZodiacPosition = (degreeValue) => {
  const normalized = mod(degreeValue, 360);
  const signIndex = Math.floor(normalized / 30);
  const degreeInSign = normalized % 30;
  const whole = Math.floor(degreeInSign);
  const minutes = Math.round((degreeInSign - whole) * 60);
  const safeWhole = minutes === 60 ? whole + 1 : whole;
  const safeMinutes = minutes === 60 ? 0 : minutes;

  return `${ZODIAC_SIGNS[signIndex].name} ${safeWhole}° ${String(safeMinutes).padStart(2, "0")}′`;
};

const getDegreeParts = (degreeValue) => {
  const normalized = mod(degreeValue, 360);
  const signIndex = Math.floor(normalized / 30);
  const degreeInSign = normalized % 30;
  const whole = Math.floor(degreeInSign);
  const minutes = Math.round((degreeInSign - whole) * 60);
  const safeWhole = minutes === 60 ? whole + 1 : whole;
  const safeMinutes = minutes === 60 ? 0 : minutes;
  const absoluteWhole = Math.floor(normalized);
  const absoluteMinutes = Math.round((normalized - absoluteWhole) * 60);

  return {
    signIndex,
    signLabel: ZODIAC_SIGNS[signIndex].name,
    shortSign: SIGN_SHORT_LABELS[signIndex],
    degree: safeWhole,
    minutes: safeMinutes,
    absoluteDegree: absoluteMinutes === 60 ? absoluteWhole + 1 : absoluteWhole,
    absoluteMinutes: absoluteMinutes === 60 ? 0 : absoluteMinutes,
  };
};

const formatEphemerisValue = (degreeValue, precisionKey) => {
  const parts = getDegreeParts(degreeValue);

  if (precisionKey === "degree") {
    return `${parts.degree}°`;
  }

  if (precisionKey === "absolute") {
    return `${parts.absoluteDegree}° ${String(parts.absoluteMinutes).padStart(2, "0")}′`;
  }

  return `${parts.degree}° ${String(parts.minutes).padStart(2, "0")}′`;
};

const renderEphemerisCell = (degreeValue, precisionKey, symbolMode) => {
  const parts = getDegreeParts(degreeValue);
  const mutedClass = symbolMode === "gray" ? " is-gray" : "";
  return `
    <span class="ephemeris-pos${mutedClass}">
      <span class="ephemeris-sign-chip ephemeris-sign-${parts.signIndex}">${parts.shortSign}</span>
      <span class="ephemeris-pos-value">${formatEphemerisValue(degreeValue, precisionKey)}</span>
    </span>
  `;
};

const normalizeSignedDegree = (value) => {
  const normalized = mod(value + 180, 360) - 180;
  return normalized === -180 ? 180 : normalized;
};

const formatEphemerisDiff = (degreeValue, precisionKey) => {
  const signed = normalizeSignedDegree(degreeValue);
  const sign = signed < 0 ? "-" : "";
  const absolute = Math.abs(signed);
  const whole = Math.floor(absolute);
  const minutes = Math.round((absolute - whole) * 60);
  const safeWhole = minutes === 60 ? whole + 1 : whole;
  const safeMinutes = minutes === 60 ? 0 : minutes;

  if (precisionKey === "degree") {
    return `${sign}${safeWhole}°`;
  }

  if (precisionKey === "absolute") {
    return `${sign}${safeWhole}° ${String(safeMinutes).padStart(2, "0")}′`;
  }

  return `${sign}${safeWhole}° ${String(safeMinutes).padStart(2, "0")}′`;
};

const getApproxSiderealTime = (date) => {
  const days = getDaysSinceEpoch(date);
  const siderealHours = mod(6.697374558 + days * 0.0657098244 + date.getUTCDate() * 0.0008, 24);
  const wholeHours = Math.floor(siderealHours);
  const minutes = Math.round((siderealHours - wholeHours) * 60);
  const safeHours = minutes === 60 ? mod(wholeHours + 1, 24) : wholeHours;
  const safeMinutes = minutes === 60 ? 0 : minutes;
  return `${String(safeHours).padStart(2, "0")}:${String(safeMinutes).padStart(2, "0")}`;
};

const getEphemerisPlanetSet = (nodeMode, lilithMode) => [
  ...EPHEMERIS_PLANETS.map((planet) => ({
    ...planet,
    shortLabel:
      {
        sun: "SU",
        moon: "MO",
        mercury: "ME",
        venus: "VE",
        mars: "MA",
        jupiter: "JU",
        saturn: "SA",
        uranus: "UR",
        neptune: "NE",
        pluto: "PL",
      }[planet.key] ?? planet.label.slice(0, 2).toUpperCase(),
  })),
  nodeMode === "true" ? EPHEMERIS_EXTRA_POINTS.trueNode : EPHEMERIS_EXTRA_POINTS.meanNode,
  lilithMode === "true" ? EPHEMERIS_EXTRA_POINTS.trueLilith : EPHEMERIS_EXTRA_POINTS.meanLilith,
  EPHEMERIS_EXTRA_POINTS.chiron,
];

const getNakshatraInfo = (degreeValue) => {
  const segment = 360 / 27;
  const normalized = mod(degreeValue, 360);
  const index = Math.floor(normalized / segment);
  const pada = Math.floor((normalized % segment) / (segment / 4)) + 1;

  return {
    name: NAKSHATRAS[index],
    pada,
  };
};

const polarToCartesian = (cx, cy, radius, angleDegrees) => {
  const radians = ((angleDegrees - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
};

const renderMiniChartPreview = ({ sunDegree, moonDegree, ascDegree, mcDegree, houseSystem, focusArea }) => {
  const cx = 160;
  const cy = 160;
  const outerRadius = 116;
  const innerRadius = 76;
  const labelRadius = 138;
  const signLabels = ZODIAC_SIGNS.map((sign) => sign.name.slice(0, 2).toUpperCase());
  const spokes = Array.from({ length: 12 }, (_, index) => {
    const angle = index * 30;
    const outer = polarToCartesian(cx, cy, outerRadius, angle);
    const inner = polarToCartesian(cx, cy, innerRadius, angle);
    const label = polarToCartesian(cx, cy, labelRadius, angle + 15);

    return `
      <line x1="${inner.x.toFixed(2)}" y1="${inner.y.toFixed(2)}" x2="${outer.x.toFixed(2)}" y2="${outer.y.toFixed(
        2,
      )}" />
      <text x="${label.x.toFixed(2)}" y="${label.y.toFixed(2)}">${signLabels[index]}</text>
    `;
  }).join("");

  const points = [
    { label: "G", value: "Güneş", angle: sunDegree, color: "#f1c37c" },
    { label: "A", value: "Ay", angle: moonDegree, color: "#8cb6ff" },
    { label: "ASC", value: "Yükselen", angle: ascDegree, color: "#7ed4b5" },
    { label: "MC", value: "MC", angle: mcDegree, color: "#f39b8f" },
  ];

  const pointMarkup = points
    .map((point) => {
      const node = polarToCartesian(cx, cy, 96, point.angle);
      const label = polarToCartesian(cx, cy, 58, point.angle);

      return `
        <g>
          <line x1="${cx}" y1="${cy}" x2="${node.x.toFixed(2)}" y2="${node.y.toFixed(2)}" />
          <circle cx="${node.x.toFixed(2)}" cy="${node.y.toFixed(2)}" r="6" fill="${point.color}" />
          <text class="point-label" x="${label.x.toFixed(2)}" y="${label.y.toFixed(2)}">${point.label}</text>
        </g>
      `;
    })
    .join("");

  const legendMarkup = points
    .map(
      (point) => `
        <article class="seek-chart-key">
          <strong>${point.value}</strong>
          <span>${point.label}</span>
        </article>
      `,
    )
    .join("");

  return `
    <article class="result-note-card seek-chart-card">
      <h4>Mini harita ön izlemesi</h4>
      <div class="seek-chart-wrap">
        <div class="seek-chart-figure" aria-hidden="true">
          <svg viewBox="0 0 320 320" role="img">
            <circle class="wheel-outer" cx="${cx}" cy="${cy}" r="${outerRadius}" />
            <circle class="wheel-inner" cx="${cx}" cy="${cy}" r="${innerRadius}" />
            <circle class="wheel-core" cx="${cx}" cy="${cy}" r="18" />
            <g class="wheel-spokes">${spokes}</g>
            <g class="wheel-points">${pointMarkup}</g>
          </svg>
        </div>
        <div class="seek-chart-copy">
          <p>
            Bu küçük tekerlek, seçilen ayarlara göre Güneş, Ay, ASC ve MC eksenini hızlı okumalık
            bir görünümde toplar.
          </p>
          <div class="seek-chart-legend">${legendMarkup}</div>
          <p class="tool-note">Ev sistemi: ${houseSystem} · Odak: ${focusArea}</p>
        </div>
      </div>
    </article>
  `;
};

const getSunSign = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthDay = month * 100 + day;
  let current = ZODIAC_SIGNS[9];

  ZODIAC_BY_BOUNDARY.forEach((boundary) => {
    if (monthDay >= boundary.start) {
      current = boundary.sign;
    }
  });

  return current;
};

const getTimeSegment = (minutes) =>
  TIME_SEGMENTS.find((segment) => minutes < segment.limit) ?? TIME_SEGMENTS[TIME_SEGMENTS.length - 1];

const getMoonAge = (date) => mod((date.getTime() - KNOWN_NEW_MOON_UTC) / DAY_MS, SYNODIC_MONTH);

const getMoonPhaseInfo = (date) => {
  const age = getMoonAge(date);
  const fraction = age / SYNODIC_MONTH;
  const illumination = ((1 - Math.cos(2 * Math.PI * fraction)) / 2) * 100;
  const index = Math.floor(fraction * 8 + 0.5) % 8;
  const phase = PHASE_DETAILS[index];

  return {
    age,
    index,
    illumination,
    name: phase.name,
    theme: phase.theme,
  };
};

const getDayOfYear = (date) => {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / DAY_MS);
};

const getApproxSunriseMinutes = (date, city) => {
  const dayOfYear = getDayOfYear(date);
  const seasonalShift = Math.cos((2 * Math.PI * (dayOfYear - 172)) / 365.25) * 55;
  const latitudeFactor = 1 + (city.latitude - 36) * 0.015;
  const longitudeShift = Math.round((30 - city.longitude) * 1.8);
  const sunrise = 390 - seasonalShift * latitudeFactor + longitudeShift;
  return Math.max(300, Math.min(480, Math.round(sunrise)));
};

const renderMetricCards = (items) =>
  items
    .map(
      (item) => `
        <article class="result-item">
          <p>${item.label}</p>
          <strong>${item.value}</strong>
          <span>${item.note}</span>
        </article>
      `,
    )
    .join("");

const renderBirthChartResult = () => {
  const form = document.querySelector("#birthChartForm");
  const result = document.querySelector("#birthChartResult");
  if (!(form instanceof HTMLFormElement) || !(result instanceof HTMLElement)) {
    return;
  }

  const update = () => {
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim() || "Danışan";
    const dateValue = String(formData.get("birthDate") ?? "");
    const timeValue = String(formData.get("birthTime") ?? "00:00");
    const cityKey = String(formData.get("city") ?? "istanbul");
    const timezone = String(formData.get("timezone") ?? "Europe/Istanbul");
    const date = new Date(`${dateValue}T${timeValue}:00`);
    const city = CITY_DATA[cityKey] ?? CITY_DATA.istanbul;
    const sign = getSunSign(date);
    const timeSegment = getTimeSegment(parseTimeToMinutes(timeValue));
    const moonPhase = getMoonPhaseInfo(date);
    const weekday = date.getDay();
    const ruler = WEEKDAY_RULERS[weekday];

    result.innerHTML = `
      <article class="result-hero">
        <p class="preview-label">Hızlı yorum</p>
        <h3>${name} için astro özeti</h3>
        <p>${formatDate(date)} tarihinde ${city.label} için açılan temel harita özeti burada toplandı.</p>
      </article>

      <section class="result-grid">
        ${renderMetricCards([
          {
            label: "Güneş burcu",
            value: sign.name,
            note: `${sign.element} elementi ve ${sign.mode.toLocaleLowerCase("tr-TR")} ritim`,
          },
          {
            label: "Gün yöneticisi",
            value: ruler,
            note: "Haftanın yönetici gezegeni",
          },
          {
            label: "Ay fazı",
            value: moonPhase.name,
            note: `${moonPhase.illumination.toFixed(0)}% aydınlanma`,
          },
          {
            label: "Gün ritmi",
            value: timeSegment.label,
            note: timeSegment.focus,
          },
        ])}
      </section>

      <article class="result-note-card">
        <h4>Özet yorum</h4>
        <p>
          ${sign.name} vurgusu kimliğin ana tonunu verir. ${timeSegment.label} doğumu,
          haritada "${timeSegment.focus}" temasını öne taşır. ${moonPhase.name} fazı ise
          duygusal işleyişte "${moonPhase.theme.toLocaleLowerCase("tr-TR")}" başlığını güçlendirir.
        </p>
        <p class="result-inline-meta">
          Şehir: ${city.label}
          <span class="divider-dot" aria-hidden="true"></span>
          Saat dilimi: ${timezone}
        </p>
      </article>
    `;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  update();
};

const renderRisingSignResult = async () => {
  const form = document.querySelector("#risingSignForm");
  const result = document.querySelector("#risingSignResult");
  const citySelect = document.querySelector("#risingCity");
  const districtSelect = document.querySelector("#risingDistrict");
  const neighborhoodSelect = document.querySelector("#risingNeighborhood");
  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(citySelect instanceof HTMLSelectElement) ||
    !(districtSelect instanceof HTMLSelectElement) ||
    !(neighborhoodSelect instanceof HTMLSelectElement)
  ) {
    return;
  }

  await bindLocationSelects({
    citySelect,
    districtSelect,
    neighborhoodSelect,
  });

  const update = async () => {
    const formData = new FormData(form);
    const dateValue = String(formData.get("birthDate") ?? "");
    const timeValue = String(formData.get("birthTime") ?? "00:00");
    const district = getSelectedOptionLabel(districtSelect);
    const neighborhood = getSelectedOptionLabel(neighborhoodSelect);
    const date = new Date(`${dateValue}T${timeValue}:00`);
    const city = await resolveSelectedLocationCoordinates({
      citySelect,
      districtSelect,
      neighborhoodSelect,
    });
    const sign = getSunSign(date);
    const birthMinutes = parseTimeToMinutes(timeValue);
    const sunriseMinutes = getApproxSunriseMinutes(date, city);
    const signShift = Math.floor((birthMinutes - sunriseMinutes) / 120);
    const risingSign = ZODIAC_SIGNS[mod(sign.index + signShift, 12)];
    const phase = getMoonPhaseInfo(date);
    const sunriseHour = `${String(Math.floor(sunriseMinutes / 60)).padStart(2, "0")}:${String(
      sunriseMinutes % 60,
    ).padStart(2, "0")}`;

    result.innerHTML = `
      <article class="result-hero">
        <p class="preview-label">Hızlı tahmin</p>
        <h3>Yükselen ${risingSign.name}</h3>
        <p>${city.label} için gün doğumu ekseni baz alınarak yükselen tahmini üretildi.</p>
      </article>

      <section class="result-grid">
        ${renderMetricCards([
          {
            label: "Yükselen",
            value: risingSign.name,
            note: `${risingSign.element} elementi`,
          },
          {
            label: "Güneş burcu",
            value: sign.name,
            note: "Kimliğin ana tonu",
          },
          {
            label: "Gün doğumu",
            value: sunriseHour,
            note: "Tahmini gün doğumu saati",
          },
          {
            label: "Ay fazı",
            value: phase.name,
            note: phase.theme,
          },
        ])}
      </section>

      <article class="result-note-card">
        <h4>Yorum ekseni</h4>
        <p>
          ${risingSign.name} yükseleni dışarıya verdiğin ilk izlenimi belirler. ${sign.name}
          iç merkezini korurken, ${risingSign.name} seni görünür kılan maskeyi oluşturur.
        </p>
        <p class="result-inline-meta">
          Şehir: ${city.label}${district ? `, ${district}` : ""}${neighborhood ? ` / ${neighborhood}` : ""}
          <span class="divider-dot" aria-hidden="true"></span>
          Bu ekran hızlı tahmin üretir.
        </p>
      </article>
    `;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  citySelect.addEventListener("locationresolved", () => {
    update();
  });

  neighborhoodSelect.addEventListener("change", () => {
    update();
  });

  update();
};

const renderExtendedBirthChartResult = async () => {
  const form = document.querySelector("#birthChartExtendedForm");
  const result = document.querySelector("#birthChartExtendedResult");
  const citySelect = document.querySelector("[data-extended-city]");
  const latitudeInput = document.querySelector("[data-extended-latitude]");
  const longitudeInput = document.querySelector("[data-extended-longitude]");
  const districtSelect = document.querySelector('[data-location-district]');
  const neighborhoodSelect = document.querySelector('[data-location-neighborhood]');

  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(citySelect instanceof HTMLSelectElement) ||
    !(latitudeInput instanceof HTMLInputElement) ||
    !(longitudeInput instanceof HTMLInputElement) ||
    !(districtSelect instanceof HTMLSelectElement) ||
    !(neighborhoodSelect instanceof HTMLSelectElement)
  ) {
    return;
  }

  await bindLocationSelects({
    citySelect,
    districtSelect,
    neighborhoodSelect,
  });

  const accuracyInput = form.querySelector('input[name="accuracy"]');

  const syncCoordinates = async () => {
    const city = await resolveSelectedLocationCoordinates({
      citySelect,
      districtSelect,
      neighborhoodSelect,
    });
    latitudeInput.value = city.latitude.toFixed(4);
    longitudeInput.value = city.longitude.toFixed(4);
    if (accuracyInput instanceof HTMLInputElement) {
      accuracyInput.value = city.source === "neighborhood" ? "Mahalle seviyesi (otomatik)" : "İl merkezi";
    }
    return city;
  };

  const update = async () => {
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim() || "Danışan";
    const birthDate = String(formData.get("birthDate") ?? "");
    const birthTime = String(formData.get("birthTime") ?? "00:00");
    const timezone = String(formData.get("timezone") ?? "Europe/Istanbul");
    const district = getSelectedOptionLabel(districtSelect);
    const neighborhood = getSelectedOptionLabel(neighborhoodSelect);
    const country = String(formData.get("country") ?? "").trim() || "Türkiye";
    const accuracy = String(formData.get("accuracy") ?? "").trim();
    const houseSystemKey = String(formData.get("houseSystem") ?? "placidus");
    const zodiacModeKey = String(formData.get("zodiacMode") ?? "tropical");
    const orbLevelKey = String(formData.get("orbLevel") ?? "balanced");
    const focusAreaKey = String(formData.get("focusArea") ?? "general");
    const includeAspects = formData.has("includeAspects");
    const includeRetro = formData.has("includeRetro");
    const showHouses = formData.has("showHouses");
    const showElements = formData.has("showElements");
    const city = await syncCoordinates();
    const latitude = toFixedCoordinate(formData.get("latitude"), city.latitude);
    const longitude = toFixedCoordinate(formData.get("longitude"), city.longitude);
    const houseSystem = HOUSE_SYSTEM_LABELS[houseSystemKey] ?? HOUSE_SYSTEM_LABELS.placidus;
    const zodiacMode = ZODIAC_MODE_LABELS[zodiacModeKey] ?? ZODIAC_MODE_LABELS.tropical;
    const orbLevel = ORB_LEVEL_LABELS[orbLevelKey] ?? ORB_LEVEL_LABELS.balanced;
    const focusArea = FOCUS_AREA_LABELS[focusAreaKey] ?? FOCUS_AREA_LABELS.general;
    const date = new Date(`${birthDate}T${birthTime}:00`);

    if (Number.isNaN(date.getTime())) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Tarih eksik</h4>
          <p>Harita ön izlemesini göstermek için geçerli bir doğum tarihi ve saati gir.</p>
        </article>
      `;
      return;
    }

    const sunSign = getSunSign(date);
    const moonPhase = getMoonPhaseInfo(date);
    const birthMinutes = parseTimeToMinutes(birthTime);
    const sunriseMinutes = getApproxSunriseMinutes(date, {
      label: city.label,
      latitude: Number.parseFloat(latitude),
      longitude: Number.parseFloat(longitude),
    });
    const signShift = Math.floor((birthMinutes - sunriseMinutes) / 120);
    const risingSign = ZODIAC_SIGNS[mod(sunSign.index + signShift, 12)];
    const timeSegment = getTimeSegment(birthMinutes);
    const activeModules = [
      includeAspects ? "Açı matrisi" : "",
      includeRetro ? "Retro görünümü" : "",
      showHouses ? "Ev ekseni" : "",
      showElements ? "Element dağılımı" : "",
    ].filter(Boolean);
    const sunDegree = sunSign.index * 30 + ((date.getDate() % 30) + 1);
    const moonDegree = mod(sunDegree + moonPhase.age * 12.2, 360);
    const ascDegree = mod(risingSign.index * 30 + (birthMinutes / 4), 360);
    const mcDegree = mod(ascDegree + 90, 360);
    const miniChartMarkup = renderMiniChartPreview({
      sunDegree,
      moonDegree,
      ascDegree,
      mcDegree,
      houseSystem,
      focusArea,
    });

    result.innerHTML = `
      <article class="result-hero">
        <p class="preview-label">Geniş ön izleme</p>
        <h3>${name} için Doğum Haritası1 özeti</h3>
        <p>
          ${formatDate(date)} ${birthTime} saatinde ${city.label}${district ? `, ${district}` : ""}${
            neighborhood ? ` / ${neighborhood}` : ""
          } doğumu için hızlı harita özeti hazırlandı.
        </p>
      </article>

      <section class="result-grid">
        ${renderMetricCards([
          {
            label: "Güneş burcu",
            value: sunSign.name,
            note: `${sunSign.element} elementi ve ${sunSign.mode.toLocaleLowerCase("tr-TR")} yapı`,
          },
          {
            label: "Tahmini yükselen",
            value: risingSign.name,
            note: `${timeSegment.label} etkisi`,
          },
          {
            label: "Ay fazı",
            value: moonPhase.name,
            note: `${moonPhase.illumination.toFixed(0)}% aydınlanma`,
          },
          {
            label: "Ev sistemi",
            value: houseSystem,
            note: `${zodiacMode} zodyak`,
          },
        ])}
      </section>

      ${miniChartMarkup}

      <article class="result-note-card">
        <h4>Yorum ekseni</h4>
        <p>
          ${sunSign.name} güneş vurgusu kimliğin ana tonunu kurarken ${risingSign.name} yükselen dış dünyaya
          verdiğin ilk izlenimi belirler. ${moonPhase.name} fazı, duygusal ritimde
          "${moonPhase.theme.toLocaleLowerCase("tr-TR")}" başlığını büyütür.
        </p>
        <div class="seek-mini-grid">
          <article class="seek-mini-card">
            <strong>Harita odağı</strong>
            <span>${focusArea}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Orb ayarı</strong>
            <span>${orbLevel}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Koordinatlar</strong>
            <span>${latitude}, ${longitude}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Zaman alanı</strong>
            <span>${timezone}</span>
          </article>
        </div>
      </article>

      <article class="result-note-card">
        <h4>Aktif kapsam</h4>
        <div class="phase-list">
          <article class="phase-item">
            <strong>Yer doğruluğu</strong>
            <span>${city.label}, ${country}${district ? ` / ${district}` : ""}${neighborhood ? ` / ${neighborhood}` : ""}</span>
            <p>${accuracy || "Konum doğruluğu kullanıcı girişi ile alındı."}</p>
          </article>
          <article class="phase-item">
            <strong>Modüller</strong>
            <span>${activeModules.length ? activeModules.join(" • ") : "Sade görünüm"}</span>
            <p>Seçilen ayarlara göre sonuç alanında hangi başlıkların öne çıkacağı belirlendi.</p>
          </article>
          <article class="phase-item">
            <strong>Gün ritmi</strong>
            <span>${timeSegment.label}</span>
            <p>${timeSegment.focus}</p>
          </article>
        </div>
      </article>
    `;
  };

  citySelect.addEventListener("locationresolved", () => {
    syncCoordinates();
    update();
  });

  neighborhoodSelect.addEventListener("change", () => {
    syncCoordinates();
    update();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  syncCoordinates();
  update();
};

const getMonthPhaseEvents = (year, monthIndex) => {
  const events = [];
  const start = new Date(year, monthIndex, 1, 0, 0, 0, 0);
  const end = new Date(year, monthIndex + 1, 1, 0, 0, 0, 0);
  let cursor = new Date(start.getTime() - 12 * HOUR_MS);
  let previousIndex = getMoonPhaseInfo(cursor).index;

  while (cursor < end) {
    cursor = new Date(cursor.getTime() + 6 * HOUR_MS);
    const info = getMoonPhaseInfo(cursor);

    if (info.index !== previousIndex) {
      if ([0, 2, 4, 6].includes(info.index) && cursor.getMonth() === monthIndex) {
        events.push({
          date: new Date(cursor),
          name: info.name,
          theme: info.theme,
        });
      }

      previousIndex = info.index;
    }
  }

  return events;
};

const renderMoonCalendarResult = () => {
  const form = document.querySelector("#moonCalendarForm");
  const result = document.querySelector("#moonCalendarResult");
  const monthInput = document.querySelector("#moonMonth");
  if (!(form instanceof HTMLFormElement) || !(result instanceof HTMLElement) || !(monthInput instanceof HTMLInputElement)) {
    return;
  }

  const update = () => {
    const monthValue = monthInput.value;
    const focus = String(new FormData(form).get("focus") ?? "").trim();
    const [yearText, monthText] = monthValue.split("-");
    const year = Number.parseInt(yearText, 10);
    const monthIndex = Number.parseInt(monthText, 10) - 1;
    const monthDate = new Date(year, monthIndex, 1);
    const todayPhase = getMoonPhaseInfo(new Date());
    const events = getMonthPhaseEvents(year, monthIndex);
    const monthLabel = monthDate.toLocaleDateString("tr-TR", {
      month: "long",
      year: "numeric",
    });

    result.innerHTML = `
      <article class="result-hero">
        <p class="preview-label">Ay özeti</p>
        <h3>${monthLabel}</h3>
        <p>${focus ? `"${focus}" odağı ile birlikte` : "Bu ay için"} ana fazlar aşağıda sıralandı.</p>
      </article>

      <section class="result-grid">
        ${renderMetricCards([
          {
            label: "Bugünkü faz",
            value: todayPhase.name,
            note: todayPhase.theme,
          },
          {
            label: "Aydınlanma",
            value: `${todayPhase.illumination.toFixed(0)}%`,
            note: "Bugünkü ay yüzeyi",
          },
          {
            label: "Ana faz sayısı",
            value: String(events.length),
            note: "Ay içindeki temel dönüşler",
          },
          {
            label: "Odak",
            value: focus || "Genel ritim",
            note: "Takvim notu",
          },
        ])}
      </section>

      <article class="result-note-card">
        <h4>Faz listesi</h4>
        <div class="phase-list">
          ${events
            .map(
              (eventItem) => `
                <article class="phase-item">
                  <strong>${eventItem.name}</strong>
                  <span>${formatDateTime(eventItem.date)}</span>
                  <p>${eventItem.theme}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </article>
    `;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  update();
};

const renderEphemerisTablesResult = () => {
  const form = document.querySelector("#ephemerisForm");
  const result = document.querySelector("#ephemerisResult");
  const monthInput = document.querySelector("#ephemerisMonth");
  const yearNav = document.querySelector("#ephemerisYearNav");
  const monthStrip = document.querySelector("#ephemerisMonthStrip");
  const archive = document.querySelector("#ephemerisArchive");
  const heading = document.querySelector("#ephemerisHeading");
  const subheading = document.querySelector("#ephemerisSubheading");
  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(monthInput instanceof HTMLInputElement) ||
    !(yearNav instanceof HTMLElement) ||
    !(monthStrip instanceof HTMLElement) ||
    !(archive instanceof HTMLElement) ||
    !(heading instanceof HTMLElement) ||
    !(subheading instanceof HTMLElement)
  ) {
    return;
  }

  const setMonthValue = (year, monthIndex) => {
    monthInput.value = `${String(year)}-${String(monthIndex + 1).padStart(2, "0")}`;
  };

  const renderYearNavigation = (year) => {
    yearNav.innerHTML = `
      <button class="ephemeris-year-link" type="button" data-ephemeris-year="${year - 1}">&laquo; ${year - 1}</button>
      <span class="ephemeris-year-current">${year}</span>
      <button class="ephemeris-year-link" type="button" data-ephemeris-year="${year + 1}">${year + 1} &raquo;</button>
    `;
  };

  const renderMonthNavigation = (year, monthIndex) => {
    monthStrip.innerHTML = MONTH_LABELS.map((monthLabel, index) => {
      const activeClass = index === monthIndex ? " is-active" : "";
      return `
        <button
          class="ephemeris-month-link${activeClass}"
          type="button"
          data-ephemeris-month="${index}"
          data-ephemeris-year="${year}"
        >
          ${monthLabel}
        </button>
      `;
    }).join("");
  };

  const renderYearArchive = (activeYear) => {
    archive.innerHTML = Array.from({ length: 301 }, (_, index) => 1800 + index)
      .map((year) => {
        const activeClass = year === activeYear ? " is-active" : "";
        return `
          <button class="ephemeris-archive-link${activeClass}" type="button" data-ephemeris-year="${year}">
            ${year}
          </button>
        `;
      })
      .join("");
  };

  const update = () => {
    const formData = new FormData(form);
    const monthValue = String(formData.get("month") ?? "");
    const nodeMode = String(formData.get("nodeMode") ?? "mean");
    const lilithMode = String(formData.get("lilithMode") ?? "mean");
    const precisionKey = String(formData.get("precision") ?? "degree-minute");
    const symbolMode = String(formData.get("symbolMode") ?? "color");
    const [yearText, monthText] = monthValue.split("-");
    const year = Number.parseInt(yearText, 10);
    const monthIndex = Number.parseInt(monthText, 10) - 1;
    const monthDate = new Date(year, monthIndex, 1);

    if (Number.isNaN(monthDate.getTime())) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Ay eksik</h4>
          <p>Efemeris tablosunu görmek için geçerli bir ay seç.</p>
        </article>
      `;
      return;
    }

    renderYearNavigation(year);
    renderMonthNavigation(year, monthIndex);
    renderYearArchive(year);

    const monthLabel = monthDate.toLocaleDateString("tr-TR", {
      month: "long",
      year: "numeric",
    });
    const planets = getEphemerisPlanetSet(nodeMode, lilithMode);
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const rows = [];
    const firstDate = new Date(Date.UTC(year, monthIndex, 1, 0, 0, 0, 0));
    const lastDate = new Date(Date.UTC(year, monthIndex, daysInMonth, 0, 0, 0, 0));
    const deltaSiderealHours =
      (parseTimeToMinutes(getApproxSiderealTime(lastDate)) - parseTimeToMinutes(getApproxSiderealTime(firstDate)) + 1440) %
      1440;

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(Date.UTC(year, monthIndex, day, 0, 0, 0, 0));
      const weekday = WEEKDAY_SHORT_LABELS[date.getUTCDay()];
      const siderealTime = getApproxSiderealTime(date);
      const cells = planets
        .map((planet) => {
          const visibleDegree = getApproxPlanetDegree(date, planet);
          return `<td>${renderEphemerisCell(visibleDegree, precisionKey, symbolMode)}</td>`;
        })
        .join("");

      rows.push(`
        <tr>
          <td class="ephemeris-day-cell"><strong>${day}</strong></td>
          <td>${weekday}</td>
          <td>${siderealTime}</td>
          ${cells}
          <td><a class="ephemeris-chart-link" href="dogum-haritasi.html">Harita</a></td>
        </tr>
      `);
    }

    const deltaRowCells = planets
      .map((planet) => {
        const startDegree = getApproxPlanetDegree(firstDate, planet);
        const endDegree = getApproxPlanetDegree(lastDate, planet);
        return `<td>${formatEphemerisDiff(endDegree - startDegree, precisionKey)}</td>`;
      })
      .join("");

    const deltaHours = Math.floor(deltaSiderealHours / 60);
    const deltaMinutes = deltaSiderealHours % 60;

    heading.textContent = `${monthLabel} - Efemeris Tabloları`;
    subheading.textContent = "00:00 [UT/GMT] bazlı günlük konum akışı";

    result.innerHTML = `
      <article class="result-hero">
        <p class="preview-label">Efemeris özeti</p>
        <h3>${monthLabel}</h3>
        <p>
          Referans düzendeki efemeris tablosu; tarih, hafta günü, sidereal time, 10 gezegen,
          Ay Düğümü, Lilith, Chiron ve harita sütunlarını tek alanda gösterir.
        </p>
      </article>

      <section class="result-grid">
        ${renderMetricCards([
          {
            label: "Satır sayısı",
            value: String(daysInMonth),
            note: "Ay içindeki gün sayısı",
          },
          {
            label: "Düğüm modu",
            value: nodeMode === "true" ? "True" : "Mean",
            note: "Ay düğümü seçimi",
          },
          {
            label: "Lilith modu",
            value: lilithMode === "true" ? "True" : "Mean",
            note: "Lilith seçimi",
          },
          {
            label: "Doğruluk",
            value:
              precisionKey === "degree"
                ? "Derece"
                : precisionKey === "absolute"
                  ? "ABS derece"
                  : "Derece + dakika",
            note: symbolMode === "gray" ? "Gri sembol" : "Renkli sembol",
          },
        ])}
      </section>

      <article class="result-note-card">
        <h4>Gezegen tablosu</h4>
        <div class="ephemeris-table-wrap">
          <table class="ephemeris-table ephemeris-reference-table">
            <thead>
              <tr>
                <th colspan="2" rowspan="2">Tarih<br /><span>00:00 [UT/GMT]</span></th>
                <th colspan="${planets.length + 1}">Efemeris - ${monthLabel}</th>
                <th rowspan="2">Harita</th>
              </tr>
              <tr>
                <th>Sid.t.</th>
                ${planets.map((planet) => `<th title="${planet.label}">${planet.shortLabel ?? planet.label}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${rows.join("")}
              <tr class="ephemeris-delta-row">
                <td colspan="2"><strong>Delta</strong></td>
                <td>${String(deltaHours).padStart(2, "0")}:${String(deltaMinutes).padStart(2, "0")}</td>
                ${deltaRowCells}
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    `;
  };

  form.addEventListener("change", () => {
    update();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  yearNav.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const yearValue = target.dataset.ephemerisYear;
    if (!yearValue) {
      return;
    }

    const nextYear = Number.parseInt(yearValue, 10);
    const currentMonth = Number.parseInt(monthInput.value.split("-")[1] ?? "1", 10) - 1;
    setMonthValue(nextYear, currentMonth);
    update();
  });

  monthStrip.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const yearValue = target.dataset.ephemerisYear;
    const monthValue = target.dataset.ephemerisMonth;
    if (!yearValue || monthValue === undefined) {
      return;
    }

    setMonthValue(Number.parseInt(yearValue, 10), Number.parseInt(monthValue, 10));
    update();
  });

  archive.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const yearValue = target.dataset.ephemerisYear;
    if (!yearValue) {
      return;
    }

    setMonthValue(Number.parseInt(yearValue, 10), 0);
    update();
  });

  update();
};

const renderVedicSiderealResult = async () => {
  const form = document.querySelector("#vedicForm");
  const result = document.querySelector("#vedicResult");
  const citySelect = form?.querySelector('select[name="city"]');
  const districtSelect = form?.querySelector('[data-location-district]');
  const neighborhoodSelect = form?.querySelector('[data-location-neighborhood]');
  const placeInput = form?.querySelector("[data-vedic-place]");
  const manualToggle = form?.querySelector("[data-vedic-manual-toggle]");
  const manualPanel = form?.querySelector("[data-vedic-manual-panel]");
  const latitudeDegreesInput = form?.querySelector("[data-vedic-lat-deg]");
  const latitudeMinutesInput = form?.querySelector("[data-vedic-lat-min]");
  const latitudeDirectionSelect = form?.querySelector("[data-vedic-lat-dir]");
  const longitudeDegreesInput = form?.querySelector("[data-vedic-lon-deg]");
  const longitudeMinutesInput = form?.querySelector("[data-vedic-lon-min]");
  const longitudeDirectionSelect = form?.querySelector("[data-vedic-lon-dir]");

  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(citySelect instanceof HTMLSelectElement) ||
    !(districtSelect instanceof HTMLSelectElement) ||
    !(neighborhoodSelect instanceof HTMLSelectElement) ||
    !(placeInput instanceof HTMLInputElement) ||
    !(manualToggle instanceof HTMLInputElement) ||
    !(manualPanel instanceof HTMLElement) ||
    !(latitudeDegreesInput instanceof HTMLInputElement) ||
    !(latitudeMinutesInput instanceof HTMLInputElement) ||
    !(latitudeDirectionSelect instanceof HTMLSelectElement) ||
    !(longitudeDegreesInput instanceof HTMLInputElement) ||
    !(longitudeMinutesInput instanceof HTMLInputElement) ||
    !(longitudeDirectionSelect instanceof HTMLSelectElement)
  ) {
    return;
  }

  populateVedicSelectControls(form);

  await bindLocationSelects({
    citySelect,
    districtSelect,
    neighborhoodSelect,
  });

  let lastAutoLocation = null;

  const setManualPanelVisibility = () => {
    manualPanel.hidden = !manualToggle.checked;
  };

  const syncManualCoordinateFields = (location) => {
    const latitudeParts = decimalToDegreesMinutes(location.latitude, "N", "S");
    const longitudeParts = decimalToDegreesMinutes(location.longitude, "E", "W");

    latitudeDegreesInput.value = String(latitudeParts.degrees);
    latitudeMinutesInput.value = String(latitudeParts.minutes);
    latitudeDirectionSelect.value = latitudeParts.direction;
    longitudeDegreesInput.value = String(longitudeParts.degrees);
    longitudeMinutesInput.value = String(longitudeParts.minutes);
    longitudeDirectionSelect.value = longitudeParts.direction;
  };

  const syncCoordinates = async ({ forceManualSync = false, forcePlaceSync = false } = {}) => {
    const city = await resolveSelectedLocationCoordinates({
      citySelect,
      districtSelect,
      neighborhoodSelect,
    });

    lastAutoLocation = city;

    if (!manualToggle.checked || forceManualSync) {
      syncManualCoordinateFields(city);
    }

    if (!manualToggle.checked || forcePlaceSync) {
      const district = getSelectedOptionLabel(districtSelect);
      const neighborhood = getSelectedOptionLabel(neighborhoodSelect);
      const country = String(new FormData(form).get("country") ?? "Türkiye").trim() || "Türkiye";
      placeInput.value = `${city.label}${district ? `, ${district}` : ""}${neighborhood ? ` / ${neighborhood}` : ""}, ${country}`;
    }

    return city;
  };

  const update = async () => {
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim() || "Danışan";
    const birthDay = String(formData.get("birthDay") ?? "1");
    const birthMonth = String(formData.get("birthMonth") ?? "1");
    const birthYear = String(formData.get("birthYear") ?? "1990");
    const enteredHour = String(formData.get("birthHour") ?? "00");
    const enteredMinute = String(formData.get("birthMinute") ?? "00");
    const unknownBirthTime = formData.has("unknownBirthTime");
    const birthHour = unknownBirthTime ? "12" : enteredHour;
    const birthMinute = unknownBirthTime ? "00" : enteredMinute;
    const birthTime = `${birthHour}:${birthMinute}`;
    const displayedBirthTime = unknownBirthTime ? "12:00 (yaklaşık)" : `${enteredHour}:${enteredMinute}`;
    const district = getSelectedOptionLabel(districtSelect);
    const neighborhood = getSelectedOptionLabel(neighborhoodSelect);
    const country = String(formData.get("country") ?? "").trim() || "Türkiye";
    const birthPlaceLabel = String(formData.get("birthPlace") ?? "").trim();
    const houseSystemKey = String(formData.get("houseSystem") ?? "placidus");
    const focusAreaKey = String(formData.get("focusArea") ?? "dharma");
    const readingStyleKey = String(formData.get("readingStyle") ?? "balanced");
    const ayanamsaKey = String(formData.get("ayanamsa") ?? "lahiri");
    const toleranceKey = String(formData.get("tolerance") ?? "1");
    const timezoneOffsetKey = String(formData.get("timezoneOffset") ?? "auto");
    const dstModeKey = String(formData.get("dstMode") ?? "auto");
    const showNakshatra = formData.has("showNakshatra");
    const showRemedies = formData.has("showRemedies");
    const showDasha = formData.has("showDasha");
    const compareTropical = formData.has("compareTropical");
    const showFortune = formData.has("showFortune");
    const showChiron = formData.has("showChiron");
    const showLilith = formData.has("showLilith");
    const showNodes = formData.has("showNodes");
    const trueLilith = formData.has("trueLilith");
    const trueNodes = formData.has("trueNodes");
    const showAscMcAspects = formData.has("showAscMcAspects");
    const ayanamsa = AYANAMSA_LABELS[ayanamsaKey] ?? AYANAMSA_LABELS.lahiri;
    const houseSystem = HOUSE_SYSTEM_LABELS[houseSystemKey] ?? HOUSE_SYSTEM_LABELS.placidus;
    const focusArea = VEDIC_FOCUS_LABELS[focusAreaKey] ?? VEDIC_FOCUS_LABELS.dharma;
    const readingStyle = READING_STYLE_LABELS[readingStyleKey] ?? READING_STYLE_LABELS.balanced;
    const tolerance = TOLERANCE_LABELS[toleranceKey] ?? TOLERANCE_LABELS["1"];
    const timezoneLabel = TIMEZONE_OPTIONS.find((option) => option.value === timezoneOffsetKey)?.label ?? "Otomatik";
    const dstLabel = DST_MODE_LABELS[dstModeKey] ?? DST_MODE_LABELS.auto;
    const date = buildBirthDate({
      yearValue: birthYear,
      monthValue: birthMonth,
      dayValue: birthDay,
      hourValue: birthHour,
      minuteValue: birthMinute,
    });

    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Tarih eksik</h4>
          <p>Vedik özeti göstermek için geçerli bir gün, ay, yıl ve saat bilgisi gir.</p>
        </article>
      `;
      return;
    }

    const autoLocation = lastAutoLocation ?? (await syncCoordinates());
    const latitude = manualToggle.checked
      ? degreesMinutesToDecimal(
          latitudeDegreesInput.value,
          latitudeMinutesInput.value,
          ["S"],
          getSelectedOptionValue(latitudeDirectionSelect),
        )
      : autoLocation.latitude;
    const longitude = manualToggle.checked
      ? degreesMinutesToDecimal(
          longitudeDegreesInput.value,
          longitudeMinutesInput.value,
          ["W"],
          getSelectedOptionValue(longitudeDirectionSelect),
        )
      : autoLocation.longitude;

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Koordinatlar eksik</h4>
          <p>Manuel koordinat kullanıyorsan derece, dakika ve yön alanlarını doldur.</p>
        </article>
      `;
      return;
    }

    const locationLabel =
      birthPlaceLabel ||
      `${autoLocation.label}${district ? `, ${district}` : ""}${neighborhood ? ` / ${neighborhood}` : ""}, ${country}`;
    const location = {
      label: locationLabel,
      latitude,
      longitude,
      source: manualToggle.checked ? "manual" : autoLocation.source,
    };
    const birthMinutes = parseTimeToMinutes(birthTime);
    const tropicalSunDegree = getApproxTropicalSunDegree(date);
    const tropicalMoonDegree = mod(tropicalSunDegree + getMoonPhaseInfo(date).age * 12.2, 360);
    const sunriseMinutes = getApproxSunriseMinutes(date, location);
    const tropicalAscDegree = mod(
      (getSunSign(date).index + Math.floor((birthMinutes - sunriseMinutes) / 120)) * 30 + birthMinutes / 4,
      360,
    );
    const siderealSunDegree = mod(tropicalSunDegree - ayanamsa.degrees, 360);
    const siderealMoonDegree = mod(tropicalMoonDegree - ayanamsa.degrees, 360);
    const siderealAscDegree = mod(tropicalAscDegree - ayanamsa.degrees, 360);
    const siderealMcDegree = mod(siderealAscDegree + 90, 360);
    const moonNakshatra = getNakshatraInfo(siderealMoonDegree);
    const ascNakshatra = getNakshatraInfo(siderealAscDegree);
    const siderealSun = formatZodiacPosition(siderealSunDegree);
    const siderealMoon = formatZodiacPosition(siderealMoonDegree);
    const siderealAsc = formatZodiacPosition(siderealAscDegree);
    const tropicalSun = formatZodiacPosition(tropicalSunDegree);
    const miniChartMarkup = renderMiniChartPreview({
      sunDegree: siderealSunDegree,
      moonDegree: siderealMoonDegree,
      ascDegree: siderealAscDegree,
      mcDegree: siderealMcDegree,
      houseSystem,
      focusArea,
    });
    const visibleObjects = [
      showFortune ? "Fortune" : "",
      showChiron ? "Chiron" : "",
      showLilith ? `Lilith${trueLilith ? " (True)" : ""}` : "",
      showNodes ? `Ay düğümleri${trueNodes ? " (True)" : ""}` : "",
    ].filter(Boolean);
    const aspectTargets = [
      "Temel gezegenler",
      showAscMcAspects ? "ASC & MC" : "",
      visibleObjects.length > 0 ? visibleObjects.join(", ") : "",
    ].filter(Boolean);
    const remedyLine =
      readingStyleKey === "spiritual"
        ? "Mantra, nefes ve niyet pratiği bu haritada denge kuran ilk adım olur."
        : readingStyleKey === "practical"
          ? "Rutin, zaman disiplini ve net öncelik listesi vedik dengeyi güçlendirir."
          : "Ritüel ile gündelik düzen arasında küçük ve sürekli adımlar bu haritayı dengeler.";
    const coordinateModeLabel = manualToggle.checked ? "Manuel giriş" : "Otomatik eşleme";
    const locationSourceLabel =
      location.source === "manual"
        ? "Kullanıcının girdiği koordinat"
        : location.source === "neighborhood"
          ? "Mahalle seviyesi eşleme"
          : "İl merkezi eşleme";

    result.innerHTML = `
      <article class="result-hero">
        <p class="preview-label">Vedik özet</p>
        <h3>${name} için sideral harita ana başlıkları</h3>
        <p>
          ${formatDate(date)} tarihinde ${displayedBirthTime} saat girdisiyle ${location.label} için
          ${ayanamsa.label} ayanamsa ve ${houseSystem} ev sistemi kullanılarak vedik özet oluşturuldu.
        </p>
      </article>

      <section class="result-grid">
        ${renderMetricCards([
          {
            label: "Sideral Güneş",
            value: siderealSun,
            note: "Vedik kimlik ekseni",
          },
          {
            label: "Sideral Ay",
            value: siderealMoon,
            note: `${moonNakshatra.name} · Pada ${moonNakshatra.pada}`,
          },
          {
            label: "Sideral Yükselen",
            value: siderealAsc,
            note: `${ascNakshatra.name} · Pada ${ascNakshatra.pada}`,
          },
          {
            label: "Ay Nakshatra",
            value: moonNakshatra.name,
            note: `Pada ${moonNakshatra.pada}`,
          },
          {
            label: "Ayanamsa",
            value: ayanamsa.label,
            note: `${ayanamsa.degrees.toFixed(1)}° kayma`,
          },
          {
            label: "Ev sistemi",
            value: houseSystem,
            note: tolerance,
          },
          {
            label: "Saat modu",
            value: unknownBirthTime ? "Bilinmeyen saat" : "Kesin saat",
            note: unknownBirthTime ? "ASC ve evler yaklaşık kabul edilir" : "Yükselen ve evler saat girdisine bağlı",
          },
        ])}
      </section>

      ${miniChartMarkup}

      <article class="result-note-card">
        <h4>Vedik yorum ekseni</h4>
        <p>
          ${focusArea} bu haritada ana lens olarak öne çıkıyor. ${siderealSun} konumu merkezin
          nerede toplandığını gösterirken, ${siderealAsc} dış dünyaya verdiğin vedik tonu belirliyor.
          ${showNakshatra ? `${moonNakshatra.name} Ay nakshatrası sezgisel ritmi anahtarlar.` : ""}
        </p>
        <div class="seek-mini-grid">
          <article class="seek-mini-card">
            <strong>Doğum saati</strong>
            <span>${displayedBirthTime}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Koordinat modu</strong>
            <span>${coordinateModeLabel}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Saat dilimi</strong>
            <span>${timezoneLabel}</span>
          </article>
          <article class="seek-mini-card">
            <strong>DST</strong>
            <span>${dstLabel}</span>
          </article>
        </div>
      </article>

      <article class="result-note-card">
        <h4>Hesap girdileri</h4>
        <div class="seek-mini-grid">
          <article class="seek-mini-card">
            <strong>Yer etiketi</strong>
            <span>${location.label}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Enlem</strong>
            <span>${formatCoordinateValue(location.latitude, "K", "G")}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Boylam</strong>
            <span>${formatCoordinateValue(location.longitude, "D", "B")}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Konum kaynağı</strong>
            <span>${locationSourceLabel}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Orb ayarı</strong>
            <span>${tolerance}</span>
          </article>
          <article class="seek-mini-card">
            <strong>Okuma tonu</strong>
            <span>${readingStyle}</span>
          </article>
        </div>
      </article>

      <article class="result-note-card">
        <h4>Vedik notlar ve geniş ayarlar</h4>
        <div class="phase-list">
          <article class="phase-item">
            <strong>Gösterilen noktalar</strong>
            <span>${visibleObjects.length > 0 ? visibleObjects.join(", ") : "Temel gezegenler"}</span>
            <p>Bu seçimler harita özetinde hangi yardımcı sembollerin öne çıktığını belirler.</p>
          </article>
          <article class="phase-item">
            <strong>Açı paketi</strong>
            <span>${aspectTargets.join(" · ")}</span>
            <p>Açı değerlendirmesi ${tolerance.toLowerCase()} ile özetlenir.</p>
          </article>
          ${
            compareTropical
              ? `
                <article class="phase-item">
                  <strong>Tropik fark</strong>
                  <span>Tropik Güneş: ${tropicalSun}</span>
                  <p>Sideral yoruma geçerken yaklaşık ${ayanamsa.degrees.toFixed(1)}° kayma uygulanır.</p>
                </article>
              `
              : ""
          }
          ${
            showDasha
              ? `
                <article class="phase-item">
                  <strong>Dasha yönelimi</strong>
                  <span>${moonNakshatra.name} teması</span>
                  <p>Ay nakshatrası, hangi yaşam başlığının zamanla daha görünür olacağını işaret eder.</p>
                </article>
              `
              : ""
          }
          ${
            showRemedies
              ? `
                <article class="phase-item">
                  <strong>Dengeleme önerisi</strong>
                  <span>${focusArea}</span>
                  <p>${remedyLine}</p>
                </article>
              `
              : ""
          }
          ${
            unknownBirthTime
              ? `
                <article class="phase-item">
                  <strong>Bilinmeyen saat notu</strong>
                  <span>Yükselen yaklaşıklandı</span>
                  <p>Saat bilinmediği için yükselen ve evler öğle eksenine göre yaklaşık hesaplandı.</p>
                </article>
              `
              : ""
          }
          <article class="phase-item">
            <strong>Konum kaydı</strong>
            <span>${autoLocation.label}, ${country}${district ? ` / ${district}` : ""}${neighborhood ? ` / ${neighborhood}` : ""}</span>
            <p>${locationSourceLabel}. Yer etiketi farklıysa sonuçta girilen metin kullanılır.</p>
          </article>
        </div>
      </article>
    `;
  };

  setManualPanelVisibility();

  citySelect.addEventListener("locationresolved", () => {
    syncCoordinates().then(() => {
      update();
    });
  });

  neighborhoodSelect.addEventListener("change", () => {
    syncCoordinates().then(() => {
      update();
    });
  });

  manualToggle.addEventListener("change", () => {
    setManualPanelVisibility();
    if (!manualToggle.checked) {
      syncCoordinates({ forceManualSync: true, forcePlaceSync: true }).then(() => {
        update();
      });
      return;
    }
    update();
  });

  form.addEventListener("change", (event) => {
    const target = event.target;
    if (target === citySelect || target === districtSelect || target === neighborhoodSelect || target === manualToggle) {
      return;
    }

    update();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  await syncCoordinates({ forceManualSync: true, forcePlaceSync: true });
  update();
};

const initializeTools = async () => {
  await populateCitySelects();

  if (pageName === "birth-chart") {
    renderBirthChartResult();
  }

  if (pageName === "rising-sign") {
    await renderRisingSignResult();
  }

  if (pageName === "moon-calendar") {
    renderMoonCalendarResult();
  }

  if (pageName === "ephemeris-tables") {
    renderEphemerisTablesResult();
  }

  if (pageName === "birth-chart-extended") {
    await renderExtendedBirthChartResult();
  }

  if (pageName === "vedic-sidereal") {
    await renderVedicSiderealResult();
  }
};

initializeTools();
