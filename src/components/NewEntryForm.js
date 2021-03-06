import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForma from './EntryForma';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {
  const {
    description, 
    setDescription, 
    value, 
    setValue, 
    isExpense, 
    setIsExpense, 
    addEntry
  } = useEntryDetails();
  
    return (
    <Form unstackable>

     <EntryForma 
      description={description} 
      value={value}
      isExpense={isExpense}
      setDescription={setDescription}
      setValue={setValue}
      setIsExpense={setIsExpense}
     />

    <ButtonSaveOrCancel  addEntry={addEntry}/>
  </Form>
  )
}

export default NewEntryForm
