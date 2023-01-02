import { useParams } from "react-router-dom";
import './form.css'

//importing forms
import { PatientDetails, HospitalDetails, Treatment, SurgicalTreatment } from '../../components/index'

import {Navbar, ProgressBar} from '../../components/index'


function Form() {
  const params = useParams();
  console.log(params.pg);

  if (params.pg == 'PatientDetails') {
    return(
      <>
        <Navbar/>
        <ProgressBar value={1} />
        <PatientDetails/>
      </>
    )
  } else if (params.pg == 'HospitalDetails') {
      return(
        <>
          <Navbar/>
          <ProgressBar value={2} />
          <HospitalDetails/>
        </>
      )
  } else if (params.pg == 'TreatmentDetails') {
    return(
      <>
        <Navbar/>
        <ProgressBar value={3} />
        <Treatment/>
      </>
    )
  } else if (params.pg == 'SurgeryTreatmentDetails') {
    return(
      <>
        <Navbar/>
        <ProgressBar value={4} />
        <SurgicalTreatment/>
      </>
    )
  }
}

export default Form;
