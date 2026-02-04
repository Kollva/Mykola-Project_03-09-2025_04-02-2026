document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("getInTouchBtn");
    const target = document.getElementById("contact");

    if (!btn || !target) return;

    btn.addEventListener("click", () => {
        target.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    });
});
