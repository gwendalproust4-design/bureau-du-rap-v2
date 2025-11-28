import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hide the static fallback message we added in index.html if present
const fallback = document.getElementById('fallback');
if (fallback) fallback.remove();

console.log('React app mounted');
