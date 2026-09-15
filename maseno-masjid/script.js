import { getCollection } from '../js/data-source.js';

const [
  prayerTimetable,
  darsaSchedule,
  quranProgrammes,
  announcements,
  masjidActivities
] = await Promise.all([
  getCollection('prayerTimetable'),
  getCollection('darsaSchedule'),
  getCollection('quranProgrammes'),
  getCollection('announcements'),
  getCollection('masjidActivities')
]);

function displayValue(value) {
  return value || 'To be confirmed';
}

function renderPrayerTimetable() {
  const container = document.querySelector('.js-prayer-timetable');
  if (!container) return;
  container.innerHTML = prayerTimetable.map((item) => `<tr><th scope="row">${item.prayer}</th><td>${displayValue(item.adhan)}</td><td>${displayValue(item.congregation)}</td><td>${item.note}</td></tr>`).join('');
}

function renderSchedule(selector, records) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = records.map((item) => `<div class="schedule-item"><strong>${item.title}</strong><span>${item.detail}</span></div>`).join('');
}

function renderList(selector, records) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = records.map((item) => `<article class="masjid-list-item"><strong>${item.title}</strong><p>${item.detail}</p></article>`).join('');
}

renderPrayerTimetable();
renderSchedule('.js-darsa-schedule', darsaSchedule);
renderSchedule('.js-quran-programmes', quranProgrammes);
renderList('.js-announcements', announcements);
renderList('.js-masjid-activities', masjidActivities);
