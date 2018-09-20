function MarkdownItSuite(md) {
    this.md = md;
    this.markdown = new markdownit();

    this.markdown.render2 = function (tokens, env) {
        env = env || {};
        return this.renderer.render(tokens, this.options, env);
    };
}

MarkdownItSuite.prototype.parse = function () {
    const tokens = this.markdown.parse(this.md, { references: {} });
    this.tokens = tokens;
};


MarkdownItSuite.prototype.render = function () {
    const html = this.markdown.render2(this.tokens);
    this.html = html;
};

MarkdownItSuite.prototype.html = function () {
    this.markdown.render(this.md);
};