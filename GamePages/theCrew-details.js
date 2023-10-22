fetch("videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame8 = document.getElementById("imgGame8");

  var platform8 = document.getElementById("platform8");

  var releaseDate8 = document.getElementById("releaseDate8");
  
  var premise8 = document.getElementById("premise8");
  
  var genre8 = document.getElementById("genre8");
  
  var publisher8 = document.getElementById("publisher8");
  
  var gameDev8 = document.getElementById("gameDev8");
  
  var rating8 = document.getElementById("rating8");
  
  for (var i = 0; i < myGames.games.length; i++) {
    let image = myGames.games[i].image;
    let platform = myGames.games[i].platforms;
    let date = myGames.games[i].release_date;
    let developer = myGames.games[i].developer;
    let premise = myGames.games[i].premise;
    let genre = myGames.games[i].genre;
    let publisher = myGames.games[i].publisher;

    let imgGame = document.createElement("div");
    imgGame.innerHTML = `<img src="../${image}" class="card-img-top" alt="..."></img>`;

    let gamePlatform = document.createElement("p");
    gamePlatform.innerHTML = `<strong>Platform(s): </strong>${platform}`;

    let gameDate = document.createElement("p");
    gameDate.innerHTML = `<strong>Release Date: </strong>${date}`;

    let gameDeveloper = document.createElement("p");
    gameDeveloper.innerHTML = `<strong>Developer: </strong>${developer}`;

    let rating = myGames.games[i].rating;
    let ratingElement = document.createElement("p");
    ratingElement.innerHTML = `<strong>Rating: </strong>${rating}`;

    let premiseText = document.createElement("p");
    premiseText.innerHTML = `<p class="premise-text">${premise}</p>`;

    let gameGenre = document.createElement("p");
    gameGenre.innerHTML = `<strong>Genre: </strong>${genre}`;

    let gamePublisher = document.createElement("p");
    gamePublisher.innerHTML = `<strong>Publisher: </strong>${publisher}`;

    if (myGames.games[i].title === "The Crew Motorfest") {
      imgGame8.appendChild(imgGame);
      platform8.appendChild(gamePlatform);
      releaseDate8.appendChild(gameDate);
      gameDev8.appendChild(gameDeveloper);
      rating8.appendChild(ratingElement);
      premise8.appendChild(premiseText);
      genre8.appendChild(gameGenre);
      publisher8.appendChild(gamePublisher);

    } 
  } // end of for
} // end of function
