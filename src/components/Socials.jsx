

function Socials() {
    const links = [
      {
        linkType: "facebook",
        linkUrl: "https://www.facebook.com/kerby.buan",
      },
      {
        linkType: "linkedin",
        linkUrl: "https://www.linkedin.com/in/kerby-buan-19773b231/",
      },
      {
        linkType: "github",
        linkUrl: "https://github.com/Kerbs-IT",
      },
    ];
  return (
    <div>
      {links.map((item) => (
        <a href={item.linkUrl} key={item.linkType} target="_blank">
          <i className={`fa-brands fa-${item.linkType} text-dark fs-1`}></i>
        </a>
      ))}
    </div>
  );
}

export default Socials
