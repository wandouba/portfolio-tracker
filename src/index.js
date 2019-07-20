import React from "react";
import { render } from "react-dom";
import { makeData, getTotalPL, getMarketValue } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      totalPL: getTotalPL(),
      marketValue: getMarketValue()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
          <div>
              <h1>Portforlio</h1>
              <div>Total P&L: <span style={{color: this.state.totalPL >= 0 ? '#57d500' : 'red'} }>${this.state.totalPL}</span></div>
              <div>Market Value: ${this.state.marketValue}</div>
          </div>
        <ReactTable
          data={data}
          columns={[{
            columns: [{
                Header: 'Symbol',
                accessor: 'symbol'
            }, {
                Header: 'Market Price',
                id: 'regularMarketPrice',
                accessor: d => d.regularMarketPrice
            },
            {
                Header: 'Change',
                id: 'regularMarketChange',
                accessor: d => d.regularMarketChange,
                Cell: row => (
                    <span style={{
                        color: row.value >= 0 ? '#57d500' : 'red'
                    }}>
                        {row.value}
                    </span> 
                )}, 
            {
                Header: 'Change in %',
                id: 'changeInPercent',
                accessor: d => parseFloat((d.regularMarketChange/(d.regularMarketPrice - d.regularMarketChange)) * 100).toFixed(2) + '%'
                //accessor: d => (d.regularMarketChange/(d.regularMarketPrice - d.regularMarketChange))
            },
            {
                Header: 'Avg Cost',
                id: 'avgCost',
                accessor: d => d.averageCost
            },
            {
                Header: 'Position',
                id: 'position',
                accessor: d => d.position
            },
            {
                Header: 'P&L',
                id: 'ProfitLoss',
                accessor: d => '$' + parseFloat((d.regularMarketPrice - d.averageCost) * d.position).toFixed(2)
            },
            {
                Header: 'Market Value',
                id: 'marketValue',
                accessor: d => '$' + parseFloat(d.position * d.regularMarketPrice).toFixed(2)
            }]
            }]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
