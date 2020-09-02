const errFnc = (error, res) => {
    console.log(error);
    res.status(500).json({ error });
};

module.exports = {
    errFnc
};
