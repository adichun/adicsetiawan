import Image from "next/image";
import imgTele from "../../public/img-tele.png";
const Portfolio = () => {
  return (
    <main>
      <section id="portfolio" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Portfolio</h6>
          <h6 className="section-title mb-4">Check My Wonderful Works</h6>
          <p className="mb-5 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
            dignissimos. rerum commodi corrupti, temporibus non quam.
          </p>

          <div className="row">
            <div className="col-sm-4">
              <div className="img-wrapper">
                <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                />
                {/* <img src="assets/imgs/folio-1.jpg" alt=""> */}
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                />
                {/* <img src="assets/imgs/folio-2.jpg" alt=""> */}
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                />
                {/* <img src="assets/imgs/folio-3.jpg" alt=""> */}
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                />
                {/* <img src="assets/imgs/folio-4.jpg" alt=""> */}
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                />
                {/* <img src="assets/imgs/folio-5.jpg" alt=""> */}
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                />
                {/* <img src="assets/imgs/folio-6.jpg" alt=""> */}
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)">
                      <i className="ti-zoom-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="ti-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
