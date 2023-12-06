const game_input = document.getElementById('game_in')

game_input.addEventListener("submit", (e) => {
    e.preventDefault();

    let choice = document.getElementById('text_in')

    console.log(choice.value.toUpperCase())
    if (choice.value.toUpperCase() == "GET ON THE BOAT") {
        window.location.href = './lvF-a.html'
    } else if (choice.value.toUpperCase() == "GET ON BOAT") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lvF-a.html'
    } else if (choice.value.toUpperCase() == "GET ON") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lvF-a.html'
    } else {
        choice.value = ''
    }
})