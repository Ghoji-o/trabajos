let autos = require("./autos");
const concesionaria = {
    nombre : '',
    autos: autos,
    buscarAuto : function (patent){
        let found = null
        autos.forEach(function (valor){
            if (valor.patente == patent){
                found = valor;
            }
        })
        return found;
    },
    venderAuto: function (paten){
        return this.buscarAuto(paten).vendido = true;
    },
    autosParaLaVenta: function(){
        return autos = autos.filter(function(valor){
            return !valor.vendido;
        })
    },
    autosNuevos : function (){
        let auto = this.autosParaLaVenta();
        let km0 = auto.filter (function (valor){
            if (valor.km <= 100){
                return valor;
            }
        })
        return km0;
    },
    listaDeVentas : function (){
        var lista = [0];
        for (let i = 0; i < autos.length; i++){
            if (autos[i].vendido == true){
                lista.push (autos[i].precio);
            }
        }return lista;
    },
    totalDeVentas : function (){
        let vendidos = this.listaDeVentas();
        let suma = vendidos.reduce(function (acum,num){
         return acum + num;
        });
        return suma;
    },
    puedeComprar : function (auto, persona){
        let puede = false
        let cosTotal = persona.capacidadDePagoTotal - auto.precio;
        let capacidadEnCuotas = persona.capacidadDePagoEnCuotas - (auto.precio/auto.cuotas)
        if (cosTotal >= 0 && capacidadEnCuotas >= 0){
            puede = true;
        } 
        return puede;
    },
    autosQuePuedeComprar : function (persona){
        let autosDisponibles = this.autosParaLaVenta();
        let autosDeCompra = [];
        autosDisponibles.forEach(function(num){
            let verificar = concesionaria.puedeComprar(num, persona)
            if (verificar == true){
                autosDeCompra.push (num)
            }
        })
        return autosDeCompra ;
    }
}
