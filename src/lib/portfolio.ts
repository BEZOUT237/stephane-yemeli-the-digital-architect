export const profile = {
  name: 'Stéphane YEMELI',
  email: 'yemelink@gmail.com',
  origin: 'Cameroon',
  location: 'Türkiye',
  university: 'Bolu Abant İzzet Baysal University',
  degree: 'Computer Engineering',
  educationPeriod: '2026–2030',
  canonical: 'https://stephane-yemeli.vercel.app',
  github: 'https://github.com/BEZOUT237',
  linkedin: 'https://www.linkedin.com/in/stephane-yemeli-938968261/',
} as const;

export type ProjectCategory = 'Products' | 'Experiments' | 'Concepts';
export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  subtitle: string;
  description: string;
  role: string;
  stack: string[];
  problem: string;
  implementation: string;
  focus: string;
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'livora', name: 'LIVORA', category: 'Products', subtitle: 'Good books. Fewer borders.',
    description: 'An international bookstore making English and French books more accessible in Türkiye.',
    role: 'Co-founder · Software Engineer · Technical Lead',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    problem: 'Finding quality English and French books in Türkiye can be expensive, difficult and time-consuming.',
    implementation: 'Building with co-founder Nikel Feumo. My work covers product direction, full-stack development, authentication, the storefront and administrative catalogue, orders and inventory functionality.',
    focus: 'A relational data model connecting books, authors, publishers, ISBNs and suppliers; keeping the storefront and business operations connected.',
    url: 'https://livora-hub.vercel.app/',
  },
  {
    id: 'skillgap', name: 'SkillGap', category: 'Products', subtitle: 'Turn curiosity into consistency.',
    description: 'AI-powered learning resource recommendations and habit tracking, built around the next step in your learning journey.',
    role: 'Founder · Product Developer', stack: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'AI integrations'],
    problem: 'Knowing what to learn is only the beginning. Finding useful resources and maintaining a consistent habit are equally important.',
    implementation: 'Developed a learning product that brings resource recommendations and habit tracking together.',
    focus: 'Connecting learning needs with relevant resources and consistent practice.',
    url: 'https://skillgap-bheta.vercel.app/', github: 'https://github.com/BEZOUT237/skillgap-bheta',
  },
  {
    id: 'yemelink', name: 'YEMELINK', category: 'Products', subtitle: 'Dream it. Build it. Live it.',
    description: 'My independent technology business: software, digital products, creative services and technology content.',
    role: 'Founder · Technology & Software Development', stack: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    problem: 'Turning ideas into useful digital products requires both technical development and a clear creative identity.',
    implementation: 'Website and application development, product design, branding, creative content and AI-powered solutions through YEMELINK.',
    focus: 'Bringing product development, technical delivery and digital brand direction together.',
    url: 'https://yemelink.vercel.app/',
  },
  {
    id: 'networker', name: 'Networker', category: 'Concepts', subtitle: 'Skills deserve opportunities.',
    description: 'A platform concept connecting practical skills with employment opportunities, including for people without formal qualifications.',
    role: 'Creator · Product Developer', stack: ['React Native', 'Backend development', 'Application architecture'],
    problem: 'Young people with practical skills can face barriers to employment when they lack formal qualifications.',
    implementation: 'A product concept exploring skill-based access to employment. This is not presented as a launched platform.',
    focus: 'Problem discovery, skill matching and application architecture.',
  },
  {
    id: 'piano', name: 'Interactive Piano', category: 'Experiments', subtitle: 'A little code. A little music.',
    description: 'An interactive piano built with vanilla JavaScript, HTML and CSS, without external frameworks.',
    role: 'Creator · Developer', stack: ['JavaScript', 'HTML', 'CSS'],
    problem: 'Bringing musical interaction into a browser with a lightweight application.',
    implementation: 'A piano interface using DOM manipulation, keyboard interaction and application logic.',
    focus: 'Connecting keyboard events to an interactive interface without a framework.',
  },
  {
    id: 'rubik', name: 'Rubik’s Cube', category: 'Experiments', subtitle: 'Think in three dimensions.',
    description: 'An interactive 3×3 Rubik’s Cube web game with real-time feedback.',
    role: 'Creator · Developer', stack: ['HTML', 'CSS', 'JavaScript'],
    problem: 'Translating a physical puzzle into an interactive browser experience.',
    implementation: 'An interactive 3×3 cube with game controls, game logic and real-time feedback.',
    focus: 'Interactive controls and consistent puzzle state.',
  },
  {
    id: 'snake', name: 'Snake Game', category: 'Experiments', subtitle: 'Small game. Real logic.',
    description: 'A browser-based snake game exploring game mechanics, collision detection and frontend interaction.',
    role: 'Creator · Developer', stack: ['Python', 'HTML', 'CSS', 'JavaScript'],
    problem: 'Making a classic game into an interactive software project.',
    implementation: 'A snake game combining game mechanics, collision detection and browser interaction.',
    focus: 'Game state, input and collision detection.',
  },
  {
    id: 'portfolio', name: 'Developer Portfolio', category: 'Experiments', subtitle: 'The experience you’re in.',
    description: 'An interactive engineering portfolio combining authentic storytelling with a carefully built 3D experience.',
    role: 'Designer · Developer', stack: ['React', 'TypeScript', 'TanStack Start', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    problem: 'Communicating the person, product thinking and engineering work behind a list of technologies.',
    implementation: 'A file-routed portfolio with a lazy-loaded 3D scene, accessible navigation, project details and an adapted mobile experience.',
    focus: 'Balancing visual depth with performance, accessibility and reliable deployment.',
    url: 'https://stephane-yemeli.vercel.app/',
  },
];

export const credentials = [
  { name: 'Python Mastery', issuer: 'BTK Akademi', date: 'June 2025', description: 'Building stronger foundations in Python.' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', date: 'December 2024', description: 'Foundations of cybersecurity and security awareness.' },
  { name: 'CyberFirst’26', issuer: 'Web Application Security Training', date: 'Three-day practical training', description: 'Web vulnerabilities, secure development practices, Burp Suite and Web Security Academy.' },
] as const;

export const skillGroups = [
  { title: 'Frontend engineering', status: 'In practice', skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive design', 'Framer Motion'] },
  { title: 'Backend engineering', status: 'In practice', skills: ['Node.js', 'Python', 'REST APIs', 'Authentication', 'PostgreSQL', 'Supabase', 'SQL', 'Database architecture'] },
  { title: 'Development tools', status: 'In practice', skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Figma', 'GitHub Copilot', 'Claude Code', 'AI-assisted development'] },
  { title: 'Product & creative', status: 'In practice', skills: ['UI/UX design', 'Product development', 'Graphic design', 'Video editing', 'Technical content', 'SEO', 'Digital branding'] },
  { title: 'Artificial intelligence', status: 'Developing', skills: ['Python for AI', 'ML fundamentals', 'Deep learning fundamentals', 'LLMs', 'AI API integration', 'AI agents', 'Intelligent applications'] },
  { title: 'Next horizons', status: 'Exploring', skills: ['AI engineering', 'Robotics', 'Intelligent systems', 'Automation', 'React Native'] },
] as const;

export function filterProjects(category: 'All' | ProjectCategory) {
  return category === 'All' ? projects : projects.filter((project) => project.category === category);
}