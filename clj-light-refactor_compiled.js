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
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",1965434859)),(function (node,children){return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",1965434859),(function (){var and__15777__auto__ = children;if(cljs.core.truth_(and__15777__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__15777__auto__;
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
{var vec__17730 = loc;var node = cljs.core.nth.call(null,vec__17730,0,null);var path = cljs.core.nth.call(null,vec__17730,1,null);var vec__17731 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__17731,0,null);var cnext = cljs.core.nthnext.call(null,vec__17731,1);var cs = vec__17731;if(cljs.core.truth_(cs))
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
clojure.zip.up = (function up(loc){var vec__17734 = loc;var node = cljs.core.nth.call(null,vec__17734,0,null);var map__17735 = cljs.core.nth.call(null,vec__17734,1,null);var map__17735__$1 = ((cljs.core.seq_QMARK_.call(null,map__17735))?cljs.core.apply.call(null,cljs.core.hash_map,map__17735):map__17735);var path = map__17735__$1;var l = cljs.core.get.call(null,map__17735__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__17735__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__17735__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var r = cljs.core.get.call(null,map__17735__$1,new cljs.core.Keyword(null,"r","r",1013904356));var changed_QMARK_ = cljs.core.get.call(null,map__17735__$1,new cljs.core.Keyword(null,"changed?","changed?",2446321533));if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__15777__auto__ = ppath;if(cljs.core.truth_(and__15777__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__15777__auto__;
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
var G__17768 = p;
loc = G__17768;
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
clojure.zip.right = (function right(loc){var vec__17739 = loc;var node = cljs.core.nth.call(null,vec__17739,0,null);var map__17740 = cljs.core.nth.call(null,vec__17739,1,null);var map__17740__$1 = ((cljs.core.seq_QMARK_.call(null,map__17740))?cljs.core.apply.call(null,cljs.core.hash_map,map__17740):map__17740);var path = map__17740__$1;var l = cljs.core.get.call(null,map__17740__$1,new cljs.core.Keyword(null,"l","l",1013904350));var vec__17741 = cljs.core.get.call(null,map__17740__$1,new cljs.core.Keyword(null,"r","r",1013904356));var r = cljs.core.nth.call(null,vec__17741,0,null);var rnext = cljs.core.nthnext.call(null,vec__17741,1);var rs = vec__17741;if(cljs.core.truth_((function (){var and__15777__auto__ = path;if(cljs.core.truth_(and__15777__auto__))
{return rs;
} else
{return and__15777__auto__;
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
clojure.zip.rightmost = (function rightmost(loc){var vec__17744 = loc;var node = cljs.core.nth.call(null,vec__17744,0,null);var map__17745 = cljs.core.nth.call(null,vec__17744,1,null);var map__17745__$1 = ((cljs.core.seq_QMARK_.call(null,map__17745))?cljs.core.apply.call(null,cljs.core.hash_map,map__17745):map__17745);var path = map__17745__$1;var l = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__15777__auto__ = path;if(cljs.core.truth_(and__15777__auto__))
{return r;
} else
{return and__15777__auto__;
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
clojure.zip.left = (function left(loc){var vec__17748 = loc;var node = cljs.core.nth.call(null,vec__17748,0,null);var map__17749 = cljs.core.nth.call(null,vec__17748,1,null);var map__17749__$1 = ((cljs.core.seq_QMARK_.call(null,map__17749))?cljs.core.apply.call(null,cljs.core.hash_map,map__17749):map__17749);var path = map__17749__$1;var l = cljs.core.get.call(null,map__17749__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__17749__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__15777__auto__ = path;if(cljs.core.truth_(and__15777__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__15777__auto__;
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
clojure.zip.leftmost = (function leftmost(loc){var vec__17752 = loc;var node = cljs.core.nth.call(null,vec__17752,0,null);var map__17753 = cljs.core.nth.call(null,vec__17752,1,null);var map__17753__$1 = ((cljs.core.seq_QMARK_.call(null,map__17753))?cljs.core.apply.call(null,cljs.core.hash_map,map__17753):map__17753);var path = map__17753__$1;var l = cljs.core.get.call(null,map__17753__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__17753__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__15777__auto__ = path;if(cljs.core.truth_(and__15777__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__15777__auto__;
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
clojure.zip.insert_left = (function insert_left(loc,item){var vec__17756 = loc;var node = cljs.core.nth.call(null,vec__17756,0,null);var map__17757 = cljs.core.nth.call(null,vec__17756,1,null);var map__17757__$1 = ((cljs.core.seq_QMARK_.call(null,map__17757))?cljs.core.apply.call(null,cljs.core.hash_map,map__17757):map__17757);var path = map__17757__$1;var l = cljs.core.get.call(null,map__17757__$1,new cljs.core.Keyword(null,"l","l",1013904350));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__17760 = loc;var node = cljs.core.nth.call(null,vec__17760,0,null);var map__17761 = cljs.core.nth.call(null,vec__17760,1,null);var map__17761__$1 = ((cljs.core.seq_QMARK_.call(null,map__17761))?cljs.core.apply.call(null,cljs.core.hash_map,map__17761):map__17761);var path = map__17761__$1;var r = cljs.core.get.call(null,map__17761__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__17763 = loc;var _ = cljs.core.nth.call(null,vec__17763,0,null);var path = cljs.core.nth.call(null,vec__17763,1,null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
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
edit.cljs$lang$applyTo = (function (arglist__17769){
var loc = cljs.core.first(arglist__17769);
arglist__17769 = cljs.core.next(arglist__17769);
var f = cljs.core.first(arglist__17769);
var args = cljs.core.rest(arglist__17769);
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
{var or__15789__auto__ = (function (){var and__15777__auto__ = clojure.zip.branch_QMARK_.call(null,loc);if(cljs.core.truth_(and__15777__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__15777__auto__;
}
})();if(cljs.core.truth_(or__15789__auto__))
{return or__15789__auto__;
} else
{var or__15789__auto____$1 = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__15789__auto____$1))
{return or__15789__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__15789__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__15789__auto____$2))
{return or__15789__auto____$2;
} else
{{
var G__17770 = clojure.zip.up.call(null,p);
p = G__17770;
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
var temp__4090__auto____$1 = (function (){var and__15777__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__15777__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__15777__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;{
var G__17771 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__17771;
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
clojure.zip.remove = (function remove(loc){var vec__17766 = loc;var node = cljs.core.nth.call(null,vec__17766,0,null);var map__17767 = cljs.core.nth.call(null,vec__17766,1,null);var map__17767__$1 = ((cljs.core.seq_QMARK_.call(null,map__17767))?cljs.core.apply.call(null,cljs.core.hash_map,map__17767):map__17767);var path = map__17767__$1;var l = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));while(true){
var temp__4090__auto__ = (function (){var and__15777__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__15777__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__15777__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__17772 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__17772;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__15777__auto__ = ppath;if(cljs.core.truth_(and__15777__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__15777__auto__;
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
lt.plugins.cljrefactor.middleware.create_op = (function create_op(params){return [cljs.core.str("(do\n     (require 'refactor-nrepl.client)\n     (require 'clojure.tools.nrepl)\n     (def tr (refactor-nrepl.client/connect))\n     (clojure.tools.nrepl/message\n       (clojure.tools.nrepl/client tr 10000)\n"),cljs.core.str(cljs.core.pr_str.call(null,params)),cljs.core.str("))")].join('');
});
lt.plugins.cljrefactor.middleware.ed__GT_ns_def = (function ed__GT_ns_def(ed){var filename = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var ns = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));return [cljs.core.str("(def z-ns "),cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str("'"),cljs.core.str(ns)].join(''):[cljs.core.str("(lighttable.nrepl.eval/file->ns \""),cljs.core.str(filename),cljs.core.str("\")")].join(''))),cljs.core.str(")\n")].join('');
});
lt.plugins.cljrefactor.middleware.create_ns_op = (function create_ns_op(ed,params){return [cljs.core.str("(do\n     (require 'refactor-nrepl.client)\n     (require 'clojure.tools.nrepl)\n     (require 'lighttable.nrepl.eval)\n"),cljs.core.str(lt.plugins.cljrefactor.middleware.ed__GT_ns_def.call(null,ed)),cljs.core.str("(def tr (refactor-nrepl.client/connect))\n     (clojure.tools.nrepl/message\n       (clojure.tools.nrepl/client tr 10000)\n"),cljs.core.str([cljs.core.str(clojure.string.join.call(null,"",cljs.core.drop_last.call(null,cljs.core.pr_str.call(null,params)))),cljs.core.str(" :ns z-ns}")].join('')),cljs.core.str("))")].join('');
});
lt.plugins.cljrefactor.middleware.extract_result_group = (function extract_result_group(res,k){return cljs.core.filter.call(null,k,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))));
});
lt.plugins.cljrefactor.middleware.extract_result_group_single = (function extract_result_group_single(res,k){return k.call(null,cljs.core.first.call(null,lt.plugins.cljrefactor.middleware.extract_result_group.call(null,res,k)));
});
/**
* @param {...*} var_args
*/
lt.plugins.cljrefactor.middleware.extract_result = (function() { 
var extract_result__delegate = function (res,p__18884){var map__18886 = p__18884;var map__18886__$1 = ((cljs.core.seq_QMARK_.call(null,map__18886))?cljs.core.apply.call(null,cljs.core.hash_map,map__18886):map__18886);var multiples = cljs.core.get.call(null,map__18886__$1,new cljs.core.Keyword(null,"multiples","multiples",4102754261));var singles = cljs.core.get.call(null,map__18886__$1,new cljs.core.Keyword(null,"singles","singles",3108436125));var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"err","err",1014004951),(function (){var or__15789__auto__ = lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,new cljs.core.Keyword(null,"err","err",1014004951));if(cljs.core.truth_(or__15789__auto__))
{return or__15789__auto__;
} else
{return lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,new cljs.core.Keyword(null,"error","error",1110689146));
}
})(),new cljs.core.Keyword(null,"out","out",1014014656),lt.plugins.cljrefactor.middleware.extract_result_group.call(null,res,new cljs.core.Keyword(null,"out","out",1014014656)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))),new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ret], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.merge.call(null,ret,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ret,map__18886,map__18886__$1,multiples,singles){
return (function (p1__18882_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[p1__18882_SHARP_],[lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,p1__18882_SHARP_)]);
});})(ret,map__18886,map__18886__$1,multiples,singles))
,singles)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ret,map__18886,map__18886__$1,multiples,singles){
return (function (p1__18883_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[p1__18883_SHARP_],[lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,p1__18883_SHARP_)]);
});})(ret,map__18886,map__18886__$1,multiples,singles))
,multiples)))], null);
}
};
var extract_result = function (res,var_args){
var p__18884 = null;if (arguments.length > 1) {
  p__18884 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return extract_result__delegate.call(this,res,p__18884);};
extract_result.cljs$lang$maxFixedArity = 1;
extract_result.cljs$lang$applyTo = (function (arglist__18887){
var res = cljs.core.first(arglist__18887);
var p__18884 = cljs.core.rest(arglist__18887);
return extract_result__delegate(res,p__18884);
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
lt.plugins.cljrefactor.util.replace_token = (function replace_token(s,bounds,neue){var lines = cljs.core.vec.call(null,clojure.string.split.call(null,s,/\n/));return clojure.string.join.call(null,"\n",cljs.core.update_in.call(null,lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(bounds)], null),((function (lines){
return (function (p1__18253_SHARP_){return [cljs.core.str(p1__18253_SHARP_.substr(0,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(bounds))),cljs.core.str(neue),cljs.core.str(p1__18253_SHARP_.substr(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(bounds)))].join('');
});})(lines))
));
});
lt.plugins.cljrefactor.util.get_top_level_form = (function() {
var get_top_level_form = null;
var get_top_level_form__1 = (function (ed){return get_top_level_form.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
var get_top_level_form__2 = (function (ed,pos){var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos);var form_start = lt.plugins.paredit.seek_top.call(null,ed,pos);var form_end = cljs.core.second.call(null,lt.plugins.paredit.form_boundary.call(null,ed,cljs.core.update_in.call(null,form_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)));if((line > new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(form_end)))
{return null;
} else
{lt.objs.editor.move_cursor.call(null,ed,cljs.core.update_in.call(null,form_start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var temp__4092__auto__ = lt.objs.editor.selection.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var sel = temp__4092__auto__;lt.objs.editor.move_cursor.call(null,ed,pos);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-str","form-str",1486434586),sel,new cljs.core.Keyword(null,"start","start",1123661780),form_start,new cljs.core.Keyword(null,"end","end",1014004813),form_end], null);
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
lt.plugins.cljrefactor.testing.show_successes = (function show_successes(ed,results){var seq__19169 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p__19173){var vec__19174 = p__19173;var k = cljs.core.nth.call(null,vec__19174,0,null);var v = cljs.core.nth.call(null,vec__19174,1,null);return cljs.core.every_QMARK_.call(null,((function (vec__19174,k,v){
return (function (p1__19162_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__19162_SHARP_),"pass");
});})(vec__19174,k,v))
,v);
}),results));var chunk__19170 = null;var count__19171 = 0;var i__19172 = 0;while(true){
if((i__19172 < count__19171))
{var ks = cljs.core._nth.call(null,chunk__19170,i__19172);var line_19195 = lt.plugins.cljrefactor.testing.find_line_containing.call(null,ed,cljs.core.name.call(null,cljs.core.first.call(null,ks)));lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line_19195], null));
{
var G__19196 = seq__19169;
var G__19197 = chunk__19170;
var G__19198 = count__19171;
var G__19199 = (i__19172 + 1);
seq__19169 = G__19196;
chunk__19170 = G__19197;
count__19171 = G__19198;
i__19172 = G__19199;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19169);if(temp__4092__auto__)
{var seq__19169__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19169__$1))
{var c__16537__auto__ = cljs.core.chunk_first.call(null,seq__19169__$1);{
var G__19200 = cljs.core.chunk_rest.call(null,seq__19169__$1);
var G__19201 = c__16537__auto__;
var G__19202 = cljs.core.count.call(null,c__16537__auto__);
var G__19203 = 0;
seq__19169 = G__19200;
chunk__19170 = G__19201;
count__19171 = G__19202;
i__19172 = G__19203;
continue;
}
} else
{var ks = cljs.core.first.call(null,seq__19169__$1);var line_19204 = lt.plugins.cljrefactor.testing.find_line_containing.call(null,ed,cljs.core.name.call(null,cljs.core.first.call(null,ks)));lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line_19204], null));
{
var G__19205 = cljs.core.next.call(null,seq__19169__$1);
var G__19206 = null;
var G__19207 = 0;
var G__19208 = 0;
seq__19169 = G__19205;
chunk__19170 = G__19206;
count__19171 = G__19207;
i__19172 = G__19208;
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
lt.plugins.cljrefactor.testing.show_errors = (function show_errors(ed,results){var seq__19179 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,results)));var chunk__19180 = null;var count__19181 = 0;var i__19182 = 0;while(true){
if((i__19182 < count__19181))
{var r = cljs.core._nth.call(null,chunk__19180,i__19182);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(r),"pass"))
{} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error:\n"),cljs.core.str(new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(r))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(r) - 1)], null));
}
{
var G__19209 = seq__19179;
var G__19210 = chunk__19180;
var G__19211 = count__19181;
var G__19212 = (i__19182 + 1);
seq__19179 = G__19209;
chunk__19180 = G__19210;
count__19181 = G__19211;
i__19182 = G__19212;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19179);if(temp__4092__auto__)
{var seq__19179__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19179__$1))
{var c__16537__auto__ = cljs.core.chunk_first.call(null,seq__19179__$1);{
var G__19213 = cljs.core.chunk_rest.call(null,seq__19179__$1);
var G__19214 = c__16537__auto__;
var G__19215 = cljs.core.count.call(null,c__16537__auto__);
var G__19216 = 0;
seq__19179 = G__19213;
chunk__19180 = G__19214;
count__19181 = G__19215;
i__19182 = G__19216;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__19179__$1);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(r),"pass"))
{} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error:\n"),cljs.core.str(new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(r))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(r) - 1)], null));
}
{
var G__19217 = cljs.core.next.call(null,seq__19179__$1);
var G__19218 = null;
var G__19219 = 0;
var G__19220 = 0;
seq__19179 = G__19217;
chunk__19180 = G__19218;
count__19181 = G__19219;
i__19182 = G__19220;
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
lt.plugins.cljrefactor.testing.extract_result_group = (function extract_result_group(res,k){return cljs.core.filter.call(null,k,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))));
});
lt.plugins.cljrefactor.testing.extract_result_group_single = (function extract_result_group_single(res,k){return k.call(null,cljs.core.first.call(null,lt.plugins.cljrefactor.testing.extract_result_group.call(null,res,k)));
});
lt.plugins.cljrefactor.testing.__BEH__test_res = (function __BEH__test_res(ed,res){var vec__19188 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",3451231000)], null),new cljs.core.Keyword(null,"multiples","multiples",4102754261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",2111450984)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__19188,0,null);var ret = cljs.core.nth.call(null,vec__19188,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{lt.plugins.cljrefactor.testing.show_successes.call(null,ed,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(ret));
lt.plugins.cljrefactor.testing.show_errors.call(null,ed,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(ret));
lt.plugins.cljrefactor.testing.show_summary.call(null,new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(ret));
var seq__19189_19221 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(ret));var chunk__19190_19222 = null;var count__19191_19223 = 0;var i__19192_19224 = 0;while(true){
if((i__19192_19224 < count__19191_19223))
{var msg_19225 = cljs.core._nth.call(null,chunk__19190_19222,i__19192_19224);lt.objs.console.log.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(msg_19225));
{
var G__19226 = seq__19189_19221;
var G__19227 = chunk__19190_19222;
var G__19228 = count__19191_19223;
var G__19229 = (i__19192_19224 + 1);
seq__19189_19221 = G__19226;
chunk__19190_19222 = G__19227;
count__19191_19223 = G__19228;
i__19192_19224 = G__19229;
continue;
}
} else
{var temp__4092__auto___19230 = cljs.core.seq.call(null,seq__19189_19221);if(temp__4092__auto___19230)
{var seq__19189_19231__$1 = temp__4092__auto___19230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19189_19231__$1))
{var c__16537__auto___19232 = cljs.core.chunk_first.call(null,seq__19189_19231__$1);{
var G__19233 = cljs.core.chunk_rest.call(null,seq__19189_19231__$1);
var G__19234 = c__16537__auto___19232;
var G__19235 = cljs.core.count.call(null,c__16537__auto___19232);
var G__19236 = 0;
seq__19189_19221 = G__19233;
chunk__19190_19222 = G__19234;
count__19191_19223 = G__19235;
i__19192_19224 = G__19236;
continue;
}
} else
{var msg_19237 = cljs.core.first.call(null,seq__19189_19231__$1);lt.objs.console.log.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(msg_19237));
{
var G__19238 = cljs.core.next.call(null,seq__19189_19231__$1);
var G__19239 = null;
var G__19240 = 0;
var G__19241 = 0;
seq__19189_19221 = G__19238;
chunk__19190_19222 = G__19239;
count__19191_19223 = G__19240;
i__19192_19224 = G__19241;
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
lt.plugins.cljrefactor.testing.__BEH__test_one = (function __BEH__test_one(ed){var temp__4092__auto__ = (function (){var G__19194 = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed);var G__19194__$1 = (((G__19194 == null))?null:new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(G__19194));var G__19194__$2 = (((G__19194__$1 == null))?null:lt.plugins.cljrefactor.parser.find_test_def.call(null,G__19194__$1));return G__19194__$2;
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
lt.plugins.cljrefactor.prj_parser.prj__GT_map = (function prj__GT_map(p){return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__17883_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[cljs.core.first.call(null,p1__17883_SHARP_)],[cljs.core.second.call(null,p1__17883_SHARP_)]);
}),cljs.core.partition.call(null,2,cljs.core.drop.call(null,3,p))));
});
lt.plugins.cljrefactor.prj_parser.parse_project_file = (function parse_project_file(file){return lt.plugins.cljrefactor.prj_parser.prj__GT_map.call(null,cljs.reader.read_string.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)),/\\/,"\\\\")));
});
lt.plugins.cljrefactor.prj_parser.src_dirs = (function src_dirs(prj){var or__15789__auto__ = new cljs.core.Keyword(null,"source-paths","source-paths",1249628206).cljs$core$IFn$_invoke$arity$1(prj);if(cljs.core.truth_(or__15789__auto__))
{return or__15789__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src"], null);
}
});
lt.plugins.cljrefactor.prj_parser.find_sub_path = (function find_sub_path(prj_dir,path,src_dirs){return cljs.core.some.call(null,(function (p1__17884_SHARP_){if(cljs.core.truth_(path.contains(lt.objs.files.join.call(null,prj_dir,p1__17884_SHARP_))))
{return path.substring((1 + cljs.core.count.call(null,lt.objs.files.join.call(null,prj_dir,p1__17884_SHARP_))));
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
lt.plugins.cljrefactor.selector.select_item = (function select_item(this$,idx,item){var e__17186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),idx,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),((cljs.core.map_QMARK_.call(null,item))?new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item):item)], null));var seq__17901_17919 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17902_17920 = null;var count__17903_17921 = 0;var i__17904_17922 = 0;while(true){
if((i__17904_17922 < count__17903_17921))
{var vec__17905_17923 = cljs.core._nth.call(null,chunk__17902_17920,i__17904_17922);var ev__17187__auto___17924 = cljs.core.nth.call(null,vec__17905_17923,0,null);var func__17188__auto___17925 = cljs.core.nth.call(null,vec__17905_17923,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17924,func__17188__auto___17925);
{
var G__17926 = seq__17901_17919;
var G__17927 = chunk__17902_17920;
var G__17928 = count__17903_17921;
var G__17929 = (i__17904_17922 + 1);
seq__17901_17919 = G__17926;
chunk__17902_17920 = G__17927;
count__17903_17921 = G__17928;
i__17904_17922 = G__17929;
continue;
}
} else
{var temp__4092__auto___17930 = cljs.core.seq.call(null,seq__17901_17919);if(temp__4092__auto___17930)
{var seq__17901_17931__$1 = temp__4092__auto___17930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17901_17931__$1))
{var c__16537__auto___17932 = cljs.core.chunk_first.call(null,seq__17901_17931__$1);{
var G__17933 = cljs.core.chunk_rest.call(null,seq__17901_17931__$1);
var G__17934 = c__16537__auto___17932;
var G__17935 = cljs.core.count.call(null,c__16537__auto___17932);
var G__17936 = 0;
seq__17901_17919 = G__17933;
chunk__17902_17920 = G__17934;
count__17903_17921 = G__17935;
i__17904_17922 = G__17936;
continue;
}
} else
{var vec__17906_17937 = cljs.core.first.call(null,seq__17901_17931__$1);var ev__17187__auto___17938 = cljs.core.nth.call(null,vec__17906_17937,0,null);var func__17188__auto___17939 = cljs.core.nth.call(null,vec__17906_17937,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17938,func__17188__auto___17939);
{
var G__17940 = cljs.core.next.call(null,seq__17901_17931__$1);
var G__17941 = null;
var G__17942 = 0;
var G__17943 = 0;
seq__17901_17919 = G__17940;
chunk__17902_17920 = G__17941;
count__17903_17921 = G__17942;
i__17904_17922 = G__17943;
continue;
}
}
} else
{}
}
break;
}
return e__17186__auto__;
});
lt.plugins.cljrefactor.selector.select_form = (function select_form(this$,items){var e__17186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-select","div.refactor-select",3828436988),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,cljs.core.partial.call(null,lt.plugins.cljrefactor.selector.select_item,this$),items)], null)], null));var seq__17913_17944 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17914_17945 = null;var count__17915_17946 = 0;var i__17916_17947 = 0;while(true){
if((i__17916_17947 < count__17915_17946))
{var vec__17917_17948 = cljs.core._nth.call(null,chunk__17914_17945,i__17916_17947);var ev__17187__auto___17949 = cljs.core.nth.call(null,vec__17917_17948,0,null);var func__17188__auto___17950 = cljs.core.nth.call(null,vec__17917_17948,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17949,func__17188__auto___17950);
{
var G__17951 = seq__17913_17944;
var G__17952 = chunk__17914_17945;
var G__17953 = count__17915_17946;
var G__17954 = (i__17916_17947 + 1);
seq__17913_17944 = G__17951;
chunk__17914_17945 = G__17952;
count__17915_17946 = G__17953;
i__17916_17947 = G__17954;
continue;
}
} else
{var temp__4092__auto___17955 = cljs.core.seq.call(null,seq__17913_17944);if(temp__4092__auto___17955)
{var seq__17913_17956__$1 = temp__4092__auto___17955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17913_17956__$1))
{var c__16537__auto___17957 = cljs.core.chunk_first.call(null,seq__17913_17956__$1);{
var G__17958 = cljs.core.chunk_rest.call(null,seq__17913_17956__$1);
var G__17959 = c__16537__auto___17957;
var G__17960 = cljs.core.count.call(null,c__16537__auto___17957);
var G__17961 = 0;
seq__17913_17944 = G__17958;
chunk__17914_17945 = G__17959;
count__17915_17946 = G__17960;
i__17916_17947 = G__17961;
continue;
}
} else
{var vec__17918_17962 = cljs.core.first.call(null,seq__17913_17956__$1);var ev__17187__auto___17963 = cljs.core.nth.call(null,vec__17918_17962,0,null);var func__17188__auto___17964 = cljs.core.nth.call(null,vec__17918_17962,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17963,func__17188__auto___17964);
{
var G__17965 = cljs.core.next.call(null,seq__17913_17956__$1);
var G__17966 = null;
var G__17967 = 0;
var G__17968 = 0;
seq__17913_17944 = G__17965;
chunk__17914_17945 = G__17966;
count__17915_17946 = G__17967;
i__17916_17947 = G__17968;
continue;
}
}
} else
{}
}
break;
}
return e__17186__auto__;
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
lt.plugins.cljrefactor.completer.__BEH__completer__DOT__res = (function __BEH__completer__DOT__res(ed,res){var vec__18766 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completions","completions",1416465289)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__18766,0,null);var ret = cljs.core.nth.call(null,vec__18766,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var temp__4092__auto___18769 = new cljs.core.Keyword(null,"completions","completions",1416465289).cljs$core$IFn$_invoke$arity$1(ret);if(cljs.core.truth_(temp__4092__auto___18769))
{var completions_18770 = temp__4092__auto___18769;lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.completer","hints","lt.plugins.cljrefactor.completer/hints",3437584730),cljs.core.map.call(null,((function (completions_18770,temp__4092__auto___18769,vec__18766,ok_QMARK_,ret){
return (function (p1__18764_SHARP_){return {"completion": p1__18764_SHARP_};
});})(completions_18770,temp__4092__auto___18769,vec__18766,ok_QMARK_,ret))
,completions_18770)], null));
lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.completer","completer.res","lt.plugins.cljrefactor.completer/completer.res",1863143577),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.completer.__BEH__completer__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.complete","editor.eval.clj.result.refactor.complete",3419860036),null], null), null));
lt.plugins.cljrefactor.completer.__BEH__completer__DOT__start = (function __BEH__completer__DOT__start(ed){if(cljs.core.truth_((function (){var G__18768 = cljs.core.deref.call(null,ed);var G__18768__$1 = (((G__18768 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__18768));var G__18768__$2 = (((G__18768__$1 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__18768__$1));var G__18768__$3 = (((G__18768__$2 == null))?null:cljs.core.deref.call(null,G__18768__$2));return G__18768__$3;
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
lt.plugins.cljrefactor.artifact_version.select_item = (function select_item(idx,item){var e__17186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),item,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),item], null));var seq__17517_17545 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17518_17546 = null;var count__17519_17547 = 0;var i__17520_17548 = 0;while(true){
if((i__17520_17548 < count__17519_17547))
{var vec__17521_17549 = cljs.core._nth.call(null,chunk__17518_17546,i__17520_17548);var ev__17187__auto___17550 = cljs.core.nth.call(null,vec__17521_17549,0,null);var func__17188__auto___17551 = cljs.core.nth.call(null,vec__17521_17549,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17550,func__17188__auto___17551);
{
var G__17552 = seq__17517_17545;
var G__17553 = chunk__17518_17546;
var G__17554 = count__17519_17547;
var G__17555 = (i__17520_17548 + 1);
seq__17517_17545 = G__17552;
chunk__17518_17546 = G__17553;
count__17519_17547 = G__17554;
i__17520_17548 = G__17555;
continue;
}
} else
{var temp__4092__auto___17556 = cljs.core.seq.call(null,seq__17517_17545);if(temp__4092__auto___17556)
{var seq__17517_17557__$1 = temp__4092__auto___17556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17517_17557__$1))
{var c__16537__auto___17558 = cljs.core.chunk_first.call(null,seq__17517_17557__$1);{
var G__17559 = cljs.core.chunk_rest.call(null,seq__17517_17557__$1);
var G__17560 = c__16537__auto___17558;
var G__17561 = cljs.core.count.call(null,c__16537__auto___17558);
var G__17562 = 0;
seq__17517_17545 = G__17559;
chunk__17518_17546 = G__17560;
count__17519_17547 = G__17561;
i__17520_17548 = G__17562;
continue;
}
} else
{var vec__17522_17563 = cljs.core.first.call(null,seq__17517_17557__$1);var ev__17187__auto___17564 = cljs.core.nth.call(null,vec__17522_17563,0,null);var func__17188__auto___17565 = cljs.core.nth.call(null,vec__17522_17563,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17564,func__17188__auto___17565);
{
var G__17566 = cljs.core.next.call(null,seq__17517_17557__$1);
var G__17567 = null;
var G__17568 = 0;
var G__17569 = 0;
seq__17517_17545 = G__17566;
chunk__17518_17546 = G__17567;
count__17519_17547 = G__17568;
i__17520_17548 = G__17569;
continue;
}
}
} else
{}
}
break;
}
return e__17186__auto__;
});
lt.plugins.cljrefactor.artifact_version.select_form = (function select_form(this$,items){var e__17186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artifact-versions","div.artifact-versions",2029510539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.cljrefactor.artifact_version.select_item,items)], null)], null));var seq__17529_17570 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17530_17571 = null;var count__17531_17572 = 0;var i__17532_17573 = 0;while(true){
if((i__17532_17573 < count__17531_17572))
{var vec__17533_17574 = cljs.core._nth.call(null,chunk__17530_17571,i__17532_17573);var ev__17187__auto___17575 = cljs.core.nth.call(null,vec__17533_17574,0,null);var func__17188__auto___17576 = cljs.core.nth.call(null,vec__17533_17574,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17575,func__17188__auto___17576);
{
var G__17577 = seq__17529_17570;
var G__17578 = chunk__17530_17571;
var G__17579 = count__17531_17572;
var G__17580 = (i__17532_17573 + 1);
seq__17529_17570 = G__17577;
chunk__17530_17571 = G__17578;
count__17531_17572 = G__17579;
i__17532_17573 = G__17580;
continue;
}
} else
{var temp__4092__auto___17581 = cljs.core.seq.call(null,seq__17529_17570);if(temp__4092__auto___17581)
{var seq__17529_17582__$1 = temp__4092__auto___17581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17529_17582__$1))
{var c__16537__auto___17583 = cljs.core.chunk_first.call(null,seq__17529_17582__$1);{
var G__17584 = cljs.core.chunk_rest.call(null,seq__17529_17582__$1);
var G__17585 = c__16537__auto___17583;
var G__17586 = cljs.core.count.call(null,c__16537__auto___17583);
var G__17587 = 0;
seq__17529_17570 = G__17584;
chunk__17530_17571 = G__17585;
count__17531_17572 = G__17586;
i__17532_17573 = G__17587;
continue;
}
} else
{var vec__17534_17588 = cljs.core.first.call(null,seq__17529_17582__$1);var ev__17187__auto___17589 = cljs.core.nth.call(null,vec__17534_17588,0,null);var func__17188__auto___17590 = cljs.core.nth.call(null,vec__17534_17588,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17589,func__17188__auto___17590);
{
var G__17591 = cljs.core.next.call(null,seq__17529_17582__$1);
var G__17592 = null;
var G__17593 = 0;
var G__17594 = 0;
seq__17529_17570 = G__17591;
chunk__17530_17571 = G__17592;
count__17531_17572 = G__17593;
i__17532_17573 = G__17594;
continue;
}
}
} else
{}
}
break;
}
return e__17186__auto__;
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
lt.plugins.cljrefactor.artifacts.__BEH__finish_artifact_version_hints = (function __BEH__finish_artifact_version_hints(ed,res){var vec__18729 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"versions","versions",3323818509)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__18729,0,null);var ret = cljs.core.nth.call(null,vec__18729,1,null);var vs = (cljs.core.truth_(ok_QMARK_)?new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(ret):null);if(cljs.core.not.call(null,ok_QMARK_))
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
lt.plugins.cljrefactor.artifacts.create_artifact_hints = (function create_artifact_hints(ed,artifacts){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__18730_SHARP_){return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{"item": p1__18730_SHARP_, "completion": p1__18730_SHARP_, "text": p1__18730_SHARP_, "select": cljs.core.partial.call(null,lt.plugins.cljrefactor.artifacts.sel_cb,ed)}], null));
}),artifacts));
});
lt.plugins.cljrefactor.artifacts.__BEH__finish_artifact_hints = (function __BEH__finish_artifact_hints(ed,res){var vec__18732 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artifacts","artifacts",1575856211)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__18732,0,null);var ret = cljs.core.nth.call(null,vec__18732,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret));
} else
{lt.object.update_BANG_.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","fetching-deps","lt.plugins.cljrefactor.artifacts/fetching-deps",3366334705)], null),((function (vec__18732,ok_QMARK_,ret){
return (function (_){return false;
});})(vec__18732,ok_QMARK_,ret))
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
var temp__4092__auto___18737 = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"refactor.artifacts","refactor.artifacts",2606704295)));if(cljs.core.truth_(temp__4092__auto___18737))
{var ar_18738 = temp__4092__auto___18737;cljs.core.println.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","artifacts","lt.plugins.cljrefactor.artifacts/artifacts",4637854729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ar_18738)));
cljs.core.swap_BANG_.call(null,ar_18738,cljs.core.assoc,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","fetching-deps","lt.plugins.cljrefactor.artifacts/fetching-deps",3366334705),false);
cljs.core.swap_BANG_.call(null,ar_18738,cljs.core.assoc,new cljs.core.Keyword(null,"artifacts","artifacts",1575856211),null);
} else
{}
lt.plugins.cljrefactor.artifacts.__BEH__artifact_hints = (function __BEH__artifact_hints(ed,hints,token){lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","token","lt.plugins.cljrefactor.artifacts/token",4450683105),token], null));
if(cljs.core.truth_(new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","artifacts","lt.plugins.cljrefactor.artifacts/artifacts",4637854729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts))))
{} else
{cljs.core.println.call(null,"Do trigger !");
lt.object.raise.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts,new cljs.core.Keyword(null,"artifact.hints.update!","artifact.hints.update!",2088367020),ed);
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
lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep__DOT__res = (function __BEH__hotload_dep__DOT__res(ed,res){var vec__18734 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res);var ok_QMARK_ = cljs.core.nth.call(null,vec__18734,0,null);var ret = cljs.core.nth.call(null,vec__18734,1,null);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret));if(cljs.core.not.call(null,ok_QMARK_))
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
}catch (e18736){var e = e18736;return null;
}});
lt.plugins.cljrefactor.artifacts.hotload_dep_op = (function hotload_dep_op(dep){var coords = dep;return lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"hotload-dependency",new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),coords], null));
});
lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep_BANG_ = (function __BEH__hotload_dep_BANG_(ed,coords){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifacts.hotload_dep_op.call(null,coords),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.hotload-dep","refactor.hotload-dep",3912040123),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","hotload-dep!","lt.plugins.cljrefactor.artifacts/hotload-dep!",591057976),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.hotload-dep!","refactor.hotload-dep!",661803370),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","hotload-dep","lt.plugins.cljrefactor.artifacts/hotload-dep",4433653981),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Hotload dependency",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var pos = (cljs.core.truth_(ed)?lt.objs.editor.__GT_cursor.call(null,ed):null);if(cljs.core.truth_(ed))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var candidate = lt.objs.editor.selection.call(null,ed);var coords = lt.plugins.cljrefactor.artifacts.parse_dep.call(null,candidate);lt.objs.editor.move_cursor.call(null,ed,pos);
if(cljs.core.truth_((function (){var and__15777__auto__ = lt.plugins.cljrefactor.artifacts.parse_dep.call(null,candidate);if(cljs.core.truth_(and__15777__auto__))
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return and__15777__auto__;
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
lt.plugins.cljrefactor.function$.get_form_range = (function get_form_range(ed,pos){var vec__18805 = lt.plugins.paredit.form_boundary.call(null,ed,pos);var start = cljs.core.nth.call(null,vec__18805,0,null);var end = cljs.core.nth.call(null,vec__18805,1,null);if(cljs.core.truth_(start))
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
var map__18807 = lt.plugins.cljrefactor.function$.get_form_range.call(null,ed,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var map__18807__$1 = ((cljs.core.seq_QMARK_.call(null,map__18807))?cljs.core.apply.call(null,cljs.core.hash_map,map__18807):map__18807);var end = cljs.core.get.call(null,map__18807__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__18807__$1,new cljs.core.Keyword(null,"start","start",1123661780));lt.objs.editor.set_selection.call(null,ed,start,end);
return lt.objs.editor.indent_selection.call(null,ed,"smart");
});
lt.plugins.cljrefactor.function$.highlight_fn_name = (function highlight_fn_name(ed,selections){var cm_ed = lt.objs.editor.__GT_cm_ed.call(null,ed);return cm_ed.setSelections(cljs.core.clj__GT_js.call(null,selections));
});
lt.plugins.cljrefactor.function$.do_extract = (function do_extract(ed,loc,unbound){var map__18809 = lt.plugins.cljrefactor.function$.get_form_range.call(null,ed,loc);var map__18809__$1 = ((cljs.core.seq_QMARK_.call(null,map__18809))?cljs.core.apply.call(null,cljs.core.hash_map,map__18809):map__18809);var end = cljs.core.get.call(null,map__18809__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__18809__$1,new cljs.core.Keyword(null,"start","start",1123661780));var top_form = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed,loc);var ins_pos = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(top_form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086)], null),cljs.core.dec);if(cljs.core.truth_((function (){var and__15777__auto__ = start;if(cljs.core.truth_(and__15777__auto__))
{return top_form;
} else
{return and__15777__auto__;
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
lt.plugins.cljrefactor.function$.__BEH__unbound_res = (function __BEH__unbound_res(ed,res){var vec__18811 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unbound","unbound",720786935)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__18811,0,null);var ret = cljs.core.nth.call(null,vec__18811,1,null);if(cljs.core.not.call(null,ok_QMARK_))
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
lt.plugins.cljrefactor.pprint.pprint_prefix_form = (function pprint_prefix_form(p__17855){var vec__17857 = p__17855;var name = cljs.core.nth.call(null,vec__17857,0,null);var libspecs = cljs.core.nthnext.call(null,vec__17857,1);cljs.core.print.call(null,[cljs.core.str("["),cljs.core.str(name)].join(''));
var ordered_libspecs = lt.plugins.cljrefactor.pprint.libspec_vectors_last.call(null,libspecs);return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (ordered_libspecs,vec__17857,name,libspecs){
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
});})(ordered_libspecs,vec__17857,name,libspecs))
,ordered_libspecs));
});
lt.plugins.cljrefactor.pprint.pprint_require_form = (function pprint_require_form(p__17858){var vec__17861 = p__17858;var _ = cljs.core.nth.call(null,vec__17861,0,null);var libspecs = cljs.core.nthnext.call(null,vec__17861,1);cljs.core.print.call(null,"(:require ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__17861,_,libspecs){
return (function (idx,libspec){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,libspecs) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__16708__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_17862_17880 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17862_17880,sb__16708__auto__,vec__17861,_,libspecs){
return (function (x__16709__auto__){return sb__16708__auto__.append(x__16709__auto__);
});})(_STAR_print_fn_STAR_17862_17880,sb__16708__auto__,vec__17861,_,libspecs))
;
if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{cljs.core.print.call(null,libspec);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17862_17880;
}return [cljs.core.str(sb__16708__auto__)].join('');
})())),cljs.core.str(")")].join(''));
} else
{if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{return lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{return cljs.core.println.call(null,libspec);
}
}
});})(vec__17861,_,libspecs))
,libspecs));
});
lt.plugins.cljrefactor.pprint.form_is_QMARK_ = (function form_is_QMARK_(form,type){return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,form)),type));
});
lt.plugins.cljrefactor.pprint.pprint_gen_class_form = (function pprint_gen_class_form(p__17863){var vec__17867 = p__17863;var _ = cljs.core.nth.call(null,vec__17867,0,null);var elems = cljs.core.nthnext.call(null,vec__17867,1);if(cljs.core.empty_QMARK_.call(null,elems))
{cljs.core.println.call(null,"(:gen-class)");
} else
{cljs.core.println.call(null,"(:gen-class");
}
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__17867,_,elems){
return (function (idx,p__17868){var vec__17869 = p__17868;var key = cljs.core.nth.call(null,vec__17869,0,null);var val = cljs.core.nth.call(null,vec__17869,1,null);if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,cljs.core.partition.call(null,2,elems)) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(key),cljs.core.str(val),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,key,val);
}
});})(vec__17867,_,elems))
,cljs.core.partition.call(null,2,elems)));
});
lt.plugins.cljrefactor.pprint.pprint_import_form = (function pprint_import_form(p__17870){var vec__17872 = p__17870;var _ = cljs.core.nth.call(null,vec__17872,0,null);var imports = cljs.core.nthnext.call(null,vec__17872,1);cljs.core.print.call(null,"(:import ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__17872,_,imports){
return (function (idx,import$){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,imports) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(import$),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,import$);
}
});})(vec__17872,_,imports))
,imports));
});
lt.plugins.cljrefactor.pprint.pprint_ns = (function pprint_ns(p__17873){var vec__17877 = p__17873;var _ = cljs.core.nth.call(null,vec__17877,0,null);var name = cljs.core.nth.call(null,vec__17877,1,null);var more = cljs.core.nthnext.call(null,vec__17877,2);var ns_form = vec__17877;var docstring_QMARK_ = ((typeof cljs.core.first.call(null,more) === 'string')?cljs.core.first.call(null,more):null);var attrs_QMARK_ = ((cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,more)))?cljs.core.second.call(null,more):null);var forms = (cljs.core.truth_((function (){var and__15777__auto__ = docstring_QMARK_;if(cljs.core.truth_(and__15777__auto__))
{return attrs_QMARK_;
} else
{return and__15777__auto__;
}
})())?lt.plugins.cljrefactor.pprint.nthrest.call(null,more,2):((cljs.core.not.call(null,(function (){var or__15789__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__15789__auto__))
{return or__15789__auto__;
} else
{return attrs_QMARK_;
}
})()))?more:((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.rest.call(null,more):null)));return clojure.string.replace.call(null,(function (){var sb__16708__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_17878_17881 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17878_17881,sb__16708__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17877,_,name,more,ns_form){
return (function (x__16709__auto__){return sb__16708__auto__.append(x__16709__auto__);
});})(_STAR_print_fn_STAR_17878_17881,sb__16708__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17877,_,name,more,ns_form))
;
cljs.core.print.call(null,[cljs.core.str("(ns "),cljs.core.str(name)].join(''));
if(cljs.core.truth_((function (){var or__15789__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__15789__auto__))
{return or__15789__auto__;
} else
{var or__15789__auto____$1 = attrs_QMARK_;if(cljs.core.truth_(or__15789__auto____$1))
{return or__15789__auto____$1;
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
cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (_STAR_print_fn_STAR_17878_17881,sb__16708__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17877,_,name,more,ns_form){
return (function (idx,form){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,forms) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__16708__auto____$1 = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_17879_17882 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17879_17882,sb__16708__auto____$1,_STAR_print_fn_STAR_17878_17881,sb__16708__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17877,_,name,more,ns_form){
return (function (x__16709__auto__){return sb__16708__auto____$1.append(x__16709__auto__);
});})(_STAR_print_fn_STAR_17879_17882,sb__16708__auto____$1,_STAR_print_fn_STAR_17878_17881,sb__16708__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17877,_,name,more,ns_form))
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
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17879_17882;
}return [cljs.core.str(sb__16708__auto____$1)].join('');
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
});})(_STAR_print_fn_STAR_17878_17881,sb__16708__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__17877,_,name,more,ns_form))
,forms));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17878_17881;
}return [cljs.core.str(sb__16708__auto__)].join('');
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
lt.plugins.cljrefactor.namespace.nsify = (function nsify(sub_path){return (function (p1__18901_SHARP_){return [cljs.core.str("(ns "),cljs.core.str(p1__18901_SHARP_),cljs.core.str(")\n")].join('');
}).call(null,(function (p1__18900_SHARP_){return clojure.string.join.call(null,".",p1__18900_SHARP_);
}).call(null,(function (parts){return cljs.core.map.call(null,(function (p1__18899_SHARP_){return clojure.string.replace.call(null,p1__18899_SHARP_,/_/,"-");
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
lt.plugins.cljrefactor.namespace.index_of_ns_type = (function index_of_ns_type(ns_decl,t){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18903_SHARP_,p2__18902_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,p2__18902_SHARP_)),t))
{return p1__18903_SHARP_;
} else
{return null;
}
}),cljs.core.drop.call(null,2,ns_decl)));
});
lt.plugins.cljrefactor.namespace.calc_imp_idx = (function calc_imp_idx(ns_decl){var req_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"require","require",2109600983));var imp_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"import","import",4124075799));return (2 + (cljs.core.truth_(imp_idx)?imp_idx:(function (){var x__16096__auto__ = 1;var y__16097__auto__ = req_idx;return ((x__16096__auto__ > y__16097__auto__) ? x__16096__auto__ : y__16097__auto__);
})()));
});
lt.plugins.cljrefactor.namespace.add_import = (function add_import(ns_decl,imp){var vec__18905 = cljs.core.split_at.call(null,lt.plugins.cljrefactor.namespace.calc_imp_idx.call(null,ns_decl),ns_decl);var pre = cljs.core.nth.call(null,vec__18905,0,null);var post = cljs.core.nth.call(null,vec__18905,1,null);if((cljs.core.seq.call(null,post)) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,post),new cljs.core.Keyword(null,"import","import",4124075799))))
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
lt.plugins.cljrefactor.namespace.add_require = (function add_require(ns_decl,req){var req_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"require","require",2109600983));var vec__18907 = cljs.core.split_at.call(null,(cljs.core.truth_(req_idx)?(req_idx + 2):2),ns_decl);var pre = cljs.core.nth.call(null,vec__18907,0,null);var post = cljs.core.nth.call(null,vec__18907,1,null);if((cljs.core.seq.call(null,post)) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,post),new cljs.core.Keyword(null,"require","require",2109600983))))
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
lt.plugins.cljrefactor.namespace.__BEH__clean_ns_res = (function __BEH__clean_ns_res(ed,res){var vec__18909 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",1013907767)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__18909,0,null);var ret = cljs.core.nth.call(null,vec__18909,1,null);if(cljs.core.not.call(null,ok_QMARK_))
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
lt.plugins.cljrefactor.input_prompt.prompt_form = (function prompt_form(this$,init_value){var e__17186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-prompt","div.refactor-prompt",3754652772),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Enter new name: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"refactor-prompt",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),init_value], null)], null)], null));var seq__17805_17821 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17806_17822 = null;var count__17807_17823 = 0;var i__17808_17824 = 0;while(true){
if((i__17808_17824 < count__17807_17823))
{var vec__17809_17825 = cljs.core._nth.call(null,chunk__17806_17822,i__17808_17824);var ev__17187__auto___17826 = cljs.core.nth.call(null,vec__17809_17825,0,null);var func__17188__auto___17827 = cljs.core.nth.call(null,vec__17809_17825,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17826,func__17188__auto___17827);
{
var G__17828 = seq__17805_17821;
var G__17829 = chunk__17806_17822;
var G__17830 = count__17807_17823;
var G__17831 = (i__17808_17824 + 1);
seq__17805_17821 = G__17828;
chunk__17806_17822 = G__17829;
count__17807_17823 = G__17830;
i__17808_17824 = G__17831;
continue;
}
} else
{var temp__4092__auto___17832 = cljs.core.seq.call(null,seq__17805_17821);if(temp__4092__auto___17832)
{var seq__17805_17833__$1 = temp__4092__auto___17832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17805_17833__$1))
{var c__16537__auto___17834 = cljs.core.chunk_first.call(null,seq__17805_17833__$1);{
var G__17835 = cljs.core.chunk_rest.call(null,seq__17805_17833__$1);
var G__17836 = c__16537__auto___17834;
var G__17837 = cljs.core.count.call(null,c__16537__auto___17834);
var G__17838 = 0;
seq__17805_17821 = G__17835;
chunk__17806_17822 = G__17836;
count__17807_17823 = G__17837;
i__17808_17824 = G__17838;
continue;
}
} else
{var vec__17810_17839 = cljs.core.first.call(null,seq__17805_17833__$1);var ev__17187__auto___17840 = cljs.core.nth.call(null,vec__17810_17839,0,null);var func__17188__auto___17841 = cljs.core.nth.call(null,vec__17810_17839,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___17840,func__17188__auto___17841);
{
var G__17842 = cljs.core.next.call(null,seq__17805_17833__$1);
var G__17843 = null;
var G__17844 = 0;
var G__17845 = 0;
seq__17805_17821 = G__17842;
chunk__17806_17822 = G__17843;
count__17807_17823 = G__17844;
i__17808_17824 = G__17845;
continue;
}
}
} else
{}
}
break;
}
return e__17186__auto__;
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
lt.plugins.cljrefactor.usages.result_entry = (function result_entry(this$,entry){var e__17186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"entry".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(entry))?" active":""))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.line","span.line",4619821962),new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(entry)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),crate.core.raw.call(null,lt.plugins.cljrefactor.usages.highlight.call(null,new cljs.core.Keyword(null,"match","match",1117572407).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))], null)], null));var seq__18093_18153 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__17186__auto__){
return (function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(entry));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"goto-line","goto-line",2802035088),new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(entry));
});})(e__17186__auto__))
], null)));var chunk__18094_18154 = null;var count__18095_18155 = 0;var i__18096_18156 = 0;while(true){
if((i__18096_18156 < count__18095_18155))
{var vec__18097_18157 = cljs.core._nth.call(null,chunk__18094_18154,i__18096_18156);var ev__17187__auto___18158 = cljs.core.nth.call(null,vec__18097_18157,0,null);var func__17188__auto___18159 = cljs.core.nth.call(null,vec__18097_18157,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___18158,func__17188__auto___18159);
{
var G__18160 = seq__18093_18153;
var G__18161 = chunk__18094_18154;
var G__18162 = count__18095_18155;
var G__18163 = (i__18096_18156 + 1);
seq__18093_18153 = G__18160;
chunk__18094_18154 = G__18161;
count__18095_18155 = G__18162;
i__18096_18156 = G__18163;
continue;
}
} else
{var temp__4092__auto___18164 = cljs.core.seq.call(null,seq__18093_18153);if(temp__4092__auto___18164)
{var seq__18093_18165__$1 = temp__4092__auto___18164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18093_18165__$1))
{var c__16537__auto___18166 = cljs.core.chunk_first.call(null,seq__18093_18165__$1);{
var G__18167 = cljs.core.chunk_rest.call(null,seq__18093_18165__$1);
var G__18168 = c__16537__auto___18166;
var G__18169 = cljs.core.count.call(null,c__16537__auto___18166);
var G__18170 = 0;
seq__18093_18153 = G__18167;
chunk__18094_18154 = G__18168;
count__18095_18155 = G__18169;
i__18096_18156 = G__18170;
continue;
}
} else
{var vec__18098_18171 = cljs.core.first.call(null,seq__18093_18165__$1);var ev__17187__auto___18172 = cljs.core.nth.call(null,vec__18098_18171,0,null);var func__17188__auto___18173 = cljs.core.nth.call(null,vec__18098_18171,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___18172,func__17188__auto___18173);
{
var G__18174 = cljs.core.next.call(null,seq__18093_18165__$1);
var G__18175 = null;
var G__18176 = 0;
var G__18177 = 0;
seq__18093_18153 = G__18174;
chunk__18094_18154 = G__18175;
count__18095_18155 = G__18176;
i__18096_18156 = G__18177;
continue;
}
}
} else
{}
}
break;
}
return e__17186__auto__;
});
lt.plugins.cljrefactor.usages.result_item = (function result_item(this$,item){var e__17186__auto__ = crate.core.html.call(null,(function (){var file = new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.path","p.path",4266284629),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file","span.file",4619643154),lt.objs.files.basename.call(null,file)], null),"(",lt.objs.files.parent.call(null,file),")"], null),cljs.core.map.call(null,((function (file){
return (function (p1__18099_SHARP_){return lt.plugins.cljrefactor.usages.result_entry.call(null,this$,p1__18099_SHARP_);
});})(file))
,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(item))], null);
})());var seq__18106_18178 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18107_18179 = null;var count__18108_18180 = 0;var i__18109_18181 = 0;while(true){
if((i__18109_18181 < count__18108_18180))
{var vec__18110_18182 = cljs.core._nth.call(null,chunk__18107_18179,i__18109_18181);var ev__17187__auto___18183 = cljs.core.nth.call(null,vec__18110_18182,0,null);var func__17188__auto___18184 = cljs.core.nth.call(null,vec__18110_18182,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___18183,func__17188__auto___18184);
{
var G__18185 = seq__18106_18178;
var G__18186 = chunk__18107_18179;
var G__18187 = count__18108_18180;
var G__18188 = (i__18109_18181 + 1);
seq__18106_18178 = G__18185;
chunk__18107_18179 = G__18186;
count__18108_18180 = G__18187;
i__18109_18181 = G__18188;
continue;
}
} else
{var temp__4092__auto___18189 = cljs.core.seq.call(null,seq__18106_18178);if(temp__4092__auto___18189)
{var seq__18106_18190__$1 = temp__4092__auto___18189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18106_18190__$1))
{var c__16537__auto___18191 = cljs.core.chunk_first.call(null,seq__18106_18190__$1);{
var G__18192 = cljs.core.chunk_rest.call(null,seq__18106_18190__$1);
var G__18193 = c__16537__auto___18191;
var G__18194 = cljs.core.count.call(null,c__16537__auto___18191);
var G__18195 = 0;
seq__18106_18178 = G__18192;
chunk__18107_18179 = G__18193;
count__18108_18180 = G__18194;
i__18109_18181 = G__18195;
continue;
}
} else
{var vec__18111_18196 = cljs.core.first.call(null,seq__18106_18190__$1);var ev__17187__auto___18197 = cljs.core.nth.call(null,vec__18111_18196,0,null);var func__17188__auto___18198 = cljs.core.nth.call(null,vec__18111_18196,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___18197,func__17188__auto___18198);
{
var G__18199 = cljs.core.next.call(null,seq__18106_18190__$1);
var G__18200 = null;
var G__18201 = 0;
var G__18202 = 0;
seq__18106_18178 = G__18199;
chunk__18107_18179 = G__18200;
count__18108_18180 = G__18201;
i__18109_18181 = G__18202;
continue;
}
}
} else
{}
}
break;
}
return e__17186__auto__;
});
lt.plugins.cljrefactor.usages.search_results = (function search_results(this$,res){var e__17186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),cljs.core.map.call(null,(function (p1__18112_SHARP_){return lt.plugins.cljrefactor.usages.result_item.call(null,this$,p1__18112_SHARP_);
}),res)], null));var seq__18119_18203 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__18120_18204 = null;var count__18121_18205 = 0;var i__18122_18206 = 0;while(true){
if((i__18122_18206 < count__18121_18205))
{var vec__18123_18207 = cljs.core._nth.call(null,chunk__18120_18204,i__18122_18206);var ev__17187__auto___18208 = cljs.core.nth.call(null,vec__18123_18207,0,null);var func__17188__auto___18209 = cljs.core.nth.call(null,vec__18123_18207,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___18208,func__17188__auto___18209);
{
var G__18210 = seq__18119_18203;
var G__18211 = chunk__18120_18204;
var G__18212 = count__18121_18205;
var G__18213 = (i__18122_18206 + 1);
seq__18119_18203 = G__18210;
chunk__18120_18204 = G__18211;
count__18121_18205 = G__18212;
i__18122_18206 = G__18213;
continue;
}
} else
{var temp__4092__auto___18214 = cljs.core.seq.call(null,seq__18119_18203);if(temp__4092__auto___18214)
{var seq__18119_18215__$1 = temp__4092__auto___18214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18119_18215__$1))
{var c__16537__auto___18216 = cljs.core.chunk_first.call(null,seq__18119_18215__$1);{
var G__18217 = cljs.core.chunk_rest.call(null,seq__18119_18215__$1);
var G__18218 = c__16537__auto___18216;
var G__18219 = cljs.core.count.call(null,c__16537__auto___18216);
var G__18220 = 0;
seq__18119_18203 = G__18217;
chunk__18120_18204 = G__18218;
count__18121_18205 = G__18219;
i__18122_18206 = G__18220;
continue;
}
} else
{var vec__18124_18221 = cljs.core.first.call(null,seq__18119_18215__$1);var ev__17187__auto___18222 = cljs.core.nth.call(null,vec__18124_18221,0,null);var func__17188__auto___18223 = cljs.core.nth.call(null,vec__18124_18221,1,null);lt.util.dom.on.call(null,e__17186__auto__,ev__17187__auto___18222,func__17188__auto___18223);
{
var G__18224 = cljs.core.next.call(null,seq__18119_18215__$1);
var G__18225 = null;
var G__18226 = 0;
var G__18227 = 0;
seq__18119_18203 = G__18224;
chunk__18120_18204 = G__18225;
count__18121_18205 = G__18226;
i__18122_18206 = G__18227;
continue;
}
}
} else
{}
}
break;
}
return e__17186__auto__;
});
lt.plugins.cljrefactor.usages.show_results = (function show_results(this$,res){var container = lt.object.__GT_content.call(null,this$);var results_ul = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),container);return lt.util.dom.replace_with.call(null,results_ul,lt.plugins.cljrefactor.usages.search_results.call(null,this$,res));
});
lt.plugins.cljrefactor.usages.usages__GT_items = (function usages__GT_items(usages){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__18127){var map__18128 = p__18127;var map__18128__$1 = ((cljs.core.seq_QMARK_.call(null,map__18128))?cljs.core.apply.call(null,cljs.core.hash_map,map__18128):map__18128);var x = cljs.core.get.call(null,map__18128__$1,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243));return cljs.core.apply.call(null,cljs.core.hash_map,cljs.reader.read_string.call(null,x));
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243),usages)));
});
lt.plugins.cljrefactor.usages.items__GT_view = (function items__GT_view(items){return (function (x){return cljs.core.map.call(null,(function (k){var res = cljs.core.get.call(null,x,k);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),k,new cljs.core.Keyword(null,"items","items",1114430258),res], null);
}),cljs.core.keys.call(null,x));
}).call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"file","file",1017047278),items));
});
lt.plugins.cljrefactor.usages.find_symbol_op = (function find_symbol_op(ed,sym){return lt.plugins.cljrefactor.middleware.create_ns_op.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"find-symbol",new cljs.core.Keyword(null,"name","name",1017277949),sym], null));
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
var temp__4092__auto___18228 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(status);if(cljs.core.truth_(temp__4092__auto___18228))
{var err_18229 = temp__4092__auto___18228;lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error when executing find usages:\n "),cljs.core.str(err_18229)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))))], null));
} else
{}
return lt.objs.notifos.done_working.call(null,"Find usages completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol.res","lt.plugins.cljrefactor.usages/find-symbol.res",2620470851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.find-symbol","editor.eval.clj.result.refactor.find-symbol",1593184613),null], null), null));
lt.plugins.cljrefactor.usages.__GT_idx_active = (function __GT_idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__18130_SHARP_,p2__18129_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__18129_SHARP_)))
{return p1__18130_SHARP_;
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
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__start = (function __BEH__find_symbol__DOT__start(this$,ed,token){var ns = (function (){var or__15789__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__15789__auto__))
{return or__15789__auto__;
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
lt.plugins.cljrefactor.usages.replace_in_editors_BANG_ = (function replace_in_editors_BANG_(itemsByFile,p__18132){var map__18138 = p__18132;var map__18138__$1 = ((cljs.core.seq_QMARK_.call(null,map__18138))?cljs.core.apply.call(null,cljs.core.hash_map,map__18138):map__18138);var new$ = cljs.core.get.call(null,map__18138__$1,new cljs.core.Keyword(null,"new","new",1014013202));var old = cljs.core.get.call(null,map__18138__$1,new cljs.core.Keyword(null,"old","old",1014014361));var open_eds = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322));var open_ed_QMARK_ = ((function (open_eds,map__18138,map__18138__$1,new$,old){
return (function (file){return cljs.core.some.call(null,((function (open_eds,map__18138,map__18138__$1,new$,old){
return (function (p1__18131_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__18131_SHARP_))),file))
{return p1__18131_SHARP_;
} else
{return null;
}
});})(open_eds,map__18138,map__18138__$1,new$,old))
,open_eds);
});})(open_eds,map__18138,map__18138__$1,new$,old))
;var seq__18139 = cljs.core.seq.call(null,itemsByFile);var chunk__18140 = null;var count__18141 = 0;var i__18142 = 0;while(true){
if((i__18142 < count__18141))
{var fileItems = cljs.core._nth.call(null,chunk__18140,i__18142);var temp__4090__auto___18230 = open_ed_QMARK_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems));if(cljs.core.truth_(temp__4090__auto___18230))
{var open_ed_18231 = temp__4090__auto___18230;lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_.call(null,open_ed_18231,lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
} else
{lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems),lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
}
{
var G__18232 = seq__18139;
var G__18233 = chunk__18140;
var G__18234 = count__18141;
var G__18235 = (i__18142 + 1);
seq__18139 = G__18232;
chunk__18140 = G__18233;
count__18141 = G__18234;
i__18142 = G__18235;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18139);if(temp__4092__auto__)
{var seq__18139__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18139__$1))
{var c__16537__auto__ = cljs.core.chunk_first.call(null,seq__18139__$1);{
var G__18236 = cljs.core.chunk_rest.call(null,seq__18139__$1);
var G__18237 = c__16537__auto__;
var G__18238 = cljs.core.count.call(null,c__16537__auto__);
var G__18239 = 0;
seq__18139 = G__18236;
chunk__18140 = G__18237;
count__18141 = G__18238;
i__18142 = G__18239;
continue;
}
} else
{var fileItems = cljs.core.first.call(null,seq__18139__$1);var temp__4090__auto___18240 = open_ed_QMARK_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems));if(cljs.core.truth_(temp__4090__auto___18240))
{var open_ed_18241 = temp__4090__auto___18240;lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_.call(null,open_ed_18241,lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
} else
{lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems),lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
}
{
var G__18242 = cljs.core.next.call(null,seq__18139__$1);
var G__18243 = null;
var G__18244 = 0;
var G__18245 = 0;
seq__18139 = G__18242;
chunk__18140 = G__18243;
count__18141 = G__18244;
i__18142 = G__18245;
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
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__res = (function __BEH__rename_symbol__DOT__res(ed,res){var resp_18246 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res)));var status_18247 = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"status","status",4416389988),resp_18246));var info_18248 = new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res);var pos_18249 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(info_18248);var temp__4090__auto___18250 = new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(status_18247);if(cljs.core.truth_(temp__4090__auto___18250))
{var err_18251 = temp__4090__auto___18250;lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error when executing renaming symbol:\n "),cljs.core.str(err_18251)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),pos_18249], null));
} else
{if(cljs.core.not.call(null,cljs.core.seq.call(null,resp_18246)))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error when executing renaming symbol:\n "),cljs.core.str(" No results from middleware, probably because of errors in a candidate ns, try running find usages to see which ns has errors")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),pos_18249], null));
} else
{var itemsByFile_18252 = lt.plugins.cljrefactor.usages.items__GT_view.call(null,lt.plugins.cljrefactor.usages.usages__GT_items.call(null,resp_18246));lt.plugins.cljrefactor.usages.replace_in_editors_BANG_.call(null,itemsByFile_18252,info_18248);
lt.objs.editor.focus.call(null,ed);
lt.objs.editor.move_cursor.call(null,ed,pos_18249);
lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"Renamed ok !",pos_18249);
}
}
return lt.objs.notifos.done_working.call(null,"Rename completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","rename-symbol.res","lt.plugins.cljrefactor.usages/rename-symbol.res",1052900768),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.rename-symbol","editor.eval.clj.result.refactor.rename-symbol",3323570816),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__start = (function __BEH__rename_symbol__DOT__start(ed,old,new$){if(cljs.core.seq.call(null,clojure.string.trim.call(null,new$)))
{var ns = (function (){var or__15789__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__15789__auto__))
{return or__15789__auto__;
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
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__prompt = (function __BEH__rename_symbol__DOT__prompt(ed,token){var ns = (function (){var or__15789__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__15789__auto__))
{return or__15789__auto__;
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
lt.plugins.cljrefactor.__BEH__resolve_missing_selected = (function __BEH__resolve_missing_selected(ed,item){var G__18756_18760 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852),G__18756_18760))
{lt.plugins.cljrefactor.add_missing_type.call(null,ed,item);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__18756_18760))
{lt.plugins.cljrefactor.add_missing_import.call(null,ed,item);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767),G__18756_18760))
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
return (function (p1__18757_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.Keyword(null,"type","type",1017479852)],[cljs.core.first.call(null,p1__18757_SHARP_),cljs.core.second.call(null,p1__18757_SHARP_)]);
});})(candidates))
,cljs.reader.read_string.call(null,candidates)));
} else
{return null;
}
});
lt.plugins.cljrefactor.__BEH__resolve_missing_res = (function __BEH__resolve_missing_res(ed,res){var vec__18759 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"candidates","candidates",3897560770)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__18759,0,null);var ret = cljs.core.nth.call(null,vec__18759,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
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
goog.require('lt.plugins.paredit');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('clojure.string');
goog.require('clojure.zip');
goog.require('lt.objs.editor.pool');
goog.require('clojure.zip');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('lt.plugins.cljrefactor.parser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.cljrefactor.form_refactor.if_node_QMARK_ = (function if_node_QMARK_(loc){if((cljs.core.seq.call(null,loc)) && (cljs.core.list_QMARK_.call(null,clojure.zip.node.call(null,loc))))
{return (function (s){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([s], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"if","if",-1640528170,null),new cljs.core.Symbol(null,"if-not","if-not",1461178332,null)], null));
}).call(null,clojure.zip.node.call(null,clojure.zip.down.call(null,loc)));
} else
{return null;
}
});
lt.plugins.cljrefactor.form_refactor.swap_if_nodes = (function swap_if_nodes(loc){var move = clojure.zip.node.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,loc))));return clojure.zip.up.call(null,clojure.zip.insert_right.call(null,clojure.zip.rightmost.call(null,clojure.zip.remove.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,loc))))),move));
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
lt.plugins.cljrefactor.form_refactor.hash_prefixed_QMARK_ = (function hash_prefixed_QMARK_(ed,start){return cljs.core._EQ_.call(null,lt.objs.editor.range.call(null,ed,start,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)),"#");
});
lt.plugins.cljrefactor.form_refactor.set_form_QMARK_ = (function set_form_QMARK_(ed,start){return ((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(start) > 0)) && (lt.plugins.cljrefactor.form_refactor.hash_prefixed_QMARK_.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec)));
});
lt.plugins.cljrefactor.form_refactor.get_form_range = (function get_form_range(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var vec__17714 = lt.plugins.paredit.form_boundary.call(null,ed,pos);var start = cljs.core.nth.call(null,vec__17714,0,null);var end = cljs.core.nth.call(null,vec__17714,1,null);if(cljs.core.truth_(start))
{if(lt.plugins.cljrefactor.form_refactor.set_form_QMARK_.call(null,ed,start))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.dec),new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.update_in.call(null,end,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),start,new cljs.core.Keyword(null,"end","end",1014004813),cljs.core.update_in.call(null,end,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc)], null);
}
} else
{return null;
}
});
lt.plugins.cljrefactor.form_refactor.replace_cmd = (function replace_cmd(ed,replace_fn){var temp__4092__auto__ = lt.plugins.cljrefactor.form_refactor.get_form_range.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var form_range = temp__4092__auto__;var start = new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(form_range);var end = new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(form_range);var candidate = lt.objs.editor.range.call(null,ed,start,end);var temp__4092__auto___17726__$1 = replace_fn.call(null,candidate);if(cljs.core.truth_(temp__4092__auto___17726__$1))
{var res_17727 = temp__4092__auto___17726__$1;lt.objs.editor.replace.call(null,ed,start,end,res_17727);
} else
{}
if(lt.plugins.cljrefactor.form_refactor.hash_prefixed_QMARK_.call(null,ed,start))
{return lt.objs.editor.move_cursor.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),((function (start,end,candidate,form_range,temp__4092__auto__){
return (function (p1__17715_SHARP_){return (p1__17715_SHARP_ + 2);
});})(start,end,candidate,form_range,temp__4092__auto__))
));
} else
{return lt.objs.editor.move_cursor.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));
}
} else
{return null;
}
});
lt.plugins.cljrefactor.form_refactor.__BEH__cycle_if_BANG_ = (function __BEH__cycle_if_BANG_(ed){return lt.plugins.cljrefactor.form_refactor.replace_cmd.call(null,ed,lt.plugins.cljrefactor.form_refactor.cycle_if);
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
lt.plugins.cljrefactor.definition.get_definition_in_hidden_ed = (function get_definition_in_hidden_ed(file,line){var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file));var ed = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-clojure",new cljs.core.Keyword(null,"content","content",1965434859),content], null));var vec__17627 = lt.plugins.paredit.form_boundary.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line.call(null,ed,(line - 1)).indexOf("(") + 1)], null));var start = cljs.core.nth.call(null,vec__17627,0,null);var end = cljs.core.nth.call(null,vec__17627,1,null);var sel = (cljs.core.truth_((function (){var and__15777__auto__ = start;if(cljs.core.truth_(and__15777__auto__))
{return end;
} else
{return and__15777__auto__;
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
lt.plugins.cljrefactor.definition.__BEH__finish_show_definition = (function __BEH__finish_show_definition(ed,p__17628){var map__17630 = p__17628;var map__17630__$1 = ((cljs.core.seq_QMARK_.call(null,map__17630))?cljs.core.apply.call(null,cljs.core.hash_map,map__17630):map__17630);var res = map__17630__$1;var line = cljs.core.get.call(null,map__17630__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__17630__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"show-def","show-def",673906855),new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(res)))
{if(cljs.core.truth_((function (){var and__15777__auto__ = res;if(cljs.core.truth_(and__15777__auto__))
{var and__15777__auto____$1 = file;if(cljs.core.truth_(and__15777__auto____$1))
{return line;
} else
{return and__15777__auto____$1;
}
} else
{return and__15777__auto__;
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
goog.require('lt.plugins.cljrefactor.parser');
goog.require('clojure.string');
goog.require('clojure.zip');
goog.require('lt.objs.editor.pool');
goog.require('clojure.zip');
goog.require('lt.objs.command');
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
var G__18082 = clojure.zip.up.call(null,n);
n = G__18082;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.threading.threading_locator = (function threading_locator(t){var G__18063 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__18063))
{return null;
} else
{if(cljs.core._EQ_.call(null,"some->>",G__18063))
{return ((function (G__18063){
return (function (p1__18061_SHARP_){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__18061_SHARP_))));
});
;})(G__18063))
} else
{if(cljs.core._EQ_.call(null,"->>",G__18063))
{return ((function (G__18063){
return (function (p1__18061_SHARP_){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__18061_SHARP_))));
});
;})(G__18063))
} else
{if(cljs.core._EQ_.call(null,"some->",G__18063))
{return ((function (G__18063){
return (function (p1__18060_SHARP_){return clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__18060_SHARP_))));
});
;})(G__18063))
} else
{if(cljs.core._EQ_.call(null,"->",G__18063))
{return ((function (G__18063){
return (function (p1__18060_SHARP_){return clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__18060_SHARP_))));
});
;})(G__18063))
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
lt.plugins.cljrefactor.threading.unwind_op = (function unwind_op(t){var G__18069 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__18069))
{return null;
} else
{if(cljs.core._EQ_.call(null,"some->>",G__18069))
{return ((function (G__18069){
return (function (p1__18066_SHARP_,p2__18067_SHARP_){return clojure.zip.append_child.call(null,p1__18066_SHARP_,p2__18067_SHARP_);
});
;})(G__18069))
} else
{if(cljs.core._EQ_.call(null,"->>",G__18069))
{return ((function (G__18069){
return (function (p1__18066_SHARP_,p2__18067_SHARP_){return clojure.zip.append_child.call(null,p1__18066_SHARP_,p2__18067_SHARP_);
});
;})(G__18069))
} else
{if(cljs.core._EQ_.call(null,"some->",G__18069))
{return ((function (G__18069){
return (function (p1__18064_SHARP_,p2__18065_SHARP_){return clojure.zip.insert_right.call(null,clojure.zip.down.call(null,p1__18064_SHARP_),p2__18065_SHARP_);
});
;})(G__18069))
} else
{if(cljs.core._EQ_.call(null,"->",G__18069))
{return ((function (G__18069){
return (function (p1__18064_SHARP_,p2__18065_SHARP_){return clojure.zip.insert_right.call(null,clojure.zip.down.call(null,p1__18064_SHARP_),p2__18065_SHARP_);
});
;})(G__18069))
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
return (function (p1__18070_SHARP_){return clojure.zip.replace.call(null,p1__18070_SHARP_,lt.plugins.cljrefactor.threading.unwrap_list_if_one.call(null,clojure.zip.node.call(null,p1__18070_SHARP_)));
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
var G__18083 = lt.plugins.cljrefactor.threading.do_thread_one.call(null,cand,cand_fn);
cand = G__18083;
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
lt.plugins.cljrefactor.threading.thread = (function thread(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__15777__auto__ = node;if(cljs.core.truth_(and__15777__auto__))
{return threading;
} else
{return and__15777__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,threading),threading));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread_one = (function thread_one(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__15777__auto__ = node;if(cljs.core.truth_(and__15777__auto__))
{return threading;
} else
{return and__15777__auto__;
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
return (function (p1__18071_SHARP_){return clojure.zip.replace.call(null,p1__18071_SHARP_,lt.plugins.cljrefactor.threading.maybe_wrap_in_list.call(null,clojure.zip.node.call(null,p1__18071_SHARP_)));
});})(demote,therest))
.call(null,clojure.zip.right.call(null,therest)),demote));
}
});
lt.plugins.cljrefactor.threading.do_unwind = (function do_unwind(root,unwind_fn){var cand = root;while(true){
if(!(lt.plugins.cljrefactor.threading.further_unwindable_QMARK_.call(null,cand)))
{return cand;
} else
{{
var G__18084 = lt.plugins.cljrefactor.threading.do_unwind_one.call(null,cand,unwind_fn);
cand = G__18084;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.threading.unwind = (function unwind(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__15777__auto__ = node;if(cljs.core.truth_(and__15777__auto__))
{return threading;
} else
{return and__15777__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.unwrap_threading.call(null,lt.plugins.cljrefactor.threading.do_unwind.call(null,node,lt.plugins.cljrefactor.threading.unwind_op.call(null,threading))));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.unwind_one = (function unwind_one(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__15777__auto__ = node;if(cljs.core.truth_(and__15777__auto__))
{return threading;
} else
{return and__15777__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.maybe_unwrap_threading.call(null,lt.plugins.cljrefactor.threading.do_unwind_one.call(null,node,lt.plugins.cljrefactor.threading.unwind_op.call(null,threading))));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.replace_cmd = (function replace_cmd(ed,replace_fn){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var temp__4092__auto__ = lt.objs.editor.selection.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var candidate = temp__4092__auto__;var bounds = lt.objs.editor.selection_bounds.call(null,ed);var temp__4092__auto___18085__$1 = replace_fn.call(null,candidate);if(cljs.core.truth_(temp__4092__auto___18085__$1))
{var res_18086 = temp__4092__auto___18085__$1;lt.objs.editor.replace_selection.call(null,ed,res_18086);
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