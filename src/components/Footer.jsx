import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container" id="contact">
        {/* <div className="footer-col">
          <h2>Logo</h2>
          <p className="footer-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            labore quod ipsa eos magnam? Architecto quas magnam mollitia nemo
          </p>
        </div> */}
        {/* <div className="footer-col">
          <h3 className="text-office">
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>Street No 5</p>
          <p>Gulistan Colony</p>
          <p></p>

          <p className="email">info.finegap@gmail.com</p>
          <p className="phone">+92 304 110 0028</p>
        </div> */}
        <div className="footer-col">
          <h3>
            Menu
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul style={{ display: "flex" }}>
            <li>
              <a href="#" className="lin">
                Home
              </a>
            </li>
            <li>
              <a href="#abt" className="lin">
                About
              </a>
            </li>

            <li>
              <a href="#projets" className="lin">
                Projects
              </a>
            </li>
            <li>
              <a href="#sks" className="lin">
                Skillset
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>
            Contact me
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form action="">
            <i className="fa-solid fa-envelope"></i>
            <input type="text" placeholder="Enter Company Email" />
            <a href="">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </form>
          <div className="social-icons">
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
      </div>
      <p style={{ position: "absolute" }}>© 2024 Pratham Gupta</p>
      <p className="love">Made with ❤️</p>
    </footer>
  );
}
