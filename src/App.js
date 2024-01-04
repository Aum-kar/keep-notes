import './App.css';

import Header from './compontents/Header';
import CreateContainer from './compontents/CreateContainer';
import Note from './compontents/Note';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <CreateContainer />
        <div className='notes-container'>
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>

    </div>
  );
}

export default App;
