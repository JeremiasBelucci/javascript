
 
 function delivery () {
      let platos = parseInt(prompt ("¿Cuantos platos de ramen desea?"))
      if (isNaN(platos)){
          alert("Por favor elija un numero valido")
          delivery()
      } else{
          alert("Usted ordenó " + platos + " platos de ramen");
          let tipoDeRamen = (prompt ("¿Prefiere su ramen a base de fideos o de arroz?").toLowerCase())
          switch(tipoDeRamen){
              case "fideos":
                  let direccion = prompt ("¿A que direccion enviamos el pedido?")
                  alert ("Su orden de " + platos + " de ramen de " + tipoDeRamen + " fue recibida con exito, sera preparada en breves y enviada a " + direccion)
                  break;
              case "arroz":
                  direccion = prompt ("¿A que direccion enviamos el pedido?")
                  alert ("Su orden de " + platos + " de ramen de " + tipoDeRamen + " fue recibida con exito y sera preparada y enviada a " + direccionn)
                  break;
          }
      }

  }

  delivery() 
