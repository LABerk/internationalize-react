import { RouteObject } from 'react-router-dom';
import { Home } from './pages/home';
import { TranslationPage } from './pages/translation-page';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/translation',
    element: <TranslationPage />,
  },
];