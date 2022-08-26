import { useRouter } from 'next/router';
import React from 'react';

function Post() {
    const router = useRouter();
    console.log(router.query)
    return (
        <div>
            Post
        </div>
    );
}

export default Post;