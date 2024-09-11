const playersDisplay = document.getElementById('Players-display')
const sports2=[
    "basketball",
    "football",
    "hockey",
    "baseball"
]
const leagues2=[
    "nba",
    "nfl",
    "nhl",
    "mlb"

]

async function generateplayers(){
    console.log("hi")
    let Players=[]
    const fetchPromises = sports.map(async function(sport,index){
        const response = await fetch(`https://sports.core.api.espn.com/v2/sports/${sport}/leagues/${leagues2[index]}/athletes?limit=10&active=true`)
        const data = await response.json()
        data.items.forEach(async function(element) {
            const response2 = await fetch(element.$ref)
            const data2 = await response2.json()
            console.log("data2")
            Players.push(data2.displayName)
        });
    })
    await Promise.all(fetchPromises)
    return Players
}

function displayPlayers([players]){
    console.log(players)
    players.forEach(function(player){
        const playerContanier =document.createElement("div")
        const playerElement =document.createElement("p")
        playerElement.textContent = [player] 
        playerContanier.appendChild(playerElement)
        playerElement.setAttribute("id", "player")
        const line = document.createElement("hr")
        playerContanier.appendChild(line)
        topPlayerDisplay.appendChild(playerContanier)
    })
}   


generateplayers().then(function(players)  { 
    displayPlayers(players)
}).catch(function(error){
    console.error("error fetching players:", error)
})
