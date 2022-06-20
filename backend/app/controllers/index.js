const { createUser, login,updateUser } = require("./users")
const { createcategory, getAllcategorys, getcategoryById, deletecategory, updatecategory } = require("./category")
const { createtech, deletetech, getAlltechs, gettechById, updatetech } = require("./tech")
const { createEpisode, deleteEpisode, getAllEpisodes, getEpisodeById, updateEpisode } = require("./episode")
const { createcourse, deletecourse, getAllcourses, getcourseById, updatecourse } = require("./course")

module.exports = {
    createUser,
    createcategory,
    getAllcategorys,
    getcategoryById,
    deletecategory,
    updatecategory,
    createtech,
    gettechById,
    getAlltechs,
    deletetech,
    updatetech,
    createEpisode,
    getEpisodeById,
    getAllEpisodes,
    deleteEpisode,
    updateEpisode,
    createcourse,
    getcourseById,
    getAllcourses,
    deletecourse,
    updatecourse,
    login,
    updateUser
}