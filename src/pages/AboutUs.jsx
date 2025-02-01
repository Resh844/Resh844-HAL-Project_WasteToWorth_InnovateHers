import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/AboutUs.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import config from "../config.js";
function AboutUS() {
  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
      body1: {
        fontWeight: "600",
        fontSize: "large",
      },
    },
  });

  const { isLoggedIn, setIsLoggedIn, setRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      isLoggedIn &&
      !(
        window.localStorage.getItem("token") !== null &&
        window.localStorage.getItem("role") !== null
      )
    ) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("role");
      setIsLoggedIn(false);
      setRole("");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <ThemeProvider theme={theme}>
        <div>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
          />

          <section className="section services-section" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h2 style={{ fontFamily: "Quicksand" }}>About US</h2>
                    <p style={{ fontFamily: "Quicksand" }}>
                    "
                    At WasteKnot, we connect food waste sources like meat shops and markets with animal caretakers, NGOs, and composting agencies to reduce waste and support sustainability. 
                    Our platform ensures surplus food is efficiently redirected instead of discarded, benefiting both the environment and communities in need.
                    Join us in creating a waste-free future by turning excess food into a valuable resource!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-12">
                  <div className="feature-box-1">
                    <div className="icon">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="feature-content">
                      <div
                        className="mt-1 mb-1 my-div"
                        style={{ fontFamily: "Quicksand" }}
                      >
                        Members
                      </div>
                      <h5 style={{ fontFamily: "Quicksand" }}>
                        <a style={{ textDecoration: "none" }}
                          href="https://www.linkedin.com/in/dharmesh-kota-8a9810268/"
                          target="_blank"
                        >
                          Charushila Koralli
                        </a>
                      </h5>
                      <h5 style={{ fontFamily: "Quicksand" }}>
                        <a style={{ textDecoration: "none" }}
                          href="https://www.linkedin.com/in/manoj-dhundhalva-62ba0b24b/"
                          target="_blank"
                        >
                          Reshma N Hegde
                        </a>
                      </h5>
                      <h5 style={{ fontFamily: "Quicksand" }}>
                        <a style={{ textDecoration: "none" }}
                          href="https://www.linkedin.com/in/devangsvaghani/"
                          target="_blank"
                        >
                          Dhanya Hegde
                        </a>
                      </h5>
                      <h5 style={{ fontFamily: "Quicksand" }}>
                        <a style={{ textDecoration: "none" }}
                          href="https://www.linkedin.com/in/rhythm-panchal-108398253/"
                          target="_blank"
                        >
                          Nidhi Bhagwath
                        </a>
                      </h5>
              
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="feature-box-1">
                    
                    <div className="feature-content">
                      <h5 style={{ fontFamily: "Quicksand" }}>Mission:<br/>Our mission is to connect waste producers with NGOs and composting agencies via GPS, transforming waste into valuable resources for a sustainable future.</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="feature-box-1">
                    
                    <div className="feature-content">
                      <h5 style={{ fontFamily: "Quicksand" }}>What We Do<br/>
                       Redirect Waste: Connect producers with NGOs and shelters.<br/>
                       Promote Composting: Turn waste into valuable compost.<br/>
                       Build Networks: Foster partnerships for sustainability.</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="feature-box-1">
                    
                    <div className="feature-content">
                      <h5 style={{ fontFamily: "Quicksand" }}>Our Vision<br/>
                        A world where waste no longer harms the environment but becomes a resource that enriches lives and sustains future generations.

                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="feature-box-1">
                    <div className="feature-content">
                      <h5 style={{ fontFamily: "Quicksand" }}>Why Choose Us?<br/>
                       Eco-Friendly: Transforming waste responsibly.<br/>
                       Community Support: Redistributing food to NGOs.<br/>
                       Smart Tech: GPS-based waste solutions..</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="feature-box-1">
                  
                    <div className="feature-content">
                      <h5 style={{ fontFamily: "Quicksand" }}>Join Us:<br/>
                      Be a part of the movement to turn waste into worth.Together, we can create a cleaner, greener, and more sustainable world.</h5>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default AboutUS;
