const searchForm = document.querySelector("#toolSearchForm");
const searchInput = document.querySelector("#toolSearchInput");
const toolCards = Array.from(document.querySelectorAll(".top-city-card"));
const cardGroups = Array.from(document.querySelectorAll("[data-card-group]"));
const resultsCount = document.querySelector("#resultsCount");
const emptyState = document.querySelector("#emptyState");
const initialQuery = new URLSearchParams(window.location.search).get("q") ?? "";
const authOverlay = document.querySelector("[data-auth-overlay]");
const authOpenButton = document.querySelector("[data-auth-open]");
const authTrigger = document.querySelector("[data-auth-trigger]");
const authCloseButtons = Array.from(document.querySelectorAll("[data-auth-close]"));
const authTabs = Array.from(document.querySelectorAll("[data-auth-tab]"));
const authPanels = Array.from(document.querySelectorAll("[data-auth-panel]"));
const passwordToggles = Array.from(document.querySelectorAll("[data-password-toggle]"));
const settingsOpenButton = document.querySelector("[data-settings-open]");
const settingsOverlay = document.querySelector("[data-settings-overlay]");
const settingsCloseButtons = Array.from(document.querySelectorAll("[data-settings-close]"));
const settingsNavItems = Array.from(document.querySelectorAll("[data-settings-tab]"));
const settingsPanels = Array.from(document.querySelectorAll("[data-settings-panel]"));
const settingsSessionAction = document.querySelector("[data-settings-session-action]");
const settingsRegisterCta = document.querySelector("[data-settings-register-cta]");
const settingsPasswordEmailButton = document.querySelector("[data-password-email-btn]");
const settingsAccountForm = document.querySelector("#settingsAccountForm");
const settingsPasswordForm = document.querySelector("#settingsPasswordForm");
const settingsFeedbackForm = document.querySelector("#settingsFeedbackForm");
const settingsBirthForm = document.querySelector("#settingsBirthForm");
const settingsAccountNote = document.querySelector('[data-settings-note="account"]');
const settingsPasswordNote = document.querySelector('[data-settings-note="password"]');
const settingsFeedbackNote = document.querySelector('[data-settings-note="feedback"]');
const settingsBirthNote = document.querySelector('[data-settings-note="birth"]');
const settingsBirthCitySelect = document.querySelector("[data-settings-birth-city]");
const settingsBirthDistrictSelect = document.querySelector("[data-settings-birth-district]");
const settingsBirthNeighborhoodSelect = document.querySelector("[data-settings-birth-neighborhood]");
const settingsBirthDateInput = document.querySelector("[data-settings-birth-date]");
const settingsBirthTimeInput = document.querySelector("[data-settings-birth-time]");
const settingsBirthDaySelect = document.querySelector("[data-settings-birth-day]");
const settingsBirthMonthSelect = document.querySelector("[data-settings-birth-month]");
const settingsBirthYearSelect = document.querySelector("[data-settings-birth-year]");
const settingsBirthHourSelect = document.querySelector("[data-settings-birth-hour]");
const settingsBirthMinuteSelect = document.querySelector("[data-settings-birth-minute]");
const settingsBirthTimeUnknownInput = document.querySelector("[data-birth-time-unknown]");
const loginForm = document.querySelector("#authLoginForm");
const registerForm = document.querySelector("#authRegisterForm");
const forgotButton = document.querySelector("[data-auth-forgot]");
const loginStatus = document.querySelector('[data-auth-status="login"]');
const registerStatus = document.querySelector('[data-auth-status="register"]');

const STORAGE_KEYS = {
  users: "astrohesap-users",
  session: "astrohesap-session",
  rememberedEmail: "astrohesap-remembered-email",
};

const SETTINGS_MONTH_LABELS = [
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

const normalize = (value) =>
  value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const updateCards = (rawQuery) => {
  const query = normalize(rawQuery);
  let visibleCount = 0;

  toolCards.forEach((card) => {
    const keywords = normalize(card.dataset.keywords ?? "");
    const content = normalize(card.textContent ?? "");
    const isVisible = !query || keywords.includes(query) || content.includes(query);

    card.hidden = !isVisible;
    if (isVisible) {
      visibleCount += 1;
    }
  });

  cardGroups.forEach((group) => {
    if (!(group instanceof HTMLElement)) {
      return;
    }

    const groupCards = Array.from(group.querySelectorAll(".top-city-card"));
    const hasVisibleCard = groupCards.some((card) => !card.hidden);
    group.hidden = !hasVisibleCard;
  });

  if (resultsCount) {
    resultsCount.textContent = String(visibleCount);
  }

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }
};

const getStoredUsers = () => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.users) ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
};

const setStoredUsers = (users) => {
  window.localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
};

const getSession = () => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.session) ?? "null");
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (_error) {
    return null;
  }
};

const setSession = (session) => {
  if (session) {
    window.localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
    return;
  }

  window.localStorage.removeItem(STORAGE_KEYS.session);
};

const getRememberedEmail = () => window.localStorage.getItem(STORAGE_KEYS.rememberedEmail) ?? "";

const setRememberedEmail = (email) => {
  if (email) {
    window.localStorage.setItem(STORAGE_KEYS.rememberedEmail, email);
    return;
  }

  window.localStorage.removeItem(STORAGE_KEYS.rememberedEmail);
};

const setStatus = (node, message, type = "") => {
  if (!(node instanceof HTMLElement)) {
    return;
  }

  if (!message) {
    node.hidden = true;
    node.textContent = "";
    node.classList.remove("is-error", "is-success");
    return;
  }

  node.hidden = false;
  node.textContent = message;
  node.classList.toggle("is-error", type === "error");
  node.classList.toggle("is-success", type === "success");
};

const setSettingsNote = (node, message, type = "") => {
  if (!(node instanceof HTMLElement)) {
    return;
  }

  node.textContent = message;
  node.classList.toggle("is-error", type === "error");
  node.classList.toggle("is-warning", type === "error");
};

const syncBirthTimeField = (isUnknown) => {
  if (settingsBirthTimeInput instanceof HTMLInputElement) {
    settingsBirthTimeInput.disabled = isUnknown;
    if (isUnknown) {
      settingsBirthTimeInput.value = "";
    }
  }

  [settingsBirthHourSelect, settingsBirthMinuteSelect].forEach((selectNode) => {
    if (!(selectNode instanceof HTMLSelectElement)) {
      return;
    }

    selectNode.disabled = isUnknown;
    if (isUnknown) {
      selectNode.value = "";
    }
  });
};

const setSelectOptionsWithPlaceholder = (selectNode, values, placeholder) => {
  if (!(selectNode instanceof HTMLSelectElement)) {
    return;
  }

  selectNode.innerHTML = [`<option value="">${placeholder}</option>`]
    .concat(values.map((value) => `<option value="${value.value}">${value.label}</option>`))
    .join("");
};

const populateBirthDateTimeSelects = () => {
  setSelectOptionsWithPlaceholder(
    settingsBirthDaySelect,
    Array.from({ length: 31 }, (_, index) => {
      const value = String(index + 1);
      return { value, label: value };
    }),
    "Gün",
  );

  setSelectOptionsWithPlaceholder(
    settingsBirthMonthSelect,
    SETTINGS_MONTH_LABELS.map((label, index) => ({
      value: String(index + 1),
      label,
    })),
    "Ay",
  );

  const currentYear = new Date().getFullYear();
  setSelectOptionsWithPlaceholder(
    settingsBirthYearSelect,
    Array.from({ length: currentYear - 1899 }, (_, index) => {
      const year = currentYear - index;
      return { value: String(year), label: String(year) };
    }),
    "Yıl",
  );

  setSelectOptionsWithPlaceholder(
    settingsBirthHourSelect,
    Array.from({ length: 24 }, (_, index) => {
      const value = String(index).padStart(2, "0");
      return { value, label: value };
    }),
    "Saat",
  );

  setSelectOptionsWithPlaceholder(
    settingsBirthMinuteSelect,
    Array.from({ length: 60 }, (_, index) => {
      const value = String(index).padStart(2, "0");
      return { value, label: value };
    }),
    "Dakika",
  );
};

const splitBirthDate = (birthDate) => {
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

const splitBirthTime = (birthTime) => {
  if (!birthTime) {
    return { hour: "", minute: "" };
  }

  const [hour = "", minute = ""] = String(birthTime).split(":");
  return { hour, minute };
};

const initializeBirthLocationFields = async (birthInfo = null) => {
  if (
    !(settingsBirthCitySelect instanceof HTMLSelectElement) ||
    !(settingsBirthDistrictSelect instanceof HTMLSelectElement) ||
    !(settingsBirthNeighborhoodSelect instanceof HTMLSelectElement)
  ) {
    return;
  }

  const locationApi = window.AstroHesapLocations;
  if (!locationApi?.populateCitySelects || !locationApi?.bindLocationSelects) {
    return;
  }

  const city = birthInfo?.city?.trim() ?? "";
  const district = birthInfo?.district?.trim() ?? "";
  const neighborhood = birthInfo?.neighborhood?.trim() ?? "";

  settingsBirthCitySelect.dataset.defaultCityLabel = city;
  settingsBirthDistrictSelect.dataset.selectedDistrict = district;
  settingsBirthNeighborhoodSelect.dataset.selectedNeighborhood = neighborhood;

  await locationApi.populateCitySelects();

  if (!settingsBirthCitySelect.dataset.boundLocation) {
    await locationApi.bindLocationSelects({
      citySelect: settingsBirthCitySelect,
      districtSelect: settingsBirthDistrictSelect,
      neighborhoodSelect: settingsBirthNeighborhoodSelect,
    });
    settingsBirthCitySelect.dataset.boundLocation = "true";
  }

  settingsBirthDistrictSelect.dataset.selectedDistrict = district;
  settingsBirthNeighborhoodSelect.dataset.selectedNeighborhood = neighborhood;
  settingsBirthCitySelect.value = city || "";
  settingsBirthCitySelect.dispatchEvent(new Event("change"));
};

const updateAuthUI = () => {
  const session = getSession();
  const userName = session?.fullName?.trim() || session?.email?.trim() || "";

  if (authTrigger instanceof HTMLButtonElement) {
    authTrigger.classList.toggle("is-authenticated", Boolean(session));
    authTrigger.setAttribute(
      "aria-label",
      session ? `${userName} hesabı açık` : "Giriş yap veya kayıt ol",
    );
    authTrigger.title = session ? `${userName} olarak giriş yapıldı` : "Giriş yap veya kayıt ol";
  }

  if (settingsSessionAction instanceof HTMLButtonElement) {
    settingsSessionAction.textContent = session ? "Çıkış yap" : "Çıkış için giriş yap";
  }
};

const setAuthTab = (tabKey) => {
  authTabs.forEach((tab) => {
    const isActive = tab.dataset.authTab === tabKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  authPanels.forEach((panel) => {
    const isActive = panel.dataset.authPanel === tabKey;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
};

const openAuthModal = (tabKey = "login") => {
  if (!(authOverlay instanceof HTMLElement)) {
    return;
  }

  setAuthTab(tabKey);
  authOverlay.hidden = false;
  document.body.classList.add("auth-open");
};

const closeAuthModal = () => {
  if (!(authOverlay instanceof HTMLElement)) {
    return;
  }

  authOverlay.hidden = true;
  document.body.classList.remove("auth-open");
};

const setSettingsTab = (tabKey) => {
  settingsNavItems.forEach((item) => {
    const isActive = item.dataset.settingsTab === tabKey;
    item.classList.toggle("is-active", isActive);
  });

  settingsPanels.forEach((panel) => {
    const isActive = panel.dataset.settingsPanel === tabKey;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
};

const hydrateSettingsForms = async () => {
  const session = getSession();
  const users = getStoredUsers();
  const currentUser = session ? users.find((entry) => entry.email === session.email) ?? null : null;
  const birthDateParts = splitBirthDate(currentUser?.birthInfo?.birthDate ?? "");
  const birthTimeParts = splitBirthTime(currentUser?.birthInfo?.birthTime ?? "");

  const accountNameInput = settingsAccountForm?.querySelector('input[name="fullName"]');
  const accountEmailInput = settingsAccountForm?.querySelector('input[name="email"]');
  const feedbackNameInput = settingsFeedbackForm?.querySelector('input[name="fullName"]');
  const feedbackEmailInput = settingsFeedbackForm?.querySelector('input[name="email"]');
  const timeUnknownInput = settingsBirthForm?.querySelector('input[name="timeUnknown"]');
  const birthInfo = currentUser?.birthInfo ?? null;

  if (accountNameInput instanceof HTMLInputElement) {
    accountNameInput.value = currentUser?.fullName ?? "";
  }

  if (accountEmailInput instanceof HTMLInputElement) {
    accountEmailInput.value = currentUser?.email ?? "";
  }

  if (feedbackNameInput instanceof HTMLInputElement) {
    feedbackNameInput.value = currentUser?.fullName ?? "";
  }

  if (feedbackEmailInput instanceof HTMLInputElement) {
    feedbackEmailInput.value = currentUser?.email ?? getRememberedEmail();
  }

  if (settingsBirthDaySelect instanceof HTMLSelectElement) {
    settingsBirthDaySelect.value = birthDateParts.day;
  }

  if (settingsBirthMonthSelect instanceof HTMLSelectElement) {
    settingsBirthMonthSelect.value = birthDateParts.month;
  }

  if (settingsBirthYearSelect instanceof HTMLSelectElement) {
    settingsBirthYearSelect.value = birthDateParts.year;
  }

  if (settingsBirthHourSelect instanceof HTMLSelectElement) {
    settingsBirthHourSelect.value = birthTimeParts.hour;
  }

  if (settingsBirthMinuteSelect instanceof HTMLSelectElement) {
    settingsBirthMinuteSelect.value = birthTimeParts.minute;
  }

  if (settingsBirthDateInput instanceof HTMLInputElement) {
    settingsBirthDateInput.value = currentUser?.birthInfo?.birthDate ?? "";
  }

  if (settingsBirthTimeInput instanceof HTMLInputElement) {
    settingsBirthTimeInput.value = currentUser?.birthInfo?.birthTime ?? "";
  }

  if (timeUnknownInput instanceof HTMLInputElement) {
    timeUnknownInput.checked = Boolean(birthInfo?.timeUnknown);
    syncBirthTimeField(timeUnknownInput.checked);
  } else {
    syncBirthTimeField(false);
  }

  if (settingsRegisterCta instanceof HTMLButtonElement) {
    settingsRegisterCta.hidden = Boolean(session);
  }

  setSettingsNote(
    settingsAccountNote,
    session ? "Kayıtlı oturum açık. Bilgilerini burada güncelleyebilirsin." : "Kayıtlı oturum yok. Önce kayıt ol.",
    session ? "" : "",
  );
  setSettingsNote(
    settingsPasswordNote,
    session ? "Şifreni burada güncelleyebilirsin." : "Şifre değiştirmek için önce giriş yap.",
    session ? "" : "error",
  );
  setSettingsNote(settingsFeedbackNote, "Mesajını konu seçerek hızlıca iletebilirsin.");
  setSettingsNote(
    settingsBirthNote,
    session ? "Doğum bilgilerini burada saklayabilirsin." : "Doğum bilgilerini kaydetmek için önce giriş yap.",
    session ? "" : "error",
  );

  await initializeBirthLocationFields(birthInfo);
};

const openSettingsModal = (tabKey = "account") => {
  if (!(settingsOverlay instanceof HTMLElement)) {
    return;
  }

  void hydrateSettingsForms();
  setSettingsTab(tabKey);
  settingsOverlay.hidden = false;
  document.body.classList.add("auth-open");
};

const closeSettingsModal = () => {
  if (!(settingsOverlay instanceof HTMLElement)) {
    return;
  }

  settingsOverlay.hidden = true;
  document.body.classList.remove("auth-open");
};

window.AstroHesapUi = {
  openSettingsModal,
  closeSettingsModal,
  setSettingsTab,
};

const handleLogin = () => {
  if (!(loginForm instanceof HTMLFormElement)) {
    return;
  }

  const formData = new FormData(loginForm);
  const email = String(formData.get("email") ?? "").trim().toLocaleLowerCase("tr-TR");
  const password = String(formData.get("password") ?? "");
  const rememberEmail = formData.has("rememberEmail");

  if (!email || !password) {
    setStatus(loginStatus, "E-posta ve şifre alanlarını doldur.", "error");
    return;
  }

  const user = getStoredUsers().find((entry) => entry.email === email);
  if (!user || user.password !== password) {
    setStatus(loginStatus, "E-posta ya da şifre eşleşmedi.", "error");
    return;
  }

  setSession({
    email: user.email,
    fullName: user.fullName,
    loggedAt: new Date().toISOString(),
  });

  setRememberedEmail(rememberEmail ? email : "");
  setStatus(loginStatus, "Giriş başarılı. Hoş geldin.", "success");
  updateAuthUI();
  void hydrateSettingsForms();

  window.setTimeout(() => {
    closeAuthModal();
    setStatus(loginStatus, "");
  }, 450);
};

const handleRegister = () => {
  if (!(registerForm instanceof HTMLFormElement)) {
    return;
  }

  const formData = new FormData(registerForm);
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLocaleLowerCase("tr-TR");
  const password = String(formData.get("password") ?? "");
  const passwordRepeat = String(formData.get("passwordRepeat") ?? "");
  const termsAccepted = formData.has("termsAccepted");

  if (!fullName || !email || !password || !passwordRepeat) {
    setStatus(registerStatus, 'Tüm alanları doldur.', "error");
    return;
  }

  if (password.length < 6) {
    setStatus(registerStatus, "Şifre en az 6 karakter olmalı.", "error");
    return;
  }

  if (password !== passwordRepeat) {
    setStatus(registerStatus, "Şifreler aynı değil.", "error");
    return;
  }

  if (!termsAccepted) {
    setStatus(registerStatus, "Devam etmek için onay kutusunu işaretle.", "error");
    return;
  }

  const users = getStoredUsers();
  if (users.some((entry) => entry.email === email)) {
    setStatus(registerStatus, "Bu e-posta ile kayıt zaten var.", "error");
    return;
  }

  users.push({
    fullName,
    email,
    password,
    createdAt: new Date().toISOString(),
  });
  setStoredUsers(users);
  setRememberedEmail(email);

  const loginEmailInput = loginForm?.querySelector('input[name="email"]');
  const loginPasswordInput = loginForm?.querySelector('input[name="password"]');
  if (loginEmailInput instanceof HTMLInputElement) {
    loginEmailInput.value = email;
  }
  if (loginPasswordInput instanceof HTMLInputElement) {
    loginPasswordInput.value = "";
  }

  setStatus(registerStatus, "Kayıt tamamlandı. Şimdi giriş yapabilirsin.", "success");
  setAuthTab("login");
  setStatus(loginStatus, "Hesabın oluşturuldu. Şifrenle giriş yap.", "success");
  void hydrateSettingsForms();
};

const handleForgotPassword = () => {
  const emailInput = loginForm?.querySelector('input[name="email"]');
  const email = emailInput instanceof HTMLInputElement ? emailInput.value.trim().toLocaleLowerCase("tr-TR") : "";
  const user = getStoredUsers().find((entry) => entry.email === email);

  if (!email) {
    setStatus(loginStatus, "Önce e-posta alanını doldur.", "error");
    return;
  }

  if (!user) {
    setStatus(loginStatus, "Bu e-posta ile kayıt bulunamadı.", "error");
    return;
  }

  setStatus(loginStatus, `Demo şifre ipucu: hesabın kayıtlı, yeni şifre için yeniden kayıt açmana gerek yok.`, "success");
};

const handleAccountSave = () => {
  if (!(settingsAccountForm instanceof HTMLFormElement)) {
    return;
  }

  const session = getSession();
  if (!session) {
    setSettingsNote(settingsAccountNote, "Kayıtlı oturum yok. Önce kayıt ol.", "error");
    return;
  }

  const formData = new FormData(settingsAccountForm);
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLocaleLowerCase("tr-TR");

  if (!fullName || !email) {
    setSettingsNote(settingsAccountNote, "Ad soyad ve e-posta alanlarını doldur.", "error");
    return;
  }

  const users = getStoredUsers();
  const hasConflict = users.some((entry) => entry.email === email && entry.email !== session.email);
  if (hasConflict) {
    setSettingsNote(settingsAccountNote, "Bu e-posta başka bir hesapta kullanılıyor.", "error");
    return;
  }

  const nextUsers = users.map((entry) =>
    entry.email === session.email ? { ...entry, fullName, email } : entry,
  );
  setStoredUsers(nextUsers);
  setSession({ ...session, fullName, email });
  setRememberedEmail(email);
  updateAuthUI();
  setSettingsNote(settingsAccountNote, "Hesap bilgileri güncellendi.", "success");
};

const handlePasswordUpdate = () => {
  if (!(settingsPasswordForm instanceof HTMLFormElement)) {
    return;
  }

  const session = getSession();
  if (!session) {
    setSettingsNote(settingsPasswordNote, "Şifre değiştirmek için önce giriş yap.", "error");
    return;
  }

  const formData = new FormData(settingsPasswordForm);
  const password = String(formData.get("password") ?? "");
  const passwordRepeat = String(formData.get("passwordRepeat") ?? "");

  if (password.length < 6) {
    setSettingsNote(settingsPasswordNote, "Yeni şifre en az 6 karakter olmalı.", "error");
    return;
  }

  if (password !== passwordRepeat) {
    setSettingsNote(settingsPasswordNote, "Yeni şifreler aynı değil.", "error");
    return;
  }

  const nextUsers = getStoredUsers().map((entry) =>
    entry.email === session.email ? { ...entry, password } : entry,
  );
  setStoredUsers(nextUsers);
  setSettingsNote(settingsPasswordNote, "Şifre güncellendi.", "success");
  settingsPasswordForm.reset();
};

const handlePasswordEmail = () => {
  const session = getSession();
  if (!session) {
    setSettingsNote(settingsPasswordNote, "Şifre değişikliği için önce giriş yap.", "error");
    return;
  }

  setSettingsNote(settingsPasswordNote, `${session.email} adresine şifre bağlantısı gönderildi.`, "success");
};

const handleFeedbackSend = () => {
  if (!(settingsFeedbackForm instanceof HTMLFormElement)) {
    return;
  }

  const formData = new FormData(settingsFeedbackForm);
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!fullName || !email || !subject || !message) {
    setSettingsNote(settingsFeedbackNote, "Ad, e-posta, konu ve mesaj alanlarını doldur.", "error");
    return;
  }

  setSettingsNote(settingsFeedbackNote, "Mesajın alındı. En kısa sürede geri dönüş yapılır.", "success");
  settingsFeedbackForm.reset();
  void hydrateSettingsForms();
};

const handleBirthSave = () => {
  if (!(settingsBirthForm instanceof HTMLFormElement)) {
    return;
  }

  const session = getSession();
  if (!session) {
    setSettingsNote(settingsBirthNote, "Doğum bilgilerini kaydetmek için önce giriş yap.", "error");
    return;
  }

  const formData = new FormData(settingsBirthForm);
  const directBirthDate = String(formData.get("birthDate") ?? "").trim();
  const directBirthTime = String(formData.get("birthTime") ?? "").trim();
  const birthDay = String(formData.get("birthDay") ?? "").trim();
  const birthMonth = String(formData.get("birthMonth") ?? "").trim();
  const birthYear = String(formData.get("birthYear") ?? "").trim();
  const birthHour = String(formData.get("birthHour") ?? "").trim();
  const birthMinute = String(formData.get("birthMinute") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const district = String(formData.get("district") ?? "").trim();
  const neighborhood = String(formData.get("neighborhood") ?? "").trim();
  const timeUnknown = formData.has("timeUnknown");
  const birthDate = directBirthDate
    || (birthYear && birthMonth && birthDay
      ? `${birthYear}-${birthMonth.padStart(2, "0")}-${birthDay.padStart(2, "0")}`
      : "");
  const birthTime = timeUnknown
    ? ""
    : directBirthTime || (birthHour && birthMinute ? `${birthHour}:${birthMinute}` : "");

  const nextUsers = getStoredUsers().map((entry) =>
    entry.email === session.email
      ? {
          ...entry,
          birthInfo: {
            birthDate,
            birthTime: timeUnknown ? "" : birthTime,
            city,
            district,
            neighborhood,
            timeUnknown,
          },
        }
      : entry,
  );

  setStoredUsers(nextUsers);
  setSettingsNote(settingsBirthNote, "Doğum bilgileri kaydedildi.", "success");
  syncBirthTimeField(timeUnknown);
};

searchInput?.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  updateCards(target.value);
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!(searchInput instanceof HTMLInputElement)) {
    return;
  }

  updateCards(searchInput.value);
});

if (searchInput instanceof HTMLInputElement) {
  searchInput.value = initialQuery;
}

updateCards(initialQuery);

const rememberedEmail = getRememberedEmail();
const loginEmailInput = loginForm?.querySelector('input[name="email"]');
if (rememberedEmail && loginEmailInput instanceof HTMLInputElement) {
  loginEmailInput.value = rememberedEmail;
}

populateBirthDateTimeSelects();
updateAuthUI();
void hydrateSettingsForms();

authOpenButton?.addEventListener("click", () => {
  setStatus(loginStatus, "");
  setStatus(registerStatus, "");
  openAuthModal("login");
});

settingsOpenButton?.addEventListener("click", () => {
  openSettingsModal("account");
});

settingsCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeSettingsModal();
  });
});

settingsOverlay?.addEventListener("click", (event) => {
  if (event.target === settingsOverlay) {
    closeSettingsModal();
  }
});

settingsNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    setSettingsTab(item.dataset.settingsTab ?? "account");
  });
});

settingsSessionAction?.addEventListener("click", () => {
  const session = getSession();
  if (session) {
    setSession(null);
    updateAuthUI();
    void hydrateSettingsForms();
    closeSettingsModal();
    return;
  }

  closeSettingsModal();
  openAuthModal("login");
});

settingsRegisterCta?.addEventListener("click", () => {
  closeSettingsModal();
  openAuthModal("register");
});

settingsPasswordEmailButton?.addEventListener("click", () => {
  handlePasswordEmail();
});

authCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeAuthModal();
  });
});

authOverlay?.addEventListener("click", (event) => {
  if (event.target === authOverlay) {
    closeAuthModal();
  }
});

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setStatus(loginStatus, "");
    setStatus(registerStatus, "");
    setAuthTab(tab.dataset.authTab ?? "login");
  });
});

passwordToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const wrapper = button.closest(".auth-input-wrap");
    const input = wrapper?.querySelector("[data-password-input]");
    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    input.type = input.type === "password" ? "text" : "password";
  });
});

forgotButton?.addEventListener("click", () => {
  handleForgotPassword();
});

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleLogin();
});

registerForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleRegister();
});

settingsAccountForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleAccountSave();
});

settingsPasswordForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handlePasswordUpdate();
});

settingsFeedbackForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleFeedbackSend();
});

settingsBirthForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleBirthSave();
});

settingsBirthTimeUnknownInput?.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  syncBirthTimeField(target.checked);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAuthModal();
    closeSettingsModal();
  }
});
