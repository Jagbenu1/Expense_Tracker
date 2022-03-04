import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {

  const [storedYear, setStoredYear] = useState('2022');

  const expensesFilterHandler = (enteredYear) => {
    setStoredYear(enteredYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === storedYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={storedYear} 
          onSaveExpensesFilter={expensesFilterHandler} 
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
