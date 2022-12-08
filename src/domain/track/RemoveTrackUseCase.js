const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> RemoveTrackUseCase")
  
    const request = { 
      url: `/playlists/${req.query.playlist_id}/tracks`,
      token: req.query.token,
      body: req.body
    }
  
    return await apiRequest.destroy(request, res)
}

module.exports = { execute }
