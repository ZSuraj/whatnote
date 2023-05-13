import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes';
import { MyProvider } from './ContextApi';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <BrowserRouter>
          <Navbar />
          <AllRoutes />
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
