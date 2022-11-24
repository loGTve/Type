import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import * as cheerio from 'cheerio';

const address = 'https://playtoearn.net/blockchaingames?sort=socialscore_24h&direction=desc&page=1';

//PageList받기
//tbody_list안에 있는 게임 이름 50개 받아오기
//For 이용, 1~35페이지. 1~50번째 게임 이름 받아오기.
//--다른 정보들도 같이 받아오기.

//엑셀 문서작성
(async () => {
    let testList: string[] = [];
    let pageNum = 1;

    const client = applyCaseMiddleware(axios.create());

    //axios (address) with cheeerio
    const req = await client.get(address);
    const $ = cheerio.load(req.data);

    //Get PageNumber str to num
    const $page = $('a[class=page-link]').eq(-2).text();
    pageNum = Number($page);
    

    //span태그 하나만 가져오기. 


/*
    $('div[class=dapp_name]').each(function(i, element) {
        testList[i] = $(element).text();
    }
*/
    
//    console.log("Number Of $Page, Type = " + $Page + " " + typeof $Page + "\nType, Page Num is = " + typeof PageNum + " " + PageNum);

})();






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