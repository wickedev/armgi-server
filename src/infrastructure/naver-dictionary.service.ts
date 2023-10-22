
import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { SearchResponse } from './interfaces';


export class NaverDictionaryService {
    instance: AxiosInstance;

    constructor() {
        this.instance = Axios.create({
            baseURL: 'https://en.dict.naver.com/api3/enko',
            headers: {
                "content-type": "application/json",
                referer: "https://en.dict.naver.com/",
                "x-requested-with": "XMLHttpRequest",
                "accept-encoding": "gzip, deflate, br",
                "alldict-locale": "ko",
                "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
            }
        });
    }

    search(query: string): Promise<AxiosResponse<SearchResponse>> {
        return this.instance.get('/search', {
            params: {
                query,
                m: 'mobile',
                lang: 'ko'
            }
        })
    }
}