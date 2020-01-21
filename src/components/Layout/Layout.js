import React, {Fragment} from 'react';
import './Layout.css'
const Layout = props => (
    <Fragment>
        <header className='header'>
            <div className='container'>
                <h1>TV Shows</h1>
            </div>
        </header>
        <main className='Layout-Content container'>
            {props.children}
        </main>
    </Fragment>
);
export default Layout;