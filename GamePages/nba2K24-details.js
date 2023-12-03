fetch("videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame9 = document.getElementById("imgGame9");

  var platform9 = document.getElementById("platform9");

  var releaseDate9 = document.getElementById("releaseDate9");
  
  var premise9 = document.getElementById("premise9");
  
  var genre9 = document.getElementById("genre9");
  
  var publisher9 = document.getElementById("publisher9");
  
  var gameDev9 = document.getElementById("gameDev9");
  
  var rating9 = document.getElementById("rating9");
  
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

    if (myGames.games[i].title === "NBA 2K24") {
      imgGame9.appendChild(imgGame);
      platform9.appendChild(gamePlatform);
      releaseDate9.appendChild(gameDate);
      gameDev9.appendChild(gameDeveloper);
      rating9.appendChild(ratingElement);
      premise9.appendChild(premiseText);
      genre9.appendChild(gameGenre);
      publisher9.appendChild(gamePublisher);

    } 
  } // end of for
} // end of function
