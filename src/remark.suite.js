function RemarkSuite(md) {
    this.md = md;
    this.markdown = vremark();
}

RemarkSuite.prototype.parse = function () {
    const tokens = this.markdown.parse(this.md);
    this.tokens = tokens;
};

RemarkSuite.prototype.render = function () {
    // const html = this.remarkable.render2(this.tokens);
    // this.html = html;
};

RemarkSuite.prototype.html = function () {
    // this.remarkable.render(this.md);
};