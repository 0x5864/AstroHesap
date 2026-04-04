(function () {
  const pageName = document.body?.dataset?.page ?? "";
  const authOverlay = document.querySelector("[data-auth-overlay]");
  const authOpenButtons = Array.from(document.querySelectorAll("[data-auth-open]"));
  const authCloseButtons = Array.from(document.querySelectorAll("[data-auth-close]"));
  const authTabs = Array.from(document.querySelectorAll("[data-auth-tab]"));
  const authPanels = Array.from(document.querySelectorAll("[data-auth-panel]"));
  const loginForm = document.querySelector("#authLoginForm");
  const registerForm = document.querySelector("#authRegisterForm");
  const forgotButton = document.querySelector("[data-auth-forgot]");
  const loginStatus = document.querySelector('[data-auth-status="login"]');
  const registerStatus = document.querySelector('[data-auth-status="register"]');
  const authTrigger = document.querySelector("[data-auth-trigger]");

  if (!loginForm && !registerForm && !authOverlay) {
    return;
  }

  const STORAGE_KEYS = {
    users: "astrohesap-users",
    session: "astrohesap-session",
    rememberedEmail: "astrohesap-remembered-email",
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

  const updateTriggerUi = () => {
    const session = (() => {
      try {
        const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.session) ?? "null");
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch (_error) {
        return null;
      }
    })();

    if (!(authTrigger instanceof HTMLButtonElement)) {
      return;
    }

    authTrigger.classList.toggle("is-authenticated", Boolean(session));
    authTrigger.setAttribute(
      "aria-label",
      session ? "Hesap açık" : "Giriş yap veya kayıt ol",
    );
  };

  const setAuthTab = (tabKey) => {
    authTabs.forEach((tab) => {
      const isActive = tab.getAttribute("data-auth-tab") === tabKey;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    authPanels.forEach((panel) => {
      const isActive = panel.getAttribute("data-auth-panel") === tabKey;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  const openAuthModal = (tabKey = "login") => {
    setStatus(loginStatus, "");
    setStatus(registerStatus, "");
    setAuthTab(tabKey);

    if (authOverlay instanceof HTMLElement) {
      authOverlay.hidden = false;
      document.body.classList.add("auth-open");
    }
  };

  const closeAuthModal = () => {
    if (!(authOverlay instanceof HTMLElement)) {
      return;
    }

    authOverlay.hidden = true;
    document.body.classList.remove("auth-open");
  };

  const finishAuthSuccess = () => {
    updateTriggerUi();

    window.setTimeout(() => {
      if (pageName === "auth-entry") {
        window.location.href = "index.html";
        return;
      }

      if (authOverlay instanceof HTMLElement) {
        closeAuthModal();
      }

      window.location.reload();
    }, 420);
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
    finishAuthSuccess();
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
      setStatus(registerStatus, "Tüm alanları doldur.", "error");
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
    setSession({
      email,
      fullName,
      loggedAt: new Date().toISOString(),
    });
    setStatus(registerStatus, "Kayıt tamamlandı. Hesabın açıldı.", "success");
    finishAuthSuccess();
  };

  const handleForgotPassword = () => {
    if (!(loginForm instanceof HTMLFormElement)) {
      return;
    }

    const emailInput = loginForm.querySelector('input[name="email"]');
    const email =
      emailInput instanceof HTMLInputElement
        ? emailInput.value.trim().toLocaleLowerCase("tr-TR")
        : "";
    const user = getStoredUsers().find((entry) => entry.email === email);

    if (!email) {
      setStatus(loginStatus, "Önce e-posta alanını doldur.", "error");
      return;
    }

    if (!user) {
      setStatus(loginStatus, "Bu e-posta ile kayıt bulunamadı.", "error");
      return;
    }

    setStatus(loginStatus, "Demo şifre ipucu: hesabın kayıtlı, yeni şifre için yeniden kayıt açmana gerek yok.", "success");
  };

  const rememberedEmail = getRememberedEmail();
  const loginEmailInput = loginForm?.querySelector('input[name="email"]');
  if (rememberedEmail && loginEmailInput instanceof HTMLInputElement) {
    loginEmailInput.value = rememberedEmail;
  }

  authOpenButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openAuthModal("login");
    });
  });

  authCloseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      closeAuthModal();
    });
  });

  authOverlay?.addEventListener("click", (event) => {
    if (event.target === authOverlay) {
      closeAuthModal();
    }
  });

  authTabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      setStatus(loginStatus, "");
      setStatus(registerStatus, "");
      setAuthTab(tab.getAttribute("data-auth-tab") || "login");
    });
  });

  forgotButton?.addEventListener("click", (event) => {
    event.preventDefault();
    handleForgotPassword();
  });

  loginForm?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      handleLogin();
    },
    true,
  );

  registerForm?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      handleRegister();
    },
    true,
  );

  if (!window.AstroHesapUi) {
    window.AstroHesapUi = {};
  }

  window.AstroHesapUi.openAuthModal = openAuthModal;
  window.AstroHesapUi.closeAuthModal = closeAuthModal;

  updateTriggerUi();
})();
