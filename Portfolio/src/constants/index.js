import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",

    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Analyst",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Django",
        icon: docker,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Python",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "SQL",
        icon: figma,
    },
];


const experiences = [


    {
        title: "Full stack Developer",
        company_name: "Audaz Ventures pvt. ltd",
        //icon: meta,
        iconBg: "#1d1836",
        date: "Sep 2022 - Oct 2022",
        points: [
            "I got the chance to work on a number of projects as a Data Science Intern at Audaz Learning, which allowed me to obtain practical experience in the industry. I studied data collection, cleaning, and analysis techniques under the guidance of seasoned data scientists. Additionally, I developed data visualisations and learnt how to design machine learning models."
        ],
    },
    {
        title: "Bachelor of Engineering",
        company_name: "Visvesvaraya Technological University",
        //icon: starbucks,
        iconBg: "#1d1836",
        date: "Aug 2019 - May 2023",
        points: [
            "GPA: I have a 8.23 GPA in computer science, and I am ranked in the top 10% of my class.",
            "Relevant courses: I have taken courses in all of the core computer science subjects, including data structures, algorithms, operating systems, and software engineering. I have also taken courses in artificial intelligence, machine learning, and computer graphics.",
            "Programming languages: I am proficient in Python, Java, C, and JavaScript. I have also used a variety of other programming languages, including SQL.",
            "Software development tools: I am familiar with a variety of software development tools, including Git, GitHub, and Jira. I have also used a variety of other software development tools, including Eclipse, IntelliJ IDEA, and Visual Studio.",
        ],
    },
    {
        title: "Pre University",
        company_name: "Sarvodaya PU College",
        //icon: tesla,
        iconBg: "#1d1836",
        date: "Jun 2017 - Mar 2019",
        points: [],
    },
    {
        title: "High School",
        company_name: "ST Anthony's Church School",
        //icon: shopify,
        iconBg: "#1d1836",
        date: "Jun 2004 - May 2017",
        points: [

        ],
    },
];

const testimonials = [{
        testimonial: "The journey of a thousand miles begins with a single step.",
    },
    {
        testimonial: "Programming is the art of telling another human being what one wants the computer to do.",
    },
    {
        testimonial: "The best way to learn programming is by doing",
    },
];

const projects = [{
        name: "Dashboards",
        description: "Thrilled to unveil my interactive online retail sales dashboard using Power Bi! 📊🚀 Using a comprehensive dataset, I've built a dynamic dashboard highlighting key sales metrics, customer behavior, and market trends. Let's connect and explore the power of data-driven insights in the world of online retail!",
        tags: [{
                name: "dataanalytics",
                color: "blue-text-gradient",
            },
            {
                name: "dashboard",
                color: "green-text-gradient",
            },
            {
                name: "onlineretail",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Daniyal1229/power-bi",
    },
    {
        name: "Computer Pointer Controller",
        description: "AI Virtual Mouse: Innovative program using Python, OpenCV,Mediapipe. Tracks hand movements with camera, translatesto cursor movements.",
        tags: [{
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "OpenCV",
                color: "green-text-gradient",
            },
            {
                name: "PyautoGUI",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/Daniyal1229/Computer-pointer-controller",
    },
    {
        name: "Employee Record Management System",
        description: "ERMS is a web-based system built with HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL to handle employee data, providing user-friendly frontend, dynamic functionality with JavaScript, PHP backend for data storage, retrieval, and updates in MySQL database.",
        tags: [{
                name: "bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/Daniyal1229/ERMS-using-php",
    },
];

export { services, technologies, experiences, testimonials, projects };