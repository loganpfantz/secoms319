fetch("videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame6 = document.getElementById("imgGame6");

  var platform6 = document.getElementById("platform6");

  var releaseDate6 = document.getElementById("releaseDate6");
  
  var premise6 = document.getElementById("premise6");
  
  var genre6 = document.getElementById("genre6");
  
  var publisher6 = document.getElementById("publisher6");
  
  var gameDev6 = document.getElementById("gameDev6");
  
  var rating6 = document.getElementById("rating6");
  
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

    if (myGames.games[i].title === "Payday 3") {
      imgGame6.appendChild(imgGame);
      platform6.appendChild(gamePlatform);
      releaseDate6.appendChild(gameDate);
      gameDev6.appendChild(gameDeveloper);
      rating6.appendChild(ratingElement);
      premise6.appendChild(premiseText);
      genre6.appendChild(gameGenre);
      publisher6.appendChild(gamePublisher);

    } 
  } // end of for
} // end of function
