import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { ListNewBooks } from './pages/ListNewBooks'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ListNewBooks />
      }
    ]
  }
])
