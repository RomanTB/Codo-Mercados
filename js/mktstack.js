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
          `<H3>Tecnológicas</H3>
                    <table style="border-spacing: 1rem;">
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
