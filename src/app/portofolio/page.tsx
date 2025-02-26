import {
    DesktopOutlined,
    MobileOutlined,
    ConsoleSqlOutlined,
    DashboardFilled,
  } from "@ant-design/icons";
import Image from "next/image";
import activepro from "../../../public/portofolio/activepro.jpg";
import bandunggover from "../../../public/portofolio/bandunggover.jpg";
import cobit from "../../../public/portofolio/cobit.jpg";
import eclinic from "../../../public/portofolio/eclinic.png";
import igetspot from "../../../public/portofolio/igetspot.png";
import pos from "../../../public/portofolio/pos.png";
import proyekin from "../../../public/portofolio/proyekin.png";
import reebokfitness from "../../../public/portofolio/reebokfitness.jpg";
import rumahbumn from "../../../public/portofolio/rumahkreatif.jpg";
import targetfit from "../../../public/portofolio/targetfit.jpg";
import tokowadah from "../../../public/portofolio/tokowadah.png";
  
  const iconSize = { fontSize: "40px" };
  
  const Portofolio = () => {
    return (
      <main>
        <section id="portfolio" className="section">
          <div className="container text-center">
            <h6 className="subtitle">Project</h6>
            <h6 className="section-title mb-4">Our Development</h6>
            {/* <p className="mb-5 pb-4">I do according to my fashion a like</p> */}

            <div className="row">
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={activepro} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://www.activepro.co.id/" target="_blank"> <h6>Active Pro</h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={bandunggover} alt="Profile not found" className="img-thumbnail"/>
                    <a href="#" target="_blank"> <h6>Bandung City Goverment</h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={cobit} alt="Profile not found" className="img-thumbnail"/>
                    <a href="#" target="_blank"> <h6>Cobit 3</h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={eclinic} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://www.eclinic.id/" target="_blank"> <h6>E-Clinic</h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={igetspot} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://www.igetspot.com/" target="_blank"> <h6>IgetSpot</h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={pos} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://www.targetfit.com/" target="_blank"> <h6>Inventory Apps and Point of Sale (Internal Apps)</h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={proyekin} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://www.proyekin.com/" target="_blank"> <h6>Proyekin : Kebutuhan Pengecoran Terpercaya</h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={reebokfitness} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://www.reebokfitness.com/" target="_blank"> <h6>Reebok Fitness : Gym Ecommerce </h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={rumahbumn} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://dev.rumahbumn.id/" target="_blank"> <h6>Rumah Kreatif BUMN </h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={targetfit} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://targetfit.co.id/" target="_blank"> <h6>Ecommerce Gym</h6> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3" style={{ marginBottom:"10px"}}>
                <div className="custom-card card border">
                  <div className="card">
                    <Image src={tokowadah} alt="Profile not found" className="img-thumbnail"/>
                    <a href="https://tokowadah.com/" target="_blank"> <h6>Industrial Ecommerce</h6> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Portofolio;
  