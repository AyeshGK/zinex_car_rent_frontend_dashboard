import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function CardManagementEvents({
                                                 statSubtitle,
                                                 statTitle,
                                                 statArrow,
                                                 statPercent,
                                                 statPercentColor,
                                                 statDescripiron,
                                                 statIconName,
                                                 statIconColor,
                                                 to_add,
                                                 to_view
                                             }) {
    console.log(to_view)
    return (

        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
                <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <div className="">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                {statSubtitle}
                            </h5>
                            <span className="bg-blueGray-200 px-2 border hover:border-gray-700">

                                <Link to={to_view} className="text-sm text-green-700">View</Link>
                            </span>
                        </div>

                        <span className="text-sm text-blueGray-500">Current count - </span>
                        <span className="font-semibold text-xl text-blueGray-700">
                            {statTitle}
                        </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                        <Link to={to_add}>

                            <div
                                className={
                                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                                    statIconColor
                                }
                            >
                                <i className={statIconName}/>
                            </div>
                        </Link>
                    </div>
                </div>
                <p className="text-sm text-blueGray-400 mt-4">
                    <span className={statPercentColor + " mr-2"}>
                        {statPercent}
                    </span>
                    <span className="whitespace-nowrap">{statDescripiron}</span>
                </p>
            </div>
        </div>

    );
}

CardManagementEvents.defaultProps = {
    statSubtitle: "Traffic",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
};

CardManagementEvents.propTypes = {
    statSubtitle: PropTypes.string,
    statTitle: PropTypes.string,
    statArrow: PropTypes.oneOf(["up", "down"]),
    statPercent: PropTypes.string,
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: PropTypes.string,
    statDescripiron: PropTypes.string,
    statIconName: PropTypes.string,
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: PropTypes.string,
};
