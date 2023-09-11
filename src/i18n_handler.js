console.log("Initializing i18n handler...");
const languages = new Map([
  ["en_us", new Map([
	["homepage_title", "CreepersMC | Home page"],
	["login_title", "CreepersMC | Login"]
  ])],
  ["zh_cn", new Map([
	["homepage_title", "CreepersMC | 首页"],
	["login_title", "CreepersMC | 登录"]
  ])]
]);
var lang;
if(typeof(Storage) !== "undefined") {
	lang = localStorage.getItem("lang");
} else {
	console.warn("Local storage is not supported!");
}
if(lang) {
	console.log("Local language setting found: " + lang);
} else {
	lang = (navigator.language || navigator.userLanguage).toLowerCase();
	console.log("Local language setting not found! Using browser default: " + lang);
}
function update_lang() {
	for(const val of languages.get("en_us").keys()) {
		var elmt = document.getElementById(val);
		if(elmt) {
			if(languages.get(lang).has(val)) {
				elmt.innerHTML = languages.get(lang).get(val);
			} else {
				elmt.innerHTML = languages.get("en_us").get(val);
			}
		}
	}
	save_lang();
}
function save_lang() {
	if(typeof(Storage) !== "undefined") {
		localStorage.setItem("lang", lang);
		console.log("Saved language setting: ");
	} else {
		console.warn("Local storage is not supported!");
	}
}
console.log("I18n handler initialized.");