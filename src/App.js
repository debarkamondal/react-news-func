// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';
import LoadingBar from 'react-top-loading-bar'
import RootLayout from './pages/RootLayout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Navbar from './components/Navbar';


export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API
  state = { progress: 0 }
  setProgress = (newProgress) => {
    this.setState({ progress: newProgress })
    // console.log("This is from setProgress "+this.state.progress)
  }

  router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={12} category="general" />
        },
        {
          path: "sports",
          element: <NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={12} category="sports" />,
        },
        {
          path: "health",
          element: <NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={12} category="health" />,
        },
        {
          path: "general",
          element: <NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={12} category="general" />
        },
        {
          path: "entertainment",
          element: <NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={12} category="entertainment" />,
        },
        {
          path: "science",
          element: <NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={12} category="science" />,
        },
        {
          path: "business",
          element: <NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={12} category="business" />,
        },
        {
          path: "technology",
          element: <NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={12} category="technology" />,
        }
      ]
    },
  ]);
  render() {
    return (
      <>
        <RouterProvider router={this.router} />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
          height = {3}
        />
      </>
    )
  }
}
