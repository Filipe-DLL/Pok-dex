import './App.css';
import { ThemeProvider } from './context/theme-context';
import { AppRoutes } from './pages/rotas/routes';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
