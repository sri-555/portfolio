import React from 'react';
import './App.css'; // Assuming you have a CSS file for styles

const Portfolio = () => {
    return (
        <div>
            <header>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contacts</a>
                    <span></span>
                    <h1>My Portfolio</h1>
                </nav>
            </header>

            <section id="home" className="hero">
                <div className="intro">
                    <div className="headings">
                        <h2 className="greet-heading">Hello, I'm</h2>
                        <h1 className="my-heading">SRISABARI</h1>
                        <h4 className="sub-heading">A Fresher</h4>
                    </div>
                    <div className="head2">
                        <img src="img_1718460312043_1.jpg" alt="my img" />
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="about-text">
                    <h1 className="my-heading">About Me</h1>
                    <p>
                        I'm SRISABARI and I'm currently pursuing B.E-Computer Science and Engineering.
                        I have completed two internships focused on web development and worked on a project 
                        which is a Library Management System that helps library users and officials.
                    </p>
                    <p>
                        I'm a student at KSR Institute for Engineering and Technology located in Tiruchengode, Namakkal.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://png.pngtree.com/png-vector/20240829/ourmid/pngtree-girl-using-laptop-to-sit-on-armchair-or-working-online-transparent-png-image_13668216.png" alt="About Image" />
                </div>
            </section>

            <section className="portfolio" id="portfolio">
                <div className="portfolio-heading">
                    <h1 className="my-heading text-center">Featured Portfolio</h1>
                </div>
                <div className="portfolio-content">
                    <div className="my-row">
                        <div className="my-col">
                            <div className="my-card port-card">
                                <div className="image">
                                    <img src="Screenshot 2025-03-16 165723.png" alt="Web Development Image" />
                                </div>
                                <h3 className="greet-heading blue-text">Web Development</h3>
                                <p className="small-para blue-text">Development</p>
                            </div>
                        </div>
                        <div className="my-col">
                            <div className="my-card port-card">
                                <div className="image">
                                    <img src="java.jpeg" alt="SEO Image" />
                                </div>
                                <h3 className="greet-heading blue-text">Program Enthusiast</h3>
                                <p className="small-para blue-text">Optimization</p>
                            </div>
                        </div>
                        <div className="my-col">
                            <div className="my-card port-card">
                                <div className="image">
                                    <img src="crpt img.jpeg" alt="Content Writing Image" />
                                </div>
                                <h3 className="greet-heading blue-text">Cryptography Enthusiast</h3>
                                <p className="small-para blue-text">Expertise in modular mathematics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="contact-heading">
                    <h1 className="my-heading text-center">Contact Me</h1>
                </div>
                <div className="contact-content">
                    <div className="contact-form-container">
                        <h1 className="greet-heading">Get In Touch</h1>
                        <form className="contact-form">
                            <input className="form-controls" type="text" placeholder="Your Name" />
                            <input className="form-controls" type="text" placeholder="Your Email" />
                            <input className="form-controls" type="text" placeholder="Your Phone" />
                            <textarea className="form-controls" placeholder="Write your message" cols="30" rows="10"></textarea>
                            <input className="form-btn btn common-btn" type="submit" value="Send Message" />
                        </form>
                    </div>
                    <div className="contact-details">
                        <h1 className="greet-heading" style={{ color: '#ae3fef' }}>My Contact Details</h1>
                        <div className="details">
                            <h5 className="contact-heading" style={{ color: 'white' }}>EMAIL</h5>
                            <p className="contact-text" style={{ color: 'white' }}>srisabari.n555@gmail.com</p>
                        </div>
                        <div className="details">
                            <h5 className="contact-heading" style={{ color: '#8a8a8b' }}>PHONE</h5>
                            <p className="contact-text" style={{ color: '#d9cbe0' }}>+91 9865802556</p>
                        </div>
                        <div className="details">
                            <h5 className="contact-heading" style={{ color: '#cebfd6' }}>ADDRESS</h5>
                            <p className="contact-text" style={{ color: '#dad1df' }}>3B, Main Road</p>
                            <p style={{ color: '#c5bec9' }}>P. Mettuppalayam</p>
                            <p style={{ color: '#beb6c3' }}>ERODE</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content text-center">
                    <h4>
                        Copyright © 2024 All rights reserved | This portfolio website template is created by SRISABARI
                    </h4>
                    <div className="social-links">
                        <div className="footer-menu">
                            <ul className="footer-menu-list">
                                <li className="footer-list-items">
                                    <a className="footer-links" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="footer-list-items">
                                    <a className="footer-links" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="footer-list-items">
                                    <a className="footer-links" href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="footer-list-items">
                                    <a className="footer-links" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;