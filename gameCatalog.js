fetch("./GamePages/videogames.json")
  .then((response) => response.json())
  .then((myGames) => loadGames(myGames));

function loadGames(myGames) {
  var imgGame1 = document.getElementById("imgGame1");
  var imgGame2 = document.getElementById("imgGame2");
  var imgGame3 = document.getElementById("imgGame3");
  var imgGame4 = document.getElementById("imgGame4");
  var imgGame5 = document.getElementById("imgGame5");
  var imgGame6 = document.getElementById("imgGame6");
  var imgGame7 = document.getElementById("imgGame7");
  var imgGame8 = document.getElementById("imgGame8");
  var imgGame9 = document.getElementById("imgGame9");

  var txtGame1 = document.getElementById("txtGame1");
  var txtGame2 = document.getElementById("txtGame2");
  var txtGame3 = document.getElementById("txtGame3");
  var txtGame4 = document.getElementById("txtGame4");
  var txtGame5 = document.getElementById("txtGame5");
  var txtGame6 = document.getElementById("txtGame6");
  var txtGame7 = document.getElementById("txtGame7");
  var txtGame8 = document.getElementById("txtGame8");
  var txtGame9 = document.getElementById("txtGame9");

  var gameDev1 = document.getElementById("gameDev1");
  var gameDev2 = document.getElementById("gameDev2");
  var gameDev3 = document.getElementById("gameDev3");
  var gameDev4 = document.getElementById("gameDev4");
  var gameDev5 = document.getElementById("gameDev5");
  var gameDev6 = document.getElementById("gameDev6");
  var gameDev7 = document.getElementById("gameDev7");
  var gameDev8 = document.getElementById("gameDev8");
  var gameDev9 = document.getElementById("gameDev9");

  var rating1 = document.getElementById("rating1");
  var rating2 = document.getElementById("rating2");
  var rating3 = document.getElementById("rating3");
  var rating4 = document.getElementById("rating4");
  var rating5 = document.getElementById("rating5");
  var rating6 = document.getElementById("rating6");
  var rating7 = document.getElementById("rating7");
  var rating8 = document.getElementById("rating8");
  var rating9 = document.getElementById("rating9");

  for (var i = 0; i < myGames.games.length; i++) {
    let title = myGames.games[i].title;
    let description = myGames.games[i].description;
    let image = myGames.games[i].image; // Get the image property
    let developer = myGames.games[i].developer;

    let imgGame = document.createElement("div");
    imgGame.innerHTML = `<img src="${image}" class="card-img-top" alt="..."></img>`;

    let txtGame = document.createElement("p");
    txtGame.innerHTML = `<p class="card-text"> <strong>${title}</strong> ${description}</p>`;

    let gameDeveloper = document.createElement("h6");
    gameDeveloper.innerHTML = `<h6 class="gameDev">${developer}</h6>`;

    let rating = myGames.games[i].rating;
    let ratingElement = document.createElement("small");
    ratingElement.innerHTML = `<strong>Rating: ${rating}</strong>`;


    if (myGames.games[i].title === "Starfield") {
      imgGame1.appendChild(imgGame);
      txtGame1.appendChild(txtGame);
      gameDev1.appendChild(gameDeveloper);
      rating1.appendChild(ratingElement);

    } else if (myGames.games[i].title === "Baldur's Gate 3") {
      imgGame2.appendChild(imgGame);
      txtGame2.appendChild(txtGame);
      gameDev2.appendChild(gameDeveloper);
      rating2.appendChild(ratingElement);
    } else if (myGames.games[i].title === "Mortal Kombat 1") {
      imgGame3.appendChild(imgGame);
      txtGame3.appendChild(txtGame);
      gameDev3.appendChild(gameDeveloper);
      rating3.appendChild(ratingElement);
    } else if (myGames.games[i].title === "Final Fantasy VII: Ever Crisis") {
      imgGame4.appendChild(imgGame);
      txtGame4.appendChild(txtGame);
      gameDev4.appendChild(gameDeveloper);
      rating4.appendChild(ratingElement);
    } else if (myGames.games[i].title === "Lies of P") {
      imgGame5.appendChild(imgGame);
      txtGame5.appendChild(txtGame);
      gameDev5.appendChild(gameDeveloper);
      rating5.appendChild(ratingElement);
    } else if (myGames.games[i].title === "Payday 3") {
      imgGame6.appendChild(imgGame);
      txtGame6.appendChild(txtGame);
      gameDev6.appendChild(gameDeveloper);
      rating6.appendChild(ratingElement);
    } else if (myGames.games[i].title === "EA Sports FC 24") {
      imgGame7.appendChild(imgGame);
      txtGame7.appendChild(txtGame);
      gameDev7.appendChild(gameDeveloper);
      rating7.appendChild(ratingElement);
    } else if (myGames.games[i].title === "The Crew Motorfest") {
      imgGame8.appendChild(imgGame);
      txtGame8.appendChild(txtGame);
      gameDev8.appendChild(gameDeveloper);
      rating8.appendChild(ratingElement);
    } else if (myGames.games[i].title === "NBA 2K24") {
      imgGame9.appendChild(imgGame);
      txtGame9.appendChild(txtGame);
      gameDev9.appendChild(gameDeveloper);
      rating9.appendChild(ratingElement);
    }
  } // end of for
} // end of function
