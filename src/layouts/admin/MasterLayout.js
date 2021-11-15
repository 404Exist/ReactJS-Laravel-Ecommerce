import React, { useEffect } from "react";
import { loadScript } from "../../assets/load";

import '../../assets/admin/plugins/fontawesome-free/css/all.min.css';
import '../../assets/admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../../assets/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../../assets/admin/plugins/jqvmap/jqvmap.min.css';
import '../../assets/admin/dist/css/adminlte.min.css';
import '../../assets/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../../assets/admin/plugins/daterangepicker/daterangepicker.css';
import '../../assets/admin/plugins/summernote/summernote-bs4.min.css';


import ContentHeader from "./ContentHeader";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MasterLayout = (props) => {
  const {Content} = props;
  useEffect(() => {
    loadScript('../../assets/admin/plugins/jquery/jquery.min.js');
    loadScript('../../assets/admin/plugins/jquery-ui/jquery-ui.min.js');
    loadScript('../../assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js');
    loadScript('../../assets/admin/plugins/chart.js/Chart.min.js');
    loadScript('../../assets/admin/plugins/sparklines/sparkline.js');
    loadScript('../../assets/admin/plugins/jqvmap/jquery.vmap.min.js');
    loadScript('../../assets/admin/plugins/jqvmap/maps/jquery.vmap.usa.js');
    loadScript('../../assets/admin/plugins/jquery-knob/jquery.knob.min.js');
    loadScript('../../assets/admin/plugins/moment/moment.min.js');
    loadScript('../../assets/admin/plugins/daterangepicker/daterangepicker.js');
    loadScript('../../assets/admin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js');
    loadScript('../../assets/admin/plugins/summernote/summernote-bs4.min.js');
    loadScript('../../assets/admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js');
    loadScript('../../assets/admin/dist/js/adminlte.js');
    var loader = document.querySelector('.preloader');
    if (loader) {
      setTimeout(() => {
        loader.style.height = '0';
      }, 100);
      setTimeout(() => {
        loader.children[0].style.display = 'none';
      }, 200);
    }
  }, []);
  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">
        <div className="preloader flex-column justify-content-center align-items-center">
          <img className="animation__shake" src="../../assets/admin/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
        </div>
        <Navbar />
        <Sidebar />

        <div className="content-wrapper">
          <ContentHeader />

          <section className="content">
            <div className="container-fluid">
              <Content />
            </div>
          </section>
        </div>

        <Footer />

        <aside className="control-sidebar control-sidebar-dark"></aside>
        

      </div>

      
    </div>
  );
}

export default MasterLayout;