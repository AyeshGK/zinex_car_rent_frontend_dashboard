import React, {Component} from "react";
import Joi from "joi"
import Input from "./input";
import Button from "./button";
import Select from "./select";
import TimePicker from "./timePicker";
// import ToolTip from "../pages/signUp/toolTip";
import ToolTip from "./toolTip";


class Form extends Component {
    state = {
        data: {},
        error: {}
    }

    validate = (schema2 = null) => {
        let prime_schema = this.schema;
        if (schema2) {
            prime_schema = schema2;
        }


        const options = {abortEarly: false};
        const {error} = prime_schema.validate(this.state.data, options);
        if (!error) return null;
        const errors = {};
        error.details.map(item => errors[item.path[0]] = item.message);
        console.log("errors",errors);
        console.log("schema",prime_schema);
        return errors;
    }

    validateProperty = ({name, value}, schema2 = null) => {
        let prime_schema = this.schema;
        if (schema2) {
            prime_schema = schema2;
        }

        const obj = {[name]: value};
        // {"firstname":Joi.string().max(4).required()}
        // const x = {[name]: this.schema[name]}
        // console.log("x",this.schema.extract(name));
        // console.log("x",this.schema);

        const rule = prime_schema.extract(name);
        const schema = Joi.object({[name]: rule});
        // const schema = Joi.object({"firstname": Joi.string().max(4).required()});
        const {error} = schema.validate(obj);
        // const {error} = schema.validate(obj);
        return error ? error.details[0].message : null;
    }

    handleSubmit = event => {
        console.log("handleSubmit", this.state.data);
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        this.doSubmit();
    }

    handleChange = ({currentTarget: input}) => {
        // console.log("input", input);
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;

        if (input.name === 'reservation_time') {
            console.log("changing area")
            data["return_time"] = "";
        }
        const logic_1 = input.name === 'reservation_time' || input.name === 'return_time';
        const logic_2 = input.name === 'category_name' || input.name === 'brand_name';

        try{
            if (!this.props.match.params.vehicle_id && (logic_1 || logic_2)) {
                data["model"] = "";
            }

            if (this.props.match.params.vehicle_id && logic_2) {
                data["model"] = "";
            }
        }catch (ex) {
        }

        this.setState({data, errors});
    };

    renderInput = (name, label, placeHolder, classInput, classLabel, type = "text", disabled, hideError = false) => {
        const {data, errors} = this.state;
        return (
            <Input
                name={name}
                label={label}
                value={data[name]}
                error={errors[name]}
                placeholder={placeHolder}
                type={type}
                onChange={this.handleChange}
                disabled={disabled}
                hideError={hideError}
            />
        );
    }

    renderButton = (name, label, classButton, classIcon) => {
        return (
            <Button
                name={name}
                label={label}
                classButton={classButton}
                classIcon={classIcon}
                onClick={this.handleSubmit}
                disabled={this.validate()}
            />
        );
    }

    renderSelect(valueProperty, name, className, options, disabled = false) {
        const {data, errors} = this.state;
        // console.log("options", options);
        // console.log("render select error message", errors)

        return (
            <Select
                valueProperty={valueProperty}
                name={name}
                className={className}
                value={data[name]}
                options={options}
                onChange={(e) => {
                    this.handleChange(e)
                }}
                error={errors[name]}
                disabled={disabled}
            />
        );
    }

    renderTimePicker(name, label, dateFormat, timeFormat, disabled = false, unavailableDates = [], dayAfterDisable,dayBeforeDisable="") {
        const {data, errors} = this.state;
        return (
            <TimePicker
                disabled={disabled}
                dateFormat={dateFormat}
                timeFormat={timeFormat}
                onChange={(e) => {
                    this.handleChange(e);
                    this.handleSpecialChange(e);
                }}
                error={errors[name]}
                value={data[name]}
                label={label}
                name={name}
                unavilableDates={unavailableDates}
                dayAfterDisable={dayAfterDisable}
                dayBeforeDisable={dayBeforeDisable}
            />
        )
    }

    renderInputToolTip = (name, label, placeHolder, classInput, classLabel, tips, type = "text") => {
        const {data, errors} = this.state;
        return (
            <ToolTip
                name={name}
                tips={tips}
                label={label}
                value={data[name]}
                error={errors[name]}
                placeholder={placeHolder}
                type={type}
                onChange={this.handleChange}
            />
        );
    }


}


export default Form;

