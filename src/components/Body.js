import Login from './Login'
import Browes from './Browes'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import TrailerPlayer from './TrailerPlayer'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browes />
        },
        {
      path: '/watch/:movieName',
      element: <TrailerPlayer />
    }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body
