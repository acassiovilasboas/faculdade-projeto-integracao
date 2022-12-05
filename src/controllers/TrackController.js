const listTrackUseCase = require('../domain/track/ListTrackUseCase')
const recommendationsUseCase = require('../domain/track/RecommendationTrackUseCase')
const addTrackUseCase = require('../domain/track/AddTrackUseCase')
const removeTrackUseCase = require('../domain/track/RemoveTrackUseCase')

module.exports = {

    // listar musicas da playlist (id da playlist)
    async listTrack(req, res) {
        console.log("run TrackController -> listTrack")
        listTrackUseCase.execute(req, res)
    },
    // recomendar (token, generos separados por virgula)
    async recomendationTracks(req, res) {
        console.log("run TrackController -> recomendationTracks")
        recommendationsUseCase.execute(req, res)
    },

    // // adicionar item em playlist (id da playlist, uri da musica)
    async addTrack(req, res) {
        console.log("run TrackController -> addTrack")
        addTrackUseCase.execute(req, res)
    },

    // // retirar item de playlist (id da playlist, uri da musica)
    async removeTrack(req, res) {
        console.log("run TrackController -> removeTrack")
        removeTrackUseCase.execute(req, res)
    }
}
