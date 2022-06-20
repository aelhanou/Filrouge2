const { courseModel } = require("../../models")





const createcourse = async (data) => {
    try {
        let course = await courseModel.create(data)
        return course
    } catch (error) {
        throw error
    }

}


const getcourseById = async (id) => {
    try {
        let course = await courseModel.findById(id).populate([{path: "episodes"},{path: "techId"}])
        return course
    } catch (error) {
        throw error
    }
}

const getAllcourses = async () => {
    try {
        let course = await courseModel.find()
        return course
    } catch (error) {
        throw error
    }

}


const deletecourse = async (id) => {
    try {
        await courseModel.bulkWrite([
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

const updatecourse = async (data) => {
    try {
        let { id } = data
        await courseModel.bulkWrite([
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
    createcourse,
    getcourseById,
    getAllcourses,
    deletecourse,
    updatecourse
}