const cards = document.querySelectorAll(".notebook");
const navigation = document.querySelector(".navbar");

if (cards.length > 0 && navigation) {
    const search = document.createElement("input");
    search.type = "search";
    search.placeholder = "Buscar componente...";
    search.setAttribute("aria-label", "Buscar componente");
    search.style.display = "block";
    search.style.boxSizing = "border-box";
    search.style.width = "min(80%, 320px)";
    search.style.margin = "0 auto 20px";
    search.style.padding = "10px";

    navigation.parentNode.insertBefore(search, navigation);

    search.addEventListener("input", () => {
        const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const query = normalize(search.value.trim());

        cards.forEach((card) => {
            const name = normalize(card.textContent);
            card.style.display = name.includes(query) ? "block" : "none";
        });
    });
}