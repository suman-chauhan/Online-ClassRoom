import React from "react";
import { Link } from "react-router-dom";
import "./class.css";

const Classlist = () => {
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <div class="row">
        <div class="column">
          <div class="card">
            <Link
              to="/classDescription"
              style={{ textAlign: "right", marginRight: "5px" }}
            >
              more
            </Link>
            <h3>React</h3>
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. maintained by
              Meta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classlist;
