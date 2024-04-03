"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
    babel é um conversor para todo quais quer navegador antigo
    podemos instalar usando:
        npm init -y
        npm install @babel/cli @babel/core @babel/preset-env
        npm install --save-dev  @babel/cli @babel/core @babel/preset-env

    const nome = `vinicius`;
    const obj = {nome};

    const novoObj = {...obj};   
    console.log(novoObj);

    criar um arquivo novo com o código novo
    npx babel index.js -o bundle.js --presets=@babel/env

    podemos automatizar essa ação colocando um script no package
    só ir em scripts e colocar o seguinte código:
    "babel ./index.js -o ./bundle.js --presets=@babel/env -w"

    para ativar vc usa o terminal com:
        npm run converte
*/

var nome = "vinicius";
var outroNome = "caio";
var obj = {
  nome: nome,
  outroNome: outroNome
};
var novoObj = _objectSpread({}, obj);
console.log(novoObj);
