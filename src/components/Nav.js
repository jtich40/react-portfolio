import React from 'react';

function Nav({ setPage }) {
    const handleClick = (event, pageName) => {
        event.preventDefault();
        setPage(pageName);
      };
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbarScroll fade">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto rounded-4 bg-secondary-subtle">
                    <li className="nav-item">
                        <a className="nav-link rounded-4" id="tab-1" href="#" onClick={(event) => handleClick(event, 'Home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link rounded-4" id="tab-2" href="#about" onClick={(event) => handleClick(event, 'About')}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link rounded-4" id="tab-3" href="#skills" onClick={(event) => handleClick(event, 'Skills')}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link rounded-4" id="tab-4" href="#projects" onClick={(event) => handleClick(event, 'Projects')}>Projects</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    )
}

export default Nav;