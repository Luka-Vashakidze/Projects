import React from "react";
import Header from "./MainHeader";
import banner from "./assets/Banner.png";
import Post from "./Post";

import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <section>
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
        </section>
        <section className="postsSection">
          <div className="postsSectionDiv">
            <h2 className="title">Our Posts</h2>
            <div className="underLine"></div>
            <div className="textContainer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quo debitis suscipit fugit ipsa est beatae quas{" "}
              </p>
            </div>
          </div>
          <Post />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
