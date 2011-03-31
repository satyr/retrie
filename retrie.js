(typeof exports != 'undefined' && exports !== null ? exports : this).Retrie = (function(){
  var prototype = Retrie.prototype;
  function _ctor(){} _ctor.prototype = prototype;
  function Retrie(strings, asPrefixes){
    var str, _i, _len, _this = new _ctor;
    _this.tree = {};
    if (strings) {
      for (_i = 0, _len = strings.length; _i < _len; ++_i) {
        str = strings[_i];
        _this.add(str, asPrefixes);
      }
    }
    return _this;
  } Retrie.displayName = 'Retrie';
  prototype.add = function(string, asPrefixes){
    var ref, i, _to, _key;
    ref = this.tree;
    for (i = 0, _to = string.length; i < _to; ++i) {
      ref = ref[_key = string.charAt(i)] || (ref[_key] = asPrefixes
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
  prototype.toString = function(){
    function recur(it){
      var alt, cc, chr, q, sub, cconly, re;
      alt = [];
      cc = [];
      for (chr in it) {
        if (!chr) {
          q = true;
          continue;
        }
        ((sub = recur(it[chr])) ? alt : cc).push((~'.?*+^$|(){[\\'.indexOf(chr) ? '\\' + chr : chr) + sub);
      }
      if (q && sub == null) {
        return '';
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
  if (typeof module != 'undefined' && module !== null) {
    module.exports = (Retrie.Retrie = Retrie, Retrie);
  }
  return Retrie;
}());