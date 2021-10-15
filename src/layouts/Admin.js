import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

import AddMemberForm from "../components/Forms/addStaff/addMember";
import AddDriver from "../components/Forms/addDriver/addDriver";
import AddVehicle from "../components/Forms/addCar/addVehicle"
import PendingReservation from "../components/tables/pending/pendingReservation";
import AcceptedReservation from "../components/tables/accepted/acceptedReservation";
import Staffs from "../components/tables/viewStaffs/staffs";
import ViewVehicles from "../components/tables/viewVehicles/viewVehicles";


export default function Admin() {
    return (
        <>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar/>
                {/* Header */}
                <HeaderStats/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>

                        <Route path="/admin/dashboard/vehicles" exact component={ViewVehicles}/>
                        <Route path="/admin/dashboard/staff-members" exact component={Staffs}/>
                        <Route path="/admin/dashboard/pending-reservation" exact component={PendingReservation}/>
                        <Route path="/admin/dashboard/accepted-reservation" exact component={AcceptedReservation}/>
                        <Route path="/admin/dashboard/rejected-reservation" exact component={PendingReservation}/>
                        <Route path="/admin/dashboard/cancelled-reservation" exact component={PendingReservation}/>
                        <Route path="/admin/dashboard/add-vehicle" exact component={AddVehicle}/>
                        <Route path="/admin/dashboard/add-driver" exact component={AddDriver}/>
                        <Route path="/admin/dashboard/add-staff-member" exact component={AddMemberForm}/>
                        <Route path="/admin/dashboard" exact component={Dashboard}/>
                        <Route path="/admin/maps" exact component={Maps}/>
                        <Route path="/admin/settings" exact component={Settings}/>
                        <Route path="/admin/tables" exact component={Tables}/>
                        <Redirect from="/admin" to="/admin/dashboard"/>
                    </Switch>
                    <FooterAdmin/>
                </div>
            </div>
        </>
    );
}
