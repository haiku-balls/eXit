const game_input = document.getElementById('game_in')

game_input.addEventListener("submit", (e) => {
    e.preventDefault();

    let choice = document.getElementById('text_in')

    console.log(choice.value.toUpperCase())
    if (choice.value.toUpperCase() == "ENTER TUNNEL") {
        window.location.href = './lv3.html'
    } else if (choice.value.toUpperCase() == "ENTER THE TUNNEL") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lv3.html'
    } else if (choice.value.toUpperCase() == "ENTER") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lv3.html'
    } else {
        choice.value = ''
    }
})