fetch('consoles.json')
.then(function(response){
    return response.json();
}).then(function(data){
    displayData(data);
}
).catch(function (err) {
    console.log('error:' + err);
})

function displayData(data){
    let mainContainer = document.getElementById("product");
    const urlParams = new URLSearchParams(window.location.search);
    const x = urlParams.get('x');

    if(x == 0){displayPS5(mainContainer, data)}
    if(x == 1){displayPS4(mainContainer, data)}
    if(x == 2){displayXboxSeriesX(mainContainer, data)}
    if(x == 3){displayXboxOne(mainContainer, data)}
    if(x == 4){displaySteamDeck(mainContainer, data)}
    if(x == 5){displayNintendoSwitch(mainContainer, data)}
}

function displayPS5(mainContainer, data)
{
    mainContainer.innerHTML = 
    `
    <br>
    <h1 id="title">${data.PS5.name}<h1>
    <div class="main-data">
        <div class="row row-cols-1 row-cols-sm-2">
            <div id="col1" width:350px>
                <div id="info">
                <br>
                <img id="productPicture" src="${data.PS5.picture}" alt="ps5"><br>
                <strong>Name:</strong>          ${data.PS5.name}<br>
                <strong>Release Date:</strong>  ${data.PS5.releaseDate}<br>
                <strong>Developer:</strong>     ${data.PS5.developer}<br>
                <strong>Rating:</strong>        ${data.PS5.rating}/5<br>
                <br>
                </div>
            </div>
            <div id="col2">
                <div id="summary">
                <strong>Summary:</strong> ${data.PS5.summary}
                </div>
            </div>
        </div>
    `;
}
function displayXboxSeriesX(mainContainer, data)
{
    mainContainer.innerHTML = 
    `
    <br>
    <h1 id="title">${data.XboxSeriesX.name}<h1>
    <div class="main-data">
        <div class="row row-cols-1 row-cols-sm-2">
            <div id="col1" width:350px>
                <div id="info">
                <br>
                <img id="productPicture" src="${data.XboxSeriesX.picture}" alt="ps5"><br>
                <strong>Name:</strong>          ${data.XboxSeriesX.name}<br>
                <strong>Release Date:</strong>  ${data.XboxSeriesX.releaseDate}<br>
                <strong>Developer:</strong>     ${data.XboxSeriesX.developer}<br>
                <strong>Rating:</strong>        ${data.XboxSeriesX.rating}/5<br>
                <br>
                </div>
            </div>
            <div id="col2">
                <div id="summary">
                <strong>Summary:</strong> ${data.XboxSeriesX.summary}
                </div>
            </div>
        </div>
    `;
}
function displayNintendoSwitch(mainContainer, data)
{
    mainContainer.innerHTML = 
    `
    <br>
    <h1 id="title">${data.NintendoSwitch.name}<h1>
    <div class="main-data">
        <div class="row row-cols-1 row-cols-sm-2">
            <div id="col1" width:350px>
                <div id="info">
                <br>
                <img id="productPicture" src="${data.NintendoSwitch.picture}" alt="ps5"><br>
                <strong>Name:</strong>          ${data.NintendoSwitch.name}<br>
                <strong>Release Date:</strong>  ${data.NintendoSwitch.releaseDate}<br>
                <strong>Developer:</strong>     ${data.NintendoSwitch.developer}<br>
                <strong>Rating:</strong>        ${data.NintendoSwitch.rating}/5<br>
                <br>
                </div>
            </div>
            <div id="col2">
                <div id="summary">
                <strong>Summary:</strong> ${data.NintendoSwitch.summary}
                </div>
            </div>
        </div>
    `;
}
function displaySteamDeck(mainContainer, data)
{
    mainContainer.innerHTML = 
    `
    <br>
    <h1 id="title">${data.SteamDeck.name}<h1>
    <div class="main-data">
        <div class="row row-cols-1 row-cols-sm-2">
            <div id="col1" width:350px>
                <div id="info">
                <br>
                <img id="productPicture" src="${data.SteamDeck.picture}" alt="ps5"><br>
                <strong>Name:</strong>          ${data.SteamDeck.name}<br>
                <strong>Release Date:</strong>  ${data.SteamDeck.releaseDate}<br>
                <strong>Developer:</strong>     ${data.SteamDeck.developer}<br>
                <strong>Rating:</strong>        ${data.SteamDeck.rating}/5<br>
                <br>
                </div>
            </div>
            <div id="col2">
                <div id="summary">
                <strong>Summary:</strong> ${data.SteamDeck.summary}
                </div>
            </div>
        </div>
    `;
}
function displayPS4(mainContainer, data)
{
    mainContainer.innerHTML = 
    `
    <br>
    <h1 id="title">${data.PS4.name}<h1>
    <div class="main-data">
        <div class="row row-cols-1 row-cols-sm-2">
            <div id="col1" width:350px>
                <div id="info">
                <br>
                <img id="productPicture" src="${data.PS4.picture}" alt="ps5"><br>
                <strong>Name:</strong>          ${data.PS4.name}<br>
                <strong>Release Date:</strong>  ${data.PS4.releaseDate}<br>
                <strong>Developer:</strong>     ${data.PS4.developer}<br>
                <strong>Rating:</strong>        ${data.PS4.rating}/5<br>
                <br>
                </div>
            </div>
            <div id="col2">
                <div id="summary">
                <strong>Summary:</strong> ${data.PS4.summary}
                </div>
            </div>
        </div>
    `;
}
function displayXboxOne(mainContainer, data)
{
    mainContainer.innerHTML = 
    `
    <br>
    <h1 id="title">${data.XboxOne.name}<h1>
    <div class="main-data">
        <div class="row row-cols-1 row-cols-sm-2">
            <div id="col1" width:350px>
                <div id="info">
                <br>
                <img id="productPicture" src="${data.XboxOne.picture}" alt="ps5"><br>
                <strong>Name:</strong>          ${data.XboxOne.name}<br>
                <strong>Release Date:</strong>  ${data.XboxOne.releaseDate}<br>
                <strong>Developer:</strong>     ${data.XboxOne.developer}<br>
                <strong>Rating:</strong>        ${data.XboxOne.rating}/5<br>
                <br>
                </div>
            </div>
            <div id="col2">
                <div id="summary">
                <strong>Summary:</strong> ${data.XboxOne.summary}
                </div>
            </div>
        </div>
    `;
}