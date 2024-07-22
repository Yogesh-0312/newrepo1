import thirdForFlight from "./thirdForFlight.js"

describe ("flight page",async()=>{
    it("booking",async()=>{
        await thirdForFlight.page1
        await browser.pause(3000)
        await thirdForFlight.clicktomethod();
        await browser.pause(2000)

    })
})