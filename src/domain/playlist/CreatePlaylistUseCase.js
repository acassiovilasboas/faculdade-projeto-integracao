const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> CreatePlaylistUseCase")
  
    let body = { 
      name: req.body.name,
      description: req.body.description,
      public: req.body.public
    }
  
    const request = {
      url: `/users/${req.body.user_id}/playlists`,
      token: req.body.token,
      body: body
    }
  
    apiRequest.post(request, res)
  }

  module.exports = { execute }
  