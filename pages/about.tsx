import { NextPage } from 'next';
import React from 'react';

const About: NextPage = () => {
    return (
        <div>
            About
        </div>
    );
}

export default About
export async function getServerSideProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}