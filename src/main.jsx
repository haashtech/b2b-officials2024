// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import rootRouter from './routers/RootRouter'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux_kit/store'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Provider store={store}>
  <RouterProvider router={App} />
</Provider>
)
