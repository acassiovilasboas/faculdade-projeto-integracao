const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> GetTrackListOfPlaylistUseCase")
  
    const request = {
      url: `/playlists/${req.query.palylist_id}/tracks`,
      token: req.query.token
    }
  
    return await apiRequest.get(request, res)
}

module.exports = { execute }
