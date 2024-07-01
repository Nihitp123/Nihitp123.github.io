const topHeadlinesDisplay = document.getElementById('top-headlines')
const sports=[
    "basketball",
    "football",
    "hockey",
    "baseball"
]
const leagues=[
    "nba",
    "nfl",
    "nhl",
    "mlb"

]


async function generateHeadlines(){
    let currentleague=0
    let headlines=[]
    sports.forEach(function(sport){
        fetch("https://site.api.espn.com/apis/site/v2/sports/"+sport+"/"+leagues[currentleague]+"/news")
        .then(response => response.json())
        .then(data => {    
            data.articles.forEach(function(article){
                headlines.push(article.description)
            })
        })
        currentleague += 1

    })
    
    return headlines
}

function displayHeadlines(headlines){
    topHeadlinesDisplay.innerHTML= headlines
}


    

     

displayHeadlines(await generateHeadlines())