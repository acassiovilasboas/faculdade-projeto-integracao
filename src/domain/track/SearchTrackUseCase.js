const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> SearchTrackUseCase")
  
    const request = { 
      url: `/search?q=${req.query.q}&type=track&limit=1`,
      token: req.query.token
    }

    const response = await apiRequest.get(request, res)

    const track = response.tracks.items.map((item, index) => {
        return {
            name: item.name,
            id: item.id,
            artitsName: item.album.artists[0].name,
            artistId: item.album.artists[0].id
        }
    })

    return track[0]
}

module.exports = { execute }
