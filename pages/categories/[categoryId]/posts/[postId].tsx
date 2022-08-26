import { useRouter } from 'next/router';
import React from 'react';

function PostId() {
    const router = useRouter();
    console.log(router.query)
    return (
        <div>
            PostId
        </div>
    );
}

export default PostId;