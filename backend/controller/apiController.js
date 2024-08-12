const handleApiRequest = require("../utils/handleApiRequest");

exports.getHome = (req, res) => {
  handleApiRequest(req, res, `/modules?lang=${req.params.lang}`);
};

exports.getAlbum = (req, res) => {
  handleApiRequest(req, res, `/album?id=${req.params.id}`);
};

exports.getPlaylist = (req, res) => {
  handleApiRequest(req, res, `/playlist?id=${req.params.id}`);
};

exports.getArtist = (req, res) => {
  handleApiRequest(req, res, `/artist?id=${req.params.id}`);
};

exports.getSong = (req, res) => {
  handleApiRequest(req, res, `/song?id=${req.params.id}`);
};

exports.searchTop = (req, res) => {
  handleApiRequest(req, res, `/search/top`);
};

exports.searchByName = (req, res) => {
  handleApiRequest(req, res, `/search?q=${req.params.name}&n=100&page=1`);
};

exports.searchAlbums = (req, res) => {
  handleApiRequest(req, res, `/search/albums?q=${req.params.q}&n=100&page=1`);
};

exports.searchPlaylists = (req, res) => {
  handleApiRequest(
    req,
    res,
    `/search/playlists?q=${req.params.q}&n=100&page=1`
  );
};

exports.searchSongs = (req, res) => {
  handleApiRequest(req, res, `/search/songs?q=${req.params.q}&n=100&page=1`);
};

exports.searchArtists = (req, res) => {
  handleApiRequest(req, res, `/search/artists?q=${req.params.q}&n=100&page=1`);
};
