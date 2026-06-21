function loadHTML(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        });
}

function highlightNav() {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}
