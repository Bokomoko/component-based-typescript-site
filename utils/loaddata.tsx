import { Job } from '../interfaces/iramaitypes';

export const job001: Job = {
  title: 'Remote React/Node Developer Jobs',
  description:
    'At Iramai, we are looking for a Full Stack Developer specializing in React and Node.js who will be responsible for the entire web development process to deliver highly scalable, customer-centric, and performant web applications.',
  cta: 'Apply as React/Node Developer',
  jobURL: '#',
  listOfResponsibilities: [
    'Design and build scalable APIs',
    'Write clean, efficient, and reusable code',
    'Develop highly efficient user interface components',
    'Analyze website performance and drive improvements',
    'Collaborate with cross-functional team members to design, develop, review and test applications',
    'Stay updated with emerging technologies and apply them to the operational activities in the organization',
    'Experience in cross-browser compatibility, and the responsive design of applications',
    'Proficiency in code versioning tools, such as Git',
    'Expert understanding of server-side logic and fron-end performance optimization',
    'Experience in Unix/Linux environments, including basic commands and scripting',
  ],

  listOfRequirements: [
    'Bachelor´s/Master´s degree in Computer Science (or equivalent experience)',
    '3+ years of experience in web development(we make rare exceptions if you are highly skilled)',
    'Proficiency in React.js, Node.js, JavaScriipt, HTML and CSS',
    'Experience with REST APIs and third-party libraries',
    'Fluency in English and the communications skills of effortlessly collaborate with engineering managers at US software companies',
    'The ability to work full-time (40 hours/week0 concurrently with US time zones for a minimum of 4 hous/day',
  ],
  listOfSkills: [
    'Experience in cross-browser compatibility, and the responsive design of applications',
    'Proficiency in code versioning tools, such as Git',
    'Expert understanding of server-side logic and front-end performance optimization',
    'Experience in Unix/Linux environments, including basic commands and scripting',
  ],
};

export const testmList = [
  {
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    name: 'Hadji',
    country: 'Algeria',
    jobTitle: 'Fullstack Developer',
    text: `
    I have previously worked at oDeks and Elance (now popularly known as Upwork)
    for more than 5 years, but the pivotal moment in my career came when i 
    joined the global team of Iramai remote engineers in 2020. 
    I did not imagine that the jobs I was offered would come with 
    such stability and prominence. 
    Apply to be one of among many Iramai developers. 
    It wil change your life, like it did mine!`,
  },
  {
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
    name: 'Chandra',
    country: 'Kafiristan',
    jobTitle: 'Full Stack Dev',
    text: 'In Iramai I´ve found purpose for my life. I didn´t walk quietly into that night',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Percival',
    country: 'Camelot',
    jobTitle: 'Knight in armor',
    text: 'Don´t ask who the Graal serves. It serves you, Mylord',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    name: 'Thor',
    country: 'Asgard',
    jobTitle: 'God of Thunder',
    text: 'If neither money nor violence solved the issue probably not enough was applied',
  },
];

// load list articles about/from Iramai in other sites
export const jobArticles = [
  {
    quote:
      'As remote work continues to solidify its place as a critical aspect of how business exist these days, a startup ...',
    articleUrl:
      'https:https://www.mckinsey.com/featured-insights/future-of-work/whats-next-for-remote-work-an-analysis-of-2000-tasks-800-jobs-and-nine-countries',
  },
  {
    quote:
      'As each state has its own rules on taxing remote workers, issues of lost of tax income for governments may be ...',
    articleUrl:
      'https://www.nytimes.com/2021/03/12/your-money/taxes/2020-taxes-work-from-home.html',
  },
  {
    quote:
      'The quick and smart brown fox jumps over the lazy dog. And this simple gestures started a war ...',
    articleUrl: 'https://www.rover.com/blog/the-truth-about-dogs-foxes-in/',
  },
];

// load list of job suggestions based on career
export const basedOnCareer = [
  { jobTitle: 'Engineer', jobPage: '#' },
  { jobTitle: 'Architect', jobPage: '#' },
  { jobTitle: 'Tech Lead', jobPage: '#' },
  { jobTitle: 'Tech Lead Manager', jobPage: '#' },
  { jobTitle: 'Engineer Director', jobPage: '#' },
  { jobTitle: 'Senior Engineer', jobPage: '#' },
  { jobTitle: 'Senior Architect', jobPage: '#' },
  { jobTitle: 'Senior Tech Lead', jobPage: '#' },
  { jobTitle: 'Senior Tech Lead Manager', jobPage: '#' },
  { jobTitle: 'VP of Engineering', jobPage: '#' },
];

// load list of suggestions based on roles
export const basedOnYourRole = [
  { jobTitle: 'Fullstack', jobPage: '#' },
  { jobTitle: 'Frontend', jobPage: '#' },
  { jobTitle: 'Backend', jobPage: '#' },
  { jobTitle: 'Mobile', jobPage: '#' },
  { jobTitle: 'AI/ML', jobPage: '#' },
  { jobTitle: 'DevOps', jobPage: '#' },
];

// load list of suggestions based on skills
export const basedOnYourSkills = [
  { jobTitle: 'React Native', jobPage: '#' },
  { jobTitle: 'Ruby on Rails', jobPage: '#' },
  { jobTitle: 'Python', jobPage: '#' },
  { jobTitle: 'PHP', jobPage: '#' },
  { jobTitle: 'Java', jobPage: '#' },
  { jobTitle: 'Vue.js', jobPage: '#' },
  { jobTitle: 'Golang', jobPage: '#' },
];

// load list of reasons for working at Iramai (I personnaly like them all)
export const listOfReasons = [
  {
    title: 'Work from anywhere',
    text: 'We believe that talent is universal and opportunity should be too. Work from wherever you want.',
    icon: './icons/wholeworld.svg',
  },
  {
    title: 'Better salary',
    text: 'Iramai recommends compensation for developers that far exceed what they would make in their local economies.',
    icon: './icons/dolarsign.svg',
  },
  {
    title: 'Work-life balance',
    text: 'We allow our engineers flexible working hours as work-life balance is an essential part of our developers wellbeing.',
    icon: './icons/family.svg',
  },
  {
    title: 'Community',
    text: 'Be a part of an exclusive, global network of top tech leads, engineering managers and software engineers.',
    icon: './icons/community.svg',
  },
];
