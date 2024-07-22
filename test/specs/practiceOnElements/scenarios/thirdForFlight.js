class thirdForFlight{
    get page1(){
        return browser.url('https://blazedemo.com/')
    }
    get first(){
        return $('//select[@class="form-inline"]')
    }
    get second(){
        return $('//select[@name="toPort"]')
    }
    get third(){
        return $('//input[@type="submit"]')
    }
    get fourth(){
        return $('(//input[@type="submit"])[2]')
    } 
     get fifth(){
        return $('//input[@id="inputName"]')
     }
     get sixth(){
        return $('//input[@id="address"]')
     }
     get seventh(){
        return $('//input[@id="address"]')
     }
     get eighth(){
        return $('//input[@id="state"]')
     }
     get ninth(){
        return $('//input[@id="zipCode"]')
     }
     get tenth (){
        return $('//select[@class="form-inline"]')
     }
     get eleventh(){
        return $('//input[@id="creditCardNumber"]')
     }
     get twelth(){
        return browser.$('//input[@id="creditCardMonth"]')
     }
     get thirtenth(){
        return browser.$('//input[@id="creditCardYear"]')
     }
     get fourtenth(){
        return browser.$('//input[@type="submit"]')
     }
    get fifteenth(){
        return browser.$('//a[text()="home"]')
    }
    get sixteenth(){
        return browser.$('//a[contains(@class,"btn")]')
    }
    get sevententh(){
        return browser.$('//input[@id="email"]')
    }
    get eightenth(){
        return browser.$('//input[@id="password"]')
    }
    get ninteenth(){
        return browser.$('//button[@type="submit"]')
    }
   
        async clicktomethod(){
            await this.first.selectByVisibleText('Boston')
            await this.second.selectByIndex(5)
            await this.third.click();
            await this.fourth.click();
            await browser.pause(2000)
            await this.fifth.setValue('yogesh mishra')
            await this.sixth.setValue('Exotica apartment,btm 1nd stage')
            await this.seventh.setValue('Banglore')
            await this.eighth.setValue('Karnataka')
            await this.ninth.setValue('565755')
            const elem = await browser.$('//input[@type="submit"]')
            elem.scrollIntoView()
            await this.tenth.selectByIndex(1)
            await this.eleventh.setValue('788457882121454')
            await this.twelth.setValue("9")
            await this.thirtenth.setValue('2024')
            await this.fourtenth.click();
            await browser.scroll(0,800)
            await browser.pause(2000)
            await browser.scroll(0,-800) 
            await browser.back()
            await browser.back()
            await this.fifteenth.click();
            // await this.sixteenth.click();
            await this.sevententh.setValue('ykmishra659@gmail.com')
            await this.eightenth.setValue('yogesh123')
            await this.ninteenth.click();
            await browser.pause(2000);






        }
        
    }


export default new thirdForFlight();
