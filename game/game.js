const game_input = document.getElementById('game_in')

game_input.addEventListener("submit", (e) => {
    e.preventDefault();

    let choice = document.getElementById('text_in')

    console.log(choice.value.toUpperCase())
    if (choice.value.toUpperCase() == "MOVE THE BARREL") {
        window.location.href = './lv2.html'
    } else if (choice.value.toUpperCase() == "MOVE BARREL") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lv2.html'
    } else if (choice.value.toUpperCase() == "SIT NEXT TO FRIEND") { // 2 ROUTE
        window.location.href = './lv2_b.html'
    } else if (choice.value.toUpperCase() == "STAY") { // Adjusted difficulty. For people who haven't watched.
        window.location.href = './lv2_b.html'
    } else {
        choice.value = ''
    }
})