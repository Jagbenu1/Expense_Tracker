import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  //const [chosenYear, setChosenYear] = useState('2022');

  const yearChangeHandler = (event) => {
    const chosenYear = event.target.value;

    props.onSaveExpensesFilter(chosenYear);
    // console.log(chosenYear);
  }
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;