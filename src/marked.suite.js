function MarkedSuite(md) {
    this.md = md;
}

MarkedSuite.prototype.parse = function () {
    const tokens = marked.lexer(this.md);
    this.tokens = tokens;
};


MarkedSuite.prototype.render = function () {
    const html = marked.parser(this.tokens);
    this.html = html;
};

MarkedSuite.prototype.html = function () {
    marked(this.md);
};