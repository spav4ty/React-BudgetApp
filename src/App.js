import { useEffect, useState } from 'react';
import {  Container } from 'semantic-ui-react'
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import { useSelector } from 'react-redux';


function App() {
  // const [description, setDescription] = useState('');
  // const [value, setValue] = useState('');
  // const [isExpense, setIsExpense] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)
  // const [entryId, setEntryId] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expensTotal, setExpensTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  const {isOpen, id} = useSelector(state => state.modals)
  const entries = useSelector((state) => state.entries)
  console.log(entries);


  useEffect(()=> {
    // if(!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === id) 
      setEntry(entries[index]);
    //   const newEntries = [...entries];
    //   newEntries[index].description = description;
    //   newEntries[index].value = value;
    //   newEntries[index].isExpense = isExpense;
    //   // setEntries(newEntries)
    //   resetEntry()
    // }
  },[isOpen,id])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if(entry.isExpense){
        return totalExpenses += Number(entry.value);
      } 
      return totalIncomes += Number(entry.value);
    })
    setTotal(totalIncomes - totalExpenses)
    setExpensTotal(totalExpenses)
    setIncomeTotal(totalIncomes)
    console.log(totalExpenses, totalIncomes, total);
    
  }, [entries])

  // function editEntry(id){
  //   console.log(`this ${id}`);
  //   if(id) {
  //     const index = entries.findIndex(entry => entry.id === id)
  //     const entry = entries[index]
  //     setEntryId(id)
  //     setDescription(entry.description)
  //     setValue(entry.value)
  //     setIsExpense(entry.isExpense)
  //     setIsOpen(true)
  //     console.log(index);
  //   }
  // }

  // function addEntry() {
  //   const result = entries.concat({
  //     id: entries.length + 1, 
  //     description, 
  //     value,
  //     isExpense
  //   })
  //   // setEntries(result)
  //   resetEntry()
  // }

  // function resetEntry() {
  //   setDescription('')
  //   setValue('')
  //   setIsExpense(true)
  // }
  
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
        // editEntry={editEntry}
      />
      

      <MainHeader title="Add new transaction" type="h3" />
     <NewEntryForm 
      // addEntry={addEntry}
      // description={description} 
      // value={value}
      // isExpense={isExpense}
      // setDescription={setDescription}
      // setValue={setValue}
      // setIsExpense={setIsExpense}
     />
    <ModalEdit 
      isOpen={isOpen} 
      {...entry}
      // setIsOpen={setIsOpen}
      // addEntry={addEntry}
      // description={description} 
      // value={value}
      // isExpense={isExpense}
      // setDescription={setDescription}
      // setValue={setValue}
      // setIsExpense={setIsExpense}
      />

    </Container>
  );
}


export default App;
