//your JS code here. If required.
document.getElementById("colorSelect").addEventListener("click", ()=> {
    const colorSelect = document.getElementById("colorSelect");
    const selectedIndex = colorSelect.selectedIndex;
	   if (selectedIndex !== -1) {
        
        colorSelect.removeChild(colorSelect.options[selectedIndex]);
    }
});