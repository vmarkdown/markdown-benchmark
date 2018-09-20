function loadMarkdonw() {
    return new Promise(function (resolve, reject) {
        fetch('src/test.md')
            .then((res)=>{
                return res.text()
            })
            .then((res)=>{
                resolve(res);
            });
    });
}

(async () => {

    const md = await loadMarkdonw();

    const markedSuite = new MarkedSuite(md);
    const remarkableSuite = new RemarkableSuite(md);
    const markdownItSuite = new MarkdownItSuite(md);

    function testParse() {

        var suite = new Benchmark.Suite('markdown-parse',{
            onStart: function onStart() {
                console.log('testParse onStart');
            },
            onComplete: function onComplete() {
                console.log('testParse onComplete');
            }
        });

        suite.add('marked#parse', function() {
            markedSuite.parse();
        });
        suite.add('remarkable#parse', function() {
            remarkableSuite.parse();
        });
        suite.add('markdownit#parse', function() {
            markdownItSuite.parse();
        });

        suite.on('cycle', function(event) {
            console.log(String(event.target));
        })
        .on('complete', function() {
            console.log('Fastest is ' + this.filter('fastest').map('name'));

            setTimeout(()=>{
                testRender();
            },1000);
        })
        .run({ 'async': true });

    }

    function testRender() {

        var suite = new Benchmark.Suite('markdown-render',{
            onStart: function onStart() {
                console.log('testRender onStart');
            },
            onComplete: function onComplete() {
                console.log('testRender onComplete');
            }
        });

        suite.add('marked#render', function() {
            markedSuite.render();
        });
        suite.add('remarkable#render', function() {
            remarkableSuite.render();
        });
        suite.add('markdownit#render', function() {
            markdownItSuite.render();
        });

        suite.on('cycle', function(event) {
            console.log(String(event.target));
        })
        .on('complete', function() {
            console.log('Fastest is ' + this.filter('fastest').map('name'));

            setTimeout(()=>{
                testHTML();
            },1000);
        })
        .run({ 'async': true });

    }

    function testHTML() {

        var suite = new Benchmark.Suite('markdown-html',{
            onStart: function onStart() {
                console.log('testHTML onStart');
            },
            onComplete: function onComplete() {
                console.log('testHTML onComplete');
            }
        });

        suite.add('marked#html', function() {
            markedSuite.html();
        });
        suite.add('remarkable#html', function() {
            remarkableSuite.html();
        });
        suite.add('markdownit#render', function() {
            markdownItSuite.html();
        });

        suite.on('cycle', function(event) {
            console.log(String(event.target));
        })
            .on('complete', function() {
                console.log('Fastest is ' + this.filter('fastest').map('name'));
            })
            .run({ 'async': true });

    }

    testParse();


})();