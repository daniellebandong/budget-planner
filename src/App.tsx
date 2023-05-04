import React, {FC} from 'react';

import BudgetEntry from './components/forms/BudgetEntry';
import Header from './components/headers/Header';
const App: FC = () => {
  return (
    <div className="App">
      <Header/>
      <BudgetEntry/>
    </div>
  );
}

export default App;
