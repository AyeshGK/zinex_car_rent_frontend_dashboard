import React, {Component} from 'react';
import Form from "../form";
import Joi from 'joi'
import CardLineChart from "../../Cards/CardLineChart";
import CardBarChart from "../../Cards/CardBarChart";

class AddVehicle extends Form {
    state = {
        data: {
            brand_name: "",
            model: "",
            model_year: "",
            vehicle_number: "",
            blood_group: "",
            driving_licence: "",
        },
        errors: {}
    }

    schema = Joi.object({

        brand_name: Joi.string().required().label("First name"),
        model: Joi.string().required().label("Last name"),
        model_year: Joi.string().required().label("model_year"),
        vehicle_number: Joi.string().required(),
        driving_licence: Joi.string().required()

    })

    render() {
        const class_name = "text-black w-full px-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500" +
            "md:py-2 py-1.5 md:text-sm text-xs";
        const class_label = "text-xs md:text-sm text-gray-600 dark:text-gray-400";
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
                <form onClick={this.handleSubmit} className="w-full max-w-lg">
                    <div className="md:grid md:grid-cols-2 w-full md:space-x-2 ">
                        <div className="md:mb-2 mb-1 ">
                            {this.renderInput(
                                "brand_name",
                                "First name",
                                "First name",
                                class_name,
                                class_label
                            )}
                        </div>
                        <div className="md:mb-2 mb-1 ">
                            {this.renderInput(
                                "model",
                                "Last name",
                                "Last name",
                                class_name,
                                class_label
                            )}
                        </div>
                        <div className="md:mb-2 mb-1 ">
                            {this.renderInput(
                                "model_year",
                                "model_year",
                                "model_year address",
                                class_name,
                                class_label
                            )}
                        </div>
                        <div className="md:mb-2 mb-1 ">
                            {this.renderInput(
                                "vehicle_number",
                                "Phone number",
                                "Phone number",
                                class_name,
                                class_label
                            )}
                        </div>
                        <div className="md:mb-2 mb-1 ">
                            {this.renderInput(
                                "driving_licence",
                                "Driving Licence",
                                "Licence",
                                class_name,
                                class_label
                            )}
                        </div>

                        <div className="mb-3  sm:inline-block">
                            {this.renderButton(
                                "add_driver",
                                "Add driver",
                                "duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110" +
                                " hover:text-white active:bg-blue-300 " +
                                "font-bold text-sm text-black  px-3 py-3 " +
                                "rounded border shadow hover:shadow-xl outline-none " +
                                "focus:outline-none mr-1 mb-1 transition-all duration-150" +
                                "border-red-300",
                            )}
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }

    doSubmit = async () => {
        console.log(this.state.data);
    }
}

export default AddVehicle;