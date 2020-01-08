//modules start
const dotenv = require("dotenv")
const dotenvConfig = dotenv.config({path: "env/.env"})
if(dotenvConfig.error) {
    throw dotenvConfig.error

} else {
    console.log("DOT_ENV_DATA", dotenvConfig.parsed)
}
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const compression = require("compression")
const helmet = require("helmet");

import path from "path"
import React from 'react'
import template from "./views/template"
import { StaticRouter } from "react-router-dom"
import ReactDOMServer from 'react-dom/server'
import ComponentsRoute from "../shared/components/ComponentsRoute"
import { auth } from "./utils/middlewares"
import InitialData from "../server/routes/InitialData"
import { APP_PATHS } from "./utils/Constants"
import { emptyInitial, mkTitle } from "../shared/func"
//modules ends

////middlewares start
app.use(cookieParser(process.env.COOKIES_SECRET_KEY));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(compression());
app.use(helmet())
// set static folder for generated css and front js files
app.use('/public', express.static(path.resolve(__dirname, 'public')))
console.log("PUB_DIR", path.resolve(__dirname, 'public'))

app.use("*", auth)
app.use(APP_PATHS, InitialData)
////middlewares end

app.get(APP_PATHS, (req, res) => {
    const initialData = res.locals.initialData
    initialData.user = res.locals.user
    const headData = initialData.headData;
    const bodyData = initialData.bodyData
    console.log("INITIAL_DATA", initialData)
    const context = {}
    const component = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <ComponentsRoute initialData={bodyData}/>
        </StaticRouter>
    )
    res.send(
        template({
            headData: headData,
            initialData: bodyData,
            body: component
        })
    )
})


app.get("*", (req, res) => {
    const initialData = emptyInitial()
    initialData.user = res.locals.user
    initialData.headData.title = mkTitle("Not Found")
    const headData = initialData.headData;
    const bodyData = initialData.bodyData
    console.log("INITIAL_DATA", initialData)
    const context = {}
    const component = ReactDOMServer.renderToString(
        <StaticRouter location={"/error"} context={context}>
          <ComponentsRoute initialData={bodyData}/>
        </StaticRouter>
    )
    res.send(
        template({
            headData: headData,
            initialData: bodyData,
            body: component
        })
    )
})

app.listen(process.env.PORT, () => {
    console.log("Server started on port "+process.env.PORT)
})