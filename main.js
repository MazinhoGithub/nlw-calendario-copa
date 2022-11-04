function createGame(team1, hour, team2) {
    return `
        <li>
            <img src="./assets/bandeiras/icon=${team1}.svg" alt="Bandeira do ${team1}">
            <strong>${hour}</strong>
            <img src="./assets/bandeiras/icon=${team2}.svg" alt="Bandeira da ${team2}">
        </li>
    `
}

let delay = 0
function createCard(date, day, games) {
    delay = delay + 0.4
    return `
    <div class="card" style= animation-delay: ${delay}s;>
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>
    `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia") + createGame("portugal", "13:00", "uruguay")) +
    createCard("28/11", "segunda", createGame("switzerland", "13:00", "brazil")) +
    createCard("01/11", "sexta", createGame("brazil", "16:00", "cameroon")) +

    createCard("24/11", "terça", createGame("spain", "13:00", "france") + createGame("germany", "16:00", "japan"))
