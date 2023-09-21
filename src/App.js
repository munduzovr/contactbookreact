import './App.css';
import Context from './Context/Context';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <Context>
       <MainRoutes/>
    </Context>
  );
}

export default App;
