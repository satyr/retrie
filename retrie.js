(function(){
  (typeof exports != 'undefined' && exports !== null ? exports : this).Retrie = (function(){
    var _proto = _Class.prototype;
    function _ctor(){} _ctor.prototype = _proto;
    function _Class(strings, asPrefixes){
      var str, _i, _len, _this = new _ctor;
      _this.tree = {};
      if (strings) {
        for (_i = 0, _len = strings.length; _i < _len; ++_i) {
          str = strings[_i];
          _this.add(str, asPrefixes);
        }
      }
      return _this;
    }
    _proto.add = function(string, asPrefixes){
      var ref, i, _to, _name;
      ref = this.tree;
      for (i = 0, _to = string.length; i < _to; ++i) {
        ref = ref[_name = string.charAt(i)] || (ref[_name] = asPrefixes
          ? {
            '': ''
          }
          : {});
      }
      if (!asPrefixes) {
        ref[''] = '';
      }
      return this;
    };
    _proto.toString = function(){
      var meta;
      meta = /[.?*+^$|()\{\[\\]/;
      function recur(it){
        var chr, alt, cc, q, sub, cconly, re;
        LEAF_CHECK:
        if ('' in it) {
          for (chr in it) {
            if (chr) {
              break LEAF_CHECK;
            }
          }
          return '';
        }
        alt = [];
        cc = [];
        for (chr in it) {
          if (!chr) {
            q = true;
            continue;
          }
          ((sub = recur(it[chr])) ? alt : cc).push(chr.replace(meta, '\\$&') + sub);
        }
        cconly = !alt.length;
        cc.length && alt.push(cc[1]
          ? "[" + cc.join('') + "]"
          : cc[0]);
        re = alt[1]
          ? "(?:" + alt.join('|') + ")"
          : alt[0];
        q && (re = cconly
          ? re + '?'
          : "(?:" + re + ")?");
        return re || '';
      }
      return recur(this.tree);
    };
    return _Class;
  }());
}).call(this);
