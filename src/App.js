// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NewsComponent from './components/NewsComponent';
import LoadingBar from 'react-top-loading-bar'
import RootLayout from './pages/RootLayout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Navbar from './components/Navbar';


const App = () => {
  const apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <NewsComponent apiKey={apiKey} setProgress={setProgress} key="general" pageSize={12} category="general" />
        },
        {
          path: "sports",
          element: <NewsComponent apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={12} category="sports" />,
        },
        {
          path: "health",
          element: <NewsComponent apiKey={apiKey} setProgress={setProgress} key="health" pageSize={12} category="health" />,
        },
        {
          path: "general",
          element: <NewsComponent apiKey={apiKey} setProgress={setProgress} key="general" pageSize={12} category="general" />
        },
        {
          path: "entertainment",
          element: <NewsComponent apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={12} category="entertainment" />,
        },
        {
          path: "science",
          element: <NewsComponent apiKey={apiKey} setProgress={setProgress} key="science" pageSize={12} category="science" />,
        },
        {
          path: "business",
          element: <NewsComponent apiKey={apiKey} setProgress={setProgress} key="business" pageSize={12} category="business" />,
        },
        {
          path: "technology",
          element: <NewsComponent apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={12} category="technology" />,
        }
      ]
    },
  ]);

    return (
      <>
        <RouterProvider router={router} />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height = {3}
        />
      </>
    )
  }
  export default App