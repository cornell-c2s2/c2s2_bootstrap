import React from "react";

const Apply = () => {
  const applicationFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSehuTjELRT6yKGaCuY0TXnjhR4eqpTaZeajI8UMLWceYO_0QA/viewform?usp=publish-editor";

  return (
    <>
      <main id="main">
        <section id="apply" className="breadcrumbs">
          <div className="container">
            <div className="section-title">
              
            </div>
          </div>
        </section>

        <section id="applications" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <p>Applications</p>
            </div>

            <div className="row justify-content-center">
              <div
                className="col-md-6 col-lg-6 d-block align-items-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">Applications are not currently open!</h4>
                  <p className="description">
                    
                  </p>
                  <p className="description">
                    <a href={applicationFormUrl} target="_blank" rel="noreferrer">
                      Open application form
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Apply;
