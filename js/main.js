
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



//--------------------------Array de Objetos-------------------------------------------------
const productos = [
    { id: 1, nombre: "Disco solido HP S700", marca: "HP", precio: 8499, tipoHardware: "Disco Solido", img: "https://mla-s1-p.mlstatic.com/946930-MLA40379214858_012020-F.jpg", descripcion: "Las unidades de estado sólido (SSD), disponibles en muchos equipos HP, guardan información en una memoria de estado sólido. La SSD difiere de un disco duro tradicional en que no tiene discos, actuadores ni otras piezas móviles (como cabezales de escritura y lectura). Dado que las SSD no tienen partes móviles, son más rápidas para leer y escribir datos, más silenciosas y menos vulnerables a los impactos físicos." },
    { id: 2, nombre: "Mother B450 Aorus", marca: "Gigabyte", precio: 16299, tipoHardware: "Mother", img: "https://mallweb.com.ar/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/g/i/gimage_27817.jpg", descripcion: "Solución VRM digital híbrida 4 + 2 con MOSFET de bajo RDS (activado) Las placas base de la serie 400 de GIGABYTE utilizan un diseño de MOSFET PWM digital híbrido 4 + 2 + RDS inferior (activado) para admitir las últimas CPU Intel® Core ™ al ofrecer una precisión increíble en la entrega de energía a los componentes de la placa base que consumen más energía y son sensibles a la energía. que ofrece un rendimiento mejorado del sistema y la máxima escalabilidad de hardware." },
    { id: 3, nombre: "Gabiente Gamer", marca: "Essenses", precio: 6449, tipoHardware: "Gabinete", img: "https://imagenes.compufull.com/thumb/im_0_0_0_700x700_11548_1/GABINETE_GAMER_IC3_S175_RED_VIDRIO_LATERAL_6_COOLERS_LED20210218101958.jpg", descripcion:"GABINETE COOLERMASTER COSMOS C700P BLACK EDITION Expandiendo el COSMOS, Diseño altamente versátil, Amplio sistema de cubierta de cable, Rica conectividad" },
    { id: 4, nombre: "Fuente 700w", marca: "Evga", precio: 24999, tipoHardware: "Fuente", img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/fuente-700w-evga-br-80-bronze-0.jpg", descripcion: "EVGA 700 BR, 80+ BRONZE 700W, 3 Year Warranty, Power Supply 100-BR-0700-K1" },
    { id: 5, nombre: "RTX 3060", marca: "Nvidia", precio: 175900, tipoHardware: "Placa de Video", img: "https://http2.mlstatic.com/D_NQ_NP_768667-MLA45294436185_032021-O.webp", descripcion: "La RTX 3060 te permiten disfrutar de los juegos más recientes con la potencia de Ampere, la segunda generación de la arquitectura RTX de NVIDIA. Logra un rendimiento increíble con los Núcleos Ray Tracing y los Núcleos Tensor mejorados, los nuevos multiprocesadores de streaming y la memoria G6 de alta velocidad." },
    { id: 6, nombre: "Ryzen 5 2600x", marca: "AMD", precio: 32000, tipoHardware: "Procesador", img: "https://images-na.ssl-images-amazon.com/images/I/41OZu6uDTCL._SX500_SY500_CR,0,0,500,500_.jpg", descripcion: "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles." }
];


const carrito = [];


const favoritos = [];

//--------------------------Metodo Find-----------------------------------------------------

/*$( "#Procesadores" ).click(function() {
  //const buscarProcesador = productos.find(tipoHardware => tipoHardware.tipoHardware === "Procesador");
  for (productos === tipoHardware ==="Procesador"){
    $("#procesadores").append(`
            <div class="col-lg-4 mb-4">
            ${productos.id}
                <div class="card">
                <img src=${productos.img} alt="" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${productos.nombre}</h5>
                    <p class="card-text">${productos.descripcion}</p>
                    <p class="card-text">$${productos.precio}</p>
                    <button id="agregarCarrito" href="" class="btn btn-primary">Agregar al Carrito</button>
                    <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                </div>
            </div>
        </div>`);
}
});*/

/*const buscarProcesador = productos.find(tipoHardware => tipoHardware.tipoHardware === "Procesador");
console.dir(buscarProcesador);*/


//--------------------------DOM Cargar productos JQuery----------------------------------------
for (const producto of productos){
  /*$("#productos").append(`
          <div class="col-lg-4 mb-4">
              <div class="card text-white bg-dark mb-3 h-100">    
                      <div class="p-3 mb-5 bg-body rounded">
                          <img id="imagen-producto" src=${producto.img} alt="" class="card-img-top">
                          <div class="card-body">
                              <h5 class="card-title" id="nombre-producto">${producto.nombre}</h5>
                                  <div class="card card-body">
                                    ${producto.descripcion}
                                  </div>
                              <p class="card-text pt-2" id="precio-producto">$${producto.precio}</p>
                              
                              <button onclick="agregarAlCarrito(${productos.indexOf(producto)})" id="agregarCarrito"  href="" class="btn btn-primary">Agregar al Carrito</button>
                              <button href="" class="btn btn-outline-danger btn-sm" onclick="agregarAFavoritos(${productos.indexOf(producto)})"><i class="far fa-heart"></i></button>
                          </div>
                      </div>
              </div>
          </div>`);*/

$("#productos").append(`
        <div class="col-lg-4 mb-4">        
          <div class="card text-white bg-dark mb-3 h-100">
              <img id="imagen-producto" src=${producto.img} alt="" class="card-img-top">    
              <div class="card-header fs-4">${producto.nombre}</div>
                  <div class="card-body">
                    <p class="card-title">${producto.descripcion}</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                      <div class="p-3">
                        <button onclick="agregarAlCarrito(${productos.indexOf(producto)})" id="agregarCarrito"  href="" class="btn btn-primary">Agregar al Carrito</button>
                        <button href="" class="btn btn-outline-danger btn-sm" onclick="agregarAFavoritos(${productos.indexOf(producto)})"><i class="far fa-heart"></i></button>
                      </div>
              
          </div>
        </div>`)

      
};


//-----------------------------------------------Funciones de Favoritos y Carrito---------------------------------------------

   
function agregarAlCarrito(a){
  carrito.push(productos[a])
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



//----------------------------------Animaciones---------------------------------------

$("h3").fadeIn(1000);
$("p").fadeIn(1000);




//----------------------------------Visualizacion Carrito---------------------------------------------
/*for (const compra of carrito)*/
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
              <p class="card-text">${element.descripcion}</p>
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
          <h5 class="card-title">Nada por aqui</h5>
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
  <div class="alert alert-success fixed-top alert-dismissible fade show" aria-hidden="true" id="alert-succes" role="alert">
    El articulo fue agregado con exito a tu carrito!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</section>`)
}

function AlertaSuccesFavoritos (){
  $("#alert-succes").append(`<section>
  <div class="alert alert-success fixed-top alert-dismissible fade show" aria-hidden="true" id="alert-succes" role="alert">
    El articulo fue agregado con exito a tu Favoritos!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</section>`)
}