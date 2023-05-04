import React from 'react';

function Home() {
    return(
        <section className="container-fluid min-vh-100" id="home" style={{
            background: 'linear-gradient(to bottom right, #b9eed1, #61ebc1, #17eb88, #00b661)'
            }}>
        <div className="row">
            <div className="home-text fade">
                <h1 className="home-title">Hi, my name is Jared Tichacek</h1>
                <p className="home-subtitle">Full Stack Software Engineer | Nashville, TN</p>
            </div>
        </div>
    </section>
    )
}

export default Home;