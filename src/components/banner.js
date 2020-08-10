import React, { Component } from "react";
import { ReactComponent as RightArrow } from "../assests/arrow-right.svg";

class Banner extends Component {
  render() {
    return (
      <section className="main">
        <div className="container">
          <div className="row">
            <h2>
              <div className="line">
                <span>Creating Unique brand is</span>
              </div>
              <div className="line">
                <span>What we do.</span>
              </div>
            </h2>
            <div className="btn-row">
              <a href="/">
                More about us <RightArrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
