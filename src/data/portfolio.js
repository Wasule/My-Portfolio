const portfolio = {
  meta: {
    name: "Gaurav Wasule",
    initials: "GW",
    title: "System Engineer & Developer",
    email: "wasule.gaurav14@gmail.com",
    phone: "+91 7972742493",
    location: "Nagpur, Maharashtra, India",
    linkedin: "https://linkedin.com/in/gauravwasule",
    status: "Open to opportunities",
    roles: [
      "System Engineer @ TCS",
      "Full-Stack Developer",
      "AI & ML Researcher",
      "Published Author",
    ],
    summary:
      "IT professional with 3+ years at Tata Consultancy Services. Built production systems, ML models, and published AI research. The neural network behind you is your guide — click any node.",
    stats: [
      { value: "3+", label: "Years @ TCS" },
      { value: "5+", label: "Projects" },
      { value: "4+", label: "Certifications" },
      { value: "1",  label: "Publication" },
    ],
  },

  experience: [
    {
      period: "Apr 2021 — Apr 2024",
      location: "Gandhinagar, India",
      role: "System Engineer",
      company: "Tata Consultancy Services (TCS)",
      points: [
        "Served as Senior Developer for a prominent US client across all project phases",
        "Led application architecture and database design; utilized JavaScript and advanced DB concepts to enhance project profitability",
        "Oversaw application development, unit testing, and code reviews for production-grade systems",
        "Collaborated across cross-functional teams to produce key project documentation and deliverables",
        "Star Performer — received On-the-Spot Award at TCS Annual Town Hall ceremony",
      ],
    },
    {
      period: "Jun 2019 — Jan 2021",
      location: "Nagpur, India",
      role: "Software Developer",
      company: "Pegasus Pvt. Ltd.",
      points: [
        "Built back-end features using Flask and MySQL for an online advertising market platform",
        "Designed admin-only module with restricted access controls and business logic",
        "Translated stakeholder business scenarios into implemented, tested features",
      ],
    },
  ],

  projects: [
    {
      icon: "[AI]",
      title: "Garbage Identification System (AI)",
      desc: "Android app (Pik-To-Clean) using deep learning on the GINI dataset to detect and segment garbage in geo-tagged images. Real-time monitoring for waste collectors. Published internationally.",
      tags: ["Java", "TensorFlow", "PyTorch", "Deep Learning", "MySQL", "Google Maps API"],
    },
    {
      icon: "[NLP]",
      title: "Enterprise Search Engine (NLP)",
      desc: "Robust search engine for large enterprise databases retrieving information from two distinct data sources. Built for fast, accurate stakeholder data access at scale.",
      tags: ["Python", "Flask", "NLP", "MySQL"],
    },
    {
      icon: "[ML]",
      title: "Academic Analysis (Machine Learning)",
      desc: "Predictive analytics platform on university data to identify at-risk students, generate insightful reports, and enable targeted interventions via a comprehensive dashboard.",
      tags: ["Python", "Flask", "Machine Learning", "MySQL", "Dashboard"],
    },
  ],

  publication: {
    title: "Design and Development of Garbage Identification System Using AI",
    journal: "International Journal of Innovations in Engineering and Science — May 2019",
    desc: "Pik-To-Clean leverages a deep learning architecture trained on the GINI dataset to automatically detect and segment garbage in geo-tagged images, enabling real-time monitoring by waste collectors to promote environmental protection and community involvement.",
  },

  skills: [
    {
      group: "Frontend",
      items: [
        { name: "React", note: "v18" },
        { name: "HTML / CSS" },
        { name: "JavaScript" },
        { name: "UI/UX Design" },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "Node.js", note: "v17" },
        { name: "Python", note: "v3.13" },
        { name: "Flask" },
      ],
    },
    {
      group: "Database",
      items: [{ name: "SQL" }, { name: "PL/SQL" }, { name: "MySQL" }],
    },
    {
      group: "Cloud & Tools",
      items: [
        { name: "AWS" },
        { name: "Docker" },
        { name: "ServiceNow" },
        { name: "PowerBI" },
      ],
    },
    {
      group: "AI & ML",
      items: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Machine Learning" },
        { name: "NLP" },
        { name: "Data Science" },
      ],
    },
  ],

  education: [
    {
      period: "2015 – 2019",
      degree: "B.E. Computer Science Engineering",
      institution: "RTM Nagpur University",
      detail: "Thesis: AI-based Garbage Identification System using TensorFlow, PyTorch, Google Route Optimization API. Published internationally.",
      badge: "Nagpur, India",
    },
    {
      period: "2018",
      degree: "Data Science with R and Python",
      institution: "IBM Certification",
      detail: "Python scripting and data analysis using IBM's Jupyter-based lab environment.",
      badge: "Score: 89/100",
    },
    {
      period: "2020 – 2021",
      degree: "Introduction to Internet of Things",
      institution: "Stanford Junior University",
      detail: "Scored 'S' (Satisfactory) — highest achievable grade from Stanford Center for Professional Development.",
      badge: "California, USA",
    },
    {
      period: "2018",
      degree: "Certified Software Dev Trainee",
      institution: "MyAMCAT",
      detail: "70th percentile overall; highest scores in Logic and Computer Programming sections.",
      badge: "Score: 695/900",
    },
  ],

  achievements: [
    { icon: "⭐", text: "TCS Star Performer — On-the-Spot Award at Annual Town Hall ceremony" },
    { icon: "📊", text: "Workshop on Data Science at IIT TechFest" },
    { icon: "🔌", text: "IoT & Smart Technologies Workshop at TCS" },
    { icon: "🩸", text: "Volunteer — blood donation camps & COVID-19 clinical management" },
    { icon: "🎓", text: "Member of Student Representative Council (SRC)" },
    { icon: "💻", text: "TechEXPO '18 — IEEE CS Chapter, S.B. Jain Institute" },
  ],

  freelancer: [
    {
      period: "2021 — Present",
      platform: "Upwork",
      role: "Full-Stack Developer",
      projects: [
        "Built responsive web applications using React and Node.js",
        "Developed RESTful APIs and integrated with various databases",
        "Collaborated with international clients on diverse projects",
      ],
    },
    {
      period: "2020 — 2021",
      platform: "Freelancer.com",
      role: "Python Developer",
      projects: [
        "Created automation scripts and data processing tools",
        "Built machine learning models for client requirements",
        "Delivered projects with 100% client satisfaction rating",
      ],
    },
  ],

  competitions: [
    {
      year: "2023",
      name: "Google Code Jam",
      achievement: "Round 1 Qualifier",
      description: "Successfully qualified for Round 1 in the prestigious Google Code Jam competition.",
    },
    {
      year: "2022",
      name: "LeetCode Weekly Contest",
      achievement: "Top 10% Globally",
      description: "Consistently ranked in top 10% in weekly coding competitions on LeetCode.",
    },
    {
      year: "2021",
      name: "HackerRank Problem Solving",
      achievement: "5-Star Rating",
      description: "Achieved 5-star rating in Problem Solving domain on HackerRank.",
    },
    {
      year: "2020",
      name: "CodeChef Monthly Contest",
      achievement: "3-Star Rating",
      description: "Earned 3-star rating and solved complex algorithmic problems.",
    },
  ],

  navNodes: [
    { id: "experience",   label: "Experience", icon: "[EXP]" },
    { id: "projects",     label: "Projects",   icon: "[PRJ]" },
    { id: "skills",       label: "Skills",     icon: "[SKL]" },
    { id: "education",    label: "Education",  icon: "[EDU]" },
    { id: "achievements", label: "Awards",     icon: "[ACH]" },
    { id: "contact",      label: "Contact",    icon: "[CON]" },
    { id: "freelancer",   label: "Freelancer", icon: "[FR]" },
    { id: "competitions", label: "Competitions", icon: "[CMP]" },
  ],
};

export default portfolio;
