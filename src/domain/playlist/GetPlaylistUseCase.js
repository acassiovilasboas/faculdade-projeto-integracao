const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> GetPlaylistUseCase")
  
    const request = { 
      url: `/me/playlists`,
      token: req.query.token
    }
  
    apiRequest.get(request, res)
}

module.exports = { execute }
