document.addEventListener("DOMContentLoaded", function () {
 

    // Fade-in observer for images
    const images = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                entry.target.classList.remove("hidden");
            }
        });
    }, { threshold: 0.5 });

    images.forEach(image => observer.observe(image));
});


document.addEventListener("DOMContentLoaded", function () {
  // Select all links in the sidebar
  const sidebarLinks = document.querySelectorAll(".sidebar a");

//   sidebarLinks.forEach(link => {
//       link.addEventListener("mouseenter", () => {
//           link.classList.add("christmas-pink");
//       });

//       link.addEventListener("mouseleave", () => {
//           link.classList.remove("christmas-pink");
//       });
//   });
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollImage = document.getElementById("scroll-image");
  const sidebar = document.getElementById("sidebar");
//   const sidebarWidth = sidebar.offsetWidth;


  window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY; // Pixels scrolled from the top
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercentage = scrollTop / scrollHeight; // Percentage scrolled
      const sidebarWidth = (window.innerWidth<=800 ? 0:sidebar.offsetWidth);



      // Calculate the new horizontal position of the image
      const screenWidth = window.innerWidth - sidebarWidth; // Exclude sidebar width
      const imagePosition = sidebarWidth + scrollPercentage * (screenWidth - 50); // 50px is the image width

      // Update the image's position
      scrollImage.style.left = `${imagePosition}px`;
  });
});

// window.addEventListener('resize', function(event) {
//     const sidebar = document.getElementById("sidebar");
//     const screenWidth = window.innerWidth
//     if (screenWidth < 800){
//         sidebar.classList.remove('close'); //remove highlught class
//     }
// });



const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById("sidebar");
function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
}

window.onload = function() {
    document.getElementById("my_audio").play();
}