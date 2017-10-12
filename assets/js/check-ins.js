

getLocation();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    /*x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; */
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    $(function() {
        $.ajax({
          url: 'assets/php/yelp.php',
          data: {
            long: position.coords.longitude,
            latt: position.coords.latitude
          }, 
          success: function (response) {
            console.log(response)
          },
          dataType: 'json'
        });
    });



}