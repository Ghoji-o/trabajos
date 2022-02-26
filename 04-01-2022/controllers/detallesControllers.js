const menu = [
    {
        titulo: 'Café',
        detalles: 'Un rico café',
        precio: 300,
        id: 1
    },
    {
        titulo: 'Chocolate',
        detalles: 'Un rico Chocolate',
        precio: 780,
        id: 2
    },
    {
        titulo: 'Torta',
        detalles: 'Una rica torta',
        precio: 780,
        id: 3
    },
    
]

//Esto nos va a mostrar el plato actual según el id de la base de datos

const detallesPorId = (req, res) => {
    const id = req.params.id

    const seleccionarPlato = (id) =>{
        const plato = menu.find(platoActual => platoActual.id == id);
        return plato;
    }

    res.render('detalleMenu', {plato: seleccionarPlato(id)});
};

//Nos retorna el elemento que este por debajo del precio que lo ponemos como 'tope', pero solo devuelve el primer elemento que coincida con esos parámetros

const detallesMaxPrecio = (req, res) => {
    const tope = req.params.tope;

    const seleccionarPlato = (tope) => {
        //const plato = menu.find(platoActual => platoActual.precio < req.params.tope );

        /*const platosFiltrados = menu.map(platoActual => {
            if (platoActual.precio < tope){
                return platoActual
            }
        })*/

        let platosFiltrados = [ ];

        menu.forEach(platoActual => {
            if (platoActual.precio < tope) {
                platosFiltrados.push(platoActual)
            }
        })

        return platosFiltrados;
    }
     res.render('detalleMenu', { platos: seleccionarPlato(tope)});
}
    
    



module.exports = {
    detallesPorId: detallesPorId,
    detallesMaxPrecio: detallesMaxPrecio,
}