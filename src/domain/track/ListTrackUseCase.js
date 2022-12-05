const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> ListTrackUseCase")
  
    const request = {
      url: `/playlists/${req.query.palylist_id}/tracks`,
      token: req.query.token
    }
  
    apiRequest.get(request, res)
}

module.exports = { execute }
