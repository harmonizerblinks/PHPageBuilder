!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([,,,,,,function(t,e,n){t.exports=n(7)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),i=(n.n(o),n(9)),a=(n.n(i),n(10)),r=(n.n(a),n(11)),s=(n.n(r),n(12)),l=(n.n(s),n(13));n.n(l)},function(t,e){$(document).ready(function(){function t(){$(window).width()<1e3&&($("#gjs").addClass("sidebar-collapsed"),e())}function e(){window.editor.trigger("change:canvasOffset canvasScroll")}$(".gjs-editor").append($("#toggle-sidebar")),$(".gjs-pn-panels").prepend($("#sidebar-header")),$(".gjs-pn-panels").append($("#sidebar-bottom-buttons")),$("#toggle-sidebar").click(function(){$("#gjs").toggleClass("sidebar-collapsed"),e()}),t(),window.editor.on("run:open-sm",function(t){$(".gjs-trt-traits").parent().parent().css("display","none"),$(".gjs-sm-sectors").parent().parent().css("display","block"),$("#gjs-sm-advanced .gjs-sm-properties").append($(".gjs-clm-tags"))}),window.editor.on("run:open-tm",function(t){$(".gjs-sm-sectors").parent().parent().css("display","none"),$(".gjs-trt-traits").parent().parent().css("display","block")}),window.editor.on("block:drag:start",function(e){t()});var n=!1;$(document).keydown(function(t){8===t.which&&(n=!0)}).keyup(function(t){8===t.which&&(n=!1)}),$(window).on("beforeunload",function(t){n&&t.preventDefault()})}),window.addEventListener("message",function(t){"page-loaded"===t.data?setTimeout(function(){$("#phpb-loading").addClass("loaded"),$(".gjs-blocks-cs").prepend($("#block-search")),window.isLoaded=!0},500):"touch-start"===t.data&&window.touchStart()},!1)},function(t,e){$(document).on("input","#block-search input",function(){var t=$(this).val().toLowerCase();$(".gjs-blocks-cs .gjs-block").each(function(){$(this).text().toLowerCase().includes(t)?$(this).removeClass("d-none"):$(this).addClass("d-none")})})},function(t,e){$(document).ready(function(){var t="";function e(){i(),setTimeout(function(){var t=n(window.editor.getWrapper().find("[phpb-content-container]")[0]);$.ajax({type:"POST",url:$("#save-page").data("url"),data:{data:JSON.stringify(t)},success:function(){i(),window.toastr.success(window.translations["toastr-changes-saved"])},error:function(){i(),window.toastr.error(window.translations["toastr-saving-failed"])}})},200)}function n(e){e=window.cloneComponent(e),t=window.editor.getCss();var n=function e(n){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];var r={};r.current_block={};r.blocks={};var s=i;var l=a;void 0!==n.attributes["block-id"]&&("false"===n.attributes["is-html"]?(s=!0,l=!1):i&&"true"===n.attributes["is-html"]&&(l=!0));n.get("components").forEach(function(t){var n=e(t,s,l);for(var o in n.current_block)r.current_block[o]=n.current_block[o];for(var i in n.blocks)r.blocks[i]=n.blocks[i]});if(void 0!==n.attributes["block-id"])if(i&&"true"===n.attributes["is-html"]&&!1===a)r.current_block[n.attributes["block-id"]]=window.html_beautify(n.toHTML());else if("false"===n.attributes["is-html"]){var c={};n.get("traits").each(function(t){c[t.get("name")]=t.getTargetValue()}),r.current_block.attributes=c,void 0!==n.attributes["style-identifier"]&&t.includes(n.attributes["style-identifier"])&&(r.current_block.attributes["style-identifier"]=n.attributes["style-identifier"]);var d="ID"+(Date.now().toString(36)+Math.random().toString(36).substr(2,5)+o++).toUpperCase();if(n.replaceWith({tagName:"phpb-block",attributes:{slug:n.attributes["block-slug"],id:d}}),i){var u={};u[n.attributes["block-id"]]=r.current_block,r.current_block=u}else r.blocks[d]=r.current_block,r.current_block={}}return r}(e).blocks,i=window.html_beautify(function(t){var e="";t.get("components").forEach(function(t){return e+=t.toHTML()});var n=$("<container>"+e+"</container>");return n.find("phpb-block").each(function(){$(this).replaceWith('[block slug="'+$(this).attr("slug")+'" id="'+$(this).attr("id")+'"]')}),n.html()}(e)),a=window.editor.getCss(),r=window.editor.getStyle();return{html:i,css:a,components:JSON.parse(JSON.stringify(e.get("components"))),blocks:n,style:r}}$("#save-page").click(function(){e()}),$(document).bind("keydown",function(t){if(t.ctrlKey&&83===t.which)return window.editor.store(),e(),t.preventDefault(),!1}),window.getComponentDataInStorageFormat=function(t){var e=window.cloneComponent(t.parent());return e.get("components").reset(),e.append(t),n(e)};var o=0;function i(){var t=$("#save-page");t.blur(),t.hasClass("waiting")?(t.attr("disabled",!1),t.removeClass("waiting"),t.find(".spinner-border").addClass("d-none")):(t.attr("disabled",!0),t.addClass("waiting"),t.find(".spinner-border").removeClass("d-none"))}})},function(t,e){!function(){function t(){for(var t in window.themeBlocks){var e=window.themeBlocks[t],n=$("<container>").append(e.content);n.find("[phpb-blocks-container]").each(function(){""!==$(this).html()&&""===$(this).html().trim()&&$(this).html("")}),e.content=n.html(),editor.BlockManager.add(t,e)}}function e(t){window.currentLanguage=t;var e=editor.getWrapper().find("[phpb-content-container]")[0];e.components(window.pageComponents),n(e),a(e),setTimeout(function(){s(e)},500)}function n(t){var e=t;if("phpb-block"===t.get("tagName")){var o=t.attributes.attributes.id;void 0!==window.dynamicTranslatedBlocks[currentLanguage][o]&&void 0!==window.dynamicTranslatedBlocks[currentLanguage][o].html&&(e=t.replaceWith(window.dynamicTranslatedBlocks[currentLanguage][o].html))}e.get("components").each(function(t){return n(t)})}function o(t){var e=!1,n=t.getEl();if(n&&n.style){var o=window.getComputedStyle(n);["background","background-image","background-color"].forEach(function(t){var n=o.getPropertyValue(t);void 0===n||""===n||n.includes("none")||n.includes("rgba(0, 0, 0, 0)")||(e=!0)})}return e}function i(t){return t.attributes.traits.length>0}function a(t){if("phpb-block"===t.attributes.tagName){var e=t.parent(),n=cloneComponent(t),o=void 0;e.components().each(function(e){e.cid===t.cid&&(o=t.replaceWith({tagName:"div"}),n.components().each(function(t){o.append(cloneComponent(t))}))}),t.remove(),r(n,o,!0,!1),function(t){if(void 0===window.blockSettings[t.attributes["block-slug"]])return;t.attributes.settings={};var e=[],n=t.attributes["block-id"];if(void 0!==window.dynamicBlocks[n]&&void 0!==window.dynamicBlocks[n].settings.attributes)t.attributes.settings=window.dynamicBlocks[n].settings,e=window.dynamicBlocks[n].settings.attributes;else if(t.parent()&&void 0!==t.parent().attributes.settings){var o=t.parent().attributes.settings;void 0!==o[n]&&void 0!==o[n].attributes&&(t.attributes.settings=o[n],e=o[n].attributes)}void 0!==e["style-identifier"]&&t.addClass(e["style-identifier"]);t.attributes["is-updating"]=!0,window.blockSettings[t.attributes["block-slug"]].forEach(function(n){var o=t.addTrait(n);void 0!==e[n.name]?o.setTargetValue(e[n.name]):void 0!==n["default-value"]&&o.setTargetValue(n["default-value"])}),t.attributes["is-updating"]=!1}(o),a(o)}else t.components().each(function(t){a(t)})}function r(t,e,n,o){var i=t.attributes.attributes;for(var a in i)i.hasOwnProperty(a)&&(o&&(e.attributes.attributes[a]=i[a]),n&&(e.attributes[a]=i[a]))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(c(t),void 0!==t.attributes.attributes["phpb-content-container"])t.set({droppable:!0,hoverable:!0});else if(void 0!==t.attributes["block-slug"]){var i={selectable:!0,hoverable:!0};e||(i={removable:!0,draggable:!0,copyable:!0,selectable:!0,hoverable:!0,stylable:!0},l(t)),"true"===t.attributes["is-html"]?(e=!1,n=!0):(e=!0,n=!1,t.getEl().setAttribute("data-cursor","default")),t.set(i)}n&&(function(t){var e=t.get("tagName"),n={};"phpb-blocks-container"in t.attributes.attributes&&(n.hoverable=!0,n.selectable=!0,n.droppable=!0);(["h1","h2","h3","h4","h5","h6","h7","img","button","p","small","b","strong","i","em","ul","li","th","td"].includes(e)||"phpb-editable"in t.attributes.attributes)&&(n.editable=!0);o(t)&&(n.hoverable=!0,n.selectable=!0,n.stylable=!0);"a"===e&&(n.hoverable=!0,n.selectable=!0,n.stylable=!0);if(!$.isEmptyObject(n))return t.set(n),void 0!==n.stylable&&n.stylable&&l(t),!0;return!1}(t)&&"text"===t.attributes.type&&(n=!1));t.get("components").each(function(t){return s(t,e,n)})}function l(t){var e=!1;t.getClasses().forEach(function(t){t.startsWith("ID")&&16===t.length&&(e=t)}),void 0===t.attributes["style-identifier"]&&(t.attributes["style-identifier"]=e||"ID"+(Date.now().toString(36)+Math.random().toString(36).substr(2,5)+d++).toUpperCase()),e||t.addClass(t.attributes["style-identifier"])}function c(t){t.set({removable:!1,draggable:!1,droppable:!1,badgable:!1,stylable:!1,highlightable:!1,copyable:!1,resizable:!1,editable:!1,layerable:!1,selectable:!1,hoverable:!1})}window.editor.on("load",function(n){!function t(e){if("phpb-content-container"in e.attributes.attributes)return;c(e);e.get("components").each(function(e){return t(e)})}(n.getWrapper()),t(),n.getWrapper().find("[phpb-content-container]")[0].set("custom-name",window.translations["page-content"]),e(window.currentLanguage)}),$("#language-selector select").on("change",function(){var t=$(this).find("option:selected").val();switchLanguage(t)}),window.editor.on("component:selected",function(t){i(t)?$(".gjs-pn-buttons .gjs-pn-btn:nth-of-type(2)").click():""===t.get("type")&&o(t)&&($(".gjs-pn-buttons .gjs-pn-btn:nth-of-type(3)").click(),$("#gjs-sm-position").hasClass("gjs-sm-open")&&$("#gjs-sm-position").find(".gjs-sm-title").click(),$("#gjs-sm-background").hasClass("gjs-sm-open")||$("#gjs-sm-background").find(".gjs-sm-title").click()),i(t)||setTimeout(function(){$(".gjs-trt-traits").html('<p class="no-settings">'+window.translations["trait-manager"]["no-settings"]+"</p>")},0),setTimeout(function(){t.attributes.removable||$(".gjs-toolbar .fa-trash-o.gjs-toolbar-item").hide(),t.attributes.copyable||$(".gjs-toolbar .fa-clone.gjs-toolbar-item").hide(),t.attributes.draggable||$(".gjs-toolbar .fa-arrows.gjs-toolbar-item").hide()},0)}),window.editor.on("block:drag:stop",function(t){if(t){var e=t.parent();a(t),s(e)}}),window.editor.on("component:update",function(t){if(!0===window.isLoaded&&!t.attributes["is-updating"]&&void 0!==t.changed.attributes&&0!==$(".gjs-frame").contents().find("#"+t.ccid).length){for(var e=t;e.parent()&&"false"===e.parent().attributes["is-html"];)e=e.parent();(t=e).attributes["is-updating"]=!0,$(".gjs-frame").contents().find("#"+t.ccid).addClass("gjs-freezed");var o=window.editor.getWrapper().find("#"+t.ccid)[0].parent(),i=window.getComponentDataInStorageFormat(t);$.ajax({type:"POST",url:window.renderBlockUrl,data:{data:JSON.stringify(i)},success:function(e){var r=$(e).attr("block-id");void 0===window.dynamicBlocks[r]&&(window.dynamicBlocks[r]={settings:{}}),window.dynamicBlocks[r].settings=void 0===i.blocks[r]?{}:i.blocks[r],t.replaceWith(e),n(o),a(o),s(o);var l=void 0;o.components().each(function(t){t.attributes["block-id"]===r&&(l=t)}),window.editor.select(l)},error:function(){$(".gjs-frame").contents().find("#"+t.ccid).removeClass("gjs-freezed"),t.attributes["is-updating"]=!1}})}}),window.cloneComponent=function(t){var e=t.clone();return function t(e,n){r(e,n,!1,!0);for(var o=0;o<e.components().length;o++){var i=e.components().models[o],a=n.components().models[o];t(i,a)}}(t,e),e};var d=0}()},function(t,e){$(document).ready(function(){window.CKEDITOR.on("dialogDefinition",function(t){var e=t.data.name,n=t.data.definition;if("link"===e){var o=n.getContents("info");n.onLoad=function(){var t=CKEDITOR.dialog.getCurrent();t.getContentElement("info","linkType").getElement().hide(),t.getContentElement("info","protocol").getElement().hide(),t.getContentElement("info","url").getElement().hide()},o.add({type:"select",id:"linktype-selector",label:"Linktype",default:"",items:[[window.translations.page,"page"],["URL","url"]],onChange:function(t){var e=CKEDITOR.dialog.getCurrent();"page"===t.data.value?(e.getContentElement("info","page-selector").getElement().show(),e.getContentElement("info","url-field").getElement().hide()):(e.getContentElement("info","page-selector").getElement().hide(),e.getContentElement("info","url-field").getElement().show(),e.getContentElement("info","url-field").setValue(""))},setup:function(t){void 0===t.type?this.setValue("page"):"url"===t.type&&t.url.url.startsWith("[page id=")?this.setValue("page"):this.setValue(t.type)}}),o.add({type:"select",id:"page-selector",label:window.translations.page,default:"",items:window.pages,onChange:function(){var t=CKEDITOR.dialog.getCurrent(),e="[page id="+this.getValue()+"]";t.setValueOf("info","url",e),t.setValueOf("info","protocol","")},setup:function(t){this.allowOnChange=!1;var e="";t.url&&(e=t.url.url.substr(9,t.url.url.length-10)),this.setValue(e),this.allowOnChange=!0}}),o.add({type:"text",id:"url-field",label:"URL",default:"",onChange:function(){var t=CKEDITOR.dialog.getCurrent(),e=this.getValue();t.setValueOf("info","url",e)},setup:function(t){this.allowOnChange=!1;var e="";t.url&&(e=t.url.url),this.setValue(e),this.allowOnChange=!0}})}})})},function(t,e){$(document).ready(function(){window.touchStart=function(){$("#gjs").addClass("sidebar-collapsed")}})}]);