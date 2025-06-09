import Header from "./Header";
// import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Layout = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);


    return (
        <div className="page_wrapper">

            <Header />
            <Outlet />
            {/* <Footer /> */}

            <div className="go_top" id="Gotop">
                <span><i className="icofont-arrow-up"></i></span>
            </div>

            <div className="modal fade youtube-video" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button id="close-video" type="button" className="button btn btn-default text-right" data-dismiss="modal">
                            <i className="icofont-close-line-circled"></i>
                        </button>
                        <div className="modal-body">
                            <div id="video-container" className="video-container">
                                <iframe id="youtubevideo" src="#" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

            <div className="purple_backdrop"></div>

        </div>
    );
};

export default Layout;