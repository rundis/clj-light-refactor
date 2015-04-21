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
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",1965434859)),(function (node,children){return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",1965434859),(function (){var and__19564__auto__ = children;if(cljs.core.truth_(and__19564__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__19564__auto__;
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
{var vec__21549 = loc;var node = cljs.core.nth.call(null,vec__21549,0,null);var path = cljs.core.nth.call(null,vec__21549,1,null);var vec__21550 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__21550,0,null);var cnext = cljs.core.nthnext.call(null,vec__21550,1);var cs = vec__21550;if(cljs.core.truth_(cs))
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
clojure.zip.up = (function up(loc){var vec__21553 = loc;var node = cljs.core.nth.call(null,vec__21553,0,null);var map__21554 = cljs.core.nth.call(null,vec__21553,1,null);var map__21554__$1 = ((cljs.core.seq_QMARK_.call(null,map__21554))?cljs.core.apply.call(null,cljs.core.hash_map,map__21554):map__21554);var path = map__21554__$1;var l = cljs.core.get.call(null,map__21554__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__21554__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__21554__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var r = cljs.core.get.call(null,map__21554__$1,new cljs.core.Keyword(null,"r","r",1013904356));var changed_QMARK_ = cljs.core.get.call(null,map__21554__$1,new cljs.core.Keyword(null,"changed?","changed?",2446321533));if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__19564__auto__ = ppath;if(cljs.core.truth_(and__19564__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__19564__auto__;
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
var G__21587 = p;
loc = G__21587;
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
clojure.zip.right = (function right(loc){var vec__21558 = loc;var node = cljs.core.nth.call(null,vec__21558,0,null);var map__21559 = cljs.core.nth.call(null,vec__21558,1,null);var map__21559__$1 = ((cljs.core.seq_QMARK_.call(null,map__21559))?cljs.core.apply.call(null,cljs.core.hash_map,map__21559):map__21559);var path = map__21559__$1;var l = cljs.core.get.call(null,map__21559__$1,new cljs.core.Keyword(null,"l","l",1013904350));var vec__21560 = cljs.core.get.call(null,map__21559__$1,new cljs.core.Keyword(null,"r","r",1013904356));var r = cljs.core.nth.call(null,vec__21560,0,null);var rnext = cljs.core.nthnext.call(null,vec__21560,1);var rs = vec__21560;if(cljs.core.truth_((function (){var and__19564__auto__ = path;if(cljs.core.truth_(and__19564__auto__))
{return rs;
} else
{return and__19564__auto__;
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
clojure.zip.rightmost = (function rightmost(loc){var vec__21563 = loc;var node = cljs.core.nth.call(null,vec__21563,0,null);var map__21564 = cljs.core.nth.call(null,vec__21563,1,null);var map__21564__$1 = ((cljs.core.seq_QMARK_.call(null,map__21564))?cljs.core.apply.call(null,cljs.core.hash_map,map__21564):map__21564);var path = map__21564__$1;var l = cljs.core.get.call(null,map__21564__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__21564__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__19564__auto__ = path;if(cljs.core.truth_(and__19564__auto__))
{return r;
} else
{return and__19564__auto__;
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
clojure.zip.left = (function left(loc){var vec__21567 = loc;var node = cljs.core.nth.call(null,vec__21567,0,null);var map__21568 = cljs.core.nth.call(null,vec__21567,1,null);var map__21568__$1 = ((cljs.core.seq_QMARK_.call(null,map__21568))?cljs.core.apply.call(null,cljs.core.hash_map,map__21568):map__21568);var path = map__21568__$1;var l = cljs.core.get.call(null,map__21568__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__21568__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__19564__auto__ = path;if(cljs.core.truth_(and__19564__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__19564__auto__;
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
clojure.zip.leftmost = (function leftmost(loc){var vec__21571 = loc;var node = cljs.core.nth.call(null,vec__21571,0,null);var map__21572 = cljs.core.nth.call(null,vec__21571,1,null);var map__21572__$1 = ((cljs.core.seq_QMARK_.call(null,map__21572))?cljs.core.apply.call(null,cljs.core.hash_map,map__21572):map__21572);var path = map__21572__$1;var l = cljs.core.get.call(null,map__21572__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__21572__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__19564__auto__ = path;if(cljs.core.truth_(and__19564__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__19564__auto__;
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
clojure.zip.insert_left = (function insert_left(loc,item){var vec__21575 = loc;var node = cljs.core.nth.call(null,vec__21575,0,null);var map__21576 = cljs.core.nth.call(null,vec__21575,1,null);var map__21576__$1 = ((cljs.core.seq_QMARK_.call(null,map__21576))?cljs.core.apply.call(null,cljs.core.hash_map,map__21576):map__21576);var path = map__21576__$1;var l = cljs.core.get.call(null,map__21576__$1,new cljs.core.Keyword(null,"l","l",1013904350));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__21579 = loc;var node = cljs.core.nth.call(null,vec__21579,0,null);var map__21580 = cljs.core.nth.call(null,vec__21579,1,null);var map__21580__$1 = ((cljs.core.seq_QMARK_.call(null,map__21580))?cljs.core.apply.call(null,cljs.core.hash_map,map__21580):map__21580);var path = map__21580__$1;var r = cljs.core.get.call(null,map__21580__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__21582 = loc;var _ = cljs.core.nth.call(null,vec__21582,0,null);var path = cljs.core.nth.call(null,vec__21582,1,null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
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
edit.cljs$lang$applyTo = (function (arglist__21588){
var loc = cljs.core.first(arglist__21588);
arglist__21588 = cljs.core.next(arglist__21588);
var f = cljs.core.first(arglist__21588);
var args = cljs.core.rest(arglist__21588);
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
{var or__19576__auto__ = (function (){var and__19564__auto__ = clojure.zip.branch_QMARK_.call(null,loc);if(cljs.core.truth_(and__19564__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__19564__auto__;
}
})();if(cljs.core.truth_(or__19576__auto__))
{return or__19576__auto__;
} else
{var or__19576__auto____$1 = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__19576__auto____$1))
{return or__19576__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__19576__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__19576__auto____$2))
{return or__19576__auto____$2;
} else
{{
var G__21589 = clojure.zip.up.call(null,p);
p = G__21589;
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
var temp__4090__auto____$1 = (function (){var and__19564__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__19564__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__19564__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;{
var G__21590 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__21590;
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
clojure.zip.remove = (function remove(loc){var vec__21585 = loc;var node = cljs.core.nth.call(null,vec__21585,0,null);var map__21586 = cljs.core.nth.call(null,vec__21585,1,null);var map__21586__$1 = ((cljs.core.seq_QMARK_.call(null,map__21586))?cljs.core.apply.call(null,cljs.core.hash_map,map__21586):map__21586);var path = map__21586__$1;var l = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));while(true){
var temp__4090__auto__ = (function (){var and__19564__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__19564__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__19564__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__21591 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__21591;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__19564__auto__ = ppath;if(cljs.core.truth_(and__19564__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__19564__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.parser')) {
goog.provide('lt.plugins.cljrefactor.parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.zip');
goog.require('clojure.zip');
lt.plugins.cljrefactor.parser.str__GT_seq_zip = (function str__GT_seq_zip(form_str){cljs.reader.register_tag_parser_BANG_.call(null,"afn",(function (x){return [cljs.core.str("___#"),cljs.core.str(x),cljs.core.str("___")].join('');
}));
var res = ((cljs.core.seq.call(null,form_str))?clojure.zip.seq_zip.call(null,cljs.reader.read_string.call(null,clojure.string.replace.call(null,form_str,/#\(/,"#afn("))):null);cljs.reader.deregister_tag_parser_BANG_.call(null,"afn");
return res;
});
lt.plugins.cljrefactor.parser.zip__GT_str = (function zip__GT_str(zipnode){return clojure.string.replace.call(null,cljs.core.pr_str.call(null,clojure.zip.root.call(null,zipnode)),/\"___|___\"/,"");
});
lt.plugins.cljrefactor.parser.do_find_def = (function do_find_def(root){if(cljs.core.list_QMARK_.call(null,clojure.zip.node.call(null,root)))
{var def_node = clojure.zip.down.call(null,root);if(cljs.core._EQ_.call(null,[cljs.core.str(clojure.zip.node.call(null,def_node))].join('').indexOf("def"),0))
{return cljs.core.pr_str.call(null,clojure.zip.node.call(null,clojure.zip.right.call(null,def_node)));
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.cljrefactor.parser.find_def = (function find_def(form){var temp__4092__auto__ = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form);if(cljs.core.truth_(temp__4092__auto__))
{var root = temp__4092__auto__;return lt.plugins.cljrefactor.parser.do_find_def.call(null,root);
} else
{return null;
}
});
lt.plugins.cljrefactor.parser.find_test_def = (function find_test_def(form){var temp__4092__auto__ = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form);if(cljs.core.truth_(temp__4092__auto__))
{var root = temp__4092__auto__;if(cljs.core.list_QMARK_.call(null,clojure.zip.node.call(null,root)))
{var temp__4090__auto__ = lt.plugins.cljrefactor.parser.do_find_def.call(null,root);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;return v;
} else
{if(cljs.core._EQ_.call(null,cljs.core.pr_str.call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,root))),"with-test"))
{return lt.plugins.cljrefactor.parser.do_find_def.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,root)));
} else
{return null;
}
}
} else
{return null;
}
} else
{return null;
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.middleware')) {
goog.provide('lt.plugins.cljrefactor.middleware');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
lt.plugins.cljrefactor.middleware.create_op = (function create_op(params){return [cljs.core.str("(do\n     (require 'refactor-nrepl.client)\n     (require 'clojure.tools.nrepl)\n     (clojure.tools.nrepl/message\n       (clojure.tools.nrepl/client (refactor-nrepl.client/connect) 10000)\n"),cljs.core.str(cljs.core.pr_str.call(null,params)),cljs.core.str("))")].join('');
});
lt.plugins.cljrefactor.middleware.create_ns_op = (function create_ns_op(ed,params){var filename = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));return [cljs.core.str("(do\n     (require 'refactor-nrepl.client)\n     (require 'clojure.tools.nrepl)\n     (require 'lighttable.nrepl.eval)\n"),cljs.core.str("(clojure.tools.nrepl/message\n     (clojure.tools.nrepl/client (refactor-nrepl.client/connect) 10000)\n"),cljs.core.str([cljs.core.str(clojure.string.join.call(null,"",cljs.core.drop_last.call(null,cljs.core.pr_str.call(null,params)))),cljs.core.str(" :ns "),cljs.core.str("(lighttable.nrepl.eval/file->ns \""),cljs.core.str(filename),cljs.core.str("\")}")].join('')),cljs.core.str("))")].join('');
});
lt.plugins.cljrefactor.middleware.extract_result_group = (function extract_result_group(res,k){return cljs.core.filter.call(null,k,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))));
});
lt.plugins.cljrefactor.middleware.extract_result_group_single = (function extract_result_group_single(res,k){return k.call(null,cljs.core.first.call(null,lt.plugins.cljrefactor.middleware.extract_result_group.call(null,res,k)));
});
/**
* @param {...*} var_args
*/
lt.plugins.cljrefactor.middleware.extract_result = (function() { 
var extract_result__delegate = function (res,p__21693){var map__21695 = p__21693;var map__21695__$1 = ((cljs.core.seq_QMARK_.call(null,map__21695))?cljs.core.apply.call(null,cljs.core.hash_map,map__21695):map__21695);var multiples = cljs.core.get.call(null,map__21695__$1,new cljs.core.Keyword(null,"multiples","multiples",4102754261));var singles = cljs.core.get.call(null,map__21695__$1,new cljs.core.Keyword(null,"singles","singles",3108436125));var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"err","err",1014004951),(function (){var or__19576__auto__ = lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,new cljs.core.Keyword(null,"err","err",1014004951));if(cljs.core.truth_(or__19576__auto__))
{return or__19576__auto__;
} else
{return lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,new cljs.core.Keyword(null,"error","error",1110689146));
}
})(),new cljs.core.Keyword(null,"out","out",1014014656),lt.plugins.cljrefactor.middleware.extract_result_group.call(null,res,new cljs.core.Keyword(null,"out","out",1014014656)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))),new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ret], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.merge.call(null,ret,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ret,map__21695,map__21695__$1,multiples,singles){
return (function (p1__21691_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[p1__21691_SHARP_],[lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,p1__21691_SHARP_)]);
});})(ret,map__21695,map__21695__$1,multiples,singles))
,singles)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ret,map__21695,map__21695__$1,multiples,singles){
return (function (p1__21692_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[p1__21692_SHARP_],[lt.plugins.cljrefactor.middleware.extract_result_group.call(null,res,p1__21692_SHARP_)]);
});})(ret,map__21695,map__21695__$1,multiples,singles))
,multiples)))], null);
}
};
var extract_result = function (res,var_args){
var p__21693 = null;if (arguments.length > 1) {
  p__21693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return extract_result__delegate.call(this,res,p__21693);};
extract_result.cljs$lang$maxFixedArity = 1;
extract_result.cljs$lang$applyTo = (function (arglist__21696){
var res = cljs.core.first(arglist__21696);
var p__21693 = cljs.core.rest(arglist__21696);
return extract_result__delegate(res,p__21693);
});
extract_result.cljs$core$IFn$_invoke$arity$variadic = extract_result__delegate;
return extract_result;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.util')) {
goog.provide('lt.plugins.cljrefactor.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.plugins.paredit');
goog.require('lt.plugins.paredit');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.cljrefactor.util.seek_top = (function seek_top(ed,loc){var pars = cljs.core.re_pattern.call(null,"\\(|\\{|\\[");var loc__$1 = loc;while(true){
var cur = cljs.core.second.call(null,lt.plugins.paredit.scan.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"loc","loc",1014011570),loc__$1,new cljs.core.Keyword(null,"dir","dir",1014003711),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"regex","regex",1122296761),pars,new cljs.core.Keyword(null,"skip","skip",1017436401),lt.plugins.paredit.in_string_QMARK_], null)));var adj = lt.objs.editor.adjust_loc.call(null,cur,-1);if(((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cur) === 0)) || ((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cur) == null)))
{return cur;
} else
{{
var G__26826 = adj;
loc__$1 = G__26826;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.util.seek_bottom = (function seek_bottom(ed,loc){var adj__GT_top = (function (pos){return lt.objs.editor.adjust_loc.call(null,pos,1);
});var start = lt.plugins.cljrefactor.util.seek_top.call(null,ed,loc);var end = cljs.core.second.call(null,lt.plugins.paredit.form_boundary.call(null,ed,adj__GT_top.call(null,start),null));return adj__GT_top.call(null,end);
});
lt.plugins.cljrefactor.util.replace_token = (function replace_token(s,bounds,neue){var lines = cljs.core.vec.call(null,clojure.string.split.call(null,s,/\n/));return clojure.string.join.call(null,"\n",cljs.core.update_in.call(null,lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(bounds)], null),((function (lines){
return (function (p1__26822_SHARP_){return [cljs.core.str(p1__26822_SHARP_.substr(0,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(bounds))),cljs.core.str(neue),cljs.core.str(p1__26822_SHARP_.substr(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(bounds)))].join('');
});})(lines))
));
});
lt.plugins.cljrefactor.util.find_token_bounds = (function find_token_bounds(s,token){return cljs.core.some.call(null,(function (p1__26823_SHARP_){var idx = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(p1__26823_SHARP_).indexOf(token);if((idx > -1))
{return cljs.core.assoc.call(null,p1__26823_SHARP_,new cljs.core.Keyword(null,"start","start",1123661780),idx,new cljs.core.Keyword(null,"end","end",1014004813),(idx + cljs.core.count.call(null,token)));
} else
{return null;
}
}),cljs.core.keep_indexed.call(null,(function (line,content){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"content","content",1965434859),content], null);
}),clojure.string.split.call(null,s,/\n/)));
});
lt.plugins.cljrefactor.util.get_top_level_form = (function() {
var get_top_level_form = null;
var get_top_level_form__1 = (function (ed){return get_top_level_form.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
var get_top_level_form__2 = (function (ed,pos){var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos);var form_start = lt.plugins.cljrefactor.util.seek_top.call(null,ed,pos);var form_end = lt.plugins.cljrefactor.util.seek_bottom.call(null,ed,cljs.core.update_in.call(null,form_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));if((line > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(form_end)))
{return null;
} else
{var temp__4092__auto__ = lt.objs.editor.range.call(null,ed,form_start,form_end);if(cljs.core.truth_(temp__4092__auto__))
{var sel = temp__4092__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-str","form-str",1486434586),sel,new cljs.core.Keyword(null,"start","start",1123661780),form_start,new cljs.core.Keyword(null,"end","end",1014004813),form_end], null);
} else
{return null;
}
}
});
get_top_level_form = function(ed,pos){
switch(arguments.length){
case 1:
return get_top_level_form__1.call(this,ed);
case 2:
return get_top_level_form__2.call(this,ed,pos);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_top_level_form.cljs$core$IFn$_invoke$arity$1 = get_top_level_form__1;
get_top_level_form.cljs$core$IFn$_invoke$arity$2 = get_top_level_form__2;
return get_top_level_form;
})()
;
lt.plugins.cljrefactor.util.hash_prefixed_QMARK_ = (function hash_prefixed_QMARK_(ed,start){return cljs.core._EQ_.call(null,lt.objs.editor.range.call(null,ed,start,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)),"#");
});
lt.plugins.cljrefactor.util.set_form_QMARK_ = (function() {
var set_form_QMARK_ = null;
var set_form_QMARK___1 = (function (form_str){return cljs.core._EQ_.call(null,form_str.indexOf("#{"),0);
});
var set_form_QMARK___2 = (function (ed,start){return ((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(start) > 0)) && (lt.plugins.cljrefactor.util.hash_prefixed_QMARK_.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec)));
});
set_form_QMARK_ = function(ed,start){
switch(arguments.length){
case 1:
return set_form_QMARK___1.call(this,ed);
case 2:
return set_form_QMARK___2.call(this,ed,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_form_QMARK_.cljs$core$IFn$_invoke$arity$1 = set_form_QMARK___1;
set_form_QMARK_.cljs$core$IFn$_invoke$arity$2 = set_form_QMARK___2;
return set_form_QMARK_;
})()
;
lt.plugins.cljrefactor.util.get_form = (function() {
var get_form = null;
var get_form__1 = (function (ed){return get_form.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
var get_form__2 = (function (ed,pos){var vec__26825 = lt.plugins.paredit.form_boundary.call(null,ed,pos);var start = cljs.core.nth.call(null,vec__26825,0,null);var end = cljs.core.nth.call(null,vec__26825,1,null);var end__$1 = cljs.core.update_in.call(null,end,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc);if(cljs.core.truth_((function (){var and__19564__auto__ = start;if(cljs.core.truth_(and__19564__auto__))
{return end__$1;
} else
{return and__19564__auto__;
}
})()))
{if(lt.plugins.cljrefactor.util.set_form_QMARK_.call(null,ed,start))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-str","form-str",1486434586),lt.objs.editor.range.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec),end__$1),new cljs.core.Keyword(null,"start","start",1123661780),cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec),new cljs.core.Keyword(null,"end","end",1014004813),end__$1], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-str","form-str",1486434586),lt.objs.editor.range.call(null,ed,start,end__$1),new cljs.core.Keyword(null,"start","start",1123661780),start,new cljs.core.Keyword(null,"end","end",1014004813),end__$1], null);
}
} else
{return null;
}
});
get_form = function(ed,pos){
switch(arguments.length){
case 1:
return get_form__1.call(this,ed);
case 2:
return get_form__2.call(this,ed,pos);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_form.cljs$core$IFn$_invoke$arity$1 = get_form__1;
get_form.cljs$core$IFn$_invoke$arity$2 = get_form__2;
return get_form;
})()
;
lt.plugins.cljrefactor.util.multiple_cursors_QMARK_ = (function multiple_cursors_QMARK_(ed){var cm_ed = lt.objs.editor.__GT_cm_ed.call(null,ed);return (cljs.core.count.call(null,cljs.core.js__GT_clj.call(null,cm_ed.getSelections())) > 1);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.testing')) {
goog.provide('lt.plugins.cljrefactor.testing');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.cljrefactor.parser');
lt.plugins.cljrefactor.testing.find_line_containing = (function find_line_containing(ed,txt){var res = [];lt.objs.editor.__GT_cm_ed.call(null,ed).getDoc().eachLine(((function (res){
return (function (line_handle){if((line_handle.text.indexOf(txt) > -1))
{return res.push(lt.objs.editor.__GT_cm_ed.call(null,ed).lineInfo(line_handle).line);
} else
{return null;
}
});})(res))
);
return cljs.core.first.call(null,cljs.core.seq.call(null,res));
});
lt.plugins.cljrefactor.testing.test_op = (function test_op(ed,fixture){return lt.plugins.cljrefactor.middleware.create_ns_op.call(null,ed,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",1013907795),"test"], null),(cljs.core.truth_(fixture)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tests","tests",1124155795),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixture], null)], null):null)));
});
lt.plugins.cljrefactor.testing.show_summary = (function show_summary(summary){if(((new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(summary) > 0)) || ((new cljs.core.Keyword(null,"fail","fail",1017039504).cljs$core$IFn$_invoke$arity$1(summary) > 0)))
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Test errors: "),cljs.core.str(summary)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Test summary: "),cljs.core.str(summary)].join(''));
}
});
lt.plugins.cljrefactor.testing.show_successes = (function show_successes(ed,results){if(cljs.core.seq.call(null,results))
{var seq__26539 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p__26543){var vec__26544 = p__26543;var k = cljs.core.nth.call(null,vec__26544,0,null);var v = cljs.core.nth.call(null,vec__26544,1,null);return cljs.core.every_QMARK_.call(null,((function (vec__26544,k,v){
return (function (p1__26532_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__26532_SHARP_),"pass");
});})(vec__26544,k,v))
,v);
}),results));var chunk__26540 = null;var count__26541 = 0;var i__26542 = 0;while(true){
if((i__26542 < count__26541))
{var ks = cljs.core._nth.call(null,chunk__26540,i__26542);var line_26575 = lt.plugins.cljrefactor.testing.find_line_containing.call(null,ed,cljs.core.name.call(null,cljs.core.first.call(null,ks)));lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line_26575], null));
{
var G__26576 = seq__26539;
var G__26577 = chunk__26540;
var G__26578 = count__26541;
var G__26579 = (i__26542 + 1);
seq__26539 = G__26576;
chunk__26540 = G__26577;
count__26541 = G__26578;
i__26542 = G__26579;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26539);if(temp__4092__auto__)
{var seq__26539__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26539__$1))
{var c__20324__auto__ = cljs.core.chunk_first.call(null,seq__26539__$1);{
var G__26580 = cljs.core.chunk_rest.call(null,seq__26539__$1);
var G__26581 = c__20324__auto__;
var G__26582 = cljs.core.count.call(null,c__20324__auto__);
var G__26583 = 0;
seq__26539 = G__26580;
chunk__26540 = G__26581;
count__26541 = G__26582;
i__26542 = G__26583;
continue;
}
} else
{var ks = cljs.core.first.call(null,seq__26539__$1);var line_26584 = lt.plugins.cljrefactor.testing.find_line_containing.call(null,ed,cljs.core.name.call(null,cljs.core.first.call(null,ks)));lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line_26584], null));
{
var G__26585 = cljs.core.next.call(null,seq__26539__$1);
var G__26586 = null;
var G__26587 = 0;
var G__26588 = 0;
seq__26539 = G__26585;
chunk__26540 = G__26586;
count__26541 = G__26587;
i__26542 = G__26588;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
lt.plugins.cljrefactor.testing.show_errors = (function show_errors(ed,results){var seq__26549 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,results)));var chunk__26550 = null;var count__26551 = 0;var i__26552 = 0;while(true){
if((i__26552 < count__26551))
{var r = cljs.core._nth.call(null,chunk__26550,i__26552);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(r),"pass"))
{} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error:\n"),cljs.core.str(new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(r))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(r) - 1)], null));
}
{
var G__26589 = seq__26549;
var G__26590 = chunk__26550;
var G__26591 = count__26551;
var G__26592 = (i__26552 + 1);
seq__26549 = G__26589;
chunk__26550 = G__26590;
count__26551 = G__26591;
i__26552 = G__26592;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26549);if(temp__4092__auto__)
{var seq__26549__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26549__$1))
{var c__20324__auto__ = cljs.core.chunk_first.call(null,seq__26549__$1);{
var G__26593 = cljs.core.chunk_rest.call(null,seq__26549__$1);
var G__26594 = c__20324__auto__;
var G__26595 = cljs.core.count.call(null,c__20324__auto__);
var G__26596 = 0;
seq__26549 = G__26593;
chunk__26550 = G__26594;
count__26551 = G__26595;
i__26552 = G__26596;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__26549__$1);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(r),"pass"))
{} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error:\n"),cljs.core.str(new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(r))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(r) - 1)], null));
}
{
var G__26597 = cljs.core.next.call(null,seq__26549__$1);
var G__26598 = null;
var G__26599 = 0;
var G__26600 = 0;
seq__26549 = G__26597;
chunk__26550 = G__26598;
count__26551 = G__26599;
i__26552 = G__26600;
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
lt.plugins.cljrefactor.testing.__BEH__test_res = (function __BEH__test_res(ed,res){var vec__26558 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"results","results",2111450984)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__26558,0,null);var ret = cljs.core.nth.call(null,vec__26558,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{lt.plugins.cljrefactor.testing.show_successes.call(null,ed,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(ret));
lt.plugins.cljrefactor.testing.show_errors.call(null,ed,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(ret));
lt.plugins.cljrefactor.testing.show_summary.call(null,new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(ret));
var seq__26559_26601 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(ret));var chunk__26560_26602 = null;var count__26561_26603 = 0;var i__26562_26604 = 0;while(true){
if((i__26562_26604 < count__26561_26603))
{var msg_26605 = cljs.core._nth.call(null,chunk__26560_26602,i__26562_26604);lt.objs.console.log.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(msg_26605));
{
var G__26606 = seq__26559_26601;
var G__26607 = chunk__26560_26602;
var G__26608 = count__26561_26603;
var G__26609 = (i__26562_26604 + 1);
seq__26559_26601 = G__26606;
chunk__26560_26602 = G__26607;
count__26561_26603 = G__26608;
i__26562_26604 = G__26609;
continue;
}
} else
{var temp__4092__auto___26610 = cljs.core.seq.call(null,seq__26559_26601);if(temp__4092__auto___26610)
{var seq__26559_26611__$1 = temp__4092__auto___26610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26559_26611__$1))
{var c__20324__auto___26612 = cljs.core.chunk_first.call(null,seq__26559_26611__$1);{
var G__26613 = cljs.core.chunk_rest.call(null,seq__26559_26611__$1);
var G__26614 = c__20324__auto___26612;
var G__26615 = cljs.core.count.call(null,c__20324__auto___26612);
var G__26616 = 0;
seq__26559_26601 = G__26613;
chunk__26560_26602 = G__26614;
count__26561_26603 = G__26615;
i__26562_26604 = G__26616;
continue;
}
} else
{var msg_26617 = cljs.core.first.call(null,seq__26559_26611__$1);lt.objs.console.log.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(msg_26617));
{
var G__26618 = cljs.core.next.call(null,seq__26559_26611__$1);
var G__26619 = null;
var G__26620 = 0;
var G__26621 = 0;
seq__26559_26601 = G__26618;
chunk__26560_26602 = G__26619;
count__26561_26603 = G__26620;
i__26562_26604 = G__26621;
continue;
}
}
} else
{}
}
break;
}
}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.testing","test-res","lt.plugins.cljrefactor.testing/test-res",4130252604),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.testing.__BEH__test_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.test","editor.eval.clj.result.refactor.test",1258664989),null], null), null));
lt.plugins.cljrefactor.testing.__BEH__test_all = (function __BEH__test_all(ed){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.testing.test_op.call(null,ed,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.test","refactor.test",2087392560),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.testing","test-all","lt.plugins.cljrefactor.testing/test-all",4130301499),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.testing.__BEH__test_all,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.test-all","refactor.test-all",4194169988),null], null), null));
lt.plugins.cljrefactor.testing.__BEH__test_one = (function __BEH__test_one(ed){var temp__4092__auto__ = (function (){var G__26564 = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed);var G__26564__$1 = (((G__26564 == null))?null:new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(G__26564));var G__26564__$2 = (((G__26564__$1 == null))?null:lt.plugins.cljrefactor.parser.find_test_def.call(null,G__26564__$1));return G__26564__$2;
})();if(cljs.core.truth_(temp__4092__auto__))
{var fixture = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.testing.test_op.call(null,ed,fixture),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.test","refactor.test",2087392560),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.testing","test-one","lt.plugins.cljrefactor.testing/test-one",4130248066),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.testing.__BEH__test_one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.test-one","refactor.test-one",4194183497),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.testing","test-all","lt.plugins.cljrefactor.testing/test-all",4130301499),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Test all in ns",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.test-all","refactor.test-all",4194169988));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.testing","test-one","lt.plugins.cljrefactor.testing/test-one",4130248066),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Test one at point",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.test-one","refactor.test-one",4194183497));
} else
{return null;
}
})], null));
}
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
lt.plugins.cljrefactor.prj_parser.prj__GT_map = (function prj__GT_map(p){return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__26432_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[cljs.core.first.call(null,p1__26432_SHARP_)],[cljs.core.second.call(null,p1__26432_SHARP_)]);
}),cljs.core.partition.call(null,2,cljs.core.drop.call(null,3,p))));
});
lt.plugins.cljrefactor.prj_parser.parse_project_file = (function parse_project_file(file){return lt.plugins.cljrefactor.prj_parser.prj__GT_map.call(null,cljs.reader.read_string.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)),/\\/,"\\\\")));
});
lt.plugins.cljrefactor.prj_parser.src_dirs = (function src_dirs(prj){var or__19576__auto__ = new cljs.core.Keyword(null,"source-paths","source-paths",1249628206).cljs$core$IFn$_invoke$arity$1(prj);if(cljs.core.truth_(or__19576__auto__))
{return or__19576__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src"], null);
}
});
lt.plugins.cljrefactor.prj_parser.find_sub_path = (function find_sub_path(prj_dir,path,src_dirs){return cljs.core.some.call(null,(function (p1__26433_SHARP_){if((path.indexOf(lt.objs.files.join.call(null,prj_dir,p1__26433_SHARP_)) > -1))
{return path.substring((1 + cljs.core.count.call(null,lt.objs.files.join.call(null,prj_dir,p1__26433_SHARP_))));
} else
{return null;
}
}),src_dirs);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.resource')) {
goog.provide('lt.plugins.cljrefactor.resource');
goog.require('cljs.core');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.jump_stack');
goog.require('lt.objs.jump_stack');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.resource.__BEH__find_resource__DOT__res = (function __BEH__find_resource__DOT__res(ed,res){var vec__26445 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-path","resource-path",1947209206)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__26445,0,null);var ret = cljs.core.nth.call(null,vec__26445,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var temp__4090__auto__ = new cljs.core.Keyword(null,"resource-path","resource-path",1947209206).cljs$core$IFn$_invoke$arity$1(ret);if(cljs.core.truth_(temp__4090__auto__))
{var path = temp__4090__auto__;return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),ed,path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
} else
{return notifos.set_msg_BANG_.call(null,"Resource not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.resource","find-resource.res","lt.plugins.cljrefactor.resource/find-resource.res",2784862910),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.resource.__BEH__find_resource__DOT__res,new cljs.core.Keyword(null,"desc","desc",1016984067),"Results from find resource call to Cider middleware. Jumps to resource if found.",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.find-resource","editor.eval.clj.result.refactor.find-resource",1522513179),null], null), null));
lt.plugins.cljrefactor.resource.get_candidate = (function get_candidate(ed){var G__26447 = lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.cursor.call(null,ed));var G__26447__$1 = (((G__26447 == null))?null:new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(G__26447));var G__26447__$2 = (((G__26447__$1 == null))?null:clojure.string.replace.call(null,G__26447__$1,/\"/,""));return G__26447__$2;
});
lt.plugins.cljrefactor.resource.__BEH__find_resource = (function __BEH__find_resource(ed){var temp__4092__auto__ = lt.plugins.cljrefactor.resource.get_candidate.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var cand = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"resource",new cljs.core.Keyword(null,"name","name",1017277949),cand], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.find-resource","refactor.find-resource",3763001704),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.resource","find-resource","lt.plugins.cljrefactor.resource/find-resource",4148077204),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.resource.__BEH__find_resource,new cljs.core.Keyword(null,"desc","desc",1016984067),"Try to jump to resource resolved by token at cursor. Cider Op",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.find-resource","refactor.find-resource",3763001704),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.resource","find-symbol-next","lt.plugins.cljrefactor.resource/find-symbol-next",3289141534),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Jump to resource",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.find-resource","refactor.find-resource",3763001704));
} else
{return null;
}
})], null));
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
lt.plugins.cljrefactor.selector.select_item = (function select_item(this$,idx,item){var e__21003__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),idx,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),((cljs.core.map_QMARK_.call(null,item))?new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item):item)], null));var seq__26464_26482 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__26465_26483 = null;var count__26466_26484 = 0;var i__26467_26485 = 0;while(true){
if((i__26467_26485 < count__26466_26484))
{var vec__26468_26486 = cljs.core._nth.call(null,chunk__26465_26483,i__26467_26485);var ev__21004__auto___26487 = cljs.core.nth.call(null,vec__26468_26486,0,null);var func__21005__auto___26488 = cljs.core.nth.call(null,vec__26468_26486,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26487,func__21005__auto___26488);
{
var G__26489 = seq__26464_26482;
var G__26490 = chunk__26465_26483;
var G__26491 = count__26466_26484;
var G__26492 = (i__26467_26485 + 1);
seq__26464_26482 = G__26489;
chunk__26465_26483 = G__26490;
count__26466_26484 = G__26491;
i__26467_26485 = G__26492;
continue;
}
} else
{var temp__4092__auto___26493 = cljs.core.seq.call(null,seq__26464_26482);if(temp__4092__auto___26493)
{var seq__26464_26494__$1 = temp__4092__auto___26493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26464_26494__$1))
{var c__20324__auto___26495 = cljs.core.chunk_first.call(null,seq__26464_26494__$1);{
var G__26496 = cljs.core.chunk_rest.call(null,seq__26464_26494__$1);
var G__26497 = c__20324__auto___26495;
var G__26498 = cljs.core.count.call(null,c__20324__auto___26495);
var G__26499 = 0;
seq__26464_26482 = G__26496;
chunk__26465_26483 = G__26497;
count__26466_26484 = G__26498;
i__26467_26485 = G__26499;
continue;
}
} else
{var vec__26469_26500 = cljs.core.first.call(null,seq__26464_26494__$1);var ev__21004__auto___26501 = cljs.core.nth.call(null,vec__26469_26500,0,null);var func__21005__auto___26502 = cljs.core.nth.call(null,vec__26469_26500,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26501,func__21005__auto___26502);
{
var G__26503 = cljs.core.next.call(null,seq__26464_26494__$1);
var G__26504 = null;
var G__26505 = 0;
var G__26506 = 0;
seq__26464_26482 = G__26503;
chunk__26465_26483 = G__26504;
count__26466_26484 = G__26505;
i__26467_26485 = G__26506;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
});
lt.plugins.cljrefactor.selector.select_form = (function select_form(this$,items){var e__21003__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-select","div.refactor-select",3828436988),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,cljs.core.partial.call(null,lt.plugins.cljrefactor.selector.select_item,this$),items)], null)], null));var seq__26476_26507 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__26477_26508 = null;var count__26478_26509 = 0;var i__26479_26510 = 0;while(true){
if((i__26479_26510 < count__26478_26509))
{var vec__26480_26511 = cljs.core._nth.call(null,chunk__26477_26508,i__26479_26510);var ev__21004__auto___26512 = cljs.core.nth.call(null,vec__26480_26511,0,null);var func__21005__auto___26513 = cljs.core.nth.call(null,vec__26480_26511,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26512,func__21005__auto___26513);
{
var G__26514 = seq__26476_26507;
var G__26515 = chunk__26477_26508;
var G__26516 = count__26478_26509;
var G__26517 = (i__26479_26510 + 1);
seq__26476_26507 = G__26514;
chunk__26477_26508 = G__26515;
count__26478_26509 = G__26516;
i__26479_26510 = G__26517;
continue;
}
} else
{var temp__4092__auto___26518 = cljs.core.seq.call(null,seq__26476_26507);if(temp__4092__auto___26518)
{var seq__26476_26519__$1 = temp__4092__auto___26518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26476_26519__$1))
{var c__20324__auto___26520 = cljs.core.chunk_first.call(null,seq__26476_26519__$1);{
var G__26521 = cljs.core.chunk_rest.call(null,seq__26476_26519__$1);
var G__26522 = c__20324__auto___26520;
var G__26523 = cljs.core.count.call(null,c__20324__auto___26520);
var G__26524 = 0;
seq__26476_26507 = G__26521;
chunk__26477_26508 = G__26522;
count__26478_26509 = G__26523;
i__26479_26510 = G__26524;
continue;
}
} else
{var vec__26481_26525 = cljs.core.first.call(null,seq__26476_26519__$1);var ev__21004__auto___26526 = cljs.core.nth.call(null,vec__26481_26525,0,null);var func__21005__auto___26527 = cljs.core.nth.call(null,vec__26481_26525,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26526,func__21005__auto___26527);
{
var G__26528 = cljs.core.next.call(null,seq__26476_26519__$1);
var G__26529 = null;
var G__26530 = 0;
var G__26531 = 0;
seq__26476_26507 = G__26528;
chunk__26477_26508 = G__26529;
count__26478_26509 = G__26530;
i__26479_26510 = G__26531;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
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
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.completer')) {
goog.provide('lt.plugins.cljrefactor.completer');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('clojure.string');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.completer.complete_op = (function complete_op(ed,sym,form){return lt.plugins.cljrefactor.middleware.create_ns_op.call(null,ed,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"complete",new cljs.core.Keyword(null,"symbol","symbol",4421347594),sym], null),(cljs.core.truth_(form)?null:null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",1965435169),form], null)));
});
lt.plugins.cljrefactor.completer.get_completer_form_ctx = (function get_completer_form_ctx(ed,token){if(cljs.core.truth_(token))
{var temp__4092__auto__ = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var form = temp__4092__auto__;return lt.plugins.cljrefactor.util.replace_token.call(null,new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(token)) - new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form))),new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token)], null),"__prefix__");
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.cljrefactor.completer.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__21404_SHARP_){return {"text": new cljs.core.Keyword(null,"candidate","candidate",1522567413).cljs$core$IFn$_invoke$arity$1(p1__21404_SHARP_), "completion": new cljs.core.Keyword(null,"candidate","candidate",1522567413).cljs$core$IFn$_invoke$arity$1(p1__21404_SHARP_)};
}),completions);
});
lt.plugins.cljrefactor.completer.__BEH__completer__DOT__res = (function __BEH__completer__DOT__res(ed,res){var vec__21406 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completions","completions",1416465289)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21406,0,null);var ret = cljs.core.nth.call(null,vec__21406,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var temp__4092__auto___21419 = new cljs.core.Keyword(null,"completions","completions",1416465289).cljs$core$IFn$_invoke$arity$1(ret);if(cljs.core.truth_(temp__4092__auto___21419))
{var completions_21420 = temp__4092__auto___21419;lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.completer","hints","lt.plugins.cljrefactor.completer/hints",3437584730),lt.plugins.cljrefactor.completer.create_hints.call(null,completions_21420)], null));
lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.completer","completer.res","lt.plugins.cljrefactor.completer/completer.res",1863143577),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.completer.__BEH__completer__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.complete","editor.eval.clj.result.refactor.complete",3419860036),null], null), null));
lt.plugins.cljrefactor.completer.__BEH__completer__DOT__start = (function __BEH__completer__DOT__start(ed){if(cljs.core.truth_((function (){var G__21408 = cljs.core.deref.call(null,ed);var G__21408__$1 = (((G__21408 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__21408));var G__21408__$2 = (((G__21408__$1 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__21408__$1));var G__21408__$3 = (((G__21408__$2 == null))?null:cljs.core.deref.call(null,G__21408__$2));return G__21408__$3;
})()))
{var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = lt.plugins.clojure.find_symbol_at_cursor.call(null,ed);var form = lt.plugins.cljrefactor.completer.get_completer_form_ctx.call(null,ed,token);var sym = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token);if(cljs.core.truth_(cljs.core.re_find.call(null,/\"/,sym)))
{return null;
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.completer.complete_op.call(null,ed,sym,form),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.complete","refactor.complete",4742679511),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.completer","completer.start","lt.plugins.cljrefactor.completer/completer.start",2674085791),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.completer.__BEH__completer__DOT__start,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.complete","refactor.complete",4742679511),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.cljrefactor.completer.__BEH__use_local_hints = (function __BEH__use_local_hints(ed,hints,token){var tok = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.clojure.find_symbol_at_cursor.call(null,ed));if(!((cljs.core.seq.call(null,tok)) && (!(lt.plugins.cljrefactor.util.multiple_cursors_QMARK_.call(null,ed))) && (cljs.core.not.call(null,cljs.core.re_find.call(null,/\"/,tok)))))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.completer","token","lt.plugins.cljrefactor.completer/token",3417396779),null], null));
return hints;
} else
{if(cljs.core.not_EQ_.call(null,tok,new cljs.core.Keyword("lt.plugins.cljrefactor.completer","token","lt.plugins.cljrefactor.completer/token",3417396779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))
{lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.completer","token","lt.plugins.cljrefactor.completer/token",3417396779),tok], null));
lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.complete","refactor.complete",4742679511));
} else
{}
var temp__4090__auto__ = new cljs.core.Keyword("lt.plugins.cljrefactor.completer","hints","lt.plugins.cljrefactor.completer/hints",3437584730).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4090__auto__))
{var clj_hints = temp__4090__auto__;return cljs.core.concat.call(null,clj_hints,hints);
} else
{return hints;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.completer","use-local-hints","lt.plugins.cljrefactor.completer/use-local-hints",1942037826),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.completer.__BEH__use_local_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.completer","force-autocomplete","lt.plugins.cljrefactor.completer/force-autocomplete",994800796),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Force autocomplete",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.complete","refactor.complete",4742679511));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('quiescent')) {
goog.provide('quiescent');
goog.require('cljs.core');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.js_props = (function js_props(obj){if(cljs.core.map_QMARK_.call(null,obj))
{var o = (function (){var obj26360 = {};return obj26360;
})();var seq__26361_26374 = cljs.core.seq.call(null,obj);var chunk__26362_26375 = null;var count__26363_26376 = 0;var i__26364_26377 = 0;while(true){
if((i__26364_26377 < count__26363_26376))
{var vec__26365_26378 = cljs.core._nth.call(null,chunk__26362_26375,i__26364_26377);var k_26379 = cljs.core.nth.call(null,vec__26365_26378,0,null);var v_26380 = cljs.core.nth.call(null,vec__26365_26378,1,null);(o[cljs.core.name.call(null,k_26379)] = js_props.call(null,v_26380));
{
var G__26381 = seq__26361_26374;
var G__26382 = chunk__26362_26375;
var G__26383 = count__26363_26376;
var G__26384 = (i__26364_26377 + 1);
seq__26361_26374 = G__26381;
chunk__26362_26375 = G__26382;
count__26363_26376 = G__26383;
i__26364_26377 = G__26384;
continue;
}
} else
{var temp__4092__auto___26385 = cljs.core.seq.call(null,seq__26361_26374);if(temp__4092__auto___26385)
{var seq__26361_26386__$1 = temp__4092__auto___26385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26361_26386__$1))
{var c__20324__auto___26387 = cljs.core.chunk_first.call(null,seq__26361_26386__$1);{
var G__26388 = cljs.core.chunk_rest.call(null,seq__26361_26386__$1);
var G__26389 = c__20324__auto___26387;
var G__26390 = cljs.core.count.call(null,c__20324__auto___26387);
var G__26391 = 0;
seq__26361_26374 = G__26388;
chunk__26362_26375 = G__26389;
count__26363_26376 = G__26390;
i__26364_26377 = G__26391;
continue;
}
} else
{var vec__26366_26392 = cljs.core.first.call(null,seq__26361_26386__$1);var k_26393 = cljs.core.nth.call(null,vec__26366_26392,0,null);var v_26394 = cljs.core.nth.call(null,vec__26366_26392,1,null);(o[cljs.core.name.call(null,k_26393)] = js_props.call(null,v_26394));
{
var G__26395 = cljs.core.next.call(null,seq__26361_26386__$1);
var G__26396 = null;
var G__26397 = 0;
var G__26398 = 0;
seq__26361_26374 = G__26395;
chunk__26362_26375 = G__26396;
count__26363_26376 = G__26397;
i__26364_26377 = G__26398;
continue;
}
}
} else
{}
}
break;
}
return o;
} else
{return obj;
}
});
/**
* Within a component render function, will be bound to the raw
* ReactJS component.
*/
quiescent._STAR_component_STAR_ = null;
/**
* Return a function that will return a ReactJS component, using the
* provided function as the implementation for React's 'render' method
* on the component.
* 
* The given render function should take a single immutable value as
* its first argument, and return a single ReactJS component.
* Additional arguments to the component constructor will be passed as
* additional arguments to the render function whenever it is invoked,
* but will *not* be included in any calculations regarding whether the
* component should re-render.
*/
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_26368 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26368;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__26399__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__26399 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__26399__delegate.call(this,value,static_args);};
G__26399.cljs$lang$maxFixedArity = 1;
G__26399.cljs$lang$applyTo = (function (arglist__26400){
var value = cljs.core.first(arglist__26400);
var static_args = cljs.core.rest(arglist__26400);
return G__26399__delegate(value,static_args);
});
G__26399.cljs$core$IFn$_invoke$arity$variadic = G__26399__delegate;
return G__26399;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26373 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26373;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26372 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26372;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26371 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26371;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26370 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26370;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26369 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26369;
}} else
{return null;
}
}), "render": (function (){var this$ = this;return (this$.props["wrappee"]);
})});
/**
* Create a wrapper function for a compoment implementing multiple
* lifecycle functions. Lifecycle functions are specified as any number
* of additional key-value pairs passed as arguments to this function.
* 
* Valid keys and values include:
* 
* :onUpdate - will call the provided function,
* passing the rendered DOM node as a single arg
* :onMount - will call the provided function,
* passing the rendered DOM node as a single arg
* :onWillUpdate - will call the provided function with no arguments
* :onWillMount - will call the provided function with no arguments
* :onWillUnmount - will call the provided function with no arguments
* @param {...*} var_args
*/
quiescent.wrapper = (function() { 
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___26401 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___26401))
{var key_26402 = temp__4092__auto___26401;(props["key"] = key_26402);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__26403){
var child = cljs.core.first(arglist__26403);
var kvs = cljs.core.rest(arglist__26403);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;
/**
* Wrap a component, specifying a function to be called on the
* componentDidUpdate lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_update = (function on_update(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",2573468410),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",3966305516),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",3966305516),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",2573468410),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",3483492282),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",4786127340),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",3483492282),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",4786127340),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",1940175105),f);
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){return React.renderComponent(component,node);
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
lt.plugins.cljrefactor.artifact_version.select_item = (function select_item(idx,item){var e__21003__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),item,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),item], null));var seq__21303_21331 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__21304_21332 = null;var count__21305_21333 = 0;var i__21306_21334 = 0;while(true){
if((i__21306_21334 < count__21305_21333))
{var vec__21307_21335 = cljs.core._nth.call(null,chunk__21304_21332,i__21306_21334);var ev__21004__auto___21336 = cljs.core.nth.call(null,vec__21307_21335,0,null);var func__21005__auto___21337 = cljs.core.nth.call(null,vec__21307_21335,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___21336,func__21005__auto___21337);
{
var G__21338 = seq__21303_21331;
var G__21339 = chunk__21304_21332;
var G__21340 = count__21305_21333;
var G__21341 = (i__21306_21334 + 1);
seq__21303_21331 = G__21338;
chunk__21304_21332 = G__21339;
count__21305_21333 = G__21340;
i__21306_21334 = G__21341;
continue;
}
} else
{var temp__4092__auto___21342 = cljs.core.seq.call(null,seq__21303_21331);if(temp__4092__auto___21342)
{var seq__21303_21343__$1 = temp__4092__auto___21342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21303_21343__$1))
{var c__20324__auto___21344 = cljs.core.chunk_first.call(null,seq__21303_21343__$1);{
var G__21345 = cljs.core.chunk_rest.call(null,seq__21303_21343__$1);
var G__21346 = c__20324__auto___21344;
var G__21347 = cljs.core.count.call(null,c__20324__auto___21344);
var G__21348 = 0;
seq__21303_21331 = G__21345;
chunk__21304_21332 = G__21346;
count__21305_21333 = G__21347;
i__21306_21334 = G__21348;
continue;
}
} else
{var vec__21308_21349 = cljs.core.first.call(null,seq__21303_21343__$1);var ev__21004__auto___21350 = cljs.core.nth.call(null,vec__21308_21349,0,null);var func__21005__auto___21351 = cljs.core.nth.call(null,vec__21308_21349,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___21350,func__21005__auto___21351);
{
var G__21352 = cljs.core.next.call(null,seq__21303_21343__$1);
var G__21353 = null;
var G__21354 = 0;
var G__21355 = 0;
seq__21303_21331 = G__21352;
chunk__21304_21332 = G__21353;
count__21305_21333 = G__21354;
i__21306_21334 = G__21355;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
});
lt.plugins.cljrefactor.artifact_version.select_form = (function select_form(this$,items){var e__21003__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artifact-versions","div.artifact-versions",2029510539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.cljrefactor.artifact_version.select_item,items)], null)], null));var seq__21315_21356 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__21316_21357 = null;var count__21317_21358 = 0;var i__21318_21359 = 0;while(true){
if((i__21318_21359 < count__21317_21358))
{var vec__21319_21360 = cljs.core._nth.call(null,chunk__21316_21357,i__21318_21359);var ev__21004__auto___21361 = cljs.core.nth.call(null,vec__21319_21360,0,null);var func__21005__auto___21362 = cljs.core.nth.call(null,vec__21319_21360,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___21361,func__21005__auto___21362);
{
var G__21363 = seq__21315_21356;
var G__21364 = chunk__21316_21357;
var G__21365 = count__21317_21358;
var G__21366 = (i__21318_21359 + 1);
seq__21315_21356 = G__21363;
chunk__21316_21357 = G__21364;
count__21317_21358 = G__21365;
i__21318_21359 = G__21366;
continue;
}
} else
{var temp__4092__auto___21367 = cljs.core.seq.call(null,seq__21315_21356);if(temp__4092__auto___21367)
{var seq__21315_21368__$1 = temp__4092__auto___21367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21315_21368__$1))
{var c__20324__auto___21369 = cljs.core.chunk_first.call(null,seq__21315_21368__$1);{
var G__21370 = cljs.core.chunk_rest.call(null,seq__21315_21368__$1);
var G__21371 = c__20324__auto___21369;
var G__21372 = cljs.core.count.call(null,c__20324__auto___21369);
var G__21373 = 0;
seq__21315_21356 = G__21370;
chunk__21316_21357 = G__21371;
count__21317_21358 = G__21372;
i__21318_21359 = G__21373;
continue;
}
} else
{var vec__21320_21374 = cljs.core.first.call(null,seq__21315_21368__$1);var ev__21004__auto___21375 = cljs.core.nth.call(null,vec__21320_21374,0,null);var func__21005__auto___21376 = cljs.core.nth.call(null,vec__21320_21374,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___21375,func__21005__auto___21376);
{
var G__21377 = cljs.core.next.call(null,seq__21315_21368__$1);
var G__21378 = null;
var G__21379 = 0;
var G__21380 = 0;
seq__21315_21356 = G__21377;
chunk__21316_21357 = G__21378;
count__21317_21358 = G__21379;
i__21318_21359 = G__21380;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
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
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.artifacts')) {
goog.provide('lt.plugins.cljrefactor.artifacts');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.cljrefactor.artifact_version');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.cljrefactor.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('lt.plugins.cljrefactor.middleware');
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
lt.plugins.cljrefactor.artifacts.artifact_version_list = (function artifact_version_list(artifact){return lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"artifact-versions",new cljs.core.Keyword(null,"artifact","artifact",4080073028),artifact], null));
});
lt.plugins.cljrefactor.artifacts.__BEH__trigger_artifact_version_hints = (function __BEH__trigger_artifact_version_hints(ed,artifact){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Retrieving clojars artifact versions")].join(''));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifacts.artifact_version_list.call(null,artifact),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.artifact-versions","refactor.artifact-versions",4271851004),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","trigger-artifact-version-hints","lt.plugins.cljrefactor.artifacts/trigger-artifact-version-hints",4292678457),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__trigger_artifact_version_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact-version.hints.update!","artifact-version.hints.update!",714019447),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.cljrefactor.artifacts.__BEH__artifact_version_selected = (function __BEH__artifact_version_selected(ed,version){lt.objs.editor.insert_at_cursor.call(null,ed,[cljs.core.str("\""),cljs.core.str(version),cljs.core.str("\"")].join(''));
return lt.objs.editor.focus.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","artifact-version-selected","lt.plugins.cljrefactor.artifacts/artifact-version-selected",1534253431),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__artifact_version_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact-version.selected","artifact-version.selected",2838678782),null], null), null));
lt.plugins.cljrefactor.artifacts.__BEH__finish_artifact_version_hints = (function __BEH__finish_artifact_version_hints(ed,res){var vec__21382 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"versions","versions",3323818509)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21382,0,null);var ret = cljs.core.nth.call(null,vec__21382,1,null);var vs = (cljs.core.truth_(ok_QMARK_)?new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(ret):null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret));
} else
{if((cljs.core.count.call(null,vs) > 1))
{return lt.plugins.cljrefactor.selector.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"behavior","behavior",2524816836),new cljs.core.Keyword(null,"artifact-version.selected","artifact-version.selected",2838678782),new cljs.core.Keyword(null,"items","items",1114430258),vs,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed)], null));
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact-version.selected","artifact-version.selected",2838678782),cljs.core.first.call(null,vs));
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","finish-artifact-version-hints","lt.plugins.cljrefactor.artifacts/finish-artifact-version-hints",1230982782),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__finish_artifact_version_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.artifact-versions","editor.eval.clj.result.refactor.artifact-versions",923340847),null], null), null));
lt.plugins.cljrefactor.artifacts.artifact_list = (function artifact_list(){return lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",1013907795),"artifact-list"], null));
});
lt.plugins.cljrefactor.artifacts.sel_cb = (function sel_cb(ed,fun,c){var artifact = cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,c),"completion");fun.call(null,[cljs.core.str(artifact),cljs.core.str(" ")].join(''));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"artifact-version.hints.update!","artifact-version.hints.update!",714019447),artifact);
});
lt.plugins.cljrefactor.artifacts.create_artifact_hints = (function create_artifact_hints(ed,artifacts){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__21383_SHARP_){return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{"item": p1__21383_SHARP_, "completion": p1__21383_SHARP_, "text": p1__21383_SHARP_, "select": cljs.core.partial.call(null,lt.plugins.cljrefactor.artifacts.sel_cb,ed)}], null));
}),artifacts));
});
lt.plugins.cljrefactor.artifacts.__BEH__finish_artifact_hints = (function __BEH__finish_artifact_hints(ed,res){var vec__21385 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artifacts","artifacts",1575856211)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21385,0,null);var ret = cljs.core.nth.call(null,vec__21385,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret));
} else
{lt.object.update_BANG_.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","fetching-deps","lt.plugins.cljrefactor.artifacts/fetching-deps",3366334705)], null),((function (vec__21385,ok_QMARK_,ret){
return (function (_){return false;
});})(vec__21385,ok_QMARK_,ret))
);
lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","artifacts","lt.plugins.cljrefactor.artifacts/artifacts",4637854729),new cljs.core.Keyword(null,"artifacts","artifacts",1575856211).cljs$core$IFn$_invoke$arity$1(ret)], null));
return lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","finish-artifact-hints","lt.plugins.cljrefactor.artifacts/finish-artifact-hints",4419636855),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__finish_artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.artifacts","editor.eval.clj.result.refactor.artifacts",4548973530),null], null), null));
lt.plugins.cljrefactor.artifacts.__BEH__trigger_artifact_hints = (function __BEH__trigger_artifact_hints(this$,ed){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4092__auto__))
{var default_client = temp__4092__auto__;if(cljs.core.truth_(new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","fetching-deps","lt.plugins.cljrefactor.artifacts/fetching-deps",3366334705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","fetching-deps","lt.plugins.cljrefactor.artifacts/fetching-deps",3366334705)], null),((function (default_client,temp__4092__auto__){
return (function (_){return true;
});})(default_client,temp__4092__auto__))
);
lt.objs.notifos.set_msg_BANG_.call(null,"Retrieving clojars artifacts");
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifacts.artifact_list.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.artifacts","refactor.artifacts",2606704295),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","trigger-artifact-hints","lt.plugins.cljrefactor.artifacts/trigger-artifact-hints",1083074350),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__trigger_artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"artifact.hints.update!","artifact.hints.update!",2088367020),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.plugins.cljrefactor.artifacts.__BEH__artifact_hints = (function __BEH__artifact_hints(ed,hints,token){lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","token","lt.plugins.cljrefactor.artifacts/token",4450683105),token], null));
if(cljs.core.truth_(new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","artifacts","lt.plugins.cljrefactor.artifacts/artifacts",4637854729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts))))
{} else
{lt.object.raise.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts,new cljs.core.Keyword(null,"artifact.hints.update!","artifact.hints.update!",2088367020),ed);
}
var temp__4090__auto__ = new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","artifacts","lt.plugins.cljrefactor.artifacts/artifacts",4637854729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts));if(cljs.core.truth_(temp__4090__auto__))
{var artifacts = temp__4090__auto__;return lt.plugins.cljrefactor.artifacts.create_artifact_hints.call(null,ed,artifacts);
} else
{return hints;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","artifact-hints","lt.plugins.cljrefactor.artifacts/artifact-hints",3606009273),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__artifact_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","refactor-artifacts","lt.plugins.cljrefactor.artifacts/refactor-artifacts",1832386750),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.artifacts","refactor.artifacts",2606704295),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Refactor artifacts");
lt.plugins.cljrefactor.artifacts.refactor_artifacts = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","refactor-artifacts","lt.plugins.cljrefactor.artifacts/refactor-artifacts",1832386750));
lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep__DOT__res = (function __BEH__hotload_dep__DOT__res(ed,res){var vec__21387 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res);var ok_QMARK_ = cljs.core.nth.call(null,vec__21387,0,null);var ret = cljs.core.nth.call(null,vec__21387,1,null);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret));if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null));
} else
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"Loaded ok!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","hotload-dep.res","lt.plugins.cljrefactor.artifacts/hotload-dep.res",1583927251),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.hotload-dep","editor.eval.clj.result.refactor.hotload-dep",2122001198),null], null), null));
lt.plugins.cljrefactor.artifacts.parse_dep = (function parse_dep(dep){try{var dill = cljs.reader.read_string.call(null,dep);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,dill),2))
{return dill;
} else
{return null;
}
}catch (e21389){var e = e21389;return null;
}});
lt.plugins.cljrefactor.artifacts.hotload_dep_op = (function hotload_dep_op(dep){var coords = dep;return lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"hotload-dependency",new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),coords], null));
});
lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep_BANG_ = (function __BEH__hotload_dep_BANG_(ed,coords){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifacts.hotload_dep_op.call(null,coords),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.hotload-dep","refactor.hotload-dep",3912040123),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","hotload-dep!","lt.plugins.cljrefactor.artifacts/hotload-dep!",591057976),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.hotload-dep!","refactor.hotload-dep!",661803370),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","hotload-dep","lt.plugins.cljrefactor.artifacts/hotload-dep",4433653981),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Hotload dependency",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var pos = (cljs.core.truth_(ed)?lt.objs.editor.__GT_cursor.call(null,ed):null);if(cljs.core.truth_(ed))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var candidate = lt.objs.editor.selection.call(null,ed);var coords = lt.plugins.cljrefactor.artifacts.parse_dep.call(null,candidate);lt.objs.editor.move_cursor.call(null,ed,pos);
if(cljs.core.truth_((function (){var and__19564__auto__ = lt.plugins.cljrefactor.artifacts.parse_dep.call(null,candidate);if(cljs.core.truth_(and__19564__auto__))
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return and__19564__auto__;
}
})()))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.hotload-dep!","refactor.hotload-dep!",661803370),candidate);
} else
{return null;
}
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.function')) {
goog.provide('lt.plugins.cljrefactor.function$');
goog.require('cljs.core');
goog.require('lt.plugins.paredit');
goog.require('lt.plugins.paredit');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('clojure.zip');
goog.require('lt.objs.editor.pool');
goog.require('clojure.zip');
goog.require('lt.objs.command');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.function$.hash_prefixed_QMARK_ = (function hash_prefixed_QMARK_(ed,start){return cljs.core._EQ_.call(null,lt.objs.editor.range.call(null,ed,start,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)),"#");
});
lt.plugins.cljrefactor.function$.set_form_QMARK_ = (function set_form_QMARK_(ed,start){return ((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(start) > 0)) && (lt.plugins.cljrefactor.function$.hash_prefixed_QMARK_.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec)));
});
lt.plugins.cljrefactor.function$.get_form_range = (function get_form_range(ed,pos){var vec__21615 = lt.plugins.paredit.form_boundary.call(null,ed,pos);var start = cljs.core.nth.call(null,vec__21615,0,null);var end = cljs.core.nth.call(null,vec__21615,1,null);if(cljs.core.truth_(start))
{if(lt.plugins.cljrefactor.function$.set_form_QMARK_.call(null,ed,start))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec),new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.update_in.call(null,end,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),start,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.update_in.call(null,end,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)], null);
}
} else
{return null;
}
});
lt.plugins.cljrefactor.function$.add_new_fn = (function add_new_fn(ed,pos,new_fn){lt.objs.editor.replace.call(null,ed,pos,new_fn);
var map__21617 = lt.plugins.cljrefactor.function$.get_form_range.call(null,ed,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var map__21617__$1 = ((cljs.core.seq_QMARK_.call(null,map__21617))?cljs.core.apply.call(null,cljs.core.hash_map,map__21617):map__21617);var end = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__21617__$1,new cljs.core.Keyword(null,"start","start",1123661780));lt.objs.editor.set_selection.call(null,ed,start,end);
return lt.objs.editor.indent_selection.call(null,ed,"smart");
});
lt.plugins.cljrefactor.function$.highlight_fn_name = (function highlight_fn_name(ed,selections){var cm_ed = lt.objs.editor.__GT_cm_ed.call(null,ed);return cm_ed.setSelections(cljs.core.clj__GT_js.call(null,selections));
});
lt.plugins.cljrefactor.function$.do_extract = (function do_extract(ed,loc,unbound){var map__21619 = lt.plugins.cljrefactor.function$.get_form_range.call(null,ed,loc);var map__21619__$1 = ((cljs.core.seq_QMARK_.call(null,map__21619))?cljs.core.apply.call(null,cljs.core.hash_map,map__21619):map__21619);var end = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__21619__$1,new cljs.core.Keyword(null,"start","start",1123661780));var top_form = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed,loc);var ins_pos = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(top_form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086)], null),cljs.core.dec);if(cljs.core.truth_((function (){var and__19564__auto__ = start;if(cljs.core.truth_(and__19564__auto__))
{return top_form;
} else
{return and__19564__auto__;
}
})()))
{var form = lt.objs.editor.range.call(null,ed,start,end);var new_fn = [cljs.core.str("(defn foo "),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(unbound)].join(''),/\"/,"")),cljs.core.str("\n"),cljs.core.str(form),cljs.core.str(")\n")].join('');var fn_call = [cljs.core.str("(foo"),cljs.core.str(((cljs.core.seq.call(null,unbound))?" ":null)),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(unbound)].join(''),/\"|\[|\]/,"")),cljs.core.str(")")].join('');var bm = lt.objs.editor.bookmark.call(null,ed,start,null);lt.objs.editor.replace.call(null,ed,start,end,fn_call);
lt.plugins.cljrefactor.function$.add_new_fn.call(null,ed,ins_pos,new_fn);
var loc_replaced = lt.util.cljs.js__GT_clj.call(null,bm.find(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var l_old = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc_replaced);var start_col_old = (new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc_replaced) + 1);var end_col_old = (new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc_replaced) + 4);var l_new = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ins_pos);var start_col_new = (new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(ins_pos) + 6);var end_col_new = (new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(ins_pos) + 9);bm.clear();
return lt.plugins.cljrefactor.function$.highlight_fn_name.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",3895572007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),l_old,new cljs.core.Keyword(null,"ch","ch",1013907415),start_col_old], null),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),l_old,new cljs.core.Keyword(null,"ch","ch",1013907415),end_col_old], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",3895572007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),l_new,new cljs.core.Keyword(null,"ch","ch",1013907415),start_col_new], null),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),l_new,new cljs.core.Keyword(null,"ch","ch",1013907415),end_col_new], null)], null)], null));
} else
{return null;
}
});
lt.plugins.cljrefactor.function$.unbound_op = (function unbound_op(ed,loc){return lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",1013907795),"find-unbound",new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))),new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc) + 1),new cljs.core.Keyword(null,"column","column",3954034376),(new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(loc) + 1)], null));
});
lt.plugins.cljrefactor.function$.__BEH__unbound_res = (function __BEH__unbound_res(ed,res){var vec__21621 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unbound","unbound",720786935)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21621,0,null);var ret = cljs.core.nth.call(null,vec__21621,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{return lt.plugins.cljrefactor.function$.do_extract.call(null,ed,new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret)),new cljs.core.Keyword(null,"unbound","unbound",720786935).cljs$core$IFn$_invoke$arity$1(ret));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.function","unbound-res","lt.plugins.cljrefactor.function/unbound-res",1587324066),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.function$.__BEH__unbound_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.unbound-res","editor.eval.clj.result.refactor.unbound-res",943136401),null], null), null));
lt.plugins.cljrefactor.function$.__BEH__extract_fn_BANG_ = (function __BEH__extract_fn_BANG_(ed){var loc = lt.objs.editor.__GT_cursor.call(null,ed);return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.function$.unbound_op.call(null,ed,loc),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.unbound-res","refactor.unbound-res",2733175326),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true,new cljs.core.Keyword(null,"loc","loc",1014011570),loc], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.function","extract-fn!","lt.plugins.cljrefactor.function/extract-fn!",897758301),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.function$.__BEH__extract_fn_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.extract-fn!","refactor.extract-fn!",1343152595),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.function","extract-fn","lt.plugins.cljrefactor.function/extract-fn",4114148582),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Extract function",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.extract-fn!","refactor.extract-fn!",1343152595));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('quiescent.dom')) {
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('quiescent');
goog.require('quiescent');
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22785_23733 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22786_23734 = null;var count__22787_23735 = 0;var i__22788_23736 = 0;while(true){
if((i__22788_23736 < count__22787_23735))
{var arg__21743__auto___23737 = cljs.core._nth.call(null,chunk__22786_23734,i__22788_23736);a__21742__auto__.push(arg__21743__auto___23737);
{
var G__23738 = seq__22785_23733;
var G__23739 = chunk__22786_23734;
var G__23740 = count__22787_23735;
var G__23741 = (i__22788_23736 + 1);
seq__22785_23733 = G__23738;
chunk__22786_23734 = G__23739;
count__22787_23735 = G__23740;
i__22788_23736 = G__23741;
continue;
}
} else
{var temp__4092__auto___23742 = cljs.core.seq.call(null,seq__22785_23733);if(temp__4092__auto___23742)
{var seq__22785_23743__$1 = temp__4092__auto___23742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22785_23743__$1))
{var c__20324__auto___23744 = cljs.core.chunk_first.call(null,seq__22785_23743__$1);{
var G__23745 = cljs.core.chunk_rest.call(null,seq__22785_23743__$1);
var G__23746 = c__20324__auto___23744;
var G__23747 = cljs.core.count.call(null,c__20324__auto___23744);
var G__23748 = 0;
seq__22785_23733 = G__23745;
chunk__22786_23734 = G__23746;
count__22787_23735 = G__23747;
i__22788_23736 = G__23748;
continue;
}
} else
{var arg__21743__auto___23749 = cljs.core.first.call(null,seq__22785_23743__$1);a__21742__auto__.push(arg__21743__auto___23749);
{
var G__23750 = cljs.core.next.call(null,seq__22785_23743__$1);
var G__23751 = null;
var G__23752 = 0;
var G__23753 = 0;
seq__22785_23733 = G__23750;
chunk__22786_23734 = G__23751;
count__22787_23735 = G__23752;
i__22788_23736 = G__23753;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__21742__auto__);
};
var a = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__21741__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__23754){
var args__21741__auto__ = cljs.core.seq(arglist__23754);
return a__delegate(args__21741__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22793_23755 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22794_23756 = null;var count__22795_23757 = 0;var i__22796_23758 = 0;while(true){
if((i__22796_23758 < count__22795_23757))
{var arg__21743__auto___23759 = cljs.core._nth.call(null,chunk__22794_23756,i__22796_23758);a__21742__auto__.push(arg__21743__auto___23759);
{
var G__23760 = seq__22793_23755;
var G__23761 = chunk__22794_23756;
var G__23762 = count__22795_23757;
var G__23763 = (i__22796_23758 + 1);
seq__22793_23755 = G__23760;
chunk__22794_23756 = G__23761;
count__22795_23757 = G__23762;
i__22796_23758 = G__23763;
continue;
}
} else
{var temp__4092__auto___23764 = cljs.core.seq.call(null,seq__22793_23755);if(temp__4092__auto___23764)
{var seq__22793_23765__$1 = temp__4092__auto___23764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22793_23765__$1))
{var c__20324__auto___23766 = cljs.core.chunk_first.call(null,seq__22793_23765__$1);{
var G__23767 = cljs.core.chunk_rest.call(null,seq__22793_23765__$1);
var G__23768 = c__20324__auto___23766;
var G__23769 = cljs.core.count.call(null,c__20324__auto___23766);
var G__23770 = 0;
seq__22793_23755 = G__23767;
chunk__22794_23756 = G__23768;
count__22795_23757 = G__23769;
i__22796_23758 = G__23770;
continue;
}
} else
{var arg__21743__auto___23771 = cljs.core.first.call(null,seq__22793_23765__$1);a__21742__auto__.push(arg__21743__auto___23771);
{
var G__23772 = cljs.core.next.call(null,seq__22793_23765__$1);
var G__23773 = null;
var G__23774 = 0;
var G__23775 = 0;
seq__22793_23755 = G__23772;
chunk__22794_23756 = G__23773;
count__22795_23757 = G__23774;
i__22796_23758 = G__23775;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__21742__auto__);
};
var abbr = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__21741__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__23776){
var args__21741__auto__ = cljs.core.seq(arglist__23776);
return abbr__delegate(args__21741__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22801_23777 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22802_23778 = null;var count__22803_23779 = 0;var i__22804_23780 = 0;while(true){
if((i__22804_23780 < count__22803_23779))
{var arg__21743__auto___23781 = cljs.core._nth.call(null,chunk__22802_23778,i__22804_23780);a__21742__auto__.push(arg__21743__auto___23781);
{
var G__23782 = seq__22801_23777;
var G__23783 = chunk__22802_23778;
var G__23784 = count__22803_23779;
var G__23785 = (i__22804_23780 + 1);
seq__22801_23777 = G__23782;
chunk__22802_23778 = G__23783;
count__22803_23779 = G__23784;
i__22804_23780 = G__23785;
continue;
}
} else
{var temp__4092__auto___23786 = cljs.core.seq.call(null,seq__22801_23777);if(temp__4092__auto___23786)
{var seq__22801_23787__$1 = temp__4092__auto___23786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22801_23787__$1))
{var c__20324__auto___23788 = cljs.core.chunk_first.call(null,seq__22801_23787__$1);{
var G__23789 = cljs.core.chunk_rest.call(null,seq__22801_23787__$1);
var G__23790 = c__20324__auto___23788;
var G__23791 = cljs.core.count.call(null,c__20324__auto___23788);
var G__23792 = 0;
seq__22801_23777 = G__23789;
chunk__22802_23778 = G__23790;
count__22803_23779 = G__23791;
i__22804_23780 = G__23792;
continue;
}
} else
{var arg__21743__auto___23793 = cljs.core.first.call(null,seq__22801_23787__$1);a__21742__auto__.push(arg__21743__auto___23793);
{
var G__23794 = cljs.core.next.call(null,seq__22801_23787__$1);
var G__23795 = null;
var G__23796 = 0;
var G__23797 = 0;
seq__22801_23777 = G__23794;
chunk__22802_23778 = G__23795;
count__22803_23779 = G__23796;
i__22804_23780 = G__23797;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__21742__auto__);
};
var address = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__21741__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__23798){
var args__21741__auto__ = cljs.core.seq(arglist__23798);
return address__delegate(args__21741__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22809_23799 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22810_23800 = null;var count__22811_23801 = 0;var i__22812_23802 = 0;while(true){
if((i__22812_23802 < count__22811_23801))
{var arg__21743__auto___23803 = cljs.core._nth.call(null,chunk__22810_23800,i__22812_23802);a__21742__auto__.push(arg__21743__auto___23803);
{
var G__23804 = seq__22809_23799;
var G__23805 = chunk__22810_23800;
var G__23806 = count__22811_23801;
var G__23807 = (i__22812_23802 + 1);
seq__22809_23799 = G__23804;
chunk__22810_23800 = G__23805;
count__22811_23801 = G__23806;
i__22812_23802 = G__23807;
continue;
}
} else
{var temp__4092__auto___23808 = cljs.core.seq.call(null,seq__22809_23799);if(temp__4092__auto___23808)
{var seq__22809_23809__$1 = temp__4092__auto___23808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22809_23809__$1))
{var c__20324__auto___23810 = cljs.core.chunk_first.call(null,seq__22809_23809__$1);{
var G__23811 = cljs.core.chunk_rest.call(null,seq__22809_23809__$1);
var G__23812 = c__20324__auto___23810;
var G__23813 = cljs.core.count.call(null,c__20324__auto___23810);
var G__23814 = 0;
seq__22809_23799 = G__23811;
chunk__22810_23800 = G__23812;
count__22811_23801 = G__23813;
i__22812_23802 = G__23814;
continue;
}
} else
{var arg__21743__auto___23815 = cljs.core.first.call(null,seq__22809_23809__$1);a__21742__auto__.push(arg__21743__auto___23815);
{
var G__23816 = cljs.core.next.call(null,seq__22809_23809__$1);
var G__23817 = null;
var G__23818 = 0;
var G__23819 = 0;
seq__22809_23799 = G__23816;
chunk__22810_23800 = G__23817;
count__22811_23801 = G__23818;
i__22812_23802 = G__23819;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__21742__auto__);
};
var area = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__21741__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__23820){
var args__21741__auto__ = cljs.core.seq(arglist__23820);
return area__delegate(args__21741__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22817_23821 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22818_23822 = null;var count__22819_23823 = 0;var i__22820_23824 = 0;while(true){
if((i__22820_23824 < count__22819_23823))
{var arg__21743__auto___23825 = cljs.core._nth.call(null,chunk__22818_23822,i__22820_23824);a__21742__auto__.push(arg__21743__auto___23825);
{
var G__23826 = seq__22817_23821;
var G__23827 = chunk__22818_23822;
var G__23828 = count__22819_23823;
var G__23829 = (i__22820_23824 + 1);
seq__22817_23821 = G__23826;
chunk__22818_23822 = G__23827;
count__22819_23823 = G__23828;
i__22820_23824 = G__23829;
continue;
}
} else
{var temp__4092__auto___23830 = cljs.core.seq.call(null,seq__22817_23821);if(temp__4092__auto___23830)
{var seq__22817_23831__$1 = temp__4092__auto___23830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22817_23831__$1))
{var c__20324__auto___23832 = cljs.core.chunk_first.call(null,seq__22817_23831__$1);{
var G__23833 = cljs.core.chunk_rest.call(null,seq__22817_23831__$1);
var G__23834 = c__20324__auto___23832;
var G__23835 = cljs.core.count.call(null,c__20324__auto___23832);
var G__23836 = 0;
seq__22817_23821 = G__23833;
chunk__22818_23822 = G__23834;
count__22819_23823 = G__23835;
i__22820_23824 = G__23836;
continue;
}
} else
{var arg__21743__auto___23837 = cljs.core.first.call(null,seq__22817_23831__$1);a__21742__auto__.push(arg__21743__auto___23837);
{
var G__23838 = cljs.core.next.call(null,seq__22817_23831__$1);
var G__23839 = null;
var G__23840 = 0;
var G__23841 = 0;
seq__22817_23821 = G__23838;
chunk__22818_23822 = G__23839;
count__22819_23823 = G__23840;
i__22820_23824 = G__23841;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__21742__auto__);
};
var article = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__21741__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__23842){
var args__21741__auto__ = cljs.core.seq(arglist__23842);
return article__delegate(args__21741__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22825_23843 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22826_23844 = null;var count__22827_23845 = 0;var i__22828_23846 = 0;while(true){
if((i__22828_23846 < count__22827_23845))
{var arg__21743__auto___23847 = cljs.core._nth.call(null,chunk__22826_23844,i__22828_23846);a__21742__auto__.push(arg__21743__auto___23847);
{
var G__23848 = seq__22825_23843;
var G__23849 = chunk__22826_23844;
var G__23850 = count__22827_23845;
var G__23851 = (i__22828_23846 + 1);
seq__22825_23843 = G__23848;
chunk__22826_23844 = G__23849;
count__22827_23845 = G__23850;
i__22828_23846 = G__23851;
continue;
}
} else
{var temp__4092__auto___23852 = cljs.core.seq.call(null,seq__22825_23843);if(temp__4092__auto___23852)
{var seq__22825_23853__$1 = temp__4092__auto___23852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22825_23853__$1))
{var c__20324__auto___23854 = cljs.core.chunk_first.call(null,seq__22825_23853__$1);{
var G__23855 = cljs.core.chunk_rest.call(null,seq__22825_23853__$1);
var G__23856 = c__20324__auto___23854;
var G__23857 = cljs.core.count.call(null,c__20324__auto___23854);
var G__23858 = 0;
seq__22825_23843 = G__23855;
chunk__22826_23844 = G__23856;
count__22827_23845 = G__23857;
i__22828_23846 = G__23858;
continue;
}
} else
{var arg__21743__auto___23859 = cljs.core.first.call(null,seq__22825_23853__$1);a__21742__auto__.push(arg__21743__auto___23859);
{
var G__23860 = cljs.core.next.call(null,seq__22825_23853__$1);
var G__23861 = null;
var G__23862 = 0;
var G__23863 = 0;
seq__22825_23843 = G__23860;
chunk__22826_23844 = G__23861;
count__22827_23845 = G__23862;
i__22828_23846 = G__23863;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__21742__auto__);
};
var aside = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__21741__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__23864){
var args__21741__auto__ = cljs.core.seq(arglist__23864);
return aside__delegate(args__21741__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22833_23865 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22834_23866 = null;var count__22835_23867 = 0;var i__22836_23868 = 0;while(true){
if((i__22836_23868 < count__22835_23867))
{var arg__21743__auto___23869 = cljs.core._nth.call(null,chunk__22834_23866,i__22836_23868);a__21742__auto__.push(arg__21743__auto___23869);
{
var G__23870 = seq__22833_23865;
var G__23871 = chunk__22834_23866;
var G__23872 = count__22835_23867;
var G__23873 = (i__22836_23868 + 1);
seq__22833_23865 = G__23870;
chunk__22834_23866 = G__23871;
count__22835_23867 = G__23872;
i__22836_23868 = G__23873;
continue;
}
} else
{var temp__4092__auto___23874 = cljs.core.seq.call(null,seq__22833_23865);if(temp__4092__auto___23874)
{var seq__22833_23875__$1 = temp__4092__auto___23874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22833_23875__$1))
{var c__20324__auto___23876 = cljs.core.chunk_first.call(null,seq__22833_23875__$1);{
var G__23877 = cljs.core.chunk_rest.call(null,seq__22833_23875__$1);
var G__23878 = c__20324__auto___23876;
var G__23879 = cljs.core.count.call(null,c__20324__auto___23876);
var G__23880 = 0;
seq__22833_23865 = G__23877;
chunk__22834_23866 = G__23878;
count__22835_23867 = G__23879;
i__22836_23868 = G__23880;
continue;
}
} else
{var arg__21743__auto___23881 = cljs.core.first.call(null,seq__22833_23875__$1);a__21742__auto__.push(arg__21743__auto___23881);
{
var G__23882 = cljs.core.next.call(null,seq__22833_23875__$1);
var G__23883 = null;
var G__23884 = 0;
var G__23885 = 0;
seq__22833_23865 = G__23882;
chunk__22834_23866 = G__23883;
count__22835_23867 = G__23884;
i__22836_23868 = G__23885;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__21742__auto__);
};
var audio = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__21741__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__23886){
var args__21741__auto__ = cljs.core.seq(arglist__23886);
return audio__delegate(args__21741__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22841_23887 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22842_23888 = null;var count__22843_23889 = 0;var i__22844_23890 = 0;while(true){
if((i__22844_23890 < count__22843_23889))
{var arg__21743__auto___23891 = cljs.core._nth.call(null,chunk__22842_23888,i__22844_23890);a__21742__auto__.push(arg__21743__auto___23891);
{
var G__23892 = seq__22841_23887;
var G__23893 = chunk__22842_23888;
var G__23894 = count__22843_23889;
var G__23895 = (i__22844_23890 + 1);
seq__22841_23887 = G__23892;
chunk__22842_23888 = G__23893;
count__22843_23889 = G__23894;
i__22844_23890 = G__23895;
continue;
}
} else
{var temp__4092__auto___23896 = cljs.core.seq.call(null,seq__22841_23887);if(temp__4092__auto___23896)
{var seq__22841_23897__$1 = temp__4092__auto___23896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22841_23897__$1))
{var c__20324__auto___23898 = cljs.core.chunk_first.call(null,seq__22841_23897__$1);{
var G__23899 = cljs.core.chunk_rest.call(null,seq__22841_23897__$1);
var G__23900 = c__20324__auto___23898;
var G__23901 = cljs.core.count.call(null,c__20324__auto___23898);
var G__23902 = 0;
seq__22841_23887 = G__23899;
chunk__22842_23888 = G__23900;
count__22843_23889 = G__23901;
i__22844_23890 = G__23902;
continue;
}
} else
{var arg__21743__auto___23903 = cljs.core.first.call(null,seq__22841_23897__$1);a__21742__auto__.push(arg__21743__auto___23903);
{
var G__23904 = cljs.core.next.call(null,seq__22841_23897__$1);
var G__23905 = null;
var G__23906 = 0;
var G__23907 = 0;
seq__22841_23887 = G__23904;
chunk__22842_23888 = G__23905;
count__22843_23889 = G__23906;
i__22844_23890 = G__23907;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__21742__auto__);
};
var b = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__21741__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__23908){
var args__21741__auto__ = cljs.core.seq(arglist__23908);
return b__delegate(args__21741__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22849_23909 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22850_23910 = null;var count__22851_23911 = 0;var i__22852_23912 = 0;while(true){
if((i__22852_23912 < count__22851_23911))
{var arg__21743__auto___23913 = cljs.core._nth.call(null,chunk__22850_23910,i__22852_23912);a__21742__auto__.push(arg__21743__auto___23913);
{
var G__23914 = seq__22849_23909;
var G__23915 = chunk__22850_23910;
var G__23916 = count__22851_23911;
var G__23917 = (i__22852_23912 + 1);
seq__22849_23909 = G__23914;
chunk__22850_23910 = G__23915;
count__22851_23911 = G__23916;
i__22852_23912 = G__23917;
continue;
}
} else
{var temp__4092__auto___23918 = cljs.core.seq.call(null,seq__22849_23909);if(temp__4092__auto___23918)
{var seq__22849_23919__$1 = temp__4092__auto___23918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22849_23919__$1))
{var c__20324__auto___23920 = cljs.core.chunk_first.call(null,seq__22849_23919__$1);{
var G__23921 = cljs.core.chunk_rest.call(null,seq__22849_23919__$1);
var G__23922 = c__20324__auto___23920;
var G__23923 = cljs.core.count.call(null,c__20324__auto___23920);
var G__23924 = 0;
seq__22849_23909 = G__23921;
chunk__22850_23910 = G__23922;
count__22851_23911 = G__23923;
i__22852_23912 = G__23924;
continue;
}
} else
{var arg__21743__auto___23925 = cljs.core.first.call(null,seq__22849_23919__$1);a__21742__auto__.push(arg__21743__auto___23925);
{
var G__23926 = cljs.core.next.call(null,seq__22849_23919__$1);
var G__23927 = null;
var G__23928 = 0;
var G__23929 = 0;
seq__22849_23909 = G__23926;
chunk__22850_23910 = G__23927;
count__22851_23911 = G__23928;
i__22852_23912 = G__23929;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__21742__auto__);
};
var base = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__21741__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__23930){
var args__21741__auto__ = cljs.core.seq(arglist__23930);
return base__delegate(args__21741__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22857_23931 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22858_23932 = null;var count__22859_23933 = 0;var i__22860_23934 = 0;while(true){
if((i__22860_23934 < count__22859_23933))
{var arg__21743__auto___23935 = cljs.core._nth.call(null,chunk__22858_23932,i__22860_23934);a__21742__auto__.push(arg__21743__auto___23935);
{
var G__23936 = seq__22857_23931;
var G__23937 = chunk__22858_23932;
var G__23938 = count__22859_23933;
var G__23939 = (i__22860_23934 + 1);
seq__22857_23931 = G__23936;
chunk__22858_23932 = G__23937;
count__22859_23933 = G__23938;
i__22860_23934 = G__23939;
continue;
}
} else
{var temp__4092__auto___23940 = cljs.core.seq.call(null,seq__22857_23931);if(temp__4092__auto___23940)
{var seq__22857_23941__$1 = temp__4092__auto___23940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22857_23941__$1))
{var c__20324__auto___23942 = cljs.core.chunk_first.call(null,seq__22857_23941__$1);{
var G__23943 = cljs.core.chunk_rest.call(null,seq__22857_23941__$1);
var G__23944 = c__20324__auto___23942;
var G__23945 = cljs.core.count.call(null,c__20324__auto___23942);
var G__23946 = 0;
seq__22857_23931 = G__23943;
chunk__22858_23932 = G__23944;
count__22859_23933 = G__23945;
i__22860_23934 = G__23946;
continue;
}
} else
{var arg__21743__auto___23947 = cljs.core.first.call(null,seq__22857_23941__$1);a__21742__auto__.push(arg__21743__auto___23947);
{
var G__23948 = cljs.core.next.call(null,seq__22857_23941__$1);
var G__23949 = null;
var G__23950 = 0;
var G__23951 = 0;
seq__22857_23931 = G__23948;
chunk__22858_23932 = G__23949;
count__22859_23933 = G__23950;
i__22860_23934 = G__23951;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__21742__auto__);
};
var bdi = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__21741__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__23952){
var args__21741__auto__ = cljs.core.seq(arglist__23952);
return bdi__delegate(args__21741__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22865_23953 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22866_23954 = null;var count__22867_23955 = 0;var i__22868_23956 = 0;while(true){
if((i__22868_23956 < count__22867_23955))
{var arg__21743__auto___23957 = cljs.core._nth.call(null,chunk__22866_23954,i__22868_23956);a__21742__auto__.push(arg__21743__auto___23957);
{
var G__23958 = seq__22865_23953;
var G__23959 = chunk__22866_23954;
var G__23960 = count__22867_23955;
var G__23961 = (i__22868_23956 + 1);
seq__22865_23953 = G__23958;
chunk__22866_23954 = G__23959;
count__22867_23955 = G__23960;
i__22868_23956 = G__23961;
continue;
}
} else
{var temp__4092__auto___23962 = cljs.core.seq.call(null,seq__22865_23953);if(temp__4092__auto___23962)
{var seq__22865_23963__$1 = temp__4092__auto___23962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22865_23963__$1))
{var c__20324__auto___23964 = cljs.core.chunk_first.call(null,seq__22865_23963__$1);{
var G__23965 = cljs.core.chunk_rest.call(null,seq__22865_23963__$1);
var G__23966 = c__20324__auto___23964;
var G__23967 = cljs.core.count.call(null,c__20324__auto___23964);
var G__23968 = 0;
seq__22865_23953 = G__23965;
chunk__22866_23954 = G__23966;
count__22867_23955 = G__23967;
i__22868_23956 = G__23968;
continue;
}
} else
{var arg__21743__auto___23969 = cljs.core.first.call(null,seq__22865_23963__$1);a__21742__auto__.push(arg__21743__auto___23969);
{
var G__23970 = cljs.core.next.call(null,seq__22865_23963__$1);
var G__23971 = null;
var G__23972 = 0;
var G__23973 = 0;
seq__22865_23953 = G__23970;
chunk__22866_23954 = G__23971;
count__22867_23955 = G__23972;
i__22868_23956 = G__23973;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__21742__auto__);
};
var bdo = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__21741__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__23974){
var args__21741__auto__ = cljs.core.seq(arglist__23974);
return bdo__delegate(args__21741__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22873_23975 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22874_23976 = null;var count__22875_23977 = 0;var i__22876_23978 = 0;while(true){
if((i__22876_23978 < count__22875_23977))
{var arg__21743__auto___23979 = cljs.core._nth.call(null,chunk__22874_23976,i__22876_23978);a__21742__auto__.push(arg__21743__auto___23979);
{
var G__23980 = seq__22873_23975;
var G__23981 = chunk__22874_23976;
var G__23982 = count__22875_23977;
var G__23983 = (i__22876_23978 + 1);
seq__22873_23975 = G__23980;
chunk__22874_23976 = G__23981;
count__22875_23977 = G__23982;
i__22876_23978 = G__23983;
continue;
}
} else
{var temp__4092__auto___23984 = cljs.core.seq.call(null,seq__22873_23975);if(temp__4092__auto___23984)
{var seq__22873_23985__$1 = temp__4092__auto___23984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22873_23985__$1))
{var c__20324__auto___23986 = cljs.core.chunk_first.call(null,seq__22873_23985__$1);{
var G__23987 = cljs.core.chunk_rest.call(null,seq__22873_23985__$1);
var G__23988 = c__20324__auto___23986;
var G__23989 = cljs.core.count.call(null,c__20324__auto___23986);
var G__23990 = 0;
seq__22873_23975 = G__23987;
chunk__22874_23976 = G__23988;
count__22875_23977 = G__23989;
i__22876_23978 = G__23990;
continue;
}
} else
{var arg__21743__auto___23991 = cljs.core.first.call(null,seq__22873_23985__$1);a__21742__auto__.push(arg__21743__auto___23991);
{
var G__23992 = cljs.core.next.call(null,seq__22873_23985__$1);
var G__23993 = null;
var G__23994 = 0;
var G__23995 = 0;
seq__22873_23975 = G__23992;
chunk__22874_23976 = G__23993;
count__22875_23977 = G__23994;
i__22876_23978 = G__23995;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__21742__auto__);
};
var big = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__21741__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__23996){
var args__21741__auto__ = cljs.core.seq(arglist__23996);
return big__delegate(args__21741__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22881_23997 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22882_23998 = null;var count__22883_23999 = 0;var i__22884_24000 = 0;while(true){
if((i__22884_24000 < count__22883_23999))
{var arg__21743__auto___24001 = cljs.core._nth.call(null,chunk__22882_23998,i__22884_24000);a__21742__auto__.push(arg__21743__auto___24001);
{
var G__24002 = seq__22881_23997;
var G__24003 = chunk__22882_23998;
var G__24004 = count__22883_23999;
var G__24005 = (i__22884_24000 + 1);
seq__22881_23997 = G__24002;
chunk__22882_23998 = G__24003;
count__22883_23999 = G__24004;
i__22884_24000 = G__24005;
continue;
}
} else
{var temp__4092__auto___24006 = cljs.core.seq.call(null,seq__22881_23997);if(temp__4092__auto___24006)
{var seq__22881_24007__$1 = temp__4092__auto___24006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22881_24007__$1))
{var c__20324__auto___24008 = cljs.core.chunk_first.call(null,seq__22881_24007__$1);{
var G__24009 = cljs.core.chunk_rest.call(null,seq__22881_24007__$1);
var G__24010 = c__20324__auto___24008;
var G__24011 = cljs.core.count.call(null,c__20324__auto___24008);
var G__24012 = 0;
seq__22881_23997 = G__24009;
chunk__22882_23998 = G__24010;
count__22883_23999 = G__24011;
i__22884_24000 = G__24012;
continue;
}
} else
{var arg__21743__auto___24013 = cljs.core.first.call(null,seq__22881_24007__$1);a__21742__auto__.push(arg__21743__auto___24013);
{
var G__24014 = cljs.core.next.call(null,seq__22881_24007__$1);
var G__24015 = null;
var G__24016 = 0;
var G__24017 = 0;
seq__22881_23997 = G__24014;
chunk__22882_23998 = G__24015;
count__22883_23999 = G__24016;
i__22884_24000 = G__24017;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__21742__auto__);
};
var blockquote = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__21741__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__24018){
var args__21741__auto__ = cljs.core.seq(arglist__24018);
return blockquote__delegate(args__21741__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22889_24019 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22890_24020 = null;var count__22891_24021 = 0;var i__22892_24022 = 0;while(true){
if((i__22892_24022 < count__22891_24021))
{var arg__21743__auto___24023 = cljs.core._nth.call(null,chunk__22890_24020,i__22892_24022);a__21742__auto__.push(arg__21743__auto___24023);
{
var G__24024 = seq__22889_24019;
var G__24025 = chunk__22890_24020;
var G__24026 = count__22891_24021;
var G__24027 = (i__22892_24022 + 1);
seq__22889_24019 = G__24024;
chunk__22890_24020 = G__24025;
count__22891_24021 = G__24026;
i__22892_24022 = G__24027;
continue;
}
} else
{var temp__4092__auto___24028 = cljs.core.seq.call(null,seq__22889_24019);if(temp__4092__auto___24028)
{var seq__22889_24029__$1 = temp__4092__auto___24028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22889_24029__$1))
{var c__20324__auto___24030 = cljs.core.chunk_first.call(null,seq__22889_24029__$1);{
var G__24031 = cljs.core.chunk_rest.call(null,seq__22889_24029__$1);
var G__24032 = c__20324__auto___24030;
var G__24033 = cljs.core.count.call(null,c__20324__auto___24030);
var G__24034 = 0;
seq__22889_24019 = G__24031;
chunk__22890_24020 = G__24032;
count__22891_24021 = G__24033;
i__22892_24022 = G__24034;
continue;
}
} else
{var arg__21743__auto___24035 = cljs.core.first.call(null,seq__22889_24029__$1);a__21742__auto__.push(arg__21743__auto___24035);
{
var G__24036 = cljs.core.next.call(null,seq__22889_24029__$1);
var G__24037 = null;
var G__24038 = 0;
var G__24039 = 0;
seq__22889_24019 = G__24036;
chunk__22890_24020 = G__24037;
count__22891_24021 = G__24038;
i__22892_24022 = G__24039;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__21742__auto__);
};
var body = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__21741__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__24040){
var args__21741__auto__ = cljs.core.seq(arglist__24040);
return body__delegate(args__21741__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22897_24041 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22898_24042 = null;var count__22899_24043 = 0;var i__22900_24044 = 0;while(true){
if((i__22900_24044 < count__22899_24043))
{var arg__21743__auto___24045 = cljs.core._nth.call(null,chunk__22898_24042,i__22900_24044);a__21742__auto__.push(arg__21743__auto___24045);
{
var G__24046 = seq__22897_24041;
var G__24047 = chunk__22898_24042;
var G__24048 = count__22899_24043;
var G__24049 = (i__22900_24044 + 1);
seq__22897_24041 = G__24046;
chunk__22898_24042 = G__24047;
count__22899_24043 = G__24048;
i__22900_24044 = G__24049;
continue;
}
} else
{var temp__4092__auto___24050 = cljs.core.seq.call(null,seq__22897_24041);if(temp__4092__auto___24050)
{var seq__22897_24051__$1 = temp__4092__auto___24050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22897_24051__$1))
{var c__20324__auto___24052 = cljs.core.chunk_first.call(null,seq__22897_24051__$1);{
var G__24053 = cljs.core.chunk_rest.call(null,seq__22897_24051__$1);
var G__24054 = c__20324__auto___24052;
var G__24055 = cljs.core.count.call(null,c__20324__auto___24052);
var G__24056 = 0;
seq__22897_24041 = G__24053;
chunk__22898_24042 = G__24054;
count__22899_24043 = G__24055;
i__22900_24044 = G__24056;
continue;
}
} else
{var arg__21743__auto___24057 = cljs.core.first.call(null,seq__22897_24051__$1);a__21742__auto__.push(arg__21743__auto___24057);
{
var G__24058 = cljs.core.next.call(null,seq__22897_24051__$1);
var G__24059 = null;
var G__24060 = 0;
var G__24061 = 0;
seq__22897_24041 = G__24058;
chunk__22898_24042 = G__24059;
count__22899_24043 = G__24060;
i__22900_24044 = G__24061;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__21742__auto__);
};
var br = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__21741__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__24062){
var args__21741__auto__ = cljs.core.seq(arglist__24062);
return br__delegate(args__21741__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22905_24063 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22906_24064 = null;var count__22907_24065 = 0;var i__22908_24066 = 0;while(true){
if((i__22908_24066 < count__22907_24065))
{var arg__21743__auto___24067 = cljs.core._nth.call(null,chunk__22906_24064,i__22908_24066);a__21742__auto__.push(arg__21743__auto___24067);
{
var G__24068 = seq__22905_24063;
var G__24069 = chunk__22906_24064;
var G__24070 = count__22907_24065;
var G__24071 = (i__22908_24066 + 1);
seq__22905_24063 = G__24068;
chunk__22906_24064 = G__24069;
count__22907_24065 = G__24070;
i__22908_24066 = G__24071;
continue;
}
} else
{var temp__4092__auto___24072 = cljs.core.seq.call(null,seq__22905_24063);if(temp__4092__auto___24072)
{var seq__22905_24073__$1 = temp__4092__auto___24072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22905_24073__$1))
{var c__20324__auto___24074 = cljs.core.chunk_first.call(null,seq__22905_24073__$1);{
var G__24075 = cljs.core.chunk_rest.call(null,seq__22905_24073__$1);
var G__24076 = c__20324__auto___24074;
var G__24077 = cljs.core.count.call(null,c__20324__auto___24074);
var G__24078 = 0;
seq__22905_24063 = G__24075;
chunk__22906_24064 = G__24076;
count__22907_24065 = G__24077;
i__22908_24066 = G__24078;
continue;
}
} else
{var arg__21743__auto___24079 = cljs.core.first.call(null,seq__22905_24073__$1);a__21742__auto__.push(arg__21743__auto___24079);
{
var G__24080 = cljs.core.next.call(null,seq__22905_24073__$1);
var G__24081 = null;
var G__24082 = 0;
var G__24083 = 0;
seq__22905_24063 = G__24080;
chunk__22906_24064 = G__24081;
count__22907_24065 = G__24082;
i__22908_24066 = G__24083;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__21742__auto__);
};
var button = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__21741__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__24084){
var args__21741__auto__ = cljs.core.seq(arglist__24084);
return button__delegate(args__21741__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22913_24085 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22914_24086 = null;var count__22915_24087 = 0;var i__22916_24088 = 0;while(true){
if((i__22916_24088 < count__22915_24087))
{var arg__21743__auto___24089 = cljs.core._nth.call(null,chunk__22914_24086,i__22916_24088);a__21742__auto__.push(arg__21743__auto___24089);
{
var G__24090 = seq__22913_24085;
var G__24091 = chunk__22914_24086;
var G__24092 = count__22915_24087;
var G__24093 = (i__22916_24088 + 1);
seq__22913_24085 = G__24090;
chunk__22914_24086 = G__24091;
count__22915_24087 = G__24092;
i__22916_24088 = G__24093;
continue;
}
} else
{var temp__4092__auto___24094 = cljs.core.seq.call(null,seq__22913_24085);if(temp__4092__auto___24094)
{var seq__22913_24095__$1 = temp__4092__auto___24094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22913_24095__$1))
{var c__20324__auto___24096 = cljs.core.chunk_first.call(null,seq__22913_24095__$1);{
var G__24097 = cljs.core.chunk_rest.call(null,seq__22913_24095__$1);
var G__24098 = c__20324__auto___24096;
var G__24099 = cljs.core.count.call(null,c__20324__auto___24096);
var G__24100 = 0;
seq__22913_24085 = G__24097;
chunk__22914_24086 = G__24098;
count__22915_24087 = G__24099;
i__22916_24088 = G__24100;
continue;
}
} else
{var arg__21743__auto___24101 = cljs.core.first.call(null,seq__22913_24095__$1);a__21742__auto__.push(arg__21743__auto___24101);
{
var G__24102 = cljs.core.next.call(null,seq__22913_24095__$1);
var G__24103 = null;
var G__24104 = 0;
var G__24105 = 0;
seq__22913_24085 = G__24102;
chunk__22914_24086 = G__24103;
count__22915_24087 = G__24104;
i__22916_24088 = G__24105;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__21742__auto__);
};
var canvas = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__21741__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__24106){
var args__21741__auto__ = cljs.core.seq(arglist__24106);
return canvas__delegate(args__21741__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22921_24107 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22922_24108 = null;var count__22923_24109 = 0;var i__22924_24110 = 0;while(true){
if((i__22924_24110 < count__22923_24109))
{var arg__21743__auto___24111 = cljs.core._nth.call(null,chunk__22922_24108,i__22924_24110);a__21742__auto__.push(arg__21743__auto___24111);
{
var G__24112 = seq__22921_24107;
var G__24113 = chunk__22922_24108;
var G__24114 = count__22923_24109;
var G__24115 = (i__22924_24110 + 1);
seq__22921_24107 = G__24112;
chunk__22922_24108 = G__24113;
count__22923_24109 = G__24114;
i__22924_24110 = G__24115;
continue;
}
} else
{var temp__4092__auto___24116 = cljs.core.seq.call(null,seq__22921_24107);if(temp__4092__auto___24116)
{var seq__22921_24117__$1 = temp__4092__auto___24116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22921_24117__$1))
{var c__20324__auto___24118 = cljs.core.chunk_first.call(null,seq__22921_24117__$1);{
var G__24119 = cljs.core.chunk_rest.call(null,seq__22921_24117__$1);
var G__24120 = c__20324__auto___24118;
var G__24121 = cljs.core.count.call(null,c__20324__auto___24118);
var G__24122 = 0;
seq__22921_24107 = G__24119;
chunk__22922_24108 = G__24120;
count__22923_24109 = G__24121;
i__22924_24110 = G__24122;
continue;
}
} else
{var arg__21743__auto___24123 = cljs.core.first.call(null,seq__22921_24117__$1);a__21742__auto__.push(arg__21743__auto___24123);
{
var G__24124 = cljs.core.next.call(null,seq__22921_24117__$1);
var G__24125 = null;
var G__24126 = 0;
var G__24127 = 0;
seq__22921_24107 = G__24124;
chunk__22922_24108 = G__24125;
count__22923_24109 = G__24126;
i__22924_24110 = G__24127;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__21742__auto__);
};
var caption = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__21741__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__24128){
var args__21741__auto__ = cljs.core.seq(arglist__24128);
return caption__delegate(args__21741__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22929_24129 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22930_24130 = null;var count__22931_24131 = 0;var i__22932_24132 = 0;while(true){
if((i__22932_24132 < count__22931_24131))
{var arg__21743__auto___24133 = cljs.core._nth.call(null,chunk__22930_24130,i__22932_24132);a__21742__auto__.push(arg__21743__auto___24133);
{
var G__24134 = seq__22929_24129;
var G__24135 = chunk__22930_24130;
var G__24136 = count__22931_24131;
var G__24137 = (i__22932_24132 + 1);
seq__22929_24129 = G__24134;
chunk__22930_24130 = G__24135;
count__22931_24131 = G__24136;
i__22932_24132 = G__24137;
continue;
}
} else
{var temp__4092__auto___24138 = cljs.core.seq.call(null,seq__22929_24129);if(temp__4092__auto___24138)
{var seq__22929_24139__$1 = temp__4092__auto___24138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22929_24139__$1))
{var c__20324__auto___24140 = cljs.core.chunk_first.call(null,seq__22929_24139__$1);{
var G__24141 = cljs.core.chunk_rest.call(null,seq__22929_24139__$1);
var G__24142 = c__20324__auto___24140;
var G__24143 = cljs.core.count.call(null,c__20324__auto___24140);
var G__24144 = 0;
seq__22929_24129 = G__24141;
chunk__22930_24130 = G__24142;
count__22931_24131 = G__24143;
i__22932_24132 = G__24144;
continue;
}
} else
{var arg__21743__auto___24145 = cljs.core.first.call(null,seq__22929_24139__$1);a__21742__auto__.push(arg__21743__auto___24145);
{
var G__24146 = cljs.core.next.call(null,seq__22929_24139__$1);
var G__24147 = null;
var G__24148 = 0;
var G__24149 = 0;
seq__22929_24129 = G__24146;
chunk__22930_24130 = G__24147;
count__22931_24131 = G__24148;
i__22932_24132 = G__24149;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__21742__auto__);
};
var cite = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__21741__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__24150){
var args__21741__auto__ = cljs.core.seq(arglist__24150);
return cite__delegate(args__21741__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22937_24151 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22938_24152 = null;var count__22939_24153 = 0;var i__22940_24154 = 0;while(true){
if((i__22940_24154 < count__22939_24153))
{var arg__21743__auto___24155 = cljs.core._nth.call(null,chunk__22938_24152,i__22940_24154);a__21742__auto__.push(arg__21743__auto___24155);
{
var G__24156 = seq__22937_24151;
var G__24157 = chunk__22938_24152;
var G__24158 = count__22939_24153;
var G__24159 = (i__22940_24154 + 1);
seq__22937_24151 = G__24156;
chunk__22938_24152 = G__24157;
count__22939_24153 = G__24158;
i__22940_24154 = G__24159;
continue;
}
} else
{var temp__4092__auto___24160 = cljs.core.seq.call(null,seq__22937_24151);if(temp__4092__auto___24160)
{var seq__22937_24161__$1 = temp__4092__auto___24160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22937_24161__$1))
{var c__20324__auto___24162 = cljs.core.chunk_first.call(null,seq__22937_24161__$1);{
var G__24163 = cljs.core.chunk_rest.call(null,seq__22937_24161__$1);
var G__24164 = c__20324__auto___24162;
var G__24165 = cljs.core.count.call(null,c__20324__auto___24162);
var G__24166 = 0;
seq__22937_24151 = G__24163;
chunk__22938_24152 = G__24164;
count__22939_24153 = G__24165;
i__22940_24154 = G__24166;
continue;
}
} else
{var arg__21743__auto___24167 = cljs.core.first.call(null,seq__22937_24161__$1);a__21742__auto__.push(arg__21743__auto___24167);
{
var G__24168 = cljs.core.next.call(null,seq__22937_24161__$1);
var G__24169 = null;
var G__24170 = 0;
var G__24171 = 0;
seq__22937_24151 = G__24168;
chunk__22938_24152 = G__24169;
count__22939_24153 = G__24170;
i__22940_24154 = G__24171;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__21742__auto__);
};
var code = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__21741__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__24172){
var args__21741__auto__ = cljs.core.seq(arglist__24172);
return code__delegate(args__21741__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22945_24173 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22946_24174 = null;var count__22947_24175 = 0;var i__22948_24176 = 0;while(true){
if((i__22948_24176 < count__22947_24175))
{var arg__21743__auto___24177 = cljs.core._nth.call(null,chunk__22946_24174,i__22948_24176);a__21742__auto__.push(arg__21743__auto___24177);
{
var G__24178 = seq__22945_24173;
var G__24179 = chunk__22946_24174;
var G__24180 = count__22947_24175;
var G__24181 = (i__22948_24176 + 1);
seq__22945_24173 = G__24178;
chunk__22946_24174 = G__24179;
count__22947_24175 = G__24180;
i__22948_24176 = G__24181;
continue;
}
} else
{var temp__4092__auto___24182 = cljs.core.seq.call(null,seq__22945_24173);if(temp__4092__auto___24182)
{var seq__22945_24183__$1 = temp__4092__auto___24182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22945_24183__$1))
{var c__20324__auto___24184 = cljs.core.chunk_first.call(null,seq__22945_24183__$1);{
var G__24185 = cljs.core.chunk_rest.call(null,seq__22945_24183__$1);
var G__24186 = c__20324__auto___24184;
var G__24187 = cljs.core.count.call(null,c__20324__auto___24184);
var G__24188 = 0;
seq__22945_24173 = G__24185;
chunk__22946_24174 = G__24186;
count__22947_24175 = G__24187;
i__22948_24176 = G__24188;
continue;
}
} else
{var arg__21743__auto___24189 = cljs.core.first.call(null,seq__22945_24183__$1);a__21742__auto__.push(arg__21743__auto___24189);
{
var G__24190 = cljs.core.next.call(null,seq__22945_24183__$1);
var G__24191 = null;
var G__24192 = 0;
var G__24193 = 0;
seq__22945_24173 = G__24190;
chunk__22946_24174 = G__24191;
count__22947_24175 = G__24192;
i__22948_24176 = G__24193;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__21742__auto__);
};
var col = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__21741__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__24194){
var args__21741__auto__ = cljs.core.seq(arglist__24194);
return col__delegate(args__21741__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22953_24195 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22954_24196 = null;var count__22955_24197 = 0;var i__22956_24198 = 0;while(true){
if((i__22956_24198 < count__22955_24197))
{var arg__21743__auto___24199 = cljs.core._nth.call(null,chunk__22954_24196,i__22956_24198);a__21742__auto__.push(arg__21743__auto___24199);
{
var G__24200 = seq__22953_24195;
var G__24201 = chunk__22954_24196;
var G__24202 = count__22955_24197;
var G__24203 = (i__22956_24198 + 1);
seq__22953_24195 = G__24200;
chunk__22954_24196 = G__24201;
count__22955_24197 = G__24202;
i__22956_24198 = G__24203;
continue;
}
} else
{var temp__4092__auto___24204 = cljs.core.seq.call(null,seq__22953_24195);if(temp__4092__auto___24204)
{var seq__22953_24205__$1 = temp__4092__auto___24204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22953_24205__$1))
{var c__20324__auto___24206 = cljs.core.chunk_first.call(null,seq__22953_24205__$1);{
var G__24207 = cljs.core.chunk_rest.call(null,seq__22953_24205__$1);
var G__24208 = c__20324__auto___24206;
var G__24209 = cljs.core.count.call(null,c__20324__auto___24206);
var G__24210 = 0;
seq__22953_24195 = G__24207;
chunk__22954_24196 = G__24208;
count__22955_24197 = G__24209;
i__22956_24198 = G__24210;
continue;
}
} else
{var arg__21743__auto___24211 = cljs.core.first.call(null,seq__22953_24205__$1);a__21742__auto__.push(arg__21743__auto___24211);
{
var G__24212 = cljs.core.next.call(null,seq__22953_24205__$1);
var G__24213 = null;
var G__24214 = 0;
var G__24215 = 0;
seq__22953_24195 = G__24212;
chunk__22954_24196 = G__24213;
count__22955_24197 = G__24214;
i__22956_24198 = G__24215;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__21742__auto__);
};
var colgroup = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__21741__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__24216){
var args__21741__auto__ = cljs.core.seq(arglist__24216);
return colgroup__delegate(args__21741__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22961_24217 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22962_24218 = null;var count__22963_24219 = 0;var i__22964_24220 = 0;while(true){
if((i__22964_24220 < count__22963_24219))
{var arg__21743__auto___24221 = cljs.core._nth.call(null,chunk__22962_24218,i__22964_24220);a__21742__auto__.push(arg__21743__auto___24221);
{
var G__24222 = seq__22961_24217;
var G__24223 = chunk__22962_24218;
var G__24224 = count__22963_24219;
var G__24225 = (i__22964_24220 + 1);
seq__22961_24217 = G__24222;
chunk__22962_24218 = G__24223;
count__22963_24219 = G__24224;
i__22964_24220 = G__24225;
continue;
}
} else
{var temp__4092__auto___24226 = cljs.core.seq.call(null,seq__22961_24217);if(temp__4092__auto___24226)
{var seq__22961_24227__$1 = temp__4092__auto___24226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22961_24227__$1))
{var c__20324__auto___24228 = cljs.core.chunk_first.call(null,seq__22961_24227__$1);{
var G__24229 = cljs.core.chunk_rest.call(null,seq__22961_24227__$1);
var G__24230 = c__20324__auto___24228;
var G__24231 = cljs.core.count.call(null,c__20324__auto___24228);
var G__24232 = 0;
seq__22961_24217 = G__24229;
chunk__22962_24218 = G__24230;
count__22963_24219 = G__24231;
i__22964_24220 = G__24232;
continue;
}
} else
{var arg__21743__auto___24233 = cljs.core.first.call(null,seq__22961_24227__$1);a__21742__auto__.push(arg__21743__auto___24233);
{
var G__24234 = cljs.core.next.call(null,seq__22961_24227__$1);
var G__24235 = null;
var G__24236 = 0;
var G__24237 = 0;
seq__22961_24217 = G__24234;
chunk__22962_24218 = G__24235;
count__22963_24219 = G__24236;
i__22964_24220 = G__24237;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__21742__auto__);
};
var data = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__21741__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__24238){
var args__21741__auto__ = cljs.core.seq(arglist__24238);
return data__delegate(args__21741__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22969_24239 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22970_24240 = null;var count__22971_24241 = 0;var i__22972_24242 = 0;while(true){
if((i__22972_24242 < count__22971_24241))
{var arg__21743__auto___24243 = cljs.core._nth.call(null,chunk__22970_24240,i__22972_24242);a__21742__auto__.push(arg__21743__auto___24243);
{
var G__24244 = seq__22969_24239;
var G__24245 = chunk__22970_24240;
var G__24246 = count__22971_24241;
var G__24247 = (i__22972_24242 + 1);
seq__22969_24239 = G__24244;
chunk__22970_24240 = G__24245;
count__22971_24241 = G__24246;
i__22972_24242 = G__24247;
continue;
}
} else
{var temp__4092__auto___24248 = cljs.core.seq.call(null,seq__22969_24239);if(temp__4092__auto___24248)
{var seq__22969_24249__$1 = temp__4092__auto___24248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22969_24249__$1))
{var c__20324__auto___24250 = cljs.core.chunk_first.call(null,seq__22969_24249__$1);{
var G__24251 = cljs.core.chunk_rest.call(null,seq__22969_24249__$1);
var G__24252 = c__20324__auto___24250;
var G__24253 = cljs.core.count.call(null,c__20324__auto___24250);
var G__24254 = 0;
seq__22969_24239 = G__24251;
chunk__22970_24240 = G__24252;
count__22971_24241 = G__24253;
i__22972_24242 = G__24254;
continue;
}
} else
{var arg__21743__auto___24255 = cljs.core.first.call(null,seq__22969_24249__$1);a__21742__auto__.push(arg__21743__auto___24255);
{
var G__24256 = cljs.core.next.call(null,seq__22969_24249__$1);
var G__24257 = null;
var G__24258 = 0;
var G__24259 = 0;
seq__22969_24239 = G__24256;
chunk__22970_24240 = G__24257;
count__22971_24241 = G__24258;
i__22972_24242 = G__24259;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__21742__auto__);
};
var datalist = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__21741__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__24260){
var args__21741__auto__ = cljs.core.seq(arglist__24260);
return datalist__delegate(args__21741__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22977_24261 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22978_24262 = null;var count__22979_24263 = 0;var i__22980_24264 = 0;while(true){
if((i__22980_24264 < count__22979_24263))
{var arg__21743__auto___24265 = cljs.core._nth.call(null,chunk__22978_24262,i__22980_24264);a__21742__auto__.push(arg__21743__auto___24265);
{
var G__24266 = seq__22977_24261;
var G__24267 = chunk__22978_24262;
var G__24268 = count__22979_24263;
var G__24269 = (i__22980_24264 + 1);
seq__22977_24261 = G__24266;
chunk__22978_24262 = G__24267;
count__22979_24263 = G__24268;
i__22980_24264 = G__24269;
continue;
}
} else
{var temp__4092__auto___24270 = cljs.core.seq.call(null,seq__22977_24261);if(temp__4092__auto___24270)
{var seq__22977_24271__$1 = temp__4092__auto___24270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22977_24271__$1))
{var c__20324__auto___24272 = cljs.core.chunk_first.call(null,seq__22977_24271__$1);{
var G__24273 = cljs.core.chunk_rest.call(null,seq__22977_24271__$1);
var G__24274 = c__20324__auto___24272;
var G__24275 = cljs.core.count.call(null,c__20324__auto___24272);
var G__24276 = 0;
seq__22977_24261 = G__24273;
chunk__22978_24262 = G__24274;
count__22979_24263 = G__24275;
i__22980_24264 = G__24276;
continue;
}
} else
{var arg__21743__auto___24277 = cljs.core.first.call(null,seq__22977_24271__$1);a__21742__auto__.push(arg__21743__auto___24277);
{
var G__24278 = cljs.core.next.call(null,seq__22977_24271__$1);
var G__24279 = null;
var G__24280 = 0;
var G__24281 = 0;
seq__22977_24261 = G__24278;
chunk__22978_24262 = G__24279;
count__22979_24263 = G__24280;
i__22980_24264 = G__24281;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__21742__auto__);
};
var dd = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__21741__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__24282){
var args__21741__auto__ = cljs.core.seq(arglist__24282);
return dd__delegate(args__21741__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22985_24283 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22986_24284 = null;var count__22987_24285 = 0;var i__22988_24286 = 0;while(true){
if((i__22988_24286 < count__22987_24285))
{var arg__21743__auto___24287 = cljs.core._nth.call(null,chunk__22986_24284,i__22988_24286);a__21742__auto__.push(arg__21743__auto___24287);
{
var G__24288 = seq__22985_24283;
var G__24289 = chunk__22986_24284;
var G__24290 = count__22987_24285;
var G__24291 = (i__22988_24286 + 1);
seq__22985_24283 = G__24288;
chunk__22986_24284 = G__24289;
count__22987_24285 = G__24290;
i__22988_24286 = G__24291;
continue;
}
} else
{var temp__4092__auto___24292 = cljs.core.seq.call(null,seq__22985_24283);if(temp__4092__auto___24292)
{var seq__22985_24293__$1 = temp__4092__auto___24292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22985_24293__$1))
{var c__20324__auto___24294 = cljs.core.chunk_first.call(null,seq__22985_24293__$1);{
var G__24295 = cljs.core.chunk_rest.call(null,seq__22985_24293__$1);
var G__24296 = c__20324__auto___24294;
var G__24297 = cljs.core.count.call(null,c__20324__auto___24294);
var G__24298 = 0;
seq__22985_24283 = G__24295;
chunk__22986_24284 = G__24296;
count__22987_24285 = G__24297;
i__22988_24286 = G__24298;
continue;
}
} else
{var arg__21743__auto___24299 = cljs.core.first.call(null,seq__22985_24293__$1);a__21742__auto__.push(arg__21743__auto___24299);
{
var G__24300 = cljs.core.next.call(null,seq__22985_24293__$1);
var G__24301 = null;
var G__24302 = 0;
var G__24303 = 0;
seq__22985_24283 = G__24300;
chunk__22986_24284 = G__24301;
count__22987_24285 = G__24302;
i__22988_24286 = G__24303;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__21742__auto__);
};
var del = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__21741__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__24304){
var args__21741__auto__ = cljs.core.seq(arglist__24304);
return del__delegate(args__21741__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__22993_24305 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__22994_24306 = null;var count__22995_24307 = 0;var i__22996_24308 = 0;while(true){
if((i__22996_24308 < count__22995_24307))
{var arg__21743__auto___24309 = cljs.core._nth.call(null,chunk__22994_24306,i__22996_24308);a__21742__auto__.push(arg__21743__auto___24309);
{
var G__24310 = seq__22993_24305;
var G__24311 = chunk__22994_24306;
var G__24312 = count__22995_24307;
var G__24313 = (i__22996_24308 + 1);
seq__22993_24305 = G__24310;
chunk__22994_24306 = G__24311;
count__22995_24307 = G__24312;
i__22996_24308 = G__24313;
continue;
}
} else
{var temp__4092__auto___24314 = cljs.core.seq.call(null,seq__22993_24305);if(temp__4092__auto___24314)
{var seq__22993_24315__$1 = temp__4092__auto___24314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22993_24315__$1))
{var c__20324__auto___24316 = cljs.core.chunk_first.call(null,seq__22993_24315__$1);{
var G__24317 = cljs.core.chunk_rest.call(null,seq__22993_24315__$1);
var G__24318 = c__20324__auto___24316;
var G__24319 = cljs.core.count.call(null,c__20324__auto___24316);
var G__24320 = 0;
seq__22993_24305 = G__24317;
chunk__22994_24306 = G__24318;
count__22995_24307 = G__24319;
i__22996_24308 = G__24320;
continue;
}
} else
{var arg__21743__auto___24321 = cljs.core.first.call(null,seq__22993_24315__$1);a__21742__auto__.push(arg__21743__auto___24321);
{
var G__24322 = cljs.core.next.call(null,seq__22993_24315__$1);
var G__24323 = null;
var G__24324 = 0;
var G__24325 = 0;
seq__22993_24305 = G__24322;
chunk__22994_24306 = G__24323;
count__22995_24307 = G__24324;
i__22996_24308 = G__24325;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__21742__auto__);
};
var details = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__21741__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__24326){
var args__21741__auto__ = cljs.core.seq(arglist__24326);
return details__delegate(args__21741__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23001_24327 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23002_24328 = null;var count__23003_24329 = 0;var i__23004_24330 = 0;while(true){
if((i__23004_24330 < count__23003_24329))
{var arg__21743__auto___24331 = cljs.core._nth.call(null,chunk__23002_24328,i__23004_24330);a__21742__auto__.push(arg__21743__auto___24331);
{
var G__24332 = seq__23001_24327;
var G__24333 = chunk__23002_24328;
var G__24334 = count__23003_24329;
var G__24335 = (i__23004_24330 + 1);
seq__23001_24327 = G__24332;
chunk__23002_24328 = G__24333;
count__23003_24329 = G__24334;
i__23004_24330 = G__24335;
continue;
}
} else
{var temp__4092__auto___24336 = cljs.core.seq.call(null,seq__23001_24327);if(temp__4092__auto___24336)
{var seq__23001_24337__$1 = temp__4092__auto___24336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23001_24337__$1))
{var c__20324__auto___24338 = cljs.core.chunk_first.call(null,seq__23001_24337__$1);{
var G__24339 = cljs.core.chunk_rest.call(null,seq__23001_24337__$1);
var G__24340 = c__20324__auto___24338;
var G__24341 = cljs.core.count.call(null,c__20324__auto___24338);
var G__24342 = 0;
seq__23001_24327 = G__24339;
chunk__23002_24328 = G__24340;
count__23003_24329 = G__24341;
i__23004_24330 = G__24342;
continue;
}
} else
{var arg__21743__auto___24343 = cljs.core.first.call(null,seq__23001_24337__$1);a__21742__auto__.push(arg__21743__auto___24343);
{
var G__24344 = cljs.core.next.call(null,seq__23001_24337__$1);
var G__24345 = null;
var G__24346 = 0;
var G__24347 = 0;
seq__23001_24327 = G__24344;
chunk__23002_24328 = G__24345;
count__23003_24329 = G__24346;
i__23004_24330 = G__24347;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__21742__auto__);
};
var dfn = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__21741__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__24348){
var args__21741__auto__ = cljs.core.seq(arglist__24348);
return dfn__delegate(args__21741__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23009_24349 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23010_24350 = null;var count__23011_24351 = 0;var i__23012_24352 = 0;while(true){
if((i__23012_24352 < count__23011_24351))
{var arg__21743__auto___24353 = cljs.core._nth.call(null,chunk__23010_24350,i__23012_24352);a__21742__auto__.push(arg__21743__auto___24353);
{
var G__24354 = seq__23009_24349;
var G__24355 = chunk__23010_24350;
var G__24356 = count__23011_24351;
var G__24357 = (i__23012_24352 + 1);
seq__23009_24349 = G__24354;
chunk__23010_24350 = G__24355;
count__23011_24351 = G__24356;
i__23012_24352 = G__24357;
continue;
}
} else
{var temp__4092__auto___24358 = cljs.core.seq.call(null,seq__23009_24349);if(temp__4092__auto___24358)
{var seq__23009_24359__$1 = temp__4092__auto___24358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23009_24359__$1))
{var c__20324__auto___24360 = cljs.core.chunk_first.call(null,seq__23009_24359__$1);{
var G__24361 = cljs.core.chunk_rest.call(null,seq__23009_24359__$1);
var G__24362 = c__20324__auto___24360;
var G__24363 = cljs.core.count.call(null,c__20324__auto___24360);
var G__24364 = 0;
seq__23009_24349 = G__24361;
chunk__23010_24350 = G__24362;
count__23011_24351 = G__24363;
i__23012_24352 = G__24364;
continue;
}
} else
{var arg__21743__auto___24365 = cljs.core.first.call(null,seq__23009_24359__$1);a__21742__auto__.push(arg__21743__auto___24365);
{
var G__24366 = cljs.core.next.call(null,seq__23009_24359__$1);
var G__24367 = null;
var G__24368 = 0;
var G__24369 = 0;
seq__23009_24349 = G__24366;
chunk__23010_24350 = G__24367;
count__23011_24351 = G__24368;
i__23012_24352 = G__24369;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__21742__auto__);
};
var div = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__21741__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__24370){
var args__21741__auto__ = cljs.core.seq(arglist__24370);
return div__delegate(args__21741__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23017_24371 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23018_24372 = null;var count__23019_24373 = 0;var i__23020_24374 = 0;while(true){
if((i__23020_24374 < count__23019_24373))
{var arg__21743__auto___24375 = cljs.core._nth.call(null,chunk__23018_24372,i__23020_24374);a__21742__auto__.push(arg__21743__auto___24375);
{
var G__24376 = seq__23017_24371;
var G__24377 = chunk__23018_24372;
var G__24378 = count__23019_24373;
var G__24379 = (i__23020_24374 + 1);
seq__23017_24371 = G__24376;
chunk__23018_24372 = G__24377;
count__23019_24373 = G__24378;
i__23020_24374 = G__24379;
continue;
}
} else
{var temp__4092__auto___24380 = cljs.core.seq.call(null,seq__23017_24371);if(temp__4092__auto___24380)
{var seq__23017_24381__$1 = temp__4092__auto___24380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23017_24381__$1))
{var c__20324__auto___24382 = cljs.core.chunk_first.call(null,seq__23017_24381__$1);{
var G__24383 = cljs.core.chunk_rest.call(null,seq__23017_24381__$1);
var G__24384 = c__20324__auto___24382;
var G__24385 = cljs.core.count.call(null,c__20324__auto___24382);
var G__24386 = 0;
seq__23017_24371 = G__24383;
chunk__23018_24372 = G__24384;
count__23019_24373 = G__24385;
i__23020_24374 = G__24386;
continue;
}
} else
{var arg__21743__auto___24387 = cljs.core.first.call(null,seq__23017_24381__$1);a__21742__auto__.push(arg__21743__auto___24387);
{
var G__24388 = cljs.core.next.call(null,seq__23017_24381__$1);
var G__24389 = null;
var G__24390 = 0;
var G__24391 = 0;
seq__23017_24371 = G__24388;
chunk__23018_24372 = G__24389;
count__23019_24373 = G__24390;
i__23020_24374 = G__24391;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__21742__auto__);
};
var dl = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__21741__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__24392){
var args__21741__auto__ = cljs.core.seq(arglist__24392);
return dl__delegate(args__21741__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23025_24393 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23026_24394 = null;var count__23027_24395 = 0;var i__23028_24396 = 0;while(true){
if((i__23028_24396 < count__23027_24395))
{var arg__21743__auto___24397 = cljs.core._nth.call(null,chunk__23026_24394,i__23028_24396);a__21742__auto__.push(arg__21743__auto___24397);
{
var G__24398 = seq__23025_24393;
var G__24399 = chunk__23026_24394;
var G__24400 = count__23027_24395;
var G__24401 = (i__23028_24396 + 1);
seq__23025_24393 = G__24398;
chunk__23026_24394 = G__24399;
count__23027_24395 = G__24400;
i__23028_24396 = G__24401;
continue;
}
} else
{var temp__4092__auto___24402 = cljs.core.seq.call(null,seq__23025_24393);if(temp__4092__auto___24402)
{var seq__23025_24403__$1 = temp__4092__auto___24402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23025_24403__$1))
{var c__20324__auto___24404 = cljs.core.chunk_first.call(null,seq__23025_24403__$1);{
var G__24405 = cljs.core.chunk_rest.call(null,seq__23025_24403__$1);
var G__24406 = c__20324__auto___24404;
var G__24407 = cljs.core.count.call(null,c__20324__auto___24404);
var G__24408 = 0;
seq__23025_24393 = G__24405;
chunk__23026_24394 = G__24406;
count__23027_24395 = G__24407;
i__23028_24396 = G__24408;
continue;
}
} else
{var arg__21743__auto___24409 = cljs.core.first.call(null,seq__23025_24403__$1);a__21742__auto__.push(arg__21743__auto___24409);
{
var G__24410 = cljs.core.next.call(null,seq__23025_24403__$1);
var G__24411 = null;
var G__24412 = 0;
var G__24413 = 0;
seq__23025_24393 = G__24410;
chunk__23026_24394 = G__24411;
count__23027_24395 = G__24412;
i__23028_24396 = G__24413;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__21742__auto__);
};
var dt = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__21741__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__24414){
var args__21741__auto__ = cljs.core.seq(arglist__24414);
return dt__delegate(args__21741__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23033_24415 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23034_24416 = null;var count__23035_24417 = 0;var i__23036_24418 = 0;while(true){
if((i__23036_24418 < count__23035_24417))
{var arg__21743__auto___24419 = cljs.core._nth.call(null,chunk__23034_24416,i__23036_24418);a__21742__auto__.push(arg__21743__auto___24419);
{
var G__24420 = seq__23033_24415;
var G__24421 = chunk__23034_24416;
var G__24422 = count__23035_24417;
var G__24423 = (i__23036_24418 + 1);
seq__23033_24415 = G__24420;
chunk__23034_24416 = G__24421;
count__23035_24417 = G__24422;
i__23036_24418 = G__24423;
continue;
}
} else
{var temp__4092__auto___24424 = cljs.core.seq.call(null,seq__23033_24415);if(temp__4092__auto___24424)
{var seq__23033_24425__$1 = temp__4092__auto___24424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23033_24425__$1))
{var c__20324__auto___24426 = cljs.core.chunk_first.call(null,seq__23033_24425__$1);{
var G__24427 = cljs.core.chunk_rest.call(null,seq__23033_24425__$1);
var G__24428 = c__20324__auto___24426;
var G__24429 = cljs.core.count.call(null,c__20324__auto___24426);
var G__24430 = 0;
seq__23033_24415 = G__24427;
chunk__23034_24416 = G__24428;
count__23035_24417 = G__24429;
i__23036_24418 = G__24430;
continue;
}
} else
{var arg__21743__auto___24431 = cljs.core.first.call(null,seq__23033_24425__$1);a__21742__auto__.push(arg__21743__auto___24431);
{
var G__24432 = cljs.core.next.call(null,seq__23033_24425__$1);
var G__24433 = null;
var G__24434 = 0;
var G__24435 = 0;
seq__23033_24415 = G__24432;
chunk__23034_24416 = G__24433;
count__23035_24417 = G__24434;
i__23036_24418 = G__24435;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__21742__auto__);
};
var em = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__21741__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__24436){
var args__21741__auto__ = cljs.core.seq(arglist__24436);
return em__delegate(args__21741__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23049_24437 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23050_24438 = null;var count__23051_24439 = 0;var i__23052_24440 = 0;while(true){
if((i__23052_24440 < count__23051_24439))
{var arg__21743__auto___24441 = cljs.core._nth.call(null,chunk__23050_24438,i__23052_24440);a__21742__auto__.push(arg__21743__auto___24441);
{
var G__24442 = seq__23049_24437;
var G__24443 = chunk__23050_24438;
var G__24444 = count__23051_24439;
var G__24445 = (i__23052_24440 + 1);
seq__23049_24437 = G__24442;
chunk__23050_24438 = G__24443;
count__23051_24439 = G__24444;
i__23052_24440 = G__24445;
continue;
}
} else
{var temp__4092__auto___24446 = cljs.core.seq.call(null,seq__23049_24437);if(temp__4092__auto___24446)
{var seq__23049_24447__$1 = temp__4092__auto___24446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23049_24447__$1))
{var c__20324__auto___24448 = cljs.core.chunk_first.call(null,seq__23049_24447__$1);{
var G__24449 = cljs.core.chunk_rest.call(null,seq__23049_24447__$1);
var G__24450 = c__20324__auto___24448;
var G__24451 = cljs.core.count.call(null,c__20324__auto___24448);
var G__24452 = 0;
seq__23049_24437 = G__24449;
chunk__23050_24438 = G__24450;
count__23051_24439 = G__24451;
i__23052_24440 = G__24452;
continue;
}
} else
{var arg__21743__auto___24453 = cljs.core.first.call(null,seq__23049_24447__$1);a__21742__auto__.push(arg__21743__auto___24453);
{
var G__24454 = cljs.core.next.call(null,seq__23049_24447__$1);
var G__24455 = null;
var G__24456 = 0;
var G__24457 = 0;
seq__23049_24437 = G__24454;
chunk__23050_24438 = G__24455;
count__23051_24439 = G__24456;
i__23052_24440 = G__24457;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__21742__auto__);
};
var embed = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__21741__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__24458){
var args__21741__auto__ = cljs.core.seq(arglist__24458);
return embed__delegate(args__21741__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23057_24459 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23058_24460 = null;var count__23059_24461 = 0;var i__23060_24462 = 0;while(true){
if((i__23060_24462 < count__23059_24461))
{var arg__21743__auto___24463 = cljs.core._nth.call(null,chunk__23058_24460,i__23060_24462);a__21742__auto__.push(arg__21743__auto___24463);
{
var G__24464 = seq__23057_24459;
var G__24465 = chunk__23058_24460;
var G__24466 = count__23059_24461;
var G__24467 = (i__23060_24462 + 1);
seq__23057_24459 = G__24464;
chunk__23058_24460 = G__24465;
count__23059_24461 = G__24466;
i__23060_24462 = G__24467;
continue;
}
} else
{var temp__4092__auto___24468 = cljs.core.seq.call(null,seq__23057_24459);if(temp__4092__auto___24468)
{var seq__23057_24469__$1 = temp__4092__auto___24468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23057_24469__$1))
{var c__20324__auto___24470 = cljs.core.chunk_first.call(null,seq__23057_24469__$1);{
var G__24471 = cljs.core.chunk_rest.call(null,seq__23057_24469__$1);
var G__24472 = c__20324__auto___24470;
var G__24473 = cljs.core.count.call(null,c__20324__auto___24470);
var G__24474 = 0;
seq__23057_24459 = G__24471;
chunk__23058_24460 = G__24472;
count__23059_24461 = G__24473;
i__23060_24462 = G__24474;
continue;
}
} else
{var arg__21743__auto___24475 = cljs.core.first.call(null,seq__23057_24469__$1);a__21742__auto__.push(arg__21743__auto___24475);
{
var G__24476 = cljs.core.next.call(null,seq__23057_24469__$1);
var G__24477 = null;
var G__24478 = 0;
var G__24479 = 0;
seq__23057_24459 = G__24476;
chunk__23058_24460 = G__24477;
count__23059_24461 = G__24478;
i__23060_24462 = G__24479;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__21742__auto__);
};
var fieldset = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__21741__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__24480){
var args__21741__auto__ = cljs.core.seq(arglist__24480);
return fieldset__delegate(args__21741__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23065_24481 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23066_24482 = null;var count__23067_24483 = 0;var i__23068_24484 = 0;while(true){
if((i__23068_24484 < count__23067_24483))
{var arg__21743__auto___24485 = cljs.core._nth.call(null,chunk__23066_24482,i__23068_24484);a__21742__auto__.push(arg__21743__auto___24485);
{
var G__24486 = seq__23065_24481;
var G__24487 = chunk__23066_24482;
var G__24488 = count__23067_24483;
var G__24489 = (i__23068_24484 + 1);
seq__23065_24481 = G__24486;
chunk__23066_24482 = G__24487;
count__23067_24483 = G__24488;
i__23068_24484 = G__24489;
continue;
}
} else
{var temp__4092__auto___24490 = cljs.core.seq.call(null,seq__23065_24481);if(temp__4092__auto___24490)
{var seq__23065_24491__$1 = temp__4092__auto___24490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23065_24491__$1))
{var c__20324__auto___24492 = cljs.core.chunk_first.call(null,seq__23065_24491__$1);{
var G__24493 = cljs.core.chunk_rest.call(null,seq__23065_24491__$1);
var G__24494 = c__20324__auto___24492;
var G__24495 = cljs.core.count.call(null,c__20324__auto___24492);
var G__24496 = 0;
seq__23065_24481 = G__24493;
chunk__23066_24482 = G__24494;
count__23067_24483 = G__24495;
i__23068_24484 = G__24496;
continue;
}
} else
{var arg__21743__auto___24497 = cljs.core.first.call(null,seq__23065_24491__$1);a__21742__auto__.push(arg__21743__auto___24497);
{
var G__24498 = cljs.core.next.call(null,seq__23065_24491__$1);
var G__24499 = null;
var G__24500 = 0;
var G__24501 = 0;
seq__23065_24481 = G__24498;
chunk__23066_24482 = G__24499;
count__23067_24483 = G__24500;
i__23068_24484 = G__24501;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__21742__auto__);
};
var figcaption = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__21741__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__24502){
var args__21741__auto__ = cljs.core.seq(arglist__24502);
return figcaption__delegate(args__21741__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23073_24503 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23074_24504 = null;var count__23075_24505 = 0;var i__23076_24506 = 0;while(true){
if((i__23076_24506 < count__23075_24505))
{var arg__21743__auto___24507 = cljs.core._nth.call(null,chunk__23074_24504,i__23076_24506);a__21742__auto__.push(arg__21743__auto___24507);
{
var G__24508 = seq__23073_24503;
var G__24509 = chunk__23074_24504;
var G__24510 = count__23075_24505;
var G__24511 = (i__23076_24506 + 1);
seq__23073_24503 = G__24508;
chunk__23074_24504 = G__24509;
count__23075_24505 = G__24510;
i__23076_24506 = G__24511;
continue;
}
} else
{var temp__4092__auto___24512 = cljs.core.seq.call(null,seq__23073_24503);if(temp__4092__auto___24512)
{var seq__23073_24513__$1 = temp__4092__auto___24512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23073_24513__$1))
{var c__20324__auto___24514 = cljs.core.chunk_first.call(null,seq__23073_24513__$1);{
var G__24515 = cljs.core.chunk_rest.call(null,seq__23073_24513__$1);
var G__24516 = c__20324__auto___24514;
var G__24517 = cljs.core.count.call(null,c__20324__auto___24514);
var G__24518 = 0;
seq__23073_24503 = G__24515;
chunk__23074_24504 = G__24516;
count__23075_24505 = G__24517;
i__23076_24506 = G__24518;
continue;
}
} else
{var arg__21743__auto___24519 = cljs.core.first.call(null,seq__23073_24513__$1);a__21742__auto__.push(arg__21743__auto___24519);
{
var G__24520 = cljs.core.next.call(null,seq__23073_24513__$1);
var G__24521 = null;
var G__24522 = 0;
var G__24523 = 0;
seq__23073_24503 = G__24520;
chunk__23074_24504 = G__24521;
count__23075_24505 = G__24522;
i__23076_24506 = G__24523;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__21742__auto__);
};
var figure = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__21741__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__24524){
var args__21741__auto__ = cljs.core.seq(arglist__24524);
return figure__delegate(args__21741__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23081_24525 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23082_24526 = null;var count__23083_24527 = 0;var i__23084_24528 = 0;while(true){
if((i__23084_24528 < count__23083_24527))
{var arg__21743__auto___24529 = cljs.core._nth.call(null,chunk__23082_24526,i__23084_24528);a__21742__auto__.push(arg__21743__auto___24529);
{
var G__24530 = seq__23081_24525;
var G__24531 = chunk__23082_24526;
var G__24532 = count__23083_24527;
var G__24533 = (i__23084_24528 + 1);
seq__23081_24525 = G__24530;
chunk__23082_24526 = G__24531;
count__23083_24527 = G__24532;
i__23084_24528 = G__24533;
continue;
}
} else
{var temp__4092__auto___24534 = cljs.core.seq.call(null,seq__23081_24525);if(temp__4092__auto___24534)
{var seq__23081_24535__$1 = temp__4092__auto___24534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23081_24535__$1))
{var c__20324__auto___24536 = cljs.core.chunk_first.call(null,seq__23081_24535__$1);{
var G__24537 = cljs.core.chunk_rest.call(null,seq__23081_24535__$1);
var G__24538 = c__20324__auto___24536;
var G__24539 = cljs.core.count.call(null,c__20324__auto___24536);
var G__24540 = 0;
seq__23081_24525 = G__24537;
chunk__23082_24526 = G__24538;
count__23083_24527 = G__24539;
i__23084_24528 = G__24540;
continue;
}
} else
{var arg__21743__auto___24541 = cljs.core.first.call(null,seq__23081_24535__$1);a__21742__auto__.push(arg__21743__auto___24541);
{
var G__24542 = cljs.core.next.call(null,seq__23081_24535__$1);
var G__24543 = null;
var G__24544 = 0;
var G__24545 = 0;
seq__23081_24525 = G__24542;
chunk__23082_24526 = G__24543;
count__23083_24527 = G__24544;
i__23084_24528 = G__24545;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__21742__auto__);
};
var footer = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__21741__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__24546){
var args__21741__auto__ = cljs.core.seq(arglist__24546);
return footer__delegate(args__21741__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23089_24547 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23090_24548 = null;var count__23091_24549 = 0;var i__23092_24550 = 0;while(true){
if((i__23092_24550 < count__23091_24549))
{var arg__21743__auto___24551 = cljs.core._nth.call(null,chunk__23090_24548,i__23092_24550);a__21742__auto__.push(arg__21743__auto___24551);
{
var G__24552 = seq__23089_24547;
var G__24553 = chunk__23090_24548;
var G__24554 = count__23091_24549;
var G__24555 = (i__23092_24550 + 1);
seq__23089_24547 = G__24552;
chunk__23090_24548 = G__24553;
count__23091_24549 = G__24554;
i__23092_24550 = G__24555;
continue;
}
} else
{var temp__4092__auto___24556 = cljs.core.seq.call(null,seq__23089_24547);if(temp__4092__auto___24556)
{var seq__23089_24557__$1 = temp__4092__auto___24556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23089_24557__$1))
{var c__20324__auto___24558 = cljs.core.chunk_first.call(null,seq__23089_24557__$1);{
var G__24559 = cljs.core.chunk_rest.call(null,seq__23089_24557__$1);
var G__24560 = c__20324__auto___24558;
var G__24561 = cljs.core.count.call(null,c__20324__auto___24558);
var G__24562 = 0;
seq__23089_24547 = G__24559;
chunk__23090_24548 = G__24560;
count__23091_24549 = G__24561;
i__23092_24550 = G__24562;
continue;
}
} else
{var arg__21743__auto___24563 = cljs.core.first.call(null,seq__23089_24557__$1);a__21742__auto__.push(arg__21743__auto___24563);
{
var G__24564 = cljs.core.next.call(null,seq__23089_24557__$1);
var G__24565 = null;
var G__24566 = 0;
var G__24567 = 0;
seq__23089_24547 = G__24564;
chunk__23090_24548 = G__24565;
count__23091_24549 = G__24566;
i__23092_24550 = G__24567;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__21742__auto__);
};
var form = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__21741__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__24568){
var args__21741__auto__ = cljs.core.seq(arglist__24568);
return form__delegate(args__21741__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23097_24569 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23098_24570 = null;var count__23099_24571 = 0;var i__23100_24572 = 0;while(true){
if((i__23100_24572 < count__23099_24571))
{var arg__21743__auto___24573 = cljs.core._nth.call(null,chunk__23098_24570,i__23100_24572);a__21742__auto__.push(arg__21743__auto___24573);
{
var G__24574 = seq__23097_24569;
var G__24575 = chunk__23098_24570;
var G__24576 = count__23099_24571;
var G__24577 = (i__23100_24572 + 1);
seq__23097_24569 = G__24574;
chunk__23098_24570 = G__24575;
count__23099_24571 = G__24576;
i__23100_24572 = G__24577;
continue;
}
} else
{var temp__4092__auto___24578 = cljs.core.seq.call(null,seq__23097_24569);if(temp__4092__auto___24578)
{var seq__23097_24579__$1 = temp__4092__auto___24578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23097_24579__$1))
{var c__20324__auto___24580 = cljs.core.chunk_first.call(null,seq__23097_24579__$1);{
var G__24581 = cljs.core.chunk_rest.call(null,seq__23097_24579__$1);
var G__24582 = c__20324__auto___24580;
var G__24583 = cljs.core.count.call(null,c__20324__auto___24580);
var G__24584 = 0;
seq__23097_24569 = G__24581;
chunk__23098_24570 = G__24582;
count__23099_24571 = G__24583;
i__23100_24572 = G__24584;
continue;
}
} else
{var arg__21743__auto___24585 = cljs.core.first.call(null,seq__23097_24579__$1);a__21742__auto__.push(arg__21743__auto___24585);
{
var G__24586 = cljs.core.next.call(null,seq__23097_24579__$1);
var G__24587 = null;
var G__24588 = 0;
var G__24589 = 0;
seq__23097_24569 = G__24586;
chunk__23098_24570 = G__24587;
count__23099_24571 = G__24588;
i__23100_24572 = G__24589;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__21742__auto__);
};
var h1 = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__21741__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__24590){
var args__21741__auto__ = cljs.core.seq(arglist__24590);
return h1__delegate(args__21741__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23105_24591 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23106_24592 = null;var count__23107_24593 = 0;var i__23108_24594 = 0;while(true){
if((i__23108_24594 < count__23107_24593))
{var arg__21743__auto___24595 = cljs.core._nth.call(null,chunk__23106_24592,i__23108_24594);a__21742__auto__.push(arg__21743__auto___24595);
{
var G__24596 = seq__23105_24591;
var G__24597 = chunk__23106_24592;
var G__24598 = count__23107_24593;
var G__24599 = (i__23108_24594 + 1);
seq__23105_24591 = G__24596;
chunk__23106_24592 = G__24597;
count__23107_24593 = G__24598;
i__23108_24594 = G__24599;
continue;
}
} else
{var temp__4092__auto___24600 = cljs.core.seq.call(null,seq__23105_24591);if(temp__4092__auto___24600)
{var seq__23105_24601__$1 = temp__4092__auto___24600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23105_24601__$1))
{var c__20324__auto___24602 = cljs.core.chunk_first.call(null,seq__23105_24601__$1);{
var G__24603 = cljs.core.chunk_rest.call(null,seq__23105_24601__$1);
var G__24604 = c__20324__auto___24602;
var G__24605 = cljs.core.count.call(null,c__20324__auto___24602);
var G__24606 = 0;
seq__23105_24591 = G__24603;
chunk__23106_24592 = G__24604;
count__23107_24593 = G__24605;
i__23108_24594 = G__24606;
continue;
}
} else
{var arg__21743__auto___24607 = cljs.core.first.call(null,seq__23105_24601__$1);a__21742__auto__.push(arg__21743__auto___24607);
{
var G__24608 = cljs.core.next.call(null,seq__23105_24601__$1);
var G__24609 = null;
var G__24610 = 0;
var G__24611 = 0;
seq__23105_24591 = G__24608;
chunk__23106_24592 = G__24609;
count__23107_24593 = G__24610;
i__23108_24594 = G__24611;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__21742__auto__);
};
var h2 = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__21741__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__24612){
var args__21741__auto__ = cljs.core.seq(arglist__24612);
return h2__delegate(args__21741__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23113_24613 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23114_24614 = null;var count__23115_24615 = 0;var i__23116_24616 = 0;while(true){
if((i__23116_24616 < count__23115_24615))
{var arg__21743__auto___24617 = cljs.core._nth.call(null,chunk__23114_24614,i__23116_24616);a__21742__auto__.push(arg__21743__auto___24617);
{
var G__24618 = seq__23113_24613;
var G__24619 = chunk__23114_24614;
var G__24620 = count__23115_24615;
var G__24621 = (i__23116_24616 + 1);
seq__23113_24613 = G__24618;
chunk__23114_24614 = G__24619;
count__23115_24615 = G__24620;
i__23116_24616 = G__24621;
continue;
}
} else
{var temp__4092__auto___24622 = cljs.core.seq.call(null,seq__23113_24613);if(temp__4092__auto___24622)
{var seq__23113_24623__$1 = temp__4092__auto___24622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23113_24623__$1))
{var c__20324__auto___24624 = cljs.core.chunk_first.call(null,seq__23113_24623__$1);{
var G__24625 = cljs.core.chunk_rest.call(null,seq__23113_24623__$1);
var G__24626 = c__20324__auto___24624;
var G__24627 = cljs.core.count.call(null,c__20324__auto___24624);
var G__24628 = 0;
seq__23113_24613 = G__24625;
chunk__23114_24614 = G__24626;
count__23115_24615 = G__24627;
i__23116_24616 = G__24628;
continue;
}
} else
{var arg__21743__auto___24629 = cljs.core.first.call(null,seq__23113_24623__$1);a__21742__auto__.push(arg__21743__auto___24629);
{
var G__24630 = cljs.core.next.call(null,seq__23113_24623__$1);
var G__24631 = null;
var G__24632 = 0;
var G__24633 = 0;
seq__23113_24613 = G__24630;
chunk__23114_24614 = G__24631;
count__23115_24615 = G__24632;
i__23116_24616 = G__24633;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__21742__auto__);
};
var h3 = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__21741__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__24634){
var args__21741__auto__ = cljs.core.seq(arglist__24634);
return h3__delegate(args__21741__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23121_24635 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23122_24636 = null;var count__23123_24637 = 0;var i__23124_24638 = 0;while(true){
if((i__23124_24638 < count__23123_24637))
{var arg__21743__auto___24639 = cljs.core._nth.call(null,chunk__23122_24636,i__23124_24638);a__21742__auto__.push(arg__21743__auto___24639);
{
var G__24640 = seq__23121_24635;
var G__24641 = chunk__23122_24636;
var G__24642 = count__23123_24637;
var G__24643 = (i__23124_24638 + 1);
seq__23121_24635 = G__24640;
chunk__23122_24636 = G__24641;
count__23123_24637 = G__24642;
i__23124_24638 = G__24643;
continue;
}
} else
{var temp__4092__auto___24644 = cljs.core.seq.call(null,seq__23121_24635);if(temp__4092__auto___24644)
{var seq__23121_24645__$1 = temp__4092__auto___24644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23121_24645__$1))
{var c__20324__auto___24646 = cljs.core.chunk_first.call(null,seq__23121_24645__$1);{
var G__24647 = cljs.core.chunk_rest.call(null,seq__23121_24645__$1);
var G__24648 = c__20324__auto___24646;
var G__24649 = cljs.core.count.call(null,c__20324__auto___24646);
var G__24650 = 0;
seq__23121_24635 = G__24647;
chunk__23122_24636 = G__24648;
count__23123_24637 = G__24649;
i__23124_24638 = G__24650;
continue;
}
} else
{var arg__21743__auto___24651 = cljs.core.first.call(null,seq__23121_24645__$1);a__21742__auto__.push(arg__21743__auto___24651);
{
var G__24652 = cljs.core.next.call(null,seq__23121_24645__$1);
var G__24653 = null;
var G__24654 = 0;
var G__24655 = 0;
seq__23121_24635 = G__24652;
chunk__23122_24636 = G__24653;
count__23123_24637 = G__24654;
i__23124_24638 = G__24655;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__21742__auto__);
};
var h4 = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__21741__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__24656){
var args__21741__auto__ = cljs.core.seq(arglist__24656);
return h4__delegate(args__21741__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23129_24657 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23130_24658 = null;var count__23131_24659 = 0;var i__23132_24660 = 0;while(true){
if((i__23132_24660 < count__23131_24659))
{var arg__21743__auto___24661 = cljs.core._nth.call(null,chunk__23130_24658,i__23132_24660);a__21742__auto__.push(arg__21743__auto___24661);
{
var G__24662 = seq__23129_24657;
var G__24663 = chunk__23130_24658;
var G__24664 = count__23131_24659;
var G__24665 = (i__23132_24660 + 1);
seq__23129_24657 = G__24662;
chunk__23130_24658 = G__24663;
count__23131_24659 = G__24664;
i__23132_24660 = G__24665;
continue;
}
} else
{var temp__4092__auto___24666 = cljs.core.seq.call(null,seq__23129_24657);if(temp__4092__auto___24666)
{var seq__23129_24667__$1 = temp__4092__auto___24666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23129_24667__$1))
{var c__20324__auto___24668 = cljs.core.chunk_first.call(null,seq__23129_24667__$1);{
var G__24669 = cljs.core.chunk_rest.call(null,seq__23129_24667__$1);
var G__24670 = c__20324__auto___24668;
var G__24671 = cljs.core.count.call(null,c__20324__auto___24668);
var G__24672 = 0;
seq__23129_24657 = G__24669;
chunk__23130_24658 = G__24670;
count__23131_24659 = G__24671;
i__23132_24660 = G__24672;
continue;
}
} else
{var arg__21743__auto___24673 = cljs.core.first.call(null,seq__23129_24667__$1);a__21742__auto__.push(arg__21743__auto___24673);
{
var G__24674 = cljs.core.next.call(null,seq__23129_24667__$1);
var G__24675 = null;
var G__24676 = 0;
var G__24677 = 0;
seq__23129_24657 = G__24674;
chunk__23130_24658 = G__24675;
count__23131_24659 = G__24676;
i__23132_24660 = G__24677;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__21742__auto__);
};
var h5 = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__21741__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__24678){
var args__21741__auto__ = cljs.core.seq(arglist__24678);
return h5__delegate(args__21741__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23137_24679 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23138_24680 = null;var count__23139_24681 = 0;var i__23140_24682 = 0;while(true){
if((i__23140_24682 < count__23139_24681))
{var arg__21743__auto___24683 = cljs.core._nth.call(null,chunk__23138_24680,i__23140_24682);a__21742__auto__.push(arg__21743__auto___24683);
{
var G__24684 = seq__23137_24679;
var G__24685 = chunk__23138_24680;
var G__24686 = count__23139_24681;
var G__24687 = (i__23140_24682 + 1);
seq__23137_24679 = G__24684;
chunk__23138_24680 = G__24685;
count__23139_24681 = G__24686;
i__23140_24682 = G__24687;
continue;
}
} else
{var temp__4092__auto___24688 = cljs.core.seq.call(null,seq__23137_24679);if(temp__4092__auto___24688)
{var seq__23137_24689__$1 = temp__4092__auto___24688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23137_24689__$1))
{var c__20324__auto___24690 = cljs.core.chunk_first.call(null,seq__23137_24689__$1);{
var G__24691 = cljs.core.chunk_rest.call(null,seq__23137_24689__$1);
var G__24692 = c__20324__auto___24690;
var G__24693 = cljs.core.count.call(null,c__20324__auto___24690);
var G__24694 = 0;
seq__23137_24679 = G__24691;
chunk__23138_24680 = G__24692;
count__23139_24681 = G__24693;
i__23140_24682 = G__24694;
continue;
}
} else
{var arg__21743__auto___24695 = cljs.core.first.call(null,seq__23137_24689__$1);a__21742__auto__.push(arg__21743__auto___24695);
{
var G__24696 = cljs.core.next.call(null,seq__23137_24689__$1);
var G__24697 = null;
var G__24698 = 0;
var G__24699 = 0;
seq__23137_24679 = G__24696;
chunk__23138_24680 = G__24697;
count__23139_24681 = G__24698;
i__23140_24682 = G__24699;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__21742__auto__);
};
var h6 = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__21741__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__24700){
var args__21741__auto__ = cljs.core.seq(arglist__24700);
return h6__delegate(args__21741__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23145_24701 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23146_24702 = null;var count__23147_24703 = 0;var i__23148_24704 = 0;while(true){
if((i__23148_24704 < count__23147_24703))
{var arg__21743__auto___24705 = cljs.core._nth.call(null,chunk__23146_24702,i__23148_24704);a__21742__auto__.push(arg__21743__auto___24705);
{
var G__24706 = seq__23145_24701;
var G__24707 = chunk__23146_24702;
var G__24708 = count__23147_24703;
var G__24709 = (i__23148_24704 + 1);
seq__23145_24701 = G__24706;
chunk__23146_24702 = G__24707;
count__23147_24703 = G__24708;
i__23148_24704 = G__24709;
continue;
}
} else
{var temp__4092__auto___24710 = cljs.core.seq.call(null,seq__23145_24701);if(temp__4092__auto___24710)
{var seq__23145_24711__$1 = temp__4092__auto___24710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23145_24711__$1))
{var c__20324__auto___24712 = cljs.core.chunk_first.call(null,seq__23145_24711__$1);{
var G__24713 = cljs.core.chunk_rest.call(null,seq__23145_24711__$1);
var G__24714 = c__20324__auto___24712;
var G__24715 = cljs.core.count.call(null,c__20324__auto___24712);
var G__24716 = 0;
seq__23145_24701 = G__24713;
chunk__23146_24702 = G__24714;
count__23147_24703 = G__24715;
i__23148_24704 = G__24716;
continue;
}
} else
{var arg__21743__auto___24717 = cljs.core.first.call(null,seq__23145_24711__$1);a__21742__auto__.push(arg__21743__auto___24717);
{
var G__24718 = cljs.core.next.call(null,seq__23145_24711__$1);
var G__24719 = null;
var G__24720 = 0;
var G__24721 = 0;
seq__23145_24701 = G__24718;
chunk__23146_24702 = G__24719;
count__23147_24703 = G__24720;
i__23148_24704 = G__24721;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__21742__auto__);
};
var head = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__21741__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__24722){
var args__21741__auto__ = cljs.core.seq(arglist__24722);
return head__delegate(args__21741__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23153_24723 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23154_24724 = null;var count__23155_24725 = 0;var i__23156_24726 = 0;while(true){
if((i__23156_24726 < count__23155_24725))
{var arg__21743__auto___24727 = cljs.core._nth.call(null,chunk__23154_24724,i__23156_24726);a__21742__auto__.push(arg__21743__auto___24727);
{
var G__24728 = seq__23153_24723;
var G__24729 = chunk__23154_24724;
var G__24730 = count__23155_24725;
var G__24731 = (i__23156_24726 + 1);
seq__23153_24723 = G__24728;
chunk__23154_24724 = G__24729;
count__23155_24725 = G__24730;
i__23156_24726 = G__24731;
continue;
}
} else
{var temp__4092__auto___24732 = cljs.core.seq.call(null,seq__23153_24723);if(temp__4092__auto___24732)
{var seq__23153_24733__$1 = temp__4092__auto___24732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23153_24733__$1))
{var c__20324__auto___24734 = cljs.core.chunk_first.call(null,seq__23153_24733__$1);{
var G__24735 = cljs.core.chunk_rest.call(null,seq__23153_24733__$1);
var G__24736 = c__20324__auto___24734;
var G__24737 = cljs.core.count.call(null,c__20324__auto___24734);
var G__24738 = 0;
seq__23153_24723 = G__24735;
chunk__23154_24724 = G__24736;
count__23155_24725 = G__24737;
i__23156_24726 = G__24738;
continue;
}
} else
{var arg__21743__auto___24739 = cljs.core.first.call(null,seq__23153_24733__$1);a__21742__auto__.push(arg__21743__auto___24739);
{
var G__24740 = cljs.core.next.call(null,seq__23153_24733__$1);
var G__24741 = null;
var G__24742 = 0;
var G__24743 = 0;
seq__23153_24723 = G__24740;
chunk__23154_24724 = G__24741;
count__23155_24725 = G__24742;
i__23156_24726 = G__24743;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__21742__auto__);
};
var header = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__21741__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__24744){
var args__21741__auto__ = cljs.core.seq(arglist__24744);
return header__delegate(args__21741__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23161_24745 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23162_24746 = null;var count__23163_24747 = 0;var i__23164_24748 = 0;while(true){
if((i__23164_24748 < count__23163_24747))
{var arg__21743__auto___24749 = cljs.core._nth.call(null,chunk__23162_24746,i__23164_24748);a__21742__auto__.push(arg__21743__auto___24749);
{
var G__24750 = seq__23161_24745;
var G__24751 = chunk__23162_24746;
var G__24752 = count__23163_24747;
var G__24753 = (i__23164_24748 + 1);
seq__23161_24745 = G__24750;
chunk__23162_24746 = G__24751;
count__23163_24747 = G__24752;
i__23164_24748 = G__24753;
continue;
}
} else
{var temp__4092__auto___24754 = cljs.core.seq.call(null,seq__23161_24745);if(temp__4092__auto___24754)
{var seq__23161_24755__$1 = temp__4092__auto___24754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23161_24755__$1))
{var c__20324__auto___24756 = cljs.core.chunk_first.call(null,seq__23161_24755__$1);{
var G__24757 = cljs.core.chunk_rest.call(null,seq__23161_24755__$1);
var G__24758 = c__20324__auto___24756;
var G__24759 = cljs.core.count.call(null,c__20324__auto___24756);
var G__24760 = 0;
seq__23161_24745 = G__24757;
chunk__23162_24746 = G__24758;
count__23163_24747 = G__24759;
i__23164_24748 = G__24760;
continue;
}
} else
{var arg__21743__auto___24761 = cljs.core.first.call(null,seq__23161_24755__$1);a__21742__auto__.push(arg__21743__auto___24761);
{
var G__24762 = cljs.core.next.call(null,seq__23161_24755__$1);
var G__24763 = null;
var G__24764 = 0;
var G__24765 = 0;
seq__23161_24745 = G__24762;
chunk__23162_24746 = G__24763;
count__23163_24747 = G__24764;
i__23164_24748 = G__24765;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__21742__auto__);
};
var hr = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__21741__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__24766){
var args__21741__auto__ = cljs.core.seq(arglist__24766);
return hr__delegate(args__21741__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23169_24767 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23170_24768 = null;var count__23171_24769 = 0;var i__23172_24770 = 0;while(true){
if((i__23172_24770 < count__23171_24769))
{var arg__21743__auto___24771 = cljs.core._nth.call(null,chunk__23170_24768,i__23172_24770);a__21742__auto__.push(arg__21743__auto___24771);
{
var G__24772 = seq__23169_24767;
var G__24773 = chunk__23170_24768;
var G__24774 = count__23171_24769;
var G__24775 = (i__23172_24770 + 1);
seq__23169_24767 = G__24772;
chunk__23170_24768 = G__24773;
count__23171_24769 = G__24774;
i__23172_24770 = G__24775;
continue;
}
} else
{var temp__4092__auto___24776 = cljs.core.seq.call(null,seq__23169_24767);if(temp__4092__auto___24776)
{var seq__23169_24777__$1 = temp__4092__auto___24776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23169_24777__$1))
{var c__20324__auto___24778 = cljs.core.chunk_first.call(null,seq__23169_24777__$1);{
var G__24779 = cljs.core.chunk_rest.call(null,seq__23169_24777__$1);
var G__24780 = c__20324__auto___24778;
var G__24781 = cljs.core.count.call(null,c__20324__auto___24778);
var G__24782 = 0;
seq__23169_24767 = G__24779;
chunk__23170_24768 = G__24780;
count__23171_24769 = G__24781;
i__23172_24770 = G__24782;
continue;
}
} else
{var arg__21743__auto___24783 = cljs.core.first.call(null,seq__23169_24777__$1);a__21742__auto__.push(arg__21743__auto___24783);
{
var G__24784 = cljs.core.next.call(null,seq__23169_24777__$1);
var G__24785 = null;
var G__24786 = 0;
var G__24787 = 0;
seq__23169_24767 = G__24784;
chunk__23170_24768 = G__24785;
count__23171_24769 = G__24786;
i__23172_24770 = G__24787;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__21742__auto__);
};
var html = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__21741__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__24788){
var args__21741__auto__ = cljs.core.seq(arglist__24788);
return html__delegate(args__21741__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23177_24789 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23178_24790 = null;var count__23179_24791 = 0;var i__23180_24792 = 0;while(true){
if((i__23180_24792 < count__23179_24791))
{var arg__21743__auto___24793 = cljs.core._nth.call(null,chunk__23178_24790,i__23180_24792);a__21742__auto__.push(arg__21743__auto___24793);
{
var G__24794 = seq__23177_24789;
var G__24795 = chunk__23178_24790;
var G__24796 = count__23179_24791;
var G__24797 = (i__23180_24792 + 1);
seq__23177_24789 = G__24794;
chunk__23178_24790 = G__24795;
count__23179_24791 = G__24796;
i__23180_24792 = G__24797;
continue;
}
} else
{var temp__4092__auto___24798 = cljs.core.seq.call(null,seq__23177_24789);if(temp__4092__auto___24798)
{var seq__23177_24799__$1 = temp__4092__auto___24798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23177_24799__$1))
{var c__20324__auto___24800 = cljs.core.chunk_first.call(null,seq__23177_24799__$1);{
var G__24801 = cljs.core.chunk_rest.call(null,seq__23177_24799__$1);
var G__24802 = c__20324__auto___24800;
var G__24803 = cljs.core.count.call(null,c__20324__auto___24800);
var G__24804 = 0;
seq__23177_24789 = G__24801;
chunk__23178_24790 = G__24802;
count__23179_24791 = G__24803;
i__23180_24792 = G__24804;
continue;
}
} else
{var arg__21743__auto___24805 = cljs.core.first.call(null,seq__23177_24799__$1);a__21742__auto__.push(arg__21743__auto___24805);
{
var G__24806 = cljs.core.next.call(null,seq__23177_24799__$1);
var G__24807 = null;
var G__24808 = 0;
var G__24809 = 0;
seq__23177_24789 = G__24806;
chunk__23178_24790 = G__24807;
count__23179_24791 = G__24808;
i__23180_24792 = G__24809;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__21742__auto__);
};
var i = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__21741__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__24810){
var args__21741__auto__ = cljs.core.seq(arglist__24810);
return i__delegate(args__21741__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23185_24811 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23186_24812 = null;var count__23187_24813 = 0;var i__23188_24814 = 0;while(true){
if((i__23188_24814 < count__23187_24813))
{var arg__21743__auto___24815 = cljs.core._nth.call(null,chunk__23186_24812,i__23188_24814);a__21742__auto__.push(arg__21743__auto___24815);
{
var G__24816 = seq__23185_24811;
var G__24817 = chunk__23186_24812;
var G__24818 = count__23187_24813;
var G__24819 = (i__23188_24814 + 1);
seq__23185_24811 = G__24816;
chunk__23186_24812 = G__24817;
count__23187_24813 = G__24818;
i__23188_24814 = G__24819;
continue;
}
} else
{var temp__4092__auto___24820 = cljs.core.seq.call(null,seq__23185_24811);if(temp__4092__auto___24820)
{var seq__23185_24821__$1 = temp__4092__auto___24820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23185_24821__$1))
{var c__20324__auto___24822 = cljs.core.chunk_first.call(null,seq__23185_24821__$1);{
var G__24823 = cljs.core.chunk_rest.call(null,seq__23185_24821__$1);
var G__24824 = c__20324__auto___24822;
var G__24825 = cljs.core.count.call(null,c__20324__auto___24822);
var G__24826 = 0;
seq__23185_24811 = G__24823;
chunk__23186_24812 = G__24824;
count__23187_24813 = G__24825;
i__23188_24814 = G__24826;
continue;
}
} else
{var arg__21743__auto___24827 = cljs.core.first.call(null,seq__23185_24821__$1);a__21742__auto__.push(arg__21743__auto___24827);
{
var G__24828 = cljs.core.next.call(null,seq__23185_24821__$1);
var G__24829 = null;
var G__24830 = 0;
var G__24831 = 0;
seq__23185_24811 = G__24828;
chunk__23186_24812 = G__24829;
count__23187_24813 = G__24830;
i__23188_24814 = G__24831;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__21742__auto__);
};
var iframe = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__21741__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__24832){
var args__21741__auto__ = cljs.core.seq(arglist__24832);
return iframe__delegate(args__21741__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23193_24833 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23194_24834 = null;var count__23195_24835 = 0;var i__23196_24836 = 0;while(true){
if((i__23196_24836 < count__23195_24835))
{var arg__21743__auto___24837 = cljs.core._nth.call(null,chunk__23194_24834,i__23196_24836);a__21742__auto__.push(arg__21743__auto___24837);
{
var G__24838 = seq__23193_24833;
var G__24839 = chunk__23194_24834;
var G__24840 = count__23195_24835;
var G__24841 = (i__23196_24836 + 1);
seq__23193_24833 = G__24838;
chunk__23194_24834 = G__24839;
count__23195_24835 = G__24840;
i__23196_24836 = G__24841;
continue;
}
} else
{var temp__4092__auto___24842 = cljs.core.seq.call(null,seq__23193_24833);if(temp__4092__auto___24842)
{var seq__23193_24843__$1 = temp__4092__auto___24842;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23193_24843__$1))
{var c__20324__auto___24844 = cljs.core.chunk_first.call(null,seq__23193_24843__$1);{
var G__24845 = cljs.core.chunk_rest.call(null,seq__23193_24843__$1);
var G__24846 = c__20324__auto___24844;
var G__24847 = cljs.core.count.call(null,c__20324__auto___24844);
var G__24848 = 0;
seq__23193_24833 = G__24845;
chunk__23194_24834 = G__24846;
count__23195_24835 = G__24847;
i__23196_24836 = G__24848;
continue;
}
} else
{var arg__21743__auto___24849 = cljs.core.first.call(null,seq__23193_24843__$1);a__21742__auto__.push(arg__21743__auto___24849);
{
var G__24850 = cljs.core.next.call(null,seq__23193_24843__$1);
var G__24851 = null;
var G__24852 = 0;
var G__24853 = 0;
seq__23193_24833 = G__24850;
chunk__23194_24834 = G__24851;
count__23195_24835 = G__24852;
i__23196_24836 = G__24853;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__21742__auto__);
};
var img = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__21741__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__24854){
var args__21741__auto__ = cljs.core.seq(arglist__24854);
return img__delegate(args__21741__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23201_24855 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23202_24856 = null;var count__23203_24857 = 0;var i__23204_24858 = 0;while(true){
if((i__23204_24858 < count__23203_24857))
{var arg__21743__auto___24859 = cljs.core._nth.call(null,chunk__23202_24856,i__23204_24858);a__21742__auto__.push(arg__21743__auto___24859);
{
var G__24860 = seq__23201_24855;
var G__24861 = chunk__23202_24856;
var G__24862 = count__23203_24857;
var G__24863 = (i__23204_24858 + 1);
seq__23201_24855 = G__24860;
chunk__23202_24856 = G__24861;
count__23203_24857 = G__24862;
i__23204_24858 = G__24863;
continue;
}
} else
{var temp__4092__auto___24864 = cljs.core.seq.call(null,seq__23201_24855);if(temp__4092__auto___24864)
{var seq__23201_24865__$1 = temp__4092__auto___24864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23201_24865__$1))
{var c__20324__auto___24866 = cljs.core.chunk_first.call(null,seq__23201_24865__$1);{
var G__24867 = cljs.core.chunk_rest.call(null,seq__23201_24865__$1);
var G__24868 = c__20324__auto___24866;
var G__24869 = cljs.core.count.call(null,c__20324__auto___24866);
var G__24870 = 0;
seq__23201_24855 = G__24867;
chunk__23202_24856 = G__24868;
count__23203_24857 = G__24869;
i__23204_24858 = G__24870;
continue;
}
} else
{var arg__21743__auto___24871 = cljs.core.first.call(null,seq__23201_24865__$1);a__21742__auto__.push(arg__21743__auto___24871);
{
var G__24872 = cljs.core.next.call(null,seq__23201_24865__$1);
var G__24873 = null;
var G__24874 = 0;
var G__24875 = 0;
seq__23201_24855 = G__24872;
chunk__23202_24856 = G__24873;
count__23203_24857 = G__24874;
i__23204_24858 = G__24875;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__21742__auto__);
};
var input = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__21741__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__24876){
var args__21741__auto__ = cljs.core.seq(arglist__24876);
return input__delegate(args__21741__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23209_24877 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23210_24878 = null;var count__23211_24879 = 0;var i__23212_24880 = 0;while(true){
if((i__23212_24880 < count__23211_24879))
{var arg__21743__auto___24881 = cljs.core._nth.call(null,chunk__23210_24878,i__23212_24880);a__21742__auto__.push(arg__21743__auto___24881);
{
var G__24882 = seq__23209_24877;
var G__24883 = chunk__23210_24878;
var G__24884 = count__23211_24879;
var G__24885 = (i__23212_24880 + 1);
seq__23209_24877 = G__24882;
chunk__23210_24878 = G__24883;
count__23211_24879 = G__24884;
i__23212_24880 = G__24885;
continue;
}
} else
{var temp__4092__auto___24886 = cljs.core.seq.call(null,seq__23209_24877);if(temp__4092__auto___24886)
{var seq__23209_24887__$1 = temp__4092__auto___24886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23209_24887__$1))
{var c__20324__auto___24888 = cljs.core.chunk_first.call(null,seq__23209_24887__$1);{
var G__24889 = cljs.core.chunk_rest.call(null,seq__23209_24887__$1);
var G__24890 = c__20324__auto___24888;
var G__24891 = cljs.core.count.call(null,c__20324__auto___24888);
var G__24892 = 0;
seq__23209_24877 = G__24889;
chunk__23210_24878 = G__24890;
count__23211_24879 = G__24891;
i__23212_24880 = G__24892;
continue;
}
} else
{var arg__21743__auto___24893 = cljs.core.first.call(null,seq__23209_24887__$1);a__21742__auto__.push(arg__21743__auto___24893);
{
var G__24894 = cljs.core.next.call(null,seq__23209_24887__$1);
var G__24895 = null;
var G__24896 = 0;
var G__24897 = 0;
seq__23209_24877 = G__24894;
chunk__23210_24878 = G__24895;
count__23211_24879 = G__24896;
i__23212_24880 = G__24897;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__21742__auto__);
};
var ins = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__21741__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__24898){
var args__21741__auto__ = cljs.core.seq(arglist__24898);
return ins__delegate(args__21741__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23217_24899 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23218_24900 = null;var count__23219_24901 = 0;var i__23220_24902 = 0;while(true){
if((i__23220_24902 < count__23219_24901))
{var arg__21743__auto___24903 = cljs.core._nth.call(null,chunk__23218_24900,i__23220_24902);a__21742__auto__.push(arg__21743__auto___24903);
{
var G__24904 = seq__23217_24899;
var G__24905 = chunk__23218_24900;
var G__24906 = count__23219_24901;
var G__24907 = (i__23220_24902 + 1);
seq__23217_24899 = G__24904;
chunk__23218_24900 = G__24905;
count__23219_24901 = G__24906;
i__23220_24902 = G__24907;
continue;
}
} else
{var temp__4092__auto___24908 = cljs.core.seq.call(null,seq__23217_24899);if(temp__4092__auto___24908)
{var seq__23217_24909__$1 = temp__4092__auto___24908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23217_24909__$1))
{var c__20324__auto___24910 = cljs.core.chunk_first.call(null,seq__23217_24909__$1);{
var G__24911 = cljs.core.chunk_rest.call(null,seq__23217_24909__$1);
var G__24912 = c__20324__auto___24910;
var G__24913 = cljs.core.count.call(null,c__20324__auto___24910);
var G__24914 = 0;
seq__23217_24899 = G__24911;
chunk__23218_24900 = G__24912;
count__23219_24901 = G__24913;
i__23220_24902 = G__24914;
continue;
}
} else
{var arg__21743__auto___24915 = cljs.core.first.call(null,seq__23217_24909__$1);a__21742__auto__.push(arg__21743__auto___24915);
{
var G__24916 = cljs.core.next.call(null,seq__23217_24909__$1);
var G__24917 = null;
var G__24918 = 0;
var G__24919 = 0;
seq__23217_24899 = G__24916;
chunk__23218_24900 = G__24917;
count__23219_24901 = G__24918;
i__23220_24902 = G__24919;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__21742__auto__);
};
var kbd = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__21741__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__24920){
var args__21741__auto__ = cljs.core.seq(arglist__24920);
return kbd__delegate(args__21741__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23225_24921 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23226_24922 = null;var count__23227_24923 = 0;var i__23228_24924 = 0;while(true){
if((i__23228_24924 < count__23227_24923))
{var arg__21743__auto___24925 = cljs.core._nth.call(null,chunk__23226_24922,i__23228_24924);a__21742__auto__.push(arg__21743__auto___24925);
{
var G__24926 = seq__23225_24921;
var G__24927 = chunk__23226_24922;
var G__24928 = count__23227_24923;
var G__24929 = (i__23228_24924 + 1);
seq__23225_24921 = G__24926;
chunk__23226_24922 = G__24927;
count__23227_24923 = G__24928;
i__23228_24924 = G__24929;
continue;
}
} else
{var temp__4092__auto___24930 = cljs.core.seq.call(null,seq__23225_24921);if(temp__4092__auto___24930)
{var seq__23225_24931__$1 = temp__4092__auto___24930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23225_24931__$1))
{var c__20324__auto___24932 = cljs.core.chunk_first.call(null,seq__23225_24931__$1);{
var G__24933 = cljs.core.chunk_rest.call(null,seq__23225_24931__$1);
var G__24934 = c__20324__auto___24932;
var G__24935 = cljs.core.count.call(null,c__20324__auto___24932);
var G__24936 = 0;
seq__23225_24921 = G__24933;
chunk__23226_24922 = G__24934;
count__23227_24923 = G__24935;
i__23228_24924 = G__24936;
continue;
}
} else
{var arg__21743__auto___24937 = cljs.core.first.call(null,seq__23225_24931__$1);a__21742__auto__.push(arg__21743__auto___24937);
{
var G__24938 = cljs.core.next.call(null,seq__23225_24931__$1);
var G__24939 = null;
var G__24940 = 0;
var G__24941 = 0;
seq__23225_24921 = G__24938;
chunk__23226_24922 = G__24939;
count__23227_24923 = G__24940;
i__23228_24924 = G__24941;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__21742__auto__);
};
var keygen = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__21741__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__24942){
var args__21741__auto__ = cljs.core.seq(arglist__24942);
return keygen__delegate(args__21741__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23233_24943 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23234_24944 = null;var count__23235_24945 = 0;var i__23236_24946 = 0;while(true){
if((i__23236_24946 < count__23235_24945))
{var arg__21743__auto___24947 = cljs.core._nth.call(null,chunk__23234_24944,i__23236_24946);a__21742__auto__.push(arg__21743__auto___24947);
{
var G__24948 = seq__23233_24943;
var G__24949 = chunk__23234_24944;
var G__24950 = count__23235_24945;
var G__24951 = (i__23236_24946 + 1);
seq__23233_24943 = G__24948;
chunk__23234_24944 = G__24949;
count__23235_24945 = G__24950;
i__23236_24946 = G__24951;
continue;
}
} else
{var temp__4092__auto___24952 = cljs.core.seq.call(null,seq__23233_24943);if(temp__4092__auto___24952)
{var seq__23233_24953__$1 = temp__4092__auto___24952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23233_24953__$1))
{var c__20324__auto___24954 = cljs.core.chunk_first.call(null,seq__23233_24953__$1);{
var G__24955 = cljs.core.chunk_rest.call(null,seq__23233_24953__$1);
var G__24956 = c__20324__auto___24954;
var G__24957 = cljs.core.count.call(null,c__20324__auto___24954);
var G__24958 = 0;
seq__23233_24943 = G__24955;
chunk__23234_24944 = G__24956;
count__23235_24945 = G__24957;
i__23236_24946 = G__24958;
continue;
}
} else
{var arg__21743__auto___24959 = cljs.core.first.call(null,seq__23233_24953__$1);a__21742__auto__.push(arg__21743__auto___24959);
{
var G__24960 = cljs.core.next.call(null,seq__23233_24953__$1);
var G__24961 = null;
var G__24962 = 0;
var G__24963 = 0;
seq__23233_24943 = G__24960;
chunk__23234_24944 = G__24961;
count__23235_24945 = G__24962;
i__23236_24946 = G__24963;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__21742__auto__);
};
var label = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__21741__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__24964){
var args__21741__auto__ = cljs.core.seq(arglist__24964);
return label__delegate(args__21741__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23241_24965 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23242_24966 = null;var count__23243_24967 = 0;var i__23244_24968 = 0;while(true){
if((i__23244_24968 < count__23243_24967))
{var arg__21743__auto___24969 = cljs.core._nth.call(null,chunk__23242_24966,i__23244_24968);a__21742__auto__.push(arg__21743__auto___24969);
{
var G__24970 = seq__23241_24965;
var G__24971 = chunk__23242_24966;
var G__24972 = count__23243_24967;
var G__24973 = (i__23244_24968 + 1);
seq__23241_24965 = G__24970;
chunk__23242_24966 = G__24971;
count__23243_24967 = G__24972;
i__23244_24968 = G__24973;
continue;
}
} else
{var temp__4092__auto___24974 = cljs.core.seq.call(null,seq__23241_24965);if(temp__4092__auto___24974)
{var seq__23241_24975__$1 = temp__4092__auto___24974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23241_24975__$1))
{var c__20324__auto___24976 = cljs.core.chunk_first.call(null,seq__23241_24975__$1);{
var G__24977 = cljs.core.chunk_rest.call(null,seq__23241_24975__$1);
var G__24978 = c__20324__auto___24976;
var G__24979 = cljs.core.count.call(null,c__20324__auto___24976);
var G__24980 = 0;
seq__23241_24965 = G__24977;
chunk__23242_24966 = G__24978;
count__23243_24967 = G__24979;
i__23244_24968 = G__24980;
continue;
}
} else
{var arg__21743__auto___24981 = cljs.core.first.call(null,seq__23241_24975__$1);a__21742__auto__.push(arg__21743__auto___24981);
{
var G__24982 = cljs.core.next.call(null,seq__23241_24975__$1);
var G__24983 = null;
var G__24984 = 0;
var G__24985 = 0;
seq__23241_24965 = G__24982;
chunk__23242_24966 = G__24983;
count__23243_24967 = G__24984;
i__23244_24968 = G__24985;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__21742__auto__);
};
var legend = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__21741__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__24986){
var args__21741__auto__ = cljs.core.seq(arglist__24986);
return legend__delegate(args__21741__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23249_24987 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23250_24988 = null;var count__23251_24989 = 0;var i__23252_24990 = 0;while(true){
if((i__23252_24990 < count__23251_24989))
{var arg__21743__auto___24991 = cljs.core._nth.call(null,chunk__23250_24988,i__23252_24990);a__21742__auto__.push(arg__21743__auto___24991);
{
var G__24992 = seq__23249_24987;
var G__24993 = chunk__23250_24988;
var G__24994 = count__23251_24989;
var G__24995 = (i__23252_24990 + 1);
seq__23249_24987 = G__24992;
chunk__23250_24988 = G__24993;
count__23251_24989 = G__24994;
i__23252_24990 = G__24995;
continue;
}
} else
{var temp__4092__auto___24996 = cljs.core.seq.call(null,seq__23249_24987);if(temp__4092__auto___24996)
{var seq__23249_24997__$1 = temp__4092__auto___24996;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23249_24997__$1))
{var c__20324__auto___24998 = cljs.core.chunk_first.call(null,seq__23249_24997__$1);{
var G__24999 = cljs.core.chunk_rest.call(null,seq__23249_24997__$1);
var G__25000 = c__20324__auto___24998;
var G__25001 = cljs.core.count.call(null,c__20324__auto___24998);
var G__25002 = 0;
seq__23249_24987 = G__24999;
chunk__23250_24988 = G__25000;
count__23251_24989 = G__25001;
i__23252_24990 = G__25002;
continue;
}
} else
{var arg__21743__auto___25003 = cljs.core.first.call(null,seq__23249_24997__$1);a__21742__auto__.push(arg__21743__auto___25003);
{
var G__25004 = cljs.core.next.call(null,seq__23249_24997__$1);
var G__25005 = null;
var G__25006 = 0;
var G__25007 = 0;
seq__23249_24987 = G__25004;
chunk__23250_24988 = G__25005;
count__23251_24989 = G__25006;
i__23252_24990 = G__25007;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__21742__auto__);
};
var li = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__21741__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__25008){
var args__21741__auto__ = cljs.core.seq(arglist__25008);
return li__delegate(args__21741__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23257_25009 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23258_25010 = null;var count__23259_25011 = 0;var i__23260_25012 = 0;while(true){
if((i__23260_25012 < count__23259_25011))
{var arg__21743__auto___25013 = cljs.core._nth.call(null,chunk__23258_25010,i__23260_25012);a__21742__auto__.push(arg__21743__auto___25013);
{
var G__25014 = seq__23257_25009;
var G__25015 = chunk__23258_25010;
var G__25016 = count__23259_25011;
var G__25017 = (i__23260_25012 + 1);
seq__23257_25009 = G__25014;
chunk__23258_25010 = G__25015;
count__23259_25011 = G__25016;
i__23260_25012 = G__25017;
continue;
}
} else
{var temp__4092__auto___25018 = cljs.core.seq.call(null,seq__23257_25009);if(temp__4092__auto___25018)
{var seq__23257_25019__$1 = temp__4092__auto___25018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23257_25019__$1))
{var c__20324__auto___25020 = cljs.core.chunk_first.call(null,seq__23257_25019__$1);{
var G__25021 = cljs.core.chunk_rest.call(null,seq__23257_25019__$1);
var G__25022 = c__20324__auto___25020;
var G__25023 = cljs.core.count.call(null,c__20324__auto___25020);
var G__25024 = 0;
seq__23257_25009 = G__25021;
chunk__23258_25010 = G__25022;
count__23259_25011 = G__25023;
i__23260_25012 = G__25024;
continue;
}
} else
{var arg__21743__auto___25025 = cljs.core.first.call(null,seq__23257_25019__$1);a__21742__auto__.push(arg__21743__auto___25025);
{
var G__25026 = cljs.core.next.call(null,seq__23257_25019__$1);
var G__25027 = null;
var G__25028 = 0;
var G__25029 = 0;
seq__23257_25009 = G__25026;
chunk__23258_25010 = G__25027;
count__23259_25011 = G__25028;
i__23260_25012 = G__25029;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__21742__auto__);
};
var link = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__21741__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__25030){
var args__21741__auto__ = cljs.core.seq(arglist__25030);
return link__delegate(args__21741__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23265_25031 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23266_25032 = null;var count__23267_25033 = 0;var i__23268_25034 = 0;while(true){
if((i__23268_25034 < count__23267_25033))
{var arg__21743__auto___25035 = cljs.core._nth.call(null,chunk__23266_25032,i__23268_25034);a__21742__auto__.push(arg__21743__auto___25035);
{
var G__25036 = seq__23265_25031;
var G__25037 = chunk__23266_25032;
var G__25038 = count__23267_25033;
var G__25039 = (i__23268_25034 + 1);
seq__23265_25031 = G__25036;
chunk__23266_25032 = G__25037;
count__23267_25033 = G__25038;
i__23268_25034 = G__25039;
continue;
}
} else
{var temp__4092__auto___25040 = cljs.core.seq.call(null,seq__23265_25031);if(temp__4092__auto___25040)
{var seq__23265_25041__$1 = temp__4092__auto___25040;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23265_25041__$1))
{var c__20324__auto___25042 = cljs.core.chunk_first.call(null,seq__23265_25041__$1);{
var G__25043 = cljs.core.chunk_rest.call(null,seq__23265_25041__$1);
var G__25044 = c__20324__auto___25042;
var G__25045 = cljs.core.count.call(null,c__20324__auto___25042);
var G__25046 = 0;
seq__23265_25031 = G__25043;
chunk__23266_25032 = G__25044;
count__23267_25033 = G__25045;
i__23268_25034 = G__25046;
continue;
}
} else
{var arg__21743__auto___25047 = cljs.core.first.call(null,seq__23265_25041__$1);a__21742__auto__.push(arg__21743__auto___25047);
{
var G__25048 = cljs.core.next.call(null,seq__23265_25041__$1);
var G__25049 = null;
var G__25050 = 0;
var G__25051 = 0;
seq__23265_25031 = G__25048;
chunk__23266_25032 = G__25049;
count__23267_25033 = G__25050;
i__23268_25034 = G__25051;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__21742__auto__);
};
var main = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__21741__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__25052){
var args__21741__auto__ = cljs.core.seq(arglist__25052);
return main__delegate(args__21741__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23273_25053 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23274_25054 = null;var count__23275_25055 = 0;var i__23276_25056 = 0;while(true){
if((i__23276_25056 < count__23275_25055))
{var arg__21743__auto___25057 = cljs.core._nth.call(null,chunk__23274_25054,i__23276_25056);a__21742__auto__.push(arg__21743__auto___25057);
{
var G__25058 = seq__23273_25053;
var G__25059 = chunk__23274_25054;
var G__25060 = count__23275_25055;
var G__25061 = (i__23276_25056 + 1);
seq__23273_25053 = G__25058;
chunk__23274_25054 = G__25059;
count__23275_25055 = G__25060;
i__23276_25056 = G__25061;
continue;
}
} else
{var temp__4092__auto___25062 = cljs.core.seq.call(null,seq__23273_25053);if(temp__4092__auto___25062)
{var seq__23273_25063__$1 = temp__4092__auto___25062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23273_25063__$1))
{var c__20324__auto___25064 = cljs.core.chunk_first.call(null,seq__23273_25063__$1);{
var G__25065 = cljs.core.chunk_rest.call(null,seq__23273_25063__$1);
var G__25066 = c__20324__auto___25064;
var G__25067 = cljs.core.count.call(null,c__20324__auto___25064);
var G__25068 = 0;
seq__23273_25053 = G__25065;
chunk__23274_25054 = G__25066;
count__23275_25055 = G__25067;
i__23276_25056 = G__25068;
continue;
}
} else
{var arg__21743__auto___25069 = cljs.core.first.call(null,seq__23273_25063__$1);a__21742__auto__.push(arg__21743__auto___25069);
{
var G__25070 = cljs.core.next.call(null,seq__23273_25063__$1);
var G__25071 = null;
var G__25072 = 0;
var G__25073 = 0;
seq__23273_25053 = G__25070;
chunk__23274_25054 = G__25071;
count__23275_25055 = G__25072;
i__23276_25056 = G__25073;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__21742__auto__);
};
var map = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__21741__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__25074){
var args__21741__auto__ = cljs.core.seq(arglist__25074);
return map__delegate(args__21741__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23281_25075 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23282_25076 = null;var count__23283_25077 = 0;var i__23284_25078 = 0;while(true){
if((i__23284_25078 < count__23283_25077))
{var arg__21743__auto___25079 = cljs.core._nth.call(null,chunk__23282_25076,i__23284_25078);a__21742__auto__.push(arg__21743__auto___25079);
{
var G__25080 = seq__23281_25075;
var G__25081 = chunk__23282_25076;
var G__25082 = count__23283_25077;
var G__25083 = (i__23284_25078 + 1);
seq__23281_25075 = G__25080;
chunk__23282_25076 = G__25081;
count__23283_25077 = G__25082;
i__23284_25078 = G__25083;
continue;
}
} else
{var temp__4092__auto___25084 = cljs.core.seq.call(null,seq__23281_25075);if(temp__4092__auto___25084)
{var seq__23281_25085__$1 = temp__4092__auto___25084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23281_25085__$1))
{var c__20324__auto___25086 = cljs.core.chunk_first.call(null,seq__23281_25085__$1);{
var G__25087 = cljs.core.chunk_rest.call(null,seq__23281_25085__$1);
var G__25088 = c__20324__auto___25086;
var G__25089 = cljs.core.count.call(null,c__20324__auto___25086);
var G__25090 = 0;
seq__23281_25075 = G__25087;
chunk__23282_25076 = G__25088;
count__23283_25077 = G__25089;
i__23284_25078 = G__25090;
continue;
}
} else
{var arg__21743__auto___25091 = cljs.core.first.call(null,seq__23281_25085__$1);a__21742__auto__.push(arg__21743__auto___25091);
{
var G__25092 = cljs.core.next.call(null,seq__23281_25085__$1);
var G__25093 = null;
var G__25094 = 0;
var G__25095 = 0;
seq__23281_25075 = G__25092;
chunk__23282_25076 = G__25093;
count__23283_25077 = G__25094;
i__23284_25078 = G__25095;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__21742__auto__);
};
var mark = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__21741__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__25096){
var args__21741__auto__ = cljs.core.seq(arglist__25096);
return mark__delegate(args__21741__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23289_25097 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23290_25098 = null;var count__23291_25099 = 0;var i__23292_25100 = 0;while(true){
if((i__23292_25100 < count__23291_25099))
{var arg__21743__auto___25101 = cljs.core._nth.call(null,chunk__23290_25098,i__23292_25100);a__21742__auto__.push(arg__21743__auto___25101);
{
var G__25102 = seq__23289_25097;
var G__25103 = chunk__23290_25098;
var G__25104 = count__23291_25099;
var G__25105 = (i__23292_25100 + 1);
seq__23289_25097 = G__25102;
chunk__23290_25098 = G__25103;
count__23291_25099 = G__25104;
i__23292_25100 = G__25105;
continue;
}
} else
{var temp__4092__auto___25106 = cljs.core.seq.call(null,seq__23289_25097);if(temp__4092__auto___25106)
{var seq__23289_25107__$1 = temp__4092__auto___25106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23289_25107__$1))
{var c__20324__auto___25108 = cljs.core.chunk_first.call(null,seq__23289_25107__$1);{
var G__25109 = cljs.core.chunk_rest.call(null,seq__23289_25107__$1);
var G__25110 = c__20324__auto___25108;
var G__25111 = cljs.core.count.call(null,c__20324__auto___25108);
var G__25112 = 0;
seq__23289_25097 = G__25109;
chunk__23290_25098 = G__25110;
count__23291_25099 = G__25111;
i__23292_25100 = G__25112;
continue;
}
} else
{var arg__21743__auto___25113 = cljs.core.first.call(null,seq__23289_25107__$1);a__21742__auto__.push(arg__21743__auto___25113);
{
var G__25114 = cljs.core.next.call(null,seq__23289_25107__$1);
var G__25115 = null;
var G__25116 = 0;
var G__25117 = 0;
seq__23289_25097 = G__25114;
chunk__23290_25098 = G__25115;
count__23291_25099 = G__25116;
i__23292_25100 = G__25117;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__21742__auto__);
};
var menu = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__21741__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__25118){
var args__21741__auto__ = cljs.core.seq(arglist__25118);
return menu__delegate(args__21741__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23297_25119 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23298_25120 = null;var count__23299_25121 = 0;var i__23300_25122 = 0;while(true){
if((i__23300_25122 < count__23299_25121))
{var arg__21743__auto___25123 = cljs.core._nth.call(null,chunk__23298_25120,i__23300_25122);a__21742__auto__.push(arg__21743__auto___25123);
{
var G__25124 = seq__23297_25119;
var G__25125 = chunk__23298_25120;
var G__25126 = count__23299_25121;
var G__25127 = (i__23300_25122 + 1);
seq__23297_25119 = G__25124;
chunk__23298_25120 = G__25125;
count__23299_25121 = G__25126;
i__23300_25122 = G__25127;
continue;
}
} else
{var temp__4092__auto___25128 = cljs.core.seq.call(null,seq__23297_25119);if(temp__4092__auto___25128)
{var seq__23297_25129__$1 = temp__4092__auto___25128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23297_25129__$1))
{var c__20324__auto___25130 = cljs.core.chunk_first.call(null,seq__23297_25129__$1);{
var G__25131 = cljs.core.chunk_rest.call(null,seq__23297_25129__$1);
var G__25132 = c__20324__auto___25130;
var G__25133 = cljs.core.count.call(null,c__20324__auto___25130);
var G__25134 = 0;
seq__23297_25119 = G__25131;
chunk__23298_25120 = G__25132;
count__23299_25121 = G__25133;
i__23300_25122 = G__25134;
continue;
}
} else
{var arg__21743__auto___25135 = cljs.core.first.call(null,seq__23297_25129__$1);a__21742__auto__.push(arg__21743__auto___25135);
{
var G__25136 = cljs.core.next.call(null,seq__23297_25129__$1);
var G__25137 = null;
var G__25138 = 0;
var G__25139 = 0;
seq__23297_25119 = G__25136;
chunk__23298_25120 = G__25137;
count__23299_25121 = G__25138;
i__23300_25122 = G__25139;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__21742__auto__);
};
var menuitem = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__21741__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__25140){
var args__21741__auto__ = cljs.core.seq(arglist__25140);
return menuitem__delegate(args__21741__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23305_25141 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23306_25142 = null;var count__23307_25143 = 0;var i__23308_25144 = 0;while(true){
if((i__23308_25144 < count__23307_25143))
{var arg__21743__auto___25145 = cljs.core._nth.call(null,chunk__23306_25142,i__23308_25144);a__21742__auto__.push(arg__21743__auto___25145);
{
var G__25146 = seq__23305_25141;
var G__25147 = chunk__23306_25142;
var G__25148 = count__23307_25143;
var G__25149 = (i__23308_25144 + 1);
seq__23305_25141 = G__25146;
chunk__23306_25142 = G__25147;
count__23307_25143 = G__25148;
i__23308_25144 = G__25149;
continue;
}
} else
{var temp__4092__auto___25150 = cljs.core.seq.call(null,seq__23305_25141);if(temp__4092__auto___25150)
{var seq__23305_25151__$1 = temp__4092__auto___25150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23305_25151__$1))
{var c__20324__auto___25152 = cljs.core.chunk_first.call(null,seq__23305_25151__$1);{
var G__25153 = cljs.core.chunk_rest.call(null,seq__23305_25151__$1);
var G__25154 = c__20324__auto___25152;
var G__25155 = cljs.core.count.call(null,c__20324__auto___25152);
var G__25156 = 0;
seq__23305_25141 = G__25153;
chunk__23306_25142 = G__25154;
count__23307_25143 = G__25155;
i__23308_25144 = G__25156;
continue;
}
} else
{var arg__21743__auto___25157 = cljs.core.first.call(null,seq__23305_25151__$1);a__21742__auto__.push(arg__21743__auto___25157);
{
var G__25158 = cljs.core.next.call(null,seq__23305_25151__$1);
var G__25159 = null;
var G__25160 = 0;
var G__25161 = 0;
seq__23305_25141 = G__25158;
chunk__23306_25142 = G__25159;
count__23307_25143 = G__25160;
i__23308_25144 = G__25161;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__21742__auto__);
};
var meta = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__21741__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__25162){
var args__21741__auto__ = cljs.core.seq(arglist__25162);
return meta__delegate(args__21741__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23313_25163 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23314_25164 = null;var count__23315_25165 = 0;var i__23316_25166 = 0;while(true){
if((i__23316_25166 < count__23315_25165))
{var arg__21743__auto___25167 = cljs.core._nth.call(null,chunk__23314_25164,i__23316_25166);a__21742__auto__.push(arg__21743__auto___25167);
{
var G__25168 = seq__23313_25163;
var G__25169 = chunk__23314_25164;
var G__25170 = count__23315_25165;
var G__25171 = (i__23316_25166 + 1);
seq__23313_25163 = G__25168;
chunk__23314_25164 = G__25169;
count__23315_25165 = G__25170;
i__23316_25166 = G__25171;
continue;
}
} else
{var temp__4092__auto___25172 = cljs.core.seq.call(null,seq__23313_25163);if(temp__4092__auto___25172)
{var seq__23313_25173__$1 = temp__4092__auto___25172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23313_25173__$1))
{var c__20324__auto___25174 = cljs.core.chunk_first.call(null,seq__23313_25173__$1);{
var G__25175 = cljs.core.chunk_rest.call(null,seq__23313_25173__$1);
var G__25176 = c__20324__auto___25174;
var G__25177 = cljs.core.count.call(null,c__20324__auto___25174);
var G__25178 = 0;
seq__23313_25163 = G__25175;
chunk__23314_25164 = G__25176;
count__23315_25165 = G__25177;
i__23316_25166 = G__25178;
continue;
}
} else
{var arg__21743__auto___25179 = cljs.core.first.call(null,seq__23313_25173__$1);a__21742__auto__.push(arg__21743__auto___25179);
{
var G__25180 = cljs.core.next.call(null,seq__23313_25173__$1);
var G__25181 = null;
var G__25182 = 0;
var G__25183 = 0;
seq__23313_25163 = G__25180;
chunk__23314_25164 = G__25181;
count__23315_25165 = G__25182;
i__23316_25166 = G__25183;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__21742__auto__);
};
var meter = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__21741__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__25184){
var args__21741__auto__ = cljs.core.seq(arglist__25184);
return meter__delegate(args__21741__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23321_25185 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23322_25186 = null;var count__23323_25187 = 0;var i__23324_25188 = 0;while(true){
if((i__23324_25188 < count__23323_25187))
{var arg__21743__auto___25189 = cljs.core._nth.call(null,chunk__23322_25186,i__23324_25188);a__21742__auto__.push(arg__21743__auto___25189);
{
var G__25190 = seq__23321_25185;
var G__25191 = chunk__23322_25186;
var G__25192 = count__23323_25187;
var G__25193 = (i__23324_25188 + 1);
seq__23321_25185 = G__25190;
chunk__23322_25186 = G__25191;
count__23323_25187 = G__25192;
i__23324_25188 = G__25193;
continue;
}
} else
{var temp__4092__auto___25194 = cljs.core.seq.call(null,seq__23321_25185);if(temp__4092__auto___25194)
{var seq__23321_25195__$1 = temp__4092__auto___25194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23321_25195__$1))
{var c__20324__auto___25196 = cljs.core.chunk_first.call(null,seq__23321_25195__$1);{
var G__25197 = cljs.core.chunk_rest.call(null,seq__23321_25195__$1);
var G__25198 = c__20324__auto___25196;
var G__25199 = cljs.core.count.call(null,c__20324__auto___25196);
var G__25200 = 0;
seq__23321_25185 = G__25197;
chunk__23322_25186 = G__25198;
count__23323_25187 = G__25199;
i__23324_25188 = G__25200;
continue;
}
} else
{var arg__21743__auto___25201 = cljs.core.first.call(null,seq__23321_25195__$1);a__21742__auto__.push(arg__21743__auto___25201);
{
var G__25202 = cljs.core.next.call(null,seq__23321_25195__$1);
var G__25203 = null;
var G__25204 = 0;
var G__25205 = 0;
seq__23321_25185 = G__25202;
chunk__23322_25186 = G__25203;
count__23323_25187 = G__25204;
i__23324_25188 = G__25205;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__21742__auto__);
};
var nav = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__21741__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__25206){
var args__21741__auto__ = cljs.core.seq(arglist__25206);
return nav__delegate(args__21741__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23329_25207 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23330_25208 = null;var count__23331_25209 = 0;var i__23332_25210 = 0;while(true){
if((i__23332_25210 < count__23331_25209))
{var arg__21743__auto___25211 = cljs.core._nth.call(null,chunk__23330_25208,i__23332_25210);a__21742__auto__.push(arg__21743__auto___25211);
{
var G__25212 = seq__23329_25207;
var G__25213 = chunk__23330_25208;
var G__25214 = count__23331_25209;
var G__25215 = (i__23332_25210 + 1);
seq__23329_25207 = G__25212;
chunk__23330_25208 = G__25213;
count__23331_25209 = G__25214;
i__23332_25210 = G__25215;
continue;
}
} else
{var temp__4092__auto___25216 = cljs.core.seq.call(null,seq__23329_25207);if(temp__4092__auto___25216)
{var seq__23329_25217__$1 = temp__4092__auto___25216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23329_25217__$1))
{var c__20324__auto___25218 = cljs.core.chunk_first.call(null,seq__23329_25217__$1);{
var G__25219 = cljs.core.chunk_rest.call(null,seq__23329_25217__$1);
var G__25220 = c__20324__auto___25218;
var G__25221 = cljs.core.count.call(null,c__20324__auto___25218);
var G__25222 = 0;
seq__23329_25207 = G__25219;
chunk__23330_25208 = G__25220;
count__23331_25209 = G__25221;
i__23332_25210 = G__25222;
continue;
}
} else
{var arg__21743__auto___25223 = cljs.core.first.call(null,seq__23329_25217__$1);a__21742__auto__.push(arg__21743__auto___25223);
{
var G__25224 = cljs.core.next.call(null,seq__23329_25217__$1);
var G__25225 = null;
var G__25226 = 0;
var G__25227 = 0;
seq__23329_25207 = G__25224;
chunk__23330_25208 = G__25225;
count__23331_25209 = G__25226;
i__23332_25210 = G__25227;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__21742__auto__);
};
var noscript = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__21741__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__25228){
var args__21741__auto__ = cljs.core.seq(arglist__25228);
return noscript__delegate(args__21741__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23337_25229 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23338_25230 = null;var count__23339_25231 = 0;var i__23340_25232 = 0;while(true){
if((i__23340_25232 < count__23339_25231))
{var arg__21743__auto___25233 = cljs.core._nth.call(null,chunk__23338_25230,i__23340_25232);a__21742__auto__.push(arg__21743__auto___25233);
{
var G__25234 = seq__23337_25229;
var G__25235 = chunk__23338_25230;
var G__25236 = count__23339_25231;
var G__25237 = (i__23340_25232 + 1);
seq__23337_25229 = G__25234;
chunk__23338_25230 = G__25235;
count__23339_25231 = G__25236;
i__23340_25232 = G__25237;
continue;
}
} else
{var temp__4092__auto___25238 = cljs.core.seq.call(null,seq__23337_25229);if(temp__4092__auto___25238)
{var seq__23337_25239__$1 = temp__4092__auto___25238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23337_25239__$1))
{var c__20324__auto___25240 = cljs.core.chunk_first.call(null,seq__23337_25239__$1);{
var G__25241 = cljs.core.chunk_rest.call(null,seq__23337_25239__$1);
var G__25242 = c__20324__auto___25240;
var G__25243 = cljs.core.count.call(null,c__20324__auto___25240);
var G__25244 = 0;
seq__23337_25229 = G__25241;
chunk__23338_25230 = G__25242;
count__23339_25231 = G__25243;
i__23340_25232 = G__25244;
continue;
}
} else
{var arg__21743__auto___25245 = cljs.core.first.call(null,seq__23337_25239__$1);a__21742__auto__.push(arg__21743__auto___25245);
{
var G__25246 = cljs.core.next.call(null,seq__23337_25239__$1);
var G__25247 = null;
var G__25248 = 0;
var G__25249 = 0;
seq__23337_25229 = G__25246;
chunk__23338_25230 = G__25247;
count__23339_25231 = G__25248;
i__23340_25232 = G__25249;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__21742__auto__);
};
var object = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__21741__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__25250){
var args__21741__auto__ = cljs.core.seq(arglist__25250);
return object__delegate(args__21741__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23345_25251 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23346_25252 = null;var count__23347_25253 = 0;var i__23348_25254 = 0;while(true){
if((i__23348_25254 < count__23347_25253))
{var arg__21743__auto___25255 = cljs.core._nth.call(null,chunk__23346_25252,i__23348_25254);a__21742__auto__.push(arg__21743__auto___25255);
{
var G__25256 = seq__23345_25251;
var G__25257 = chunk__23346_25252;
var G__25258 = count__23347_25253;
var G__25259 = (i__23348_25254 + 1);
seq__23345_25251 = G__25256;
chunk__23346_25252 = G__25257;
count__23347_25253 = G__25258;
i__23348_25254 = G__25259;
continue;
}
} else
{var temp__4092__auto___25260 = cljs.core.seq.call(null,seq__23345_25251);if(temp__4092__auto___25260)
{var seq__23345_25261__$1 = temp__4092__auto___25260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23345_25261__$1))
{var c__20324__auto___25262 = cljs.core.chunk_first.call(null,seq__23345_25261__$1);{
var G__25263 = cljs.core.chunk_rest.call(null,seq__23345_25261__$1);
var G__25264 = c__20324__auto___25262;
var G__25265 = cljs.core.count.call(null,c__20324__auto___25262);
var G__25266 = 0;
seq__23345_25251 = G__25263;
chunk__23346_25252 = G__25264;
count__23347_25253 = G__25265;
i__23348_25254 = G__25266;
continue;
}
} else
{var arg__21743__auto___25267 = cljs.core.first.call(null,seq__23345_25261__$1);a__21742__auto__.push(arg__21743__auto___25267);
{
var G__25268 = cljs.core.next.call(null,seq__23345_25261__$1);
var G__25269 = null;
var G__25270 = 0;
var G__25271 = 0;
seq__23345_25251 = G__25268;
chunk__23346_25252 = G__25269;
count__23347_25253 = G__25270;
i__23348_25254 = G__25271;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__21742__auto__);
};
var ol = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__21741__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__25272){
var args__21741__auto__ = cljs.core.seq(arglist__25272);
return ol__delegate(args__21741__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23353_25273 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23354_25274 = null;var count__23355_25275 = 0;var i__23356_25276 = 0;while(true){
if((i__23356_25276 < count__23355_25275))
{var arg__21743__auto___25277 = cljs.core._nth.call(null,chunk__23354_25274,i__23356_25276);a__21742__auto__.push(arg__21743__auto___25277);
{
var G__25278 = seq__23353_25273;
var G__25279 = chunk__23354_25274;
var G__25280 = count__23355_25275;
var G__25281 = (i__23356_25276 + 1);
seq__23353_25273 = G__25278;
chunk__23354_25274 = G__25279;
count__23355_25275 = G__25280;
i__23356_25276 = G__25281;
continue;
}
} else
{var temp__4092__auto___25282 = cljs.core.seq.call(null,seq__23353_25273);if(temp__4092__auto___25282)
{var seq__23353_25283__$1 = temp__4092__auto___25282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23353_25283__$1))
{var c__20324__auto___25284 = cljs.core.chunk_first.call(null,seq__23353_25283__$1);{
var G__25285 = cljs.core.chunk_rest.call(null,seq__23353_25283__$1);
var G__25286 = c__20324__auto___25284;
var G__25287 = cljs.core.count.call(null,c__20324__auto___25284);
var G__25288 = 0;
seq__23353_25273 = G__25285;
chunk__23354_25274 = G__25286;
count__23355_25275 = G__25287;
i__23356_25276 = G__25288;
continue;
}
} else
{var arg__21743__auto___25289 = cljs.core.first.call(null,seq__23353_25283__$1);a__21742__auto__.push(arg__21743__auto___25289);
{
var G__25290 = cljs.core.next.call(null,seq__23353_25283__$1);
var G__25291 = null;
var G__25292 = 0;
var G__25293 = 0;
seq__23353_25273 = G__25290;
chunk__23354_25274 = G__25291;
count__23355_25275 = G__25292;
i__23356_25276 = G__25293;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__21742__auto__);
};
var optgroup = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__21741__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__25294){
var args__21741__auto__ = cljs.core.seq(arglist__25294);
return optgroup__delegate(args__21741__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23361_25295 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23362_25296 = null;var count__23363_25297 = 0;var i__23364_25298 = 0;while(true){
if((i__23364_25298 < count__23363_25297))
{var arg__21743__auto___25299 = cljs.core._nth.call(null,chunk__23362_25296,i__23364_25298);a__21742__auto__.push(arg__21743__auto___25299);
{
var G__25300 = seq__23361_25295;
var G__25301 = chunk__23362_25296;
var G__25302 = count__23363_25297;
var G__25303 = (i__23364_25298 + 1);
seq__23361_25295 = G__25300;
chunk__23362_25296 = G__25301;
count__23363_25297 = G__25302;
i__23364_25298 = G__25303;
continue;
}
} else
{var temp__4092__auto___25304 = cljs.core.seq.call(null,seq__23361_25295);if(temp__4092__auto___25304)
{var seq__23361_25305__$1 = temp__4092__auto___25304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23361_25305__$1))
{var c__20324__auto___25306 = cljs.core.chunk_first.call(null,seq__23361_25305__$1);{
var G__25307 = cljs.core.chunk_rest.call(null,seq__23361_25305__$1);
var G__25308 = c__20324__auto___25306;
var G__25309 = cljs.core.count.call(null,c__20324__auto___25306);
var G__25310 = 0;
seq__23361_25295 = G__25307;
chunk__23362_25296 = G__25308;
count__23363_25297 = G__25309;
i__23364_25298 = G__25310;
continue;
}
} else
{var arg__21743__auto___25311 = cljs.core.first.call(null,seq__23361_25305__$1);a__21742__auto__.push(arg__21743__auto___25311);
{
var G__25312 = cljs.core.next.call(null,seq__23361_25305__$1);
var G__25313 = null;
var G__25314 = 0;
var G__25315 = 0;
seq__23361_25295 = G__25312;
chunk__23362_25296 = G__25313;
count__23363_25297 = G__25314;
i__23364_25298 = G__25315;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__21742__auto__);
};
var option = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__21741__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__25316){
var args__21741__auto__ = cljs.core.seq(arglist__25316);
return option__delegate(args__21741__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23369_25317 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23370_25318 = null;var count__23371_25319 = 0;var i__23372_25320 = 0;while(true){
if((i__23372_25320 < count__23371_25319))
{var arg__21743__auto___25321 = cljs.core._nth.call(null,chunk__23370_25318,i__23372_25320);a__21742__auto__.push(arg__21743__auto___25321);
{
var G__25322 = seq__23369_25317;
var G__25323 = chunk__23370_25318;
var G__25324 = count__23371_25319;
var G__25325 = (i__23372_25320 + 1);
seq__23369_25317 = G__25322;
chunk__23370_25318 = G__25323;
count__23371_25319 = G__25324;
i__23372_25320 = G__25325;
continue;
}
} else
{var temp__4092__auto___25326 = cljs.core.seq.call(null,seq__23369_25317);if(temp__4092__auto___25326)
{var seq__23369_25327__$1 = temp__4092__auto___25326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23369_25327__$1))
{var c__20324__auto___25328 = cljs.core.chunk_first.call(null,seq__23369_25327__$1);{
var G__25329 = cljs.core.chunk_rest.call(null,seq__23369_25327__$1);
var G__25330 = c__20324__auto___25328;
var G__25331 = cljs.core.count.call(null,c__20324__auto___25328);
var G__25332 = 0;
seq__23369_25317 = G__25329;
chunk__23370_25318 = G__25330;
count__23371_25319 = G__25331;
i__23372_25320 = G__25332;
continue;
}
} else
{var arg__21743__auto___25333 = cljs.core.first.call(null,seq__23369_25327__$1);a__21742__auto__.push(arg__21743__auto___25333);
{
var G__25334 = cljs.core.next.call(null,seq__23369_25327__$1);
var G__25335 = null;
var G__25336 = 0;
var G__25337 = 0;
seq__23369_25317 = G__25334;
chunk__23370_25318 = G__25335;
count__23371_25319 = G__25336;
i__23372_25320 = G__25337;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__21742__auto__);
};
var output = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__21741__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__25338){
var args__21741__auto__ = cljs.core.seq(arglist__25338);
return output__delegate(args__21741__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23377_25339 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23378_25340 = null;var count__23379_25341 = 0;var i__23380_25342 = 0;while(true){
if((i__23380_25342 < count__23379_25341))
{var arg__21743__auto___25343 = cljs.core._nth.call(null,chunk__23378_25340,i__23380_25342);a__21742__auto__.push(arg__21743__auto___25343);
{
var G__25344 = seq__23377_25339;
var G__25345 = chunk__23378_25340;
var G__25346 = count__23379_25341;
var G__25347 = (i__23380_25342 + 1);
seq__23377_25339 = G__25344;
chunk__23378_25340 = G__25345;
count__23379_25341 = G__25346;
i__23380_25342 = G__25347;
continue;
}
} else
{var temp__4092__auto___25348 = cljs.core.seq.call(null,seq__23377_25339);if(temp__4092__auto___25348)
{var seq__23377_25349__$1 = temp__4092__auto___25348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23377_25349__$1))
{var c__20324__auto___25350 = cljs.core.chunk_first.call(null,seq__23377_25349__$1);{
var G__25351 = cljs.core.chunk_rest.call(null,seq__23377_25349__$1);
var G__25352 = c__20324__auto___25350;
var G__25353 = cljs.core.count.call(null,c__20324__auto___25350);
var G__25354 = 0;
seq__23377_25339 = G__25351;
chunk__23378_25340 = G__25352;
count__23379_25341 = G__25353;
i__23380_25342 = G__25354;
continue;
}
} else
{var arg__21743__auto___25355 = cljs.core.first.call(null,seq__23377_25349__$1);a__21742__auto__.push(arg__21743__auto___25355);
{
var G__25356 = cljs.core.next.call(null,seq__23377_25349__$1);
var G__25357 = null;
var G__25358 = 0;
var G__25359 = 0;
seq__23377_25339 = G__25356;
chunk__23378_25340 = G__25357;
count__23379_25341 = G__25358;
i__23380_25342 = G__25359;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__21742__auto__);
};
var p = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__21741__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__25360){
var args__21741__auto__ = cljs.core.seq(arglist__25360);
return p__delegate(args__21741__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23385_25361 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23386_25362 = null;var count__23387_25363 = 0;var i__23388_25364 = 0;while(true){
if((i__23388_25364 < count__23387_25363))
{var arg__21743__auto___25365 = cljs.core._nth.call(null,chunk__23386_25362,i__23388_25364);a__21742__auto__.push(arg__21743__auto___25365);
{
var G__25366 = seq__23385_25361;
var G__25367 = chunk__23386_25362;
var G__25368 = count__23387_25363;
var G__25369 = (i__23388_25364 + 1);
seq__23385_25361 = G__25366;
chunk__23386_25362 = G__25367;
count__23387_25363 = G__25368;
i__23388_25364 = G__25369;
continue;
}
} else
{var temp__4092__auto___25370 = cljs.core.seq.call(null,seq__23385_25361);if(temp__4092__auto___25370)
{var seq__23385_25371__$1 = temp__4092__auto___25370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23385_25371__$1))
{var c__20324__auto___25372 = cljs.core.chunk_first.call(null,seq__23385_25371__$1);{
var G__25373 = cljs.core.chunk_rest.call(null,seq__23385_25371__$1);
var G__25374 = c__20324__auto___25372;
var G__25375 = cljs.core.count.call(null,c__20324__auto___25372);
var G__25376 = 0;
seq__23385_25361 = G__25373;
chunk__23386_25362 = G__25374;
count__23387_25363 = G__25375;
i__23388_25364 = G__25376;
continue;
}
} else
{var arg__21743__auto___25377 = cljs.core.first.call(null,seq__23385_25371__$1);a__21742__auto__.push(arg__21743__auto___25377);
{
var G__25378 = cljs.core.next.call(null,seq__23385_25371__$1);
var G__25379 = null;
var G__25380 = 0;
var G__25381 = 0;
seq__23385_25361 = G__25378;
chunk__23386_25362 = G__25379;
count__23387_25363 = G__25380;
i__23388_25364 = G__25381;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__21742__auto__);
};
var param = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__21741__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__25382){
var args__21741__auto__ = cljs.core.seq(arglist__25382);
return param__delegate(args__21741__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23393_25383 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23394_25384 = null;var count__23395_25385 = 0;var i__23396_25386 = 0;while(true){
if((i__23396_25386 < count__23395_25385))
{var arg__21743__auto___25387 = cljs.core._nth.call(null,chunk__23394_25384,i__23396_25386);a__21742__auto__.push(arg__21743__auto___25387);
{
var G__25388 = seq__23393_25383;
var G__25389 = chunk__23394_25384;
var G__25390 = count__23395_25385;
var G__25391 = (i__23396_25386 + 1);
seq__23393_25383 = G__25388;
chunk__23394_25384 = G__25389;
count__23395_25385 = G__25390;
i__23396_25386 = G__25391;
continue;
}
} else
{var temp__4092__auto___25392 = cljs.core.seq.call(null,seq__23393_25383);if(temp__4092__auto___25392)
{var seq__23393_25393__$1 = temp__4092__auto___25392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23393_25393__$1))
{var c__20324__auto___25394 = cljs.core.chunk_first.call(null,seq__23393_25393__$1);{
var G__25395 = cljs.core.chunk_rest.call(null,seq__23393_25393__$1);
var G__25396 = c__20324__auto___25394;
var G__25397 = cljs.core.count.call(null,c__20324__auto___25394);
var G__25398 = 0;
seq__23393_25383 = G__25395;
chunk__23394_25384 = G__25396;
count__23395_25385 = G__25397;
i__23396_25386 = G__25398;
continue;
}
} else
{var arg__21743__auto___25399 = cljs.core.first.call(null,seq__23393_25393__$1);a__21742__auto__.push(arg__21743__auto___25399);
{
var G__25400 = cljs.core.next.call(null,seq__23393_25393__$1);
var G__25401 = null;
var G__25402 = 0;
var G__25403 = 0;
seq__23393_25383 = G__25400;
chunk__23394_25384 = G__25401;
count__23395_25385 = G__25402;
i__23396_25386 = G__25403;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__21742__auto__);
};
var pre = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__21741__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__25404){
var args__21741__auto__ = cljs.core.seq(arglist__25404);
return pre__delegate(args__21741__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23401_25405 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23402_25406 = null;var count__23403_25407 = 0;var i__23404_25408 = 0;while(true){
if((i__23404_25408 < count__23403_25407))
{var arg__21743__auto___25409 = cljs.core._nth.call(null,chunk__23402_25406,i__23404_25408);a__21742__auto__.push(arg__21743__auto___25409);
{
var G__25410 = seq__23401_25405;
var G__25411 = chunk__23402_25406;
var G__25412 = count__23403_25407;
var G__25413 = (i__23404_25408 + 1);
seq__23401_25405 = G__25410;
chunk__23402_25406 = G__25411;
count__23403_25407 = G__25412;
i__23404_25408 = G__25413;
continue;
}
} else
{var temp__4092__auto___25414 = cljs.core.seq.call(null,seq__23401_25405);if(temp__4092__auto___25414)
{var seq__23401_25415__$1 = temp__4092__auto___25414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23401_25415__$1))
{var c__20324__auto___25416 = cljs.core.chunk_first.call(null,seq__23401_25415__$1);{
var G__25417 = cljs.core.chunk_rest.call(null,seq__23401_25415__$1);
var G__25418 = c__20324__auto___25416;
var G__25419 = cljs.core.count.call(null,c__20324__auto___25416);
var G__25420 = 0;
seq__23401_25405 = G__25417;
chunk__23402_25406 = G__25418;
count__23403_25407 = G__25419;
i__23404_25408 = G__25420;
continue;
}
} else
{var arg__21743__auto___25421 = cljs.core.first.call(null,seq__23401_25415__$1);a__21742__auto__.push(arg__21743__auto___25421);
{
var G__25422 = cljs.core.next.call(null,seq__23401_25415__$1);
var G__25423 = null;
var G__25424 = 0;
var G__25425 = 0;
seq__23401_25405 = G__25422;
chunk__23402_25406 = G__25423;
count__23403_25407 = G__25424;
i__23404_25408 = G__25425;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__21742__auto__);
};
var progress = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__21741__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__25426){
var args__21741__auto__ = cljs.core.seq(arglist__25426);
return progress__delegate(args__21741__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23409_25427 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23410_25428 = null;var count__23411_25429 = 0;var i__23412_25430 = 0;while(true){
if((i__23412_25430 < count__23411_25429))
{var arg__21743__auto___25431 = cljs.core._nth.call(null,chunk__23410_25428,i__23412_25430);a__21742__auto__.push(arg__21743__auto___25431);
{
var G__25432 = seq__23409_25427;
var G__25433 = chunk__23410_25428;
var G__25434 = count__23411_25429;
var G__25435 = (i__23412_25430 + 1);
seq__23409_25427 = G__25432;
chunk__23410_25428 = G__25433;
count__23411_25429 = G__25434;
i__23412_25430 = G__25435;
continue;
}
} else
{var temp__4092__auto___25436 = cljs.core.seq.call(null,seq__23409_25427);if(temp__4092__auto___25436)
{var seq__23409_25437__$1 = temp__4092__auto___25436;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23409_25437__$1))
{var c__20324__auto___25438 = cljs.core.chunk_first.call(null,seq__23409_25437__$1);{
var G__25439 = cljs.core.chunk_rest.call(null,seq__23409_25437__$1);
var G__25440 = c__20324__auto___25438;
var G__25441 = cljs.core.count.call(null,c__20324__auto___25438);
var G__25442 = 0;
seq__23409_25427 = G__25439;
chunk__23410_25428 = G__25440;
count__23411_25429 = G__25441;
i__23412_25430 = G__25442;
continue;
}
} else
{var arg__21743__auto___25443 = cljs.core.first.call(null,seq__23409_25437__$1);a__21742__auto__.push(arg__21743__auto___25443);
{
var G__25444 = cljs.core.next.call(null,seq__23409_25437__$1);
var G__25445 = null;
var G__25446 = 0;
var G__25447 = 0;
seq__23409_25427 = G__25444;
chunk__23410_25428 = G__25445;
count__23411_25429 = G__25446;
i__23412_25430 = G__25447;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__21742__auto__);
};
var q = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__21741__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__25448){
var args__21741__auto__ = cljs.core.seq(arglist__25448);
return q__delegate(args__21741__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23417_25449 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23418_25450 = null;var count__23419_25451 = 0;var i__23420_25452 = 0;while(true){
if((i__23420_25452 < count__23419_25451))
{var arg__21743__auto___25453 = cljs.core._nth.call(null,chunk__23418_25450,i__23420_25452);a__21742__auto__.push(arg__21743__auto___25453);
{
var G__25454 = seq__23417_25449;
var G__25455 = chunk__23418_25450;
var G__25456 = count__23419_25451;
var G__25457 = (i__23420_25452 + 1);
seq__23417_25449 = G__25454;
chunk__23418_25450 = G__25455;
count__23419_25451 = G__25456;
i__23420_25452 = G__25457;
continue;
}
} else
{var temp__4092__auto___25458 = cljs.core.seq.call(null,seq__23417_25449);if(temp__4092__auto___25458)
{var seq__23417_25459__$1 = temp__4092__auto___25458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23417_25459__$1))
{var c__20324__auto___25460 = cljs.core.chunk_first.call(null,seq__23417_25459__$1);{
var G__25461 = cljs.core.chunk_rest.call(null,seq__23417_25459__$1);
var G__25462 = c__20324__auto___25460;
var G__25463 = cljs.core.count.call(null,c__20324__auto___25460);
var G__25464 = 0;
seq__23417_25449 = G__25461;
chunk__23418_25450 = G__25462;
count__23419_25451 = G__25463;
i__23420_25452 = G__25464;
continue;
}
} else
{var arg__21743__auto___25465 = cljs.core.first.call(null,seq__23417_25459__$1);a__21742__auto__.push(arg__21743__auto___25465);
{
var G__25466 = cljs.core.next.call(null,seq__23417_25459__$1);
var G__25467 = null;
var G__25468 = 0;
var G__25469 = 0;
seq__23417_25449 = G__25466;
chunk__23418_25450 = G__25467;
count__23419_25451 = G__25468;
i__23420_25452 = G__25469;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__21742__auto__);
};
var rp = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__21741__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__25470){
var args__21741__auto__ = cljs.core.seq(arglist__25470);
return rp__delegate(args__21741__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23425_25471 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23426_25472 = null;var count__23427_25473 = 0;var i__23428_25474 = 0;while(true){
if((i__23428_25474 < count__23427_25473))
{var arg__21743__auto___25475 = cljs.core._nth.call(null,chunk__23426_25472,i__23428_25474);a__21742__auto__.push(arg__21743__auto___25475);
{
var G__25476 = seq__23425_25471;
var G__25477 = chunk__23426_25472;
var G__25478 = count__23427_25473;
var G__25479 = (i__23428_25474 + 1);
seq__23425_25471 = G__25476;
chunk__23426_25472 = G__25477;
count__23427_25473 = G__25478;
i__23428_25474 = G__25479;
continue;
}
} else
{var temp__4092__auto___25480 = cljs.core.seq.call(null,seq__23425_25471);if(temp__4092__auto___25480)
{var seq__23425_25481__$1 = temp__4092__auto___25480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23425_25481__$1))
{var c__20324__auto___25482 = cljs.core.chunk_first.call(null,seq__23425_25481__$1);{
var G__25483 = cljs.core.chunk_rest.call(null,seq__23425_25481__$1);
var G__25484 = c__20324__auto___25482;
var G__25485 = cljs.core.count.call(null,c__20324__auto___25482);
var G__25486 = 0;
seq__23425_25471 = G__25483;
chunk__23426_25472 = G__25484;
count__23427_25473 = G__25485;
i__23428_25474 = G__25486;
continue;
}
} else
{var arg__21743__auto___25487 = cljs.core.first.call(null,seq__23425_25481__$1);a__21742__auto__.push(arg__21743__auto___25487);
{
var G__25488 = cljs.core.next.call(null,seq__23425_25481__$1);
var G__25489 = null;
var G__25490 = 0;
var G__25491 = 0;
seq__23425_25471 = G__25488;
chunk__23426_25472 = G__25489;
count__23427_25473 = G__25490;
i__23428_25474 = G__25491;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__21742__auto__);
};
var rt = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__21741__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__25492){
var args__21741__auto__ = cljs.core.seq(arglist__25492);
return rt__delegate(args__21741__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23433_25493 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23434_25494 = null;var count__23435_25495 = 0;var i__23436_25496 = 0;while(true){
if((i__23436_25496 < count__23435_25495))
{var arg__21743__auto___25497 = cljs.core._nth.call(null,chunk__23434_25494,i__23436_25496);a__21742__auto__.push(arg__21743__auto___25497);
{
var G__25498 = seq__23433_25493;
var G__25499 = chunk__23434_25494;
var G__25500 = count__23435_25495;
var G__25501 = (i__23436_25496 + 1);
seq__23433_25493 = G__25498;
chunk__23434_25494 = G__25499;
count__23435_25495 = G__25500;
i__23436_25496 = G__25501;
continue;
}
} else
{var temp__4092__auto___25502 = cljs.core.seq.call(null,seq__23433_25493);if(temp__4092__auto___25502)
{var seq__23433_25503__$1 = temp__4092__auto___25502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23433_25503__$1))
{var c__20324__auto___25504 = cljs.core.chunk_first.call(null,seq__23433_25503__$1);{
var G__25505 = cljs.core.chunk_rest.call(null,seq__23433_25503__$1);
var G__25506 = c__20324__auto___25504;
var G__25507 = cljs.core.count.call(null,c__20324__auto___25504);
var G__25508 = 0;
seq__23433_25493 = G__25505;
chunk__23434_25494 = G__25506;
count__23435_25495 = G__25507;
i__23436_25496 = G__25508;
continue;
}
} else
{var arg__21743__auto___25509 = cljs.core.first.call(null,seq__23433_25503__$1);a__21742__auto__.push(arg__21743__auto___25509);
{
var G__25510 = cljs.core.next.call(null,seq__23433_25503__$1);
var G__25511 = null;
var G__25512 = 0;
var G__25513 = 0;
seq__23433_25493 = G__25510;
chunk__23434_25494 = G__25511;
count__23435_25495 = G__25512;
i__23436_25496 = G__25513;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__21742__auto__);
};
var ruby = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__21741__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__25514){
var args__21741__auto__ = cljs.core.seq(arglist__25514);
return ruby__delegate(args__21741__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23441_25515 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23442_25516 = null;var count__23443_25517 = 0;var i__23444_25518 = 0;while(true){
if((i__23444_25518 < count__23443_25517))
{var arg__21743__auto___25519 = cljs.core._nth.call(null,chunk__23442_25516,i__23444_25518);a__21742__auto__.push(arg__21743__auto___25519);
{
var G__25520 = seq__23441_25515;
var G__25521 = chunk__23442_25516;
var G__25522 = count__23443_25517;
var G__25523 = (i__23444_25518 + 1);
seq__23441_25515 = G__25520;
chunk__23442_25516 = G__25521;
count__23443_25517 = G__25522;
i__23444_25518 = G__25523;
continue;
}
} else
{var temp__4092__auto___25524 = cljs.core.seq.call(null,seq__23441_25515);if(temp__4092__auto___25524)
{var seq__23441_25525__$1 = temp__4092__auto___25524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23441_25525__$1))
{var c__20324__auto___25526 = cljs.core.chunk_first.call(null,seq__23441_25525__$1);{
var G__25527 = cljs.core.chunk_rest.call(null,seq__23441_25525__$1);
var G__25528 = c__20324__auto___25526;
var G__25529 = cljs.core.count.call(null,c__20324__auto___25526);
var G__25530 = 0;
seq__23441_25515 = G__25527;
chunk__23442_25516 = G__25528;
count__23443_25517 = G__25529;
i__23444_25518 = G__25530;
continue;
}
} else
{var arg__21743__auto___25531 = cljs.core.first.call(null,seq__23441_25525__$1);a__21742__auto__.push(arg__21743__auto___25531);
{
var G__25532 = cljs.core.next.call(null,seq__23441_25525__$1);
var G__25533 = null;
var G__25534 = 0;
var G__25535 = 0;
seq__23441_25515 = G__25532;
chunk__23442_25516 = G__25533;
count__23443_25517 = G__25534;
i__23444_25518 = G__25535;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__21742__auto__);
};
var s = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__21741__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__25536){
var args__21741__auto__ = cljs.core.seq(arglist__25536);
return s__delegate(args__21741__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23449_25537 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23450_25538 = null;var count__23451_25539 = 0;var i__23452_25540 = 0;while(true){
if((i__23452_25540 < count__23451_25539))
{var arg__21743__auto___25541 = cljs.core._nth.call(null,chunk__23450_25538,i__23452_25540);a__21742__auto__.push(arg__21743__auto___25541);
{
var G__25542 = seq__23449_25537;
var G__25543 = chunk__23450_25538;
var G__25544 = count__23451_25539;
var G__25545 = (i__23452_25540 + 1);
seq__23449_25537 = G__25542;
chunk__23450_25538 = G__25543;
count__23451_25539 = G__25544;
i__23452_25540 = G__25545;
continue;
}
} else
{var temp__4092__auto___25546 = cljs.core.seq.call(null,seq__23449_25537);if(temp__4092__auto___25546)
{var seq__23449_25547__$1 = temp__4092__auto___25546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23449_25547__$1))
{var c__20324__auto___25548 = cljs.core.chunk_first.call(null,seq__23449_25547__$1);{
var G__25549 = cljs.core.chunk_rest.call(null,seq__23449_25547__$1);
var G__25550 = c__20324__auto___25548;
var G__25551 = cljs.core.count.call(null,c__20324__auto___25548);
var G__25552 = 0;
seq__23449_25537 = G__25549;
chunk__23450_25538 = G__25550;
count__23451_25539 = G__25551;
i__23452_25540 = G__25552;
continue;
}
} else
{var arg__21743__auto___25553 = cljs.core.first.call(null,seq__23449_25547__$1);a__21742__auto__.push(arg__21743__auto___25553);
{
var G__25554 = cljs.core.next.call(null,seq__23449_25547__$1);
var G__25555 = null;
var G__25556 = 0;
var G__25557 = 0;
seq__23449_25537 = G__25554;
chunk__23450_25538 = G__25555;
count__23451_25539 = G__25556;
i__23452_25540 = G__25557;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__21742__auto__);
};
var samp = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__21741__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__25558){
var args__21741__auto__ = cljs.core.seq(arglist__25558);
return samp__delegate(args__21741__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23457_25559 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23458_25560 = null;var count__23459_25561 = 0;var i__23460_25562 = 0;while(true){
if((i__23460_25562 < count__23459_25561))
{var arg__21743__auto___25563 = cljs.core._nth.call(null,chunk__23458_25560,i__23460_25562);a__21742__auto__.push(arg__21743__auto___25563);
{
var G__25564 = seq__23457_25559;
var G__25565 = chunk__23458_25560;
var G__25566 = count__23459_25561;
var G__25567 = (i__23460_25562 + 1);
seq__23457_25559 = G__25564;
chunk__23458_25560 = G__25565;
count__23459_25561 = G__25566;
i__23460_25562 = G__25567;
continue;
}
} else
{var temp__4092__auto___25568 = cljs.core.seq.call(null,seq__23457_25559);if(temp__4092__auto___25568)
{var seq__23457_25569__$1 = temp__4092__auto___25568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23457_25569__$1))
{var c__20324__auto___25570 = cljs.core.chunk_first.call(null,seq__23457_25569__$1);{
var G__25571 = cljs.core.chunk_rest.call(null,seq__23457_25569__$1);
var G__25572 = c__20324__auto___25570;
var G__25573 = cljs.core.count.call(null,c__20324__auto___25570);
var G__25574 = 0;
seq__23457_25559 = G__25571;
chunk__23458_25560 = G__25572;
count__23459_25561 = G__25573;
i__23460_25562 = G__25574;
continue;
}
} else
{var arg__21743__auto___25575 = cljs.core.first.call(null,seq__23457_25569__$1);a__21742__auto__.push(arg__21743__auto___25575);
{
var G__25576 = cljs.core.next.call(null,seq__23457_25569__$1);
var G__25577 = null;
var G__25578 = 0;
var G__25579 = 0;
seq__23457_25559 = G__25576;
chunk__23458_25560 = G__25577;
count__23459_25561 = G__25578;
i__23460_25562 = G__25579;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__21742__auto__);
};
var script = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__21741__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__25580){
var args__21741__auto__ = cljs.core.seq(arglist__25580);
return script__delegate(args__21741__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23465_25581 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23466_25582 = null;var count__23467_25583 = 0;var i__23468_25584 = 0;while(true){
if((i__23468_25584 < count__23467_25583))
{var arg__21743__auto___25585 = cljs.core._nth.call(null,chunk__23466_25582,i__23468_25584);a__21742__auto__.push(arg__21743__auto___25585);
{
var G__25586 = seq__23465_25581;
var G__25587 = chunk__23466_25582;
var G__25588 = count__23467_25583;
var G__25589 = (i__23468_25584 + 1);
seq__23465_25581 = G__25586;
chunk__23466_25582 = G__25587;
count__23467_25583 = G__25588;
i__23468_25584 = G__25589;
continue;
}
} else
{var temp__4092__auto___25590 = cljs.core.seq.call(null,seq__23465_25581);if(temp__4092__auto___25590)
{var seq__23465_25591__$1 = temp__4092__auto___25590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23465_25591__$1))
{var c__20324__auto___25592 = cljs.core.chunk_first.call(null,seq__23465_25591__$1);{
var G__25593 = cljs.core.chunk_rest.call(null,seq__23465_25591__$1);
var G__25594 = c__20324__auto___25592;
var G__25595 = cljs.core.count.call(null,c__20324__auto___25592);
var G__25596 = 0;
seq__23465_25581 = G__25593;
chunk__23466_25582 = G__25594;
count__23467_25583 = G__25595;
i__23468_25584 = G__25596;
continue;
}
} else
{var arg__21743__auto___25597 = cljs.core.first.call(null,seq__23465_25591__$1);a__21742__auto__.push(arg__21743__auto___25597);
{
var G__25598 = cljs.core.next.call(null,seq__23465_25591__$1);
var G__25599 = null;
var G__25600 = 0;
var G__25601 = 0;
seq__23465_25581 = G__25598;
chunk__23466_25582 = G__25599;
count__23467_25583 = G__25600;
i__23468_25584 = G__25601;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__21742__auto__);
};
var section = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__21741__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__25602){
var args__21741__auto__ = cljs.core.seq(arglist__25602);
return section__delegate(args__21741__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23473_25603 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23474_25604 = null;var count__23475_25605 = 0;var i__23476_25606 = 0;while(true){
if((i__23476_25606 < count__23475_25605))
{var arg__21743__auto___25607 = cljs.core._nth.call(null,chunk__23474_25604,i__23476_25606);a__21742__auto__.push(arg__21743__auto___25607);
{
var G__25608 = seq__23473_25603;
var G__25609 = chunk__23474_25604;
var G__25610 = count__23475_25605;
var G__25611 = (i__23476_25606 + 1);
seq__23473_25603 = G__25608;
chunk__23474_25604 = G__25609;
count__23475_25605 = G__25610;
i__23476_25606 = G__25611;
continue;
}
} else
{var temp__4092__auto___25612 = cljs.core.seq.call(null,seq__23473_25603);if(temp__4092__auto___25612)
{var seq__23473_25613__$1 = temp__4092__auto___25612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23473_25613__$1))
{var c__20324__auto___25614 = cljs.core.chunk_first.call(null,seq__23473_25613__$1);{
var G__25615 = cljs.core.chunk_rest.call(null,seq__23473_25613__$1);
var G__25616 = c__20324__auto___25614;
var G__25617 = cljs.core.count.call(null,c__20324__auto___25614);
var G__25618 = 0;
seq__23473_25603 = G__25615;
chunk__23474_25604 = G__25616;
count__23475_25605 = G__25617;
i__23476_25606 = G__25618;
continue;
}
} else
{var arg__21743__auto___25619 = cljs.core.first.call(null,seq__23473_25613__$1);a__21742__auto__.push(arg__21743__auto___25619);
{
var G__25620 = cljs.core.next.call(null,seq__23473_25613__$1);
var G__25621 = null;
var G__25622 = 0;
var G__25623 = 0;
seq__23473_25603 = G__25620;
chunk__23474_25604 = G__25621;
count__23475_25605 = G__25622;
i__23476_25606 = G__25623;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__21742__auto__);
};
var select = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__21741__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__25624){
var args__21741__auto__ = cljs.core.seq(arglist__25624);
return select__delegate(args__21741__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23481_25625 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23482_25626 = null;var count__23483_25627 = 0;var i__23484_25628 = 0;while(true){
if((i__23484_25628 < count__23483_25627))
{var arg__21743__auto___25629 = cljs.core._nth.call(null,chunk__23482_25626,i__23484_25628);a__21742__auto__.push(arg__21743__auto___25629);
{
var G__25630 = seq__23481_25625;
var G__25631 = chunk__23482_25626;
var G__25632 = count__23483_25627;
var G__25633 = (i__23484_25628 + 1);
seq__23481_25625 = G__25630;
chunk__23482_25626 = G__25631;
count__23483_25627 = G__25632;
i__23484_25628 = G__25633;
continue;
}
} else
{var temp__4092__auto___25634 = cljs.core.seq.call(null,seq__23481_25625);if(temp__4092__auto___25634)
{var seq__23481_25635__$1 = temp__4092__auto___25634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23481_25635__$1))
{var c__20324__auto___25636 = cljs.core.chunk_first.call(null,seq__23481_25635__$1);{
var G__25637 = cljs.core.chunk_rest.call(null,seq__23481_25635__$1);
var G__25638 = c__20324__auto___25636;
var G__25639 = cljs.core.count.call(null,c__20324__auto___25636);
var G__25640 = 0;
seq__23481_25625 = G__25637;
chunk__23482_25626 = G__25638;
count__23483_25627 = G__25639;
i__23484_25628 = G__25640;
continue;
}
} else
{var arg__21743__auto___25641 = cljs.core.first.call(null,seq__23481_25635__$1);a__21742__auto__.push(arg__21743__auto___25641);
{
var G__25642 = cljs.core.next.call(null,seq__23481_25635__$1);
var G__25643 = null;
var G__25644 = 0;
var G__25645 = 0;
seq__23481_25625 = G__25642;
chunk__23482_25626 = G__25643;
count__23483_25627 = G__25644;
i__23484_25628 = G__25645;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__21742__auto__);
};
var small = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__21741__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__25646){
var args__21741__auto__ = cljs.core.seq(arglist__25646);
return small__delegate(args__21741__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23489_25647 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23490_25648 = null;var count__23491_25649 = 0;var i__23492_25650 = 0;while(true){
if((i__23492_25650 < count__23491_25649))
{var arg__21743__auto___25651 = cljs.core._nth.call(null,chunk__23490_25648,i__23492_25650);a__21742__auto__.push(arg__21743__auto___25651);
{
var G__25652 = seq__23489_25647;
var G__25653 = chunk__23490_25648;
var G__25654 = count__23491_25649;
var G__25655 = (i__23492_25650 + 1);
seq__23489_25647 = G__25652;
chunk__23490_25648 = G__25653;
count__23491_25649 = G__25654;
i__23492_25650 = G__25655;
continue;
}
} else
{var temp__4092__auto___25656 = cljs.core.seq.call(null,seq__23489_25647);if(temp__4092__auto___25656)
{var seq__23489_25657__$1 = temp__4092__auto___25656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23489_25657__$1))
{var c__20324__auto___25658 = cljs.core.chunk_first.call(null,seq__23489_25657__$1);{
var G__25659 = cljs.core.chunk_rest.call(null,seq__23489_25657__$1);
var G__25660 = c__20324__auto___25658;
var G__25661 = cljs.core.count.call(null,c__20324__auto___25658);
var G__25662 = 0;
seq__23489_25647 = G__25659;
chunk__23490_25648 = G__25660;
count__23491_25649 = G__25661;
i__23492_25650 = G__25662;
continue;
}
} else
{var arg__21743__auto___25663 = cljs.core.first.call(null,seq__23489_25657__$1);a__21742__auto__.push(arg__21743__auto___25663);
{
var G__25664 = cljs.core.next.call(null,seq__23489_25657__$1);
var G__25665 = null;
var G__25666 = 0;
var G__25667 = 0;
seq__23489_25647 = G__25664;
chunk__23490_25648 = G__25665;
count__23491_25649 = G__25666;
i__23492_25650 = G__25667;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__21742__auto__);
};
var source = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__21741__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__25668){
var args__21741__auto__ = cljs.core.seq(arglist__25668);
return source__delegate(args__21741__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23497_25669 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23498_25670 = null;var count__23499_25671 = 0;var i__23500_25672 = 0;while(true){
if((i__23500_25672 < count__23499_25671))
{var arg__21743__auto___25673 = cljs.core._nth.call(null,chunk__23498_25670,i__23500_25672);a__21742__auto__.push(arg__21743__auto___25673);
{
var G__25674 = seq__23497_25669;
var G__25675 = chunk__23498_25670;
var G__25676 = count__23499_25671;
var G__25677 = (i__23500_25672 + 1);
seq__23497_25669 = G__25674;
chunk__23498_25670 = G__25675;
count__23499_25671 = G__25676;
i__23500_25672 = G__25677;
continue;
}
} else
{var temp__4092__auto___25678 = cljs.core.seq.call(null,seq__23497_25669);if(temp__4092__auto___25678)
{var seq__23497_25679__$1 = temp__4092__auto___25678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23497_25679__$1))
{var c__20324__auto___25680 = cljs.core.chunk_first.call(null,seq__23497_25679__$1);{
var G__25681 = cljs.core.chunk_rest.call(null,seq__23497_25679__$1);
var G__25682 = c__20324__auto___25680;
var G__25683 = cljs.core.count.call(null,c__20324__auto___25680);
var G__25684 = 0;
seq__23497_25669 = G__25681;
chunk__23498_25670 = G__25682;
count__23499_25671 = G__25683;
i__23500_25672 = G__25684;
continue;
}
} else
{var arg__21743__auto___25685 = cljs.core.first.call(null,seq__23497_25679__$1);a__21742__auto__.push(arg__21743__auto___25685);
{
var G__25686 = cljs.core.next.call(null,seq__23497_25679__$1);
var G__25687 = null;
var G__25688 = 0;
var G__25689 = 0;
seq__23497_25669 = G__25686;
chunk__23498_25670 = G__25687;
count__23499_25671 = G__25688;
i__23500_25672 = G__25689;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__21742__auto__);
};
var span = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__21741__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__25690){
var args__21741__auto__ = cljs.core.seq(arglist__25690);
return span__delegate(args__21741__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23505_25691 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23506_25692 = null;var count__23507_25693 = 0;var i__23508_25694 = 0;while(true){
if((i__23508_25694 < count__23507_25693))
{var arg__21743__auto___25695 = cljs.core._nth.call(null,chunk__23506_25692,i__23508_25694);a__21742__auto__.push(arg__21743__auto___25695);
{
var G__25696 = seq__23505_25691;
var G__25697 = chunk__23506_25692;
var G__25698 = count__23507_25693;
var G__25699 = (i__23508_25694 + 1);
seq__23505_25691 = G__25696;
chunk__23506_25692 = G__25697;
count__23507_25693 = G__25698;
i__23508_25694 = G__25699;
continue;
}
} else
{var temp__4092__auto___25700 = cljs.core.seq.call(null,seq__23505_25691);if(temp__4092__auto___25700)
{var seq__23505_25701__$1 = temp__4092__auto___25700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23505_25701__$1))
{var c__20324__auto___25702 = cljs.core.chunk_first.call(null,seq__23505_25701__$1);{
var G__25703 = cljs.core.chunk_rest.call(null,seq__23505_25701__$1);
var G__25704 = c__20324__auto___25702;
var G__25705 = cljs.core.count.call(null,c__20324__auto___25702);
var G__25706 = 0;
seq__23505_25691 = G__25703;
chunk__23506_25692 = G__25704;
count__23507_25693 = G__25705;
i__23508_25694 = G__25706;
continue;
}
} else
{var arg__21743__auto___25707 = cljs.core.first.call(null,seq__23505_25701__$1);a__21742__auto__.push(arg__21743__auto___25707);
{
var G__25708 = cljs.core.next.call(null,seq__23505_25701__$1);
var G__25709 = null;
var G__25710 = 0;
var G__25711 = 0;
seq__23505_25691 = G__25708;
chunk__23506_25692 = G__25709;
count__23507_25693 = G__25710;
i__23508_25694 = G__25711;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__21742__auto__);
};
var strong = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__21741__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__25712){
var args__21741__auto__ = cljs.core.seq(arglist__25712);
return strong__delegate(args__21741__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23513_25713 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23514_25714 = null;var count__23515_25715 = 0;var i__23516_25716 = 0;while(true){
if((i__23516_25716 < count__23515_25715))
{var arg__21743__auto___25717 = cljs.core._nth.call(null,chunk__23514_25714,i__23516_25716);a__21742__auto__.push(arg__21743__auto___25717);
{
var G__25718 = seq__23513_25713;
var G__25719 = chunk__23514_25714;
var G__25720 = count__23515_25715;
var G__25721 = (i__23516_25716 + 1);
seq__23513_25713 = G__25718;
chunk__23514_25714 = G__25719;
count__23515_25715 = G__25720;
i__23516_25716 = G__25721;
continue;
}
} else
{var temp__4092__auto___25722 = cljs.core.seq.call(null,seq__23513_25713);if(temp__4092__auto___25722)
{var seq__23513_25723__$1 = temp__4092__auto___25722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23513_25723__$1))
{var c__20324__auto___25724 = cljs.core.chunk_first.call(null,seq__23513_25723__$1);{
var G__25725 = cljs.core.chunk_rest.call(null,seq__23513_25723__$1);
var G__25726 = c__20324__auto___25724;
var G__25727 = cljs.core.count.call(null,c__20324__auto___25724);
var G__25728 = 0;
seq__23513_25713 = G__25725;
chunk__23514_25714 = G__25726;
count__23515_25715 = G__25727;
i__23516_25716 = G__25728;
continue;
}
} else
{var arg__21743__auto___25729 = cljs.core.first.call(null,seq__23513_25723__$1);a__21742__auto__.push(arg__21743__auto___25729);
{
var G__25730 = cljs.core.next.call(null,seq__23513_25723__$1);
var G__25731 = null;
var G__25732 = 0;
var G__25733 = 0;
seq__23513_25713 = G__25730;
chunk__23514_25714 = G__25731;
count__23515_25715 = G__25732;
i__23516_25716 = G__25733;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__21742__auto__);
};
var style = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__21741__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__25734){
var args__21741__auto__ = cljs.core.seq(arglist__25734);
return style__delegate(args__21741__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23521_25735 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23522_25736 = null;var count__23523_25737 = 0;var i__23524_25738 = 0;while(true){
if((i__23524_25738 < count__23523_25737))
{var arg__21743__auto___25739 = cljs.core._nth.call(null,chunk__23522_25736,i__23524_25738);a__21742__auto__.push(arg__21743__auto___25739);
{
var G__25740 = seq__23521_25735;
var G__25741 = chunk__23522_25736;
var G__25742 = count__23523_25737;
var G__25743 = (i__23524_25738 + 1);
seq__23521_25735 = G__25740;
chunk__23522_25736 = G__25741;
count__23523_25737 = G__25742;
i__23524_25738 = G__25743;
continue;
}
} else
{var temp__4092__auto___25744 = cljs.core.seq.call(null,seq__23521_25735);if(temp__4092__auto___25744)
{var seq__23521_25745__$1 = temp__4092__auto___25744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23521_25745__$1))
{var c__20324__auto___25746 = cljs.core.chunk_first.call(null,seq__23521_25745__$1);{
var G__25747 = cljs.core.chunk_rest.call(null,seq__23521_25745__$1);
var G__25748 = c__20324__auto___25746;
var G__25749 = cljs.core.count.call(null,c__20324__auto___25746);
var G__25750 = 0;
seq__23521_25735 = G__25747;
chunk__23522_25736 = G__25748;
count__23523_25737 = G__25749;
i__23524_25738 = G__25750;
continue;
}
} else
{var arg__21743__auto___25751 = cljs.core.first.call(null,seq__23521_25745__$1);a__21742__auto__.push(arg__21743__auto___25751);
{
var G__25752 = cljs.core.next.call(null,seq__23521_25745__$1);
var G__25753 = null;
var G__25754 = 0;
var G__25755 = 0;
seq__23521_25735 = G__25752;
chunk__23522_25736 = G__25753;
count__23523_25737 = G__25754;
i__23524_25738 = G__25755;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__21742__auto__);
};
var sub = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__21741__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__25756){
var args__21741__auto__ = cljs.core.seq(arglist__25756);
return sub__delegate(args__21741__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23529_25757 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23530_25758 = null;var count__23531_25759 = 0;var i__23532_25760 = 0;while(true){
if((i__23532_25760 < count__23531_25759))
{var arg__21743__auto___25761 = cljs.core._nth.call(null,chunk__23530_25758,i__23532_25760);a__21742__auto__.push(arg__21743__auto___25761);
{
var G__25762 = seq__23529_25757;
var G__25763 = chunk__23530_25758;
var G__25764 = count__23531_25759;
var G__25765 = (i__23532_25760 + 1);
seq__23529_25757 = G__25762;
chunk__23530_25758 = G__25763;
count__23531_25759 = G__25764;
i__23532_25760 = G__25765;
continue;
}
} else
{var temp__4092__auto___25766 = cljs.core.seq.call(null,seq__23529_25757);if(temp__4092__auto___25766)
{var seq__23529_25767__$1 = temp__4092__auto___25766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23529_25767__$1))
{var c__20324__auto___25768 = cljs.core.chunk_first.call(null,seq__23529_25767__$1);{
var G__25769 = cljs.core.chunk_rest.call(null,seq__23529_25767__$1);
var G__25770 = c__20324__auto___25768;
var G__25771 = cljs.core.count.call(null,c__20324__auto___25768);
var G__25772 = 0;
seq__23529_25757 = G__25769;
chunk__23530_25758 = G__25770;
count__23531_25759 = G__25771;
i__23532_25760 = G__25772;
continue;
}
} else
{var arg__21743__auto___25773 = cljs.core.first.call(null,seq__23529_25767__$1);a__21742__auto__.push(arg__21743__auto___25773);
{
var G__25774 = cljs.core.next.call(null,seq__23529_25767__$1);
var G__25775 = null;
var G__25776 = 0;
var G__25777 = 0;
seq__23529_25757 = G__25774;
chunk__23530_25758 = G__25775;
count__23531_25759 = G__25776;
i__23532_25760 = G__25777;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__21742__auto__);
};
var summary = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__21741__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__25778){
var args__21741__auto__ = cljs.core.seq(arglist__25778);
return summary__delegate(args__21741__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23537_25779 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23538_25780 = null;var count__23539_25781 = 0;var i__23540_25782 = 0;while(true){
if((i__23540_25782 < count__23539_25781))
{var arg__21743__auto___25783 = cljs.core._nth.call(null,chunk__23538_25780,i__23540_25782);a__21742__auto__.push(arg__21743__auto___25783);
{
var G__25784 = seq__23537_25779;
var G__25785 = chunk__23538_25780;
var G__25786 = count__23539_25781;
var G__25787 = (i__23540_25782 + 1);
seq__23537_25779 = G__25784;
chunk__23538_25780 = G__25785;
count__23539_25781 = G__25786;
i__23540_25782 = G__25787;
continue;
}
} else
{var temp__4092__auto___25788 = cljs.core.seq.call(null,seq__23537_25779);if(temp__4092__auto___25788)
{var seq__23537_25789__$1 = temp__4092__auto___25788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23537_25789__$1))
{var c__20324__auto___25790 = cljs.core.chunk_first.call(null,seq__23537_25789__$1);{
var G__25791 = cljs.core.chunk_rest.call(null,seq__23537_25789__$1);
var G__25792 = c__20324__auto___25790;
var G__25793 = cljs.core.count.call(null,c__20324__auto___25790);
var G__25794 = 0;
seq__23537_25779 = G__25791;
chunk__23538_25780 = G__25792;
count__23539_25781 = G__25793;
i__23540_25782 = G__25794;
continue;
}
} else
{var arg__21743__auto___25795 = cljs.core.first.call(null,seq__23537_25789__$1);a__21742__auto__.push(arg__21743__auto___25795);
{
var G__25796 = cljs.core.next.call(null,seq__23537_25789__$1);
var G__25797 = null;
var G__25798 = 0;
var G__25799 = 0;
seq__23537_25779 = G__25796;
chunk__23538_25780 = G__25797;
count__23539_25781 = G__25798;
i__23540_25782 = G__25799;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__21742__auto__);
};
var sup = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__21741__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__25800){
var args__21741__auto__ = cljs.core.seq(arglist__25800);
return sup__delegate(args__21741__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23545_25801 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23546_25802 = null;var count__23547_25803 = 0;var i__23548_25804 = 0;while(true){
if((i__23548_25804 < count__23547_25803))
{var arg__21743__auto___25805 = cljs.core._nth.call(null,chunk__23546_25802,i__23548_25804);a__21742__auto__.push(arg__21743__auto___25805);
{
var G__25806 = seq__23545_25801;
var G__25807 = chunk__23546_25802;
var G__25808 = count__23547_25803;
var G__25809 = (i__23548_25804 + 1);
seq__23545_25801 = G__25806;
chunk__23546_25802 = G__25807;
count__23547_25803 = G__25808;
i__23548_25804 = G__25809;
continue;
}
} else
{var temp__4092__auto___25810 = cljs.core.seq.call(null,seq__23545_25801);if(temp__4092__auto___25810)
{var seq__23545_25811__$1 = temp__4092__auto___25810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23545_25811__$1))
{var c__20324__auto___25812 = cljs.core.chunk_first.call(null,seq__23545_25811__$1);{
var G__25813 = cljs.core.chunk_rest.call(null,seq__23545_25811__$1);
var G__25814 = c__20324__auto___25812;
var G__25815 = cljs.core.count.call(null,c__20324__auto___25812);
var G__25816 = 0;
seq__23545_25801 = G__25813;
chunk__23546_25802 = G__25814;
count__23547_25803 = G__25815;
i__23548_25804 = G__25816;
continue;
}
} else
{var arg__21743__auto___25817 = cljs.core.first.call(null,seq__23545_25811__$1);a__21742__auto__.push(arg__21743__auto___25817);
{
var G__25818 = cljs.core.next.call(null,seq__23545_25811__$1);
var G__25819 = null;
var G__25820 = 0;
var G__25821 = 0;
seq__23545_25801 = G__25818;
chunk__23546_25802 = G__25819;
count__23547_25803 = G__25820;
i__23548_25804 = G__25821;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__21742__auto__);
};
var table = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__21741__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__25822){
var args__21741__auto__ = cljs.core.seq(arglist__25822);
return table__delegate(args__21741__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23553_25823 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23554_25824 = null;var count__23555_25825 = 0;var i__23556_25826 = 0;while(true){
if((i__23556_25826 < count__23555_25825))
{var arg__21743__auto___25827 = cljs.core._nth.call(null,chunk__23554_25824,i__23556_25826);a__21742__auto__.push(arg__21743__auto___25827);
{
var G__25828 = seq__23553_25823;
var G__25829 = chunk__23554_25824;
var G__25830 = count__23555_25825;
var G__25831 = (i__23556_25826 + 1);
seq__23553_25823 = G__25828;
chunk__23554_25824 = G__25829;
count__23555_25825 = G__25830;
i__23556_25826 = G__25831;
continue;
}
} else
{var temp__4092__auto___25832 = cljs.core.seq.call(null,seq__23553_25823);if(temp__4092__auto___25832)
{var seq__23553_25833__$1 = temp__4092__auto___25832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23553_25833__$1))
{var c__20324__auto___25834 = cljs.core.chunk_first.call(null,seq__23553_25833__$1);{
var G__25835 = cljs.core.chunk_rest.call(null,seq__23553_25833__$1);
var G__25836 = c__20324__auto___25834;
var G__25837 = cljs.core.count.call(null,c__20324__auto___25834);
var G__25838 = 0;
seq__23553_25823 = G__25835;
chunk__23554_25824 = G__25836;
count__23555_25825 = G__25837;
i__23556_25826 = G__25838;
continue;
}
} else
{var arg__21743__auto___25839 = cljs.core.first.call(null,seq__23553_25833__$1);a__21742__auto__.push(arg__21743__auto___25839);
{
var G__25840 = cljs.core.next.call(null,seq__23553_25833__$1);
var G__25841 = null;
var G__25842 = 0;
var G__25843 = 0;
seq__23553_25823 = G__25840;
chunk__23554_25824 = G__25841;
count__23555_25825 = G__25842;
i__23556_25826 = G__25843;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__21742__auto__);
};
var tbody = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__21741__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__25844){
var args__21741__auto__ = cljs.core.seq(arglist__25844);
return tbody__delegate(args__21741__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23561_25845 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23562_25846 = null;var count__23563_25847 = 0;var i__23564_25848 = 0;while(true){
if((i__23564_25848 < count__23563_25847))
{var arg__21743__auto___25849 = cljs.core._nth.call(null,chunk__23562_25846,i__23564_25848);a__21742__auto__.push(arg__21743__auto___25849);
{
var G__25850 = seq__23561_25845;
var G__25851 = chunk__23562_25846;
var G__25852 = count__23563_25847;
var G__25853 = (i__23564_25848 + 1);
seq__23561_25845 = G__25850;
chunk__23562_25846 = G__25851;
count__23563_25847 = G__25852;
i__23564_25848 = G__25853;
continue;
}
} else
{var temp__4092__auto___25854 = cljs.core.seq.call(null,seq__23561_25845);if(temp__4092__auto___25854)
{var seq__23561_25855__$1 = temp__4092__auto___25854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23561_25855__$1))
{var c__20324__auto___25856 = cljs.core.chunk_first.call(null,seq__23561_25855__$1);{
var G__25857 = cljs.core.chunk_rest.call(null,seq__23561_25855__$1);
var G__25858 = c__20324__auto___25856;
var G__25859 = cljs.core.count.call(null,c__20324__auto___25856);
var G__25860 = 0;
seq__23561_25845 = G__25857;
chunk__23562_25846 = G__25858;
count__23563_25847 = G__25859;
i__23564_25848 = G__25860;
continue;
}
} else
{var arg__21743__auto___25861 = cljs.core.first.call(null,seq__23561_25855__$1);a__21742__auto__.push(arg__21743__auto___25861);
{
var G__25862 = cljs.core.next.call(null,seq__23561_25855__$1);
var G__25863 = null;
var G__25864 = 0;
var G__25865 = 0;
seq__23561_25845 = G__25862;
chunk__23562_25846 = G__25863;
count__23563_25847 = G__25864;
i__23564_25848 = G__25865;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__21742__auto__);
};
var td = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__21741__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__25866){
var args__21741__auto__ = cljs.core.seq(arglist__25866);
return td__delegate(args__21741__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23569_25867 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23570_25868 = null;var count__23571_25869 = 0;var i__23572_25870 = 0;while(true){
if((i__23572_25870 < count__23571_25869))
{var arg__21743__auto___25871 = cljs.core._nth.call(null,chunk__23570_25868,i__23572_25870);a__21742__auto__.push(arg__21743__auto___25871);
{
var G__25872 = seq__23569_25867;
var G__25873 = chunk__23570_25868;
var G__25874 = count__23571_25869;
var G__25875 = (i__23572_25870 + 1);
seq__23569_25867 = G__25872;
chunk__23570_25868 = G__25873;
count__23571_25869 = G__25874;
i__23572_25870 = G__25875;
continue;
}
} else
{var temp__4092__auto___25876 = cljs.core.seq.call(null,seq__23569_25867);if(temp__4092__auto___25876)
{var seq__23569_25877__$1 = temp__4092__auto___25876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23569_25877__$1))
{var c__20324__auto___25878 = cljs.core.chunk_first.call(null,seq__23569_25877__$1);{
var G__25879 = cljs.core.chunk_rest.call(null,seq__23569_25877__$1);
var G__25880 = c__20324__auto___25878;
var G__25881 = cljs.core.count.call(null,c__20324__auto___25878);
var G__25882 = 0;
seq__23569_25867 = G__25879;
chunk__23570_25868 = G__25880;
count__23571_25869 = G__25881;
i__23572_25870 = G__25882;
continue;
}
} else
{var arg__21743__auto___25883 = cljs.core.first.call(null,seq__23569_25877__$1);a__21742__auto__.push(arg__21743__auto___25883);
{
var G__25884 = cljs.core.next.call(null,seq__23569_25877__$1);
var G__25885 = null;
var G__25886 = 0;
var G__25887 = 0;
seq__23569_25867 = G__25884;
chunk__23570_25868 = G__25885;
count__23571_25869 = G__25886;
i__23572_25870 = G__25887;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__21742__auto__);
};
var textarea = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__21741__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__25888){
var args__21741__auto__ = cljs.core.seq(arglist__25888);
return textarea__delegate(args__21741__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23577_25889 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23578_25890 = null;var count__23579_25891 = 0;var i__23580_25892 = 0;while(true){
if((i__23580_25892 < count__23579_25891))
{var arg__21743__auto___25893 = cljs.core._nth.call(null,chunk__23578_25890,i__23580_25892);a__21742__auto__.push(arg__21743__auto___25893);
{
var G__25894 = seq__23577_25889;
var G__25895 = chunk__23578_25890;
var G__25896 = count__23579_25891;
var G__25897 = (i__23580_25892 + 1);
seq__23577_25889 = G__25894;
chunk__23578_25890 = G__25895;
count__23579_25891 = G__25896;
i__23580_25892 = G__25897;
continue;
}
} else
{var temp__4092__auto___25898 = cljs.core.seq.call(null,seq__23577_25889);if(temp__4092__auto___25898)
{var seq__23577_25899__$1 = temp__4092__auto___25898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23577_25899__$1))
{var c__20324__auto___25900 = cljs.core.chunk_first.call(null,seq__23577_25899__$1);{
var G__25901 = cljs.core.chunk_rest.call(null,seq__23577_25899__$1);
var G__25902 = c__20324__auto___25900;
var G__25903 = cljs.core.count.call(null,c__20324__auto___25900);
var G__25904 = 0;
seq__23577_25889 = G__25901;
chunk__23578_25890 = G__25902;
count__23579_25891 = G__25903;
i__23580_25892 = G__25904;
continue;
}
} else
{var arg__21743__auto___25905 = cljs.core.first.call(null,seq__23577_25899__$1);a__21742__auto__.push(arg__21743__auto___25905);
{
var G__25906 = cljs.core.next.call(null,seq__23577_25899__$1);
var G__25907 = null;
var G__25908 = 0;
var G__25909 = 0;
seq__23577_25889 = G__25906;
chunk__23578_25890 = G__25907;
count__23579_25891 = G__25908;
i__23580_25892 = G__25909;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__21742__auto__);
};
var tfoot = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__21741__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__25910){
var args__21741__auto__ = cljs.core.seq(arglist__25910);
return tfoot__delegate(args__21741__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23585_25911 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23586_25912 = null;var count__23587_25913 = 0;var i__23588_25914 = 0;while(true){
if((i__23588_25914 < count__23587_25913))
{var arg__21743__auto___25915 = cljs.core._nth.call(null,chunk__23586_25912,i__23588_25914);a__21742__auto__.push(arg__21743__auto___25915);
{
var G__25916 = seq__23585_25911;
var G__25917 = chunk__23586_25912;
var G__25918 = count__23587_25913;
var G__25919 = (i__23588_25914 + 1);
seq__23585_25911 = G__25916;
chunk__23586_25912 = G__25917;
count__23587_25913 = G__25918;
i__23588_25914 = G__25919;
continue;
}
} else
{var temp__4092__auto___25920 = cljs.core.seq.call(null,seq__23585_25911);if(temp__4092__auto___25920)
{var seq__23585_25921__$1 = temp__4092__auto___25920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23585_25921__$1))
{var c__20324__auto___25922 = cljs.core.chunk_first.call(null,seq__23585_25921__$1);{
var G__25923 = cljs.core.chunk_rest.call(null,seq__23585_25921__$1);
var G__25924 = c__20324__auto___25922;
var G__25925 = cljs.core.count.call(null,c__20324__auto___25922);
var G__25926 = 0;
seq__23585_25911 = G__25923;
chunk__23586_25912 = G__25924;
count__23587_25913 = G__25925;
i__23588_25914 = G__25926;
continue;
}
} else
{var arg__21743__auto___25927 = cljs.core.first.call(null,seq__23585_25921__$1);a__21742__auto__.push(arg__21743__auto___25927);
{
var G__25928 = cljs.core.next.call(null,seq__23585_25921__$1);
var G__25929 = null;
var G__25930 = 0;
var G__25931 = 0;
seq__23585_25911 = G__25928;
chunk__23586_25912 = G__25929;
count__23587_25913 = G__25930;
i__23588_25914 = G__25931;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__21742__auto__);
};
var th = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__21741__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__25932){
var args__21741__auto__ = cljs.core.seq(arglist__25932);
return th__delegate(args__21741__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23593_25933 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23594_25934 = null;var count__23595_25935 = 0;var i__23596_25936 = 0;while(true){
if((i__23596_25936 < count__23595_25935))
{var arg__21743__auto___25937 = cljs.core._nth.call(null,chunk__23594_25934,i__23596_25936);a__21742__auto__.push(arg__21743__auto___25937);
{
var G__25938 = seq__23593_25933;
var G__25939 = chunk__23594_25934;
var G__25940 = count__23595_25935;
var G__25941 = (i__23596_25936 + 1);
seq__23593_25933 = G__25938;
chunk__23594_25934 = G__25939;
count__23595_25935 = G__25940;
i__23596_25936 = G__25941;
continue;
}
} else
{var temp__4092__auto___25942 = cljs.core.seq.call(null,seq__23593_25933);if(temp__4092__auto___25942)
{var seq__23593_25943__$1 = temp__4092__auto___25942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23593_25943__$1))
{var c__20324__auto___25944 = cljs.core.chunk_first.call(null,seq__23593_25943__$1);{
var G__25945 = cljs.core.chunk_rest.call(null,seq__23593_25943__$1);
var G__25946 = c__20324__auto___25944;
var G__25947 = cljs.core.count.call(null,c__20324__auto___25944);
var G__25948 = 0;
seq__23593_25933 = G__25945;
chunk__23594_25934 = G__25946;
count__23595_25935 = G__25947;
i__23596_25936 = G__25948;
continue;
}
} else
{var arg__21743__auto___25949 = cljs.core.first.call(null,seq__23593_25943__$1);a__21742__auto__.push(arg__21743__auto___25949);
{
var G__25950 = cljs.core.next.call(null,seq__23593_25943__$1);
var G__25951 = null;
var G__25952 = 0;
var G__25953 = 0;
seq__23593_25933 = G__25950;
chunk__23594_25934 = G__25951;
count__23595_25935 = G__25952;
i__23596_25936 = G__25953;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__21742__auto__);
};
var thead = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__21741__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__25954){
var args__21741__auto__ = cljs.core.seq(arglist__25954);
return thead__delegate(args__21741__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23601_25955 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23602_25956 = null;var count__23603_25957 = 0;var i__23604_25958 = 0;while(true){
if((i__23604_25958 < count__23603_25957))
{var arg__21743__auto___25959 = cljs.core._nth.call(null,chunk__23602_25956,i__23604_25958);a__21742__auto__.push(arg__21743__auto___25959);
{
var G__25960 = seq__23601_25955;
var G__25961 = chunk__23602_25956;
var G__25962 = count__23603_25957;
var G__25963 = (i__23604_25958 + 1);
seq__23601_25955 = G__25960;
chunk__23602_25956 = G__25961;
count__23603_25957 = G__25962;
i__23604_25958 = G__25963;
continue;
}
} else
{var temp__4092__auto___25964 = cljs.core.seq.call(null,seq__23601_25955);if(temp__4092__auto___25964)
{var seq__23601_25965__$1 = temp__4092__auto___25964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23601_25965__$1))
{var c__20324__auto___25966 = cljs.core.chunk_first.call(null,seq__23601_25965__$1);{
var G__25967 = cljs.core.chunk_rest.call(null,seq__23601_25965__$1);
var G__25968 = c__20324__auto___25966;
var G__25969 = cljs.core.count.call(null,c__20324__auto___25966);
var G__25970 = 0;
seq__23601_25955 = G__25967;
chunk__23602_25956 = G__25968;
count__23603_25957 = G__25969;
i__23604_25958 = G__25970;
continue;
}
} else
{var arg__21743__auto___25971 = cljs.core.first.call(null,seq__23601_25965__$1);a__21742__auto__.push(arg__21743__auto___25971);
{
var G__25972 = cljs.core.next.call(null,seq__23601_25965__$1);
var G__25973 = null;
var G__25974 = 0;
var G__25975 = 0;
seq__23601_25955 = G__25972;
chunk__23602_25956 = G__25973;
count__23603_25957 = G__25974;
i__23604_25958 = G__25975;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__21742__auto__);
};
var time = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__21741__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__25976){
var args__21741__auto__ = cljs.core.seq(arglist__25976);
return time__delegate(args__21741__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23609_25977 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23610_25978 = null;var count__23611_25979 = 0;var i__23612_25980 = 0;while(true){
if((i__23612_25980 < count__23611_25979))
{var arg__21743__auto___25981 = cljs.core._nth.call(null,chunk__23610_25978,i__23612_25980);a__21742__auto__.push(arg__21743__auto___25981);
{
var G__25982 = seq__23609_25977;
var G__25983 = chunk__23610_25978;
var G__25984 = count__23611_25979;
var G__25985 = (i__23612_25980 + 1);
seq__23609_25977 = G__25982;
chunk__23610_25978 = G__25983;
count__23611_25979 = G__25984;
i__23612_25980 = G__25985;
continue;
}
} else
{var temp__4092__auto___25986 = cljs.core.seq.call(null,seq__23609_25977);if(temp__4092__auto___25986)
{var seq__23609_25987__$1 = temp__4092__auto___25986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23609_25987__$1))
{var c__20324__auto___25988 = cljs.core.chunk_first.call(null,seq__23609_25987__$1);{
var G__25989 = cljs.core.chunk_rest.call(null,seq__23609_25987__$1);
var G__25990 = c__20324__auto___25988;
var G__25991 = cljs.core.count.call(null,c__20324__auto___25988);
var G__25992 = 0;
seq__23609_25977 = G__25989;
chunk__23610_25978 = G__25990;
count__23611_25979 = G__25991;
i__23612_25980 = G__25992;
continue;
}
} else
{var arg__21743__auto___25993 = cljs.core.first.call(null,seq__23609_25987__$1);a__21742__auto__.push(arg__21743__auto___25993);
{
var G__25994 = cljs.core.next.call(null,seq__23609_25987__$1);
var G__25995 = null;
var G__25996 = 0;
var G__25997 = 0;
seq__23609_25977 = G__25994;
chunk__23610_25978 = G__25995;
count__23611_25979 = G__25996;
i__23612_25980 = G__25997;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__21742__auto__);
};
var title = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__21741__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__25998){
var args__21741__auto__ = cljs.core.seq(arglist__25998);
return title__delegate(args__21741__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23617_25999 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23618_26000 = null;var count__23619_26001 = 0;var i__23620_26002 = 0;while(true){
if((i__23620_26002 < count__23619_26001))
{var arg__21743__auto___26003 = cljs.core._nth.call(null,chunk__23618_26000,i__23620_26002);a__21742__auto__.push(arg__21743__auto___26003);
{
var G__26004 = seq__23617_25999;
var G__26005 = chunk__23618_26000;
var G__26006 = count__23619_26001;
var G__26007 = (i__23620_26002 + 1);
seq__23617_25999 = G__26004;
chunk__23618_26000 = G__26005;
count__23619_26001 = G__26006;
i__23620_26002 = G__26007;
continue;
}
} else
{var temp__4092__auto___26008 = cljs.core.seq.call(null,seq__23617_25999);if(temp__4092__auto___26008)
{var seq__23617_26009__$1 = temp__4092__auto___26008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23617_26009__$1))
{var c__20324__auto___26010 = cljs.core.chunk_first.call(null,seq__23617_26009__$1);{
var G__26011 = cljs.core.chunk_rest.call(null,seq__23617_26009__$1);
var G__26012 = c__20324__auto___26010;
var G__26013 = cljs.core.count.call(null,c__20324__auto___26010);
var G__26014 = 0;
seq__23617_25999 = G__26011;
chunk__23618_26000 = G__26012;
count__23619_26001 = G__26013;
i__23620_26002 = G__26014;
continue;
}
} else
{var arg__21743__auto___26015 = cljs.core.first.call(null,seq__23617_26009__$1);a__21742__auto__.push(arg__21743__auto___26015);
{
var G__26016 = cljs.core.next.call(null,seq__23617_26009__$1);
var G__26017 = null;
var G__26018 = 0;
var G__26019 = 0;
seq__23617_25999 = G__26016;
chunk__23618_26000 = G__26017;
count__23619_26001 = G__26018;
i__23620_26002 = G__26019;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__21742__auto__);
};
var tr = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__21741__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__26020){
var args__21741__auto__ = cljs.core.seq(arglist__26020);
return tr__delegate(args__21741__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23625_26021 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23626_26022 = null;var count__23627_26023 = 0;var i__23628_26024 = 0;while(true){
if((i__23628_26024 < count__23627_26023))
{var arg__21743__auto___26025 = cljs.core._nth.call(null,chunk__23626_26022,i__23628_26024);a__21742__auto__.push(arg__21743__auto___26025);
{
var G__26026 = seq__23625_26021;
var G__26027 = chunk__23626_26022;
var G__26028 = count__23627_26023;
var G__26029 = (i__23628_26024 + 1);
seq__23625_26021 = G__26026;
chunk__23626_26022 = G__26027;
count__23627_26023 = G__26028;
i__23628_26024 = G__26029;
continue;
}
} else
{var temp__4092__auto___26030 = cljs.core.seq.call(null,seq__23625_26021);if(temp__4092__auto___26030)
{var seq__23625_26031__$1 = temp__4092__auto___26030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23625_26031__$1))
{var c__20324__auto___26032 = cljs.core.chunk_first.call(null,seq__23625_26031__$1);{
var G__26033 = cljs.core.chunk_rest.call(null,seq__23625_26031__$1);
var G__26034 = c__20324__auto___26032;
var G__26035 = cljs.core.count.call(null,c__20324__auto___26032);
var G__26036 = 0;
seq__23625_26021 = G__26033;
chunk__23626_26022 = G__26034;
count__23627_26023 = G__26035;
i__23628_26024 = G__26036;
continue;
}
} else
{var arg__21743__auto___26037 = cljs.core.first.call(null,seq__23625_26031__$1);a__21742__auto__.push(arg__21743__auto___26037);
{
var G__26038 = cljs.core.next.call(null,seq__23625_26031__$1);
var G__26039 = null;
var G__26040 = 0;
var G__26041 = 0;
seq__23625_26021 = G__26038;
chunk__23626_26022 = G__26039;
count__23627_26023 = G__26040;
i__23628_26024 = G__26041;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__21742__auto__);
};
var track = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__21741__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__26042){
var args__21741__auto__ = cljs.core.seq(arglist__26042);
return track__delegate(args__21741__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23633_26043 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23634_26044 = null;var count__23635_26045 = 0;var i__23636_26046 = 0;while(true){
if((i__23636_26046 < count__23635_26045))
{var arg__21743__auto___26047 = cljs.core._nth.call(null,chunk__23634_26044,i__23636_26046);a__21742__auto__.push(arg__21743__auto___26047);
{
var G__26048 = seq__23633_26043;
var G__26049 = chunk__23634_26044;
var G__26050 = count__23635_26045;
var G__26051 = (i__23636_26046 + 1);
seq__23633_26043 = G__26048;
chunk__23634_26044 = G__26049;
count__23635_26045 = G__26050;
i__23636_26046 = G__26051;
continue;
}
} else
{var temp__4092__auto___26052 = cljs.core.seq.call(null,seq__23633_26043);if(temp__4092__auto___26052)
{var seq__23633_26053__$1 = temp__4092__auto___26052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23633_26053__$1))
{var c__20324__auto___26054 = cljs.core.chunk_first.call(null,seq__23633_26053__$1);{
var G__26055 = cljs.core.chunk_rest.call(null,seq__23633_26053__$1);
var G__26056 = c__20324__auto___26054;
var G__26057 = cljs.core.count.call(null,c__20324__auto___26054);
var G__26058 = 0;
seq__23633_26043 = G__26055;
chunk__23634_26044 = G__26056;
count__23635_26045 = G__26057;
i__23636_26046 = G__26058;
continue;
}
} else
{var arg__21743__auto___26059 = cljs.core.first.call(null,seq__23633_26053__$1);a__21742__auto__.push(arg__21743__auto___26059);
{
var G__26060 = cljs.core.next.call(null,seq__23633_26053__$1);
var G__26061 = null;
var G__26062 = 0;
var G__26063 = 0;
seq__23633_26043 = G__26060;
chunk__23634_26044 = G__26061;
count__23635_26045 = G__26062;
i__23636_26046 = G__26063;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__21742__auto__);
};
var u = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__21741__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__26064){
var args__21741__auto__ = cljs.core.seq(arglist__26064);
return u__delegate(args__21741__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23641_26065 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23642_26066 = null;var count__23643_26067 = 0;var i__23644_26068 = 0;while(true){
if((i__23644_26068 < count__23643_26067))
{var arg__21743__auto___26069 = cljs.core._nth.call(null,chunk__23642_26066,i__23644_26068);a__21742__auto__.push(arg__21743__auto___26069);
{
var G__26070 = seq__23641_26065;
var G__26071 = chunk__23642_26066;
var G__26072 = count__23643_26067;
var G__26073 = (i__23644_26068 + 1);
seq__23641_26065 = G__26070;
chunk__23642_26066 = G__26071;
count__23643_26067 = G__26072;
i__23644_26068 = G__26073;
continue;
}
} else
{var temp__4092__auto___26074 = cljs.core.seq.call(null,seq__23641_26065);if(temp__4092__auto___26074)
{var seq__23641_26075__$1 = temp__4092__auto___26074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23641_26075__$1))
{var c__20324__auto___26076 = cljs.core.chunk_first.call(null,seq__23641_26075__$1);{
var G__26077 = cljs.core.chunk_rest.call(null,seq__23641_26075__$1);
var G__26078 = c__20324__auto___26076;
var G__26079 = cljs.core.count.call(null,c__20324__auto___26076);
var G__26080 = 0;
seq__23641_26065 = G__26077;
chunk__23642_26066 = G__26078;
count__23643_26067 = G__26079;
i__23644_26068 = G__26080;
continue;
}
} else
{var arg__21743__auto___26081 = cljs.core.first.call(null,seq__23641_26075__$1);a__21742__auto__.push(arg__21743__auto___26081);
{
var G__26082 = cljs.core.next.call(null,seq__23641_26075__$1);
var G__26083 = null;
var G__26084 = 0;
var G__26085 = 0;
seq__23641_26065 = G__26082;
chunk__23642_26066 = G__26083;
count__23643_26067 = G__26084;
i__23644_26068 = G__26085;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__21742__auto__);
};
var ul = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__21741__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__26086){
var args__21741__auto__ = cljs.core.seq(arglist__26086);
return ul__delegate(args__21741__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23649_26087 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23650_26088 = null;var count__23651_26089 = 0;var i__23652_26090 = 0;while(true){
if((i__23652_26090 < count__23651_26089))
{var arg__21743__auto___26091 = cljs.core._nth.call(null,chunk__23650_26088,i__23652_26090);a__21742__auto__.push(arg__21743__auto___26091);
{
var G__26092 = seq__23649_26087;
var G__26093 = chunk__23650_26088;
var G__26094 = count__23651_26089;
var G__26095 = (i__23652_26090 + 1);
seq__23649_26087 = G__26092;
chunk__23650_26088 = G__26093;
count__23651_26089 = G__26094;
i__23652_26090 = G__26095;
continue;
}
} else
{var temp__4092__auto___26096 = cljs.core.seq.call(null,seq__23649_26087);if(temp__4092__auto___26096)
{var seq__23649_26097__$1 = temp__4092__auto___26096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23649_26097__$1))
{var c__20324__auto___26098 = cljs.core.chunk_first.call(null,seq__23649_26097__$1);{
var G__26099 = cljs.core.chunk_rest.call(null,seq__23649_26097__$1);
var G__26100 = c__20324__auto___26098;
var G__26101 = cljs.core.count.call(null,c__20324__auto___26098);
var G__26102 = 0;
seq__23649_26087 = G__26099;
chunk__23650_26088 = G__26100;
count__23651_26089 = G__26101;
i__23652_26090 = G__26102;
continue;
}
} else
{var arg__21743__auto___26103 = cljs.core.first.call(null,seq__23649_26097__$1);a__21742__auto__.push(arg__21743__auto___26103);
{
var G__26104 = cljs.core.next.call(null,seq__23649_26097__$1);
var G__26105 = null;
var G__26106 = 0;
var G__26107 = 0;
seq__23649_26087 = G__26104;
chunk__23650_26088 = G__26105;
count__23651_26089 = G__26106;
i__23652_26090 = G__26107;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__21742__auto__);
};
var var$ = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__21741__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__26108){
var args__21741__auto__ = cljs.core.seq(arglist__26108);
return var$__delegate(args__21741__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23657_26109 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23658_26110 = null;var count__23659_26111 = 0;var i__23660_26112 = 0;while(true){
if((i__23660_26112 < count__23659_26111))
{var arg__21743__auto___26113 = cljs.core._nth.call(null,chunk__23658_26110,i__23660_26112);a__21742__auto__.push(arg__21743__auto___26113);
{
var G__26114 = seq__23657_26109;
var G__26115 = chunk__23658_26110;
var G__26116 = count__23659_26111;
var G__26117 = (i__23660_26112 + 1);
seq__23657_26109 = G__26114;
chunk__23658_26110 = G__26115;
count__23659_26111 = G__26116;
i__23660_26112 = G__26117;
continue;
}
} else
{var temp__4092__auto___26118 = cljs.core.seq.call(null,seq__23657_26109);if(temp__4092__auto___26118)
{var seq__23657_26119__$1 = temp__4092__auto___26118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23657_26119__$1))
{var c__20324__auto___26120 = cljs.core.chunk_first.call(null,seq__23657_26119__$1);{
var G__26121 = cljs.core.chunk_rest.call(null,seq__23657_26119__$1);
var G__26122 = c__20324__auto___26120;
var G__26123 = cljs.core.count.call(null,c__20324__auto___26120);
var G__26124 = 0;
seq__23657_26109 = G__26121;
chunk__23658_26110 = G__26122;
count__23659_26111 = G__26123;
i__23660_26112 = G__26124;
continue;
}
} else
{var arg__21743__auto___26125 = cljs.core.first.call(null,seq__23657_26119__$1);a__21742__auto__.push(arg__21743__auto___26125);
{
var G__26126 = cljs.core.next.call(null,seq__23657_26119__$1);
var G__26127 = null;
var G__26128 = 0;
var G__26129 = 0;
seq__23657_26109 = G__26126;
chunk__23658_26110 = G__26127;
count__23659_26111 = G__26128;
i__23660_26112 = G__26129;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__21742__auto__);
};
var video = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__21741__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__26130){
var args__21741__auto__ = cljs.core.seq(arglist__26130);
return video__delegate(args__21741__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23665_26131 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23666_26132 = null;var count__23667_26133 = 0;var i__23668_26134 = 0;while(true){
if((i__23668_26134 < count__23667_26133))
{var arg__21743__auto___26135 = cljs.core._nth.call(null,chunk__23666_26132,i__23668_26134);a__21742__auto__.push(arg__21743__auto___26135);
{
var G__26136 = seq__23665_26131;
var G__26137 = chunk__23666_26132;
var G__26138 = count__23667_26133;
var G__26139 = (i__23668_26134 + 1);
seq__23665_26131 = G__26136;
chunk__23666_26132 = G__26137;
count__23667_26133 = G__26138;
i__23668_26134 = G__26139;
continue;
}
} else
{var temp__4092__auto___26140 = cljs.core.seq.call(null,seq__23665_26131);if(temp__4092__auto___26140)
{var seq__23665_26141__$1 = temp__4092__auto___26140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23665_26141__$1))
{var c__20324__auto___26142 = cljs.core.chunk_first.call(null,seq__23665_26141__$1);{
var G__26143 = cljs.core.chunk_rest.call(null,seq__23665_26141__$1);
var G__26144 = c__20324__auto___26142;
var G__26145 = cljs.core.count.call(null,c__20324__auto___26142);
var G__26146 = 0;
seq__23665_26131 = G__26143;
chunk__23666_26132 = G__26144;
count__23667_26133 = G__26145;
i__23668_26134 = G__26146;
continue;
}
} else
{var arg__21743__auto___26147 = cljs.core.first.call(null,seq__23665_26141__$1);a__21742__auto__.push(arg__21743__auto___26147);
{
var G__26148 = cljs.core.next.call(null,seq__23665_26141__$1);
var G__26149 = null;
var G__26150 = 0;
var G__26151 = 0;
seq__23665_26131 = G__26148;
chunk__23666_26132 = G__26149;
count__23667_26133 = G__26150;
i__23668_26134 = G__26151;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__21742__auto__);
};
var wbr = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__21741__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__26152){
var args__21741__auto__ = cljs.core.seq(arglist__26152);
return wbr__delegate(args__21741__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23673_26153 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23674_26154 = null;var count__23675_26155 = 0;var i__23676_26156 = 0;while(true){
if((i__23676_26156 < count__23675_26155))
{var arg__21743__auto___26157 = cljs.core._nth.call(null,chunk__23674_26154,i__23676_26156);a__21742__auto__.push(arg__21743__auto___26157);
{
var G__26158 = seq__23673_26153;
var G__26159 = chunk__23674_26154;
var G__26160 = count__23675_26155;
var G__26161 = (i__23676_26156 + 1);
seq__23673_26153 = G__26158;
chunk__23674_26154 = G__26159;
count__23675_26155 = G__26160;
i__23676_26156 = G__26161;
continue;
}
} else
{var temp__4092__auto___26162 = cljs.core.seq.call(null,seq__23673_26153);if(temp__4092__auto___26162)
{var seq__23673_26163__$1 = temp__4092__auto___26162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23673_26163__$1))
{var c__20324__auto___26164 = cljs.core.chunk_first.call(null,seq__23673_26163__$1);{
var G__26165 = cljs.core.chunk_rest.call(null,seq__23673_26163__$1);
var G__26166 = c__20324__auto___26164;
var G__26167 = cljs.core.count.call(null,c__20324__auto___26164);
var G__26168 = 0;
seq__23673_26153 = G__26165;
chunk__23674_26154 = G__26166;
count__23675_26155 = G__26167;
i__23676_26156 = G__26168;
continue;
}
} else
{var arg__21743__auto___26169 = cljs.core.first.call(null,seq__23673_26163__$1);a__21742__auto__.push(arg__21743__auto___26169);
{
var G__26170 = cljs.core.next.call(null,seq__23673_26163__$1);
var G__26171 = null;
var G__26172 = 0;
var G__26173 = 0;
seq__23673_26153 = G__26170;
chunk__23674_26154 = G__26171;
count__23675_26155 = G__26172;
i__23676_26156 = G__26173;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__21742__auto__);
};
var circle = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__21741__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__26174){
var args__21741__auto__ = cljs.core.seq(arglist__26174);
return circle__delegate(args__21741__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23681_26175 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23682_26176 = null;var count__23683_26177 = 0;var i__23684_26178 = 0;while(true){
if((i__23684_26178 < count__23683_26177))
{var arg__21743__auto___26179 = cljs.core._nth.call(null,chunk__23682_26176,i__23684_26178);a__21742__auto__.push(arg__21743__auto___26179);
{
var G__26180 = seq__23681_26175;
var G__26181 = chunk__23682_26176;
var G__26182 = count__23683_26177;
var G__26183 = (i__23684_26178 + 1);
seq__23681_26175 = G__26180;
chunk__23682_26176 = G__26181;
count__23683_26177 = G__26182;
i__23684_26178 = G__26183;
continue;
}
} else
{var temp__4092__auto___26184 = cljs.core.seq.call(null,seq__23681_26175);if(temp__4092__auto___26184)
{var seq__23681_26185__$1 = temp__4092__auto___26184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23681_26185__$1))
{var c__20324__auto___26186 = cljs.core.chunk_first.call(null,seq__23681_26185__$1);{
var G__26187 = cljs.core.chunk_rest.call(null,seq__23681_26185__$1);
var G__26188 = c__20324__auto___26186;
var G__26189 = cljs.core.count.call(null,c__20324__auto___26186);
var G__26190 = 0;
seq__23681_26175 = G__26187;
chunk__23682_26176 = G__26188;
count__23683_26177 = G__26189;
i__23684_26178 = G__26190;
continue;
}
} else
{var arg__21743__auto___26191 = cljs.core.first.call(null,seq__23681_26185__$1);a__21742__auto__.push(arg__21743__auto___26191);
{
var G__26192 = cljs.core.next.call(null,seq__23681_26185__$1);
var G__26193 = null;
var G__26194 = 0;
var G__26195 = 0;
seq__23681_26175 = G__26192;
chunk__23682_26176 = G__26193;
count__23683_26177 = G__26194;
i__23684_26178 = G__26195;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__21742__auto__);
};
var g = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__21741__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__26196){
var args__21741__auto__ = cljs.core.seq(arglist__26196);
return g__delegate(args__21741__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23689_26197 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23690_26198 = null;var count__23691_26199 = 0;var i__23692_26200 = 0;while(true){
if((i__23692_26200 < count__23691_26199))
{var arg__21743__auto___26201 = cljs.core._nth.call(null,chunk__23690_26198,i__23692_26200);a__21742__auto__.push(arg__21743__auto___26201);
{
var G__26202 = seq__23689_26197;
var G__26203 = chunk__23690_26198;
var G__26204 = count__23691_26199;
var G__26205 = (i__23692_26200 + 1);
seq__23689_26197 = G__26202;
chunk__23690_26198 = G__26203;
count__23691_26199 = G__26204;
i__23692_26200 = G__26205;
continue;
}
} else
{var temp__4092__auto___26206 = cljs.core.seq.call(null,seq__23689_26197);if(temp__4092__auto___26206)
{var seq__23689_26207__$1 = temp__4092__auto___26206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23689_26207__$1))
{var c__20324__auto___26208 = cljs.core.chunk_first.call(null,seq__23689_26207__$1);{
var G__26209 = cljs.core.chunk_rest.call(null,seq__23689_26207__$1);
var G__26210 = c__20324__auto___26208;
var G__26211 = cljs.core.count.call(null,c__20324__auto___26208);
var G__26212 = 0;
seq__23689_26197 = G__26209;
chunk__23690_26198 = G__26210;
count__23691_26199 = G__26211;
i__23692_26200 = G__26212;
continue;
}
} else
{var arg__21743__auto___26213 = cljs.core.first.call(null,seq__23689_26207__$1);a__21742__auto__.push(arg__21743__auto___26213);
{
var G__26214 = cljs.core.next.call(null,seq__23689_26207__$1);
var G__26215 = null;
var G__26216 = 0;
var G__26217 = 0;
seq__23689_26197 = G__26214;
chunk__23690_26198 = G__26215;
count__23691_26199 = G__26216;
i__23692_26200 = G__26217;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__21742__auto__);
};
var line = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__21741__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__26218){
var args__21741__auto__ = cljs.core.seq(arglist__26218);
return line__delegate(args__21741__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23697_26219 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23698_26220 = null;var count__23699_26221 = 0;var i__23700_26222 = 0;while(true){
if((i__23700_26222 < count__23699_26221))
{var arg__21743__auto___26223 = cljs.core._nth.call(null,chunk__23698_26220,i__23700_26222);a__21742__auto__.push(arg__21743__auto___26223);
{
var G__26224 = seq__23697_26219;
var G__26225 = chunk__23698_26220;
var G__26226 = count__23699_26221;
var G__26227 = (i__23700_26222 + 1);
seq__23697_26219 = G__26224;
chunk__23698_26220 = G__26225;
count__23699_26221 = G__26226;
i__23700_26222 = G__26227;
continue;
}
} else
{var temp__4092__auto___26228 = cljs.core.seq.call(null,seq__23697_26219);if(temp__4092__auto___26228)
{var seq__23697_26229__$1 = temp__4092__auto___26228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23697_26229__$1))
{var c__20324__auto___26230 = cljs.core.chunk_first.call(null,seq__23697_26229__$1);{
var G__26231 = cljs.core.chunk_rest.call(null,seq__23697_26229__$1);
var G__26232 = c__20324__auto___26230;
var G__26233 = cljs.core.count.call(null,c__20324__auto___26230);
var G__26234 = 0;
seq__23697_26219 = G__26231;
chunk__23698_26220 = G__26232;
count__23699_26221 = G__26233;
i__23700_26222 = G__26234;
continue;
}
} else
{var arg__21743__auto___26235 = cljs.core.first.call(null,seq__23697_26229__$1);a__21742__auto__.push(arg__21743__auto___26235);
{
var G__26236 = cljs.core.next.call(null,seq__23697_26229__$1);
var G__26237 = null;
var G__26238 = 0;
var G__26239 = 0;
seq__23697_26219 = G__26236;
chunk__23698_26220 = G__26237;
count__23699_26221 = G__26238;
i__23700_26222 = G__26239;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__21742__auto__);
};
var path = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__21741__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__26240){
var args__21741__auto__ = cljs.core.seq(arglist__26240);
return path__delegate(args__21741__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23705_26241 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23706_26242 = null;var count__23707_26243 = 0;var i__23708_26244 = 0;while(true){
if((i__23708_26244 < count__23707_26243))
{var arg__21743__auto___26245 = cljs.core._nth.call(null,chunk__23706_26242,i__23708_26244);a__21742__auto__.push(arg__21743__auto___26245);
{
var G__26246 = seq__23705_26241;
var G__26247 = chunk__23706_26242;
var G__26248 = count__23707_26243;
var G__26249 = (i__23708_26244 + 1);
seq__23705_26241 = G__26246;
chunk__23706_26242 = G__26247;
count__23707_26243 = G__26248;
i__23708_26244 = G__26249;
continue;
}
} else
{var temp__4092__auto___26250 = cljs.core.seq.call(null,seq__23705_26241);if(temp__4092__auto___26250)
{var seq__23705_26251__$1 = temp__4092__auto___26250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23705_26251__$1))
{var c__20324__auto___26252 = cljs.core.chunk_first.call(null,seq__23705_26251__$1);{
var G__26253 = cljs.core.chunk_rest.call(null,seq__23705_26251__$1);
var G__26254 = c__20324__auto___26252;
var G__26255 = cljs.core.count.call(null,c__20324__auto___26252);
var G__26256 = 0;
seq__23705_26241 = G__26253;
chunk__23706_26242 = G__26254;
count__23707_26243 = G__26255;
i__23708_26244 = G__26256;
continue;
}
} else
{var arg__21743__auto___26257 = cljs.core.first.call(null,seq__23705_26251__$1);a__21742__auto__.push(arg__21743__auto___26257);
{
var G__26258 = cljs.core.next.call(null,seq__23705_26251__$1);
var G__26259 = null;
var G__26260 = 0;
var G__26261 = 0;
seq__23705_26241 = G__26258;
chunk__23706_26242 = G__26259;
count__23707_26243 = G__26260;
i__23708_26244 = G__26261;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__21742__auto__);
};
var polygon = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__21741__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__26262){
var args__21741__auto__ = cljs.core.seq(arglist__26262);
return polygon__delegate(args__21741__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23713_26263 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23714_26264 = null;var count__23715_26265 = 0;var i__23716_26266 = 0;while(true){
if((i__23716_26266 < count__23715_26265))
{var arg__21743__auto___26267 = cljs.core._nth.call(null,chunk__23714_26264,i__23716_26266);a__21742__auto__.push(arg__21743__auto___26267);
{
var G__26268 = seq__23713_26263;
var G__26269 = chunk__23714_26264;
var G__26270 = count__23715_26265;
var G__26271 = (i__23716_26266 + 1);
seq__23713_26263 = G__26268;
chunk__23714_26264 = G__26269;
count__23715_26265 = G__26270;
i__23716_26266 = G__26271;
continue;
}
} else
{var temp__4092__auto___26272 = cljs.core.seq.call(null,seq__23713_26263);if(temp__4092__auto___26272)
{var seq__23713_26273__$1 = temp__4092__auto___26272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23713_26273__$1))
{var c__20324__auto___26274 = cljs.core.chunk_first.call(null,seq__23713_26273__$1);{
var G__26275 = cljs.core.chunk_rest.call(null,seq__23713_26273__$1);
var G__26276 = c__20324__auto___26274;
var G__26277 = cljs.core.count.call(null,c__20324__auto___26274);
var G__26278 = 0;
seq__23713_26263 = G__26275;
chunk__23714_26264 = G__26276;
count__23715_26265 = G__26277;
i__23716_26266 = G__26278;
continue;
}
} else
{var arg__21743__auto___26279 = cljs.core.first.call(null,seq__23713_26273__$1);a__21742__auto__.push(arg__21743__auto___26279);
{
var G__26280 = cljs.core.next.call(null,seq__23713_26273__$1);
var G__26281 = null;
var G__26282 = 0;
var G__26283 = 0;
seq__23713_26263 = G__26280;
chunk__23714_26264 = G__26281;
count__23715_26265 = G__26282;
i__23716_26266 = G__26283;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__21742__auto__);
};
var polyline = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__21741__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__26284){
var args__21741__auto__ = cljs.core.seq(arglist__26284);
return polyline__delegate(args__21741__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23721_26285 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23722_26286 = null;var count__23723_26287 = 0;var i__23724_26288 = 0;while(true){
if((i__23724_26288 < count__23723_26287))
{var arg__21743__auto___26289 = cljs.core._nth.call(null,chunk__23722_26286,i__23724_26288);a__21742__auto__.push(arg__21743__auto___26289);
{
var G__26290 = seq__23721_26285;
var G__26291 = chunk__23722_26286;
var G__26292 = count__23723_26287;
var G__26293 = (i__23724_26288 + 1);
seq__23721_26285 = G__26290;
chunk__23722_26286 = G__26291;
count__23723_26287 = G__26292;
i__23724_26288 = G__26293;
continue;
}
} else
{var temp__4092__auto___26294 = cljs.core.seq.call(null,seq__23721_26285);if(temp__4092__auto___26294)
{var seq__23721_26295__$1 = temp__4092__auto___26294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23721_26295__$1))
{var c__20324__auto___26296 = cljs.core.chunk_first.call(null,seq__23721_26295__$1);{
var G__26297 = cljs.core.chunk_rest.call(null,seq__23721_26295__$1);
var G__26298 = c__20324__auto___26296;
var G__26299 = cljs.core.count.call(null,c__20324__auto___26296);
var G__26300 = 0;
seq__23721_26285 = G__26297;
chunk__23722_26286 = G__26298;
count__23723_26287 = G__26299;
i__23724_26288 = G__26300;
continue;
}
} else
{var arg__21743__auto___26301 = cljs.core.first.call(null,seq__23721_26295__$1);a__21742__auto__.push(arg__21743__auto___26301);
{
var G__26302 = cljs.core.next.call(null,seq__23721_26295__$1);
var G__26303 = null;
var G__26304 = 0;
var G__26305 = 0;
seq__23721_26285 = G__26302;
chunk__23722_26286 = G__26303;
count__23723_26287 = G__26304;
i__23724_26288 = G__26305;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__21742__auto__);
};
var rect = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__21741__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__26306){
var args__21741__auto__ = cljs.core.seq(arglist__26306);
return rect__delegate(args__21741__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23729_26307 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23730_26308 = null;var count__23731_26309 = 0;var i__23732_26310 = 0;while(true){
if((i__23732_26310 < count__23731_26309))
{var arg__21743__auto___26311 = cljs.core._nth.call(null,chunk__23730_26308,i__23732_26310);a__21742__auto__.push(arg__21743__auto___26311);
{
var G__26312 = seq__23729_26307;
var G__26313 = chunk__23730_26308;
var G__26314 = count__23731_26309;
var G__26315 = (i__23732_26310 + 1);
seq__23729_26307 = G__26312;
chunk__23730_26308 = G__26313;
count__23731_26309 = G__26314;
i__23732_26310 = G__26315;
continue;
}
} else
{var temp__4092__auto___26316 = cljs.core.seq.call(null,seq__23729_26307);if(temp__4092__auto___26316)
{var seq__23729_26317__$1 = temp__4092__auto___26316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23729_26317__$1))
{var c__20324__auto___26318 = cljs.core.chunk_first.call(null,seq__23729_26317__$1);{
var G__26319 = cljs.core.chunk_rest.call(null,seq__23729_26317__$1);
var G__26320 = c__20324__auto___26318;
var G__26321 = cljs.core.count.call(null,c__20324__auto___26318);
var G__26322 = 0;
seq__23729_26307 = G__26319;
chunk__23730_26308 = G__26320;
count__23731_26309 = G__26321;
i__23732_26310 = G__26322;
continue;
}
} else
{var arg__21743__auto___26323 = cljs.core.first.call(null,seq__23729_26317__$1);a__21742__auto__.push(arg__21743__auto___26323);
{
var G__26324 = cljs.core.next.call(null,seq__23729_26317__$1);
var G__26325 = null;
var G__26326 = 0;
var G__26327 = 0;
seq__23729_26307 = G__26324;
chunk__23730_26308 = G__26325;
count__23731_26309 = G__26326;
i__23732_26310 = G__26327;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__21742__auto__);
};
var svg = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__21741__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__26328){
var args__21741__auto__ = cljs.core.seq(arglist__26328);
return svg__delegate(args__21741__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__21741__auto__){var a__21742__auto__ = [];a__21742__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21741__auto__)));
var seq__23041_26329 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21741__auto__));var chunk__23042_26330 = null;var count__23043_26331 = 0;var i__23044_26332 = 0;while(true){
if((i__23044_26332 < count__23043_26331))
{var arg__21743__auto___26333 = cljs.core._nth.call(null,chunk__23042_26330,i__23044_26332);a__21742__auto__.push(arg__21743__auto___26333);
{
var G__26334 = seq__23041_26329;
var G__26335 = chunk__23042_26330;
var G__26336 = count__23043_26331;
var G__26337 = (i__23044_26332 + 1);
seq__23041_26329 = G__26334;
chunk__23042_26330 = G__26335;
count__23043_26331 = G__26336;
i__23044_26332 = G__26337;
continue;
}
} else
{var temp__4092__auto___26338 = cljs.core.seq.call(null,seq__23041_26329);if(temp__4092__auto___26338)
{var seq__23041_26339__$1 = temp__4092__auto___26338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23041_26339__$1))
{var c__20324__auto___26340 = cljs.core.chunk_first.call(null,seq__23041_26339__$1);{
var G__26341 = cljs.core.chunk_rest.call(null,seq__23041_26339__$1);
var G__26342 = c__20324__auto___26340;
var G__26343 = cljs.core.count.call(null,c__20324__auto___26340);
var G__26344 = 0;
seq__23041_26329 = G__26341;
chunk__23042_26330 = G__26342;
count__23043_26331 = G__26343;
i__23044_26332 = G__26344;
continue;
}
} else
{var arg__21743__auto___26345 = cljs.core.first.call(null,seq__23041_26339__$1);a__21742__auto__.push(arg__21743__auto___26345);
{
var G__26346 = cljs.core.next.call(null,seq__23041_26339__$1);
var G__26347 = null;
var G__26348 = 0;
var G__26349 = 0;
seq__23041_26329 = G__26346;
chunk__23042_26330 = G__26347;
count__23043_26331 = G__26348;
i__23044_26332 = G__26349;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__21742__auto__);
};
var text = function (var_args){
var args__21741__auto__ = null;if (arguments.length > 0) {
  args__21741__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__21741__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__26350){
var args__21741__auto__ = cljs.core.seq(arglist__26350);
return text__delegate(args__21741__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;
quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"colgroup","colgroup",4672673905),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"menuitem","menuitem",4705729636),new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"html","html",1017117469),new cljs.core.Keyword(null,"dfn","dfn",1014003614),new cljs.core.Keyword(null,"sub","sub",1014018482),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"progress","progress",4307793311),new cljs.core.Keyword(null,"polyline","polyline",1575843122),new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.Keyword(null,"em","em",1013907482),new cljs.core.Keyword(null,"rt","rt",1013907892),new cljs.core.Keyword(null,"details","details",2571625908),new cljs.core.Keyword(null,"fieldset","fieldset",4379882650),new cljs.core.Keyword(null,"keygen","keygen",4174205955),new cljs.core.Keyword(null,"map","map",1014012110),new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.Keyword(null,"video","video",1126107117),new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.Keyword(null,"dt","dt",1013907458),new cljs.core.Keyword(null,"ol","ol",1013907791),new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.Keyword(null,"menu","menu",1017252049),new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"del","del",1014003581),new cljs.core.Keyword(null,"hr","hr",1013907580),new cljs.core.Keyword(null,"header","header",4087600639),new cljs.core.Keyword(null,"param","param",1120340991),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"area","area",1016906751),new cljs.core.Keyword(null,"legend","legend",4202297215),new cljs.core.Keyword(null,"meter","meter",1117691643),new cljs.core.Keyword(null,"dl","dl",1013907450),new cljs.core.Keyword(null,"figcaption","figcaption",1313617108),new cljs.core.Keyword(null,"tfoot","tfoot",1124181588),new cljs.core.Keyword(null,"blockquote","blockquote",2317106561),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"abbr","abbr",1016891299),new cljs.core.Keyword(null,"caption","caption",1566477656),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"bdi","bdi",1014001625),new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"ruby","ruby",1017416012),new cljs.core.Keyword(null,"rp","rp",1013907888),new cljs.core.Keyword(null,"figure","figure",4034231894),new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.Keyword(null,"embed","embed",1110524491),new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"section","section",2984145495),new cljs.core.Keyword(null,"object","object",4285503153),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"col","col",1014002930),new cljs.core.Keyword(null,"dd","dd",1013907442),new cljs.core.Keyword(null,"bdo","bdo",1014001631),new cljs.core.Keyword(null,"cite","cite",1016958153),new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"kbd","kbd",1014010207),new cljs.core.Keyword(null,"big","big",1014001778),new cljs.core.Keyword(null,"thead","thead",1124231110),new cljs.core.Keyword(null,"i","i",1013904347),new cljs.core.Keyword(null,"ins","ins",1014008672),new cljs.core.Keyword(null,"base","base",1016920643),new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.Keyword(null,"br","br",1013907394),new cljs.core.Keyword(null,"polygon","polygon",616384684),new cljs.core.Keyword(null,"wbr","wbr",1014021753),new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.Keyword(null,"small","small",1123453049),new cljs.core.Keyword(null,"main","main",1017248043),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"aside","aside",1107015850),new cljs.core.Keyword(null,"article","article",4576493672),new cljs.core.Keyword(null,"noscript","noscript",2565455166),new cljs.core.Keyword(null,"h4","h4",1013907518),new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.Keyword(null,"track","track",1124525245),new cljs.core.Keyword(null,"time","time",1017464383),new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.Keyword(null,"mark","mark",1017248319),new cljs.core.Keyword(null,"h5","h5",1013907519),new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"sup","sup",1014018496),new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.Keyword(null,"th","th",1013907942),new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.Keyword(null,"h6","h6",1013907520),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"nav","nav",1014013077),new cljs.core.Keyword(null,"address","address",4161179494),new cljs.core.Keyword(null,"u","u",1013904359),new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.Keyword(null,"datalist","datalist",2803674810),new cljs.core.Keyword(null,"q","q",1013904355),new cljs.core.Keyword(null,"samp","samp",1017426915),new cljs.core.Keyword(null,"source","source",4412365709),new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"footer","footer",4040009997),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"var","var",1014020761),new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.Keyword(null,"s","s",1013904357),new cljs.core.Keyword(null,"iframe","iframe",4117657110)],[quiescent.dom.colgroup,quiescent.dom.path,quiescent.dom.menuitem,quiescent.dom.optgroup,quiescent.dom.tbody,quiescent.dom.html,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.text,quiescent.dom.strong,quiescent.dom.data,quiescent.dom.progress,quiescent.dom.polyline,quiescent.dom.ul,quiescent.dom.img,quiescent.dom.em,quiescent.dom.rt,quiescent.dom.details,quiescent.dom.fieldset,quiescent.dom.keygen,quiescent.dom.map,quiescent.dom.div,quiescent.dom.video,quiescent.dom.link,quiescent.dom.dt,quiescent.dom.ol,quiescent.dom.form,quiescent.dom.menu,quiescent.dom.a,quiescent.dom.del,quiescent.dom.hr,quiescent.dom.header,quiescent.dom.param,quiescent.dom.head,quiescent.dom.area,quiescent.dom.legend,quiescent.dom.meter,quiescent.dom.dl,quiescent.dom.figcaption,quiescent.dom.tfoot,quiescent.dom.blockquote,quiescent.dom.b,quiescent.dom.abbr,quiescent.dom.caption,quiescent.dom.style,quiescent.dom.bdi,quiescent.dom.g,quiescent.dom.ruby,quiescent.dom.rp,quiescent.dom.figure,quiescent.dom.svg,quiescent.dom.rect,quiescent.dom.embed,quiescent.dom.button,quiescent.dom.canvas,quiescent.dom.section,quiescent.dom.object,quiescent.dom.title,quiescent.dom.output,quiescent.dom.audio,quiescent.dom.col,quiescent.dom.dd,quiescent.dom.bdo,quiescent.dom.cite,quiescent.dom.code,quiescent.dom.kbd,quiescent.dom.big,quiescent.dom.thead,quiescent.dom.i,quiescent.dom.ins,quiescent.dom.base,quiescent.dom.circle,quiescent.dom.br,quiescent.dom.polygon,quiescent.dom.wbr,quiescent.dom.textarea,quiescent.dom.small,quiescent.dom.main,quiescent.dom.meta,quiescent.dom.aside,quiescent.dom.article,quiescent.dom.noscript,quiescent.dom.h4,quiescent.dom.h3,quiescent.dom.script,quiescent.dom.track,quiescent.dom.time,quiescent.dom.h2,quiescent.dom.mark,quiescent.dom.h5,quiescent.dom.span,quiescent.dom.input,quiescent.dom.sup,quiescent.dom.h1,quiescent.dom.table,quiescent.dom.th,quiescent.dom.label,quiescent.dom.h6,quiescent.dom.line,quiescent.dom.pre,quiescent.dom.nav,quiescent.dom.address,quiescent.dom.u,quiescent.dom.body,quiescent.dom.option,quiescent.dom.datalist,quiescent.dom.q,quiescent.dom.samp,quiescent.dom.source,quiescent.dom.summary,quiescent.dom.footer,quiescent.dom.select,quiescent.dom.var$,quiescent.dom.td,quiescent.dom.li,quiescent.dom.p,quiescent.dom.tr,quiescent.dom.s,quiescent.dom.iframe]);
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.nsbrowser')) {
goog.provide('lt.plugins.cljrefactor.nsbrowser');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.command');
goog.require('lt.util.dom');
goog.require('quiescent');
goog.require('lt.objs.sidebar');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.notifos');
goog.require('quiescent.dom');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('clojure.string');
goog.require('quiescent');
goog.require('quiescent.dom');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.nsbrowser.handle_keypress = (function handle_keypress(props,ev){var kk = ev.which;var G__22718 = kk;if(cljs.core._EQ_.call(null,27,G__22718))
{ev.preventDefault();
return new cljs.core.Keyword(null,"on-escape","on-escape",674318241).cljs$core$IFn$_invoke$arity$1(props).call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__22718))
{ev.preventDefault();
return new cljs.core.Keyword(null,"on-select","on-select",1062468636).cljs$core$IFn$_invoke$arity$1(props).call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__22718))
{ev.preventDefault();
return new cljs.core.Keyword(null,"on-down","on-down",3936419650).cljs$core$IFn$_invoke$arity$1(props).call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__22718))
{ev.preventDefault();
return new cljs.core.Keyword(null,"on-up","on-up",1119739067).cljs$core$IFn$_invoke$arity$1(props).call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}
});
lt.plugins.cljrefactor.nsbrowser.selected_idx = (function selected_idx(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__22720_SHARP_,p2__22719_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(p2__22719_SHARP_)))
{return p1__22720_SHARP_;
} else
{return null;
}
}),items));
});
lt.plugins.cljrefactor.nsbrowser.move_down = (function move_down(items){var currIdx = lt.plugins.cljrefactor.nsbrowser.selected_idx.call(null,items);if(!((currIdx < (cljs.core.count.call(null,items) - 1))))
{return items;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [currIdx,new cljs.core.Keyword(null,"selected","selected",2205476365)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(currIdx + 1),new cljs.core.Keyword(null,"selected","selected",2205476365)], null),true);
}
});
lt.plugins.cljrefactor.nsbrowser.move_up = (function move_up(items){var currIdx = lt.plugins.cljrefactor.nsbrowser.selected_idx.call(null,items);if(!((currIdx > 0)))
{return items;
} else
{return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [currIdx,new cljs.core.Keyword(null,"selected","selected",2205476365)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(currIdx - 1),new cljs.core.Keyword(null,"selected","selected",2205476365)], null),true);
}
});
lt.plugins.cljrefactor.nsbrowser.ns_abbr = (function ns_abbr(ns_str){return clojure.string.join.call(null,"",cljs.core.map.call(null,cljs.core.first,clojure.string.split.call(null,ns_str,/\./)));
});
lt.plugins.cljrefactor.nsbrowser.filter_items = (function filter_items(search_for,items){if(cljs.core.empty_QMARK_.call(null,search_for))
{return items;
} else
{return cljs.core.filter.call(null,(function (p__22723){var map__22724 = p__22723;var map__22724__$1 = ((cljs.core.seq_QMARK_.call(null,map__22724))?cljs.core.apply.call(null,cljs.core.hash_map,map__22724):map__22724);var name = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"name","name",1017277949));return ((name.indexOf(search_for) > -1)) || (cljs.core._EQ_.call(null,lt.plugins.cljrefactor.nsbrowser.ns_abbr.call(null,name).indexOf(search_for),0));
}),items);
}
});
lt.plugins.cljrefactor.nsbrowser.maybe_select_first = (function maybe_select_first(items){if(cljs.core.not.call(null,cljs.core.seq.call(null,items)))
{return items;
} else
{return cljs.core.assoc_in.call(null,cljs.core.vec.call(null,items),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,new cljs.core.Keyword(null,"selected","selected",2205476365)], null),true);
}
});
/**
* 
*/
lt.plugins.cljrefactor.nsbrowser.SearchInput = quiescent.component.call(null,(function (props){return quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",1534256180),cljs.core.partial.call(null,lt.plugins.cljrefactor.nsbrowser.handle_keypress,props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__22725_SHARP_){return new cljs.core.Keyword(null,"on-change","on-change",606853840).cljs$core$IFn$_invoke$arity$1(props).call(null,(p1__22725_SHARP_["target"]["value"]));
}),new cljs.core.Keyword(null,"autoFocus","autoFocus",2651959259),new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(props)], null));
}));
/**
* 
*/
lt.plugins.cljrefactor.nsbrowser.ResultItem = quiescent.component.call(null,(function (item){return quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(item))?"selected":null)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item));
}));
/**
* 
*/
lt.plugins.cljrefactor.nsbrowser.ResultList = quiescent.component.call(null,(function (props){return cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(props))?" nsselection":null)], null),cljs.core.map.call(null,lt.plugins.cljrefactor.nsbrowser.ResultItem,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(props)));
}));
/**
* 
*/
lt.plugins.cljrefactor.nsbrowser.Searcher = quiescent.component.call(null,(function (props){return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"filter-list"], null),lt.plugins.cljrefactor.nsbrowser.SearchInput.call(null,props),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(props);if(cljs.core.truth_(temp__4092__auto__))
{var sel_ns = temp__4092__auto__;return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"nstitle"], null),sel_ns);
} else
{return null;
}
})(),lt.plugins.cljrefactor.nsbrowser.ResultList.call(null,cljs.core.select_keys.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865)], null))));
}));
lt.plugins.cljrefactor.nsbrowser.wrapper = (function wrapper(this$){var e__21003__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jalla","div.jalla",2032626207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"nsbrowser-wrapper"], null),"Retrieving namespaces..."], null)], null));var seq__22732_22755 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__22733_22756 = null;var count__22734_22757 = 0;var i__22735_22758 = 0;while(true){
if((i__22735_22758 < count__22734_22757))
{var vec__22736_22759 = cljs.core._nth.call(null,chunk__22733_22756,i__22735_22758);var ev__21004__auto___22760 = cljs.core.nth.call(null,vec__22736_22759,0,null);var func__21005__auto___22761 = cljs.core.nth.call(null,vec__22736_22759,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___22760,func__21005__auto___22761);
{
var G__22762 = seq__22732_22755;
var G__22763 = chunk__22733_22756;
var G__22764 = count__22734_22757;
var G__22765 = (i__22735_22758 + 1);
seq__22732_22755 = G__22762;
chunk__22733_22756 = G__22763;
count__22734_22757 = G__22764;
i__22735_22758 = G__22765;
continue;
}
} else
{var temp__4092__auto___22766 = cljs.core.seq.call(null,seq__22732_22755);if(temp__4092__auto___22766)
{var seq__22732_22767__$1 = temp__4092__auto___22766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22732_22767__$1))
{var c__20324__auto___22768 = cljs.core.chunk_first.call(null,seq__22732_22767__$1);{
var G__22769 = cljs.core.chunk_rest.call(null,seq__22732_22767__$1);
var G__22770 = c__20324__auto___22768;
var G__22771 = cljs.core.count.call(null,c__20324__auto___22768);
var G__22772 = 0;
seq__22732_22755 = G__22769;
chunk__22733_22756 = G__22770;
count__22734_22757 = G__22771;
i__22735_22758 = G__22772;
continue;
}
} else
{var vec__22737_22773 = cljs.core.first.call(null,seq__22732_22767__$1);var ev__21004__auto___22774 = cljs.core.nth.call(null,vec__22737_22773,0,null);var func__21005__auto___22775 = cljs.core.nth.call(null,vec__22737_22773,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___22774,func__21005__auto___22775);
{
var G__22776 = cljs.core.next.call(null,seq__22732_22767__$1);
var G__22777 = null;
var G__22778 = 0;
var G__22779 = 0;
seq__22732_22755 = G__22776;
chunk__22733_22756 = G__22777;
count__22734_22757 = G__22778;
i__22735_22758 = G__22779;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
});
lt.plugins.cljrefactor.nsbrowser.__BEH__move_up_BANG_ = (function __BEH__move_up_BANG_(this$){var moved = lt.plugins.cljrefactor.nsbrowser.move_up.call(null,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004),moved], null));
lt.plugins.cljrefactor.nsbrowser.render.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),moved,new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"search-for","search-for",4597237398),new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null));
return lt.objs.sidebar.command.ensure_visible.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","move-up!","lt.plugins.cljrefactor.nsbrowser/move-up!",4342145385),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__move_up_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move-up!","move-up!",908335196),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__move_down_BANG_ = (function __BEH__move_down_BANG_(this$){var moved = lt.plugins.cljrefactor.nsbrowser.move_down.call(null,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004),moved], null));
lt.plugins.cljrefactor.nsbrowser.render.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),moved,new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"search-for","search-for",4597237398),new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null));
return lt.objs.sidebar.command.ensure_visible.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","move-down!","lt.plugins.cljrefactor.nsbrowser/move-down!",2074813250),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__move_down_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move-down!","move-down!",2625622581),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__select_BANG_ = (function __BEH__select_BANG_(this$){var temp__4092__auto__ = lt.plugins.cljrefactor.nsbrowser.selected_idx.call(null,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(temp__4092__auto__))
{var sel_idx = temp__4092__auto__;var temp__4092__auto____$1 = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto____$1))
{var ed = temp__4092__auto____$1;var item_name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),sel_idx));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-for","search-for",4597237398),"",new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),item_name], null));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"list-ns-vars","list-ns-vars",1033834103),item_name);
} else
{var sym = [cljs.core.str(new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),cljs.core.str("/"),cljs.core.str(item_name)].join('');lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.jump-to-definition!","editor.jump-to-definition!",3261820364),sym);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
}
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","select!","lt.plugins.cljrefactor.nsbrowser/select!",2239870884),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__select_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select!","select!",2992004631),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__search_BANG_ = (function __BEH__search_BANG_(this$,search_for){var items = (cljs.core.truth_(new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))?new cljs.core.Keyword(null,"vars","vars",1017516446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)):new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var filtered = cljs.core.vec.call(null,lt.plugins.cljrefactor.nsbrowser.maybe_select_first.call(null,lt.plugins.cljrefactor.nsbrowser.filter_items.call(null,search_for,items)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004),filtered,new cljs.core.Keyword(null,"search-for","search-for",4597237398),search_for], null));
return lt.plugins.cljrefactor.nsbrowser.render.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),filtered,new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"search-for","search-for",4597237398),search_for], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","search!","lt.plugins.cljrefactor.nsbrowser/search!",2255278720),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__search_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search!","search!",2982232811),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__update_ns_list_BANG_ = (function __BEH__update_ns_list_BANG_(this$,ns_items){var filtered_items = lt.plugins.cljrefactor.nsbrowser.maybe_select_first.call(null,ns_items);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),ns_items,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004),filtered_items,new cljs.core.Keyword(null,"search-for","search-for",4597237398),null,new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),null], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","update-ns-list!","lt.plugins.cljrefactor.nsbrowser/update-ns-list!",2737155142),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__update_ns_list_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-ns-list!","update-ns-list!",3589958961),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__focus_BANG_ = (function __BEH__focus_BANG_(this$){lt.plugins.cljrefactor.nsbrowser.render.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1114430258),new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"search-for","search-for",4597237398),new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"focus","focus",1111509066),true], null));
var input = lt.util.dom.$.call(null,"#nsbrowser-wrapper input");return input.focus();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","focus!","lt.plugins.cljrefactor.nsbrowser/focus!",3346250448),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__focus_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus!","focus!",4039653819),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__clear_BANG_ = (function __BEH__clear_BANG_(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),null,new cljs.core.Keyword(null,"items","items",1114430258),null,new cljs.core.Keyword(null,"vars","vars",1017516446),null,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004),null,new cljs.core.Keyword(null,"search-for","search-for",4597237398),null], null));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"close-sidebar","close-sidebar",1108494329));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","clear!","lt.plugins.cljrefactor.nsbrowser/clear!",3433762291),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__clear_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear!","clear!",3951036134),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__escape_BANG_ = (function __BEH__escape_BANG_(this$){if(cljs.core.not.call(null,new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
} else
{var filtered = lt.plugins.cljrefactor.nsbrowser.maybe_select_first.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),null,new cljs.core.Keyword(null,"search-for","search-for",4597237398),null,new cljs.core.Keyword(null,"vars","vars",1017516446),null,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004),filtered], null));
return lt.plugins.cljrefactor.nsbrowser.render.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),filtered], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","escape!","lt.plugins.cljrefactor.nsbrowser/escape!",3016593991),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__escape_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"escape!","escape!",3844244274),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__set_nsbrowser_filters = (function __BEH__set_nsbrowser_filters(this$,exclusions){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclusions","exclusions",1759440855),exclusions], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","set-nsbrowser-filters","lt.plugins.cljrefactor.nsbrowser/set-nsbrowser-filters",545391565),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__set_nsbrowser_filters,new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure Refactor: Configure filter for nsbrowser",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"exclusions",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"list","list",1017226256)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","nsbrowser","lt.plugins.cljrefactor.nsbrowser/nsbrowser",1948778562),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clojure.nsbrowser","clojure.nsbrowser",2392486571),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Clojure ns browser",new cljs.core.Keyword(null,"order","order",1119910592),2,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.cljrefactor.nsbrowser.wrapper.call(null,this$);
}));
lt.plugins.cljrefactor.nsbrowser.ns_bar = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","nsbrowser","lt.plugins.cljrefactor.nsbrowser/nsbrowser",1948778562));
lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.cljrefactor.nsbrowser.ns_bar);
lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_vars = (function __BEH__list_ns_vars(ed,z_ns){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"ns-vars",new cljs.core.Keyword(null,"ns","ns",1013907767),z_ns], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.list-ns-vars-res","refactor.list-ns-vars-res",2111679606),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","list-ns-vars","lt.plugins.cljrefactor.nsbrowser/list-ns-vars",4736083460),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_vars,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-ns-vars","list-ns-vars",1033834103),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_vars_res = (function __BEH__list_ns_vars_res(ed,res){var vec__22740 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-vars","ns-vars",3192584358),new cljs.core.Keyword(null,"results","results",2111450984)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__22740,0,null);var ret = cljs.core.nth.call(null,vec__22740,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var items_22780 = lt.plugins.cljrefactor.nsbrowser.maybe_select_first.call(null,cljs.core.map.call(null,((function (vec__22740,ok_QMARK_,ret){
return (function (p1__22738_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949)],[p1__22738_SHARP_]);
});})(vec__22740,ok_QMARK_,ret))
,new cljs.core.Keyword(null,"ns-vars","ns-vars",3192584358).cljs$core$IFn$_invoke$arity$1(ret)));lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vars","vars",1017516446),items_22780,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004),items_22780], null));
lt.plugins.cljrefactor.nsbrowser.render.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),items_22780,new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar)),new cljs.core.Keyword(null,"focus","focus",1111509066),true], null));
}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","list-ns-vars-res","lt.plugins.cljrefactor.nsbrowser/list-ns-vars-res",1973536863),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_vars_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.list-ns-vars-res","editor.eval.clj.result.refactor.list-ns-vars-res",3804778467),null], null), null));
lt.plugins.cljrefactor.nsbrowser.maybe_exclude = (function maybe_exclude(exclusions,items){var temp__4090__auto__ = cljs.core.map.call(null,cljs.core.re_pattern,exclusions);if(cljs.core.truth_(temp__4090__auto__))
{var ps = temp__4090__auto__;return cljs.core.filter.call(null,((function (ps,temp__4090__auto__){
return (function (item){return cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (ps,temp__4090__auto__){
return (function (p1__22741_SHARP_){return cljs.core.re_find.call(null,p1__22741_SHARP_,item);
});})(ps,temp__4090__auto__))
,ps))));
});})(ps,temp__4090__auto__))
,items);
} else
{return items;
}
});
lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_res = (function __BEH__list_ns_res(ed,res){var vec__22744 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-list","ns-list",3192294168),new cljs.core.Keyword(null,"results","results",2111450984)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__22744,0,null);var ret = cljs.core.nth.call(null,vec__22744,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.cljrefactor.nsbrowser.ns_bar);
return lt.object.raise.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.Keyword(null,"update-ns-list!","update-ns-list!",3589958961),cljs.core.map.call(null,((function (vec__22744,ok_QMARK_,ret){
return (function (p1__22742_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949)],[p1__22742_SHARP_]);
});})(vec__22744,ok_QMARK_,ret))
,lt.plugins.cljrefactor.nsbrowser.maybe_exclude.call(null,new cljs.core.Keyword(null,"exclusions","exclusions",1759440855).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar)),new cljs.core.Keyword(null,"ns-list","ns-list",3192294168).cljs$core$IFn$_invoke$arity$1(ret))));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","list-ns-res","lt.plugins.cljrefactor.nsbrowser/list-ns-res",3717450158),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.list-ns-res","editor.eval.clj.result.refactor.list-ns-res",918656480),null], null), null));
lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns = (function __BEH__list_ns(ed){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",1013907795),"ns-list"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.list-ns-res","refactor.list-ns-res",2708695405),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","list-ns","lt.plugins.cljrefactor.nsbrowser/list-ns",4596059091),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-ns","list-ns",1195822278),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"show-nsbrowser","show-nsbrowser",2115493477),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Show ns-browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"list-ns","list-ns",1195822278));
} else
{return null;
}
})], null));
lt.plugins.cljrefactor.nsbrowser.render = (function render(props){return quiescent.render.call(null,lt.plugins.cljrefactor.nsbrowser.Searcher.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-down","on-down",3936419650),(function (){return lt.object.raise.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.Keyword(null,"move-down!","move-down!",2625622581));
}),new cljs.core.Keyword(null,"on-up","on-up",1119739067),(function (){return lt.object.raise.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.Keyword(null,"move-up!","move-up!",908335196));
}),new cljs.core.Keyword(null,"on-select","on-select",1062468636),(function (){return lt.object.raise.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.Keyword(null,"select!","select!",2992004631));
}),new cljs.core.Keyword(null,"on-escape","on-escape",674318241),(function (){return lt.object.raise.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.Keyword(null,"escape!","escape!",3844244274));
}),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (search_for){return lt.object.raise.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.Keyword(null,"search!","search!",2982232811),search_for);
})], null),props)),document.getElementById("nsbrowser-wrapper"));
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
lt.plugins.cljrefactor.pprint.pprint_prefix_form = (function pprint_prefix_form(p__26404){var vec__26406 = p__26404;var name = cljs.core.nth.call(null,vec__26406,0,null);var libspecs = cljs.core.nthnext.call(null,vec__26406,1);cljs.core.print.call(null,[cljs.core.str("["),cljs.core.str(name)].join(''));
var ordered_libspecs = lt.plugins.cljrefactor.pprint.libspec_vectors_last.call(null,libspecs);return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (ordered_libspecs,vec__26406,name,libspecs){
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
});})(ordered_libspecs,vec__26406,name,libspecs))
,ordered_libspecs));
});
lt.plugins.cljrefactor.pprint.pprint_require_form = (function pprint_require_form(p__26407){var vec__26410 = p__26407;var _ = cljs.core.nth.call(null,vec__26410,0,null);var libspecs = cljs.core.nthnext.call(null,vec__26410,1);cljs.core.print.call(null,"(:require ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__26410,_,libspecs){
return (function (idx,libspec){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,libspecs) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__20495__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_26411_26429 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26411_26429,sb__20495__auto__,vec__26410,_,libspecs){
return (function (x__20496__auto__){return sb__20495__auto__.append(x__20496__auto__);
});})(_STAR_print_fn_STAR_26411_26429,sb__20495__auto__,vec__26410,_,libspecs))
;
if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{cljs.core.print.call(null,libspec);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26411_26429;
}return [cljs.core.str(sb__20495__auto__)].join('');
})())),cljs.core.str(")")].join(''));
} else
{if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{return lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{return cljs.core.println.call(null,libspec);
}
}
});})(vec__26410,_,libspecs))
,libspecs));
});
lt.plugins.cljrefactor.pprint.form_is_QMARK_ = (function form_is_QMARK_(form,type){return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,form)),type));
});
lt.plugins.cljrefactor.pprint.pprint_gen_class_form = (function pprint_gen_class_form(p__26412){var vec__26416 = p__26412;var _ = cljs.core.nth.call(null,vec__26416,0,null);var elems = cljs.core.nthnext.call(null,vec__26416,1);if(cljs.core.empty_QMARK_.call(null,elems))
{cljs.core.println.call(null,"(:gen-class)");
} else
{cljs.core.println.call(null,"(:gen-class");
}
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__26416,_,elems){
return (function (idx,p__26417){var vec__26418 = p__26417;var key = cljs.core.nth.call(null,vec__26418,0,null);var val = cljs.core.nth.call(null,vec__26418,1,null);if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,cljs.core.partition.call(null,2,elems)) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(key),cljs.core.str(val),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,key,val);
}
});})(vec__26416,_,elems))
,cljs.core.partition.call(null,2,elems)));
});
lt.plugins.cljrefactor.pprint.pprint_import_form = (function pprint_import_form(p__26419){var vec__26421 = p__26419;var _ = cljs.core.nth.call(null,vec__26421,0,null);var imports = cljs.core.nthnext.call(null,vec__26421,1);cljs.core.print.call(null,"(:import ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__26421,_,imports){
return (function (idx,import$){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,imports) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(import$),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,import$);
}
});})(vec__26421,_,imports))
,imports));
});
lt.plugins.cljrefactor.pprint.pprint_ns = (function pprint_ns(p__26422){var vec__26426 = p__26422;var _ = cljs.core.nth.call(null,vec__26426,0,null);var name = cljs.core.nth.call(null,vec__26426,1,null);var more = cljs.core.nthnext.call(null,vec__26426,2);var ns_form = vec__26426;var docstring_QMARK_ = ((typeof cljs.core.first.call(null,more) === 'string')?cljs.core.first.call(null,more):null);var attrs_QMARK_ = ((cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,more)))?cljs.core.second.call(null,more):null);var forms = (cljs.core.truth_((function (){var and__19564__auto__ = docstring_QMARK_;if(cljs.core.truth_(and__19564__auto__))
{return attrs_QMARK_;
} else
{return and__19564__auto__;
}
})())?lt.plugins.cljrefactor.pprint.nthrest.call(null,more,2):((cljs.core.not.call(null,(function (){var or__19576__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__19576__auto__))
{return or__19576__auto__;
} else
{return attrs_QMARK_;
}
})()))?more:((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.rest.call(null,more):null)));return clojure.string.replace.call(null,(function (){var sb__20495__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_26427_26430 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26427_26430,sb__20495__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26426,_,name,more,ns_form){
return (function (x__20496__auto__){return sb__20495__auto__.append(x__20496__auto__);
});})(_STAR_print_fn_STAR_26427_26430,sb__20495__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26426,_,name,more,ns_form))
;
cljs.core.print.call(null,[cljs.core.str("(ns "),cljs.core.str(name)].join(''));
if(cljs.core.truth_((function (){var or__19576__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__19576__auto__))
{return or__19576__auto__;
} else
{var or__19576__auto____$1 = attrs_QMARK_;if(cljs.core.truth_(or__19576__auto____$1))
{return or__19576__auto____$1;
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
cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (_STAR_print_fn_STAR_26427_26430,sb__20495__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26426,_,name,more,ns_form){
return (function (idx,form){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,forms) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__20495__auto____$1 = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_26428_26431 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26428_26431,sb__20495__auto____$1,_STAR_print_fn_STAR_26427_26430,sb__20495__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26426,_,name,more,ns_form){
return (function (x__20496__auto__){return sb__20495__auto____$1.append(x__20496__auto__);
});})(_STAR_print_fn_STAR_26428_26431,sb__20495__auto____$1,_STAR_print_fn_STAR_26427_26430,sb__20495__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26426,_,name,more,ns_form))
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
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26428_26431;
}return [cljs.core.str(sb__20495__auto____$1)].join('');
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
});})(_STAR_print_fn_STAR_26427_26430,sb__20495__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26426,_,name,more,ns_form))
,forms));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26427_26430;
}return [cljs.core.str(sb__20495__auto__)].join('');
})(),/\r/,"");
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.namespace')) {
goog.provide('lt.plugins.cljrefactor.namespace');
goog.require('cljs.core');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.cljrefactor.middleware');
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
lt.plugins.cljrefactor.namespace.nsify = (function nsify(sub_path){return (function (p1__21699_SHARP_){return [cljs.core.str("(ns "),cljs.core.str(p1__21699_SHARP_),cljs.core.str(")\n")].join('');
}).call(null,(function (p1__21698_SHARP_){return clojure.string.join.call(null,".",p1__21698_SHARP_);
}).call(null,(function (parts){return cljs.core.map.call(null,(function (p1__21697_SHARP_){return clojure.string.replace.call(null,p1__21697_SHARP_,/_/,"-");
}),parts);
}).call(null,clojure.string.split.call(null,lt.objs.files.without_ext.call(null,sub_path),cljs.core.re_pattern.call(null,lt.objs.files.separator)))));
});
lt.plugins.cljrefactor.namespace.find_line_containing = (function find_line_containing(ed,txt){var res = [];lt.objs.editor.__GT_cm_ed.call(null,ed).getDoc().eachLine(((function (res){
return (function (line_handle){if((line_handle.text.indexOf(txt) > -1))
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
lt.plugins.cljrefactor.namespace.index_of_ns_type = (function index_of_ns_type(ns_decl,t){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__21701_SHARP_,p2__21700_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,p2__21700_SHARP_)),t))
{return p1__21701_SHARP_;
} else
{return null;
}
}),cljs.core.drop.call(null,2,ns_decl)));
});
lt.plugins.cljrefactor.namespace.calc_imp_idx = (function calc_imp_idx(ns_decl){var req_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"require","require",2109600983));var imp_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"import","import",4124075799));return (2 + (cljs.core.truth_(imp_idx)?imp_idx:(function (){var x__19883__auto__ = 1;var y__19884__auto__ = req_idx;return ((x__19883__auto__ > y__19884__auto__) ? x__19883__auto__ : y__19884__auto__);
})()));
});
lt.plugins.cljrefactor.namespace.add_import = (function add_import(ns_decl,imp){var vec__21703 = cljs.core.split_at.call(null,lt.plugins.cljrefactor.namespace.calc_imp_idx.call(null,ns_decl),ns_decl);var pre = cljs.core.nth.call(null,vec__21703,0,null);var post = cljs.core.nth.call(null,vec__21703,1,null);if((cljs.core.seq.call(null,post)) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,post),new cljs.core.Keyword(null,"import","import",4124075799))))
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
lt.plugins.cljrefactor.namespace.add_require = (function add_require(ns_decl,req){var req_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"require","require",2109600983));var vec__21705 = cljs.core.split_at.call(null,(cljs.core.truth_(req_idx)?(req_idx + 2):2),ns_decl);var pre = cljs.core.nth.call(null,vec__21705,0,null);var post = cljs.core.nth.call(null,vec__21705,1,null);if((cljs.core.seq.call(null,post)) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,post),new cljs.core.Keyword(null,"require","require",2109600983))))
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
lt.plugins.cljrefactor.namespace.clean_ns_op = (function clean_ns_op(path){return lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"clean-ns",new cljs.core.Keyword(null,"path","path",1017337751),path], null));
});
lt.plugins.cljrefactor.namespace.__BEH__clean_ns_res = (function __BEH__clean_ns_res(ed,res){var vec__21707 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",1013907767)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21707,0,null);var ret = cljs.core.nth.call(null,vec__21707,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(ret)))
{lt.plugins.cljrefactor.namespace.replace_ns.call(null,ed,new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(ret));
return lt.objs.notifos.set_msg_BANG_.call(null,"Namespace cleaned !");
} else
{return null;
}
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
lt.plugins.cljrefactor.input_prompt.prompt_form = (function prompt_form(this$,init_value){var e__21003__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-prompt","div.refactor-prompt",3754652772),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Enter new name: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"refactor-prompt",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),init_value], null)], null)], null));var seq__21638_21654 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__21639_21655 = null;var count__21640_21656 = 0;var i__21641_21657 = 0;while(true){
if((i__21641_21657 < count__21640_21656))
{var vec__21642_21658 = cljs.core._nth.call(null,chunk__21639_21655,i__21641_21657);var ev__21004__auto___21659 = cljs.core.nth.call(null,vec__21642_21658,0,null);var func__21005__auto___21660 = cljs.core.nth.call(null,vec__21642_21658,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___21659,func__21005__auto___21660);
{
var G__21661 = seq__21638_21654;
var G__21662 = chunk__21639_21655;
var G__21663 = count__21640_21656;
var G__21664 = (i__21641_21657 + 1);
seq__21638_21654 = G__21661;
chunk__21639_21655 = G__21662;
count__21640_21656 = G__21663;
i__21641_21657 = G__21664;
continue;
}
} else
{var temp__4092__auto___21665 = cljs.core.seq.call(null,seq__21638_21654);if(temp__4092__auto___21665)
{var seq__21638_21666__$1 = temp__4092__auto___21665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21638_21666__$1))
{var c__20324__auto___21667 = cljs.core.chunk_first.call(null,seq__21638_21666__$1);{
var G__21668 = cljs.core.chunk_rest.call(null,seq__21638_21666__$1);
var G__21669 = c__20324__auto___21667;
var G__21670 = cljs.core.count.call(null,c__20324__auto___21667);
var G__21671 = 0;
seq__21638_21654 = G__21668;
chunk__21639_21655 = G__21669;
count__21640_21656 = G__21670;
i__21641_21657 = G__21671;
continue;
}
} else
{var vec__21643_21672 = cljs.core.first.call(null,seq__21638_21666__$1);var ev__21004__auto___21673 = cljs.core.nth.call(null,vec__21643_21672,0,null);var func__21005__auto___21674 = cljs.core.nth.call(null,vec__21643_21672,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___21673,func__21005__auto___21674);
{
var G__21675 = cljs.core.next.call(null,seq__21638_21666__$1);
var G__21676 = null;
var G__21677 = 0;
var G__21678 = 0;
seq__21638_21654 = G__21675;
chunk__21639_21655 = G__21676;
count__21640_21656 = G__21677;
i__21641_21657 = G__21678;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
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
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.cljrefactor.middleware');
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
lt.plugins.cljrefactor.usages.result_entry = (function result_entry(this$,entry){var e__21003__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"entry".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(entry))?" active":""))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.line","span.line",4619821962),new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(entry)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),crate.core.raw.call(null,lt.plugins.cljrefactor.usages.highlight.call(null,new cljs.core.Keyword(null,"match","match",1117572407).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))], null)], null));var seq__26665_26729 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__21003__auto__){
return (function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(entry));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"goto-line","goto-line",2802035088),new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(entry));
});})(e__21003__auto__))
], null)));var chunk__26666_26730 = null;var count__26667_26731 = 0;var i__26668_26732 = 0;while(true){
if((i__26668_26732 < count__26667_26731))
{var vec__26669_26733 = cljs.core._nth.call(null,chunk__26666_26730,i__26668_26732);var ev__21004__auto___26734 = cljs.core.nth.call(null,vec__26669_26733,0,null);var func__21005__auto___26735 = cljs.core.nth.call(null,vec__26669_26733,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26734,func__21005__auto___26735);
{
var G__26736 = seq__26665_26729;
var G__26737 = chunk__26666_26730;
var G__26738 = count__26667_26731;
var G__26739 = (i__26668_26732 + 1);
seq__26665_26729 = G__26736;
chunk__26666_26730 = G__26737;
count__26667_26731 = G__26738;
i__26668_26732 = G__26739;
continue;
}
} else
{var temp__4092__auto___26740 = cljs.core.seq.call(null,seq__26665_26729);if(temp__4092__auto___26740)
{var seq__26665_26741__$1 = temp__4092__auto___26740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26665_26741__$1))
{var c__20324__auto___26742 = cljs.core.chunk_first.call(null,seq__26665_26741__$1);{
var G__26743 = cljs.core.chunk_rest.call(null,seq__26665_26741__$1);
var G__26744 = c__20324__auto___26742;
var G__26745 = cljs.core.count.call(null,c__20324__auto___26742);
var G__26746 = 0;
seq__26665_26729 = G__26743;
chunk__26666_26730 = G__26744;
count__26667_26731 = G__26745;
i__26668_26732 = G__26746;
continue;
}
} else
{var vec__26670_26747 = cljs.core.first.call(null,seq__26665_26741__$1);var ev__21004__auto___26748 = cljs.core.nth.call(null,vec__26670_26747,0,null);var func__21005__auto___26749 = cljs.core.nth.call(null,vec__26670_26747,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26748,func__21005__auto___26749);
{
var G__26750 = cljs.core.next.call(null,seq__26665_26741__$1);
var G__26751 = null;
var G__26752 = 0;
var G__26753 = 0;
seq__26665_26729 = G__26750;
chunk__26666_26730 = G__26751;
count__26667_26731 = G__26752;
i__26668_26732 = G__26753;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
});
lt.plugins.cljrefactor.usages.result_item = (function result_item(this$,item){var e__21003__auto__ = crate.core.html.call(null,(function (){var file = new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.path","p.path",4266284629),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file","span.file",4619643154),lt.objs.files.basename.call(null,file)], null),"(",lt.objs.files.parent.call(null,file),")"], null),cljs.core.map.call(null,((function (file){
return (function (p1__26671_SHARP_){return lt.plugins.cljrefactor.usages.result_entry.call(null,this$,p1__26671_SHARP_);
});})(file))
,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(item))], null);
})());var seq__26678_26754 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__26679_26755 = null;var count__26680_26756 = 0;var i__26681_26757 = 0;while(true){
if((i__26681_26757 < count__26680_26756))
{var vec__26682_26758 = cljs.core._nth.call(null,chunk__26679_26755,i__26681_26757);var ev__21004__auto___26759 = cljs.core.nth.call(null,vec__26682_26758,0,null);var func__21005__auto___26760 = cljs.core.nth.call(null,vec__26682_26758,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26759,func__21005__auto___26760);
{
var G__26761 = seq__26678_26754;
var G__26762 = chunk__26679_26755;
var G__26763 = count__26680_26756;
var G__26764 = (i__26681_26757 + 1);
seq__26678_26754 = G__26761;
chunk__26679_26755 = G__26762;
count__26680_26756 = G__26763;
i__26681_26757 = G__26764;
continue;
}
} else
{var temp__4092__auto___26765 = cljs.core.seq.call(null,seq__26678_26754);if(temp__4092__auto___26765)
{var seq__26678_26766__$1 = temp__4092__auto___26765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26678_26766__$1))
{var c__20324__auto___26767 = cljs.core.chunk_first.call(null,seq__26678_26766__$1);{
var G__26768 = cljs.core.chunk_rest.call(null,seq__26678_26766__$1);
var G__26769 = c__20324__auto___26767;
var G__26770 = cljs.core.count.call(null,c__20324__auto___26767);
var G__26771 = 0;
seq__26678_26754 = G__26768;
chunk__26679_26755 = G__26769;
count__26680_26756 = G__26770;
i__26681_26757 = G__26771;
continue;
}
} else
{var vec__26683_26772 = cljs.core.first.call(null,seq__26678_26766__$1);var ev__21004__auto___26773 = cljs.core.nth.call(null,vec__26683_26772,0,null);var func__21005__auto___26774 = cljs.core.nth.call(null,vec__26683_26772,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26773,func__21005__auto___26774);
{
var G__26775 = cljs.core.next.call(null,seq__26678_26766__$1);
var G__26776 = null;
var G__26777 = 0;
var G__26778 = 0;
seq__26678_26754 = G__26775;
chunk__26679_26755 = G__26776;
count__26680_26756 = G__26777;
i__26681_26757 = G__26778;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
});
lt.plugins.cljrefactor.usages.search_results = (function search_results(this$,res){var e__21003__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),cljs.core.map.call(null,(function (p1__26684_SHARP_){return lt.plugins.cljrefactor.usages.result_item.call(null,this$,p1__26684_SHARP_);
}),res)], null));var seq__26691_26779 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__26692_26780 = null;var count__26693_26781 = 0;var i__26694_26782 = 0;while(true){
if((i__26694_26782 < count__26693_26781))
{var vec__26695_26783 = cljs.core._nth.call(null,chunk__26692_26780,i__26694_26782);var ev__21004__auto___26784 = cljs.core.nth.call(null,vec__26695_26783,0,null);var func__21005__auto___26785 = cljs.core.nth.call(null,vec__26695_26783,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26784,func__21005__auto___26785);
{
var G__26786 = seq__26691_26779;
var G__26787 = chunk__26692_26780;
var G__26788 = count__26693_26781;
var G__26789 = (i__26694_26782 + 1);
seq__26691_26779 = G__26786;
chunk__26692_26780 = G__26787;
count__26693_26781 = G__26788;
i__26694_26782 = G__26789;
continue;
}
} else
{var temp__4092__auto___26790 = cljs.core.seq.call(null,seq__26691_26779);if(temp__4092__auto___26790)
{var seq__26691_26791__$1 = temp__4092__auto___26790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26691_26791__$1))
{var c__20324__auto___26792 = cljs.core.chunk_first.call(null,seq__26691_26791__$1);{
var G__26793 = cljs.core.chunk_rest.call(null,seq__26691_26791__$1);
var G__26794 = c__20324__auto___26792;
var G__26795 = cljs.core.count.call(null,c__20324__auto___26792);
var G__26796 = 0;
seq__26691_26779 = G__26793;
chunk__26692_26780 = G__26794;
count__26693_26781 = G__26795;
i__26694_26782 = G__26796;
continue;
}
} else
{var vec__26696_26797 = cljs.core.first.call(null,seq__26691_26791__$1);var ev__21004__auto___26798 = cljs.core.nth.call(null,vec__26696_26797,0,null);var func__21005__auto___26799 = cljs.core.nth.call(null,vec__26696_26797,1,null);lt.util.dom.on.call(null,e__21003__auto__,ev__21004__auto___26798,func__21005__auto___26799);
{
var G__26800 = cljs.core.next.call(null,seq__26691_26791__$1);
var G__26801 = null;
var G__26802 = 0;
var G__26803 = 0;
seq__26691_26779 = G__26800;
chunk__26692_26780 = G__26801;
count__26693_26781 = G__26802;
i__26694_26782 = G__26803;
continue;
}
}
} else
{}
}
break;
}
return e__21003__auto__;
});
lt.plugins.cljrefactor.usages.show_results = (function show_results(this$,res){var container = lt.object.__GT_content.call(null,this$);var results_ul = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),container);return lt.util.dom.replace_with.call(null,results_ul,lt.plugins.cljrefactor.usages.search_results.call(null,this$,res));
});
lt.plugins.cljrefactor.usages.usages__GT_items = (function usages__GT_items(usages){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__26699){var map__26700 = p__26699;var map__26700__$1 = ((cljs.core.seq_QMARK_.call(null,map__26700))?cljs.core.apply.call(null,cljs.core.hash_map,map__26700):map__26700);var x = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243));return cljs.core.apply.call(null,cljs.core.hash_map,cljs.reader.read_string.call(null,x));
}),usages));
});
lt.plugins.cljrefactor.usages.items__GT_view = (function items__GT_view(items){return (function (x){return cljs.core.map.call(null,(function (k){var res = cljs.core.get.call(null,x,k);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),k,new cljs.core.Keyword(null,"items","items",1114430258),res], null);
}),cljs.core.keys.call(null,x));
}).call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"file","file",1017047278),items));
});
lt.plugins.cljrefactor.usages.find_symbol_op = (function find_symbol_op(ed,sym){return lt.plugins.cljrefactor.middleware.create_ns_op.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"find-symbol",new cljs.core.Keyword(null,"name","name",1017277949),sym], null));
});
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res = (function __BEH__find_symbol__DOT__res(ed,res){var vec__26702 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"multiples","multiples",4102754261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",2701778243)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__26702,0,null);var ret = cljs.core.nth.call(null,vec__26702,1,null);var items = lt.plugins.cljrefactor.usages.usages__GT_items.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243).cljs$core$IFn$_invoke$arity$1(ret));if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{if(cljs.core.seq.call(null,items))
{lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,new cljs.core.Keyword(null,"active","active",3885920888)], null),true)], null));
} else
{lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),null], null));
}
lt.plugins.cljrefactor.usages.show_results.call(null,lt.plugins.cljrefactor.usages.refactor_usages,lt.plugins.cljrefactor.usages.items__GT_view.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.usages.refactor_usages))));
lt.object.update_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for","search-for",4597237398),new cljs.core.Keyword(null,"namespace","namespace",2266122445)], null),((function (vec__26702,ok_QMARK_,ret,items){
return (function (_){return new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});})(vec__26702,ok_QMARK_,ret,items))
);
}
return lt.objs.notifos.done_working.call(null,"Find usages completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol.res","lt.plugins.cljrefactor.usages/find-symbol.res",2620470851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.find-symbol","editor.eval.clj.result.refactor.find-symbol",1593184613),null], null), null));
lt.plugins.cljrefactor.usages.__GT_idx_active = (function __GT_idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__26704_SHARP_,p2__26703_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__26703_SHARP_)))
{return p1__26704_SHARP_;
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
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__start = (function __BEH__find_symbol__DOT__start(this$,ed,token){var ns = (function (){var or__19576__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__19576__auto__))
{return or__19576__auto__;
} else
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
}
})();var sym = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token);if(cljs.core._EQ_.call(null,sym.indexOf("/"),-1))
{lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for","search-for",4597237398)], null),((function (ns,sym){
return (function (_){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",4421347594),sym,new cljs.core.Keyword(null,"namespace","namespace",2266122445),ns], null);
});})(ns,sym))
);
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.usages.find_symbol_op.call(null,ed,sym),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.find-symbol","refactor.find-symbol",3383223538),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true,new cljs.core.Keyword(null,"symbol","symbol",4421347594),sym], null));
} else
{return null;
}
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
lt.objs.files.save.call(null,file,lt.objs.editor.__GT_val.call(null,ed));
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
lt.plugins.cljrefactor.usages.replace_in_editors_BANG_ = (function replace_in_editors_BANG_(itemsByFile,p__26706){var map__26712 = p__26706;var map__26712__$1 = ((cljs.core.seq_QMARK_.call(null,map__26712))?cljs.core.apply.call(null,cljs.core.hash_map,map__26712):map__26712);var new$ = cljs.core.get.call(null,map__26712__$1,new cljs.core.Keyword(null,"new","new",1014013202));var old = cljs.core.get.call(null,map__26712__$1,new cljs.core.Keyword(null,"old","old",1014014361));var open_eds = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322));var open_ed_QMARK_ = ((function (open_eds,map__26712,map__26712__$1,new$,old){
return (function (file){return cljs.core.some.call(null,((function (open_eds,map__26712,map__26712__$1,new$,old){
return (function (p1__26705_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__26705_SHARP_))),file))
{return p1__26705_SHARP_;
} else
{return null;
}
});})(open_eds,map__26712,map__26712__$1,new$,old))
,open_eds);
});})(open_eds,map__26712,map__26712__$1,new$,old))
;var seq__26713 = cljs.core.seq.call(null,itemsByFile);var chunk__26714 = null;var count__26715 = 0;var i__26716 = 0;while(true){
if((i__26716 < count__26715))
{var fileItems = cljs.core._nth.call(null,chunk__26714,i__26716);var temp__4090__auto___26804 = open_ed_QMARK_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems));if(cljs.core.truth_(temp__4090__auto___26804))
{var open_ed_26805 = temp__4090__auto___26804;lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_.call(null,open_ed_26805,lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
} else
{lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems),lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
}
{
var G__26806 = seq__26713;
var G__26807 = chunk__26714;
var G__26808 = count__26715;
var G__26809 = (i__26716 + 1);
seq__26713 = G__26806;
chunk__26714 = G__26807;
count__26715 = G__26808;
i__26716 = G__26809;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26713);if(temp__4092__auto__)
{var seq__26713__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26713__$1))
{var c__20324__auto__ = cljs.core.chunk_first.call(null,seq__26713__$1);{
var G__26810 = cljs.core.chunk_rest.call(null,seq__26713__$1);
var G__26811 = c__20324__auto__;
var G__26812 = cljs.core.count.call(null,c__20324__auto__);
var G__26813 = 0;
seq__26713 = G__26810;
chunk__26714 = G__26811;
count__26715 = G__26812;
i__26716 = G__26813;
continue;
}
} else
{var fileItems = cljs.core.first.call(null,seq__26713__$1);var temp__4090__auto___26814 = open_ed_QMARK_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems));if(cljs.core.truth_(temp__4090__auto___26814))
{var open_ed_26815 = temp__4090__auto___26814;lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_.call(null,open_ed_26815,lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
} else
{lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems),lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
}
{
var G__26816 = cljs.core.next.call(null,seq__26713__$1);
var G__26817 = null;
var G__26818 = 0;
var G__26819 = 0;
seq__26713 = G__26816;
chunk__26714 = G__26817;
count__26715 = G__26818;
i__26716 = G__26819;
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
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__res = (function __BEH__rename_symbol__DOT__res(ed,res){var vec__26718 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"multiples","multiples",4102754261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",2701778243)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__26718,0,null);var ret = cljs.core.nth.call(null,vec__26718,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var itemsByFile_26820 = lt.plugins.cljrefactor.usages.items__GT_view.call(null,lt.plugins.cljrefactor.usages.usages__GT_items.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243).cljs$core$IFn$_invoke$arity$1(ret)));var pos_26821 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret));lt.plugins.cljrefactor.usages.replace_in_editors_BANG_.call(null,itemsByFile_26820,new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret));
lt.objs.editor.focus.call(null,ed);
lt.objs.editor.move_cursor.call(null,ed,pos_26821);
lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"Renamed ok !",pos_26821);
}
return lt.objs.notifos.done_working.call(null,"Rename completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","rename-symbol.res","lt.plugins.cljrefactor.usages/rename-symbol.res",1052900768),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.rename-symbol","editor.eval.clj.result.refactor.rename-symbol",3323570816),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__start = (function __BEH__rename_symbol__DOT__start(ed,old,new$){if(cljs.core.seq.call(null,clojure.string.trim.call(null,new$)))
{var ns = (function (){var or__19576__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__19576__auto__))
{return or__19576__auto__;
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
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__prompt = (function __BEH__rename_symbol__DOT__prompt(ed,token){var ns = (function (){var or__19576__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__19576__auto__))
{return or__19576__auto__;
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
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.cljrefactor.pprint');
goog.require('lt.plugins.cljrefactor.namespace');
goog.require('lt.plugins.cljrefactor.namespace');
goog.require('lt.plugins.cljrefactor.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('clojure.string');
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
lt.plugins.cljrefactor.__BEH__ensure_connected = (function __BEH__ensure_connected(ed){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),"(println \"ping\")",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"no-op","no-op",1118845151),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor","ensure-connected","lt.plugins.cljrefactor/ensure-connected",4599780010),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.__BEH__ensure_connected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.connect","refactor.connect",3351801776),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor","ping-repl","lt.plugins.cljrefactor/ping-repl",680439130),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Ensure editor connected",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.connect","refactor.connect",3351801776));
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
lt.plugins.cljrefactor.__BEH__resolve_missing_selected = (function __BEH__resolve_missing_selected(ed,item){var G__21123_21137 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852),G__21123_21137))
{lt.plugins.cljrefactor.add_missing_type.call(null,ed,item);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__21123_21137))
{lt.plugins.cljrefactor.add_missing_import.call(null,ed,item);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767),G__21123_21137))
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
lt.plugins.cljrefactor.resolve_missing_op = (function resolve_missing_op(sym){return lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"resolve-missing",new cljs.core.Keyword(null,"symbol","symbol",4421347594),sym], null));
});
lt.plugins.cljrefactor.parse_missing = (function parse_missing(res){var candidates = new cljs.core.Keyword(null,"candidates","candidates",3897560770).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)))));if(typeof candidates === 'string')
{return cljs.core.vec.call(null,cljs.core.map.call(null,((function (candidates){
return (function (p1__21124_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.Keyword(null,"type","type",1017479852)],[cljs.core.first.call(null,p1__21124_SHARP_),cljs.core.second.call(null,p1__21124_SHARP_)]);
});})(candidates))
,cljs.reader.read_string.call(null,candidates)));
} else
{return null;
}
});
lt.plugins.cljrefactor.__BEH__resolve_missing_res = (function __BEH__resolve_missing_res(ed,res){var vec__21126 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"candidates","candidates",3897560770)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21126,0,null);var ret = cljs.core.nth.call(null,vec__21126,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var temp__4090__auto__ = lt.plugins.cljrefactor.parse_missing.call(null,res);if(cljs.core.truth_(temp__4090__auto__))
{var candidates = temp__4090__auto__;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,candidates),1))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"resolve-missing.selected","resolve-missing.selected",3085476694),cljs.core.first.call(null,candidates));
} else
{return lt.plugins.cljrefactor.selector.make.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ed","ed",1013907473),ed,new cljs.core.Keyword(null,"behavior","behavior",2524816836),new cljs.core.Keyword(null,"resolve-missing.selected","resolve-missing.selected",3085476694),new cljs.core.Keyword(null,"pos","pos",1014015430),lt.objs.editor.__GT_cursor.call(null,ed),new cljs.core.Keyword(null,"items","items",1114430258),candidates], null));
}
} else
{return cljs.core.println.call(null,"Couldn't find any suggestion for symbol");
}
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
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.form-refactor')) {
goog.provide('lt.plugins.cljrefactor.form_refactor');
goog.require('cljs.core');
goog.require('lt.plugins.paredit');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.paredit');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('clojure.string');
goog.require('clojure.zip');
goog.require('lt.objs.editor.pool');
goog.require('clojure.zip');
goog.require('lt.objs.command');
goog.require('lt.plugins.cljrefactor.util');
goog.require('clojure.string');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.form_refactor.top = (function top(zipnode){var n = zipnode;while(true){
if(cljs.core.not.call(null,clojure.zip.up.call(null,n)))
{return n;
} else
{{
var G__21544 = clojure.zip.up.call(null,n);
n = G__21544;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.form_refactor.if_node_QMARK_ = (function if_node_QMARK_(loc){if((cljs.core.seq.call(null,loc)) && (cljs.core.list_QMARK_.call(null,clojure.zip.node.call(null,loc))))
{return (function (s){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([s], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"if-not","if-not",1461178332,null)], null));
}).call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,loc)));
} else
{return null;
}
});
lt.plugins.cljrefactor.form_refactor.swap_if_nodes = (function swap_if_nodes(loc){var move = clojure.zip.node.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,loc))));return clojure.zip.append_child.call(null,lt.plugins.cljrefactor.form_refactor.top.call(null,clojure.zip.remove.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,loc))))),move);
});
lt.plugins.cljrefactor.form_refactor.cycle_if = (function cycle_if(form_str){var root = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var if_node = lt.plugins.cljrefactor.form_refactor.if_node_QMARK_.call(null,root);if(cljs.core.truth_(if_node))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,clojure.zip.replace.call(null,clojure.zip.down.call(null,lt.plugins.cljrefactor.form_refactor.swap_if_nodes.call(null,root)),((cljs.core._EQ_.call(null,if_node,new cljs.core.Symbol(null,"if","if",-1640528170,null)))?new cljs.core.Symbol(null,"if-not","if-not",1461178332,null):new cljs.core.Symbol(null,"if","if",-1640528170,null))));
} else
{return null;
}
});
lt.plugins.cljrefactor.form_refactor.cycle_col = (function cycle_col(form_str){if((cljs.core.count.call(null,form_str) > 1))
{var wrap_in = (function (a,b,n){return clojure.string.join.call(null,"",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),cljs.core.drop.call(null,n,cljs.core.drop_last.call(null,form_str)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null)));
});if(cljs.core._EQ_.call(null,cljs.core.first.call(null,form_str),"("))
{return wrap_in.call(null,"[","]",1);
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,form_str),"["))
{return wrap_in.call(null,"{","}",1);
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,form_str),"{"))
{return wrap_in.call(null,"#{","}",1);
} else
{if(cljs.core._EQ_.call(null,form_str.substr(0,2),"#{"))
{return wrap_in.call(null,"(",")",2);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
} else
{return null;
}
});
lt.plugins.cljrefactor.form_refactor.find_node = (function find_node(start,candidate_str){var cur = start;while(true){
if(cljs.core._EQ_.call(null,[cljs.core.str(clojure.zip.node.call(null,cur))].join(''),candidate_str))
{return cur;
} else
{if(!(clojure.zip.end_QMARK_.call(null,cur)))
{{
var G__21545 = clojure.zip.next.call(null,cur);
cur = G__21545;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
break;
}
});
lt.plugins.cljrefactor.form_refactor.move_up = (function move_up(form_str,candidate_str){var root = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var loc_QMARK_ = ((cljs.core.seq.call(null,root))?lt.plugins.cljrefactor.form_refactor.find_node.call(null,root,candidate_str):null);if(cljs.core.truth_((function (){var and__19564__auto__ = loc_QMARK_;if(cljs.core.truth_(and__19564__auto__))
{return clojure.zip.node.call(null,clojure.zip.remove.call(null,loc_QMARK_));
} else
{return and__19564__auto__;
}
})()))
{return clojure.zip.root.call(null,clojure.zip.insert_left.call(null,clojure.zip.remove.call(null,loc_QMARK_),clojure.zip.node.call(null,loc_QMARK_)));
} else
{return null;
}
});
lt.plugins.cljrefactor.form_refactor.inject_nl = (function inject_nl(form_str){var idx_a = form_str.indexOf("if (");var idx_b = form_str.indexOf("if-not (");if(cljs.core._EQ_.call(null,-1,idx_a,idx_b))
{return clojure.string.replace.call(null,form_str,/\s\(/,"\n(");
} else
{if((idx_a > idx_b))
{return [cljs.core.str(form_str.substr(0,(idx_a + 4))),cljs.core.str(inject_nl.call(null,form_str.substr((idx_a + 4))))].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str(form_str.substr(0,(idx_b + 8))),cljs.core.str(inject_nl.call(null,form_str.substr((idx_b + 8))))].join('');
} else
{return null;
}
}
}
});
lt.plugins.cljrefactor.form_refactor.format_form = (function format_form(form_str){return lt.plugins.cljrefactor.form_refactor.inject_nl.call(null,form_str);
});
/**
* @param {...*} var_args
*/
lt.plugins.cljrefactor.form_refactor.replace_cmd = (function() { 
var replace_cmd__delegate = function (ed,replace_fn,p__21525){var map__21530 = p__21525;var map__21530__$1 = ((cljs.core.seq_QMARK_.call(null,map__21530))?cljs.core.apply.call(null,cljs.core.hash_map,map__21530):map__21530);var fmt = cljs.core.get.call(null,map__21530__$1,new cljs.core.Keyword(null,"fmt","fmt",1014005759));var map__21531 = lt.plugins.cljrefactor.util.get_form.call(null,ed);var map__21531__$1 = ((cljs.core.seq_QMARK_.call(null,map__21531))?cljs.core.apply.call(null,cljs.core.hash_map,map__21531):map__21531);var form_str = cljs.core.get.call(null,map__21531__$1,new cljs.core.Keyword(null,"form-str","form-str",1486434586));var end = cljs.core.get.call(null,map__21531__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__21531__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(cljs.core.truth_(form_str))
{var temp__4092__auto__ = (function (){var G__21532 = form_str;var G__21532__$1 = (((G__21532 == null))?null:replace_fn.call(null,G__21532));var G__21532__$2 = (((G__21532__$1 == null))?null:((function (G__21532,G__21532__$1,map__21531,map__21531__$1,form_str,end,start,map__21530,map__21530__$1,fmt){
return (function (p1__21523_SHARP_){if(cljs.core.truth_(fmt))
{return lt.plugins.cljrefactor.form_refactor.format_form.call(null,p1__21523_SHARP_);
} else
{return p1__21523_SHARP_;
}
});})(G__21532,G__21532__$1,map__21531,map__21531__$1,form_str,end,start,map__21530,map__21530__$1,fmt))
.call(null,G__21532__$1));return G__21532__$2;
})();if(cljs.core.truth_(temp__4092__auto__))
{var res = temp__4092__auto__;lt.objs.editor.replace.call(null,ed,start,end,res);
var p = ((lt.plugins.cljrefactor.util.set_form_QMARK_.call(null,res))?cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),((function (res,temp__4092__auto__,map__21531,map__21531__$1,form_str,end,start,map__21530,map__21530__$1,fmt){
return (function (p1__21524_SHARP_){return (p1__21524_SHARP_ + 2);
});})(res,temp__4092__auto__,map__21531,map__21531__$1,form_str,end,start,map__21530,map__21530__$1,fmt))
):cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var map__21533 = lt.plugins.cljrefactor.util.get_form.call(null,ed,p);var map__21533__$1 = ((cljs.core.seq_QMARK_.call(null,map__21533))?cljs.core.apply.call(null,cljs.core.hash_map,map__21533):map__21533);var s1 = cljs.core.get.call(null,map__21533__$1,new cljs.core.Keyword(null,"start","start",1123661780));var s2 = cljs.core.get.call(null,map__21533__$1,new cljs.core.Keyword(null,"end","end",1014004813));lt.objs.editor.set_selection.call(null,ed,s1,s2);
lt.objs.editor.indent_selection.call(null,ed,"smart");
return lt.objs.editor.move_cursor.call(null,ed,p);
} else
{return null;
}
} else
{return null;
}
};
var replace_cmd = function (ed,replace_fn,var_args){
var p__21525 = null;if (arguments.length > 2) {
  p__21525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return replace_cmd__delegate.call(this,ed,replace_fn,p__21525);};
replace_cmd.cljs$lang$maxFixedArity = 2;
replace_cmd.cljs$lang$applyTo = (function (arglist__21546){
var ed = cljs.core.first(arglist__21546);
arglist__21546 = cljs.core.next(arglist__21546);
var replace_fn = cljs.core.first(arglist__21546);
var p__21525 = cljs.core.rest(arglist__21546);
return replace_cmd__delegate(ed,replace_fn,p__21525);
});
replace_cmd.cljs$core$IFn$_invoke$arity$variadic = replace_cmd__delegate;
return replace_cmd;
})()
;
lt.plugins.cljrefactor.form_refactor.__BEH__cycle_if_BANG_ = (function __BEH__cycle_if_BANG_(ed){return lt.plugins.cljrefactor.form_refactor.replace_cmd.call(null,ed,lt.plugins.cljrefactor.form_refactor.cycle_if,new cljs.core.Keyword(null,"fmt","fmt",1014005759),true);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.form-refactor","cycle-if!","lt.plugins.cljrefactor.form-refactor/cycle-if!",3230909094),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.form_refactor.__BEH__cycle_if_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.cycle-if!","refactor.cycle-if!",4777259779),null], null), null));
lt.plugins.cljrefactor.form_refactor.__BEH__cycle_col_BANG_ = (function __BEH__cycle_col_BANG_(ed){return lt.plugins.cljrefactor.form_refactor.replace_cmd.call(null,ed,lt.plugins.cljrefactor.form_refactor.cycle_col);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.form-refactor","cycle-col!","lt.plugins.cljrefactor.form-refactor/cycle-col!",3600489529),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.form_refactor.__BEH__cycle_col_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.cycle-col!","refactor.cycle-col!",1713641158),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.form-refactor","cycle-if","lt.plugins.cljrefactor.form-refactor/cycle-if",2040264829),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Cycle if",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.cycle-if!","refactor.cycle-if!",4777259779));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.form-refactor","cycle-col","lt.plugins.cljrefactor.form-refactor/cycle-col",3230922602),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Cycle col",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.cycle-col!","refactor.cycle-col!",1713641158));
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.format')) {
goog.provide('lt.plugins.cljrefactor.format');
goog.require('cljs.core');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.format.__BEH__format_res = (function __BEH__format_res(ed,res){var vec__21603 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatted-code","formatted-code",3575261136)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21603,0,null);var ret = cljs.core.nth.call(null,vec__21603,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{lt.objs.editor.replace.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret))),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret))),new cljs.core.Keyword(null,"formatted-code","formatted-code",3575261136).cljs$core$IFn$_invoke$arity$1(ret));
lt.objs.editor.move_cursor.call(null,ed,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret))));
}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.format","format-res","lt.plugins.cljrefactor.format/format-res",3318811863),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.format.__BEH__format_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.format-code","editor.eval.clj.result.refactor.format-code",3438318396),null], null), null));
lt.plugins.cljrefactor.format.__BEH__format_code_BANG_ = (function __BEH__format_code_BANG_(ed,code,bounds){var op = lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"format-code",new cljs.core.Keyword(null,"code","code",1016963423),code], null));return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),op,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.format-code","refactor.format-code",933390025),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.format","format-code!","lt.plugins.cljrefactor.format/format-code!",3799105891),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.format.__BEH__format_code_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.format-code!","refactor.format-code!",2812930844),null], null), null));
lt.plugins.cljrefactor.format.__BEH__start_format_code = (function __BEH__start_format_code(ed){if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.format-code!","refactor.format-code!",2812930844),lt.objs.editor.selection.call(null,ed),lt.objs.editor.selection_bounds.call(null,ed));
} else
{var temp__4092__auto__ = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var form = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.format-code!","refactor.format-code!",2812930844),new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form)], null));
} else
{return null;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.format","start-format-code","lt.plugins.cljrefactor.format/start-format-code",3061667833),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.format.__BEH__start_format_code,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.start-format-code","refactor.start-format-code",2735106782),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.format","format-code","lt.plugins.cljrefactor.format/format-code",4389602576),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Format code",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.start-format-code","refactor.start-format-code",2735106782));
} else
{return null;
}
})], null));
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
lt.plugins.cljrefactor.definition.get_definition_in_hidden_ed = (function get_definition_in_hidden_ed(file,line){var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file));var ed = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-clojure",new cljs.core.Keyword(null,"content","content",1965434859),content], null));var vec__21437 = lt.plugins.paredit.form_boundary.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line.call(null,ed,(line - 1)).indexOf("(") + 1)], null));var start = cljs.core.nth.call(null,vec__21437,0,null);var end = cljs.core.nth.call(null,vec__21437,1,null);var sel = (cljs.core.truth_((function (){var and__19564__auto__ = start;if(cljs.core.truth_(and__19564__auto__))
{return end;
} else
{return and__19564__auto__;
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
lt.plugins.cljrefactor.definition.__BEH__finish_show_definition = (function __BEH__finish_show_definition(ed,p__21438){var map__21440 = p__21438;var map__21440__$1 = ((cljs.core.seq_QMARK_.call(null,map__21440))?cljs.core.apply.call(null,cljs.core.hash_map,map__21440):map__21440);var res = map__21440__$1;var line = cljs.core.get.call(null,map__21440__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__21440__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"show-def","show-def",673906855),new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(res)))
{if(cljs.core.truth_((function (){var and__19564__auto__ = res;if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = file;if(cljs.core.truth_(and__19564__auto____$1))
{return line;
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
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
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('clojure.string');
goog.require('clojure.zip');
goog.require('lt.objs.editor.pool');
goog.require('clojure.zip');
goog.require('lt.objs.command');
goog.require('lt.plugins.cljrefactor.util');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.threading.top = (function top(zipnode){var n = zipnode;while(true){
if(cljs.core.not.call(null,clojure.zip.up.call(null,n)))
{return n;
} else
{{
var G__26650 = clojure.zip.up.call(null,n);
n = G__26650;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.threading.threading_locator = (function threading_locator(t){var G__26625 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__26625))
{return null;
} else
{if(cljs.core._EQ_.call(null,"some->>",G__26625))
{return ((function (G__26625){
return (function (p1__26623_SHARP_){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__26623_SHARP_))));
});
;})(G__26625))
} else
{if(cljs.core._EQ_.call(null,"->>",G__26625))
{return ((function (G__26625){
return (function (p1__26623_SHARP_){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__26623_SHARP_))));
});
;})(G__26625))
} else
{if(cljs.core._EQ_.call(null,"some->",G__26625))
{return ((function (G__26625){
return (function (p1__26622_SHARP_){return clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__26622_SHARP_))));
});
;})(G__26625))
} else
{if(cljs.core._EQ_.call(null,"->",G__26625))
{return ((function (G__26625){
return (function (p1__26622_SHARP_){return clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__26622_SHARP_))));
});
;})(G__26625))
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
lt.plugins.cljrefactor.threading.unwind_op = (function unwind_op(t){var G__26631 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__26631))
{return null;
} else
{if(cljs.core._EQ_.call(null,"some->>",G__26631))
{return ((function (G__26631){
return (function (p1__26628_SHARP_,p2__26629_SHARP_){return clojure.zip.append_child.call(null,p1__26628_SHARP_,p2__26629_SHARP_);
});
;})(G__26631))
} else
{if(cljs.core._EQ_.call(null,"->>",G__26631))
{return ((function (G__26631){
return (function (p1__26628_SHARP_,p2__26629_SHARP_){return clojure.zip.append_child.call(null,p1__26628_SHARP_,p2__26629_SHARP_);
});
;})(G__26631))
} else
{if(cljs.core._EQ_.call(null,"some->",G__26631))
{return ((function (G__26631){
return (function (p1__26626_SHARP_,p2__26627_SHARP_){return clojure.zip.insert_right.call(null,clojure.zip.down.call(null,p1__26626_SHARP_),p2__26627_SHARP_);
});
;})(G__26631))
} else
{if(cljs.core._EQ_.call(null,"->",G__26631))
{return ((function (G__26631){
return (function (p1__26626_SHARP_,p2__26627_SHARP_){return clojure.zip.insert_right.call(null,clojure.zip.down.call(null,p1__26626_SHARP_),p2__26627_SHARP_);
});
;})(G__26631))
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
return (function (p1__26632_SHARP_){return clojure.zip.replace.call(null,p1__26632_SHARP_,lt.plugins.cljrefactor.threading.unwrap_list_if_one.call(null,clojure.zip.node.call(null,p1__26632_SHARP_)));
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
var G__26651 = lt.plugins.cljrefactor.threading.do_thread_one.call(null,cand,cand_fn);
cand = G__26651;
continue;
}
}
break;
}
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread_first = (function thread_first(form_str){var temp__4092__auto__ = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,"->"),"->"));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread_last = (function thread_last(form_str){var temp__4092__auto__ = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,"->>"),"->>"));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread = (function thread(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__19564__auto__ = node;if(cljs.core.truth_(and__19564__auto__))
{return threading;
} else
{return and__19564__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,threading),threading));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread_one = (function thread_one(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__19564__auto__ = node;if(cljs.core.truth_(and__19564__auto__))
{return threading;
} else
{return and__19564__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread_one.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,threading)));
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
return (function (p1__26633_SHARP_){return clojure.zip.replace.call(null,p1__26633_SHARP_,lt.plugins.cljrefactor.threading.maybe_wrap_in_list.call(null,clojure.zip.node.call(null,p1__26633_SHARP_)));
});})(demote,therest))
.call(null,clojure.zip.right.call(null,therest)),demote));
}
});
lt.plugins.cljrefactor.threading.do_unwind = (function do_unwind(root,unwind_fn){var cand = root;while(true){
if(!(lt.plugins.cljrefactor.threading.further_unwindable_QMARK_.call(null,cand)))
{return cand;
} else
{{
var G__26652 = lt.plugins.cljrefactor.threading.do_unwind_one.call(null,cand,unwind_fn);
cand = G__26652;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.threading.unwind = (function unwind(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__19564__auto__ = node;if(cljs.core.truth_(and__19564__auto__))
{return threading;
} else
{return and__19564__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.unwrap_threading.call(null,lt.plugins.cljrefactor.threading.do_unwind.call(null,node,lt.plugins.cljrefactor.threading.unwind_op.call(null,threading))));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.unwind_one = (function unwind_one(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__19564__auto__ = node;if(cljs.core.truth_(and__19564__auto__))
{return threading;
} else
{return and__19564__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.maybe_unwrap_threading.call(null,lt.plugins.cljrefactor.threading.do_unwind_one.call(null,node,lt.plugins.cljrefactor.threading.unwind_op.call(null,threading))));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.format_form = (function format_form(form_str){return clojure.string.replace.call(null,form_str,/\s+\(/,"\n(");
});
lt.plugins.cljrefactor.threading.replace_cmd = (function replace_cmd(ed,replace_fn){var map__26637 = lt.plugins.cljrefactor.util.get_form.call(null,ed);var map__26637__$1 = ((cljs.core.seq_QMARK_.call(null,map__26637))?cljs.core.apply.call(null,cljs.core.hash_map,map__26637):map__26637);var end = cljs.core.get.call(null,map__26637__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__26637__$1,new cljs.core.Keyword(null,"start","start",1123661780));var form_str = cljs.core.get.call(null,map__26637__$1,new cljs.core.Keyword(null,"form-str","form-str",1486434586));if(cljs.core.truth_(form_str))
{var temp__4092__auto___26653 = (function (){var G__26638 = form_str;var G__26638__$1 = (((G__26638 == null))?null:replace_fn.call(null,G__26638));var G__26638__$2 = (((G__26638__$1 == null))?null:lt.plugins.cljrefactor.threading.format_form.call(null,G__26638__$1));return G__26638__$2;
})();if(cljs.core.truth_(temp__4092__auto___26653))
{var res_26654 = temp__4092__auto___26653;lt.objs.editor.replace.call(null,ed,start,end,res_26654);
var map__26639_26655 = lt.plugins.cljrefactor.util.get_form.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var map__26639_26656__$1 = ((cljs.core.seq_QMARK_.call(null,map__26639_26655))?cljs.core.apply.call(null,cljs.core.hash_map,map__26639_26655):map__26639_26655);var s1_26657 = cljs.core.get.call(null,map__26639_26656__$1,new cljs.core.Keyword(null,"start","start",1123661780));var s2_26658 = cljs.core.get.call(null,map__26639_26656__$1,new cljs.core.Keyword(null,"end","end",1014004813));lt.objs.editor.set_selection.call(null,ed,s1_26657,s2_26658);
lt.objs.editor.indent_selection.call(null,ed,"smart");
} else
{}
return lt.objs.editor.move_cursor.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));
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
if(!lt.util.load.provided_QMARK_('lt.plugins.cljrefactor.macroexpand')) {
goog.provide('lt.plugins.cljrefactor.macroexpand');
goog.require('cljs.core');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.cljrefactor.util');
goog.require('lt.plugins.cljrefactor.middleware');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.macroexpand.__BEH__macroexpand_res = (function __BEH__macroexpand_res(ed,res){var vec__21680 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expansion","expansion",1031782449)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21680,0,null);var ret = cljs.core.nth.call(null,vec__21680,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),new cljs.core.Keyword(null,"expansion","expansion",1031782449).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bounds","bounds",3925666343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret)))) + 1)], null));
}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.macroexpand","macroexpand-res","lt.plugins.cljrefactor.macroexpand/macroexpand-res",2658884789),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.macroexpand.__BEH__macroexpand_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.macroexpand","editor.eval.clj.result.refactor.macroexpand",2847263391),null], null), null));
lt.plugins.cljrefactor.macroexpand.__BEH__macroexpand = (function __BEH__macroexpand(ed,code,bounds,expander){var op = lt.plugins.cljrefactor.middleware.create_ns_op.call(null,ed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",1013907795),"macroexpand",new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"expander","expander",3369771065),expander], null));return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),op,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.macroexpand","refactor.macroexpand",4637302316),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.macroexpand","macroexpand","lt.plugins.cljrefactor.macroexpand/macroexpand",2686870120),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.macroexpand.__BEH__macroexpand,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.macroexpand","refactor.macroexpand",4637302316),null], null), null));
lt.plugins.cljrefactor.macroexpand.__BEH__start_macroexpand = (function __BEH__start_macroexpand(ed,expander){if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.macroexpand","refactor.macroexpand",4637302316),lt.objs.editor.selection.call(null,ed),lt.objs.editor.selection_bounds.call(null,ed),expander);
} else
{var temp__4092__auto__ = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var form = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.macroexpand","refactor.macroexpand",4637302316),new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form)], null),expander);
} else
{return null;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.macroexpand","start-macroexpand","lt.plugins.cljrefactor.macroexpand/start-macroexpand",550442355),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.macroexpand.__BEH__start_macroexpand,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.start-macroexpand","refactor.start-macroexpand",2144051777),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.macroexpand","macroexpand-default","lt.plugins.cljrefactor.macroexpand/macroexpand-default",4459754900),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Macroexpand",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.start-macroexpand","refactor.start-macroexpand",2144051777),"macroexpand");
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.macroexpand","macroexpand-all","lt.plugins.cljrefactor.macroexpand/macroexpand-all",2662571444),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Macroexpand all",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"refactor.start-macroexpand","refactor.start-macroexpand",2144051777),"macroexpand-all");
} else
{return null;
}
})], null));
}

//# sourceMappingURL=clj-light-refactor_compiled.js.map