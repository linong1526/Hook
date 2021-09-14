import React from 'react'
import useReducer from './UseReducer'
function Hooks(){
    const [show,changeShow]=React.useState(true)
    return (
        <div>
            <h2>Hooks</h2>
            <UserReducer/>
        </div>
    )
}
export default Hooks;