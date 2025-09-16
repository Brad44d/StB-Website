const siteData = {
  title: "Steuerberaterin Susan von Schmiedeberg",
  name: "Susan von Schmiedeberg",
  surname: "Schmiedeberg",
  email: "StBSchmiedeberg@outlook.de",
  phone: "+49 176 96439609",
  address: "Flinspachstr. 11, 83607 Holzkirchen",
  street: "Flinspachstr. 11",
  city: "83607 Holzkirchen"
};



// Funktion: alle data-var ersetzen
function applyVariables() {
  document.querySelectorAll("[data-var]").forEach(el => {
    const key = el.getAttribute("data-var");
    const val = siteData[key];
    if (!val) return;

    // Text einsetzen
    el.textContent = val;

    // Links anpassen, falls <a>
    if (el.tagName.toLowerCase() === "a") {
      if (key === "email") el.href = "mailto:" + val;
      if (key === "phone") el.href = "tel:" + val.replace(/\s+/g, "");
    }
  });
}

// direkt starten, wenn Seite geladen ist
document.addEventListener("DOMContentLoaded", applyVariables);
