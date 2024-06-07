import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  return (
    <main className={roboto.className}>
      <div className="container h-auto fixed-top navbar-white bg-white">
        <nav className="navbar navbar-expand-lg navbar-white bg-white">
          <div className="container-fluid">
            <h4>
              <label className="text-orange">ADI</label>
              <label style={{ color: "#FFBB64" }}>SETIAWAN</label>
            </h4>
            <button
              className="navbar-dark navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-dark navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service">
                    Service
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    Blog
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
