import React from 'react'; 

const Song = (props) => { 
    let { url } = props
    return ( 
        <div>
            <ResponsivePlayerurl
                url={url}
            />
        </div>
    )
}