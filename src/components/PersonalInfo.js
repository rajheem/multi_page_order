import React, {useState} from "react";

function PersonalInfo({ formData, setFormData, nextStep }) {

    const submitFormData = (e) => {
            nextStep();
    };

  return (
    <div >
        <div >
            <h1>Personal Information</h1>
    <div className="form-container">
        <form autoComplete="off" id="form" className="form-group" onSubmit={submitFormData}>
     <br/> <input
          required
          className="form-control"
          id="inputID"
        type="text"
          name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      /> <br/>
      <input
          required
          className="form-control"
          id="inputID"
        type="text"
          name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      /> <br/>
      <input
          required
          className="form-control"
          id="inputID"
        type="email"
          name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      /> <br/>
        <input  required className="form-control" id="inputID" list="branch-list"  name="branch-choice" placeholder="Enter Branch"
        value={formData.branches}
        onChange={(event) =>
        setFormData({ ...formData, branches: event.target.value })}
        /> <br/>

            <datalist id="branch-list">;
                <option value="Branch 1">Branch 1</option>
                <option value="Branch 2">Branch 2</option>
                <option value="Branch 3">Branch 3</option>
                <option value="Branch 4">Branch 4</option>
                <option value="Branch 5">Branch 5</option>
                <option value="Branch 6">Branch 6</option>
                <option value="Branch 7">Branch 7</option>
                <option value="Branch 8">Branch 8</option>
                <option value="Branch 9">Branch 9</option>
                <option value="Branch 10">Branch 10</option>
                <option value="Branch 11">Branch 11</option>
                <option value="Branch 12">Branch 12</option>
                <option value="Branch 13">Branch 13</option>
                <option value="Branch 14">Branch 14</option>
                <option value="Branch 15">Branch 15</option>
                <option value="Branch 16">Branch 16</option>
                <option value="Branch 17">Branch 17</option>
                <option value="Branch 18">Branch 18</option>
                <option value="Branch 19">Branch 19</option>
                <option value="Branch 20">Branch 20</option>
                <option value="Branch 21">Branch 21</option>
                <option value="Branch 22">Branch 22</option>
                <option value="Branch 23">Branch 23</option>
            </datalist>

            <button className="btn btn-secondary" type="submit">
                Next
            </button>
        </form><br/>
    </div>
        </div>
    </div>
  );
}

export default PersonalInfo;
