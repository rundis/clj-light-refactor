if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.prj-parser')) {
goog.provide('lt.plugins.cljrefactor.prj_parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
lt.plugins.cljrefactor.prj_parser.project_path = (function project_path(ed){var temp__4090__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",3951159101),new cljs.core.Keyword(null,"default","default",2558708147)], null));if(cljs.core.truth_(temp__4090__auto__))
{var c = temp__4090__auto__;return new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
} else
{return new cljs.core.Keyword(null,"project-path","project-path",1907176907).cljs$core$IFn$_invoke$arity$1(lt.plugins.clojure.find_project.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))));
}
});
lt.plugins.cljrefactor.prj_parser.get_project_file = (function get_project_file(ed){var temp__4092__auto__ = lt.plugins.cljrefactor.prj_parser.project_path.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;return lt.objs.files.join.call(null,path,"project.clj");
} else
{return null;
}
});
lt.plugins.cljrefactor.prj_parser.prj__GT_map = (function prj__GT_map(p){return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__10493_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[cljs.core.first.call(null,p1__10493_SHARP_)],[cljs.core.second.call(null,p1__10493_SHARP_)]);
}),cljs.core.partition.call(null,2,cljs.core.drop.call(null,3,p))));
});
lt.plugins.cljrefactor.prj_parser.parse_project_file = (function parse_project_file(file){return lt.plugins.cljrefactor.prj_parser.prj__GT_map.call(null,cljs.reader.read_string.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)),/\\/,"\\\\")));
});
lt.plugins.cljrefactor.prj_parser.src_dirs = (function src_dirs(prj){var or__8604__auto__ = new cljs.core.Keyword(null,"source-paths","source-paths",1249628206).cljs$core$IFn$_invoke$arity$1(prj);if(cljs.core.truth_(or__8604__auto__))
{return or__8604__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src"], null);
}
});
lt.plugins.cljrefactor.prj_parser.find_sub_path = (function find_sub_path(prj_dir,path,src_dirs){return cljs.core.some.call(null,(function (p1__10494_SHARP_){if(cljs.core.truth_(path.contains(lt.objs.files.join.call(null,prj_dir,p1__10494_SHARP_))))
{return path.substring((1 + cljs.core.count.call(null,lt.objs.files.join.call(null,prj_dir,p1__10494_SHARP_))));
} else
{return null;
}
}),src_dirs);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.selector')) {
goog.provide('lt.plugins.cljrefactor.selector');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.selector.remove_form = (function remove_form(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",2564367243).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted","deleted",2564367243),true], null));
return lt.object.destroy_BANG_.call(null,this$);
}
});
lt.plugins.cljrefactor.selector.select_item = (function select_item(this$,idx,item){var e__10026__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),idx,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),((cljs.core.map_QMARK_.call(null,item))?new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item):item)], null));var seq__10511_10529 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10512_10530 = null;var count__10513_10531 = 0;var i__10514_10532 = 0;while(true){
if((i__10514_10532 < count__10513_10531))
{var vec__10515_10533 = cljs.core._nth.call(null,chunk__10512_10530,i__10514_10532);var ev__10027__auto___10534 = cljs.core.nth.call(null,vec__10515_10533,0,null);var func__10028__auto___10535 = cljs.core.nth.call(null,vec__10515_10533,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10534,func__10028__auto___10535);
{
var G__10536 = seq__10511_10529;
var G__10537 = chunk__10512_10530;
var G__10538 = count__10513_10531;
var G__10539 = (i__10514_10532 + 1);
seq__10511_10529 = G__10536;
chunk__10512_10530 = G__10537;
count__10513_10531 = G__10538;
i__10514_10532 = G__10539;
continue;
}
} else
{var temp__4092__auto___10540 = cljs.core.seq.call(null,seq__10511_10529);if(temp__4092__auto___10540)
{var seq__10511_10541__$1 = temp__4092__auto___10540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10511_10541__$1))
{var c__9352__auto___10542 = cljs.core.chunk_first.call(null,seq__10511_10541__$1);{
var G__10543 = cljs.core.chunk_rest.call(null,seq__10511_10541__$1);
var G__10544 = c__9352__auto___10542;
var G__10545 = cljs.core.count.call(null,c__9352__auto___10542);
var G__10546 = 0;
seq__10511_10529 = G__10543;
chunk__10512_10530 = G__10544;
count__10513_10531 = G__10545;
i__10514_10532 = G__10546;
continue;
}
} else
{var vec__10516_10547 = cljs.core.first.call(null,seq__10511_10541__$1);var ev__10027__auto___10548 = cljs.core.nth.call(null,vec__10516_10547,0,null);var func__10028__auto___10549 = cljs.core.nth.call(null,vec__10516_10547,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10548,func__10028__auto___10549);
{
var G__10550 = cljs.core.next.call(null,seq__10511_10541__$1);
var G__10551 = null;
var G__10552 = 0;
var G__10553 = 0;
seq__10511_10529 = G__10550;
chunk__10512_10530 = G__10551;
count__10513_10531 = G__10552;
i__10514_10532 = G__10553;
continue;
}
}
} else
{}
}
break;
}
return e__10026__auto__;
});
lt.plugins.cljrefactor.selector.select_form = (function select_form(this$,items){var e__10026__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-select","div.refactor-select",3828436988),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,cljs.core.partial.call(null,lt.plugins.cljrefactor.selector.select_item,this$),items)], null)], null));var seq__10523_10554 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10524_10555 = null;var count__10525_10556 = 0;var i__10526_10557 = 0;while(true){
if((i__10526_10557 < count__10525_10556))
{var vec__10527_10558 = cljs.core._nth.call(null,chunk__10524_10555,i__10526_10557);var ev__10027__auto___10559 = cljs.core.nth.call(null,vec__10527_10558,0,null);var func__10028__auto___10560 = cljs.core.nth.call(null,vec__10527_10558,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10559,func__10028__auto___10560);
{
var G__10561 = seq__10523_10554;
var G__10562 = chunk__10524_10555;
var G__10563 = count__10525_10556;
var G__10564 = (i__10526_10557 + 1);
seq__10523_10554 = G__10561;
chunk__10524_10555 = G__10562;
count__10525_10556 = G__10563;
i__10526_10557 = G__10564;
continue;
}
} else
{var temp__4092__auto___10565 = cljs.core.seq.call(null,seq__10523_10554);if(temp__4092__auto___10565)
{var seq__10523_10566__$1 = temp__4092__auto___10565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10523_10566__$1))
{var c__9352__auto___10567 = cljs.core.chunk_first.call(null,seq__10523_10566__$1);{
var G__10568 = cljs.core.chunk_rest.call(null,seq__10523_10566__$1);
var G__10569 = c__9352__auto___10567;
var G__10570 = cljs.core.count.call(null,c__9352__auto___10567);
var G__10571 = 0;
seq__10523_10554 = G__10568;
chunk__10524_10555 = G__10569;
count__10525_10556 = G__10570;
i__10526_10557 = G__10571;
continue;
}
} else
{var vec__10528_10572 = cljs.core.first.call(null,seq__10523_10566__$1);var ev__10027__auto___10573 = cljs.core.nth.call(null,vec__10528_10572,0,null);var func__10028__auto___10574 = cljs.core.nth.call(null,vec__10528_10572,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10573,func__10028__auto___10574);
{
var G__10575 = cljs.core.next.call(null,seq__10523_10566__$1);
var G__10576 = null;
var G__10577 = 0;
var G__10578 = 0;
seq__10523_10554 = G__10575;
chunk__10524_10555 = G__10576;
count__10525_10556 = G__10577;
i__10526_10557 = G__10578;
continue;
}
}
} else
{}
}
break;
}
return e__10026__auto__;
});
lt.plugins.cljrefactor.selector.on_keydown = (function on_keydown(this$,ed,ev){var kc = ev.keyCode;var el = ev.target;if((cljs.core._EQ_.call(null,13,kc)) || (cljs.core._EQ_.call(null,9,kc)))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
var idx = lt.util.dom.$.call(null,"option:checked",el).value;var item = cljs.core.nth.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),idx);var the_ed = new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var beh = new cljs.core.Keyword(null,"behavior","behavior",2524816836).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));lt.object.raise.call(null,the_ed,beh,item);
return lt.plugins.cljrefactor.selector.remove_form.call(null,this$);
} else
{if(cljs.core._EQ_.call(null,27,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
lt.plugins.cljrefactor.selector.remove_form.call(null,this$);
return lt.objs.editor.focus.call(null,ed);
} else
{return null;
}
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.selector","refactor-selector-form","lt.plugins.cljrefactor.selector/refactor-selector-form",2244237706),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.refactor.selector.form","inline.refactor.selector.form",3032487982),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;lt.object.merge_BANG_.call(null,this$,info);
var content = lt.plugins.cljrefactor.selector.select_form.call(null,this$,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(info));lt.util.dom.on.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content),"blur",((function (content,ed,temp__4092__auto__){
return (function (){return lt.plugins.cljrefactor.selector.remove_form.call(null,this$);
});})(content,ed,temp__4092__auto__))
);
lt.util.dom.on.call(null,content,"keydown",cljs.core.partial.call(null,lt.plugins.cljrefactor.selector.on_keydown,this$,ed));
lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"option","option",4298734567),content),0);
CodeMirror.positionHint(ed,content,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info)));
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content));
return content;
} else
{return null;
}
}));
lt.plugins.cljrefactor.selector.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.selector","refactor-selector-form","lt.plugins.cljrefactor.selector/refactor-selector-form",2244237706),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.parser')) {
goog.provide('lt.plugins.cljrefactor.parser');
goog.require('cljs.core');
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.artifact-version')) {
goog.provide('lt.plugins.cljrefactor.artifact_version');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.objs.files');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.artifact_version.select_item = (function select_item(idx,item){var e__10026__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),item,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),item], null));var seq__10308_10336 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10309_10337 = null;var count__10310_10338 = 0;var i__10311_10339 = 0;while(true){
if((i__10311_10339 < count__10310_10338))
{var vec__10312_10340 = cljs.core._nth.call(null,chunk__10309_10337,i__10311_10339);var ev__10027__auto___10341 = cljs.core.nth.call(null,vec__10312_10340,0,null);var func__10028__auto___10342 = cljs.core.nth.call(null,vec__10312_10340,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10341,func__10028__auto___10342);
{
var G__10343 = seq__10308_10336;
var G__10344 = chunk__10309_10337;
var G__10345 = count__10310_10338;
var G__10346 = (i__10311_10339 + 1);
seq__10308_10336 = G__10343;
chunk__10309_10337 = G__10344;
count__10310_10338 = G__10345;
i__10311_10339 = G__10346;
continue;
}
} else
{var temp__4092__auto___10347 = cljs.core.seq.call(null,seq__10308_10336);if(temp__4092__auto___10347)
{var seq__10308_10348__$1 = temp__4092__auto___10347;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10308_10348__$1))
{var c__9352__auto___10349 = cljs.core.chunk_first.call(null,seq__10308_10348__$1);{
var G__10350 = cljs.core.chunk_rest.call(null,seq__10308_10348__$1);
var G__10351 = c__9352__auto___10349;
var G__10352 = cljs.core.count.call(null,c__9352__auto___10349);
var G__10353 = 0;
seq__10308_10336 = G__10350;
chunk__10309_10337 = G__10351;
count__10310_10338 = G__10352;
i__10311_10339 = G__10353;
continue;
}
} else
{var vec__10313_10354 = cljs.core.first.call(null,seq__10308_10348__$1);var ev__10027__auto___10355 = cljs.core.nth.call(null,vec__10313_10354,0,null);var func__10028__auto___10356 = cljs.core.nth.call(null,vec__10313_10354,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10355,func__10028__auto___10356);
{
var G__10357 = cljs.core.next.call(null,seq__10308_10348__$1);
var G__10358 = null;
var G__10359 = 0;
var G__10360 = 0;
seq__10308_10336 = G__10357;
chunk__10309_10337 = G__10358;
count__10310_10338 = G__10359;
i__10311_10339 = G__10360;
continue;
}
}
} else
{}
}
break;
}
return e__10026__auto__;
});
lt.plugins.cljrefactor.artifact_version.select_form = (function select_form(this$,items){var e__10026__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artifact-versions","div.artifact-versions",2029510539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.cljrefactor.artifact_version.select_item,items)], null)], null));var seq__10320_10361 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10321_10362 = null;var count__10322_10363 = 0;var i__10323_10364 = 0;while(true){
if((i__10323_10364 < count__10322_10363))
{var vec__10324_10365 = cljs.core._nth.call(null,chunk__10321_10362,i__10323_10364);var ev__10027__auto___10366 = cljs.core.nth.call(null,vec__10324_10365,0,null);var func__10028__auto___10367 = cljs.core.nth.call(null,vec__10324_10365,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10366,func__10028__auto___10367);
{
var G__10368 = seq__10320_10361;
var G__10369 = chunk__10321_10362;
var G__10370 = count__10322_10363;
var G__10371 = (i__10323_10364 + 1);
seq__10320_10361 = G__10368;
chunk__10321_10362 = G__10369;
count__10322_10363 = G__10370;
i__10323_10364 = G__10371;
continue;
}
} else
{var temp__4092__auto___10372 = cljs.core.seq.call(null,seq__10320_10361);if(temp__4092__auto___10372)
{var seq__10320_10373__$1 = temp__4092__auto___10372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10320_10373__$1))
{var c__9352__auto___10374 = cljs.core.chunk_first.call(null,seq__10320_10373__$1);{
var G__10375 = cljs.core.chunk_rest.call(null,seq__10320_10373__$1);
var G__10376 = c__9352__auto___10374;
var G__10377 = cljs.core.count.call(null,c__9352__auto___10374);
var G__10378 = 0;
seq__10320_10361 = G__10375;
chunk__10321_10362 = G__10376;
count__10322_10363 = G__10377;
i__10323_10364 = G__10378;
continue;
}
} else
{var vec__10325_10379 = cljs.core.first.call(null,seq__10320_10373__$1);var ev__10027__auto___10380 = cljs.core.nth.call(null,vec__10325_10379,0,null);var func__10028__auto___10381 = cljs.core.nth.call(null,vec__10325_10379,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10380,func__10028__auto___10381);
{
var G__10382 = cljs.core.next.call(null,seq__10320_10373__$1);
var G__10383 = null;
var G__10384 = 0;
var G__10385 = 0;
seq__10320_10361 = G__10382;
chunk__10321_10362 = G__10383;
count__10322_10363 = G__10384;
i__10323_10364 = G__10385;
continue;
}
}
} else
{}
}
break;
}
return e__10026__auto__;
});
lt.plugins.cljrefactor.artifact_version.remove_form = (function remove_form(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.plugins.cljrefactor.artifact_version.on_keydown = (function on_keydown(this$,ed,ev){var kc = ev.keyCode;var el = ev.target;if((cljs.core._EQ_.call(null,13,kc)) || (cljs.core._EQ_.call(null,9,kc)))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
var version = [cljs.core.str("\""),cljs.core.str(lt.util.dom.$.call(null,"option:checked",el).innerHTML),cljs.core.str("\"")].join('');lt.plugins.cljrefactor.artifact_version.remove_form.call(null,this$);
lt.objs.editor.insert_at_cursor.call(null,ed,version);
return lt.objs.editor.focus.call(null,ed);
} else
{if(cljs.core._EQ_.call(null,27,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
lt.plugins.cljrefactor.artifact_version.remove_form.call(null,this$);
return lt.objs.editor.focus.call(null,ed);
} else
{return null;
}
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifact-version","artifact-select-form","lt.plugins.cljrefactor.artifact-version/artifact-select-form",1608526199),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.artifact.select.form","inline.artifact.select.form",688625665),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.cljrefactor.artifact_version.select_form.call(null,this$,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(info));var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),false], null))));
lt.util.dom.on.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content),"blur",((function (content,line,ed,temp__4092__auto__){
return (function (ev){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
return lt.util.js.wait.call(null,0,((function (content,line,ed,temp__4092__auto__){
return (function (){return lt.plugins.cljrefactor.artifact_version.remove_form.call(null,this$);
});})(content,line,ed,temp__4092__auto__))
);
});})(content,line,ed,temp__4092__auto__))
);
lt.util.dom.on.call(null,content,"keydown",cljs.core.partial.call(null,lt.plugins.cljrefactor.artifact_version.on_keydown,this$,ed));
lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"option","option",4298734567),content),0);
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content));
return content;
} else
{return null;
}
}));
lt.plugins.cljrefactor.artifact_version.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifact-version","artifact-select-form","lt.plugins.cljrefactor.artifact-version/artifact-select-form",1608526199),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.pprint')) {
goog.provide('lt.plugins.cljrefactor.pprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
lt.plugins.cljrefactor.pprint.libspec_QMARK_ = (function libspec_QMARK_(thing){return (cljs.core.vector_QMARK_.call(null,thing)) || ((thing instanceof cljs.core.Symbol));
});
/**
* True if the vector is of the form [prefix libspec1 libspec2...]
*/
lt.plugins.cljrefactor.pprint.prefix_form_QMARK_ = (function prefix_form_QMARK_(v){return (cljs.core.vector_QMARK_.call(null,v)) && ((cljs.core.first.call(null,v) instanceof cljs.core.Symbol)) && (cljs.core.every_QMARK_.call(null,lt.plugins.cljrefactor.pprint.libspec_QMARK_,cljs.core.rest.call(null,v)));
});
lt.plugins.cljrefactor.pprint.trim_newline = (function trim_newline(line){return clojure.string.replace.call(null,line,/(\r\n|\n|\r)$/,"");
});
lt.plugins.cljrefactor.pprint.pprint = (function pprint(obj){return cljs.core.print.call(null,obj);
});
lt.plugins.cljrefactor.pprint.libspec_vectors_last = (function libspec_vectors_last(libspecs){return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.remove.call(null,cljs.core.sequential_QMARK_,libspecs),cljs.core.filter.call(null,cljs.core.sequential_QMARK_,libspecs)));
});
lt.plugins.cljrefactor.pprint.pprint_prefix_form = (function pprint_prefix_form(p__10465){var vec__10467 = p__10465;var name = cljs.core.nth.call(null,vec__10467,0,null);var libspecs = cljs.core.nthnext.call(null,vec__10467,1);cljs.core.print.call(null,[cljs.core.str("["),cljs.core.str(name)].join(''));
var ordered_libspecs = lt.plugins.cljrefactor.pprint.libspec_vectors_last.call(null,libspecs);return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (ordered_libspecs,vec__10467,name,libspecs){
return (function (idx,libspec){if((cljs.core.vector_QMARK_.call(null,libspec)) && (((idx === 0)) || ((cljs.core.get.call(null,ordered_libspecs,(idx - 1)) instanceof cljs.core.Symbol))))
{cljs.core.println.call(null);
} else
{}
if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,ordered_libspecs) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(libspec),cljs.core.str("]")].join(''));
} else
{if(cljs.core.vector_QMARK_.call(null,libspec))
{return lt.plugins.cljrefactor.pprint.pprint.call(null,[cljs.core.str(libspec),cljs.core.str("\n")].join(''));
} else
{if((idx === 0))
{return cljs.core.print.call(null,[cljs.core.str(" "),cljs.core.str(libspec),cljs.core.str(" ")].join(''));
} else
{if(cljs.core.vector_QMARK_.call(null,cljs.core.get.call(null,ordered_libspecs,(idx + 1))))
{return cljs.core.print.call(null,libspec);
} else
{return cljs.core.print.call(null,[cljs.core.str(libspec),cljs.core.str(" ")].join(''));
}
}
}
}
});})(ordered_libspecs,vec__10467,name,libspecs))
,ordered_libspecs));
});
lt.plugins.cljrefactor.pprint.pprint_require_form = (function pprint_require_form(p__10468){var vec__10471 = p__10468;var _ = cljs.core.nth.call(null,vec__10471,0,null);var libspecs = cljs.core.nthnext.call(null,vec__10471,1);cljs.core.print.call(null,"(:require ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__10471,_,libspecs){
return (function (idx,libspec){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,libspecs) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__9523__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_10472_10490 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_10472_10490,sb__9523__auto__,vec__10471,_,libspecs){
return (function (x__9524__auto__){return sb__9523__auto__.append(x__9524__auto__);
});})(_STAR_print_fn_STAR_10472_10490,sb__9523__auto__,vec__10471,_,libspecs))
;
if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{cljs.core.print.call(null,libspec);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10472_10490;
}return [cljs.core.str(sb__9523__auto__)].join('');
})())),cljs.core.str(")")].join(''));
} else
{if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{return lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{return cljs.core.println.call(null,libspec);
}
}
});})(vec__10471,_,libspecs))
,libspecs));
});
lt.plugins.cljrefactor.pprint.form_is_QMARK_ = (function form_is_QMARK_(form,type){return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,form)),type));
});
lt.plugins.cljrefactor.pprint.pprint_gen_class_form = (function pprint_gen_class_form(p__10473){var vec__10477 = p__10473;var _ = cljs.core.nth.call(null,vec__10477,0,null);var elems = cljs.core.nthnext.call(null,vec__10477,1);if(cljs.core.empty_QMARK_.call(null,elems))
{cljs.core.println.call(null,"(:gen-class)");
} else
{cljs.core.println.call(null,"(:gen-class");
}
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__10477,_,elems){
return (function (idx,p__10478){var vec__10479 = p__10478;var key = cljs.core.nth.call(null,vec__10479,0,null);var val = cljs.core.nth.call(null,vec__10479,1,null);if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,cljs.core.partition.call(null,2,elems)) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(key),cljs.core.str(val),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,key,val);
}
});})(vec__10477,_,elems))
,cljs.core.partition.call(null,2,elems)));
});
lt.plugins.cljrefactor.pprint.pprint_import_form = (function pprint_import_form(p__10480){var vec__10482 = p__10480;var _ = cljs.core.nth.call(null,vec__10482,0,null);var imports = cljs.core.nthnext.call(null,vec__10482,1);cljs.core.print.call(null,"(:import ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__10482,_,imports){
return (function (idx,import$){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,imports) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(import$),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,import$);
}
});})(vec__10482,_,imports))
,imports));
});
lt.plugins.cljrefactor.pprint.pprint_ns = (function pprint_ns(p__10483){var vec__10487 = p__10483;var _ = cljs.core.nth.call(null,vec__10487,0,null);var name = cljs.core.nth.call(null,vec__10487,1,null);var more = cljs.core.nthnext.call(null,vec__10487,2);var ns_form = vec__10487;var docstring_QMARK_ = ((typeof cljs.core.first.call(null,more) === 'string')?cljs.core.first.call(null,more):null);var attrs_QMARK_ = ((cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,more)))?cljs.core.second.call(null,more):null);var forms = (cljs.core.truth_((function (){var and__8592__auto__ = docstring_QMARK_;if(cljs.core.truth_(and__8592__auto__))
{return attrs_QMARK_;
} else
{return and__8592__auto__;
}
})())?lt.plugins.cljrefactor.pprint.nthrest.call(null,more,2):((cljs.core.not.call(null,(function (){var or__8604__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__8604__auto__))
{return or__8604__auto__;
} else
{return attrs_QMARK_;
}
})()))?more:((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.rest.call(null,more):null)));return clojure.string.replace.call(null,(function (){var sb__9523__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_10488_10491 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_10488_10491,sb__9523__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__10487,_,name,more,ns_form){
return (function (x__9524__auto__){return sb__9523__auto__.append(x__9524__auto__);
});})(_STAR_print_fn_STAR_10488_10491,sb__9523__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__10487,_,name,more,ns_form))
;
cljs.core.print.call(null,[cljs.core.str("(ns "),cljs.core.str(name)].join(''));
if(cljs.core.truth_((function (){var or__8604__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__8604__auto__))
{return or__8604__auto__;
} else
{var or__8604__auto____$1 = attrs_QMARK_;if(cljs.core.truth_(or__8604__auto____$1))
{return or__8604__auto____$1;
} else
{return forms;
}
}
})()))
{cljs.core.println.call(null);
} else
{cljs.core.print.call(null,")");
}
if(cljs.core.truth_(docstring_QMARK_))
{cljs.core.println.call(null,[cljs.core.str("\""),cljs.core.str(docstring_QMARK_),cljs.core.str("\"")].join(''));
} else
{}
if(cljs.core.truth_(attrs_QMARK_))
{lt.plugins.cljrefactor.pprint.pprint.call(null,attrs_QMARK_);
} else
{}
cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (_STAR_print_fn_STAR_10488_10491,sb__9523__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__10487,_,name,more,ns_form){
return (function (idx,form){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,forms) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__9523__auto____$1 = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_10489_10492 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_10489_10492,sb__9523__auto____$1,_STAR_print_fn_STAR_10488_10491,sb__9523__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__10487,_,name,more,ns_form){
return (function (x__9524__auto__){return sb__9523__auto____$1.append(x__9524__auto__);
});})(_STAR_print_fn_STAR_10489_10492,sb__9523__auto____$1,_STAR_print_fn_STAR_10488_10491,sb__9523__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__10487,_,name,more,ns_form))
;
if(lt.plugins.cljrefactor.pprint.form_is_QMARK_.call(null,form,new cljs.core.Keyword(null,"require","require",2109600983)))
{lt.plugins.cljrefactor.pprint.pprint_require_form.call(null,form);
} else
{if(lt.plugins.cljrefactor.pprint.form_is_QMARK_.call(null,form,new cljs.core.Keyword(null,"gen-class","gen-class",3979052077)))
{lt.plugins.cljrefactor.pprint.pprint_gen_class_form.call(null,form);
} else
{if(lt.plugins.cljrefactor.pprint.form_is_QMARK_.call(null,form,new cljs.core.Keyword(null,"import","import",4124075799)))
{lt.plugins.cljrefactor.pprint.pprint_import_form.call(null,form);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.plugins.cljrefactor.pprint.pprint.call(null,form);
} else
{}
}
}
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10489_10492;
}return [cljs.core.str(sb__9523__auto____$1)].join('');
})())),cljs.core.str(")")].join(''));
} else
{if(lt.plugins.cljrefactor.pprint.form_is_QMARK_.call(null,form,new cljs.core.Keyword(null,"require","require",2109600983)))
{return lt.plugins.cljrefactor.pprint.pprint_require_form.call(null,form);
} else
{if(lt.plugins.cljrefactor.pprint.form_is_QMARK_.call(null,form,new cljs.core.Keyword(null,"gen-class","gen-class",3979052077)))
{return lt.plugins.cljrefactor.pprint.pprint_gen_class_form.call(null,form);
} else
{if(lt.plugins.cljrefactor.pprint.form_is_QMARK_.call(null,form,new cljs.core.Keyword(null,"import","import",4124075799)))
{return lt.plugins.cljrefactor.pprint.pprint_import_form.call(null,form);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.cljrefactor.pprint.pprint.call(null,form);
} else
{return null;
}
}
}
}
}
});})(_STAR_print_fn_STAR_10488_10491,sb__9523__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__10487,_,name,more,ns_form))
,forms));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10488_10491;
}return [cljs.core.str(sb__9523__auto__)].join('');
})(),/\r/,"");
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.namespace')) {
goog.provide('lt.plugins.cljrefactor.namespace');
goog.require('cljs.core');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.cljrefactor.prj_parser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.cljrefactor.prj_parser');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.clojure');
lt.plugins.cljrefactor.namespace.nsify = (function nsify(sub_path){return (function (p1__10448_SHARP_){return [cljs.core.str("(ns "),cljs.core.str(p1__10448_SHARP_),cljs.core.str(")\n")].join('');
}).call(null,(function (p1__10447_SHARP_){return clojure.string.join.call(null,".",p1__10447_SHARP_);
}).call(null,(function (parts){return cljs.core.map.call(null,(function (p1__10446_SHARP_){return clojure.string.replace.call(null,p1__10446_SHARP_,/_/,"-");
}),parts);
}).call(null,clojure.string.split.call(null,lt.objs.files.without_ext.call(null,sub_path),cljs.core.re_pattern.call(null,lt.objs.files.separator)))));
});
lt.plugins.cljrefactor.namespace.find_line_containing = (function find_line_containing(ed,txt){var res = [];lt.objs.editor.__GT_cm_ed.call(null,ed).getDoc().eachLine(((function (res){
return (function (line_handle){if(cljs.core.truth_(line_handle.text.contains(txt)))
{return res.push(lt.objs.editor.__GT_cm_ed.call(null,ed).lineInfo(line_handle).line);
} else
{return null;
}
});})(res))
);
return cljs.core.first.call(null,cljs.core.seq.call(null,res));
});
lt.plugins.cljrefactor.namespace.get_ns_decl = (function get_ns_decl(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var bm = lt.objs.editor.bookmark.call(null,ed,pos,null);var nsl = lt.plugins.cljrefactor.namespace.find_line_containing.call(null,ed,"(ns");var start = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),nsl,new cljs.core.Keyword(null,"ch","ch",1013907415),1], null);if(cljs.core.truth_(nsl))
{lt.objs.editor.move_cursor.call(null,ed,start);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var curr_ns = lt.objs.editor.selection.call(null,ed);var bounds = lt.objs.editor.selection_bounds.call(null,ed);lt.objs.editor.move_cursor.call(null,ed,lt.util.cljs.js__GT_clj.call(null,bm.find()));
bm.clear();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds,new cljs.core.Keyword(null,"ns","ns",1013907767),cljs.reader.read_string.call(null,curr_ns)], null);
} else
{return null;
}
});
lt.plugins.cljrefactor.namespace.replace_ns = (function replace_ns(ed,new_ns){var curr_ns = lt.plugins.cljrefactor.namespace.get_ns_decl.call(null,ed);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var bm = lt.objs.editor.bookmark.call(null,ed,pos,null);lt.objs.editor.set_selection.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(curr_ns)),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(curr_ns)));
lt.objs.editor.replace_selection.call(null,ed,new_ns);
lt.objs.editor.set_selection.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(curr_ns)),lt.objs.editor.__GT_cursor.call(null,ed));
lt.objs.editor.indent_selection.call(null,ed,"smart");
lt.objs.editor.move_cursor.call(null,ed,lt.util.cljs.js__GT_clj.call(null,bm.find()));
return bm.clear();
});
lt.plugins.cljrefactor.namespace.index_of_ns_type = (function index_of_ns_type(ns_decl,t){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__10450_SHARP_,p2__10449_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,p2__10449_SHARP_)),t))
{return p1__10450_SHARP_;
} else
{return null;
}
}),cljs.core.drop.call(null,2,ns_decl)));
});
lt.plugins.cljrefactor.namespace.calc_imp_idx = (function calc_imp_idx(ns_decl){var req_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"require","require",2109600983));var imp_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"import","import",4124075799));return (2 + (cljs.core.truth_(imp_idx)?imp_idx:(function (){var x__8911__auto__ = 1;var y__8912__auto__ = req_idx;return ((x__8911__auto__ > y__8912__auto__) ? x__8911__auto__ : y__8912__auto__);
})()));
});
lt.plugins.cljrefactor.namespace.add_import = (function add_import(ns_decl,imp){var vec__10452 = cljs.core.split_at.call(null,lt.plugins.cljrefactor.namespace.calc_imp_idx.call(null,ns_decl),ns_decl);var pre = cljs.core.nth.call(null,vec__10452,0,null);var post = cljs.core.nth.call(null,vec__10452,1,null);if((cljs.core.seq.call(null,post)) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,post),new cljs.core.Keyword(null,"import","import",4124075799))))
{return cljs.core.concat.call(null,pre,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.concat.call(null,cljs.core.first.call(null,post),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [imp], null))),cljs.core.rest.call(null,post));
} else
{if(cljs.core.seq.call(null,post))
{return cljs.core.concat.call(null,pre,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,imp),new cljs.core.Keyword(null,"import","import",4124075799))),post);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.concat.call(null,pre,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,imp),new cljs.core.Keyword(null,"import","import",4124075799))));
} else
{return null;
}
}
}
});
lt.plugins.cljrefactor.namespace.add_require = (function add_require(ns_decl,req){var req_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"require","require",2109600983));var vec__10454 = cljs.core.split_at.call(null,(cljs.core.truth_(req_idx)?(req_idx + 2):2),ns_decl);var pre = cljs.core.nth.call(null,vec__10454,0,null);var post = cljs.core.nth.call(null,vec__10454,1,null);if((cljs.core.seq.call(null,post)) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,post),new cljs.core.Keyword(null,"require","require",2109600983))))
{return cljs.core.concat.call(null,pre,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.concat.call(null,cljs.core.first.call(null,post),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req], null))),cljs.core.rest.call(null,post));
} else
{if(cljs.core.seq.call(null,post))
{return cljs.core.concat.call(null,pre,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,req),new cljs.core.Keyword(null,"require","require",2109600983))),post);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.concat.call(null,pre,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,req),new cljs.core.Keyword(null,"require","require",2109600983))));
} else
{return null;
}
}
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.namespace","introduce-ns","lt.plugins.cljrefactor.namespace/introduce-ns",1495593912),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Introduce ns",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,ed);var prj_file = lt.plugins.cljrefactor.prj_parser.get_project_file.call(null,ed);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var src_dirs = (cljs.core.truth_(prj_file)?lt.plugins.cljrefactor.prj_parser.src_dirs.call(null,lt.plugins.cljrefactor.prj_parser.parse_project_file.call(null,prj_file)):null);if(cljs.core.truth_(prj_file))
{var ns_stmt = lt.plugins.cljrefactor.namespace.nsify.call(null,lt.plugins.cljrefactor.prj_parser.find_sub_path.call(null,lt.plugins.cljrefactor.prj_parser.project_path.call(null,ed),path,src_dirs));lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
lt.objs.editor.insert_at_cursor.call(null,ed,ns_stmt);
return lt.objs.editor.move_cursor.call(null,ed,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086)], null),cljs.core.inc));
} else
{return null;
}
})], null));
lt.plugins.cljrefactor.namespace.clean_ns_op = (function clean_ns_op(path){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str("(def tr (refactor-nrepl.client/connect))"),cljs.core.str("(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"clean-ns\" :path \""),cljs.core.str(path),cljs.core.str("\"}))")].join('');
});
lt.plugins.cljrefactor.namespace.__BEH__clean_ns_res = (function __BEH__clean_ns_res(ed,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)))));if(cljs.core.truth_(temp__4092__auto__))
{var cleaned_ns = temp__4092__auto__;if(cljs.core.seq.call(null,cleaned_ns))
{lt.plugins.cljrefactor.namespace.replace_ns.call(null,ed,cleaned_ns);
return lt.objs.notifos.set_msg_BANG_.call(null,"Namespace cleaned !");
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.namespace","clean-ns-res","lt.plugins.cljrefactor.namespace/clean-ns-res",2843051529),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.namespace.__BEH__clean_ns_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.clean-ns","editor.eval.clj.result.refactor.clean-ns",514468564),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.namespace","clean-ns","lt.plugins.cljrefactor.namespace/clean-ns",2356718878),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Cleanup ns",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.namespace.clean_ns_op.call(null,path),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.clean-ns","refactor.clean-ns",1837288039),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.input-prompt')) {
goog.provide('lt.plugins.cljrefactor.input_prompt');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.input_prompt.remove_form = (function remove_form(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",2564367243).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted","deleted",2564367243),true], null));
return lt.object.destroy_BANG_.call(null,this$);
}
});
lt.plugins.cljrefactor.input_prompt.prompt_form = (function prompt_form(this$,init_value){var e__10026__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-prompt","div.refactor-prompt",3754652772),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Enter new name: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"refactor-prompt",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),init_value], null)], null)], null));var seq__10405_10421 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10406_10422 = null;var count__10407_10423 = 0;var i__10408_10424 = 0;while(true){
if((i__10408_10424 < count__10407_10423))
{var vec__10409_10425 = cljs.core._nth.call(null,chunk__10406_10422,i__10408_10424);var ev__10027__auto___10426 = cljs.core.nth.call(null,vec__10409_10425,0,null);var func__10028__auto___10427 = cljs.core.nth.call(null,vec__10409_10425,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10426,func__10028__auto___10427);
{
var G__10428 = seq__10405_10421;
var G__10429 = chunk__10406_10422;
var G__10430 = count__10407_10423;
var G__10431 = (i__10408_10424 + 1);
seq__10405_10421 = G__10428;
chunk__10406_10422 = G__10429;
count__10407_10423 = G__10430;
i__10408_10424 = G__10431;
continue;
}
} else
{var temp__4092__auto___10432 = cljs.core.seq.call(null,seq__10405_10421);if(temp__4092__auto___10432)
{var seq__10405_10433__$1 = temp__4092__auto___10432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10405_10433__$1))
{var c__9352__auto___10434 = cljs.core.chunk_first.call(null,seq__10405_10433__$1);{
var G__10435 = cljs.core.chunk_rest.call(null,seq__10405_10433__$1);
var G__10436 = c__9352__auto___10434;
var G__10437 = cljs.core.count.call(null,c__9352__auto___10434);
var G__10438 = 0;
seq__10405_10421 = G__10435;
chunk__10406_10422 = G__10436;
count__10407_10423 = G__10437;
i__10408_10424 = G__10438;
continue;
}
} else
{var vec__10410_10439 = cljs.core.first.call(null,seq__10405_10433__$1);var ev__10027__auto___10440 = cljs.core.nth.call(null,vec__10410_10439,0,null);var func__10028__auto___10441 = cljs.core.nth.call(null,vec__10410_10439,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10440,func__10028__auto___10441);
{
var G__10442 = cljs.core.next.call(null,seq__10405_10433__$1);
var G__10443 = null;
var G__10444 = 0;
var G__10445 = 0;
seq__10405_10421 = G__10442;
chunk__10406_10422 = G__10443;
count__10407_10423 = G__10444;
i__10408_10424 = G__10445;
continue;
}
}
} else
{}
}
break;
}
return e__10026__auto__;
});
lt.plugins.cljrefactor.input_prompt.on_keydown = (function on_keydown(this$,ed,ev){var kc = ev.keyCode;var el = ev.target;if(cljs.core._EQ_.call(null,13,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
var old = new cljs.core.Keyword(null,"init-value","init-value",4481282534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var new$ = el.value;var the_ed = new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var beh = new cljs.core.Keyword(null,"behavior","behavior",2524816836).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));lt.object.raise.call(null,the_ed,beh,old,new$);
return lt.plugins.cljrefactor.input_prompt.remove_form.call(null,this$);
} else
{if(cljs.core._EQ_.call(null,27,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
lt.plugins.cljrefactor.input_prompt.remove_form.call(null,this$);
return lt.objs.editor.focus.call(null,ed);
} else
{return null;
}
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.input-prompt","refactor-prompt-form","lt.plugins.cljrefactor.input-prompt/refactor-prompt-form",3453773883),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.refactor.prompt.form","inline.refactor.prompt.form",3898711049),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;lt.object.merge_BANG_.call(null,this$,info);
var content = lt.plugins.cljrefactor.input_prompt.prompt_form.call(null,this$,new cljs.core.Keyword(null,"init-value","init-value",4481282534).cljs$core$IFn$_invoke$arity$1(info));lt.util.dom.on.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),content),"blur",((function (content,ed,temp__4092__auto__){
return (function (){return lt.plugins.cljrefactor.input_prompt.remove_form.call(null,this$);
});})(content,ed,temp__4092__auto__))
);
lt.util.dom.on.call(null,content,"keydown",cljs.core.partial.call(null,lt.plugins.cljrefactor.input_prompt.on_keydown,this$,ed));
CodeMirror.positionHint(ed,content,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info)));
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"input","input",1114262332),content));
return content;
} else
{return null;
}
}));
lt.plugins.cljrefactor.input_prompt.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.input-prompt","refactor-prompt-form","lt.plugins.cljrefactor.input-prompt/refactor-prompt-form",3453773883),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.usages')) {
goog.provide('lt.plugins.cljrefactor.usages');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.plugins.cljrefactor.input_prompt');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.plugins.cljrefactor.input_prompt');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.document');
goog.require('lt.objs.document');
lt.plugins.cljrefactor.usages.__BEH__on_close = (function __BEH__on_close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","on-close","lt.plugins.cljrefactor.usages/on-close",757312783),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__clear_BANG_ = (function __BEH__clear_BANG_(this$){return lt.util.dom.empty.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),lt.object.__GT_content.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","clear!","lt.plugins.cljrefactor.usages/clear!",4298270169),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__clear_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.plugins.cljrefactor.usages.highlight = (function highlight(line,sym){return clojure.string.replace.call(null,line,sym,[cljs.core.str("<em>"),cljs.core.str(sym),cljs.core.str("</em>")].join('')).substring(0,150);
});
lt.plugins.cljrefactor.usages.result_entry = (function result_entry(this$,entry){var e__10026__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"entry".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(entry))?" active":""))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.line","span.line",4619821962),new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(entry)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),crate.core.raw.call(null,lt.plugins.cljrefactor.usages.highlight.call(null,new cljs.core.Keyword(null,"match","match",1117572407).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))], null)], null));var seq__10729_10789 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__10026__auto__){
return (function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(entry));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"goto-line","goto-line",2802035088),new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(entry));
});})(e__10026__auto__))
], null)));var chunk__10730_10790 = null;var count__10731_10791 = 0;var i__10732_10792 = 0;while(true){
if((i__10732_10792 < count__10731_10791))
{var vec__10733_10793 = cljs.core._nth.call(null,chunk__10730_10790,i__10732_10792);var ev__10027__auto___10794 = cljs.core.nth.call(null,vec__10733_10793,0,null);var func__10028__auto___10795 = cljs.core.nth.call(null,vec__10733_10793,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10794,func__10028__auto___10795);
{
var G__10796 = seq__10729_10789;
var G__10797 = chunk__10730_10790;
var G__10798 = count__10731_10791;
var G__10799 = (i__10732_10792 + 1);
seq__10729_10789 = G__10796;
chunk__10730_10790 = G__10797;
count__10731_10791 = G__10798;
i__10732_10792 = G__10799;
continue;
}
} else
{var temp__4092__auto___10800 = cljs.core.seq.call(null,seq__10729_10789);if(temp__4092__auto___10800)
{var seq__10729_10801__$1 = temp__4092__auto___10800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10729_10801__$1))
{var c__9352__auto___10802 = cljs.core.chunk_first.call(null,seq__10729_10801__$1);{
var G__10803 = cljs.core.chunk_rest.call(null,seq__10729_10801__$1);
var G__10804 = c__9352__auto___10802;
var G__10805 = cljs.core.count.call(null,c__9352__auto___10802);
var G__10806 = 0;
seq__10729_10789 = G__10803;
chunk__10730_10790 = G__10804;
count__10731_10791 = G__10805;
i__10732_10792 = G__10806;
continue;
}
} else
{var vec__10734_10807 = cljs.core.first.call(null,seq__10729_10801__$1);var ev__10027__auto___10808 = cljs.core.nth.call(null,vec__10734_10807,0,null);var func__10028__auto___10809 = cljs.core.nth.call(null,vec__10734_10807,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10808,func__10028__auto___10809);
{
var G__10810 = cljs.core.next.call(null,seq__10729_10801__$1);
var G__10811 = null;
var G__10812 = 0;
var G__10813 = 0;
seq__10729_10789 = G__10810;
chunk__10730_10790 = G__10811;
count__10731_10791 = G__10812;
i__10732_10792 = G__10813;
continue;
}
}
} else
{}
}
break;
}
return e__10026__auto__;
});
lt.plugins.cljrefactor.usages.result_item = (function result_item(this$,item){var e__10026__auto__ = crate.core.html.call(null,(function (){var file = new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.path","p.path",4266284629),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file","span.file",4619643154),lt.objs.files.basename.call(null,file)], null),"(",lt.objs.files.parent.call(null,file),")"], null),cljs.core.map.call(null,((function (file){
return (function (p1__10735_SHARP_){return lt.plugins.cljrefactor.usages.result_entry.call(null,this$,p1__10735_SHARP_);
});})(file))
,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(item))], null);
})());var seq__10742_10814 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10743_10815 = null;var count__10744_10816 = 0;var i__10745_10817 = 0;while(true){
if((i__10745_10817 < count__10744_10816))
{var vec__10746_10818 = cljs.core._nth.call(null,chunk__10743_10815,i__10745_10817);var ev__10027__auto___10819 = cljs.core.nth.call(null,vec__10746_10818,0,null);var func__10028__auto___10820 = cljs.core.nth.call(null,vec__10746_10818,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10819,func__10028__auto___10820);
{
var G__10821 = seq__10742_10814;
var G__10822 = chunk__10743_10815;
var G__10823 = count__10744_10816;
var G__10824 = (i__10745_10817 + 1);
seq__10742_10814 = G__10821;
chunk__10743_10815 = G__10822;
count__10744_10816 = G__10823;
i__10745_10817 = G__10824;
continue;
}
} else
{var temp__4092__auto___10825 = cljs.core.seq.call(null,seq__10742_10814);if(temp__4092__auto___10825)
{var seq__10742_10826__$1 = temp__4092__auto___10825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10742_10826__$1))
{var c__9352__auto___10827 = cljs.core.chunk_first.call(null,seq__10742_10826__$1);{
var G__10828 = cljs.core.chunk_rest.call(null,seq__10742_10826__$1);
var G__10829 = c__9352__auto___10827;
var G__10830 = cljs.core.count.call(null,c__9352__auto___10827);
var G__10831 = 0;
seq__10742_10814 = G__10828;
chunk__10743_10815 = G__10829;
count__10744_10816 = G__10830;
i__10745_10817 = G__10831;
continue;
}
} else
{var vec__10747_10832 = cljs.core.first.call(null,seq__10742_10826__$1);var ev__10027__auto___10833 = cljs.core.nth.call(null,vec__10747_10832,0,null);var func__10028__auto___10834 = cljs.core.nth.call(null,vec__10747_10832,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10833,func__10028__auto___10834);
{
var G__10835 = cljs.core.next.call(null,seq__10742_10826__$1);
var G__10836 = null;
var G__10837 = 0;
var G__10838 = 0;
seq__10742_10814 = G__10835;
chunk__10743_10815 = G__10836;
count__10744_10816 = G__10837;
i__10745_10817 = G__10838;
continue;
}
}
} else
{}
}
break;
}
return e__10026__auto__;
});
lt.plugins.cljrefactor.usages.search_results = (function search_results(this$,res){var e__10026__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),cljs.core.map.call(null,(function (p1__10748_SHARP_){return lt.plugins.cljrefactor.usages.result_item.call(null,this$,p1__10748_SHARP_);
}),res)], null));var seq__10755_10839 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10756_10840 = null;var count__10757_10841 = 0;var i__10758_10842 = 0;while(true){
if((i__10758_10842 < count__10757_10841))
{var vec__10759_10843 = cljs.core._nth.call(null,chunk__10756_10840,i__10758_10842);var ev__10027__auto___10844 = cljs.core.nth.call(null,vec__10759_10843,0,null);var func__10028__auto___10845 = cljs.core.nth.call(null,vec__10759_10843,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10844,func__10028__auto___10845);
{
var G__10846 = seq__10755_10839;
var G__10847 = chunk__10756_10840;
var G__10848 = count__10757_10841;
var G__10849 = (i__10758_10842 + 1);
seq__10755_10839 = G__10846;
chunk__10756_10840 = G__10847;
count__10757_10841 = G__10848;
i__10758_10842 = G__10849;
continue;
}
} else
{var temp__4092__auto___10850 = cljs.core.seq.call(null,seq__10755_10839);if(temp__4092__auto___10850)
{var seq__10755_10851__$1 = temp__4092__auto___10850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10755_10851__$1))
{var c__9352__auto___10852 = cljs.core.chunk_first.call(null,seq__10755_10851__$1);{
var G__10853 = cljs.core.chunk_rest.call(null,seq__10755_10851__$1);
var G__10854 = c__9352__auto___10852;
var G__10855 = cljs.core.count.call(null,c__9352__auto___10852);
var G__10856 = 0;
seq__10755_10839 = G__10853;
chunk__10756_10840 = G__10854;
count__10757_10841 = G__10855;
i__10758_10842 = G__10856;
continue;
}
} else
{var vec__10760_10857 = cljs.core.first.call(null,seq__10755_10851__$1);var ev__10027__auto___10858 = cljs.core.nth.call(null,vec__10760_10857,0,null);var func__10028__auto___10859 = cljs.core.nth.call(null,vec__10760_10857,1,null);lt.util.dom.on.call(null,e__10026__auto__,ev__10027__auto___10858,func__10028__auto___10859);
{
var G__10860 = cljs.core.next.call(null,seq__10755_10851__$1);
var G__10861 = null;
var G__10862 = 0;
var G__10863 = 0;
seq__10755_10839 = G__10860;
chunk__10756_10840 = G__10861;
count__10757_10841 = G__10862;
i__10758_10842 = G__10863;
continue;
}
}
} else
{}
}
break;
}
return e__10026__auto__;
});
lt.plugins.cljrefactor.usages.show_results = (function show_results(this$,res){var container = lt.object.__GT_content.call(null,this$);var results_ul = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),container);return lt.util.dom.replace_with.call(null,results_ul,lt.plugins.cljrefactor.usages.search_results.call(null,this$,res));
});
lt.plugins.cljrefactor.usages.usages__GT_items = (function usages__GT_items(usages){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__10763){var map__10764 = p__10763;var map__10764__$1 = ((cljs.core.seq_QMARK_.call(null,map__10764))?cljs.core.apply.call(null,cljs.core.hash_map,map__10764):map__10764);var x = cljs.core.get.call(null,map__10764__$1,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243));return cljs.core.apply.call(null,cljs.core.hash_map,cljs.reader.read_string.call(null,x));
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243),usages)));
});
lt.plugins.cljrefactor.usages.items__GT_view = (function items__GT_view(items){return (function (x){return cljs.core.map.call(null,(function (k){var res = cljs.core.get.call(null,x,k);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),k,new cljs.core.Keyword(null,"items","items",1114430258),res], null);
}),cljs.core.keys.call(null,x));
}).call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"file","file",1017047278),items));
});
lt.plugins.cljrefactor.usages.find_symbol_op = (function find_symbol_op(ed,sym){var filename = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var ns = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl) (require 'lighttable.nrepl.eval)"),cljs.core.str(" (def z-ns "),cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str("'"),cljs.core.str(ns)].join(''):[cljs.core.str("(lighttable.nrepl.eval/file->ns \""),cljs.core.str(filename),cljs.core.str("\")")].join(''))),cljs.core.str(")"),cljs.core.str(" (def tr (refactor-nrepl.client/connect))"),cljs.core.str(" (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 10000)"),cljs.core.str(" {:op \"find-symbol\" :ns z-ns :name \""),cljs.core.str(sym),cljs.core.str("\""),cljs.core.str("}))")].join('');
});
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res = (function __BEH__find_symbol__DOT__res(ed,res){var resp = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)));var items = lt.plugins.cljrefactor.usages.usages__GT_items.call(null,resp);var status = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"status","status",4416389988),resp));if(cljs.core.seq.call(null,items))
{lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,new cljs.core.Keyword(null,"active","active",3885920888)], null),true)], null));
} else
{lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),null], null));
}
lt.plugins.cljrefactor.usages.show_results.call(null,lt.plugins.cljrefactor.usages.refactor_usages,lt.plugins.cljrefactor.usages.items__GT_view.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.usages.refactor_usages))));
lt.object.update_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for","search-for",4597237398),new cljs.core.Keyword(null,"namespace","namespace",2266122445)], null),((function (resp,items,status){
return (function (_){return new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});})(resp,items,status))
);
var temp__4092__auto___10864 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(status);if(cljs.core.truth_(temp__4092__auto___10864))
{var err_10865 = temp__4092__auto___10864;lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error when executing find usages:\n "),cljs.core.str(err_10865)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))))], null));
} else
{}
return lt.objs.notifos.done_working.call(null,"Find usages completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol.res","lt.plugins.cljrefactor.usages/find-symbol.res",2620470851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.find-symbol","editor.eval.clj.result.refactor.find-symbol",1593184613),null], null), null));
lt.plugins.cljrefactor.usages.__GT_idx_active = (function __GT_idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__10766_SHARP_,p2__10765_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__10765_SHARP_)))
{return p1__10766_SHARP_;
} else
{return null;
}
}),items));
});
lt.plugins.cljrefactor.usages.__BEH__open_active = (function __BEH__open_active(this$){var temp__4092__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(temp__4092__auto__)
{var items = temp__4092__auto__;var idx = lt.plugins.cljrefactor.usages.__GT_idx_active.call(null,items);var item = cljs.core.nth.call(null,items,idx);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(item));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"goto-line","goto-line",2802035088),cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(item)));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","open-active","lt.plugins.cljrefactor.usages/open-active",3180301936),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__open_active,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.usages","open-active!","lt.plugins.cljrefactor.usages/open-active!",2657621949),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__move_next = (function __BEH__move_next(this$){if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var idx = lt.plugins.cljrefactor.usages.__GT_idx_active.call(null,items);var cnt = cljs.core.count.call(null,items);if((cnt > (idx + 1)))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258),idx,new cljs.core.Keyword(null,"active","active",3885920888)], null),((function (items,idx,cnt){
return (function (_){return false;
});})(items,idx,cnt))
);
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258),(idx + 1),new cljs.core.Keyword(null,"active","active",3885920888)], null),((function (items,idx,cnt){
return (function (_){return true;
});})(items,idx,cnt))
);
return lt.plugins.cljrefactor.usages.show_results.call(null,this$,lt.plugins.cljrefactor.usages.items__GT_view.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","move-next","lt.plugins.cljrefactor.usages/move-next",1900625398),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__move_next,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.usages","move-next!","lt.plugins.cljrefactor.usages/move-next!",3581564695),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__move_prev = (function __BEH__move_prev(this$){if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{var idx = lt.plugins.cljrefactor.usages.__GT_idx_active.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if((idx > 0))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258),idx,new cljs.core.Keyword(null,"active","active",3885920888)], null),((function (idx){
return (function (_){return false;
});})(idx))
);
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258),(idx - 1),new cljs.core.Keyword(null,"active","active",3885920888)], null),((function (idx){
return (function (_){return true;
});})(idx))
);
return lt.plugins.cljrefactor.usages.show_results.call(null,this$,lt.plugins.cljrefactor.usages.items__GT_view.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","move-prev","lt.plugins.cljrefactor.usages/move-prev",1901483830),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__move_prev,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.usages","move-prev!","lt.plugins.cljrefactor.usages/move-prev!",3579340247),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__start = (function __BEH__find_symbol__DOT__start(this$,ed,token){var ns = (function (){var or__8604__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__8604__auto__))
{return or__8604__auto__;
} else
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
}
})();lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for","search-for",4597237398)], null),((function (ns){
return (function (_){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",4421347594),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"namespace","namespace",2266122445),ns], null);
});})(ns))
);
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.usages.find_symbol_op.call(null,ed,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.find-symbol","refactor.find-symbol",3383223538),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true,new cljs.core.Keyword(null,"symbol","symbol",4421347594),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol.start","lt.plugins.cljrefactor.usages/find-symbol.start",4504937093),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__start,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.find-symbol","refactor.find-symbol",3383223538),null], null), null));
lt.plugins.cljrefactor.usages.search_for = (function search_for(this$){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(this$);if(cljs.core.truth_(temp__4092__auto__))
{var info = temp__4092__auto__;return [cljs.core.str(new cljs.core.Keyword(null,"namespace","namespace",2266122445).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else
{return null;
}
})()], null)),"Find usages for: ");
});
lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_ = (function replace_in_hidden_ed_BANG_(file,selections,new$){var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file));var ed = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-clojure",new cljs.core.Keyword(null,"content","content",1965434859),content], null));var cm_ed = lt.objs.editor.__GT_cm_ed.call(null,ed);cm_ed.setSelections(cljs.core.clj__GT_js.call(null,selections));
cm_ed.replaceSelections(cljs.core.clj__GT_js.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,selections),new$)));
lt.objs.document.save.call(null,file,lt.objs.editor.__GT_val.call(null,ed));
return lt.object.destroy_BANG_.call(null,ed);
});
lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_ = (function replace_in_open_ed_BANG_(ed,selections,new$){var cm_ed = lt.objs.editor.__GT_cm_ed.call(null,ed);cm_ed.setSelections(cljs.core.clj__GT_js.call(null,selections));
cm_ed.replaceSelections(cljs.core.clj__GT_js.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,selections),new$)));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"save","save",1017427183));
});
lt.plugins.cljrefactor.usages.create_replace_selections = (function create_replace_selections(fileItems,old){var origin_QMARK_ = (function (item){return (new cljs.core.Keyword(null,"line-end","line-end",2201388788).cljs$core$IFn$_invoke$arity$1(item) > new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(item));
});var calc_col_start = ((function (origin_QMARK_){
return (function (item){if(origin_QMARK_.call(null,item))
{return new cljs.core.Keyword(null,"match","match",1117572407).cljs$core$IFn$_invoke$arity$1(item).indexOf(old);
} else
{return ((new cljs.core.Keyword(null,"col-end","col-end",1961472640).cljs$core$IFn$_invoke$arity$1(item) - 2) - cljs.core.count.call(null,old));
}
});})(origin_QMARK_))
;var calc_col_end = ((function (origin_QMARK_,calc_col_start){
return (function (item){if(origin_QMARK_.call(null,item))
{return (new cljs.core.Keyword(null,"match","match",1117572407).cljs$core$IFn$_invoke$arity$1(item).indexOf(old) + cljs.core.count.call(null,old));
} else
{return (new cljs.core.Keyword(null,"col-end","col-end",1961472640).cljs$core$IFn$_invoke$arity$1(item) - 2);
}
});})(origin_QMARK_,calc_col_start))
;return cljs.core.vec.call(null,cljs.core.map.call(null,((function (origin_QMARK_,calc_col_start,calc_col_end){
return (function (item){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",3895572007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(item) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),calc_col_start.call(null,item)], null),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(item) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),calc_col_end.call(null,item)], null)], null);
});})(origin_QMARK_,calc_col_start,calc_col_end))
,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(fileItems)));
});
lt.plugins.cljrefactor.usages.replace_in_editors_BANG_ = (function replace_in_editors_BANG_(itemsByFile,p__10768){var map__10774 = p__10768;var map__10774__$1 = ((cljs.core.seq_QMARK_.call(null,map__10774))?cljs.core.apply.call(null,cljs.core.hash_map,map__10774):map__10774);var new$ = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"new","new",1014013202));var old = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"old","old",1014014361));var open_eds = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322));var open_ed_QMARK_ = ((function (open_eds,map__10774,map__10774__$1,new$,old){
return (function (file){return cljs.core.some.call(null,((function (open_eds,map__10774,map__10774__$1,new$,old){
return (function (p1__10767_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__10767_SHARP_))),file))
{return p1__10767_SHARP_;
} else
{return null;
}
});})(open_eds,map__10774,map__10774__$1,new$,old))
,open_eds);
});})(open_eds,map__10774,map__10774__$1,new$,old))
;var seq__10775 = cljs.core.seq.call(null,itemsByFile);var chunk__10776 = null;var count__10777 = 0;var i__10778 = 0;while(true){
if((i__10778 < count__10777))
{var fileItems = cljs.core._nth.call(null,chunk__10776,i__10778);var temp__4090__auto___10866 = open_ed_QMARK_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems));if(cljs.core.truth_(temp__4090__auto___10866))
{var open_ed_10867 = temp__4090__auto___10866;lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_.call(null,open_ed_10867,lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
} else
{lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems),lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
}
{
var G__10868 = seq__10775;
var G__10869 = chunk__10776;
var G__10870 = count__10777;
var G__10871 = (i__10778 + 1);
seq__10775 = G__10868;
chunk__10776 = G__10869;
count__10777 = G__10870;
i__10778 = G__10871;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10775);if(temp__4092__auto__)
{var seq__10775__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10775__$1))
{var c__9352__auto__ = cljs.core.chunk_first.call(null,seq__10775__$1);{
var G__10872 = cljs.core.chunk_rest.call(null,seq__10775__$1);
var G__10873 = c__9352__auto__;
var G__10874 = cljs.core.count.call(null,c__9352__auto__);
var G__10875 = 0;
seq__10775 = G__10872;
chunk__10776 = G__10873;
count__10777 = G__10874;
i__10778 = G__10875;
continue;
}
} else
{var fileItems = cljs.core.first.call(null,seq__10775__$1);var temp__4090__auto___10876 = open_ed_QMARK_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems));if(cljs.core.truth_(temp__4090__auto___10876))
{var open_ed_10877 = temp__4090__auto___10876;lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_.call(null,open_ed_10877,lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
} else
{lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems),lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
}
{
var G__10878 = cljs.core.next.call(null,seq__10775__$1);
var G__10879 = null;
var G__10880 = 0;
var G__10881 = 0;
seq__10775 = G__10878;
chunk__10776 = G__10879;
count__10777 = G__10880;
i__10778 = G__10881;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__res = (function __BEH__rename_symbol__DOT__res(ed,res){var resp_10882 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)));var status_10883 = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"status","status",4416389988),resp_10882));var info_10884 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res);var pos_10885 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info_10884);var temp__4090__auto___10886 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(status_10883);if(cljs.core.truth_(temp__4090__auto___10886))
{var err_10887 = temp__4090__auto___10886;lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error when executing renaming symbol:\n "),cljs.core.str(err_10887)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),pos_10885], null));
} else
{if(cljs.core.not.call(null,cljs.core.seq.call(null,resp_10882)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error when executing renaming symbol:\n "),cljs.core.str(" No results from middleware, probably because of errors in a candidate ns, try running find usages to see which ns has errors")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),pos_10885], null));
} else
{var itemsByFile_10888 = lt.plugins.cljrefactor.usages.items__GT_view.call(null,lt.plugins.cljrefactor.usages.usages__GT_items.call(null,resp_10882));lt.plugins.cljrefactor.usages.replace_in_editors_BANG_.call(null,itemsByFile_10888,info_10884);
lt.objs.editor.focus.call(null,ed);
lt.objs.editor.move_cursor.call(null,ed,pos_10885);
lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"Renamed ok !",pos_10885);
}
}
return lt.objs.notifos.done_working.call(null,"Rename completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","rename-symbol.res","lt.plugins.cljrefactor.usages/rename-symbol.res",1052900768),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.rename-symbol","editor.eval.clj.result.refactor.rename-symbol",3323570816),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__start = (function __BEH__rename_symbol__DOT__start(ed,old,new$){if(cljs.core.seq.call(null,clojure.string.trim.call(null,new$)))
{var ns = (function (){var or__8604__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__8604__auto__))
{return or__8604__auto__;
} else
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
}
})();var pos = lt.objs.editor.__GT_cursor.call(null,ed);lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Replacing: "),cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(old),cljs.core.str(" with "),cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(new$)].join(''));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.usages.find_symbol_op.call(null,ed,old),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.rename-symbol","refactor.rename-symbol",1269092045),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true,new cljs.core.Keyword(null,"old","old",1014014361),old,new cljs.core.Keyword(null,"new","new",1014013202),new$,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null));
} else
{lt.objs.console.log.call(null,"Can't rename to empty !");
return lt.objs.editor.focus.call(null,ed);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","rename-symbol.start","lt.plugins.cljrefactor.usages/rename-symbol.start",1349763874),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__start,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.rename-symbol","refactor.rename-symbol",1269092045),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__prompt = (function __BEH__rename_symbol__DOT__prompt(ed,token){var ns = (function (){var or__8604__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__8604__auto__))
{return or__8604__auto__;
} else
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
}
})();var sym = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token);return lt.plugins.cljrefactor.input_prompt.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"behavior","behavior",2524816836),new cljs.core.Keyword(null,"refactor.rename-symbol","refactor.rename-symbol",1269092045),new cljs.core.Keyword(null,"init-value","init-value",4481282534),sym,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","rename-symbol.prompt","lt.plugins.cljrefactor.usages/rename-symbol.prompt",2907883698),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__prompt,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.rename-symbol.prompt","refactor.rename-symbol.prompt",1828694729),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","refactor-usages","lt.plugins.cljrefactor.usages/refactor-usages",808406084),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.usages","refactor.usages",1885039760),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Find usages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",980356928),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searcher","div.searcher",3267271812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),crate.binding.bound.call(null,this$,lt.plugins.cljrefactor.usages.search_for)], null)], null)], null);
}));
lt.plugins.cljrefactor.usages.refactor_usages = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","refactor-usages","lt.plugins.cljrefactor.usages/refactor-usages",808406084));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol-next","lt.plugins.cljrefactor.usages/find-symbol-next",2278373977),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Find usages - move next",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","move-next!","lt.plugins.cljrefactor.usages/move-next!",3581564695));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol-prev","lt.plugins.cljrefactor.usages/find-symbol-prev",2278183833),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Find usages - move previous",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","move-prev!","lt.plugins.cljrefactor.usages/move-prev!",3579340247));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol-open-active","lt.plugins.cljrefactor.usages/find-symbol-open-active",761837133),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Find usages - open selected",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","open-active!","lt.plugins.cljrefactor.usages/open-active!",2657621949));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol","lt.plugins.cljrefactor.usages/find-symbol",1461043889),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Find usages",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.clojure.find_symbol_at_cursor.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var token = temp__4092__auto____$1;return lt.object.raise.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.Keyword(null,"refactor.find-symbol","refactor.find-symbol",3383223538),ed,token);
} else
{return null;
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.usages","replace-symbol","lt.plugins.cljrefactor.usages/replace-symbol",3870887768),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Rename symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.clojure.find_symbol_at_cursor.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var token = temp__4092__auto____$1;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.rename-symbol.prompt","refactor.rename-symbol.prompt",1828694729),token);
} else
{return null;
}
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor')) {
goog.provide('lt.plugins.cljrefactor');
goog.require('cljs.core');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.plugins.cljrefactor.refactor');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.cljrefactor.artifact_version');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.cljrefactor.refactor');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.plugins.cljrefactor.namespace');
goog.require('lt.plugins.cljrefactor.namespace');
goog.require('lt.plugins.cljrefactor.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.artifact_version');
goog.require('lt.objs.editor');
goog.require('lt.plugins.cljrefactor.selector');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.__BEH__clj_refactor__DOT__maybe_project = (function __BEH__clj_refactor__DOT__maybe_project(ed){if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))),"project.clj")) && (cljs.core.not.call(null,lt.object.has_tag_QMARK_.call(null,ed,new cljs.core.Keyword(null,"editor.clj.project-file","editor.clj.project-file",4785715504)))))
{return lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.clj.project-file","editor.clj.project-file",4785715504)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","clj-refactor.maybe-project","lt.plugins.cljrefactor/clj-refactor.maybe-project",4351178672),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__clj_refactor__DOT__maybe_project,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null),new cljs.core.Keyword(null,"description","description",3584325486),"Add tag to indicate that the file is a lein project file");
lt.plugins.cljrefactor.artifact_version_list = (function artifact_version_list(artifact){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str("(def tr (refactor-nrepl.client/connect))"),cljs.core.str("(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"artifact-versions\" :artifact \""),cljs.core.str(artifact),cljs.core.str("\"}))")].join('');
});
lt.plugins.cljrefactor.__BEH__trigger_artifact_version_hints = (function __BEH__trigger_artifact_version_hints(editor,artifact){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Retrieving clojars artifact versions")].join(''));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifact_version_list.call(null,artifact),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.artifact-versions","refactor.artifact-versions",4271851004),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","trigger-artifact-version-hints","lt.plugins.cljrefactor/trigger-artifact-version-hints",4599841235),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__trigger_artifact_version_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact-version.hints.update!","artifact-version.hints.update!",714019447),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.cljrefactor.__BEH__artifact_version_selected = (function __BEH__artifact_version_selected(ed,version){lt.objs.editor.insert_at_cursor.call(null,ed,[cljs.core.str("\""),cljs.core.str(version),cljs.core.str("\"")].join(''));
return lt.objs.editor.focus.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","artifact-version-selected","lt.plugins.cljrefactor/artifact-version-selected",1446659001),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__artifact_version_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact-version.selected","artifact-version.selected",2838678782),null], null), null));
lt.plugins.cljrefactor.__BEH__finish_artifact_version_hints = (function __BEH__finish_artifact_version_hints(ed,res){var vs = cljs.core.first.call(null,new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))))));var hints = cljs.core.map.call(null,((function (vs){
return (function (p1__10143_SHARP_){return {"completion": p1__10143_SHARP_};
});})(vs))
,vs);if((cljs.core.count.call(null,vs) > 1))
{return lt.plugins.cljrefactor.selector.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"behavior","behavior",2524816836),new cljs.core.Keyword(null,"artifact-version.selected","artifact-version.selected",2838678782),new cljs.core.Keyword(null,"items","items",1114430258),vs,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed)], null));
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact-version.selected","artifact-version.selected",2838678782),cljs.core.first.call(null,vs));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","finish-artifact-version-hints","lt.plugins.cljrefactor/finish-artifact-version-hints",1219414414),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__finish_artifact_version_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.artifact-versions","editor.eval.clj.result.refactor.artifact-versions",923340847),null], null), null));
lt.plugins.cljrefactor.artifact_list = (function artifact_list(){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str("(def tr (refactor-nrepl.client/connect))"),cljs.core.str("(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 10000) {:op \"artifact-list\"}))")].join('');
});
lt.plugins.cljrefactor.__BEH__trigger_artifact_hints = (function __BEH__trigger_artifact_hints(editor,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword("lt.plugins.cljrefactor","fetching-deps","lt.plugins.cljrefactor/fetching-deps",3370118203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{return null;
} else
{lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.cljrefactor","fetching-deps","lt.plugins.cljrefactor/fetching-deps",3370118203)], null),((function (default_client,temp__4092__auto__){
return (function (_){return true;
});})(default_client,temp__4092__auto__))
);
lt.objs.notifos.set_msg_BANG_.call(null,"Retrieving clojars artifacts");
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifact_list.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.artifacts","refactor.artifacts",2606704295),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","trigger-artifact-hints","lt.plugins.cljrefactor/trigger-artifact-hints",1356312830),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__trigger_artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact.hints.update!","artifact.hints.update!",2088367020),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.plugins.cljrefactor.sel_cb = (function sel_cb(ed,fun,c){var artifact = cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,c),"completion");fun.call(null,[cljs.core.str(artifact),cljs.core.str(" ")].join(''));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact-version.hints.update!","artifact-version.hints.update!",714019447),artifact);
});
lt.plugins.cljrefactor.create_artifact_hints = (function create_artifact_hints(ed,artifacts){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10144_SHARP_){return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{"item": p1__10144_SHARP_, "completion": p1__10144_SHARP_, "text": p1__10144_SHARP_, "select": cljs.core.partial.call(null,lt.plugins.cljrefactor.sel_cb,ed)}], null));
}),artifacts));
});
lt.plugins.cljrefactor.__BEH__finish_artifact_hints = (function __BEH__finish_artifact_hints(editor,res){cljs.core.println.call(null,res);
var artifacts = new cljs.core.Keyword(null,"artifacts","artifacts",1575856211).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)))));var hints = lt.plugins.cljrefactor.create_artifact_hints.call(null,editor,artifacts);lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.cljrefactor","fetching-deps","lt.plugins.cljrefactor/fetching-deps",3370118203)], null),((function (artifacts,hints){
return (function (_){return false;
});})(artifacts,hints))
);
lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor","dep-hints","lt.plugins.cljrefactor/dep-hints",2704514262),hints], null));
return lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","finish-artifact-hints","lt.plugins.cljrefactor/finish-artifact-hints",4466395321),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__finish_artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.artifacts","editor.eval.clj.result.refactor.artifacts",4548973530),null], null), null));
lt.plugins.cljrefactor.__BEH__artifact_hints = (function __BEH__artifact_hints(ed,hints,token){lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor","token","lt.plugins.cljrefactor/token",4439741547),token], null));
if(cljs.core.seq.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","dep-hints","lt.plugins.cljrefactor/dep-hints",2704514262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact.hints.update!","artifact.hints.update!",2088367020));
}
var temp__4090__auto__ = new cljs.core.Keyword("lt.plugins.cljrefactor","dep-hints","lt.plugins.cljrefactor/dep-hints",2704514262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4090__auto__))
{var clj_hints = temp__4090__auto__;return clj_hints;
} else
{return hints;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","artifact-hints","lt.plugins.cljrefactor/artifact-hints",3669934419),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.plugins.cljrefactor.__BEH__ensure_connected = (function __BEH__ensure_connected(ed){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),"(println \"ping\")",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"no-op","no-op",1118845151),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","ensure-connected","lt.plugins.cljrefactor/ensure-connected",4599780010),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__ensure_connected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.connect","refactor.connect",3351801776),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor","ping-repl","lt.plugins.cljrefactor/ping-repl",680439130),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Ensure editor connected",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.connect","refactor.connect",3351801776));
} else
{return null;
}
})], null));
lt.plugins.cljrefactor.__BEH__hotload_dep__DOT__res = (function __BEH__hotload_dep__DOT__res(ed,res){var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))));var temp__4090__auto__ = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)))));if(cljs.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),err,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null));
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"Loaded ok!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","hotload-dep.res","lt.plugins.cljrefactor/hotload-dep.res",3007334301),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__hotload_dep__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.hotload-dep","editor.eval.clj.result.refactor.hotload-dep",2122001198),null], null), null));
lt.plugins.cljrefactor.parse_dep = (function parse_dep(dep){try{var dill = cljs.reader.read_string.call(null,dep);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,dill),2))
{return dill;
} else
{return null;
}
}catch (e10146){var e = e10146;return null;
}});
lt.plugins.cljrefactor.hotload_dep_op = (function hotload_dep_op(dep){var coords = [cljs.core.str("\"["),cljs.core.str(cljs.core.first.call(null,dep)),cljs.core.str(" \\\""),cljs.core.str(cljs.core.second.call(null,dep)),cljs.core.str("\\"),cljs.core.str("\""),cljs.core.str("]\"")].join('');return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str(" (def tr (refactor-nrepl.client/connect))"),cljs.core.str(" (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"hotload-dependency\" :coordinates "),cljs.core.str(coords),cljs.core.str("}))")].join('');
});
lt.plugins.cljrefactor.__BEH__hotload_dep_BANG_ = (function __BEH__hotload_dep_BANG_(ed,coords){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.hotload_dep_op.call(null,coords),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.hotload-dep","refactor.hotload-dep",3912040123),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","hotload-dep!","lt.plugins.cljrefactor/hotload-dep!",1855078936),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__hotload_dep_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.hotload-dep!","refactor.hotload-dep!",661803370),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor","hotload-dep","lt.plugins.cljrefactor/hotload-dep",4454739055),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Hotload dependency",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var pos = (cljs.core.truth_(ed)?lt.objs.editor.__GT_cursor.call(null,ed):null);if(cljs.core.truth_(ed))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var candidate = lt.objs.editor.selection.call(null,ed);var coords = lt.plugins.cljrefactor.parse_dep.call(null,candidate);lt.objs.editor.move_cursor.call(null,ed,pos);
if(cljs.core.truth_((function (){var and__8592__auto__ = coords;if(cljs.core.truth_(and__8592__auto__))
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return and__8592__auto__;
}
})()))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.hotload-dep!","refactor.hotload-dep!",661803370),coords);
} else
{return null;
}
} else
{return null;
}
})], null));
lt.plugins.cljrefactor.get_symbol_token = (function get_symbol_token(ed){var temp__4092__auto__ = lt.plugins.clojure.find_symbol_at_cursor.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var token = temp__4092__auto__;return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",4421347594),new cljs.core.Keyword(null,"alias","alias",1106807234)], null),cljs.core.reverse.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),"/")));
} else
{return null;
}
});
lt.plugins.cljrefactor.add_missing_require = (function add_missing_require(ed,item){var symbol_token = lt.plugins.cljrefactor.get_symbol_token.call(null,ed);var a = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"alias","alias",1106807234).cljs$core$IFn$_invoke$arity$1(symbol_token);if(cljs.core.truth_(temp__4090__auto__))
{var a = temp__4090__auto__;return a;
} else
{return cljs.core.last.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item),"."));
}
})();return lt.plugins.cljrefactor.namespace.replace_ns.call(null,ed,lt.plugins.cljrefactor.pprint.pprint_ns.call(null,lt.plugins.cljrefactor.namespace.add_require.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(lt.plugins.cljrefactor.namespace.get_ns_decl.call(null,ed)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"as","as",1013907364),a], null))));
});
lt.plugins.cljrefactor.add_missing_import = (function add_missing_import(ed,item){return lt.plugins.cljrefactor.namespace.replace_ns.call(null,ed,lt.plugins.cljrefactor.pprint.pprint_ns.call(null,lt.plugins.cljrefactor.namespace.add_import.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(lt.plugins.cljrefactor.namespace.get_ns_decl.call(null,ed)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item)))));
});
lt.plugins.cljrefactor.add_missing_type = (function add_missing_type(ed,item){var req = clojure.string.replace.call(null,[cljs.core.str(new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item))].join(''),/\.([^.]*)$/,"");var imp = new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item);var ns_decl = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(lt.plugins.cljrefactor.namespace.get_ns_decl.call(null,ed));return lt.plugins.cljrefactor.namespace.replace_ns.call(null,ed,lt.plugins.cljrefactor.pprint.pprint_ns.call(null,lt.plugins.cljrefactor.namespace.add_import.call(null,lt.plugins.cljrefactor.namespace.add_require.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(lt.plugins.cljrefactor.namespace.get_ns_decl.call(null,ed)),req),cljs.core._conj.call(null,cljs.core.List.EMPTY,imp))));
});
lt.plugins.cljrefactor.__BEH__resolve_missing_selected = (function __BEH__resolve_missing_selected(ed,item){var G__10148_10160 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852),G__10148_10160))
{lt.plugins.cljrefactor.add_missing_type.call(null,ed,item);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__10148_10160))
{lt.plugins.cljrefactor.add_missing_import.call(null,ed,item);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767),G__10148_10160))
{lt.plugins.cljrefactor.add_missing_require.call(null,ed,item);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.objs.console.error.call(null,[cljs.core.str("Unsupported candidate: "),cljs.core.str(item)].join(''));
} else
{}
}
}
}
lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Symbol: "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(" added to namespace declaration")].join(''));
return lt.objs.editor.focus.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","resolve-missing-selected","lt.plugins.cljrefactor/resolve-missing-selected",671061857),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__resolve_missing_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolve-missing.selected","resolve-missing.selected",3085476694),null], null), null));
lt.plugins.cljrefactor.resolve_missing_op = (function resolve_missing_op(sym){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str("(def tr (refactor-nrepl.client/connect))"),cljs.core.str("(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"resolve-missing\" :symbol \""),cljs.core.str(sym),cljs.core.str("\"}))")].join('');
});
lt.plugins.cljrefactor.parse_missing = (function parse_missing(res){var candidates = new cljs.core.Keyword(null,"candidates","candidates",3897560770).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)))));if(typeof candidates === 'string')
{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (candidates){
return (function (p1__10149_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.Keyword(null,"type","type",1017479852)],[cljs.core.first.call(null,p1__10149_SHARP_),cljs.core.second.call(null,p1__10149_SHARP_)]);
});})(candidates))
,cljs.reader.read_string.call(null,candidates)));
} else
{return null;
}
});
lt.plugins.cljrefactor.__BEH__resolve_missing_res = (function __BEH__resolve_missing_res(ed,res){var temp__4090__auto__ = lt.plugins.cljrefactor.parse_missing.call(null,res);if(cljs.core.truth_(temp__4090__auto__))
{var candidates = temp__4090__auto__;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,candidates),1))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"resolve-missing.selected","resolve-missing.selected",3085476694),cljs.core.first.call(null,candidates));
} else
{return lt.plugins.cljrefactor.selector.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"behavior","behavior",2524816836),new cljs.core.Keyword(null,"resolve-missing.selected","resolve-missing.selected",3085476694),new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"items","items",1114430258),candidates], null));
}
} else
{return cljs.core.println.call(null,"Couldn't find any suggestion for symbol");
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","resolve-missing-res","lt.plugins.cljrefactor/resolve-missing-res",935277452),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__resolve_missing_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.resolve-missing","editor.eval.clj.result.refactor.resolve-missing",1162041406),null], null), null));
lt.plugins.cljrefactor.__BEH__resolve_missing_BANG_ = (function __BEH__resolve_missing_BANG_(ed,sym){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.resolve_missing_op.call(null,sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.resolve-missing","refactor.resolve-missing",2492898635),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","resolve-missing!","lt.plugins.cljrefactor/resolve-missing!",1565569160),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__resolve_missing_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.resolve-missing!","refactor.resolve-missing!",3913057498),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor","resolve-missing","lt.plugins.cljrefactor/resolve-missing",4428370879),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Resolve missing",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.cljrefactor.get_symbol_token.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var t = temp__4092__auto____$1;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.resolve-missing!","refactor.resolve-missing!",3913057498),new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(t));
} else
{return null;
}
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('clojure.zip')) {
goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("zip","make-node","zip/make-node",2241612572),make_node,new cljs.core.Keyword("zip","children","zip/children",2681289882),children,new cljs.core.Keyword("zip","branch?","zip/branch?",1159334776),branch_QMARK_], null));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",1965434859)),(function (node,children){return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",1965434859),(function (){var and__8592__auto__ = children;if(cljs.core.truth_(and__8592__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__8592__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){return new cljs.core.Keyword("zip","branch?","zip/branch?",1159334776).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return new cljs.core.Keyword("zip","children","zip/children",2681289882).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){return new cljs.core.Keyword("zip","make-node","zip/make-node",2241612572).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){return new cljs.core.Keyword(null,"pnodes","pnodes",4325362611).cljs$core$IFn$_invoke$arity$1(loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"l","l",1013904350).cljs$core$IFn$_invoke$arity$1(loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){return new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__10680 = loc;var node = cljs.core.nth.call(null,vec__10680,0,null);var path = cljs.core.nth.call(null,vec__10680,1,null);var vec__10681 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__10681,0,null);var cnext = cljs.core.nthnext.call(null,vec__10681,1);var cs = vec__10681;if(cljs.core.truth_(cs))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611),(cljs.core.truth_(path)?cljs.core.conj.call(null,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611).cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),new cljs.core.Keyword(null,"ppath","ppath",1120772103),path,new cljs.core.Keyword(null,"r","r",1013904356),cnext], null)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){var vec__10684 = loc;var node = cljs.core.nth.call(null,vec__10684,0,null);var map__10685 = cljs.core.nth.call(null,vec__10684,1,null);var map__10685__$1 = ((cljs.core.seq_QMARK_.call(null,map__10685))?cljs.core.apply.call(null,cljs.core.hash_map,map__10685):map__10685);var path = map__10685__$1;var l = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var r = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"r","r",1013904356));var changed_QMARK_ = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"changed?","changed?",2446321533));if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__8592__auto__ = ppath;if(cljs.core.truth_(and__8592__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__8592__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1)))
{return clojure.zip.node.call(null,loc);
} else
{var p = clojure.zip.up.call(null,loc);if(cljs.core.truth_(p))
{{
var G__10718 = p;
loc = G__10718;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){var vec__10689 = loc;var node = cljs.core.nth.call(null,vec__10689,0,null);var map__10690 = cljs.core.nth.call(null,vec__10689,1,null);var map__10690__$1 = ((cljs.core.seq_QMARK_.call(null,map__10690))?cljs.core.apply.call(null,cljs.core.hash_map,map__10690):map__10690);var path = map__10690__$1;var l = cljs.core.get.call(null,map__10690__$1,new cljs.core.Keyword(null,"l","l",1013904350));var vec__10691 = cljs.core.get.call(null,map__10690__$1,new cljs.core.Keyword(null,"r","r",1013904356));var r = cljs.core.nth.call(null,vec__10691,0,null);var rnext = cljs.core.nthnext.call(null,vec__10691,1);var rs = vec__10691;if(cljs.core.truth_((function (){var and__8592__auto__ = path;if(cljs.core.truth_(and__8592__auto__))
{return rs;
} else
{return and__8592__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,node),new cljs.core.Keyword(null,"r","r",1013904356),rnext)], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){var vec__10694 = loc;var node = cljs.core.nth.call(null,vec__10694,0,null);var map__10695 = cljs.core.nth.call(null,vec__10694,1,null);var map__10695__$1 = ((cljs.core.seq_QMARK_.call(null,map__10695))?cljs.core.apply.call(null,cljs.core.hash_map,map__10695):map__10695);var path = map__10695__$1;var l = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__8592__auto__ = path;if(cljs.core.truth_(and__8592__auto__))
{return r;
} else
{return and__8592__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,r),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.apply.call(null,cljs.core.conj,l,node,cljs.core.butlast.call(null,r)),new cljs.core.Keyword(null,"r","r",1013904356),null)], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){var vec__10698 = loc;var node = cljs.core.nth.call(null,vec__10698,0,null);var map__10699 = cljs.core.nth.call(null,vec__10698,1,null);var map__10699__$1 = ((cljs.core.seq_QMARK_.call(null,map__10699))?cljs.core.apply.call(null,cljs.core.hash_map,map__10699):map__10699);var path = map__10699__$1;var l = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__8592__auto__ = path;if(cljs.core.truth_(and__8592__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__8592__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,node,r))], null),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){var vec__10702 = loc;var node = cljs.core.nth.call(null,vec__10702,0,null);var map__10703 = cljs.core.nth.call(null,vec__10702,1,null);var map__10703__$1 = ((cljs.core.seq_QMARK_.call(null,map__10703))?cljs.core.apply.call(null,cljs.core.hash_map,map__10703):map__10703);var path = map__10703__$1;var l = cljs.core.get.call(null,map__10703__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__10703__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__8592__auto__ = path;if(cljs.core.truth_(and__8592__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__8592__auto__;
}
})()))
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.concat.call(null,cljs.core.rest.call(null,l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),r))], null),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){var vec__10706 = loc;var node = cljs.core.nth.call(null,vec__10706,0,null);var map__10707 = cljs.core.nth.call(null,vec__10706,1,null);var map__10707__$1 = ((cljs.core.seq_QMARK_.call(null,map__10707))?cljs.core.apply.call(null,cljs.core.hash_map,map__10707):map__10707);var path = map__10707__$1;var l = cljs.core.get.call(null,map__10707__$1,new cljs.core.Keyword(null,"l","l",1013904350));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__10710 = loc;var node = cljs.core.nth.call(null,vec__10710,0,null);var map__10711 = cljs.core.nth.call(null,vec__10710,1,null);var map__10711__$1 = ((cljs.core.seq_QMARK_.call(null,map__10711))?cljs.core.apply.call(null,cljs.core.hash_map,map__10711):map__10711);var path = map__10711__$1;var r = cljs.core.get.call(null,map__10711__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__10713 = loc;var _ = cljs.core.nth.call(null,vec__10713,0,null);var path = cljs.core.nth.call(null,vec__10713,1,null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return edit__delegate.call(this,loc,f,args);};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__10719){
var loc = cljs.core.first(arglist__10719);
arglist__10719 = cljs.core.next(arglist__10719);
var f = cljs.core.first(arglist__10719);
var args = cljs.core.rest(arglist__10719);
return edit__delegate(loc,f,args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1)))
{return loc;
} else
{var or__8604__auto__ = (function (){var and__8592__auto__ = clojure.zip.branch_QMARK_.call(null,loc);if(cljs.core.truth_(and__8592__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__8592__auto__;
}
})();if(cljs.core.truth_(or__8604__auto__))
{return or__8604__auto__;
} else
{var or__8604__auto____$1 = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__8604__auto____$1))
{return or__8604__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__8604__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__8604__auto____$2))
{return or__8604__auto____$2;
} else
{{
var G__10720 = clojure.zip.up.call(null,p);
p = G__10720;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",1014004813)], null);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){var temp__4090__auto__ = clojure.zip.left.call(null,loc);if(cljs.core.truth_(temp__4090__auto__))
{var lloc = temp__4090__auto__;var loc__$1 = lloc;while(true){
var temp__4090__auto____$1 = (function (){var and__8592__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__8592__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__8592__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;{
var G__10721 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__10721;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){var vec__10716 = loc;var node = cljs.core.nth.call(null,vec__10716,0,null);var map__10717 = cljs.core.nth.call(null,vec__10716,1,null);var map__10717__$1 = ((cljs.core.seq_QMARK_.call(null,map__10717))?cljs.core.apply.call(null,cljs.core.hash_map,map__10717):map__10717);var path = map__10717__$1;var l = cljs.core.get.call(null,map__10717__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__10717__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__10717__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__10717__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));while(true){
var temp__4090__auto__ = (function (){var and__8592__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__8592__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__8592__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__10722 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__10722;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__8592__auto__ = ppath;if(cljs.core.truth_(and__8592__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__8592__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.definition')) {
goog.provide('lt.plugins.cljrefactor.definition');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.files');
goog.require('lt.plugins.paredit');
goog.require('lt.plugins.paredit');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.eval');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.definition.get_definition_in_hidden_ed = (function get_definition_in_hidden_ed(file,line){var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file));var ed = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-clojure",new cljs.core.Keyword(null,"content","content",1965434859),content], null));var vec__11082 = lt.plugins.paredit.form_boundary.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line.call(null,ed,(line - 1)).indexOf("(") + 1)], null));var start = cljs.core.nth.call(null,vec__11082,0,null);var end = cljs.core.nth.call(null,vec__11082,1,null);var sel = (cljs.core.truth_((function (){var and__8592__auto__ = start;if(cljs.core.truth_(and__8592__auto__))
{return end;
} else
{return and__8592__auto__;
}
})())?(function (){lt.objs.editor.set_selection.call(null,ed,start,end);
return lt.objs.editor.selection.call(null,ed);
})():null);lt.object.destroy_BANG_.call(null,ed);
return sel;
});
lt.plugins.cljrefactor.definition.__BEH__show_definition_at_cursor = (function __BEH__show_definition_at_cursor(ed){var token = lt.plugins.clojure.find_symbol_at_cursor.call(null,ed);if(cljs.core.truth_(token))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.show-definition!","editor.show-definition!",4534037553),token);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.definition","show-definition-at-cursor","lt.plugins.cljrefactor.definition/show-definition-at-cursor",4702447362),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.definition.__BEH__show_definition_at_cursor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.show-definition-at-cursor!","editor.show-definition-at-cursor!",3982167662),null], null), null));
lt.plugins.cljrefactor.definition.__BEH__start_show_definition = (function __BEH__start_show_definition(ed,token){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var command = lt.util.cljs.__GT_dottedkw.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679),lt.plugins.clojure.mime__GT_type.call(null,new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(info)),new cljs.core.Keyword(null,"doc","doc",1014003882));var info__$1 = cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"show-def","show-def",673906855),new cljs.core.Keyword(null,"sym","sym",1014018617),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"loc","loc",1014011570),new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"print-length","print-length",3960797560),lt.object.raise_reduce.call(null,ed,new cljs.core.Keyword(null,"clojure.print-length+","clojure.print-length+",4366367949),null));return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"info","info",1017141280),info__$1,new cljs.core.Keyword(null,"origin","origin",4300251800),ed,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.clojure.try_connect], null)),command,info__$1,new cljs.core.Keyword(null,"only","only",1017320222),ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.definition","start-show-definition","lt.plugins.cljrefactor.definition/start-show-definition",3909262168),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.definition.__BEH__start_show_definition,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.show-definition!","editor.show-definition!",4534037553),null], null), null));
lt.plugins.cljrefactor.definition.__BEH__finish_show_definition = (function __BEH__finish_show_definition(ed,p__11083){var map__11085 = p__11083;var map__11085__$1 = ((cljs.core.seq_QMARK_.call(null,map__11085))?cljs.core.apply.call(null,cljs.core.hash_map,map__11085):map__11085);var res = map__11085__$1;var line = cljs.core.get.call(null,map__11085__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__11085__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"show-def","show-def",673906855),new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(res)))
{if(cljs.core.truth_((function (){var and__8592__auto__ = res;if(cljs.core.truth_(and__8592__auto__))
{var and__8592__auto____$1 = file;if(cljs.core.truth_(and__8592__auto____$1))
{return line;
} else
{return and__8592__auto____$1;
}
} else
{return and__8592__auto__;
}
})()))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.cljrefactor.definition.get_definition_in_hidden_ed.call(null,file,line),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(res))], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Definition not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.definition","finish-show-definition","lt.plugins.cljrefactor.definition/finish-show-definition",3232815397),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.definition.__BEH__finish_show_definition,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.clj.doc","editor.clj.doc",4087602908),null,new cljs.core.Keyword(null,"editor.cljs.doc","editor.cljs.doc",1871386511),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.definition","show-definition","lt.plugins.cljrefactor.definition/show-definition",550559715),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Show definition",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.show-definition-at-cursor!","editor.show-definition-at-cursor!",3982167662));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.threading')) {
goog.provide('lt.plugins.cljrefactor.threading');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.zip');
goog.require('lt.objs.editor.pool');
goog.require('clojure.zip');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.threading.str__GT_seq_zip = (function str__GT_seq_zip(form_str){if(cljs.core.seq.call(null,form_str))
{return clojure.zip.seq_zip.call(null,cljs.reader.read_string.call(null,clojure.string.replace.call(null,form_str,/(#\(.*\)[^\)])/,"\"___$1___\" ")));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.zip__GT_str = (function zip__GT_str(zipnode){return clojure.string.replace.call(null,cljs.core.pr_str.call(null,clojure.zip.root.call(null,zipnode)),/\"___|___\"/,"");
});
lt.plugins.cljrefactor.threading.top = (function top(zipnode){var n = zipnode;while(true){
if(cljs.core.not.call(null,clojure.zip.up.call(null,n)))
{return n;
} else
{{
var G__10673 = clojure.zip.up.call(null,n);
n = G__10673;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.threading.threading_locator = (function threading_locator(t){var G__10654 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__10654))
{return null;
} else
{if(cljs.core._EQ_.call(null,"some->>",G__10654))
{return ((function (G__10654){
return (function (p1__10652_SHARP_){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__10652_SHARP_))));
});
;})(G__10654))
} else
{if(cljs.core._EQ_.call(null,"->>",G__10654))
{return ((function (G__10654){
return (function (p1__10652_SHARP_){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__10652_SHARP_))));
});
;})(G__10654))
} else
{if(cljs.core._EQ_.call(null,"some->",G__10654))
{return ((function (G__10654){
return (function (p1__10651_SHARP_){return clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__10651_SHARP_))));
});
;})(G__10654))
} else
{if(cljs.core._EQ_.call(null,"->",G__10654))
{return ((function (G__10654){
return (function (p1__10651_SHARP_){return clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__10651_SHARP_))));
});
;})(G__10654))
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(t)].join('')));
} else
{return null;
}
}
}
}
}
}
});
lt.plugins.cljrefactor.threading.unwind_op = (function unwind_op(t){var G__10660 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__10660))
{return null;
} else
{if(cljs.core._EQ_.call(null,"some->>",G__10660))
{return ((function (G__10660){
return (function (p1__10657_SHARP_,p2__10658_SHARP_){return clojure.zip.append_child.call(null,p1__10657_SHARP_,p2__10658_SHARP_);
});
;})(G__10660))
} else
{if(cljs.core._EQ_.call(null,"->>",G__10660))
{return ((function (G__10660){
return (function (p1__10657_SHARP_,p2__10658_SHARP_){return clojure.zip.append_child.call(null,p1__10657_SHARP_,p2__10658_SHARP_);
});
;})(G__10660))
} else
{if(cljs.core._EQ_.call(null,"some->",G__10660))
{return ((function (G__10660){
return (function (p1__10655_SHARP_,p2__10656_SHARP_){return clojure.zip.insert_right.call(null,clojure.zip.down.call(null,p1__10655_SHARP_),p2__10656_SHARP_);
});
;})(G__10660))
} else
{if(cljs.core._EQ_.call(null,"->",G__10660))
{return ((function (G__10660){
return (function (p1__10655_SHARP_,p2__10656_SHARP_){return clojure.zip.insert_right.call(null,clojure.zip.down.call(null,p1__10655_SHARP_),p2__10656_SHARP_);
});
;})(G__10660))
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(t)].join('')));
} else
{return null;
}
}
}
}
}
}
});
lt.plugins.cljrefactor.threading.threaded_QMARK_ = (function threaded_QMARK_(zipnode){var temp__4092__auto__ = clojure.zip.down.call(null,zipnode);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["some->",null,"->>",null,"->",null,"some->>",null], null), null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(clojure.zip.node.call(null,f))].join('')], null));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.wrap_in_thread = (function wrap_in_thread(zipnode,t){return clojure.zip.up.call(null,clojure.zip.insert_right.call(null,clojure.zip.down.call(null,clojure.zip.seq_zip.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.reader.read_string.call(null,t)))),clojure.zip.node.call(null,zipnode)));
});
lt.plugins.cljrefactor.threading.unwrap_list_if_one = (function unwrap_list_if_one(node){if((cljs.core.seq.call(null,node)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,node),1)))
{return clojure.zip.node.call(null,clojure.zip.down.call(null,clojure.zip.seq_zip.call(null,node)));
} else
{return node;
}
});
lt.plugins.cljrefactor.threading.further_threadable_QMARK_ = (function further_threadable_QMARK_(cand){return cljs.core.list_QMARK_.call(null,clojure.zip.node.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,cand))));
});
lt.plugins.cljrefactor.threading.do_thread_one = (function do_thread_one(cand,cand_fn){if(!(lt.plugins.cljrefactor.threading.further_threadable_QMARK_.call(null,cand)))
{return cand;
} else
{var promote = clojure.zip.node.call(null,cand_fn.call(null,cand));var therest = clojure.zip.remove.call(null,cand_fn.call(null,cand));return clojure.zip.up.call(null,((function (promote,therest){
return (function (p1__10661_SHARP_){return clojure.zip.replace.call(null,p1__10661_SHARP_,lt.plugins.cljrefactor.threading.unwrap_list_if_one.call(null,clojure.zip.node.call(null,p1__10661_SHARP_)));
});})(promote,therest))
.call(null,clojure.zip.insert_left.call(null,clojure.zip.up.call(null,therest),promote)));
}
});
lt.plugins.cljrefactor.threading.do_thread = (function do_thread(orig,cand_fn,t){if(cljs.core.seq.call(null,orig))
{var root = (cljs.core.truth_(lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,orig))?orig:lt.plugins.cljrefactor.threading.wrap_in_thread.call(null,orig,t));var cand = root;while(true){
if(!(lt.plugins.cljrefactor.threading.further_threadable_QMARK_.call(null,cand)))
{return cand;
} else
{{
var G__10674 = lt.plugins.cljrefactor.threading.do_thread_one.call(null,cand,cand_fn);
cand = G__10674;
continue;
}
}
break;
}
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread_first = (function thread_first(form_str){var temp__4092__auto__ = lt.plugins.cljrefactor.threading.str__GT_seq_zip.call(null,form_str);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return lt.plugins.cljrefactor.threading.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,"->"),"->"));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread_last = (function thread_last(form_str){var temp__4092__auto__ = lt.plugins.cljrefactor.threading.str__GT_seq_zip.call(null,form_str);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return lt.plugins.cljrefactor.threading.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,"->>"),"->>"));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread = (function thread(form_str){var node = lt.plugins.cljrefactor.threading.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__8592__auto__ = node;if(cljs.core.truth_(and__8592__auto__))
{return threading;
} else
{return and__8592__auto__;
}
})()))
{return lt.plugins.cljrefactor.threading.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,threading),threading));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread_one = (function thread_one(form_str){var node = lt.plugins.cljrefactor.threading.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__8592__auto__ = node;if(cljs.core.truth_(and__8592__auto__))
{return threading;
} else
{return and__8592__auto__;
}
})()))
{return lt.plugins.cljrefactor.threading.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread_one.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,threading)));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.unwrap_threading = (function unwrap_threading(zipnode){return clojure.zip.seq_zip.call(null,clojure.zip.node.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,zipnode))));
});
lt.plugins.cljrefactor.threading.maybe_wrap_in_list = (function maybe_wrap_in_list(node){if(cljs.core.list_QMARK_.call(null,node))
{return node;
} else
{return clojure.zip.node.call(null,clojure.zip.seq_zip.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,node)));
}
});
lt.plugins.cljrefactor.threading.further_unwindable_QMARK_ = (function further_unwindable_QMARK_(zipnode){return (cljs.core.count.call(null,clojure.zip.children.call(null,zipnode)) > 2);
});
lt.plugins.cljrefactor.threading.maybe_unwrap_threading = (function maybe_unwrap_threading(zipnode){if(!(lt.plugins.cljrefactor.threading.further_unwindable_QMARK_.call(null,zipnode)))
{return lt.plugins.cljrefactor.threading.unwrap_threading.call(null,zipnode);
} else
{return zipnode;
}
});
lt.plugins.cljrefactor.threading.do_unwind_one = (function do_unwind_one(cand,unwind_fn){if(!(lt.plugins.cljrefactor.threading.further_unwindable_QMARK_.call(null,cand)))
{return cand;
} else
{var demote = clojure.zip.node.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,cand)));var therest = clojure.zip.remove.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,cand)));return lt.plugins.cljrefactor.threading.top.call(null,unwind_fn.call(null,((function (demote,therest){
return (function (p1__10662_SHARP_){return clojure.zip.replace.call(null,p1__10662_SHARP_,lt.plugins.cljrefactor.threading.maybe_wrap_in_list.call(null,clojure.zip.node.call(null,p1__10662_SHARP_)));
});})(demote,therest))
.call(null,clojure.zip.right.call(null,therest)),demote));
}
});
lt.plugins.cljrefactor.threading.do_unwind = (function do_unwind(root,unwind_fn){var cand = root;while(true){
if(!(lt.plugins.cljrefactor.threading.further_unwindable_QMARK_.call(null,cand)))
{return cand;
} else
{{
var G__10675 = lt.plugins.cljrefactor.threading.do_unwind_one.call(null,cand,unwind_fn);
cand = G__10675;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.threading.unwind = (function unwind(form_str){var node = lt.plugins.cljrefactor.threading.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__8592__auto__ = node;if(cljs.core.truth_(and__8592__auto__))
{return threading;
} else
{return and__8592__auto__;
}
})()))
{return lt.plugins.cljrefactor.threading.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.unwrap_threading.call(null,lt.plugins.cljrefactor.threading.do_unwind.call(null,node,lt.plugins.cljrefactor.threading.unwind_op.call(null,threading))));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.unwind_one = (function unwind_one(form_str){var node = lt.plugins.cljrefactor.threading.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__8592__auto__ = node;if(cljs.core.truth_(and__8592__auto__))
{return threading;
} else
{return and__8592__auto__;
}
})()))
{return lt.plugins.cljrefactor.threading.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.maybe_unwrap_threading.call(null,lt.plugins.cljrefactor.threading.do_unwind_one.call(null,node,lt.plugins.cljrefactor.threading.unwind_op.call(null,threading))));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.replace_cmd = (function replace_cmd(ed,replace_fn){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var temp__4092__auto__ = lt.objs.editor.selection.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var candidate = temp__4092__auto__;var bounds = lt.objs.editor.selection_bounds.call(null,ed);var temp__4092__auto___10676__$1 = replace_fn.call(null,candidate);if(cljs.core.truth_(temp__4092__auto___10676__$1))
{var res_10677 = temp__4092__auto___10676__$1;lt.objs.editor.replace_selection.call(null,ed,res_10677);
} else
{}
return lt.objs.editor.move_cursor.call(null,ed,cljs.core.update_in.call(null,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.__BEH__thread_fully_BANG_ = (function __BEH__thread_fully_BANG_(ed){return lt.plugins.cljrefactor.threading.replace_cmd.call(null,ed,lt.plugins.cljrefactor.threading.thread);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.threading","thread-fully!","lt.plugins.cljrefactor.threading/thread-fully!",2430149273),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.threading.__BEH__thread_fully_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.thread-fully!","refactor.thread-fully!",4076490368),null], null), null));
lt.plugins.cljrefactor.threading.__BEH__thread_one_BANG_ = (function __BEH__thread_one_BANG_(ed){return lt.plugins.cljrefactor.threading.replace_cmd.call(null,ed,lt.plugins.cljrefactor.threading.thread_one);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.threading","thread-one!","lt.plugins.cljrefactor.threading/thread-one!",1844339773),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.threading.__BEH__thread_one_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.thread-one!","refactor.thread-one!",1406178596),null], null), null));
lt.plugins.cljrefactor.threading.__BEH__thread_first_fully_BANG_ = (function __BEH__thread_first_fully_BANG_(ed){return lt.plugins.cljrefactor.threading.replace_cmd.call(null,ed,lt.plugins.cljrefactor.threading.thread_first);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.threading","thread-first-fully!","lt.plugins.cljrefactor.threading/thread-first-fully!",790664744),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.threading.__BEH__thread_first_fully_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.thread-first-fully!","refactor.thread-first-fully!",1331120893),null], null), null));
lt.plugins.cljrefactor.threading.__BEH__thread_last_fully_BANG_ = (function __BEH__thread_last_fully_BANG_(ed){return lt.plugins.cljrefactor.threading.replace_cmd.call(null,ed,lt.plugins.cljrefactor.threading.thread_last);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.threading","thread-last-fully!","lt.plugins.cljrefactor.threading/thread-last-fully!",1405270892),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.threading.__BEH__thread_last_fully_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.thread-last-fully!","refactor.thread-last-fully!",3258474761),null], null), null));
lt.plugins.cljrefactor.threading.__BEH__unwind_fully_BANG_ = (function __BEH__unwind_fully_BANG_(ed){return lt.plugins.cljrefactor.threading.replace_cmd.call(null,ed,lt.plugins.cljrefactor.threading.unwind);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.threading","unwind-fully!","lt.plugins.cljrefactor.threading/unwind-fully!",4020492500),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.threading.__BEH__unwind_fully_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.unwind-fully!","refactor.unwind-fully!",1354635913),null], null), null));
lt.plugins.cljrefactor.threading.__BEH__unwind_one_BANG_ = (function __BEH__unwind_one_BANG_(ed){return lt.plugins.cljrefactor.threading.replace_cmd.call(null,ed,lt.plugins.cljrefactor.threading.unwind_one);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.threading","unwind-one!","lt.plugins.cljrefactor.threading/unwind-one!",3742803640),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.threading.__BEH__unwind_one_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.unwind-one!","refactor.unwind-one!",3606695789),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.threading","thread-fully","lt.plugins.cljrefactor.threading/thread-fully",2223711832),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Thread fully",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.thread-fully!","refactor.thread-fully!",4076490368));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.threading","thread-one","lt.plugins.cljrefactor.threading/thread-one",616902708),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Thread one",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.thread-one!","refactor.thread-one!",1406178596));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.threading","thread-first-fully","lt.plugins.cljrefactor.threading/thread-first-fully",3311114537),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Thread first fully",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.thread-first-fully!","refactor.thread-first-fully!",1331120893));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.threading","thread-last-fully","lt.plugins.cljrefactor.threading/thread-last-fully",4481623909),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Thread last fully",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.thread-last-fully!","refactor.thread-last-fully!",3258474761));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.threading","unwind-fully","lt.plugins.cljrefactor.threading/unwind-fully",1988695805),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Unwind fully",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.unwind-fully!","refactor.unwind-fully!",1354635913));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.threading","unwind-one","lt.plugins.cljrefactor.threading/unwind-one",4394965145),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Unwind one",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.unwind-one!","refactor.unwind-one!",3606695789));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=clj-light-refactor_compiled.js.map