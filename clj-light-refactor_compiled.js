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
lt.plugins.cljrefactor.prj_parser.prj__GT_map = (function prj__GT_map(p){return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__16885_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[cljs.core.first.call(null,p1__16885_SHARP_)],[cljs.core.second.call(null,p1__16885_SHARP_)]);
}),cljs.core.partition.call(null,2,cljs.core.drop.call(null,3,p))));
});
lt.plugins.cljrefactor.prj_parser.parse_project_file = (function parse_project_file(file){return lt.plugins.cljrefactor.prj_parser.prj__GT_map.call(null,cljs.reader.read_string.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)),/\\/,"\\\\")));
});
lt.plugins.cljrefactor.prj_parser.src_dirs = (function src_dirs(prj){var or__15029__auto__ = new cljs.core.Keyword(null,"source-paths","source-paths",1249628206).cljs$core$IFn$_invoke$arity$1(prj);if(cljs.core.truth_(or__15029__auto__))
{return or__15029__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src"], null);
}
});
lt.plugins.cljrefactor.prj_parser.find_sub_path = (function find_sub_path(prj_dir,path,src_dirs){return cljs.core.some.call(null,(function (p1__16886_SHARP_){if(cljs.core.truth_(path.contains(lt.objs.files.join.call(null,prj_dir,p1__16886_SHARP_))))
{return path.substring((1 + cljs.core.count.call(null,lt.objs.files.join.call(null,prj_dir,p1__16886_SHARP_))));
} else
{return null;
}
}),src_dirs);
});
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
lt.plugins.cljrefactor.artifact_version.select_item = (function select_item(idx,item){var e__16427__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),item,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),item], null));var seq__16774_16802 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16775_16803 = null;var count__16776_16804 = 0;var i__16777_16805 = 0;while(true){
if((i__16777_16805 < count__16776_16804))
{var vec__16778_16806 = cljs.core._nth.call(null,chunk__16775_16803,i__16777_16805);var ev__16428__auto___16807 = cljs.core.nth.call(null,vec__16778_16806,0,null);var func__16429__auto___16808 = cljs.core.nth.call(null,vec__16778_16806,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___16807,func__16429__auto___16808);
{
var G__16809 = seq__16774_16802;
var G__16810 = chunk__16775_16803;
var G__16811 = count__16776_16804;
var G__16812 = (i__16777_16805 + 1);
seq__16774_16802 = G__16809;
chunk__16775_16803 = G__16810;
count__16776_16804 = G__16811;
i__16777_16805 = G__16812;
continue;
}
} else
{var temp__4092__auto___16813 = cljs.core.seq.call(null,seq__16774_16802);if(temp__4092__auto___16813)
{var seq__16774_16814__$1 = temp__4092__auto___16813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16774_16814__$1))
{var c__15777__auto___16815 = cljs.core.chunk_first.call(null,seq__16774_16814__$1);{
var G__16816 = cljs.core.chunk_rest.call(null,seq__16774_16814__$1);
var G__16817 = c__15777__auto___16815;
var G__16818 = cljs.core.count.call(null,c__15777__auto___16815);
var G__16819 = 0;
seq__16774_16802 = G__16816;
chunk__16775_16803 = G__16817;
count__16776_16804 = G__16818;
i__16777_16805 = G__16819;
continue;
}
} else
{var vec__16779_16820 = cljs.core.first.call(null,seq__16774_16814__$1);var ev__16428__auto___16821 = cljs.core.nth.call(null,vec__16779_16820,0,null);var func__16429__auto___16822 = cljs.core.nth.call(null,vec__16779_16820,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___16821,func__16429__auto___16822);
{
var G__16823 = cljs.core.next.call(null,seq__16774_16814__$1);
var G__16824 = null;
var G__16825 = 0;
var G__16826 = 0;
seq__16774_16802 = G__16823;
chunk__16775_16803 = G__16824;
count__16776_16804 = G__16825;
i__16777_16805 = G__16826;
continue;
}
}
} else
{}
}
break;
}
return e__16427__auto__;
});
lt.plugins.cljrefactor.artifact_version.select_form = (function select_form(this$,items){var e__16427__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artifact-versions","div.artifact-versions",2029510539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.cljrefactor.artifact_version.select_item,items)], null)], null));var seq__16786_16827 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16787_16828 = null;var count__16788_16829 = 0;var i__16789_16830 = 0;while(true){
if((i__16789_16830 < count__16788_16829))
{var vec__16790_16831 = cljs.core._nth.call(null,chunk__16787_16828,i__16789_16830);var ev__16428__auto___16832 = cljs.core.nth.call(null,vec__16790_16831,0,null);var func__16429__auto___16833 = cljs.core.nth.call(null,vec__16790_16831,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___16832,func__16429__auto___16833);
{
var G__16834 = seq__16786_16827;
var G__16835 = chunk__16787_16828;
var G__16836 = count__16788_16829;
var G__16837 = (i__16789_16830 + 1);
seq__16786_16827 = G__16834;
chunk__16787_16828 = G__16835;
count__16788_16829 = G__16836;
i__16789_16830 = G__16837;
continue;
}
} else
{var temp__4092__auto___16838 = cljs.core.seq.call(null,seq__16786_16827);if(temp__4092__auto___16838)
{var seq__16786_16839__$1 = temp__4092__auto___16838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16786_16839__$1))
{var c__15777__auto___16840 = cljs.core.chunk_first.call(null,seq__16786_16839__$1);{
var G__16841 = cljs.core.chunk_rest.call(null,seq__16786_16839__$1);
var G__16842 = c__15777__auto___16840;
var G__16843 = cljs.core.count.call(null,c__15777__auto___16840);
var G__16844 = 0;
seq__16786_16827 = G__16841;
chunk__16787_16828 = G__16842;
count__16788_16829 = G__16843;
i__16789_16830 = G__16844;
continue;
}
} else
{var vec__16791_16845 = cljs.core.first.call(null,seq__16786_16839__$1);var ev__16428__auto___16846 = cljs.core.nth.call(null,vec__16791_16845,0,null);var func__16429__auto___16847 = cljs.core.nth.call(null,vec__16791_16845,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___16846,func__16429__auto___16847);
{
var G__16848 = cljs.core.next.call(null,seq__16786_16839__$1);
var G__16849 = null;
var G__16850 = 0;
var G__16851 = 0;
seq__16786_16827 = G__16848;
chunk__16787_16828 = G__16849;
count__16788_16829 = G__16850;
i__16789_16830 = G__16851;
continue;
}
}
} else
{}
}
break;
}
return e__16427__auto__;
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
lt.plugins.cljrefactor.pprint.pprint_prefix_form = (function pprint_prefix_form(p__17136){var vec__17138 = p__17136;var name = cljs.core.nth.call(null,vec__17138,0,null);var libspecs = cljs.core.nthnext.call(null,vec__17138,1);cljs.core.print.call(null,[cljs.core.str("["),cljs.core.str(name)].join(''));
var ordered_libspecs = lt.plugins.cljrefactor.pprint.libspec_vectors_last.call(null,libspecs);return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (ordered_libspecs,vec__17138,name,libspecs){
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
});})(ordered_libspecs,vec__17138,name,libspecs))
,ordered_libspecs));
});
lt.plugins.cljrefactor.pprint.pprint_require_form = (function pprint_require_form(p__17139){var vec__17142 = p__17139;var _ = cljs.core.nth.call(null,vec__17142,0,null);var libspecs = cljs.core.nthnext.call(null,vec__17142,1);cljs.core.print.call(null,"(:require ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__17142,_,libspecs){
return (function (idx,libspec){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,libspecs) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__15948__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_17143_17161 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17143_17161,sb__15948__auto__,vec__17142,_,libspecs){
return (function (x__15949__auto__){return sb__15948__auto__.append(x__15949__auto__);
});})(_STAR_print_fn_STAR_17143_17161,sb__15948__auto__,vec__17142,_,libspecs))
;
if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{cljs.core.print.call(null,libspec);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17143_17161;
}return [cljs.core.str(sb__15948__auto__)].join('');
})())),cljs.core.str(")")].join(''));
} else
{if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{return lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{return cljs.core.println.call(null,libspec);
}
}
});})(vec__17142,_,libspecs))
,libspecs));
});
lt.plugins.cljrefactor.pprint.form_is_QMARK_ = (function form_is_QMARK_(form,type){return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,form)),type));
});
lt.plugins.cljrefactor.pprint.pprint_gen_class_form = (function pprint_gen_class_form(p__17144){var vec__17148 = p__17144;var _ = cljs.core.nth.call(null,vec__17148,0,null);var elems = cljs.core.nthnext.call(null,vec__17148,1);if(cljs.core.empty_QMARK_.call(null,elems))
{cljs.core.println.call(null,"(:gen-class)");
} else
{cljs.core.println.call(null,"(:gen-class");
}
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__17148,_,elems){
return (function (idx,p__17149){var vec__17150 = p__17149;var key = cljs.core.nth.call(null,vec__17150,0,null);var val = cljs.core.nth.call(null,vec__17150,1,null);if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,cljs.core.partition.call(null,2,elems)) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(key),cljs.core.str(val),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,key,val);
}
});})(vec__17148,_,elems))
,cljs.core.partition.call(null,2,elems)));
});
lt.plugins.cljrefactor.pprint.pprint_import_form = (function pprint_import_form(p__17151){var vec__17153 = p__17151;var _ = cljs.core.nth.call(null,vec__17153,0,null);var imports = cljs.core.nthnext.call(null,vec__17153,1);cljs.core.print.call(null,"(:import ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__17153,_,imports){
return (function (idx,import$){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,imports) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(import$),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,import$);
}
});})(vec__17153,_,imports))
,imports));
});
lt.plugins.cljrefactor.pprint.pprint_ns = (function pprint_ns(p__17154){var vec__17158 = p__17154;var _ = cljs.core.nth.call(null,vec__17158,0,null);var name = cljs.core.nth.call(null,vec__17158,1,null);var more = cljs.core.nthnext.call(null,vec__17158,2);var ns_form = vec__17158;var docstring_QMARK_ = ((typeof cljs.core.first.call(null,more) === 'string')?cljs.core.first.call(null,more):null);var attrs_QMARK_ = ((cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,more)))?cljs.core.second.call(null,more):null);var forms = (cljs.core.truth_((function (){var and__15017__auto__ = docstring_QMARK_;if(cljs.core.truth_(and__15017__auto__))
{return attrs_QMARK_;
} else
{return and__15017__auto__;
}
})())?lt.plugins.cljrefactor.pprint.nthrest.call(null,more,2):((cljs.core.not.call(null,(function (){var or__15029__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__15029__auto__))
{return or__15029__auto__;
} else
{return attrs_QMARK_;
}
})()))?more:((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.rest.call(null,more):null)));return clojure.string.replace.call(null,(function (){var sb__15948__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_17159_17162 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17159_17162,sb__15948__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17158,_,name,more,ns_form){
return (function (x__15949__auto__){return sb__15948__auto__.append(x__15949__auto__);
});})(_STAR_print_fn_STAR_17159_17162,sb__15948__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17158,_,name,more,ns_form))
;
cljs.core.print.call(null,[cljs.core.str("(ns "),cljs.core.str(name)].join(''));
if(cljs.core.truth_((function (){var or__15029__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__15029__auto__))
{return or__15029__auto__;
} else
{var or__15029__auto____$1 = attrs_QMARK_;if(cljs.core.truth_(or__15029__auto____$1))
{return or__15029__auto____$1;
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
cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (_STAR_print_fn_STAR_17159_17162,sb__15948__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17158,_,name,more,ns_form){
return (function (idx,form){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,forms) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__15948__auto____$1 = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_17160_17163 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17160_17163,sb__15948__auto____$1,_STAR_print_fn_STAR_17159_17162,sb__15948__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17158,_,name,more,ns_form){
return (function (x__15949__auto__){return sb__15948__auto____$1.append(x__15949__auto__);
});})(_STAR_print_fn_STAR_17160_17163,sb__15948__auto____$1,_STAR_print_fn_STAR_17159_17162,sb__15948__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17158,_,name,more,ns_form))
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
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17160_17163;
}return [cljs.core.str(sb__15948__auto____$1)].join('');
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
});})(_STAR_print_fn_STAR_17159_17162,sb__15948__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17158,_,name,more,ns_form))
,forms));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17159_17162;
}return [cljs.core.str(sb__15948__auto__)].join('');
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
lt.plugins.cljrefactor.namespace.nsify = (function nsify(sub_path){return (function (p1__17227_SHARP_){return [cljs.core.str("(ns "),cljs.core.str(p1__17227_SHARP_),cljs.core.str(")\n")].join('');
}).call(null,(function (p1__17226_SHARP_){return clojure.string.join.call(null,".",p1__17226_SHARP_);
}).call(null,(function (parts){return cljs.core.map.call(null,(function (p1__17225_SHARP_){return clojure.string.replace.call(null,p1__17225_SHARP_,/_/,"-");
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
lt.plugins.cljrefactor.namespace.add_require = (function add_require(ns_decl,req){var req_idx = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__17229_SHARP_,p2__17228_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,p2__17228_SHARP_)),new cljs.core.Keyword(null,"require","require",2109600983)))
{return p1__17229_SHARP_;
} else
{return null;
}
}),cljs.core.drop.call(null,2,ns_decl)));var reqs = (cljs.core.truth_(req_idx)?cljs.core.nth.call(null,ns_decl,(2 + req_idx)):null);if(cljs.core.truth_(reqs))
{return cljs.core.concat.call(null,cljs.core.take.call(null,(2 + req_idx),ns_decl),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.concat.call(null,reqs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req], null))),cljs.core.drop.call(null,(3 + req_idx),ns_decl));
} else
{return cljs.core.concat.call(null,cljs.core.take.call(null,2,ns_decl),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",2109600983),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req], null)], null)),cljs.core.drop.call(null,2,ns_decl));
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
{return lt.plugins.cljrefactor.namespace.replace_ns.call(null,ed,cleaned_ns);
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
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.usages')) {
goog.provide('lt.plugins.cljrefactor.usages');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.usages.__BEH__on_close = (function __BEH__on_close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","on-close","lt.plugins.cljrefactor.usages/on-close",757312783),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__clear_BANG_ = (function __BEH__clear_BANG_(this$){return lt.util.dom.empty.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),lt.object.__GT_content.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","clear!","lt.plugins.cljrefactor.usages/clear!",4298270169),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__clear_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.plugins.cljrefactor.usages.result_entry = (function result_entry(entry){var e__16427__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.entry","p.entry",3043677414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.line","span.line",4619821962),cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(entry))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"stmt","stmt",1017445178).cljs$core$IFn$_invoke$arity$1(entry)], null)], null));var seq__16977_17023 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__16427__auto__){
return (function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(entry));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"goto-line","goto-line",2802035088),cljs.core.first.call(null,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(entry)));
});})(e__16427__auto__))
], null)));var chunk__16978_17024 = null;var count__16979_17025 = 0;var i__16980_17026 = 0;while(true){
if((i__16980_17026 < count__16979_17025))
{var vec__16981_17027 = cljs.core._nth.call(null,chunk__16978_17024,i__16980_17026);var ev__16428__auto___17028 = cljs.core.nth.call(null,vec__16981_17027,0,null);var func__16429__auto___17029 = cljs.core.nth.call(null,vec__16981_17027,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___17028,func__16429__auto___17029);
{
var G__17030 = seq__16977_17023;
var G__17031 = chunk__16978_17024;
var G__17032 = count__16979_17025;
var G__17033 = (i__16980_17026 + 1);
seq__16977_17023 = G__17030;
chunk__16978_17024 = G__17031;
count__16979_17025 = G__17032;
i__16980_17026 = G__17033;
continue;
}
} else
{var temp__4092__auto___17034 = cljs.core.seq.call(null,seq__16977_17023);if(temp__4092__auto___17034)
{var seq__16977_17035__$1 = temp__4092__auto___17034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16977_17035__$1))
{var c__15777__auto___17036 = cljs.core.chunk_first.call(null,seq__16977_17035__$1);{
var G__17037 = cljs.core.chunk_rest.call(null,seq__16977_17035__$1);
var G__17038 = c__15777__auto___17036;
var G__17039 = cljs.core.count.call(null,c__15777__auto___17036);
var G__17040 = 0;
seq__16977_17023 = G__17037;
chunk__16978_17024 = G__17038;
count__16979_17025 = G__17039;
i__16980_17026 = G__17040;
continue;
}
} else
{var vec__16982_17041 = cljs.core.first.call(null,seq__16977_17035__$1);var ev__16428__auto___17042 = cljs.core.nth.call(null,vec__16982_17041,0,null);var func__16429__auto___17043 = cljs.core.nth.call(null,vec__16982_17041,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___17042,func__16429__auto___17043);
{
var G__17044 = cljs.core.next.call(null,seq__16977_17035__$1);
var G__17045 = null;
var G__17046 = 0;
var G__17047 = 0;
seq__16977_17023 = G__17044;
chunk__16978_17024 = G__17045;
count__16979_17025 = G__17046;
i__16980_17026 = G__17047;
continue;
}
}
} else
{}
}
break;
}
return e__16427__auto__;
});
lt.plugins.cljrefactor.usages.result_item = (function result_item(item){var e__16427__auto__ = crate.core.html.call(null,(function (){var file = new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.path","p.path",4266284629),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file","span.file",4619643154),lt.objs.files.basename.call(null,file)], null),"(",lt.objs.files.parent.call(null,file),")"], null),cljs.core.map.call(null,((function (file){
return (function (p1__16983_SHARP_){return lt.plugins.cljrefactor.usages.result_entry.call(null,p1__16983_SHARP_);
});})(file))
,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(item))], null);
})());var seq__16990_17048 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16991_17049 = null;var count__16992_17050 = 0;var i__16993_17051 = 0;while(true){
if((i__16993_17051 < count__16992_17050))
{var vec__16994_17052 = cljs.core._nth.call(null,chunk__16991_17049,i__16993_17051);var ev__16428__auto___17053 = cljs.core.nth.call(null,vec__16994_17052,0,null);var func__16429__auto___17054 = cljs.core.nth.call(null,vec__16994_17052,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___17053,func__16429__auto___17054);
{
var G__17055 = seq__16990_17048;
var G__17056 = chunk__16991_17049;
var G__17057 = count__16992_17050;
var G__17058 = (i__16993_17051 + 1);
seq__16990_17048 = G__17055;
chunk__16991_17049 = G__17056;
count__16992_17050 = G__17057;
i__16993_17051 = G__17058;
continue;
}
} else
{var temp__4092__auto___17059 = cljs.core.seq.call(null,seq__16990_17048);if(temp__4092__auto___17059)
{var seq__16990_17060__$1 = temp__4092__auto___17059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16990_17060__$1))
{var c__15777__auto___17061 = cljs.core.chunk_first.call(null,seq__16990_17060__$1);{
var G__17062 = cljs.core.chunk_rest.call(null,seq__16990_17060__$1);
var G__17063 = c__15777__auto___17061;
var G__17064 = cljs.core.count.call(null,c__15777__auto___17061);
var G__17065 = 0;
seq__16990_17048 = G__17062;
chunk__16991_17049 = G__17063;
count__16992_17050 = G__17064;
i__16993_17051 = G__17065;
continue;
}
} else
{var vec__16995_17066 = cljs.core.first.call(null,seq__16990_17060__$1);var ev__16428__auto___17067 = cljs.core.nth.call(null,vec__16995_17066,0,null);var func__16429__auto___17068 = cljs.core.nth.call(null,vec__16995_17066,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___17067,func__16429__auto___17068);
{
var G__17069 = cljs.core.next.call(null,seq__16990_17060__$1);
var G__17070 = null;
var G__17071 = 0;
var G__17072 = 0;
seq__16990_17048 = G__17069;
chunk__16991_17049 = G__17070;
count__16992_17050 = G__17071;
i__16993_17051 = G__17072;
continue;
}
}
} else
{}
}
break;
}
return e__16427__auto__;
});
lt.plugins.cljrefactor.usages.search_results = (function search_results(res){var e__16427__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),cljs.core.map.call(null,(function (p1__16996_SHARP_){return lt.plugins.cljrefactor.usages.result_item.call(null,p1__16996_SHARP_);
}),res)], null));var seq__17003_17073 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17004_17074 = null;var count__17005_17075 = 0;var i__17006_17076 = 0;while(true){
if((i__17006_17076 < count__17005_17075))
{var vec__17007_17077 = cljs.core._nth.call(null,chunk__17004_17074,i__17006_17076);var ev__16428__auto___17078 = cljs.core.nth.call(null,vec__17007_17077,0,null);var func__16429__auto___17079 = cljs.core.nth.call(null,vec__17007_17077,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___17078,func__16429__auto___17079);
{
var G__17080 = seq__17003_17073;
var G__17081 = chunk__17004_17074;
var G__17082 = count__17005_17075;
var G__17083 = (i__17006_17076 + 1);
seq__17003_17073 = G__17080;
chunk__17004_17074 = G__17081;
count__17005_17075 = G__17082;
i__17006_17076 = G__17083;
continue;
}
} else
{var temp__4092__auto___17084 = cljs.core.seq.call(null,seq__17003_17073);if(temp__4092__auto___17084)
{var seq__17003_17085__$1 = temp__4092__auto___17084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17003_17085__$1))
{var c__15777__auto___17086 = cljs.core.chunk_first.call(null,seq__17003_17085__$1);{
var G__17087 = cljs.core.chunk_rest.call(null,seq__17003_17085__$1);
var G__17088 = c__15777__auto___17086;
var G__17089 = cljs.core.count.call(null,c__15777__auto___17086);
var G__17090 = 0;
seq__17003_17073 = G__17087;
chunk__17004_17074 = G__17088;
count__17005_17075 = G__17089;
i__17006_17076 = G__17090;
continue;
}
} else
{var vec__17008_17091 = cljs.core.first.call(null,seq__17003_17085__$1);var ev__16428__auto___17092 = cljs.core.nth.call(null,vec__17008_17091,0,null);var func__16429__auto___17093 = cljs.core.nth.call(null,vec__17008_17091,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___17092,func__16429__auto___17093);
{
var G__17094 = cljs.core.next.call(null,seq__17003_17085__$1);
var G__17095 = null;
var G__17096 = 0;
var G__17097 = 0;
seq__17003_17073 = G__17094;
chunk__17004_17074 = G__17095;
count__17005_17075 = G__17096;
i__17006_17076 = G__17097;
continue;
}
}
} else
{}
}
break;
}
return e__16427__auto__;
});
lt.plugins.cljrefactor.usages.show_results = (function show_results(this$,res){var container = lt.object.__GT_content.call(null,this$);var results_ul = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),container);return lt.util.dom.replace_with.call(null,results_ul,lt.plugins.cljrefactor.usages.search_results.call(null,res));
});
lt.plugins.cljrefactor.usages.usages__GT_view = (function usages__GT_view(usages){return (function (x){return cljs.core.map.call(null,(function (k){var items = cljs.core.get.call(null,x,k);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),k,new cljs.core.Keyword(null,"items","items",1114430258),items], null);
}),cljs.core.keys.call(null,x));
}).call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"file","file",1017047278),cljs.core.map.call(null,(function (p__17011){var map__17012 = p__17011;var map__17012__$1 = ((cljs.core.seq_QMARK_.call(null,map__17012))?cljs.core.apply.call(null,cljs.core.hash_map,map__17012):map__17012);var x = cljs.core.get.call(null,map__17012__$1,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loc","loc",1014011570),cljs.core.take.call(null,4,x),new cljs.core.Keyword(null,"symbol","symbol",4421347594),cljs.core.nth.call(null,x,4),new cljs.core.Keyword(null,"file","file",1017047278),cljs.core.nth.call(null,x,5),new cljs.core.Keyword(null,"stmt","stmt",1017445178),cljs.core.last.call(null,x)], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243),usages))));
});
lt.plugins.cljrefactor.usages.find_symbol_op = (function find_symbol_op(ed,symbol){var filename = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var ns = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl) (require 'lighttable.nrepl.eval)"),cljs.core.str(" (def z-ns "),cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str("'"),cljs.core.str(ns)].join(''):[cljs.core.str("(lighttable.nrepl.eval/file->ns \""),cljs.core.str(filename),cljs.core.str("\")")].join(''))),cljs.core.str(")"),cljs.core.str(" (def tr (refactor-nrepl.client/connect))"),cljs.core.str(" (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000)"),cljs.core.str(" {:op \"refactor\" :refactor-fn \"find-symbol\" :ns z-ns :name \""),cljs.core.str(symbol),cljs.core.str("\""),cljs.core.str("}))")].join('');
});
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res = (function __BEH__find_symbol__DOT__res(ed,res){var usages = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)));lt.plugins.cljrefactor.usages.show_results.call(null,lt.plugins.cljrefactor.usages.refactor_usages,lt.plugins.cljrefactor.usages.usages__GT_view.call(null,usages));
lt.object.update_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for","search-for",4597237398),new cljs.core.Keyword(null,"namespace","namespace",2266122445)], null),((function (usages){
return (function (_){return new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});})(usages))
);
return lt.objs.notifos.done_working.call(null,"Find usages completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol.res","lt.plugins.cljrefactor.usages/find-symbol.res",2620470851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.find-symbol","editor.eval.clj.result.refactor.find-symbol",1593184613),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__start = (function __BEH__find_symbol__DOT__start(this$,ed,token){var ns = (function (){var or__15029__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__15029__auto__))
{return or__15029__auto__;
} else
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
}
})();var op = lt.plugins.cljrefactor.usages.find_symbol_op.call(null,ed,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages);
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for","search-for",4597237398)], null),((function (ns,op){
return (function (_){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",4421347594),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"namespace","namespace",2266122445),ns], null);
});})(ns,op))
);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.usages.find_symbol_op.call(null,ed,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.find-symbol","refactor.find-symbol",3383223538),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol.start","lt.plugins.cljrefactor.usages/find-symbol.start",4504937093),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__start,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.find-symbol","refactor.find-symbol",3383223538),null], null), null));
lt.plugins.cljrefactor.usages.search_for = (function search_for(this$){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(this$);if(cljs.core.truth_(temp__4092__auto__))
{var info = temp__4092__auto__;return [cljs.core.str(new cljs.core.Keyword(null,"namespace","namespace",2266122445).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else
{return null;
}
})()], null)),"Find usages for: ");
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","refactor-usages","lt.plugins.cljrefactor.usages/refactor-usages",808406084),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.usages","refactor.usages",1885039760),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Find usages",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",980356928),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searcher","div.searcher",3267271812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),crate.binding.bound.call(null,this$,lt.plugins.cljrefactor.usages.search_for)], null)], null)], null);
}));
lt.plugins.cljrefactor.usages.refactor_usages = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","refactor-usages","lt.plugins.cljrefactor.usages/refactor-usages",808406084));
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
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.select')) {
goog.provide('lt.plugins.cljrefactor.select');
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
lt.plugins.cljrefactor.select.remove_form = (function remove_form(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear","clear",1108650431));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.plugins.cljrefactor.select.select_item = (function select_item(this$,idx,item){var e__16427__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),idx,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),((cljs.core.map_QMARK_.call(null,item))?new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item):item)], null));var seq__16903_16921 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16904_16922 = null;var count__16905_16923 = 0;var i__16906_16924 = 0;while(true){
if((i__16906_16924 < count__16905_16923))
{var vec__16907_16925 = cljs.core._nth.call(null,chunk__16904_16922,i__16906_16924);var ev__16428__auto___16926 = cljs.core.nth.call(null,vec__16907_16925,0,null);var func__16429__auto___16927 = cljs.core.nth.call(null,vec__16907_16925,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___16926,func__16429__auto___16927);
{
var G__16928 = seq__16903_16921;
var G__16929 = chunk__16904_16922;
var G__16930 = count__16905_16923;
var G__16931 = (i__16906_16924 + 1);
seq__16903_16921 = G__16928;
chunk__16904_16922 = G__16929;
count__16905_16923 = G__16930;
i__16906_16924 = G__16931;
continue;
}
} else
{var temp__4092__auto___16932 = cljs.core.seq.call(null,seq__16903_16921);if(temp__4092__auto___16932)
{var seq__16903_16933__$1 = temp__4092__auto___16932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16903_16933__$1))
{var c__15777__auto___16934 = cljs.core.chunk_first.call(null,seq__16903_16933__$1);{
var G__16935 = cljs.core.chunk_rest.call(null,seq__16903_16933__$1);
var G__16936 = c__15777__auto___16934;
var G__16937 = cljs.core.count.call(null,c__15777__auto___16934);
var G__16938 = 0;
seq__16903_16921 = G__16935;
chunk__16904_16922 = G__16936;
count__16905_16923 = G__16937;
i__16906_16924 = G__16938;
continue;
}
} else
{var vec__16908_16939 = cljs.core.first.call(null,seq__16903_16933__$1);var ev__16428__auto___16940 = cljs.core.nth.call(null,vec__16908_16939,0,null);var func__16429__auto___16941 = cljs.core.nth.call(null,vec__16908_16939,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___16940,func__16429__auto___16941);
{
var G__16942 = cljs.core.next.call(null,seq__16903_16933__$1);
var G__16943 = null;
var G__16944 = 0;
var G__16945 = 0;
seq__16903_16921 = G__16942;
chunk__16904_16922 = G__16943;
count__16905_16923 = G__16944;
i__16906_16924 = G__16945;
continue;
}
}
} else
{}
}
break;
}
return e__16427__auto__;
});
lt.plugins.cljrefactor.select.select_form = (function select_form(this$,items){var e__16427__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-select","div.refactor-select",3828436988),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,cljs.core.partial.call(null,lt.plugins.cljrefactor.select.select_item,this$),items)], null)], null));var seq__16915_16946 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__16916_16947 = null;var count__16917_16948 = 0;var i__16918_16949 = 0;while(true){
if((i__16918_16949 < count__16917_16948))
{var vec__16919_16950 = cljs.core._nth.call(null,chunk__16916_16947,i__16918_16949);var ev__16428__auto___16951 = cljs.core.nth.call(null,vec__16919_16950,0,null);var func__16429__auto___16952 = cljs.core.nth.call(null,vec__16919_16950,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___16951,func__16429__auto___16952);
{
var G__16953 = seq__16915_16946;
var G__16954 = chunk__16916_16947;
var G__16955 = count__16917_16948;
var G__16956 = (i__16918_16949 + 1);
seq__16915_16946 = G__16953;
chunk__16916_16947 = G__16954;
count__16917_16948 = G__16955;
i__16918_16949 = G__16956;
continue;
}
} else
{var temp__4092__auto___16957 = cljs.core.seq.call(null,seq__16915_16946);if(temp__4092__auto___16957)
{var seq__16915_16958__$1 = temp__4092__auto___16957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16915_16958__$1))
{var c__15777__auto___16959 = cljs.core.chunk_first.call(null,seq__16915_16958__$1);{
var G__16960 = cljs.core.chunk_rest.call(null,seq__16915_16958__$1);
var G__16961 = c__15777__auto___16959;
var G__16962 = cljs.core.count.call(null,c__15777__auto___16959);
var G__16963 = 0;
seq__16915_16946 = G__16960;
chunk__16916_16947 = G__16961;
count__16917_16948 = G__16962;
i__16918_16949 = G__16963;
continue;
}
} else
{var vec__16920_16964 = cljs.core.first.call(null,seq__16915_16958__$1);var ev__16428__auto___16965 = cljs.core.nth.call(null,vec__16920_16964,0,null);var func__16429__auto___16966 = cljs.core.nth.call(null,vec__16920_16964,1,null);lt.util.dom.on.call(null,e__16427__auto__,ev__16428__auto___16965,func__16429__auto___16966);
{
var G__16967 = cljs.core.next.call(null,seq__16915_16958__$1);
var G__16968 = null;
var G__16969 = 0;
var G__16970 = 0;
seq__16915_16946 = G__16967;
chunk__16916_16947 = G__16968;
count__16917_16948 = G__16969;
i__16918_16949 = G__16970;
continue;
}
}
} else
{}
}
break;
}
return e__16427__auto__;
});
lt.plugins.cljrefactor.select.on_keydown = (function on_keydown(this$,ed,ev){var kc = ev.keyCode;var el = ev.target;if((cljs.core._EQ_.call(null,13,kc)) || (cljs.core._EQ_.call(null,9,kc)))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
var idx = lt.util.dom.$.call(null,"option:checked",el).value;var item = cljs.core.nth.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),idx);var the_ed = new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var beh = new cljs.core.Keyword(null,"behavior","behavior",2524816836).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));lt.plugins.cljrefactor.select.remove_form.call(null,this$);
return lt.object.raise.call(null,the_ed,beh,item);
} else
{if(cljs.core._EQ_.call(null,27,kc))
{lt.util.dom.stop_propagation.call(null,ev);
lt.util.dom.prevent.call(null,ev);
lt.plugins.cljrefactor.select.remove_form.call(null,this$);
return lt.objs.editor.focus.call(null,ed);
} else
{return null;
}
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.select","refactor-select-form","lt.plugins.cljrefactor.select/refactor-select-form",4472052587),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1108654330),null,new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inline.refactor.select.form","inline.refactor.select.form",2479701873),null,new cljs.core.Keyword(null,"inline","inline",4124874251),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var content = lt.plugins.cljrefactor.select.select_form.call(null,this$,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(info));var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info));lt.object.merge_BANG_.call(null,this$,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.objs.editor.bookmark.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widget","widget",4520824246),content,new cljs.core.Keyword(null,"insertLeft","insertLeft",1979827666),false], null))));
lt.util.dom.on.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content),"blur",((function (content,line,ed,temp__4092__auto__){
return (function (ev){new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
return lt.util.js.wait.call(null,0,((function (content,line,ed,temp__4092__auto__){
return (function (){return lt.plugins.cljrefactor.select.remove_form.call(null,this$);
});})(content,line,ed,temp__4092__auto__))
);
});})(content,line,ed,temp__4092__auto__))
);
lt.util.dom.on.call(null,content,"keydown",cljs.core.partial.call(null,lt.plugins.cljrefactor.select.on_keydown,this$,ed));
lt.util.dom.val.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"option","option",4298734567),content),0);
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"select","select",4402849902),content));
return content;
} else
{return null;
}
}));
lt.plugins.cljrefactor.select.make = (function make(info){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.select","refactor-select-form","lt.plugins.cljrefactor.select/refactor-select-form",4472052587),info);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor')) {
goog.provide('lt.plugins.cljrefactor');
goog.require('cljs.core');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.objs.files');
goog.require('lt.plugins.cljrefactor.select');
goog.require('clojure.string');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.cljrefactor.artifact_version');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.plugins.cljrefactor.namespace');
goog.require('lt.plugins.cljrefactor.namespace');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.artifact_version');
goog.require('lt.plugins.cljrefactor.select');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
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
lt.plugins.cljrefactor.__BEH__finish_artifact_version_hints = (function __BEH__finish_artifact_version_hints(ed,res){var vs = clojure.string.split.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))))),/ /);var hints = cljs.core.map.call(null,((function (vs){
return (function (p1__17203_SHARP_){return {"completion": p1__17203_SHARP_};
});})(vs))
,vs);if((cljs.core.count.call(null,vs) > 1))
{return lt.plugins.cljrefactor.select.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"behavior","behavior",2524816836),new cljs.core.Keyword(null,"artifact-version.selected","artifact-version.selected",2838678782),new cljs.core.Keyword(null,"items","items",1114430258),vs,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed)], null));
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact-version.selected","artifact-version.selected",2838678782),cljs.core.first.call(null,vs));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","finish-artifact-version-hints","lt.plugins.cljrefactor/finish-artifact-version-hints",1219414414),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__finish_artifact_version_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.artifact-versions","editor.eval.clj.result.refactor.artifact-versions",923340847),null], null), null));
lt.plugins.cljrefactor.artifact_list = (function artifact_list(){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str("(def tr (refactor-nrepl.client/connect))"),cljs.core.str("(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"artifact-list\"}))")].join('');
});
lt.plugins.cljrefactor.__BEH__trigger_artifact_hints = (function __BEH__trigger_artifact_hints(editor,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Retrieving clojars artifacts")].join(''));
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifact_list.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.artifacts","refactor.artifacts",2606704295),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","trigger-artifact-hints","lt.plugins.cljrefactor/trigger-artifact-hints",1356312830),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__trigger_artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact.hints.update!","artifact.hints.update!",2088367020),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.cljrefactor.sel_cb = (function sel_cb(ed,fun,c){var artifact = cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,c),"completion");fun.call(null,[cljs.core.str(artifact),cljs.core.str(" ")].join(''));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact-version.hints.update!","artifact-version.hints.update!",714019447),artifact);
});
lt.plugins.cljrefactor.create_artifact_hints = (function create_artifact_hints(ed,artifacts){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__17204_SHARP_){return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{"item": p1__17204_SHARP_, "completion": p1__17204_SHARP_, "text": p1__17204_SHARP_, "select": cljs.core.partial.call(null,lt.plugins.cljrefactor.sel_cb,ed)}], null));
}),artifacts));
});
lt.plugins.cljrefactor.__BEH__finish_artifact_hints = (function __BEH__finish_artifact_hints(editor,res){var artifacts = clojure.string.split.call(null,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))))),/ /);var hints = lt.plugins.cljrefactor.create_artifact_hints.call(null,editor,artifacts);lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor","dep-hints","lt.plugins.cljrefactor/dep-hints",2704514262),hints], null));
return lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","finish-artifact-hints","lt.plugins.cljrefactor/finish-artifact-hints",4466395321),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__finish_artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.artifacts","editor.eval.clj.result.refactor.artifacts",4548973530),null], null), null));
lt.plugins.cljrefactor.__BEH__artifact_hints = (function __BEH__artifact_hints(ed,hints,token){lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor","token","lt.plugins.cljrefactor/token",4439741547),token], null));
if(cljs.core.truth_(new cljs.core.Keyword("lt.plugins.cljrefactor","dep-hints","lt.plugins.cljrefactor/dep-hints",2704514262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
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
}catch (e17206){var e = e17206;return null;
}});
lt.plugins.cljrefactor.hotload_dep_op = (function hotload_dep_op(dep){var coords = [cljs.core.str("\"["),cljs.core.str(cljs.core.first.call(null,dep)),cljs.core.str(" \\\""),cljs.core.str(cljs.core.second.call(null,dep)),cljs.core.str("\\"),cljs.core.str("\""),cljs.core.str("]\"")].join('');return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str(" (def tr (refactor-nrepl.client/connect))"),cljs.core.str(" (clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"hotload-dependency\" :coordinates "),cljs.core.str(coords),cljs.core.str("}))")].join('');
});
lt.plugins.cljrefactor.__BEH__hotload_dep_BANG_ = (function __BEH__hotload_dep_BANG_(ed,coords){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.hotload_dep_op.call(null,coords),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.hotload-dep","refactor.hotload-dep",3912040123),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","hotload-dep!","lt.plugins.cljrefactor/hotload-dep!",1855078936),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__hotload_dep_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.hotload-dep!","refactor.hotload-dep!",661803370),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor","hotload-dep","lt.plugins.cljrefactor/hotload-dep",4454739055),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Hotload dependency",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var pos = (cljs.core.truth_(ed)?lt.objs.editor.__GT_cursor.call(null,ed):null);if(cljs.core.truth_(ed))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var candidate = lt.objs.editor.selection.call(null,ed);var coords = lt.plugins.cljrefactor.parse_dep.call(null,candidate);lt.objs.editor.move_cursor.call(null,ed,pos);
if(cljs.core.truth_((function (){var and__15017__auto__ = coords;if(cljs.core.truth_(and__15017__auto__))
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return and__15017__auto__;
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
lt.plugins.cljrefactor.__BEH__resolve_missing_selected = (function __BEH__resolve_missing_selected(ed,item){var token = lt.plugins.clojure.find_symbol_at_cursor.call(null,ed);var alias = cljs.core.last.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item),"."));var dep = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"as","as",1013907364),alias], null);lt.plugins.cljrefactor.namespace.replace_ns.call(null,ed,lt.plugins.cljrefactor.pprint.pprint_ns.call(null,lt.plugins.cljrefactor.namespace.add_require.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(lt.plugins.cljrefactor.namespace.get_ns_decl.call(null,ed)),dep)));
return lt.objs.editor.focus.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","resolve-missing-selected","lt.plugins.cljrefactor/resolve-missing-selected",671061857),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__resolve_missing_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolve-missing.selected","resolve-missing.selected",3085476694),null], null), null));
lt.plugins.cljrefactor.resolve_missing_op = (function resolve_missing_op(sym){return [cljs.core.str("(do (require 'refactor-nrepl.client) (require 'clojure.tools.nrepl)"),cljs.core.str("(def tr (refactor-nrepl.client/connect))"),cljs.core.str("(clojure.tools.nrepl/message (clojure.tools.nrepl/client tr 5000) {:op \"resolve-missing\" :symbol \""),cljs.core.str(sym),cljs.core.str("\"}))")].join('');
});
lt.plugins.cljrefactor.__BEH__resolve_missing_res = (function __BEH__resolve_missing_res(ed,res){var map__17209 = cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))));var map__17209__$1 = ((cljs.core.seq_QMARK_.call(null,map__17209))?cljs.core.apply.call(null,cljs.core.hash_map,map__17209):map__17209);var type = cljs.core.get.call(null,map__17209__$1,new cljs.core.Keyword(null,"type","type",1017479852));var candidates = cljs.core.get.call(null,map__17209__$1,new cljs.core.Keyword(null,"candidates","candidates",3897560770));if(cljs.core.seq.call(null,candidates))
{var items = cljs.core.map.call(null,((function (map__17209,map__17209__$1,type,candidates){
return (function (p1__17207_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"label","label",1116631654)],[type,p1__17207_SHARP_]);
});})(map__17209,map__17209__$1,type,candidates))
,clojure.string.split.call(null,candidates," "));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),1))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"resolve-missing.selected","resolve-missing.selected",3085476694),cljs.core.first.call(null,items));
} else
{return lt.plugins.cljrefactor.select.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"behavior","behavior",2524816836),new cljs.core.Keyword(null,"resolve-missing.selected","resolve-missing.selected",3085476694),new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"items","items",1114430258),items], null));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","resolve-missing-res","lt.plugins.cljrefactor/resolve-missing-res",935277452),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__resolve_missing_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.resolve-missing","editor.eval.clj.result.refactor.resolve-missing",1162041406),null], null), null));
lt.plugins.cljrefactor.__BEH__resolve_missing_BANG_ = (function __BEH__resolve_missing_BANG_(ed,sym){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.resolve_missing_op.call(null,sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.resolve-missing","refactor.resolve-missing",2492898635),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","resolve-missing!","lt.plugins.cljrefactor/resolve-missing!",1565569160),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__resolve_missing_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.resolve-missing!","refactor.resolve-missing!",3913057498),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor","resolve-missing","lt.plugins.cljrefactor/resolve-missing",4428370879),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Resolve missing",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var temp__4092__auto____$1 = lt.plugins.clojure.find_symbol_at_cursor.call(null,ed);if(cljs.core.truth_(temp__4092__auto____$1))
{var token = temp__4092__auto____$1;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.resolve-missing!","refactor.resolve-missing!",3913057498),new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));
} else
{return null;
}
} else
{return null;
}
})], null));
}

//# sourceMappingURL=clj-light-refactor_compiled.js.map