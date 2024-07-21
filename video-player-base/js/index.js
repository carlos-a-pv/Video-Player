const $video = document.querySelector("video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");

const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", () =>{
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;

})
$pause.addEventListener("click", () =>{
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
})

$backward.addEventListener("click", () =>{{
    $video.currentTime -= 10
}})

$forward.addEventListener("click", () =>{{
    $video.currentTime += 10
}})