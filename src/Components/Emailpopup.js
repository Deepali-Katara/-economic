import React from 'react'

function Popup(props){
    return(props.trigger) ? (
<div>
    <div>
        {props.children}
    </div>
</div>
    ):"";
}
export default Popup
