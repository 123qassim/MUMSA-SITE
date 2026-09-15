import {
  announcements,
  darsaSchedule,
  eventData,
  leadershipData,
  masjidActivities,
  prayerTimetable,
  programmeData,
  quranProgrammes,
  resourceData
} from './data.js';

const localCollections = {
  announcements,
  darsaSchedule,
  events: eventData,
  executives: leadershipData,
  masjidActivities,
  prayerTimetable,
  programmes: programmeData,
  quranProgrammes,
  resources: resourceData
};

/*
 * API seam: replace this function with fetch('/api/...') when a backend exists.
 * Keep collection names and entity fields stable so UI renderers do not change.
 */
export async function getCollection(collectionName) {
  const collection = localCollections[collectionName];
  if (!collection) {
    throw new Error(`Unknown MUMSA data collection: ${collectionName}`);
  }
  return collection;
}
