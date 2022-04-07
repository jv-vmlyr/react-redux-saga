import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import EntryForm from './components/EntryForm';
import SectionHeader from './components/SectionHeader';
import IncomeAndExpense from './components/IncomeAndExpense';
import EntryLines from './components/EntryLines';

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log('entries', entries);
    console.log('result', result);
    setEntries(result);
  }

  function addEntry(description, value) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
    });
    console.log('result', result);
    console.log('entries', entries);
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" />
      <IncomeAndExpense />
      <SectionHeader title="History" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <SectionHeader title="Add new transaction" />
      <EntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work Income',
    value: '$4300.00',
    isExpense: false,
  },
  {
    id: 2,
    description: 'Electric Bill',
    value: '$130.00',
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: '$1365.00',
    isExpense: true,
  },
  {
    id: 4,
    description: 'Phone Bill',
    value: '$123.00',
    isExpense: true,
  },
];
