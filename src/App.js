import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AnsAndQs from './Copmo/AnsAndQs';
import Home from './Copmo/Home';
import Root from './Root/Root';

const App = () => {
  const nathErGoro = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: 'ansAndQs',
          element: <AnsAndQs></AnsAndQs>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={nathErGoro}></RouterProvider>
    </div>
  );
};

export default App;