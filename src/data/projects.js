import projectOne from '../assets/project-1.svg'
import projectTwo from '../assets/project-2.svg'
import projectThree from '../assets/project-3.svg'
import projectFour from '../assets/project-4.svg'

export const projects = [
  {
    slug: 'global-bank-modernization',
    title: 'Global Bank Modernization',
    description: 'A secure digital banking suite with omnichannel onboarding.',
    category: 'Dashboards',
    tag: 'Analytics',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: projectOne,
    results: 'Reduced onboarding time by 42% and improved digital adoption by 35%.',
  },
  {
    slug: 'supply-chain-ai-integration',
    title: 'Supply Chain AI Integration',
    description: 'Data platform to predict demand and automate procurement.',
    category: 'E-commerce',
    tag: 'E-commerce',
    technologies: ['Python', 'TensorFlow', 'Power BI'],
    image: projectTwo,
    results: 'Increased forecast accuracy to 92% and saved 18% in logistics costs.',
  },
  {
    slug: 'telehealth-platform-launch',
    title: 'Telehealth Platform Launch',
    description: 'Mobile-first healthcare platform for remote consultations.',
    category: 'Mobile Apps',
    tag: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Twilio'],
    image: projectThree,
    results: 'Enabled 25,000+ remote visits in the first six months.',
  },
  {
    slug: 'retail-commerce-rebrand',
    title: 'Retail Commerce Rebrand',
    description: 'Full digital overhaul for a regional retail brand.',
    category: 'Websites',
    tag: 'Portfolio',
    technologies: ['Figma', 'Shopify Plus', 'HubSpot'],
    image: projectFour,
    results: 'Lifted online revenue by 58% with a premium brand redesign.',
  },
]
