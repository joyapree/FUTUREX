import '../treatment/treatment.css'

function SurgicalTreatment() {
  return (
    <div className="treatmentSpecification">
          <div class="container">
      <header>SURGERY SPECIFICTION</header>
      <form action="#">
        <div class="form first">
          <div class="details personal">
            <span class="title"> SURGERICAL TREATMENT</span>
            <div class="fields">
              <div class="formContainer">
                <div class="input-field">
                  <span>Curettage:</span>
                  <p>
                    <input
                      type="radio"
                      id="Hand tool"
                      name="radio-group"
                      checked
                    />
                    <label for="Hand tool">Hand tool</label>
                  </p>
                  <p>
                    <input type="radio" id="Power Burr" name="radio-group" />
                    <label for="Power Burr">Power Burr</label>
                  </p>
                  <p>
                    <input type="radio" id="None" name="radio-group" />
                    <label for="None">None</label>
                  </p>                 
                </div>

                <div class="input-field">
                  <span>Bone Graft:</span>
                  <p>
                    <input
                      type="radio"
                      id="Cement"
                      name="radio-group"
                      checked
                    />
                    <label for="Cement">Cement</label>
                  </p> 
                  <p>
                    <input
                      type="radio"
                      id="Graft Substitutes"
                      name="radio-group"
                      checked
                    />
                    <label for="Graft Substitutes">Graft Substitutes</label>
                  </p>                 
                </div>
                <div class="input-field">
                    <span>Adjuvant Used:</span>
                    <p>
                      <input
                        type="radio"
                        id="Cryo"
                        name="radio-group"
                        checked
                      />
                      <label for="Cryo">cryo</label>
                    </p>
                    <p>
                        <input
                          type="radio"
                          id="Laser"
                          name="radio-group"
                          checked
                        />
                        <label for="Laser">Laser</label>
                    </p> 
                    <p>
                        <input
                          type="radio"
                          id="Alcohol"
                          name="radio-group"
                          checked
                        />
                        <label for="Alcohol">Alcohol</label>
                    </p>  
                    <p>
                        <input
                          type="radio"
                          id="None"
                          name="radio-group"
                          checked
                        />
                        <label for="None">None</label>
                    </p> 
                    <p>
                        <label for="Others">Others</label>
                        <input type="text" placeholder="Mention Other"/>                        
                    </p>                                        
                  
                </div>
                <div class="input-field">
                    <span>Excision:</span>
                    <p>
                      <input
                        type="radio"
                        id="Yes"
                        name="radio-group"
                        checked
                      />
                      <label for="Yes">Yes</label>
                    </p>
                    <p>
                        <input
                          type="radio"
                          id="No"
                          name="radio-group"
                          checked
                        />
                        <label for="No">No</label>
                    </p>                 
                </div>
                <div class="input-field">
                    <span>Reconstruction:</span>
                    <p>
                      <input
                        type="radio"
                        id="Bone Graft"
                        name="radio-group"
                        checked
                      />
                      <label for="Bone Graft">Bone Graft</label>
                    </p>
                    <p>
                        <input
                          type="radio"
                          id="Arthrodeses"
                          name="radio-group"
                          checked
                        />
                        <label for="Arthrodeses">Arthrodeses</label>
                    </p> 
                    <p>
                        <input
                          type="radio"
                          id="Arthroplasty"
                          name="radio-group"
                          checked
                        />
                        <label for="Arthroplasty">Arthroplasty</label>
                    </p>  
                    <p>
                        <input
                          type="radio"
                          id="None"
                          name="radio-group"
                          checked
                        />
                        <label for="None">None</label>
                    </p> 
                    <p>
                        <label for="Others">Others</label>
                        <input type="text" placeholder="Mention Other"/>                        
                    </p>                                        
                  
                </div>
                <div class="input-field">
                    <span>Irradiation:</span>
                    <p>
                      <input
                        type="radio"
                        id="Yes"
                        name="radio-group"
                        checked
                      />
                      <label for="Yes">Yes</label>
                    </p>
                    <p>
                        <input
                          type="radio"
                          id="No"
                          name="radio-group"
                          checked
                        />
                        <label for="No">No</label>
                    </p>                 
                </div>
                <div class="input-field">
                    <span>Total Blood Transfusion:</span>
                    <p>
                      <input
                        type="radio"
                        id="1-2 packs"
                        name="radio-group"
                        checked
                      />
                      <label for="1-2 packs">1-2 packs</label>
                    </p>
                    <p>
                        <input
                          type="radio"
                          id=">2 packs"
                          name="radio-group"
                          checked
                        />
                        <label for=">2 packs">2 packs</label>
                    </p> 
                    <p>
                        <input
                          type="radio"
                          id="Nil"
                          name="radio-group"
                          checked
                        />
                        <label for="Nil">Nil</label>
                    </p>                
                </div>
                <div class="input-field">
                    <span>Antibiotics:</span>
                    <p>
                      <input
                        type="radio"
                        id="Single Antibiotics"
                        name="radio-group"
                        checked
                      />
                      <label for="Single Antibiotics">Single Antibiotics</label>
                    </p>
                    <p>
                        <input
                          type="radio"
                          id="Double Antibiotics"
                          name="radio-group"
                          checked
                        />
                        <label for="Double Antibiotics">Double Antibiotics</label>
                    </p> 
                    <p>
                        <input
                          type="radio"
                          id="Triple Antibiotics"
                          name="radio-group"
                          checked
                        />
                        <label for="Triple Antibiotics">Triple Antibiotics</label>
                    </p> 
                    <p>
                        <input
                          type="radio"
                          id="None"
                          name="radio-group"
                          checked
                        />
                        <label for="None">None</label>
                    </p>                 
                </div>
                <div class="input-field">
                    <span>Local Post-op Complication:</span>
                    <p>
                      <input
                        type="radio"
                        id="Mild Infection"
                        name="radio-group"
                        checked
                      />
                      <label for="Mild Infection">Mild Infection</label>
                    </p>
                    <p>
                        <input
                          type="radio"
                          id="Severe Infection"
                          name="radio-group"
                          checked
                        />
                        <label for="Severe Infection">Severe Infection </label>
                    </p> 
                    <p>
                        <input
                          type="radio"
                          id="None"
                          name="radio-group"
                          checked
                        />
                        <label for="None">None</label>
                    </p>                                   
                </div>
                <div class="input-field">
                    <span>Post-op Complication:</span>
                    <p>
                      <input
                        type="checkbox"
                        id="Vascular"
                        name="radio-group"
                        checked
                      />
                      <label for="Vascular">Vascular</label>
                    </p>
                    <p>
                        <input
                          type="checkbox"
                          id="Neural"
                          name="radio-group"
                          checked
                        />
                        <label for="Neural">Neural </label>
                    </p> 
                    <p>
                        <input
                          type="checkbox"
                          id="Functionl Loss"
                          name="radio-group"
                          checked
                        />
                        <label for="Functionl Loss">Functionl Loss</label>
                    </p>
                    <p>
                        <input
                          type="checkbox"
                          id="Reccurence"
                          name="radio-group"
                          checked
                        />
                        <label for="Reccurence"> Reccurence</label>
                    </p>                                   
                </div>
            </div>
        </div>


          
          
        </div>
        <div class="buttons">
            <button class="Next">
              <span class="btnText">Next</span>
              <i class="uil uil-navigator"></i>
            </button>
          </div>
</div>
      </form>
    </div>
    </div>
  );
}

export default SurgicalTreatment;
