import PlainLayout from '@/components/master/Plain-Layout';
import NewsDetails from '@/components/news/NewsDetails';
import PopularList from '@/components/news/PopularList';
import React from 'react';

async function getData(id) {
    let details = (await(await fetch(`${process.env.HOST}/api/news/details?id=${id}`)).json())['data']
    let popular = (await(await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']

    return {details:details, popular:popular}
}



const page = async(props) => {

    let id = props.searchParams['id']
    const data = await getData(id)

    return (
        <PlainLayout>
            <div className='container mt-4'>
                <div className='row'>
                   
                    <div className='col-md-9 col-lg-9 col-sm-12 col-12 px-3'>
                        <div className='card'>
                            <NewsDetails details={data['details']}/>
                        </div>
                        
                    </div>

                    <div className='col-md-3 col-lg-3 col-sm-12 col-12 px-3'>
                        <PopularList popular={data['popular']}/>
                        
                    </div>
                </div>
            </div>
        </PlainLayout>
    );
};

export default page;