const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

let url = 'http://127.0.0.1:5500/02.Book-Library/';

function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

let books = {
    1: {
        author: 'me',
        title: 'narnia'
    },
    2: {
        author: 'him',
        title: 'POTTER'
    }
}

let createBook = {
    1: {
        author: 'me',
        title: 'narnia'
    },
    2: {
        author: 'him',
        title: 'POTTER'
    },
    3: {
        author: 'next',
        title: 'star wars',
        _id: 3
    }
}

let updateBook = {
    author: 'new',
    title: 'star wars2',
}

function createRow([id, book]) {
    const result = `
    <tr data-id="${id}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    </tr>`;
    return result;
}



describe('E2E tests', function () {
    this.timeout(10000)
    before(async () => { browser = await chromium.launch(); });
    // before(async () => { browser = await chromium.launch({ headless: false, slowMo: 3000 }); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    describe('get books', () => {
        it('should get all the books from server', async () => {
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(books)));
            await page.goto(url);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#loadBooks'),
            ]);

            let result = await response.json();
            expect(result).to.eql(books);
        });

        it('should show all the book in tbody when load books is clicked', async () => {
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(books)));
            await page.goto(url);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#loadBooks'),
            ]);

            let tb = await page.$eval('tbody', (tbody) => tbody.innerHTML);
            const rows = Object.entries(books)
                .map(createRow)
                .join('');

            expect(tb).to.eql(rows);
        });
    });

    describe('create book', () => {
        it('should call server with correct data', async () => {
            let data = null;
            let expectedResult = {
                author: 'next',
                title: 'star wars'
            };

            await page.route('**/jsonstore/collections/books', (route, request) => {
                if (request.method().toLowerCase() === 'post') {
                    data = request.postData();
                    route.fulfill(fakeResponse(createBook))
                }
            });

            await page.goto(url);
            await page.fill('#createForm input[name="author"]', expectedResult.author);
            await page.fill('#createForm input[name="title"]', expectedResult.title);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#createForm button'),
            ]);

            let result = await JSON.parse(data);
            expect(result).to.eql(expectedResult);
        });

        it('should clear form inputs', async () => {
            let data = null;
            let expectedResult = {
                author: 'next',
                title: 'star wars'
            };

            await page.route('**/jsonstore/collections/books', (route, request) => {
                if (request.method().toLowerCase() === 'post') {
                    data = request.postData();
                    route.fulfill(fakeResponse(createMesseges))
                }
            });

            await page.goto(url);
            await page.fill('#createForm input[name="author"]', expectedResult.author);
            await page.fill('#createForm input[name="title"]', expectedResult.title);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#createForm button'),
            ]);

            let authorInput = await page.$eval('#authorInput', el => el.value);
            let titleInput = await page.$eval('#titleInput', el => el.value);

            expect(authorInput).to.eql('');
            expect(titleInput).to.eql('');
        });
    });
    describe('edit book', () => {
        it('should update server with correct data', async () => {
            let data = null;
            let expectedResult = {
                author: 'new',
                title: 'star wars2',
                _id: 3
            };

            await page.route('**/jsonstore/collections/books' + expectedResult._id, (route, request) => {
                if (request.method().toLowerCase() === 'put') {
                    data = request.putData();
                    route.fulfill(fakeResponse(updateBook))
                }
            });

            await page.goto(url);

            const [res] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('#loadBooks'),
                page.click('.editBtn'),
            ]);

            let result = await JSON.parse(data);
            expect(result).to.eql(expectedResult);
        });


    });
});
