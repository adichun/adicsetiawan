import Image from "next/image";
import imgTele from "../../../public/avatar.jpeg";
const About = () => {
  return (
    <main>
      <section id="about" className="section mt-3">
        <div className="container mt-5">
          <div className="row text-center text-md-left">
            <div className="col-md-3">
              <Image
                src={imgTele}
                alt="Profile not found"
                className="img-thumbnail"
              />
            </div>
            <div className="pl-md-4 col-md-9">
              <h6 className="title">Adi C Setiawan</h6>
              <p className="subtitle">
                Fullstack Engineer | Enthusiast Technology
              </p>
              <p>
                Hello Everyone, Im AdiChan, a programmer passionate about
                creating innovative and efficient technology solutions. I have
                spent several years in the industry, honing my skills in
                software development and system design. My experience is
                approximately 7 years and covers a wide range of projects, from
                web application development to Web-Based, IOT, Desktop and Mobile
                software development. I am particularly interested in emerging
                technologies such as artificial intelligence, cloud computing,
                and distributed software development.
              </p>
              <p>
                In addition to technical skills, I also believe that solid team
                collaboration is the key to project success. I have good
                experience in working in cross-disciplinary teams and have good
                communication skills. Outside of work, I like to keep up with
                the latest developments in the world of technology and
                contribute to the developer community by sharing my knowledge
                and experience. I also enjoy learning new things and constantly
                improving myself. I am excited to join a dynamic and
                innovation-oriented team, where I can contribute significantly
                to creating inspiring solutions. Thank you for this opportunity,
                I really look forward to collaborating with all of you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
