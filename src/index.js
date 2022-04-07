import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: "always",
      retry: 0,
      staleTime: 0,
      cacheTime: 0,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
      <ToastContainer
        limit={1}
        position="top-right"
        hideProgressBar
        newestOnTop
        pauseOnHover
        closeOnClick={false}
      />
    </QueryClientProvider>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
