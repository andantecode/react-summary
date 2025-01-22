import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import NoteList from "./components/NoteList"
import NoteDetail from "./components/NoteDetail"

export const rounterConfig = [
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                index: true,
                element: <NoteList/>
            },
            {
                path: "/notes/:id",
                element: <NoteDetail />
            }
        ]
    }
]

const router = createBrowserRouter(rounterConfig)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
