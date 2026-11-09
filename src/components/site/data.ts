import imgMatrimony from "@/assets/project-matrimony.jpg";
import imgCarCare from "@/assets/project-carcare.jpg";
import imgSchool from "@/assets/project-school.jpg";
import imgErp from "@/assets/project-erp.jpg";
import imgAnuarc from "@/assets/project-anuarc.jpg";
import imgAmruta from "@/assets/project-amruta.jpg";
import imgAtithi from "@/assets/project-atithi.jpg";
import imgArogyam from "@/assets/project-arogyam.jpg";
import imgRentIt from "@/assets/project-rentit.jpg";
import imgQVouch from "@/assets/project-qvouch.jpg";

export const services = [
  {
    title: "Software Development",
    desc: "Custom software solutions tailored to your business needs with cutting-edge technologies.",
    icon: "Code2",
  },
  {
    title: "SaaS Development",
    desc: "Scalable cloud-based software as a service applications for modern businesses.",
    icon: "CloudCog",
  },
  {
    title: "Portal Development",
    desc: "Enterprise portals and web applications with seamless user experiences.",
    icon: "LayoutDashboard",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful and intuitive designs that engage users and drive conversions.",
    icon: "Palette",
  },
  {
    title: "CMS Development",
    desc: "Powerful content management systems for easy website management.",
    icon: "FileStack",
  },
  {
    title: "AI/ML Development",
    desc: "Intelligent solutions powered by artificial intelligence and machine learning.",
    icon: "BrainCircuit",
  },
  {
    title: "Cloud Services",
    desc: "Cloud infrastructure and migration services for scalable applications.",
    icon: "Cloud",
  },
  {
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile apps for iOS and Android.",
    icon: "Smartphone",
  },
] as const;

export const projects = [
  {
    name: "Matrimony",
    desc: "A secure matrimony platform supporting profile creation, intelligent matchmaking, interest management, and privacy-focused user communication.",
    stack: ["React", "Node.js", "MongoDB"],
    image: imgMatrimony,
  },
  {
    name: "Auto Car Care",
    desc: "A digital car care solution for managing service bookings, technician assignments, vehicle inspection records, and customer engagement workflows.",
    stack: ["React", "Node.js", "MongoDB"],
    image: imgCarCare,
  },
  {
    name: "Concept School",
    desc: "A school management system that streamlines admissions, student records, attendance, examinations, results, and academic reporting.",
    stack: ["React", "Node.js", "MongoDB"],
    image: imgSchool,
  },
  {
    name: "ERP Suite",
    desc: "An ERP solution streamlining inventory, sales, purchase, finance, and employee management with centralized workflows and reporting.",
    stack: ["Java", "React", "MySQL"],
    image: imgErp,
  },
  {
    name: "AnuArc",
    desc: "Business management platform for a welding machine manufacturer & distributor — manufacturing, distribution, inventory, sales and customer operations.",
    stack: ["React", "Node.js", "MongoDB"],
    image: imgAnuarc,
  },
  {
    name: "Amruta Cloth Center",
    desc: "Retail management solution handling products, inventory, sales, customers and billing with centralized data and sales tracking.",
    stack: ["React", "Node.js", "MongoDB"],
    image: imgAmruta,
  },
  {
    name: "Atithi",
    desc: "A hotel management platform for room inventory, reservations, check-in and check-out, billing and housekeeping with centralized reporting.",
    stack: ["C#", "Node.js", "MySQL"],
    image: imgAtithi,
  },
  {
    name: "Arogyam",
    desc: "A hospital management system covering patient records, appointments, OPD and IPD workflows, ward occupancy, billing and lab reporting.",
    stack: ["Java", "React", "MySQL"],
    image: imgArogyam,
  },
  {
    name: "Rent It",
    desc: "A broker and rental application connecting owners, agents and tenants with property listings, inquiries, site visits and rental agreements.",
    stack: ["React", "Node.js", "MongoDB"],
    image: imgRentIt,
  },
  {
    name: "QVouch",
    desc: "A QR-based review system that lets customers scan and rate a business instantly, with live feedback, star ratings and review analytics.",
    stack: ["React", "Node.js", "MongoDB"],
    image: imgQVouch,
  },
] as const;

export const industries = [
  { name: "Healthcare", icon: "HeartPulse" },
  { name: "Retail & Ecommerce", icon: "ShoppingCart" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Real Estate", icon: "Building2" },
  { name: "Manufacturing", icon: "Factory" },
  { name: "Media & News", icon: "Newspaper" },
  { name: "Banking & Finance", icon: "Landmark" },
  { name: "Logistic", icon: "Truck" },
  { name: "Insurance", icon: "ShieldCheck" },
  { name: "Telecommunication", icon: "RadioTower" },
] as const;

export const techStacks = [
  { group: "Backend", items: ["Python", "Java", "Node JS", ".NET"] },
  { group: "Frontend", items: ["ReactJS", "AngularJS", "VueJS", "NextJS", "JavaScript"] },
  {
    group: "Frameworks",
    items: ["Spring Boot", "Laravel", "Django", "Codeigniter", "Ruby on Rails"],
  },
  { group: "Mobile", items: ["iOS", "Android", "Flutter", "React Native"] },
  { group: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL", "Redis"] },
  { group: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud Platform"] },
  { group: "AI/ML", items: ["TensorFlow", "Keras", "PyTorch", "Apache MXNet"] },
  { group: "NLP", items: ["NLTK", "SpaCy", "HuggingFace Transformers"] },
  { group: "Data & Tools", items: ["OpenML", "ImgLab", "Snowflake", "Spark"] },
  { group: "CMS", items: ["WordPress"] },
  { group: "Version Control", items: ["GitHub", "Bitbucket"] },
  { group: "Agile Tools", items: ["Jira", "Asana", "Trello", "Confluence"] },
  { group: "IDEs", items: ["IntelliJ Idea", "Eclipse", "VS Code"] },
  { group: "Unit Testing", items: ["JUnit", "Mockito", "Selenium"] },
] as const;

export const contact = {
  email: "info@tesseractinfosystems.com",
  phone: "+91 9588686668",
  address:
    "Kakade Plaza, Warje Malwadi Rd, near Kaka Halwai, Warje Jakat Naka, Karvenagar, Pune, Maharashtra 411052",
  website: "www.tesseractinfosystems.com",
};
