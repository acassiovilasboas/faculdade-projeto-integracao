const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> GetPlaylistUseCase")
  
    const request = { 
      url: `/me/playlists`,
      token: req.query.token
    }

    const response = await apiRequest.get(request, res)

    const playlist = response.items.map((item, index) => {
      return {
          id: item.id,
          name: item.name,
          public: item.public,
          tracks: item.tracks.total
      }
      
  })
  
  return playlist 
}

module.exports = { execute }
