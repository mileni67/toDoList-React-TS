import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/toDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescrioption } from './pages/ItemDescription';
import { Layout } from './layouts/Layouts';

const todos: ToDo[] = [
  {
    id: 0,
    text: "Первое действие",
    isDone: false
  },
  {
    id: 1,
    text: "Второе действие",
    isDone: true
  },
  {
    id: 2,
    text: "Третье действие",
    isDone: false
  },
  {
    id: 3,
    text: "Четвертое действие",
    isDone: true
  }
]

const basename =
  process.env.NODE_ENV === 'production'
    ? '/toDoList-React-TS'
    : '/';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <HomePage todos={todos} /> },
        { path: '/todo', element: <ToDoListPage /> },
        { path: '/list/:id', element: <ItemDescrioption todos={todos} /> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ],
  { basename }
);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
