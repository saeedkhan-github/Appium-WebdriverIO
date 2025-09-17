// const { config }=  require('./wdio.shared.conf');
import { config as sharedConfig } from './wdio.shared.conf';
// const path = require ('path');
import path from 'path';

export const config = {
    ...sharedConfig,
    port: 4724,
    specs: [
        './test/specs/**/android/*.ts'
    ],
    capabilities: [
        {
        platformName: 'Android',
        'appium:deviceName': 'Pixel 6a',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        // 'appium:udid': 'emulator-5554',
        'appium:app': path.join(process.cwd(), './app/ApiDemos.apk'),
        'appium:autoGrantPermissions': true
    }]
};
 

