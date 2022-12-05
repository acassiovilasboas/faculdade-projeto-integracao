const apiRequest = require('../../api/ApiRequest')

async function execute(req, res) {
    console.log("run Domain -> RecommendationTrackUseCase")
  
    const request = { 
      url: `/recommendations?seed_genres=${req.query.seed_genres}`,
      token: req.query.token 
    }
  
    apiRequest.get(request, res)
}

module.exports = { execute }
