exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    framework: 'cucumber',
    specs: [
        '../features/student-search.feature'
    ],
    capabilities: {
        browserName: 'chrome'
    }
};