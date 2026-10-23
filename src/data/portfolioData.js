import padmeshImg from '../assets/padmesh.jpg';
import certWebDevImg from '../assets/cert_web_dev.jpg';
import certDsaImg from '../assets/cert_dsa.jpg';
import certSqlImg from '../assets/cert_sql.jpg';
import resumePdf from '../assets/Padmesh_Kumar_Singh_Resume.pdf';
import devArenaIdCardImg from '../assets/dev_arena_id_card.jpg';
import devArenaOfferLetterImg from '../assets/dev_arena_offer_letter.jpg';
import devArenaOfferLetterPdf from '../assets/dev_arena_offer_letter.pdf';
import devArenaIdCardPdf from '../assets/dev_arena_id_card.pdf';
import devArenaCertImg from '../assets/dev_arena_cert.png';
import devArenaCertPdf from '../assets/Padmesh_Kumar_Singh_Internship_Certificate.pdf';
import mindmashIdCardImg from '../assets/mindmash_id_card.jpg';
import mindmashRelievingLetterImg from '../assets/mindmash_relieving_letter.png';
import mindmashOfferLetterImg from '../assets/mindmash_offer_letter.png';
import mindmashRelievingLetterPdf from '../assets/mindmash_relieving_letter.pdf';
import mindmashOfferLetterPdf from '../assets/mindmash_offer_letter.pdf';

export const personalInfo = {
  name: "Padmesh Kumar Singh",
  firstName: "Padmesh",
  roleTitle: "Software Developer",
  roleSubtitle: "React & MERN Stack Specialist",
  experienceYears: "2 Years Experience",
  shortPitch: "Software Developer with 2 years of hands-on experience as a React developer, building responsive, high-performance web interfaces and full-stack applications using React, JavaScript, HTML, CSS, Node.js, and MongoDB.",
  bio: "Software Developer with 2 years of hands-on experience as a React developer, building responsive, high-performance web interfaces and full-stack applications using React, JavaScript, HTML, CSS, Node.js, and MongoDB. Focused on AI/ML and full-stack development, with strong problem-solving skills and the ability to write clean, efficient code and deliver user-focused solutions.",
  email: "singhpadmesh90@gmail.com",
  phone: "+91 77058 84551",
  location: "Delhi, India",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
    period: "2022 – 2026"
  },
  degree: "B.Tech in CSE (2022–2026)",
  freelanceStatus: "Available for Full-time Roles & Immediate Joining",
  linkedin: "https://www.linkedin.com/in/padmesh-kumar-singh-518a50261",
  github: "https://github.com/padmesh0812",
  resumePath: resumePdf,
  avatar: padmeshImg,
  highlights: [
    "React.js & Full-Stack Developer",
    "2 Years Hands-on Experience",
    "REST API Integration & Modern UI",
    "Node.js, Express & MongoDB"
  ],
  stats: [
    { label: "Hands-on Experience", value: "2 Years" },
    { label: "Projects Completed", value: "5+" },
    { label: "B.Tech AKTU", value: "72%" }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: "⚛️", level: "Advanced" },
      { name: "JavaScript (ES6+)", icon: "⚡", level: "Advanced" },
      { name: "HTML5 & CSS3", icon: "🌐", level: "Expert" },
      { name: "Material UI", icon: "🎨", level: "Advanced" },
      { name: "Responsive Design", icon: "📱", level: "Expert" },
      { name: "Storybook", icon: "📕", level: "Proficient" }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "REST API Integration", icon: "🔌", level: "Advanced" },
      { name: "Node.js & Express", icon: "🟢", level: "Advanced" },
      { name: "MongoDB & Atlas", icon: "🍃", level: "Advanced" },
      { name: "SQL & MySQL", icon: "🗄️", level: "Advanced" },
      { name: "JSON & JWT Auth", icon: "🔐", level: "Advanced" },
      { name: "Java & C", icon: "☕", level: "Proficient" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "🐙", level: "Advanced" },
      { name: "GitHub", icon: "💻", level: "Advanced" },
      { name: "VS Code", icon: "📝", level: "Expert" },
      { name: "Cloudflare & Vite", icon: "⚡", level: "Advanced" },
      { name: "Excel", icon: "📊", level: "Proficient" }
    ]
  },
  {
    category: "AI Tools & Modern Workflow",
    items: [
      { name: "ChatGPT", icon: "🤖", level: "Expert" },
      { name: "Claude", icon: "🧠", level: "Expert" },
      { name: "Cursor", icon: "💻", level: "Expert" },
      { name: "AI/ML Focused Dev", icon: "🚀", level: "Advanced" }
    ]
  }
];

export const experienceData = {
  personal: [
    {
      id: "dentist-at-door",
      type: "personal",
      part: "Part 1 · Personal",
      period: "2024",
      role: "Frontend Developer / Core Contributor",
      organization: "Dentist at Door",
      badge: "Startup Project",
      badgeClass: "exp-badge-personal",
      description: "Designed and developed an on-demand mobile dental care platform delivering dental healthcare services via fully-equipped dental vans for elderly and rural populations.",
      projectName: "Dentist at Door Startup Web Platform",
      projectDetails: "Implemented online appointment booking, patient data workflows, and responsive UI components. Deployed live on Netlify.",
      tags: ["HTML5", "CSS3", "JavaScript", "Healthcare", "Netlify", "UI/UX", "Startup"],
      link: "https://dentistatdoor.netlify.app/"
    },
    {
      id: "one-step-more",
      type: "personal",
      part: "Part 1 · Personal",
      period: "2024",
      role: "Full Stack & Web Developer",
      organization: "One Step More",
      badge: "Client Project · Live",
      badgeClass: "exp-badge-personal",
      description: "Engineered and delivered a comprehensive web application for a client, tailored to business requirements, thoroughly tested, and successfully handed over to the client in production.",
      projectName: "One Step More Client Web Application",
      projectDetails: "Built a fully responsive, modern user interface with modular component architecture, backend integration, and seamless user experience. Currently live and operational.",
      tags: ["React", "JavaScript", "CSS3", "Client Project", "Handover to Client", "Live Production", "Responsive UI"],
      link: "https://www.onestepmore.in"
    }
  ],
  internships: [
    {
      id: "developer-arena",
      type: "internship",
      part: "Part 2 · Internship",
      period: "Internship",
      role: "Web Developer Intern",
      organization: "Developer Arena",
      badge: "Internship",
      badgeClass: "exp-badge-internship",
      description: "Completed web development internship at Developer Arena where I designed, developed, and deployed an interactive personal developer portfolio website.",
      projectName: "Personal Developer Portfolio & Web Showcase",
      projectDetails: "Created responsive layouts, modern interactive components, CSS animations, and optimized asset delivery for desktop and mobile devices.",
      tags: ["HTML5", "CSS3", "JavaScript", "React", "Portfolio", "UI/UX", "Responsive Design"],
      link: "https://github.com/padmesh0812"
    },
    {
      id: "qspiders-jspiders",
      type: "internship",
      part: "Part 2 · Internship",
      period: "Sep 2025 – Feb 2026",
      role: "Full Stack Software Developer Trainee",
      organization: "QSpiders & JSpiders",
      badge: "Training & Internship",
      badgeClass: "exp-badge-internship",
      description: "Completed comprehensive software engineering training and internship covering full stack technologies from front-of-house UI engineering to enterprise backend architecture.",
      projectName: "Full Stack Development (Java, React & MySQL)",
      projectDetails: "Trained in HTML, CSS, JavaScript, and React for frontend development; Core & Advanced Java for backend engineering; and relational database management and schema design with MySQL.",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Java", "MySQL", "Full Stack Development"],
      link: null
    },
    {
      id: "mindmash-data-labs",
      type: "internship",
      part: "Part 2 · Internship",
      period: "19 June 2026 – 19 Oct 2026",
      role: "Software Developer Intern",
      organization: "Mindmash Data Labs",
      badge: "SaaS Platform Internship",
      badgeClass: "exp-badge-internship",
      description: "Contributed to Mindmash Data Labs' core internal product: 'Restaurant-SaaS Platform' — a modern QR code-based table ordering system for restaurants and hospitality venues.",
      projectName: "Restaurant-SaaS Platform (QR Code Table Ordering System)",
      projectDetails: "Engineered the Restaurant Owner Management module (live orders, table management, sales analytics) and the Customer Digital Menu module through which diners can scan a QR code on any table and order foods and snacks seamlessly from their phones.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "QR Code Ordering", "Restaurant SaaS", "REST APIs", "Full Stack"],
      link: null
    }
  ]
};

export const experienceTimeline = [
  ...experienceData.personal,
  ...experienceData.internships
];


export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "IEC College of Engineering and Technology",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
    period: "2022 – 2026",
    status: "Undergraduate",
    score: "Pursuing (72%)",
    description: "Four-year Bachelor of Technology program in Computer Science & Engineering with core coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Object-Oriented Software Engineering."
  },
  {
    degree: "Senior Secondary Education (Class XII) — PCM",
    institution: "Naga Ji Saraswati Vidya Mandir Sr. Sec. School, Maldepur, Ballia",
    university: "Central Board of Secondary Education (CBSE)",
    period: "2022",
    status: "Passed",
    score: "73%",
    description: "Senior secondary education under CBSE board with Physics, Chemistry, and Mathematics (PCM), developing strong quantitative reasoning, analytical thinking, and scientific problem-solving abilities."
  },
  {
    degree: "Secondary School Examination (Class X)",
    institution: "Naga Ji Saraswati Vidya Mandir Sr. Sec. School, Maldepur, Ballia",
    university: "Central Board of Secondary Education (CBSE)",
    period: "2020",
    status: "Passed",
    score: "85%",
    description: "Completed secondary education under CBSE board with 85% aggregate, building a strong academic foundation across Mathematics, Science, Social Sciences, and English."
  }
];

export const certifications = [
  {
    id: "web-dev",
    name: "Complete Web Development Course",
    platform: "Udemy",
    instructor: "Hitesh Choudhary",
    date: "Dec 19, 2024",
    hours: "77.5 hrs",
    image: certWebDevImg,
    details: "Udemy — Hitesh Choudhary · Dec 19, 2024 · 77.5 hrs",
    badgeClass: "udemy"
  },
  {
    id: "dsa",
    name: "Mastering Data Structures & Algorithms (C / C++)",
    platform: "Udemy",
    instructor: "Abdul Bari",
    date: "Nov 17, 2024",
    hours: "58.5 hrs",
    image: certDsaImg,
    details: "Udemy — Abdul Bari · Nov 17, 2024 · 58.5 hrs",
    badgeClass: "udemy"
  },
  {
    id: "sql",
    name: "SQL (Basic) — Certificate of Accomplishment",
    platform: "HackerRank",
    instructor: "HackerRank",
    date: "Nov 15, 2025",
    hours: "Credential ID: AFE27C383E34",
    image: certSqlImg,
    details: "HackerRank Skill Certification · Nov 15, 2025 · ID: AFE27C383E34",
    badgeClass: "hackerrank"
  }
];

export const companyCredentials = [
  {
    companyId: "developer-arena",
    companyName: "The Developers Arena",
    badge: "Company 1 · Virtual Internship",
    role: "Web Developer Intern",
    period: "Jul 10, 2025 – Jan 10, 2026",
    idNumber: "EMP20250710-059",
    description: "Virtual Web Development Internship Program focused on portfolio architecture, modern frontend engineering, and responsive UI components.",
    documents: [
      {
        id: "dev-arena-id-card",
        type: "internship_id",
        category: "Identity Credential",
        title: "Professional Intern ID Card",
        company: "The Developers Arena",
        role: "Web Developer Intern",
        date: "Jul 10, 2025 – Jan 10, 2026",
        badge: "Intern ID Card",
        badgeClass: "badge-cert",
        image: devArenaIdCardImg,
        pdfLink: devArenaIdCardPdf,
        details: "The Developers Arena · ID: EMP20250710-059 · Valid to Jan 10, 2026",
        description: "Official Virtual Internship Program ID Card (ID: EMP20250710-059), validating 6-month batch enrollment and web developer intern credentials.",
        status: "Verified Credential"
      },
      {
        id: "dev-arena-offer-letter",
        type: "offer_letter",
        category: "Offer Letter",
        title: "Official Offer of Internship",
        company: "The Developers Arena",
        role: "Web Developer Intern",
        date: "July 10, 2025",
        badge: "Offer of Internship",
        badgeClass: "badge-lor",
        image: devArenaOfferLetterImg,
        pdfLink: devArenaOfferLetterPdf,
        details: "The Developers Arena · Ref: EMP20250710-059 · July 10, 2025",
        description: "Formal offer of 6-month web development internship signed by Founder & CEO Namanand Maske, detailing project milestones and learning structure.",
        status: "Verified Document"
      },
      {
        id: "developer-arena-cert",
        type: "internship_cert",
        category: "Internship Certificate",
        title: "Certificate of Internship Completion",
        company: "The Developers Arena",
        role: "Web Developer Intern",
        date: "January 09, 2026",
        badge: "Internship Certificate",
        badgeClass: "badge-cert",
        image: devArenaCertImg,
        pdfLink: devArenaCertPdf,
        details: "The Developers Arena · ID: CERT-202610-EMP20250710-059 · Jan 09, 2026",
        description: "Official Certificate of Internship Completion in Web Development (6 Months) awarded in recognition of outstanding performance, technical excellence, and project delivery.",
        status: "Verified Credential",
        verificationUrl: "https://www.thedevelopersarena.com/verify?id=CERT-202610-EMP20250710-059"
      }
    ]
  },
  {
    companyId: "mindmash-data-labs",
    companyName: "Mindmash Data Labs",
    badge: "Company 2 · SaaS Platform Engineering",
    role: "Software Developer Intern",
    period: "19 June 2026 – 21 Oct 2026",
    idNumber: "MMDL-2007",
    description: "Full-Stack Software Developer Internship contributing to the company's core internal Restaurant-SaaS QR table ordering system.",
    documents: [
      {
        id: "mindmash-id-card",
        type: "internship_id",
        category: "Identity Credential",
        title: "Employee Identity Card",
        company: "Mindmash Data Labs",
        role: "Software Developer Intern",
        date: "2026",
        badge: "Employee ID Card",
        badgeClass: "badge-cert",
        image: mindmashIdCardImg,
        pdfLink: null,
        details: "Mindmash Data Labs · Employee Code: MMDL-2007 · Jodhpur, Rajasthan",
        description: "Corporate identity card issued by Mindmash Data Labs verifying designation as Software Developer Intern (Code: MMDL-2007) and company email credentials.",
        status: "Verified Credential"
      },
      {
        id: "mindmash-offer-letter",
        type: "offer_letter",
        category: "Offer Letter",
        title: "Internship Appointment & Offer Letter",
        company: "Mindmash Data Labs",
        role: "Software Developer Intern",
        date: "June 2026",
        badge: "Appointment Letter",
        badgeClass: "badge-cert",
        image: mindmashOfferLetterImg,
        pdfLink: mindmashOfferLetterPdf,
        details: "Mindmash Data Labs · Ref: MMDL/COF/2011 · Greater Noida Office",
        description: "Official 5-page employment appointment and offer letter detailing engineering responsibilities and compensation package (Rs. 4,00,000 CTC).",
        status: "Verified Document"
      },
      {
        id: "mindmash-relieving-letter",
        type: "lor",
        category: "Recommendation Letter",
        title: "Experience & Relieving Letter (LOR)",
        company: "Mindmash Data Labs",
        role: "Software Developer Intern",
        date: "21 October 2026",
        badge: "Experience & Relieving Letter",
        badgeClass: "badge-lor",
        image: mindmashRelievingLetterImg,
        pdfLink: mindmashRelievingLetterPdf,
        details: "Mindmash Data Labs · Ref: MMDL-EL-2026-007 · Signed by Director",
        description: "Official Experience and Relieving Letter signed by Manju Rathore (Director), certifying tenure as Software Developer Intern on the Restaurant-SaaS Platform.",
        status: "Verified Document"
      }
    ]
  },
  {
    companyId: "qspiders-jspiders",
    companyName: "QSpiders & JSpiders",
    badge: "Specialization · Full Stack Training",
    role: "Full Stack Developer Trainee",
    period: "Sep 2025 – Feb 2026",
    idNumber: "Full Stack Track",
    description: "Rigorous software engineering training and practical project development covering Java, React, JavaScript, HTML5, CSS3, and MySQL database management.",
    documents: [
      {
        id: "qspiders-cert",
        type: "internship_cert",
        category: "Internship Certificate",
        title: "Full Stack Software Development Certificate",
        company: "QSpiders & JSpiders",
        role: "Full Stack Developer Trainee",
        date: "Feb 2026",
        badge: "Training & Internship",
        badgeClass: "badge-cert",
        image: null,
        pdfLink: null,
        details: "QSpiders & JSpiders · Full Stack Java, React & MySQL · Feb 2026",
        description: "Official certificate verifying completed industry training and practical projects in Java, React, JavaScript, and MySQL.",
        status: "Ready for Attachment"
      }
    ]
  }
];

export const internshipCredentials = companyCredentials.flatMap(c => c.documents);



