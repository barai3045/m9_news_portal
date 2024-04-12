import PlainLayout from '@/components/master/Plain-Layout';
import Hero from '@/components/news/Hero';
import NewsList from '@/components/news/NewsList';
import PopularList from '@/components/news/PopularList';
import React from 'react';


async function getData(){
  let slider = (await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`, { cache: 'no-store' })).json())['data']
  let featured = (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`)).json())['data']
  let popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
  let latest = (await (await fetch(`${process.env.HOST}/api/news/latest`)).json())['data']
  //let categories = [{"name":"ca"}]
  return {slider:slider, featured:featured, popular:popular, latest:latest}
}

const page = async() => {
  const data = await getData();
  return (
    <div>
      <PlainLayout>
       <Hero featured = {data['featured']} slider = {data['slider']}/>

      <div className='container mt-4'>
        <div className='row'>
          <h5>LATEST</h5>
          <hr/>
          <div className='col-md-9 col-lg-9 col-sm-12 col-12 px-3'>
            <NewsList latest={data['latest']}/>
          </div>

          <div className='col-md-3 col-lg-3 col-sm-12 col-12 px-3'>
              <PopularList popular={data['popular']}/>
          </div>
        </div>
      </div>

      </PlainLayout>
    </div>
  );
};

export default page;