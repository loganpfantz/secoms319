fetch("videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame5 = document.getElementById("imgGame5");

  var platform5 = document.getElementById("platform5");

  var releaseDate5 = document.getElementById("releaseDate5");
  
  var premise5 = document.getElementById("premise5");
  
  var genre5 = document.getElementById("genre5");
  
  var publisher5 = document.getElementById("publisher5");
  
  var gameDev5 = document.getElementById("gameDev5");
  
  var rating5 = document.getElementById("rating5");
  
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

    if (myGames.games[i].title === "Lies of P") {
      imgGame5.appendChild(imgGame);
      platform5.appendChild(gamePlatform);
      releaseDate5.appendChild(gameDate);
      gameDev5.appendChild(gameDeveloper);
      rating5.appendChild(ratingElement);
      premise5.appendChild(premiseText);
      genre5.appendChild(gameGenre);
      publisher5.appendChild(gamePublisher);

    } 
  } // end of for
} // end of function
