import  React, {Component, useRef} from "react";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";

export default class Tooltip extends Component{

    constructor() {
        super();
        this.buttonRef = React.createRef();
    }

    render() {
        const {name, tips, label, classInput, classLabel, error, onChange, ...rest} = this.props;
        return (
            <React.Fragment>

                <div className="mb-2 text-left">
                    <label htmlFor={name}
                           className={classLabel ? classLabel : "text-sm text-gray-600 dark:text-gray-400"}>{label}</label>
                </div>
                <input  {...rest} name={name} ref={this.buttonRef} ripple="light" id={name} onChange={onChange}
                        className={classInput ? classInput : "text-black w-full px-3 py-2" +
                            " placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 " +
                            "dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"}/>
                {error && <div className="text-red-500 text-xs italic">{error}</div>}

                <Tooltips placement="top" ref={this.buttonRef}>
                    <TooltipsContent>{tips.map(tip => <div key={tip}>{tip}</div>)}</TooltipsContent>
                </Tooltips>

            </React.Fragment>
        );
    }
}