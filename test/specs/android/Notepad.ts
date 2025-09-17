describe('Load the ColorNote Notepad App', () => {
  
    it.skip('The Welcom Screen Test', async () => {  
        const notes = await $('id=com.socialnmobile.dictapps.notepad.color.note:id/textTitle');
        await notes.waitForDisplayed({ timeout: 5000 });
        await expect(await notes.getText()).toContain('Welcome to ColorNote');

        // click on the next button 
        await $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start').click();

        await $('id=com.socialnmobile.dictapps.notepad.color.note:id/textTitle').getText().then(async (text) => {
            expect(text).toContain('Create a note');  
        });
        await $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_next').click();
        await driver.pause(5000);
    })
    it('Skip the Welcom Screen',async()=>{

      await $('android=new UiSelector().text("SKIP")').click();
      expect(await $('id=com.socialnmobile.dictapps.notepad.color.note:id/empty_text').getText()).toContain('Add note');
        await driver.pause(5000);
    })

    it('Add Note TestCase',async()=>{
        // await driver.startActivity('com.socialnmobile.dictapps.notepad.color.note','com.socialnmobile.dictapps.notepad.color.note'+"com.socialnmobile.colornote.activity.Main");
        await $('id=com.socialnmobile.dictapps.notepad.color.note:id/empty_text').click();
        // click on the add note button
        // await $('.android.widget.LinearLayout').click();
        await driver.$('android=new UiSelector().text("Text")').click();
        await driver.pause(5000);
        

    })

})