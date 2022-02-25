const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAndCountAll()
            .then(genres => {
                res.json({
                    meta: {
                        status: 200,
                        total: genres.count,
                        url: req.originalUrl
                    },
                    data: genres.rows
                })
            }).catch(err => res.status(500).json(err))
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;