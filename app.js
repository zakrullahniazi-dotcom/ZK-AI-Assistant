let currentLang = localStorage.getItem("language") || "ps";
let currentChatId = localStorage.getItem("currentChatId") || null;
let selectedFile = null;
let selectedFileBase64 = null;

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

    newChat: "＋ نوی چټ",
    searchChat: "چټ ولټوئ...",
    camera: "📷 Camera",
    gallery: "🖼 Gallery",
    files: "📎 Files",
    fileSelected: "فایل انتخاب شو: ",
    thinking: "فکر کوي...",
    serverError: "Server connection error. Terminal کې server باید چالان وي.",
    aiError: "Sorry, I could not get an AI response.",

    enterEmail: "Please enter your email.",
    validEmail: "Please enter a valid email.",
    loggedIn: "Logged in with: ",

    helpText:
      "<strong>Help Center</strong><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912",

    termsText:
      "<strong>Terms of Use</strong><br>د ZK AI Assistant په کارولو سره، تاسو منئ چې دا app به په مسؤلانه ډول کاروئ.",

    privacyText:
      "<strong>Privacy Policy</strong><br>ستاسو email او chat history یوازې په همدې browser کې ساتل کېږي.",

    servicesText:
      "<strong>ZK اعلان</strong><br>که تاسو هر ډول Application، Website او Database جوړول غواړئ، د ذکرالله نیازي سره تماس ونیسئ.<br><br>Company: ZK<br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912"
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

    newChat: "＋ چت جدید",
    searchChat: "جستجوی چت...",
    camera: "📷 Camera",
    gallery: "🖼 Gallery",
    files: "📎 Files",
    fileSelected: "فایل انتخاب شد: ",
    thinking: "در حال فکر کردن...",
    serverError: "Server connection error. Terminal باید روشن باشد.",
    aiError: "Sorry, I could not get an AI response.",

    enterEmail: "Please enter your email.",
    validEmail: "Please enter a valid email.",
    loggedIn: "Logged in with: ",

    helpText:
      "<strong>Help Center</strong><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912",

    termsText:
      "<strong>Terms of Use</strong><br>با استفاده از ZK AI Assistant، شما قبول می‌کنید که از این برنامه به شکل مسئولانه استفاده کنید.",

    privacyText:
      "<strong>Privacy Policy</strong><br>ایمیل و تاریخچه چت شما فقط در همین مرورگر ذخیره می‌شود.",

    servicesText:
      "<strong>ZK اعلان</strong><br>اگر شما می‌خواهید هر نوع Application، Website و Database بسازید، با ذکرالله نیازی تماس بگیرید.<br><br>Company: ZK<br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912"
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

    newChat: "＋ New Chat",
    searchChat: "Search chat...",
    camera: "📷 Camera",
    gallery: "🖼 Gallery",
    files: "📎 Files",
    fileSelected: "File selected: ",
    thinking: "Thinking...",
    serverError: "Server connection error. Make sure server is running.",
    aiError: "Sorry, I could not get an AI response.",

    enterEmail: "Please enter your email.",
    validEmail: "Please enter a valid email.",
    loggedIn: "Logged in with: ",

    helpText:
      "<strong>Help Center</strong><br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912",

    termsText:
      "<strong>Terms of Use</strong><br>By using ZK AI Assistant, you agree to use this app responsibly.",

    privacyText:
      "<strong>Privacy Policy</strong><br>Your email and chat history are saved only in this browser using localStorage.",

    servicesText:
      "<strong>ZK Services</strong><br>If you want to build any Application, Website, or Database, contact Zakrullah Niazi.<br><br>Company: ZK<br>Email: zakrullahniazi786@gmail.com<br>Phone: 0784121912"
  }
};

const langOrder = ["ps", "fa", "en"];

/* Language */
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

  document.querySelector(".new-chat-btn").innerText = t.newChat;
  document.getElementById("chatSearchInput").placeholder = t.searchChat;

  const uploadButtons = document.querySelectorAll("#uploadMenu button");
  if (uploadButtons.length >= 3) {
    uploadButtons[0].innerText = t.camera;
    uploadButtons[1].innerText = t.gallery;
    uploadButtons[2].innerText = t.files;
  }

  document.getElementById("quickLangBtn").innerText =
    lang === "ps" ? "پښتو" : lang === "fa" ? "دری" : "English";

  if (document.body.classList.contains("dark")) {
    document.getElementById("themeBtn").innerText = t.light;
  } else {
    document.getElementById("themeBtn").innerText = t.dark;
  }

  localStorage.setItem("language", lang);
  renderChatHistory();
}

function cycleLanguage() {
  const index = langOrder.indexOf(currentLang);
  const nextLang = langOrder[(index + 1) % langOrder.length];
  changeLanguage(nextLang);
}

/* Settings */
function openSettings() {
  document.getElementById("settingsPanel").classList.add("active");
  document.getElementById("settingsOverlay").classList.add("active");
}

function closeSettings() {
  document.getElementById("settingsPanel").classList.remove("active");
  document.getElementById("settingsOverlay").classList.remove("active");
}

/* Sidebar */
function openSidebar() {
  document.getElementById("chatSidebar").classList.add("active");
  document.getElementById("sidebarOverlay").classList.add("active");
}

function closeSidebar() {
  document.getElementById("chatSidebar").classList.remove("active");
  document.getElementById("sidebarOverlay").classList.remove("active");
}

function toggleSidebar() {
  const sidebar = document.getElementById("chatSidebar");
  if (sidebar.classList.contains("active")) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

/* Dark / Light */
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

/* Email */
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

function openEmailApp() {
  window.location.href = "mailto:zakrullahniazi786@gmail.com";
}

/* About */
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

/* Chat Storage */
function getChats() {
  return JSON.parse(localStorage.getItem("zkChats") || "[]");
}

function saveChats(chats) {
  localStorage.setItem("zkChats", JSON.stringify(chats));
}

function createChat() {
  const chats = getChats();
  const chat = {
    id: Date.now().toString(),
    title: "New Chat",
    messages: [],
    createdAt: new Date().toISOString()
  };

  chats.unshift(chat);
  saveChats(chats);

  currentChatId = chat.id;
  localStorage.setItem("currentChatId", currentChatId);

  return chat;
}

function getCurrentChat() {
  let chats = getChats();

  if (!currentChatId) {
    return createChat();
  }

  let chat = chats.find(c => c.id === currentChatId);

  if (!chat) {
    chat = createChat();
  }

  return chat;
}

function updateCurrentChat(chat) {
  const chats = getChats();
  const index = chats.findIndex(c => c.id === chat.id);

  if (index !== -1) {
    chats[index] = chat;
    saveChats(chats);
  }
}

function newChat() {
  const chat = createChat();
  document.getElementById("messages").innerHTML = "";
  clearSelectedFile();
  renderChatHistory();
  closeSidebar();
}

function loadChat(chatId) {
  currentChatId = chatId;
  localStorage.setItem("currentChatId", currentChatId);

  const chat = getChats().find(c => c.id === chatId);
  const messagesBox = document.getElementById("messages");
  messagesBox.innerHTML = "";

  if (chat) {
    chat.messages.forEach(msg => {
      addMessageToUI(msg.text, msg.type, false);
    });
  }

  closeSidebar();
}

function deleteChat(chatId, event) {
  event.stopPropagation();

  let chats = getChats();
  chats = chats.filter(c => c.id !== chatId);
  saveChats(chats);

  if (currentChatId === chatId) {
    currentChatId = null;
    localStorage.removeItem("currentChatId");
    document.getElementById("messages").innerHTML = "";
    createChat();
  }

  renderChatHistory();
}

function renderChatHistory() {
  const list = document.getElementById("chatHistoryList");
  const search = document.getElementById("chatSearchInput").value.toLowerCase();
  const chats = getChats();

  list.innerHTML = "";

  chats
    .filter(chat => chat.title.toLowerCase().includes(search))
    .forEach(chat => {
      const item = document.createElement("div");
      item.className = "chat-history-item";
      if (chat.id === currentChatId) item.classList.add("active");

      item.onclick = function () {
        loadChat(chat.id);
      };

      const title = document.createElement("span");
      title.innerText = chat.title;

      const del = document.createElement("button");
      del.innerText = "×";
      del.onclick = function (event) {
        deleteChat(chat.id, event);
      };

      item.appendChild(title);
      item.appendChild(del);
      list.appendChild(item);
    });
}

/* Upload */
function toggleUploadMenu() {
  document.getElementById("uploadMenu").classList.toggle("active");
}

function openCamera() {
  document.getElementById("cameraInput").click();
  document.getElementById("uploadMenu").classList.remove("active");
}

function openGallery() {
  document.getElementById("galleryInput").click();
  document.getElementById("uploadMenu").classList.remove("active");
}

function openFiles() {
  document.getElementById("fileInput").click();
  document.getElementById("uploadMenu").classList.remove("active");
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  selectedFile = file;

  const reader = new FileReader();
  reader.onload = function () {
    selectedFileBase64 = reader.result.split(",")[1];

    document.getElementById("selectedFileText").innerText =
      languages[currentLang].fileSelected + file.name;

    document.getElementById("selectedFileBox").style.display = "flex";
  };

  reader.readAsDataURL(file);
}

function clearSelectedFile() {
  selectedFile = null;
  selectedFileBase64 = null;

  document.getElementById("selectedFileBox").style.display = "none";
  document.getElementById("selectedFileText").innerText = "";

  document.getElementById("cameraInput").value = "";
  document.getElementById("galleryInput").value = "";
  document.getElementById("fileInput").value = "";
}

/* Messages */
function addMessageToUI(text, type, save = true) {
  const messages = document.getElementById("messages");

  const msgDiv = document.createElement("div");
  msgDiv.className = type === "ai" ? "message ai" : "message";
  msgDiv.innerText = text;

  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;

  if (save) {
    const chat = getCurrentChat();

    chat.messages.push({
      type: type,
      text: text
    });

    if (chat.title === "New Chat" && type === "user") {
      chat.title = text.length > 28 ? text.substring(0, 28) + "..." : text;
    }

    updateCurrentChat(chat);
    renderChatHistory();
  }

  return msgDiv;
}

/* Send Message */
async function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();

  if (userText === "" && !selectedFile) {
    return;
  }

  const displayText = selectedFile
    ? userText || "Image/File uploaded"
    : userText;

  addMessageToUI(displayText, "user");

  const aiMsg = addMessageToUI(languages[currentLang].thinking, "ai");

  const fileData = selectedFile
    ? {
        name: selectedFile.name,
        type: selectedFile.type,
        base64: selectedFileBase64
      }
    : null;

  input.value = "";

  try {
    const response = await fetch("https://zk-ai-assistant-worker.zakrullah-niazi-af.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: userText || "Please describe this file/image.",
        file: fileData
      })
    });

    const data = await response.json();

    aiMsg.innerText =
      data.reply || data.error || languages[currentLang].aiError;

    const chat = getCurrentChat();
    const lastAi = chat.messages[chat.messages.length - 1];

    if (lastAi && lastAi.type === "ai") {
      lastAi.text = aiMsg.innerText;
      updateCurrentChat(chat);
    }

  } catch (error) {
    aiMsg.innerText = languages[currentLang].serverError;

    const chat = getCurrentChat();
    const lastAi = chat.messages[chat.messages.length - 1];

    if (lastAi && lastAi.type === "ai") {
      lastAi.text = aiMsg.innerText;
      updateCurrentChat(chat);
    }
  }

  clearSelectedFile();
}

/* Load */
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const savedEmail = localStorage.getItem("userEmail");

  changeLanguage(currentLang);

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

  if (!currentChatId) {
    createChat();
  }

  loadChat(currentChatId);
  renderChatHistory();

  const input = document.getElementById("userInput");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
};