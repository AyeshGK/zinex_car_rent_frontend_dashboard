import React, {Component} from 'react';
import TableView from "../tableView";
import CardLineChart from "../../Cards/CardLineChart";
import CardBarChart from "../../Cards/CardBarChart";
import Paginate from "../../paginate/pagination_new";
import {Link} from "react-router-dom";

class ViewVehicles extends TableView {
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
            {id: 1, path: "id", label: "Id"},
            {id: 4, path: "model", label: "Model"},
            {id: 2, path: "model_year", label: "Model year"},
            {id: 3, path: "brand", label: "Brand"},
            {
                id: 6, path: "color", label: "Color",
                content: (item => (<div className="border border-blue-gray-50"><i style={{color: item.color.hexa_value}} className="fa fa-car 2xl"/></div>))
            },
            {
                id:7,path:"edit" ,label:"Edit",
                content: (item => (<button><i style={{color:item.color_name}} className="fa fa-pen 2xl"/></button>))
            },

        ],
        tableData: [
            {
                id: "001dinuka",
                model: "dinuka nimantha",
                model_year: "2021/04/28",
                image: "team-1-800x800.jpg",
                brand: "Yes",
                color: {
                    hexa_value: "#d91111",
                    color_id:1212,
                    color_name:"Red"
                }
            },
            {
                id: "002dasun",
                model: "dasun nimantha",
                model_year: "2021/04/28",
                image: "team-2-800x800.jpg",
                brand: "No",
                color: {
                    hexa_value: "#2db40f",
                    color_id:1212,
                    color_name:"Green"
                }
            },
            {
                id: "003dinuka",
                model: "dinuka nimantha",
                model_year: "2021/04/28",
                image: "team-3-800x800.jpg",
                brand: "No",
                color: {
                    hexa_value: "#1338b2",
                    color_id:1212,
                    color_name:"Blue"

                }
            },
            {
                id: "004dasun",
                model: "dasun nimantha",
                model_year: "2021/04/28",
                image: "team-4-470x470.png",
                brand: "Yes",
                color: {
                    hexa_value: "#dcac10",
                    color_id:1212,
                    color_name:"Yellow"
                }
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
                <div>Vehicles</div>
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


export default ViewVehicles;