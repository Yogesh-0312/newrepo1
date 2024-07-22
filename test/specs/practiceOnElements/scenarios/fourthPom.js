class fourthPom{
    get page1(){
        return browser.url('https://demowebshop.tricentis.com/')
    }
    get page2(){
        return $("(//a[contains(text(),'Apparel & Shoes')])[3]");
    }
    get page3(){
        return $("//select[@id='products-orderby']")
    }
    get page33(){
        return $$('options')
    }
    get view(){
        return $("//select[@id='products-pagesize']")
    }
    get viewdd(){
        return $$('options')
    }
    get disp(){
        return $("//select[@id='products-viewmode']")
    }
    get dispdd(){
        return $$('options')
    }
    get footer(){
        return $("//div[@class='pager']")
    }
    get shoes(){
        return $("//a[contains(text(),'Green')]")
    }
    get size(){
        return $('//select[@name="product_attribute_68_7_13"]')
    }
    get color(){
        return $('(//span[@class="color"])[2]')
    }
    get compare(){
        return  $('(//div[@class="compare-products"]/descendant::input[@type="button"])[1]')
    }
    get email(){
        return $('//div[@class="email-a-friend"]/descendant::input[@type="button"]')
    }
    get emailadd(){
        return $('//input[@class="friend-email"]')
    }
    get emailsd(){
        return $('//input[@class="your-email"]')
    }
    get emaimsg(){
        return $('//textarea[@class="personal-message"]')
    }
    get sendmail(){
        return $('//input[@name="send-email"]')
    }
    // get youtub(){
    //     return $("//a[contains(text(),'YouTube')]")
    // }
    // get search1(){
    //     return  browser.$('//input[@name="search_query" and @id="search"]')
    // }
  

    async clicktopage(){
     await this.page2.click();
     await browser.maximizeWindow();
     await this.page3.waitForDisplayed({timeout : 3000});
     await this.page3.selectByIndex(2);
    // here we r handling the drop downs and we also print the 
    // value present inside the dropdowns using tjhe log statements.
     let val = await $("//select[@id='products-orderby']");
     let opt  = await val.$$('option')

     for(let val of opt){
        const con =  val.getText();
        console.log(con);
     }
     await browser.pause(1000)
// 2nd drpdown
     await this.view.selectByIndex(2);
     let val1 = await $("//select[@id='products-pagesize']")
     let opt1 = await val1.$$('option')

     for (let val1 of opt1) {
          const op = val1.getText();
          console.log(op);
        }
        await browser.pause(2000);
// 3rd  drpdown
    await this.disp.selectByIndex(1)
  
    let val2 = await $("//select[@id='products-viewmode']")
    let opt2 = await val2.$$("option");
 
    for (const val2 of opt2) {
      const op1 = val2.getText();
    console.log(op1);
    }

   await this.footer.scrollIntoView();
   await this.shoes.click();
  // await browser.pause(2000);
   await this.size.waitForDisplayed({timeout : 3000});
   await this.size.selectByIndex(3);
   await this.color.click();
   await browser.pause(1000);
   await this.compare.click();
   await browser.back();
   await browser.pause(2000);
   await this.email.click();
   await browser.pause(3000);
   await this.emailadd.click();
   await this.emailadd.setValue('vivekpatel786@gmail.com');
   await this.emailsd.setValue('ykmishra659@gmail.com');
   await this.emaimsg.setValue('this is the best pair of shoes')
   await browser.pause(2000)
   await this.sendmail.click();
   await browser.pause(1000);
   await this.youtub.click();
   await browser.pause(3000);



     }
     
     async clicktopage2(){
    //  await this.youtub.click();
     await browser.newWindow('https://www.youtube.com/user/nopCommerce');
     await browser.maximizeWindow();

     const handle = await browser.getWindowHandles();
     await browser.switchToWindow(handle[1]);

     const search = browser.$('//input[@name="search_query" and @id="search"]')
     search.setValue('trance music')
    

     const dot = await browser.$('(//button[@aria-label="Search"])[1]')
     await dot.click();
     await browser.pause(2000);

     

    //   const allwindow= await browser.getWindowHandle();
    //   const newwindow = allwindow[1];
    //  await browser.switchToWindow(newwindow);
    //   const newtitle = await browser.getTitle();
    //   console.log(newtitle);
    //   const originalWindowHandle =  allwindow[0];
    //   await browser.switchToWindow(originalWindowHandle);
    //   const originalWindowTitle = await browser.getTitle();
    //   console.log('Original Window Title:', originalWindowTitle);


    //   await browser.pause(3000);

     }
}

export default new fourthPom();