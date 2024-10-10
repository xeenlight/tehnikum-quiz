import React from "react";
import "./styles/main.css";

import Welcome from "./pages/Welcome";
import RegistrationPage from './pages/RegistrationPage';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import StepFour from './pages/StepFour';
import Thanks from './pages/Thanks';

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeProvider";


const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>
  },
  {
    path: "/RegistrationPage",
    element: <RegistrationPage/>
  },
  {
    path: "/StepOne",
    element: <StepOne/>
  },
  {
    path: "/StepTwo",
    element: <StepTwo/>
  },
  {
    path: "/StepThree",
    element: <StepThree/>
  },
  {
    path: "/StepFour",
    element: <StepFour/>
  },
  {
    path: "/Thanks",
    element: <Thanks/>
  },
])

const App = () => {
  return (
    <ThemeProvider>
    <div className="App">
      <RouterProvider
      router={routerConfig}/>
    </div>
    </ThemeProvider>
  );
};

export default App;
