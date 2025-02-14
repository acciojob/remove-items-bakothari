const colorSelect = document.getElementById("colorSelect");
let btn = document.querySelector("input")
btn.addEventListener("click", () => {
    const selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex !== -1) {
        colorSelect.remove(colorSelect.options[selectedIndex]);
    }
});