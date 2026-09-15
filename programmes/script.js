import { getCollection } from '../js/data-source.js';
import { escapeHtml } from '../js/ui.js';

const programmeData = await getCollection('programmes');
const categoryOrder = [
  'Islamic Development',
  'Student Welfare',
  'Academic & Personal Development',
  'Social & Recreational'
];

const categoryContainer = document.querySelector('#programme-categories');
const categoryFilter = document.querySelector('#programme-category');

function renderProgrammeCard(programme) {
  const image = programme.image
    ? `<img class="programme-card__image" src="${escapeHtml(programme.image)}" alt="${escapeHtml(programme.title)}" loading="lazy">`
    : '';
  const date = programme.upcomingDate
    ? `<span><i class="fa-regular fa-calendar" aria-hidden="true"></i>${escapeHtml(programme.upcomingDate)}</span>`
    : '';
  const location = programme.location
    ? `<span><i class="fa-solid fa-location-dot" aria-hidden="true"></i>${escapeHtml(programme.location)}</span>`
    : '';

  return `<article class="programme-card" data-category="${escapeHtml(programme.category)}">${image}<span class="programme-card__category">${escapeHtml(programme.category)}</span><h4>${escapeHtml(programme.title)}</h4><p>${escapeHtml(programme.description)}</p>${date || location ? `<div class="programme-card__meta">${date}${location}</div>` : ''}</article>`;
}

function renderCategories(selectedCategory = 'all') {
  const visibleCategories = categoryOrder.filter((category) => selectedCategory === 'all' || category === selectedCategory);
  categoryContainer.innerHTML = visibleCategories.map((category) => {
    const programmes = programmeData.filter((programme) => programme.category === category);
    return `<section class="programme-category" aria-labelledby="category-${category.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}"><div class="programme-category__heading"><h3 id="category-${category.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}">${escapeHtml(category)}</h3></div><div class="programme-card-grid">${programmes.map(renderProgrammeCard).join('')}</div></section>`;
  }).join('');
}

categoryOrder.forEach((category) => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categoryFilter.append(option);
});

categoryFilter.addEventListener('change', (event) => renderCategories(event.target.value));
renderCategories();
