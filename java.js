// Get the loader element
const loader = document.getElementById('loader');

// Add an event listener to detect when the fade-out animation ends
loader.addEventListener('animationend', () => {
  // Hide the preloader and move it to the back
  document.body.classList.add('preloader--hidden');
});

var footer = document.querySelector(".site-footer");
console.log("Footer element:", footer);

window.addEventListener("scroll", function() {
  if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});

function scrollToAboutSection() {
  var section = document.getElementById("about-section");
  section.scrollIntoView({behavior: "smooth", block: "start"});
}

function scrollToHomeSection() {
  var section = document.getElementById("home-section");
  section.scrollIntoView({behavior: "smooth", block: "start"});
}

function scrollToTeamSection() {
  var section = document.getElementById("team-section");
  section.scrollIntoView({behavior: "smooth", block: "start"});
}

document.addEventListener("DOMContentLoaded", function() {
    var loader = document.querySelector(".loader");
    setTimeout(function() {
      loader.style.opacity = "0";
      setTimeout(function() {
        loader.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
      }, 1000);
    }, 2000);
  });
  
