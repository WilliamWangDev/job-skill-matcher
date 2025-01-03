const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Job = require("./models/Jobs.js");

dotenv.config();

const jobs = [
  {
    title: "DevOps Engineer",
    requiredSkills: [
      "Linux",
      "Shell Scripting",
      "Git",
      "Agile Development",
      "Docker",
    ],
    suggestedSkills: ["Kubernetes", "CI/CD Pipelines", "AWS"],
  },
  {
    title: "Cloud Engineer",
    requiredSkills: [
      "Linux",
      "Networking",
      "Cloud Networking",
      "Firewall Management",
    ],
    suggestedSkills: ["AWS", "Azure", "Docker"],
  },
  {
    title: "Back-End Developer",
    requiredSkills: ["Python", "Flask", "SQL", "MongoDB"],
    suggestedSkills: ["Node.js", "Django"],
  },
  {
    title: "Front-End Developer",
    requiredSkills: ["HTML", "CSS", "JavaScript", "UX/UI Design Principles"],
    suggestedSkills: ["React", "Redux", "Figma"],
  },
  {
    title: "Data Scientist",
    requiredSkills: ["Statistics", "Python", "SQL", "Power BI", "R"],
    suggestedSkills: ["Machine Learning", "Pandas", "Scikit-learn"],
  },
  {
    title: "Cybersecurity Analyst",
    requiredSkills: [
      "Networking",
      "Firewall Management",
      "Linux",
      "System Administration",
    ],
    suggestedSkills: ["Penetration Testing", "Intrusion Detection"],
  },
  {
    title: "Database Administrator",
    requiredSkills: ["SQL", "MongoDB", "System Administration", "Linux"],
    suggestedSkills: ["NoSQL", "Backup Management", "Cloud Databases"],
  },
  {
    title: "Scrum Master",
    requiredSkills: ["Agile Development", "Git", "Project Management", "Visio"],
    suggestedSkills: ["Jira", "Trello"],
  },
  {
    title: "System Analyst",
    requiredSkills: [
      "System Administration",
      "Networking",
      "Visio",
      "UX/UI Design Principles",
    ],
    suggestedSkills: ["Agile Development", "SQL"],
  },
  {
    title: "Machine Learning Engineer",
    requiredSkills: [
      "Python",
      "Statistics",
      "Machine Learning",
      "Scikit-learn",
    ],
    suggestedSkills: ["TensorFlow", "PyTorch", "Pandas"],
  },
  {
    title: "IT Support Specialist",
    requiredSkills: [
      "System Administration",
      "Networking",
      "Linux",
      "Shell Scripting",
    ],
    suggestedSkills: ["Customer Support", "Firewall Management"],
  },
  {
    title: "Technical Writer",
    requiredSkills: ["Git", "UX/UI Design Principles", "Documentation"],
    suggestedSkills: ["Markdown", "Visio"],
  },
  {
    title: "Ethical Hacker",
    requiredSkills: [
      "Networking",
      "Firewall Management",
      "Linux",
      "Penetration Testing",
    ],
    suggestedSkills: ["Cloud Security", "Python", "System Administration"],
  },
  {
    title: "IT Project Manager",
    requiredSkills: [
      "Agile Development",
      "Project Management",
      "Visio",
      "UX/UI Design Principles",
    ],
    suggestedSkills: ["Git", "Jira"],
  },
  {
    title: "Business Analyst",
    requiredSkills: ["Statistics", "Power BI", "Visio", "SQL"],
    suggestedSkills: ["Data Analysis", "Agile Development"],
  },
  {
    title: "Web Designer",
    requiredSkills: [
      "HTML",
      "CSS",
      "UX/UI Design Principles",
      "Wireframing Tools",
    ],
    suggestedSkills: ["JavaScript", "Figma"],
  },
  {
    title: "Software Tester",
    requiredSkills: [
      "Python",
      "Agile Development",
      "Git",
      "System Administration",
    ],
    suggestedSkills: ["Selenium", "Unit Testing"],
  },
  {
    title: "Automation Engineer",
    requiredSkills: ["Shell Scripting", "Python", "Linux", "Networking"],
    suggestedSkills: ["Ansible", "Puppet", "PowerShell"],
  },
  {
    title: "Help Desk Technician",
    requiredSkills: ["System Administration", "Networking", "Linux"],
    suggestedSkills: ["Customer Support", "Ticketing Systems"],
  },
  {
    title: "Application Support Engineer",
    requiredSkills: ["System Administration", "SQL", "Networking", "Linux"],
    suggestedSkills: ["Shell Scripting", "Cloud Support"],
  },
  {
    title: "Game Developer",
    requiredSkills: [
      "Python",
      "Object-Oriented Programming",
      "Statistics",
      "UX/UI Design Principles",
    ],
    suggestedSkills: ["Unity", "C#", "3D Modeling"],
  },
  {
    title: "Software Engineer",
    requiredSkills: [
      "Python",
      "Git",
      "Object-Oriented Programming",
      "Agile Development",
    ],
    suggestedSkills: ["Java", "C++", "Django"],
  },
  {
    title: "Cloud Security Engineer",
    requiredSkills: [
      "Networking",
      "Firewall Management",
      "Cloud Networking",
      "Linux",
    ],
    suggestedSkills: ["AWS Security", "Penetration Testing"],
  },
  {
    title: "Embedded Systems Engineer",
    requiredSkills: ["Linux", "C++", "System Administration", "Networking"],
    suggestedSkills: ["Microcontrollers", "IoT"],
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    // Clear existing data
    await Job.deleteMany();
    console.log("Existing jobs cleared");

    // Insert seed data
    await Job.insertMany(jobs);
    console.log("Job data seeded successfully");

    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();
