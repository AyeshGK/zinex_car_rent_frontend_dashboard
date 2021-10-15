import React, {Component} from 'react';
import TableView from "../tableView";
import CardLineChart from "../../Cards/CardLineChart";
import CardBarChart from "../../Cards/CardBarChart";
import Paginate from "../../paginate/pagination_new";

class PendingReservation extends TableView {
    state = {
        columns: [
            {id: 1, path: "id", label: "Reservation Id"},
            {id: 2, path: "reservation_time", label: "Reservation Date"},
            {id: 3, path: "payment", label: "Payment"},
            {
                id: 6, path: "view_reservation", label: "View Reservation",
                content: (item => (<button><i className="fa fa-file 2xl:text-blue-500"/></button>))
            },
        ],
        tableData: [
            {
                id: "SUV-12",
                reservation_time: "2021/04/28",
                payment: "Yes",
                view_reservation: "x"
            },
            {
                id: "SUV-13",
                reservation_time: "2021/04/28",
                payment: "No",
                view_reservation: "x"
            },
            {
                id: "SUV-14",
                reservation_time: "2021/04/28",
                payment: "No",
                view_reservation: "x"
            },
            {
                id: "SUV-15",
                reservation_time: "2021/04/28",
                payment: "Yes",
                view_reservation: "x"
            }
        ],
        pageSize: 5,
        count: 1,
        currentPage: 1,

    }

    render() {
        return (
            <React.Fragment>
                <div className="flex flex-wrap">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardLineChart/>
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardBarChart/>
                    </div>
                </div>
                <div>Pending Reservation</div>
                <table className="items-center w-full bg-transparent border-collapse">
                    {this.renderTableHead()}
                    {this.renderTableBody("id")}
                </table>
                <Paginate
                    limit={this.state.pageSize}
                    count={this.state.count}
                    offset={this.state.currentPage}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        )
    }

    handlePageChange = async (page) => {

    }
}


export default PendingReservation;