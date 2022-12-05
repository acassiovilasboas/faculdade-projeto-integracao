const express = require('express');
const router = express.Router();

const playlist = require('../controllers/playlist/PlaylistController')

router.get('/playlists', playlist.getPlaylists)
router.get('/playlist', playlist.getTracksOfPlaylist)
router.get('/recomendation', playlist.recomendationTracks)
router.post('/playlist', playlist.createPlaylist)
router.post('/add-track', playlist.addTrack)
router.delete('/remove-track', playlist.removeTrack)

module.exports = router;