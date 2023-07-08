import ReactDOM from 'react-dom/client'
import App from './App'
import {HashRouter} from 'react-router-dom';
import NotesContextProvider from './components/contexts/NotesContext';
import CategoryContextProvider from './components/contexts/CategoryContext';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <NotesContextProvider>
    <CategoryContextProvider>
      <StrictMode>
      <HashRouter>
      <App />
      </HashRouter>
      </StrictMode>
    </CategoryContextProvider>
  </NotesContextProvider>
)
