fetch("./videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame2 = document.getElementById("imgGame2");

  var platform2 = document.getElementById("platform2");

  var releaseDate2 = document.getElementById("releaseDate2");

  var premise2 = document.getElementById("premise2");

  var genre2 = document.getElementById("genre2");

  var publisher2 = document.getElementById("publisher2");

  var gameDev2 = document.getElementById("gameDev2");

  var rating2 = document.getElementById("rating2");

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

    if (myGames.games[i].title === "Baldur's Gate 3") {
      imgGame2.appendChild(imgGame);
      platform2.appendChild(gamePlatform);
      releaseDate2.appendChild(gameDate);
      gameDev2.appendChild(gameDeveloper);
      rating2.appendChild(ratingElement);
      premise2.appendChild(premiseText);
      genre2.appendChild(gameGenre);
      publisher2.appendChild(gamePublisher);
    }

  } // end of for
} // end of function
