const controller = (req, res) => {
    return res.status(200).json({
        mensaje: "Data controller"
    });
};

const course = (req, res) => {
    return res.status(200).json([{
        curso: "Master en React",
        autor: "Victor Robles",
        url: "victorroblesweb.es"
    },
    {
        curso: "Master en css",
        autor: "Victor Robles",
        url: "victorroblesweb.es"
    }
]);
};

const create = (req, res) => {
    return res.status(200).json({
        mensaje: "Create route"
    });
};


module.exports = {
    controller,
    course,
    create
};