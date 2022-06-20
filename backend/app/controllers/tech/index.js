const { techModel } = require("../../models")





const createtech = async (data) => {
    let tech = await techModel.create(data)
    return tech
}


const gettechById = async (id) => {
    let techModelById = await techModel.findById(id).populate("courseId")
    return techModelById
}


const getAlltechs = async () => {
    let techModels = await techModel.find()
    return techModels
}


const deletetech = async (id) => {
    try {
        await techModel.bulkWrite([
            {
                deleteOne: {
                    filter: { _id: id }
                }
            }
        ])
    } catch (error) {
        throw error
    }

}

const updatetech = async (data) => {
    try {
        let { id } = data
        await techModel.bulkWrite([
            {
                updateOne: {
                    filter: { _id: id },
                    update: data
                }
            }
        ])
    } catch (error) {
        throw error
    }
}


module.exports = {
    createtech,
    gettechById,
    getAlltechs,
    deletetech,
    updatetech
}