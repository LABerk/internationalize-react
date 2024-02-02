import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes'

export const App = () => {

  const router = createBrowserRouter(routes)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}