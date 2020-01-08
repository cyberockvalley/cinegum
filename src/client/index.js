import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import ComponentsRoute from "../shared/components/ComponentsRoute"

const initialData = window.__initialData__
delete window.__initialData__
const App = () => (
  <BrowserRouter>
    <ComponentsRoute initialData={initialData} />
  </BrowserRouter>
)
ReactDOM.hydrate(
    <App suppressHydrationWarning={true} />, 
    document.querySelector("#root")
)