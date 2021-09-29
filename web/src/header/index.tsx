import React, { ReactElement } from 'react'

interface Props {
    
}

export default function index({}: Props): ReactElement {
    return (
        <div style={{backgroundColor: 'pink', height: 30, lineHeight: '30px'}}>
            i am the header
        </div>
    )
}


