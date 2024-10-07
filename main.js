function changeText() {
    let element = document.getElementById("form");
    element.textContent = "Text changed by JavaScript!";
}


function changecolor() {
    let doc = document.getElementsByTagName("h3");
    doc[0].style.background = "green";
    doc[0].style.color = "white";
}