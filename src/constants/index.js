import { JavaScript, HTMLCSS, React, WebDesignLogos, NodeJS, Java, Python, WordPress, GitGithub } from "../assets"
import { NexGen_Cybershield, BM_App, Restaurant, CodeSwift } from '../assets'

export const navLinks = [
    {
        id: "introduction",
        title: "Introduction",
    },
    {
        id: "skills",
        title: "Skills",
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

export const skills = [
    {
        id: "skill-1",
        icon: JavaScript,
        title: "JavaScript",
        content: 
            "JavaScript, the second language I learned, sparked by fascination with open-source code.  Developed proficiency, contributing to diverse projects and enhancing my skills.",
    },
    {
        id: "skill-2",
        icon: HTMLCSS,
        title: "HTML/CSS",
        content: 
            "As I learned HTML/CSS through introductory courses, I applied this knowledge to craft various web projects, including the design of this site. This solidified my grasp of front-end development.",
    },
    {
        id: "skill-3",
        icon: React,
        title: "React",
        content: 
            "Explored React through online courses, applying it in several web projects, including this site and other frontend projects. showcasing my practical implementation of React skills.",
    },
    {
        id: "skill-4",
        icon: NodeJS,
        title: "Node.js",
        content: 
            "As I learned JavaScript, I acquired proficiency in Node.js through hands-on projects and coursework. Examples of Node.js applications can be explored in my projects."
    },
    {
        id: "skill-5",
        icon: WebDesignLogos,
        title: "Web Design",
        content: 
            "Explored Figma and Adobe XD for web design, gaining experience in creating responsive UI/UX designs with these vector design tools."
    },
    {
        id: "skill-6",
        icon: Java,
        title: "Java",
        content: 
            "Java forms the bedrock of my programming skills,  acquired through essential university courses such as OOP and DSA, established the foundation for my understanding."
            // "Java forms the bedrock of my programming skills, introduced through key university courses like OOP and Data Structures, laying a strong foundation for my understanding."
    },
    {
        id: "skill-7",
        icon: Python,
        title: "Python",
        content: 
            "Self-taught Python through books and videos, solidifying skills in Machine Learning course in university. Applied Python knowledge to some personal projects."
            // "Self-learned Python from books, video tutorials and online courses. Implemented the acquired knowledge to personal projects, showcasing proficiency in Python programming."
    },
    {
        id: "skill-8",
        icon: GitGithub,
        title: "Git & Github",
        content: 
            "I've used Git for almost all of my projects, so I am very familiar with it. My proficiency extends to collaborative workflows on GitHub, where I try to contribute and participate in open-source projects."
    },
    {
        id: "skill-9",
        icon: WordPress,
        title: "WordPress",
        content: 
            "Got myself into web development using the widely adopted CMS, WordPress. Gained proficiency through online courses, and applied skills in various projects."
    },
];

export const projects = [
    {
        id: 0,
        title: 'NexGen CyberSecurity',
        description: "Designed a static website with a strong emphasis on front-end development, showcasing proficiency in React.js and CSS. The project highlights the layout and design of NexGen Cyber Shield, a fictional cybersecurity company.",
        image: NexGen_Cybershield,
        tags: [ 'JavaScript', 'CSS', 'React.js', 'Node.js', 'JSX' ],
        demo: 'https://nexgen-cybershield.surge.sh',
        repository: 'https://github.com/AbdulMoiz961/Static-NexGen_Cybershield',
    },
    {
        id: 1,
        title: 'Business Portfolio Website',
        description: "Designed and built a static Business Portfolio Website with a strong emphasis on front-end development, showcasing expertise in React.js, Next.js, and CSS. Demonstrated proficiency in React.js, and Next.js through innovative layout and design.",
        image: CodeSwift,
        tags: [ 'JavaScript', 'Next.js', 'CSS', 'React.js', 'Node.js' ],
        demo: 'https://codeswift.vercel.app/',
        repository: 'https://github.com/AbdulMoiz961/Static-CodeSwift',
    },
    {
        id: 2,
        title: 'Restaurant Website',
        description: "Designed and developed a static Restaurant Website, a fictional establishment, with a strong emphasis on front-end development, highlighting expertise in React.js and CSS. The project showcases a captivating layout and design, inviting visitors to explore a virtual culinary experience.",
        image: Restaurant,
        tags: [ 'JavaScript', 'CSS', 'React.js', 'Node.js' ],
        demo: 'https://l-epicurean-restaurant.surge.sh/',
        repository: 'https://github.com/AbdulMoiz961/Static-Restaurant_Website',
    },
    {
        id: 3,
        title: 'Online Banking Website',
        description: "Developed a static website with a strong focus on front-end development, employing React.js and Tailwind CSS. The project highlights the engaging layout and design of a fictional Online Banking App, offering a seamless and intuitive user experience.",
        image: BM_App,
        tags: [ 'JavaScript', 'Tailwind CSS', 'React.js', 'Node.js', 'JSX' ],
        demo: 'https://bm0-app0.surge.sh/',
        repository: 'https://github.com/AbdulMoiz961/Static-BM_App',
    },
    {
        id: 4,
        title: 'TO-DO List App',
        description: "Developed a todo list web application utilizing React.js, JavaScript, and CSS. The project emphasizes efficient task management, enabling users to add, remove, and edit tasks with seamless accessibility. Tasks are stored locally, providing persistence across sessions for enhanced user experience.",
        image: BM_App,
        tags: [ 'JavaScript', 'CSS', 'React.js', 'Node.js', ],
        demo: 'https://abdu1-moiz-tm.netlify.app/',
        repository: 'https://github.com/AbdulMoiz961/todo-list',
    },
]