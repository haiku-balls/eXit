// wait for page load
document.addEventListener("DOMContentLoaded", function(e) {
    setTimeout(() => {
        const boot = new Audio('assets/boot.ogg')
        boot.play()
    }, 1000)
    setTimeout(() => {
        const gameDiv = document.getElementById('game')
        gameDiv.style.display = 'block'
    }, 4000)
})

// on any key press. begin. :3

document.onkeydown = function(e) {
    window.location.href = './game/lv1.html'
}