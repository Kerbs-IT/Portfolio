import healthCenterIMS from "../assets/projectImages/health-center-IMS.png";
import styleTure from "../assets/projectImages/styleture_mockup.png";
import dExpress from "../assets/projectImages/d_express_mockup.png"
import GithubBtn from "./GithubBtn";
import LanguageUsed from "./LanguageUsed";
import ViewMore from "./ViewMore";

const Projects = () => {
  const projects = [
    {
      name: "Barangay Hugo Perez Health Center Information Management System (IMS)",
      id: 0,
      description:
        "The Health Center Information Management System (IMS) is a web-based application designed to digitalize and centralize patient medical records for a Brgy.Hugo Perez Proper health center. It replaces manual, paper-based record keeping with a secure and efficient system that improves data accuracy, accessibility, and reporting for healthcare workers. It notify the patient about their upcoming schedule and also notify the nurse, and healtworker about the scheduled and overdue patient to plan the prioritise. It also includes a heatmap to provide data visualization of the patients and provide stategy and enable them to generate a plan which patient to prioritize.",
      image: healthCenterIMS,
      year: "2026",
      githubLink:
        "https://github.com/Kerbs-IT/Health-Center-Information-Management-System",
      languageUsed: [
        "Laravel",
        "JavaScript",
        "PHP",
        "MySQL",
        "Bootstrap",
        "SMTP",
      ],
    },
    {
      name: "StyleTure",
      id: 1,
      description:
        "Styleture is a an ecommerce website built using PHP,CSS, Javascript and MySQL developed as an academic project to enhance skills in PHP and database management. The system allows customers to browse furniture products, add items to their cart, and place orders. Once a purchase is made, the order is reflected in the admin account, where the admin is responsible for managing and updating the order status. Customers can track the status of their orders through their dashboard.Admin account is also responsible for adding the product that will be reflected to the shop of the website.",
      image: styleTure,
      year: "2024",
      languageUsed: ["HTML", "CSS", "JavaScript", "PHP"],
      githubLink: "https://github.com/Kerbs-IT/Styleture",
    },
    {
      name: "D-Express - Pharmacy",
      id: 2,
      description:
        "This project is a D-express Website Landing Page built purely for practice using HTML, CSS, and JavaScript. It is developed t to sharpen and expand my knowledge about the front-end languages. it features a simple rule-based chatbot that respont only based on a custom JSON file.",
      image: dExpress,
      year: "2024",
      languageUsed: ["HTML", "CSS", "JavaScript", "PHP"],
      githubLink: "https://github.com/Kerbs-IT/Styleture",
    },
  ];
  return (
    <div id="project">
      <h1 className="burgee-font">Projects</h1>
      <div className="project-container w-100 ">
        {projects.map((project) => (
          <div
            className="project-item shadow w-100 d-flex rounded bg-white  gap-3 mb-2 px-2"
            key={project.id}
          >
            <div className="project-img w-25">
              <img src={project.image} alt="project image" />
            </div>
            <div className="project-texts align-items-center w-75 mt-3">
              <h4 className="fw-bold geist-font mb-0">{project.name}</h4>
              <h5 className="geist-font text-subtle">Year: {project.year}</h5>
              <p className="project-description text-wrap">
                {project.description}
              </p>
              <div className="language-used d-flex gap-1 mb-4">
                {project.languageUsed.map((language,index) => (
                  <LanguageUsed key={project.id +'-language-'+index} name={language} />
                ))}
              </div>
              <div className="buttons p-relative mb-2 w-100 d-flex justify-content-end gap-2 px-3 align-items-end">
                <GithubBtn link={project.githubLink} />
                <ViewMore />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
