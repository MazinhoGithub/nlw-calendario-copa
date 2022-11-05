function createMatch(team1, hour, team2) {
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
    createCard("20/11", "domingo", createMatch("qatar", "13:00", "ecuador")) +
    createCard("21/11", "segunda", createMatch("england", "10:00", "iran") + createMatch("senegal", "13:00", "netherlands") + createMatch("united states", "16:00", "wales")) +
    createCard("22/11", "terca", createMatch("argentina", "07:00", "saudi arabia") + createMatch("denmark", "10:00", "tunisia") + createMatch("mexico", "13:00", "poland") + createMatch("france", "16:00", "australia")) +
    createCard("23/11", "quarta", createMatch("morocco", "07:00", "croatia") + createMatch("germany", "10:00", "japan") + createMatch("spain", "13:00", "costa rica") + createMatch("belgium", "16:00", "canada")) +
    createCard("24/11", "", createMatch("switzerland", "07:00", "cameroon") + createMatch("uruguay", "10:00", "south korea") + createMatch("portugal", "13:00", "ghana") + createMatch("brazil", "16:00", "serbia"))
