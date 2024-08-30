
import React from 'react'

const Helmet = (props) => {

    // document.title = 'Flightsbooker ' + props.title;
    document.title = 'Flightsbooker';

  return <div className='w-100'>{props.children}</div>
}

export default Helmet