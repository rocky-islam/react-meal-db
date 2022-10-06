import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import About from './components/About/About';
import Main from './layout/Main/Main';
import Friends from './components/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, 
    children: [
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: '/product', element: <Product></Product>},
      {
        path: '/friend',
        loader: async () => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
        },
        element: <Friends></Friends>}
    ]},
    {path: '/about', element: <About></About>},
    {path: '*', element: <div><h2>This is not found 404</h2></div>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
