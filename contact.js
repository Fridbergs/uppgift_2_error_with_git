// 1 . Anslut till JSON filen  - fetch synch await

async function getContactInfo() {
  const response = await fetch("contact.json");

  if (response.ok) {
    const contactInfo = await response.json();
    //Get the reference to the element inside the HTML document
    const contactTitle = document.getElementById("contactTitle");
    const nameTitle = document.getElementById("nameTitle");
    const addressTitle = document.getElementById("addressTitle");
    const emailTitle = document.getElementById("emailTitle");
    const phoneNumberTitle = document.getElementById("phoneNumberTitle");

    //Add information inside the p-tag
    const name = document.getElementById("name");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");

    // Add the content to the HHTML page
    contactTitle.textContent = contactInfo["titles"].contactTitle;
    nameTitle.textContent = contactInfo["titles"].nameTitle;
    addressTitle.textContent = contactInfo["titles"].addressTitle;
    emailTitle.textContent = contactInfo["titles"].emailTitle;
    phoneNumberTitle.textContent = contactInfo["titles"].phoneNumberTitle;

    name.textContent = contactInfo["personalInfo"].name;
    address.textContent = contactInfo["personalInfo"].address;
    email.textContent = contactInfo["personalInfo"].email;
    phoneNumber.textContent = contactInfo["personalInfo"].phoneNumber;
  } else {
    console.log(`HTTP error message: ${response.status}`);
  }
}

getContactInfo();
