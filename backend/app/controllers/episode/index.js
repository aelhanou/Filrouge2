const { episodeModel } = require("../../models")





const createEpisode = async (data) => {
    try {
        let Episode = await episodeModel.create(data)
        return Episode
    } catch (error) {
        throw error
    }

}


const getEpisodeById = async (id) => {
    try {
        let episode = await episodeModel.findById(id)
        return episode
    } catch (error) {
        throw error
    }
}

const getAllEpisodes = async () => {
    try {
        let episode = await episodeModel.find()
        return episode
    } catch (error) {
        throw error
    }

}


const deleteEpisode = async (id) => {
    try {
        await episodeModel.bulkWrite([
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

const updateEpisode = async (data) => {
    try {
        let { id } = data
        await episodeModel.bulkWrite([
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
    createEpisode,
    getEpisodeById,
    getAllEpisodes,
    deleteEpisode,
    updateEpisode
}