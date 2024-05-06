// TEAM MEMBER DATA

const teamMembers = [
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
    {
        name: 'Jack Hughes',
        age: 22,
        activePlayer: true,
        club: 'New Jersey Devils',
        position: 'Center',
        strengths: 'Speed',
        weakness: 'Defense',
        skills: ['Shooting', 'Passing','Skating', 'Edgework'],
        biography: 'Jack Hughes is considered to be one of the most talented centers in the NHL.'

    },
]

function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')
        card.innerHTML = `
        <div class = "card">
            <div class = "card-header">
                ${member.name}
            </div>
            <div class = "card-body">
                <p><strong>Position: </strong>${member.position}</p> 
            </div>
        </div>
        `
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()