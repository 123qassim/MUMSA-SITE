import { getCollection } from '../js/data-source.js';
import { escapeHtml } from '../js/ui.js';

const leadershipData = await getCollection('executives');
const leadershipGrid = document.querySelector('#leadership-grid');

function renderLeaderCard(member) {
  const photo = member.photograph
    ? `<img class="leader-card__photo" src="${escapeHtml(member.photograph)}" alt="${escapeHtml(member.name)}" loading="lazy">`
    : '<div class="leader-card__photo" aria-label="Photograph to be confirmed"><i class="fa-solid fa-user" aria-hidden="true"></i></div>';
  const contact = member.contactUrl
    ? `<a class="button leader-card__action" href="${escapeHtml(member.contactUrl)}"><span>Contact</span></a>`
    : '';
  const status = member.placeholder ? '<span class="leader-card__status">Details to be confirmed</span>' : '';

  return `<article class="leader-card">${photo}<div class="leader-card__body">${status}<h3>${escapeHtml(member.name)}</h3><span class="leader-card__office">${escapeHtml(member.office)}</span><p class="leader-card__responsibility">${escapeHtml(member.responsibility)}</p>${contact}</div></article>`;
}

leadershipGrid.innerHTML = leadershipData.map(renderLeaderCard).join('');
