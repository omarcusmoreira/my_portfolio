import React from "react";

const educationContent = [
  {
    year: "2019",
    degree: "SPECIALIZATION DEGREE",
    institute: "INATEL",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: "2011",
    degree: "PROJECT MANAGEMENT DEGREE",
    institute: "FAAP",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "2008",
    degree: "ENGINEERING DEGREE",
    institute: "INATEL - Instituto Nacional de Telecomunicações",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
