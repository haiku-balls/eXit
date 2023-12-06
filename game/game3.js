const game_input = document.getElementById('game_in')

game_input.addEventListener("submit", (e) => {
    e.preventDefault();

    let choice = document.getElementById('text_in')

    console.log(choice.value.toUpperCase())
    if (choice.value.toUpperCase() == "READ NOTE") {
        window.location.href = './lv4.html'
    } else if (choice.value.toUpperCase() == "TAKE NOTE") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lv4.html'
    } else if (choice.value.toUpperCase() == "READ") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lv4.html'
    } else {
        choice.value = ''
    }
})