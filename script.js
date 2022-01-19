const btnPlay = document.querySelector('.btn1')
const btnPause = document.querySelector('.btn2')
const video = document.querySelector('video')
const preload = document.querySelector('.preload')





window.addEventListener('load', function(){
    preload.classList.add('hidePreload')

})


btnPlay.addEventListener('click', function(){

    video.play()

})

btnPause.addEventListener('click', function(){

    video.pause()

})


