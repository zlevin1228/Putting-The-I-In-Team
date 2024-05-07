// TEAM MEMBER DATA

const teamMembers = [
  {
    name: "Jason Robertson",
    age: 24,
    number: 21,
    club: "Dallas Stars",
    position: "Winger",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "Jason Robertson is considered to be one of the most talented wingers in the NHL.",
  },
  {
    name: "Jack Hughes",
    age: 22,
    number: 86,
    club: "New Jersey Devils",
    position: "Center",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "Jack Hughes is considered to be one of the most talented centers in the NHL.",
  },
  {
    name: "Nikita Kucherov",
    age: 30,
    number: 86,
    club: "Tampa Bay Lightning",
    position: "Winger",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "Nikita Kucherov is considered to be one of the most talented wingers in the NHL.",
  },
  {
    name: "Artemi Panarin",
    age: 32,
    number: 10,
    club: "New York Rangers",
    position: "Winger",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "Artemi Panarin is considered to be one of the most talented wingers in the NHL.",
  },
  {
    name: "Connor McDavid",
    age: 27,
    number: 97,
    club: "Edmonton Oilers",
    position: "Center",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "Connor McDavid is considered to be one of the most talented centers in the NHL.",
  },
  {
    name: "David Pastrnak",
    age: 27,
    number: 88,
    club: "Boston Bruins",
    position: "Winger",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "David Pastrnak is considered to be one of the most talented centers in the NHL.",
  },
  {
    name: "Kirill Kaprizov",
    age: 27,
    number: 97,
    club: "Minnesota Wild",
    position: "Winger",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "Kirill Kaprizov is considered to be one of the most talented wingers in the NHL.",
  },
  {
    name: "Nathan MacKinnon",
    age: 28,
    number: 29,
    club: "Colorado Avalanche",
    position: "Center",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "Nathan MacKinnon is considered to be one of the most talented centers in the NHL.",
  },
  {
    name: "David Pastrnak",
    age: 27,
    number: 88,
    club: "Boston Bruins",
    position: "Winger",
    goals: 1,
    assists: 1,
    points: 1,
    biography:
      "David Pastrnak is considered to be one of the most talented centers in the NHL.",
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    let backgroundColor;
    switch (member.club) {
      case "New Jersey Devils":
        backgroundColor = "#CE1126"; // Red for centers
        break;
      case "Edmonton Oilers":
        backgroundColor = "#FF4C00"; // Green for wingers
        break;
      case "Tampa Bay Lightning":
        backgroundColor = "#002868"; // Blue for defensemen
        break;
      case "Dallas Stars":
        backgroundColor = "#006847"; // Orange for goaltenders
        break;
      case "Colorado Avalanche":
        backgroundColor = "#6F263D"; // Orange for goaltenders
        break;
      case "New York Rangers":
        backgroundColor = "#0038A8"; // Orange for goaltenders
        break;
      case "Boston Bruins":
        backgroundColor = "#FFB81C"; // Orange for goaltenders
        break;
      case "Minnesota Wild":
        backgroundColor = "#154734"; // Orange for goaltenders
        break;
      case "Boston Bruins":
        backgroundColor = "#FFB81C"; // Orange for goaltenders
        break;
      default:
        backgroundColor = "gray"; // Gray for other positions
    }

    card.innerHTML = `
        <div class = "card text-white">
            <div class = "card-header">
                ${member.name}
            </div>
            <div class = "card-body" style="background-color:${backgroundColor};">
                <p><strong>Position: </strong>${member.position}</p> 
            </div>
            <div class = "card-body" style="background-color:${backgroundColor};">
                <p><strong>Club Team: </strong>${member.club}</p> 
            </div>
        </div>
        `;
    for (let i = 0; i < card.children.length; i++) {
      card.children[i].style.backgroundColor = backgroundColor;
    }
    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();
