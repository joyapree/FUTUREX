import React from "react";
import { Link } from "react-router-dom";
import "../patientDetails/patientDetails.css";

function HospitalDetails() {
  return (
    <div className="patientDetails">
      <div className="container">
        <header>Hospital Details</header>

        <form action="#">
          <div className="form first">
            <div className="details personal">
              <div className="fields">
                <div className="fields">
                  <div className="input-field">
                    <label>Hospital Name</label>
                    <input type="text" placeholder="Hospital Name" required />
                  </div>

                  <div className="input-field">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Hospital Address"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>State</label>
                    <input
                      type="text"
                      placeholder="Enter your state"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>District</label>
                    <input
                      type="text"
                      placeholder="Enter your district"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Consultant Doctor</label>
                    <input type="text" placeholder="Doctor Name" required />
                  </div>

                  <div className="input-field">
                    <label>Doctor ID</label>
                    <input type="text" placeholder="Doctor's ID" required />
                  </div>

                  <div className="input-field">
                    <label>Date of the surgery</label>
                    <input type="date" placeholder="Surgery Date" required />
                  </div>
                </div>
                <Link to="/form/tumor/TreatmentDetails">
                  <button className="nextBtn">
                    <span className="btnText">Next</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HospitalDetails;
