import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with ThirdwebProvider
root.render(
  <ThirdwebProvider
  // Required configuration for the provider, but doesn't affect Auth.
      activeChain="goerli"
      clientId="762770ede21a5ad118fb156a2814c90a"
      authConfig={{
        // Set this to your domain to prevent phishing attacks
        domain: "http://localhost:5173",
        // The URL of your Auth API
        authUrl: "http://localhost:5173/api/auth",
      }}
    >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
);
