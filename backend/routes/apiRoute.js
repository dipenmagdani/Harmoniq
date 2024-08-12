const express = require("express");
const router = express.Router();
const apiController = require("../controller/apiController");

// Define your routes here
router.get("/home/:lang", apiController.getHome);
router.get("/album/:id", apiController.getAlbum);
router.get("/playlist/:id", apiController.getPlaylist);
router.get("/artist/:id", apiController.getArtist);
router.get("/song/:id", apiController.getSong);
router.get("/search", apiController.searchTop);
router.get("/search/:name", apiController.searchByName);
router.get("/search/album/:q", apiController.searchAlbums);
router.get("/search/playlist/:q", apiController.searchPlaylists);
router.get("/search/song/:q", apiController.searchSongs);
router.get("/search/artist/:q", apiController.searchArtists);

module.exports = router;
