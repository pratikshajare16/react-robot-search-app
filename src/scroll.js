import React from 'react'

const scroll = (props) => {
    return (
        <div style={{
            overflow: 'scroll', border: '1px  solid black', height: "500PX"

        }}>
            {props.children}
        </div>
    )
}

export default scroll