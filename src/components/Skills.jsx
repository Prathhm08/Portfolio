import "./Skills.css";
import cPlusPlusIcon from "../assets/icons8-c++-16.png";
export default function Skills() {
  return (
    <div className="skills" id="sks">
      <h1 className="sk">Skillset</h1>
      <div className="container">
        <div className="skill-box">
          <span className="title">
            HTML
            <i className="fa-brands fa-html5" style={{ color: "#ff0000" }}></i>
          </span>

          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">
            CSS
            <i
              className="fa-brands fa-css3-alt"
              style={{ color: "#264de4" }}
            ></i>
          </span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">
            JavaScript
            <i className="fa-brands fa-js" style={{ color: "#F0DB4F" }}></i>
          </span>
          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">85%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">
            React
            <i className="fa-brands fa-react" style={{ color: "#74C0FC" }}></i>
          </span>
          <div className="skill-bar">
            <span className="skill-per react">
              <span className="tooltip">35%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">
            Python
            <i className="fa-brands fa-python" style={{ color: "#4B8BBE" }}></i>
          </span>
          <div className="skill-bar">
            <span className="skill-per python">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">
            C++
            <img src={cPlusPlusIcon} style={{ height: "2vw" }} alt="C++ Icon" />
          </span>
          <div className="skill-bar">
            <span className="skill-per cpp">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
