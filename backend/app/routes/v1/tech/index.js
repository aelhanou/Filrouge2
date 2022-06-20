const { createtech, deletetech, getAlltechs, gettechById, updatetech } = require("../../../controllers")

const router = require("express").Router()


router.post("/addTech", async (req, res) => {
    try {
        // const { name, courseId } = req.body
        // console.log(name, courseId, 'broo');
        if (!req.body?.name) {
            res.status(500).json({
                message: "fill the fields inputs"
            })
        }
        let data = await createtech(req.body)
        res.status(201).json(data)

    } catch (error) {
        throw error
    }

})

router.get("/gettechById/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        let data = await gettechById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        throw error
    }
})

router.get("/gettechs", async (req, res) => {
    try {
        let data = await getAlltechs()
        res.status(200).json(data)
    } catch (error) {
        throw error
    }
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
    TechRouter: router
}