    describe("practice for the prepration",async()=>{
    it("practice for the prepration",async()=>{
         
        // THIS IS FOR THE MULTIPLE WINDOW HANDLE.. 
        // and here we get the windows title also ...

        await browser.url('https://demowebshop.tricentis.com/');
        await browser.pause(2000);

        await browser.newWindow('https://www.youtube.com/user/nopCommerce');
        await browser.pause(2000);

        const handle = await browser.getWindowHandles(); 
        await browser.switchToWindow(handle[1]);

        const search = await browser.$('//input[@name="search_query" and @id="search"]')
        await search.setValue('trance music')

        const clic= await browser.$('//button[@id="search-icon-legacy"]')
        await clic.click();
                 
        const title1 = await browser.getTitle();
        console.log(title1);
        await browser.pause(3000);

        await browser.switchToWindow(handle[0]);
        await browser.pause(4000);

        const title0 = await browser.getTitle();
        console.log(title0);
      
    })
})