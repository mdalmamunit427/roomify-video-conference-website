import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.tsx";
import VideoConf from "./pages/conference/VideoConf.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
      <Route path="/video-conference" element={<VideoConf/>} />
    </Routes>
  </BrowserRouter>
);
