/*!
 * bs-multi-selector
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.1.1
 */
!function(e){function t(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){"use strict";var s=(i(1),i(2));s.module("bs-multi-selector",[]),i(3)},function(e,t,i){e.exports=$},function(e,t,i){e.exports=angular},function(e,t,i){"use strict";var s=i(4),n=i(5),l=i(6);i(7),angular.module("bs-multi-selector").directive("bsMultiSelector",["$timeout",function(e){return{restrict:"E",scope:{source:"=",selectedItems:"=",template:"=",placeholder:"@",onChange:"&",icon:"@"},template:n,link:function(t,i,n){function o(){var s=i.position(),n=$(window).width();s.left+298>=n&&(t.dialogStyle.right=0),e(function(){t.$apply(function(){var e=i.height();t.dialogStyle.top=e+1+"px"})},100,!1)}function r(){e(function(){t.$apply(function(){t.onChange()})},null,!1)}var c=s.has(n,"single"),a=s.uniqueId();t.dialogStyle={},t.showDialog=!1,t.highlightedIndex=null,t.displayDialog=function(){t.showDialog=!0,setTimeout(function(){i.find(".bs-multi-selector__dialog__input").focus()},100),o()},t.$watch("template",function(e){t.itemTemplate=e||l}),t.$watch("userInput",function(){t.highlightedIndex=null}),t.selectItem=function(e){return c?(t.selectedItems=[e],r(),t.showDialog=!1):(s.find(t.selectedItems,e)?t.removeItem(e):t.selectedItems?t.selectedItems.push(e):t.selectedItems=[e],o(),void r())},t.removeItem=function(e){t.selectedItems=s.without(t.selectedItems,e),r()},t.isSelected=function(e){return!!s.find(t.selectedItems,e)},t.keyDown=function(e){var i=e.which;40===i?s.isNull(t.highlightedIndex)?t.highlightedIndex=0:t.highlightedIndex<t.filteredItems.length-1&&(t.highlightedIndex=t.highlightedIndex+1):38===i?t.highlightedIndex?t.highlightedIndex>0&&(t.highlightedIndex=t.highlightedIndex-1):t.highlightedIndex=0:13===i?s.isNull(t.highlightedIndex)||t.selectItem(t.filteredItems[t.highlightedIndex]):27===i&&(t.showDialog=!1)},$("body").on("click.bsmultiselector"+a,function(e){$(e.target).closest(i).length||t.$apply(function(){t.showDialog=!1})}),t.$on("$destroy",function(){$("body").off("click.bsmultiselector"+a)})}}}]),angular.module("bs-multi-selector").directive("bsMultiSelectorItem",["$compile",function(e){return{restrict:"E",scope:{template:"="},link:function(t,i,s){var n;t.$watch("template",function(s){s&&(n&&n.remove(),n=e(t.template)(t.$parent),i.append(n))})}}}])},function(e,t,i){e.exports=_},function(e,t,i){e.exports='<div class=bs-multi-selector ng-if=!icon><input type=input class=bs-multi-selector__hidden-input ng-focus=displayDialog()><div ng-click=displayDialog() type=text class="bs-multi-selector__main-input bss-form-control"><div class="bs-multi-selector__pill bss-white bss-bg-gray-10" ng-repeat="item in selectedItems">{{item.first_name}} {{item.last_name}} <i ng-click=removeItem(item) class="bss-icon bss-icon-sm-close"></i></div></div></div><div ng-if=icon class=bs-multi-selector__icon><div class="bs-multi-selector__pill +inline bss-white bss-bg-gray-10" ng-repeat="item in selectedItems">{{item.first_name}} {{item.last_name}} <i ng-click=removeItem(item) class="bss-icon bss-icon-sm-close"></i></div><div class=bss-btn-icon ng-click=displayDialog()><a href="" class=bss-link><span class="bss-icon {{icon}}"></span></a></div></div><div class="bs-multi-selector__dialog depth-z2" ng-show=showDialog ng-style=dialogStyle><input ng-keydown=keyDown($event) class="bss-form-control bs-multi-selector__dialog__input" ng-model=userInput placeholder={{placeholder}}><div class=bs-multi-selector__dialog__items><bs-multi-selector-item ng-class="{\'+selected\': isSelected(item), \'+highlighted\': ($index === highlightedIndex) }" ng-click=selectItem(item) ng-repeat="item in filteredItems = (source | limitTo:4 | filter:userInput)" template=itemTemplate></bs-multi-selector-item></div></div>'},function(e,t,i){e.exports='<div class="bs-multi-selector-item__icon bss-bg-medium-gray bss-gray-5">{{item.first_name[0]}}{{item.last_name[0]}}</div><div class=bs-multi-selector-item__title>{{item.first_name}} {{item.last_name}}</div><div class=bs-multi-selector-item__check><i class="bss-icon bss-icon-lg-check bss-info"></i></div>'},function(e,t,i){var s=i(8);"string"==typeof s&&(s=[[e.id,s,""]]);i(9)(s,{})},function(e,t,i){t=e.exports=i(10)(),t.push([e.id,"bs-multi-selector{display:inline-block;position:relative;font-size:1.4rem}.bs-multi-selector{width:340px;z-index:1}.bs-multi-selector__hidden-input{position:absolute}.bs-multi-selector__dialog{background:#fff;padding:16px 16px 8px;position:absolute;top:33px;min-width:298px;width:auto;border-radius:2px}.bs-multi-selector__dialog__items{margin:16px -16px 8px}bs-multi-selector-item{display:block;height:40px;position:relative;padding-top:6px;cursor:pointer;padding-left:16px;padding-right:16px}bs-multi-selector-item:hover,bs-multi-selector-item.\\+highlighted{background-color:#F7F7F7}bs-multi-selector-item.\\+selected .bs-multi-selector-item__icon{background-color:#45A8F8!important}bs-multi-selector-item.\\+selected .bs-multi-selector-item__check{visibility:visible}.bs-multi-selector-item__icon{display:inline-block;vertical-align:middle;height:28px;width:28px;text-align:center;font-weight:600;padding-top:.6rem;border-radius:2px}.bs-multi-selector-item__title{display:inline-block;position:absolute;left:56px;top:12px}.bs-multi-selector-item__check{display:inline-block;visibility:hidden;float:right;font-size:2.6rem;position:relative;right:.2rem}.bs-multi-selector__main-input.bss-form-control{position:relative;z-index:2;padding:2px 2px 0;min-height:32px;height:auto}.bs-multi-selector__pill{display:inline-block;padding:2px 8px;margin-right:5px;height:25px;margin-bottom:3px;vertical-align:top}.bs-multi-selector__pill.\\+inline{position:relative;top:3px}.bs-multi-selector__pill .bss-icon{position:relative;top:-2px;right:-4px;cursor:pointer}.bs-multi-selector__icon{position:relative}",""])},function(e,t,i){function s(e,t){for(var i=0;i<e.length;i++){var s=e[i],n=d[s.id];if(n){n.refs++;for(var l=0;l<n.parts.length;l++)n.parts[l](s.parts[l]);for(;l<s.parts.length;l++)n.parts.push(o(s.parts[l],t))}else{for(var r=[],l=0;l<s.parts.length;l++)r.push(o(s.parts[l],t));d[s.id]={id:s.id,refs:1,parts:r}}}}function n(e){for(var t=[],i={},s=0;s<e.length;s++){var n=e[s],l=n[0],o=n[1],r=n[2],c=n[3],a={css:o,media:r,sourceMap:c};i[l]?i[l].parts.push(a):t.push(i[l]={id:l,parts:[a]})}return t}function l(){var e=document.createElement("style"),t=m();return e.type="text/css",t.appendChild(e),e}function o(e,t){var i,s,n;if(t.singleton){var o=g++;i=h||(h=l()),s=c.bind(null,i,o,!1),n=c.bind(null,i,o,!0)}else i=l(),s=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else n()}}function r(e,t,i){var s=["/** >>"+t+" **/","/** "+t+"<< **/"],n=e.lastIndexOf(s[0]),l=i?s[0]+i+s[1]:"";if(e.lastIndexOf(s[0])>=0){var o=e.lastIndexOf(s[1])+s[1].length;return e.slice(0,n)+l+e.slice(o)}return e+l}function c(e,t,i,s){var n=i?"":s.css;if(e.styleSheet)e.styleSheet.cssText=r(e.styleSheet.cssText,t,n);else{var l=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(l,o[t]):e.appendChild(l)}}function a(e,t){var i=t.css,s=t.media,n=t.sourceMap;if(n&&"function"==typeof btoa)try{i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(n))+" */",i='@import url("data:text/css;base64,'+btoa(i)+'")'}catch(l){}if(s&&e.setAttribute("media",s),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var d={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),m=u(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,g=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var i=n(e);return s(i,t),function(e){for(var l=[],o=0;o<i.length;o++){var r=i[o],c=d[r.id];c.refs--,l.push(c)}if(e){var a=n(e);s(a,t)}for(var o=0;o<l.length;o++){var c=l[o];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}}},function(e,t,i){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];e.push(i[2]?"@media "+i[2]+"{"+i[1]+"}":i[1])}return e.join("")},e}}]);