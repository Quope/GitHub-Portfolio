function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    fetch(`./lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (data[key]) {
                    el.innerHTML = data[key];
                }
            });
        })
        .catch(err => console.error("Erreur de chargement langue :", err));
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});

const cvFile = translations["cv.file"];

document.getElementById("cv-open").href = cvFile;
document.getElementById("cv-download").href = cvFile;
document.getElementById("cv-preview").src = cvFile + "#view=FitH";