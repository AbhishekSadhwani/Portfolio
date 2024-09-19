import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";


export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, TailwdindCSS, and Firebase. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, learn about new technologies and finance, and enjoy playing video games.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Associate Application Developer",
    company: "Accenture",
    description: `Developing and maintaining single page web applications using JavaScript, React.js. Utilised state management tools, libraries like Context API and Redux. Wrote unit and integration tests using Jest and React Testing Library, ensuring high code coverage and stability. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "Firebase", "Jest"],
  },
  {
    year: "2022 - 2022",
    role: "Software Developer Trainee",
    company: "Capgemini",
    description: `Assisted in the development of user-facing features using React.js, contributing to the timely release of new product updates. Integrated and consumed RESTful APIs to fetch and display data dynamically using the asynchronous operation. Worked on bug fixing and improving the performance of existing React components.`,
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "CodeBook E-Commerce Website",
    image: project1,
    description: "CodeBook is an eBook shop built with ReactJS, featuring the sleek styling of TailwindCSS. The project's goal is to gain an understanding of frontend development using ReactJS and working with libraries such as React Router and JSON Server. It covers authentication, navigating between different application pages using routing, event handling, working with APIs, managing forms, using .env files, and deploying the frontend on Netlify and the backend on Render.",
    technologies: ["ReactJS", "Redux", "React-Router", "TailwindCSS"],
  },
  {
    title: "Cinemate ",
    image: project2,
    description: "Cinemate is a movie information web application developed using ReactJS for a responsive user experience, the sleek styling of TailwindCSS, and libraries like React Router for seamless navigation. The goal of this project is to gain an understanding of working with APIs, making fetch calls using async functions, and working with react hooks.",
    technologies: ["ReactJS", "TMDB API", "TailwindCSS", "React-Router"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Netlify"],
  },
  {
    title: "Broodl",
    image: project4,
    description: "Broodl is a mood tracker app made using Next JS and Firebase.",
    technologies: ["NextJS", "Firebase", "TailwindCSS","Netlify"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91-9649435730",
  email: "abhisheksadhwani23@gmail.com",
};
