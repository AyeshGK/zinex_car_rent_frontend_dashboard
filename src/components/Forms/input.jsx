import React, {Component} from "react";

class Input extends Component {

    render() {
        const {name, label, classInput, classLabel, error, onChange,hideError,disabled, ...rest} = this.props;
        //console.log("erorr in input",error);
        return (
            <React.Fragment>

                <div className="flex justify-between mb-2">
                    <label htmlFor={name}
                           className={classLabel ? classLabel : "text-sm text-gray-600 dark:text-gray-400"}>{label}</label>
                </div>
                <input  {...rest} name={name} id={name} onChange={onChange} disabled={disabled}
                       className={classInput ? classInput : "focus:border-gray-500 text-black w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"}/>
                {error && (!hideError) && <div className="text-red-500 text-xs italic">{error}</div>}

            </React.Fragment>
        );
    }
}

export default Input;