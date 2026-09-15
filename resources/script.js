import { getCollection } from '../js/data-source.js';
import { escapeHtml } from '../js/ui.js';

const resourceData = await getCollection('resources');
const categoryFilter = document.querySelector('#resource-category');
const searchInput = document.querySelector('#resource-search');
const resourceList = document.querySelector('.js-resource-list');
const resultCount = document.querySelector('.resources-result-count');
const categories = [...new Set(resourceData.map((resource) => resource.category))];

function renderResourceCard(resource) {
  const action = resource.url
    ? `<a class="resource-card__action" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">${resource.type === 'PDF' ? 'Download' : 'View'} <span aria-hidden="true">↗</span></a>`
    : '<span class="resource-card__pending">Link to be published</span>';
  return `<article class="resource-card"><span class="resource-card__category">${escapeHtml(resource.category)}</span><h3>${escapeHtml(resource.title)}</h3><p>${escapeHtml(resource.description)}</p><div class="resource-card__meta"><span><i class="fa-solid fa-user" aria-hidden="true"></i>${escapeHtml(resource.author)}</span><span><i class="fa-regular fa-calendar" aria-hidden="true"></i>${escapeHtml(resource.date)}</span><span><i class="fa-solid fa-file-lines" aria-hidden="true"></i>${escapeHtml(resource.type)}</span></div><div class="resource-card__footer">${action}</div></article>`;
}

function renderResources() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const filtered = resourceData.filter((resource) => {
    const searchable = `${resource.title} ${resource.category} ${resource.description} ${resource.author} ${resource.type}`.toLowerCase();
    return (selectedCategory === 'all' || resource.category === selectedCategory) && (!query || searchable.includes(query));
  });
  resourceList.innerHTML = filtered.length ? filtered.map(renderResourceCard).join('') : '<p class="resources-empty">No resources match your search. Try another keyword or category.</p>';
  resultCount.textContent = `${filtered.length} resource${filtered.length === 1 ? '' : 's'} shown`;
}

categories.forEach((category) => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categoryFilter.append(option);
});
categoryFilter.addEventListener('change', renderResources);
searchInput.addEventListener('input', renderResources);
renderResources();
