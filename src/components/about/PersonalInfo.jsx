import React from "react";

const personalInfoContent = [
  { meta: "name", metaInfo: "Marcus Moreira" },
  { meta: "role", metaInfo: "Front End Developer" },
  { meta: "Age", metaInfo: "41 Years" },
  { meta: "Nationality", metaInfo: "Brazilian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Brazil" },
  { meta: "phone", metaInfo: "+55 12 99105-5598" },
  { meta: "Email", metaInfo: "marcusmoreira81@gmail.com" },
  { meta: "Skype", metaInfo: " omarcusmoreira" },
  { meta: "langages", metaInfo: "Portuguese, English, German" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
