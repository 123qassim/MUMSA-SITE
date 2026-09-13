function loadActivitiesContainer() {

  /* --- 1. FILTER LOGIC --- */
  const filterButtons = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.activity-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterButtons.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --- 2. LIGHTBOX LOGIC --- */
  // Get the modal elements
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("lightboxImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close-btn")[0];

  // Select all images inside the activity cards
  const images = document.querySelectorAll('.card-image-wrapper img');

  images.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = "block";
      modalImg.src = this.src; // Use the same image source
      
      // Use the "alt" text as a caption
      captionText.innerHTML = this.alt; 
    });
  });

  // Close when hitting the X
  if (closeBtn) {
    closeBtn.onclick = function() { 
      modal.style.display = "none";
    }
  }

  // Close when clicking outside the image (on the black background)
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

loadActivitiesContainer();