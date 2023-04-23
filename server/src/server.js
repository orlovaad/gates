const http = require('http');
const port = 3001;
const headerName = 'Content-Type';
const headerValue = 'application/json';

http
  .createServer(function (req, res) {
    res.setHeader(headerName, headerValue);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = JSON.stringify({
      errors: [
        {
          id: 'last_hour',
          data: [
            {
              count: 270,
              code: 500,
            },
            {
              count: 720,
              code: 501,
            },
            {
              count: 210,
              code: 502,
            },
            {
              count: 140,
              code: 599,
            },
            {
              count: 180,
              code: null,
            },
          ],
        },
        {
          id: 'yesterday',
          data: [
            {
              count: 670,
              code: 500,
            },
            {
              count: 320,
              code: 501,
            },
            {
              count: 280,
              code: 502,
            },
            {
              count: 40,
              code: 599,
            },
            {
              count: 780,
              code: null,
            },
          ],
        },
        {
          id: 'last_3days',
          data: [
            {
              count: 200,
              code: 500,
            },
            {
              count: 520,
              code: 501,
            },
            {
              count: 100,
              code: 502,
            },
            {
              count: 140,
              code: 599,
            },
            {
              count: 80,
              code: null,
            },
          ],
        },
      ],

      info: [
        {
          mobile_pessimizer: 0.000999999974737875,
          gate_id: 20,
          web_pessimizer: 100.0,
        },
      ],
      help: [
        {
          Searches: 'https://dictionary.cambridge.org/dictionary/english/search',
          Pessimisation: 'https://stackoverflow.com/questions/32618848/what-is-pessimization',
        },
        {
          CTR: 'https://ru.wikipedia.org/wiki/CTR_(%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82)',
          Cliks: 'https://api.jquery.com/click/',
        },
        {
          STR: 'https://str.com/',
          Bookings: 'https://www.microsoft.com/en-us/microsoft-365/business/scheduling-and-booking-app',
          'Avg. Check': 'https://www.av-test.org/en/antivirus/home-windows/manufacturer/avg/',
        },
      ],
      data: [
        {
          id: 'last_hour',
          errors: 14.9289099526066,
          zeroes: null,
          timeout: 15.0496942657398,
          bookings_current: 98,
          bookings_previous: 32,
          searches_current: 66815,
          searches_previous: 88385,
          clicks_current: 428,
          clicks_previous: 784,
          mobile_traffic: 72,
          web_traffic: 28,
          avg_price: 10243.0263157895,
          str: null,
          ctr: 0.640574721245229,
        },
        {
          id: 'yesterday',
          errors: 0.376232384954177,
          zeroes: 5.03052033295241,
          timeout: 0.217542189065684,
          bookings_current: 4465,
          bookings_previous: 3641,
          searches_current: 2050500,
          searches_previous: 2188541,
          clicks_current: 25210,
          clicks_previous: 23364,
          mobile_traffic: 64,
          web_traffic: 36,
          avg_price: 9447.87135852322,
          str: 14.9289099526066,
          ctr: 1.06052388326287,
        },
        {
          id: 'last_3days',
          errors: 0.143953287057117,
          zeroes: 5.55262854787825,
          timeout: 0.122851836321131,
          bookings_current: 7556,
          bookings_previous: 8647,
          searches_current: 4445192,
          searches_previous: 6118984,
          clicks_current: 60505,
          clicks_previous: 50207,
          mobile_traffic: 89,
          web_traffic: 11,
          avg_price: 10694.8964067661,
          ctr: 1.12946752356254,
          str: 15.0496942657398,
        },
      ],
    });
    res.end(data);
  })
  .listen(port);
