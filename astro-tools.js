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

const SUN_SIGN_DETAILS = {
  Koç: {
    dateRange: "21 Mart - 19 Nisan",
    ruler: "Mars",
    focus: "Hızlı başlangıçlar, cesaret ve doğrudan hamle",
    strength: "Karar alırken hızlanır, ilk adımı çekinmeden atar.",
    caution: "Sabırsızlık ve acele tepki ilişkileri gerebilir.",
  },
  Boğa: {
    dateRange: "20 Nisan - 20 Mayıs",
    ruler: "Venüs",
    focus: "Güven, somut konfor ve istikrarlı tempo",
    strength: "Kalıcı düzen kurar, sakin ama dayanıklı ilerler.",
    caution: "İnat ve değişime direnç ritmi ağırlaştırabilir.",
  },
  "İkizler": {
    dateRange: "21 Mayıs - 20 Haziran",
    ruler: "Merkür",
    focus: "Merak, hızlanan zihin ve hareketli iletişim",
    strength: "Bağlantı kurar, öğrenir, birden fazla alanı taşır.",
    caution: "Dikkatin kolay dağılması derinleşmeyi geciktirebilir.",
  },
  Yengeç: {
    dateRange: "21 Haziran - 22 Temmuz",
    ruler: "Ay",
    focus: "Duygusal güven, aidiyet ve koruyucu bağ",
    strength: "Yakın çevreyi besler, sezgiyle ortamı hızlı okur.",
    caution: "Aşırı içe çekilme veya alınganlık akışı zorlayabilir.",
  },
  Aslan: {
    dateRange: "23 Temmuz - 22 Ağustos",
    ruler: "Güneş",
    focus: "Görünürlük, yaratıcılık ve güçlü sahne enerjisi",
    strength: "İlham verir, dikkat toplar, sıcak bir merkez kurar.",
    caution: "Onay ihtiyacı büyüdüğünde dramatik tepkiler doğabilir.",
  },
  "Başak": {
    dateRange: "23 Ağustos - 22 Eylül",
    ruler: "Merkür",
    focus: "Düzen, analiz ve ince ayarla ilerleme",
    strength: "Detay görür, sistemi toparlar, işleyen akış kurar.",
    caution: "Aşırı eleştiri ve kusur odağı gevşemeyi azaltabilir.",
  },
  Terazi: {
    dateRange: "23 Eylül - 22 Ekim",
    ruler: "Venüs",
    focus: "Denge, ilişki zekası ve estetik uyum",
    strength: "Köprü kurar, ortamı yumuşatır, ortak dil üretir.",
    caution: "Kararsızlık veya herkesi memnun etme çabası yorabilir.",
  },
  Akrep: {
    dateRange: "23 Ekim - 21 Kasım",
    ruler: "Plüton",
    focus: "Derinlik, sadakat ve dönüşüm gücü",
    strength: "Yoğunlaşır, gizli olanı sezer, kökten değişim başlatır.",
    caution: "Kontrol ihtiyacı veya kuşku bağı ağırlaştırabilir.",
  },
  Yay: {
    dateRange: "22 Kasım - 21 Aralık",
    ruler: "Jüpiter",
    focus: "Keşif, genişleme ve anlam arayışı",
    strength: "Ufuk açar, moral yükseltir, ileriye dönük düşünür.",
    caution: "Fazla dağılmak ya da patavatsızlık dengeyi bozabilir.",
  },
  Oğlak: {
    dateRange: "22 Aralık - 19 Ocak",
    ruler: "Satürn",
    focus: "Hedef, yapı ve sorumluluk çizgisi",
    strength: "Uzun vadeli plan kurar, emekle güven üretir.",
    caution: "Katılık veya duyguyu geri planda bırakmak soğuk gelebilir.",
  },
  Kova: {
    dateRange: "20 Ocak - 18 Şubat",
    ruler: "Uranüs",
    focus: "Yenilik, özgün fikir ve bağımsız duruş",
    strength: "Kalabalıktan ayrılır, yeni perspektif getirir.",
    caution: "Mesafe koymak veya aşırı zihinsellik yakınlığı azaltabilir.",
  },
  "Balık": {
    dateRange: "19 Şubat - 20 Mart",
    ruler: "Neptün",
    focus: "Sezgi, empati ve akış hissi",
    strength: "Duyguyu derinden hisseder, yaratıcı bağ kurar.",
    caution: "Sınırların bulanması veya erteleme ritmi zorlaştırabilir.",
  },
};

const MOON_SIGN_DETAILS = {
  Koç: {
    focus: "duyguları hızlı yaşayan ve anında tepki veren bir ritim",
    strength: "İç dünyada cesur, dürüst ve doğrudan tepki verme eğilimi güçlenir.",
    caution: "Ani parlamalar ve sabırsızlık duygusal dengeyi zorlayabilir.",
  },
  Boğa: {
    focus: "duygusal güven, konfor ve sabitlik arayan bir ritim",
    strength: "Sakinleşme, dayanıklılık ve yakınlıkta güven verme tarafı belirginleşir.",
    caution: "Alışkanlığa fazla tutunmak değişimi zorlaştırabilir.",
  },
  "İkizler": {
    focus: "duyguları konuşarak işleyen hareketli bir zihin",
    strength: "Hisleri söze dökme, hızlı bağlantı kurma ve merak canlı kalır.",
    caution: "Duyguyu zihinselleştirmek derinliği geciktirebilir.",
  },
  Yengeç: {
    focus: "yakınlık, korunma ve aidiyet üstünden çalışan bir ritim",
    strength: "Sezgi, şefkat ve bağ kurma ihtiyacı duygusal ekseni besler.",
    caution: "Alınganlık ya da kabuğa çekilme artabilir.",
  },
  Aslan: {
    focus: "duyguları görünür ve sıcak biçimde ifade eden bir ritim",
    strength: "Kalpten verme, sıcaklık ve sadakat duygusal alanda öne çıkar.",
    caution: "İlgi görme ihtiyacı kırılganlığı büyütebilir.",
  },
  "Başak": {
    focus: "duyguları düzenleyip anlamlandırmaya çalışan bir ritim",
    strength: "İnce gözlem, fayda üretme ve toparlama isteği güçlenir.",
    caution: "Aşırı analiz rahat akışı daraltabilir.",
  },
  Terazi: {
    focus: "denge, karşılıklılık ve uyum arayan bir ritim",
    strength: "Yumuşatma, arabuluculuk ve zarif bağ kurma tarafı kuvvetlidir.",
    caution: "Kararsızlık ya da memnun etme baskısı iç huzuru bozabilir.",
  },
  Akrep: {
    focus: "duyguları derinden yaşayan yoğun bir ritim",
    strength: "Bağlılık, sezgi ve duygunun köküne inme becerisi artar.",
    caution: "Kuşku, kontrol ya da içe kapanma baskı yaratabilir.",
  },
  Yay: {
    focus: "özgürlük, anlam ve genişleme arayan bir ritim",
    strength: "Moral toplama, umut taşıma ve duyguyu büyüterek görme eğilimi vardır.",
    caution: "Rahatsız hislerden kaçmak yüzeysellik yaratabilir.",
  },
  Oğlak: {
    focus: "duyguları kontrollü ve ölçülü tutan bir ritim",
    strength: "Sorumluluk, dayanıklılık ve gerçekçilik duygusal tarafta destek olur.",
    caution: "Mesafeli kalmak ya da fazla tutmak soğuk hissettirebilir.",
  },
  Kova: {
    focus: "duyguları özgün ve mesafeli şekilde işleyen bir ritim",
    strength: "Farklı bakış, zihinsel açıklık ve bağımsızlık hissi güçlenir.",
    caution: "Fazla uzak durmak yakınlığı zorlaştırabilir.",
  },
  "Balık": {
    focus: "sezgisel, geçirgen ve empatik bir duygusal akış",
    strength: "Hayal gücü, empati ve yumuşak bağ kurma yönü belirginleşir.",
    caution: "Sınırların erimesi ya da dağılma hissi artabilir.",
  },
};

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

const LUNAR_NODE_PERIODS = [
  { start: "1949-01-26", end: "1950-07-26", north: "Koç", south: "Terazi" },
  { start: "1950-07-27", end: "1952-03-28", north: "Balık", south: "Başak" },
  { start: "1952-03-29", end: "1953-10-09", north: "Kova", south: "Aslan" },
  { start: "1953-10-10", end: "1955-04-02", north: "Oğlak", south: "Yengeç" },
  { start: "1955-04-03", end: "1956-10-04", north: "Yay", south: "İkizler" },
  { start: "1956-10-05", end: "1958-06-16", north: "Akrep", south: "Boğa" },
  { start: "1958-06-17", end: "1959-12-15", north: "Terazi", south: "Koç" },
  { start: "1959-12-16", end: "1961-06-10", north: "Başak", south: "Balık" },
  { start: "1961-06-11", end: "1962-12-22", north: "Aslan", south: "Kova" },
  { start: "1962-12-23", end: "1964-08-24", north: "Yengeç", south: "Oğlak" },
  { start: "1964-08-25", end: "1966-02-19", north: "İkizler", south: "Yay" },
  { start: "1966-02-20", end: "1967-08-19", north: "Boğa", south: "Akrep" },
  { start: "1967-08-20", end: "1969-04-18", north: "Koç", south: "Terazi" },
  { start: "1969-04-19", end: "1970-11-01", north: "Balık", south: "Başak" },
  { start: "1970-11-02", end: "1972-04-27", north: "Kova", south: "Aslan" },
  { start: "1972-04-28", end: "1973-10-26", north: "Oğlak", south: "Yengeç" },
  { start: "1973-10-27", end: "1975-07-09", north: "Yay", south: "İkizler" },
  { start: "1975-07-10", end: "1977-01-07", north: "Akrep", south: "Boğa" },
  { start: "1977-01-08", end: "1978-07-05", north: "Terazi", south: "Koç" },
  { start: "1978-07-06", end: "1980-01-12", north: "Başak", south: "Balık" },
  { start: "1980-01-13", end: "1981-09-24", north: "Aslan", south: "Kova" },
  { start: "1981-09-25", end: "1983-03-16", north: "Yengeç", south: "Oğlak" },
  { start: "1983-03-17", end: "1984-09-11", north: "İkizler", south: "Yay" },
  { start: "1984-09-12", end: "1986-04-06", north: "Boğa", south: "Akrep" },
  { start: "1986-04-07", end: "1987-12-02", north: "Koç", south: "Terazi" },
  { start: "1987-12-03", end: "1989-05-22", north: "Balık", south: "Başak" },
  { start: "1989-05-23", end: "1990-11-18", north: "Kova", south: "Aslan" },
  { start: "1990-11-19", end: "1992-08-01", north: "Oğlak", south: "Yengeç" },
  { start: "1992-08-02", end: "1994-02-01", north: "Yay", south: "İkizler" },
  { start: "1994-02-02", end: "1995-07-31", north: "Akrep", south: "Boğa" },
  { start: "1995-08-01", end: "1997-01-25", north: "Terazi", south: "Koç" },
  { start: "1997-01-26", end: "1998-10-20", north: "Başak", south: "Balık" },
  { start: "1998-10-21", end: "2000-04-09", north: "Aslan", south: "Kova" },
  { start: "2000-04-10", end: "2001-10-12", north: "Yengeç", south: "Oğlak" },
  { start: "2001-10-13", end: "2003-04-13", north: "İkizler", south: "Yay" },
  { start: "2003-04-14", end: "2004-12-25", north: "Boğa", south: "Akrep" },
  { start: "2004-12-26", end: "2006-06-21", north: "Koç", south: "Terazi" },
  { start: "2006-06-22", end: "2007-12-18", north: "Balık", south: "Başak" },
  { start: "2007-12-19", end: "2009-08-21", north: "Kova", south: "Aslan" },
  { start: "2009-08-22", end: "2011-03-03", north: "Oğlak", south: "Yengeç" },
  { start: "2011-03-04", end: "2012-08-29", north: "Yay", south: "İkizler" },
  { start: "2012-08-30", end: "2014-02-18", north: "Akrep", south: "Boğa" },
  { start: "2014-02-19", end: "2015-11-11", north: "Terazi", south: "Koç" },
  { start: "2015-11-12", end: "2017-05-09", north: "Başak", south: "Balık" },
  { start: "2017-05-10", end: "2018-11-06", north: "Aslan", south: "Kova" },
  { start: "2018-11-07", end: "2020-05-04", north: "Yengeç", south: "Oğlak" },
  { start: "2020-05-05", end: "2022-01-18", north: "İkizler", south: "Yay" },
  { start: "2022-01-19", end: "2023-07-17", north: "Boğa", south: "Akrep" },
  { start: "2023-07-18", end: "2025-01-11", north: "Koç", south: "Terazi" },
  { start: "2025-01-12", end: "2026-07-26", north: "Balık", south: "Başak" },
  { start: "2026-07-27", end: "2028-03-26", north: "Kova", south: "Aslan" },
  { start: "2028-03-27", end: "2029-09-23", north: "Oğlak", south: "Yengeç" },
  { start: "2029-09-24", end: "2031-03-20", north: "Yay", south: "İkizler" },
  { start: "2031-03-21", end: "2032-12-01", north: "Akrep", south: "Boğa" },
];

const NODE_FOCUS_DESCRIPTIONS = {
  general: "Yaşam yönü",
  relationships: "İlişki dersi",
  career: "Kariyer hattı",
  spiritual: "Ruhsal eksen",
};

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

const COMPATIBILITY_STYLE_LABELS = {
  romance: "Romantik uyum",
  friendship: "Arkadaşlık uyumu",
  longterm: "Uzun vadeli birliktelik",
};

const COMPATIBILITY_DEPTH_LABELS = {
  quick: "Hızlı özet",
  balanced: "Dengeli karşılaştırma",
  extended: "Geniş vurgu seti",
};

const READING_TONE_LABELS = {
  soft: "Yumuşak yorum",
  direct: "Net yorum",
  strategic: "Stratejik yorum",
};

const ORB_LEVEL_VALUES = {
  tight: 4,
  balanced: 6,
  wide: 8,
};

const COMPATIBILITY_ASPECTS = [
  { key: "conjunction", angle: 0, label: "kavuşum", weight: 16 },
  { key: "sextile", angle: 60, label: "sekstil", weight: 13 },
  { key: "square", angle: 90, label: "kare", weight: 7 },
  { key: "trine", angle: 120, label: "üçgen", weight: 15 },
  { key: "opposition", angle: 180, label: "karşıt", weight: 9 },
];

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
const SIGN_ICON_FILES = [
  "aries.png",
  "taurus.png",
  "gemini.png",
  "cancer.png",
  "leo.png",
  "virgo.png",
  "libra.png",
  "scorpio.png",
  "sagittarius.png",
  "capricorn.png",
  "aquarius.png",
  "pisces.png",
];

const ZODIAC_GLYPHS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
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
const PROFILE_STORAGE_KEYS = {
  users: "astrohesap-users",
  session: "astrohesap-session",
};

const getSavedBirthProfile = () => {
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
};

const splitSavedBirthDate = (birthDate) => {
  if (!birthDate) {
    return { year: "", month: "", day: "" };
  }

  const [year = "", month = "", day = ""] = String(birthDate).split("-");
  return {
    year,
    month: month ? String(Number.parseInt(month, 10)) : "",
    day: day ? String(Number.parseInt(day, 10)) : "",
  };
};

const splitSavedBirthTime = (birthTime) => {
  if (!birthTime) {
    return { hour: "", minute: "" };
  }

  const [hour = "", minute = ""] = String(birthTime).split(":");
  return { hour, minute };
};

const setSavedLocationDatasets = ({ citySelect, districtSelect, neighborhoodSelect, profile }) => {
  if (citySelect instanceof HTMLSelectElement) {
    citySelect.dataset.defaultCityLabel = profile?.city?.trim() ?? "";
  }

  if (districtSelect instanceof HTMLSelectElement) {
    districtSelect.dataset.selectedDistrict = profile?.district?.trim() ?? "";
  }

  if (neighborhoodSelect instanceof HTMLSelectElement) {
    neighborhoodSelect.dataset.selectedNeighborhood = profile?.neighborhood?.trim() ?? "";
  }
};

const applySavedBirthProfileToPage = () => {
  const profile = getSavedBirthProfile();
  if (!profile) {
    return false;
  }

  const dateParts = splitSavedBirthDate(profile.birthDate);
  const timeParts = splitSavedBirthTime(profile.birthTime);

  if (pageName === "rising-sign") {
    const form = document.querySelector("#risingSignForm");
    if (!(form instanceof HTMLFormElement)) {
      return false;
    }

    const daySelect = form.querySelector("[data-rising-day]");
    const monthSelect = form.querySelector("[data-rising-month]");
    const yearSelect = form.querySelector("[data-rising-year]");
    const hourSelect = form.querySelector("[data-rising-hour]");
    const minuteSelect = form.querySelector("[data-rising-minute]");
    const unknownInput = form.querySelector('input[name="unknownBirthTime"]');
    const citySelect = document.querySelector("#risingCity");
    const districtSelect = document.querySelector("#risingDistrict");
    const neighborhoodSelect = document.querySelector("#risingNeighborhood");

    if (daySelect instanceof HTMLSelectElement) daySelect.dataset.selected = dateParts.day;
    if (monthSelect instanceof HTMLSelectElement) monthSelect.dataset.selected = dateParts.month;
    if (yearSelect instanceof HTMLSelectElement) yearSelect.dataset.selected = dateParts.year;
    if (hourSelect instanceof HTMLSelectElement) hourSelect.dataset.selected = timeParts.hour;
    if (minuteSelect instanceof HTMLSelectElement) minuteSelect.dataset.selected = timeParts.minute;
    if (unknownInput instanceof HTMLInputElement) unknownInput.checked = Boolean(profile.timeUnknown);
    setSavedLocationDatasets({ citySelect, districtSelect, neighborhoodSelect, profile });
    return true;
  }

  if (pageName === "birth-chart-extended") {
    const form = document.querySelector("#birthChartExtendedForm");
    if (!(form instanceof HTMLFormElement)) {
      return false;
    }

    const birthDateInput = form.querySelector('input[name="birthDate"]');
    const birthTimeInput = form.querySelector('input[name="birthTime"]');
    const citySelect = document.querySelector("[data-extended-city]");
    const districtSelect = form.querySelector('[data-location-district]');
    const neighborhoodSelect = form.querySelector('[data-location-neighborhood]');

    if (birthDateInput instanceof HTMLInputElement) birthDateInput.value = profile.birthDate ?? "";
    if (birthTimeInput instanceof HTMLInputElement) birthTimeInput.value = profile.birthTime ?? "";
    setSavedLocationDatasets({ citySelect, districtSelect, neighborhoodSelect, profile });
    return true;
  }

  if (pageName === "sun-sign-calculator" || pageName === "moon-sign-calculator") {
    const form = document.querySelector(pageName === "sun-sign-calculator" ? "#sunSignForm" : "#moonSignForm");
    if (!(form instanceof HTMLFormElement)) {
      return false;
    }

    const birthDateInput = form.querySelector('input[name="birthDate"]');
    const birthTimeInput = form.querySelector('input[name="birthTime"]');
    const unknownInput = form.querySelector('input[name="unknownTime"]');
    const citySelect = form.querySelector('select[name="city"]');
    const districtSelect = form.querySelector('[data-location-district]');
    const neighborhoodSelect = form.querySelector('[data-location-neighborhood]');

    if (birthDateInput instanceof HTMLInputElement) birthDateInput.value = profile.birthDate ?? "";
    if (birthTimeInput instanceof HTMLInputElement) birthTimeInput.value = profile.birthTime ?? "";
    if (unknownInput instanceof HTMLInputElement) unknownInput.checked = Boolean(profile.timeUnknown);
    setSavedLocationDatasets({ citySelect, districtSelect, neighborhoodSelect, profile });
    return true;
  }

  if (pageName === "lunar-nodes") {
    const form = document.querySelector("#lunarNodesForm");
    const birthDateInput = form?.querySelector('input[name="birthDate"]');
    if (birthDateInput instanceof HTMLInputElement) {
      birthDateInput.value = profile.birthDate ?? "";
      return true;
    }
    return false;
  }

  if (pageName === "vedic-sidereal") {
    const form = document.querySelector("#vedicForm");
    if (!(form instanceof HTMLFormElement)) {
      return false;
    }

    const daySelect = form.querySelector("[data-vedic-day]");
    const monthSelect = form.querySelector("[data-vedic-month]");
    const yearSelect = form.querySelector("[data-vedic-year]");
    const hourSelect = form.querySelector("[data-vedic-hour]");
    const minuteSelect = form.querySelector("[data-vedic-minute]");
    const unknownInput = form.querySelector('input[name="unknownBirthTime"]');
    const citySelect = form.querySelector('select[name="city"]');
    const districtSelect = form.querySelector('[data-location-district]');
    const neighborhoodSelect = form.querySelector('[data-location-neighborhood]');

    if (daySelect instanceof HTMLSelectElement) daySelect.dataset.selected = dateParts.day;
    if (monthSelect instanceof HTMLSelectElement) monthSelect.dataset.selected = dateParts.month;
    if (yearSelect instanceof HTMLSelectElement) yearSelect.dataset.selected = dateParts.year;
    if (hourSelect instanceof HTMLSelectElement) hourSelect.dataset.selected = timeParts.hour;
    if (minuteSelect instanceof HTMLSelectElement) minuteSelect.dataset.selected = timeParts.minute;
    if (unknownInput instanceof HTMLInputElement) unknownInput.checked = Boolean(profile.timeUnknown);
    setSavedLocationDatasets({ citySelect, districtSelect, neighborhoodSelect, profile });
    return true;
  }

  return false;
};

const clearCurrentPageBirthProfileInputs = () => {
  if (pageName === "rising-sign") {
    ["[data-rising-day]", "[data-rising-month]", "[data-rising-year]", "[data-rising-hour]", "[data-rising-minute]"].forEach((selector) => {
      const node = document.querySelector(selector);
      if (node instanceof HTMLSelectElement) {
        node.value = "";
      }
    });
    const citySelect = document.querySelector("#risingCity");
    const districtSelect = document.querySelector("#risingDistrict");
    const neighborhoodSelect = document.querySelector("#risingNeighborhood");
    const unknownInput = document.querySelector('input[name="unknownBirthTime"]');
    if (unknownInput instanceof HTMLInputElement) unknownInput.checked = false;
    if (citySelect instanceof HTMLSelectElement) citySelect.value = "";
    if (districtSelect instanceof HTMLSelectElement) districtSelect.value = "";
    if (neighborhoodSelect instanceof HTMLSelectElement) neighborhoodSelect.value = "";
    citySelect?.dispatchEvent(new Event("change"));
    unknownInput?.dispatchEvent(new Event("change"));
    return document.querySelector("#risingSignForm");
  }

  if (pageName === "birth-chart-extended") {
    const form = document.querySelector("#birthChartExtendedForm");
    if (!(form instanceof HTMLFormElement)) {
      return null;
    }

    ["birthDate", "birthTime", "latitude", "longitude", "accuracy"].forEach((name) => {
      const node = form.querySelector(`[name="${name}"]`);
      if (node instanceof HTMLInputElement) {
        node.value = "";
      }
    });
    const citySelect = form.querySelector('select[name="city"]');
    const districtSelect = form.querySelector('[data-location-district]');
    const neighborhoodSelect = form.querySelector('[data-location-neighborhood]');
    if (citySelect instanceof HTMLSelectElement) citySelect.value = "";
    if (districtSelect instanceof HTMLSelectElement) districtSelect.value = "";
    if (neighborhoodSelect instanceof HTMLSelectElement) neighborhoodSelect.value = "";
    citySelect?.dispatchEvent(new Event("change"));
    return form;
  }

  if (pageName === "sun-sign-calculator" || pageName === "moon-sign-calculator") {
    const form = document.querySelector(pageName === "sun-sign-calculator" ? "#sunSignForm" : "#moonSignForm");
    if (!(form instanceof HTMLFormElement)) {
      return null;
    }

    ["birthDate", "birthTime", "latitude", "longitude"].forEach((name) => {
      const node = form.querySelector(`[name="${name}"]`);
      if (node instanceof HTMLInputElement) {
        node.value = "";
      }
    });
    const unknownInput = form.querySelector('input[name="unknownTime"]');
    const citySelect = form.querySelector('select[name="city"]');
    const districtSelect = form.querySelector('[data-location-district]');
    const neighborhoodSelect = form.querySelector('[data-location-neighborhood]');
    if (unknownInput instanceof HTMLInputElement) unknownInput.checked = false;
    if (citySelect instanceof HTMLSelectElement) citySelect.value = "";
    if (districtSelect instanceof HTMLSelectElement) districtSelect.value = "";
    if (neighborhoodSelect instanceof HTMLSelectElement) neighborhoodSelect.value = "";
    citySelect?.dispatchEvent(new Event("change"));
    unknownInput?.dispatchEvent(new Event("change"));
    return form;
  }

  if (pageName === "lunar-nodes") {
    const form = document.querySelector("#lunarNodesForm");
    const birthDateInput = form?.querySelector('input[name="birthDate"]');
    if (birthDateInput instanceof HTMLInputElement) {
      birthDateInput.value = "";
    }
    return form instanceof HTMLFormElement ? form : null;
  }

  if (pageName === "vedic-sidereal") {
    const form = document.querySelector("#vedicForm");
    if (!(form instanceof HTMLFormElement)) {
      return null;
    }

    ["[data-vedic-day]", "[data-vedic-month]", "[data-vedic-year]", "[data-vedic-hour]", "[data-vedic-minute]"].forEach((selector) => {
      const node = form.querySelector(selector);
      if (node instanceof HTMLSelectElement) {
        node.value = "";
      }
    });
    const unknownInput = form.querySelector('input[name="unknownBirthTime"]');
    const citySelect = form.querySelector('select[name="city"]');
    const districtSelect = form.querySelector('[data-location-district]');
    const neighborhoodSelect = form.querySelector('[data-location-neighborhood]');
    if (unknownInput instanceof HTMLInputElement) unknownInput.checked = false;
    if (citySelect instanceof HTMLSelectElement) citySelect.value = "";
    if (districtSelect instanceof HTMLSelectElement) districtSelect.value = "";
    if (neighborhoodSelect instanceof HTMLSelectElement) neighborhoodSelect.value = "";
    citySelect?.dispatchEvent(new Event("change"));
    unknownInput?.dispatchEvent(new Event("change"));
    return form;
  }

  return null;
};

const injectAlternateBirthProfileBox = () => {
  const profile = getSavedBirthProfile();
  if (
    !profile ||
    pageName === "zodiac-compatibility" ||
    pageName === "synastry" ||
    pageName === "moon-calendar" ||
    pageName === "ephemeris-tables"
  ) {
    return;
  }

  const formSelectorMap = {
    "rising-sign": "#risingSignForm",
    "birth-chart-extended": "#birthChartExtendedForm",
    "sun-sign-calculator": "#sunSignForm",
    "moon-sign-calculator": "#moonSignForm",
    "lunar-nodes": "#lunarNodesForm",
    "vedic-sidereal": "#vedicForm",
  };

  const form = document.querySelector(formSelectorMap[pageName] ?? "");
  if (!(form instanceof HTMLFormElement) || document.querySelector("[data-saved-birth-override]")) {
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
  actionButton?.addEventListener("click", () => {
    const form = clearCurrentPageBirthProfileInputs();
    if (form instanceof HTMLElement) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstField = form.querySelector("input, select, textarea");
      if (firstField instanceof HTMLElement) {
        window.setTimeout(() => {
          firstField.focus();
        }, 180);
      }
    }
  });

  const actions = form.querySelector(".tool-actions");
  if (actions instanceof HTMLElement) {
    actions.insertAdjacentElement("beforebegin", wrapper);
    return;
  }

  form.appendChild(wrapper);
};

const fetchApiPayload = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
};

const fetchApiData = async (url) => {
  const payload = await fetchApiPayload(url);
  return payload?.data;
};

const fetchPaginatedApiData = async (path, options = {}) => {
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
};

const fetchAllProvinces = async () => {
  if (API_CACHE.provinces) {
    return API_CACHE.provinces;
  }

  const provinces = await fetchPaginatedApiData("/provinces", {
    baseParams: { fields: "id,name" },
    limit: 100,
    maxPages: 4,
  });
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

  const districts = await fetchPaginatedApiData("/districts", {
    baseParams: {
      provinceId,
      fields: "id,name",
    },
    limit: 100,
    maxPages: 40,
  });
  const normalized = Array.isArray(districts) ? districts : [];
  API_CACHE.districts.set(provinceId, normalized);
  return normalized;
};

const fetchNeighborhoodsByDistrictId = async (districtId) => {
  if (API_CACHE.neighborhoods.has(districtId)) {
    return API_CACHE.neighborhoods.get(districtId);
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
  const citySelects = Array.from(document.querySelectorAll('select[name="city"], select[data-location-city]'));
  if (citySelects.length === 0) {
    return;
  }

  try {
    const provinces = await fetchAllProvinces();
    citySelects.forEach((select) => {
      if (!(select instanceof HTMLSelectElement)) {
        return;
      }

      const startsEmpty = select.dataset.emptyInitial === "true";
      const selectedLabel =
        select.dataset.defaultCityLabel ??
        CITY_DATA[select.value]?.label ??
        select.options[select.selectedIndex]?.textContent?.trim() ??
        (startsEmpty ? "" : "İstanbul");

      const optionsMarkup = `${startsEmpty ? '<option value="">Şehir seçiniz</option>' : ""}${provinces
        .map(
          (province) =>
            `<option value="${province.name}" data-id="${province.id}">${province.name}</option>`,
        )
        .join("")}`;

      select.innerHTML = optionsMarkup;
      select.value = provinces.some((province) => province.name === selectedLabel)
        ? selectedLabel
        : startsEmpty
          ? ""
          : "İstanbul";
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

      const startsEmpty = select.dataset.emptyInitial === "true";
      const selectedLabel =
        select.dataset.defaultCityLabel ??
        CITY_DATA[select.value]?.label ??
        select.options[select.selectedIndex]?.textContent?.trim() ??
        (startsEmpty ? "" : "İstanbul");

      select.innerHTML = `${startsEmpty ? '<option value="">Şehir seçiniz</option>' : ""}${optionsMarkup}`;
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

const setStaticOptionsWithPlaceholder = (
  selectNode,
  values,
  selectedValue = "",
  placeholderLabel = "Seçiniz",
) => {
  if (!(selectNode instanceof HTMLSelectElement)) {
    return;
  }

  const placeholderOption = `<option value="">${placeholderLabel}</option>`;
  const optionsMarkup = values
    .map((value) => `<option value="${value.value}">${value.label}</option>`)
    .join("");

  selectNode.innerHTML = `${placeholderOption}${optionsMarkup}`;
  selectNode.value = values.some((value) => value.value === selectedValue) ? selectedValue : "";
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

const populateCompatibilitySelectControls = (form) => {
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const applyOptions = (selector, values, fallbackValue) => {
    form.querySelectorAll(selector).forEach((selectNode) => {
      if (!(selectNode instanceof HTMLSelectElement)) {
        return;
      }

      setStaticOptions(selectNode, values, selectNode.dataset.selected ?? fallbackValue);
    });
  };

  applyOptions(
    "[data-compat-day]",
    Array.from({ length: 31 }, (_, index) => ({
      value: String(index + 1),
      label: String(index + 1),
    })),
    "1",
  );

  applyOptions(
    "[data-compat-month]",
    MONTH_LABELS.map((label, index) => ({
      value: String(index + 1),
      label,
    })),
    "1",
  );

  applyOptions(
    "[data-compat-year]",
    Array.from({ length: 121 }, (_, index) => {
      const year = 1940 + index;
      return { value: String(year), label: String(year) };
    }),
    "1990",
  );

  applyOptions(
    "[data-compat-hour]",
    Array.from({ length: 24 }, (_, index) => {
      const value = String(index).padStart(2, "0");
      return { value, label: value };
    }),
    "00",
  );

  applyOptions(
    "[data-compat-minute]",
    Array.from({ length: 60 }, (_, index) => {
      const value = String(index).padStart(2, "0");
      return { value, label: value };
    }),
    "00",
  );
};

const populateRisingSelectControls = (form) => {
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const applyOptions = (selector, values, placeholderLabel) => {
    form.querySelectorAll(selector).forEach((selectNode) => {
      if (!(selectNode instanceof HTMLSelectElement)) {
        return;
      }

      setStaticOptionsWithPlaceholder(
        selectNode,
        values,
        selectNode.dataset.selected ?? "",
        placeholderLabel,
      );
    });
  };

  applyOptions(
    "[data-rising-day]",
    Array.from({ length: 31 }, (_, index) => ({
      value: String(index + 1),
      label: String(index + 1),
    })),
    "Gün",
  );

  applyOptions(
    "[data-rising-month]",
    MONTH_LABELS.map((label, index) => ({
      value: String(index + 1),
      label,
    })),
    "Ay",
  );

  applyOptions(
    "[data-rising-year]",
    Array.from({ length: 121 }, (_, index) => {
      const year = 1940 + index;
      return { value: String(year), label: String(year) };
    }),
    "Yıl",
  );

  applyOptions(
    "[data-rising-hour]",
    Array.from({ length: 24 }, (_, index) => {
      const value = String(index).padStart(2, "0");
      return { value, label: value };
    }),
    "Saat",
  );

  applyOptions(
    "[data-rising-minute]",
    Array.from({ length: 60 }, (_, index) => {
      const value = String(index).padStart(2, "0");
      return { value, label: value };
    }),
    "Dakika",
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
    if (!citySelect.value || !districtSelect.value) {
      setSelectOptions(neighborhoodSelect, [], "Mahalle seçiniz");
      neighborhoodSelect.disabled = true;
      delete neighborhoodSelect.dataset.selectedNeighborhood;
      return;
    }

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
    if (!citySelect.value) {
      setSelectOptions(districtSelect, [], "İlçe seçiniz");
      setSelectOptions(neighborhoodSelect, [], "Mahalle seçiniz");
      districtSelect.disabled = true;
      neighborhoodSelect.disabled = true;
      delete districtSelect.dataset.selectedDistrict;
      delete neighborhoodSelect.dataset.selectedNeighborhood;
      return;
    }

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

window.AstroHesapLocations = {
  populateCitySelects,
  bindLocationSelects,
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
      <span class="ephemeris-sign-chip ephemeris-sign-${parts.signIndex}">
        <img
          class="ephemeris-sign-icon"
          src="assets/zodiac/${SIGN_ICON_FILES[parts.signIndex]}"
          alt="${parts.signLabel} burcu"
          loading="lazy"
        />
      </span>
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

const formatClockMinutes = (minutesValue) => {
  const normalized = mod(minutesValue, 1440);
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};

const getApproxAscDegree = (date, location, birthMinutes) => {
  const sunriseMinutes = getApproxSunriseMinutes(date, location);
  const baseSunDegree = getSunSign(date).index * 30;
  const segmentOffset = mod(birthMinutes - sunriseMinutes, 120) / 4;
  const signShift = Math.floor((birthMinutes - sunriseMinutes) / 120);
  return mod(baseSunDegree + signShift * 30 + segmentOffset, 360);
};

const RISING_DETAIL_BODIES = [
  { key: "Sun", label: "Güneş", short: "SU", color: "#d7a65d" },
  { key: "Moon", label: "Ay", short: "MO", color: "#88aef2" },
  { key: "Mercury", label: "Merkür", short: "ME", color: "#75b5c4" },
  { key: "Venus", label: "Venüs", short: "VE", color: "#d58aa3" },
  { key: "Mars", label: "Mars", short: "MA", color: "#d57b68" },
  { key: "Jupiter", label: "Jüpiter", short: "JU", color: "#c9a15e" },
  { key: "Saturn", label: "Satürn", short: "SA", color: "#8d8c8c" },
  { key: "Uranus", label: "Uranüs", short: "UR", color: "#6da7bf" },
  { key: "Neptune", label: "Neptün", short: "NE", color: "#6b80ca" },
  { key: "Pluto", label: "Plüton", short: "PL", color: "#8e6aa9" },
];

const BIRTH2_EXTRA_BODIES = [
  { key: "Chiron", label: "Chiron", short: "CH", base: 250.2, speed: 0.01971, wobble: 6.1, cycle: 18500 },
  { key: "Lilith", label: "Lilith", short: "LI", base: 220.8, speed: 0.11141, wobble: 5.5, cycle: 3232 },
  { key: "Juno", label: "Juno", short: "JN", base: 192.4, speed: 0.0832, wobble: 4.2, cycle: 1592 },
  { key: "Ceres", label: "Ceres", short: "CE", base: 143.8, speed: 0.2141, wobble: 5.8, cycle: 1680 },
  { key: "Vesta", label: "Vesta", short: "VS", base: 316.1, speed: 0.2713, wobble: 4.1, cycle: 1325 },
  { key: "Pallas", label: "Pallas", short: "PA", base: 278.4, speed: 0.2138, wobble: 5.1, cycle: 1688 },
];

const RISING_ASPECT_SYMBOLS = {
  conjunction: "☌",
  sextile: "✶",
  square: "□",
  trine: "△",
  opposition: "☍",
};

const astroJulianDay = (date) => date.getTime() / 86400000 + 2440587.5;

const astroMeanObliquity = (date) => {
  const tValue = (astroJulianDay(date) - 2451545.0) / 36525;
  return 23.439291 - 0.0130042 * tValue;
};

const astroGmstDegrees = (date) => {
  const jd = astroJulianDay(date);
  const tValue = (jd - 2451545.0) / 36525;
  return mod(
    280.46061837 +
      360.98564736629 * (jd - 2451545.0) +
      0.000387933 * tValue * tValue -
      (tValue * tValue * tValue) / 38710000,
    360,
  );
};

const astroRadians = (value) => (value * Math.PI) / 180;

const astroDegrees = (value) => (value * 180) / Math.PI;

const astroCalculateMidheaven = (lstDegrees, obliquityDegrees) => {
  const lst = astroRadians(lstDegrees);
  const obliquity = astroRadians(obliquityDegrees);
  const longitude = Math.atan2(Math.sin(lst) * Math.cos(obliquity), Math.cos(lst));
  return mod(astroDegrees(longitude), 360);
};

const astroCalculateAscendant = (lstDegrees, latitudeDegrees, obliquityDegrees) => {
  const lst = astroRadians(lstDegrees);
  const latitude = astroRadians(latitudeDegrees);
  const obliquity = astroRadians(obliquityDegrees);
  const longitude = Math.atan2(
    -Math.cos(lst),
    Math.sin(lst) * Math.cos(obliquity) + Math.tan(latitude) * Math.sin(obliquity),
  );
  return mod(astroDegrees(longitude) + 180, 360);
};

const buildUtcDateFromOffset = (date, timeValue, offsetHours = 3) => {
  const [hours = "0", minutes = "0"] = String(timeValue).split(":");
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      Number.parseInt(hours, 10) - offsetHours,
      Number.parseInt(minutes, 10),
      0,
    ),
  );
};

const getAstronomyPlanetLongitude = (body, date) => {
  if (!window.Astronomy) {
    return null;
  }

  if (body === "Sun") {
    return mod(window.Astronomy.SunPosition(date).elon, 360);
  }

  if (body === "Moon") {
    const moon = window.Astronomy.EclipticGeoMoon(date);
    return mod(moon.lon ?? moon.elon, 360);
  }

  const vector = window.Astronomy.GeoVector(body, date, false);
  const ecliptic = window.Astronomy.Ecliptic(vector);
  return mod(ecliptic.elon ?? ecliptic.lon, 360);
};

const getEqualHouseCusps = (ascendant) =>
  Array.from({ length: 12 }, (_, index) => ({
    label: `${index + 1}. Ev`,
    degree: mod(ascendant + index * 30, 360),
  }));

const getBirth2PorphyryHouseCusps = (ascendant, midheaven) => {
  const cusp1 = mod(ascendant, 360);
  const cusp10 = mod(midheaven, 360);
  const cusp7 = mod(cusp1 + 180, 360);
  const cusp4 = mod(cusp10 + 180, 360);
  const arc10to1 = mod(cusp10 - cusp1, 360);
  const arc1to4 = mod(cusp1 - cusp4, 360);
  const arc4to7 = mod(cusp4 - cusp7, 360);
  const arc7to10 = mod(cusp7 - cusp10, 360);

  return [
    { label: "1. Ev", degree: cusp1 },
    { label: "2. Ev", degree: mod(cusp1 - arc1to4 / 3, 360) },
    { label: "3. Ev", degree: mod(cusp1 - (arc1to4 * 2) / 3, 360) },
    { label: "4. Ev", degree: cusp4 },
    { label: "5. Ev", degree: mod(cusp4 - arc4to7 / 3, 360) },
    { label: "6. Ev", degree: mod(cusp4 - (arc4to7 * 2) / 3, 360) },
    { label: "7. Ev", degree: cusp7 },
    { label: "8. Ev", degree: mod(cusp7 - arc7to10 / 3, 360) },
    { label: "9. Ev", degree: mod(cusp7 - (arc7to10 * 2) / 3, 360) },
    { label: "10. Ev", degree: cusp10 },
    { label: "11. Ev", degree: mod(cusp10 - arc10to1 / 3, 360) },
    { label: "12. Ev", degree: mod(cusp10 - (arc10to1 * 2) / 3, 360) },
  ];
};

const getMajorAspect = (leftDegree, rightDegree, orbValue = 5) => {
  const distance = Math.abs(normalizeSignedDegree(leftDegree - rightDegree));
  let matched = null;

  COMPATIBILITY_ASPECTS.forEach((aspect) => {
    const delta = Math.abs(distance - aspect.angle);
    if (delta > orbValue) {
      return;
    }

    if (!matched || delta < matched.delta) {
      matched = { ...aspect, delta };
    }
  });

  return matched;
};

const buildRisingDetailData = ({ date, timeValue, city, useApproximate = false }) => {
  const birthMinutes = parseTimeToMinutes(timeValue);
  const approximateSun = getApproxTropicalSunDegree(date);
  const approximateMoon = mod(approximateSun + getMoonPhaseInfo(date).age * 12.2, 360);

  if (!useApproximate && window.Astronomy) {
    const utcDate = buildUtcDateFromOffset(date, timeValue);
    const obliquity = astroMeanObliquity(utcDate);
    const lst = mod(astroGmstDegrees(utcDate) + city.longitude, 360);
    const ascendant = astroCalculateAscendant(lst, city.latitude, obliquity);
    const midheaven = astroCalculateMidheaven(lst, obliquity);
    const planets = RISING_DETAIL_BODIES.map((body) => ({
      ...body,
      degree: getAstronomyPlanetLongitude(body.key, utcDate),
    }));

    return {
      ascendant,
      midheaven,
      planets,
      houseCusps: getEqualHouseCusps(ascendant),
      approximate: false,
    };
  }

  const approximateAscendant = getApproxAscDegree(date, city, birthMinutes);
  const approximateMidheaven = mod(approximateAscendant + 90, 360);
  const approximatePlanetMap = {
    Sun: approximateSun,
    Moon: approximateMoon,
    Mercury: getApproxPlanetDegree(date, EPHEMERIS_PLANETS[2]),
    Venus: getApproxPlanetDegree(date, EPHEMERIS_PLANETS[3]),
    Mars: getApproxPlanetDegree(date, EPHEMERIS_PLANETS[4]),
    Jupiter: getApproxPlanetDegree(date, EPHEMERIS_PLANETS[5]),
    Saturn: getApproxPlanetDegree(date, EPHEMERIS_PLANETS[6]),
    Uranus: getApproxPlanetDegree(date, EPHEMERIS_PLANETS[7]),
    Neptune: getApproxPlanetDegree(date, EPHEMERIS_PLANETS[8]),
    Pluto: getApproxPlanetDegree(date, EPHEMERIS_PLANETS[9]),
  };

  return {
    ascendant: approximateAscendant,
    midheaven: approximateMidheaven,
    planets: RISING_DETAIL_BODIES.map((body) => ({
      ...body,
      degree: approximatePlanetMap[body.key],
    })),
    houseCusps: getEqualHouseCusps(approximateAscendant),
    approximate: true,
  };
};

const renderDetailedRisingWheel = ({ planets, ascendant, midheaven, aspectMatrixMarkup }) => {
  const cx = 240;
  const cy = 240;
  const outerRadius = 214;
  const signRadius = 182;
  const tickOuterRadius = 211;
  const tickInnerRadius = 204;
  const houseInnerRadius = 92;
  const houseOuterRadius = 166;
  const planetRadius = 153;

  const tickMarkup = Array.from({ length: 72 }, (_, index) => {
    const angle = index * 5;
    const isMajor = index % 6 === 0;
    const outer = polarToCartesian(cx, cy, tickOuterRadius, angle);
    const inner = polarToCartesian(cx, cy, isMajor ? tickInnerRadius - 5 : tickInnerRadius, angle);
    return `
      <line
        class="rising-wheel-tick${isMajor ? " is-major" : ""}"
        x1="${inner.x.toFixed(2)}"
        y1="${inner.y.toFixed(2)}"
        x2="${outer.x.toFixed(2)}"
        y2="${outer.y.toFixed(2)}"
      />
    `;
  }).join("");

  const signMarkup = ZODIAC_SIGNS.map((sign, index) => {
    const startAngle = index * 30;
    const lineOuter = polarToCartesian(cx, cy, outerRadius, startAngle);
    const lineInner = polarToCartesian(cx, cy, signRadius, startAngle);
    const labelPoint = polarToCartesian(cx, cy, 198, startAngle + 15);

    return `
      <line x1="${lineInner.x.toFixed(2)}" y1="${lineInner.y.toFixed(2)}" x2="${lineOuter.x.toFixed(2)}" y2="${lineOuter.y.toFixed(2)}" />
      <text class="rising-wheel-sign" x="${labelPoint.x.toFixed(2)}" y="${labelPoint.y.toFixed(2)}">${ZODIAC_GLYPHS[index]}</text>
    `;
  }).join("");

  const houseMarkup = Array.from({ length: 12 }, (_, index) => {
    const angle = ascendant + index * 30;
    const inner = polarToCartesian(cx, cy, houseInnerRadius, angle);
    const outer = polarToCartesian(cx, cy, houseOuterRadius, angle);
    const label = polarToCartesian(cx, cy, 108, angle + 15);

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

      const leftPoint = polarToCartesian(cx, cy, 88, left.degree);
      const rightPoint = polarToCartesian(cx, cy, 88, right.degree);
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

  const planetMarkup = planets
    .map((planet) => {
      const point = polarToCartesian(cx, cy, planetRadius, planet.degree);
      return `
        <g>
          <circle class="rising-wheel-planet-node" cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="10.5" />
          <text class="rising-wheel-planet-label" x="${point.x.toFixed(2)}" y="${point.y.toFixed(2)}">${PLANET_GLYPHS[planet.key] ?? planet.short}</text>
        </g>
      `;
    })
    .join("");

  const ascInner = polarToCartesian(cx, cy, 44, ascendant);
  const ascOuter = polarToCartesian(cx, cy, outerRadius, ascendant);
  const mcInner = polarToCartesian(cx, cy, 44, midheaven);
  const mcOuter = polarToCartesian(cx, cy, outerRadius, midheaven);

  return `
    <article class="result-note-card rising-wheel-card">
      <h4>Detaylı harita görünümü</h4>
      <div class="rising-wheel-shell">
        <svg viewBox="0 0 480 480" role="img" aria-label="Yükselen burç detaylı harita çemberi">
          <circle class="rising-wheel-ring outer" cx="${cx}" cy="${cy}" r="${outerRadius}" />
          <circle class="rising-wheel-ring middle" cx="${cx}" cy="${cy}" r="${signRadius}" />
          <circle class="rising-wheel-ring inner" cx="${cx}" cy="${cy}" r="${houseInnerRadius}" />
          <g class="rising-wheel-tick-group">${tickMarkup}</g>
          <g class="rising-wheel-sign-group">${signMarkup}</g>
          <g class="rising-wheel-house-group">${houseMarkup}</g>
          <g class="rising-wheel-aspect-group">${aspectLines.join("")}</g>
          <line class="rising-wheel-axis asc" x1="${ascInner.x.toFixed(2)}" y1="${ascInner.y.toFixed(2)}" x2="${ascOuter.x.toFixed(2)}" y2="${ascOuter.y.toFixed(2)}" />
          <line class="rising-wheel-axis mc" x1="${mcInner.x.toFixed(2)}" y1="${mcInner.y.toFixed(2)}" x2="${mcOuter.x.toFixed(2)}" y2="${mcOuter.y.toFixed(2)}" />
          <g class="rising-wheel-planets">${planetMarkup}</g>
          <text class="rising-wheel-axis-label" x="${ascOuter.x.toFixed(2)}" y="${ascOuter.y.toFixed(2)}">ASC</text>
          <text class="rising-wheel-axis-label" x="${mcOuter.x.toFixed(2)}" y="${mcOuter.y.toFixed(2)}">MC</text>
        </svg>
      </div>
      <div class="rising-wheel-matrix">
        <h5>Açı matrisi</h5>
        ${aspectMatrixMarkup}
      </div>
    </article>
  `;
};

const renderBirth2ReferenceWheel = ({ planets, ascendant, midheaven, houseCusps }) => {
  const cx = 260;
  const cy = 260;
  const outerRadius = 208;
  const signBandRadius = 176;
  const tickOuterRadius = 160;
  const tickInnerMinorRadius = 154;
  const tickInnerMajorRadius = 148;
  const houseOuterRadius = 158;
  const houseInnerRadius = 108;
  const coreRadius = 104;
  const planetOrbit = 144;
  const houseLabelRadius = 114;
  const zodiacColors = [
    "#eb5a4f",
    "#78b941",
    "#f0a24b",
    "#4666a6",
    "#d94a44",
    "#6cbf58",
    "#f0a24b",
    "#4666a6",
    "#eb5a4f",
    "#78b941",
    "#f0a24b",
    "#4666a6",
  ];
  const zodiacWheelAngle = (zodiacDegree) => mod(zodiacDegree - ascendant + 270, 360);
  const zodiacBandAngle = (zodiacDegree) => mod(360 - mod(zodiacWheelAngle(zodiacDegree) + 90, 360), 360);

  const tickMarkup = Array.from({ length: 360 }, (_, index) => {
    const angle = zodiacBandAngle(index);
    const major = index % 5 === 0;
    const outer = polarToCartesian(cx, cy, tickOuterRadius, angle);
    const inner = polarToCartesian(cx, cy, major ? tickInnerMajorRadius : tickInnerMinorRadius, angle);
    return `
      <line
        class="birth2-wheel-tick${major ? " is-major" : ""}"
        x1="${inner.x.toFixed(2)}"
        y1="${inner.y.toFixed(2)}"
        x2="${outer.x.toFixed(2)}"
        y2="${outer.y.toFixed(2)}"
      />
    `;
  }).join("");

  const signMarkup = ZODIAC_SIGNS.map((sign, index) => {
    const startAngle = zodiacBandAngle(index * 30);
    const outerPoint = polarToCartesian(cx, cy, 194, startAngle);
    const innerPoint = polarToCartesian(cx, cy, houseOuterRadius, startAngle);
    const labelPoint = polarToCartesian(cx, cy, signBandRadius, zodiacBandAngle(index * 30 + 15));
    const iconSize = 22;
    return `
      <line
        class="birth2-wheel-divider"
        x1="${innerPoint.x.toFixed(2)}"
        y1="${innerPoint.y.toFixed(2)}"
        x2="${outerPoint.x.toFixed(2)}"
        y2="${outerPoint.y.toFixed(2)}"
      />
      <image
        class="birth2-wheel-sign-icon"
        href="assets/zodiac/${SIGN_ICON_FILES[index]}?v=20260331-clean-4"
        x="${(labelPoint.x - iconSize / 2).toFixed(2)}"
        y="${(labelPoint.y - iconSize / 2).toFixed(2)}"
        width="${iconSize}"
        height="${iconSize}"
        preserveAspectRatio="xMidYMid meet"
        aria-label="${sign.name} burcu"
      />
    `;
  }).join("");

  const houseMarkup = houseCusps.map((house) => {
    const angle = zodiacWheelAngle(house.degree);
    const inner = polarToCartesian(cx, cy, houseInnerRadius, angle);
    const outer = polarToCartesian(cx, cy, houseOuterRadius, angle);
    return `
      <line
        class="birth2-wheel-house-line"
        x1="${inner.x.toFixed(2)}"
        y1="${inner.y.toFixed(2)}"
        x2="${outer.x.toFixed(2)}"
        y2="${outer.y.toFixed(2)}"
      />
    `;
  }).join("");

  const houseLabelsMarkup = Array.from({ length: 12 }, (_, index) => {
    const labelAngle = mod(255 - index * 30, 360);
    const label = polarToCartesian(cx, cy, houseLabelRadius, labelAngle);

    return `
      <text class="birth2-wheel-house-label" x="${label.x.toFixed(2)}" y="${label.y.toFixed(2)}">${index + 1}</text>
    `;
  }).join("");

  const aspectLines = [];
  planets.slice(0, 7).forEach((left, leftIndex) => {
    planets.slice(leftIndex + 1, 7).forEach((right) => {
      const aspect = getMajorAspect(left.degree, right.degree, 4.5);
      if (!aspect) {
        return;
      }

      const leftPoint = polarToCartesian(cx, cy, 90, zodiacWheelAngle(left.degree));
      const rightPoint = polarToCartesian(cx, cy, 90, zodiacWheelAngle(right.degree));
      aspectLines.push(`
        <line
          class="birth2-wheel-aspect aspect-${aspect.key}"
          x1="${leftPoint.x.toFixed(2)}"
          y1="${leftPoint.y.toFixed(2)}"
          x2="${rightPoint.x.toFixed(2)}"
          y2="${rightPoint.y.toFixed(2)}"
        />
      `);
    });
  });

  const planetMarkup = planets.map((planet) => {
    const point = polarToCartesian(cx, cy, planetOrbit, zodiacWheelAngle(planet.degree));
    return `
      <text class="birth2-wheel-planet" x="${point.x.toFixed(2)}" y="${point.y.toFixed(2)}">${PLANET_GLYPHS[planet.key] ?? planet.short}</text>
    `;
  }).join("");

  const ascAngle = zodiacWheelAngle(ascendant);
  const mcAngle = zodiacWheelAngle(midheaven);
  const ascInner = polarToCartesian(cx, cy, houseInnerRadius, ascAngle);
  const ascOuter = polarToCartesian(cx, cy, tickOuterRadius, ascAngle);
  const mcInner = polarToCartesian(cx, cy, houseInnerRadius, mcAngle);
  const mcOuter = polarToCartesian(cx, cy, tickOuterRadius, mcAngle);
  const ascLabel = polarToCartesian(cx, cy, houseInnerRadius + 16, ascAngle);
  const mcLabel = polarToCartesian(cx, cy, houseOuterRadius - 10, mcAngle);

  return `
    <article class="result-note-card birth2-wheel-card">
      <div class="birth2-wheel-shell">
        <svg viewBox="0 0 520 520" role="img" aria-label="Doğum Haritası çemberi">
          <circle class="birth2-wheel-fill" cx="${cx}" cy="${cy}" r="194" />
          <circle class="birth2-wheel-outer" cx="${cx}" cy="${cy}" r="${outerRadius}" />
          <circle class="birth2-wheel-tick-ring" cx="${cx}" cy="${cy}" r="${tickOuterRadius}" />
          <circle class="birth2-wheel-house-ring" cx="${cx}" cy="${cy}" r="${houseOuterRadius}" />
          <circle class="birth2-wheel-core" cx="${cx}" cy="${cy}" r="${coreRadius}" />
          <g class="birth2-wheel-sign-group">${signMarkup}</g>
          <g class="birth2-wheel-tick-group">${tickMarkup}</g>
          <g class="birth2-wheel-house-group">${houseMarkup}</g>
          <g class="birth2-wheel-house-label-group">${houseLabelsMarkup}</g>
          <g class="birth2-wheel-aspect-group">${aspectLines.join("")}</g>
          <line class="birth2-wheel-axis asc" x1="${ascInner.x.toFixed(2)}" y1="${ascInner.y.toFixed(2)}" x2="${ascOuter.x.toFixed(2)}" y2="${ascOuter.y.toFixed(2)}" />
          <line class="birth2-wheel-axis mc" x1="${mcInner.x.toFixed(2)}" y1="${mcInner.y.toFixed(2)}" x2="${mcOuter.x.toFixed(2)}" y2="${mcOuter.y.toFixed(2)}" />
          <text class="birth2-wheel-axis-label" x="${ascLabel.x.toFixed(2)}" y="${ascLabel.y.toFixed(2)}">←</text>
          <text class="birth2-wheel-axis-label" x="${mcLabel.x.toFixed(2)}" y="${mcLabel.y.toFixed(2)}">MC</text>
          <g class="birth2-wheel-planets">${planetMarkup}</g>
        </svg>
      </div>
    </article>
  `;
};

const getBirth2HouseNumberForDegree = (degree, houseCusps) => {
  if (!Array.isArray(houseCusps) || houseCusps.length === 0) {
    return "-";
  }

  for (let index = 0; index < houseCusps.length; index += 1) {
    const current = houseCusps[index]?.degree;
    const next = houseCusps[(index + 1) % houseCusps.length]?.degree;
    const span = mod(current - next, 360);
    const distance = mod(current - degree, 360);

    if (distance >= 0 && distance < span) {
      return index + 1;
    }
  }

  return 1;
};

const getBirth2PartOfFortune = (sunDegree, moonDegree, ascDegree) => mod(ascDegree + moonDegree - sunDegree, 360);

const renderBirth2SolarAnalysis = ({ planets, ascendant, midheaven, houseCusps, date }) => {
  const northNodeDegree = getApproxPlanetDegree(date, {
    base: 125.4,
    speed: -0.05295,
    wobble: 1.5,
    cycle: 6798,
  });
  const extraBodies = [
    ...BIRTH2_EXTRA_BODIES.map((body) => ({
      key: body.key,
      label: body.label,
      short: body.short,
      degree: getApproxPlanetDegree(date, body),
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
      degree: mod(northNodeDegree + 180, 360),
    },
    {
      key: "Fortune",
      label: "P. of Fortune",
      short: "PF",
      degree: getBirth2PartOfFortune(planets[0]?.degree ?? 0, planets[1]?.degree ?? 0, ascendant),
    },
    {
      key: "Vertex",
      label: "Vertex",
      short: "VX",
      degree: mod(ascendant + 150, 360),
    },
  ];
  const listBodies = [
    ...planets,
    ...extraBodies,
    { key: "Ascendant", label: "Yükselen", short: "AC", degree: ascendant },
    { key: "Midheaven", label: "Midheaven", short: "MC", degree: midheaven },
  ];

  const matrixRows = listBodies
    .map((rowBody, rowIndex) => {
      const cells = listBodies
        .slice(0, rowIndex + 1)
        .map((colBody, colIndex) => {
          if (colIndex === rowIndex) {
            return `<td class="is-label" data-label="${rowBody.label}">${PLANET_GLYPHS[rowBody.key] ?? rowBody.short}</td>`;
          }

          const aspect = getMajorAspect(rowBody.degree, colBody.degree, 5);
          if (!aspect) {
            return '<td class="is-empty"></td>';
          }

          return `<td class="aspect-${aspect.key}" title="${rowBody.label} - ${colBody.label} ${aspect.label}">${RISING_ASPECT_SYMBOLS[aspect.key] ?? "•"}</td>`;
        })
        .join("");

      return `
        <tr>
          ${cells}
        </tr>
      `;
    })
    .join("");

  const legendMarkup = COMPATIBILITY_ASPECTS.map(
    (aspect) => `
      <span class="rising-aspect-legend-item">
        <span class="rising-aspect-legend-symbol aspect-${aspect.key}">${RISING_ASPECT_SYMBOLS[aspect.key] ?? aspect.label}</span>
        <span class="rising-aspect-legend-text">${aspect.label}</span>
      </span>
    `,
  ).join("");

  const listMarkup = `
    <div class="birth-solar-body-head">
      <span></span>
      <span>Gezegen</span>
      <span></span>
      <span>Boylam</span>
      <span>Ev</span>
    </div>
    ${listBodies
      .map((body) => {
        const parts = getDegreeParts(body.degree);
        return `
          <div class="birth-solar-body-row">
            <span class="birth-solar-body-glyph">${PLANET_GLYPHS[body.key] ?? body.short}</span>
            <span class="birth-solar-body-name">${body.label}</span>
            <span class="birth-solar-sign-glyph">${ZODIAC_GLYPHS[parts.signIndex]}</span>
            <span class="birth-solar-body-value">${formatZodiacPosition(body.degree)}</span>
            <span class="birth-solar-body-house">${getBirth2HouseNumberForDegree(body.degree, houseCusps)}</span>
          </div>
        `;
      })
      .join("")}
  `;

  return `
    <article class="result-note-card birth2-solar-analysis-card">
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
    </article>
  `;
};

const renderBirth2PersonalPlanetsTable = ({ planets, houseCusps, date }) => {
  const northNodeDegree = getApproxPlanetDegree(date, {
    base: 125.4,
    speed: -0.05295,
    wobble: 1.5,
    cycle: 6798,
  });
  const tableBodies = [
    ...planets,
    ...BIRTH2_EXTRA_BODIES.filter((body) => ["Chiron", "Lilith"].includes(body.key)).map((body) => ({
      key: body.key,
      label: body.key === "Lilith" ? "Lilith (Mean Lunar Apogee)" : body.label,
      short: body.short,
      degree: getApproxPlanetDegree(date, body),
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
      degree: mod(northNodeDegree + 180, 360),
    },
  ];

  const rows = tableBodies
    .map((body) => {
      const parts = getDegreeParts(body.degree);
      return `
        <tr>
          <td>
            <span class="birth2-personal-planet-name">
              <span class="birth2-personal-planet-glyph">${PLANET_GLYPHS[body.key] ?? body.short}</span>
              <span>${body.label}</span>
            </span>
          </td>
          <td>
            <span class="birth2-personal-sign-chip">
              <span class="birth2-personal-sign-glyph">${ZODIAC_GLYPHS[parts.signIndex]}</span>
              <span>${parts.signLabel}</span>
            </span>
          </td>
          <td>${parts.degree}° ${String(parts.minutes).padStart(2, "0")}′</td>
          <td>${getBirth2HouseNumberForDegree(body.degree, houseCusps)}. Ev</td>
        </tr>
      `;
    })
    .join("");

  return `
    <section class="birth2-personal-planets-block" aria-label="Kişisel gezegen konumlarınız tablosu">
      <div class="birth2-personal-planets-wrap">
        <table class="birth2-personal-planets-table">
          <thead>
            <tr>
              <th>Gezegen</th>
              <th>Burç</th>
              <th>Derece</th>
              <th>Ev</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </section>
  `;
};

const renderRisingPlanetTable = (planets, ascendant, midheaven) => `
  <article class="result-note-card">
    <h4>Gezegen yerleşimleri</h4>
    <div class="rising-data-table-wrap">
      <table class="rising-data-table">
        <thead>
          <tr>
            <th>Sembol</th>
            <th>Gösterge</th>
            <th>Burç ve derece</th>
          </tr>
        </thead>
        <tbody>
          ${[
            ...planets.map((planet) => ({
              glyph: PLANET_GLYPHS[planet.key] ?? planet.short,
              label: planet.label,
              value: formatZodiacPosition(planet.degree),
            })),
            { glyph: PLANET_GLYPHS.Ascendant, label: "Yükselen", value: formatZodiacPosition(ascendant) },
            { glyph: PLANET_GLYPHS.Midheaven, label: "MC", value: formatZodiacPosition(midheaven) },
          ]
            .map(
              (item) => `
                <tr>
                  <td class="rising-data-symbol">${item.glyph}</td>
                  <td>${item.label}</td>
                  <td>${item.value}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  </article>
`;

const renderRisingHouseTable = (houseCusps) => `
  <article class="result-note-card">
    <h4>Ev yerleşimleri</h4>
    <div class="rising-data-table-wrap">
      <table class="rising-data-table">
        <thead>
          <tr>
            <th>Ev</th>
            <th>Başlangıç</th>
          </tr>
        </thead>
        <tbody>
          ${houseCusps
            .map(
              (house) => `
                <tr>
                  <td>${house.label}</td>
                  <td>${formatZodiacPosition(house.degree)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  </article>
`;

const renderRisingAspectMatrix = (bodies) => `
  <div class="rising-aspect-legend">
    ${COMPATIBILITY_ASPECTS.map(
      (aspect) => `
        <span class="rising-aspect-legend-item aspect-${aspect.key}">
          ${RISING_ASPECT_SYMBOLS[aspect.key] ?? aspect.label}
          ${aspect.label}
        </span>
      `,
    ).join("")}
  </div>
  <div class="rising-aspect-table-wrap">
    <table class="rising-aspect-table">
      <thead>
        <tr>
          <th></th>
          ${bodies.map((body) => `<th>${PLANET_GLYPHS[body.key] ?? body.short}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${bodies
          .map((rowBody, rowIndex) => {
            const cells = bodies
              .map((colBody, colIndex) => {
                if (colIndex > rowIndex) {
                  return '<td class="is-empty"></td>';
                }

                if (colIndex === rowIndex) {
                  return `<td class="is-label">${rowBody.short}</td>`;
                }

                const aspect = getMajorAspect(rowBody.degree, colBody.degree, 5);
                if (!aspect) {
                  return '<td class="is-empty"></td>';
                }

                return `<td class="aspect-${aspect.key}" title="${rowBody.label} - ${colBody.label} ${aspect.label}">${RISING_ASPECT_SYMBOLS[aspect.key] ?? "•"}</td>`;
              })
              .join("");

            return `
              <tr>
                <th>${PLANET_GLYPHS[rowBody.key] ?? rowBody.short}</th>
                ${cells}
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  </div>
`;

const getRisingShiftRows = (date, location) => {
  const sunriseMinutes = getApproxSunriseMinutes(date, location);
  const startSign = getSunSign(date);

  return Array.from({ length: 12 }, (_, index) => {
    const changeMinutes = sunriseMinutes + index * 120;
    const sign = ZODIAC_SIGNS[mod(startSign.index + index, 12)];
    return {
      time: formatClockMinutes(changeMinutes),
      sign,
    };
  });
};

const getSignFromDegree = (degreeValue) => ZODIAC_SIGNS[Math.floor(mod(degreeValue, 360) / 30)];

const areComplementaryElements = (leftElement, rightElement) =>
  (leftElement === "Ateş" && rightElement === "Hava") ||
  (leftElement === "Hava" && rightElement === "Ateş") ||
  (leftElement === "Su" && rightElement === "Toprak") ||
  (leftElement === "Toprak" && rightElement === "Su");

const getElementCompatibilityScore = (leftSign, rightSign) => {
  if (leftSign.element === rightSign.element) {
    return 16;
  }

  if (areComplementaryElements(leftSign.element, rightSign.element)) {
    return 18;
  }

  return 9;
};

const getModeCompatibilityScore = (leftSign, rightSign) => {
  if (leftSign.mode === rightSign.mode) {
    return 11;
  }

  if (
    (leftSign.mode === "Öncü" && rightSign.mode === "Değişken") ||
    (leftSign.mode === "Değişken" && rightSign.mode === "Öncü")
  ) {
    return 8;
  }

  return 10;
};

const findClosestAspect = (leftDegree, rightDegree, orbValue) => {
  const distance = Math.abs(normalizeSignedDegree(leftDegree - rightDegree));
  let bestMatch = null;

  COMPATIBILITY_ASPECTS.forEach((aspect) => {
    const delta = Math.abs(distance - aspect.angle);
    if (delta > orbValue) {
      return;
    }

    if (!bestMatch || delta < bestMatch.delta) {
      bestMatch = {
        ...aspect,
        delta,
      };
    }
  });

  return bestMatch;
};

const getCompatibilityTone = (score) => {
  if (score >= 84) {
    return "çok güçlü akış";
  }

  if (score >= 72) {
    return "yüksek uyum";
  }

  if (score >= 58) {
    return "çalışabilir denge";
  }

  if (score >= 46) {
    return "inişli çıkışlı akış";
  }

  return "yoğun öğrenme alanı";
};

const getCompatibilityFocusLine = (toneKey, score) => {
  if (toneKey === "soft") {
    return score >= 70
      ? "Birbirinizi yormadan taşıyan doğal bir ritim var."
      : "Uyum için alan açıldığında ilişki daha sıcak bir tona geçebilir.";
  }

  if (toneKey === "strategic") {
    return score >= 70
      ? "Güçlü alan iletişim ve çekim; riski ise tempo farklarını yönetmek."
      : "İlişkiyi sürdüren şey niyet; kırılgan alan ise hız ve beklenti eşleşmesi.";
  }

  return score >= 70
    ? "Çekim net, fakat ilişkiyi taşıyan asıl şey ritim uyumu."
    : "Çekim tek başına yetmez; düzen ve iletişim tarafını bilinçli kurmak gerekir.";
};

const getCompatibilityStyleWeights = (styleKey) => {
  if (styleKey === "friendship") {
    return {
      communication: 0.3,
      emotional: 0.2,
      attraction: 0.08,
      rhythm: 0.2,
      longTerm: 0.22,
    };
  }

  if (styleKey === "longterm") {
    return {
      communication: 0.22,
      emotional: 0.2,
      attraction: 0.14,
      rhythm: 0.14,
      longTerm: 0.3,
    };
  }

  return {
    communication: 0.2,
    emotional: 0.22,
    attraction: 0.28,
    rhythm: 0.14,
    longTerm: 0.16,
  };
};

const buildCompatibilityProfile = ({
  name,
  date,
  timeValue,
  unknownTime,
  location,
  district,
  neighborhood,
  zodiacMode,
}) => {
  const ayanamsaOffset = zodiacMode === "sidereal" ? AYANAMSA_LABELS.lahiri.degrees : 0;
  const resolvedTime = unknownTime ? "12:00" : timeValue;
  const minutes = parseTimeToMinutes(resolvedTime);
  const sunDegree = mod(getApproxTropicalSunDegree(date) - ayanamsaOffset, 360);
  const moonDegree = mod(sunDegree + getMoonPhaseInfo(date).age * 12.2 - ayanamsaOffset, 360);
  const sunriseMinutes = getApproxSunriseMinutes(date, location);
  const ascDegree = mod(
    (getSunSign(date).index + Math.floor((minutes - sunriseMinutes) / 120)) * 30 + minutes / 4 - ayanamsaOffset,
    360,
  );
  const mercuryDegree = mod(getApproxPlanetDegree(date, EPHEMERIS_PLANETS[2]) - ayanamsaOffset, 360);
  const venusDegree = mod(getApproxPlanetDegree(date, EPHEMERIS_PLANETS[3]) - ayanamsaOffset, 360);
  const marsDegree = mod(getApproxPlanetDegree(date, EPHEMERIS_PLANETS[4]) - ayanamsaOffset, 360);
  const timeSegment = getTimeSegment(minutes);

  return {
    name,
    date,
    timeValue: resolvedTime,
    unknownTime,
    locationLabel: `${location.label}${district ? `, ${district}` : ""}${neighborhood ? ` / ${neighborhood}` : ""}`,
    sunDegree,
    moonDegree,
    ascDegree,
    mercuryDegree,
    venusDegree,
    marsDegree,
    sunSign: getSignFromDegree(sunDegree),
    moonSign: getSignFromDegree(moonDegree),
    ascSign: getSignFromDegree(ascDegree),
    mercurySign: getSignFromDegree(mercuryDegree),
    venusSign: getSignFromDegree(venusDegree),
    marsSign: getSignFromDegree(marsDegree),
    moonPhase: getMoonPhaseInfo(date),
    timeSegment,
  };
};

const summarizeCompatibility = ({ leftProfile, rightProfile, styleKey, orbLevel, toneKey, focusLongTerm, includeMoon, includeAscendant, includeVenusMars }) => {
  const weights = getCompatibilityStyleWeights(styleKey);
  const orbValue = ORB_LEVEL_VALUES[orbLevel] ?? ORB_LEVEL_VALUES.balanced;
  const sunElement = getElementCompatibilityScore(leftProfile.sunSign, rightProfile.sunSign);
  const sunMode = getModeCompatibilityScore(leftProfile.sunSign, rightProfile.sunSign);
  const sunAspect = findClosestAspect(leftProfile.sunDegree, rightProfile.sunDegree, orbValue);
  const moonAspect = includeMoon ? findClosestAspect(leftProfile.moonDegree, rightProfile.moonDegree, orbValue) : null;
  const mercuryAspect = findClosestAspect(leftProfile.mercuryDegree, rightProfile.mercuryDegree, orbValue);
  const venusMarsAspect = includeVenusMars ? findClosestAspect(leftProfile.venusDegree, rightProfile.marsDegree, orbValue) : null;
  const ascAspect = includeAscendant ? findClosestAspect(leftProfile.ascDegree, rightProfile.ascDegree, orbValue) : null;

  const emotional = Math.round(
    Math.min(
      100,
      sunElement * 3 +
        (includeMoon ? getElementCompatibilityScore(leftProfile.moonSign, rightProfile.moonSign) * 2.6 : 24) +
        (moonAspect?.weight ?? 10) * 2,
    ),
  );
  const communication = Math.round(
    Math.min(
      100,
      getElementCompatibilityScore(leftProfile.mercurySign, rightProfile.mercurySign) * 3 +
        (mercuryAspect?.weight ?? 9) * 2.4 +
        sunMode * 2,
    ),
  );
  const attraction = Math.round(
    Math.min(
      100,
      (includeVenusMars ? getElementCompatibilityScore(leftProfile.venusSign, rightProfile.marsSign) * 3.2 : 28) +
        (venusMarsAspect?.weight ?? 10) * 2.8 +
        (sunAspect?.weight ?? 10) * 1.6,
    ),
  );
  const rhythm = Math.round(
    Math.min(
      100,
      sunMode * 4.4 +
        (leftProfile.timeSegment.label === rightProfile.timeSegment.label ? 22 : 12) +
        (includeAscendant ? (ascAspect?.weight ?? 10) * 2.1 : 20),
    ),
  );
  const longTerm = Math.round(
    Math.min(
      100,
      sunElement * 2.5 +
        sunMode * 2.4 +
        (focusLongTerm ? 14 : 7) +
        (includeMoon ? getModeCompatibilityScore(leftProfile.moonSign, rightProfile.moonSign) * 2.2 : 18) +
        (includeAscendant ? getModeCompatibilityScore(leftProfile.ascSign, rightProfile.ascSign) * 2.1 : 18),
    ),
  );

  const totalScore = Math.round(
    communication * weights.communication +
      emotional * weights.emotional +
      attraction * weights.attraction +
      rhythm * weights.rhythm +
      longTerm * weights.longTerm,
  );

  const topAspectCards = [
    {
      title: "Güneş - Güneş",
      detail: sunAspect
        ? `${leftProfile.sunSign.name} ile ${rightProfile.sunSign.name} arasında ${sunAspect.label} hissi`
        : "Temel karakter ritmi doğrudan açıdan çok element ve mod üzerinden çalışıyor",
    },
    {
      title: "Ay - Ay",
      detail: includeMoon
        ? moonAspect
          ? `${leftProfile.moonSign.name} ve ${rightProfile.moonSign.name} duygusal eksende ${moonAspect.label} taşıyor`
          : `${leftProfile.moonSign.name} ve ${rightProfile.moonSign.name} arasında duygu alışverişi daha dikkatli kurulmalı`
        : "Ay katmanı bu okumada kapalı tutuldu",
    },
    {
      title: "Merkür - Merkür",
      detail: mercuryAspect
        ? `İletişim hattı ${mercuryAspect.label} ile akıyor`
        : "Konuşma dili benzer değil; açıklık ve tekrar fayda sağlar",
    },
    {
      title: "Venüs - Mars",
      detail: includeVenusMars
        ? venusMarsAspect
          ? `Çekim ekseni ${venusMarsAspect.label} ile belirginleşiyor`
          : "Çekim var ama zamanlama farklı olabilir"
        : "Venüs ve Mars katmanı bu okumada kapalı tutuldu",
    },
  ];

  const strengths = [
    `${leftProfile.sunSign.element} ve ${rightProfile.sunSign.element} element ritmi ilişkinin ana tonunu taşıyor.`,
    `${leftProfile.mercurySign.name} - ${rightProfile.mercurySign.name} iletişim hattı ${communication >= 70 ? "rahat" : "çalışılarak güçlenecek"} görünüyor.`,
    `${leftProfile.timeSegment.focus} ile ${rightProfile.timeSegment.focus} ekseni beraber okunduğunda ortak niyet alanı açılıyor.`,
  ];

  const cautions = [
    rhythm >= 70
      ? "Tempo farkı düşük; yine de karar alma hızını birlikte belirlemek ilişkiyi korur."
      : "Biriniz hız isterken diğeriniz alan isteyebilir; plan yaparken ritim farkını açık konuşmak iyi gelir.",
    attraction >= 70
      ? "Çekim kuvvetli olduğu için beklenti yönetimi net tutulursa ilişki hızla derinleşir."
      : "İlk kıvılcım yerine güven ve düzen inşa etmek daha etkili olabilir.",
    longTerm >= 70
      ? "Uzun vadede düzen kurma şansı güçlü; günlük alışkanlıklar ortaklaşırsa bağ daha kalıcı olur."
      : "Uzun vadede sürdürülebilirlik için sınır, beklenti ve emek paylaşımı açık olmalı.",
  ];

  return {
    totalScore,
    tone: getCompatibilityTone(totalScore),
    focusLine: getCompatibilityFocusLine(toneKey, totalScore),
    metrics: {
      emotional,
      communication,
      attraction,
      rhythm,
      longTerm,
    },
    badges: [
      COMPATIBILITY_STYLE_LABELS[styleKey] ?? COMPATIBILITY_STYLE_LABELS.romance,
      COMPATIBILITY_DEPTH_LABELS.balanced,
      ORB_LEVEL_LABELS[orbLevel] ?? ORB_LEVEL_LABELS.balanced,
      ZODIAC_MODE_LABELS.tropical,
    ],
    topAspectCards,
    strengths,
    cautions,
  };
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
  const daySelect = form?.querySelector("[data-rising-day]");
  const monthSelect = form?.querySelector("[data-rising-month]");
  const yearSelect = form?.querySelector("[data-rising-year]");
  const hourSelect = form?.querySelector("[data-rising-hour]");
  const minuteSelect = form?.querySelector("[data-rising-minute]");
  const unknownTimeToggle = form?.querySelector('input[name="unknownBirthTime"]');
  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(citySelect instanceof HTMLSelectElement) ||
    !(districtSelect instanceof HTMLSelectElement) ||
    !(neighborhoodSelect instanceof HTMLSelectElement)
  ) {
    return;
  }

  populateRisingSelectControls(form);

  await bindLocationSelects({
    citySelect,
    districtSelect,
    neighborhoodSelect,
  });

  const syncUnknownTime = () => {
    if (
      !(unknownTimeToggle instanceof HTMLInputElement) ||
      !(hourSelect instanceof HTMLSelectElement) ||
      !(minuteSelect instanceof HTMLSelectElement)
    ) {
      return;
    }

    hourSelect.disabled = unknownTimeToggle.checked;
    minuteSelect.disabled = unknownTimeToggle.checked;
  };

  const update = async () => {
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim() || "Danışan";
    const unknownBirthTime = formData.has("unknownBirthTime");
    const legacyDateValue = String(formData.get("birthDate") ?? "");
    const legacyTimeValue = String(formData.get("birthTime") ?? "00:00");
    const selectedHour = String(formData.get("birthHour") ?? "00");
    const selectedMinute = String(formData.get("birthMinute") ?? "00");
    const timeValue = unknownBirthTime ? "12:00" : `${selectedHour}:${selectedMinute}`;
    const district = getSelectedOptionLabel(districtSelect);
    const neighborhood = getSelectedOptionLabel(neighborhoodSelect);
    const date =
      daySelect instanceof HTMLSelectElement &&
      monthSelect instanceof HTMLSelectElement &&
      yearSelect instanceof HTMLSelectElement
        ? buildBirthDate({
            yearValue: String(formData.get("birthYear") ?? ""),
            monthValue: String(formData.get("birthMonth") ?? ""),
            dayValue: String(formData.get("birthDay") ?? ""),
            hourValue: unknownBirthTime ? "12" : selectedHour,
            minuteValue: unknownBirthTime ? "00" : selectedMinute,
          })
        : new Date(`${legacyDateValue}T${legacyTimeValue}:00`);

    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Tarih eksik</h4>
          <p>Yükselen tahmini için geçerli gün, ay, yıl ve saat bilgisi gir.</p>
        </article>
      `;
      return;
    }

    const city = await resolveSelectedLocationCoordinates({
      citySelect,
      districtSelect,
      neighborhoodSelect,
    });
    const detailData = buildRisingDetailData({
      date,
      timeValue,
      city,
      useApproximate: !window.Astronomy,
    });
    const sign = getSunSign(date);
    const birthMinutes = parseTimeToMinutes(timeValue);
    const sunriseMinutes = getApproxSunriseMinutes(date, city);
    const signShift = Math.floor((birthMinutes - sunriseMinutes) / 120);
    const risingSign = ZODIAC_SIGNS[mod(sign.index + signShift, 12)];
    const phase = getMoonPhaseInfo(date);
    const sunDegree = getApproxTropicalSunDegree(date);
    const moonDegree = mod(sunDegree + phase.age * 12.2, 360);
    const ascDegree = getApproxAscDegree(date, city, birthMinutes);
    const mcDegree = mod(ascDegree + 90, 360);
    const mercuryDegree = getApproxPlanetDegree(date, EPHEMERIS_PLANETS[2]);
    const mercurySign = getSignFromDegree(mercuryDegree);
    const risingShiftRows = getRisingShiftRows(date, city);
    const planetTableMarkup = renderRisingPlanetTable(
      detailData.planets,
      detailData.ascendant,
      detailData.midheaven,
    );
    const houseTableMarkup = renderRisingHouseTable(detailData.houseCusps);
    const displayedTime = unknownBirthTime ? "12:00 (yaklaşık)" : timeValue;
    const sunriseHour = `${String(Math.floor(sunriseMinutes / 60)).padStart(2, "0")}:${String(
      sunriseMinutes % 60,
    ).padStart(2, "0")}`;

    result.innerHTML = `
      <section class="result-grid rising-summary-grid">
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
          {
            label: "Merkür tonu",
            value: mercurySign.name,
            note: "İletişim biçimi",
          },
          {
            label: "Doğum saati",
            value: displayedTime,
            note: unknownBirthTime ? "Yaklaşık öğlen kabul edildi" : "Yerel saat",
          },
        ])}
      </section>
      <section class="rising-detail-tables">
        ${planetTableMarkup}
        ${houseTableMarkup}
      </section>

      <article class="result-note-card">
        <h4>Yükselen değişim saatleri</h4>
        <div class="rising-shift-table-wrap">
          <table class="rising-shift-table">
            <thead>
              <tr>
                <th>Saat</th>
                <th>Yükselen burç</th>
                <th>Vurgu</th>
              </tr>
            </thead>
            <tbody>
              ${risingShiftRows
                .map(
                  (row) => `
                    <tr${row.sign.name === risingSign.name ? ' class="is-current"' : ""}>
                      <td>${row.time}</td>
                      <td>${row.sign.name}</td>
                      <td>${row.sign.element} / ${row.sign.mode}</td>
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </article>

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

      <section class="result-grid rising-secondary-grid">
        ${renderMetricCards([
          {
            label: "İlk izlenim",
            value: risingSign.mode,
            note: `${risingSign.element} tarzında dış ifade`,
          },
          {
            label: "İç merkez",
            value: sign.name,
            note: "Güneş burcu ana kimlik",
          },
          {
            label: "Duygu akışı",
            value: phase.name,
            note: "Ay fazı üzerinden",
          },
          {
            label: "Konuşma tonu",
            value: mercurySign.name,
            note: "Merkür burcu tahmini",
          },
        ])}
      </section>
    `;
  };

  syncUnknownTime();

  unknownTimeToggle?.addEventListener("change", () => {
    syncUnknownTime();
    update();
  });

  citySelect.addEventListener("locationresolved", update);

  form.addEventListener("change", (event) => {
    const target = event.target;
    if (target !== unknownTimeToggle) {
      update();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
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
  const personalPlanetsResult = document.querySelector("[data-birth2-personal-planets]");
  const citySelect = document.querySelector("[data-extended-city]");
  const latitudeInput = document.querySelector("[data-extended-latitude]");
  const longitudeInput = document.querySelector("[data-extended-longitude]");
  const districtSelect = document.querySelector('[data-location-district]');
  const neighborhoodSelect = document.querySelector('[data-location-neighborhood]');
  const summaryNodes = {
    sun: document.querySelector("[data-birth2-sun]"),
    moon: document.querySelector("[data-birth2-moon]"),
    ascendant: document.querySelector("[data-birth2-ascendant]"),
    midheaven: document.querySelector("[data-birth2-midheaven]"),
    interpretation: document.querySelector("[data-birth2-interpretation]"),
  };

  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(personalPlanetsResult instanceof HTMLElement) ||
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
      personalPlanetsResult.innerHTML = `
        <article class="result-note-card">
          <p>Kişisel gezegen konumları hesaplama sonrası burada görünür.</p>
        </article>
      `;
      return;
    }

    const detailData = buildRisingDetailData({
      date,
      timeValue: birthTime,
      city: {
        label: city.label,
        latitude: Number.parseFloat(latitude),
        longitude: Number.parseFloat(longitude),
      },
      useApproximate: !window.Astronomy,
    });
    const birth2HouseCusps = getBirth2PorphyryHouseCusps(detailData.ascendant, detailData.midheaven);
    const sunText = formatZodiacPosition(detailData.planets[0].degree);
    const moonText = formatZodiacPosition(detailData.planets[1].degree);
    const ascText = formatZodiacPosition(detailData.ascendant);
    const mcText = formatZodiacPosition(detailData.midheaven);
    const sunSign = getDegreeParts(detailData.planets[0].degree).signLabel;
    const moonSign = getDegreeParts(detailData.planets[1].degree).signLabel;
    const ascSign = getDegreeParts(detailData.ascendant).signLabel;

    if (summaryNodes.sun instanceof HTMLElement) {
      summaryNodes.sun.textContent = sunText;
    }
    if (summaryNodes.moon instanceof HTMLElement) {
      summaryNodes.moon.textContent = moonText;
    }
    if (summaryNodes.ascendant instanceof HTMLElement) {
      summaryNodes.ascendant.textContent = ascText;
    }
    if (summaryNodes.midheaven instanceof HTMLElement) {
      summaryNodes.midheaven.textContent = mcText;
    }
    if (summaryNodes.interpretation instanceof HTMLElement) {
      summaryNodes.interpretation.innerHTML = `
        <h4>Yorum ekseni</h4>
        <p>${sunSign} Güneşi kimliğinde ana tonu kurar. ${moonSign} Ay iç dünyada duygusal ritmi taşır. ${ascSign} yükselen ise dışarıya verdiğin ilk izlenimi belirginleştirir.</p>
      `;
    }

    const wheelOnlyMarkup = renderBirth2ReferenceWheel({
      planets: detailData.planets,
      ascendant: detailData.ascendant,
      midheaven: detailData.midheaven,
      houseCusps: birth2HouseCusps,
    });
    const analysisMarkup = renderBirth2SolarAnalysis({
      planets: detailData.planets,
      ascendant: detailData.ascendant,
      midheaven: detailData.midheaven,
      houseCusps: birth2HouseCusps,
      date,
    });

    result.innerHTML = `
      ${wheelOnlyMarkup}
      ${analysisMarkup}
    `;
    personalPlanetsResult.innerHTML = renderBirth2PersonalPlanetsTable({
      planets: detailData.planets,
      houseCusps: birth2HouseCusps,
      date,
    });
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
  const archive = document.querySelector("#ephemerisArchive");
  const heading = document.querySelector("#ephemerisHeading");
  const subheading = document.querySelector("#ephemerisSubheading");
  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(monthInput instanceof HTMLInputElement) ||
    !(yearNav instanceof HTMLElement) ||
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

  const getMonthNavigationMarkup = (year, monthIndex) =>
    MONTH_LABELS.map((monthLabel, index) => {
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
    const symbolMode = "color";
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
      <article class="result-note-card">
        <h4>Gezegen tablosu</h4>
        <div class="ephemeris-inline-controls ephemeris-inline-primary">
          <label class="tool-field ephemeris-compact-field">
            <span>Düğüm modu</span>
            <select name="nodeMode" form="ephemerisForm">
              <option value="mean"${nodeMode === "mean" ? " selected" : ""}>Mean</option>
              <option value="true"${nodeMode === "true" ? " selected" : ""}>True</option>
            </select>
          </label>

          <label class="tool-field ephemeris-compact-field">
            <span>Lilith modu</span>
            <select name="lilithMode" form="ephemerisForm">
              <option value="mean"${lilithMode === "mean" ? " selected" : ""}>Mean</option>
              <option value="true"${lilithMode === "true" ? " selected" : ""}>True</option>
            </select>
          </label>

          <label class="tool-field ephemeris-compact-field">
            <span>Doğruluk</span>
            <select name="precision" form="ephemerisForm">
              <option value="degree"${precisionKey === "degree" ? " selected" : ""}>Derece°</option>
              <option value="degree-minute"${precisionKey === "degree-minute" ? " selected" : ""}>Derece° Dakika′</option>
              <option value="absolute"${precisionKey === "absolute" ? " selected" : ""}>ABS Derece°</option>
            </select>
          </label>
        </div>
        <div class="ephemeris-month-strip" aria-label="Ay sekmeleri">
          ${getMonthNavigationMarkup(year, monthIndex)}
        </div>
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

  result.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const monthButton = target.closest("[data-ephemeris-month]");
    if (!(monthButton instanceof HTMLElement)) {
      return;
    }

    const yearValue = monthButton.dataset.ephemerisYear;
    const monthValue = monthButton.dataset.ephemerisMonth;
    if (!yearValue || monthValue === undefined) {
      return;
    }

    setMonthValue(Number.parseInt(yearValue, 10), Number.parseInt(monthValue, 10));
    update();
  });

  result.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) {
      return;
    }

    if (!["nodeMode", "lilithMode", "precision"].includes(target.name)) {
      return;
    }

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

const renderZodiacCompatibilityResult = async () => {
  const form = document.querySelector("#compatibilityForm");
  const result = document.querySelector("#compatibilityResult");
  const partnerACity = document.querySelector("#compatibilityCityA");
  const partnerADistrict = document.querySelector("#compatibilityDistrictA");
  const partnerANeighborhood = document.querySelector("#compatibilityNeighborhoodA");
  const partnerBCity = document.querySelector("#compatibilityCityB");
  const partnerBDistrict = document.querySelector("#compatibilityDistrictB");
  const partnerBNeighborhood = document.querySelector("#compatibilityNeighborhoodB");

  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(partnerACity instanceof HTMLSelectElement) ||
    !(partnerADistrict instanceof HTMLSelectElement) ||
    !(partnerANeighborhood instanceof HTMLSelectElement) ||
    !(partnerBCity instanceof HTMLSelectElement) ||
    !(partnerBDistrict instanceof HTMLSelectElement) ||
    !(partnerBNeighborhood instanceof HTMLSelectElement)
  ) {
    return;
  }

  populateCompatibilitySelectControls(form);

  await bindLocationSelects({
    citySelect: partnerACity,
    districtSelect: partnerADistrict,
    neighborhoodSelect: partnerANeighborhood,
  });

  await bindLocationSelects({
    citySelect: partnerBCity,
    districtSelect: partnerBDistrict,
    neighborhoodSelect: partnerBNeighborhood,
  });

  const partnerAHour = form.querySelector('select[name="partnerAHour"]');
  const partnerAMinute = form.querySelector('select[name="partnerAMinute"]');
  const partnerBHour = form.querySelector('select[name="partnerBHour"]');
  const partnerBMinute = form.querySelector('select[name="partnerBMinute"]');
  const partnerAUnknown = form.querySelector('input[name="partnerAUnknownTime"]');
  const partnerBUnknown = form.querySelector('input[name="partnerBUnknownTime"]');

  const syncUnknownTime = (toggle, hourSelect, minuteSelect) => {
    if (
      !(toggle instanceof HTMLInputElement) ||
      !(hourSelect instanceof HTMLSelectElement) ||
      !(minuteSelect instanceof HTMLSelectElement)
    ) {
      return;
    }

    hourSelect.disabled = toggle.checked;
    minuteSelect.disabled = toggle.checked;
  };

  const update = async () => {
    const formData = new FormData(form);
    const relationStyle = String(formData.get("relationStyle") ?? "romance");
    const comparisonDepth = String(formData.get("comparisonDepth") ?? "balanced");
    const houseSystem = String(formData.get("houseSystem") ?? "placidus");
    const zodiacMode = String(formData.get("zodiacMode") ?? "tropical");
    const orbLevel = String(formData.get("orbLevel") ?? "balanced");
    const readingTone = String(formData.get("readingTone") ?? "soft");
    const includeMoon = formData.has("includeMoon");
    const includeAscendant = formData.has("includeAscendant");
    const includeVenusMars = formData.has("includeVenusMars");
    const focusLongTerm = formData.has("focusLongTerm");

    const leftDate = buildBirthDate({
      yearValue: String(formData.get("partnerAYear") ?? ""),
      monthValue: String(formData.get("partnerAMonth") ?? ""),
      dayValue: String(formData.get("partnerADay") ?? ""),
      hourValue: String(formData.get("partnerAHour") ?? "00"),
      minuteValue: String(formData.get("partnerAMinute") ?? "00"),
    });
    const rightDate = buildBirthDate({
      yearValue: String(formData.get("partnerBYear") ?? ""),
      monthValue: String(formData.get("partnerBMonth") ?? ""),
      dayValue: String(formData.get("partnerBDay") ?? ""),
      hourValue: String(formData.get("partnerBHour") ?? "00"),
      minuteValue: String(formData.get("partnerBMinute") ?? "00"),
    });

    if (!(leftDate instanceof Date) || !(rightDate instanceof Date)) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Doğum bilgisi eksik</h4>
          <p>Uyum sonucunu göstermek için her iki partnerin de geçerli gün, ay, yıl ve saat seçimi olmalı.</p>
        </article>
      `;
      return;
    }

    const [leftLocation, rightLocation] = await Promise.all([
      resolveSelectedLocationCoordinates({
        citySelect: partnerACity,
        districtSelect: partnerADistrict,
        neighborhoodSelect: partnerANeighborhood,
      }),
      resolveSelectedLocationCoordinates({
        citySelect: partnerBCity,
        districtSelect: partnerBDistrict,
        neighborhoodSelect: partnerBNeighborhood,
      }),
    ]);

    const leftProfile = buildCompatibilityProfile({
      name: String(formData.get("partnerAName") ?? "").trim() || "Partner A",
      date: leftDate,
      timeValue: `${String(formData.get("partnerAHour") ?? "00")}:${String(formData.get("partnerAMinute") ?? "00")}`,
      unknownTime: formData.has("partnerAUnknownTime"),
      location: leftLocation,
      district: getSelectedOptionLabel(partnerADistrict),
      neighborhood: getSelectedOptionLabel(partnerANeighborhood),
      zodiacMode,
    });
    const rightProfile = buildCompatibilityProfile({
      name: String(formData.get("partnerBName") ?? "").trim() || "Partner B",
      date: rightDate,
      timeValue: `${String(formData.get("partnerBHour") ?? "00")}:${String(formData.get("partnerBMinute") ?? "00")}`,
      unknownTime: formData.has("partnerBUnknownTime"),
      location: rightLocation,
      district: getSelectedOptionLabel(partnerBDistrict),
      neighborhood: getSelectedOptionLabel(partnerBNeighborhood),
      zodiacMode,
    });

    const summary = summarizeCompatibility({
      leftProfile,
      rightProfile,
      styleKey: relationStyle,
      orbLevel,
      toneKey: readingTone,
      focusLongTerm,
      includeMoon,
      includeAscendant,
      includeVenusMars,
    });

    const depthCount =
      {
        quick: 2,
        balanced: 3,
        extended: 4,
      }[comparisonDepth] ?? 3;
    const visibleAspectCards = summary.topAspectCards.slice(0, depthCount);
    const displayedTimeLeft = leftProfile.unknownTime ? "12:00 (yaklaşık)" : leftProfile.timeValue;
    const displayedTimeRight = rightProfile.unknownTime ? "12:00 (yaklaşık)" : rightProfile.timeValue;
    const badges = [
      COMPATIBILITY_STYLE_LABELS[relationStyle] ?? COMPATIBILITY_STYLE_LABELS.romance,
      COMPATIBILITY_DEPTH_LABELS[comparisonDepth] ?? COMPATIBILITY_DEPTH_LABELS.balanced,
      ORB_LEVEL_LABELS[orbLevel] ?? ORB_LEVEL_LABELS.balanced,
      ZODIAC_MODE_LABELS[zodiacMode] ?? ZODIAC_MODE_LABELS.tropical,
      HOUSE_SYSTEM_LABELS[houseSystem] ?? HOUSE_SYSTEM_LABELS.placidus,
    ];

    result.innerHTML = `
      <article class="result-hero">
        <p class="preview-label">Uyum okuması</p>
        <h3>${leftProfile.name} &amp; ${rightProfile.name}</h3>
        <p>
          ${formatDate(leftProfile.date)} ${displayedTimeLeft} ve ${formatDate(rightProfile.date)} ${displayedTimeRight}
          doğum verileri karşılaştırıldı. ${summary.focusLine}
        </p>
      </article>

      <article class="result-note-card compatibility-score-shell">
        <div class="compatibility-score-head">
          <div>
            <h4>Genel uyum skoru</h4>
            <p>${summary.tone} · ${READING_TONE_LABELS[readingTone] ?? READING_TONE_LABELS.soft}</p>
          </div>
          <strong class="compatibility-score-value">${summary.totalScore}</strong>
        </div>
        <div class="compatibility-score-bar" aria-hidden="true">
          <span class="compatibility-score-fill" style="width: ${summary.totalScore}%"></span>
        </div>
        <div class="compatibility-badge-row">
          ${badges.map((badge) => `<span class="compatibility-badge">${badge}</span>`).join("")}
        </div>
      </article>

      <section class="result-grid">
        ${renderMetricCards([
          {
            label: "Duygusal akış",
            value: `${summary.metrics.emotional}/100`,
            note: `${leftProfile.moonSign.name} - ${rightProfile.moonSign.name}`,
          },
          {
            label: "İletişim",
            value: `${summary.metrics.communication}/100`,
            note: `${leftProfile.mercurySign.name} - ${rightProfile.mercurySign.name}`,
          },
          {
            label: "Çekim",
            value: `${summary.metrics.attraction}/100`,
            note: `${leftProfile.venusSign.name} - ${rightProfile.marsSign.name}`,
          },
          {
            label: "Tempo",
            value: `${summary.metrics.rhythm}/100`,
            note: `${leftProfile.timeSegment.label} - ${rightProfile.timeSegment.label}`,
          },
          {
            label: "Uzun vade",
            value: `${summary.metrics.longTerm}/100`,
            note: `${leftProfile.sunSign.mode} - ${rightProfile.sunSign.mode}`,
          },
          {
            label: "Güneş eşleşmesi",
            value: `${leftProfile.sunSign.name} + ${rightProfile.sunSign.name}`,
            note: `${leftProfile.sunSign.element} / ${rightProfile.sunSign.element}`,
          },
        ])}
      </section>

      <section class="compatibility-insight-grid">
        <article class="result-note-card">
          <h4>İlişkiyi taşıyan alanlar</h4>
          <div class="compatibility-aspect-list">
            ${summary.strengths
              .map(
                (item) => `
                  <article class="compatibility-aspect-item">
                    <strong>Güçlü nokta</strong>
                    <span>${item}</span>
                  </article>
                `,
              )
              .join("")}
          </div>
        </article>

        <article class="result-note-card">
          <h4>Denge ister</h4>
          <div class="compatibility-aspect-list">
            ${summary.cautions
              .map(
                (item) => `
                  <article class="compatibility-aspect-item">
                    <strong>Dikkat alanı</strong>
                    <span>${item}</span>
                  </article>
                `,
              )
              .join("")}
          </div>
        </article>
      </section>

      <section class="compatibility-insight-grid">
        <article class="result-note-card">
          <h4>Öne çıkan temaslar</h4>
          <div class="compatibility-aspect-list">
            ${visibleAspectCards
              .map(
                (item) => `
                  <article class="compatibility-aspect-item">
                    <strong>${item.title}</strong>
                    <span>${item.detail}</span>
                  </article>
                `,
              )
              .join("")}
          </div>
        </article>

        <article class="result-note-card">
          <h4>Partner özeti</h4>
          <div class="compatibility-pair-summary">
            <div class="compatibility-pair-row">
              <article class="compatibility-token">
                <strong>${leftProfile.name}</strong>
                <span>Güneş ${leftProfile.sunSign.name} · Ay ${leftProfile.moonSign.name} · Yükselen ${leftProfile.ascSign.name}</span>
              </article>
              <article class="compatibility-token">
                <strong>${rightProfile.name}</strong>
                <span>Güneş ${rightProfile.sunSign.name} · Ay ${rightProfile.moonSign.name} · Yükselen ${rightProfile.ascSign.name}</span>
              </article>
            </div>
            <div class="compatibility-pair-row">
              <article class="compatibility-token">
                <strong>Partner A doğum yeri</strong>
                <span>${leftProfile.locationLabel}</span>
              </article>
              <article class="compatibility-token">
                <strong>Partner B doğum yeri</strong>
                <span>${rightProfile.locationLabel}</span>
              </article>
            </div>
          </div>
        </article>
      </section>
    `;
  };

  syncUnknownTime(partnerAUnknown, partnerAHour, partnerAMinute);
  syncUnknownTime(partnerBUnknown, partnerBHour, partnerBMinute);

  partnerAUnknown?.addEventListener("change", () => {
    syncUnknownTime(partnerAUnknown, partnerAHour, partnerAMinute);
    update();
  });
  partnerBUnknown?.addEventListener("change", () => {
    syncUnknownTime(partnerBUnknown, partnerBHour, partnerBMinute);
    update();
  });

  partnerACity.addEventListener("locationresolved", update);
  partnerBCity.addEventListener("locationresolved", update);

  form.addEventListener("change", (event) => {
    const target = event.target;
    if (target !== partnerAUnknown && target !== partnerBUnknown) {
      update();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  update();
};

const renderLunarNodesResult = () => {
  const form = document.querySelector("#lunarNodesForm");
  const result = document.querySelector("#lunarNodesResult");
  const tableBody = document.querySelector("#lunarNodesTableBody");

  if (!(form instanceof HTMLFormElement) || !(result instanceof HTMLElement) || !(tableBody instanceof HTMLElement)) {
    return;
  }

  const formatShortDate = (dateValue) => {
    const [year = "", month = "", day = ""] = dateValue.split("-");
    return `${day}.${month}.${year}`;
  };

  const getSignByName = (signLabel) => ZODIAC_SIGNS.find((sign) => sign.name === signLabel) ?? ZODIAC_SIGNS[0];

  const getNodeAxisLesson = (northSign, southSign, focusKey) => {
    const focusLabel = NODE_FOCUS_DESCRIPTIONS[focusKey] ?? NODE_FOCUS_DESCRIPTIONS.general;
    const northFocus =
      {
        general: `${northSign.element} niteliğini daha görünür yaşamak`,
        relationships: `${northSign.mode.toLowerCase()} tavrı ilişkilerde bilinçli kurmak`,
        career: `${northSign.name} yönündeki beceriyi üretime çevirmek`,
        spiritual: `${northSign.element.toLowerCase()} sezgisini yaşam pusulası yapmak`,
      }[focusKey] ?? `${northSign.name} yönüne doğru ilerlemek`;
    const southRelease =
      {
        general: `${southSign.name} tarafında otomatik kalan alışkanlığı gevşetmek`,
        relationships: `${southSign.name} kaynaklı tekrar döngülerini fark etmek`,
        career: `${southSign.element.toLowerCase()} konforunda takılı kalmamak`,
        spiritual: `${southSign.mode.toLowerCase()} ezberi bırakıp yeni deneyime açılmak`,
      }[focusKey] ?? `${southSign.name} tarafındaki eski refleksi dönüştürmek`;

    return {
      focusLabel,
      northFocus,
      southRelease,
      summary: `${focusLabel} içinde ${northSign.name} yönü gelişim alanını, ${southSign.name} yönü ise geride bırakılması gereken tanıdık kalıbı anlatır.`,
    };
  };

  const renderReferenceTable = (selectedPeriod) => {
    tableBody.innerHTML = LUNAR_NODE_PERIODS.map((period) => {
      const isCurrent =
        selectedPeriod &&
        period.start === selectedPeriod.start &&
        period.end === selectedPeriod.end &&
        period.north === selectedPeriod.north;

      return `
        <tr${isCurrent ? ' class="is-current"' : ""}>
          <td>${formatShortDate(period.start)}</td>
          <td>${formatShortDate(period.end)}</td>
          <td>Kuzey Düğüm ${period.north}</td>
          <td>Güney Düğüm ${period.south}</td>
        </tr>
      `;
    }).join("");
  };

  const update = () => {
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim() || "AstroHesap kullanıcısı";
    const birthDateValue = String(formData.get("birthDate") ?? "");
    const nodeMode = String(formData.get("nodeMode") ?? "mean");
    const zodiacMode = String(formData.get("zodiacMode") ?? "tropical");
    const focusArea = String(formData.get("focusArea") ?? "general");

    if (!birthDateValue) {
      renderReferenceTable(null);
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Tarih seç</h4>
          <p>Doğum tarihini girince kuzey ve güney ay düğümü ekseni üstte özetlenir, alttaki tabloda da ilgili dönem vurgulanır.</p>
        </article>
      `;
      return;
    }

    const birthDate = new Date(`${birthDateValue}T12:00:00`);
    if (!(birthDate instanceof Date) || Number.isNaN(birthDate.getTime())) {
      renderReferenceTable(null);
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Geçersiz tarih</h4>
          <p>Ay düğümü eksenini göstermek için geçerli bir doğum tarihi gir.</p>
        </article>
      `;
      return;
    }

    const nodeConfig = nodeMode === "true" ? EPHEMERIS_EXTRA_POINTS.trueNode : EPHEMERIS_EXTRA_POINTS.meanNode;
    const ayanamsaOffset = zodiacMode === "sidereal" ? AYANAMSA_LABELS.lahiri.degrees : 0;
    const northDegree = mod(getApproxPlanetDegree(birthDate, nodeConfig) - ayanamsaOffset, 360);
    const southDegree = mod(northDegree + 180, 360);
    const northSign = getSignFromDegree(northDegree);
    const southSign = getSignFromDegree(southDegree);
    const period = LUNAR_NODE_PERIODS.find((item) => birthDateValue >= item.start && birthDateValue <= item.end) ?? null;
    const lesson = getNodeAxisLesson(northSign, southSign, focusArea);

    renderReferenceTable(period);

    result.innerHTML = `
      <section class="result-grid nodes-summary-grid">
        ${renderMetricCards([
          {
            label: "Kuzey Ay Düğümü",
            value: formatZodiacPosition(northDegree),
            note: `${northSign.element} / ${northSign.mode}`,
          },
          {
            label: "Güney Ay Düğümü",
            value: formatZodiacPosition(southDegree),
            note: `${southSign.element} / ${southSign.mode}`,
          },
          {
            label: "Düğüm ekseni",
            value: `${northSign.name} - ${southSign.name}`,
            note: lesson.focusLabel,
          },
          {
            label: "Dönem aralığı",
            value: period ? `${formatShortDate(period.start)} / ${formatShortDate(period.end)}` : "Tablo dışı",
            note: period ? "Referans listedeki satır bulundu" : "Yaklaşık hesaplandı",
          },
        ])}
      </section>

      <article class="result-hero">
        <p class="preview-label">Kadersel yorum</p>
        <h3>${name}</h3>
        <p>${formatDate(birthDate)} tarihine göre ${lesson.summary}</p>
        <p class="result-inline-meta">
          ${nodeMode === "true" ? "True Node" : "Mean Node"}
          <span class="divider-dot" aria-hidden="true"></span>
          ${zodiacMode === "sidereal" ? "Sideral" : "Tropik"}
          <span class="divider-dot" aria-hidden="true"></span>
          ${lesson.focusLabel}
        </p>
      </article>

      <section class="nodes-phase-grid">
        <article class="phase-item">
          <strong>Kuzey düğüm yönü</strong>
          <span>${northSign.name}</span>
          <p>${lesson.northFocus} ana temayı büyütür.</p>
        </article>

        <article class="phase-item">
          <strong>Güney düğüm alışkanlığı</strong>
          <span>${southSign.name}</span>
          <p>${lesson.southRelease} bu eksenin denge dersidir.</p>
        </article>

        <article class="phase-item">
          <strong>Tablo vurgusu</strong>
          <span>${period ? `${period.north} / ${period.south}` : "Referans aralığı dışında"}</span>
          <p>${period ? "Alttaki tabloda ilgili dönem satırı işaretlendi." : "Alttaki liste 1949-2032 referans aralığını gösterir."}</p>
        </article>
      </section>
    `;
  };

  form.addEventListener("change", update);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  update();
};

const renderSunSignCalculatorResult = () => {
  const form = document.querySelector("#sunSignForm");
  const result = document.querySelector("#sunSignResult");
  const citySelect = form?.querySelector('select[name="city"]');
  const districtSelect = form?.querySelector('[data-location-district]');
  const neighborhoodSelect = form?.querySelector('[data-location-neighborhood]');
  const latitudeInput = form?.querySelector('input[name="latitude"]');
  const longitudeInput = form?.querySelector('input[name="longitude"]');
  const birthDateInput = form?.querySelector('input[name="birthDate"]');
  const birthTimeInput = form?.querySelector('input[name="birthTime"]');
  const unknownTimeInput = form?.querySelector('input[name="unknownTime"]');

  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(citySelect instanceof HTMLSelectElement) ||
    !(districtSelect instanceof HTMLSelectElement) ||
    !(neighborhoodSelect instanceof HTMLSelectElement) ||
    !(latitudeInput instanceof HTMLInputElement) ||
    !(longitudeInput instanceof HTMLInputElement) ||
    !(birthDateInput instanceof HTMLInputElement) ||
    !(birthTimeInput instanceof HTMLInputElement) ||
    !(unknownTimeInput instanceof HTMLInputElement)
  ) {
    return;
  }

  bindLocationSelects({
    citySelect,
    districtSelect,
    neighborhoodSelect,
  });

  const syncCoordinates = async () => {
    const city = await resolveSelectedLocationCoordinates({
      citySelect,
      districtSelect,
      neighborhoodSelect,
    });
    latitudeInput.value = city.latitude.toFixed(4);
    longitudeInput.value = city.longitude.toFixed(4);
    return city;
  };

  const update = () => {
    const formData = new FormData(form);
    const birthDateValue = String(formData.get("birthDate") ?? "");
    const birthTimeValue = String(formData.get("birthTime") ?? "12:00");
    const timezoneOffset = String(formData.get("timezoneOffset") ?? "3");
    const unknownTime = formData.has("unknownTime");

    if (!birthDateValue) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Doğum tarihini seç</h4>
          <p>Güneş burcunu görmek için tarih gir. Sonuç kartında burcun, tarih aralığın ve temel karakter tonu birlikte özetlenir.</p>
        </article>
      `;
      return;
    }

    const birthDate = new Date(`${birthDateValue}T12:00:00`);
    if (!(birthDate instanceof Date) || Number.isNaN(birthDate.getTime())) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Geçersiz tarih</h4>
          <p>Burç hesabını göstermek için geçerli bir doğum tarihi gir.</p>
        </article>
      `;
      return;
    }

    const calculationDate = new Date(`${birthDateValue}T${unknownTime ? "12:00" : birthTimeValue}:00`);
    const sign = getSunSign(calculationDate);
    const moonPhase = getMoonPhaseInfo(calculationDate);
    const details = SUN_SIGN_DETAILS[sign.name] ?? SUN_SIGN_DETAILS["Koç"];
    const birthWeekdayRuler = WEEKDAY_RULERS[birthDate.getDay()] ?? WEEKDAY_RULERS[0];
    const weekdayRaw = birthDate.toLocaleDateString("tr-TR", { weekday: "long" });
    const weekdayLabel = `${weekdayRaw.charAt(0).toLocaleUpperCase("tr-TR")}${weekdayRaw.slice(1)}`;
    const district = getSelectedOptionLabel(districtSelect);
    const neighborhood = getSelectedOptionLabel(neighborhoodSelect);
    const locationLabel = `${citySelect.value}${district ? `, ${district}` : ""}${neighborhood ? ` / ${neighborhood}` : ""}`;
    const displayedTime = unknownTime ? "12:00 (yaklaşık)" : birthTimeValue;
    const latitude = parseNumericInput(latitudeInput.value, 41.0082);
    const longitude = parseNumericInput(longitudeInput.value, 28.9784);
    const calculationMinutes = parseTimeToMinutes(unknownTime ? "12:00" : birthTimeValue);
    const sunriseMinutes = getApproxSunriseMinutes(calculationDate, {
      label: citySelect.value || "İstanbul",
      latitude,
      longitude,
    });
    const signShift = Math.floor((calculationMinutes - sunriseMinutes) / 120);
    const ascDegree = mod((sign.index + signShift) * 30 + calculationMinutes / 4, 360);
    const moonDegree = mod(getApproxTropicalSunDegree(calculationDate) + moonPhase.age * 12.2, 360);
    const moonSign = getSignFromDegree(moonDegree);
    const ascSign = getSignFromDegree(ascDegree);
    const sunHouse = Math.floor(mod(getApproxTropicalSunDegree(calculationDate) - ascDegree, 360) / 30) + 1;
    const moonHouse = Math.floor(mod(moonDegree - ascDegree, 360) / 30) + 1;
    const formatPositionSuffix = (degreeValue) => {
      const full = formatZodiacPosition(degreeValue);
      const signLabel = getSignFromDegree(degreeValue).name;
      return full.startsWith(`${signLabel} `) ? full.slice(signLabel.length + 1) : full;
    };
    const noteText = unknownTime
      ? "Saat bilinmediği için yükselen ve evler 12:00 eksenine göre yaklaşık hesaplandı."
      : "Sınır derecelerinde yorum bir önceki veya sonraki burç etkisine de yaklaşabilir.";

    result.innerHTML = `
      <article class="sun-sign-result-panel">
        <div class="sun-sign-result-copy">
          <p><strong>Burcunuz (Güneş Burcu):</strong> ${sign.name}</p>
          <p><strong>Güneşin Konumu:</strong> ${sunHouse}. ev (${formatZodiacPosition(getApproxTropicalSunDegree(calculationDate))})</p>
          <p><strong>Ay Burcunuz:</strong> ${moonSign.name}</p>
          <p><strong>Ayın Konumu:</strong> ${moonHouse}. ev (${formatZodiacPosition(moonDegree)})</p>
          <p><strong>Yükselen Burcunuz:</strong> ${ascSign.name} (${formatPositionSuffix(ascDegree)})</p>
          <p><strong>${sign.name} Burcunun Grubu:</strong> ${sign.element}</p>
          <p><strong>${sign.name} Burcunun Yönetici Gezegeni:</strong> ${details.ruler}</p>
          <p><strong>Haftanın hangi günüydü:</strong> Bir ${weekdayLabel} günü doğdunuz.</p>
          <p class="sun-sign-result-note"><strong>Not:</strong> ${noteText}</p>
          <p class="result-inline-meta">
            ${formatDate(birthDate)} · ${displayedTime} · ${locationLabel} · UTC ${timezoneOffset}
          </p>
        </div>
      </article>

      <section class="sun-sign-story-grid">
        <article class="result-note-card">
          <h4>Ana ton</h4>
          <p>${details.strength}</p>
        </article>
        <article class="result-note-card">
          <h4>Denge noktası</h4>
          <p>${details.caution}</p>
        </article>
      </section>

      <section class="seek-mini-grid sun-sign-mini-grid">
        <article class="seek-mini-card">
          <strong>Doğal akış</strong>
          <span>${details.focus}</span>
        </article>
        <article class="seek-mini-card">
          <strong>Gün etkisi</strong>
          <span>${birthWeekdayRuler} günü doğumu günlük ritme ayrı bir vurgu ekler.</span>
        </article>
      </section>
    `;
  };

  if (!birthDateInput.value) {
    birthDateInput.value = new Date().toISOString().slice(0, 10);
  }

  const syncUnknownTimeState = () => {
    birthTimeInput.disabled = unknownTimeInput.checked;
  };

  citySelect.addEventListener("locationresolved", () => {
    syncCoordinates();
    update();
  });

  neighborhoodSelect.addEventListener("change", () => {
    syncCoordinates();
    update();
  });

  form.addEventListener("change", (event) => {
    const target = event.target;
    if (
      target === citySelect ||
      target === districtSelect ||
      target === neighborhoodSelect
    ) {
      return;
    }
    update();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  unknownTimeInput.addEventListener("change", () => {
    syncUnknownTimeState();
    update();
  });

  syncUnknownTimeState();
  syncCoordinates().then(() => {
    update();
  });
};

const renderMoonSignCalculatorResult = () => {
  const form = document.querySelector("#moonSignForm");
  const result = document.querySelector("#moonSignResult");
  const citySelect = form?.querySelector('select[name="city"]');
  const districtSelect = form?.querySelector('[data-location-district]');
  const neighborhoodSelect = form?.querySelector('[data-location-neighborhood]');
  const latitudeInput = form?.querySelector('input[name="latitude"]');
  const longitudeInput = form?.querySelector('input[name="longitude"]');
  const birthDateInput = form?.querySelector('input[name="birthDate"]');
  const birthTimeInput = form?.querySelector('input[name="birthTime"]');
  const unknownTimeInput = form?.querySelector('input[name="unknownTime"]');

  if (
    !(form instanceof HTMLFormElement) ||
    !(result instanceof HTMLElement) ||
    !(citySelect instanceof HTMLSelectElement) ||
    !(districtSelect instanceof HTMLSelectElement) ||
    !(neighborhoodSelect instanceof HTMLSelectElement) ||
    !(latitudeInput instanceof HTMLInputElement) ||
    !(longitudeInput instanceof HTMLInputElement) ||
    !(birthDateInput instanceof HTMLInputElement) ||
    !(birthTimeInput instanceof HTMLInputElement) ||
    !(unknownTimeInput instanceof HTMLInputElement)
  ) {
    return;
  }

  bindLocationSelects({
    citySelect,
    districtSelect,
    neighborhoodSelect,
  });

  const syncCoordinates = async () => {
    const city = await resolveSelectedLocationCoordinates({
      citySelect,
      districtSelect,
      neighborhoodSelect,
    });
    latitudeInput.value = city.latitude.toFixed(4);
    longitudeInput.value = city.longitude.toFixed(4);
    return city;
  };

  const update = () => {
    const formData = new FormData(form);
    const birthDateValue = String(formData.get("birthDate") ?? "");
    const birthTimeValue = String(formData.get("birthTime") ?? "12:00");
    const timezoneOffset = String(formData.get("timezoneOffset") ?? "3");
    const unknownTime = formData.has("unknownTime");

    if (!birthDateValue) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Doğum tarihini seç</h4>
          <p>Ay burcunu görmek için tarih gir. Sonuç kutusunda ay burcu, ayın konumu ve duygusal akış birlikte özetlenir.</p>
        </article>
      `;
      return;
    }

    const birthDate = new Date(`${birthDateValue}T12:00:00`);
    if (!(birthDate instanceof Date) || Number.isNaN(birthDate.getTime())) {
      result.innerHTML = `
        <article class="result-note-card">
          <h4>Geçersiz tarih</h4>
          <p>Ay burcu hesabını göstermek için geçerli bir doğum tarihi gir.</p>
        </article>
      `;
      return;
    }

    const calculationDate = new Date(`${birthDateValue}T${unknownTime ? "12:00" : birthTimeValue}:00`);
    const sunSign = getSunSign(calculationDate);
    const moonPhase = getMoonPhaseInfo(calculationDate);
    const sunDegree = getApproxTropicalSunDegree(calculationDate);
    const moonDegree = mod(sunDegree + moonPhase.age * 12.2, 360);
    const moonSign = getSignFromDegree(moonDegree);
    const details = MOON_SIGN_DETAILS[moonSign.name] ?? MOON_SIGN_DETAILS["Koç"];
    const district = getSelectedOptionLabel(districtSelect);
    const neighborhood = getSelectedOptionLabel(neighborhoodSelect);
    const locationLabel = `${citySelect.value}${district ? `, ${district}` : ""}${neighborhood ? ` / ${neighborhood}` : ""}`;
    const displayedTime = unknownTime ? "12:00 (yaklaşık)" : birthTimeValue;
    const latitude = parseNumericInput(latitudeInput.value, 41.0082);
    const longitude = parseNumericInput(longitudeInput.value, 28.9784);
    const calculationMinutes = parseTimeToMinutes(unknownTime ? "12:00" : birthTimeValue);
    const sunriseMinutes = getApproxSunriseMinutes(calculationDate, {
      label: citySelect.value || "İstanbul",
      latitude,
      longitude,
    });
    const signShift = Math.floor((calculationMinutes - sunriseMinutes) / 120);
    const ascDegree = mod((sunSign.index + signShift) * 30 + calculationMinutes / 4, 360);
    const ascSign = getSignFromDegree(ascDegree);
    const sunHouse = Math.floor(mod(sunDegree - ascDegree, 360) / 30) + 1;
    const moonHouse = Math.floor(mod(moonDegree - ascDegree, 360) / 30) + 1;
    const formatPositionSuffix = (degreeValue) => {
      const full = formatZodiacPosition(degreeValue);
      const signLabel = getSignFromDegree(degreeValue).name;
      return full.startsWith(`${signLabel} `) ? full.slice(signLabel.length + 1) : full;
    };
    const noteText = unknownTime
      ? "Saat bilinmediği için yükselen ve evler 12:00 eksenine göre yaklaşık hesaplandı."
      : "Ay yerleşimi duygusal ritmi anlatır; sınır derecelerinde yorum komşu burca yaklaşabilir.";

    result.innerHTML = `
      <article class="sun-sign-result-panel">
        <div class="sun-sign-result-copy">
          <p><strong>Ay Burcunuz:</strong> ${moonSign.name}</p>
          <p><strong>Ayın Konumu:</strong> ${moonHouse}. ev (${formatZodiacPosition(moonDegree)})</p>
          <p><strong>Burcunuz (Güneş Burcu):</strong> ${sunSign.name}</p>
          <p><strong>Güneşin Konumu:</strong> ${sunHouse}. ev (${formatZodiacPosition(sunDegree)})</p>
          <p><strong>Yükselen Burcunuz:</strong> ${ascSign.name} (${formatPositionSuffix(ascDegree)})</p>
          <p class="sun-sign-result-note"><strong>Not:</strong> ${noteText}</p>
          <p class="result-inline-meta">
            ${formatDate(birthDate)} · ${displayedTime} · ${locationLabel} · UTC ${timezoneOffset}
          </p>
        </div>
      </article>

      <section class="sun-sign-story-grid">
        <article class="result-note-card">
          <h4>Duygusal akış</h4>
          <p>${details.strength}</p>
        </article>
        <article class="result-note-card">
          <h4>Denge noktası</h4>
          <p>${details.caution}</p>
        </article>
      </section>

      <section class="seek-mini-grid sun-sign-mini-grid">
        <article class="seek-mini-card">
          <strong>Ay burcu teması</strong>
          <span>${details.focus}</span>
        </article>
        <article class="seek-mini-card">
          <strong>Ay fazı</strong>
          <span>${moonPhase.name} · ${moonPhase.theme}</span>
        </article>
      </section>
    `;
  };

  if (!birthDateInput.value) {
    birthDateInput.value = new Date().toISOString().slice(0, 10);
  }

  const syncUnknownTimeState = () => {
    birthTimeInput.disabled = unknownTimeInput.checked;
  };

  citySelect.addEventListener("locationresolved", () => {
    syncCoordinates();
    update();
  });

  neighborhoodSelect.addEventListener("change", () => {
    syncCoordinates();
    update();
  });

  form.addEventListener("change", (event) => {
    const target = event.target;
    if (target === citySelect || target === districtSelect || target === neighborhoodSelect) {
      return;
    }
    update();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });

  unknownTimeInput.addEventListener("change", () => {
    syncUnknownTimeState();
    update();
  });

  syncUnknownTimeState();
  syncCoordinates().then(() => {
    update();
  });
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
  applySavedBirthProfileToPage();
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

  if (pageName === "zodiac-compatibility" || pageName === "synastry") {
    await renderZodiacCompatibilityResult();
  }

  if (pageName === "lunar-nodes") {
    renderLunarNodesResult();
  }

  if (pageName === "sun-sign-calculator") {
    renderSunSignCalculatorResult();
  }

  if (pageName === "moon-sign-calculator") {
    renderMoonSignCalculatorResult();
  }

  if (pageName === "birth-chart-extended") {
    await renderExtendedBirthChartResult();
  }

  if (pageName === "vedic-sidereal") {
    await renderVedicSiderealResult();
  }

  injectAlternateBirthProfileBox();
};

initializeTools();
