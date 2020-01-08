const express = require("express")
const router = express.Router()
const cors = require("cors")

import { SITE_NAME } from "../utils/Constants"
import { nullOrEmpty, emptyInitial, mkTitle } from "../../shared/func"
router.use(cors())


router.get("/", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle("Welcome To " +SITE_NAME)
    res.locals.initialData = initialData
    next()
})

router.get("/trending", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle("Trending")
    res.locals.initialData = initialData
    next()
})

router.get("/subscriptions", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle("Subscriptions")
    res.locals.initialData = initialData
    next()
})

router.get("/notifications", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle("Notifications")
    res.locals.initialData = initialData
    next()
})

router.get("/upload", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle("Upload")
    res.locals.initialData = initialData
    next()
})

router.get("/profile", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle("Profile")
    res.locals.initialData = initialData
    next()
})

router.get("/searched", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle(nullOrEmpty(req.query.q)?"Search":req.query.q)
    res.locals.initialData = initialData
    next()
})

router.get("/saved", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle("Saved Movies")
    res.locals.initialData = initialData
    next()
})

router.get("/genre/:name", (req, res, next) => {
    const initialData = emptyInitial()
    initialData.headData.title = mkTitle("Movie Genres")
    res.locals.initialData = initialData
    next()
})

module.exports = router

