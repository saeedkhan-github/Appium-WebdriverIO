export default class NoteScreen {
    // Selectors
    private get welcomeTitle() { return $('id=com.socialnmobile.dictapps.notepad.color.note:id/textTitle') }
    private get startButton() { return $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start') }
    private get nextButton() { return $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_next') }
    private get skipButton() { return $('android=new UiSelector().text("SKIP")') }
    private get addNoteText() { return $('id=com.socialnmobile.dictapps.notepad.color.note:id/empty_text') }
    private get textNoteOption() { return $('android=new UiSelector().text("Text")') }

    // Actions
    async getWelcomeText(): Promise<string> {
        await this.welcomeTitle.waitForDisplayed({ timeout: 5000 });
        return await this.welcomeTitle.getText();
    }

    async clickStartButton(): Promise<void> {
        await this.startButton.click();
    }

    async clickNextButton(): Promise<void> {
        await this.nextButton.click();
    }

    async skipWelcomeScreen(): Promise<void> {
        await this.skipButton.click();
    }

    async getAddNoteText(): Promise<string> {
        return await this.addNoteText.getText();
    }

    async clickAddNote(): Promise<void> {
        await this.addNoteText.click();
    }

    async selectTextNote(): Promise<void> {
        await this.textNoteOption.click();
    }

    async waitForElement(timeout = 5000): Promise<void> {
        await driver.pause(timeout);
    }
}

// export default new NoteScreen();