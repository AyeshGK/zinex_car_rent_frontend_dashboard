import React, {Component} from "react";

class Button extends Component {
    // state = {}

    render() {

        const {classButton, classIcon, label, disabled, onClick} = this.props;

        return (
            <React.Fragment>

                <button onClick={onClick} type="submit"
                        className={classButton ? classButton : "text-white active:bg-blue-300 font-bold text-sm px-3 py-3" +
                            " rounded border shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 md:duration-200 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:bg-red-500 md:hover:scale-110"}
                >
                    {classIcon ? <i className={classIcon}/> : null} {label}
                </button>

            </React.Fragment>
        );
    }
}

export default Button;