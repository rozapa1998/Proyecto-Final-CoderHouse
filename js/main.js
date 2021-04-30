
//--------------------------Clase Constructora y un metodo------------------------------------
class Producto {
    constructor(nombre, marca, precio, tipoHardware,img, descripcion) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.tipoHardware = tipoHardware;
        this.img = img;
        this.descripcion = descripcion;
    }

    convertirAdolares() {
        this.precio = producto1.precio / 150
        console.log(producto1.precio)
    }
}


//--------------------------MP-------------------------------------------------



//--------------------------Array de Objetos-------------------------------------------------
const productos = [
    { id: 1, nombre: "Disco solido HP S700", marca: "HP", precio: 8499, tipoHardware: "Memoria", img: "https://mla-s1-p.mlstatic.com/946930-MLA40379214858_012020-F.jpg", descripcion: "Las unidades de estado sólido (SSD), disponibles en muchos equipos HP, guardan información en una memoria de estado sólido. La SSD difiere de un disco duro tradicional en que no tiene discos, actuadores ni otras piezas móviles (como cabezales de escritura y lectura). Dado que las SSD no tienen partes móviles, son más rápidas para leer y escribir datos, más silenciosas y menos vulnerables a los impactos físicos." },
    { id: 2, nombre: "Mother B450 Aorus", marca: "Gigabyte", precio: 16299, tipoHardware: "Mother", img: "https://mallweb.com.ar/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/g/i/gimage_27817.jpg", descripcion: "Solución VRM digital híbrida 4 + 2 con MOSFET de bajo RDS (activado) Las placas base de la serie 400 de GIGABYTE utilizan un diseño de MOSFET PWM digital híbrido 4 + 2 + RDS inferior (activado) para admitir las últimas CPU Intel® Core ™ al ofrecer una precisión increíble en la entrega de energía a los componentes de la placa base que consumen más energía y son sensibles a la energía. que ofrece un rendimiento mejorado del sistema y la máxima escalabilidad de hardware." },
    { id: 3, nombre: "Gabiente Gamer", marca: "Essenses", precio: 6449, tipoHardware: "Gabinete", img: "https://imagenes.compufull.com/thumb/im_0_0_0_700x700_11548_1/GABINETE_GAMER_IC3_S175_RED_VIDRIO_LATERAL_6_COOLERS_LED20210218101958.jpg", descripcion:"GABINETE COOLERMASTER COSMOS C700P BLACK EDITION Expandiendo el COSMOS, Diseño altamente versátil, Amplio sistema de cubierta de cable, Rica conectividad" },
    { id: 4, nombre: "Fuente 700w", marca: "Evga", precio: 24999, tipoHardware: "Procesador", img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/fuente-700w-evga-br-80-bronze-0.jpg", descripcion: "EVGA 700 BR, 80+ BRONZE 700W, 3 Year Warranty, Power Supply 100-BR-0700-K1" },
    { id: 5, nombre: "RTX 3060", marca: "Nvidia", precio: 175900, tipoHardware: "Placa de Video", img: "https://http2.mlstatic.com/D_NQ_NP_768667-MLA45294436185_032021-O.webp", descripcion: "La RTX 3060 te permiten disfrutar de los juegos más recientes con la potencia de Ampere, la segunda generación de la arquitectura RTX de NVIDIA. Logra un rendimiento increíble con los Núcleos Ray Tracing y los Núcleos Tensor mejorados, los nuevos multiprocesadores de streaming y la memoria G6 de alta velocidad." },
    { id: 6, nombre: "Ryzen 5 2600x", marca: "AMD", precio: 32000, tipoHardware: "Procesador", img: "https://images-na.ssl-images-amazon.com/images/I/41OZu6uDTCL._SX500_SY500_CR,0,0,500,500_.jpg", descripcion: "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles." }
];


const carrito = [];


const favoritos = [];

const Total = [];



//-----------------------------------------------Funciones de Favoritos y Carrito---------------------------------------------

   
function agregarAlCarrito(a){
  carrito.push(productos[a]);
  Total.push(productos[a].precio);
  agregarCarrito();
  AlertaSucces();
  carrito.pop();
}


function agregarAFavoritos(c){
  BorrarMensaje();
  favoritos.push(productos[c])
  agregarFavoritos();
  AlertaSuccesFavoritos ();
  favoritos.pop();
}



//-----------------------------------------Calcular Total----------------------------------------
function TotalCompra(){
  const reductor = (x, y) => x + y;
  x = Total.reduce(reductor);
  $("#TotalCompra").append(`
  <p class="card-header fs-4" id = "TotalParcial">Total: $${x}</p>
  `)
  
}

$("#CalcularTotalBtn").append(`
<button onclick="TotalCompra()" id="TotalBtn"  href="" class="btn btn-primary fs-5">Calcular Total</button>
`)


//--------------------------DOM Cargar productos JQuery----------------------------------------
for (const producto of productos){
$("#productos").append(`
        <div class="col-lg-4 mb-4">        
          <div class="card zoom2 text-white bg-dark mb-3 h-100">
              <img id="imagen-producto" src=${producto.img} alt="" class="card-img-top">    
              <div class="card-header fs-4">${producto.nombre}</div>
                  <div class="card-body">
                    <p class="card-title">${producto.descripcion}</p>
                    
                  </div>
                      <div class="p-3">
                      <p class="card-header fs-4">$${producto.precio}</p>
                        <button onclick="agregarAlCarrito(${productos.indexOf(producto)})" id="agregarCarrito"  href="" class="btn btn-primary">Agregar al Carrito</button>
                        <button href="" class="btn btn-outline-danger btn-sm" onclick="agregarAFavoritos(${productos.indexOf(producto)})"><i class="far fa-heart"></i></button>
                      </div>
              
          </div>
        </div>`)

      
};
//----------------------------------Animaciones---------------------------------------
$("h3").fadeIn(1800);
$("p").fadeIn(2000);




//----------------------------------Visualizacion Carrito---------------------------------------------
function agregarCarrito(){
      for (let c = 0; c < carrito.length; c++) {
        const element = carrito[c];
        const segundos = new Date()
        $("#Modal").append(`
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${element.img} alt="..." style="max-width: 150px;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element.nombre}</h5>
              
              
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Descripcion
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p class="card-text">${element.descripcion}</p>
                  </div>
                </div>
              </div>
              
              <p>$${element.precio}</p>
              <p class="card-text">Agregado hace ${segundos.getSeconds(element)} seg <small class="text-muted"></small></p>
            </div>
          </div>
        </div>
        </div>`);
      }
  
  };
//-----------------------------------------------FAVORITOS---------------------------------------------
function agregarFavoritos(){
  for (let b = 0; b < favoritos.length; b++){
    const element2 = favoritos[b];
  $("#favoritos").append(`
            <div style="width: 18rem;">
            <div class="col-12 p-2">
            <div class="card">
            <img src="${element2.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element2.nombre}</h5>
              <p class="card-text">$${element2.precio}</p>
              <button onclick="agregarAlCarrito(${favoritos.indexOf(element2)})"  href="" class="btn btn-primary">Agregar al Carrito</button>
            </div>
            </div>
          </div>`)
  }
}

//-----------------------------Control de flujo de Favoritos---------------------------------------------

  if (favoritos.indexOf(productos) === -1) {
    $("#mensaje").append(`
    <div style="width: 18rem;">
    <div class="col-12 p-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title fs-4">Nada por aqui</h5>
          <p class="card-text">Para agregar productos toca el corazon dentro de su tarjeta! <i class="fas fa-heart"></i></p>
          <p></p>
        </div>
      </div>
    </div>
    </div>
    `)

  }

  function BorrarMensaje (){
    $("#mensaje").remove();
}
//-----------------------------------------------Alertas-------------------------------------------------



  function AlertaSucces (){
    $("#alert-succes").append(`<section>
    <div class="alert alert-success fixed-bottom alert-dismissible fade show" aria-hidden="true" id="alert-succes1" role="alert">
      El articulo fue agregado con exito a tu carrito!
      <button type="button"  class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </section>`)
  
  
  }
  
  function AlertaSuccesFavoritos (){
    $("#alert-succes").append(`<section>
    <div class="alert alert-success fixed-bottom alert-dismissible fade show" aria-hidden="true" id="alert-succes" role="alert">
      El articulo fue agregado con exito a tu Favoritos!
      <button type="button"  class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </section>`)
  }




//----------------------------------------Mail de confirmacion------------------------------------------------

function Wapp() {
  if (sessionStorage.desktop)
      return false;
  else if (localStorage.mobile)
      return true;
  var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
  for (var i in mobile)
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
  return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+5491168165044';

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
  buttonSubmit.disabled = true
  setTimeout(() => {
      let nombre = document.querySelector('#nombre').value
      let pedido = document.getElementById("Modal").innerHTML
      let apellidos = document.querySelector('#apellidos').value
      let email = document.querySelector('#email').value
      let mensaje = 'send?phone=' + telefono + '&text=*_Resumen de Pedido_*%0A*Nombre:*%0A' + nombre + " " + apellidos + '%0A*Correo electronico*%0A' + email + '' + '%0A*Pedido: *%0A' + pedido + ''
      if(Wapp()) {
          window.open(urlMobile + mensaje, '_blank')
      }else{
          window.open(urlDesktop + mensaje, '_blank')
      }
      buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
      buttonSubmit.disabled = false
  }, 3000);
});
