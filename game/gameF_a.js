const game_input = document.getElementById('game_in')

game_input.addEventListener("submit", (e) => {
    e.preventDefault();

    let choice = document.getElementById('text_in')

    console.log(choice.value.toUpperCase())
    if (choice.value.toUpperCase() != "YES") {
        choice.value = ''
    } else if (choice.value.toUpperCase() == "YES") {
        window.location.href = './lv1.html'
    }
})