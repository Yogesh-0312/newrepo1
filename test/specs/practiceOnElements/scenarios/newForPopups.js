describe("popups",async()=>{
it("popups",async()=>{
await browser.url("https://demoapps.qspiders.com")
await browser.pause(2000);

const  lin = await browser.$("//p[contains(text(),'UI Testing Concepts')]")
await lin.click(); 
const pop = await browser.$('(//section[@class="poppins text-[15px]"])[2]')
await pop.click(); 
const triggerAlertButton = await browser.$('#trigger-alert');
        await triggerAlertButton.click();
await browser.pause(3000);


})

})