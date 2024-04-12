import UserCommentsList from '@/components/comments/user-comments-list';
import PlainLayout from '@/components/master/Plain-Layout';
import { cookies } from 'next/headers';
import React from 'react';


async function getData(cookies) {
    let option = { method: 'GET', headers: {'Cookie': cookies}, cache:'no-store'}
    let comments = (await (await fetch(`${process.env.HOST}/api/comments/manage`, option)).json())['data'];
    return {comments: comments}
}

const page = async () => {

    const cookieStore = cookies()
    let data=await getData(cookieStore);

    return (
        <PlainLayout>
            <UserCommentsList data={data['comments']}/>
        </PlainLayout>
    );
};

export default page;