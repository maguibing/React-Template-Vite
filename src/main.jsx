import ReactDOM from 'react-dom/client'
import './main.css'
import { Provider } from 'react-redux'
import store from '@/store/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root, { loader as rootLoader, action as rootAction } from '@/pages/root'
import ErrorPage from '@/pages/err'
import Contact, { loader as contactLoader } from '@/pages/contact'
import EditContact, { action as editAction } from '@/pages/edit'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        action: editAction,
        loader: contactLoader
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>,
)
