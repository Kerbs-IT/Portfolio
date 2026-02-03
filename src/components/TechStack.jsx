

const TechStack = () => {
   const tech = [
     { techName: "Html", techClassName: "html5" },
     { techName: "CSS", techClassName: "css3" },
     { techName: "JavaScript", techClassName: "js" },
     { techName: "PHP", techClassName: "php" },
     { techName: "Bootstrap", techClassName: "bootstrap" },
     { techName: "MySQL", techClassName: "database" },
     { techName: "Laravel", techClassName: "laravel" },

     { techName: "React", techClassName: "react" },
     { techName: "Figma", techClassName: "figma" },
     { techName: "Github", techClassName: "github" },
     { techName: "Git", techClassName: "git-alt" },
   ];
  return (
    <div className="mb-4">
      <h1 className="burgee-font">Technologies</h1>
      <div className="tech-container d-flex gap-2 flex-wrap">
        {tech.map((item) => (
          <div key={item.techName} className="tech-item d-flex align-items-center justify-content-center border-dark border py-1 px-2 gap-1 rounded bg-white">
            <i className={`fa-brands fa-${item.techClassName} fs-1`}></i>
            <span className="geist-font fs-5">{item.techName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack
