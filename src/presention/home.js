function index(req, res) {
    const links = {
        listPlaylist: "https://developer.spotify.com/console/get-playlists/",
        createPlaylist: "https://developer.spotify.com/console/post-playlists/",
        listTracksPlaylist: "https://developer.spotify.com/console/get-playlist-tracks/",
        addItemPlaylist: "https://developer.spotify.com/console/post-playlist-tracks/",
        removeItemPlaylist: "https://developer.spotify.com/console/delete-playlist-tracks/",
        recommendations: "https://developer.spotify.com/console/get-recommendations/"
    }

    res.send(JSON.stringify(links));
}

module.exports = { index }
