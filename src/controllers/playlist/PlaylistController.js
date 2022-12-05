const api = require('../../api/PlaylistAPI')

module.exports = {

    //list playlists (token do usuario)
    async getPlaylists(req, res) {
        console.log("run PlaylistController -> getPlaylists")
        api.getPlaylists(req, res)
    },
    // listar musicas da playlist (id da playlist)
    async getTracksOfPlaylist(req, res) {
        console.log("run PlaylistController -> getTracksOfPlaylist")
        api.getTracksOfPlaylist(req, res)
    },
    // criar playlist (objeto com nome, descricao e public)
    async createPlaylist(req, res) {
        console.log("run PlaylistController -> createPlaylist")
        api.createPlaylist(req, res)
    },
    // recomendar (token, generos separados por virgula)
    async recomendationTracks(req, res) {
        console.log("run PlaylistController -> recomendationTracks")
        api.recomendationTracks(req, res)
    },

    // adicionar item em playlist (id da playlist, uri da musica)
    async addTrack(req, res) {
        console.log("run PlaylistController -> addTrack")
        api.addTrack(req, res)
    },

    // retirar item de playlist (id da playlist, uri da musica)
    async removeTrack(req, res) {
        console.log("run PlaylistController -> removeTrack")
        api.removeTrack(req, res)
    }
}