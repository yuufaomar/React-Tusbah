import { createRoot } from "react-dom/client"


import "./style.css"

import Header from "./components/Header"

import App from "./app"
import { BrowserRouter } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Header />
<App />
</BrowserRouter>
)