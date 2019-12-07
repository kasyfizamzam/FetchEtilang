var request = require('request');
var readline = require('readline-sync');

var headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'en-US,en;q=0.5',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'http://www.etilang.info',
    'Connection': 'keep-alive',
    'Referer': 'http://www.etilang.info/',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache'
};

var blanko = readline.question("Isikan Nomor Blanko: ");
var dataString = 'blangko='+blanko;

var options = {
    url: 'http://www.etilang.info/ws_etilang/inquiry_etilang.php',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(JSON.stringify(body));
    }
}

request(options, callback);
