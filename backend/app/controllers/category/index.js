const { categoryModel } = require("../../models")





const createcategory = async (data) => {
    try {
        let category = await categoryModel.create(data)
        return category
    } catch (error) {
        throw error
    }

}


const getcategoryById = async (id) => {
    try {
        let categoryModel = await categoryModel.findById(id)
        return categoryModel
    } catch (error) {
        throw error
    }
}

const getAllcategorys = async () => {
    try {
        let categoryModels = await categoryModel.find().populate([{path: "techId"}])
        return categoryModels
    } catch (error) {
        throw error
    }

}


const deletecategory = async (id) => {
    try {
        await categoryModel.bulkWrite([
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

const updatecategory = async (data) => {
    try {
        let { id } = data
        await categoryModel.bulkWrite([
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
    createcategory,
    getcategoryById,
    getAllcategorys,
    deletecategory,
    updatecategory
}