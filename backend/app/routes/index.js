const router = require("express").Router()
const { UserRouter } = require("./v1/user")
const { CategoryRouter } = require("./v1/category")
const { TechRouter } = require("./v1/tech")
const { EpisodeRouter } = require("./v1/episode")
const { CourseRouter } = require("./v1/course")

router.use(UserRouter)
router.use(CategoryRouter)
router.use(TechRouter)
router.use(EpisodeRouter)
router.use(CourseRouter)

module.exports = {
    router
}