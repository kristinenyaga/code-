import React ,{useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionDetails, setTransaction]=useState([])
  const [copytransactionDetails,setcopyTransactionDetails]=useState([])

  function fetchTransactions(){
    fetch("http://localhost:8001/transactions")
    .then(response => response.json())
    .then(response =>{
      setTransaction(response)
      setcopyTransactionDetails(response)
    })

  }
  useEffect(() =>{
    fetchTransactions()
  },[])

  function addTransaction(transaction){
    fetch("http://localhost:8001/transactions",{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({...transaction,"amount":parseInt(transaction.amount)})
  })
  .then(response => response.json())
  .then(response => setTransaction([...transactionDetails,response]))
  
    
  }

 function handleSearch(event){
  const searchItem=event.target.value.toLowerCase()
  setTransaction(copytransactionDetails.filter(transaction => transaction.description.toLowerCase().includes(searchItem)))
 }
  return (
    <div>
      <Search handlesearch={handleSearch}/>
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactionarray={transactionDetails}/>
    </div>
  );
}

export default AccountContainer;
