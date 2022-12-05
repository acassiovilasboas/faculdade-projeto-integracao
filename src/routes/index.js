const express = require('express');
const router = express.Router();

const home = require('../presention/home')
const playlist = require('../controllers/PlaylistController')
const trackController = require('../controllers/TrackController')

router.get('/', home.index)

// MARK - PLAYLISTS
router.get('/playlists', playlist.getPlaylists)
router.post('/playlist', playlist.createPlaylist)

// MARK - TRACKS
router.get('/tracks', trackController.listTrack)
router.get('/recomendation', trackController.recomendationTracks)
router.post('/add-track', trackController.addTrack)
router.delete('/remove-track', trackController.removeTrack)

module.exports = router;
