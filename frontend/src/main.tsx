import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContextProvider } from './context/AppContext';
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry: 0
    }
  }
})
createRoot(document.getElementById('root')!).render(
	<StrictMode>
    
    <QueryClientProvider client={queryClient}>
		<BrowserRouter>
    <AppContextProvider>
			<App />
      </AppContextProvider>
		</BrowserRouter>
    </QueryClientProvider>
   
	</StrictMode>
)


