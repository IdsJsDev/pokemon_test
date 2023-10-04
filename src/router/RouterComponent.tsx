import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../Layouts/Root/Root.layout.tsx';
import { AppPaths } from '../constants/appPaths.ts';
import TablePage from '../pages/TablePage/TablePage.tsx';
import PokemonPage from '../pages/PokemonPage/PokemonPage.tsx';

const router = createBrowserRouter([
  {
    path: AppPaths.ROOT,
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: AppPaths.TABLE,
        element: <TablePage />,
      },
      {
        path: AppPaths.POCKEMON_PAGE+':name',
        element: <PokemonPage />,
      },
    ],
  },
]);

export default <RouterProvider router={router} />
