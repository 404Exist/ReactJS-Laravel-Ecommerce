import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadScript } from "../../assets/load";

import '../../assets/frontend/css/animate.css';
import '../../assets/frontend/css/font-awesome.min.css';
import '../../assets/frontend/css/owl.carousel.min.css';
import '../../assets/frontend/css/chosen.min.css';
import '../../assets/frontend/css/style.css';
import '../../assets/frontend/css/color-01.css';


import Footer from "./Footer";
import Header from "./Header";


const MasterLayoutFront = (props) => {
  const {Content} = props;
  useEffect(() => {
    // loadStyle('https://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900,900italic&amp;subset=latin,latin-ext');
    // loadStyle('https://fonts.googleapis.com/css?family=Open%20Sans:300,400,400italic,600,600italic,700,700italic&amp;subset=latin,latin-ext');
    loadScript('../../assets/admin/plugins/jquery/jquery.min.js');
    loadScript('../../assets/admin/plugins/jquery-ui/jquery-ui.min.js');
    loadScript('../../assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js');
    loadScript('../../assets/frontend/js/bootstrap.min.js');
    loadScript('../../assets/frontend/js/owl.carousel.min.js');
    loadScript('../../assets/frontend/js/jquery.flexslider.js');
    loadScript('../../assets/frontend/js/chosen.jquery.min.js');
    loadScript('../../assets/frontend/js/jquery.countdown.min.js');
    loadScript('../../assets/frontend/js/jquery.sticky.js');
    loadScript('../../assets/frontend/js/functions.js');
  }, [])
  return (
    
    <div className="home-page home-01">
      <div className="mercado-clone-wrap">
          <div className="mercado-panels-actions-wrap">
              <Link className="mercado-close-btn mercado-close-panels" to="#">x</Link>
          </div>
          <div className="mercado-panels"></div>
      </div>
      <Header />

      <main id="main">
		    <div className="container">
          <Content />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MasterLayoutFront;