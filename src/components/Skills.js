import React from 'react';
import Mongoose from '../images/mongoose.png';
import Insomnia from '../images/insomnia.png';

function Skills() {
    return(
        <section className="container-fluid min-vh-100 text-center" id="skills" style={{
            background: 'linear-gradient(to bottom right, #b9eed1, #61ebc1, #17eb88, #00b661)'
            }}>
        <div className="row justify-content-center pt-3">
            <h2 className="skills-title">Skills</h2>
        </div>
        <div className="row gy-4 p-5">
            <div className="card col-lg-4">
                <h3 className="card-header">Front-End Development</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <i className="devicon-html5-plain colored skill-icons"></i>
                        HTML
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-css3-plain colored skill-icons"></i>
                        CSS
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-javascript-plain colored skill-icons"></i>
                        JavaScript
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-bootstrap-plain colored skill-icons"></i>
                        Bootstrap
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-jquery-plain colored skill-icons"></i>
                        JQuery
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-react-original colored skill-icons"></i>
                        React.js
                    </li>
                </ul>
            </div>
            <div className="card col-lg-4">
                <h3 className="card-header">Back-End Development</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <i className="devicon-nodejs-plain colored skill-icons"></i>
                        Node.js
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-express-original colored skill-icons"></i>
                        Express.js
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-mysql-plain colored skill-icons"></i>
                        MySQL
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-sequelize-plain colored skill-icons"></i>
                        Sequelize
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-mongodb-plain colored skill-icons"></i>
                        MongoDB
                    </li>
                    <li className="list-group-item">
                        <img src={Mongoose} style={{height:"50px", width:"50px"}} alt="mongoose"/>
                        Mongoose
                    </li>
                </ul>
            </div>
            <div className="card col-lg-4">
                <h3 className="card-header">Development Tools</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <i className="devicon-vscode-plain colored skill-icons"></i>
                        VSCode
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-git-plain colored skill-icons"></i>
                        Git
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-github-original colored skill-icons"></i>
                        GitHub
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-heroku-original colored skill-icons"></i>
                        Heroku
                    </li>
                    <li className="list-group-item">
                        <i className="devicon-npm-original-wordmark colored skill-icons"></i>
                        NPM
                    </li>
                    <li className="list-group-item">
                        <img src={Insomnia} style={{ height:"30px", width:"30px" }} alt="insomnia"/>
                        Insomnia
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Skills;