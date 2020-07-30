import React, { Fragment } from "react";

import "./StepTwo.scss";
import csv from "../../assets/csv.png";

const StepTwo = ({ setStep }) => {
  return (
    <Fragment>
      <div className="step-two">
        <div className="step-two-progress-text">
          <span className="st-1 text-center">
            1. Download <br /> <span>Template</span>
          </span>
          <span className="st-2 ">2. Edit & Save</span>
          <span className="st-3">3. Upload File</span>
          <span className="st-4">4. Generate Chart</span>
        </div>
        <div className="step-two-progress">
          <div className="line"></div>
          <div className="milestone finished ms-1"></div>
          <div className="milestone active ms-2"></div>
          <div className="milestone ms-3"></div>
          <div className="milestone ms-4"></div>
        </div>
        <h2 className="step-two-heading">STEP 2</h2>
        <p className="step-two-msg">Enter your employee information</p>
        <img src={csv} className="step-two-csv" alt="csv-screenshot" />
        <p className="step-two-msg-2">
          Save your updated template as a .CSV file
        </p>
      </div>
      <div className="step-two-actions">
        <hr />
        <div className="">
          <button className="step-two-action-back" onClick={() => setStep(1)}>
            Back
          </button>
          <button
            className="step-two-action-continue"
            onClick={() => setStep(3)}
          >
            Continue
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default StepTwo;
