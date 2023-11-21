// 1 . Anslut till JSON filen  - fetch synch await

async function addCvInfo() {
  const response = await fetch("cv.json");

  if (response.ok) {
    const cvInfo = await response.json();
    //Get the reference to the element inside the HTML document
    const profileName = document.getElementById("profileName");
    //Titles
    const cvSlogan = document.getElementById("sloganTitle");
    const skillsHeader = document.getElementById("skillsTitle");
    const highlightsTitle = document.getElementById("highlightsTitle");
    const workExperienceTitle = document.getElementById("workLifelTitle");
    const educationalBackgroundTitle =
      document.getElementById("educationalTitle");
    const school1Title = document.getElementById("school1Title");
    const school2Title = document.getElementById("school2Title");

    //Highlight Variables
    const highlight1 = document.getElementById("highlight1");
    const highlight2 = document.getElementById("highlight2");
    const highlight3 = document.getElementById("highlight3");

    //Skills Variables
    const skill1 = document.getElementById("skill1");
    const skill2 = document.getElementById("skill2");
    const skill3 = document.getElementById("skill3");
    const skill4 = document.getElementById("skill4");
    const skill5 = document.getElementById("skill5");
    const skill6 = document.getElementById("skill6");
    const skill7 = document.getElementById("skill7");
    const skill8 = document.getElementById("skill8");
    const skill9 = document.getElementById("skill9");
    const skill10 = document.getElementById("skill10");
    const skill11 = document.getElementById("skill11");
    const skill12 = document.getElementById("skill12");
    const skill13 = document.getElementById("skill13");
    const skill14 = document.getElementById("skill14");
    const skill15 = document.getElementById("skill15");
    const skill16 = document.getElementById("skill16");
    const skill17 = document.getElementById("skill17");

    //Work Life variables
    const workExperience1 = document.getElementById("workExperience1");
    const workExperience2 = document.getElementById("workExperience2");
    const workExperience3 = document.getElementById("workExperience3");
    const workExperience4 = document.getElementById("workExperience4");
    const workExperience5 = document.getElementById("workExperience5");
    const workExperience6 = document.getElementById("workExperience6");

    //Courses Variables school 1
    const school1Course1 = document.getElementById("school1-course1");
    const school1Course2 = document.getElementById("school1-course2");
    const school1Course3 = document.getElementById("school1-course3");
    const school1Course4 = document.getElementById("school1-course4");
    const school1Course5 = document.getElementById("school1-course5");
    const school1Course6 = document.getElementById("school1-course6");
    const school1Course7 = document.getElementById("school1-course7");
    const school1Course8 = document.getElementById("school1-course8");
    const school1Course9 = document.getElementById("school1-course9");
    const school1Course10 = document.getElementById("school1-course10");
    const school1Course11 = document.getElementById("school1-course11");
    const school1Course12 = document.getElementById("school1-course12");

    //Courses Variables school 2
    const school2Course1 = document.getElementById("school2-course1");
    const school2Course2 = document.getElementById("school2-course2");
    const school2Course3 = document.getElementById("school2-course3");
    const school2Course4 = document.getElementById("school2-course4");
    const school2Course5 = document.getElementById("school2-course5");
    const school2Course6 = document.getElementById("school2-course6");
    const school2Course7 = document.getElementById("school2-course7");
    const school2Course8 = document.getElementById("school2-course8");
    const school2Course9 = document.getElementById("school2-course9");
    const school2Course10 = document.getElementById("school2-course10");
    const school2Course11 = document.getElementById("school2-course11");

    // Add the content to the HHTML page

    //CV Sidan
    profileName.textContent = cvInfo["Profile info"].name;
    cvSlogan.textContent = cvInfo["Profile info"].cvIntro;
    skillsHeader.textContent = cvInfo["skills"].skillsTitle;
    highlightsTitle.textContent = cvInfo["highlights"].highlightsTitle;
    workExperienceTitle.textContent =
      cvInfo["workExperience"].workExperienceTitle;
    educationalBackgroundTitle.textContent =
      cvInfo["educationalBackground"].educationalBackgroundTitle;
    school1Title.textContent = cvInfo["educationalBackground"].school1Title;
    school2Title.textContent = cvInfo["educationalBackground"].school1Title;
    //Highlight .textContent from cv.json
    highlight1.textContent = cvInfo["highlights"].highlight1;
    highlight2.textContent = cvInfo["highlights"].highlight2;
    highlight3.textContent = cvInfo["highlights"].highlight3;

    //Skills .textContent from cv.json
    skill1.textContent = cvInfo["skills"].skill1;
    skill2.textContent = cvInfo["skills"].skill2;
    skill3.textContent = cvInfo["skills"].skill3;
    skill4.textContent = cvInfo["skills"].skill4;
    skill5.textContent = cvInfo["skills"].skill5;
    skill6.textContent = cvInfo["skills"].skill6;
    skill7.textContent = cvInfo["skills"].skill7;
    skill8.textContent = cvInfo["skills"].skill8;
    skill9.textContent = cvInfo["skills"].skill9;
    skill10.textContent = cvInfo["skills"].skill10;
    skill11.textContent = cvInfo["skills"].skill11;
    skill12.textContent = cvInfo["skills"].skill12;
    skill13.textContent = cvInfo["skills"].skill13;
    skill14.textContent = cvInfo["skills"].skill14;
    skill15.textContent = cvInfo["skills"].skill15;
    skill16.textContent = cvInfo["skills"].skill16;
    skill17.textContent = cvInfo["skills"].skill17;

    //Work Experience .textContent from cv.json
    workExperience1.textContent = cvInfo["workExperience"].company1;
    workExperience2.textContent = cvInfo["workExperience"].company2;
    workExperience3.textContent = cvInfo["workExperience"].company3;
    workExperience4.textContent = cvInfo["workExperience"].company4;
    workExperience5.textContent = cvInfo["workExperience"].company5;
    workExperience6.textContent = cvInfo["workExperience"].company6;

    //Courses from school 1 .textContent from cv.json
    school1Course1.textContent = cvInfo["educationalBackground"].school1Course1;
    school1Course2.textContent = cvInfo["educationalBackground"].school1Course2;
    school1Course3.textContent = cvInfo["educationalBackground"].school1Course3;
    school1Course4.textContent = cvInfo["educationalBackground"].school1Course4;
    school1Course5.textContent = cvInfo["educationalBackground"].school1Course5;
    school1Course6.textContent = cvInfo["educationalBackground"].school1Course6;
    school1Course7.textContent = cvInfo["educationalBackground"].school1Course7;
    school1Course8.textContent = cvInfo["educationalBackground"].school1Course8;
    school1Course9.textContent = cvInfo["educationalBackground"].school1Course9;
    school1Course10.textContent =
      cvInfo["educationalBackground"].school1Course10;
    school1Course11.textContent =
      cvInfo["educationalBackground"].school1Course11;
    school1Course12.textContent =
      cvInfo["educationalBackground"].school1Course12;

    //Courses from school 2 .textContent from cv.json
    school2Course1.textContent = cvInfo["educationalBackground"].school2Course1;
    school2Course2.textContent = cvInfo["educationalBackground"].school2Course2;
    school2Course3.textContent = cvInfo["educationalBackground"].school2Course3;
    school2Course4.textContent = cvInfo["educationalBackground"].school2Course4;
    school2Course5.textContent = cvInfo["educationalBackground"].school2Course5;
    school2Course6.textContent = cvInfo["educationalBackground"].school2Course6;
    school2Course7.textContent = cvInfo["educationalBackground"].school2Course7;
    school2Course8.textContent = cvInfo["educationalBackground"].school2Course8;
    school2Course9.textContent = cvInfo["educationalBackground"].school2Course9;
    school2Course10.textContent =
      cvInfo["educationalBackground"].school2Course10;
    school2Course11.textContent =
      cvInfo["educationalBackground"].school2Course11;
  } else {
    console.log(`HTTP error message: ${response.status}`);
  }
}

addCvInfo();
