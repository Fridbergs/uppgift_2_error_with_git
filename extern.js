// Function to get API key from json
async function getApiKey() {
  const response = await fetch("variables.json");
  if (response.ok) {
    const contactInfo = await response.json();
    //Get the json information
    let googleApiKey = contactInfo["allApis"].googleApi;
    initMap(googleApiKey);
  } else {
    console.log(`HTTP error message: ${response.status}`);
  }
}

getApiKey();

// Function to initialize the maps
function initMap(apiKey) {
  // Initialize map centered at your preset location
  const presetLocation = { lat: 55.592529296875, lng: 12.97431755065918 };
  const map = new google.maps.Map(document.getElementById("map2"), {
    zoom: 15,
    center: presetLocation,
  });

  // Add a marker for the preset location
  new google.maps.Marker({
    position: presetLocation,
    map: map,
    title: "Preset Location",
  });
  console.log(apiKey);
}

// Function to calculate distance
function calculateDistance() {
  const userLocationInput = document.getElementById("userLocation").value;

  // Use Google Maps Geocoding API to convert user's location input to coordinates
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: userLocationInput }, function (results, status) {
    if (status === "OK" && results[0]) {
      const userLocation = results[0].geometry.location;

      // Use Google Maps Geometry Library to calculate distance
      const presetLocation = new google.maps.LatLng(37.7749, -122.4194);
      const distance = google.maps.geometry.spherical.computeDistanceBetween(
        userLocation,
        presetLocation
      );

      alert(
        `Distance from your location to preset location: ${distance.toFixed(
          2
        )} meters`
      );
    } else {
      alert("Geocoding failed. Please enter a valid location.");
    }
  });
}
