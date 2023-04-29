import React from 'react';
import Jared from '../assets/images/555_hq.jpg';

function About() {
    return (
        <section className="container min-vh-100 text-center about-bg" id="about">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg mt-5">
                <img src={Jared} alt="picture of Jared" className="img-fluid img-thumbnail"/>
            </div>
            <div className="card col-lg mt-5">
                <h2 className="card-header">About Me</h2>
                <div className="card-body">
                    <p className="my-0">I like to solve problems with code and I don't stop until I find answers. I've
                        always got the end user in mind.<br></br><br></br>When I'm not building applications, you might catch
                        me
                        on the basketball court or watching <em>The Office</em> for the nth time.</p>
                    <a href="https://github.com/jtich40" title="GitHub" target="_blank" className="icons">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jared-tichacek/" title="LinkedIn" target="_blank"
                        className="icons">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://drive.google.com/file/d/18rnvRruaPNaIjgeEZgqznlkZPDqFurtR/view?usp=share_link"
                        title="Resume" target="_blank" className="icons">
                        <i className="bi bi-file-earmark-person"></i>
                    </a>
                    <a href="mailto:jared.tichacek@gmail.com" title="Email" target="_blank" className="icons">
                        <i className="bi bi-envelope-at-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;