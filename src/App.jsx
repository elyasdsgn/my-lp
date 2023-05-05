import Home from './pages/Home';
import Bio from './pages/Bio';

import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'

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
  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  );
}

export default App;
