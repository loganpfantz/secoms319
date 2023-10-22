fetch("./videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame4 = document.getElementById("imgGame4");

  var platform4 = document.getElementById("platform4");

  var releaseDate4 = document.getElementById("releaseDate4");
  
  var premise4 = document.getElementById("premise4");
  
  var genre4 = document.getElementById("genre4");
  
  var publisher4 = document.getElementById("publisher4");
  
  var gameDev4 = document.getElementById("gameDev4");
  
  var rating4 = document.getElementById("rating4");
  
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

    if (myGames.games[i].title === "Final Fantasy VII: Ever Crisis") {
      imgGame4.appendChild(imgGame);
      platform4.appendChild(gamePlatform);
      releaseDate4.appendChild(gameDate);
      gameDev4.appendChild(gameDeveloper);
      rating4.appendChild(ratingElement);
      premise4.appendChild(premiseText);
      genre4.appendChild(gameGenre);
      publisher4.appendChild(gamePublisher);

    } 
  } // end of for
} // end of function
