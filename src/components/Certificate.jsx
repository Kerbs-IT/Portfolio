import DICT_WD001 from "../assets/certificate/certificate_page_0001.jpg";

function Certificate() {
    const certificate = [
      {
        code: "DICT-WD001",
        organization: 'DICT',
        text: "DICT-WD001 | Principles of Web Development and Introduction to HTML",
        url: {DICT_WD001}
      },
    ];
  return (
    <div className="mb-4">
      <h1 className="burgee-font">Certificate</h1>
      <div className="certificate-con px-5">
        {certificate.map((item) => (
          <div className="certificate-item card p-3 pointer" key={item.code}>
            <h6 className="mb-0 fw-bold">
             {item.text}
            </h6>
            <p className="mb-0">{item.organization }</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate
