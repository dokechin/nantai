(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(t,s,i){var e=i(202);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(7).default)("8aa82400",e,!0,{sourceMap:!1})},198:function(t,s,i){"use strict";var e=i(2),a=i(18),r=i(21),n=i(106),c=i(57),o=i(13),l=i(58).f,d=i(76).f,u=i(12).f,p=i(199).trim,v=e.Number,_=v,f=v.prototype,m="Number"==r(i(75)(f)),g="trim"in String.prototype,h=function(t){var s=c(t,!1);if("string"==typeof s&&s.length>2){var i,e,a,r=(s=g?s.trim():p(s,3)).charCodeAt(0);if(43===r||45===r){if(88===(i=s.charCodeAt(2))||120===i)return NaN}else if(48===r){switch(s.charCodeAt(1)){case 66:case 98:e=2,a=49;break;case 79:case 111:e=8,a=55;break;default:return+s}for(var n,o=s.slice(2),l=0,d=o.length;l<d;l++)if((n=o.charCodeAt(l))<48||n>a)return NaN;return parseInt(o,e)}}return+s};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var s=arguments.length<1?0:t,i=this;return i instanceof v&&(m?o(function(){f.valueOf.call(i)}):"Number"!=r(i))?n(new _(h(s)),i,v):h(s)};for(var b,C=i(8)?l(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;C.length>x;x++)a(_,b=C[x])&&!a(v,b)&&u(v,b,d(_,b));v.prototype=f,f.constructor=v,i(14)(e,"Number",v)}},199:function(t,s,i){var e=i(11),a=i(20),r=i(13),n=i(200),c="["+n+"]",o=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(t,s,i){var a={},c=r(function(){return!!n[t]()||"​"!="​"[t]()}),o=a[t]=c?s(u):n[t];i&&(a[i]=o),e(e.P+e.F*c,"String",a)},u=d.trim=function(t,s){return t=String(a(t)),1&s&&(t=t.replace(o,"")),2&s&&(t=t.replace(l,"")),t};t.exports=d},200:function(t,s){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},201:function(t,s,i){"use strict";var e=i(197);i.n(e).a},202:function(t,s,i){(t.exports=i(6)(!1)).push([t.i,"\n.card-body{background-color:#fef1c2;-webkit-filter:drop-shadow(10px 10px 1.5px grey);filter:drop-shadow(10px 10px 1.5px gray);border-style:none;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px\n}\ndiv.guide{background-color:#fff\n}\n.star{font-size:20px;color:#00f\n}\n.spot{backgroud-color:#ff0\n}\n.name-text{font-size:20px;color:#534741;line-height:1.2\n}\n.map_img{width:70px\n}\n.yomi{font-size:14px;color:#534741\n}\n.card-img-bottom{border:4px solid #fff;border-radius:10px\n}\n.card-img-bottom,.guide{-webkit-border-radius:10px;-moz-border-radius:10px\n}\n.guide{white-space:pre-wrap;height:100px;overflow-x:visible;overflow-y:scroll;border-radius:10px;border:1px solid #aaa;padding:10px\n}",""])},203:function(t,s,i){"use strict";i(198);var e={props:{id:{type:Number,default:0},pref:{type:String,default:""},city:{type:String,default:""},town:{type:String,default:""},town_yomi:{type:String,default:""},spot_img:{type:String,default:""},map_img:{type:String,default:""},rare:{type:Number,default:1},spot:{type:String,default:""},spot_guide:{type:String,default:""}}},a=(i(201),i(3)),r=Object(a.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("b-card",{staticClass:"card alert-warning border-secondary"},[i("p",{staticClass:"card-text mb-1",attrs:{align:"right"}},[i("span",{staticClass:"star"},[t._v(t._s("★".repeat(t.rare)))]),t._v("No."+t._s(t.id))]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-9"},[i("p",{staticClass:"name-text mb-0 pb-0"},[t._v(t._s(" ".repeat((t.pref+t.city).length))),i("span",{staticClass:"yomi mb-0"},[t._v(t._s(t.town_yomi))])]),t._v(" "),i("p",{staticClass:"name-text mt-0 pt-0"},[t._v(t._s(t.pref+t.city+t.town))])]),t._v(" "),i("div",{staticClass:"col-3"},[i("b-card-img",{staticClass:"map_img",attrs:{src:t.map_img,alt:"Image",fluid:""}})],1)]),t._v(" "),i("b-card-img",{attrs:{src:t.spot_img,alt:"Image",bottom:""}}),t._v(" "),i("div",{staticClass:"spot"},[i("p",{staticClass:"card-text mb-1"},[t._v(t._s(t.spot))]),t._v(" "),i("div",{staticClass:"guide"},[t._v(t._s(t.spot_guide))])])],1)},[],!1,null,null,null);r.options.__file="Card.vue";s.a=r.exports},207:function(t,s,i){var e=i(222);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(7).default)("da9a03be",e,!0,{sourceMap:!1})},221:function(t,s,i){"use strict";var e=i(207);i.n(e).a},222:function(t,s,i){(t.exports=i(6)(!1)).push([t.i,"\n#mapTbl{border-collapse:collapse;text-align:center;vertical-align:middle;font-size:20px;background-color:#efffff;border:1px solid #0ff\n}\n.star{font-size:15px;color:#00f\n}\n.card-columns{\n@include media-breakpoint-only(lg){-webkit-column-count:5;column-count:5\n}\n@include media-breakpoint-only(xl){-webkit-column-count:5;column-count:5\n}\n}",""])},235:function(t,s,i){"use strict";i.r(s);i(198);var e={components:{Card:i(203).a},data:function(){return{questions:this.$store.state.questions,question_index:this.$store.state.question_index,yomi:"",type:0,card:null,quizzes:this.$store.getters.quizzes,id:this.$route.params.id,now:this.$route.params.id,pcnt:this.$store.getters.quizzes.length}},computed:{icnt:function(){return 10*(this.$route.params.id-1)},pcnt2:function(){return Math.ceil(this.pcnt/10)},ritu:function(){var t=this.$store.getters.quizzes.length,s=this.$store.getters.cards.length;return Math.round(s/t*100)},prev:function(){var t=Number(this.$route.params.id);return t>1?t-1:t},next:function(){var t=Number(this.$route.params.id);return t==Math.ceil(this.pcnt/10)?t:t+1}},methods:{remaining:function(t){var s=this.$store.getters.cards,i=s.length;if(t>this.$store.getters.quizzes.length)return"Z";for(var e=0;e<i;e++)if(t==s[e].id)return t;return"Y"}}},a=(i(221),i(3)),r=Object(a.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"container"},[i("table",{staticClass:"table table-secondary"},[i("tr",[i("td",{attrs:{colspan:"2"}},[i("h1",[t._v(" Collection 達成率 "+t._s(t.ritu)+" %")])])]),t._v(" "),i("tr",[i("td",{attrs:{width:"80px"}},[t._v(" \n      ")]),t._v(" "),i("td",[i("br"),t._v(" "),i("div",{staticClass:"row"},t._l(5,function(s){return i("div",{key:s},["Z"==t.remaining(s+t.icnt)?i("div",[t._m(0,!0)]):"Y"==t.remaining(s+t.icnt)?i("div",[t._m(1,!0)]):i("div",[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card-deck"},[i("nuxt-link",{staticClass:"card alert-warning border-secondary",staticStyle:{width:"10rem",height:"15rem"},attrs:{to:"/collection/details/"+Number(s+t.icnt-1)}},[i("div",{staticClass:"card-body"},[i("p",{staticClass:"card-text mb-1",attrs:{align:"right"}},[i("small",{staticClass:"star"},[t._v(t._s("★ ".repeat(t.quizzes[s+t.icnt-1].rare))+"No."+t._s(t.quizzes[s+t.icnt-1].id))])]),t._v(" "),i("p",{staticClass:"card-text mb-1 text-dark",staticStyle:{fontSize:"60%"}},[t._v(t._s(t.quizzes[s+t.icnt-1].town_yomi))]),t._v(" "),t.quizzes[s+t.icnt-1].town.length>5?i("div",[i("h6",[i("p",{staticClass:"card-title text-dark"},[t._v(t._s(t.quizzes[s+t.icnt-1].town))])])]):i("div",[i("h5",[i("p",{staticClass:"card-title text-dark"},[t._v(t._s(t.quizzes[s+t.icnt-1].town))])])]),t._v(" "),t.quizzes[s+t.icnt-1].spot.length>11?i("div",[i("small",{staticClass:"text-dark",staticStyle:{fontSize:"60%"}},[t._v(t._s(t.quizzes[s+t.icnt-1].spot.substr(0,10))+" ...")])]):i("div",[i("small",{staticClass:"text-dark",staticStyle:{fontSize:"60%"}},[t._v(t._s(t.quizzes[s+t.icnt-1].spot))])]),t._v(" "),i("img",{staticClass:"card-img-bottom",attrs:{src:t.quizzes[s+t.icnt-1].spot_img,alt:"Card image cap"}})])])],1)])])])})),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"row"},t._l(5,function(s){return i("div",{key:s},["Z"==t.remaining(s+5+t.icnt)?i("div",[t._m(2,!0)]):"Y"==t.remaining(s+5+t.icnt)?i("div",[t._m(3,!0)]):i("div",[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card-deck"},[i("nuxt-link",{staticClass:"card alert-warning border-secondary",staticStyle:{width:"10rem",height:"15rem"},attrs:{to:"/collection/details/"+Number(s+t.icnt+4)}},[i("div",{staticClass:"card-body"},[i("p",{staticClass:"card-text mb-1",attrs:{align:"right"}},[i("small",{staticClass:"star"},[t._v(t._s("★ ".repeat(t.quizzes[s+t.icnt+4].rare))+"No."+t._s(t.quizzes[s+t.icnt+4].id))])]),t._v(" "),i("p",{staticClass:"card-text mb-1 text-dark",staticStyle:{fontSize:"60%"}},[t._v(t._s(t.quizzes[s+t.icnt+4].town_yomi))]),t._v(" "),t.quizzes[s+t.icnt+4].town.length>5?i("div",[i("h6",[i("p",{staticClass:"card-title text-dark"},[t._v(t._s(t.quizzes[s+t.icnt+4].town))])])]):i("div",[i("h5",[i("p",{staticClass:"card-title text-dark"},[t._v(t._s(t.quizzes[s+t.icnt+4].town))])])]),t._v(" "),t.quizzes[s+t.icnt+4].spot.length>11?i("div",[i("small",{staticClass:"text-dark",staticStyle:{fontSize:"60%"}},[t._v(t._s(t.quizzes[s+t.icnt+4].spot.substr(0,10))+"...")])]):i("div",[i("small",{staticClass:"text-dark",staticStyle:{fontSize:"60%"}},[t._v(t._s(t.quizzes[s+t.icnt+4].spot))])]),t._v(" "),i("img",{staticClass:"card-img-bottom",attrs:{src:t.quizzes[s+t.icnt+4].spot_img,alt:"Card image cap"}})])])],1)])])])})),t._v(" "),i("br")])])]),t._v(" "),i("div",{attrs:{align:"center"}},[i("nuxt-link",{attrs:{to:"/collection/"+t.prev}},[i("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("◀")])]),t._v("\n    |\n    "),i("nuxt-link",{attrs:{to:"/collection/"+t.next}},[i("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("▶")])]),t._v("\n     \n    "),t._l(t.pcnt2,function(s){return i("nuxt-link",{key:s,attrs:{to:"/collection/"+s}},[t.now==s?i("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(t._s(s))]):i("button",{staticClass:"btn btn-link",attrs:{type:"button"}},[t._v(t._s(s))])])})],2)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"card-deck",staticStyle:{width:"10rem",height:"15rem"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"card-deck"},[s("div",{staticClass:"card alert-warning border-secondary",staticStyle:{width:"10rem",height:"15rem"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[this._v(" ")]),this._v(" "),s("h3",[s("p",{staticClass:"card-title"},[this._v("NO PHOTO")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"card-deck",staticStyle:{width:"10rem",height:"14rem"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"card-deck"},[s("div",{staticClass:"card alert-warning border-secondary",staticStyle:{width:"10rem",height:"15rem"}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[this._v(" ")]),this._v(" "),s("h3",[s("p",{staticClass:"card-title"},[this._v("NO PHOTO")])])])])])])}],!1,null,null,null);r.options.__file="_id.vue";s.default=r.exports}}]);