(typeof exports != 'undefined' && exports !== null ? exports : this).Retrie = (function(){
  var _proto = Retrie.prototype;
  function _ctor(){} _ctor.prototype = _proto;
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
  return Retrie;
}());