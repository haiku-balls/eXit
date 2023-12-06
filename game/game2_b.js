const game_input = document.getElementById('game_in')

game_input.addEventListener("submit", (e) => {
    e.preventDefault();

    let choice = document.getElementById('text_in')

    console.log(choice.value.toUpperCase())
    if (choice.value.toUpperCase() == "LIGHT A MATCH") {
        window.location.href = './lv3_b.html'
    } else if (choice.value.toUpperCase() == "LIGHT") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lv3_b.html'
    } else {
        choice.value = ''
    }
})