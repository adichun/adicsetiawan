const Blog = () => {
  return (
    <main>
      <section id="blog" className="section">
        <div className="container text-center">
          <h6 className="subtitle">My Blogs</h6>
          <h6 className="section-title mb-4">Latest News</h6>
          <p className="mb-5 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
            dignissimos. rerum commodi corrupti, temporibus non quam.
          </p>

          <div className="row text-left">
            <div className="col-md-4">
              <div className="card border mb-4">
                {/* <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                /> */}
                {/* <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100"> */}
                <div className="card-body">
                  <h5 className="card-title">Designe for Everyone</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)">
                      <i className="ti-thumb-up"></i> 456
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-comment"></i> 123
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    ad vel dolorum, iusto velit, minima? Voluptas nemo harum
                    impedit nisi.
                  </p>
                  <a href="javascript:void(0)">Read More..</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border mb-4">
                {/* <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                /> */}
                {/* <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100"> */}
                <div className="card-body">
                  <h5 className="card-title">Web Layouts</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)">
                      <i className="ti-thumb-up"></i> 456
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-comment"></i> 123
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    ad vel dolorum, iusto velit, minima? Voluptas nemo harum
                    impedit nisi.
                  </p>
                  <a href="javascript:void(0)">Read More..</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border mb-4">
                {/* <Image
                  className="px-3"
                  src={imgTele}
                  style={{ height: "auto", maxWidth: "100%" }}
                /> */}
                {/* <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100"> */}
                <div className="card-body">
                  <h5 className="card-title">Bootstrap Framework</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)">
                      <i className="ti-thumb-up"></i> 456
                    </a>
                    <a href="javascript:void(0)">
                      <i className="ti-comment"></i> 123
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    ad vel dolorum, iusto velit, minima? Voluptas nemo harum
                    impedit nisi.
                  </p>
                  <a href="javascript:void(0)">Read More..</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
