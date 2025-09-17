

describe('Open Screen using current Activity ', () => {
  
    it('Horizantal Scroll the Screen', async () => {  
    

        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis" + ".view.Gallery1",
        );

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(5000);

    })

})