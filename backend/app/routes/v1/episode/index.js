const { createEpisode, deleteEpisode, getAllEpisodes, getEpisodeById, updateEpisode } = require("../../../controllers")
const uploadfiles = require("../../../firebase")
const {Mlter} =require("../../../middlewares")
const router = require("express").Router()

router.post("/addEpisode", Mlter.fields([{ name: 'file', maxCount: 1 }, { name: 'name', maxCount: 8 }]), uploadfiles, async (req, res) => {
    const { name } = req.body
    let video = req.files.file[0].firebaseUrl
    try {
        let data = await createEpisode({ name, video })
        res.status(201).json(data)

    } catch (error) {
        throw error
    }

})

// router.get("/chambres", async (req,res)=>{
//     let data = await getAllChambres()
//     res.status(200).json(data)
// })

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
    EpisodeRouter: router
}