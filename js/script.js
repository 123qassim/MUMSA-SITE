// Recent activities section
async function loadRecentActivities() {

  const container = document.getElementById('recent-activities-container');
  if (!container) return;

  try {
    // Fetch the activities page
    const response = await fetch('./activities/index.html');

    if (!response.ok) {
      throw new Error('Activities page not found');
    }

    const html = await response.text();

    // Parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Get all activity cards
    const cards = doc.querySelectorAll('.activity-card');

    if (cards.length === 0) {
      container.innerHTML = '<p>No recent activities found.</p>';
      return;
    }

    // Clear loading text
    document.querySelector('.recent-activities-loading')?.remove();

    // Get first 3 cards
    const limit = Math.min(3, cards.length);

    for (let i = 0; i < limit; i++) {
      const card = cards[i].cloneNode(true);
      container.appendChild(card);
    }

  } catch (error) {
    console.error('Error loading activities:', error);
    container.innerHTML = '<p>Check back soon for updates.</p>';
  }
}

loadRecentActivities();

// FAQs section
function loadFAQS() {
  const faqsContainer = document.querySelector('.faqs-container');
  if (!faqsContainer) return;

  let faqsGrid = [
    {
      faqQuestion: 'What is the primary objective of MUMSA?',
      faqAnswer: 'To support Muslim students at Maseno University through faith, unity, leadership development, academic support and service.'
    },
    {
      faqQuestion: 'Who can participate in MUMSA activities?',
      faqAnswer: 'All Muslim students at Maseno University are welcome to participate in MUMSA programmes, activities and welfare initiatives.'
    },
    {
      faqQuestion: 'How can I get involved in MUMSA leadership?',
      faqAnswer: 'Attend our programmes, volunteer in our initiatives and watch for announcements about committee opportunities and student representation.'
    }
  ]

  faqsContainer.innerHTML = faqsGrid.map(faq => `
    <div class="faq-container">
      <div class="faq-question-container">
        <p class="faq-question">${faq.faqQuestion}</p>
        <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
      </div>
      <div class="faq-answer-container">
        <p class="faq-answer">${faq.faqAnswer}</p>
      </div>
    </div>
  `).join('');

  /* Select all generated FAQs */
  const faqs = faqsContainer.querySelectorAll('.faq-container');

  faqs.forEach((faq) => {
    const openAnswer = faq.querySelector('.faq-icon');
    const answer = faq.querySelector('.faq-answer-container');
    const icon = faq.querySelector('.faq-icon i');

    openAnswer.addEventListener('click', () => {
      answer.classList.toggle('open');

      if (answer.classList.contains('open')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    });
  });
}

loadFAQS();