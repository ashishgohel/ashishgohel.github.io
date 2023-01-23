// Get the navigation menu
var nav = document.querySelector("nav");

// Get the sections
var sections = document.querySelectorAll("section");

// Listen for clicks on the navigation menu
nav.addEventListener("click", function(event) {
  // Get the target element
  var target = event.target;

  // Check if the target is a link
  if (target.tagName === "A") {
    // Prevent the default behavior
    event.preventDefault();

    // Hide all sections
    sections.forEach(function(section) {
      section.style.display = "none";
    });

    // Show the target section
    var targetId = target.getAttribute("href");
    var targetSection = document.querySelector(targetId);
    targetSection.style.display = "block";
  }
});
