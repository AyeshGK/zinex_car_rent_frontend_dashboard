import React, {Component, useState} from 'react';
// import DateTimePicker from "react-datetime-picker"
// import 'react-datetime-picker/dist/DateTimePicker.css'
// import DateTimePicker from 'react-date-and-time-picker';
// import 'react-date-and-time-picker/dist/main.css'
// import 'react-date-and-time-picker/dist/main.min.css'
// import 'react-date-and-time-picker/example'
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';
import Moment from 'moment'
import moment from "moment";


class TimePicker extends Component {
    // state = {}

    render() {

        const {
            error,
            label,
            dateFormat = true,
            timeFormat = true,
            disabled = false,
            value,
            name

        } = this.props;
        // "DD MM YYYY" "hh:mm"
        // console.log("date value",name,value==="","value",value);
        let inputProps = {
            placeholder: "N/A",
            readOnly: true,
            disabled: disabled,
            value: value ? value : ""
        };

        // console.log("unavailable dates======> ", this.props.unavilableDates)
        // console.log("day before", this.props.dayBeforeDisable);
        // console.log("day after ", this.props.dayAfterDisable);
        return (
            <React.Fragment>
                <div className="flex justify-between py-3">
                    <label htmlFor="title"
                           className="text-sm text-left text-gray-600 dark:text-gray-400 mr-5">{label}</label>
                    <div className="border border-gray-300 rounded-md p-1">
                        <Datetime
                            onChange={this.handleOnDatetime}
                            dateFormat={dateFormat}
                            isValidDate={this.isValidDate}
                            timeFormat={timeFormat}
                            // value={value==="" && "" }
                            // input={false}
                            // initialValue={}
                            inputProps={inputProps}

                        /></div>
                </div>
                {error && <div className="text-red-400 font-regular text-sm text-right">{error}</div>}
            </React.Fragment>
        )
    }

    handleOnDatetime = ({_d: date}) => {
        const {name} = this.props;
        let format = this.props.dateFormat
        if (this.props.timeFormat) {
            format = format + " " + this.props.timeFormat;
        }

        // console.log("date", date);
        // console.log("Date", date);
        const formattedDate = Moment(date).format(format).toString()


        this.props.onChange({currentTarget: {name: name, value: formattedDate}})
    }

    isValidDate = (currDate) => {
        const formattedDate = moment(currDate).format("DD/MM/YYYY").toString();
        //console.log(formattedDate);

        const {dayAfterDisable, dayBeforeDisable} = this.props;

        const formattedDate_2 = moment(currDate).format("YYYY-MM-DD hh:mm:ss").toString();//get distinct dates from calender
        if (dayAfterDisable) {

            const dayAfter = moment(dayAfterDisable, 'YYYY-MM-DDThh:mm:ss').format('YYYY-MM-DD hh:mm:ss').toString();
            // console.log("current date",formattedDate,"day after",dayAfter,"value",moment(formattedDate_2).isAfter("2021-08-12"));


            // /|| moment(formattedDate_2).isBefore(formattedDate_3) dont remove this part this is need
            //add this part into if clause to remove dates before now
            if (moment(formattedDate_2).isAfter(dayAfter)) {

                // console.log("date time error");
                return false;
            }
        }
        if (dayBeforeDisable) {
            const formattedDate_3 = moment(dayBeforeDisable,'DD MM YYYY hh:mm:ss').format('YYYY-MM-DD hh:mm:ss').toString();//get now date & time
            if (moment(formattedDate_2).isBefore(formattedDate_3)) {
                return false;
            }
        }
        const result = this.props.unavilableDates.filter(date => date === formattedDate);
        return result[0] ? false : true;
    }
}

export default TimePicker;

// const result = this.props.unavailable.filter(una => (date.getDate() === una.getDate() && date.getMonth() === una.getMonth() && date.getFullYear() === una.getFullYear()))
// return result[0]
