const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> AddTrackUseCase")
  
    const request = {
      url: `/playlists/${req.query.playlist_id}/tracks?uris=${req.query.uris}`,
      token: req.query.token
    }

    apiRequest.post(request, res)
}

module.exports = { execute }
