import { GetStaticPathsContext, GetStaticProps } from 'next';
import React from 'react';
import servicePromoApi from '../api/axios/services';

interface IProsProductPage {
    services: any[]
}

function index(props: IProsProductPage) {
    const { services } = props;


    return (
        <div>
            {
                services.map((item: any, index: number) => (
                    <li key={index}>
                        {item.service_name}
                    </li>
                ))
            }
        </div>
    );
}

export default index;

export const getStaticProps: GetStaticProps<IProsProductPage> = async (context: GetStaticPathsContext) => {
    const res = await servicePromoApi.getServicesPromo({
        page: 1
    })
    const hits: any[] = await res.data.data.hits
    return {
        props: {
            services: hits.map(item => {
                return {
                    service_name: item.service_name
                }
            })
        }
    }
}