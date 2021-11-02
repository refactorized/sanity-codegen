const client = require('../sanityClient');

const query = '*[_type == "siteConfig"]';

const footerConfig = {
  col1: [
    {title: 'Our Treatment', slug: {current: 'treatment'}},
    {
      title: 'The Riggs Difference',
      slug: {current: 'treatment/the-riggs-difference'},
    },
    {title: 'What We Treat', slug: {current: 'treatment/what-we-treat'}},
    {title: 'Who We Treat', slug: {current: 'treatment/who-we-treat'}},
    {
      title: 'Your Treatment Experience',
      slug: {current: 'treatment/your-treatment-experience'},
    },
    {
      title: 'Patient Outcomes & Results',
      slug: {current: 'treatment/patient-outcomes-results'},
    },
  ],
  col2: [
    {title: 'Admissions', slug: {current: 'admissions'}},
    {
      title: 'Treatment Center',
      slug: {current: 'admissions/treatment-center'},
    },
    {
      title: 'Admissions Process',
      slug: {current: 'admissions/admissions-process'},
    },
    {
      title: 'Admissions Checklist',
      slug: {current: 'admissions/admissions-checklist'},
    },
    {
      title: 'Speak With Admissions',
      slug: {current: 'admissions/speak-with-admissions'},
    },
  ],
  col3: [
    {title: 'About', slug: {current: 'about'}},
    {title: 'Mission & Vision', slug: {current: 'about/mission-vision'}},
    {title: 'History & Facts', slug: {current: 'about/history-facts'}},
    {
      title: 'The Campus Experience',
      slug: {current: 'about/the-campus-experience'},
    },
    {title: 'Our Team ', slug: {current: 'about/our-team'}},
    {title: 'Careers', slug: {current: 'about/careers'}},
    {title: 'Give To Riggs', slug: {current: 'about/give-to-riggs'}},
  ],
  col4: [
    {
      title: 'Education and Research',
      slug: {current: 'education-and-research'},
    },
    {
      title: 'Erikson Institute',
      slug: {current: 'education-and-research/erikson-institute'},
    },
    {
      title: 'Education & Training',
      slug: {current: 'education-and-research/education-training'},
    },
    {title: 'Research', slug: {current: 'education-and-research/research'}},
    {title: 'Advocacy', slug: {current: 'education-and-research/advocacy'}},
  ],
  col5: [
    {title: 'Events', slug: {current: 'events'}},
    {title: 'News', slug: {current: 'news'}},
    {title: 'Contact Us', slug: {current: 'contact'}},
    {title: 'Donate', slug: {current: 'donate'}},
  ],
};

const footerConfigPatch = {
  set: {
    footerConfig,
  },
};

async function migrate() {
  const results = await client.fetch(query);
  const configId = results[0]._id;
  const tx = client.transaction();
  tx.patch(configId, footerConfigPatch);
  tx.commit();
}

migrate();
