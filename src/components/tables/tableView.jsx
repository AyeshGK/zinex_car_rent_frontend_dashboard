import React, {Component} from 'react';
import _ from 'lodash'

class TableView extends Component {
    state = {

        columns: [],
        tableData: []
    }


    renderTableHead = () => {
        return (

            <thead>
            <tr
                className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {this.state.columns.map(column => <th className="bg-blue-300 p-5"
                                                      key={column.id}>{column["label"]}</th>)}
            </tr>
            </thead>

        )
    }

    renderTableBody = (id_name) => {
        return (

            <tbody>
            {this.state.tableData.map(row =>
                <tr
                    key={row[id_name]}>{this.state.columns.map(column =>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        key={this.getCellId(row, column,id_name)}><span>{this.renderCell(row, column)}</span>
                    </td>)}</tr>)
            }
            </tbody>


        )
    }

    getCellId = (item, column,id_name) => {
        return item[id_name]+ column.path;
    }

    renderCell = (item, column) => {
        if (column.content) return column.content(item)
        return _.get(item, column.path)
    }

}

export default TableView;