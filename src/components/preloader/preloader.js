import React from 'react';
import './style.css'

const preloader = (props) => (
    <div className={(!props.show) ? 'preloader hide' : 'preloader'}>
        <div className="lds-css ng-scope">
            <div className="lds-ripple">
                <div/><div/>
            </div>
        </div>
    </div>
);

export default preloader;