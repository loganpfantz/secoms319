fetch("../videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame7 = document.getElementById("imgGame7");

  var platform7 = document.getElementById("platform7");

  var releaseDate7 = document.getElementById("releaseDate7");
  
  var premise7 = document.getElementById("premise7");
  
  var genre7 = document.getElementById("genre7");
  
  var publisher7 = document.getElementById("publisher7");
  
  var gameDev7 = document.getElementById("gameDev7");
  
  var rating7 = document.getElementById("rating7");
  
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

    if (myGames.games[i].title === "EA Sports FC 24") {
      imgGame7.appendChild(imgGame);
      platform7.appendChild(gamePlatform);
      releaseDate7.appendChild(gameDate);
      gameDev7.appendChild(gameDeveloper);
      rating7.appendChild(ratingElement);
      premise7.appendChild(premiseText);
      genre7.appendChild(gameGenre);
      publisher7.appendChild(gamePublisher);

    } 
  } // end of for
} // end of function
