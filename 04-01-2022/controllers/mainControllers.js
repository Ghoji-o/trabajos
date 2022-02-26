const devolverIndex =  (req, res) => {
    const menu = [
        {
            titulo: 'Café',
            detalles: 'Un rico café'
        },
        {
            titulo: 'Chocolate',
            detalles: 'Un rico Chocolate'
        }
    ]

    res.render('index', {menu: menu}); //El res.render tiene dos parámetros el segundo es un objeto que lo podemos usar en htmlt
};

module.exports = {
    devolverIndex: devolverIndex
}