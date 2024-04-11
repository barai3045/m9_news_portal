import PlainLayout from '@/components/master/Plain-Layout';
import LoginForm from '@/components/user/LoginForm';
import React from 'react';

const page = () => {
    return (
        <PlainLayout>
            <LoginForm/>
        </PlainLayout>
    );
};

export default page;