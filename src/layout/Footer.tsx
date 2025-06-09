const Footer = () => {
    return (
        <footer>
            <div className="top_footer" id="contact">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="abt_side">
                                <div className="logo"> <img src="images/footer_logo.png" alt="image" /></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem sum has been the industrys standard dummytext ever since the when an unknown printer took. </p>
                                <ul className="app_btn">
                                    <li>
                                        <a href="#">
                                            <img src="images/appstore_blue.png" alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="images/googleplay_blue.png" alt="image" />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="links">
                                <h6>Quick Links</h6>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="features.html">Features</a></li>
                                    <li><a href="blog-list.html">Blog</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="links">
                                <h6>Suport</h6>
                                <ul>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">How it works</a></li>
                                    <li><a href="#">Terms & conditions</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">

                            <h6>Subscribe us</h6>
                            <div className="news_letter">
                                <p>Subscribe our newsleter to receive latest updates regularly from us!</p>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                        <button className="btn" aria-label="subscribe"><i className="icofont-paper-plane"></i></button>
                                    </div>
                                    <p className="note">By clicking send link you agree to receive message.</p>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bottom_footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <p>© Copyrights 2025. All rights reserved.</p>
                            </div>

                            <div className="col-md-4">
                                <ul className="social_media">
                                    <li><a href="#" aria-label="facebook page"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="#" aria-label="twitter page"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="#" aria-label="instagram page"><i className="icofont-instagram"></i></a></li>
                                    <li><a href="#" aria-label="pinterest page"><i className="icofont-pinterest"></i></a></li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <p className="developer_text">Design & developed by <a href="https://mehenscreatives.com" target="blank">MEHENS TECHNOLOGIES</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;