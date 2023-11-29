// Imports
import React, { useState, useEffect } from "react";
import controllerIcon from "./images/controllerIcon.png";
import thankYouImage from "./images/thankyou.jpg";
import "./details-page.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* CARSHOP COMPONENT*/

// Define a functional component named CarShop.
const GameSpace = () => {
  const [games, setGames] = useState([]);
  const [currentView, setCurrentView] = useState("homeView"); // State variable for managing the current view.
  const [selectedGame, setSelectedGame] = useState(null); // State for selected game

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* NEEDED FUNCTIONS */

  // Event handler to switch views
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Event handler for selecting a game
  const selectGame = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    if (game) {
      setSelectedGame(game);
      setCurrentView("gameDetails"); // Switch to game details view
    }
  };

  // USE EFFECT TO CONNECT TO BACKEND
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:8081/listGames");
        const data = await response.json();
        setGames(data[0].games); // Access the nested games array
      } catch (error) {
        console.error("Error fetching games data:", error);
      }
    };

    fetchGames();
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* HOME */

  const homeView = (
    <div>
      <div className="header">
        <div className="collapse text-bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4>About</h4>
                <p className="text-gray">
                  This is a project created by Logan Pfantz and Jesus Soto for
                  Iowa State University className COMS 319 Fall 2023.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      lwpfantz@iastate.edu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      jhsoto@iastate.edu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src={controllerIcon} alt="Controller Icon" width="40px" />
              <div className="header-style">
                <strong>
                  <span style={{ color: "yellow" }}>Game</span>
                  <span style={{ color: "red" }}>Space</span>
                </strong>
              </div>
            </a>

            <button
              type="button"
              className="btn btn-lg btn-white-text"
              onClick={() => handleViewChange("homeView")}
            >
              Home
            </button>
            <button
              type="button"
              className="btn btn-lg btn-white-text"
              onClick={() => handleViewChange("gamingLibrary")}
            >
              Gaming Library
            </button>
            <button
              type="button"
              className="btn btn-lg btn-white-text2"
              onClick={() => handleViewChange("consolesCatalogue")}
            >
              Consoles Catalogue
            </button>
            <button
              type="button"
              className="btn btn-lg btn-white-text2"
              onClick={() => handleViewChange("indexView")}
            >
              About Us
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>

      <div className="subHeader">
        <div className="welcome-banner">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 id="title">
                <strong>
                  <span style={{ color: "yellow" }}>Game</span>
                  <span style={{ color: "red" }}>Space</span>
                </strong>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="main-data">
        <h1 id="greeting">Greetings Gamers!</h1>
        <h4 id="text">
          Welcome to{" "}
          <span style={{ color: "yellow", backgroundColor: "gray" }}>Game</span>
          <span style={{ color: "red", backgroundColor: "gray" }}>Space</span>,
          a home for every gamer and social space for us all to interact and
          share our favorite gaming stories.
        </h4>
        <img id="thank-you" src={thankYouImage} alt="thankyou!" />
      </div>

      <div className="footer">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">
            This website was designed by Logan Pfantz and Jesus Soto
          </p>
          <p className="mb-0">
            About us: We are current students of Iowa State University enrolled
            in the Software Engineering major.
            <a href="https://www.engineering.iastate.edu/undergraduate-majors-and-minors/software/?utm_medium=ppc&utm_source=google&utm_campaign=FY24%20Recruitment%20-%20Engineering&utm_content=Software%20Engineering&gclid=Cj0KCQjw9rSoBhCiARIsAFOipll2bDiP-kEB61yO7ZQLNaxUyH2mzYo5DscEHKU5Z_-J4zvMJIKZRJkaAsXGEALw_wcB">
              Join us at Iowa State!
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* GAME CATALOG */
  const gamingLibrary = (
    <div>
      <div className="header">
        {/* Header and Navigation Bar */}
        <header data-bs-theme="dark">
          <div className="collapse text-bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4>About</h4>
                  <p className="text-body-secondary">
                    This is a project created by Logan Pfantz and Jesus Soto for
                    Iowa State University className COMS 319 Fall 2023.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4>Contact</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-white">
                        lwpfantz@iastate.edu
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        jhsoto@iastate.edu
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <img src={controllerIcon} alt="Controller Icon" width="40px" />
                <div className="header-style">
                  <strong>
                    <span style={{ color: "yellow" }}>Game</span>
                    <span style={{ color: "red" }}>Space</span>
                  </strong>
                </div>
              </a>

              <button
                type="button"
                className="btn btn-lg btn-white-text"
                onClick={() => handleViewChange("homeView")}
              >
                Home
              </button>
              <button
                type="button"
                className="btn btn-lg btn-white-text"
                onClick={() => handleViewChange("gamingLibrary")}
              >
                Gaming Library
              </button>
              <button
                type="button"
                className="btn btn-lg btn-white-text2"
                onClick={() => handleViewChange("consolesCatalogue")}
              >
                Consoles Catalogue
              </button>
              <button
                type="button"
                className="btn btn-lg btn-white-text2"
                onClick={() => handleViewChange("indexView")}
              >
                About Us
              </button>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className="main">
        <main>
          <section className="py-5 text-center container">
            <div className="welcome-banner">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1>Video Game Library</h1>
                  <p className="secondary-text">
                    Most popular videogames realeses of the month.
                  </p>
                  <p className="secondary-text">
                    <strong>September 2023</strong>
                  </p>
                  <p>
                    <button
                      type="button"
                      className="btn btn-primary me-2"
                      onClick={() => handleViewChange("consolesCatalogue")}
                    >
                      Consoles
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleViewChange("indexView")}
                    >
                      About Us
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div />

          {/* Album and Cards */}
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {games.length > 0 ? (
                  games.map((game, index) => (
                    <div className="col" key={index}>
                      <div className="card shadow-sm custom-card">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <button
                            type="button"
                            className="btn btn-primary mb-2"
                            onClick={() => selectGame(game.id)}
                          >
                            Go to game page
                          </button>
                          <h5 className="card-title">{game.title}</h5>
                          <p className="card-text">{game.description}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              {game.developer}
                            </small>
                            <small className="text-muted">{game.rating}</small>
                          </div>
                          {/* Button or link to game page */}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading games...</p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="footer">
        {/* Footer */}
        <footer className="text-body-secondary py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p className="mb-1">
              This website was designed by Logan Pfantz and Jesus Soto
            </p>
            <p className="mb-0">
              About us: We are current students of Iowa State University
              enrolled in the Software Engineering major.
              <a href="https://www.engineering.iastate.edu/undergraduate-majors-and-minors/software/?utm_medium=ppc&utm_source=google&utm_campaign=FY24%20Recruitment%20-%20Engineering&utm_content=Software%20Engineering&gclid=Cj0KCQjw9rSoBhCiARIsAFOipll2bDiP-kEB61yO7ZQLNaxUyH2mzYo5DscEHKU5Z_-J4zvMJIKZRJkaAsXGEALw_wcB">
                Join us at Iowa State!
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* GAME DETAILS VIEW*/

  const gameDetails = () => {
    if (!selectedGame) return null;

    return (
      <div>
        {/* Render selected game details */}
        <div className="header">
          {/* Header and Navigation Bar */}
          <header data-bs-theme="dark">
            <div className="collapse text-bg-dark" id="navbarHeader">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-md-7 py-4">
                    <h4>About</h4>
                    <p className="text-body-secondary">
                      This is a project created by Logan Pfantz and Jesus Soto
                      for Iowa State University className COMS 319 Fall 2023.
                    </p>
                  </div>
                  <div className="col-sm-4 offset-md-1 py-4">
                    <h4>Contact</h4>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="text-white">
                          lwpfantz@iastate.edu
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white">
                          jhsoto@iastate.edu
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
              <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center">
                  <img
                    src={controllerIcon}
                    alt="Controller Icon"
                    width="40px"
                  />
                  <div className="header-style">
                    <strong>
                      <span style={{ color: "yellow" }}>Game</span>
                      <span style={{ color: "red" }}>Space</span>
                    </strong>
                  </div>
                </a>

                <button
                  type="button"
                  className="btn btn-lg btn-white-text"
                  onClick={() => handleViewChange("homeView")}
                >
                  Home
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-white-text"
                  onClick={() => handleViewChange("gamingLibrary")}
                >
                  Gaming Library
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-white-text2"
                  onClick={() => handleViewChange("consolesCatalogue")}
                >
                  Consoles Catalogue
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-white-text2"
                  onClick={() => handleViewChange("indexView")}
                >
                  About Us
                </button>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarHeader"
                  aria-controls="navbarHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </header>
        </div>

        <main>
          <section className="subHeader">
            <div className="welcome-banner">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 id="gameTitle">{selectedGame.title}</h1>
                </div>
              </div>
            </div>
          </section>

          <div className="main-data">
            <div className="row row-cols-1 row-cols-sm-2">
              <div id="col1">
                <div className="image">
                  <img
                    className="image"
                    src={selectedGame.image}
                    alt={selectedGame.title}
                  />
                </div>
                <div id="details">
                  <div id="platform1">{selectedGame.platforms}</div>
                  <div id="releaseDate1">{selectedGame.release_date}</div>
                  <div id="genre1">{selectedGame.genre}</div>
                  <div id="rating1">{selectedGame.rating}</div>
                  <div id="gameDev1">{selectedGame.developer}</div>
                  <div id="publisher1">{selectedGame.publisher}</div>
                </div>
              </div>
              <div id="col2">
                <div id="card2">
                  <p id="premise1" className="premise-text">
                    {selectedGame.premise}
                  </p>
                </div>
                <div id="comments-header">
                  <h2>
                    <strong>Reviews:</strong>
                  </h2>
                </div>
                <p id="comments">
                  Coming Soon! This block will include reviews made by users.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* CONSOLES VIEW*/

  const consolesCatalogue = <div></div>;

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* INDEX VIEW */

  const indexView = <div></div>;

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*RENDER CURRENT VIEW AND RETURN*/

  // Render the selected view based on currentView
  const renderView = () => {
    switch (currentView) {
      case "homeView":
        return homeView;
      case "gamingLibrary":
        return gamingLibrary;
      case "gameDetails":
        return gameDetails();
      case "consolesCatalogue":
        return consolesCatalogue;
      case "indexView":
        return indexView;
      default:
        return <div>Invalid View</div>;
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div className="card">
        <div className="row">{renderView()}</div>
      </div>
    </div>
  );
};
export default GameSpace;
