import { useParams } from "react-router-dom";
import './form.css'

//importing forms
import { PatientDetails, HospitalDetails, Treatment, SurgicalTreatment, Review, Confirmation} from '../../components/index'

import {Navbar, ProgressBar, Footer} from '../../components/index'


function Form() {
  const params = useParams();
  console.log(params.pg);

  if (params.pg == 'PatientDetails') {
    return(
      <>
        <Navbar/>
        <ProgressBar value={1} />
        <PatientDetails/>
        <Footer/>
      </>
    )
  } else if (params.pg == 'HospitalDetails') {
      return(
        <>
          <Navbar/>
          <ProgressBar value={2} />
          <HospitalDetails/>
          <Footer/>
        </>
      )
  } else if (params.pg == 'TreatmentDetails') {
    return(
      <>
        <Navbar/>
        <ProgressBar value={3} />
        <Treatment/>
        <Footer/>
      </>
    )
  } else if (params.pg == 'SurgeryTreatmentDetails') {
    return(
      <>
        <Navbar/>
        <ProgressBar value={4} />
        <SurgicalTreatment/>
        <Footer/>
      </>
    )
  }else if (params.pg == 'ReviewDetails') {
    return(
      <>
        <Navbar/>
        <ProgressBar value={5} />
        <Review/>
        <Footer/>
      </>
    )
  }else if (params.pg == 'submitted') {
    return(
      <>
        <Navbar/>
        <Confirmation/>
        <Footer/>
      </>
    )
  }
}

export default Form;
