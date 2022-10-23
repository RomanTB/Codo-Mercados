tecno = [["Apple", "AAPL"],
["Amazon", "AMZN"],
["Alibaba", "BABA"],
["Google", "GOOG"],
["Facebook", "FB"],
];

//

consumo = [["Ford", "FORD"],
["Ford", "FORD"],
["Coca Cola", "COKE"],
["Wal Mart", "WMT"],
["Procter & Gamble", "PG"],
["AT&T Inc", "T"],
["Apple", "AAPL"],
["Amazon", "AMZN"],
["Alibaba", "BABA"],
["Google", "GOOG"],
["Facebook", "FB"],
["HSBC", "HSBC"],
["City", "C"],
["Royal Bank of Canada", "RY"],
["Blackrock INC", "BLK"],
["Goldman Sachs", "GS"],
["Qatar", "QAT"],
["Brasil", "EWZS"],
["Turquía", "TUR"],
["UAE", "UAE"],
["Indonesia", "EIDO"],
["China", "MCHI"],
["Indonesia", "EIDO"],
["Hong Kong", "EWH"],
["Japón", "EWJ"],
["Malasia", "EWM"],
["España", "EWP"],
["Italia", "EWI"],
["Alemania", "EWG"],
["Holanda", "EWN"],
["Francia", "EWQ"]
];


financieros = [
    ["HSBC", "HSBC"],
    ["City", "C"],
    ["Royal Bank of Canada", "RY"],
    ["Blackrock INC", "BLK"],
    ["Goldman Sachs", "GS"]
];

paises = [
    ["Qatar", "QAT"],
    ["Brasil", "EWZS"],
    ["Turquía", "TUR"],
    ["UAE", "UAE"],
    ["Indonesia", "EIDO"]
];

asia = [["China", "MCHI"],
["Indonesia", "EIDO"],
["Hong Kong", "EWH"],
["Japon", "EWJ"],
["Malasia", "EWM"]
];

europa = [["España", "EWP"],
["Italia", "EWI"],
["Alemania", "EWG"],
["Holanda", "EWN"],
["Francia", "EWQ"]
]

function consumoToHTML(tickers) {
    var consumo_data = [];
    var sub_consumo = [];
    all_symbols = [];
    for (especies of tickers) {

        all_symbols += `${especies[1]},`
    };
    console.log(all_symbols);
    const params = {
        access_key: 'ebb9202d7633bd7ac428d7bfb0177c3d',
        // symbols: (`${tickers[0]},${tickers[1]},${tickers[2]},${tickers[3]},${tickers[4]},${tickers[5]},${tickers[6]},${tickers[7]},${tickers[8]},${tickers[9]},${tickers[10]}`)
        symbols: `(${(all_symbols)})`
    };

    axios.get('http://api.marketstack.com/v1/eod/latest', { params })
        .then(function (response) {
            var consumo_info = response.data;
            console.log(consumo_info);

            i=-1;
            document.getElementById("DOLAR").innerHTML = /*HTML*/
                `<H3>Actividad General</H3>
                <table style="border-spacing: 1rem;">
                <tr>
                <td>${consumo_info.data[i+1].symbol}</td>
                <td>${consumo_info.data[i+1].close}</td>
                </tr>
                <tr>
                <td>${consumo_info.data[i+2].symbol}</td>
                <td>${consumo_info.data[i+2].close}</td>
                </tr>
                <tr>
                <td>${consumo_info.data[i+3].symbol}</td>
                <td>${consumo_info.data[i+3].close}</td>
                </tr>
                <tr>
                <td>${consumo_info.data[i+4].symbol}</td>
                <td>${consumo_info.data[i+4].close}</td>
                </tr>
                <tr>
                <td>${consumo_info.data[i+5].symbol}</td>
                <td>${consumo_info.data[i+5].close}</td>
                </tr>
                </table>
                    `;
                    i+=5;
            document.getElementById("BONOS CER").innerHTML = /*HTML*/
                `<H3>Tecnologicas</H3>
                <table style="border-spacing: 1rem;">
                <tr>
                <td>${tickers[i+2][0]}</td>
                <td>${consumo_info.data[i+1].close}</td>
                </tr>
                <tr>
                <td>${tickers[i+3][0]}</td>
                <td>${consumo_info.data[i+2].close}</td>
                </tr>
                <tr>
                <td>${tickers[i+4][0]}</td>
                <td>${consumo_info.data[i+3].close}</td>
                </tr>
                <tr>
                <td>${tickers[i+5][0]}</td>
                <td>${consumo_info.data[i+4].close}</td>
                </tr>
                <tr>
                <td>${tickers[i+6][0]}</td>
                <td>${consumo_info.data[i+5].close}</td>
                </tr>
                </table>
                        `;
                        i+=5;
                        document.getElementById("financieros").innerHTML = /*HTML*/
                        `<H3>Sector Financiero</H3>
                        <table style="border-spacing: 1rem;">
                        <tr>
                        <td>${tickers[i+2][0]}</td>
                        <td>${consumo_info.data[i+1].close}</td>
                        </tr>
                        <tr>
                        <td>${tickers[i+3][0]}</td>
                        <td>${consumo_info.data[i+2].close}</td>
                        </tr>
                        <tr>
                        <td>${tickers[i+4][0]}</td>
                        <td>${consumo_info.data[i+3].close}</td>
                        </tr>
                        <tr>
                        <td>${tickers[i+5][0]}</td>
                        <td>${consumo_info.data[i+4].close}</td>
                        </tr>
                        <tr>
                        <td>${tickers[i+6][0]}</td>
                        <td>${consumo_info.data[i+5].close}</td>
                        </tr>
                        </table>
                                `;
                                i+=5;
                                document.getElementById("paises").innerHTML = /*HTML*/
                                `<H3>Emergentes</H3>
                                <table style="border-spacing: 1rem;">
                                <tr>
                                <td>${tickers[i+2][0]}</td>
                                <td>${consumo_info.data[i+1].close}</td>
                                </tr>
                                <tr>
                                <td>${tickers[i+3][0]}</td>
                                <td>${consumo_info.data[i+2].close}</td>
                                </tr>
                                <tr>
                                <td>${tickers[i+4][0]}</td>
                                <td>${consumo_info.data[i+3].close}</td>
                                </tr>
                                <tr>
                                <td>${tickers[i+5][0]}</td>
                                <td>${consumo_info.data[i+4].close}</td>
                                </tr>
                                <tr>
                                <td>${tickers[i+6][0]}</td>
                                <td>${consumo_info.data[i+5].close}</td>
                                </tr>
                                </table>
                                        `;
                                        i+=5;
                                        document.getElementById("asia").innerHTML = /*HTML*/
                                        `<H3>Asia</H3>
                                        <table style="border-spacing: 1rem;">
                                        <tr>
                                        <td>${tickers[i+2][0]}</td>
                                        <td>${consumo_info.data[i+1].close}</td>
                                        </tr>
                                        <tr>
                                        <td>${tickers[i+3][0]}</td>
                                        <td>${consumo_info.data[i+2].close}</td>
                                        </tr>
                                        <tr>
                                        <td>${tickers[i+4][0]}</td>
                                        <td>${consumo_info.data[i+3].close}</td>
                                        </tr>
                                        <tr>
                                        <td>${tickers[i+5][0]}</td>
                                        <td>${consumo_info.data[i+4].close}</td>
                                        </tr>
                                        <tr>
                                        <td>${tickers[i+6][0]}</td>
                                        <td>${consumo_info.data[i+5].close}</td>
                                        </tr>
                                        </table>
                                                `;
                                                i+=5;
                                                document.getElementById("europa").innerHTML = /*HTML*/
                                                `<H3>Europa</H3>
                                                <table style="border-spacing: 1rem;">
                                                <tr>
                                                <td>${tickers[i+2][0]}</td>
                                                <td>${consumo_info.data[i+1].close}</td>
                                                </tr>
                                                <tr>
                                                <td>${tickers[i+3][0]}</td>
                                                <td>${consumo_info.data[i+2].close}</td>
                                                </tr>
                                                <tr>
                                                <td>${tickers[i+4][0]}</td>
                                                <td>${consumo_info.data[i+3].close}</td>
                                                </tr>
                                                <tr>
                                                <td>${tickers[i+5][0]}</td>
                                                <td>${consumo_info.data[i+4].close}</td>
                                                </tr>
                                                <tr>
                                                <td>${tickers[i+6][0]}</td>
                                                <td>${consumo_info.data[i+5].close}</td>
                                                </tr>
                                                </table>
                                                        `;

        })
        // .catch(function (error) {
        //     // función para capturar el error
        //     console.log(error);
        // })
        .then(function (consumo_info) {
            // función que siempre se ejecuta
            // console.log(consumo_info[0][0]);
            // console.log(consumo_info[0][1]);
        });


};

setTimeout(consumoToHTML(consumo), 0);