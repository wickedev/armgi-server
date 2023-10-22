import ky from 'ky';

const url = 'https://en.dict.naver.com/api3/enko';
const query = process.argv[2] || '';

const api = ky.create({
     prefixUrl: url,
	headers: {
          "content-type": "application/json",
          referer: "https://en.dict.naver.com/",
          "x-requested-with": "XMLHttpRequest",
          "accept-encoding": "gzip, deflate, br",
          "alldict-locale": "ko",
          "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
     }
});

const res = await api.get('search', {
     mode: "cors",
     cache: "default",
     referrerPolicy: "unsafe-url",
     searchParams: {
          query: query,
          m: 'mobile',
          lang: 'ko'
     }
}).json()

console.log(res.searchResultMap.searchResultListMap.WORD.items
     .flatMap((item => item.meansCollector))
     .flatMap(collector => collector.means)
     .map((mean => `- ${mean.value}`))
     .join('\n'));
console.log(query);
