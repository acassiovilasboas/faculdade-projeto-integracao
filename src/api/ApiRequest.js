var axios = require('axios');
var urlPath = 'https://api.spotify.com/v1'

function requestPost(req, method = 'post') {
    config = {
        method: method,
        url: `${urlPath}${req.url}`,
        headers: { 
        'Authorization': `Bearer ${req.token}`,
        'Content-Type': 'application/json',
        },
        data: req.body
    }

    return config
}
  
function requestGet(req) {
    config = {
        method: 'get',
        url: `${urlPath}${req.url}`,
        headers: { 
        'Authorization': `Bearer ${req.token}`,
        'Content-Type': 'application/json',
        }
    }

    return config
}

async function request(data, res) {
    
    return await axios(data)
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log("error api")
        console.log(error.response.data)
        res.setHeader('Content-Type', 'application/json');
        res.status(401).send({ "Error": { "message": "token expirado" }})
    });
}

async function get(req, res) {
    const data = requestGet(req)
    return await request(data, res)
}

async function post(req, res) {
    const data = requestPost(req)
    return await request(data, res)
}

async function destroy(req, res) {
    const method = 'delete'
    const data = requestPost(req, method)
    return await request(data, res)
}

module.exports = { get, post, destroy }
