/*
 * Static frontend data contracts.
 *
 * These exports are the temporary data source for GitHub Pages. A future API
 * adapter can return the same entity shapes without changing page renderers.
 */

export const siteConfig = {
  name: 'Maseno University Muslim Students Association',
  shortName: 'MUMSA',
  university: 'Maseno University',
  location: 'Maseno University, Kenya',
  phone: '0746 373 477',
  email: 'otahacharles@gmail.com'
};

/*
 * Future API contracts. These describe the fields expected by future views
 * without creating placeholder records or requiring a backend today.
 */
export const entityContracts = {
  users: ['id', 'fullName', 'email', 'phone', 'role'],
  members: ['id', 'userId', 'admissionNumber', 'course', 'yearOfStudy', 'hostel', 'status'],
  executives: ['id', 'name', 'office', 'responsibility', 'photograph', 'contactUrl'],
  events: ['id', 'title', 'date', 'time', 'location', 'description', 'category', 'image', 'registrationUrl', 'status'],
  programmes: ['id', 'title', 'description', 'category', 'image', 'upcomingDate', 'location'],
  news: ['id', 'title', 'summary', 'category', 'publishedAt', 'image', 'url'],
  announcements: ['id', 'title', 'summary', 'publishedAt', 'audience', 'url'],
  resources: ['id', 'title', 'category', 'description', 'author', 'date', 'type', 'url'],
  prayerTimes: ['id', 'prayer', 'adhan', 'congregation', 'note', 'effectiveDate'],
  registrations: ['id', 'memberId', 'submittedAt', 'status'],
  attendance: ['id', 'eventId', 'memberId', 'recordedAt', 'status'],
  notifications: ['id', 'title', 'message', 'audience', 'publishedAt', 'readAt']
};

export const programmeData = [
  { title: 'Darsa', description: 'Regular lessons that make Islamic knowledge accessible and relevant to student life.', category: 'Islamic Development' },
  { title: 'Halaqahs', description: 'Small, welcoming circles for Qur’an, reflection, discussion and spiritual growth.', category: 'Islamic Development' },
  { title: 'Qur’an programmes', description: 'Opportunities to improve recitation, understanding and connection with the Qur’an.', category: 'Islamic Development' },
  { title: 'Islamic seminars', description: 'Focused learning sessions with speakers and teachers on faith and contemporary student life.', category: 'Islamic Development' },
  { title: 'Islamic reminders', description: 'Short reminders that encourage worship, good character and purposeful living.', category: 'Islamic Development' },
  { title: 'Ramadan programmes', description: 'Community activities that help students make the most of Ramadan on campus.', category: 'Islamic Development' },
  { title: 'Hospital visits', description: 'Compassionate visits and support for students and members of the community who are unwell.', category: 'Student Welfare' },
  { title: 'Family visits', description: 'Thoughtful visits that strengthen relationships and support students beyond campus.', category: 'Student Welfare' },
  { title: 'Charity initiatives', description: 'Student-led efforts to share resources and respond to needs with dignity.', category: 'Student Welfare' },
  { title: 'Student welfare', description: 'A listening and support network for Muslim students navigating university life.', category: 'Student Welfare' },
  { title: 'Revert support', description: 'A welcoming support system for students learning and growing in Islam.', category: 'Student Welfare' },
  { title: 'Academic mentorship', description: 'Peer encouragement, study support and practical habits for academic progress.', category: 'Academic & Personal Development' },
  { title: 'Career guidance', description: 'Conversations and guidance that help students prepare for meaningful work and service.', category: 'Academic & Personal Development' },
  { title: 'Leadership development', description: 'Experiences that build confidence, responsibility, teamwork and ethical leadership.', category: 'Academic & Personal Development' },
  { title: 'Skills development', description: 'Practical learning opportunities that help students grow personally and professionally.', category: 'Academic & Personal Development' },
  { title: 'First-year orientation', description: 'A supportive introduction to Maseno University, MUMSA and Muslim student life.', category: 'Academic & Personal Development' },
  { title: 'Sports', description: 'Healthy, friendly activities that encourage teamwork, wellbeing and connection.', category: 'Social & Recreational' },
  { title: 'Brothers’ activities', description: 'Spaces for brothers to connect, learn, relax and build positive friendships.', category: 'Social & Recreational' },
  { title: 'Sisters’ activities', description: 'Spaces for sisters to connect, learn, relax and build positive friendships.', category: 'Social & Recreational' },
  { title: 'Hikes', description: 'Outdoor experiences for reflection, wellbeing and community building.', category: 'Social & Recreational' },
  { title: 'Community gatherings', description: 'Welcoming gatherings that bring Muslim students together in unity and fellowship.', category: 'Social & Recreational' }
];

export const eventData = [
  { title: 'MUMSA Welcome Gathering', date: '12 October 2026', time: '4:00 PM', location: 'Maseno University campus', description: 'Meet fellow Muslim students, learn about MUMSA and discover ways to take part this semester.', category: 'Community', image: null, registrationUrl: '../register/index.html', status: 'Upcoming' },
  { title: 'Weekly Halaqah', date: 'Every Thursday', time: 'After Maghrib', location: 'Maseno Masjid', description: 'A welcoming circle for Qur’an, reflection, beneficial knowledge and spiritual growth.', category: 'Islamic Development', image: null, registrationUrl: null, status: 'Ongoing' },
  { title: 'First-Year Orientation', date: 'Date to be announced', time: 'To be announced', location: 'Maseno University campus', description: 'Practical guidance and community support for Muslim students beginning their Maseno journey.', category: 'Student Support', image: null, registrationUrl: '../first-year-hub/index.html', status: 'Upcoming' },
  { title: 'Academic Mentorship Session', date: 'Date to be announced', time: 'To be announced', location: 'To be announced', description: 'Encouragement, study strategies and peer support to help students pursue academic excellence.', category: 'Academic & Personal Development', image: null, registrationUrl: null, status: 'Upcoming' },
  { title: 'Student Welfare Check-In', date: 'Date to be announced', time: 'To be announced', location: 'MUMSA student space', description: 'A supportive conversation about wellbeing, belonging and navigating student life.', category: 'Student Welfare', image: null, registrationUrl: null, status: 'Upcoming' },
  { title: 'MUMSA Community Sports Day', date: 'Completed event', time: '—', location: 'Maseno University', description: 'A friendly day of sport, fellowship and healthy connection among Muslim students.', category: 'Social & Recreational', image: null, registrationUrl: null, status: 'Completed' }
];

export const leadershipData = Array.from({ length: 6 }, () => ({
  name: 'Name to be confirmed',
  office: 'Office to be confirmed',
  responsibility: 'The responsibility for this committee role will be published with the confirmed 2026/2027 roster.',
  photograph: null,
  contactUrl: null,
  placeholder: true
}));

export const resourceData = [
  { title: "Qur'an reflection guide", category: "Qur'an", description: 'A short original guide for personal reflection and consistent Qur’an engagement.', author: 'MUMSA Learning Team', date: 'To be confirmed', type: 'Guide', url: null },
  { title: 'Hadith study starter', category: 'Hadith', description: 'Suggested questions and habits for beginning a responsible Hadith study circle.', author: 'MUMSA Learning Team', date: 'To be confirmed', type: 'Study guide', url: null },
  { title: 'Aqeedah discussion notes', category: 'Aqeedah', description: 'Original discussion prompts introducing foundational themes for student learning.', author: 'MUMSA Learning Team', date: 'To be confirmed', type: 'Notes', url: null },
  { title: 'Fiqh for student life', category: 'Fiqh', description: 'A placeholder for verified, student-focused guidance and references.', author: 'To be confirmed', date: 'To be confirmed', type: 'Article', url: null },
  { title: 'Daily duas and adhkar', category: 'Duas & Adhkar', description: 'A curated placeholder for authorised duas and remembrance resources.', author: 'To be confirmed', date: 'To be confirmed', type: 'Collection', url: null },
  { title: 'Faith and academic excellence', category: 'Islamic Articles', description: 'An original MUMSA article concept on connecting worship, discipline and university life.', author: 'MUMSA Editorial Team', date: 'To be confirmed', type: 'Article', url: null },
  { title: 'Living Islam on campus', category: 'Lectures', description: 'A placeholder for an authorised lecture recording or event replay.', author: 'Speaker to be confirmed', date: 'To be confirmed', type: 'Video', url: null },
  { title: 'Study planning worksheet', category: 'Study Materials', description: 'An original planning resource to help students balance classes, revision and worship.', author: 'MUMSA Academic Team', date: 'To be confirmed', type: 'Worksheet', url: null },
  { title: 'MUMSA student resource pack', category: 'PDF Resources', description: 'A placeholder for an approved downloadable PDF prepared by MUMSA.', author: 'MUMSA', date: 'To be confirmed', type: 'PDF', url: null }
];

export const prayerTimetable = [
  { prayer: 'Fajr', adhan: null, congregation: null, note: 'Daily prayer' },
  { prayer: 'Dhuhr', adhan: null, congregation: null, note: 'Daily prayer' },
  { prayer: 'Asr', adhan: null, congregation: null, note: 'Daily prayer' },
  { prayer: 'Maghrib', adhan: null, congregation: null, note: 'At sunset' },
  { prayer: 'Isha', adhan: null, congregation: null, note: 'Daily prayer' }
];

export const darsaSchedule = [
  { title: 'Regular darsa', detail: 'Day and time to be announced' },
  { title: 'Weekly reminder', detail: 'Check official masjid announcements' }
];

export const quranProgrammes = [
  { title: "Qur'an reading circle", detail: 'Schedule to be confirmed' },
  { title: 'Memorisation and recitation', detail: 'Schedule to be confirmed' }
];

export const announcements = [
  { title: 'Current masjid notices', detail: 'Official announcements will be published here.' },
  { title: 'Prayer timetable updates', detail: 'Confirm daily changes through the masjid noticeboard or MUMSA announcements.' }
];

export const masjidActivities = [
  { title: 'Islamic learning', detail: 'Darsa, reminders and Qur’an programmes.' },
  { title: 'Community worship', detail: 'Daily prayers, Jumu’ah and Ramadan activities.' },
  { title: 'Student connection', detail: 'Welcoming Muslim students into the masjid community.' }
];
