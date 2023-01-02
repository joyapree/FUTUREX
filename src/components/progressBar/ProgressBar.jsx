import './progressBar.css'

function ProgressBar({value}) {

  console.log(`value passed to the progressBar ${value}`)

  const circle2 = value == 2 ? "circle active" : value < 2 ? "circle" :  "circle done"
  console.log(circle2)

  return (
    <div className='progressMain'>
      <div className="progressContainer">
        <div className="progress">

          <div className={value == 1 ? "circle active" : value < 1 ? "circle" :  "circle done"}>
            <span className="label">1</span>
            <span className="title">Patient</span>
          </div>
          <span className={value == 1 ? "bar active" : value < 1 ? "bar" : "bar done"}></span>


          <div className={value == 2 ? "circle active" : value < 2 ? "circle" :  "circle done"}>
            <span className="label">2</span>
            <span className="title">Hospital</span>
          </div>
          <span className={value == 2 ? "bar active" : value < 2 ? "bar" : "bar done"}></span>


          <div className={value == 3 ? "circle active" : value < 3 ? "circle" :  "circle done"}>
            <span className="label">3</span>
            <span className="title">Medical</span>
          </div>
          <span className={value == 3 ? "bar active" : value < 3 ? "bar" : "bar done"}></span>


          <div className={value == 4 ? "circle active" : value < 4 ? "circle" :  "circle done"}>
            <span className="label">4</span>
            <span className="title">Surgical</span>
          </div>
          <span className={value == 4 ? "bar active" : value < 4 ? "bar" : "bar done"}></span>

          <div className={value == 5 ? "circle active" : value < 5 ? "circle" :  "circle done"}>
            <span className="label">5</span>
            <span className="title">Final</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
