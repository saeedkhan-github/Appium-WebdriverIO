describe('Date widget test', () => {


    it.skip('should open the date widget and select a date', async () => { 


         await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis" + ".view.DateWidgets1"
        );
        // await driver.startActivity('"io.appium.android.apis"','"io.appium.android.apis.view.DateWidgets"+".');
        const currentDate= await $('id:io.appium.android.apis:id/dateDisplay');

        const date = await currentDate.getText();

        await $('id:io.appium.android.apis:id/pickDate').click();
        // console.log("Current Date:--> ", date);
        
        await driver.pause(5000);
    })


    it('should open the date widget and verify today\'s date and month are highlighted', async () => { 
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.DateWidgets1"
        );
        await $('id:io.appium.android.apis:id/pickDate').click();
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('default', { month: 'long' }); // e.g., 'May'
        // Check today's date is selected
        const daySelector = `//android.view.View[@text='${day}']`;
        const todayElement = await $(daySelector);
        await todayElement.waitForDisplayed({ timeout: 5000 });
        const isSelected = await todayElement.getAttribute('selected');
        await expect(isSelected).toBe('true');
        // Check the current month is displayed in the calendar header
        const monthHeader = await $('//android.widget.TextView[contains(@resource-id, "date_picker_header_date") or contains(@resource-id, "date_picker_header_month")]');
        const monthText = await monthHeader.getText();
        await expect(monthText.toLowerCase()).toContain(month.toLowerCase());
    });


})