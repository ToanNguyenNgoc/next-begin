import { useRouter } from 'next/router';
import React from 'react';

function DetailId() {
    const router = useRouter();
    console.log(router.query)
    return (
        <div>
            Product detail
        </div>
    );
}

export default DetailId;
export async function getServerSideProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}