document.addEventListener("DOMContentLoaded", function () {
    const bottomImage = document.getElementById("bottom-image");
    const emergingContainer = document.querySelector(".emerging-bottom-image");

    window.addEventListener("scroll", () => {
        const scrolledHeight = window.scrollY + window.innerHeight;
        const fullHeight = document.body.offsetHeight;

        // Check if the user has scrolled near the bottom of the page
        if (scrolledHeight > fullHeight - 200) {
            emergingContainer.classList.add("emerging-bottom-visible");
        } else {
            emergingContainer.classList.remove("emerging-bottom-visible");
        }
    });

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

  sidebarLinks.forEach(link => {
      link.addEventListener("mouseenter", () => {
          link.classList.add("christmas-pink");
      });

      link.addEventListener("mouseleave", () => {
          link.classList.remove("christmas-pink");
      });
  });
});

