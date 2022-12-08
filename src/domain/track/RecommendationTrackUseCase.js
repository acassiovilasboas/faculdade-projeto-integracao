const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> RecommendationTrackUseCase")
  
    const request = { 
      url: `/recommendations?limit=10&seed_genres=${req.query.seed_genres}&min_popularity=60`,
      token: req.query.token 
    }
  
    console.log(request)

    const response = await apiRequest.get(request, res)

    console.log(response)

    if (response.tracks.length == 0) {
      return response
  }

    const tracks = response.tracks.map(item => {
      return {
        artistas: item.artists.map(artist => { 
          return { 
            nome: artist.name 
          }
        }),
        musica: item.name,
        popularidade: item.popularity
      }
    })

    return tracks
}

module.exports = { execute }
