Retrie
======
JS port of [@dankogai](http://twitter.com/dankogai)'s [RegexpTrie](http://search.cpan.org/~dankogai/Regexp-Trie-0.02/lib/Regexp/Trie.pm), written in [Coco](http://satyr.github.com/coco/).

usage
-----
    RegExp('^' + Retrie(['a', 'ab', 'ac', 'd']))  //=> /^(?:a[bc]?|d)/
    RegExp('^' + Retrie(['abcd'], true))          //=> /^a(?:b(?:cd?)?)?/
