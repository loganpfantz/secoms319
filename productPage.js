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
    let title = data.PS5.name;
    let mainContainer = documnet.getElementById("product");

    title.addChild(data);

    console.log(title);
}