import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import * as cheerio from 'cheerio';

const address = 'https://playtoearn.net/blockchaingames?sort=socialscore_24h&direction=desc&page=';

//* PageList받기
//tbody_list안에 있는 게임 이름 50개 받아오기 (Only First span Tag)
//For 이용, 1~pageNum페이지. 1~50번째 게임 이름 받아오기.
//--다른 정보들도 같이 받아오기.
//엑셀 문서작성

(async () => {
    let testList: string[] = [];
    let pageNum = 1;

    const client = applyCaseMiddleware(axios.create());

    //axios (address) with cheerio for page
    const req = await client.get(address+pageNum);
    const $ = cheerio.load(req.data);

    //Get PageNumber str to num
    const $page = $('a[class=page-link]').eq(-2).text();
    pageNum = Number($page);


    //Get axios from 1 to pageNum
    for(let page = 1; page <= pageNum; page++){
        const titleReq = await client.get(address+page);
        const $$ = cheerio.load(titleReq.data);

        const test = $$('div[class=dapp_name]').children('span:nth-child(1)').toArray().map((x) => { return $(x).text()});
        testList.push(test)
        setTimeout(() => console.log(page + "번 페이지 진행 중\n"), 5000);
    } 
})();

/*
$('div[class=dapp_name]').children('span:nth-child(1)').each(function(i, element) {
        testList[i] = $(element).text();
    })

    console.log(a);
    
*/
    
//    console.log("Number Of $Page, Type = " + $Page + " " + typeof $Page + "\nType, Page Num is = " + typeof PageNum + " " + PageNum);








/*
$('div[class=dapp_name]').each(function(i, element) {
    testList[i] = $(element).text();
}
    const $PageList = $('a[class=page-link]').each(function(i, element) {});
*/






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