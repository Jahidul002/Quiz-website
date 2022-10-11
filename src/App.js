import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AnsAndQs from './Copmo/AnsAndQs/AnsAndQs';
import Home from './Copmo/Home/Home';
import QuizPage from './Copmo/QuizPage/QuizPage';
import Statistics from './Copmo/Statistics/Statistics';
import Root from './Root/Root';

const App = () => {
  const nathErGoro = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'ansAndQs',
          element: <AnsAndQs></AnsAndQs>
        },
        {
          path: 'statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/:quizID',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
          },
          element: <QuizPage></QuizPage>
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