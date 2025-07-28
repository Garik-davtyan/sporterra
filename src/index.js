import React from "react"
import * as ReactDOMClient from "react-dom/client"
import Appp from "./App"


const apppp = ReactDOMClient.createRoot(document.getElementById('root'))

apppp.render(<Appp/>)