(function(e){function t(t){for(var n,s,o=t[0],u=t[1],l=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,o=1;o<i.length;o++){var u=i[o];0!==r[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},"1b4e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},"5c0b":function(e,t,i){"use strict";var n=i("e332"),r=i.n(n);r.a},cd49:function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),i("div",{staticClass:"section"},[i("div",{staticClass:"header"},e._l(e.config,(function(t,n){return i("div",{key:t.name,staticClass:"group"},[i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("网格名称")]),i("input",{attrs:{disabled:""},domProps:{value:t.name}})]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("价格")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.price,expression:"item.price",modifiers:{number:!0}}],attrs:{disabled:0!=n},domProps:{value:t.price},on:{input:function(i){i.target.composing||e.$set(t,"price",e._n(i.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v("￥\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("网格百分比")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.percentage,expression:"item.percentage",modifiers:{number:!0}}],domProps:{value:t.percentage},on:{input:function(i){i.target.composing||e.$set(t,"percentage",e._n(i.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v("%\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("购买份数")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.buyAmount,expression:"item.buyAmount",modifiers:{number:!0}}],domProps:{value:t.buyAmount},on:{input:function(i){i.target.composing||e.$set(t,"buyAmount",e._n(i.target.value))},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("网格数")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.gridCount,expression:"item.gridCount",modifiers:{number:!0}}],domProps:{value:t.gridCount},on:{input:function(i){i.target.composing||e.$set(t,"gridCount",e._n(i.target.value))},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("倍数")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.retainProfitMultiple,expression:"item.retainProfitMultiple",modifiers:{number:!0}}],attrs:{disabled:!t.isRetainProfit},domProps:{value:t.retainProfitMultiple},on:{input:function(i){i.target.composing||e.$set(t,"retainProfitMultiple",e._n(i.target.value))},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("加码百分比")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.morePercentage,expression:"item.morePercentage",modifiers:{number:!0}}],attrs:{disabled:!t.isMore},domProps:{value:t.morePercentage},on:{input:function(i){i.target.composing||e.$set(t,"morePercentage",e._n(i.target.value))},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isRetainProfit,expression:"item.isRetainProfit"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isRetainProfit)?e._i(t.isRetainProfit,null)>-1:t.isRetainProfit},on:{change:function(i){var n=t.isRetainProfit,r=i.target,a=!!r.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);r.checked?o<0&&e.$set(t,"isRetainProfit",n.concat([s])):o>-1&&e.$set(t,"isRetainProfit",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(t,"isRetainProfit",a)}}}),e._v("\n          留利润\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.isMore,expression:"item.isMore"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isMore)?e._i(t.isMore,null)>-1:t.isMore},on:{change:function(i){var n=t.isMore,r=i.target,a=!!r.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);r.checked?o<0&&e.$set(t,"isMore",n.concat([s])):o>-1&&e.$set(t,"isMore",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(t,"isMore",a)}}}),e._v("\n          逐格加码\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("所需资金")]),i("input",{attrs:{disabled:""},domProps:{value:e._f("toFixed")(e.totalValue(n))}}),e._v("￥\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("总盈利金额")]),i("input",{attrs:{disabled:""},domProps:{value:e._f("toFixed")(e.totalProfitValue(n))}}),e._v("￥\n        ")]),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[e._v("总盈利比例")]),i("input",{attrs:{disabled:""},domProps:{value:e._f("toFixed")(e.totalProfitValue(n)/e.totalValue(n)*100)}}),e._v("%\n        ")])])})),0),i("table",{staticClass:"table"},[e._m(1),i("tbody",e._l(e.sortGrid,(function(t,n){return i("tr",{key:t.name+t.index,class:e.gridClass(t)},[i("td",[e._v(e._s(n+1))]),i("td",[e._v(e._s(t.name))]),i("td",[e._v(e._s(e._f("toFixed")(t.gear)))]),i("td",[e._v(e._s(e._f("toFixed")(t.buyPrice))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.sellOutPrice))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.cost))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.buyAmount,0)))]),i("td",[e._v(e._s(e._f("toFixed")(t.buyValue))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.sellAmount,0)))]),i("td",[e._v(e._s(e._f("toFixed")(t.sellValue))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.profitValue))+"￥")]),i("td",[e._v(e._s(e._f("toFixed")(t.profitPercentage))+"%")]),i("td",[e._v(e._s(e._f("toFixed")(t.retainAmount,0)))]),isNaN(t.retainProfitValue)?i("td",[e._v("无法保留")]):i("td",[e._v(e._s(e._f("toFixed")(t.retainProfitValue)))])])})),0)])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-header"},[e._v("\n    网格交易策略生成器,参考了ETF拯救世界的文章\n    "),n("a",{staticClass:"repo-link",attrs:{href:"https://github.com/ChenZhuoSteve/grid-trading",title:"查看源代码"}},[n("img",{staticClass:"github-icon",attrs:{src:i("1b4e")}}),e._v("查看源码\n    ")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("th",[e._v("序号")]),i("th",[e._v("类型")]),i("th",[e._v("档位")]),i("th",[e._v("买入价格")]),i("th",[e._v("卖出价格")]),i("th",[e._v("成本")]),i("th",[e._v("买入数量")]),i("th",[e._v("买入金额")]),i("th",[e._v("卖出数量")]),i("th",[e._v("卖出金额")]),i("th",[e._v("盈利金额")]),i("th",[e._v("盈利比例")]),i("th",[e._v("保留数量")]),i("th",[e._v("保留利润")])])}],s=(i("55dd"),i("7f7f"),i("ac4d"),i("8a81"),i("ac6a"),i("c5f6"),i("5df2"),i("d225")),o=i("b0b4"),u=i("308d"),l=i("6bb5"),c=i("4e2b"),d=i("9ab4"),f=i("60a3"),m=function(){function e(t,i,n,r,a,o,u){Object(s["a"])(this,e),this.index=0,this.name="",this.gear=0,this.buyPrice=0,this.sellOutPrice=0,this.buyAmount=0,this.buyValue=0,this.sellAmount=0,this.sellValue=0,this.profitValue=0,this.profitPercentage=0,this.retainAmount=0,this.retainProfitValue=0,this.cost=0,this.name=t,this.index=i,this.gear=n,this.buyPrice=r,this.sellOutPrice=a,this.buyAmount=o,this.buyValue=r*o,this.sellAmount=o,this.sellValue=a*this.sellAmount,this.profitValue=this.sellValue-this.buyValue,this.profitPercentage=this.profitValue/this.buyValue*100,this.cost=u}return Object(o["a"])(e,[{key:"retainProfit",value:function(e){this.retainProfitValue=this.profitValue*e,this.retainProfitValue>this.buyAmount?(this.retainProfitValue=NaN,this.sellValue=0,this.sellAmount=0,this.retainAmount=0):(this.sellValue=this.sellValue-this.retainProfitValue,this.sellAmount=this.sellValue/this.sellOutPrice,this.retainAmount=this.buyAmount-this.sellAmount)}},{key:"getBuyValue",value:function(){return this.buyValue}},{key:"getBuyPrice",value:function(){return this.buyPrice}},{key:"getName",value:function(){return this.name}},{key:"getProfitValue",value:function(){return this.profitValue}},{key:"getBuyAmount",value:function(){return this.buyAmount}}]),e}(),p=function e(t){Object(s["a"])(this,e),this.name="",this.price=1,this.percentage=5,this.buyAmount=1e3,this.gridCount=20,this.isRetainProfit=!1,this.retainProfitMultiple=1,this.isMore=!1,this.morePercentage=5,this.name=t},v=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(l["a"])(t).call(this)),e.config=[new p("小网"),new p("中网"),new p("大网")],e.config[1].percentage=15,e.config[1].gridCount=0,e.config[2].percentage=30,e.config[2].gridCount=0,e}return Object(c["a"])(t,e),Object(o["a"])(t,[{key:"mounted",value:function(){this.$watch((function(){return this.config[0].price}),(function(){this.config[1].price=this.config[0].price*(1-this.config[1].percentage/100),this.config[2].price=this.config[0].price*(1-this.config[2].percentage/100),this.config[1].price=Number.parseFloat(this.config[1].price.toFixed(3)),this.config[2].price=Number.parseFloat(this.config[2].price.toFixed(3))}))}},{key:"totalValue",value:function(e){return this.gridList[e].reduce((function(e,t){return e+t.getBuyValue()}),0)}},{key:"totalProfitValue",value:function(e){return this.gridList[e].reduce((function(e,t){return e+t.getProfitValue()}),0)}},{key:"gridClass",value:function(e){return{"small-grid":"小网"===e.getName(),"middle-grid":"中网"===e.getName(),"big-grid":"大网"===e.getName()}}},{key:"gridList",get:function(){var e=[],t=!0,i=!1,n=void 0;try{for(var r,a=this.config[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){for(var s=r.value,o=s.percentage/100,u=[],l=0;l<s.gridCount;++l)if(0!==l||"中网"!==s.name&&"大网"!==s.name){var c=1-l*o;if(!(c<0)){var d=s.price*c,f=s.price*(c+o),p=s.buyAmount,v=0;if(s.isMore&&(p=s.buyAmount*(1+s.morePercentage/100*l)),0===l)v=d;else{var h=u.reduce((function(e,t){return e+t.getBuyAmount()*t.getBuyPrice()}),0)+d*p,b=u.reduce((function(e,t){return e+t.getBuyAmount()}),0)+p;v=h/b}var g=new m(s.name,l+1,c,d,f,p,v);s.isRetainProfit&&g.retainProfit(s.retainProfitMultiple),u.push(g)}}e.push(u)}}catch(A){i=!0,n=A}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}return e}},{key:"sortGrid",get:function(){return this.gridList.flat().sort((function(e,t){return t.getBuyPrice()-e.getBuyPrice()}))}}]),t}(f["b"]);v=Object(d["a"])([Object(f["a"])({filters:{toFixed:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return e?"number"===typeof e?e.toFixed(t):e:""}}})],v);var h=v,b=h,g=(i("5c0b"),i("2877")),A=Object(g["a"])(b,r,a,!1,null,null,null),y=A.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(y)}}).$mount("#app")},e332:function(e,t,i){}});
//# sourceMappingURL=app.62d480d2.js.map