import React from "react";

function App() {
  return (
    <>
      <header className="flex ">
        <div className="container flex space-btw center-align">
          <div className="flex header-head">
            <span class="material-symbols-outlined">drag_handle</span>
            <a href="#">Pepper</a>
          </div>
          <nav className="flex mid-nav">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </nav>
          <nav className="flex">
            <div className="flex cart">
              <span class="material-symbols-outlined">shopping_cart</span>
              <a href="#">Cart</a>
            </div>
            <button className="header-btn">Login</button>
            <button className="header-btn background-clr">Get Started</button>
          </nav>
        </div>
      </header>
      <section className="flex center column hero-section">
        <h1>Save more and get your finances right</h1>
        <p>
          Orci moletie nam vulpulate nunc habitant gravida. Indertrb vitae
          vivamus ipsum aquiate consequectur aliquam{" "}
        </p>
        <button>Request a demo</button>
      </section>
      <section className="positioning">
        <div className="first flex space-btw">
          <div className="info">
            <p className="info-head">48</p>
            <p className="info-p">New Orders this month</p>
          </div>
          <img src="/img-2.png" />
        </div>
        <div className="second flex space-btw">
          <div className="info">
            <p className="info-head">4</p>
            <p className="info-p">Team Projects</p>
          </div>
          <img src="/img-1.png" />
        </div>
        <div className="third flex center column">
          <p className="info-head">42</p>
          <p className="info-p">+Active Projects</p>
        </div>
        <div className="fourth">
          <p>Your Members</p>
          <div>
            <div className="flex space-btw">
              <div className="flex">
                <img src="/img-3.png" />
                <div>
                  <p>Fred Marcos</p>
                  <p>Finance</p>
                </div>
              </div>
              <span class="material-symbols-outlined">more_horiz</span>
            </div>
            <div className="flex space-btw">
              <div className="flex">
                <img src="/img-4.png" />
                <div>
                  <p>Fred Marcos</p>
                  <p>Finance</p>
                </div>
              </div>
              <span class="material-symbols-outlined">more_horiz</span>
            </div>
            <div className="flex space-btw">
              <div className="flex">
                <img src="/img-5.png" />
                <div>
                  <p>Fred Marcos</p>
                  <p>Finance</p>
                </div>
              </div>
              <span class="material-symbols-outlined">more_horiz</span>
            </div>
          </div>
        </div>
      </section>
      <section className="scroll">
        <p>Trusted and loved by the world's best teams</p>
        <div className="flex space-btw"></div>
      </section>
    </>
  );
}

export default App;
