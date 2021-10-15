// import React, {Component} from "react";
//
// class Select extends Component {
//
//     render() {
//         const {className, name, options, value, handleOnChange} = this.props;
//         return (
//             <select
//                 onChange={handleOnChange}
//                 className={className}
//                 name={name}
//                 id={name}
//                 value=""
//             >
//                 {options.map(option => <option key={option}>{option}</option>)}
//             </select>
//         );
//     }
// }
//
// export default Select;

// import React, {useRef} from "react";

const Select = ({valueProperty, className, value, name, options, error, disabled, ...rest}) => {


    return (
        <div className="form-group">
            <select  disabled={disabled} name={name} id={name} {...rest} className={className}>
                {!value&& <option selected>Choose</option>}
                {/*{value && <option value={value.id}>{value[valueProperty]}</option> }*/}
                {options.length > 0 && options.map(option => (
                    <option selected={option.id === value} key={option.id} value={option.id}>
                        {option[valueProperty]}
                        {/*{console.log("option",option.id,value)}*/}
                    </option>
                ))}
            </select>
            {error && <div className="text-red-400 font-regular text-sm text-right">{error}</div>}
        </div>
    );
};

export default Select


