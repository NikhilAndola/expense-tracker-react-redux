import React from 'react'
import { ExpenseList } from '../../components/expense-list'
import { TopFold } from '../../components/topFold'
import "./home.css"

export const Home = () => {
  return (
    <div className="home">
      <TopFold/>
      <ExpenseList/>
    </div>
  )
}