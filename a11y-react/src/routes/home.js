import React from 'react';
import TextSection from '../components/TextSection';

const Home = () => {
    return (
        <div>
            <div class="content-wrapper">
                <TextSection image="../images/computer.png" rubrik="Rubrik 1" />
                <TextSection image="../images/eagle.png" rubrik="Rubrik 2" />
                <TextSection image="../images/tree.png" rubrik="Rubrik 3" />
            </div>
        </div>
    )
}

export default Home;