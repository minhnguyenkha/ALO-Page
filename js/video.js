
const video = document.getElementById('video');
 
function handler(entries) {
    const videoEntry = entries[0]; // we have only one entry
    if(videoEntry.isIntersecting) {
        video.play();
    } else {
        video.pause();
    }
}
 
const observer = new IntersectionObserver(handler, );
observer.observe(video);


// var video = document.getElementById('video');
// document.querySelector('.intro__others').addEventListener('mouseenter', function(){
//     video.play();
//     video.addEventListener('ended', function(){
//         video.load();
//     })
// })
// document.querySelector('.intro__others').addEventListener('touchmove', function(){
//     video.play();
//     video.addEventListener('ended', function(){
//         video.load();
//     })
// })


