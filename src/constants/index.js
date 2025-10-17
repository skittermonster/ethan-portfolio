import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "FL Studio", icon: c },
  { title: "Figma", icon: cpp },
  { title: "React", icon: python },
  { title: "JavaScript", icon: java },
  { title: "Maya", icon: reactjs },
  { title: "ComfyUI", icon: javascript },
  { title: "n8n", icon: html },
  { title: "DaVinci Resolve", icon: css },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "LoRAsley",
    description:
      "Interactive LoRA-based generative AI system (ComfyUI) that creates Rick Astley images and transforms user voices in real time; fine-tuned model parameters for better alignment and presented in a live demo to 20+ peers.",
    tags: [
      { name: "ComfyUI", color: "blue-text-gradient" },
      { name: "LoRA", color: "green-text-gradient" },
      { name: "Generative AI", color: "pink-text-gradient" },
      { name: "Real-time Audio", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "PixelDoggo",
    description:
      "An interactive dog that you can pet, wave at, or pull the tail. The dog will fall asleep if the room goes dark. If the tail is pulled, the dog gets mad, and if you pet the dog or wave he gets happy and his arm moves.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Arduino", color: "green-text-gradient" },
    ],
    image: termpw,
    source_code_link:
      "https://www.sfu.ca/siat/showcase/spring-2024-project-showcase/iat-267-pixeldoggo.html",
  },
  {
    name: "Interference",
    description:
      "2D stealth platformer built in Unity (C#) featuring AI-driven guards, physics-based movement, and multi-level stealth; led a 5-person team and coordinated playtesting with 15 users to balance difficulty.",
    tags: [
      { name: "Unity", color: "blue-text-gradient" },
      { name: "C#", color: "green-text-gradient" },
      { name: "AI Guards", color: "pink-text-gradient" },
      { name: "2D Platformer", color: "yellow-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://skittermonster.itch.io/interferencegame",
  },
  {
    name: "Hidden Gems",
    description:
      "React Native + Firebase mobile app recommending niche films based on preferences and location; personalized filters improved test user engagement by 30% and UI/UX refined via usability testing.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Mobile App", color: "yellow-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/skittermonster/iat359hiddengems",
  },
  {
    name: "Lumina",
    description:
      "Hackathon project: AI-powered recruiting platform that automates resume screening and GitHub portfolio analysis using a 4-phase agentic workflow with Google Gemini; responsive Next.js + Tailwind UI with real-time analysis visualizations.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Gemini AI", color: "pink-text-gradient" },
      { name: "Agentic Workflow", color: "yellow-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Small But Mighty",
    description:
      "Team-produced 3D animated short made in Maya about a badminton showdown between underdog hamster Meep and octopus Mr. Takoyakiman; blends comedic timing, expressive acting, and fast-paced action to explore perseverance and success.",
    tags: [
      { name: "Maya", color: "blue-text-gradient" },
      { name: "3D Animation", color: "green-text-gradient" },
      { name: "Short Film", color: "pink-text-gradient" },
      { name: "Team of 5", color: "yellow-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://www.youtube.com/watch?v=6_yl6zeRr0A",
  },
];
