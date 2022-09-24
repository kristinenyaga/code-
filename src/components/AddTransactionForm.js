import React, { useState } from "react";

function AddTransactionForm({addTransaction}) {
  const [allInput,setAllInput]=useState({
    date:"",
    category:"",
    description:"",
    amount:""
  })

  function handleOnChange(e){
    setAllInput({
      ...allInput,[e.target.name]:e.target.value
    })
    
   
  }
  function handlesubmit(e){
    e.preventDefault()
    addTransaction(allInput)
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handlesubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleOnChange}/>
          <input type="text" name="description" placeholder="Description" onChange={handleOnChange}/>
          <input type="text" name="category" placeholder="Category" onChange={handleOnChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleOnChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
