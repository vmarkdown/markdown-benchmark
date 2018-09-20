function RemarkableSuite(md) {
    this.md = md;
    this.remarkable = new Remarkable('full', {
        html:         false,        // Enable HTML tags in source
        xhtmlOut:     false,        // Use '/' to close single tags (<br />)
        breaks:       false,        // Convert '\n' in paragraphs into <br>
        langPrefix:   'language-',  // CSS language prefix for fenced blocks
        linkify:      true,         // autoconvert URL-like texts to links
        linkTarget:   '',           // set target to open link in

        // Enable some language-neutral replacements + quotes beautification
        typographer:  false,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
        quotes: '“”‘’'
    });


    this.remarkable.render2 = function (tokens, env) {
        env = env || {};
        return this.renderer.render(tokens, this.options, env);
    };

}

RemarkableSuite.prototype.parse = function () {
    const tokens = this.remarkable.parse(this.md, { references: {} });
    this.tokens = tokens;
};


RemarkableSuite.prototype.render = function () {
    const html = this.remarkable.render2(this.tokens);
    this.html = html;
};