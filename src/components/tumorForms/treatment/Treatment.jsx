import React from "react";
import "./treatment.css";
import { Link } from "react-router-dom";

function Treatment() {
  return (
    <div className="treatmentSpecification">
      <div class="container">
        <header>MEDICAL SPECIFICTION</header>
        <form action="#">
          <div class="form first">
            <div class="details personal">
              <span class="title">TREATMENT</span>
              <div class="fields">
                <div class="formContainer">
                  <div class="input-field">
                    <span>Gap till Primary:</span>
                    <p>
                      <input
                        type="radio"
                        id="6weeks"
                        name="radio-group"
                        checked
                      />
                      <label for="6weeks"> &lt6 Weeks</label>
                    </p>
                    <p>
                      <input type="radio" id="612weeks" name="radio-group" />
                      <label for="612weeks">6 - 12 Weeks</label>
                    </p>
                    <p>
                      <input type="radio" id="12weeks" name="radio-group" />
                      <label for="12weeks">&gt12 Weeks</label>
                    </p>
                    <p>
                      <input type="radio" id="6months" name="radio-group" />
                      <label for="6months">&gt6 Months</label>
                    </p>
                  </div>

                  <div class="input-field">
                    <span>Presentation:</span>
                    <p>
                      <input
                        type="radio"
                        id="primary"
                        name="radio-group"
                        checked
                      />
                      <label for="6weeks">Primary</label>
                    </p>
                    <p>
                      <input type="radio" id="Reccurence" name="radio-group" />
                      <label for="612weeks">Reccurence</label>
                    </p>
                    <p>
                      <input type="radio" id="Metastatic" name="radio-group" />
                      <label for="12weeks">Metastatic</label>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="details personal">
              <span class="title">TYPE OF LEISION</span>
              <div class="fields">
                <div class="formContainer">
                  <div class="input-field" style={{ width: "100%" }}>
                    <span>Bone:</span>
                    <p>
                      <input type="text" placeholder="Enter The Bone Type" />
                    </p>
                  </div>

                  <div class="input-field">
                    <span>Site:</span>
                    <p>
                      <input
                        type="radio"
                        id="Proximal"
                        name="radio-group"
                        checked
                      />
                      <label for="Proximal">Proximal</label>
                    </p>
                    <p>
                      <input type="radio" id="Distal" name="radio-group" />
                      <label for="Distal">Distal</label>
                    </p>
                    <p>
                      <input type="radio" id="Others" name="radio-group" />
                      <label for="Others">Others</label>
                    </p>
                  </div>
                  <div class="input-field">
                    <span>Imaging Done:</span>
                    <p>
                      <input
                        type="radio"
                        id="X ray"
                        name="radio-group"
                        checked
                      />
                      <label for="X ray">X ray</label>
                    </p>
                    <p>
                      <input type="radio" id="CT Scan" name="radio-group" />
                      <label for="CT Scan">CT Scan</label>
                    </p>
                    <p>
                      <input type="radio" id="MRI" name="radio-group" />
                      <label for="MRI">MRI</label>
                    </p>
                  </div>
                  <div class="input-field">
                    <span>Cortical Breach:</span>
                    <p>
                      <input type="radio" id="Yes" name="radio-group" checked />
                      <label for="Yes">Yes</label>
                    </p>
                    <p>
                      <input type="radio" id="No" name="radio-group" />
                      <label for="No">No</label>
                    </p>
                  </div>
                  <div class="input-field">
                    <span>Pathological Fracture:</span>
                    <p>
                      <input type="radio" id="Yes" name="radio-group" checked />
                      <label for="Yes">Yes</label>
                    </p>
                    <p>
                      <input type="radio" id="No" name="radio-group" />
                      <label for="No">No</label>
                    </p>
                  </div>
                  <div class="input-field">
                    <span>Biopsy Proven:</span>
                    <p>
                      <input type="radio" id="Yes" name="radio-group" checked />
                      <label for="Yes">Yes</label>
                    </p>
                    <p>
                      <input type="radio" id="No" name="radio-group" />
                      <label for="No">No</label>
                    </p>
                  </div>
                  <div class="input-field">
                    <span>Biopsy Type:</span>
                    <p>
                      <input
                        type="radio"
                        id="Open"
                        name="radio-group"
                        checked
                      />
                      <label for="Open">Open</label>
                    </p>
                    <p>
                      <input type="radio" id="Core Needle" name="radio-group" />
                      <label for="Core Needle">Core Needle</label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="buttons">
            <Link to="/form/tumor/SurgeryTreatmentDetails" style={{ textDecoration: "none" }} >
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

export default Treatment;
