var txtbtn=document.querySelector(".txtBtn");
console.log(inputValue);
var translated=document.querySelector(".trnslated");
var inputValue=document.querySelector(".inputValue");

var url="https://api.funtranslations.com/translate/minion.json";
function errorHandler(error){
    console.log("something went wrong");
    alert("something went wrong !!1")
}

function clickHandler(){
    var text=inputValue.value;
    fetch(url +"?"+ "text=" + text).then(response=>response.json()).then(y=>{
        var outputTxt = y.contents.translated;
        translated.innerText=outputTxt;
    }
    ).catch(errorHandler)
    
    
}

txtbtn.addEventListener("click",clickHandler)