import { expect } from '@wdio/globals'

describe('Open Screen using current Activity ', () => {
  
    it('Navigate to App/Search/Invoke Search Screen', async () => {  
    
        // await $('android=new UiSelector().text("SKIP")').click();
       await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis" + ".view.ExpandableList1",
        );

    // current activity  ".view.ExpandableList1" 
    // "io.appium.android.apis"


        // ".view.Gallery1"

        await driver.pause(3000);
        const peopleNamesElement = await driver.$('android=new UiSelector().text("People Names")');

        await peopleNamesElement.longPress({duration:2000});
         await driver.$('android=new UiSelector().text("Sample menu")').click();
                 await driver.pause(3000);
    })

})

// npx wdio run ./config/wdio.android.conf.ts --spec ./test/specs/android/longPress.e2e.ts