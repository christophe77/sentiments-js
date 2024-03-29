"use strict";var e=require("@tensorflow/tfjs"),t=require("@tensorflow-models/toxicity");function n(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var r=n(e),i=n(t);function o(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}l((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;const s=2,c=(e,t,n="pre",r="pre",i=0)=>e.map((e=>{if(e.length>t&&("pre"===r?e.splice(0,e.length-t):e.splice(t,e.length-t)),e.length<t){const r=[];for(let n=0;n<t-e.length;++n)r.push(i);e="pre"===n?r.concat(e):e.concat(r)}return e})),l=e=>e.replace(/[^(a-zA-ZA-Яa-я0-9_)+\s]/g," ").split(/\s+/),u=e=>e>.65?"positive":e<.65?"negative":"neutral";function a(e){return o(this,void 0,void 0,(function*(){const t=yield r.loadLayersModel("https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json"),n=yield fetch("https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json"),i=yield n.json(),o=l(e).map((e=>{let t=i.word_index[e]+i.index_from;return t>i.vocabulary_size&&(t=s),t})),a=c([o],i.max_len),f=r.tensor2d(a,[1,i.max_len]),d=t.predict(f),p=d.dataSync()[0];d.dispose();const y=u(Number(p.toFixed(2)));return{score:p,result:y}}))}function f(e){return o(this,void 0,void 0,(function*(){const t=yield i.load(.9,[]);return(yield t.classify(e)).map((e=>{if(!0===e.results[0].match)return{label:e.label,result:e.results[0].match}})).filter(Boolean)}))}const d={analyse:function(e){return o(this,arguments,void 0,(function*({text:e,type:t}){if("sentiment"===t){return{sentiment:yield a(e)}}if("toxicity"===t){return{toxicity:yield f(e)}}if("combined"===t){const t=yield a(e),n=yield f(e),r=yield function(e,t){return o(this,void 0,void 0,(function*(){if("negative"!==e.result){let e="positive";return t.forEach((t=>{!0===t.result&&(e="negative")})),e}return"negative"}))}(t,n);return{combined:r}}return{sentiment:yield a(e),toxicity:yield f(e)}}))}};module.exports=d;
//# sourceMappingURL=bundle.cjs.map
