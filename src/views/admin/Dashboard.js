import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardManagementEvents from "../../components/Cards/cardManagementEvents";

export default function Dashboard() {
    return (
        <>

            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardLineChart/>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardBarChart/>
                </div>
            </div>

            <div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardManagementEvents
                            statSubtitle="Vehicles"
                            statTitle="234"
                            statArrow="up"
                            statPercent="3"
                            statPercentColor="text-emerald-500"
                            statDescripiron="Since last month"
                            statIconName="fas fa-car"
                            statIconColor="bg-red-500"
                            to_add="/admin/dashboard/add-vehicle"
                            to_view="/admin/dashboard/vehicles"
                        />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardManagementEvents
                            statSubtitle="Drivers"
                            statTitle="234"
                            statArrow="down"
                            statPercent="2"
                            statPercentColor="text-red-500"
                            statDescripiron="Since last month"
                            statIconName="fas fa-user-plus"
                            statIconColor="bg-orange-500"
                            to_add="/admin/dashboard/add-driver"
                            to_view="/admin/dashboard/drivers"
                        />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardManagementEvents
                            statSubtitle="Staff Members"
                            statTitle="15"
                            statArrow="down"
                            statPercent="1"
                            statPercentColor="text-orange-500"
                            statDescripiron="Since last month"
                            statIconName="fas fa-user-plus"
                            statIconColor="bg-pink-500"
                            to_add="/admin/dashboard/add-staff-member"
                            to_view="/admin/dashboard/staff-members"
                        />
                    </div>

                </div>
            </div>

            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardPageVisits/>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardSocialTraffic/>
                </div>
            </div>
        </>
    );
}
