import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import { load } from 'cheerio';

const address = 'https://playtoearn.net/blockchaingames?sort=socialscore_24h&direction=desc&page=';

//* PageList받기
//tbody_list안에 있는 게임 이름 50개 받아오기 (Only First span Tag)
//For 이용, 1~pageNum페이지. 1~50번째 게임 이름 받아오기.
//--다른 정보들도 같이 받아오기.
//엑셀 문서작성

//IIFE
(async () => {
    let pageNum = 1; 


    const client = applyCaseMiddleware(axios.create());

    //axios (address) with cheerio for page
    const req = await client.get(address+pageNum); // 1
    const $ = load(req.data);

    //Get PageNumber str to num
    const $page = $('a[class=page-link]').eq(-2).text();
    pageNum = Number($page);  //pageNum = 36

    type TypeOfInfo = {
        gameTitle: string[][],
        gameBlockChain: string[][]
    }

    const tableSector = 'div[class=indexmaintable.indexpage] > tbody';

    //Get axios from 1 to pageNum
    for(let page = 1; page <= pageNum; page++){
        const InfoRequest = await client.get(address+page);
        const $ = load(InfoRequest.data);
        
        const gameInfo = $(tableSector).map((result) => {
            gameTitle: $(result).find('div[class=dapp_name]').children('span:nth-child(1)').toArray().map((x) => { return $(x).text().trim()});
            gameBlockChain: $(result).find('')
            gameStatus: $(result).find('a[data-toggle=tooltip]')
            gameNFT: $(result).find('')
            gameF2P: $(result).find('')
            gameP2E: $(result).find('')
            gameSocial24h: $(result).find('span[class=dailychangepercentage]').text().trim();
        })


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

    let gameTitle: string[][] = [];
    let gameBlockChain: string[][] = [];

    type TypeOfInfo = {
        gameTitle: string[][],
        gameBlockChain: string[][]
    }

    let infoLists: TypeOfInfo ={
        gameTitle: gameTitle,
        gameBlockChain: gameBlockChain,

    }

        const InfoRequest = await client.get(address+page);
        const $$ = cheerio.load(InfoRequest.data);

        //use '.map', type ~ for get infos
        const getTitleReq = $$('div[class=dapp_name]').children('span:nth-child(1)').toArray().map((x) => { return $$(x).text()});
        gameTitle.push(getTitleReq);
 
        const getBlockChainReq = $$('tbody > td:nth-child(5) > a[data-toggle=tooltip]').toArray().map((a) => { return $$(a).text()});
        gameStatus.push(getBlockChainReq);
        console.log(gameBlockChain);

        const

*/





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