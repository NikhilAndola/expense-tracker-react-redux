import React from 'react'
import { AddForm } from '../../components/add-form'
import { TopFold } from '../../components/topFold'
import './addExpense.css'

export const AddExpense = () => {
  return (
    <div className="add-expense">
        <TopFold/>
        <AddForm/>
    </div>
  )
}
