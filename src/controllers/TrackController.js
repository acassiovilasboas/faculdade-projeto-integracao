const listTrackUseCase = require('../domain/track/GetTrackListOfPlaylistUseCase')
const recommendationsUseCase = require('../domain/track/RecommendationTrackUseCase')
const addTrackUseCase = require('../domain/track/AddTrackUseCase')
const removeTrackUseCase = require('../domain/track/RemoveTrackUseCase')
const getGenreUseCase = require('../domain/track/GetGenresFromArtistUseCase')
const searchTrackUseCase = require('../domain/track/SearchTrackUseCase')
const genrensNative = require('../../genre')

module.exports = {

    // listar musicas da playlist (id da playlist)
    async listTrack(req, res) {
        console.log("run TrackController -> listTrack")
        listTrackUseCase.execute(req, res)
    },
    // recomendar (token, generos separados por virgula)
    async recomendationTracks(req, res) {
        console.log("run TrackController -> recomendationTracks")

        const track = await searchTrackUseCase.execute(req, res)  
        // console.log("track")
        console.log(track)
        req.query.id = track.artistId
        let genre = await getGenreUseCase.execute(req, res)
        // console.log("genre")
        console.log(genre)

        genre = genre.map(item => item.split(" ").join("-"))

        genresValids = genre.filter(item => genrensNative.genres.includes(item))

        if (genresValids.length == 0) {
            res.send({
                "message": "genero não pertence a lista de generos que a API atende, ou a musica pertence a varios artistas",
                "musica": track.name, 
                "artista": track.artitsName,
                "generos": genre
            })
            return
        }

        console.log("genre encontrados: ", genresValids)

        req.query.seed_genres = genresValids

        const recommendationTracks = await recommendationsUseCase.execute(req, res)

        res.send(recommendationTracks)
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
