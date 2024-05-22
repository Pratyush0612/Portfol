import { FcEngineering } from "react-icons/fc";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a seasoned frontend web developer, the candidate adeptly wields HTML, CSS, and JavaScript to craft captivating digital experiences. With a keen eye for design and a passion for user interaction, they've honed their skills in developing sleek, responsive websites. Their proficiency extends to React, where they leverage its power to create dynamic, efficient interfaces. Their portfolio speaks volumes, showcasing a mastery of frontend technologies and a commitment to delivering polished, user-centric solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  
    // Meerut Institute of Engineering and Technology
    // Bachelor of Technology in 
    // Computer Science and Engineering(Artificial Intelligence and Machine Learning)
    {
      year: "2020 - Present",
      role: "Bachelor of Technology",
      company: "in",
      field:`Computer Science and Engineering`,
      // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
      stream:"(Artificial Intelligence and Machine Learning)",
      description:`Meerut Institute of Engineering and Technology`,
      technologies: ["79%"],
    },
    {
     year: "2019 - 2020",
     role: "Class XII",
    //  company: "in",
     description:`Computer Science and Engineering(Artificial Intelligence and Machine Learning)`,
     // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
     description:`Purngyanjali International School`,
     technologies: ["78%"],
 
   },
 
];

export const PROJECTS = [
  {
    title: "Digiter",
    image: project1,
    description:
      "A Model used to recognize handwritten digits. Comapared multiple ML Algorithms like- SVM, RFC, MLP and found CNN as the best algorithm with acuuracy score of 99 %",
    technologies: ["Machine Learning", "Deep Learning", "Character Recognition"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "Portfolio website for showcasing my work and skills.",
    technologies: ["React","Typescript","Framer Motion"],
  },
  {
    title: "The Peppertown",
    image: project3,
    description:
      "This is basically a online food ordering website.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Number Plate Recognizer",
    image: project4,
    description:
      "A Machine Learning Model for recognizing digits. The model has an accuracy score of 97%",
    technologies: ["OpenCV", "Tesseract"],
  },
  {
    title: "Sentiment Analysis of Movie Review Dataset",
    image: project4,
    description:
      "A Machine Learning Model for recognizing digits. The model has an accuracy score of 97%",
    technologies: ["Machine Learning", "NLP"],
  },
];

export const CONTACT = {
  email: "Mail",

};
 
