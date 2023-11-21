// 1 . Anslut till JSON filen  - fetch synch await

async function addProfileInfo() {
  const response = await fetch("index.json");

  if (response.ok) {
    const profileInfo = await response.json();
    //Get the reference to the element inside the HTML document
    const profileName = document.getElementById("profileName");
    const profileSlogan = document.getElementById("profileSlogan");

    // Add the content to the HHTML page
    //Home apge
    profileName.textContent = profileInfo["Profile info"].name;
    profileSlogan.textContent = profileInfo["Profile info"].profileText;
  } else {
    console.log(`HTTP error message: ${response.status}`);
  }
}

addProfileInfo();
