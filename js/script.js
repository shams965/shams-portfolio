/*======typing animation========*/
var typed = new Typed(".typing",{
    strings:["","Web Designer" , "Frontend Developer" , "Software Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
}) 





const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // pehle sab section se back-section hatao
    for (let j = 0; j < totalSection; j++) {
      allSection[j].classList.remove("back-section");
    }

    // nav links se active class remove karo
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }

    // clicked link active karo
    this.classList.add("active");

    // section show karo
    showSection(this);

    // mobile view ke liye toggle karo
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex);
  showSection(this);
  updateNav(this);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", function(){
  console.log("Toggle button clicked");
  asideSectionToggleBtn();
});

function asideSectionToggleBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open"); // ✅ sahi variable
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }

  // Toggle backdrop for mobile
  const backdrop = document.getElementById("backdrop");
  if (aside.classList.contains("open")) {
    backdrop.classList.add("show");
  } else {
    backdrop.classList.remove("show");
  }
}

        





      