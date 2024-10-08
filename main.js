
// function changeText() {
//     let element = document.getElementById("form");
//     element.textContent = "Text changed by JavaScript!";
// }


// function changecolor() {
//     let doc = document.getElementsByTagName("h3");
//     doc[0].style.background = "green";
//     doc[0].style.color = "white";
// }


 const saveButton = document.getElementById('save');
 const inputField = document.getElementById('learn');
 const responseDiv = document.getElementById('response');

 saveButton.addEventListener('click', function() {
     const inputValue = inputField.value;
     
     responseDiv.textContent = `You are learning: ${inputValue}`;
     
     inputField.value = '';
 });

 function changeStyling() {
    var paragraphs = document.getElementsByTagName("p");

    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[0].style.color = "blue";        
        paragraphs[1].style.fontSize = "20px";     
        paragraphs[2].style.fontWeight = "bold";   
    }
}



