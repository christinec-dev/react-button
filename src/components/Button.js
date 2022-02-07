import React, {useState} from "react";

//Reusable component that will change a button depending on the props passed to it
export default function Button(props) {
    //button size (lg, xs, sm)
    const [size] = useState(props.size);
    //variant (used to determine the button color)
    const [variant] = useState(props.variant);

    return (
        <button 
        className={`btn-${variant} 
        btn-${size}`}>
            {/*Show button content dynamically */}
            {props.children}
        </button>
    )
}
