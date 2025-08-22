import './App.css';
import Navbar from './components/Navbar'; // Importe a Navbar aqui
import { AppRoutes } from './routes/Routes';

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes /> 
    </>
  );
}

export default App;