fetch("../videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame3 = document.getElementById("imgGame3");

  var platform3 = document.getElementById("platform3");

  var releaseDate3 = document.getElementById("releaseDate3");
  
  var premise3 = document.getElementById("premise3");
  
  var genre3 = document.getElementById("genre3");
  
  var publisher3 = document.getElementById("publisher3");
  
  var gameDev3 = document.getElementById("gameDev3");
  
  var rating3 = document.getElementById("rating3");
  
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

    if (myGames.games[i].title === "Mortal Kombat 1") {
      imgGame3.appendChild(imgGame);
      platform3.appendChild(gamePlatform);
      releaseDate3.appendChild(gameDate);
      gameDev3.appendChild(gameDeveloper);
      rating3.appendChild(ratingElement);
      premise3.appendChild(premiseText);
      genre3.appendChild(gameGenre);
      publisher3.appendChild(gamePublisher);

    } 
  } // end of for
} // end of function
