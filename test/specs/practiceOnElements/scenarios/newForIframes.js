describe ("practice for the iframes",async()=>{
    it("practice for the iframes",async()=>{

        await browser.url('https://demoapps.qspiders.com/')
        
        const ui = await browser.$("//p[contains(text(),'UI Testing Concepts')]")
        await ui.click();
        await browser.pause(3000);

        // const fram = await browser.$('(//section[@class="poppins text-[15px]"])[6]')
        // await fram.click();

        // const fram1 = await browser.$('//section[@class="poppins text-[14px]"]')
        // await fram1.click();

        // const iframe = await browser.$("(//a[contains(text(),'Multiple iframe')])[1]"); 
        // await browser.switchToFrame(iframe);
        // await browser.switchContext.click();

        // // const un = await browser.$('//input[@id="username" and @name="username"]')
        // // await un.setValue('yogesj012')
       
        // await browser.$('//input[@name="password"]').setValue("mishra042")
        await browser.pause(2000);
    })
})