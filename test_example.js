import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
		.typeText('#developer-name', 'Camilo')
		.click('#remote-testing')
		.click('#reusing-js-code')
		.click('#tried-test-cafe')
		.typeText('#comments','Texto de prueba: sdajdnskjadkjas')
		.click('#submit-button')

		.expect(Selector('#article-header').innerText).eql('Thank you, Camilo!');
aa
    
});