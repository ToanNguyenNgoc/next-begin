import axiosClient from "./axiosClient";
import { pickBy, identity } from "lodash";

class ServicePromo {
    //services promo
    getServicesPromo = async (values: any) => {
        const url = `/services`;
        const paramsOb = {
            page: values.page || 1,
            limit: 30,
            "filter[keyword]": values.keyword,
            "filter[min_price]": values.min_price || 1000,
            "filter[max_price]": values.max_price,
            "filter[special_min_price]": values.special_min_price || 1000,
            "filter[special_max_price]": values.special_max_price,
            "filter[discount_percent]": values.discount_percent,
            "filter[special_price]": values.special_price,
            "filter[is_momo_ecommerce_enable]": true,
            "filter[location]": values.sort === "distance",
            "sort": values.sort === "distance" ? null : values.sort,
        };
        const params = pickBy(paramsOb, identity);
        return axiosClient.get(url, { params });
    };
}
const servicePromoApi = new ServicePromo();
export default servicePromoApi;
