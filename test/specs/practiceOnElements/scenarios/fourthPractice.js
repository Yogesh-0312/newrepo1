import fourthPom from "./fourthPom.js";

describe("practice",async()=>{
    it.skip("practice",async()=>{

        await fourthPom.page1
        await browser.pause(2000)
        await fourthPom.clicktopage();
        await browser.pause(2000)
        await fourthPom.page1
        await browser.scroll(0,800)
        await browser.pause(3000)
        
    })
    it("practice",async()=>{
        await fourthPom.page1
        await fourthPom.clicktopage2();
         await browser.pause(3000)
    })
    
})