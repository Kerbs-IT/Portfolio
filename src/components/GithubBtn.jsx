function GithubBtn(props) {
  return (
    <div className="">
      <a
        href={props.link}
        className="btn btn-white shadow bg-white d-flex align-items-cente  justify-content-center gap-2"
        target="_blank"
      >
        <i className="fa-brands fa-github fs-4"></i>
        <span className="geist-font fs-5">Github</span>
      </a>
    </div>
  );
}

export default GithubBtn;
