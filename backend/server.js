const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const { API_URL } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

const handleApiRequest = async (req, res, endpoint) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error in handleApiRequest:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

app.get("/api", (req, res) => {
  res.json("Hello");
});

app.get("/api/home", (req, res) => handleApiRequest(req, res, "/modules"));
app.get("/api/album/:id", (req, res) =>
  handleApiRequest(req, res, `/album?id=${req.params.id}`)
);
app.get("/api/playlist/:id", (req, res) =>
  handleApiRequest(req, res, `/playlist?id=${req.params.id}`)
);
app.get("/api/artist/:id", (req, res) =>
  handleApiRequest(req, res, `/artist?id=${req.params.id}`)
);
app.get("/api/song/:id", (req, res) =>
  handleApiRequest(req, res, `/song?id=${req.params.id}`)
);
app.get("/api/search", (req, res) => handleApiRequest(req, res, `/search/top`));
app.get("/api/search/:name", (req, res) =>
  handleApiRequest(req, res, `/search?q=${req.params.name}&n=100&page=1`)
);
app.get("/api/search/album/:q", (req, res) =>
  handleApiRequest(req, res, `/search/albums?q=${req.params.q}&n=100&page=1`)
);
app.get("/api/search/playlist/:q", (req, res) =>
  handleApiRequest(req, res, `/search/playlists?q=${req.params.q}&n=100&page=1`)
);
app.get("/api/search/song/:q", (req, res) =>
  handleApiRequest(req, res, `/search/songs?q=${req.params.q}&n=100&page=1`)
);
app.get("/api/search/artist/:q", (req, res) =>
  handleApiRequest(req, res, `/search/artists?q=${req.params.q}&n=100&page=1`)
);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
