import Login from './Login'
import Browes from './Browes'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browes />
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body


// import React from 'react'
// import { RouterProvider } from 'react-router-dom'
// import Login from './Login'
// import Browes from './Browes'
// import { createBrowserRouter } from 'react-router-dom'

// const Body = () => {

// const appRouter = createBrowserRouter ([
//     {
//         path:"/",
//         Element:<Login/>
//     },
//     {
//         path:"browse",
//         Element:<Browes/>
//     },
// ])

//   return (
//     <div>
//       <RouterProvider router={appRouter}/>
//     </div>
//   )
// }

// export default Body;
