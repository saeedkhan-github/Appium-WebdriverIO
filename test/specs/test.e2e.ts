

describe('Open Screen using current Activity ', () => {
  
    it('Navigate to App and Scroll to the Element', async () => {  
    

        await $('~App').click();

        await $('~Activity').click();

        async function scrollTextIntoView(text:string) {
          const selector = `new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`;
             return await $(`android=${selector}`);
        }
        const myElement = await scrollTextIntoView("Secure Surfaces");
        await myElement.click();
        // await $('~Secure Surfaces').click();

        await driver.pause(3000);

    })

})