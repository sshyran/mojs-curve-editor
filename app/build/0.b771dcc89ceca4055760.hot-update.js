webpackHotUpdatemojs_curve_editor(0,{42:function(t,o,e){(function(t){e(43),e(47),e(48),e(52),e(78);var o=e(77);t.tag2("curve-editor",'<icons></icons> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <curve adc="{this.CLASSES[\'curve-editor__right\']}"></curve>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";var s=this,n=t,c=n.store;this.CLASSES=e(56),c.subscribe(function(){s.update()}),this.on("mount",function(){var t=new o(s.root,{});t.on("pan",function(t){s.x=t.deltaX,s.y=t.deltaY,s.update()}),t.on("panend",function(t){var o=t.deltaX,e=t.deltaY,n=c.getState().present.translate;s.x=s.y=0,c.dispatch({type:"EDITOR_TRANSLATE",data:{x:n.x+o,y:n.y+e}})})}),this.getStyle=function(){var t=c.getState().present.translate,o=(s.x+t.x,s.y+t.y,"transform: translate("+(s.x+t.x)+"px, "+(s.y+t.y)+"px)");return""+mojs.h.prefix.css+o+"; "+o}})}).call(o,e(2))},78:function(t,o,e){(function(t){t.tag2("curve","<p> curve </p>","","class=\"{this.CLASSES['curve'] + ' ' + (opts.adc || '')}\"",function(t){this.CLASSES=e(!function(){var t=new Error('Cannot find module "../../css/blocks/curve.postcss.css.json"');throw t.code="MODULE_NOT_FOUND",t}()),e(79)})}).call(o,e(2))},79:function(t,o,e){var s=e(80);"string"==typeof s&&(s=[[t.id,s,""]]);var n=e(46)(s,{});s.locals&&(t.exports=s.locals),s.locals||t.hot.accept(80,function(){var o=e(80);"string"==typeof o&&(o=[[t.id,o,""]]),n(o)}),t.hot.dispose(function(){n()})},80:function(t,o,e){o=t.exports=e(45)(),o.push([t.id,"",""])}});