// import AppStoreButton from "../components/AppStoreButton";
// import PlayStoreButton from "../components/PlayStoreButton";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import OwlCarousel from 'react-owl-carousel';
import { submitNewUser } from "../services/waitlistService";
import { closeProcessing, showError, showProcessing } from "../utils/sweetAlert";
import { handleApiError } from "../utils/apiErrorHandle";

const options = {
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    items: 1,
    autoWidth: false,
    responsive: {
        0: { items: 1 }
    }
};

export function BannerSlider() {
    return (
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item"><img src="images/hero_slide1.png" alt="slide 1" /></div>
            <div className="item"><img src="images/hero_slide2.png" alt="slide 2" /></div>
            <div className="item"><img src="images/hero_slide3.png" alt="slide 3" /></div>
        </OwlCarousel>
    );
}

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showProcessing("Please wait", "Adding you to the waitlist...");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
        full_name: formData.get("fullName") as string,
        email: formData.get("email") as string,
        phone_number: formData.get("phone") as string,
    };

    try {
        await submitNewUser(data);
        showProcessing("Success", "🎉 You’ve joined the waitlist! We’ll keep you updated. Redirecting you to our Telegram community in a few seconds...");
        form.reset();

        setTimeout(() => {
            window.open("https://t.me/sewpro_app", "_blank");
            closeProcessing();
        }, 3000);
    } catch (error) {
        const apiError = handleApiError(error);
        showError("Submission Failed", apiError.message);
    }
}

type WaitlistFormProps = {
    className?: string;
};

function WaitlistForm({ className }: WaitlistFormProps) {
    return (
        <form className={`waitlist-form ${className ? ` ${className}` : ""}`} onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    placeholder="First Name Surname"
                    required
                />
            </div>
            <div className="form-row mb-3" style={{ display: "flex", gap: 16 }}>
                <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Enter your Phone Number"
                        required
                    />
                </div>
            </div>
            <button type="submit" className="btn puprple_btn w-100">
                Join the Waitlist
            </button>
        </form>
    );
}

const Home = () => {
    return (
        <>
            <section className="banner_section">

                <div className="dotes_anim_bloack">
                    {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className={`dots dotes_${i + 1}`}></div>
                    ))}
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="1500">
                            <div className="banner_text">

                                <div className="type-wrap">
                                    <Typewriter />
                                </div>

                                <h1><span>Design</span>, <span>Organize</span> and <span>Grow</span> your <span>Tailoring Brand</span> with your virtual assistant.</h1>

                                <p>Track orders, store measurements, send reminders, create styles, recieve payments and manage your tailoring business in one place.</p>
                            </div>


                            <WaitlistForm className="d-none d-md-block" />



                            {/* <ul className="app_btn">
                                <li>
                                    <AppStoreButton type="white" />
                                </li>
                                <li>
                                    <PlayStoreButton type="white" />
                                </li>
                            </ul> */}

                        </div>

                        <div className="col-lg-6 col-md-12" data-aos="fade-in" data-aos-duration="1500">
                            <div className="banner_slider">
                                <div className="left_icon">
                                    <img src="images/message_icon.png" alt="image" />
                                </div>
                                <div className="right_icon">
                                    <a href="https://themeforest.net/user/kalanidhithemes/portfolio">
                                        <img src="images/sewpro_icon.svg" alt="image" className="moving_position_animatin" />
                                    </a>
                                </div>

                                {/* Show the carousel inside the mobile frame */}
                                <div className="slider_frame" style={{ position: "relative" }}>
                                    <div style={{
                                        position: "absolute",
                                        top: "10%",
                                        left: "3%",
                                        width: "95%",
                                        height: "80%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        pointerEvents: "none"
                                    }}>
                                        <div style={{ width: "112%", height: "122%", borderRadius: '2rem', pointerEvents: "auto", overflow: "hidden" }}>
                                            <BannerSlider />
                                        </div>
                                    </div>


                                    <img src="images/mobile_frame_svg.svg" alt="image" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
                                </div>
                            </div>

                            <div className="d-block d-md-none mt-3 p-3">
                                <WaitlistForm />
                            </div>
                        </div>

                    </div>

                </div >
            </section >

            <div className="text_list_section row_am">
                <div className="container">
                </div>
                <div className="slider_block text-center">

                    <div>
                        <span className="text-white fw-bold">
                            &copy; {new Date().getFullYear()} SewPro
                        </span>
                        <span className="text-white-50 mx-2">|</span>
                        <span className="text-white-50">
                            All rights reserved.
                        </span>
                        <span className="text-white-50 mx-2">|</span>
                        <a
                            href="https://t.me/sewpro_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-decoration-underline"
                        >Join our Telegram Community
                        </a>
                    </div>

                    {/* <OwlCarousel
                        className="owl-theme"
                        id="text_list_flow"
                        items={4}
                        margin={20}
                        loop
                        autoplay
                        dots={false}
                        nav={false}
                        autoplayTimeout={2000}
                        autoplaySpeed={10000}
                        smartSpeed={10}
                        autoplayHoverPause={false}
                        responsive={{
                            0: { items: 2 },
                            600: { items: 3 }
                        }}
                        animateOut={undefined}
                        animateIn={undefined}
                    >
                        <div className="item">
                            <div className="text_block">
                                <span> 24/7 Support</span>
                                <span className="mark_star">•</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text_block">
                                <span> Live Chat</span>
                                <span className="mark_star">•</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text_block">
                                <span>AI Featured </span>
                                <span className="mark_star">•</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text_block">
                                <span>Tailors</span>
                                <span className="mark_star">•</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text_block">
                                <span>Community</span>
                                <span className="mark_star">•</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text_block">
                                <span>Live Chat</span>
                                <span className="mark_star">•</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text_block">
                                <span>Join Our Community </span>
                                <span className="mark_star">•</span>
                            </div>
                        </div>
                    </OwlCarousel> */}

                </div>
            </div>

            {/* <section className="row_am whychoose_section">

                <div className="element">
                    <span className="element1"> <img src="images/element1.png" alt="image" /> </span>
                    <span className="element2"> <img src="images/element2.png" alt="image" /> </span>
                </div>

                <div className="inner_sec">
                    <div className="container">
                        <div className="section_title top_content" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                            <span className="title_badge mb-1">Best features</span>
                            <h2>Why choose us</h2>
                            <p>Lorem Ipsum is simply dummy text of the print ing andtyptting industrythe print ing andtyptting industry.</p>
                        </div>
                        <div className="row whychoose_dh">
                            <div className="col-lg-6">

                                <div className="whychoose_box">
                                    <div className="choose_icon"><img src="images/functional-icon.png" alt="image" /></div>
                                    <div className="choose_text">
                                        <h6>Fully functional</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing andtyptting industry andtyptting industry lorem Ipsum has.</p>
                                    </div>
                                </div>

                                <div className="whychoose_box">
                                    <div className="choose_icon"><img src="images/protected-icon.png" alt="image" /></div>
                                    <div className="choose_text">
                                        <h6>Safe & Protected</h6>
                                        <p>Simply dummy text of the printing andtyptting industry andtyptting industry lorem Ipsum has Ipsum standard.</p>
                                    </div>
                                </div>

                                <div className="whychoose_box mb-1">
                                    <div className="choose_icon"><img src="images/support-icon.png" alt="image" /></div>
                                    <div className="choose_text">
                                        <h6>24/7 Support</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing andtyptting industry andtyptting industry lorem.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="whychoose_support">
                                    <div className="choose_img"><img src="images/feature-img.png" alt="image" /></div>
                                    <div className="choose_play"><a className="popup-youtube play-button" data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU"><img src="images/play-icon.png" alt="image" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}

            {/* <section className="row_am service_section best_features">
                <div className="inner_sec">
                    <div className="container">

                        <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                            <span className="title_badge mb-1">what we provide</span>
                            <h2>Best features </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </div>

                        <div className="row service_blocks">

                            <div className="col-lg-1 col-md-12"></div>

                            <div className="col-lg-5 col-md-12">
                                <div className="service_text" data-aos="fade-up" data-aos-duration="1500">

                                    <span className="section_icon"> <img src="images/bf_ico1.png" alt="image" /> </span>

                                    <h4> Easily <span> connect</span> with your <span>customers. </span></h4>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has been the industry lorem Ipsum industr standard dummy text since. </p>


                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="img" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="moving_position_animatin" src="images/best-feature-1.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="row service_blocks flex-row-reverse">

                            <div className="col-lg-6 col-md-12">
                                <div className="service_text right_side" data-aos="fade-up" data-aos-duration="1500">
                                    <span className="section_icon"> <img src="images/bf_ico2.png" alt="image" /> </span>

                                    <h4>Easy <span> Bill management </span> lorem ipsum. </h4>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="img" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="moving_position_animatin" src="images/best-feature-2.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="row service_blocks">

                            <div className="col-lg-1 col-md-12"></div>

                            <div className="col-lg-5 col-md-12">
                                <div className="service_text" data-aos="fade-up" data-aos-duration="500">
                                    <span className="section_icon"> <img src="images/bf_ico3.png" alt="image" /> </span>
                                    <h4><span> Report history </span> with notifications. </h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typtting industry lorem typtting industry lorem Ipsum has been the industrys standard dummy text.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="img" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="moving_position_animatin" src="images/best-feature-3.png" alt="image" />
                                </div>
                            </div>

                        </div>

                        <div className="row app_blocks justify-content-md-center">
                            <h6>Download app to get started</h6>
                            <ul className="app_btn">
                                <li>
                                    <AppStoreButton />
                                </li>
                                <li>
                                    <PlayStoreButton />
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section> */}

            {/* <section className="row_am howwork_section">

                <div className="dotes_anim_bloack">
                    <div className="dots dotes_1"></div>
                    <div className="dots dotes_2"></div>
                    <div className="dots dotes_3"></div>
                    <div className="dots dotes_4"></div>
                    <div className="dots dotes_5"></div>
                    <div className="dots dotes_6"></div>
                    <div className="dots dotes_7"></div>
                    <div className="dots dotes_8"></div>
                    <div className="dots dotes_9"></div>
                    <div className="dots dotes_10"></div>
                </div>

                <div className="inner_sec">
                    <div className="container">
                        <div className="section_title aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <span className="title_badge mb-1">Easy Steps</span>
                            <h2>3 Easy steps to start it</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe dummy.</p>
                        </div>
                        <div className="row work_blocks">
                            <div className="col-lg-4 col-md-12">
                                <div className="work_box">
                                    <div className="work_title">
                                        <h6>Download App <br /> & Register</h6>
                                        <img src="images/app-register-icon.png" alt="image" className="work_icon" />
                                    </div>
                                    <div className="work_text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typeset industry lorem Ipsum has.</p>
                                    </div>
                                    <div className="work_step">
                                        <div className="step-box">01</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="work_box">
                                    <div className="work_title">
                                        <h6>Verify your <br /> Account</h6>
                                        <img src="images/verify-icon.png" alt="image" className="work_icon" />
                                    </div>
                                    <div className="work_text">
                                        <p>Dummy text of the printing and typesetting industry lorem Ipsum has been the industrys.</p>
                                    </div>
                                    <div className="work_step">
                                        <div className="step-box">02</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="work_box">
                                    <div className="work_title">
                                        <h6>Start <br /> Using smart app</h6>
                                        <img src="images/transaction-icon.png" alt="image" className="work_icon" />
                                    </div>
                                    <div className="work_text">
                                        <p>Printing and typesetting industry lorem Ipsum has been the indus trys standard dummy.</p>
                                    </div>
                                    <div className="work_step">
                                        <div className="step-box">03</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row device_img justify-content-md-center">
                            <img src="images/mobile-img.png" className="moving_position_animatin" alt="image" />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="row_am elevate_growth_section section_inner_padding">

                <div className="element">
                    <span className="element1"> <img src="images/element1.png" alt="image" /> </span>
                    <span className="element2"> <img src="images/element2.png" alt="image" /> </span>
                </div>

                <div className="inner_sec">
                    <div className="container">
                        <div className="row growth_title ">
                            <div className="col-md-6">
                                <div className="section_title white_text aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                                    <span className="title_badge mb-1">about us</span>
                                    <h2>Elevate your growth with our smart app</h2>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="growth_title_text white_text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>

                        </div>

                        <div className="row growth_img">
                            <div className="col-md-12">
                                <img src="images/app-img.png" alt="image" />
                                <div className="watch-video">
                                    <a className="popup-youtube play-button watch_btn" data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU"><i className="icofont-play-alt-1"></i> Watch video</a>
                                    <img src="images/arrow1.png" alt="image" className="arrow_icon" />
                                </div>
                            </div>
                        </div>

                        <div className="row growth_usp white_text">
                            <ul className="growth_static" id="counter">

                                <div className="col-sm-4 ">
                                    <li>
                                        <div className="counter_box">
                                            <div className="icon">
                                                <img src="images/happy-icon.png" alt="image" />
                                            </div>
                                            <div className="text">
                                                <p><span className="counter-value" data-count="17">17</span><span>m+</span></p>
                                                <p>Happy Users</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>

                                <div className="col-sm-4">
                                    <li>
                                        <div className="counter_box">
                                            <div className="icon">
                                                <img src="images/star-icon.png" alt="image" />
                                            </div>
                                            <div className="text">
                                                <p><span className="counter-value" data-count="50">50</span><span>k+</span></p>
                                                <p>Positive Reviews</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>

                                <div className="col-sm-4">
                                    <li>
                                        <div className="counter_box">
                                            <div className="icon">
                                                <img src="images/time-icon.png" alt="image" />
                                            </div>
                                            <div className="text">
                                                <p><span className="counter-value" data-count="4">4</span><span>x</span></p>
                                                <p>Fater Process</p>
                                            </div>
                                        </div>
                                    </li>
                                </div>

                            </ul>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* <section className="row_am two_colom_section">
                <div className="container">
                    <div className="row service_blocks customer_payment">
                        <div className="col-lg-6 col-md-12">
                            <div className="img" data-aos="fade-up" data-aos-duration="1500">
                                <img src="images/twocolomimg1.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="service_text" data-aos="fade-up" data-aos-duration="1500">
                                <div className="title_badge"> <i className="icofont-tasks-alt"> </i>
                                    <span>customer first</span>
                                </div>

                                <h3> Easily payment to customers</h3>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummytext.</p>

                                <ul className="listing_block">
                                    <li>
                                        <div className="icon">
                                            <span><i className="icofont-ui-check"></i></span>
                                        </div>
                                        <div className="text">
                                            <h6>Trusted & reliable</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span><i className="icofont-ui-check"></i></span>
                                        </div>
                                        <div className="text">
                                            <h6>Cloud storage</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="btn_block">
                                    <a href="#" className="btn puprple_btn aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">Get Started</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row service_blocks sb_2">

                        <div className="col-lg-6 col-md-12">

                            <div className="service_text left_side" data-aos="fade-up" data-aos-duration="1500">

                                <div className="title_badge "><i className="icofont-ui-clock"></i>
                                    <span>super functions</span>
                                </div>

                                <h3> View real time report analysis </h3>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy.</p>

                                <ul className="feature_list">
                                    <li>
                                        <div className="icon">
                                            <span><i className="icofont-check-circled"></i></span>
                                        </div>
                                        <div className="text">
                                            <p>Lorem Ipsum is simply dummy text</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span><i className="icofont-check-circled"></i></span>
                                        </div>
                                        <div className="text">
                                            <p>The printing and typesetting industry lorem</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span><i className="icofont-check-circled"></i></span>
                                        </div>
                                        <div className="text">
                                            <p>Has been the industrys dummy</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="btn_block">
                                    <a href="#" className="btn puprple_btn aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">Get Started</a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="img" data-aos="fade-up" data-aos-duration="1500">
                                <img src="images/twocolomimg2.png" alt="image" />
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}

            {/* <section className="row_am visitors_leads">
                <div className="container lead_inner">

                    <div className="convert_leads">
                        <div className="section_title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <span className="title_badge lighter mb-1">key Notes</span>
                            <h2>Smart features</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-secure-tab" data-toggle="pill" href="#v-pills-secure" role="tab" aria-controls="v-pills-secure" aria-selected="true">Highly Secured</a>
                                <a className="nav-link" id="v-pills-advisor-tab" data-toggle="pill" href="#v-pills-advisor" role="tab" aria-controls="v-pills-advisor" aria-selected="false">Expert Advisor</a>
                                <a className="nav-link" id="v-pills-process-tab" data-toggle="pill" href="#v-pills-process" role="tab" aria-controls="v-pills-process" aria-selected="false">Easy Process</a>
                                <a className="nav-link" id="v-pills-controll-tab" data-toggle="pill" href="#v-pills-controll" role="tab" aria-controls="v-pills-controll" aria-selected="false">Fully Controlized</a>
                                <a className="nav-link" id="v-pills-Commission-tab" data-toggle="pill" href="#v-pills-Commission" role="tab" aria-controls="v-pills-Commission" aria-selected="false">Low Commission</a>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="tab-content" id="v-pills-tabContent">

                                <div className="card tab-pane show active" id="v-pills-secure" role="tabpanel" aria-labelledby="v-pills-secure-tab">
                                    <div className="card-header" role="tab" id="v-collapse-heading-home">
                                        <a data-toggle="collapse" href="#v-collapse-home" data-parent="#v-pills-tabContent" aria-expanded="true" aria-controls="v-collapse-home">
                                            Highly Secured <div className='card-arrow'></div>
                                        </a>
                                    </div>
                                    <div id="v-collapse-home" className="collapse show" role="tabpanel" aria-labelledby="v-collapse-heading-home" data-parent="#v-pills-tabContent">
                                        <div className="card-body">
                                            <div className="row">

                                                <div className="col-md-7">
                                                    <div className="lead_text">
                                                        <h5>Highly Secured</h5>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem sum has been the industrys standard dummytext ever since the when an unknown printer took a galley of type and.</p>

                                                        <ul className="feature_list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Lorem Ipsum is simply dummy </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>The printing and typesetting industry </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Has been the industrys dummy</p>
                                                                </div>
                                                            </li>
                                                        </ul>

                                                        <div className="btn_block">
                                                            <a href="#" className="btn light_btn aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">Get Started</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="col-md-5">
                                                    <img src="images/lead_img.png" className="lead_img" alt="image" />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="card tab-pane" id="v-pills-advisor" role="tabpanel" aria-labelledby="v-pills-advisor-tab">
                                    <div className="card-header" role="tab" id="v-collapse-heading-profile">
                                        <a data-toggle="collapse" href="#v-collapse-advisor" data-parent="#v-pills-tabContent" aria-expanded="false" aria-controls="v-collapse-advisor">
                                            Expert Advisor <div className='card-arrow'></div>
                                        </a>
                                    </div>

                                    <div id="v-collapse-advisor" className="collapse" role="tabpanel" aria-labelledby="v-collapse-heading-advisor" data-parent="#v-pills-tabContent">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="lead_text">
                                                        <h5>Expert Advisor</h5>
                                                        <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris
                                                            ipsum velit id veniam. Quis ut. </p>
                                                        <ul className="feature_list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Lorem Ipsum is simply dummy </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>The printing and typesetting lorem</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Has been the industrys dummy</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="btn_block">
                                                            <a href="#" className="btn light_btn aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">Get Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <img src="images/lead_img2.png" className="lead_img" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card tab-pane" id="v-pills-process" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div className="card-header" role="tab" id="v-collapse-heading-process">
                                        <a data-toggle="collapse" href="#v-collapse-process" aria-expanded="false" aria-controls="v-collapse-process">
                                            Easy Process <div className='card-arrow'></div>
                                        </a>
                                    </div>
                                    <div id="v-collapse-process" className="collapse" role="tabpanel" aria-labelledby="v-collapse-heading-process" data-parent="#v-pills-tabContent">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="lead_text">
                                                        <h5>Easy Process</h5>
                                                        <p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla.</p>
                                                        <ul className="feature_list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>The printing and typesetting industry </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Lorem Ipsum is simply text </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Industrys dummy Has the. </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="btn_block">
                                                            <a href="#" className="btn light_btn aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">Get Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <img src="images/lead_img.png" className="lead_img" alt="image" />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="card tab-pane" id="v-pills-controll" role="tabpanel" aria-labelledby="v-pills-controll-tab">
                                    <div className="card-header" role="tab" id="v-collapse-heading-controll">
                                        <a data-toggle="collapse" href="#v-collapse-controll" aria-expanded="false" aria-controls="v-collapse-controll">
                                            Fully Controlized <div className='card-arrow'></div>
                                        </a>
                                    </div>
                                    <div id="v-collapse-controll" className="collapse" role="tabpanel" aria-labelledby="v-collapse-heading-controll" data-parent="#v-pills-tabContent">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="lead_text">
                                                        <h5>Fully Controlized</h5>
                                                        <p>Fugiat1 id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit
                                                            et et proident Lorem. </p>
                                                        <ul className="feature_list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Simply dummy text lorem Ipsum </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Printing and typesetting industry </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Has industrys dummy been the </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="btn_block">
                                                            <a href="#" className="btn light_btn aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">Get Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <img src="images/lead_img2.png" className="lead_img" alt="image" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="card tab-pane" id="v-pills-Commission" role="tabpanel" aria-labelledby="v-pills-Commission-tab">
                                    <div className="card-header" role="tab" id="v-collapse-heading-Commission">
                                        <a data-toggle="collapse" href="#v-collapse-Commission" aria-expanded="false" aria-controls="v-collapse-Commission">
                                            Low Commission <div className='card-arrow'></div>
                                        </a>
                                    </div>
                                    <div id="v-collapse-Commission" className="collapse" role="tabpanel" aria-labelledby="v-collapse-heading-Commission" data-parent="#v-pills-tabContent">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="lead_text">
                                                        <h5>Low Commission
                                                            <div className='card-arrow'></div>
                                                        </h5>
                                                        <p>Fugiat2 id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit
                                                            et et proident.</p>
                                                        <ul className="feature_list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Typesetting Ipsum is dummy text </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>The printing and typesetting industry </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span><i className="icofont-check-circled"></i></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Industry has been the industrys </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="btn_block">
                                                            <a href="#" className="btn light_btn aos-init aos-animate" data-aos="fade-in" data-aos-duration="1500">Get Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <img src="images/lead_img.png" className="lead_img" alt="image" />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="row_am testimonial_section home_testimonial section_inner_padding">

                <div className="dotes_anim_bloack">
                    <div className="dots dotes_1"></div>
                    <div className="dots dotes_2"></div>
                    <div className="dots dotes_3"></div>
                    <div className="dots dotes_4"></div>
                    <div className="dots dotes_5"></div>
                    <div className="dots dotes_6"></div>
                    <div className="dots dotes_7"></div>
                    <div className="dots dotes_8"></div>
                    <div className="dots dotes_9"></div>
                    <div className="dots dotes_10"></div>
                </div>

                <div className="container">
                    <div className="section_title">
                        <span className="title_badge mb-1"> Reviews </span>
                        <h2>Client Testimonials</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe dummy.</p>
                    </div>

                    <div className="testimonial_slides">
                        <div className="owl-carousel owl-theme" id="testimonial_slider1">

                            <div className="item">
                                <div className="testimonial_box">
                                    <div className="testi_img">
                                        <img className="user_img" src="images/user_img1.png" alt="image" />
                                        <div className="user_info">
                                            <h6>Jorden Smith </h6>
                                            <p>Finserve Ltd.</p>
                                            <div className="star">
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testi_text">
                                        <h4>“Increadeble Support and Services</h4>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummytextever since the.</p>
                                    </div>
                                    <div className="testi-corner">
                                        <div className="bg-box"><img src="images/testimonial-corner-bg.png" alt="image" /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial_box">
                                    <div className="testi_img">
                                        <img className="user_img" src="images/testimonial_02.png" alt="image" />
                                        <div className="user_info">
                                            <h6>Cyrus Loy </h6>
                                            <p>Finance Company</p>
                                            <div className="star">
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testi_text">
                                        <h4>“Easy and User Friendly Application “</h4>
                                        <p> Simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dumm ytextever since the printing and typesett.</p>
                                    </div>
                                    <div className="testi-corner">
                                        <div className="bg-box"><img src="images/testimonial-corner-bg.png" alt="image" /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial_box">
                                    <div className="testi_img">
                                        <img className="user_img" src="images/testimonial_03.png" alt="image" />
                                        <div className="user_info">
                                            <h6>Willium Joy, </h6>
                                            <p>Smartbrain Tech</p>
                                            <div className="star">
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                                <span><i className="icofont-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testi_text">
                                        <h4>“Increadeble Support and Services</h4>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummytextever since the.</p>
                                    </div>
                                    <div className="testi-corner">
                                        <div className="bg-box"><img src="images/testimonial-corner-bg.png" alt="image" /></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="btn_block">
                        <a href="#" className="btn puprple_btn aos-init aos-animate" data-aos="fade-in">View More Testimonials</a>
                    </div>
                </div>

            </section> */}

            {/* <section className="row_am trusted_section section_inner_top_padding">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                        <h2>Trusted by 150+ companies</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                    </div>

                    <div className="company_logos">
                        <div id="company_slider" className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="logo">
                                    <img src="images/paypal.png" alt="image" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src="images/spoty.png" alt="image" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src="images/shopboat.png" alt="image" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src="images/slack.png" alt="image" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src="images/envato.png" alt="image" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src="images/paypal.png" alt="image" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src="images/spoty.png" alt="image" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="logo">
                                    <img src="images/shopboat.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="row_am pricing_section" id="pricing">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">

                        <span className="title_badge mb-1">Pricing</span>
                        <h2>Best packages</h2>
                    </div>
                    <div className="toggle_block" data-aos="fade-up" data-aos-duration="1500">
                        <span className="month active">Monthly</span>
                        <div className="tog_block">
                            <span className="tog_btn"></span>
                        </div>
                        <span className="years">Yearly</span>
                        <span className="offer">50% off</span>
                    </div>

                    <div className="pricing_pannel monthly_plan active" data-aos="fade-up" data-aos-duration="1500">
                        <div className="row">
                            <div className="col-md-4">

                                <div className="pricing_block">
                                    <div className="pkg_icon">
                                        <img src="images/pkg1.png" alt="image" />
                                    </div>
                                    <div className="pkg_name">
                                        <h6>Regular</h6>
                                    </div>
                                    <span className="price">$199 <span > / month </span> </span>

                                    <div className="benifits_block">

                                        <ul className="benifits">
                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Digital Transactions</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Send - Receive payment</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Limited number of users</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Online Banking</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-close-circled"></i></span>
                                                <p>Basic reporting and analytics</p>
                                            </li>

                                        </ul>
                                        <a href="#" className="btn puprple_btn aos-init aos-animate"> Buy Now </a>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="pricing_block highlited_block">
                                    <span className="offer">Popular</span>
                                    <div className="pkg_icon">
                                        <img src="images/pkg2.png" alt="image" />
                                    </div>

                                    <div className="pkg_name">
                                        <h6>Special</h6>
                                    </div>
                                    <span className="price">$299 <span > / month </span> </span>

                                    <div className="benifits_block highlited_block">

                                        <ul className="benifits">
                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Digital Transactions</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Send - Receive payment</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Limited number of users</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Online Banking</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Basic reporting and analytics</p>
                                            </li>

                                        </ul>
                                        <a href="#" className="btn puprple_btn aos-init aos-animate"> Buy Now </a>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="pricing_block">
                                    <div className="pkg_icon">
                                        <img src="images/pkg3.png" alt="image" />
                                    </div>

                                    <div className="pkg_name">
                                        <h6>Premium</h6>
                                    </div>
                                    <span className="price">$399 <span > / month </span> </span>

                                    <div className="benifits_block">

                                        <ul className="benifits">
                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Digital Transactions</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Send - Receive payment</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Limited number of users</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Online Banking</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-close-circled"></i></span>
                                                <p>Basic reporting and analytics</p>
                                            </li>

                                        </ul>
                                        <a href="#" className="btn puprple_btn aos-init aos-animate"> Buy Now </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="pricing_pannel yearly_plan">
                        <div className="row">

                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="pkg_icon">
                                        <img src="images/pkg1.png" alt="image" />
                                    </div>

                                    <div className="pkg_name">
                                        <h6>Regular</h6>
                                    </div>
                                    <span className="price">$99 <span > / month </span> </span>

                                    <div className="benifits_block">

                                        <ul className="benifits">
                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Digital Transactions</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Send - Receive payment</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Limited number of users</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Online Banking</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-close-circled"></i></span>
                                                <p>Basic reporting and analytics</p>
                                            </li>

                                        </ul>
                                        <a href="#" className="btn puprple_btn aos-init aos-animate"> Buy Now </a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="pricing_block highlited_block">
                                    <span className="offer">Popular</span>
                                    <div className="pkg_icon">
                                        <img src="images/pkg2.png" alt="image" />
                                    </div>
                                    <div className="pkg_name">
                                        <h6>Special</h6>
                                    </div>
                                    <span className="price">$140<span > / month </span></span>

                                    <div className="benifits_block highlited_block">

                                        <ul className="benifits">
                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Digital Transactions</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Send - Receive payment</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Limited number of users</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Online Banking</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-close-circled"></i></span>
                                                <p>Basic reporting and analytics</p>
                                            </li>

                                        </ul>
                                        <a href="#" className="btn puprple_btn aos-init aos-animate">Buy Now </a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="pricing_block">
                                    <div className="pkg_icon">
                                        <img src="images/pkg3.png" alt="image" />
                                    </div>
                                    <div className="pkg_name">
                                        <h6>Premium</h6>
                                    </div>
                                    <span className="price">$180 <span > / month </span> </span>

                                    <div className="benifits_block">

                                        <ul className="benifits">
                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Digital Transactions</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Send - Receive payment</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Limited number of users</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-check-circled"></i></span>
                                                <p>Online Banking</p>
                                            </li>

                                            <li>
                                                <span className="icon"><i className="icofont-close-circled"></i></span>
                                                <p>Basic reporting and analytics</p>
                                            </li>

                                        </ul>
                                        <a href="#" className="btn puprple_btn aos-init aos-animate"> Buy Now </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <p className="contact_text" data-aos="fade-up" data-aos-duration="1500">Not sure what to choose ? <a href="#">contact us</a> for custom packages</p>
                </div>
            </section> */}

            {/* <section className="row_am free_app_section white_text" id="getstarted">
                <div className="container">
                    <div className="free_app_inner" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
                        <div className="element">
                            <span className="element1"> <img src="images/element-white1.png" alt="image" /> </span>
                            <span className="element2"> <img src="images/element-white2.png" alt="image" /> </span>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="free_text">
                                    <div className="section_title">
                                        <span className="title_badge lighter mb-1">Download app</span>
                                        <h2>Download app to manage customers </h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys.</p>
                                    </div>
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

                            <div className="col-md-6">
                                <div className="free_img">
                                    <img className="mobile_mockup" src="images/download-screen.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="row_am latest_story" id="blog">
                <div className="container">
                    <div className="section_title" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
                        <span className="title_badge mb-1">Blog Post</span>
                        <h2> Read latest story </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                                <div className="story_img">
                                    <img src="images/story01.png" alt="image" />
                                </div>
                                <div className="story_text">
                                    <span className="blog_tag"> Finance </span>
                                    <h5> <a href="blog-single"> Get all your financial under one control with our finance app.</a> </h5>

                                    <div className="story_info">
                                        <div className="time">Admim | Jan 14, 2024 </div>
                                        <a href="blog-single.html">Read More <i className="icofont-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="story_box" data-aos="fade-up" data-aos-duration="1500">
                                <div className="story_img">
                                    <img src="images/story02.png" alt="image" />
                                </div>
                                <div className="story_text">
                                    <span className="blog_tag"> Finance Tips </span>
                                    <h5> <a href="blog-single"> 15 Tips how to manage finance with smart app to grow 3x. </a> </h5>

                                    <div className="story_info">
                                        <div className="time">Admim | Jan 14, 2024 </div>
                                        <a href="blog-single.html">Read More <i className="icofont-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* <section className="cta_section new white_text" id="support_sec">
                <div className="container">
                    <div className="cta_box">
                        <div className="element">
                            <span className="element1"> <img src="images/element-white-small.png" alt="image" /> </span>
                            <span className="element2"> <img src="images/element-white-small.png" alt="image" /> </span>
                        </div>
                        <div className="left">
                            <div className="section_title" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
                                <img src="images/customer-icon.png" className="customer_icon" alt="image" />
                                <h3>Need support?</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="btn_block ">
                                <a href="tel:123-456-7890" className="btn puprple_btn aos-init aos-animate call_btn"><i className="icofont-ui-call"></i> Call us now</a>
                                <a href="mailto:someone@example.com" className="btn aos-init aos-animate email_btn"><i className="icofont-envelope-open"></i> Email us Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </>
    );
};

function Typewriter() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Welcome to SewPro', 'Your Tailoring Business Virtual Assistant'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return <span ref={el} />;
}

export default Home;