var axios = require('axios');
var urlPath = 'https://api.spotify.com/v1'

// user id 9w0nqrk3h9kwcsq77kv9dx2e2
// playlist publica 3kMGQtZTqzv62i2bHlNvTr
// playlist privada 4uTcYnYSNqgHt0CYYUZk65

function makeRequestWithBody(url, method, token, body) {
  config = {
    method: method,
    url: url,
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: body
  }

  return config
}

function makeRequest(url, method, token) {
  config = {
    method: method,
    url: url,
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  }

  return config
}

async function getPlaylists(req, res) {
  console.log("run PlaylistAPI -> getPlaylists")

  const url = `${urlPath}/me/playlists`
  const method = "get"
  const token = req.query.token

  const request = makeRequest(url, method, token)

  console.log(request)

  await axios(request)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log("error api")
    console.log(error.response.data)
    res.status(401).send("token expirado")
  });
}

async function getTracksOfPlaylist(req, res) {
  console.log("run PlaylistAPI -> getTracksOfPlaylist")

  const playlistId = req.query.palylist_id
  const url = `${urlPath}/playlists/${playlistId}/tracks`
  const method = "get"
  const token = req.query.token

  const request = makeRequest(url, method, token)

  console.log(request)

  await axios(request)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log("error api")
    console.log(error.response.data)
    res.status(401).send("token expirado")
  });
}

async function createPlaylist(req, res) {
  console.log("run PlaylistAPI -> createPlaylist")

  // console.log(req.body)

  const userId = req.body.user_id
  const url = `${urlPath}/users/${userId}/playlists`
  const method = "post"
  const token = req.body.token

  let body = { 
    name: req.body.name,
    description: req.body.description,
    public: req.body.public
  }

  // console.log(data)

  const request = makeRequestWithBody(url, method, token, body )

  console.log(request)

  await axios(request)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log("error api")
    console.log(error.response.data)
    res.status(401).send("token expirado")
  });
}

async function recomendationTracks(req, res) {
  console.log("run PlaylistAPI -> recomendationTracks")

  const seedGenres = req.query.seed_genres
  // console.log(seedGenres)

  const url = `${urlPath}/recommendations?seed_genres=${seedGenres}`
  const method = "get"
  const token = req.query.token 
  // const limit = req.query.limit

  const request = makeRequest(url, method, token)

  console.log(request)

  await axios(request)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log("error api")
    console.log(error.response.data)
    res.status(401).send("token expirado")
  });
}

async function addTrack(req, res) {
  console.log("run PlaylistAPI -> addTrack")

  const playlistId = req.query.playlist_id
  const uris = req.query.uris
  const url = `${urlPath}/playlists/${playlistId}/tracks?uris=${uris}`
  const method = "post"
  const token = req.query.token

  const request = makeRequest(url, method, token)

  console.log(request)

  await axios(request)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log("error api")
    console.log(error.response.data)
    res.status(401).send("token expirado")
  });
}

async function removeTrack(req, res) {
  console.log("run PlaylistAPI -> removeTrack")

  const playlistId = req.query.playlist_id
  const url = `${urlPath}/playlists/${playlistId}/tracks`
  const method = "delete"
  const token = req.query.token

  let data = req.body

  const request = makeRequestWithBody(url, method, token, data)

  console.log(request)

  await axios(request)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log("error api")
    console.log(error.response.data)
    res.status(401).send("token expirado")
  });
}

module.exports = { 
  getPlaylists, 
  getTracksOfPlaylist, 
  createPlaylist, 
  recomendationTracks, 
  addTrack,
  removeTrack
}
