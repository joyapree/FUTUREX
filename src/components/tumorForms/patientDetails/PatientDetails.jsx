import React from "react";
import "./patientDetails.css";
import { Link } from "react-router-dom";

function PatientDetails() {
  return (
    <div className="patientDetails">
      <div className="container">
        <header>Patient Details</header>

        <form action="#">
          <div className="form first">
            <div className="details personal">
              <div className="fields">
                <div className="input-field titleName ">
                  <label>Title</label>
                  <select required>
                    <option disabled>Select Title</option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter First Name" required />
                </div>
                <div className="input-field">
                  <label>Middle Name</label>
                  <input type="text" placeholder="Enter Middle Name"/>
                </div>
                <div className="input-field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter Last Name" required />
                </div>
                <div className="input-field">
                  <label>Age</label>
                  <input type="text" placeholder="Enter Age" required />
                </div>

                {/* correct way of using select in react */}
                <div className="input-field">
                  <label>Gender</label>
                  <select required defaultValue={"DEFAULT"}>
                    <option value="DEFAULT" disabled>
                      Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="input-field" style={{ opacity: 0 }}></div>

                <div className="input-field">
                  <label>Weight</label>
                  <input type="number" placeholder="In Kg" required />
                </div>
                <div className="input-field">
                  <label>Height</label>
                  <input type="number" placeholder="In Feet" required />
                </div>
                <div className="input-field">
                  <label>Mobile Number</label>
                  <input
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Occupation</label>
                  <input
                    type="text"
                    placeholder="Enter your ccupation"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Addhar Number</label>
                  <input type="text" placeholder="Addhar Number" required />
                </div>
                <div className="input-field" style={{ opacity: 0 }}></div>
              </div>
            </div>
            <Link to="/form/tumor/HospitalDetails">
              <button className="nextBtn">
                <span className="btnText">Next</span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientDetails;
