// TEAM MEMBER DATA

const teamMembers = [
  {
    name: "Jack Hughes",
    age: 22,
    activePlayer: true,
    number: 86,
    club: "New Jersey Devils",
    position: "Center",
    strengths: "Speed",
    weakness: "Defense",
    skills: ["Shooting", "Passing", "Skating", "Edgework"],
    biography:
      "Jack Hughes is considered to be one of the most talented centers in the NHL.",
  },
  {
    name: "Connor McDavid",
    age: 27,
    activePlayer: true,
    number: 97,
    club: "Edmonton Oilers",
    position: "Center",
    strengths: "Speed",
    weakness: "Long-Distance Shooting",
    skills: ["Awareness", "Passing", "Skating", "Edgework"],
    biography:
      "Connor McDavid is considered to be one of the most talented centers in the NHL.",
  },
  {
    name: "Nikita Kucherov",
    age: 30,
    activePlayer: true,
    number: 86,
    club: "New Jersey Devils",
    position: "Winger",
    strengths: "Goal-Scoring",
    weakness: "Defense",
    skills: ["Power-Play", "Passing", "Skating", "Awareness"],
    biography:
      "Nikita Kucherov is considered to be one of the most talented wingers in the NHL.",
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    let backgroundColor;
    switch (member.position.toLowerCase()) {
      case "center":
        backgroundColor = "red"; // Red for centers
        break;
      case "winger":
        backgroundColor = "green"; // Green for wingers
        break;
      case "defenseman":
        backgroundColor = "blue"; // Blue for defensemen
        break;
      case "goaltender":
        backgroundColor = "orange"; // Orange for goaltenders
        break;
      default:
        backgroundColor = "gray"; // Gray for other positions
    }
    card.style.backgroundColor = backgroundColor;

    card.innerHTML = `
        <div class = "card">
            <div class = "card-header">
                ${member.name}
            </div>
            <div class = "card-body" style="background-color:${backgroundColor};">
                <p><strong>Position: </strong>${member.position}</p> 
            </div>
        </div>
        `;
    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
