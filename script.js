const lat = '40.659019',
    long = '-74.002245',
    api = '7352a2ba8615067479a7102a940ff88e',
    unit = 'imperial',
    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${api}&units=${unit}`;

function updateUI(data) {
    document.querySelector('#current').innerHTML = `${Math.round(data.current.temp)}˚F`;
    console.log(data);
}

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    return updateUI(data);
})
.catch(function(error) {
    console.log(error);
});
