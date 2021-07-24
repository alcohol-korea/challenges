function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //화면에 없는키는 null로 나오므로 아얘 안되게 한다.
    audio.currentTime = 0;//audio가 시작하는 기간을 0으로 만들어서  되감기함
    audio.play(); //audio실행
    key.classList.add("playing");
}
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(function(key){
    key.addEventListener("transitionend",removeTransition);
});


window.addEventListener("keydown",playSound);