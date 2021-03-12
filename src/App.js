import { useEffect, useState } from 'react';
import {  Container } from 'semantic-ui-react'
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from './actions/entries.actions';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expensTotal, setExpensTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  const entries = useSelector((state) => state.entries)
  const {isOpen, id} = useSelector(state => state.modals)
console.log(entries);


  useEffect(()=> {
      const index = entries.findIndex(entry => entry.id === id) 
      setEntry(entries[index]);
  },[isOpen, id, entries]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if(entry.isExpense){
        return totalExpenses += Number(entry.value) ;
      } 
      return totalIncomes += Number(entry.value);
    })
    setTotal(totalIncomes - totalExpenses)
    setExpensTotal(totalExpenses)
    setIncomeTotal(totalIncomes)
  }, [entries]);

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getAllEntries())
  }, [dispatch])  
  return (
    <Container>
      
      <MainHeader title="Budget"/>
      <DisplayBalance 
        value={total} 
        title="Your Balance" 
        size="small"
      />
      
      <DisplayBalances 
        expensTotal={expensTotal} 
        incomeTotal={incomeTotal}
      />
        
      <MainHeader title='History' type='h3' />
      
      <EntryLines 
        entries={entries} 
      />
      

      <MainHeader title="Add new transaction" type="h3" />
     <NewEntryForm 

     />
    <ModalEdit 
      isOpen={isOpen} 
      {...entry}
      />

    </Container>
  );
}


export default App;
