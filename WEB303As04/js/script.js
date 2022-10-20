/*
    Assignment #4
    Name: Gurjeet Singh
    Student ID:0792908
*/
$(function () {
    // your code here
    try
    {
        navigator.geolocation.getCurrentPosition(success, error);
    } 
    catch(err)
    {
        console.log(err);
    }
    const content = $('#content');
    

    function success(loc){
        const lat = loc.coords.latitude;
        const long = loc.coords.longitude;

        $('#locationhere').html(`Latitued: ${lat} <br/>Longitude: ${long}`);

        if(localStorage.getItem("lat"))
        {

                const lastLocationLat = localStorage.getItem("lat");
                const lastLocationLong =  localStorage.getItem("long");

            $('#head').html("Last location :");

            const lastLocationString = document.createElement('p');
            lastLocationString.innerHTML = `Latitued: ${lastLocationLat} <br/>Longitude: ${lastLocationLong}`;
            
            $('#lastLocationHere').append(lastLocationString);
            content.append($('#lastLocationHere'));

            const distance = calcDistanceBetweenPoints(lat, long, lastLocationLat, lastLocationLong);

            $('#message').html(`<h1>Welcome Back</h1> <h3>You have travelled ${distance.toFixed(2)} meters</h3>`);
            content.append($('#message'));

            localStorage.setItem('lat', lat);
            localStorage.setItem('long', long);
        } 
        else
        {
            $('#message').html(`<h1>Welcome</h1>`);
            content.append($('#message'));
            localStorage.setItem('lat', lat);
            localStorage.setItem('long', long);
        }
    }
    function error(err){
        $('#locationhere').html("<h3>You must allow location to use the application!</h3>");
    }




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


