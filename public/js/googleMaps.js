function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.880, lng:-117.236};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:32.884984, lng:-117.241305},
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: {lat:32.884984, lng:-117.241305},
      map: map,
      title: 'CICC'
  });
}