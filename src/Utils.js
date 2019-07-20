import "./index.css";

export function makeData() {
  return [
    {
      symbol: 'ZS',
      shortName: 'Zscaler, Inc.',
      regularMarketPrice: 82.38,
      regularMarketChange: 0.38,
      regularMarketPreviousClose: 82,
      averageCost: 80,
      position: 500,
      date: '2019-07-19'
    },
    {
      symbol: 'AYX',
      shortName: 'Alteryx, Inc.',
      regularMarketPrice: 112.05,
      regularMarketChange: -1.2,
      regularMarketPreviousClose: 114,
      averageCost: 105.82,
      position: 300,
      date: '2019-07-19'
    },
    {
      symbol: 'TWLO',
      shortName: 'Twilio, Inc.',
      regularMarketPrice: 145.98,
      regularMarketChange: 0.12,
      regularMarketPreviousClose: 145.88,
      averageCost: 125.06,
      position: 300,
      date: '2019-07-19'
    }
  ];
}

export function getTotalPL() {
  let totalPL = 0;
  makeData().map(s => {totalPL += (s.regularMarketPrice - s.averageCost) * s.position})
  return totalPL.toFixed(2);
}

export function getMarketValue() {
  let marketValue = 0;
  makeData().map(s => {marketValue += s.regularMarketPrice * s.position});
  return marketValue.toFixed(2);
}




