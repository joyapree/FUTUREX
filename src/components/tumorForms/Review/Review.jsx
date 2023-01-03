import React from "react";
import "./review.css";
import { Link } from "react-router-dom";

function Review() {
  return (
    <div className="review">
      {/* PATIENT DETAILS */}

      <div className="container patientDetails">
        <header>Patient Details</header>
        <div className="mainLeftRight">
          <div className="left">
            <div>
              <span>Name : </span>
              <span>Mr. Diptanshu Mandal</span>
            </div>

            <div>
              <span>age :</span>
              <span>20</span>
            </div>

            <div>
              <span>gender :</span>
              <span>Male</span>
            </div>

            <div>
              <span>weight :</span>
              <span>90kg</span>
            </div>
          </div>

          <div className="right">
            <div>
              <span>height :</span>
              <span>186cm</span>
            </div>

            <div>
              <span>Contact Number :</span>
              <span>629060XXXX</span>
            </div>

            <div>
              <span>Addhar Number :</span>
              <span>7879 7879 2324 2323</span>
            </div>

            <div>
              <span>Occupation :</span>
              <span>Worker</span>
            </div>
          </div>
        </div>
      </div>

      {/* HOSPITAL DETAILS */}

      <div className="container hospitalDetails">
        <header>Hospital Details</header>
        <div className="mainLeftRight">
          <div className="left">
            <div>
              <span>Name : </span>
              <span>Appolo Clinic</span>
            </div>

            <div>
              <span>Address : </span>
              <span>xyz Road </span>
            </div>

            <div>
              <span>District :</span>
              <span>Chennai</span>
            </div>

            <div>
              <span>State :</span>
              <span>Tamil Nadu</span>
            </div>
          </div>

          <div className="right">
            <div>
              <span>Doctor :</span>
              <span>Dr. Joyapreeta Paul</span>
            </div>

            <div>
              <span>Doctor ID :</span>
              <span>NOWDNERJWR</span>
            </div>

            <div>
              <span>Surgery Date :</span>
              <span>25-12-2021</span>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Specification */}

      <div className="container medicalDetails">
        <header>Medical Specification</header>
        <div className="mainLeftRight">
          <div className="left">
            <div>
              <span>Treatment Gap : </span>
              <span>6 Weeks</span>
            </div>

            <div>
              <span>Presentation : </span>
              <span>Metastatic </span>
            </div>

            <div>
              <span>Bone :</span>
              <span>Collar</span>
            </div>

            <div>
              <span>Site :</span>
              <span>Elbow</span>
            </div>

            <div>
              <span>Imaging Done :</span>
              <span>CT Scan</span>
            </div>
          </div>

          <div className="right">
            <div>
              <span>Cortical Breach :</span>
              <span>Yes</span>
            </div>

            <div>
              <span>Pathological Fracture :</span>
              <span>Yes</span>
            </div>

            <div>
              <span>Biopsy Proven :</span>
              <span>No</span>
            </div>

            <div>
              <span>Biopsy Type :</span>
              <span>Open</span>
            </div>
          </div>
        </div>
      </div>

      {/* SURGECAL SPECIFICATION */}

      <div className="container surgecalDetails">
        <header>Surgecal Specification</header>
        <div className="mainLeftRight">
          <div className="left">
            <div>
              <span>Curettage : </span>
              <span>None</span>
            </div>

            <div>
              <span>Bone Graft : </span>
              <span>Cement </span>
            </div>

            <div>
              <span>Adjuvant Used :</span>
              <span>Cryo</span>
            </div>

            <div>
              <span>Excision :</span>
              <span>Yes</span>
            </div>

            <div>
              <span>Reconstruction :</span>
              <span>Bone Graft</span>
            </div>
          </div>

          <div className="right">
            <div>
              <span>Irradiation :</span>
              <span>Yes</span>
            </div>

            <div>
              <span>Total Blood Transfusion :</span>
              <span>2 Packs</span>
            </div>

            <div>
              <span>Antibiotics :</span>
              <span>Triple Antibiotics</span>
            </div>

            <div>
              <span>Local Post-Op Complication :</span>
              <span>None</span>
            </div>

            <div>
              <span>Post-Op Complication :</span>
              <span>Vascular</span>
            </div>
          </div>
        </div>

        {/* button */}
        <div class="buttons">
          <Link to="/form/tumor/submitted">
            <button className="nextBtn">
              <span className="btnText">Submit</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Review;
