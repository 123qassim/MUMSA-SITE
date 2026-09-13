function loadMUMSACommunity() {
  const container = document.querySelector('.logo-grid');
  if (!container) return;

  const opportunities = [
    ['Faith and learning', 'Halaqahs, Islamic talks and spaces for spiritual growth.'],
    ['Student welfare', 'A caring support network for students throughout campus life.'],
    ['Leadership and service', 'Volunteer opportunities that build confidence and meaningful impact.'],
    ['Sisterhood and brotherhood', 'A welcoming community grounded in unity, respect and belonging.']
  ];

  container.innerHTML = opportunities.map(([title, description]) => `
    <article class="membership-opportunity">
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join('');
}

loadMUMSACommunity();
