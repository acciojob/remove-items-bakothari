
    const colorSelect = document.getElementById("colorSelect");
     colorSelect.addEventListener("click", function () {
    const selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex !== -1) {
        colorSelect.remove(colorSelect.options[selectedIndex]);
    }
});