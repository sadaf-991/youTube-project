import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './Components/Watchpage';
import MainContainer from './Components/MainContainer';


const appRoute = createBrowserRouter([
  {
  path: "/",
  element: <Body />,
children: [
  {
    path: "/",
    element: <MainContainer />
  },
  {
    path: "/watch",
    element: <WatchPage />
  },
],
}]);

const App = () => {
  return (
    <Provider store={appStore}>
   <div>
   <Header />   
   <RouterProvider router={appRoute} />
 </div>
 </Provider> 
  );
}

export default App;
