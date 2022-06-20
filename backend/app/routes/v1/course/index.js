const { createcourse, deletecourse, getAllcourses, getcourseById, updatecourse } = require("../../../controllers")
const uploadfiles = require("../../../firebase")

const router = require("express").Router()


router.post("/addCourse", uploadfiles, async (req, res) => {
    // const { name,duration,episodes,categoryId,addedDate,realeseDate,updateDate,language,lessonNumber,description,image } = req.body
    let image = req.files.file[0].firebaseUrl
    try {
        let data = await createcourse({ ...req.body, image, addedDate: Date.now(), realeseDate: (Date.now() + (1000 * 60 * 60 * 24 * 7)) })
        res.status(201).json(data)

    } catch (error) {
        throw error
    }

})




router.get("/courses", async (req, res) => {
    let data = await getAllcourses()
    res.status(200).json(data)
})

router.get("/course/:id", async (req, res) => {
    let { id } = req.params
    let data = await getcourseById(id)
    res.status(200).json(data)
})


// router.get("/deleteChambre/:id", async (req,res)=>{
//     let {id} = req.params
//     await deleteChambre(id)
//     res.status(204).json({
//         message: "Deleted successfully"
//     })
// })


// router.post("/updateChambre", async (req,res) => {
//     let {data} = req.body
//     await updateChambre(data)

//     res.status(204).json({
//         message: "updated successfully"
//     })

// })


module.exports = {
        CourseRouter: router
    }