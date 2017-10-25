const scrape = require('node-js-web-scraper');

// clear the screen
console.log('\033[2J');
// start this thing
scrape({
    scrapesDirectory: 'scrapes/',
    outputDirectory: 'public/static/json/',
    outputFileName:'timeline.json',
    scrapes: [{
        id: 'github',
        url: 'https://github.com/davelinke?tab=repositories',
        type: 'html',
        itemsPath: '#user-repositories-list li',
        items: {
            source: {
                selector: 'title',
                convert: x => 'github'
            },
            image: {
                selector: 'title',
                convert: x => false
            },
            title: '[itemprop="name codeRepository"]',
            url: {
                selector: '[itemprop="name codeRepository"]',
                attr: 'href',
                convert: x => {
                    return 'https://github.com' + x;
                }
            },
            description: '[itemprop="description"]',
            date: {
                selector: 'relative-time',
                attr: 'datetime',
                convert: x => {
                    let zeDate = new Date(x);
                    return zeDate.toISOString();
                }
            }
        }
    },
    {
        id: 'codepen',
        url: 'https://codepen.io/davelinke/public/feed',
        type: 'xml',
        itemsPath: 'rss > channel > 0 > item',
        items: {
            source: () => { return 'codepen' },
            image: () => { return false },
            title: (item) => { return item['title'][0] },
            url: (item) => { return item['link'][0] },
            description: (item) => {
                return item['description'][0].split('\n')[11].trim();
            },
            date: (item) => {
                let zeDate = new Date(item['dc:date'][0].split('\n')[1].trim());
                return zeDate.toISOString();
            }
        }
    },
    {
        id: 'behance',
        url: 'https://www.behance.net/feeds/user?username=davidlinke',
        type: 'xml',
        itemsPath: 'rss > channel > 0 > item',
        items: {
            source: () => { return 'behance' },
            image: (item) => { return item['description'][0].split("'")[1] },
            title: (item) => { return item['title'][0] },
            url: (item) => { return item['link'][0] },
            description: (item) => { return item['description'][0].split('<br />')[1].trim() },
            date: (item) => {
                let zeDate = new Date(item['pubDate'][0]);
                return zeDate.toISOString();
            }
        }
    }, {
        id: 'medium',
        url: 'https://medium.com/feed/@davelinke',
        type: 'xml',
        itemsPath: 'rss > channel > 0 > item',
        items: {
            source: () => { return 'medium' },
            image: (item) => { return false },
            title: (item) => { return item['title'][0] },
            url: (item) => { return item['link'][0] },
            description: (item) => {
                const Entities = require('html-entities').AllHtmlEntities;
                const entities = new Entities();
                let desc = item['content:encoded'][0].split('<img src="https://medium.com/_/stat?event=post.clientViewed')[0].trim();
                desc = entities.decode(desc);
                desc = desc.replace(/(<([^>]+)>)/ig,"");
                return desc;
            },
            date: (item) => {
                let zeDate = new Date(item['pubDate'][0]);
                return zeDate.toISOString();
            }
        }
    }
    ]
});
