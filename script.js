const colorSelect = document.getElementById("colorSelect");
let btn = document.querySelector("input[type='button']");

btn.addEventListener("click", () => {
    const selectedIndex = colorSelect.selectedIndex;
     colorSelect.remove(selectedIndex);
    
});
