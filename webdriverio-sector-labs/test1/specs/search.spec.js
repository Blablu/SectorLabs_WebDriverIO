const Page = require('../pageobjects/bayut.page');

describe('Bayut property search', () => {
    it('should only show Dubai Marina locations', async () => {
        await Page.open();

    //get listed elements by class
    const listingElements = await $$("._7afabd84");
    await expect(listingElements).toHaveTextContaining("Dubai Marina");

    });
});


