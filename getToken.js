// Client ID d049efc6e6d641d781f14e9dba8f8c72
// Client Secret fe4e4be751b845d096020116b9e0df1e

var client_id = 'd049efc6e6d641d781f14e9dba8f8c72'
var client_secret = 'fe4e4be751b845d096020116b9e0df1e'

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
}

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token
    console.log(token)
  }
})