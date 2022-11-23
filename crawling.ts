import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import * as cheerio from 'cheerio';

const address = 'https://playtoearn.net/blockchaingames?sort=socialscore_24h&direction=desc&page=';

//PageList받기
//tbody_list안에 있는 게임 이름 50개 받아오기
//For 이용, 1~35페이지. 1~50번째 게임 이름 받아오기.
//--다른 정보들도 같이 받아오기.

//엑셀 문서작성
(async () => {
    let testList: string[] = [];

    const client = applyCaseMiddleware(axios.create());
    const Req = await client.get(address);
    const $ = cheerio.load(Req.data);
    const $PageList = $('a[class=page-link]').each(function(i, element) {

    });
    const CalledData = $('div[class=dapp_name]').each(function(i, element) {
        testList[i] = $(element).text();
    });
    console.log(testList);
})();










/*
(async () => {
    let i = 1;
    
        const Req = await axios.get(address)
        const resp = Req.data;
        const $ = cheerio.load(resp);
        const CalledData = $('body > div.container > div.indexmaintable.indexpage > div > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > a > div.dapp_name > span:nth-child(1)').text();
        
        console.log(CalledData);




})();

*/