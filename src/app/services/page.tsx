import {
  DesktopOutlined,
  MobileOutlined,
  ConsoleSqlOutlined,
  DashboardFilled,
} from "@ant-design/icons";

const iconSize = { fontSize: "40px" };

const Services = () => {
  return (
    <main>
      <section id="service" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Service</h6>
          <h6 className="section-title mb-4">What I Do</h6>
          <p className="mb-5 pb-4">I do according to my fashion a like</p>

          <div className="row">
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <ConsoleSqlOutlined style={iconSize} />
                  <h5>Database development</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <DesktopOutlined style={iconSize} />
                  <h5>Web Development</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <MobileOutlined style={iconSize} />
                  <h5>Mobile Development</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                {/* <DashboardFilled /> */}
                  <DashboardFilled style={iconSize} />
                  <h5>Dashboard IOT</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
