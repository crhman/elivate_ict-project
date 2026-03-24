import financeImage from '../assets/finance.jpg'
import supplyChainImage from '../assets/supply-chain-ai.png'
import healthcareImage from '../assets/healthcare.jpg'
import retailImage from '../assets/retail and ecommerce.jpg'

export const projects = [
  {
    slug: 'global-bank-modernization',
    title: 'Global Bank Modernization',
    description: 'A secure digital banking suite with omnichannel onboarding.',
    category: 'Dashboards',
    tag: 'Analytics',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: financeImage,
    results: 'Reduced onboarding time by 42% and improved digital adoption by 35%.',
  },
  {
    slug: 'supply-chain-ai-integration',
    title: 'Supply Chain AI Integration',
    description: 'Data platform to predict demand and automate procurement.',
    category: 'E-commerce',
    tag: 'E-commerce',
    technologies: ['Python', 'TensorFlow', 'Power BI'],
    image: supplyChainImage,
    results: 'Increased forecast accuracy to 92% and saved 18% in logistics costs.',
  },
  {
    slug: 'telehealth-platform-launch',
    title: 'Telehealth Platform Launch',
    description: 'Mobile-first healthcare platform for remote consultations.',
    category: 'Mobile Apps',
    tag: 'Mobile App',
    technologies: ['React Native', 'Firebase', 'Twilio'],
    image: healthcareImage,
    results: 'Enabled 25,000+ remote visits in the first six months.',
  },
  {
    slug: 'retail-commerce-rebrand',
    title: 'Retail Commerce Rebrand',
    description: 'Full digital overhaul for a regional retail brand.',
    category: 'Websites',
    tag: 'Portfolio',
    technologies: ['Figma', 'Shopify Plus', 'HubSpot'],
    image: retailImage,
    results: 'Lifted online revenue by 58% with a premium brand redesign.',
  },
]
