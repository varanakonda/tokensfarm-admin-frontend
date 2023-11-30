import {DataProvider, fetchUtils} from "react-admin";
import {ITokensFarmResponse} from "./ITokensFarm";
import {type} from "os";

export const createDataProvider = (url = 'https://api.tokensfarm.com/', client = fetchUtils.fetchJson): DataProvider => ({
    getList: async (resource, params) => {
        const {page, perPage} = params.pagination

        let filters = '';

        // ACTIVE
        if(typeof params.filter.active === 'boolean') {
            filters += `&active=${params.filter.active}`
        }

        const sortVariants = ['apy', 'newest', 'days_left']
        if(typeof params.filter.sort === 'string' && sortVariants.includes(params.filter.sort)) {
            filters += `&sort=${params.filter.sort}`
        }

        if(typeof params.filter.farm_type === 'string') {
            filters += `&farm_type=${params.filter.farm_type}`
        }

        // SORT
        // sort=apy -order by apy
        // sort=newest - order by date
        // sort=days_left - order by days left
        // const sortVariants = ['apy', 'newest', 'days_left']
        // if(params.sort.field && sortVariants.includes(params.sort.field)) {
        //     filters += `&sort=${params.sort.field}&order=${params.sort.order.toLowerCase()}`
        // }

        console.log(`params.filter`, params.filter)
        console.log({filters})

        console.log(params)
        const {json} = await client<ITokensFarmResponse>(`${url}${resource}/list?page=${page}&page_size=${perPage}${filters}` )

        return Promise.resolve({
            data: json.farms,
            total: json.total_records,
            pageInfo: {
                hasNextPage: json.has_next,
                hasPreviousPage: json.has_previous,
            }
        })
    }
})