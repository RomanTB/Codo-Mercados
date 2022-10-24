tecno = [
  ['Apple', 'AAPL'],
  ['Amazon', 'AMZN'],
  ['Alibaba', 'BABA'],
  ['Google', 'GOOG'],
  ['Facebook', 'FB'],
]

//

consumo = [
  ['Ford', 'FORD'],
  ['Coca Cola', 'COKE'],
  ['Wal Mart', 'WMT'],
  ['Procter & Gamble', 'PG'],
  ['AT&T Inc', 'T'],
]

financieros = [
  ['HSBC', 'HSBC'],
  ['City', 'C'],
  ['Royal Bank of Canada', 'RY'],
  ['Blackrock INC', 'BLK'],
  ['Goldman Sachs', 'GS'],
]

paises = [
  ['Qatar', 'QAT'],
  ['Brasil', 'EWZS'],
  ['Turquía', 'TUR'],
  ['UAE', 'UAE'],
  ['Indonesia', 'EIDO'],
]

asia = [
  ['China', 'MCHI'],
  ['Indonesia', 'EIDO'],
  ['Hong Kong', 'EWH'],
  ['Japon', 'EWJ'],
  ['Malasia', 'EWM'],
]

europa = [
  ['España', 'EWP'],
  ['Italia', 'EWI'],
  ['Alemania', 'EWG'],
  ['Holanda', 'EWN'],
  ['Francia', 'EWQ'],
]

function consumoToHTML(tickers) {
  var consumo_data = []
  var sub_consumo = []

  for (let especie of tickers) {
    const params = {
      access_key: 'ebb9202d7633bd7ac428d7bfb0177c3d',
      symbols: `${especie[1]}`,
    }

    axios
      .get('http://api.marketstack.com/v1/eod/latest', { params })
      .then(function (response) {
        var consumo_info = response.data
        var sub_consumo = consumo_info['data']
        consumo_data.push([
          `${sub_consumo[0].symbol}`,
          `${sub_consumo[0].close}`,
        ])

        document.getElementById('DOLAR').innerHTML =
          /*HTML*/
          `<h3>TECNOLOGICAS</h3>
                    <table style="border-spacing: 1.5rem;">
                    <tr>
                    <td>${consumo_data[0][0]}</td>
                    <td>${consumo_data[0][1]}</td>
                    </tr>
                    <tr>
                    <td>${consumo_data[1][0]}</td>
                    <td>${consumo_data[1][1]}</td>
                    </tr>
                    <tr>
                    <td>${consumo_data[2][0]}</td>
                    <td>${consumo_data[2][1]}</td>
                    </tr>
                    <tr>
                    <td>${consumo_data[3][0]}</td>
                    <td>${consumo_data[3][1]}</td>
                    </tr>
                    <tr>
                    <td>${consumo_data[4][0]}</td>
                    <td>${consumo_data[4][1]}</td>
                    </tr>
                    </table>
                    `
      })
      .catch(function (error) {
        // función para capturar el error
        console.log(error)
      })
      .then(function () {
        // función que siempre se ejecuta
      })
  }
}

setTimeout(consumoToHTML(tecno), 0)

// determina el numero de pixeles que se moveran las noticias para
// cada iteracion en milisegundos de "speedjump"
var scrollspeed = 1
// determina la velocidad en milisgundos
var speedjump = 30
// segundos antes de empezar el movimiento
var startdelay = 1
// posicion inicial superior en pixeles para cuando inicia
var topspace = -10
// altura del marco donde se mostraran las noticias
// Si se modifica la altura del contenedor de las noticas hay que
// modificar tambien este valor
var frameheight = 270

// variable temporal que variara su valor en función de si estan las
// noticias en movimiento o paradas
current = scrollspeed

/**
 * Inicio del scroll
 * Esta función es llamada en el body de la pagina.
 * Tiene que recibir el id del scroll
 */
function scrollStart() {
  dataobj = document.getElementById('scroll')
  // cogemos la altura maxima de la capa de las noticias
  alturaNoticias = dataobj.offsetHeight
  // posicionamos la capa del scroll en su posicion inicial
  dataobj.style.top = topspace + 'px'

  setTimeout('scrolling()', startdelay * 1000)
}

/**
 * Funcion que realiza el movimiento
 */
function scrolling() {
  // Restamos a la propiedad top de la capa el valor en pixeles
  // establecido en la variable "scrollspeed", para hacer el
  // movimiento hacia arriba.
  dataobj.style.top = parseInt(dataobj.style.top) - scrollspeed + 'px'
  // Si la capa ha sobrepasado la altura del area por donde se muestran
  // las noticias ("alturaNoticias")
  if (parseInt(dataobj.style.top) < alturaNoticias * -1) {
    // Posicionamos la capa en la parte inferior del recuadro, para
    // que simule que vienen las noticias de la parte inferior
    dataobj.style.top = frameheight + 'px'
    setTimeout('scrolling()', 0)
  } else {
    setTimeout('scrolling()', speedjump)
  }
}
