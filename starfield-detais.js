fetch("videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame1 = document.getElementById("imgGame1");

  var platform1 = document.getElementById("platform1");

  var releaseDate1 = document.getElementById("releaseDate1");
  
  var premise1 = document.getElementById("premise1");
  
  var genre1 = document.getElementById("genre1");
  
  var publisher1 = document.getElementById("publisher1");
  
  var gameDev1 = document.getElementById("gameDev1");
  
  var rating1 = document.getElementById("rating1");
  
  for (var i = 0; i < myGames.games.length; i++) {
    let image = myGames.games[i].image;
    let platform = myGames.games[i].platforms;
    let date = myGames.games[i].release_date;
    let developer = myGames.games[i].developer;
    let premise = myGames.games[i].premise;
    let genre = myGames.games[i].genre;
    let publisher = myGames.games[i].publisher;

    let imgGame = document.createElement("div");
    imgGame.innerHTML = `<img src="${image}" class="card-img-top" alt="..."></img>`;

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

    if (myGames.games[i].title === "Starfield") {
      imgGame1.appendChild(imgGame);
      platform1.appendChild(gamePlatform);
      releaseDate1.appendChild(gameDate);
      gameDev1.appendChild(gameDeveloper);
      rating1.appendChild(ratingElement);
      premise1.appendChild(premiseText);
      genre1.appendChild(gameGenre);
      publisher1.appendChild(gamePublisher);

    } 
  } // end of for
} // end of function
