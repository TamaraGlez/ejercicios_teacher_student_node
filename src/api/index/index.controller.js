const indexGet = (req, res, next) => {
    return res.status(200).json("API ROOT");
};

const statusGet = (req, res, next) => {
    return res.status(200).json("STATUS OK - Server Working");
};

module.exports = {
    indexGet,
    statusGet,
}