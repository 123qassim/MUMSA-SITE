import { getCollection } from '../js/data-source.js';
import { escapeHtml } from '../js/ui.js';

const eventData = await getCollection('events');
const eventsGrid = document.querySelector('#events-grid');
const categoryFilter = document.querySelector('#event-category');
const categories = [...new Set(eventData.map((event) => event.category))];

function renderEventCard(event) {
  const visual = event.image
    ? `<img class="event-card__image" src="${escapeHtml(event.image)}" alt="${escapeHtml(event.title)}" loading="lazy">`
    : '<div class="event-card__placeholder" aria-hidden="true"><i class="fa-regular fa-calendar"></i></div>';
  const registration = event.registrationUrl
    ? `<a class="button event-card__action" href="${escapeHtml(event.registrationUrl)}"><span>Register</span></a>`
    : '';

  return `<article class="event-card"><div>${visual}</div><div class="event-card__body"><div class="event-card__topline"><span class="event-card__category">${escapeHtml(event.category)}</span><span class="event-status event-status--${event.status.toLowerCase()}" role="status">${escapeHtml(event.status)}</span></div><h3>${escapeHtml(event.title)}</h3><p>${escapeHtml(event.description)}</p><div class="event-card__meta"><span><i class="fa-regular fa-calendar" aria-hidden="true"></i>${escapeHtml(event.date)}</span><span><i class="fa-regular fa-clock" aria-hidden="true"></i>${escapeHtml(event.time)}</span><span><i class="fa-solid fa-location-dot" aria-hidden="true"></i>${escapeHtml(event.location)}</span></div>${registration}</div></article>`;
}

function renderEvents(category = 'all') {
  const events = category === 'all' ? eventData : eventData.filter((event) => event.category === category);
  eventsGrid.innerHTML = events.length
    ? events.map(renderEventCard).join('')
    : '<p class="events-empty">No events are available in this category yet.</p>';
}

categories.forEach((category) => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categoryFilter.append(option);
});

categoryFilter.addEventListener('change', (event) => renderEvents(event.target.value));
renderEvents();
