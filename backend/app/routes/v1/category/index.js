const { createcategory, getAllcategorys, getcategoryById, deletecategory, updatecategory } = require("../../../controllers")
const { verifyToken } = require("../../../middlewares")

const router = require("express").Router()


router.post("/addCategory", async (req, res) => {
    const { name } = req.body
    try {
        if (!name) {
            res.status(500).json({
                message: "fill the fields inputs"
            })
        }

        let data = await createcategory(req.body)
        res.status(201).json(data)

    } catch (error) {
        throw error
    }

})

router.get("/categories", async (req,res)=>{
    let data = await getAllcategorys()
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
    CategoryRouter: router
}