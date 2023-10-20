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
    console.log(data.PS5);
}