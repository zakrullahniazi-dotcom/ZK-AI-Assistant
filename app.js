let currentLang = "ps";

const languages = {
  ps: {
    dir: "rtl",
    brandText: "ستاسو هوښیار AI مرستیال",
    subtitle: "سلام! زه ستا هوښیار AI مرستیال یم. خپله پوښتنه ولیکه.",
    placeholder: "دلته خپله پوښتنه ولیکه...",
    send: "ولېږه",
    reply: "ستاسو پیغام ترلاسه شو. AI ځواب دلته ښکاره کېږي.",
    footer: "Online AI Assistant · ZK AI",

    settings: "Settings",
    language: "Language",
    appearance: "Appearance",
    dark: "Dark",
    light: "Light",
    login: "Login with Email",
    emailPlaceholder: "Enter your email",
    saveEmail: "Save Email",
    openEmail: "Open Email App",
    about: "About",
    help: "Help Center",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    zkAndroid: "ZK AI for Android",
    zkServices: "ZK Services",

    enterEmail: "Please enter your email.",
    validEmail: "Please enter a valid email.",
    loggedIn: "Logged in with: ",

    helpText:
      "<strong>Help Center</strong><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912",

    termsText:
      "<strong>Terms of Use</strong><br>د ZK AI Assistant په کارولو سره، تاسو منئ چې دا app به په مسؤلانه ډول کاروئ.",

    privacyText:
      "<strong>Privacy Policy</strong><br>ستاسو email یوازې په همدې browser کې د localStorage په وسیله ساتل کېږي.",

    servicesText:
      "<strong>ZK اعلان</strong><br>که تاسو هر ډول Application، Website او Database جوړول غواړئ، د Software Engineer ذکرالله نیازي سره تماس ونیسئ.<br><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912"
  },

  fa: {
    dir: "rtl",
    brandText: "دستیار هوشمند AI شما",
    subtitle: "سلام! من دستیار هوشمند AI شما هستم. سوال خود را بنویسید.",
    placeholder: "سوال خود را اینجا بنویسید...",
    send: "ارسال",
    reply: "پیام شما دریافت شد. پاسخ AI اینجا نمایش داده می‌شود.",
    footer: "Online AI Assistant · ZK AI",

    settings: "Settings",
    language: "Language",
    appearance: "Appearance",
    dark: "Dark",
    light: "Light",
    login: "Login with Email",
    emailPlaceholder: "Enter your email",
    saveEmail: "Save Email",
    openEmail: "Open Email App",
    about: "About",
    help: "Help Center",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    zkAndroid: "ZK AI for Android",
    zkServices: "ZK Services",

    enterEmail: "Please enter your email.",
    validEmail: "Please enter a valid email.",
    loggedIn: "Logged in with: ",

    helpText:
      "<strong>Help Center</strong><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912",

    termsText:
      "<strong>Terms of Use</strong><br>با استفاده از ZK AI Assistant، شما قبول می‌کنید که از این برنامه به شکل مسئولانه استفاده کنید.",

    privacyText:
      "<strong>Privacy Policy</strong><br>ایمیل شما فقط در همین مرورگر توسط localStorage ذخیره می‌شود.",

    servicesText:
      "<strong>ZK اعلان</strong><br>اگر شما می‌خواهید هر نوع Application، Website و Database بسازید، با Software Engineer ذکرالله نیازی تماس بگیرید.<br><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912"
  },

  en: {
    dir: "ltr",
    brandText: "Your smart AI assistant",
    subtitle: "Hello! I am your smart AI assistant. Type your question below.",
    placeholder: "Type your question here...",
    send: "Send",
    reply: "Your message has been received. The AI response will appear here.",
    footer: "Online AI Assistant · ZK AI",

    settings: "Settings",
    language: "Language",
    appearance: "Appearance",
    dark: "Dark",
    light: "Light",
    login: "Login with Email",
    emailPlaceholder: "Enter your email",
    saveEmail: "Save Email",
    openEmail: "Open Email App",
    about: "About",
    help: "Help Center",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    zkAndroid: "ZK AI for Android",
    zkServices: "ZK Services",

    enterEmail: "Please enter your email.",
    validEmail: "Please enter a valid email.",
    loggedIn: "Logged in with: ",

    helpText:
      "<strong>Help Center</strong><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912",

    termsText:
      "<strong>Terms of Use</strong><br>By using ZK AI Assistant, you agree to use this app responsibly.",

    privacyText:
      "<strong>Privacy Policy</strong><br>Your email is saved only in this browser using localStorage.",

    servicesText:
      "<strong>ZK Services</strong><br>If you want to build any Application, Website, or Database, contact Software Engineer Zakrullah Niazi.<br><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912"
  }
};

/* Change Language */
function changeLanguage(lang) {
  currentLang = lang;
  const t = languages[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.body.style.direction = t.dir;

  document.getElementById("brandText").innerText = t.brandText;
  document.getElementById("subtitle").innerText = t.subtitle;
  document.getElementById("userInput").placeholder = t.placeholder;
  document.getElementById("sendBtn").innerText = t.send;
  document.getElementById("footerText").innerText = t.footer;

  document.getElementById("settingsBtn").innerText = t.settings;
  document.getElementById("settingsTitle").innerText = t.settings;
  document.getElementById("languageTitle").innerText = t.language;
  document.getElementById("appearanceTitle").innerText = t.appearance;
  document.getElementById("loginTitle").innerText = t.login;
  document.getElementById("emailInput").placeholder = t.emailPlaceholder;
  document.getElementById("saveEmailBtn").innerText = t.saveEmail;
  document.getElementById("openEmailBtn").innerText = t.openEmail;
  document.getElementById("aboutTitle").innerText = t.about;
  document.getElementById("helpItem").innerText = t.help;
  document.getElementById("termsItem").innerText = t.terms;
  document.getElementById("privacyItem").innerText = t.privacy;
  document.getElementById("zkAndroidItem").innerText = t.zkAndroid;
  document.getElementById("zkServiceBtn").innerText = t.zkServices;

  if (document.body.classList.contains("dark")) {
    document.getElementById("themeBtn").innerText = t.light;
  } else {
    document.getElementById("themeBtn").innerText = t.dark;
  }

  document.getElementById("aboutInfo").innerHTML = "";

  localStorage.setItem("language", lang);
}

/* Send Message */
function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() === "") {
    return;
  }

  const userMsg = document.createElement("div");
  userMsg.className = "message";
  userMsg.innerText = input.value;
  messages.appendChild(userMsg);

  const aiMsg = document.createElement("div");
  aiMsg.className = "message ai";
  aiMsg.innerText = languages[currentLang].reply;
  messages.appendChild(aiMsg);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

/* Dark / Light Mode */
function toggleAppearance() {
  document.body.classList.toggle("dark");

  const themeBtn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    themeBtn.innerText = languages[currentLang].light;
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.innerText = languages[currentLang].dark;
    localStorage.setItem("theme", "light");
  }
}

/* Open Settings Side Panel */
function openSettings() {
  document.getElementById("settingsPanel").classList.add("active");
  document.getElementById("settingsOverlay").classList.add("active");
}

/* Close Settings Side Panel */
function closeSettings() {
  document.getElementById("settingsPanel").classList.remove("active");
  document.getElementById("settingsOverlay").classList.remove("active");
}

/* Save Email Login */
function saveEmail() {
  const emailInput = document.getElementById("emailInput");
  const loginText = document.getElementById("loginText");

  const email = emailInput.value.trim();

  if (email === "") {
    loginText.innerText = languages[currentLang].enterEmail;
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    loginText.innerText = languages[currentLang].validEmail;
    return;
  }

  localStorage.setItem("userEmail", email);
  loginText.innerText = languages[currentLang].loggedIn + email;
  emailInput.value = "";
}

/* Open Email App */
function openEmailApp() {
  window.location.href = "mailto:zakrullahniazi786@gmail.com";
}

/* About Items */
function showHelpCenter() {
  document.getElementById("aboutInfo").innerHTML = languages[currentLang].helpText;
}

function showTerms() {
  document.getElementById("aboutInfo").innerHTML = languages[currentLang].termsText;
}

function showPrivacy() {
  document.getElementById("aboutInfo").innerHTML = languages[currentLang].privacyText;
}

function showZkServices() {
  document.getElementById("aboutInfo").innerHTML = languages[currentLang].servicesText;
}

/* Load Saved Data */
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const savedEmail = localStorage.getItem("userEmail");
  const savedLanguage = localStorage.getItem("language") || "ps";

  changeLanguage(savedLanguage);

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeBtn").innerText = languages[currentLang].light;
  } else {
    document.getElementById("themeBtn").innerText = languages[currentLang].dark;
  }

  if (savedEmail) {
    document.getElementById("loginText").innerText =
      languages[currentLang].loggedIn + savedEmail;
  }

  const input = document.getElementById("userInput");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
};