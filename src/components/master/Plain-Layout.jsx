import React from 'react';
import AppNavBar from './AppNavBar';
import Footer from './Footer';
import {Toaster} from 'react-hot-toast'
import { cookies } from 'next/headers';


async function getData(){
    let socials = (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    let category = (await(await fetch(`${process.env.HOST}/api/category`, { cache: 'no-store' })).json())['data']
    let categories = (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    //let categories = [{"name":"ca"}]
    return {socials:socials, category:category, categories:categories}
}

const PlainLayout = async (props) => {

    const data = await getData();

    const cookieStore = cookies()
    const token = cookieStore.get('token')

    let isLogin = false
    isLogin = typeof token !== "undefined"

    

    return (
        <>
            <AppNavBar  isLogin={isLogin} data={data} />
            {props.children}
            <Toaster position='bottom-center' />
            <Footer data={data}/>
        </>
    );
};

export default PlainLayout;