import PlainLayout from '@/components/master/Plain-Layout';
import ProfileForm from '@/components/profile/profile-form';
import { cookies, headers } from 'next/headers';
import React from 'react';


async function  getData(cookies) {
    let option={method:'GET', headers:{'Cookie': cookies}, cache: 'no-store'}
    let profile = (await(await fetch(`${process.env.HOST}/api/user/profile/details`, option)).json())['data']
    return {profile:profile};
}

const page = async () => {

    const cookieStore = cookies()
    let data=await getData(cookieStore);

    return (
        <PlainLayout>
            <ProfileForm data={data['profile']} />
        </PlainLayout>
    );
};

export default page;