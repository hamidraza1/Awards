import React, { Component } from "react";
import { ReactComponent as CasesNext } from "../assests/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assests/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspac",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For Your Best Look ever",
    img: "lumin-min",
  },
];

class Cases extends Component {
  render() {
    return (
      <section className="cases">
        <div className="container-fluid">
          <div className="cases-navigation">
            <div className="cases-arrow prev disabled">
              <CasesPrev />
            </div>
            <div className="cases-arrow next">
              <CasesNext />{" "}
            </div>
          </div>
          <div className="row">
            {caseStudies.map((caseItem) => (
              <div className="case" key={caseItem.id}>
                <div className="case-details">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
                <div className="case-image">
                  <img
                    src={require(`../assests/${caseItem.img}.png`)}
                    alt={caseItem.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Cases;
