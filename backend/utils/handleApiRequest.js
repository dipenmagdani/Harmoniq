const axios = require("axios");
const { API_URL } = process.env;

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

module.exports = handleApiRequest;
