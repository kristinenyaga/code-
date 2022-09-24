import React ,{useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionDetails, setTransaction]=useState([])
  // const [searchValue,setSearch]=useState("")
  useEffect(() =>{
    fetch("http://localhost:8001/transactions")
    .then(response => response.json())
    .then(response => setTransaction(response))
  },[])
  function addTransaction(transaction){
    setTransaction([...transactionDetails,transaction])
  }
  return (
    <div>
      <Search />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactionarray={transactionDetails}/>
    </div>
  );
}

export default AccountContainer;
