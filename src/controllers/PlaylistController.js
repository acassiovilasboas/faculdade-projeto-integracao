const getPlaylistUseCase = require('../domain/playlist/GetPlaylistUseCase')
const createPlaylistUseCase = require('../domain/playlist/CreatePlaylistUseCase')

module.exports = {

    //list playlists (token do usuario)
    async getPlaylists(req, res) {
        console.log("run PlaylistController -> getPlaylists")
        getPlaylistUseCase.execute(req, res)
    },
    // criar playlist (objeto com nome, descricao e public)
    async createPlaylist(req, res) {
        console.log("run PlaylistController -> createPlaylist")
        createPlaylistUseCase.execute(req, res)
    }
}
