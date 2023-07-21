(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[6481],{7651:function(e,t,r){const i=r(65571),n=r(19263),s=r(28713),a=r(71048),o=r(35834);function l(e,t,r,l,u){let c={};for(let s in t){let f;try{let p=s.split(/:(.*)/);1===p.length&&p.unshift(u);let m=p[0];if("function"===typeof l&&!l(s))continue;f=t[s];let d=i.getSpecification(s,r);d.ext&&(m=d.ext);let b=!1;"summaries"===r&&d.listWithKeys&&Array.isArray(f)&&f.length>0&&(f=f[0],b=!0);let g,O=null,j=[];if(n.isObject(d.items)){let e=f;d.listWithKeys&&(e=Object.values(e));let t=[];Array.isArray(e)?t=n.keysFromListOfObjects(e):n.isObject(e)&&(t=Object.keys(e)),O={},j=d.itemOrder.filter((e=>t.includes(e))),t.forEach((e=>{"undefined"===typeof d.items[e]?(O[e]={label:n.formatKey(e),explain:e},j.push(e)):(O[e]=Object.assign({},d.items[e]),O[e].label=y(e,d.items[e]))}))}if("summaries"===r)if(!b&&n.isObject(f))g="undefined"!==typeof f.minimum&&"undefined"!==typeof f.minimum?o.formatExtent([f.minimum,f.maximum],s,d):a.object(f);else if(i.externalRenderer&&O){let r=b?Object.assign({},f):f.slice(0);for(let i in r){let s=n.isObject(r[i])?{}:[];for(let n in O)s[n]=h(r[i][n],n,e,t,O[n]);r[i]=s}}else Array.isArray(f)?g=n.toList(f,!d.custom&&!d.items,(r=>h(r,s,e,t,d))):console.warn(`Invalid summary value: ${f}`);"undefined"===typeof g&&(g=h(f,s,e,t,d)),n.isObject(c[m])||(c[m]={extension:m,label:x(m),properties:{}}),c[m].properties[s]={label:y(s,d),value:f,formatted:g,items:O,itemOrder:j,spec:d}}catch(p){console.error(`Field '${s}' with value '${f}' resulted in an error`,p)}}return Object.values(c).sort(((e,t)=>e.extension.localeCompare(t.extension,s.locales)))}function u(e,t,r=null,i=""){return l(t,e,"assets",r,i)}function c(e,t,r=null,i=""){return l(t,e,"links",r,i)}function p(e,t,r=null,i=""){return l(t,e,"providers",r,i)}function f(e,t=null,r=""){return l(e,e.summaries,"summaries",t,r)}function m(e,t=null,r=""){return l(e,e,"collection",t,r)}function d(e,t=null,r=""){return l(e,e,"catalog",t,r)}function b(e,t=null,r=""){return l(e,e.properties,"metadata",t,r)}function h(e,t,r=null,s=null,l=null){if(n.isObject(l)||(l=i.getSpecification(t)),"string"===typeof l.format){let i=o[`format${l.format}`];return i||console.warn(`Formatter '${l.format}' not available.`),i(e,t,l,r,s)}if("function"===typeof l.formatter)return l.formatter(e,t,l,r,s);if(n.isObject(l.mapping)){let t=String(e);return"undefined"!==typeof l.mapping[t]?e=l.mapping[t]:"undefined"!==typeof l.mapping[t.toLowerCase()]?e=l.mapping[t.toLowerCase()]:"undefined"!==typeof l.mapping[t.toUpperCase()]&&(e=l.mapping[t.toUpperCase()]),a.format(n.t(e),l.unit)}if(null===e&&l.null)return a.null(l.null);if(Array.isArray(e)){let a=e=>h(e,t,r,s,l);return i.externalRenderer&&(l.custom||l.items)?e.map(a):n.toList(e,!1,a)}if(n.isObject(e)){let t=e=>n.isObject(l.items)?l.listWithKeys?{items:l.items}:l.items[e]:n.isObject(l.properties)?l.properties[e]:{},s=(e,i,n)=>h(e,i,r,n,t(i));if(i.externalRenderer&&(l.custom||l.items||l.properties)){let t={};for(let r in e)t[r]=s(e[r],r,e);return t}{let r=e=>y(e,t(e));return n.toObject(e,s,r,l.itemOrder)}}return a.format(e,l.unit)}function y(e,t=null){if(n.isObject(t)||(t=i.getSpecification(e)),n.isObject(t)&&"string"===typeof t.label){if("string"===typeof t.explain)return t.explain.match(/^https?:\/\//i)?n.toLink(t.explain,n.t(t.label),"about"):n.abbrev(n.t(t.label),n.t(t.explain));if("string"===typeof t.label)return n.t(t.label)}return n.formatKey(e)}function x(e){return y(e,i.getExtension(e))}e.exports={format:h,label:y,extension:x,formatCatalog:d,formatCollection:m,formatSummaries:f,formatItemProperties:b,formatAsset:u,formatLink:c,formatProvider:p,formatGrouped:l}},96481:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"chart mb-4"},[t(e.component,{tag:"component",attrs:{data:e.chartData,options:e.allOptions}})],1)},n=[],s=(r(57658),r(19263)),a=r(7651),o=r(35834),l=r(79879),u=r(32005),c=r(65750);c.kL.register(c.Dx,c.u,c.wL,c.qi,c.ZL,c.uw,c.f$);var p={name:"StatsChart",components:{Bar:u.$Q,Pie:u.by},props:{data:{type:Object,required:!0},type:{type:String,required:!0},count:{type:Number,required:!0},options:{type:Object,default:()=>({})}},computed:{component(){switch(this.type){case"versions":return"Pie";default:return"Bar"}},title(){switch(this.type){case"versions":return this.$t("source.stacVersion");case"extensions":return this.$t("source.stacExtension");case"assets":return this.$t("source.fileFormat");default:return""}},allOptions(){let e={responsive:!0,plugins:{title:{display:!0,text:this.title}},scales:{y:{min:0,max:this.count,title:{display:!1}}}};return Object.assign(e,this.options)},chartData(){let e=[],t=[];for(let r in this.data){let i,n=this.data[r];switch(t.push(n),this.type){case"extensions":{let e=this.parseExtension(r);i=`${e.title}`,e.version&&(i+=` (${e.version})`);break}case"assets":i=(0,o.formatMediaType)(r);break;default:i=r}e.push(i)}return{labels:e,datasets:[{data:t}]}}},methods:{parseExtension(e){let t=null,r=e,i=e.match(/^https?:\/\/stac-extensions\.github\.io\/([^/]+)\/v?([^/]+)(?:\/([^/.]+))?\/schema/);return i?(t=i[2],r=(0,a.extension)(i[1]),i[3]&&(r+=" - "+(0,s.formatKey)(i[3]))):(r=e.replace(/^https?:\/\/(www.)?/,"").replace(/\/schema(\.json)?$/,""),r=l.ZP.shortenTitle(r,30)),{title:r,version:t}}}},f=p,m=r(1001),d=(0,m.Z)(f,i,n,!1,null,null,null),b=d.exports}}]);
//# sourceMappingURL=6481.43dd3d1d.js.map