// const { config }=  require('./wdio.shared.conf');
import { config as sharedConfig } from './wdio.shared.conf';
// const path = require ('path');
import path from 'path';

export const config = {
    ...sharedConfig,
    port: 4724,
    specs: [
        './test/specs/**/ios/*.ts'
    ],
    capabilities: [{
        platformName: 'IOS',
        'appium:deviceName': 'iPhone 15',
        'appium:platformVersion': '17.2',
        'appium:automationName': 'XCUITest',
        // 'appium:udid': 'emulator-5554',
        'appium:app': path.join(process.cwd(), './app/IOS/UIKitCatalog.app'),
        // 'appium:autoGrantPermissions': true
    }]
};
 