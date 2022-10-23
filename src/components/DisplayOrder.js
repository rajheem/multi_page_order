import React from "react";

function DisplayOrder({prevStep, formData, setFormData,formFields, setFormFields,handleSubmit }) {
  return (
    <div>
        <h1>Your Order Information </h1>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{formData.firstName} {formData.lastName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{formData.branches}</h6>
          <p className="card-text">Orders: {formFields.map((n,index)=>{
              return <ul>
                  <li> {n.quantity} {n.name}</li>
                    </ul>
          })}</p>
        </div>
      </div><br/>

      <div className="newbtn">
        <button className="btn btn-secondary" onClick={prevStep}>
          Prev
        </button>
        <button className="btn btn-success" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div><br/>
    </div>
  );
}

export default DisplayOrder;
