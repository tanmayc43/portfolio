function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}


window.onload = function() {
    document.getElementById("contact-form").reset();
};

// NASA API key
const NASA_API_KEY = "Bh8zQehX2aO1ZCJIYXqy1kOSnNK8kHVQdmH1uZem";
const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

function fetchNasaImage() {
  const nasaApiUrl = NASA_API_URL;
  fetch(nasaApiUrl)
      .then(response => response.json())
      .then(data => {
          const nasaImage = document.getElementById('nasa-image');
          const nasaDescription = document.getElementById('nasa-description');
          const toggleBtn = document.getElementById('toggle-text-btn');

          nasaImage.src = data.url; 
          nasaDescription.textContent = data.explanation;

          toggleBtn.style.display = "inline-block";
          nasaDescription.style.display = "none"; 
      })
      .catch(error => console.error('Error fetching NASA image:', error));
}

// Toggle the visibility of the description text
function toggleDescription() {
  const description = document.getElementById('nasa-description');
  const toggleBtn = document.getElementById('toggle-text-btn');

  if (description.style.display === "none") {
      description.style.display = "block";
      toggleBtn.textContent = "Hide Description";
  } else {
      description.style.display = "none";
      toggleBtn.textContent = "Show Description";
  }
}

window.onload = fetchNasaImage;

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  try {
      const isBackendAvailable = false; 
      
      if (isBackendAvailable) {
          alert('Form submitted successfully!');
          document.getElementById('contact-form').reset(); 
      } else {
          alert('Something went wrong. Please try again later.');
      }
  } catch (error) {
      alert('Something went wrong. Please try again later.');
  }
});




