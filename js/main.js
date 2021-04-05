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

//-----------------------------------------------Carrito---------------------------------------------
const Carrito = []

function agregarCarrito(a){
    Carrito.push(a);
}


//--------------------------Array de Objetos-------------------------------------------------

const productos = [
{ id: 1, nombre: "Ryzen 5 2600x", marca: "AMD", precio: 32000, tipoHardware: "Procesador", img: "https://images-na.ssl-images-amazon.com/images/I/41OZu6uDTCL._SX500_SY500_CR,0,0,500,500_.jpg", descripcion: "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles." },
{ id: 2, nombre: "RTX 3060", marca: "Nvidia", precio: 175900, tipoHardware: "Placa de Video", img: "https://http2.mlstatic.com/D_NQ_NP_768667-MLA45294436185_032021-O.webp", descripcion: "La RTX 3060 te permiten disfrutar de los juegos más recientes con la potencia de Ampere, la segunda generación de la arquitectura RTX de NVIDIA. Logra un rendimiento increíble con los Núcleos Ray Tracing y los Núcleos Tensor mejorados, los nuevos multiprocesadores de streaming y la memoria G6 de alta velocidad." },
{ id: 3, nombre: "Fuente 700w", marca: "Evga", precio: 24999, tipoHardware: "Fuente", img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/fuente-700w-evga-br-80-bronze-0.jpg", descripcion: "EVGA 700 BR, 80+ BRONZE 700W, 3 Year Warranty, Power Supply 100-BR-0700-K1" },
{ id: 4, nombre: "Gabiente Gamer", marca: "Essenses", precio: 6449, tipoHardware: "Gabinete", img: "https://imagenes.compufull.com/thumb/im_0_0_0_700x700_11548_1/GABINETE_GAMER_IC3_S175_RED_VIDRIO_LATERAL_6_COOLERS_LED20210218101958.jpg", descripcion:"GABINETE COOLERMASTER COSMOS C700P BLACK EDITION Expandiendo el COSMOS, Diseño altamente versátil, Amplio sistema de cubierta de cable, Rica conectividad" },
{ id: 5, nombre: "Mother B450 Aorus", marca: "Gigabyte", precio: 16299, tipoHardware: "Mother", img: "https://mallweb.com.ar/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/g/i/gimage_27817.jpg", descripcion: "Solución VRM digital híbrida 4 + 2 con MOSFET de bajo RDS (activado) Las placas base de la serie 400 de GIGABYTE utilizan un diseño de MOSFET PWM digital híbrido 4 + 2 + RDS inferior (activado) para admitir las últimas CPU Intel® Core ™ al ofrecer una precisión increíble en la entrega de energía a los componentes de la placa base que consumen más energía y son sensibles a la energía. que ofrece un rendimiento mejorado del sistema y la máxima escalabilidad de hardware." },
{ id: 6, nombre: "Disco solido HP S700", marca: "HP", precio: 8499, tipoHardware: "Disco Solido", img: "https://mla-s1-p.mlstatic.com/946930-MLA40379214858_012020-F.jpg", descripcion: "Las unidades de estado sólido (SSD), disponibles en muchos equipos HP, guardan información en una memoria de estado sólido. La SSD difiere de un disco duro tradicional en que no tiene discos, actuadores ni otras piezas móviles (como cabezales de escritura y lectura). Dado que las SSD no tienen partes móviles, son más rápidas para leer y escribir datos, más silenciosas y menos vulnerables a los impactos físicos." }];


//--------------------------Funcion Agregar Productos----------------------------------------
function Agregar() {
    do {
        productos.push(new Producto(prompt("Nombre de su producto"), prompt("Marca de su Producto"), Number(prompt("Precio")), prompt("Tipo de Hardware")));

        var pregunta1 = confirm("Desea segir agregando productos?")

    } while (pregunta1 == true);

}

//--------------------------Metodo Find-----------------------------------------------------
const buscarProcesador = productos.find(tipoHardware => tipoHardware.id === 3);
console.dir(buscarProcesador);


//--------------------------DOM-------------------------------------------------------------

let tarjetas = document.querySelector('#productos');

let busqueda = document.querySelector('#resultados')


tarjetas.innerHTML = `
<section id="mercaderia">
<div class="container">
    <div class="row">
        <div class="col-lg-4 mb-4">
            <div class="card">
            <img src=${productos[0].img} alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productos[0].nombre}</h5>
                <p class="card-text">${productos[0].descripcion}</p>
                <p class="card-text">$${productos[0].precio}</p>
                <button id="agregarCarrito" href="" class="btn btn-primary">Agregar al Carrito</button>
                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mb-4">
            <div class="card">
            <img src=${productos[1].img} alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productos[1].nombre}</h5>
                <p class="card-text">${productos[1].descripcion}</p>
                <p class="card-text">$${productos[1].precio}</p>
                <button id="agregarCarrito" href="" class="btn btn-primary">Agregar al Carrito</button>
                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mb-4">
            <div class="card">
            <img src=${productos[2].img} alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productos[2].nombre}</h5>
                <p class="card-text">${productos[2].descripcion}</p>
                <p class="card-text">$${productos[2].precio}</p>
                <button id="agregarCarrito" href="" class="btn btn-primary">Agregar al Carrito</button>
                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mb-4">
            <div class="card">
            <img src=${productos[3].img} alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productos[3].nombre}</h5>
                <p class="card-text">${productos[3].descripcion}</p>
                <p class="card-text">$${productos[3].precio}</p>
                <button id="agregarCarrito" href="" class="btn btn-primary">Agregar al Carrito</button>
                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mb-4">
            <div class="card">
            <img src=${productos[4].img} alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productos[4].nombre}</h5>
                <p class="card-text">${productos[4].descripcion}</p>
                <p class="card-text">$${productos[4].precio}</p>
                <button id="agregarCarrito" href="" class="btn btn-primary">Agregar al Carrito</button>
                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 mb-4">
            <div class="card">
            <img src=${productos[5].img} alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productos[5].nombre}</h5>
                <p class="card-text">${productos[5].descripcion}</p>
                <p class="card-text">$${productos[5].precio}</p>
                <button id="agregarCarrito" href="" class="btn btn-primary">Agregar al Carrito</button>
                <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
            </div>
        </div>
    </div>

 </div>
`


//-----------------------------------------------Eventos---------------------------------------------

let boton = document.getElementById("agregarCarrito")
      boton.onclick = () =>{agregarCarrito()}







//----------------------------------Visualizacion Carrito---------------------------------------------
console.dir(Carrito)

function AbrirCarrito(){
    
    var carritoCargado = document.querySelector('#navbarDarkDropdownMenuLinkCarrito');

    carritoCargado.innerHTML = `
    
    `

}





