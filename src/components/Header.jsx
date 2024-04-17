import "./Header.css";
import dpimage from "../assets/pp.jpg";
import abtimage from "../assets/abt_image.jpg";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import smoothScroll from "./scroll";
import { useEffect } from "react";
export default function Header() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  useEffect(() => {
    const titles = gsap.utils.toArray(".text-wrapper h2");
    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -45,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 45,
        },
        "<1"
      );
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="head">
        <div className="topnav" id="myTopnav">
          <a
            className="active"
            href="https://drive.google.com/file/d/1Fr-A1ufC6O3DCeukERxt8MCOf1XSil_W/view?usp=drivesdk"
            target="_blank"
          >
            Resume
          </a>

          <a
            href="#abt"
            onClick={(event) => {
              smoothScroll(event);
            }}
          >
            About
          </a>
          <a
            href="#sks"
            onClick={(event) => {
              smoothScroll(event);
            }}
          >
            Skillset
          </a>
          <a
            href="#projets"
            onClick={(event) => {
              smoothScroll(event);
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(event) => {
              smoothScroll(event);
            }}
          >
            Contact me
          </a>
          <a href="#" className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <div className="info">
          <div className="text">
            <div className="footerContainer">
              <div className="socialIcons">
                <a href="https://www.instagram.com/prathhm/?hl=en">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/pratham-gupta-307913288/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Prathhm08">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://x.com/Prat_ham_?t=HEYnc-TLsKUZsFyCucl5Ig&s=09">
                  <i className="fa-brands fa-x"></i>
                </a>
              </div>
            </div>
            <h2>Hello, I&apos;m</h2>
            <h1>Pratham Gupta</h1>
            <div className="cont">
              <div className="text-wrapper" style={{ margin: "2vw" }}>
                <h2>Full Stack Web Developer</h2>
                <h2>Competitive Coder</h2>
                <h2> Data Analyst</h2>
              </div>
            </div>
          </div>
          <div className="photo-container">
            <img src={dpimage} alt="Your Photo" className="photo" />
          </div>
        </div>
      </div>
      <svg
        className="cropped-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
      >
        <path
          fill="#bac4cb"
          fillOpacity="1"
          d="M0,64L26.7,53.3C53.3,43,107,21,160,21.3C213.3,21,267,43,320,48C373.3,53,427,43,480,58.7C533.3,75,587,117,640,122.7C693.3,128,747,96,800,69.3C853.3,43,907,21,960,32C1013.3,43,1067,85,1120,122.7C1173.3,160,1227,192,1280,176C1333.3,160,1387,96,1413,64L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <div className="about" id="abt">
        <h1> About Me </h1>
        <div className="about-container">
          <img src={abtimage} alt="Your Photo" className="photo" />
          <p>
            Hey there! 👋 I&apos;m Pratham Gupta, a 21-year-old full-stack
            developer currently pursuing my B.Tech degree at National Institute
            of Technology, Goa . My journey into coding started with a
            fascination for crafting digital solutions that blend functionality
            with elegance. From tinkering with HTML as a hobby to diving deep
            into JavaScript frameworks, I&apos;ve developed a passion for
            creating seamless user experiences.
            <br />
            <br />
            Outside the world of coding, I&apos;m an avid sports enthusiast,
            always eager to hit the field or court for a game. Additionally,
            I&apos;m currently exploring the exciting field of artificial
            intelligence (AI) and learning about its applications in various
            domains.
            <br />
            <br /> I&apos;m excited about the opportunities that lie ahead in
            the ever-evolving world of technology, and I&apos;m eager to
            contribute my skills to meaningful projects. Let&apos;s connect and
            collaborate on something awesome! 🚀
          </p>
        </div>
      </div>
    </>
  );
}
