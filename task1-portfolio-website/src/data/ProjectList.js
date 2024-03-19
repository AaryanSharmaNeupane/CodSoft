import yatraa from "../assets/images/yatraa.jpg";
import parichaya from "../assets/images/parichaya.jpg";
import cinemate from "../assets/images/cinemate.png";
import taskmate_flutter from "../assets/images/taskmate_flutter.jpg";
import taskmate_react from "../assets/images/taskmate_react.png";
import amazon from "../assets/images/amazon.png";

export const projects = [
  {
    id: 1,
    name: "Yatraa",
    description:
      "This is an app which was developed with the main aim to ease public transportation service. It has a feature to track public buses, find the nearest bus stop, calculate the approximate price to travel from one place to other and so on. This app was developed as a part of final year project for the university.",
    technologies: ["Flutter", "Django", "RESTful API"],
    github_link: "github.com/AaryanSharmaNeupane/yatraa.git",
    image: yatraa,
  },
  {
    id: 2,
    name: "Parichaya",
    description:
      "This is an app which was developed with the aim to provide a platform to store personal documents and to provide a secured medium to share these documents. It includes features such as adding documents and files and sharing those documents through the link generated in the app. It was developed as a part of minor project for the university.",
    technologies: ["Flutter", "Django", "RESTful API"],
    github_link: "github.com/AaryanSharmaNeupane/Parichaya-frontend.git",
    image: parichaya,
  },
  {
    id: 3,
    name: "Cinemate",
    description:
      "Cinemate is your ultimate destination for staying up-to-date with the latest in the world of movies. Whether you're looking for information on upcoming releases, exploring the top-rated films, or digging into the details of your favorite movies, Cinemate has got you covered. With features like search functionality, IMDb ratings, budget details, reviews, revenue, and more, Cinemate is your one-stop-shop for all things cinema.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    github_link: "github.com/AaryanSharmaNeupane/cinemate_react.git",
    image: cinemate,
  },
  {
    id: 4,
    name: "Amazon Clone",
    description:
      "The Amazon Clone project is a replica of the popular e-commerce platform Amazon, built using HTML and CSS. It aims to replicate the core functionalities and design elements of the original Amazon website.",
    technologies: ["HTML", "CSS"],
    github_link: "github.com/AaryanSharmaNeupane/Amazon_css_clone.git",
    image: amazon,
  },
  {
    id: 5,
    name: "Taskmate",
    description:
      "TaskMate is a simple task management application created as a practice project in React. With TaskMate, users can seamlessly write down tasks, edit them, and delete them as needed.",
    technologies: ["HTML", "CSS", "React"],
    github_link: "github.com/AaryanSharmaNeupane/Taskmate_React.git",
    image: taskmate_react,
  },
  {
    id: 6,
    name: "Taskmate (Mobile App)",
    description:
      "TaskMate is a simple task management application created as a practice project in Flutter. With TaskMate, users can seamlessly write down tasks, edit them, and delete them as needed.",
    technologies: ["Flutter", "Dart"],
    github_link: "github.com/AaryanSharmaNeupane/Taskmate.git",
    image: taskmate_flutter,
  },
];
