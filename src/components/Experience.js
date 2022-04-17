import React from "react";

function Experience() {
  return (
    <div className="experience">
      <div class="experience-header">Experience</div>
      <hr />
      <div class="experience-content">
        <p>
          <span style={{ fontWeight: "bold" }}>Web Developer</span> - 07/2020 to
          11/2021
        </p>
        <p>
          <span className="company" style={{ fontWeight: "bold" }}>
            Career Lab Ng
          </span>
          , Lagos
        </p>
        <ul>
          <li>
            Developed a web application to manage and help student's career
            choices
          </li>
          <li>revamped existing websites to fit modern web design structure</li>
          <li>performed updates on old technologies</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
