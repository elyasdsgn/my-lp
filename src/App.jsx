import Home from './pages/Home';
import Bio from './pages/Bio';
import AOS from 'aos'
import "aos/dist/aos.css"

import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/bio",
    element: <Bio/>
  },
  {
    path: '*',
    element: <Navigate to={'/'}/>
  }
])

function App() {
  useEffect(() => {
    AOS.init()

    //Bloquear o arrasta das imagens
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)

  }, [])
  

  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  );
}

export default App;
