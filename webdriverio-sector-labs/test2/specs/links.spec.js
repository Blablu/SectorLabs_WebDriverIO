const Page = require('../pageobjects/links.page');

describe('Bayut homepage links', () => {
    it('should fetch menu links and visit each page', async () => {
        
        await Page.open("");

        const toRentButton = await $('.d8530318=To Rent');
        await toRentButton.click();

        const links = await $$('._22762832');
        links.forEach(async (element) => {
            await element.click();
        });

        
    });
});