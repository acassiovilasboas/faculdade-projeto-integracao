const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> GetGenresFromArtistUseCase")
  
    const request = { 
      url: `/artists/${req.query.id}`,
      token: req.query.token
    }

    console.log(request)

    const response = await apiRequest.get(request, res)
  
    return response.genres
}

module.exports = { execute }
