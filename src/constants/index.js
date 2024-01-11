import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    sql,
    pricewise,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/yashtekade07',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/yashtekade07',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Coursebundler',
        description: ' Built a platform akin to Udemy, offering users the ability to explore a comprehensive selection of courses.Integrated a premium subscription model, requiring users to make a purchase to access courses. Incorporated recurring payment functionality through the Razorpay platform to seamlessly manage premium subscriptions which costs ₹200 per month. Empowered administrators with the capability to create new courses and access insightful analytics related to website performance.',
        link: 'https://coursebundlerfrontend-hu1t.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Dev Connector',
        description: 'Developed and managed a user-friendly web platform facilitating profile creation and updates for education and professional experiences.Enabled users to share and summarize fresh project ideas, fostering a collaborative environment for innovation. Implemented features for users to engage through likes and comments on posted content, enhancing interaction within the platform',
        link: 'https://dev-connector-frontend.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Match Finder',
        description: 'Created a web-based platform with user account creation, enabling individuals to find their ideal partners among a diverse array of profiles. Implemented a user-friendly swiping mechanism for profile evaluation, allowing users to make selections by swiping left or right, leading to potential matches. Integrated live chat functionality to facilitate real-time communication between matched users, enhancing the overall user experience and connection-building process.',
        link: 'https://match-finder-frontend.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Thai ID Verification',
        description: 'a web platform integrating Google Vision API for seamless ID card data extraction. Users can easily perform CRUD operations, managing details efficiently in a secure, regex-supported environment. The user-friendly interface ensures quick navigation, making ID-Manager a comprehensive solution for streamlined and accurate identity card management. Embrace a future-ready approach to data handling with ID-Manager.',
        link: 'https://github.com/yashtekade07/IDVerification',
    }
];