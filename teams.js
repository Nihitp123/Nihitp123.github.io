const basketballdisplay = document.getElementById('basketballdisplay');
const footballdisplay = document.getElementById('footballdisplay');
const collegebasketballdisplay = document.getElementById('collegebasketballdisplay');
const NHLdisplay=document.getElementById("NHLdisplay");
const displayplayers=document.getElementById("players");
fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams")
  .then(response => response.json())
  .then(data => {
   // console.log(data);

    const sports = data.sports;

    sports.forEach(sport => {
      const leagues = sport.leagues;

      leagues.forEach(league => {
        const teams = league.teams;

        teams.forEach(team => {
          basketballdisplay.innerHTML += `
          
        <li><a href="Basketball.html?team=${team.team.displayName}">${team.team.displayName}</a></li>
           
          `;
        });
      });
    });
  })
  
fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams")
  
.then(response => response.json())
.then(data => {
 
 // console.log(data);


  const sports = data.sports;

  sports.forEach(sport => {
    const leagues = sport.leagues;

    leagues.forEach(league => {
      const teams = league.teams;

      teams.forEach(team => {
        footballdisplay.innerHTML += `

         <li><a  href="Football.html">${team.team.displayName}</a></li>
      

        `;
      });
    });
  });
})

fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams")
.then(response => response.json())
.then(data => {
  //console.log(data);
  const sports = data.sports;

  sports.forEach(sport => {
    const leagues = sport.leagues;

    leagues.forEach(league => {
      const teams = league.teams;

      teams.forEach(team => {
      collegebasketballdisplay.innerHTML += `

         <li><a href="College basketball.html">${team.team.displayName}</a></li>

        `;
      });
    });
  });
})
fetch("https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams")
.then(response => response.json())
.then(data => {
 // console.log(data);

  const sports = data.sports;

  sports.forEach(sport => {
    const leagues = sport.leagues;

    leagues.forEach(league => {
      const teams = league.teams;

      teams.forEach(team => {
        NHLdisplay.innerHTML += `

         <li><a href="NHL.html">${team.team.displayName}</a></li>

        `;
      });
    });
  });
})
fetch("https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Arsenal")
  .then(response => response.json())
  .then(data => {
    console.log(data);
 
})