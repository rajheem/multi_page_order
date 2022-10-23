
import React, { useState } from "react";
import OrderInfo from "./OrderInfo";
import PersonalInfo from "./PersonalInfo";
import DisplayOrder from "./DisplayOrder";

function Form({img1}) {
  const [page, setPage] = useState(0);
  const [step, setstep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    branches: "",
    selectedDate: "",
  });

  const [formFields, setFormFields] = useState([{name: "", quantity: ""}]);




  const nextStep = () => {
    setstep(step + 1);
  };


  const prevStep = () => {
    setstep(step - 1);
  };

  const handleSubmit=()=>{
    alert("FORM SUBMITTED");
    console.log(formData);
    console.log(formFields);
    window.location.reload()
    setFormFields([{name: '', quantity: ''},]);
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      other: [{name: "", quantity: ""}],
      branches: "",
      selectedDate: ""})

  }



  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return <PersonalInfo nextStep={nextStep} formData={formData} setFormData={setFormData} formFields={formFields}
                           setFormFields={setFormFields}/>;
      case 1:
        return <OrderInfo  nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} formFields={formFields}
                             setFormFields={setFormFields}/>;
      case 2:
        return <DisplayOrder prevStep={prevStep} formData={formData} setFormData={setFormData} formFields={formFields}
                             setFormFields={setFormFields} handleSubmit={handleSubmit}/>;
      default:
        return <PersonalInfo/>;
    }
  }



    return (
        <div className="App">

        <div className="container">

          <div><img src={img1}/></div>

            {conditionalComponent()}

        </div>
        </div>
    );

}

export default Form;
