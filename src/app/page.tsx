/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import imgTele from "../../public/img-tele.png";
import About from "./about/page";
import Services from "./services/page";
import Hire from "./hire/page";
import {
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";

const iconSize = { fontSize: "30px", marginTop: "2px"};

export default function Home() {
  return (
    <main>
      <header className="header" id="home">
        <div className="container">
          <div className="infos">
            <h6 className="subtitle">Hello, Im</h6>
            <h6 className="title">Adi C Setiawan</h6>
            <p>Technology Enthusiast</p>

            <div className="buttons pt-3">
              <a
                href="https://wa.me/+6281310191826"
                target="_blank"
                className="btn btn-primary rounded"
                style={{ color: "#fff" }}
              >
                HIRE ME
              </a>
            </div>

            <div className="socials mt-4">
              <a
                className="social-item"
                target="_blank"
                href="https://www.facebook.com/adi.c.setiawan3/?locale=id_ID"
              >
                <FacebookFilled style={iconSize} />
              </a>
              <a
                className="social-item"
                target="_blank"
                href="https://www.instagram.com/adi.csetiawan/"
              >
                <InstagramFilled style={iconSize} />
              </a>
              <a
                className="social-item"
                target="_blank"
                href="https://gitlab.com/adichun"
              >
                <GithubFilled style={iconSize} />
              </a>
              <a
                className="social-item"
                target="_blank"
                href="https://www.linkedin.com/in/adi-chandra-setiawan-16548548/"
              >
                <LinkedinFilled style={iconSize} />
              </a>
            </div>
          </div>
          <div className="img-holder">
            <Image src={imgTele} alt="Picture not found" />
            {/* <Image src={imgTele} style={{ height: "auto", maxWidth: "100%" }} /> */}
          </div>
        </div>

        <div className="widget">
          <div className="widget-item">
            <h2>10</h2>
            <p>Happy Clients</p>
          </div>
          <div className="widget-item">
            <h2>-+10</h2>
            <p>Project Completed</p>
          </div>
          <div className="widget-item">
            <h2>-+7th</h2>
            <p>Experience</p>
          </div>
        </div>
      </header>

      <About />
      <Services />
      <Hire />
    </main>
  );
}
