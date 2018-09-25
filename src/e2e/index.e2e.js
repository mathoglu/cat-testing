module.exports = {

    before: function(browser, done) {
        browser.perform(function(){done();});
    },

    after: function(browser, done){
        browser.end(done);
    },

    'Should show cat button on page load' : function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('body', 10000)
            .assert.elementPresent('button.cat-button');
        },
    'Should not show cat canvas on page load' : function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('body', 10000)
            .assert.elementNotPresent('img.cat-canvas');
        },
    'Cat button click should get and show image' : function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('button.cat-button', 10000)
            .click('button.cat-button')
            .waitForElementVisible('img.cat-canva', 10000);
    }
};