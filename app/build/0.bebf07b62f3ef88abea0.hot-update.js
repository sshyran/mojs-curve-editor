webpackHotUpdatemojs_curve_editor(0,{78:function(t,e,s){(function(t){t.tag2("curve",'<div riot-style="{this.getSvgStyle()}"> <svg width="358" height="358" viewbox="0 0 100 100" class="{this.CLASSES[\'curve__svg\']}"> </svg> </div>',"","class=\"{this.CLASSES['curve'] + ' ' + (opts.adc || '')}\" riot-style=\"{this.getStyle()}\"",function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var a=s(86),i=e(a);this.CLASSES=s(81),s(79),i["default"].subscribe(this.update.bind(this)),this.getSvgStyle=function(){var t=i["default"].getState().present,e=t.tempResize_top;378-e<378&&(e=0);var s=Math.abs(e%378),a=parseInt(e/378);s<15?e=378*a:s>363&&(e=378*-(a+1));var r="transform: translate(0px, "+-e+"px)";return r+"; "+r+";"},this.getStyle=function(){var t=i["default"].getState().present,e=t.tempResize_top;358-e<358&&(e=0);var s=Math.abs(e%358),a=parseInt(e/358);s<15?e=358*a:s>343&&(e=358*-(a+1));var r="background-position: 0 "+-e+"px";return r+";"}})}).call(e,s(2))}});