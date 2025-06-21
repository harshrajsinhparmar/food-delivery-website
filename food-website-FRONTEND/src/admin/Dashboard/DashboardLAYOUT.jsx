import react from 'react';

import {Outlet} from 'react-router-dom';

const DashboardLAYOUT= () =>{
return (
    <div>
        <div classname="w-full h-10  border">Header</div>

        <div className='grid grid-cols-5'>

            <div className='border col-span-1 h-dvh'>Side bar</div>
            <div className='col-span-4'><Outlet/></div>

    </div></div>
);
};


export default DashboardLAYOUT;