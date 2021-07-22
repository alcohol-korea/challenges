const key =document.querySelector(".key");

function soundPlay(e){
    console.dir(e.path[0].attributes[0].value);
};

window.addEventListener("click",soundPlay)

