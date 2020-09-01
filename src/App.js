import React from 'react';
import {view as Todos} from './todos';
import {view as Filter} from './filters';

function App() {
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  );
}

export default App;
