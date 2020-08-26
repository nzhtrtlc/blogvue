const errFnc = (error, res) => res.status(500).json({ error });

module.exports = {
    errFnc
};
