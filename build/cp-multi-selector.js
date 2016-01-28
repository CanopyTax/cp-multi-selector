/*!
 * cp-multi-selector
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.3.7
 */
!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){"use strict";var n=(i(1),i(2));n.module("cp-multi-selector",[]),i(3)},function(e,t){e.exports=$},function(e,t){e.exports=angular},function(e,t,i){"use strict";var n=i(4),o=i(5),l=i(6);i(7),angular.module("cp-multi-selector").directive("cpMultiSelector",["$timeout","$compile",function(e,t){return{restrict:"E",scope:{source:"=",selectedItems:"=",template:"=",placeholder:"@",onChange:"&",icon:"@",customIconTemplate:"=",dontShowPill:"@",footerAction:"=",removable:"@",displayName:"@"},template:o,link:function(i,o,c){function s(){if(i.customIconTemplate){var e=t(i.customIconTemplate)(i.$parent);o.find(".cp-multi-selector__custom__icon__template").html(e),t(o.find(".cp-multi-selector__custom__icon__template").contents())(i)}else o.find(".cp-multi-selector__custom__icon__template").html("")}function r(){i.displayName||(i.selectedItems&&i.selectedItems.map(function(e){return e.display_name=e.name,e}),i.source&&i.source.map(function(e){return e.display_name=e.name,e}))}function p(){var t=o[0].getBoundingClientRect().left,n=$(window).width();t+298>=n&&(i.dialogStyle.right=0),e(function(){i.$apply(function(){var e=o.height();i.dialogStyle.top=e+1+"px"})},100,!1)}function a(){e(function(){i.$apply(function(){i.onChange()})},null,!1)}var u=n.has(c,"single"),d=n.uniqueId();i.dialogStyle={},i.showDialog=!1,i.highlightedIndex=null,i.$watch("customIconTemplate",s),i.displayDialog=function(){if(i.showDialog=!0,setTimeout(function(){o.find(".cp-multi-selector__dialog__input").focus()},100),i.footerAction){var e=t(i.footerAction)(i.$parent);o.find(".cp-multi-selector__footer").html(e),t(o.find("cp-multi-selector__footer").contents())(i)}p()},i.$watch("template",function(e){i.itemTemplate=e||l}),i.$watch("source",function(e){r()}),i.$watch("selectedItems",function(e){r()}),i.$watch("userInput",function(){i.highlightedIndex=null}),i.selectItem=function(e){return u?(i.selectedItems=[e],a(),i.showDialog=!1):(n.find(i.selectedItems,e)?i.removeItem(e):i.selectedItems?i.selectedItems.push(e):i.selectedItems=[e],p(),void a())},i.removeItem=function(e){i.selectedItems=n.without(i.selectedItems,e),a()},i.isSelected=function(e){return!!n.find(i.selectedItems,e)},i.keyDown=function(e){var t=e.which;40===t?n.isNull(i.highlightedIndex)?i.highlightedIndex=0:i.highlightedIndex<i.filteredItems.length-1&&(i.highlightedIndex=i.highlightedIndex+1):38===t?i.highlightedIndex?i.highlightedIndex>0&&(i.highlightedIndex=i.highlightedIndex-1):i.highlightedIndex=0:13===t?n.isNull(i.highlightedIndex)||i.selectItem(i.filteredItems[i.highlightedIndex]):27===t&&(i.showDialog=!1)},$("body").on("click.cpmultiselector"+d,function(e){$(e.target).closest(o).length||i.$apply(function(){i.showDialog=!1})}),i.$on("$destroy",function(){$("body").off("click.cpmultiselector"+d)})}}}]),angular.module("cp-multi-selector").directive("cpMultiSelectorItem",["$compile",function(e){return{restrict:"E",scope:{template:"="},link:function(t,i,n){var o;t.$watch("template",function(n){n&&(o&&o.remove(),o=e(t.template)(t.$parent),i.append(o))})}}}])},function(e,t){e.exports=_},function(e,t){e.exports='<div class=cp-multi-selector ng-if=!icon><input type=input class=cp-multi-selector__hidden-input ng-focus=displayDialog()><div ng-click=displayDialog() type=text class="cp-multi-selector__main-input cps-form-control"><div class="cp-multi-selector__pill cps-white cps-bg-gray-10" ng-repeat="item in selectedItems">{{item.display_name}}<i ng-click=removeItem(item) class="cps-icon cps-icon-sm-close"></i></div></div></div><div ng-if=icon class=cp-multi-selector__icon><div ng-if=!dontShowPill class="cp-multi-selector__pill +inline cps-white cps-bg-gray-10" ng-repeat="item in selectedItems"><span style="vertical-align: top">{{item.display_name}}</span><i ng-click=removeItem(item) class="cps-icon cps-icon-sm-close"></i></div><div class=cps-btn-icon ng-click=displayDialog()><a href="" class=cps-link><span ng-if=!customIconTemplate class="cps-icon {{icon}}"></span><div class=cp-multi-selector__custom__icon__template></div></a></div></div><div class="cp-multi-selector__dialog depth-z2" ng-show=showDialog ng-style=dialogStyle><input ng-keydown=keyDown($event) class="cps-form-control cp-multi-selector__dialog__input" ng-model=userInput placeholder={{placeholder}}><div class=cp-multi-selector__dialog__items><cp-multi-selector-item ng-class="{\'+selected\': isSelected(item), \'+highlighted\': ($index === highlightedIndex) }" ng-click=selectItem(item) ng-repeat="item in filteredItems = (source | filter:userInput | limitTo:4)" template=itemTemplate></cp-multi-selector-item></div><div class=cp-multi-selector__footer></div></div>'},function(e,t){e.exports='<div class="cp-multi-selector-item__icon cps-bg-medium-gray cps-gray-5"><span ng-if=item.initials>{{ item.initials }}</span> <span ng-if=!item.initials>{{item.first_name[0]}}{{item.last_name[0]}}</span></div><div class=cp-multi-selector-item__title>{{item.display_name}}</div><div class=cp-multi-selector-item__check ng-class="{ \'cp-multi-selector-item__check--move-up\': removable }"><i ng-if=!removable class="cps-icon cps-icon-lg-check cps-info"></i> <i ng-if=removable ng-click="$event.stopPropagation(); removeItem(item);" class="cps-icon cps-icon-close"></i></div>'},function(e,t,i){var n=i(8);"string"==typeof n&&(n=[[e.id,n,""]]);i(10)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,i){t=e.exports=i(9)(),t.push([e.id,"cp-multi-selector{display:inline-block;position:relative;font-size:1.4rem}.cp-multi-selector{width:340px;z-index:1}.cp-multi-selector__hidden-input{position:absolute}.cp-multi-selector__dialog{background:#fff;padding:16px 16px 8px;position:absolute;top:33px;min-width:298px;width:auto;border-radius:2px}.cp-multi-selector__dialog__items{margin:16px -16px 8px}cp-multi-selector-item{display:block;height:40px;position:relative;padding-top:6px;cursor:pointer;padding-left:16px;padding-right:16px}cp-multi-selector-item.\\+highlighted,cp-multi-selector-item:hover{background-color:#f7f7f7}cp-multi-selector-item.\\+selected .cp-multi-selector-item__icon{background-color:#45a8f8!important}cp-multi-selector-item.\\+selected .cp-multi-selector-item__check{visibility:visible}.cp-multi-selector-item__icon{display:inline-block;vertical-align:middle;height:28px;width:28px;text-align:center;font-weight:600;padding-top:.4rem;border-radius:2px}.cp-multi-selector-item__icon *{opacity:.75}.cp-multi-selector-item__title{display:inline-block;position:absolute;left:56px;top:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:200px}.cp-multi-selector-item__check{display:inline-block;visibility:hidden;float:right;font-size:2.6rem;position:relative;right:.2rem}.cp-multi-selector-item__check:hover{background-color:#e9e9e9}.cp-multi-selector-item__check--move-up{margin-top:-.5rem}.cp-multi-selector__main-input.cps-form-control{position:relative;z-index:2;padding:2px 2px 0;min-height:32px;height:auto}.cp-multi-selector__pill{display:inline-block;padding:2px 8px;margin-right:5px;height:25px;margin-bottom:3px;vertical-align:top}.cp-multi-selector__pill.\\+inline{position:relative;font-weight:400;height:32px;top:0;border-radius:2px;padding:6px 8px}.cp-multi-selector__pill .cps-icon{position:relative;top:-2px;right:-4px;cursor:pointer}.cp-multi-selector__icon{position:relative}.cp-multi-selector__icon a{padding:.2rem!important}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var l=this[o][0];"number"==typeof l&&(n[l]=!0)}for(o=0;o<t.length;o++){var c=t[o];"number"==typeof c[0]&&n[c[0]]||(i&&!c[2]?c[2]=i:i&&(c[2]="("+c[2]+") and ("+i+")"),e.push(c))}},e}},function(e,t,i){function n(e,t){for(var i=0;i<e.length;i++){var n=e[i],o=m[n.id];if(o){o.refs++;for(var l=0;l<o.parts.length;l++)o.parts[l](n.parts[l]);for(;l<n.parts.length;l++)o.parts.push(p(n.parts[l],t))}else{for(var c=[],l=0;l<n.parts.length;l++)c.push(p(n.parts[l],t));m[n.id]={id:n.id,refs:1,parts:c}}}}function o(e){for(var t=[],i={},n=0;n<e.length;n++){var o=e[n],l=o[0],c=o[1],s=o[2],r=o[3],p={css:c,media:s,sourceMap:r};i[l]?i[l].parts.push(p):t.push(i[l]={id:l,parts:[p]})}return t}function l(e,t){var i=g(),n=x[x.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function c(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",l(e,t),t}function r(e){var t=document.createElement("link");return t.rel="stylesheet",l(e,t),t}function p(e,t){var i,n,o;if(t.singleton){var l=_++;i=v||(v=s(t)),n=a.bind(null,i,l,!1),o=a.bind(null,i,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=r(t),n=d.bind(null,i),o=function(){c(i),i.href&&URL.revokeObjectURL(i.href)}):(i=s(t),n=u.bind(null,i),o=function(){c(i)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function a(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var l=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(l,c[t]):e.appendChild(l)}}function u(e,t){var i=t.css,n=t.media;t.sourceMap;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function d(e,t){var i=t.css,n=(t.media,t.sourceMap);n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([i],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(o),l&&URL.revokeObjectURL(l)}var m={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,_=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=o(e);return n(i,t),function(e){for(var l=[],c=0;c<i.length;c++){var s=i[c],r=m[s.id];r.refs--,l.push(r)}if(e){var p=o(e);n(p,t)}for(var c=0;c<l.length;c++){var r=l[c];if(0===r.refs){for(var a=0;a<r.parts.length;a++)r.parts[a]();delete m[r.id]}}}};var y=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()}]);