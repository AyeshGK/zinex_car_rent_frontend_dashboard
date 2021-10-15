// import React, {Component} from 'react';
// import TableView from "../tableView";
// import CardLineChart from "../../Cards/CardLineChart";
// import CardBarChart from "../../Cards/CardBarChart";
// import Paginate from "../../paginate/pagination_new";
// import {Link} from "react-router-dom/modules";
//
// class Staffs extends TableView {
//     state = {
//         columns: [
//             {
//                 id: 5, path: "image", label: "#",
//                 content: (item =>
//                         (<Link to="#">
//                             <img
//                                 src={require("assets/img/bootstrap.jpg").default}
//                                 className="h-12 w-12 bg-white rounded-full border"
//                                 alt="..."
//                             />{" "}
//                         </Link>)
//                 )
//             },
//             {id: 1, path: "id", label: "Staff Id"},
//             {id: 4, path: "name", label: "Identity"},
//             {id: 2, path: "start_time", label: "Start Date"},
//             {id: 3, path: "payment", label: "Payment"},
//
//             {
//                 id: 6, path: "view_reservation", label: "View Reservation",
//                 content: (item => (<button><i className="fa fa-file 2xl:text-blue-500"/></button>))
//             },
//         ],
//         tableData: [
//             {
//                 id: "001dinuka",
//                 name: "dinuka nimantha",
//                 start_time: "2021/04/28",
//                 payment: "Yes",
//                 view_reservation: "x"
//             },
//             {
//                 id: "002dasun",
//                 name: "dasun nimantha",
//                 start_time: "2021/04/28",
//                 payment: "No",
//                 view_reservation: "x"
//             },
//             {
//                 id: "003dinuka",
//                 name: "dinuka nimantha",
//                 start_time: "2021/04/28",
//                 payment: "No",
//                 view_reservation: "x"
//             },
//             {
//                 id: "004dasun",
//                 name: "dasun nimantha",
//                 start_time: "2021/04/28",
//                 payment: "Yes",
//                 view_reservation: "x"
//             }
//         ],
//         pageSize: 5,
//         count: 1,
//         currentPage: 1,
//
//     }
//
//     render() {
//         return (
//             <React.Fragment>
//                 <div className="flex flex-wrap">
//                     <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
//                         <CardLineChart/>
//                     </div>
//                     <div className="w-full xl:w-4/12 px-4">
//                         <CardBarChart/>
//                     </div>
//                 </div>
//                 <div>Accepted Reservation</div>
//                 <table className="items-center w-full bg-transparent border-collapse">
//                     {this.renderTableHead()}
//                     {this.renderTableBody("id")}
//                 </table>
//                 <Paginate
//                     limit={this.state.pageSize}
//                     count={this.state.count}
//                     offset={this.state.currentPage}
//                     onPageChange={this.handlePageChange}
//                 />
//             </React.Fragment>
//         )
//     }
//
//     handlePageChange = async (page) => {
//
//     }
// }
//
//
// export default Staffs;

import React, {Component} from 'react';
import TableView from "../tableView";
import CardLineChart from "../../Cards/CardLineChart";
import CardBarChart from "../../Cards/CardBarChart";
import Paginate from "../../paginate/pagination_new";
import {Link} from "react-router-dom";

class Staffs extends TableView {
    state = {
        columns: [
            {
                id: 5, path: "image", label: "#",
                content: (item =>
                        (<Link to="#">
                            <img
                                src={require(`assets/img/${item.image}`).default}
                                className="h-12 w-12 bg-white rounded-full border"
                                alt="..."
                            />{" "}
                        </Link>)
                )
            },
            {id: 1, path: "id", label: "Staff Id"},
            {id: 4, path: "name", label: "Identity"},
            {id: 2, path: "start_time", label: "Start Date"},
            {id: 3, path: "payment", label: "Payment"},

            {
                id: 6, path: "view_reservation", label: "View Reservation",
                content: (item => (<button><i className="fa fa-file 2xl:text-blue-500"/></button>))
            },
        ],
        tableData: [
            {
                id: "001dinuka",
                name: "dinuka nimantha",
                start_time: "2021/04/28",
                image:"team-1-800x800.jpg",
                payment: "Yes",
                view_reservation: "x"
            },
            {
                id: "002dasun",
                name: "dasun nimantha",
                start_time: "2021/04/28",
                image:"team-2-800x800.jpg",
                payment: "No",
                view_reservation: "x"
            },
            {
                id: "003dinuka",
                name: "dinuka nimantha",
                start_time: "2021/04/28",
                image:"team-3-800x800.jpg",
                payment: "No",
                view_reservation: "x"
            },
            {
                id: "004dasun",
                name: "dasun nimantha",
                start_time: "2021/04/28",
                image:"team-4-470x470.png",
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
                <div>Accepted Reservation</div>
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


export default Staffs;