const game_input = document.getElementById('game_in')

game_input.addEventListener("submit", (e) => {
    e.preventDefault();

    let choice = document.getElementById('text_in')

    console.log(choice.value.toUpperCase())
    if (choice.value.toUpperCase() == "STAY") {
        window.location.href = './lvF_b.html'
    } else {
        choice.value = ''
    }
})