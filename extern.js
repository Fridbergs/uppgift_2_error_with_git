// Function to get the API key located inside the JSON object
async function getApiKey() {
  try {
    const response = await fetch("variables.json");
    if (response.ok) {
      const variables = await response.json();
      const googleApiKey = variables["allApis"].googleApi2;
      initializeGoogleMaps(googleApiKey);
    } else {
      console.log(`HTTP error message: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching API key:", error);
  }
}

// Use the loaded JSON to initialize the Google Maps API
function initializeGoogleMaps(googleApiKey) {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&callback=initializeMap`;
  document.head.appendChild(script);
}

// Callback function to initialize the map after the Google Maps API has loaded
function initializeMap() {
  // Set the default coordinates (you can adjust these to your desired location)
  const defaultLat = 55.59257971038269;
  const defaultLng = 12.974460810106853;

  // Create a LatLng object representing the default location
  const myLatLng = new google.maps.LatLng(defaultLat, defaultLng);

  // Create a map object and specify the DOM element for display
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 14, // Adjust the zoom level as needed
  });

  // Create a marker and set its position
  const marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: "My Location", // Set the title for the marker (tooltip)
  });
}

// Add an event listener for when the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Load the API key and initialize Google Maps
  getApiKey();
});
