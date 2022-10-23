import React from "react";


function OrderInfo({nextStep, prevStep, formData, setFormData, formFields, setFormFields }) {
    const submitFormData = (e) => {
        nextStep();
    };

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }


    const addFields = () => {
        let object = {
            name: '',
            quantity:''
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <div>
        <h1>Order Information</h1>
        <div className="form-container">

            <form autoComplete="off" id="form" className="form-group" onSubmit={submitFormData}>
                <br/>
                <label>Enter Order Fulfillment Date </label>
                <input
                    type="date"
                    required
                    name="date"
                    className="form-control picker"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.selectedDate}
                    onChange={(event) =>
                        setFormData({ ...formData, selectedDate: event.target.value })}
                /> <br/>
                {formFields.map((form, index) => {
            return (
                <div  className="input-group mb-3" key={index}>
                    <input
                        id="inputID"
                        required
                        className="form-control"
                        name='name'
                        placeholder='Item'
                        onChange={event => handleFormChange(event, index)}
                        value={form.name}
                        list="item-list"
                    />
                    <datalist id="item-list">;
                        <option value="LQ590">LQ590</option>
                        <option value="Invoice">Invoice</option>
                        <option value="Plain Paper">Plain Paper</option>
                        <option value="38B">38B</option>
                        <option value="3-Piece Rolls">3-Piece Rolls</option>
                        <option value="Computer Invoice">Computer Invoice</option>
                    </datalist>
                    <input
                        id="inputID"
                        type="number"
                        required
                        className="form-control"
                        name='quantity'
                        placeholder='Quantity'
                        onChange={event => handleFormChange(event, index)}
                        value={form.quantity}
                    />
                    <button className="btn btn-outline-danger" onClick={() => removeFields(index)}>Remove</button>
                </div>
            )
        })}
        <div id="add_more">
            <button id="add" className="btn btn-warning"  style={{color:'white'}} onClick={addFields}>Add Another Item</button>
        </div><br/><br/>

        <div className="newbtn">
            <button className="btn btn-secondary" onClick={prevStep}>
                Prev
            </button>
            <button className="btn btn-secondary" type="submit">
                Next
            </button>

        </div>

            </form><br/>
    </div>
        </div>

  );
}

export default OrderInfo;
