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
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",1965434859)),(function (node,children){return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",1965434859),(function (){var and__19533__auto__ = children;if(cljs.core.truth_(and__19533__auto__))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__19533__auto__;
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
{var vec__21518 = loc;var node = cljs.core.nth.call(null,vec__21518,0,null);var path = cljs.core.nth.call(null,vec__21518,1,null);var vec__21519 = clojure.zip.children.call(null,loc);var c = cljs.core.nth.call(null,vec__21519,0,null);var cnext = cljs.core.nthnext.call(null,vec__21519,1);var cs = vec__21519;if(cljs.core.truth_(cs))
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
clojure.zip.up = (function up(loc){var vec__21522 = loc;var node = cljs.core.nth.call(null,vec__21522,0,null);var map__21523 = cljs.core.nth.call(null,vec__21522,1,null);var map__21523__$1 = ((cljs.core.seq_QMARK_.call(null,map__21523))?cljs.core.apply.call(null,cljs.core.hash_map,map__21523):map__21523);var path = map__21523__$1;var l = cljs.core.get.call(null,map__21523__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__21523__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__21523__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var r = cljs.core.get.call(null,map__21523__$1,new cljs.core.Keyword(null,"r","r",1013904356));var changed_QMARK_ = cljs.core.get.call(null,map__21523__$1,new cljs.core.Keyword(null,"changed?","changed?",2446321533));if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek.call(null,pnodes);return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__19533__auto__ = ppath;if(cljs.core.truth_(and__19533__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__19533__auto__;
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
var G__21556 = p;
loc = G__21556;
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
clojure.zip.right = (function right(loc){var vec__21527 = loc;var node = cljs.core.nth.call(null,vec__21527,0,null);var map__21528 = cljs.core.nth.call(null,vec__21527,1,null);var map__21528__$1 = ((cljs.core.seq_QMARK_.call(null,map__21528))?cljs.core.apply.call(null,cljs.core.hash_map,map__21528):map__21528);var path = map__21528__$1;var l = cljs.core.get.call(null,map__21528__$1,new cljs.core.Keyword(null,"l","l",1013904350));var vec__21529 = cljs.core.get.call(null,map__21528__$1,new cljs.core.Keyword(null,"r","r",1013904356));var r = cljs.core.nth.call(null,vec__21529,0,null);var rnext = cljs.core.nthnext.call(null,vec__21529,1);var rs = vec__21529;if(cljs.core.truth_((function (){var and__19533__auto__ = path;if(cljs.core.truth_(and__19533__auto__))
{return rs;
} else
{return and__19533__auto__;
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
clojure.zip.rightmost = (function rightmost(loc){var vec__21532 = loc;var node = cljs.core.nth.call(null,vec__21532,0,null);var map__21533 = cljs.core.nth.call(null,vec__21532,1,null);var map__21533__$1 = ((cljs.core.seq_QMARK_.call(null,map__21533))?cljs.core.apply.call(null,cljs.core.hash_map,map__21533):map__21533);var path = map__21533__$1;var l = cljs.core.get.call(null,map__21533__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__21533__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__19533__auto__ = path;if(cljs.core.truth_(and__19533__auto__))
{return r;
} else
{return and__19533__auto__;
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
clojure.zip.left = (function left(loc){var vec__21536 = loc;var node = cljs.core.nth.call(null,vec__21536,0,null);var map__21537 = cljs.core.nth.call(null,vec__21536,1,null);var map__21537__$1 = ((cljs.core.seq_QMARK_.call(null,map__21537))?cljs.core.apply.call(null,cljs.core.hash_map,map__21537):map__21537);var path = map__21537__$1;var l = cljs.core.get.call(null,map__21537__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__21537__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__19533__auto__ = path;if(cljs.core.truth_(and__19533__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__19533__auto__;
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
clojure.zip.leftmost = (function leftmost(loc){var vec__21540 = loc;var node = cljs.core.nth.call(null,vec__21540,0,null);var map__21541 = cljs.core.nth.call(null,vec__21540,1,null);var map__21541__$1 = ((cljs.core.seq_QMARK_.call(null,map__21541))?cljs.core.apply.call(null,cljs.core.hash_map,map__21541):map__21541);var path = map__21541__$1;var l = cljs.core.get.call(null,map__21541__$1,new cljs.core.Keyword(null,"l","l",1013904350));var r = cljs.core.get.call(null,map__21541__$1,new cljs.core.Keyword(null,"r","r",1013904356));if(cljs.core.truth_((function (){var and__19533__auto__ = path;if(cljs.core.truth_(and__19533__auto__))
{return cljs.core.seq.call(null,l);
} else
{return and__19533__auto__;
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
clojure.zip.insert_left = (function insert_left(loc,item){var vec__21544 = loc;var node = cljs.core.nth.call(null,vec__21544,0,null);var map__21545 = cljs.core.nth.call(null,vec__21544,1,null);var map__21545__$1 = ((cljs.core.seq_QMARK_.call(null,map__21545))?cljs.core.apply.call(null,cljs.core.hash_map,map__21545):map__21545);var path = map__21545__$1;var l = cljs.core.get.call(null,map__21545__$1,new cljs.core.Keyword(null,"l","l",1013904350));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__21548 = loc;var node = cljs.core.nth.call(null,vec__21548,0,null);var map__21549 = cljs.core.nth.call(null,vec__21548,1,null);var map__21549__$1 = ((cljs.core.seq_QMARK_.call(null,map__21549))?cljs.core.apply.call(null,cljs.core.hash_map,map__21549):map__21549);var path = map__21549__$1;var r = cljs.core.get.call(null,map__21549__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",1013904356),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__21551 = loc;var _ = cljs.core.nth.call(null,vec__21551,0,null);var path = cljs.core.nth.call(null,vec__21551,1,null);return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));
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
edit.cljs$lang$applyTo = (function (arglist__21557){
var loc = cljs.core.first(arglist__21557);
arglist__21557 = cljs.core.next(arglist__21557);
var f = cljs.core.first(arglist__21557);
var args = cljs.core.rest(arglist__21557);
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
{var or__19545__auto__ = (function (){var and__19533__auto__ = clojure.zip.branch_QMARK_.call(null,loc);if(cljs.core.truth_(and__19533__auto__))
{return clojure.zip.down.call(null,loc);
} else
{return and__19533__auto__;
}
})();if(cljs.core.truth_(or__19545__auto__))
{return or__19545__auto__;
} else
{var or__19545__auto____$1 = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__19545__auto____$1))
{return or__19545__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__19545__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__19545__auto____$2))
{return or__19545__auto____$2;
} else
{{
var G__21558 = clojure.zip.up.call(null,p);
p = G__21558;
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
var temp__4090__auto____$1 = (function (){var and__19533__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__19533__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__19533__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto____$1))
{var child = temp__4090__auto____$1;{
var G__21559 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__21559;
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
clojure.zip.remove = (function remove(loc){var vec__21554 = loc;var node = cljs.core.nth.call(null,vec__21554,0,null);var map__21555 = cljs.core.nth.call(null,vec__21554,1,null);var map__21555__$1 = ((cljs.core.seq_QMARK_.call(null,map__21555))?cljs.core.apply.call(null,cljs.core.hash_map,map__21555):map__21555);var path = map__21555__$1;var l = cljs.core.get.call(null,map__21555__$1,new cljs.core.Keyword(null,"l","l",1013904350));var ppath = cljs.core.get.call(null,map__21555__$1,new cljs.core.Keyword(null,"ppath","ppath",1120772103));var pnodes = cljs.core.get.call(null,map__21555__$1,new cljs.core.Keyword(null,"pnodes","pnodes",4325362611));var rs = cljs.core.get.call(null,map__21555__$1,new cljs.core.Keyword(null,"r","r",1013904356));if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count.call(null,l) > 0))
{var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1013904350),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",2446321533),true)], null),cljs.core.meta.call(null,loc));while(true){
var temp__4090__auto__ = (function (){var and__19533__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);if(cljs.core.truth_(and__19533__auto__))
{return clojure.zip.down.call(null,loc__$1);
} else
{return and__19533__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__21560 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__21560;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__19533__auto__ = ppath;if(cljs.core.truth_(and__19533__auto__))
{return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",2446321533),true);
} else
{return and__19533__auto__;
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
var extract_result__delegate = function (res,p__30470){var map__30472 = p__30470;var map__30472__$1 = ((cljs.core.seq_QMARK_.call(null,map__30472))?cljs.core.apply.call(null,cljs.core.hash_map,map__30472):map__30472);var multiples = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"multiples","multiples",4102754261));var singles = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"singles","singles",3108436125));var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"err","err",1014004951),(function (){var or__19545__auto__ = lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,new cljs.core.Keyword(null,"err","err",1014004951));if(cljs.core.truth_(or__19545__auto__))
{return or__19545__auto__;
} else
{return lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,new cljs.core.Keyword(null,"error","error",1110689146));
}
})(),new cljs.core.Keyword(null,"out","out",1014014656),lt.plugins.cljrefactor.middleware.extract_result_group.call(null,res,new cljs.core.Keyword(null,"out","out",1014014656)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(res))),new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ret], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.merge.call(null,ret,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ret,map__30472,map__30472__$1,multiples,singles){
return (function (p1__30468_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[p1__30468_SHARP_],[lt.plugins.cljrefactor.middleware.extract_result_group_single.call(null,res,p1__30468_SHARP_)]);
});})(ret,map__30472,map__30472__$1,multiples,singles))
,singles)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ret,map__30472,map__30472__$1,multiples,singles){
return (function (p1__30469_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[p1__30469_SHARP_],[lt.plugins.cljrefactor.middleware.extract_result_group.call(null,res,p1__30469_SHARP_)]);
});})(ret,map__30472,map__30472__$1,multiples,singles))
,multiples)))], null);
}
};
var extract_result = function (res,var_args){
var p__30470 = null;if (arguments.length > 1) {
  p__30470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return extract_result__delegate.call(this,res,p__30470);};
extract_result.cljs$lang$maxFixedArity = 1;
extract_result.cljs$lang$applyTo = (function (arglist__30473){
var res = cljs.core.first(arglist__30473);
var p__30470 = cljs.core.rest(arglist__30473);
return extract_result__delegate(res,p__30470);
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
var G__26775 = adj;
loc__$1 = G__26775;
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
return (function (p1__26771_SHARP_){return [cljs.core.str(p1__26771_SHARP_.substr(0,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(bounds))),cljs.core.str(neue),cljs.core.str(p1__26771_SHARP_.substr(new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(bounds)))].join('');
});})(lines))
));
});
lt.plugins.cljrefactor.util.find_token_bounds = (function find_token_bounds(s,token){return cljs.core.some.call(null,(function (p1__26772_SHARP_){var idx = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(p1__26772_SHARP_).indexOf(token);if((idx > -1))
{return cljs.core.assoc.call(null,p1__26772_SHARP_,new cljs.core.Keyword(null,"start","start",1123661780),idx,new cljs.core.Keyword(null,"end","end",1014004813),(idx + cljs.core.count.call(null,token)));
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
var get_form__2 = (function (ed,pos){var vec__26774 = lt.plugins.paredit.form_boundary.call(null,ed,pos);var start = cljs.core.nth.call(null,vec__26774,0,null);var end = cljs.core.nth.call(null,vec__26774,1,null);var end__$1 = cljs.core.update_in.call(null,end,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc);if(cljs.core.truth_((function (){var and__19533__auto__ = start;if(cljs.core.truth_(and__19533__auto__))
{return end__$1;
} else
{return and__19533__auto__;
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
{var seq__26488 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p__26492){var vec__26493 = p__26492;var k = cljs.core.nth.call(null,vec__26493,0,null);var v = cljs.core.nth.call(null,vec__26493,1,null);return cljs.core.every_QMARK_.call(null,((function (vec__26493,k,v){
return (function (p1__26481_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__26481_SHARP_),"pass");
});})(vec__26493,k,v))
,v);
}),results));var chunk__26489 = null;var count__26490 = 0;var i__26491 = 0;while(true){
if((i__26491 < count__26490))
{var ks = cljs.core._nth.call(null,chunk__26489,i__26491);var line_26524 = lt.plugins.cljrefactor.testing.find_line_containing.call(null,ed,cljs.core.name.call(null,cljs.core.first.call(null,ks)));lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line_26524], null));
{
var G__26525 = seq__26488;
var G__26526 = chunk__26489;
var G__26527 = count__26490;
var G__26528 = (i__26491 + 1);
seq__26488 = G__26525;
chunk__26489 = G__26526;
count__26490 = G__26527;
i__26491 = G__26528;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26488);if(temp__4092__auto__)
{var seq__26488__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26488__$1))
{var c__20293__auto__ = cljs.core.chunk_first.call(null,seq__26488__$1);{
var G__26529 = cljs.core.chunk_rest.call(null,seq__26488__$1);
var G__26530 = c__20293__auto__;
var G__26531 = cljs.core.count.call(null,c__20293__auto__);
var G__26532 = 0;
seq__26488 = G__26529;
chunk__26489 = G__26530;
count__26490 = G__26531;
i__26491 = G__26532;
continue;
}
} else
{var ks = cljs.core.first.call(null,seq__26488__$1);var line_26533 = lt.plugins.cljrefactor.testing.find_line_containing.call(null,ed,cljs.core.name.call(null,cljs.core.first.call(null,ks)));lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line_26533], null));
{
var G__26534 = cljs.core.next.call(null,seq__26488__$1);
var G__26535 = null;
var G__26536 = 0;
var G__26537 = 0;
seq__26488 = G__26534;
chunk__26489 = G__26535;
count__26490 = G__26536;
i__26491 = G__26537;
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
lt.plugins.cljrefactor.testing.show_errors = (function show_errors(ed,results){var seq__26498 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,results)));var chunk__26499 = null;var count__26500 = 0;var i__26501 = 0;while(true){
if((i__26501 < count__26500))
{var r = cljs.core._nth.call(null,chunk__26499,i__26501);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(r),"pass"))
{} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error:\n"),cljs.core.str(new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(r))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(r) - 1)], null));
}
{
var G__26538 = seq__26498;
var G__26539 = chunk__26499;
var G__26540 = count__26500;
var G__26541 = (i__26501 + 1);
seq__26498 = G__26538;
chunk__26499 = G__26539;
count__26500 = G__26540;
i__26501 = G__26541;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26498);if(temp__4092__auto__)
{var seq__26498__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26498__$1))
{var c__20293__auto__ = cljs.core.chunk_first.call(null,seq__26498__$1);{
var G__26542 = cljs.core.chunk_rest.call(null,seq__26498__$1);
var G__26543 = c__20293__auto__;
var G__26544 = cljs.core.count.call(null,c__20293__auto__);
var G__26545 = 0;
seq__26498 = G__26542;
chunk__26499 = G__26543;
count__26500 = G__26544;
i__26501 = G__26545;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__26498__$1);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(r),"pass"))
{} else
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),[cljs.core.str("Error:\n"),cljs.core.str(new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(r))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(r) - 1)], null));
}
{
var G__26546 = cljs.core.next.call(null,seq__26498__$1);
var G__26547 = null;
var G__26548 = 0;
var G__26549 = 0;
seq__26498 = G__26546;
chunk__26499 = G__26547;
count__26500 = G__26548;
i__26501 = G__26549;
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
lt.plugins.cljrefactor.testing.__BEH__test_res = (function __BEH__test_res(ed,res){var vec__26507 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",3451231000),new cljs.core.Keyword(null,"results","results",2111450984)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__26507,0,null);var ret = cljs.core.nth.call(null,vec__26507,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{lt.plugins.cljrefactor.testing.show_successes.call(null,ed,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(ret));
lt.plugins.cljrefactor.testing.show_errors.call(null,ed,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(ret));
lt.plugins.cljrefactor.testing.show_summary.call(null,new cljs.core.Keyword(null,"summary","summary",3451231000).cljs$core$IFn$_invoke$arity$1(ret));
var seq__26508_26550 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(ret));var chunk__26509_26551 = null;var count__26510_26552 = 0;var i__26511_26553 = 0;while(true){
if((i__26511_26553 < count__26510_26552))
{var msg_26554 = cljs.core._nth.call(null,chunk__26509_26551,i__26511_26553);lt.objs.console.log.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(msg_26554));
{
var G__26555 = seq__26508_26550;
var G__26556 = chunk__26509_26551;
var G__26557 = count__26510_26552;
var G__26558 = (i__26511_26553 + 1);
seq__26508_26550 = G__26555;
chunk__26509_26551 = G__26556;
count__26510_26552 = G__26557;
i__26511_26553 = G__26558;
continue;
}
} else
{var temp__4092__auto___26559 = cljs.core.seq.call(null,seq__26508_26550);if(temp__4092__auto___26559)
{var seq__26508_26560__$1 = temp__4092__auto___26559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26508_26560__$1))
{var c__20293__auto___26561 = cljs.core.chunk_first.call(null,seq__26508_26560__$1);{
var G__26562 = cljs.core.chunk_rest.call(null,seq__26508_26560__$1);
var G__26563 = c__20293__auto___26561;
var G__26564 = cljs.core.count.call(null,c__20293__auto___26561);
var G__26565 = 0;
seq__26508_26550 = G__26562;
chunk__26509_26551 = G__26563;
count__26510_26552 = G__26564;
i__26511_26553 = G__26565;
continue;
}
} else
{var msg_26566 = cljs.core.first.call(null,seq__26508_26560__$1);lt.objs.console.log.call(null,new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(msg_26566));
{
var G__26567 = cljs.core.next.call(null,seq__26508_26560__$1);
var G__26568 = null;
var G__26569 = 0;
var G__26570 = 0;
seq__26508_26550 = G__26567;
chunk__26509_26551 = G__26568;
count__26510_26552 = G__26569;
i__26511_26553 = G__26570;
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
lt.plugins.cljrefactor.testing.__BEH__test_one = (function __BEH__test_one(ed){var temp__4092__auto__ = (function (){var G__26513 = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed);var G__26513__$1 = (((G__26513 == null))?null:new cljs.core.Keyword(null,"form-str","form-str",1486434586).cljs$core$IFn$_invoke$arity$1(G__26513));var G__26513__$2 = (((G__26513__$1 == null))?null:lt.plugins.cljrefactor.parser.find_test_def.call(null,G__26513__$1));return G__26513__$2;
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
lt.plugins.cljrefactor.prj_parser.prj__GT_map = (function prj__GT_map(p){return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__26395_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[cljs.core.first.call(null,p1__26395_SHARP_)],[cljs.core.second.call(null,p1__26395_SHARP_)]);
}),cljs.core.partition.call(null,2,cljs.core.drop.call(null,3,p))));
});
lt.plugins.cljrefactor.prj_parser.parse_project_file = (function parse_project_file(file){return lt.plugins.cljrefactor.prj_parser.prj__GT_map.call(null,cljs.reader.read_string.call(null,clojure.string.replace.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file)),/\\/,"\\\\")));
});
lt.plugins.cljrefactor.prj_parser.src_dirs = (function src_dirs(prj){var or__19545__auto__ = new cljs.core.Keyword(null,"source-paths","source-paths",1249628206).cljs$core$IFn$_invoke$arity$1(prj);if(cljs.core.truth_(or__19545__auto__))
{return or__19545__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["src"], null);
}
});
lt.plugins.cljrefactor.prj_parser.find_sub_path = (function find_sub_path(prj_dir,path,src_dirs){return cljs.core.some.call(null,(function (p1__26396_SHARP_){if((path.indexOf(lt.objs.files.join.call(null,prj_dir,p1__26396_SHARP_)) > -1))
{return path.substring((1 + cljs.core.count.call(null,lt.objs.files.join.call(null,prj_dir,p1__26396_SHARP_))));
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
lt.plugins.cljrefactor.resource.__BEH__find_resource__DOT__res = (function __BEH__find_resource__DOT__res(ed,res){var vec__30544 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-path","resource-path",1947209206)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__30544,0,null);var ret = cljs.core.nth.call(null,vec__30544,1,null);if(cljs.core.not.call(null,ok_QMARK_))
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
lt.plugins.cljrefactor.resource.get_candidate = (function get_candidate(ed){var G__30546 = lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.cursor.call(null,ed));var G__30546__$1 = (((G__30546 == null))?null:new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(G__30546));var G__30546__$2 = (((G__30546__$1 == null))?null:clojure.string.replace.call(null,G__30546__$1,/\"/,""));return G__30546__$2;
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
lt.plugins.cljrefactor.selector.select_item = (function select_item(this$,idx,item){var e__20972__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),idx,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),((cljs.core.map_QMARK_.call(null,item))?new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(item):item)], null));var seq__26413_26431 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__26414_26432 = null;var count__26415_26433 = 0;var i__26416_26434 = 0;while(true){
if((i__26416_26434 < count__26415_26433))
{var vec__26417_26435 = cljs.core._nth.call(null,chunk__26414_26432,i__26416_26434);var ev__20973__auto___26436 = cljs.core.nth.call(null,vec__26417_26435,0,null);var func__20974__auto___26437 = cljs.core.nth.call(null,vec__26417_26435,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___26436,func__20974__auto___26437);
{
var G__26438 = seq__26413_26431;
var G__26439 = chunk__26414_26432;
var G__26440 = count__26415_26433;
var G__26441 = (i__26416_26434 + 1);
seq__26413_26431 = G__26438;
chunk__26414_26432 = G__26439;
count__26415_26433 = G__26440;
i__26416_26434 = G__26441;
continue;
}
} else
{var temp__4092__auto___26442 = cljs.core.seq.call(null,seq__26413_26431);if(temp__4092__auto___26442)
{var seq__26413_26443__$1 = temp__4092__auto___26442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26413_26443__$1))
{var c__20293__auto___26444 = cljs.core.chunk_first.call(null,seq__26413_26443__$1);{
var G__26445 = cljs.core.chunk_rest.call(null,seq__26413_26443__$1);
var G__26446 = c__20293__auto___26444;
var G__26447 = cljs.core.count.call(null,c__20293__auto___26444);
var G__26448 = 0;
seq__26413_26431 = G__26445;
chunk__26414_26432 = G__26446;
count__26415_26433 = G__26447;
i__26416_26434 = G__26448;
continue;
}
} else
{var vec__26418_26449 = cljs.core.first.call(null,seq__26413_26443__$1);var ev__20973__auto___26450 = cljs.core.nth.call(null,vec__26418_26449,0,null);var func__20974__auto___26451 = cljs.core.nth.call(null,vec__26418_26449,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___26450,func__20974__auto___26451);
{
var G__26452 = cljs.core.next.call(null,seq__26413_26443__$1);
var G__26453 = null;
var G__26454 = 0;
var G__26455 = 0;
seq__26413_26431 = G__26452;
chunk__26414_26432 = G__26453;
count__26415_26433 = G__26454;
i__26416_26434 = G__26455;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
});
lt.plugins.cljrefactor.selector.select_form = (function select_form(this$,items){var e__20972__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-select","div.refactor-select",3828436988),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,cljs.core.partial.call(null,lt.plugins.cljrefactor.selector.select_item,this$),items)], null)], null));var seq__26425_26456 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__26426_26457 = null;var count__26427_26458 = 0;var i__26428_26459 = 0;while(true){
if((i__26428_26459 < count__26427_26458))
{var vec__26429_26460 = cljs.core._nth.call(null,chunk__26426_26457,i__26428_26459);var ev__20973__auto___26461 = cljs.core.nth.call(null,vec__26429_26460,0,null);var func__20974__auto___26462 = cljs.core.nth.call(null,vec__26429_26460,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___26461,func__20974__auto___26462);
{
var G__26463 = seq__26425_26456;
var G__26464 = chunk__26426_26457;
var G__26465 = count__26427_26458;
var G__26466 = (i__26428_26459 + 1);
seq__26425_26456 = G__26463;
chunk__26426_26457 = G__26464;
count__26427_26458 = G__26465;
i__26428_26459 = G__26466;
continue;
}
} else
{var temp__4092__auto___26467 = cljs.core.seq.call(null,seq__26425_26456);if(temp__4092__auto___26467)
{var seq__26425_26468__$1 = temp__4092__auto___26467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26425_26468__$1))
{var c__20293__auto___26469 = cljs.core.chunk_first.call(null,seq__26425_26468__$1);{
var G__26470 = cljs.core.chunk_rest.call(null,seq__26425_26468__$1);
var G__26471 = c__20293__auto___26469;
var G__26472 = cljs.core.count.call(null,c__20293__auto___26469);
var G__26473 = 0;
seq__26425_26456 = G__26470;
chunk__26426_26457 = G__26471;
count__26427_26458 = G__26472;
i__26428_26459 = G__26473;
continue;
}
} else
{var vec__26430_26474 = cljs.core.first.call(null,seq__26425_26468__$1);var ev__20973__auto___26475 = cljs.core.nth.call(null,vec__26430_26474,0,null);var func__20974__auto___26476 = cljs.core.nth.call(null,vec__26430_26474,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___26475,func__20974__auto___26476);
{
var G__26477 = cljs.core.next.call(null,seq__26425_26468__$1);
var G__26478 = null;
var G__26479 = 0;
var G__26480 = 0;
seq__26425_26456 = G__26477;
chunk__26426_26457 = G__26478;
count__26427_26458 = G__26479;
i__26428_26459 = G__26480;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
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
lt.plugins.cljrefactor.completer.create_hints = (function create_hints(completions){return cljs.core.map.call(null,(function (p1__21373_SHARP_){return {"text": new cljs.core.Keyword(null,"candidate","candidate",1522567413).cljs$core$IFn$_invoke$arity$1(p1__21373_SHARP_), "completion": new cljs.core.Keyword(null,"candidate","candidate",1522567413).cljs$core$IFn$_invoke$arity$1(p1__21373_SHARP_)};
}),completions);
});
lt.plugins.cljrefactor.completer.__BEH__completer__DOT__res = (function __BEH__completer__DOT__res(ed,res){var vec__21375 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completions","completions",1416465289)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21375,0,null);var ret = cljs.core.nth.call(null,vec__21375,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var temp__4092__auto___21388 = new cljs.core.Keyword(null,"completions","completions",1416465289).cljs$core$IFn$_invoke$arity$1(ret);if(cljs.core.truth_(temp__4092__auto___21388))
{var completions_21389 = temp__4092__auto___21388;lt.object.merge_BANG_.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.cljrefactor.completer","hints","lt.plugins.cljrefactor.completer/hints",3437584730),lt.plugins.cljrefactor.completer.create_hints.call(null,completions_21389)], null));
lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{}
}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.completer","completer.res","lt.plugins.cljrefactor.completer/completer.res",1863143577),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.completer.__BEH__completer__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.complete","editor.eval.clj.result.refactor.complete",3419860036),null], null), null));
lt.plugins.cljrefactor.completer.__BEH__completer__DOT__start = (function __BEH__completer__DOT__start(ed){if(cljs.core.truth_((function (){var G__21377 = cljs.core.deref.call(null,ed);var G__21377__$1 = (((G__21377 == null))?null:new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(G__21377));var G__21377__$2 = (((G__21377__$1 == null))?null:new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(G__21377__$1));var G__21377__$3 = (((G__21377__$2 == null))?null:cljs.core.deref.call(null,G__21377__$2));return G__21377__$3;
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
{var o = (function (){var obj26323 = {};return obj26323;
})();var seq__26324_26337 = cljs.core.seq.call(null,obj);var chunk__26325_26338 = null;var count__26326_26339 = 0;var i__26327_26340 = 0;while(true){
if((i__26327_26340 < count__26326_26339))
{var vec__26328_26341 = cljs.core._nth.call(null,chunk__26325_26338,i__26327_26340);var k_26342 = cljs.core.nth.call(null,vec__26328_26341,0,null);var v_26343 = cljs.core.nth.call(null,vec__26328_26341,1,null);(o[cljs.core.name.call(null,k_26342)] = js_props.call(null,v_26343));
{
var G__26344 = seq__26324_26337;
var G__26345 = chunk__26325_26338;
var G__26346 = count__26326_26339;
var G__26347 = (i__26327_26340 + 1);
seq__26324_26337 = G__26344;
chunk__26325_26338 = G__26345;
count__26326_26339 = G__26346;
i__26327_26340 = G__26347;
continue;
}
} else
{var temp__4092__auto___26348 = cljs.core.seq.call(null,seq__26324_26337);if(temp__4092__auto___26348)
{var seq__26324_26349__$1 = temp__4092__auto___26348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26324_26349__$1))
{var c__20293__auto___26350 = cljs.core.chunk_first.call(null,seq__26324_26349__$1);{
var G__26351 = cljs.core.chunk_rest.call(null,seq__26324_26349__$1);
var G__26352 = c__20293__auto___26350;
var G__26353 = cljs.core.count.call(null,c__20293__auto___26350);
var G__26354 = 0;
seq__26324_26337 = G__26351;
chunk__26325_26338 = G__26352;
count__26326_26339 = G__26353;
i__26327_26340 = G__26354;
continue;
}
} else
{var vec__26329_26355 = cljs.core.first.call(null,seq__26324_26349__$1);var k_26356 = cljs.core.nth.call(null,vec__26329_26355,0,null);var v_26357 = cljs.core.nth.call(null,vec__26329_26355,1,null);(o[cljs.core.name.call(null,k_26356)] = js_props.call(null,v_26357));
{
var G__26358 = cljs.core.next.call(null,seq__26324_26349__$1);
var G__26359 = null;
var G__26360 = 0;
var G__26361 = 0;
seq__26324_26337 = G__26358;
chunk__26325_26338 = G__26359;
count__26326_26339 = G__26360;
i__26327_26340 = G__26361;
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
quiescent.component = (function component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_26331 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26331;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__26362__delegate = function (value,static_args){return react_component.call(null,{"statics": static_args, "value": value});
};
var G__26362 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__26362__delegate.call(this,value,static_args);};
G__26362.cljs$lang$maxFixedArity = 1;
G__26362.cljs$lang$applyTo = (function (arglist__26363){
var value = cljs.core.first(arglist__26363);
var static_args = cljs.core.rest(arglist__26363);
return G__26362__delegate(value,static_args);
});
G__26362.cljs$core$IFn$_invoke$arity$variadic = G__26362__delegate;
return G__26362;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUnmount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26336 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26336;
}} else
{return null;
}
}), "componentWillUpdate": (function (_,___$1){var this$ = this;var temp__4092__auto__ = (this$.props["onWillUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26335 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26335;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onWillMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26334 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26334;
}} else
{return null;
}
}), "componentDidMount": (function (){var this$ = this;var temp__4092__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26333 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26333;
}} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var temp__4092__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;var _STAR_component_STAR_26332 = quiescent._STAR_component_STAR_;try{quiescent._STAR_component_STAR_ = this$;
return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_26332;
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
var wrapper__delegate = function (child,kvs){var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",2609412088),child,kvs));var temp__4092__auto___26364 = (child.props["key"]);if(cljs.core.truth_(temp__4092__auto___26364))
{var key_26365 = temp__4092__auto___26364;(props["key"] = key_26365);
} else
{}
return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__26366){
var child = cljs.core.first(arglist__26366);
var kvs = cljs.core.rest(arglist__26366);
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
lt.plugins.cljrefactor.artifact_version.select_item = (function select_item(idx,item){var e__20972__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),item,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,0)], null),item], null));var seq__21272_21300 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__21273_21301 = null;var count__21274_21302 = 0;var i__21275_21303 = 0;while(true){
if((i__21275_21303 < count__21274_21302))
{var vec__21276_21304 = cljs.core._nth.call(null,chunk__21273_21301,i__21275_21303);var ev__20973__auto___21305 = cljs.core.nth.call(null,vec__21276_21304,0,null);var func__20974__auto___21306 = cljs.core.nth.call(null,vec__21276_21304,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___21305,func__20974__auto___21306);
{
var G__21307 = seq__21272_21300;
var G__21308 = chunk__21273_21301;
var G__21309 = count__21274_21302;
var G__21310 = (i__21275_21303 + 1);
seq__21272_21300 = G__21307;
chunk__21273_21301 = G__21308;
count__21274_21302 = G__21309;
i__21275_21303 = G__21310;
continue;
}
} else
{var temp__4092__auto___21311 = cljs.core.seq.call(null,seq__21272_21300);if(temp__4092__auto___21311)
{var seq__21272_21312__$1 = temp__4092__auto___21311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21272_21312__$1))
{var c__20293__auto___21313 = cljs.core.chunk_first.call(null,seq__21272_21312__$1);{
var G__21314 = cljs.core.chunk_rest.call(null,seq__21272_21312__$1);
var G__21315 = c__20293__auto___21313;
var G__21316 = cljs.core.count.call(null,c__20293__auto___21313);
var G__21317 = 0;
seq__21272_21300 = G__21314;
chunk__21273_21301 = G__21315;
count__21274_21302 = G__21316;
i__21275_21303 = G__21317;
continue;
}
} else
{var vec__21277_21318 = cljs.core.first.call(null,seq__21272_21312__$1);var ev__20973__auto___21319 = cljs.core.nth.call(null,vec__21277_21318,0,null);var func__20974__auto___21320 = cljs.core.nth.call(null,vec__21277_21318,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___21319,func__20974__auto___21320);
{
var G__21321 = cljs.core.next.call(null,seq__21272_21312__$1);
var G__21322 = null;
var G__21323 = 0;
var G__21324 = 0;
seq__21272_21300 = G__21321;
chunk__21273_21301 = G__21322;
count__21274_21302 = G__21323;
i__21275_21303 = G__21324;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
});
lt.plugins.cljrefactor.artifact_version.select_form = (function select_form(this$,items){var e__20972__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.artifact-versions","div.artifact-versions",2029510539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),cljs.core.count.call(null,items)], null),cljs.core.map_indexed.call(null,lt.plugins.cljrefactor.artifact_version.select_item,items)], null)], null));var seq__21284_21325 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__21285_21326 = null;var count__21286_21327 = 0;var i__21287_21328 = 0;while(true){
if((i__21287_21328 < count__21286_21327))
{var vec__21288_21329 = cljs.core._nth.call(null,chunk__21285_21326,i__21287_21328);var ev__20973__auto___21330 = cljs.core.nth.call(null,vec__21288_21329,0,null);var func__20974__auto___21331 = cljs.core.nth.call(null,vec__21288_21329,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___21330,func__20974__auto___21331);
{
var G__21332 = seq__21284_21325;
var G__21333 = chunk__21285_21326;
var G__21334 = count__21286_21327;
var G__21335 = (i__21287_21328 + 1);
seq__21284_21325 = G__21332;
chunk__21285_21326 = G__21333;
count__21286_21327 = G__21334;
i__21287_21328 = G__21335;
continue;
}
} else
{var temp__4092__auto___21336 = cljs.core.seq.call(null,seq__21284_21325);if(temp__4092__auto___21336)
{var seq__21284_21337__$1 = temp__4092__auto___21336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21284_21337__$1))
{var c__20293__auto___21338 = cljs.core.chunk_first.call(null,seq__21284_21337__$1);{
var G__21339 = cljs.core.chunk_rest.call(null,seq__21284_21337__$1);
var G__21340 = c__20293__auto___21338;
var G__21341 = cljs.core.count.call(null,c__20293__auto___21338);
var G__21342 = 0;
seq__21284_21325 = G__21339;
chunk__21285_21326 = G__21340;
count__21286_21327 = G__21341;
i__21287_21328 = G__21342;
continue;
}
} else
{var vec__21289_21343 = cljs.core.first.call(null,seq__21284_21337__$1);var ev__20973__auto___21344 = cljs.core.nth.call(null,vec__21289_21343,0,null);var func__20974__auto___21345 = cljs.core.nth.call(null,vec__21289_21343,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___21344,func__20974__auto___21345);
{
var G__21346 = cljs.core.next.call(null,seq__21284_21337__$1);
var G__21347 = null;
var G__21348 = 0;
var G__21349 = 0;
seq__21284_21325 = G__21346;
chunk__21285_21326 = G__21347;
count__21286_21327 = G__21348;
i__21287_21328 = G__21349;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
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
lt.plugins.cljrefactor.artifacts.__BEH__finish_artifact_version_hints = (function __BEH__finish_artifact_version_hints(ed,res){var vec__30475 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"versions","versions",3323818509)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__30475,0,null);var ret = cljs.core.nth.call(null,vec__30475,1,null);var vs = (cljs.core.truth_(ok_QMARK_)?new cljs.core.Keyword(null,"versions","versions",3323818509).cljs$core$IFn$_invoke$arity$1(ret):null);if(cljs.core.not.call(null,ok_QMARK_))
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
lt.plugins.cljrefactor.artifacts.create_artifact_hints = (function create_artifact_hints(ed,artifacts){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__30476_SHARP_){return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{"item": p1__30476_SHARP_, "completion": p1__30476_SHARP_, "text": p1__30476_SHARP_, "select": cljs.core.partial.call(null,lt.plugins.cljrefactor.artifacts.sel_cb,ed)}], null));
}),artifacts));
});
lt.plugins.cljrefactor.artifacts.__BEH__finish_artifact_hints = (function __BEH__finish_artifact_hints(ed,res){var vec__30478 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artifacts","artifacts",1575856211)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__30478,0,null);var ret = cljs.core.nth.call(null,vec__30478,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret));
} else
{lt.object.update_BANG_.call(null,lt.plugins.cljrefactor.artifacts.refactor_artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","fetching-deps","lt.plugins.cljrefactor.artifacts/fetching-deps",3366334705)], null),((function (vec__30478,ok_QMARK_,ret){
return (function (_){return false;
});})(vec__30478,ok_QMARK_,ret))
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
lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep__DOT__res = (function __BEH__hotload_dep__DOT__res(ed,res){var vec__30480 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res);var ok_QMARK_ = cljs.core.nth.call(null,vec__30480,0,null);var ret = cljs.core.nth.call(null,vec__30480,1,null);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret));if(cljs.core.not.call(null,ok_QMARK_))
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
}catch (e30482){var e = e30482;return null;
}});
lt.plugins.cljrefactor.artifacts.hotload_dep_op = (function hotload_dep_op(dep){var coords = dep;return lt.plugins.cljrefactor.middleware.create_op.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"hotload-dependency",new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),coords], null));
});
lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep_BANG_ = (function __BEH__hotload_dep_BANG_(ed,coords){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),lt.plugins.cljrefactor.artifacts.hotload_dep_op.call(null,coords),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"refactor.hotload-dep","refactor.hotload-dep",3912040123),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","hotload-dep!","lt.plugins.cljrefactor.artifacts/hotload-dep!",591057976),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.artifacts.__BEH__hotload_dep_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refactor.hotload-dep!","refactor.hotload-dep!",661803370),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.cljrefactor.artifacts","hotload-dep","lt.plugins.cljrefactor.artifacts/hotload-dep",4433653981),new cljs.core.Keyword(null,"desc","desc",1016984067),"Clojure refactor: Hotload dependency",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var pos = (cljs.core.truth_(ed)?lt.objs.editor.__GT_cursor.call(null,ed):null);if(cljs.core.truth_(ed))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"paredit.select.parent","paredit.select.parent",4454322891));
var candidate = lt.objs.editor.selection.call(null,ed);var coords = lt.plugins.cljrefactor.artifacts.parse_dep.call(null,candidate);lt.objs.editor.move_cursor.call(null,ed,pos);
if(cljs.core.truth_((function (){var and__19533__auto__ = lt.plugins.cljrefactor.artifacts.parse_dep.call(null,candidate);if(cljs.core.truth_(and__19533__auto__))
{return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
} else
{return and__19533__auto__;
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
lt.plugins.cljrefactor.function$.get_form_range = (function get_form_range(ed,pos){var vec__21584 = lt.plugins.paredit.form_boundary.call(null,ed,pos);var start = cljs.core.nth.call(null,vec__21584,0,null);var end = cljs.core.nth.call(null,vec__21584,1,null);if(cljs.core.truth_(start))
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
var map__21586 = lt.plugins.cljrefactor.function$.get_form_range.call(null,ed,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var map__21586__$1 = ((cljs.core.seq_QMARK_.call(null,map__21586))?cljs.core.apply.call(null,cljs.core.hash_map,map__21586):map__21586);var end = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__21586__$1,new cljs.core.Keyword(null,"start","start",1123661780));lt.objs.editor.set_selection.call(null,ed,start,end);
return lt.objs.editor.indent_selection.call(null,ed,"smart");
});
lt.plugins.cljrefactor.function$.highlight_fn_name = (function highlight_fn_name(ed,selections){var cm_ed = lt.objs.editor.__GT_cm_ed.call(null,ed);return cm_ed.setSelections(cljs.core.clj__GT_js.call(null,selections));
});
lt.plugins.cljrefactor.function$.do_extract = (function do_extract(ed,loc,unbound){var map__21588 = lt.plugins.cljrefactor.function$.get_form_range.call(null,ed,loc);var map__21588__$1 = ((cljs.core.seq_QMARK_.call(null,map__21588))?cljs.core.apply.call(null,cljs.core.hash_map,map__21588):map__21588);var end = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"start","start",1123661780));var top_form = lt.plugins.cljrefactor.util.get_top_level_form.call(null,ed,loc);var ins_pos = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(top_form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086)], null),cljs.core.dec);if(cljs.core.truth_((function (){var and__19533__auto__ = start;if(cljs.core.truth_(and__19533__auto__))
{return top_form;
} else
{return and__19533__auto__;
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
lt.plugins.cljrefactor.function$.__BEH__unbound_res = (function __BEH__unbound_res(ed,res){var vec__21590 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unbound","unbound",720786935)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21590,0,null);var ret = cljs.core.nth.call(null,vec__21590,1,null);if(cljs.core.not.call(null,ok_QMARK_))
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
var a__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22748_23696 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22749_23697 = null;var count__22750_23698 = 0;var i__22751_23699 = 0;while(true){
if((i__22751_23699 < count__22750_23698))
{var arg__21712__auto___23700 = cljs.core._nth.call(null,chunk__22749_23697,i__22751_23699);a__21711__auto__.push(arg__21712__auto___23700);
{
var G__23701 = seq__22748_23696;
var G__23702 = chunk__22749_23697;
var G__23703 = count__22750_23698;
var G__23704 = (i__22751_23699 + 1);
seq__22748_23696 = G__23701;
chunk__22749_23697 = G__23702;
count__22750_23698 = G__23703;
i__22751_23699 = G__23704;
continue;
}
} else
{var temp__4092__auto___23705 = cljs.core.seq.call(null,seq__22748_23696);if(temp__4092__auto___23705)
{var seq__22748_23706__$1 = temp__4092__auto___23705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22748_23706__$1))
{var c__20293__auto___23707 = cljs.core.chunk_first.call(null,seq__22748_23706__$1);{
var G__23708 = cljs.core.chunk_rest.call(null,seq__22748_23706__$1);
var G__23709 = c__20293__auto___23707;
var G__23710 = cljs.core.count.call(null,c__20293__auto___23707);
var G__23711 = 0;
seq__22748_23696 = G__23708;
chunk__22749_23697 = G__23709;
count__22750_23698 = G__23710;
i__22751_23699 = G__23711;
continue;
}
} else
{var arg__21712__auto___23712 = cljs.core.first.call(null,seq__22748_23706__$1);a__21711__auto__.push(arg__21712__auto___23712);
{
var G__23713 = cljs.core.next.call(null,seq__22748_23706__$1);
var G__23714 = null;
var G__23715 = 0;
var G__23716 = 0;
seq__22748_23696 = G__23713;
chunk__22749_23697 = G__23714;
count__22750_23698 = G__23715;
i__22751_23699 = G__23716;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__21711__auto__);
};
var a = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__21710__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__23717){
var args__21710__auto__ = cljs.core.seq(arglist__23717);
return a__delegate(args__21710__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22756_23718 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22757_23719 = null;var count__22758_23720 = 0;var i__22759_23721 = 0;while(true){
if((i__22759_23721 < count__22758_23720))
{var arg__21712__auto___23722 = cljs.core._nth.call(null,chunk__22757_23719,i__22759_23721);a__21711__auto__.push(arg__21712__auto___23722);
{
var G__23723 = seq__22756_23718;
var G__23724 = chunk__22757_23719;
var G__23725 = count__22758_23720;
var G__23726 = (i__22759_23721 + 1);
seq__22756_23718 = G__23723;
chunk__22757_23719 = G__23724;
count__22758_23720 = G__23725;
i__22759_23721 = G__23726;
continue;
}
} else
{var temp__4092__auto___23727 = cljs.core.seq.call(null,seq__22756_23718);if(temp__4092__auto___23727)
{var seq__22756_23728__$1 = temp__4092__auto___23727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22756_23728__$1))
{var c__20293__auto___23729 = cljs.core.chunk_first.call(null,seq__22756_23728__$1);{
var G__23730 = cljs.core.chunk_rest.call(null,seq__22756_23728__$1);
var G__23731 = c__20293__auto___23729;
var G__23732 = cljs.core.count.call(null,c__20293__auto___23729);
var G__23733 = 0;
seq__22756_23718 = G__23730;
chunk__22757_23719 = G__23731;
count__22758_23720 = G__23732;
i__22759_23721 = G__23733;
continue;
}
} else
{var arg__21712__auto___23734 = cljs.core.first.call(null,seq__22756_23728__$1);a__21711__auto__.push(arg__21712__auto___23734);
{
var G__23735 = cljs.core.next.call(null,seq__22756_23728__$1);
var G__23736 = null;
var G__23737 = 0;
var G__23738 = 0;
seq__22756_23718 = G__23735;
chunk__22757_23719 = G__23736;
count__22758_23720 = G__23737;
i__22759_23721 = G__23738;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__21711__auto__);
};
var abbr = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__21710__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__23739){
var args__21710__auto__ = cljs.core.seq(arglist__23739);
return abbr__delegate(args__21710__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22764_23740 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22765_23741 = null;var count__22766_23742 = 0;var i__22767_23743 = 0;while(true){
if((i__22767_23743 < count__22766_23742))
{var arg__21712__auto___23744 = cljs.core._nth.call(null,chunk__22765_23741,i__22767_23743);a__21711__auto__.push(arg__21712__auto___23744);
{
var G__23745 = seq__22764_23740;
var G__23746 = chunk__22765_23741;
var G__23747 = count__22766_23742;
var G__23748 = (i__22767_23743 + 1);
seq__22764_23740 = G__23745;
chunk__22765_23741 = G__23746;
count__22766_23742 = G__23747;
i__22767_23743 = G__23748;
continue;
}
} else
{var temp__4092__auto___23749 = cljs.core.seq.call(null,seq__22764_23740);if(temp__4092__auto___23749)
{var seq__22764_23750__$1 = temp__4092__auto___23749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22764_23750__$1))
{var c__20293__auto___23751 = cljs.core.chunk_first.call(null,seq__22764_23750__$1);{
var G__23752 = cljs.core.chunk_rest.call(null,seq__22764_23750__$1);
var G__23753 = c__20293__auto___23751;
var G__23754 = cljs.core.count.call(null,c__20293__auto___23751);
var G__23755 = 0;
seq__22764_23740 = G__23752;
chunk__22765_23741 = G__23753;
count__22766_23742 = G__23754;
i__22767_23743 = G__23755;
continue;
}
} else
{var arg__21712__auto___23756 = cljs.core.first.call(null,seq__22764_23750__$1);a__21711__auto__.push(arg__21712__auto___23756);
{
var G__23757 = cljs.core.next.call(null,seq__22764_23750__$1);
var G__23758 = null;
var G__23759 = 0;
var G__23760 = 0;
seq__22764_23740 = G__23757;
chunk__22765_23741 = G__23758;
count__22766_23742 = G__23759;
i__22767_23743 = G__23760;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__21711__auto__);
};
var address = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__21710__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__23761){
var args__21710__auto__ = cljs.core.seq(arglist__23761);
return address__delegate(args__21710__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22772_23762 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22773_23763 = null;var count__22774_23764 = 0;var i__22775_23765 = 0;while(true){
if((i__22775_23765 < count__22774_23764))
{var arg__21712__auto___23766 = cljs.core._nth.call(null,chunk__22773_23763,i__22775_23765);a__21711__auto__.push(arg__21712__auto___23766);
{
var G__23767 = seq__22772_23762;
var G__23768 = chunk__22773_23763;
var G__23769 = count__22774_23764;
var G__23770 = (i__22775_23765 + 1);
seq__22772_23762 = G__23767;
chunk__22773_23763 = G__23768;
count__22774_23764 = G__23769;
i__22775_23765 = G__23770;
continue;
}
} else
{var temp__4092__auto___23771 = cljs.core.seq.call(null,seq__22772_23762);if(temp__4092__auto___23771)
{var seq__22772_23772__$1 = temp__4092__auto___23771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22772_23772__$1))
{var c__20293__auto___23773 = cljs.core.chunk_first.call(null,seq__22772_23772__$1);{
var G__23774 = cljs.core.chunk_rest.call(null,seq__22772_23772__$1);
var G__23775 = c__20293__auto___23773;
var G__23776 = cljs.core.count.call(null,c__20293__auto___23773);
var G__23777 = 0;
seq__22772_23762 = G__23774;
chunk__22773_23763 = G__23775;
count__22774_23764 = G__23776;
i__22775_23765 = G__23777;
continue;
}
} else
{var arg__21712__auto___23778 = cljs.core.first.call(null,seq__22772_23772__$1);a__21711__auto__.push(arg__21712__auto___23778);
{
var G__23779 = cljs.core.next.call(null,seq__22772_23772__$1);
var G__23780 = null;
var G__23781 = 0;
var G__23782 = 0;
seq__22772_23762 = G__23779;
chunk__22773_23763 = G__23780;
count__22774_23764 = G__23781;
i__22775_23765 = G__23782;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__21711__auto__);
};
var area = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__21710__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__23783){
var args__21710__auto__ = cljs.core.seq(arglist__23783);
return area__delegate(args__21710__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22780_23784 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22781_23785 = null;var count__22782_23786 = 0;var i__22783_23787 = 0;while(true){
if((i__22783_23787 < count__22782_23786))
{var arg__21712__auto___23788 = cljs.core._nth.call(null,chunk__22781_23785,i__22783_23787);a__21711__auto__.push(arg__21712__auto___23788);
{
var G__23789 = seq__22780_23784;
var G__23790 = chunk__22781_23785;
var G__23791 = count__22782_23786;
var G__23792 = (i__22783_23787 + 1);
seq__22780_23784 = G__23789;
chunk__22781_23785 = G__23790;
count__22782_23786 = G__23791;
i__22783_23787 = G__23792;
continue;
}
} else
{var temp__4092__auto___23793 = cljs.core.seq.call(null,seq__22780_23784);if(temp__4092__auto___23793)
{var seq__22780_23794__$1 = temp__4092__auto___23793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22780_23794__$1))
{var c__20293__auto___23795 = cljs.core.chunk_first.call(null,seq__22780_23794__$1);{
var G__23796 = cljs.core.chunk_rest.call(null,seq__22780_23794__$1);
var G__23797 = c__20293__auto___23795;
var G__23798 = cljs.core.count.call(null,c__20293__auto___23795);
var G__23799 = 0;
seq__22780_23784 = G__23796;
chunk__22781_23785 = G__23797;
count__22782_23786 = G__23798;
i__22783_23787 = G__23799;
continue;
}
} else
{var arg__21712__auto___23800 = cljs.core.first.call(null,seq__22780_23794__$1);a__21711__auto__.push(arg__21712__auto___23800);
{
var G__23801 = cljs.core.next.call(null,seq__22780_23794__$1);
var G__23802 = null;
var G__23803 = 0;
var G__23804 = 0;
seq__22780_23784 = G__23801;
chunk__22781_23785 = G__23802;
count__22782_23786 = G__23803;
i__22783_23787 = G__23804;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__21711__auto__);
};
var article = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__21710__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__23805){
var args__21710__auto__ = cljs.core.seq(arglist__23805);
return article__delegate(args__21710__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22788_23806 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22789_23807 = null;var count__22790_23808 = 0;var i__22791_23809 = 0;while(true){
if((i__22791_23809 < count__22790_23808))
{var arg__21712__auto___23810 = cljs.core._nth.call(null,chunk__22789_23807,i__22791_23809);a__21711__auto__.push(arg__21712__auto___23810);
{
var G__23811 = seq__22788_23806;
var G__23812 = chunk__22789_23807;
var G__23813 = count__22790_23808;
var G__23814 = (i__22791_23809 + 1);
seq__22788_23806 = G__23811;
chunk__22789_23807 = G__23812;
count__22790_23808 = G__23813;
i__22791_23809 = G__23814;
continue;
}
} else
{var temp__4092__auto___23815 = cljs.core.seq.call(null,seq__22788_23806);if(temp__4092__auto___23815)
{var seq__22788_23816__$1 = temp__4092__auto___23815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22788_23816__$1))
{var c__20293__auto___23817 = cljs.core.chunk_first.call(null,seq__22788_23816__$1);{
var G__23818 = cljs.core.chunk_rest.call(null,seq__22788_23816__$1);
var G__23819 = c__20293__auto___23817;
var G__23820 = cljs.core.count.call(null,c__20293__auto___23817);
var G__23821 = 0;
seq__22788_23806 = G__23818;
chunk__22789_23807 = G__23819;
count__22790_23808 = G__23820;
i__22791_23809 = G__23821;
continue;
}
} else
{var arg__21712__auto___23822 = cljs.core.first.call(null,seq__22788_23816__$1);a__21711__auto__.push(arg__21712__auto___23822);
{
var G__23823 = cljs.core.next.call(null,seq__22788_23816__$1);
var G__23824 = null;
var G__23825 = 0;
var G__23826 = 0;
seq__22788_23806 = G__23823;
chunk__22789_23807 = G__23824;
count__22790_23808 = G__23825;
i__22791_23809 = G__23826;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__21711__auto__);
};
var aside = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__21710__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__23827){
var args__21710__auto__ = cljs.core.seq(arglist__23827);
return aside__delegate(args__21710__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22796_23828 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22797_23829 = null;var count__22798_23830 = 0;var i__22799_23831 = 0;while(true){
if((i__22799_23831 < count__22798_23830))
{var arg__21712__auto___23832 = cljs.core._nth.call(null,chunk__22797_23829,i__22799_23831);a__21711__auto__.push(arg__21712__auto___23832);
{
var G__23833 = seq__22796_23828;
var G__23834 = chunk__22797_23829;
var G__23835 = count__22798_23830;
var G__23836 = (i__22799_23831 + 1);
seq__22796_23828 = G__23833;
chunk__22797_23829 = G__23834;
count__22798_23830 = G__23835;
i__22799_23831 = G__23836;
continue;
}
} else
{var temp__4092__auto___23837 = cljs.core.seq.call(null,seq__22796_23828);if(temp__4092__auto___23837)
{var seq__22796_23838__$1 = temp__4092__auto___23837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22796_23838__$1))
{var c__20293__auto___23839 = cljs.core.chunk_first.call(null,seq__22796_23838__$1);{
var G__23840 = cljs.core.chunk_rest.call(null,seq__22796_23838__$1);
var G__23841 = c__20293__auto___23839;
var G__23842 = cljs.core.count.call(null,c__20293__auto___23839);
var G__23843 = 0;
seq__22796_23828 = G__23840;
chunk__22797_23829 = G__23841;
count__22798_23830 = G__23842;
i__22799_23831 = G__23843;
continue;
}
} else
{var arg__21712__auto___23844 = cljs.core.first.call(null,seq__22796_23838__$1);a__21711__auto__.push(arg__21712__auto___23844);
{
var G__23845 = cljs.core.next.call(null,seq__22796_23838__$1);
var G__23846 = null;
var G__23847 = 0;
var G__23848 = 0;
seq__22796_23828 = G__23845;
chunk__22797_23829 = G__23846;
count__22798_23830 = G__23847;
i__22799_23831 = G__23848;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__21711__auto__);
};
var audio = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__21710__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__23849){
var args__21710__auto__ = cljs.core.seq(arglist__23849);
return audio__delegate(args__21710__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22804_23850 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22805_23851 = null;var count__22806_23852 = 0;var i__22807_23853 = 0;while(true){
if((i__22807_23853 < count__22806_23852))
{var arg__21712__auto___23854 = cljs.core._nth.call(null,chunk__22805_23851,i__22807_23853);a__21711__auto__.push(arg__21712__auto___23854);
{
var G__23855 = seq__22804_23850;
var G__23856 = chunk__22805_23851;
var G__23857 = count__22806_23852;
var G__23858 = (i__22807_23853 + 1);
seq__22804_23850 = G__23855;
chunk__22805_23851 = G__23856;
count__22806_23852 = G__23857;
i__22807_23853 = G__23858;
continue;
}
} else
{var temp__4092__auto___23859 = cljs.core.seq.call(null,seq__22804_23850);if(temp__4092__auto___23859)
{var seq__22804_23860__$1 = temp__4092__auto___23859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22804_23860__$1))
{var c__20293__auto___23861 = cljs.core.chunk_first.call(null,seq__22804_23860__$1);{
var G__23862 = cljs.core.chunk_rest.call(null,seq__22804_23860__$1);
var G__23863 = c__20293__auto___23861;
var G__23864 = cljs.core.count.call(null,c__20293__auto___23861);
var G__23865 = 0;
seq__22804_23850 = G__23862;
chunk__22805_23851 = G__23863;
count__22806_23852 = G__23864;
i__22807_23853 = G__23865;
continue;
}
} else
{var arg__21712__auto___23866 = cljs.core.first.call(null,seq__22804_23860__$1);a__21711__auto__.push(arg__21712__auto___23866);
{
var G__23867 = cljs.core.next.call(null,seq__22804_23860__$1);
var G__23868 = null;
var G__23869 = 0;
var G__23870 = 0;
seq__22804_23850 = G__23867;
chunk__22805_23851 = G__23868;
count__22806_23852 = G__23869;
i__22807_23853 = G__23870;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__21711__auto__);
};
var b = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__21710__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__23871){
var args__21710__auto__ = cljs.core.seq(arglist__23871);
return b__delegate(args__21710__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22812_23872 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22813_23873 = null;var count__22814_23874 = 0;var i__22815_23875 = 0;while(true){
if((i__22815_23875 < count__22814_23874))
{var arg__21712__auto___23876 = cljs.core._nth.call(null,chunk__22813_23873,i__22815_23875);a__21711__auto__.push(arg__21712__auto___23876);
{
var G__23877 = seq__22812_23872;
var G__23878 = chunk__22813_23873;
var G__23879 = count__22814_23874;
var G__23880 = (i__22815_23875 + 1);
seq__22812_23872 = G__23877;
chunk__22813_23873 = G__23878;
count__22814_23874 = G__23879;
i__22815_23875 = G__23880;
continue;
}
} else
{var temp__4092__auto___23881 = cljs.core.seq.call(null,seq__22812_23872);if(temp__4092__auto___23881)
{var seq__22812_23882__$1 = temp__4092__auto___23881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22812_23882__$1))
{var c__20293__auto___23883 = cljs.core.chunk_first.call(null,seq__22812_23882__$1);{
var G__23884 = cljs.core.chunk_rest.call(null,seq__22812_23882__$1);
var G__23885 = c__20293__auto___23883;
var G__23886 = cljs.core.count.call(null,c__20293__auto___23883);
var G__23887 = 0;
seq__22812_23872 = G__23884;
chunk__22813_23873 = G__23885;
count__22814_23874 = G__23886;
i__22815_23875 = G__23887;
continue;
}
} else
{var arg__21712__auto___23888 = cljs.core.first.call(null,seq__22812_23882__$1);a__21711__auto__.push(arg__21712__auto___23888);
{
var G__23889 = cljs.core.next.call(null,seq__22812_23882__$1);
var G__23890 = null;
var G__23891 = 0;
var G__23892 = 0;
seq__22812_23872 = G__23889;
chunk__22813_23873 = G__23890;
count__22814_23874 = G__23891;
i__22815_23875 = G__23892;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__21711__auto__);
};
var base = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__21710__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__23893){
var args__21710__auto__ = cljs.core.seq(arglist__23893);
return base__delegate(args__21710__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22820_23894 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22821_23895 = null;var count__22822_23896 = 0;var i__22823_23897 = 0;while(true){
if((i__22823_23897 < count__22822_23896))
{var arg__21712__auto___23898 = cljs.core._nth.call(null,chunk__22821_23895,i__22823_23897);a__21711__auto__.push(arg__21712__auto___23898);
{
var G__23899 = seq__22820_23894;
var G__23900 = chunk__22821_23895;
var G__23901 = count__22822_23896;
var G__23902 = (i__22823_23897 + 1);
seq__22820_23894 = G__23899;
chunk__22821_23895 = G__23900;
count__22822_23896 = G__23901;
i__22823_23897 = G__23902;
continue;
}
} else
{var temp__4092__auto___23903 = cljs.core.seq.call(null,seq__22820_23894);if(temp__4092__auto___23903)
{var seq__22820_23904__$1 = temp__4092__auto___23903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22820_23904__$1))
{var c__20293__auto___23905 = cljs.core.chunk_first.call(null,seq__22820_23904__$1);{
var G__23906 = cljs.core.chunk_rest.call(null,seq__22820_23904__$1);
var G__23907 = c__20293__auto___23905;
var G__23908 = cljs.core.count.call(null,c__20293__auto___23905);
var G__23909 = 0;
seq__22820_23894 = G__23906;
chunk__22821_23895 = G__23907;
count__22822_23896 = G__23908;
i__22823_23897 = G__23909;
continue;
}
} else
{var arg__21712__auto___23910 = cljs.core.first.call(null,seq__22820_23904__$1);a__21711__auto__.push(arg__21712__auto___23910);
{
var G__23911 = cljs.core.next.call(null,seq__22820_23904__$1);
var G__23912 = null;
var G__23913 = 0;
var G__23914 = 0;
seq__22820_23894 = G__23911;
chunk__22821_23895 = G__23912;
count__22822_23896 = G__23913;
i__22823_23897 = G__23914;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__21711__auto__);
};
var bdi = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__21710__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__23915){
var args__21710__auto__ = cljs.core.seq(arglist__23915);
return bdi__delegate(args__21710__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22828_23916 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22829_23917 = null;var count__22830_23918 = 0;var i__22831_23919 = 0;while(true){
if((i__22831_23919 < count__22830_23918))
{var arg__21712__auto___23920 = cljs.core._nth.call(null,chunk__22829_23917,i__22831_23919);a__21711__auto__.push(arg__21712__auto___23920);
{
var G__23921 = seq__22828_23916;
var G__23922 = chunk__22829_23917;
var G__23923 = count__22830_23918;
var G__23924 = (i__22831_23919 + 1);
seq__22828_23916 = G__23921;
chunk__22829_23917 = G__23922;
count__22830_23918 = G__23923;
i__22831_23919 = G__23924;
continue;
}
} else
{var temp__4092__auto___23925 = cljs.core.seq.call(null,seq__22828_23916);if(temp__4092__auto___23925)
{var seq__22828_23926__$1 = temp__4092__auto___23925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22828_23926__$1))
{var c__20293__auto___23927 = cljs.core.chunk_first.call(null,seq__22828_23926__$1);{
var G__23928 = cljs.core.chunk_rest.call(null,seq__22828_23926__$1);
var G__23929 = c__20293__auto___23927;
var G__23930 = cljs.core.count.call(null,c__20293__auto___23927);
var G__23931 = 0;
seq__22828_23916 = G__23928;
chunk__22829_23917 = G__23929;
count__22830_23918 = G__23930;
i__22831_23919 = G__23931;
continue;
}
} else
{var arg__21712__auto___23932 = cljs.core.first.call(null,seq__22828_23926__$1);a__21711__auto__.push(arg__21712__auto___23932);
{
var G__23933 = cljs.core.next.call(null,seq__22828_23926__$1);
var G__23934 = null;
var G__23935 = 0;
var G__23936 = 0;
seq__22828_23916 = G__23933;
chunk__22829_23917 = G__23934;
count__22830_23918 = G__23935;
i__22831_23919 = G__23936;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__21711__auto__);
};
var bdo = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__21710__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__23937){
var args__21710__auto__ = cljs.core.seq(arglist__23937);
return bdo__delegate(args__21710__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22836_23938 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22837_23939 = null;var count__22838_23940 = 0;var i__22839_23941 = 0;while(true){
if((i__22839_23941 < count__22838_23940))
{var arg__21712__auto___23942 = cljs.core._nth.call(null,chunk__22837_23939,i__22839_23941);a__21711__auto__.push(arg__21712__auto___23942);
{
var G__23943 = seq__22836_23938;
var G__23944 = chunk__22837_23939;
var G__23945 = count__22838_23940;
var G__23946 = (i__22839_23941 + 1);
seq__22836_23938 = G__23943;
chunk__22837_23939 = G__23944;
count__22838_23940 = G__23945;
i__22839_23941 = G__23946;
continue;
}
} else
{var temp__4092__auto___23947 = cljs.core.seq.call(null,seq__22836_23938);if(temp__4092__auto___23947)
{var seq__22836_23948__$1 = temp__4092__auto___23947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22836_23948__$1))
{var c__20293__auto___23949 = cljs.core.chunk_first.call(null,seq__22836_23948__$1);{
var G__23950 = cljs.core.chunk_rest.call(null,seq__22836_23948__$1);
var G__23951 = c__20293__auto___23949;
var G__23952 = cljs.core.count.call(null,c__20293__auto___23949);
var G__23953 = 0;
seq__22836_23938 = G__23950;
chunk__22837_23939 = G__23951;
count__22838_23940 = G__23952;
i__22839_23941 = G__23953;
continue;
}
} else
{var arg__21712__auto___23954 = cljs.core.first.call(null,seq__22836_23948__$1);a__21711__auto__.push(arg__21712__auto___23954);
{
var G__23955 = cljs.core.next.call(null,seq__22836_23948__$1);
var G__23956 = null;
var G__23957 = 0;
var G__23958 = 0;
seq__22836_23938 = G__23955;
chunk__22837_23939 = G__23956;
count__22838_23940 = G__23957;
i__22839_23941 = G__23958;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__21711__auto__);
};
var big = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__21710__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__23959){
var args__21710__auto__ = cljs.core.seq(arglist__23959);
return big__delegate(args__21710__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22844_23960 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22845_23961 = null;var count__22846_23962 = 0;var i__22847_23963 = 0;while(true){
if((i__22847_23963 < count__22846_23962))
{var arg__21712__auto___23964 = cljs.core._nth.call(null,chunk__22845_23961,i__22847_23963);a__21711__auto__.push(arg__21712__auto___23964);
{
var G__23965 = seq__22844_23960;
var G__23966 = chunk__22845_23961;
var G__23967 = count__22846_23962;
var G__23968 = (i__22847_23963 + 1);
seq__22844_23960 = G__23965;
chunk__22845_23961 = G__23966;
count__22846_23962 = G__23967;
i__22847_23963 = G__23968;
continue;
}
} else
{var temp__4092__auto___23969 = cljs.core.seq.call(null,seq__22844_23960);if(temp__4092__auto___23969)
{var seq__22844_23970__$1 = temp__4092__auto___23969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22844_23970__$1))
{var c__20293__auto___23971 = cljs.core.chunk_first.call(null,seq__22844_23970__$1);{
var G__23972 = cljs.core.chunk_rest.call(null,seq__22844_23970__$1);
var G__23973 = c__20293__auto___23971;
var G__23974 = cljs.core.count.call(null,c__20293__auto___23971);
var G__23975 = 0;
seq__22844_23960 = G__23972;
chunk__22845_23961 = G__23973;
count__22846_23962 = G__23974;
i__22847_23963 = G__23975;
continue;
}
} else
{var arg__21712__auto___23976 = cljs.core.first.call(null,seq__22844_23970__$1);a__21711__auto__.push(arg__21712__auto___23976);
{
var G__23977 = cljs.core.next.call(null,seq__22844_23970__$1);
var G__23978 = null;
var G__23979 = 0;
var G__23980 = 0;
seq__22844_23960 = G__23977;
chunk__22845_23961 = G__23978;
count__22846_23962 = G__23979;
i__22847_23963 = G__23980;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__21711__auto__);
};
var blockquote = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__21710__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__23981){
var args__21710__auto__ = cljs.core.seq(arglist__23981);
return blockquote__delegate(args__21710__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22852_23982 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22853_23983 = null;var count__22854_23984 = 0;var i__22855_23985 = 0;while(true){
if((i__22855_23985 < count__22854_23984))
{var arg__21712__auto___23986 = cljs.core._nth.call(null,chunk__22853_23983,i__22855_23985);a__21711__auto__.push(arg__21712__auto___23986);
{
var G__23987 = seq__22852_23982;
var G__23988 = chunk__22853_23983;
var G__23989 = count__22854_23984;
var G__23990 = (i__22855_23985 + 1);
seq__22852_23982 = G__23987;
chunk__22853_23983 = G__23988;
count__22854_23984 = G__23989;
i__22855_23985 = G__23990;
continue;
}
} else
{var temp__4092__auto___23991 = cljs.core.seq.call(null,seq__22852_23982);if(temp__4092__auto___23991)
{var seq__22852_23992__$1 = temp__4092__auto___23991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22852_23992__$1))
{var c__20293__auto___23993 = cljs.core.chunk_first.call(null,seq__22852_23992__$1);{
var G__23994 = cljs.core.chunk_rest.call(null,seq__22852_23992__$1);
var G__23995 = c__20293__auto___23993;
var G__23996 = cljs.core.count.call(null,c__20293__auto___23993);
var G__23997 = 0;
seq__22852_23982 = G__23994;
chunk__22853_23983 = G__23995;
count__22854_23984 = G__23996;
i__22855_23985 = G__23997;
continue;
}
} else
{var arg__21712__auto___23998 = cljs.core.first.call(null,seq__22852_23992__$1);a__21711__auto__.push(arg__21712__auto___23998);
{
var G__23999 = cljs.core.next.call(null,seq__22852_23992__$1);
var G__24000 = null;
var G__24001 = 0;
var G__24002 = 0;
seq__22852_23982 = G__23999;
chunk__22853_23983 = G__24000;
count__22854_23984 = G__24001;
i__22855_23985 = G__24002;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__21711__auto__);
};
var body = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__21710__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__24003){
var args__21710__auto__ = cljs.core.seq(arglist__24003);
return body__delegate(args__21710__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22860_24004 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22861_24005 = null;var count__22862_24006 = 0;var i__22863_24007 = 0;while(true){
if((i__22863_24007 < count__22862_24006))
{var arg__21712__auto___24008 = cljs.core._nth.call(null,chunk__22861_24005,i__22863_24007);a__21711__auto__.push(arg__21712__auto___24008);
{
var G__24009 = seq__22860_24004;
var G__24010 = chunk__22861_24005;
var G__24011 = count__22862_24006;
var G__24012 = (i__22863_24007 + 1);
seq__22860_24004 = G__24009;
chunk__22861_24005 = G__24010;
count__22862_24006 = G__24011;
i__22863_24007 = G__24012;
continue;
}
} else
{var temp__4092__auto___24013 = cljs.core.seq.call(null,seq__22860_24004);if(temp__4092__auto___24013)
{var seq__22860_24014__$1 = temp__4092__auto___24013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22860_24014__$1))
{var c__20293__auto___24015 = cljs.core.chunk_first.call(null,seq__22860_24014__$1);{
var G__24016 = cljs.core.chunk_rest.call(null,seq__22860_24014__$1);
var G__24017 = c__20293__auto___24015;
var G__24018 = cljs.core.count.call(null,c__20293__auto___24015);
var G__24019 = 0;
seq__22860_24004 = G__24016;
chunk__22861_24005 = G__24017;
count__22862_24006 = G__24018;
i__22863_24007 = G__24019;
continue;
}
} else
{var arg__21712__auto___24020 = cljs.core.first.call(null,seq__22860_24014__$1);a__21711__auto__.push(arg__21712__auto___24020);
{
var G__24021 = cljs.core.next.call(null,seq__22860_24014__$1);
var G__24022 = null;
var G__24023 = 0;
var G__24024 = 0;
seq__22860_24004 = G__24021;
chunk__22861_24005 = G__24022;
count__22862_24006 = G__24023;
i__22863_24007 = G__24024;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__21711__auto__);
};
var br = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__21710__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__24025){
var args__21710__auto__ = cljs.core.seq(arglist__24025);
return br__delegate(args__21710__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22868_24026 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22869_24027 = null;var count__22870_24028 = 0;var i__22871_24029 = 0;while(true){
if((i__22871_24029 < count__22870_24028))
{var arg__21712__auto___24030 = cljs.core._nth.call(null,chunk__22869_24027,i__22871_24029);a__21711__auto__.push(arg__21712__auto___24030);
{
var G__24031 = seq__22868_24026;
var G__24032 = chunk__22869_24027;
var G__24033 = count__22870_24028;
var G__24034 = (i__22871_24029 + 1);
seq__22868_24026 = G__24031;
chunk__22869_24027 = G__24032;
count__22870_24028 = G__24033;
i__22871_24029 = G__24034;
continue;
}
} else
{var temp__4092__auto___24035 = cljs.core.seq.call(null,seq__22868_24026);if(temp__4092__auto___24035)
{var seq__22868_24036__$1 = temp__4092__auto___24035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22868_24036__$1))
{var c__20293__auto___24037 = cljs.core.chunk_first.call(null,seq__22868_24036__$1);{
var G__24038 = cljs.core.chunk_rest.call(null,seq__22868_24036__$1);
var G__24039 = c__20293__auto___24037;
var G__24040 = cljs.core.count.call(null,c__20293__auto___24037);
var G__24041 = 0;
seq__22868_24026 = G__24038;
chunk__22869_24027 = G__24039;
count__22870_24028 = G__24040;
i__22871_24029 = G__24041;
continue;
}
} else
{var arg__21712__auto___24042 = cljs.core.first.call(null,seq__22868_24036__$1);a__21711__auto__.push(arg__21712__auto___24042);
{
var G__24043 = cljs.core.next.call(null,seq__22868_24036__$1);
var G__24044 = null;
var G__24045 = 0;
var G__24046 = 0;
seq__22868_24026 = G__24043;
chunk__22869_24027 = G__24044;
count__22870_24028 = G__24045;
i__22871_24029 = G__24046;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__21711__auto__);
};
var button = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__21710__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__24047){
var args__21710__auto__ = cljs.core.seq(arglist__24047);
return button__delegate(args__21710__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22876_24048 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22877_24049 = null;var count__22878_24050 = 0;var i__22879_24051 = 0;while(true){
if((i__22879_24051 < count__22878_24050))
{var arg__21712__auto___24052 = cljs.core._nth.call(null,chunk__22877_24049,i__22879_24051);a__21711__auto__.push(arg__21712__auto___24052);
{
var G__24053 = seq__22876_24048;
var G__24054 = chunk__22877_24049;
var G__24055 = count__22878_24050;
var G__24056 = (i__22879_24051 + 1);
seq__22876_24048 = G__24053;
chunk__22877_24049 = G__24054;
count__22878_24050 = G__24055;
i__22879_24051 = G__24056;
continue;
}
} else
{var temp__4092__auto___24057 = cljs.core.seq.call(null,seq__22876_24048);if(temp__4092__auto___24057)
{var seq__22876_24058__$1 = temp__4092__auto___24057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22876_24058__$1))
{var c__20293__auto___24059 = cljs.core.chunk_first.call(null,seq__22876_24058__$1);{
var G__24060 = cljs.core.chunk_rest.call(null,seq__22876_24058__$1);
var G__24061 = c__20293__auto___24059;
var G__24062 = cljs.core.count.call(null,c__20293__auto___24059);
var G__24063 = 0;
seq__22876_24048 = G__24060;
chunk__22877_24049 = G__24061;
count__22878_24050 = G__24062;
i__22879_24051 = G__24063;
continue;
}
} else
{var arg__21712__auto___24064 = cljs.core.first.call(null,seq__22876_24058__$1);a__21711__auto__.push(arg__21712__auto___24064);
{
var G__24065 = cljs.core.next.call(null,seq__22876_24058__$1);
var G__24066 = null;
var G__24067 = 0;
var G__24068 = 0;
seq__22876_24048 = G__24065;
chunk__22877_24049 = G__24066;
count__22878_24050 = G__24067;
i__22879_24051 = G__24068;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__21711__auto__);
};
var canvas = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__21710__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__24069){
var args__21710__auto__ = cljs.core.seq(arglist__24069);
return canvas__delegate(args__21710__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22884_24070 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22885_24071 = null;var count__22886_24072 = 0;var i__22887_24073 = 0;while(true){
if((i__22887_24073 < count__22886_24072))
{var arg__21712__auto___24074 = cljs.core._nth.call(null,chunk__22885_24071,i__22887_24073);a__21711__auto__.push(arg__21712__auto___24074);
{
var G__24075 = seq__22884_24070;
var G__24076 = chunk__22885_24071;
var G__24077 = count__22886_24072;
var G__24078 = (i__22887_24073 + 1);
seq__22884_24070 = G__24075;
chunk__22885_24071 = G__24076;
count__22886_24072 = G__24077;
i__22887_24073 = G__24078;
continue;
}
} else
{var temp__4092__auto___24079 = cljs.core.seq.call(null,seq__22884_24070);if(temp__4092__auto___24079)
{var seq__22884_24080__$1 = temp__4092__auto___24079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22884_24080__$1))
{var c__20293__auto___24081 = cljs.core.chunk_first.call(null,seq__22884_24080__$1);{
var G__24082 = cljs.core.chunk_rest.call(null,seq__22884_24080__$1);
var G__24083 = c__20293__auto___24081;
var G__24084 = cljs.core.count.call(null,c__20293__auto___24081);
var G__24085 = 0;
seq__22884_24070 = G__24082;
chunk__22885_24071 = G__24083;
count__22886_24072 = G__24084;
i__22887_24073 = G__24085;
continue;
}
} else
{var arg__21712__auto___24086 = cljs.core.first.call(null,seq__22884_24080__$1);a__21711__auto__.push(arg__21712__auto___24086);
{
var G__24087 = cljs.core.next.call(null,seq__22884_24080__$1);
var G__24088 = null;
var G__24089 = 0;
var G__24090 = 0;
seq__22884_24070 = G__24087;
chunk__22885_24071 = G__24088;
count__22886_24072 = G__24089;
i__22887_24073 = G__24090;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__21711__auto__);
};
var caption = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__21710__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__24091){
var args__21710__auto__ = cljs.core.seq(arglist__24091);
return caption__delegate(args__21710__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22892_24092 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22893_24093 = null;var count__22894_24094 = 0;var i__22895_24095 = 0;while(true){
if((i__22895_24095 < count__22894_24094))
{var arg__21712__auto___24096 = cljs.core._nth.call(null,chunk__22893_24093,i__22895_24095);a__21711__auto__.push(arg__21712__auto___24096);
{
var G__24097 = seq__22892_24092;
var G__24098 = chunk__22893_24093;
var G__24099 = count__22894_24094;
var G__24100 = (i__22895_24095 + 1);
seq__22892_24092 = G__24097;
chunk__22893_24093 = G__24098;
count__22894_24094 = G__24099;
i__22895_24095 = G__24100;
continue;
}
} else
{var temp__4092__auto___24101 = cljs.core.seq.call(null,seq__22892_24092);if(temp__4092__auto___24101)
{var seq__22892_24102__$1 = temp__4092__auto___24101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22892_24102__$1))
{var c__20293__auto___24103 = cljs.core.chunk_first.call(null,seq__22892_24102__$1);{
var G__24104 = cljs.core.chunk_rest.call(null,seq__22892_24102__$1);
var G__24105 = c__20293__auto___24103;
var G__24106 = cljs.core.count.call(null,c__20293__auto___24103);
var G__24107 = 0;
seq__22892_24092 = G__24104;
chunk__22893_24093 = G__24105;
count__22894_24094 = G__24106;
i__22895_24095 = G__24107;
continue;
}
} else
{var arg__21712__auto___24108 = cljs.core.first.call(null,seq__22892_24102__$1);a__21711__auto__.push(arg__21712__auto___24108);
{
var G__24109 = cljs.core.next.call(null,seq__22892_24102__$1);
var G__24110 = null;
var G__24111 = 0;
var G__24112 = 0;
seq__22892_24092 = G__24109;
chunk__22893_24093 = G__24110;
count__22894_24094 = G__24111;
i__22895_24095 = G__24112;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__21711__auto__);
};
var cite = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__21710__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__24113){
var args__21710__auto__ = cljs.core.seq(arglist__24113);
return cite__delegate(args__21710__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22900_24114 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22901_24115 = null;var count__22902_24116 = 0;var i__22903_24117 = 0;while(true){
if((i__22903_24117 < count__22902_24116))
{var arg__21712__auto___24118 = cljs.core._nth.call(null,chunk__22901_24115,i__22903_24117);a__21711__auto__.push(arg__21712__auto___24118);
{
var G__24119 = seq__22900_24114;
var G__24120 = chunk__22901_24115;
var G__24121 = count__22902_24116;
var G__24122 = (i__22903_24117 + 1);
seq__22900_24114 = G__24119;
chunk__22901_24115 = G__24120;
count__22902_24116 = G__24121;
i__22903_24117 = G__24122;
continue;
}
} else
{var temp__4092__auto___24123 = cljs.core.seq.call(null,seq__22900_24114);if(temp__4092__auto___24123)
{var seq__22900_24124__$1 = temp__4092__auto___24123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22900_24124__$1))
{var c__20293__auto___24125 = cljs.core.chunk_first.call(null,seq__22900_24124__$1);{
var G__24126 = cljs.core.chunk_rest.call(null,seq__22900_24124__$1);
var G__24127 = c__20293__auto___24125;
var G__24128 = cljs.core.count.call(null,c__20293__auto___24125);
var G__24129 = 0;
seq__22900_24114 = G__24126;
chunk__22901_24115 = G__24127;
count__22902_24116 = G__24128;
i__22903_24117 = G__24129;
continue;
}
} else
{var arg__21712__auto___24130 = cljs.core.first.call(null,seq__22900_24124__$1);a__21711__auto__.push(arg__21712__auto___24130);
{
var G__24131 = cljs.core.next.call(null,seq__22900_24124__$1);
var G__24132 = null;
var G__24133 = 0;
var G__24134 = 0;
seq__22900_24114 = G__24131;
chunk__22901_24115 = G__24132;
count__22902_24116 = G__24133;
i__22903_24117 = G__24134;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__21711__auto__);
};
var code = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__21710__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__24135){
var args__21710__auto__ = cljs.core.seq(arglist__24135);
return code__delegate(args__21710__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22908_24136 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22909_24137 = null;var count__22910_24138 = 0;var i__22911_24139 = 0;while(true){
if((i__22911_24139 < count__22910_24138))
{var arg__21712__auto___24140 = cljs.core._nth.call(null,chunk__22909_24137,i__22911_24139);a__21711__auto__.push(arg__21712__auto___24140);
{
var G__24141 = seq__22908_24136;
var G__24142 = chunk__22909_24137;
var G__24143 = count__22910_24138;
var G__24144 = (i__22911_24139 + 1);
seq__22908_24136 = G__24141;
chunk__22909_24137 = G__24142;
count__22910_24138 = G__24143;
i__22911_24139 = G__24144;
continue;
}
} else
{var temp__4092__auto___24145 = cljs.core.seq.call(null,seq__22908_24136);if(temp__4092__auto___24145)
{var seq__22908_24146__$1 = temp__4092__auto___24145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22908_24146__$1))
{var c__20293__auto___24147 = cljs.core.chunk_first.call(null,seq__22908_24146__$1);{
var G__24148 = cljs.core.chunk_rest.call(null,seq__22908_24146__$1);
var G__24149 = c__20293__auto___24147;
var G__24150 = cljs.core.count.call(null,c__20293__auto___24147);
var G__24151 = 0;
seq__22908_24136 = G__24148;
chunk__22909_24137 = G__24149;
count__22910_24138 = G__24150;
i__22911_24139 = G__24151;
continue;
}
} else
{var arg__21712__auto___24152 = cljs.core.first.call(null,seq__22908_24146__$1);a__21711__auto__.push(arg__21712__auto___24152);
{
var G__24153 = cljs.core.next.call(null,seq__22908_24146__$1);
var G__24154 = null;
var G__24155 = 0;
var G__24156 = 0;
seq__22908_24136 = G__24153;
chunk__22909_24137 = G__24154;
count__22910_24138 = G__24155;
i__22911_24139 = G__24156;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__21711__auto__);
};
var col = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__21710__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__24157){
var args__21710__auto__ = cljs.core.seq(arglist__24157);
return col__delegate(args__21710__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22916_24158 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22917_24159 = null;var count__22918_24160 = 0;var i__22919_24161 = 0;while(true){
if((i__22919_24161 < count__22918_24160))
{var arg__21712__auto___24162 = cljs.core._nth.call(null,chunk__22917_24159,i__22919_24161);a__21711__auto__.push(arg__21712__auto___24162);
{
var G__24163 = seq__22916_24158;
var G__24164 = chunk__22917_24159;
var G__24165 = count__22918_24160;
var G__24166 = (i__22919_24161 + 1);
seq__22916_24158 = G__24163;
chunk__22917_24159 = G__24164;
count__22918_24160 = G__24165;
i__22919_24161 = G__24166;
continue;
}
} else
{var temp__4092__auto___24167 = cljs.core.seq.call(null,seq__22916_24158);if(temp__4092__auto___24167)
{var seq__22916_24168__$1 = temp__4092__auto___24167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22916_24168__$1))
{var c__20293__auto___24169 = cljs.core.chunk_first.call(null,seq__22916_24168__$1);{
var G__24170 = cljs.core.chunk_rest.call(null,seq__22916_24168__$1);
var G__24171 = c__20293__auto___24169;
var G__24172 = cljs.core.count.call(null,c__20293__auto___24169);
var G__24173 = 0;
seq__22916_24158 = G__24170;
chunk__22917_24159 = G__24171;
count__22918_24160 = G__24172;
i__22919_24161 = G__24173;
continue;
}
} else
{var arg__21712__auto___24174 = cljs.core.first.call(null,seq__22916_24168__$1);a__21711__auto__.push(arg__21712__auto___24174);
{
var G__24175 = cljs.core.next.call(null,seq__22916_24168__$1);
var G__24176 = null;
var G__24177 = 0;
var G__24178 = 0;
seq__22916_24158 = G__24175;
chunk__22917_24159 = G__24176;
count__22918_24160 = G__24177;
i__22919_24161 = G__24178;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__21711__auto__);
};
var colgroup = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__21710__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__24179){
var args__21710__auto__ = cljs.core.seq(arglist__24179);
return colgroup__delegate(args__21710__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22924_24180 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22925_24181 = null;var count__22926_24182 = 0;var i__22927_24183 = 0;while(true){
if((i__22927_24183 < count__22926_24182))
{var arg__21712__auto___24184 = cljs.core._nth.call(null,chunk__22925_24181,i__22927_24183);a__21711__auto__.push(arg__21712__auto___24184);
{
var G__24185 = seq__22924_24180;
var G__24186 = chunk__22925_24181;
var G__24187 = count__22926_24182;
var G__24188 = (i__22927_24183 + 1);
seq__22924_24180 = G__24185;
chunk__22925_24181 = G__24186;
count__22926_24182 = G__24187;
i__22927_24183 = G__24188;
continue;
}
} else
{var temp__4092__auto___24189 = cljs.core.seq.call(null,seq__22924_24180);if(temp__4092__auto___24189)
{var seq__22924_24190__$1 = temp__4092__auto___24189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22924_24190__$1))
{var c__20293__auto___24191 = cljs.core.chunk_first.call(null,seq__22924_24190__$1);{
var G__24192 = cljs.core.chunk_rest.call(null,seq__22924_24190__$1);
var G__24193 = c__20293__auto___24191;
var G__24194 = cljs.core.count.call(null,c__20293__auto___24191);
var G__24195 = 0;
seq__22924_24180 = G__24192;
chunk__22925_24181 = G__24193;
count__22926_24182 = G__24194;
i__22927_24183 = G__24195;
continue;
}
} else
{var arg__21712__auto___24196 = cljs.core.first.call(null,seq__22924_24190__$1);a__21711__auto__.push(arg__21712__auto___24196);
{
var G__24197 = cljs.core.next.call(null,seq__22924_24190__$1);
var G__24198 = null;
var G__24199 = 0;
var G__24200 = 0;
seq__22924_24180 = G__24197;
chunk__22925_24181 = G__24198;
count__22926_24182 = G__24199;
i__22927_24183 = G__24200;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__21711__auto__);
};
var data = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__21710__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__24201){
var args__21710__auto__ = cljs.core.seq(arglist__24201);
return data__delegate(args__21710__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22932_24202 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22933_24203 = null;var count__22934_24204 = 0;var i__22935_24205 = 0;while(true){
if((i__22935_24205 < count__22934_24204))
{var arg__21712__auto___24206 = cljs.core._nth.call(null,chunk__22933_24203,i__22935_24205);a__21711__auto__.push(arg__21712__auto___24206);
{
var G__24207 = seq__22932_24202;
var G__24208 = chunk__22933_24203;
var G__24209 = count__22934_24204;
var G__24210 = (i__22935_24205 + 1);
seq__22932_24202 = G__24207;
chunk__22933_24203 = G__24208;
count__22934_24204 = G__24209;
i__22935_24205 = G__24210;
continue;
}
} else
{var temp__4092__auto___24211 = cljs.core.seq.call(null,seq__22932_24202);if(temp__4092__auto___24211)
{var seq__22932_24212__$1 = temp__4092__auto___24211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22932_24212__$1))
{var c__20293__auto___24213 = cljs.core.chunk_first.call(null,seq__22932_24212__$1);{
var G__24214 = cljs.core.chunk_rest.call(null,seq__22932_24212__$1);
var G__24215 = c__20293__auto___24213;
var G__24216 = cljs.core.count.call(null,c__20293__auto___24213);
var G__24217 = 0;
seq__22932_24202 = G__24214;
chunk__22933_24203 = G__24215;
count__22934_24204 = G__24216;
i__22935_24205 = G__24217;
continue;
}
} else
{var arg__21712__auto___24218 = cljs.core.first.call(null,seq__22932_24212__$1);a__21711__auto__.push(arg__21712__auto___24218);
{
var G__24219 = cljs.core.next.call(null,seq__22932_24212__$1);
var G__24220 = null;
var G__24221 = 0;
var G__24222 = 0;
seq__22932_24202 = G__24219;
chunk__22933_24203 = G__24220;
count__22934_24204 = G__24221;
i__22935_24205 = G__24222;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__21711__auto__);
};
var datalist = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__21710__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__24223){
var args__21710__auto__ = cljs.core.seq(arglist__24223);
return datalist__delegate(args__21710__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22940_24224 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22941_24225 = null;var count__22942_24226 = 0;var i__22943_24227 = 0;while(true){
if((i__22943_24227 < count__22942_24226))
{var arg__21712__auto___24228 = cljs.core._nth.call(null,chunk__22941_24225,i__22943_24227);a__21711__auto__.push(arg__21712__auto___24228);
{
var G__24229 = seq__22940_24224;
var G__24230 = chunk__22941_24225;
var G__24231 = count__22942_24226;
var G__24232 = (i__22943_24227 + 1);
seq__22940_24224 = G__24229;
chunk__22941_24225 = G__24230;
count__22942_24226 = G__24231;
i__22943_24227 = G__24232;
continue;
}
} else
{var temp__4092__auto___24233 = cljs.core.seq.call(null,seq__22940_24224);if(temp__4092__auto___24233)
{var seq__22940_24234__$1 = temp__4092__auto___24233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22940_24234__$1))
{var c__20293__auto___24235 = cljs.core.chunk_first.call(null,seq__22940_24234__$1);{
var G__24236 = cljs.core.chunk_rest.call(null,seq__22940_24234__$1);
var G__24237 = c__20293__auto___24235;
var G__24238 = cljs.core.count.call(null,c__20293__auto___24235);
var G__24239 = 0;
seq__22940_24224 = G__24236;
chunk__22941_24225 = G__24237;
count__22942_24226 = G__24238;
i__22943_24227 = G__24239;
continue;
}
} else
{var arg__21712__auto___24240 = cljs.core.first.call(null,seq__22940_24234__$1);a__21711__auto__.push(arg__21712__auto___24240);
{
var G__24241 = cljs.core.next.call(null,seq__22940_24234__$1);
var G__24242 = null;
var G__24243 = 0;
var G__24244 = 0;
seq__22940_24224 = G__24241;
chunk__22941_24225 = G__24242;
count__22942_24226 = G__24243;
i__22943_24227 = G__24244;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__21711__auto__);
};
var dd = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__21710__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__24245){
var args__21710__auto__ = cljs.core.seq(arglist__24245);
return dd__delegate(args__21710__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22948_24246 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22949_24247 = null;var count__22950_24248 = 0;var i__22951_24249 = 0;while(true){
if((i__22951_24249 < count__22950_24248))
{var arg__21712__auto___24250 = cljs.core._nth.call(null,chunk__22949_24247,i__22951_24249);a__21711__auto__.push(arg__21712__auto___24250);
{
var G__24251 = seq__22948_24246;
var G__24252 = chunk__22949_24247;
var G__24253 = count__22950_24248;
var G__24254 = (i__22951_24249 + 1);
seq__22948_24246 = G__24251;
chunk__22949_24247 = G__24252;
count__22950_24248 = G__24253;
i__22951_24249 = G__24254;
continue;
}
} else
{var temp__4092__auto___24255 = cljs.core.seq.call(null,seq__22948_24246);if(temp__4092__auto___24255)
{var seq__22948_24256__$1 = temp__4092__auto___24255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22948_24256__$1))
{var c__20293__auto___24257 = cljs.core.chunk_first.call(null,seq__22948_24256__$1);{
var G__24258 = cljs.core.chunk_rest.call(null,seq__22948_24256__$1);
var G__24259 = c__20293__auto___24257;
var G__24260 = cljs.core.count.call(null,c__20293__auto___24257);
var G__24261 = 0;
seq__22948_24246 = G__24258;
chunk__22949_24247 = G__24259;
count__22950_24248 = G__24260;
i__22951_24249 = G__24261;
continue;
}
} else
{var arg__21712__auto___24262 = cljs.core.first.call(null,seq__22948_24256__$1);a__21711__auto__.push(arg__21712__auto___24262);
{
var G__24263 = cljs.core.next.call(null,seq__22948_24256__$1);
var G__24264 = null;
var G__24265 = 0;
var G__24266 = 0;
seq__22948_24246 = G__24263;
chunk__22949_24247 = G__24264;
count__22950_24248 = G__24265;
i__22951_24249 = G__24266;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__21711__auto__);
};
var del = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__21710__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__24267){
var args__21710__auto__ = cljs.core.seq(arglist__24267);
return del__delegate(args__21710__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22956_24268 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22957_24269 = null;var count__22958_24270 = 0;var i__22959_24271 = 0;while(true){
if((i__22959_24271 < count__22958_24270))
{var arg__21712__auto___24272 = cljs.core._nth.call(null,chunk__22957_24269,i__22959_24271);a__21711__auto__.push(arg__21712__auto___24272);
{
var G__24273 = seq__22956_24268;
var G__24274 = chunk__22957_24269;
var G__24275 = count__22958_24270;
var G__24276 = (i__22959_24271 + 1);
seq__22956_24268 = G__24273;
chunk__22957_24269 = G__24274;
count__22958_24270 = G__24275;
i__22959_24271 = G__24276;
continue;
}
} else
{var temp__4092__auto___24277 = cljs.core.seq.call(null,seq__22956_24268);if(temp__4092__auto___24277)
{var seq__22956_24278__$1 = temp__4092__auto___24277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22956_24278__$1))
{var c__20293__auto___24279 = cljs.core.chunk_first.call(null,seq__22956_24278__$1);{
var G__24280 = cljs.core.chunk_rest.call(null,seq__22956_24278__$1);
var G__24281 = c__20293__auto___24279;
var G__24282 = cljs.core.count.call(null,c__20293__auto___24279);
var G__24283 = 0;
seq__22956_24268 = G__24280;
chunk__22957_24269 = G__24281;
count__22958_24270 = G__24282;
i__22959_24271 = G__24283;
continue;
}
} else
{var arg__21712__auto___24284 = cljs.core.first.call(null,seq__22956_24278__$1);a__21711__auto__.push(arg__21712__auto___24284);
{
var G__24285 = cljs.core.next.call(null,seq__22956_24278__$1);
var G__24286 = null;
var G__24287 = 0;
var G__24288 = 0;
seq__22956_24268 = G__24285;
chunk__22957_24269 = G__24286;
count__22958_24270 = G__24287;
i__22959_24271 = G__24288;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__21711__auto__);
};
var details = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__21710__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__24289){
var args__21710__auto__ = cljs.core.seq(arglist__24289);
return details__delegate(args__21710__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22964_24290 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22965_24291 = null;var count__22966_24292 = 0;var i__22967_24293 = 0;while(true){
if((i__22967_24293 < count__22966_24292))
{var arg__21712__auto___24294 = cljs.core._nth.call(null,chunk__22965_24291,i__22967_24293);a__21711__auto__.push(arg__21712__auto___24294);
{
var G__24295 = seq__22964_24290;
var G__24296 = chunk__22965_24291;
var G__24297 = count__22966_24292;
var G__24298 = (i__22967_24293 + 1);
seq__22964_24290 = G__24295;
chunk__22965_24291 = G__24296;
count__22966_24292 = G__24297;
i__22967_24293 = G__24298;
continue;
}
} else
{var temp__4092__auto___24299 = cljs.core.seq.call(null,seq__22964_24290);if(temp__4092__auto___24299)
{var seq__22964_24300__$1 = temp__4092__auto___24299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22964_24300__$1))
{var c__20293__auto___24301 = cljs.core.chunk_first.call(null,seq__22964_24300__$1);{
var G__24302 = cljs.core.chunk_rest.call(null,seq__22964_24300__$1);
var G__24303 = c__20293__auto___24301;
var G__24304 = cljs.core.count.call(null,c__20293__auto___24301);
var G__24305 = 0;
seq__22964_24290 = G__24302;
chunk__22965_24291 = G__24303;
count__22966_24292 = G__24304;
i__22967_24293 = G__24305;
continue;
}
} else
{var arg__21712__auto___24306 = cljs.core.first.call(null,seq__22964_24300__$1);a__21711__auto__.push(arg__21712__auto___24306);
{
var G__24307 = cljs.core.next.call(null,seq__22964_24300__$1);
var G__24308 = null;
var G__24309 = 0;
var G__24310 = 0;
seq__22964_24290 = G__24307;
chunk__22965_24291 = G__24308;
count__22966_24292 = G__24309;
i__22967_24293 = G__24310;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__21711__auto__);
};
var dfn = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__21710__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__24311){
var args__21710__auto__ = cljs.core.seq(arglist__24311);
return dfn__delegate(args__21710__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22972_24312 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22973_24313 = null;var count__22974_24314 = 0;var i__22975_24315 = 0;while(true){
if((i__22975_24315 < count__22974_24314))
{var arg__21712__auto___24316 = cljs.core._nth.call(null,chunk__22973_24313,i__22975_24315);a__21711__auto__.push(arg__21712__auto___24316);
{
var G__24317 = seq__22972_24312;
var G__24318 = chunk__22973_24313;
var G__24319 = count__22974_24314;
var G__24320 = (i__22975_24315 + 1);
seq__22972_24312 = G__24317;
chunk__22973_24313 = G__24318;
count__22974_24314 = G__24319;
i__22975_24315 = G__24320;
continue;
}
} else
{var temp__4092__auto___24321 = cljs.core.seq.call(null,seq__22972_24312);if(temp__4092__auto___24321)
{var seq__22972_24322__$1 = temp__4092__auto___24321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22972_24322__$1))
{var c__20293__auto___24323 = cljs.core.chunk_first.call(null,seq__22972_24322__$1);{
var G__24324 = cljs.core.chunk_rest.call(null,seq__22972_24322__$1);
var G__24325 = c__20293__auto___24323;
var G__24326 = cljs.core.count.call(null,c__20293__auto___24323);
var G__24327 = 0;
seq__22972_24312 = G__24324;
chunk__22973_24313 = G__24325;
count__22974_24314 = G__24326;
i__22975_24315 = G__24327;
continue;
}
} else
{var arg__21712__auto___24328 = cljs.core.first.call(null,seq__22972_24322__$1);a__21711__auto__.push(arg__21712__auto___24328);
{
var G__24329 = cljs.core.next.call(null,seq__22972_24322__$1);
var G__24330 = null;
var G__24331 = 0;
var G__24332 = 0;
seq__22972_24312 = G__24329;
chunk__22973_24313 = G__24330;
count__22974_24314 = G__24331;
i__22975_24315 = G__24332;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__21711__auto__);
};
var div = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__21710__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__24333){
var args__21710__auto__ = cljs.core.seq(arglist__24333);
return div__delegate(args__21710__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22980_24334 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22981_24335 = null;var count__22982_24336 = 0;var i__22983_24337 = 0;while(true){
if((i__22983_24337 < count__22982_24336))
{var arg__21712__auto___24338 = cljs.core._nth.call(null,chunk__22981_24335,i__22983_24337);a__21711__auto__.push(arg__21712__auto___24338);
{
var G__24339 = seq__22980_24334;
var G__24340 = chunk__22981_24335;
var G__24341 = count__22982_24336;
var G__24342 = (i__22983_24337 + 1);
seq__22980_24334 = G__24339;
chunk__22981_24335 = G__24340;
count__22982_24336 = G__24341;
i__22983_24337 = G__24342;
continue;
}
} else
{var temp__4092__auto___24343 = cljs.core.seq.call(null,seq__22980_24334);if(temp__4092__auto___24343)
{var seq__22980_24344__$1 = temp__4092__auto___24343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22980_24344__$1))
{var c__20293__auto___24345 = cljs.core.chunk_first.call(null,seq__22980_24344__$1);{
var G__24346 = cljs.core.chunk_rest.call(null,seq__22980_24344__$1);
var G__24347 = c__20293__auto___24345;
var G__24348 = cljs.core.count.call(null,c__20293__auto___24345);
var G__24349 = 0;
seq__22980_24334 = G__24346;
chunk__22981_24335 = G__24347;
count__22982_24336 = G__24348;
i__22983_24337 = G__24349;
continue;
}
} else
{var arg__21712__auto___24350 = cljs.core.first.call(null,seq__22980_24344__$1);a__21711__auto__.push(arg__21712__auto___24350);
{
var G__24351 = cljs.core.next.call(null,seq__22980_24344__$1);
var G__24352 = null;
var G__24353 = 0;
var G__24354 = 0;
seq__22980_24334 = G__24351;
chunk__22981_24335 = G__24352;
count__22982_24336 = G__24353;
i__22983_24337 = G__24354;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__21711__auto__);
};
var dl = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__21710__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__24355){
var args__21710__auto__ = cljs.core.seq(arglist__24355);
return dl__delegate(args__21710__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22988_24356 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22989_24357 = null;var count__22990_24358 = 0;var i__22991_24359 = 0;while(true){
if((i__22991_24359 < count__22990_24358))
{var arg__21712__auto___24360 = cljs.core._nth.call(null,chunk__22989_24357,i__22991_24359);a__21711__auto__.push(arg__21712__auto___24360);
{
var G__24361 = seq__22988_24356;
var G__24362 = chunk__22989_24357;
var G__24363 = count__22990_24358;
var G__24364 = (i__22991_24359 + 1);
seq__22988_24356 = G__24361;
chunk__22989_24357 = G__24362;
count__22990_24358 = G__24363;
i__22991_24359 = G__24364;
continue;
}
} else
{var temp__4092__auto___24365 = cljs.core.seq.call(null,seq__22988_24356);if(temp__4092__auto___24365)
{var seq__22988_24366__$1 = temp__4092__auto___24365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22988_24366__$1))
{var c__20293__auto___24367 = cljs.core.chunk_first.call(null,seq__22988_24366__$1);{
var G__24368 = cljs.core.chunk_rest.call(null,seq__22988_24366__$1);
var G__24369 = c__20293__auto___24367;
var G__24370 = cljs.core.count.call(null,c__20293__auto___24367);
var G__24371 = 0;
seq__22988_24356 = G__24368;
chunk__22989_24357 = G__24369;
count__22990_24358 = G__24370;
i__22991_24359 = G__24371;
continue;
}
} else
{var arg__21712__auto___24372 = cljs.core.first.call(null,seq__22988_24366__$1);a__21711__auto__.push(arg__21712__auto___24372);
{
var G__24373 = cljs.core.next.call(null,seq__22988_24366__$1);
var G__24374 = null;
var G__24375 = 0;
var G__24376 = 0;
seq__22988_24356 = G__24373;
chunk__22989_24357 = G__24374;
count__22990_24358 = G__24375;
i__22991_24359 = G__24376;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__21711__auto__);
};
var dt = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__21710__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__24377){
var args__21710__auto__ = cljs.core.seq(arglist__24377);
return dt__delegate(args__21710__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__22996_24378 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__22997_24379 = null;var count__22998_24380 = 0;var i__22999_24381 = 0;while(true){
if((i__22999_24381 < count__22998_24380))
{var arg__21712__auto___24382 = cljs.core._nth.call(null,chunk__22997_24379,i__22999_24381);a__21711__auto__.push(arg__21712__auto___24382);
{
var G__24383 = seq__22996_24378;
var G__24384 = chunk__22997_24379;
var G__24385 = count__22998_24380;
var G__24386 = (i__22999_24381 + 1);
seq__22996_24378 = G__24383;
chunk__22997_24379 = G__24384;
count__22998_24380 = G__24385;
i__22999_24381 = G__24386;
continue;
}
} else
{var temp__4092__auto___24387 = cljs.core.seq.call(null,seq__22996_24378);if(temp__4092__auto___24387)
{var seq__22996_24388__$1 = temp__4092__auto___24387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22996_24388__$1))
{var c__20293__auto___24389 = cljs.core.chunk_first.call(null,seq__22996_24388__$1);{
var G__24390 = cljs.core.chunk_rest.call(null,seq__22996_24388__$1);
var G__24391 = c__20293__auto___24389;
var G__24392 = cljs.core.count.call(null,c__20293__auto___24389);
var G__24393 = 0;
seq__22996_24378 = G__24390;
chunk__22997_24379 = G__24391;
count__22998_24380 = G__24392;
i__22999_24381 = G__24393;
continue;
}
} else
{var arg__21712__auto___24394 = cljs.core.first.call(null,seq__22996_24388__$1);a__21711__auto__.push(arg__21712__auto___24394);
{
var G__24395 = cljs.core.next.call(null,seq__22996_24388__$1);
var G__24396 = null;
var G__24397 = 0;
var G__24398 = 0;
seq__22996_24378 = G__24395;
chunk__22997_24379 = G__24396;
count__22998_24380 = G__24397;
i__22999_24381 = G__24398;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__21711__auto__);
};
var em = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__21710__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__24399){
var args__21710__auto__ = cljs.core.seq(arglist__24399);
return em__delegate(args__21710__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23012_24400 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23013_24401 = null;var count__23014_24402 = 0;var i__23015_24403 = 0;while(true){
if((i__23015_24403 < count__23014_24402))
{var arg__21712__auto___24404 = cljs.core._nth.call(null,chunk__23013_24401,i__23015_24403);a__21711__auto__.push(arg__21712__auto___24404);
{
var G__24405 = seq__23012_24400;
var G__24406 = chunk__23013_24401;
var G__24407 = count__23014_24402;
var G__24408 = (i__23015_24403 + 1);
seq__23012_24400 = G__24405;
chunk__23013_24401 = G__24406;
count__23014_24402 = G__24407;
i__23015_24403 = G__24408;
continue;
}
} else
{var temp__4092__auto___24409 = cljs.core.seq.call(null,seq__23012_24400);if(temp__4092__auto___24409)
{var seq__23012_24410__$1 = temp__4092__auto___24409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23012_24410__$1))
{var c__20293__auto___24411 = cljs.core.chunk_first.call(null,seq__23012_24410__$1);{
var G__24412 = cljs.core.chunk_rest.call(null,seq__23012_24410__$1);
var G__24413 = c__20293__auto___24411;
var G__24414 = cljs.core.count.call(null,c__20293__auto___24411);
var G__24415 = 0;
seq__23012_24400 = G__24412;
chunk__23013_24401 = G__24413;
count__23014_24402 = G__24414;
i__23015_24403 = G__24415;
continue;
}
} else
{var arg__21712__auto___24416 = cljs.core.first.call(null,seq__23012_24410__$1);a__21711__auto__.push(arg__21712__auto___24416);
{
var G__24417 = cljs.core.next.call(null,seq__23012_24410__$1);
var G__24418 = null;
var G__24419 = 0;
var G__24420 = 0;
seq__23012_24400 = G__24417;
chunk__23013_24401 = G__24418;
count__23014_24402 = G__24419;
i__23015_24403 = G__24420;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__21711__auto__);
};
var embed = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__21710__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__24421){
var args__21710__auto__ = cljs.core.seq(arglist__24421);
return embed__delegate(args__21710__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23020_24422 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23021_24423 = null;var count__23022_24424 = 0;var i__23023_24425 = 0;while(true){
if((i__23023_24425 < count__23022_24424))
{var arg__21712__auto___24426 = cljs.core._nth.call(null,chunk__23021_24423,i__23023_24425);a__21711__auto__.push(arg__21712__auto___24426);
{
var G__24427 = seq__23020_24422;
var G__24428 = chunk__23021_24423;
var G__24429 = count__23022_24424;
var G__24430 = (i__23023_24425 + 1);
seq__23020_24422 = G__24427;
chunk__23021_24423 = G__24428;
count__23022_24424 = G__24429;
i__23023_24425 = G__24430;
continue;
}
} else
{var temp__4092__auto___24431 = cljs.core.seq.call(null,seq__23020_24422);if(temp__4092__auto___24431)
{var seq__23020_24432__$1 = temp__4092__auto___24431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23020_24432__$1))
{var c__20293__auto___24433 = cljs.core.chunk_first.call(null,seq__23020_24432__$1);{
var G__24434 = cljs.core.chunk_rest.call(null,seq__23020_24432__$1);
var G__24435 = c__20293__auto___24433;
var G__24436 = cljs.core.count.call(null,c__20293__auto___24433);
var G__24437 = 0;
seq__23020_24422 = G__24434;
chunk__23021_24423 = G__24435;
count__23022_24424 = G__24436;
i__23023_24425 = G__24437;
continue;
}
} else
{var arg__21712__auto___24438 = cljs.core.first.call(null,seq__23020_24432__$1);a__21711__auto__.push(arg__21712__auto___24438);
{
var G__24439 = cljs.core.next.call(null,seq__23020_24432__$1);
var G__24440 = null;
var G__24441 = 0;
var G__24442 = 0;
seq__23020_24422 = G__24439;
chunk__23021_24423 = G__24440;
count__23022_24424 = G__24441;
i__23023_24425 = G__24442;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__21711__auto__);
};
var fieldset = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__21710__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__24443){
var args__21710__auto__ = cljs.core.seq(arglist__24443);
return fieldset__delegate(args__21710__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23028_24444 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23029_24445 = null;var count__23030_24446 = 0;var i__23031_24447 = 0;while(true){
if((i__23031_24447 < count__23030_24446))
{var arg__21712__auto___24448 = cljs.core._nth.call(null,chunk__23029_24445,i__23031_24447);a__21711__auto__.push(arg__21712__auto___24448);
{
var G__24449 = seq__23028_24444;
var G__24450 = chunk__23029_24445;
var G__24451 = count__23030_24446;
var G__24452 = (i__23031_24447 + 1);
seq__23028_24444 = G__24449;
chunk__23029_24445 = G__24450;
count__23030_24446 = G__24451;
i__23031_24447 = G__24452;
continue;
}
} else
{var temp__4092__auto___24453 = cljs.core.seq.call(null,seq__23028_24444);if(temp__4092__auto___24453)
{var seq__23028_24454__$1 = temp__4092__auto___24453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23028_24454__$1))
{var c__20293__auto___24455 = cljs.core.chunk_first.call(null,seq__23028_24454__$1);{
var G__24456 = cljs.core.chunk_rest.call(null,seq__23028_24454__$1);
var G__24457 = c__20293__auto___24455;
var G__24458 = cljs.core.count.call(null,c__20293__auto___24455);
var G__24459 = 0;
seq__23028_24444 = G__24456;
chunk__23029_24445 = G__24457;
count__23030_24446 = G__24458;
i__23031_24447 = G__24459;
continue;
}
} else
{var arg__21712__auto___24460 = cljs.core.first.call(null,seq__23028_24454__$1);a__21711__auto__.push(arg__21712__auto___24460);
{
var G__24461 = cljs.core.next.call(null,seq__23028_24454__$1);
var G__24462 = null;
var G__24463 = 0;
var G__24464 = 0;
seq__23028_24444 = G__24461;
chunk__23029_24445 = G__24462;
count__23030_24446 = G__24463;
i__23031_24447 = G__24464;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__21711__auto__);
};
var figcaption = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__21710__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__24465){
var args__21710__auto__ = cljs.core.seq(arglist__24465);
return figcaption__delegate(args__21710__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23036_24466 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23037_24467 = null;var count__23038_24468 = 0;var i__23039_24469 = 0;while(true){
if((i__23039_24469 < count__23038_24468))
{var arg__21712__auto___24470 = cljs.core._nth.call(null,chunk__23037_24467,i__23039_24469);a__21711__auto__.push(arg__21712__auto___24470);
{
var G__24471 = seq__23036_24466;
var G__24472 = chunk__23037_24467;
var G__24473 = count__23038_24468;
var G__24474 = (i__23039_24469 + 1);
seq__23036_24466 = G__24471;
chunk__23037_24467 = G__24472;
count__23038_24468 = G__24473;
i__23039_24469 = G__24474;
continue;
}
} else
{var temp__4092__auto___24475 = cljs.core.seq.call(null,seq__23036_24466);if(temp__4092__auto___24475)
{var seq__23036_24476__$1 = temp__4092__auto___24475;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23036_24476__$1))
{var c__20293__auto___24477 = cljs.core.chunk_first.call(null,seq__23036_24476__$1);{
var G__24478 = cljs.core.chunk_rest.call(null,seq__23036_24476__$1);
var G__24479 = c__20293__auto___24477;
var G__24480 = cljs.core.count.call(null,c__20293__auto___24477);
var G__24481 = 0;
seq__23036_24466 = G__24478;
chunk__23037_24467 = G__24479;
count__23038_24468 = G__24480;
i__23039_24469 = G__24481;
continue;
}
} else
{var arg__21712__auto___24482 = cljs.core.first.call(null,seq__23036_24476__$1);a__21711__auto__.push(arg__21712__auto___24482);
{
var G__24483 = cljs.core.next.call(null,seq__23036_24476__$1);
var G__24484 = null;
var G__24485 = 0;
var G__24486 = 0;
seq__23036_24466 = G__24483;
chunk__23037_24467 = G__24484;
count__23038_24468 = G__24485;
i__23039_24469 = G__24486;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__21711__auto__);
};
var figure = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__21710__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__24487){
var args__21710__auto__ = cljs.core.seq(arglist__24487);
return figure__delegate(args__21710__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23044_24488 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23045_24489 = null;var count__23046_24490 = 0;var i__23047_24491 = 0;while(true){
if((i__23047_24491 < count__23046_24490))
{var arg__21712__auto___24492 = cljs.core._nth.call(null,chunk__23045_24489,i__23047_24491);a__21711__auto__.push(arg__21712__auto___24492);
{
var G__24493 = seq__23044_24488;
var G__24494 = chunk__23045_24489;
var G__24495 = count__23046_24490;
var G__24496 = (i__23047_24491 + 1);
seq__23044_24488 = G__24493;
chunk__23045_24489 = G__24494;
count__23046_24490 = G__24495;
i__23047_24491 = G__24496;
continue;
}
} else
{var temp__4092__auto___24497 = cljs.core.seq.call(null,seq__23044_24488);if(temp__4092__auto___24497)
{var seq__23044_24498__$1 = temp__4092__auto___24497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23044_24498__$1))
{var c__20293__auto___24499 = cljs.core.chunk_first.call(null,seq__23044_24498__$1);{
var G__24500 = cljs.core.chunk_rest.call(null,seq__23044_24498__$1);
var G__24501 = c__20293__auto___24499;
var G__24502 = cljs.core.count.call(null,c__20293__auto___24499);
var G__24503 = 0;
seq__23044_24488 = G__24500;
chunk__23045_24489 = G__24501;
count__23046_24490 = G__24502;
i__23047_24491 = G__24503;
continue;
}
} else
{var arg__21712__auto___24504 = cljs.core.first.call(null,seq__23044_24498__$1);a__21711__auto__.push(arg__21712__auto___24504);
{
var G__24505 = cljs.core.next.call(null,seq__23044_24498__$1);
var G__24506 = null;
var G__24507 = 0;
var G__24508 = 0;
seq__23044_24488 = G__24505;
chunk__23045_24489 = G__24506;
count__23046_24490 = G__24507;
i__23047_24491 = G__24508;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__21711__auto__);
};
var footer = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__21710__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__24509){
var args__21710__auto__ = cljs.core.seq(arglist__24509);
return footer__delegate(args__21710__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23052_24510 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23053_24511 = null;var count__23054_24512 = 0;var i__23055_24513 = 0;while(true){
if((i__23055_24513 < count__23054_24512))
{var arg__21712__auto___24514 = cljs.core._nth.call(null,chunk__23053_24511,i__23055_24513);a__21711__auto__.push(arg__21712__auto___24514);
{
var G__24515 = seq__23052_24510;
var G__24516 = chunk__23053_24511;
var G__24517 = count__23054_24512;
var G__24518 = (i__23055_24513 + 1);
seq__23052_24510 = G__24515;
chunk__23053_24511 = G__24516;
count__23054_24512 = G__24517;
i__23055_24513 = G__24518;
continue;
}
} else
{var temp__4092__auto___24519 = cljs.core.seq.call(null,seq__23052_24510);if(temp__4092__auto___24519)
{var seq__23052_24520__$1 = temp__4092__auto___24519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23052_24520__$1))
{var c__20293__auto___24521 = cljs.core.chunk_first.call(null,seq__23052_24520__$1);{
var G__24522 = cljs.core.chunk_rest.call(null,seq__23052_24520__$1);
var G__24523 = c__20293__auto___24521;
var G__24524 = cljs.core.count.call(null,c__20293__auto___24521);
var G__24525 = 0;
seq__23052_24510 = G__24522;
chunk__23053_24511 = G__24523;
count__23054_24512 = G__24524;
i__23055_24513 = G__24525;
continue;
}
} else
{var arg__21712__auto___24526 = cljs.core.first.call(null,seq__23052_24520__$1);a__21711__auto__.push(arg__21712__auto___24526);
{
var G__24527 = cljs.core.next.call(null,seq__23052_24520__$1);
var G__24528 = null;
var G__24529 = 0;
var G__24530 = 0;
seq__23052_24510 = G__24527;
chunk__23053_24511 = G__24528;
count__23054_24512 = G__24529;
i__23055_24513 = G__24530;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__21711__auto__);
};
var form = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__21710__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__24531){
var args__21710__auto__ = cljs.core.seq(arglist__24531);
return form__delegate(args__21710__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23060_24532 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23061_24533 = null;var count__23062_24534 = 0;var i__23063_24535 = 0;while(true){
if((i__23063_24535 < count__23062_24534))
{var arg__21712__auto___24536 = cljs.core._nth.call(null,chunk__23061_24533,i__23063_24535);a__21711__auto__.push(arg__21712__auto___24536);
{
var G__24537 = seq__23060_24532;
var G__24538 = chunk__23061_24533;
var G__24539 = count__23062_24534;
var G__24540 = (i__23063_24535 + 1);
seq__23060_24532 = G__24537;
chunk__23061_24533 = G__24538;
count__23062_24534 = G__24539;
i__23063_24535 = G__24540;
continue;
}
} else
{var temp__4092__auto___24541 = cljs.core.seq.call(null,seq__23060_24532);if(temp__4092__auto___24541)
{var seq__23060_24542__$1 = temp__4092__auto___24541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23060_24542__$1))
{var c__20293__auto___24543 = cljs.core.chunk_first.call(null,seq__23060_24542__$1);{
var G__24544 = cljs.core.chunk_rest.call(null,seq__23060_24542__$1);
var G__24545 = c__20293__auto___24543;
var G__24546 = cljs.core.count.call(null,c__20293__auto___24543);
var G__24547 = 0;
seq__23060_24532 = G__24544;
chunk__23061_24533 = G__24545;
count__23062_24534 = G__24546;
i__23063_24535 = G__24547;
continue;
}
} else
{var arg__21712__auto___24548 = cljs.core.first.call(null,seq__23060_24542__$1);a__21711__auto__.push(arg__21712__auto___24548);
{
var G__24549 = cljs.core.next.call(null,seq__23060_24542__$1);
var G__24550 = null;
var G__24551 = 0;
var G__24552 = 0;
seq__23060_24532 = G__24549;
chunk__23061_24533 = G__24550;
count__23062_24534 = G__24551;
i__23063_24535 = G__24552;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__21711__auto__);
};
var h1 = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__21710__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__24553){
var args__21710__auto__ = cljs.core.seq(arglist__24553);
return h1__delegate(args__21710__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23068_24554 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23069_24555 = null;var count__23070_24556 = 0;var i__23071_24557 = 0;while(true){
if((i__23071_24557 < count__23070_24556))
{var arg__21712__auto___24558 = cljs.core._nth.call(null,chunk__23069_24555,i__23071_24557);a__21711__auto__.push(arg__21712__auto___24558);
{
var G__24559 = seq__23068_24554;
var G__24560 = chunk__23069_24555;
var G__24561 = count__23070_24556;
var G__24562 = (i__23071_24557 + 1);
seq__23068_24554 = G__24559;
chunk__23069_24555 = G__24560;
count__23070_24556 = G__24561;
i__23071_24557 = G__24562;
continue;
}
} else
{var temp__4092__auto___24563 = cljs.core.seq.call(null,seq__23068_24554);if(temp__4092__auto___24563)
{var seq__23068_24564__$1 = temp__4092__auto___24563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23068_24564__$1))
{var c__20293__auto___24565 = cljs.core.chunk_first.call(null,seq__23068_24564__$1);{
var G__24566 = cljs.core.chunk_rest.call(null,seq__23068_24564__$1);
var G__24567 = c__20293__auto___24565;
var G__24568 = cljs.core.count.call(null,c__20293__auto___24565);
var G__24569 = 0;
seq__23068_24554 = G__24566;
chunk__23069_24555 = G__24567;
count__23070_24556 = G__24568;
i__23071_24557 = G__24569;
continue;
}
} else
{var arg__21712__auto___24570 = cljs.core.first.call(null,seq__23068_24564__$1);a__21711__auto__.push(arg__21712__auto___24570);
{
var G__24571 = cljs.core.next.call(null,seq__23068_24564__$1);
var G__24572 = null;
var G__24573 = 0;
var G__24574 = 0;
seq__23068_24554 = G__24571;
chunk__23069_24555 = G__24572;
count__23070_24556 = G__24573;
i__23071_24557 = G__24574;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__21711__auto__);
};
var h2 = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__21710__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__24575){
var args__21710__auto__ = cljs.core.seq(arglist__24575);
return h2__delegate(args__21710__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23076_24576 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23077_24577 = null;var count__23078_24578 = 0;var i__23079_24579 = 0;while(true){
if((i__23079_24579 < count__23078_24578))
{var arg__21712__auto___24580 = cljs.core._nth.call(null,chunk__23077_24577,i__23079_24579);a__21711__auto__.push(arg__21712__auto___24580);
{
var G__24581 = seq__23076_24576;
var G__24582 = chunk__23077_24577;
var G__24583 = count__23078_24578;
var G__24584 = (i__23079_24579 + 1);
seq__23076_24576 = G__24581;
chunk__23077_24577 = G__24582;
count__23078_24578 = G__24583;
i__23079_24579 = G__24584;
continue;
}
} else
{var temp__4092__auto___24585 = cljs.core.seq.call(null,seq__23076_24576);if(temp__4092__auto___24585)
{var seq__23076_24586__$1 = temp__4092__auto___24585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23076_24586__$1))
{var c__20293__auto___24587 = cljs.core.chunk_first.call(null,seq__23076_24586__$1);{
var G__24588 = cljs.core.chunk_rest.call(null,seq__23076_24586__$1);
var G__24589 = c__20293__auto___24587;
var G__24590 = cljs.core.count.call(null,c__20293__auto___24587);
var G__24591 = 0;
seq__23076_24576 = G__24588;
chunk__23077_24577 = G__24589;
count__23078_24578 = G__24590;
i__23079_24579 = G__24591;
continue;
}
} else
{var arg__21712__auto___24592 = cljs.core.first.call(null,seq__23076_24586__$1);a__21711__auto__.push(arg__21712__auto___24592);
{
var G__24593 = cljs.core.next.call(null,seq__23076_24586__$1);
var G__24594 = null;
var G__24595 = 0;
var G__24596 = 0;
seq__23076_24576 = G__24593;
chunk__23077_24577 = G__24594;
count__23078_24578 = G__24595;
i__23079_24579 = G__24596;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__21711__auto__);
};
var h3 = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__21710__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__24597){
var args__21710__auto__ = cljs.core.seq(arglist__24597);
return h3__delegate(args__21710__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23084_24598 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23085_24599 = null;var count__23086_24600 = 0;var i__23087_24601 = 0;while(true){
if((i__23087_24601 < count__23086_24600))
{var arg__21712__auto___24602 = cljs.core._nth.call(null,chunk__23085_24599,i__23087_24601);a__21711__auto__.push(arg__21712__auto___24602);
{
var G__24603 = seq__23084_24598;
var G__24604 = chunk__23085_24599;
var G__24605 = count__23086_24600;
var G__24606 = (i__23087_24601 + 1);
seq__23084_24598 = G__24603;
chunk__23085_24599 = G__24604;
count__23086_24600 = G__24605;
i__23087_24601 = G__24606;
continue;
}
} else
{var temp__4092__auto___24607 = cljs.core.seq.call(null,seq__23084_24598);if(temp__4092__auto___24607)
{var seq__23084_24608__$1 = temp__4092__auto___24607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23084_24608__$1))
{var c__20293__auto___24609 = cljs.core.chunk_first.call(null,seq__23084_24608__$1);{
var G__24610 = cljs.core.chunk_rest.call(null,seq__23084_24608__$1);
var G__24611 = c__20293__auto___24609;
var G__24612 = cljs.core.count.call(null,c__20293__auto___24609);
var G__24613 = 0;
seq__23084_24598 = G__24610;
chunk__23085_24599 = G__24611;
count__23086_24600 = G__24612;
i__23087_24601 = G__24613;
continue;
}
} else
{var arg__21712__auto___24614 = cljs.core.first.call(null,seq__23084_24608__$1);a__21711__auto__.push(arg__21712__auto___24614);
{
var G__24615 = cljs.core.next.call(null,seq__23084_24608__$1);
var G__24616 = null;
var G__24617 = 0;
var G__24618 = 0;
seq__23084_24598 = G__24615;
chunk__23085_24599 = G__24616;
count__23086_24600 = G__24617;
i__23087_24601 = G__24618;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__21711__auto__);
};
var h4 = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__21710__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__24619){
var args__21710__auto__ = cljs.core.seq(arglist__24619);
return h4__delegate(args__21710__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23092_24620 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23093_24621 = null;var count__23094_24622 = 0;var i__23095_24623 = 0;while(true){
if((i__23095_24623 < count__23094_24622))
{var arg__21712__auto___24624 = cljs.core._nth.call(null,chunk__23093_24621,i__23095_24623);a__21711__auto__.push(arg__21712__auto___24624);
{
var G__24625 = seq__23092_24620;
var G__24626 = chunk__23093_24621;
var G__24627 = count__23094_24622;
var G__24628 = (i__23095_24623 + 1);
seq__23092_24620 = G__24625;
chunk__23093_24621 = G__24626;
count__23094_24622 = G__24627;
i__23095_24623 = G__24628;
continue;
}
} else
{var temp__4092__auto___24629 = cljs.core.seq.call(null,seq__23092_24620);if(temp__4092__auto___24629)
{var seq__23092_24630__$1 = temp__4092__auto___24629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23092_24630__$1))
{var c__20293__auto___24631 = cljs.core.chunk_first.call(null,seq__23092_24630__$1);{
var G__24632 = cljs.core.chunk_rest.call(null,seq__23092_24630__$1);
var G__24633 = c__20293__auto___24631;
var G__24634 = cljs.core.count.call(null,c__20293__auto___24631);
var G__24635 = 0;
seq__23092_24620 = G__24632;
chunk__23093_24621 = G__24633;
count__23094_24622 = G__24634;
i__23095_24623 = G__24635;
continue;
}
} else
{var arg__21712__auto___24636 = cljs.core.first.call(null,seq__23092_24630__$1);a__21711__auto__.push(arg__21712__auto___24636);
{
var G__24637 = cljs.core.next.call(null,seq__23092_24630__$1);
var G__24638 = null;
var G__24639 = 0;
var G__24640 = 0;
seq__23092_24620 = G__24637;
chunk__23093_24621 = G__24638;
count__23094_24622 = G__24639;
i__23095_24623 = G__24640;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__21711__auto__);
};
var h5 = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__21710__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__24641){
var args__21710__auto__ = cljs.core.seq(arglist__24641);
return h5__delegate(args__21710__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23100_24642 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23101_24643 = null;var count__23102_24644 = 0;var i__23103_24645 = 0;while(true){
if((i__23103_24645 < count__23102_24644))
{var arg__21712__auto___24646 = cljs.core._nth.call(null,chunk__23101_24643,i__23103_24645);a__21711__auto__.push(arg__21712__auto___24646);
{
var G__24647 = seq__23100_24642;
var G__24648 = chunk__23101_24643;
var G__24649 = count__23102_24644;
var G__24650 = (i__23103_24645 + 1);
seq__23100_24642 = G__24647;
chunk__23101_24643 = G__24648;
count__23102_24644 = G__24649;
i__23103_24645 = G__24650;
continue;
}
} else
{var temp__4092__auto___24651 = cljs.core.seq.call(null,seq__23100_24642);if(temp__4092__auto___24651)
{var seq__23100_24652__$1 = temp__4092__auto___24651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23100_24652__$1))
{var c__20293__auto___24653 = cljs.core.chunk_first.call(null,seq__23100_24652__$1);{
var G__24654 = cljs.core.chunk_rest.call(null,seq__23100_24652__$1);
var G__24655 = c__20293__auto___24653;
var G__24656 = cljs.core.count.call(null,c__20293__auto___24653);
var G__24657 = 0;
seq__23100_24642 = G__24654;
chunk__23101_24643 = G__24655;
count__23102_24644 = G__24656;
i__23103_24645 = G__24657;
continue;
}
} else
{var arg__21712__auto___24658 = cljs.core.first.call(null,seq__23100_24652__$1);a__21711__auto__.push(arg__21712__auto___24658);
{
var G__24659 = cljs.core.next.call(null,seq__23100_24652__$1);
var G__24660 = null;
var G__24661 = 0;
var G__24662 = 0;
seq__23100_24642 = G__24659;
chunk__23101_24643 = G__24660;
count__23102_24644 = G__24661;
i__23103_24645 = G__24662;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__21711__auto__);
};
var h6 = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__21710__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__24663){
var args__21710__auto__ = cljs.core.seq(arglist__24663);
return h6__delegate(args__21710__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23108_24664 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23109_24665 = null;var count__23110_24666 = 0;var i__23111_24667 = 0;while(true){
if((i__23111_24667 < count__23110_24666))
{var arg__21712__auto___24668 = cljs.core._nth.call(null,chunk__23109_24665,i__23111_24667);a__21711__auto__.push(arg__21712__auto___24668);
{
var G__24669 = seq__23108_24664;
var G__24670 = chunk__23109_24665;
var G__24671 = count__23110_24666;
var G__24672 = (i__23111_24667 + 1);
seq__23108_24664 = G__24669;
chunk__23109_24665 = G__24670;
count__23110_24666 = G__24671;
i__23111_24667 = G__24672;
continue;
}
} else
{var temp__4092__auto___24673 = cljs.core.seq.call(null,seq__23108_24664);if(temp__4092__auto___24673)
{var seq__23108_24674__$1 = temp__4092__auto___24673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23108_24674__$1))
{var c__20293__auto___24675 = cljs.core.chunk_first.call(null,seq__23108_24674__$1);{
var G__24676 = cljs.core.chunk_rest.call(null,seq__23108_24674__$1);
var G__24677 = c__20293__auto___24675;
var G__24678 = cljs.core.count.call(null,c__20293__auto___24675);
var G__24679 = 0;
seq__23108_24664 = G__24676;
chunk__23109_24665 = G__24677;
count__23110_24666 = G__24678;
i__23111_24667 = G__24679;
continue;
}
} else
{var arg__21712__auto___24680 = cljs.core.first.call(null,seq__23108_24674__$1);a__21711__auto__.push(arg__21712__auto___24680);
{
var G__24681 = cljs.core.next.call(null,seq__23108_24674__$1);
var G__24682 = null;
var G__24683 = 0;
var G__24684 = 0;
seq__23108_24664 = G__24681;
chunk__23109_24665 = G__24682;
count__23110_24666 = G__24683;
i__23111_24667 = G__24684;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__21711__auto__);
};
var head = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__21710__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__24685){
var args__21710__auto__ = cljs.core.seq(arglist__24685);
return head__delegate(args__21710__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23116_24686 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23117_24687 = null;var count__23118_24688 = 0;var i__23119_24689 = 0;while(true){
if((i__23119_24689 < count__23118_24688))
{var arg__21712__auto___24690 = cljs.core._nth.call(null,chunk__23117_24687,i__23119_24689);a__21711__auto__.push(arg__21712__auto___24690);
{
var G__24691 = seq__23116_24686;
var G__24692 = chunk__23117_24687;
var G__24693 = count__23118_24688;
var G__24694 = (i__23119_24689 + 1);
seq__23116_24686 = G__24691;
chunk__23117_24687 = G__24692;
count__23118_24688 = G__24693;
i__23119_24689 = G__24694;
continue;
}
} else
{var temp__4092__auto___24695 = cljs.core.seq.call(null,seq__23116_24686);if(temp__4092__auto___24695)
{var seq__23116_24696__$1 = temp__4092__auto___24695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23116_24696__$1))
{var c__20293__auto___24697 = cljs.core.chunk_first.call(null,seq__23116_24696__$1);{
var G__24698 = cljs.core.chunk_rest.call(null,seq__23116_24696__$1);
var G__24699 = c__20293__auto___24697;
var G__24700 = cljs.core.count.call(null,c__20293__auto___24697);
var G__24701 = 0;
seq__23116_24686 = G__24698;
chunk__23117_24687 = G__24699;
count__23118_24688 = G__24700;
i__23119_24689 = G__24701;
continue;
}
} else
{var arg__21712__auto___24702 = cljs.core.first.call(null,seq__23116_24696__$1);a__21711__auto__.push(arg__21712__auto___24702);
{
var G__24703 = cljs.core.next.call(null,seq__23116_24696__$1);
var G__24704 = null;
var G__24705 = 0;
var G__24706 = 0;
seq__23116_24686 = G__24703;
chunk__23117_24687 = G__24704;
count__23118_24688 = G__24705;
i__23119_24689 = G__24706;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__21711__auto__);
};
var header = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__21710__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__24707){
var args__21710__auto__ = cljs.core.seq(arglist__24707);
return header__delegate(args__21710__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23124_24708 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23125_24709 = null;var count__23126_24710 = 0;var i__23127_24711 = 0;while(true){
if((i__23127_24711 < count__23126_24710))
{var arg__21712__auto___24712 = cljs.core._nth.call(null,chunk__23125_24709,i__23127_24711);a__21711__auto__.push(arg__21712__auto___24712);
{
var G__24713 = seq__23124_24708;
var G__24714 = chunk__23125_24709;
var G__24715 = count__23126_24710;
var G__24716 = (i__23127_24711 + 1);
seq__23124_24708 = G__24713;
chunk__23125_24709 = G__24714;
count__23126_24710 = G__24715;
i__23127_24711 = G__24716;
continue;
}
} else
{var temp__4092__auto___24717 = cljs.core.seq.call(null,seq__23124_24708);if(temp__4092__auto___24717)
{var seq__23124_24718__$1 = temp__4092__auto___24717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23124_24718__$1))
{var c__20293__auto___24719 = cljs.core.chunk_first.call(null,seq__23124_24718__$1);{
var G__24720 = cljs.core.chunk_rest.call(null,seq__23124_24718__$1);
var G__24721 = c__20293__auto___24719;
var G__24722 = cljs.core.count.call(null,c__20293__auto___24719);
var G__24723 = 0;
seq__23124_24708 = G__24720;
chunk__23125_24709 = G__24721;
count__23126_24710 = G__24722;
i__23127_24711 = G__24723;
continue;
}
} else
{var arg__21712__auto___24724 = cljs.core.first.call(null,seq__23124_24718__$1);a__21711__auto__.push(arg__21712__auto___24724);
{
var G__24725 = cljs.core.next.call(null,seq__23124_24718__$1);
var G__24726 = null;
var G__24727 = 0;
var G__24728 = 0;
seq__23124_24708 = G__24725;
chunk__23125_24709 = G__24726;
count__23126_24710 = G__24727;
i__23127_24711 = G__24728;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__21711__auto__);
};
var hr = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__21710__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__24729){
var args__21710__auto__ = cljs.core.seq(arglist__24729);
return hr__delegate(args__21710__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23132_24730 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23133_24731 = null;var count__23134_24732 = 0;var i__23135_24733 = 0;while(true){
if((i__23135_24733 < count__23134_24732))
{var arg__21712__auto___24734 = cljs.core._nth.call(null,chunk__23133_24731,i__23135_24733);a__21711__auto__.push(arg__21712__auto___24734);
{
var G__24735 = seq__23132_24730;
var G__24736 = chunk__23133_24731;
var G__24737 = count__23134_24732;
var G__24738 = (i__23135_24733 + 1);
seq__23132_24730 = G__24735;
chunk__23133_24731 = G__24736;
count__23134_24732 = G__24737;
i__23135_24733 = G__24738;
continue;
}
} else
{var temp__4092__auto___24739 = cljs.core.seq.call(null,seq__23132_24730);if(temp__4092__auto___24739)
{var seq__23132_24740__$1 = temp__4092__auto___24739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23132_24740__$1))
{var c__20293__auto___24741 = cljs.core.chunk_first.call(null,seq__23132_24740__$1);{
var G__24742 = cljs.core.chunk_rest.call(null,seq__23132_24740__$1);
var G__24743 = c__20293__auto___24741;
var G__24744 = cljs.core.count.call(null,c__20293__auto___24741);
var G__24745 = 0;
seq__23132_24730 = G__24742;
chunk__23133_24731 = G__24743;
count__23134_24732 = G__24744;
i__23135_24733 = G__24745;
continue;
}
} else
{var arg__21712__auto___24746 = cljs.core.first.call(null,seq__23132_24740__$1);a__21711__auto__.push(arg__21712__auto___24746);
{
var G__24747 = cljs.core.next.call(null,seq__23132_24740__$1);
var G__24748 = null;
var G__24749 = 0;
var G__24750 = 0;
seq__23132_24730 = G__24747;
chunk__23133_24731 = G__24748;
count__23134_24732 = G__24749;
i__23135_24733 = G__24750;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__21711__auto__);
};
var html = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__21710__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__24751){
var args__21710__auto__ = cljs.core.seq(arglist__24751);
return html__delegate(args__21710__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23140_24752 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23141_24753 = null;var count__23142_24754 = 0;var i__23143_24755 = 0;while(true){
if((i__23143_24755 < count__23142_24754))
{var arg__21712__auto___24756 = cljs.core._nth.call(null,chunk__23141_24753,i__23143_24755);a__21711__auto__.push(arg__21712__auto___24756);
{
var G__24757 = seq__23140_24752;
var G__24758 = chunk__23141_24753;
var G__24759 = count__23142_24754;
var G__24760 = (i__23143_24755 + 1);
seq__23140_24752 = G__24757;
chunk__23141_24753 = G__24758;
count__23142_24754 = G__24759;
i__23143_24755 = G__24760;
continue;
}
} else
{var temp__4092__auto___24761 = cljs.core.seq.call(null,seq__23140_24752);if(temp__4092__auto___24761)
{var seq__23140_24762__$1 = temp__4092__auto___24761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23140_24762__$1))
{var c__20293__auto___24763 = cljs.core.chunk_first.call(null,seq__23140_24762__$1);{
var G__24764 = cljs.core.chunk_rest.call(null,seq__23140_24762__$1);
var G__24765 = c__20293__auto___24763;
var G__24766 = cljs.core.count.call(null,c__20293__auto___24763);
var G__24767 = 0;
seq__23140_24752 = G__24764;
chunk__23141_24753 = G__24765;
count__23142_24754 = G__24766;
i__23143_24755 = G__24767;
continue;
}
} else
{var arg__21712__auto___24768 = cljs.core.first.call(null,seq__23140_24762__$1);a__21711__auto__.push(arg__21712__auto___24768);
{
var G__24769 = cljs.core.next.call(null,seq__23140_24762__$1);
var G__24770 = null;
var G__24771 = 0;
var G__24772 = 0;
seq__23140_24752 = G__24769;
chunk__23141_24753 = G__24770;
count__23142_24754 = G__24771;
i__23143_24755 = G__24772;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__21711__auto__);
};
var i = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__21710__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__24773){
var args__21710__auto__ = cljs.core.seq(arglist__24773);
return i__delegate(args__21710__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23148_24774 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23149_24775 = null;var count__23150_24776 = 0;var i__23151_24777 = 0;while(true){
if((i__23151_24777 < count__23150_24776))
{var arg__21712__auto___24778 = cljs.core._nth.call(null,chunk__23149_24775,i__23151_24777);a__21711__auto__.push(arg__21712__auto___24778);
{
var G__24779 = seq__23148_24774;
var G__24780 = chunk__23149_24775;
var G__24781 = count__23150_24776;
var G__24782 = (i__23151_24777 + 1);
seq__23148_24774 = G__24779;
chunk__23149_24775 = G__24780;
count__23150_24776 = G__24781;
i__23151_24777 = G__24782;
continue;
}
} else
{var temp__4092__auto___24783 = cljs.core.seq.call(null,seq__23148_24774);if(temp__4092__auto___24783)
{var seq__23148_24784__$1 = temp__4092__auto___24783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23148_24784__$1))
{var c__20293__auto___24785 = cljs.core.chunk_first.call(null,seq__23148_24784__$1);{
var G__24786 = cljs.core.chunk_rest.call(null,seq__23148_24784__$1);
var G__24787 = c__20293__auto___24785;
var G__24788 = cljs.core.count.call(null,c__20293__auto___24785);
var G__24789 = 0;
seq__23148_24774 = G__24786;
chunk__23149_24775 = G__24787;
count__23150_24776 = G__24788;
i__23151_24777 = G__24789;
continue;
}
} else
{var arg__21712__auto___24790 = cljs.core.first.call(null,seq__23148_24784__$1);a__21711__auto__.push(arg__21712__auto___24790);
{
var G__24791 = cljs.core.next.call(null,seq__23148_24784__$1);
var G__24792 = null;
var G__24793 = 0;
var G__24794 = 0;
seq__23148_24774 = G__24791;
chunk__23149_24775 = G__24792;
count__23150_24776 = G__24793;
i__23151_24777 = G__24794;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__21711__auto__);
};
var iframe = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__21710__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__24795){
var args__21710__auto__ = cljs.core.seq(arglist__24795);
return iframe__delegate(args__21710__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23156_24796 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23157_24797 = null;var count__23158_24798 = 0;var i__23159_24799 = 0;while(true){
if((i__23159_24799 < count__23158_24798))
{var arg__21712__auto___24800 = cljs.core._nth.call(null,chunk__23157_24797,i__23159_24799);a__21711__auto__.push(arg__21712__auto___24800);
{
var G__24801 = seq__23156_24796;
var G__24802 = chunk__23157_24797;
var G__24803 = count__23158_24798;
var G__24804 = (i__23159_24799 + 1);
seq__23156_24796 = G__24801;
chunk__23157_24797 = G__24802;
count__23158_24798 = G__24803;
i__23159_24799 = G__24804;
continue;
}
} else
{var temp__4092__auto___24805 = cljs.core.seq.call(null,seq__23156_24796);if(temp__4092__auto___24805)
{var seq__23156_24806__$1 = temp__4092__auto___24805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23156_24806__$1))
{var c__20293__auto___24807 = cljs.core.chunk_first.call(null,seq__23156_24806__$1);{
var G__24808 = cljs.core.chunk_rest.call(null,seq__23156_24806__$1);
var G__24809 = c__20293__auto___24807;
var G__24810 = cljs.core.count.call(null,c__20293__auto___24807);
var G__24811 = 0;
seq__23156_24796 = G__24808;
chunk__23157_24797 = G__24809;
count__23158_24798 = G__24810;
i__23159_24799 = G__24811;
continue;
}
} else
{var arg__21712__auto___24812 = cljs.core.first.call(null,seq__23156_24806__$1);a__21711__auto__.push(arg__21712__auto___24812);
{
var G__24813 = cljs.core.next.call(null,seq__23156_24806__$1);
var G__24814 = null;
var G__24815 = 0;
var G__24816 = 0;
seq__23156_24796 = G__24813;
chunk__23157_24797 = G__24814;
count__23158_24798 = G__24815;
i__23159_24799 = G__24816;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__21711__auto__);
};
var img = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__21710__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__24817){
var args__21710__auto__ = cljs.core.seq(arglist__24817);
return img__delegate(args__21710__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23164_24818 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23165_24819 = null;var count__23166_24820 = 0;var i__23167_24821 = 0;while(true){
if((i__23167_24821 < count__23166_24820))
{var arg__21712__auto___24822 = cljs.core._nth.call(null,chunk__23165_24819,i__23167_24821);a__21711__auto__.push(arg__21712__auto___24822);
{
var G__24823 = seq__23164_24818;
var G__24824 = chunk__23165_24819;
var G__24825 = count__23166_24820;
var G__24826 = (i__23167_24821 + 1);
seq__23164_24818 = G__24823;
chunk__23165_24819 = G__24824;
count__23166_24820 = G__24825;
i__23167_24821 = G__24826;
continue;
}
} else
{var temp__4092__auto___24827 = cljs.core.seq.call(null,seq__23164_24818);if(temp__4092__auto___24827)
{var seq__23164_24828__$1 = temp__4092__auto___24827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23164_24828__$1))
{var c__20293__auto___24829 = cljs.core.chunk_first.call(null,seq__23164_24828__$1);{
var G__24830 = cljs.core.chunk_rest.call(null,seq__23164_24828__$1);
var G__24831 = c__20293__auto___24829;
var G__24832 = cljs.core.count.call(null,c__20293__auto___24829);
var G__24833 = 0;
seq__23164_24818 = G__24830;
chunk__23165_24819 = G__24831;
count__23166_24820 = G__24832;
i__23167_24821 = G__24833;
continue;
}
} else
{var arg__21712__auto___24834 = cljs.core.first.call(null,seq__23164_24828__$1);a__21711__auto__.push(arg__21712__auto___24834);
{
var G__24835 = cljs.core.next.call(null,seq__23164_24828__$1);
var G__24836 = null;
var G__24837 = 0;
var G__24838 = 0;
seq__23164_24818 = G__24835;
chunk__23165_24819 = G__24836;
count__23166_24820 = G__24837;
i__23167_24821 = G__24838;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__21711__auto__);
};
var input = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__21710__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__24839){
var args__21710__auto__ = cljs.core.seq(arglist__24839);
return input__delegate(args__21710__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23172_24840 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23173_24841 = null;var count__23174_24842 = 0;var i__23175_24843 = 0;while(true){
if((i__23175_24843 < count__23174_24842))
{var arg__21712__auto___24844 = cljs.core._nth.call(null,chunk__23173_24841,i__23175_24843);a__21711__auto__.push(arg__21712__auto___24844);
{
var G__24845 = seq__23172_24840;
var G__24846 = chunk__23173_24841;
var G__24847 = count__23174_24842;
var G__24848 = (i__23175_24843 + 1);
seq__23172_24840 = G__24845;
chunk__23173_24841 = G__24846;
count__23174_24842 = G__24847;
i__23175_24843 = G__24848;
continue;
}
} else
{var temp__4092__auto___24849 = cljs.core.seq.call(null,seq__23172_24840);if(temp__4092__auto___24849)
{var seq__23172_24850__$1 = temp__4092__auto___24849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23172_24850__$1))
{var c__20293__auto___24851 = cljs.core.chunk_first.call(null,seq__23172_24850__$1);{
var G__24852 = cljs.core.chunk_rest.call(null,seq__23172_24850__$1);
var G__24853 = c__20293__auto___24851;
var G__24854 = cljs.core.count.call(null,c__20293__auto___24851);
var G__24855 = 0;
seq__23172_24840 = G__24852;
chunk__23173_24841 = G__24853;
count__23174_24842 = G__24854;
i__23175_24843 = G__24855;
continue;
}
} else
{var arg__21712__auto___24856 = cljs.core.first.call(null,seq__23172_24850__$1);a__21711__auto__.push(arg__21712__auto___24856);
{
var G__24857 = cljs.core.next.call(null,seq__23172_24850__$1);
var G__24858 = null;
var G__24859 = 0;
var G__24860 = 0;
seq__23172_24840 = G__24857;
chunk__23173_24841 = G__24858;
count__23174_24842 = G__24859;
i__23175_24843 = G__24860;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__21711__auto__);
};
var ins = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__21710__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__24861){
var args__21710__auto__ = cljs.core.seq(arglist__24861);
return ins__delegate(args__21710__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23180_24862 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23181_24863 = null;var count__23182_24864 = 0;var i__23183_24865 = 0;while(true){
if((i__23183_24865 < count__23182_24864))
{var arg__21712__auto___24866 = cljs.core._nth.call(null,chunk__23181_24863,i__23183_24865);a__21711__auto__.push(arg__21712__auto___24866);
{
var G__24867 = seq__23180_24862;
var G__24868 = chunk__23181_24863;
var G__24869 = count__23182_24864;
var G__24870 = (i__23183_24865 + 1);
seq__23180_24862 = G__24867;
chunk__23181_24863 = G__24868;
count__23182_24864 = G__24869;
i__23183_24865 = G__24870;
continue;
}
} else
{var temp__4092__auto___24871 = cljs.core.seq.call(null,seq__23180_24862);if(temp__4092__auto___24871)
{var seq__23180_24872__$1 = temp__4092__auto___24871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23180_24872__$1))
{var c__20293__auto___24873 = cljs.core.chunk_first.call(null,seq__23180_24872__$1);{
var G__24874 = cljs.core.chunk_rest.call(null,seq__23180_24872__$1);
var G__24875 = c__20293__auto___24873;
var G__24876 = cljs.core.count.call(null,c__20293__auto___24873);
var G__24877 = 0;
seq__23180_24862 = G__24874;
chunk__23181_24863 = G__24875;
count__23182_24864 = G__24876;
i__23183_24865 = G__24877;
continue;
}
} else
{var arg__21712__auto___24878 = cljs.core.first.call(null,seq__23180_24872__$1);a__21711__auto__.push(arg__21712__auto___24878);
{
var G__24879 = cljs.core.next.call(null,seq__23180_24872__$1);
var G__24880 = null;
var G__24881 = 0;
var G__24882 = 0;
seq__23180_24862 = G__24879;
chunk__23181_24863 = G__24880;
count__23182_24864 = G__24881;
i__23183_24865 = G__24882;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__21711__auto__);
};
var kbd = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__21710__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__24883){
var args__21710__auto__ = cljs.core.seq(arglist__24883);
return kbd__delegate(args__21710__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23188_24884 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23189_24885 = null;var count__23190_24886 = 0;var i__23191_24887 = 0;while(true){
if((i__23191_24887 < count__23190_24886))
{var arg__21712__auto___24888 = cljs.core._nth.call(null,chunk__23189_24885,i__23191_24887);a__21711__auto__.push(arg__21712__auto___24888);
{
var G__24889 = seq__23188_24884;
var G__24890 = chunk__23189_24885;
var G__24891 = count__23190_24886;
var G__24892 = (i__23191_24887 + 1);
seq__23188_24884 = G__24889;
chunk__23189_24885 = G__24890;
count__23190_24886 = G__24891;
i__23191_24887 = G__24892;
continue;
}
} else
{var temp__4092__auto___24893 = cljs.core.seq.call(null,seq__23188_24884);if(temp__4092__auto___24893)
{var seq__23188_24894__$1 = temp__4092__auto___24893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23188_24894__$1))
{var c__20293__auto___24895 = cljs.core.chunk_first.call(null,seq__23188_24894__$1);{
var G__24896 = cljs.core.chunk_rest.call(null,seq__23188_24894__$1);
var G__24897 = c__20293__auto___24895;
var G__24898 = cljs.core.count.call(null,c__20293__auto___24895);
var G__24899 = 0;
seq__23188_24884 = G__24896;
chunk__23189_24885 = G__24897;
count__23190_24886 = G__24898;
i__23191_24887 = G__24899;
continue;
}
} else
{var arg__21712__auto___24900 = cljs.core.first.call(null,seq__23188_24894__$1);a__21711__auto__.push(arg__21712__auto___24900);
{
var G__24901 = cljs.core.next.call(null,seq__23188_24894__$1);
var G__24902 = null;
var G__24903 = 0;
var G__24904 = 0;
seq__23188_24884 = G__24901;
chunk__23189_24885 = G__24902;
count__23190_24886 = G__24903;
i__23191_24887 = G__24904;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__21711__auto__);
};
var keygen = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__21710__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__24905){
var args__21710__auto__ = cljs.core.seq(arglist__24905);
return keygen__delegate(args__21710__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23196_24906 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23197_24907 = null;var count__23198_24908 = 0;var i__23199_24909 = 0;while(true){
if((i__23199_24909 < count__23198_24908))
{var arg__21712__auto___24910 = cljs.core._nth.call(null,chunk__23197_24907,i__23199_24909);a__21711__auto__.push(arg__21712__auto___24910);
{
var G__24911 = seq__23196_24906;
var G__24912 = chunk__23197_24907;
var G__24913 = count__23198_24908;
var G__24914 = (i__23199_24909 + 1);
seq__23196_24906 = G__24911;
chunk__23197_24907 = G__24912;
count__23198_24908 = G__24913;
i__23199_24909 = G__24914;
continue;
}
} else
{var temp__4092__auto___24915 = cljs.core.seq.call(null,seq__23196_24906);if(temp__4092__auto___24915)
{var seq__23196_24916__$1 = temp__4092__auto___24915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23196_24916__$1))
{var c__20293__auto___24917 = cljs.core.chunk_first.call(null,seq__23196_24916__$1);{
var G__24918 = cljs.core.chunk_rest.call(null,seq__23196_24916__$1);
var G__24919 = c__20293__auto___24917;
var G__24920 = cljs.core.count.call(null,c__20293__auto___24917);
var G__24921 = 0;
seq__23196_24906 = G__24918;
chunk__23197_24907 = G__24919;
count__23198_24908 = G__24920;
i__23199_24909 = G__24921;
continue;
}
} else
{var arg__21712__auto___24922 = cljs.core.first.call(null,seq__23196_24916__$1);a__21711__auto__.push(arg__21712__auto___24922);
{
var G__24923 = cljs.core.next.call(null,seq__23196_24916__$1);
var G__24924 = null;
var G__24925 = 0;
var G__24926 = 0;
seq__23196_24906 = G__24923;
chunk__23197_24907 = G__24924;
count__23198_24908 = G__24925;
i__23199_24909 = G__24926;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__21711__auto__);
};
var label = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__21710__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__24927){
var args__21710__auto__ = cljs.core.seq(arglist__24927);
return label__delegate(args__21710__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23204_24928 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23205_24929 = null;var count__23206_24930 = 0;var i__23207_24931 = 0;while(true){
if((i__23207_24931 < count__23206_24930))
{var arg__21712__auto___24932 = cljs.core._nth.call(null,chunk__23205_24929,i__23207_24931);a__21711__auto__.push(arg__21712__auto___24932);
{
var G__24933 = seq__23204_24928;
var G__24934 = chunk__23205_24929;
var G__24935 = count__23206_24930;
var G__24936 = (i__23207_24931 + 1);
seq__23204_24928 = G__24933;
chunk__23205_24929 = G__24934;
count__23206_24930 = G__24935;
i__23207_24931 = G__24936;
continue;
}
} else
{var temp__4092__auto___24937 = cljs.core.seq.call(null,seq__23204_24928);if(temp__4092__auto___24937)
{var seq__23204_24938__$1 = temp__4092__auto___24937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23204_24938__$1))
{var c__20293__auto___24939 = cljs.core.chunk_first.call(null,seq__23204_24938__$1);{
var G__24940 = cljs.core.chunk_rest.call(null,seq__23204_24938__$1);
var G__24941 = c__20293__auto___24939;
var G__24942 = cljs.core.count.call(null,c__20293__auto___24939);
var G__24943 = 0;
seq__23204_24928 = G__24940;
chunk__23205_24929 = G__24941;
count__23206_24930 = G__24942;
i__23207_24931 = G__24943;
continue;
}
} else
{var arg__21712__auto___24944 = cljs.core.first.call(null,seq__23204_24938__$1);a__21711__auto__.push(arg__21712__auto___24944);
{
var G__24945 = cljs.core.next.call(null,seq__23204_24938__$1);
var G__24946 = null;
var G__24947 = 0;
var G__24948 = 0;
seq__23204_24928 = G__24945;
chunk__23205_24929 = G__24946;
count__23206_24930 = G__24947;
i__23207_24931 = G__24948;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__21711__auto__);
};
var legend = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__21710__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__24949){
var args__21710__auto__ = cljs.core.seq(arglist__24949);
return legend__delegate(args__21710__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23212_24950 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23213_24951 = null;var count__23214_24952 = 0;var i__23215_24953 = 0;while(true){
if((i__23215_24953 < count__23214_24952))
{var arg__21712__auto___24954 = cljs.core._nth.call(null,chunk__23213_24951,i__23215_24953);a__21711__auto__.push(arg__21712__auto___24954);
{
var G__24955 = seq__23212_24950;
var G__24956 = chunk__23213_24951;
var G__24957 = count__23214_24952;
var G__24958 = (i__23215_24953 + 1);
seq__23212_24950 = G__24955;
chunk__23213_24951 = G__24956;
count__23214_24952 = G__24957;
i__23215_24953 = G__24958;
continue;
}
} else
{var temp__4092__auto___24959 = cljs.core.seq.call(null,seq__23212_24950);if(temp__4092__auto___24959)
{var seq__23212_24960__$1 = temp__4092__auto___24959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23212_24960__$1))
{var c__20293__auto___24961 = cljs.core.chunk_first.call(null,seq__23212_24960__$1);{
var G__24962 = cljs.core.chunk_rest.call(null,seq__23212_24960__$1);
var G__24963 = c__20293__auto___24961;
var G__24964 = cljs.core.count.call(null,c__20293__auto___24961);
var G__24965 = 0;
seq__23212_24950 = G__24962;
chunk__23213_24951 = G__24963;
count__23214_24952 = G__24964;
i__23215_24953 = G__24965;
continue;
}
} else
{var arg__21712__auto___24966 = cljs.core.first.call(null,seq__23212_24960__$1);a__21711__auto__.push(arg__21712__auto___24966);
{
var G__24967 = cljs.core.next.call(null,seq__23212_24960__$1);
var G__24968 = null;
var G__24969 = 0;
var G__24970 = 0;
seq__23212_24950 = G__24967;
chunk__23213_24951 = G__24968;
count__23214_24952 = G__24969;
i__23215_24953 = G__24970;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__21711__auto__);
};
var li = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__21710__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__24971){
var args__21710__auto__ = cljs.core.seq(arglist__24971);
return li__delegate(args__21710__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23220_24972 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23221_24973 = null;var count__23222_24974 = 0;var i__23223_24975 = 0;while(true){
if((i__23223_24975 < count__23222_24974))
{var arg__21712__auto___24976 = cljs.core._nth.call(null,chunk__23221_24973,i__23223_24975);a__21711__auto__.push(arg__21712__auto___24976);
{
var G__24977 = seq__23220_24972;
var G__24978 = chunk__23221_24973;
var G__24979 = count__23222_24974;
var G__24980 = (i__23223_24975 + 1);
seq__23220_24972 = G__24977;
chunk__23221_24973 = G__24978;
count__23222_24974 = G__24979;
i__23223_24975 = G__24980;
continue;
}
} else
{var temp__4092__auto___24981 = cljs.core.seq.call(null,seq__23220_24972);if(temp__4092__auto___24981)
{var seq__23220_24982__$1 = temp__4092__auto___24981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23220_24982__$1))
{var c__20293__auto___24983 = cljs.core.chunk_first.call(null,seq__23220_24982__$1);{
var G__24984 = cljs.core.chunk_rest.call(null,seq__23220_24982__$1);
var G__24985 = c__20293__auto___24983;
var G__24986 = cljs.core.count.call(null,c__20293__auto___24983);
var G__24987 = 0;
seq__23220_24972 = G__24984;
chunk__23221_24973 = G__24985;
count__23222_24974 = G__24986;
i__23223_24975 = G__24987;
continue;
}
} else
{var arg__21712__auto___24988 = cljs.core.first.call(null,seq__23220_24982__$1);a__21711__auto__.push(arg__21712__auto___24988);
{
var G__24989 = cljs.core.next.call(null,seq__23220_24982__$1);
var G__24990 = null;
var G__24991 = 0;
var G__24992 = 0;
seq__23220_24972 = G__24989;
chunk__23221_24973 = G__24990;
count__23222_24974 = G__24991;
i__23223_24975 = G__24992;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__21711__auto__);
};
var link = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__21710__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__24993){
var args__21710__auto__ = cljs.core.seq(arglist__24993);
return link__delegate(args__21710__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23228_24994 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23229_24995 = null;var count__23230_24996 = 0;var i__23231_24997 = 0;while(true){
if((i__23231_24997 < count__23230_24996))
{var arg__21712__auto___24998 = cljs.core._nth.call(null,chunk__23229_24995,i__23231_24997);a__21711__auto__.push(arg__21712__auto___24998);
{
var G__24999 = seq__23228_24994;
var G__25000 = chunk__23229_24995;
var G__25001 = count__23230_24996;
var G__25002 = (i__23231_24997 + 1);
seq__23228_24994 = G__24999;
chunk__23229_24995 = G__25000;
count__23230_24996 = G__25001;
i__23231_24997 = G__25002;
continue;
}
} else
{var temp__4092__auto___25003 = cljs.core.seq.call(null,seq__23228_24994);if(temp__4092__auto___25003)
{var seq__23228_25004__$1 = temp__4092__auto___25003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23228_25004__$1))
{var c__20293__auto___25005 = cljs.core.chunk_first.call(null,seq__23228_25004__$1);{
var G__25006 = cljs.core.chunk_rest.call(null,seq__23228_25004__$1);
var G__25007 = c__20293__auto___25005;
var G__25008 = cljs.core.count.call(null,c__20293__auto___25005);
var G__25009 = 0;
seq__23228_24994 = G__25006;
chunk__23229_24995 = G__25007;
count__23230_24996 = G__25008;
i__23231_24997 = G__25009;
continue;
}
} else
{var arg__21712__auto___25010 = cljs.core.first.call(null,seq__23228_25004__$1);a__21711__auto__.push(arg__21712__auto___25010);
{
var G__25011 = cljs.core.next.call(null,seq__23228_25004__$1);
var G__25012 = null;
var G__25013 = 0;
var G__25014 = 0;
seq__23228_24994 = G__25011;
chunk__23229_24995 = G__25012;
count__23230_24996 = G__25013;
i__23231_24997 = G__25014;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__21711__auto__);
};
var main = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__21710__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__25015){
var args__21710__auto__ = cljs.core.seq(arglist__25015);
return main__delegate(args__21710__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23236_25016 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23237_25017 = null;var count__23238_25018 = 0;var i__23239_25019 = 0;while(true){
if((i__23239_25019 < count__23238_25018))
{var arg__21712__auto___25020 = cljs.core._nth.call(null,chunk__23237_25017,i__23239_25019);a__21711__auto__.push(arg__21712__auto___25020);
{
var G__25021 = seq__23236_25016;
var G__25022 = chunk__23237_25017;
var G__25023 = count__23238_25018;
var G__25024 = (i__23239_25019 + 1);
seq__23236_25016 = G__25021;
chunk__23237_25017 = G__25022;
count__23238_25018 = G__25023;
i__23239_25019 = G__25024;
continue;
}
} else
{var temp__4092__auto___25025 = cljs.core.seq.call(null,seq__23236_25016);if(temp__4092__auto___25025)
{var seq__23236_25026__$1 = temp__4092__auto___25025;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23236_25026__$1))
{var c__20293__auto___25027 = cljs.core.chunk_first.call(null,seq__23236_25026__$1);{
var G__25028 = cljs.core.chunk_rest.call(null,seq__23236_25026__$1);
var G__25029 = c__20293__auto___25027;
var G__25030 = cljs.core.count.call(null,c__20293__auto___25027);
var G__25031 = 0;
seq__23236_25016 = G__25028;
chunk__23237_25017 = G__25029;
count__23238_25018 = G__25030;
i__23239_25019 = G__25031;
continue;
}
} else
{var arg__21712__auto___25032 = cljs.core.first.call(null,seq__23236_25026__$1);a__21711__auto__.push(arg__21712__auto___25032);
{
var G__25033 = cljs.core.next.call(null,seq__23236_25026__$1);
var G__25034 = null;
var G__25035 = 0;
var G__25036 = 0;
seq__23236_25016 = G__25033;
chunk__23237_25017 = G__25034;
count__23238_25018 = G__25035;
i__23239_25019 = G__25036;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__21711__auto__);
};
var map = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__21710__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__25037){
var args__21710__auto__ = cljs.core.seq(arglist__25037);
return map__delegate(args__21710__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23244_25038 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23245_25039 = null;var count__23246_25040 = 0;var i__23247_25041 = 0;while(true){
if((i__23247_25041 < count__23246_25040))
{var arg__21712__auto___25042 = cljs.core._nth.call(null,chunk__23245_25039,i__23247_25041);a__21711__auto__.push(arg__21712__auto___25042);
{
var G__25043 = seq__23244_25038;
var G__25044 = chunk__23245_25039;
var G__25045 = count__23246_25040;
var G__25046 = (i__23247_25041 + 1);
seq__23244_25038 = G__25043;
chunk__23245_25039 = G__25044;
count__23246_25040 = G__25045;
i__23247_25041 = G__25046;
continue;
}
} else
{var temp__4092__auto___25047 = cljs.core.seq.call(null,seq__23244_25038);if(temp__4092__auto___25047)
{var seq__23244_25048__$1 = temp__4092__auto___25047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23244_25048__$1))
{var c__20293__auto___25049 = cljs.core.chunk_first.call(null,seq__23244_25048__$1);{
var G__25050 = cljs.core.chunk_rest.call(null,seq__23244_25048__$1);
var G__25051 = c__20293__auto___25049;
var G__25052 = cljs.core.count.call(null,c__20293__auto___25049);
var G__25053 = 0;
seq__23244_25038 = G__25050;
chunk__23245_25039 = G__25051;
count__23246_25040 = G__25052;
i__23247_25041 = G__25053;
continue;
}
} else
{var arg__21712__auto___25054 = cljs.core.first.call(null,seq__23244_25048__$1);a__21711__auto__.push(arg__21712__auto___25054);
{
var G__25055 = cljs.core.next.call(null,seq__23244_25048__$1);
var G__25056 = null;
var G__25057 = 0;
var G__25058 = 0;
seq__23244_25038 = G__25055;
chunk__23245_25039 = G__25056;
count__23246_25040 = G__25057;
i__23247_25041 = G__25058;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__21711__auto__);
};
var mark = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__21710__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__25059){
var args__21710__auto__ = cljs.core.seq(arglist__25059);
return mark__delegate(args__21710__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23252_25060 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23253_25061 = null;var count__23254_25062 = 0;var i__23255_25063 = 0;while(true){
if((i__23255_25063 < count__23254_25062))
{var arg__21712__auto___25064 = cljs.core._nth.call(null,chunk__23253_25061,i__23255_25063);a__21711__auto__.push(arg__21712__auto___25064);
{
var G__25065 = seq__23252_25060;
var G__25066 = chunk__23253_25061;
var G__25067 = count__23254_25062;
var G__25068 = (i__23255_25063 + 1);
seq__23252_25060 = G__25065;
chunk__23253_25061 = G__25066;
count__23254_25062 = G__25067;
i__23255_25063 = G__25068;
continue;
}
} else
{var temp__4092__auto___25069 = cljs.core.seq.call(null,seq__23252_25060);if(temp__4092__auto___25069)
{var seq__23252_25070__$1 = temp__4092__auto___25069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23252_25070__$1))
{var c__20293__auto___25071 = cljs.core.chunk_first.call(null,seq__23252_25070__$1);{
var G__25072 = cljs.core.chunk_rest.call(null,seq__23252_25070__$1);
var G__25073 = c__20293__auto___25071;
var G__25074 = cljs.core.count.call(null,c__20293__auto___25071);
var G__25075 = 0;
seq__23252_25060 = G__25072;
chunk__23253_25061 = G__25073;
count__23254_25062 = G__25074;
i__23255_25063 = G__25075;
continue;
}
} else
{var arg__21712__auto___25076 = cljs.core.first.call(null,seq__23252_25070__$1);a__21711__auto__.push(arg__21712__auto___25076);
{
var G__25077 = cljs.core.next.call(null,seq__23252_25070__$1);
var G__25078 = null;
var G__25079 = 0;
var G__25080 = 0;
seq__23252_25060 = G__25077;
chunk__23253_25061 = G__25078;
count__23254_25062 = G__25079;
i__23255_25063 = G__25080;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__21711__auto__);
};
var menu = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__21710__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__25081){
var args__21710__auto__ = cljs.core.seq(arglist__25081);
return menu__delegate(args__21710__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23260_25082 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23261_25083 = null;var count__23262_25084 = 0;var i__23263_25085 = 0;while(true){
if((i__23263_25085 < count__23262_25084))
{var arg__21712__auto___25086 = cljs.core._nth.call(null,chunk__23261_25083,i__23263_25085);a__21711__auto__.push(arg__21712__auto___25086);
{
var G__25087 = seq__23260_25082;
var G__25088 = chunk__23261_25083;
var G__25089 = count__23262_25084;
var G__25090 = (i__23263_25085 + 1);
seq__23260_25082 = G__25087;
chunk__23261_25083 = G__25088;
count__23262_25084 = G__25089;
i__23263_25085 = G__25090;
continue;
}
} else
{var temp__4092__auto___25091 = cljs.core.seq.call(null,seq__23260_25082);if(temp__4092__auto___25091)
{var seq__23260_25092__$1 = temp__4092__auto___25091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23260_25092__$1))
{var c__20293__auto___25093 = cljs.core.chunk_first.call(null,seq__23260_25092__$1);{
var G__25094 = cljs.core.chunk_rest.call(null,seq__23260_25092__$1);
var G__25095 = c__20293__auto___25093;
var G__25096 = cljs.core.count.call(null,c__20293__auto___25093);
var G__25097 = 0;
seq__23260_25082 = G__25094;
chunk__23261_25083 = G__25095;
count__23262_25084 = G__25096;
i__23263_25085 = G__25097;
continue;
}
} else
{var arg__21712__auto___25098 = cljs.core.first.call(null,seq__23260_25092__$1);a__21711__auto__.push(arg__21712__auto___25098);
{
var G__25099 = cljs.core.next.call(null,seq__23260_25092__$1);
var G__25100 = null;
var G__25101 = 0;
var G__25102 = 0;
seq__23260_25082 = G__25099;
chunk__23261_25083 = G__25100;
count__23262_25084 = G__25101;
i__23263_25085 = G__25102;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__21711__auto__);
};
var menuitem = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__21710__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__25103){
var args__21710__auto__ = cljs.core.seq(arglist__25103);
return menuitem__delegate(args__21710__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23268_25104 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23269_25105 = null;var count__23270_25106 = 0;var i__23271_25107 = 0;while(true){
if((i__23271_25107 < count__23270_25106))
{var arg__21712__auto___25108 = cljs.core._nth.call(null,chunk__23269_25105,i__23271_25107);a__21711__auto__.push(arg__21712__auto___25108);
{
var G__25109 = seq__23268_25104;
var G__25110 = chunk__23269_25105;
var G__25111 = count__23270_25106;
var G__25112 = (i__23271_25107 + 1);
seq__23268_25104 = G__25109;
chunk__23269_25105 = G__25110;
count__23270_25106 = G__25111;
i__23271_25107 = G__25112;
continue;
}
} else
{var temp__4092__auto___25113 = cljs.core.seq.call(null,seq__23268_25104);if(temp__4092__auto___25113)
{var seq__23268_25114__$1 = temp__4092__auto___25113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23268_25114__$1))
{var c__20293__auto___25115 = cljs.core.chunk_first.call(null,seq__23268_25114__$1);{
var G__25116 = cljs.core.chunk_rest.call(null,seq__23268_25114__$1);
var G__25117 = c__20293__auto___25115;
var G__25118 = cljs.core.count.call(null,c__20293__auto___25115);
var G__25119 = 0;
seq__23268_25104 = G__25116;
chunk__23269_25105 = G__25117;
count__23270_25106 = G__25118;
i__23271_25107 = G__25119;
continue;
}
} else
{var arg__21712__auto___25120 = cljs.core.first.call(null,seq__23268_25114__$1);a__21711__auto__.push(arg__21712__auto___25120);
{
var G__25121 = cljs.core.next.call(null,seq__23268_25114__$1);
var G__25122 = null;
var G__25123 = 0;
var G__25124 = 0;
seq__23268_25104 = G__25121;
chunk__23269_25105 = G__25122;
count__23270_25106 = G__25123;
i__23271_25107 = G__25124;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__21711__auto__);
};
var meta = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__21710__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__25125){
var args__21710__auto__ = cljs.core.seq(arglist__25125);
return meta__delegate(args__21710__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23276_25126 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23277_25127 = null;var count__23278_25128 = 0;var i__23279_25129 = 0;while(true){
if((i__23279_25129 < count__23278_25128))
{var arg__21712__auto___25130 = cljs.core._nth.call(null,chunk__23277_25127,i__23279_25129);a__21711__auto__.push(arg__21712__auto___25130);
{
var G__25131 = seq__23276_25126;
var G__25132 = chunk__23277_25127;
var G__25133 = count__23278_25128;
var G__25134 = (i__23279_25129 + 1);
seq__23276_25126 = G__25131;
chunk__23277_25127 = G__25132;
count__23278_25128 = G__25133;
i__23279_25129 = G__25134;
continue;
}
} else
{var temp__4092__auto___25135 = cljs.core.seq.call(null,seq__23276_25126);if(temp__4092__auto___25135)
{var seq__23276_25136__$1 = temp__4092__auto___25135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23276_25136__$1))
{var c__20293__auto___25137 = cljs.core.chunk_first.call(null,seq__23276_25136__$1);{
var G__25138 = cljs.core.chunk_rest.call(null,seq__23276_25136__$1);
var G__25139 = c__20293__auto___25137;
var G__25140 = cljs.core.count.call(null,c__20293__auto___25137);
var G__25141 = 0;
seq__23276_25126 = G__25138;
chunk__23277_25127 = G__25139;
count__23278_25128 = G__25140;
i__23279_25129 = G__25141;
continue;
}
} else
{var arg__21712__auto___25142 = cljs.core.first.call(null,seq__23276_25136__$1);a__21711__auto__.push(arg__21712__auto___25142);
{
var G__25143 = cljs.core.next.call(null,seq__23276_25136__$1);
var G__25144 = null;
var G__25145 = 0;
var G__25146 = 0;
seq__23276_25126 = G__25143;
chunk__23277_25127 = G__25144;
count__23278_25128 = G__25145;
i__23279_25129 = G__25146;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__21711__auto__);
};
var meter = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__21710__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__25147){
var args__21710__auto__ = cljs.core.seq(arglist__25147);
return meter__delegate(args__21710__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23284_25148 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23285_25149 = null;var count__23286_25150 = 0;var i__23287_25151 = 0;while(true){
if((i__23287_25151 < count__23286_25150))
{var arg__21712__auto___25152 = cljs.core._nth.call(null,chunk__23285_25149,i__23287_25151);a__21711__auto__.push(arg__21712__auto___25152);
{
var G__25153 = seq__23284_25148;
var G__25154 = chunk__23285_25149;
var G__25155 = count__23286_25150;
var G__25156 = (i__23287_25151 + 1);
seq__23284_25148 = G__25153;
chunk__23285_25149 = G__25154;
count__23286_25150 = G__25155;
i__23287_25151 = G__25156;
continue;
}
} else
{var temp__4092__auto___25157 = cljs.core.seq.call(null,seq__23284_25148);if(temp__4092__auto___25157)
{var seq__23284_25158__$1 = temp__4092__auto___25157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23284_25158__$1))
{var c__20293__auto___25159 = cljs.core.chunk_first.call(null,seq__23284_25158__$1);{
var G__25160 = cljs.core.chunk_rest.call(null,seq__23284_25158__$1);
var G__25161 = c__20293__auto___25159;
var G__25162 = cljs.core.count.call(null,c__20293__auto___25159);
var G__25163 = 0;
seq__23284_25148 = G__25160;
chunk__23285_25149 = G__25161;
count__23286_25150 = G__25162;
i__23287_25151 = G__25163;
continue;
}
} else
{var arg__21712__auto___25164 = cljs.core.first.call(null,seq__23284_25158__$1);a__21711__auto__.push(arg__21712__auto___25164);
{
var G__25165 = cljs.core.next.call(null,seq__23284_25158__$1);
var G__25166 = null;
var G__25167 = 0;
var G__25168 = 0;
seq__23284_25148 = G__25165;
chunk__23285_25149 = G__25166;
count__23286_25150 = G__25167;
i__23287_25151 = G__25168;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__21711__auto__);
};
var nav = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__21710__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__25169){
var args__21710__auto__ = cljs.core.seq(arglist__25169);
return nav__delegate(args__21710__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23292_25170 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23293_25171 = null;var count__23294_25172 = 0;var i__23295_25173 = 0;while(true){
if((i__23295_25173 < count__23294_25172))
{var arg__21712__auto___25174 = cljs.core._nth.call(null,chunk__23293_25171,i__23295_25173);a__21711__auto__.push(arg__21712__auto___25174);
{
var G__25175 = seq__23292_25170;
var G__25176 = chunk__23293_25171;
var G__25177 = count__23294_25172;
var G__25178 = (i__23295_25173 + 1);
seq__23292_25170 = G__25175;
chunk__23293_25171 = G__25176;
count__23294_25172 = G__25177;
i__23295_25173 = G__25178;
continue;
}
} else
{var temp__4092__auto___25179 = cljs.core.seq.call(null,seq__23292_25170);if(temp__4092__auto___25179)
{var seq__23292_25180__$1 = temp__4092__auto___25179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23292_25180__$1))
{var c__20293__auto___25181 = cljs.core.chunk_first.call(null,seq__23292_25180__$1);{
var G__25182 = cljs.core.chunk_rest.call(null,seq__23292_25180__$1);
var G__25183 = c__20293__auto___25181;
var G__25184 = cljs.core.count.call(null,c__20293__auto___25181);
var G__25185 = 0;
seq__23292_25170 = G__25182;
chunk__23293_25171 = G__25183;
count__23294_25172 = G__25184;
i__23295_25173 = G__25185;
continue;
}
} else
{var arg__21712__auto___25186 = cljs.core.first.call(null,seq__23292_25180__$1);a__21711__auto__.push(arg__21712__auto___25186);
{
var G__25187 = cljs.core.next.call(null,seq__23292_25180__$1);
var G__25188 = null;
var G__25189 = 0;
var G__25190 = 0;
seq__23292_25170 = G__25187;
chunk__23293_25171 = G__25188;
count__23294_25172 = G__25189;
i__23295_25173 = G__25190;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__21711__auto__);
};
var noscript = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__21710__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__25191){
var args__21710__auto__ = cljs.core.seq(arglist__25191);
return noscript__delegate(args__21710__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23300_25192 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23301_25193 = null;var count__23302_25194 = 0;var i__23303_25195 = 0;while(true){
if((i__23303_25195 < count__23302_25194))
{var arg__21712__auto___25196 = cljs.core._nth.call(null,chunk__23301_25193,i__23303_25195);a__21711__auto__.push(arg__21712__auto___25196);
{
var G__25197 = seq__23300_25192;
var G__25198 = chunk__23301_25193;
var G__25199 = count__23302_25194;
var G__25200 = (i__23303_25195 + 1);
seq__23300_25192 = G__25197;
chunk__23301_25193 = G__25198;
count__23302_25194 = G__25199;
i__23303_25195 = G__25200;
continue;
}
} else
{var temp__4092__auto___25201 = cljs.core.seq.call(null,seq__23300_25192);if(temp__4092__auto___25201)
{var seq__23300_25202__$1 = temp__4092__auto___25201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23300_25202__$1))
{var c__20293__auto___25203 = cljs.core.chunk_first.call(null,seq__23300_25202__$1);{
var G__25204 = cljs.core.chunk_rest.call(null,seq__23300_25202__$1);
var G__25205 = c__20293__auto___25203;
var G__25206 = cljs.core.count.call(null,c__20293__auto___25203);
var G__25207 = 0;
seq__23300_25192 = G__25204;
chunk__23301_25193 = G__25205;
count__23302_25194 = G__25206;
i__23303_25195 = G__25207;
continue;
}
} else
{var arg__21712__auto___25208 = cljs.core.first.call(null,seq__23300_25202__$1);a__21711__auto__.push(arg__21712__auto___25208);
{
var G__25209 = cljs.core.next.call(null,seq__23300_25202__$1);
var G__25210 = null;
var G__25211 = 0;
var G__25212 = 0;
seq__23300_25192 = G__25209;
chunk__23301_25193 = G__25210;
count__23302_25194 = G__25211;
i__23303_25195 = G__25212;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__21711__auto__);
};
var object = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__21710__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__25213){
var args__21710__auto__ = cljs.core.seq(arglist__25213);
return object__delegate(args__21710__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23308_25214 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23309_25215 = null;var count__23310_25216 = 0;var i__23311_25217 = 0;while(true){
if((i__23311_25217 < count__23310_25216))
{var arg__21712__auto___25218 = cljs.core._nth.call(null,chunk__23309_25215,i__23311_25217);a__21711__auto__.push(arg__21712__auto___25218);
{
var G__25219 = seq__23308_25214;
var G__25220 = chunk__23309_25215;
var G__25221 = count__23310_25216;
var G__25222 = (i__23311_25217 + 1);
seq__23308_25214 = G__25219;
chunk__23309_25215 = G__25220;
count__23310_25216 = G__25221;
i__23311_25217 = G__25222;
continue;
}
} else
{var temp__4092__auto___25223 = cljs.core.seq.call(null,seq__23308_25214);if(temp__4092__auto___25223)
{var seq__23308_25224__$1 = temp__4092__auto___25223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23308_25224__$1))
{var c__20293__auto___25225 = cljs.core.chunk_first.call(null,seq__23308_25224__$1);{
var G__25226 = cljs.core.chunk_rest.call(null,seq__23308_25224__$1);
var G__25227 = c__20293__auto___25225;
var G__25228 = cljs.core.count.call(null,c__20293__auto___25225);
var G__25229 = 0;
seq__23308_25214 = G__25226;
chunk__23309_25215 = G__25227;
count__23310_25216 = G__25228;
i__23311_25217 = G__25229;
continue;
}
} else
{var arg__21712__auto___25230 = cljs.core.first.call(null,seq__23308_25224__$1);a__21711__auto__.push(arg__21712__auto___25230);
{
var G__25231 = cljs.core.next.call(null,seq__23308_25224__$1);
var G__25232 = null;
var G__25233 = 0;
var G__25234 = 0;
seq__23308_25214 = G__25231;
chunk__23309_25215 = G__25232;
count__23310_25216 = G__25233;
i__23311_25217 = G__25234;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__21711__auto__);
};
var ol = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__21710__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__25235){
var args__21710__auto__ = cljs.core.seq(arglist__25235);
return ol__delegate(args__21710__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23316_25236 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23317_25237 = null;var count__23318_25238 = 0;var i__23319_25239 = 0;while(true){
if((i__23319_25239 < count__23318_25238))
{var arg__21712__auto___25240 = cljs.core._nth.call(null,chunk__23317_25237,i__23319_25239);a__21711__auto__.push(arg__21712__auto___25240);
{
var G__25241 = seq__23316_25236;
var G__25242 = chunk__23317_25237;
var G__25243 = count__23318_25238;
var G__25244 = (i__23319_25239 + 1);
seq__23316_25236 = G__25241;
chunk__23317_25237 = G__25242;
count__23318_25238 = G__25243;
i__23319_25239 = G__25244;
continue;
}
} else
{var temp__4092__auto___25245 = cljs.core.seq.call(null,seq__23316_25236);if(temp__4092__auto___25245)
{var seq__23316_25246__$1 = temp__4092__auto___25245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23316_25246__$1))
{var c__20293__auto___25247 = cljs.core.chunk_first.call(null,seq__23316_25246__$1);{
var G__25248 = cljs.core.chunk_rest.call(null,seq__23316_25246__$1);
var G__25249 = c__20293__auto___25247;
var G__25250 = cljs.core.count.call(null,c__20293__auto___25247);
var G__25251 = 0;
seq__23316_25236 = G__25248;
chunk__23317_25237 = G__25249;
count__23318_25238 = G__25250;
i__23319_25239 = G__25251;
continue;
}
} else
{var arg__21712__auto___25252 = cljs.core.first.call(null,seq__23316_25246__$1);a__21711__auto__.push(arg__21712__auto___25252);
{
var G__25253 = cljs.core.next.call(null,seq__23316_25246__$1);
var G__25254 = null;
var G__25255 = 0;
var G__25256 = 0;
seq__23316_25236 = G__25253;
chunk__23317_25237 = G__25254;
count__23318_25238 = G__25255;
i__23319_25239 = G__25256;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__21711__auto__);
};
var optgroup = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__21710__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__25257){
var args__21710__auto__ = cljs.core.seq(arglist__25257);
return optgroup__delegate(args__21710__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23324_25258 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23325_25259 = null;var count__23326_25260 = 0;var i__23327_25261 = 0;while(true){
if((i__23327_25261 < count__23326_25260))
{var arg__21712__auto___25262 = cljs.core._nth.call(null,chunk__23325_25259,i__23327_25261);a__21711__auto__.push(arg__21712__auto___25262);
{
var G__25263 = seq__23324_25258;
var G__25264 = chunk__23325_25259;
var G__25265 = count__23326_25260;
var G__25266 = (i__23327_25261 + 1);
seq__23324_25258 = G__25263;
chunk__23325_25259 = G__25264;
count__23326_25260 = G__25265;
i__23327_25261 = G__25266;
continue;
}
} else
{var temp__4092__auto___25267 = cljs.core.seq.call(null,seq__23324_25258);if(temp__4092__auto___25267)
{var seq__23324_25268__$1 = temp__4092__auto___25267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23324_25268__$1))
{var c__20293__auto___25269 = cljs.core.chunk_first.call(null,seq__23324_25268__$1);{
var G__25270 = cljs.core.chunk_rest.call(null,seq__23324_25268__$1);
var G__25271 = c__20293__auto___25269;
var G__25272 = cljs.core.count.call(null,c__20293__auto___25269);
var G__25273 = 0;
seq__23324_25258 = G__25270;
chunk__23325_25259 = G__25271;
count__23326_25260 = G__25272;
i__23327_25261 = G__25273;
continue;
}
} else
{var arg__21712__auto___25274 = cljs.core.first.call(null,seq__23324_25268__$1);a__21711__auto__.push(arg__21712__auto___25274);
{
var G__25275 = cljs.core.next.call(null,seq__23324_25268__$1);
var G__25276 = null;
var G__25277 = 0;
var G__25278 = 0;
seq__23324_25258 = G__25275;
chunk__23325_25259 = G__25276;
count__23326_25260 = G__25277;
i__23327_25261 = G__25278;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__21711__auto__);
};
var option = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__21710__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__25279){
var args__21710__auto__ = cljs.core.seq(arglist__25279);
return option__delegate(args__21710__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23332_25280 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23333_25281 = null;var count__23334_25282 = 0;var i__23335_25283 = 0;while(true){
if((i__23335_25283 < count__23334_25282))
{var arg__21712__auto___25284 = cljs.core._nth.call(null,chunk__23333_25281,i__23335_25283);a__21711__auto__.push(arg__21712__auto___25284);
{
var G__25285 = seq__23332_25280;
var G__25286 = chunk__23333_25281;
var G__25287 = count__23334_25282;
var G__25288 = (i__23335_25283 + 1);
seq__23332_25280 = G__25285;
chunk__23333_25281 = G__25286;
count__23334_25282 = G__25287;
i__23335_25283 = G__25288;
continue;
}
} else
{var temp__4092__auto___25289 = cljs.core.seq.call(null,seq__23332_25280);if(temp__4092__auto___25289)
{var seq__23332_25290__$1 = temp__4092__auto___25289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23332_25290__$1))
{var c__20293__auto___25291 = cljs.core.chunk_first.call(null,seq__23332_25290__$1);{
var G__25292 = cljs.core.chunk_rest.call(null,seq__23332_25290__$1);
var G__25293 = c__20293__auto___25291;
var G__25294 = cljs.core.count.call(null,c__20293__auto___25291);
var G__25295 = 0;
seq__23332_25280 = G__25292;
chunk__23333_25281 = G__25293;
count__23334_25282 = G__25294;
i__23335_25283 = G__25295;
continue;
}
} else
{var arg__21712__auto___25296 = cljs.core.first.call(null,seq__23332_25290__$1);a__21711__auto__.push(arg__21712__auto___25296);
{
var G__25297 = cljs.core.next.call(null,seq__23332_25290__$1);
var G__25298 = null;
var G__25299 = 0;
var G__25300 = 0;
seq__23332_25280 = G__25297;
chunk__23333_25281 = G__25298;
count__23334_25282 = G__25299;
i__23335_25283 = G__25300;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__21711__auto__);
};
var output = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__21710__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__25301){
var args__21710__auto__ = cljs.core.seq(arglist__25301);
return output__delegate(args__21710__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23340_25302 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23341_25303 = null;var count__23342_25304 = 0;var i__23343_25305 = 0;while(true){
if((i__23343_25305 < count__23342_25304))
{var arg__21712__auto___25306 = cljs.core._nth.call(null,chunk__23341_25303,i__23343_25305);a__21711__auto__.push(arg__21712__auto___25306);
{
var G__25307 = seq__23340_25302;
var G__25308 = chunk__23341_25303;
var G__25309 = count__23342_25304;
var G__25310 = (i__23343_25305 + 1);
seq__23340_25302 = G__25307;
chunk__23341_25303 = G__25308;
count__23342_25304 = G__25309;
i__23343_25305 = G__25310;
continue;
}
} else
{var temp__4092__auto___25311 = cljs.core.seq.call(null,seq__23340_25302);if(temp__4092__auto___25311)
{var seq__23340_25312__$1 = temp__4092__auto___25311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23340_25312__$1))
{var c__20293__auto___25313 = cljs.core.chunk_first.call(null,seq__23340_25312__$1);{
var G__25314 = cljs.core.chunk_rest.call(null,seq__23340_25312__$1);
var G__25315 = c__20293__auto___25313;
var G__25316 = cljs.core.count.call(null,c__20293__auto___25313);
var G__25317 = 0;
seq__23340_25302 = G__25314;
chunk__23341_25303 = G__25315;
count__23342_25304 = G__25316;
i__23343_25305 = G__25317;
continue;
}
} else
{var arg__21712__auto___25318 = cljs.core.first.call(null,seq__23340_25312__$1);a__21711__auto__.push(arg__21712__auto___25318);
{
var G__25319 = cljs.core.next.call(null,seq__23340_25312__$1);
var G__25320 = null;
var G__25321 = 0;
var G__25322 = 0;
seq__23340_25302 = G__25319;
chunk__23341_25303 = G__25320;
count__23342_25304 = G__25321;
i__23343_25305 = G__25322;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__21711__auto__);
};
var p = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__21710__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__25323){
var args__21710__auto__ = cljs.core.seq(arglist__25323);
return p__delegate(args__21710__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23348_25324 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23349_25325 = null;var count__23350_25326 = 0;var i__23351_25327 = 0;while(true){
if((i__23351_25327 < count__23350_25326))
{var arg__21712__auto___25328 = cljs.core._nth.call(null,chunk__23349_25325,i__23351_25327);a__21711__auto__.push(arg__21712__auto___25328);
{
var G__25329 = seq__23348_25324;
var G__25330 = chunk__23349_25325;
var G__25331 = count__23350_25326;
var G__25332 = (i__23351_25327 + 1);
seq__23348_25324 = G__25329;
chunk__23349_25325 = G__25330;
count__23350_25326 = G__25331;
i__23351_25327 = G__25332;
continue;
}
} else
{var temp__4092__auto___25333 = cljs.core.seq.call(null,seq__23348_25324);if(temp__4092__auto___25333)
{var seq__23348_25334__$1 = temp__4092__auto___25333;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23348_25334__$1))
{var c__20293__auto___25335 = cljs.core.chunk_first.call(null,seq__23348_25334__$1);{
var G__25336 = cljs.core.chunk_rest.call(null,seq__23348_25334__$1);
var G__25337 = c__20293__auto___25335;
var G__25338 = cljs.core.count.call(null,c__20293__auto___25335);
var G__25339 = 0;
seq__23348_25324 = G__25336;
chunk__23349_25325 = G__25337;
count__23350_25326 = G__25338;
i__23351_25327 = G__25339;
continue;
}
} else
{var arg__21712__auto___25340 = cljs.core.first.call(null,seq__23348_25334__$1);a__21711__auto__.push(arg__21712__auto___25340);
{
var G__25341 = cljs.core.next.call(null,seq__23348_25334__$1);
var G__25342 = null;
var G__25343 = 0;
var G__25344 = 0;
seq__23348_25324 = G__25341;
chunk__23349_25325 = G__25342;
count__23350_25326 = G__25343;
i__23351_25327 = G__25344;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__21711__auto__);
};
var param = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__21710__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__25345){
var args__21710__auto__ = cljs.core.seq(arglist__25345);
return param__delegate(args__21710__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23356_25346 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23357_25347 = null;var count__23358_25348 = 0;var i__23359_25349 = 0;while(true){
if((i__23359_25349 < count__23358_25348))
{var arg__21712__auto___25350 = cljs.core._nth.call(null,chunk__23357_25347,i__23359_25349);a__21711__auto__.push(arg__21712__auto___25350);
{
var G__25351 = seq__23356_25346;
var G__25352 = chunk__23357_25347;
var G__25353 = count__23358_25348;
var G__25354 = (i__23359_25349 + 1);
seq__23356_25346 = G__25351;
chunk__23357_25347 = G__25352;
count__23358_25348 = G__25353;
i__23359_25349 = G__25354;
continue;
}
} else
{var temp__4092__auto___25355 = cljs.core.seq.call(null,seq__23356_25346);if(temp__4092__auto___25355)
{var seq__23356_25356__$1 = temp__4092__auto___25355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23356_25356__$1))
{var c__20293__auto___25357 = cljs.core.chunk_first.call(null,seq__23356_25356__$1);{
var G__25358 = cljs.core.chunk_rest.call(null,seq__23356_25356__$1);
var G__25359 = c__20293__auto___25357;
var G__25360 = cljs.core.count.call(null,c__20293__auto___25357);
var G__25361 = 0;
seq__23356_25346 = G__25358;
chunk__23357_25347 = G__25359;
count__23358_25348 = G__25360;
i__23359_25349 = G__25361;
continue;
}
} else
{var arg__21712__auto___25362 = cljs.core.first.call(null,seq__23356_25356__$1);a__21711__auto__.push(arg__21712__auto___25362);
{
var G__25363 = cljs.core.next.call(null,seq__23356_25356__$1);
var G__25364 = null;
var G__25365 = 0;
var G__25366 = 0;
seq__23356_25346 = G__25363;
chunk__23357_25347 = G__25364;
count__23358_25348 = G__25365;
i__23359_25349 = G__25366;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__21711__auto__);
};
var pre = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__21710__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__25367){
var args__21710__auto__ = cljs.core.seq(arglist__25367);
return pre__delegate(args__21710__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23364_25368 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23365_25369 = null;var count__23366_25370 = 0;var i__23367_25371 = 0;while(true){
if((i__23367_25371 < count__23366_25370))
{var arg__21712__auto___25372 = cljs.core._nth.call(null,chunk__23365_25369,i__23367_25371);a__21711__auto__.push(arg__21712__auto___25372);
{
var G__25373 = seq__23364_25368;
var G__25374 = chunk__23365_25369;
var G__25375 = count__23366_25370;
var G__25376 = (i__23367_25371 + 1);
seq__23364_25368 = G__25373;
chunk__23365_25369 = G__25374;
count__23366_25370 = G__25375;
i__23367_25371 = G__25376;
continue;
}
} else
{var temp__4092__auto___25377 = cljs.core.seq.call(null,seq__23364_25368);if(temp__4092__auto___25377)
{var seq__23364_25378__$1 = temp__4092__auto___25377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23364_25378__$1))
{var c__20293__auto___25379 = cljs.core.chunk_first.call(null,seq__23364_25378__$1);{
var G__25380 = cljs.core.chunk_rest.call(null,seq__23364_25378__$1);
var G__25381 = c__20293__auto___25379;
var G__25382 = cljs.core.count.call(null,c__20293__auto___25379);
var G__25383 = 0;
seq__23364_25368 = G__25380;
chunk__23365_25369 = G__25381;
count__23366_25370 = G__25382;
i__23367_25371 = G__25383;
continue;
}
} else
{var arg__21712__auto___25384 = cljs.core.first.call(null,seq__23364_25378__$1);a__21711__auto__.push(arg__21712__auto___25384);
{
var G__25385 = cljs.core.next.call(null,seq__23364_25378__$1);
var G__25386 = null;
var G__25387 = 0;
var G__25388 = 0;
seq__23364_25368 = G__25385;
chunk__23365_25369 = G__25386;
count__23366_25370 = G__25387;
i__23367_25371 = G__25388;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__21711__auto__);
};
var progress = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__21710__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__25389){
var args__21710__auto__ = cljs.core.seq(arglist__25389);
return progress__delegate(args__21710__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23372_25390 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23373_25391 = null;var count__23374_25392 = 0;var i__23375_25393 = 0;while(true){
if((i__23375_25393 < count__23374_25392))
{var arg__21712__auto___25394 = cljs.core._nth.call(null,chunk__23373_25391,i__23375_25393);a__21711__auto__.push(arg__21712__auto___25394);
{
var G__25395 = seq__23372_25390;
var G__25396 = chunk__23373_25391;
var G__25397 = count__23374_25392;
var G__25398 = (i__23375_25393 + 1);
seq__23372_25390 = G__25395;
chunk__23373_25391 = G__25396;
count__23374_25392 = G__25397;
i__23375_25393 = G__25398;
continue;
}
} else
{var temp__4092__auto___25399 = cljs.core.seq.call(null,seq__23372_25390);if(temp__4092__auto___25399)
{var seq__23372_25400__$1 = temp__4092__auto___25399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23372_25400__$1))
{var c__20293__auto___25401 = cljs.core.chunk_first.call(null,seq__23372_25400__$1);{
var G__25402 = cljs.core.chunk_rest.call(null,seq__23372_25400__$1);
var G__25403 = c__20293__auto___25401;
var G__25404 = cljs.core.count.call(null,c__20293__auto___25401);
var G__25405 = 0;
seq__23372_25390 = G__25402;
chunk__23373_25391 = G__25403;
count__23374_25392 = G__25404;
i__23375_25393 = G__25405;
continue;
}
} else
{var arg__21712__auto___25406 = cljs.core.first.call(null,seq__23372_25400__$1);a__21711__auto__.push(arg__21712__auto___25406);
{
var G__25407 = cljs.core.next.call(null,seq__23372_25400__$1);
var G__25408 = null;
var G__25409 = 0;
var G__25410 = 0;
seq__23372_25390 = G__25407;
chunk__23373_25391 = G__25408;
count__23374_25392 = G__25409;
i__23375_25393 = G__25410;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__21711__auto__);
};
var q = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__21710__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__25411){
var args__21710__auto__ = cljs.core.seq(arglist__25411);
return q__delegate(args__21710__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23380_25412 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23381_25413 = null;var count__23382_25414 = 0;var i__23383_25415 = 0;while(true){
if((i__23383_25415 < count__23382_25414))
{var arg__21712__auto___25416 = cljs.core._nth.call(null,chunk__23381_25413,i__23383_25415);a__21711__auto__.push(arg__21712__auto___25416);
{
var G__25417 = seq__23380_25412;
var G__25418 = chunk__23381_25413;
var G__25419 = count__23382_25414;
var G__25420 = (i__23383_25415 + 1);
seq__23380_25412 = G__25417;
chunk__23381_25413 = G__25418;
count__23382_25414 = G__25419;
i__23383_25415 = G__25420;
continue;
}
} else
{var temp__4092__auto___25421 = cljs.core.seq.call(null,seq__23380_25412);if(temp__4092__auto___25421)
{var seq__23380_25422__$1 = temp__4092__auto___25421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23380_25422__$1))
{var c__20293__auto___25423 = cljs.core.chunk_first.call(null,seq__23380_25422__$1);{
var G__25424 = cljs.core.chunk_rest.call(null,seq__23380_25422__$1);
var G__25425 = c__20293__auto___25423;
var G__25426 = cljs.core.count.call(null,c__20293__auto___25423);
var G__25427 = 0;
seq__23380_25412 = G__25424;
chunk__23381_25413 = G__25425;
count__23382_25414 = G__25426;
i__23383_25415 = G__25427;
continue;
}
} else
{var arg__21712__auto___25428 = cljs.core.first.call(null,seq__23380_25422__$1);a__21711__auto__.push(arg__21712__auto___25428);
{
var G__25429 = cljs.core.next.call(null,seq__23380_25422__$1);
var G__25430 = null;
var G__25431 = 0;
var G__25432 = 0;
seq__23380_25412 = G__25429;
chunk__23381_25413 = G__25430;
count__23382_25414 = G__25431;
i__23383_25415 = G__25432;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__21711__auto__);
};
var rp = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__21710__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__25433){
var args__21710__auto__ = cljs.core.seq(arglist__25433);
return rp__delegate(args__21710__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23388_25434 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23389_25435 = null;var count__23390_25436 = 0;var i__23391_25437 = 0;while(true){
if((i__23391_25437 < count__23390_25436))
{var arg__21712__auto___25438 = cljs.core._nth.call(null,chunk__23389_25435,i__23391_25437);a__21711__auto__.push(arg__21712__auto___25438);
{
var G__25439 = seq__23388_25434;
var G__25440 = chunk__23389_25435;
var G__25441 = count__23390_25436;
var G__25442 = (i__23391_25437 + 1);
seq__23388_25434 = G__25439;
chunk__23389_25435 = G__25440;
count__23390_25436 = G__25441;
i__23391_25437 = G__25442;
continue;
}
} else
{var temp__4092__auto___25443 = cljs.core.seq.call(null,seq__23388_25434);if(temp__4092__auto___25443)
{var seq__23388_25444__$1 = temp__4092__auto___25443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23388_25444__$1))
{var c__20293__auto___25445 = cljs.core.chunk_first.call(null,seq__23388_25444__$1);{
var G__25446 = cljs.core.chunk_rest.call(null,seq__23388_25444__$1);
var G__25447 = c__20293__auto___25445;
var G__25448 = cljs.core.count.call(null,c__20293__auto___25445);
var G__25449 = 0;
seq__23388_25434 = G__25446;
chunk__23389_25435 = G__25447;
count__23390_25436 = G__25448;
i__23391_25437 = G__25449;
continue;
}
} else
{var arg__21712__auto___25450 = cljs.core.first.call(null,seq__23388_25444__$1);a__21711__auto__.push(arg__21712__auto___25450);
{
var G__25451 = cljs.core.next.call(null,seq__23388_25444__$1);
var G__25452 = null;
var G__25453 = 0;
var G__25454 = 0;
seq__23388_25434 = G__25451;
chunk__23389_25435 = G__25452;
count__23390_25436 = G__25453;
i__23391_25437 = G__25454;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__21711__auto__);
};
var rt = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__21710__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__25455){
var args__21710__auto__ = cljs.core.seq(arglist__25455);
return rt__delegate(args__21710__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23396_25456 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23397_25457 = null;var count__23398_25458 = 0;var i__23399_25459 = 0;while(true){
if((i__23399_25459 < count__23398_25458))
{var arg__21712__auto___25460 = cljs.core._nth.call(null,chunk__23397_25457,i__23399_25459);a__21711__auto__.push(arg__21712__auto___25460);
{
var G__25461 = seq__23396_25456;
var G__25462 = chunk__23397_25457;
var G__25463 = count__23398_25458;
var G__25464 = (i__23399_25459 + 1);
seq__23396_25456 = G__25461;
chunk__23397_25457 = G__25462;
count__23398_25458 = G__25463;
i__23399_25459 = G__25464;
continue;
}
} else
{var temp__4092__auto___25465 = cljs.core.seq.call(null,seq__23396_25456);if(temp__4092__auto___25465)
{var seq__23396_25466__$1 = temp__4092__auto___25465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23396_25466__$1))
{var c__20293__auto___25467 = cljs.core.chunk_first.call(null,seq__23396_25466__$1);{
var G__25468 = cljs.core.chunk_rest.call(null,seq__23396_25466__$1);
var G__25469 = c__20293__auto___25467;
var G__25470 = cljs.core.count.call(null,c__20293__auto___25467);
var G__25471 = 0;
seq__23396_25456 = G__25468;
chunk__23397_25457 = G__25469;
count__23398_25458 = G__25470;
i__23399_25459 = G__25471;
continue;
}
} else
{var arg__21712__auto___25472 = cljs.core.first.call(null,seq__23396_25466__$1);a__21711__auto__.push(arg__21712__auto___25472);
{
var G__25473 = cljs.core.next.call(null,seq__23396_25466__$1);
var G__25474 = null;
var G__25475 = 0;
var G__25476 = 0;
seq__23396_25456 = G__25473;
chunk__23397_25457 = G__25474;
count__23398_25458 = G__25475;
i__23399_25459 = G__25476;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__21711__auto__);
};
var ruby = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__21710__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__25477){
var args__21710__auto__ = cljs.core.seq(arglist__25477);
return ruby__delegate(args__21710__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23404_25478 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23405_25479 = null;var count__23406_25480 = 0;var i__23407_25481 = 0;while(true){
if((i__23407_25481 < count__23406_25480))
{var arg__21712__auto___25482 = cljs.core._nth.call(null,chunk__23405_25479,i__23407_25481);a__21711__auto__.push(arg__21712__auto___25482);
{
var G__25483 = seq__23404_25478;
var G__25484 = chunk__23405_25479;
var G__25485 = count__23406_25480;
var G__25486 = (i__23407_25481 + 1);
seq__23404_25478 = G__25483;
chunk__23405_25479 = G__25484;
count__23406_25480 = G__25485;
i__23407_25481 = G__25486;
continue;
}
} else
{var temp__4092__auto___25487 = cljs.core.seq.call(null,seq__23404_25478);if(temp__4092__auto___25487)
{var seq__23404_25488__$1 = temp__4092__auto___25487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23404_25488__$1))
{var c__20293__auto___25489 = cljs.core.chunk_first.call(null,seq__23404_25488__$1);{
var G__25490 = cljs.core.chunk_rest.call(null,seq__23404_25488__$1);
var G__25491 = c__20293__auto___25489;
var G__25492 = cljs.core.count.call(null,c__20293__auto___25489);
var G__25493 = 0;
seq__23404_25478 = G__25490;
chunk__23405_25479 = G__25491;
count__23406_25480 = G__25492;
i__23407_25481 = G__25493;
continue;
}
} else
{var arg__21712__auto___25494 = cljs.core.first.call(null,seq__23404_25488__$1);a__21711__auto__.push(arg__21712__auto___25494);
{
var G__25495 = cljs.core.next.call(null,seq__23404_25488__$1);
var G__25496 = null;
var G__25497 = 0;
var G__25498 = 0;
seq__23404_25478 = G__25495;
chunk__23405_25479 = G__25496;
count__23406_25480 = G__25497;
i__23407_25481 = G__25498;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__21711__auto__);
};
var s = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__21710__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__25499){
var args__21710__auto__ = cljs.core.seq(arglist__25499);
return s__delegate(args__21710__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23412_25500 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23413_25501 = null;var count__23414_25502 = 0;var i__23415_25503 = 0;while(true){
if((i__23415_25503 < count__23414_25502))
{var arg__21712__auto___25504 = cljs.core._nth.call(null,chunk__23413_25501,i__23415_25503);a__21711__auto__.push(arg__21712__auto___25504);
{
var G__25505 = seq__23412_25500;
var G__25506 = chunk__23413_25501;
var G__25507 = count__23414_25502;
var G__25508 = (i__23415_25503 + 1);
seq__23412_25500 = G__25505;
chunk__23413_25501 = G__25506;
count__23414_25502 = G__25507;
i__23415_25503 = G__25508;
continue;
}
} else
{var temp__4092__auto___25509 = cljs.core.seq.call(null,seq__23412_25500);if(temp__4092__auto___25509)
{var seq__23412_25510__$1 = temp__4092__auto___25509;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23412_25510__$1))
{var c__20293__auto___25511 = cljs.core.chunk_first.call(null,seq__23412_25510__$1);{
var G__25512 = cljs.core.chunk_rest.call(null,seq__23412_25510__$1);
var G__25513 = c__20293__auto___25511;
var G__25514 = cljs.core.count.call(null,c__20293__auto___25511);
var G__25515 = 0;
seq__23412_25500 = G__25512;
chunk__23413_25501 = G__25513;
count__23414_25502 = G__25514;
i__23415_25503 = G__25515;
continue;
}
} else
{var arg__21712__auto___25516 = cljs.core.first.call(null,seq__23412_25510__$1);a__21711__auto__.push(arg__21712__auto___25516);
{
var G__25517 = cljs.core.next.call(null,seq__23412_25510__$1);
var G__25518 = null;
var G__25519 = 0;
var G__25520 = 0;
seq__23412_25500 = G__25517;
chunk__23413_25501 = G__25518;
count__23414_25502 = G__25519;
i__23415_25503 = G__25520;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__21711__auto__);
};
var samp = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__21710__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__25521){
var args__21710__auto__ = cljs.core.seq(arglist__25521);
return samp__delegate(args__21710__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23420_25522 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23421_25523 = null;var count__23422_25524 = 0;var i__23423_25525 = 0;while(true){
if((i__23423_25525 < count__23422_25524))
{var arg__21712__auto___25526 = cljs.core._nth.call(null,chunk__23421_25523,i__23423_25525);a__21711__auto__.push(arg__21712__auto___25526);
{
var G__25527 = seq__23420_25522;
var G__25528 = chunk__23421_25523;
var G__25529 = count__23422_25524;
var G__25530 = (i__23423_25525 + 1);
seq__23420_25522 = G__25527;
chunk__23421_25523 = G__25528;
count__23422_25524 = G__25529;
i__23423_25525 = G__25530;
continue;
}
} else
{var temp__4092__auto___25531 = cljs.core.seq.call(null,seq__23420_25522);if(temp__4092__auto___25531)
{var seq__23420_25532__$1 = temp__4092__auto___25531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23420_25532__$1))
{var c__20293__auto___25533 = cljs.core.chunk_first.call(null,seq__23420_25532__$1);{
var G__25534 = cljs.core.chunk_rest.call(null,seq__23420_25532__$1);
var G__25535 = c__20293__auto___25533;
var G__25536 = cljs.core.count.call(null,c__20293__auto___25533);
var G__25537 = 0;
seq__23420_25522 = G__25534;
chunk__23421_25523 = G__25535;
count__23422_25524 = G__25536;
i__23423_25525 = G__25537;
continue;
}
} else
{var arg__21712__auto___25538 = cljs.core.first.call(null,seq__23420_25532__$1);a__21711__auto__.push(arg__21712__auto___25538);
{
var G__25539 = cljs.core.next.call(null,seq__23420_25532__$1);
var G__25540 = null;
var G__25541 = 0;
var G__25542 = 0;
seq__23420_25522 = G__25539;
chunk__23421_25523 = G__25540;
count__23422_25524 = G__25541;
i__23423_25525 = G__25542;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__21711__auto__);
};
var script = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__21710__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__25543){
var args__21710__auto__ = cljs.core.seq(arglist__25543);
return script__delegate(args__21710__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23428_25544 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23429_25545 = null;var count__23430_25546 = 0;var i__23431_25547 = 0;while(true){
if((i__23431_25547 < count__23430_25546))
{var arg__21712__auto___25548 = cljs.core._nth.call(null,chunk__23429_25545,i__23431_25547);a__21711__auto__.push(arg__21712__auto___25548);
{
var G__25549 = seq__23428_25544;
var G__25550 = chunk__23429_25545;
var G__25551 = count__23430_25546;
var G__25552 = (i__23431_25547 + 1);
seq__23428_25544 = G__25549;
chunk__23429_25545 = G__25550;
count__23430_25546 = G__25551;
i__23431_25547 = G__25552;
continue;
}
} else
{var temp__4092__auto___25553 = cljs.core.seq.call(null,seq__23428_25544);if(temp__4092__auto___25553)
{var seq__23428_25554__$1 = temp__4092__auto___25553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23428_25554__$1))
{var c__20293__auto___25555 = cljs.core.chunk_first.call(null,seq__23428_25554__$1);{
var G__25556 = cljs.core.chunk_rest.call(null,seq__23428_25554__$1);
var G__25557 = c__20293__auto___25555;
var G__25558 = cljs.core.count.call(null,c__20293__auto___25555);
var G__25559 = 0;
seq__23428_25544 = G__25556;
chunk__23429_25545 = G__25557;
count__23430_25546 = G__25558;
i__23431_25547 = G__25559;
continue;
}
} else
{var arg__21712__auto___25560 = cljs.core.first.call(null,seq__23428_25554__$1);a__21711__auto__.push(arg__21712__auto___25560);
{
var G__25561 = cljs.core.next.call(null,seq__23428_25554__$1);
var G__25562 = null;
var G__25563 = 0;
var G__25564 = 0;
seq__23428_25544 = G__25561;
chunk__23429_25545 = G__25562;
count__23430_25546 = G__25563;
i__23431_25547 = G__25564;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__21711__auto__);
};
var section = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__21710__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__25565){
var args__21710__auto__ = cljs.core.seq(arglist__25565);
return section__delegate(args__21710__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23436_25566 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23437_25567 = null;var count__23438_25568 = 0;var i__23439_25569 = 0;while(true){
if((i__23439_25569 < count__23438_25568))
{var arg__21712__auto___25570 = cljs.core._nth.call(null,chunk__23437_25567,i__23439_25569);a__21711__auto__.push(arg__21712__auto___25570);
{
var G__25571 = seq__23436_25566;
var G__25572 = chunk__23437_25567;
var G__25573 = count__23438_25568;
var G__25574 = (i__23439_25569 + 1);
seq__23436_25566 = G__25571;
chunk__23437_25567 = G__25572;
count__23438_25568 = G__25573;
i__23439_25569 = G__25574;
continue;
}
} else
{var temp__4092__auto___25575 = cljs.core.seq.call(null,seq__23436_25566);if(temp__4092__auto___25575)
{var seq__23436_25576__$1 = temp__4092__auto___25575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23436_25576__$1))
{var c__20293__auto___25577 = cljs.core.chunk_first.call(null,seq__23436_25576__$1);{
var G__25578 = cljs.core.chunk_rest.call(null,seq__23436_25576__$1);
var G__25579 = c__20293__auto___25577;
var G__25580 = cljs.core.count.call(null,c__20293__auto___25577);
var G__25581 = 0;
seq__23436_25566 = G__25578;
chunk__23437_25567 = G__25579;
count__23438_25568 = G__25580;
i__23439_25569 = G__25581;
continue;
}
} else
{var arg__21712__auto___25582 = cljs.core.first.call(null,seq__23436_25576__$1);a__21711__auto__.push(arg__21712__auto___25582);
{
var G__25583 = cljs.core.next.call(null,seq__23436_25576__$1);
var G__25584 = null;
var G__25585 = 0;
var G__25586 = 0;
seq__23436_25566 = G__25583;
chunk__23437_25567 = G__25584;
count__23438_25568 = G__25585;
i__23439_25569 = G__25586;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__21711__auto__);
};
var select = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__21710__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__25587){
var args__21710__auto__ = cljs.core.seq(arglist__25587);
return select__delegate(args__21710__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23444_25588 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23445_25589 = null;var count__23446_25590 = 0;var i__23447_25591 = 0;while(true){
if((i__23447_25591 < count__23446_25590))
{var arg__21712__auto___25592 = cljs.core._nth.call(null,chunk__23445_25589,i__23447_25591);a__21711__auto__.push(arg__21712__auto___25592);
{
var G__25593 = seq__23444_25588;
var G__25594 = chunk__23445_25589;
var G__25595 = count__23446_25590;
var G__25596 = (i__23447_25591 + 1);
seq__23444_25588 = G__25593;
chunk__23445_25589 = G__25594;
count__23446_25590 = G__25595;
i__23447_25591 = G__25596;
continue;
}
} else
{var temp__4092__auto___25597 = cljs.core.seq.call(null,seq__23444_25588);if(temp__4092__auto___25597)
{var seq__23444_25598__$1 = temp__4092__auto___25597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23444_25598__$1))
{var c__20293__auto___25599 = cljs.core.chunk_first.call(null,seq__23444_25598__$1);{
var G__25600 = cljs.core.chunk_rest.call(null,seq__23444_25598__$1);
var G__25601 = c__20293__auto___25599;
var G__25602 = cljs.core.count.call(null,c__20293__auto___25599);
var G__25603 = 0;
seq__23444_25588 = G__25600;
chunk__23445_25589 = G__25601;
count__23446_25590 = G__25602;
i__23447_25591 = G__25603;
continue;
}
} else
{var arg__21712__auto___25604 = cljs.core.first.call(null,seq__23444_25598__$1);a__21711__auto__.push(arg__21712__auto___25604);
{
var G__25605 = cljs.core.next.call(null,seq__23444_25598__$1);
var G__25606 = null;
var G__25607 = 0;
var G__25608 = 0;
seq__23444_25588 = G__25605;
chunk__23445_25589 = G__25606;
count__23446_25590 = G__25607;
i__23447_25591 = G__25608;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__21711__auto__);
};
var small = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__21710__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__25609){
var args__21710__auto__ = cljs.core.seq(arglist__25609);
return small__delegate(args__21710__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23452_25610 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23453_25611 = null;var count__23454_25612 = 0;var i__23455_25613 = 0;while(true){
if((i__23455_25613 < count__23454_25612))
{var arg__21712__auto___25614 = cljs.core._nth.call(null,chunk__23453_25611,i__23455_25613);a__21711__auto__.push(arg__21712__auto___25614);
{
var G__25615 = seq__23452_25610;
var G__25616 = chunk__23453_25611;
var G__25617 = count__23454_25612;
var G__25618 = (i__23455_25613 + 1);
seq__23452_25610 = G__25615;
chunk__23453_25611 = G__25616;
count__23454_25612 = G__25617;
i__23455_25613 = G__25618;
continue;
}
} else
{var temp__4092__auto___25619 = cljs.core.seq.call(null,seq__23452_25610);if(temp__4092__auto___25619)
{var seq__23452_25620__$1 = temp__4092__auto___25619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23452_25620__$1))
{var c__20293__auto___25621 = cljs.core.chunk_first.call(null,seq__23452_25620__$1);{
var G__25622 = cljs.core.chunk_rest.call(null,seq__23452_25620__$1);
var G__25623 = c__20293__auto___25621;
var G__25624 = cljs.core.count.call(null,c__20293__auto___25621);
var G__25625 = 0;
seq__23452_25610 = G__25622;
chunk__23453_25611 = G__25623;
count__23454_25612 = G__25624;
i__23455_25613 = G__25625;
continue;
}
} else
{var arg__21712__auto___25626 = cljs.core.first.call(null,seq__23452_25620__$1);a__21711__auto__.push(arg__21712__auto___25626);
{
var G__25627 = cljs.core.next.call(null,seq__23452_25620__$1);
var G__25628 = null;
var G__25629 = 0;
var G__25630 = 0;
seq__23452_25610 = G__25627;
chunk__23453_25611 = G__25628;
count__23454_25612 = G__25629;
i__23455_25613 = G__25630;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__21711__auto__);
};
var source = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__21710__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__25631){
var args__21710__auto__ = cljs.core.seq(arglist__25631);
return source__delegate(args__21710__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23460_25632 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23461_25633 = null;var count__23462_25634 = 0;var i__23463_25635 = 0;while(true){
if((i__23463_25635 < count__23462_25634))
{var arg__21712__auto___25636 = cljs.core._nth.call(null,chunk__23461_25633,i__23463_25635);a__21711__auto__.push(arg__21712__auto___25636);
{
var G__25637 = seq__23460_25632;
var G__25638 = chunk__23461_25633;
var G__25639 = count__23462_25634;
var G__25640 = (i__23463_25635 + 1);
seq__23460_25632 = G__25637;
chunk__23461_25633 = G__25638;
count__23462_25634 = G__25639;
i__23463_25635 = G__25640;
continue;
}
} else
{var temp__4092__auto___25641 = cljs.core.seq.call(null,seq__23460_25632);if(temp__4092__auto___25641)
{var seq__23460_25642__$1 = temp__4092__auto___25641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23460_25642__$1))
{var c__20293__auto___25643 = cljs.core.chunk_first.call(null,seq__23460_25642__$1);{
var G__25644 = cljs.core.chunk_rest.call(null,seq__23460_25642__$1);
var G__25645 = c__20293__auto___25643;
var G__25646 = cljs.core.count.call(null,c__20293__auto___25643);
var G__25647 = 0;
seq__23460_25632 = G__25644;
chunk__23461_25633 = G__25645;
count__23462_25634 = G__25646;
i__23463_25635 = G__25647;
continue;
}
} else
{var arg__21712__auto___25648 = cljs.core.first.call(null,seq__23460_25642__$1);a__21711__auto__.push(arg__21712__auto___25648);
{
var G__25649 = cljs.core.next.call(null,seq__23460_25642__$1);
var G__25650 = null;
var G__25651 = 0;
var G__25652 = 0;
seq__23460_25632 = G__25649;
chunk__23461_25633 = G__25650;
count__23462_25634 = G__25651;
i__23463_25635 = G__25652;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__21711__auto__);
};
var span = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__21710__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__25653){
var args__21710__auto__ = cljs.core.seq(arglist__25653);
return span__delegate(args__21710__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23468_25654 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23469_25655 = null;var count__23470_25656 = 0;var i__23471_25657 = 0;while(true){
if((i__23471_25657 < count__23470_25656))
{var arg__21712__auto___25658 = cljs.core._nth.call(null,chunk__23469_25655,i__23471_25657);a__21711__auto__.push(arg__21712__auto___25658);
{
var G__25659 = seq__23468_25654;
var G__25660 = chunk__23469_25655;
var G__25661 = count__23470_25656;
var G__25662 = (i__23471_25657 + 1);
seq__23468_25654 = G__25659;
chunk__23469_25655 = G__25660;
count__23470_25656 = G__25661;
i__23471_25657 = G__25662;
continue;
}
} else
{var temp__4092__auto___25663 = cljs.core.seq.call(null,seq__23468_25654);if(temp__4092__auto___25663)
{var seq__23468_25664__$1 = temp__4092__auto___25663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23468_25664__$1))
{var c__20293__auto___25665 = cljs.core.chunk_first.call(null,seq__23468_25664__$1);{
var G__25666 = cljs.core.chunk_rest.call(null,seq__23468_25664__$1);
var G__25667 = c__20293__auto___25665;
var G__25668 = cljs.core.count.call(null,c__20293__auto___25665);
var G__25669 = 0;
seq__23468_25654 = G__25666;
chunk__23469_25655 = G__25667;
count__23470_25656 = G__25668;
i__23471_25657 = G__25669;
continue;
}
} else
{var arg__21712__auto___25670 = cljs.core.first.call(null,seq__23468_25664__$1);a__21711__auto__.push(arg__21712__auto___25670);
{
var G__25671 = cljs.core.next.call(null,seq__23468_25664__$1);
var G__25672 = null;
var G__25673 = 0;
var G__25674 = 0;
seq__23468_25654 = G__25671;
chunk__23469_25655 = G__25672;
count__23470_25656 = G__25673;
i__23471_25657 = G__25674;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__21711__auto__);
};
var strong = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__21710__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__25675){
var args__21710__auto__ = cljs.core.seq(arglist__25675);
return strong__delegate(args__21710__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23476_25676 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23477_25677 = null;var count__23478_25678 = 0;var i__23479_25679 = 0;while(true){
if((i__23479_25679 < count__23478_25678))
{var arg__21712__auto___25680 = cljs.core._nth.call(null,chunk__23477_25677,i__23479_25679);a__21711__auto__.push(arg__21712__auto___25680);
{
var G__25681 = seq__23476_25676;
var G__25682 = chunk__23477_25677;
var G__25683 = count__23478_25678;
var G__25684 = (i__23479_25679 + 1);
seq__23476_25676 = G__25681;
chunk__23477_25677 = G__25682;
count__23478_25678 = G__25683;
i__23479_25679 = G__25684;
continue;
}
} else
{var temp__4092__auto___25685 = cljs.core.seq.call(null,seq__23476_25676);if(temp__4092__auto___25685)
{var seq__23476_25686__$1 = temp__4092__auto___25685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23476_25686__$1))
{var c__20293__auto___25687 = cljs.core.chunk_first.call(null,seq__23476_25686__$1);{
var G__25688 = cljs.core.chunk_rest.call(null,seq__23476_25686__$1);
var G__25689 = c__20293__auto___25687;
var G__25690 = cljs.core.count.call(null,c__20293__auto___25687);
var G__25691 = 0;
seq__23476_25676 = G__25688;
chunk__23477_25677 = G__25689;
count__23478_25678 = G__25690;
i__23479_25679 = G__25691;
continue;
}
} else
{var arg__21712__auto___25692 = cljs.core.first.call(null,seq__23476_25686__$1);a__21711__auto__.push(arg__21712__auto___25692);
{
var G__25693 = cljs.core.next.call(null,seq__23476_25686__$1);
var G__25694 = null;
var G__25695 = 0;
var G__25696 = 0;
seq__23476_25676 = G__25693;
chunk__23477_25677 = G__25694;
count__23478_25678 = G__25695;
i__23479_25679 = G__25696;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__21711__auto__);
};
var style = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__21710__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__25697){
var args__21710__auto__ = cljs.core.seq(arglist__25697);
return style__delegate(args__21710__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23484_25698 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23485_25699 = null;var count__23486_25700 = 0;var i__23487_25701 = 0;while(true){
if((i__23487_25701 < count__23486_25700))
{var arg__21712__auto___25702 = cljs.core._nth.call(null,chunk__23485_25699,i__23487_25701);a__21711__auto__.push(arg__21712__auto___25702);
{
var G__25703 = seq__23484_25698;
var G__25704 = chunk__23485_25699;
var G__25705 = count__23486_25700;
var G__25706 = (i__23487_25701 + 1);
seq__23484_25698 = G__25703;
chunk__23485_25699 = G__25704;
count__23486_25700 = G__25705;
i__23487_25701 = G__25706;
continue;
}
} else
{var temp__4092__auto___25707 = cljs.core.seq.call(null,seq__23484_25698);if(temp__4092__auto___25707)
{var seq__23484_25708__$1 = temp__4092__auto___25707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23484_25708__$1))
{var c__20293__auto___25709 = cljs.core.chunk_first.call(null,seq__23484_25708__$1);{
var G__25710 = cljs.core.chunk_rest.call(null,seq__23484_25708__$1);
var G__25711 = c__20293__auto___25709;
var G__25712 = cljs.core.count.call(null,c__20293__auto___25709);
var G__25713 = 0;
seq__23484_25698 = G__25710;
chunk__23485_25699 = G__25711;
count__23486_25700 = G__25712;
i__23487_25701 = G__25713;
continue;
}
} else
{var arg__21712__auto___25714 = cljs.core.first.call(null,seq__23484_25708__$1);a__21711__auto__.push(arg__21712__auto___25714);
{
var G__25715 = cljs.core.next.call(null,seq__23484_25708__$1);
var G__25716 = null;
var G__25717 = 0;
var G__25718 = 0;
seq__23484_25698 = G__25715;
chunk__23485_25699 = G__25716;
count__23486_25700 = G__25717;
i__23487_25701 = G__25718;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__21711__auto__);
};
var sub = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__21710__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__25719){
var args__21710__auto__ = cljs.core.seq(arglist__25719);
return sub__delegate(args__21710__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23492_25720 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23493_25721 = null;var count__23494_25722 = 0;var i__23495_25723 = 0;while(true){
if((i__23495_25723 < count__23494_25722))
{var arg__21712__auto___25724 = cljs.core._nth.call(null,chunk__23493_25721,i__23495_25723);a__21711__auto__.push(arg__21712__auto___25724);
{
var G__25725 = seq__23492_25720;
var G__25726 = chunk__23493_25721;
var G__25727 = count__23494_25722;
var G__25728 = (i__23495_25723 + 1);
seq__23492_25720 = G__25725;
chunk__23493_25721 = G__25726;
count__23494_25722 = G__25727;
i__23495_25723 = G__25728;
continue;
}
} else
{var temp__4092__auto___25729 = cljs.core.seq.call(null,seq__23492_25720);if(temp__4092__auto___25729)
{var seq__23492_25730__$1 = temp__4092__auto___25729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23492_25730__$1))
{var c__20293__auto___25731 = cljs.core.chunk_first.call(null,seq__23492_25730__$1);{
var G__25732 = cljs.core.chunk_rest.call(null,seq__23492_25730__$1);
var G__25733 = c__20293__auto___25731;
var G__25734 = cljs.core.count.call(null,c__20293__auto___25731);
var G__25735 = 0;
seq__23492_25720 = G__25732;
chunk__23493_25721 = G__25733;
count__23494_25722 = G__25734;
i__23495_25723 = G__25735;
continue;
}
} else
{var arg__21712__auto___25736 = cljs.core.first.call(null,seq__23492_25730__$1);a__21711__auto__.push(arg__21712__auto___25736);
{
var G__25737 = cljs.core.next.call(null,seq__23492_25730__$1);
var G__25738 = null;
var G__25739 = 0;
var G__25740 = 0;
seq__23492_25720 = G__25737;
chunk__23493_25721 = G__25738;
count__23494_25722 = G__25739;
i__23495_25723 = G__25740;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__21711__auto__);
};
var summary = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__21710__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__25741){
var args__21710__auto__ = cljs.core.seq(arglist__25741);
return summary__delegate(args__21710__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23500_25742 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23501_25743 = null;var count__23502_25744 = 0;var i__23503_25745 = 0;while(true){
if((i__23503_25745 < count__23502_25744))
{var arg__21712__auto___25746 = cljs.core._nth.call(null,chunk__23501_25743,i__23503_25745);a__21711__auto__.push(arg__21712__auto___25746);
{
var G__25747 = seq__23500_25742;
var G__25748 = chunk__23501_25743;
var G__25749 = count__23502_25744;
var G__25750 = (i__23503_25745 + 1);
seq__23500_25742 = G__25747;
chunk__23501_25743 = G__25748;
count__23502_25744 = G__25749;
i__23503_25745 = G__25750;
continue;
}
} else
{var temp__4092__auto___25751 = cljs.core.seq.call(null,seq__23500_25742);if(temp__4092__auto___25751)
{var seq__23500_25752__$1 = temp__4092__auto___25751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23500_25752__$1))
{var c__20293__auto___25753 = cljs.core.chunk_first.call(null,seq__23500_25752__$1);{
var G__25754 = cljs.core.chunk_rest.call(null,seq__23500_25752__$1);
var G__25755 = c__20293__auto___25753;
var G__25756 = cljs.core.count.call(null,c__20293__auto___25753);
var G__25757 = 0;
seq__23500_25742 = G__25754;
chunk__23501_25743 = G__25755;
count__23502_25744 = G__25756;
i__23503_25745 = G__25757;
continue;
}
} else
{var arg__21712__auto___25758 = cljs.core.first.call(null,seq__23500_25752__$1);a__21711__auto__.push(arg__21712__auto___25758);
{
var G__25759 = cljs.core.next.call(null,seq__23500_25752__$1);
var G__25760 = null;
var G__25761 = 0;
var G__25762 = 0;
seq__23500_25742 = G__25759;
chunk__23501_25743 = G__25760;
count__23502_25744 = G__25761;
i__23503_25745 = G__25762;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__21711__auto__);
};
var sup = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__21710__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__25763){
var args__21710__auto__ = cljs.core.seq(arglist__25763);
return sup__delegate(args__21710__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23508_25764 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23509_25765 = null;var count__23510_25766 = 0;var i__23511_25767 = 0;while(true){
if((i__23511_25767 < count__23510_25766))
{var arg__21712__auto___25768 = cljs.core._nth.call(null,chunk__23509_25765,i__23511_25767);a__21711__auto__.push(arg__21712__auto___25768);
{
var G__25769 = seq__23508_25764;
var G__25770 = chunk__23509_25765;
var G__25771 = count__23510_25766;
var G__25772 = (i__23511_25767 + 1);
seq__23508_25764 = G__25769;
chunk__23509_25765 = G__25770;
count__23510_25766 = G__25771;
i__23511_25767 = G__25772;
continue;
}
} else
{var temp__4092__auto___25773 = cljs.core.seq.call(null,seq__23508_25764);if(temp__4092__auto___25773)
{var seq__23508_25774__$1 = temp__4092__auto___25773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23508_25774__$1))
{var c__20293__auto___25775 = cljs.core.chunk_first.call(null,seq__23508_25774__$1);{
var G__25776 = cljs.core.chunk_rest.call(null,seq__23508_25774__$1);
var G__25777 = c__20293__auto___25775;
var G__25778 = cljs.core.count.call(null,c__20293__auto___25775);
var G__25779 = 0;
seq__23508_25764 = G__25776;
chunk__23509_25765 = G__25777;
count__23510_25766 = G__25778;
i__23511_25767 = G__25779;
continue;
}
} else
{var arg__21712__auto___25780 = cljs.core.first.call(null,seq__23508_25774__$1);a__21711__auto__.push(arg__21712__auto___25780);
{
var G__25781 = cljs.core.next.call(null,seq__23508_25774__$1);
var G__25782 = null;
var G__25783 = 0;
var G__25784 = 0;
seq__23508_25764 = G__25781;
chunk__23509_25765 = G__25782;
count__23510_25766 = G__25783;
i__23511_25767 = G__25784;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__21711__auto__);
};
var table = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__21710__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__25785){
var args__21710__auto__ = cljs.core.seq(arglist__25785);
return table__delegate(args__21710__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23516_25786 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23517_25787 = null;var count__23518_25788 = 0;var i__23519_25789 = 0;while(true){
if((i__23519_25789 < count__23518_25788))
{var arg__21712__auto___25790 = cljs.core._nth.call(null,chunk__23517_25787,i__23519_25789);a__21711__auto__.push(arg__21712__auto___25790);
{
var G__25791 = seq__23516_25786;
var G__25792 = chunk__23517_25787;
var G__25793 = count__23518_25788;
var G__25794 = (i__23519_25789 + 1);
seq__23516_25786 = G__25791;
chunk__23517_25787 = G__25792;
count__23518_25788 = G__25793;
i__23519_25789 = G__25794;
continue;
}
} else
{var temp__4092__auto___25795 = cljs.core.seq.call(null,seq__23516_25786);if(temp__4092__auto___25795)
{var seq__23516_25796__$1 = temp__4092__auto___25795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23516_25796__$1))
{var c__20293__auto___25797 = cljs.core.chunk_first.call(null,seq__23516_25796__$1);{
var G__25798 = cljs.core.chunk_rest.call(null,seq__23516_25796__$1);
var G__25799 = c__20293__auto___25797;
var G__25800 = cljs.core.count.call(null,c__20293__auto___25797);
var G__25801 = 0;
seq__23516_25786 = G__25798;
chunk__23517_25787 = G__25799;
count__23518_25788 = G__25800;
i__23519_25789 = G__25801;
continue;
}
} else
{var arg__21712__auto___25802 = cljs.core.first.call(null,seq__23516_25796__$1);a__21711__auto__.push(arg__21712__auto___25802);
{
var G__25803 = cljs.core.next.call(null,seq__23516_25796__$1);
var G__25804 = null;
var G__25805 = 0;
var G__25806 = 0;
seq__23516_25786 = G__25803;
chunk__23517_25787 = G__25804;
count__23518_25788 = G__25805;
i__23519_25789 = G__25806;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__21711__auto__);
};
var tbody = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__21710__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__25807){
var args__21710__auto__ = cljs.core.seq(arglist__25807);
return tbody__delegate(args__21710__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23524_25808 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23525_25809 = null;var count__23526_25810 = 0;var i__23527_25811 = 0;while(true){
if((i__23527_25811 < count__23526_25810))
{var arg__21712__auto___25812 = cljs.core._nth.call(null,chunk__23525_25809,i__23527_25811);a__21711__auto__.push(arg__21712__auto___25812);
{
var G__25813 = seq__23524_25808;
var G__25814 = chunk__23525_25809;
var G__25815 = count__23526_25810;
var G__25816 = (i__23527_25811 + 1);
seq__23524_25808 = G__25813;
chunk__23525_25809 = G__25814;
count__23526_25810 = G__25815;
i__23527_25811 = G__25816;
continue;
}
} else
{var temp__4092__auto___25817 = cljs.core.seq.call(null,seq__23524_25808);if(temp__4092__auto___25817)
{var seq__23524_25818__$1 = temp__4092__auto___25817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23524_25818__$1))
{var c__20293__auto___25819 = cljs.core.chunk_first.call(null,seq__23524_25818__$1);{
var G__25820 = cljs.core.chunk_rest.call(null,seq__23524_25818__$1);
var G__25821 = c__20293__auto___25819;
var G__25822 = cljs.core.count.call(null,c__20293__auto___25819);
var G__25823 = 0;
seq__23524_25808 = G__25820;
chunk__23525_25809 = G__25821;
count__23526_25810 = G__25822;
i__23527_25811 = G__25823;
continue;
}
} else
{var arg__21712__auto___25824 = cljs.core.first.call(null,seq__23524_25818__$1);a__21711__auto__.push(arg__21712__auto___25824);
{
var G__25825 = cljs.core.next.call(null,seq__23524_25818__$1);
var G__25826 = null;
var G__25827 = 0;
var G__25828 = 0;
seq__23524_25808 = G__25825;
chunk__23525_25809 = G__25826;
count__23526_25810 = G__25827;
i__23527_25811 = G__25828;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__21711__auto__);
};
var td = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__21710__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__25829){
var args__21710__auto__ = cljs.core.seq(arglist__25829);
return td__delegate(args__21710__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23532_25830 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23533_25831 = null;var count__23534_25832 = 0;var i__23535_25833 = 0;while(true){
if((i__23535_25833 < count__23534_25832))
{var arg__21712__auto___25834 = cljs.core._nth.call(null,chunk__23533_25831,i__23535_25833);a__21711__auto__.push(arg__21712__auto___25834);
{
var G__25835 = seq__23532_25830;
var G__25836 = chunk__23533_25831;
var G__25837 = count__23534_25832;
var G__25838 = (i__23535_25833 + 1);
seq__23532_25830 = G__25835;
chunk__23533_25831 = G__25836;
count__23534_25832 = G__25837;
i__23535_25833 = G__25838;
continue;
}
} else
{var temp__4092__auto___25839 = cljs.core.seq.call(null,seq__23532_25830);if(temp__4092__auto___25839)
{var seq__23532_25840__$1 = temp__4092__auto___25839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23532_25840__$1))
{var c__20293__auto___25841 = cljs.core.chunk_first.call(null,seq__23532_25840__$1);{
var G__25842 = cljs.core.chunk_rest.call(null,seq__23532_25840__$1);
var G__25843 = c__20293__auto___25841;
var G__25844 = cljs.core.count.call(null,c__20293__auto___25841);
var G__25845 = 0;
seq__23532_25830 = G__25842;
chunk__23533_25831 = G__25843;
count__23534_25832 = G__25844;
i__23535_25833 = G__25845;
continue;
}
} else
{var arg__21712__auto___25846 = cljs.core.first.call(null,seq__23532_25840__$1);a__21711__auto__.push(arg__21712__auto___25846);
{
var G__25847 = cljs.core.next.call(null,seq__23532_25840__$1);
var G__25848 = null;
var G__25849 = 0;
var G__25850 = 0;
seq__23532_25830 = G__25847;
chunk__23533_25831 = G__25848;
count__23534_25832 = G__25849;
i__23535_25833 = G__25850;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__21711__auto__);
};
var textarea = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__21710__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__25851){
var args__21710__auto__ = cljs.core.seq(arglist__25851);
return textarea__delegate(args__21710__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23540_25852 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23541_25853 = null;var count__23542_25854 = 0;var i__23543_25855 = 0;while(true){
if((i__23543_25855 < count__23542_25854))
{var arg__21712__auto___25856 = cljs.core._nth.call(null,chunk__23541_25853,i__23543_25855);a__21711__auto__.push(arg__21712__auto___25856);
{
var G__25857 = seq__23540_25852;
var G__25858 = chunk__23541_25853;
var G__25859 = count__23542_25854;
var G__25860 = (i__23543_25855 + 1);
seq__23540_25852 = G__25857;
chunk__23541_25853 = G__25858;
count__23542_25854 = G__25859;
i__23543_25855 = G__25860;
continue;
}
} else
{var temp__4092__auto___25861 = cljs.core.seq.call(null,seq__23540_25852);if(temp__4092__auto___25861)
{var seq__23540_25862__$1 = temp__4092__auto___25861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23540_25862__$1))
{var c__20293__auto___25863 = cljs.core.chunk_first.call(null,seq__23540_25862__$1);{
var G__25864 = cljs.core.chunk_rest.call(null,seq__23540_25862__$1);
var G__25865 = c__20293__auto___25863;
var G__25866 = cljs.core.count.call(null,c__20293__auto___25863);
var G__25867 = 0;
seq__23540_25852 = G__25864;
chunk__23541_25853 = G__25865;
count__23542_25854 = G__25866;
i__23543_25855 = G__25867;
continue;
}
} else
{var arg__21712__auto___25868 = cljs.core.first.call(null,seq__23540_25862__$1);a__21711__auto__.push(arg__21712__auto___25868);
{
var G__25869 = cljs.core.next.call(null,seq__23540_25862__$1);
var G__25870 = null;
var G__25871 = 0;
var G__25872 = 0;
seq__23540_25852 = G__25869;
chunk__23541_25853 = G__25870;
count__23542_25854 = G__25871;
i__23543_25855 = G__25872;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__21711__auto__);
};
var tfoot = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__21710__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__25873){
var args__21710__auto__ = cljs.core.seq(arglist__25873);
return tfoot__delegate(args__21710__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23548_25874 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23549_25875 = null;var count__23550_25876 = 0;var i__23551_25877 = 0;while(true){
if((i__23551_25877 < count__23550_25876))
{var arg__21712__auto___25878 = cljs.core._nth.call(null,chunk__23549_25875,i__23551_25877);a__21711__auto__.push(arg__21712__auto___25878);
{
var G__25879 = seq__23548_25874;
var G__25880 = chunk__23549_25875;
var G__25881 = count__23550_25876;
var G__25882 = (i__23551_25877 + 1);
seq__23548_25874 = G__25879;
chunk__23549_25875 = G__25880;
count__23550_25876 = G__25881;
i__23551_25877 = G__25882;
continue;
}
} else
{var temp__4092__auto___25883 = cljs.core.seq.call(null,seq__23548_25874);if(temp__4092__auto___25883)
{var seq__23548_25884__$1 = temp__4092__auto___25883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23548_25884__$1))
{var c__20293__auto___25885 = cljs.core.chunk_first.call(null,seq__23548_25884__$1);{
var G__25886 = cljs.core.chunk_rest.call(null,seq__23548_25884__$1);
var G__25887 = c__20293__auto___25885;
var G__25888 = cljs.core.count.call(null,c__20293__auto___25885);
var G__25889 = 0;
seq__23548_25874 = G__25886;
chunk__23549_25875 = G__25887;
count__23550_25876 = G__25888;
i__23551_25877 = G__25889;
continue;
}
} else
{var arg__21712__auto___25890 = cljs.core.first.call(null,seq__23548_25884__$1);a__21711__auto__.push(arg__21712__auto___25890);
{
var G__25891 = cljs.core.next.call(null,seq__23548_25884__$1);
var G__25892 = null;
var G__25893 = 0;
var G__25894 = 0;
seq__23548_25874 = G__25891;
chunk__23549_25875 = G__25892;
count__23550_25876 = G__25893;
i__23551_25877 = G__25894;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__21711__auto__);
};
var th = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__21710__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__25895){
var args__21710__auto__ = cljs.core.seq(arglist__25895);
return th__delegate(args__21710__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23556_25896 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23557_25897 = null;var count__23558_25898 = 0;var i__23559_25899 = 0;while(true){
if((i__23559_25899 < count__23558_25898))
{var arg__21712__auto___25900 = cljs.core._nth.call(null,chunk__23557_25897,i__23559_25899);a__21711__auto__.push(arg__21712__auto___25900);
{
var G__25901 = seq__23556_25896;
var G__25902 = chunk__23557_25897;
var G__25903 = count__23558_25898;
var G__25904 = (i__23559_25899 + 1);
seq__23556_25896 = G__25901;
chunk__23557_25897 = G__25902;
count__23558_25898 = G__25903;
i__23559_25899 = G__25904;
continue;
}
} else
{var temp__4092__auto___25905 = cljs.core.seq.call(null,seq__23556_25896);if(temp__4092__auto___25905)
{var seq__23556_25906__$1 = temp__4092__auto___25905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23556_25906__$1))
{var c__20293__auto___25907 = cljs.core.chunk_first.call(null,seq__23556_25906__$1);{
var G__25908 = cljs.core.chunk_rest.call(null,seq__23556_25906__$1);
var G__25909 = c__20293__auto___25907;
var G__25910 = cljs.core.count.call(null,c__20293__auto___25907);
var G__25911 = 0;
seq__23556_25896 = G__25908;
chunk__23557_25897 = G__25909;
count__23558_25898 = G__25910;
i__23559_25899 = G__25911;
continue;
}
} else
{var arg__21712__auto___25912 = cljs.core.first.call(null,seq__23556_25906__$1);a__21711__auto__.push(arg__21712__auto___25912);
{
var G__25913 = cljs.core.next.call(null,seq__23556_25906__$1);
var G__25914 = null;
var G__25915 = 0;
var G__25916 = 0;
seq__23556_25896 = G__25913;
chunk__23557_25897 = G__25914;
count__23558_25898 = G__25915;
i__23559_25899 = G__25916;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__21711__auto__);
};
var thead = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__21710__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__25917){
var args__21710__auto__ = cljs.core.seq(arglist__25917);
return thead__delegate(args__21710__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23564_25918 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23565_25919 = null;var count__23566_25920 = 0;var i__23567_25921 = 0;while(true){
if((i__23567_25921 < count__23566_25920))
{var arg__21712__auto___25922 = cljs.core._nth.call(null,chunk__23565_25919,i__23567_25921);a__21711__auto__.push(arg__21712__auto___25922);
{
var G__25923 = seq__23564_25918;
var G__25924 = chunk__23565_25919;
var G__25925 = count__23566_25920;
var G__25926 = (i__23567_25921 + 1);
seq__23564_25918 = G__25923;
chunk__23565_25919 = G__25924;
count__23566_25920 = G__25925;
i__23567_25921 = G__25926;
continue;
}
} else
{var temp__4092__auto___25927 = cljs.core.seq.call(null,seq__23564_25918);if(temp__4092__auto___25927)
{var seq__23564_25928__$1 = temp__4092__auto___25927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23564_25928__$1))
{var c__20293__auto___25929 = cljs.core.chunk_first.call(null,seq__23564_25928__$1);{
var G__25930 = cljs.core.chunk_rest.call(null,seq__23564_25928__$1);
var G__25931 = c__20293__auto___25929;
var G__25932 = cljs.core.count.call(null,c__20293__auto___25929);
var G__25933 = 0;
seq__23564_25918 = G__25930;
chunk__23565_25919 = G__25931;
count__23566_25920 = G__25932;
i__23567_25921 = G__25933;
continue;
}
} else
{var arg__21712__auto___25934 = cljs.core.first.call(null,seq__23564_25928__$1);a__21711__auto__.push(arg__21712__auto___25934);
{
var G__25935 = cljs.core.next.call(null,seq__23564_25928__$1);
var G__25936 = null;
var G__25937 = 0;
var G__25938 = 0;
seq__23564_25918 = G__25935;
chunk__23565_25919 = G__25936;
count__23566_25920 = G__25937;
i__23567_25921 = G__25938;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__21711__auto__);
};
var time = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__21710__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__25939){
var args__21710__auto__ = cljs.core.seq(arglist__25939);
return time__delegate(args__21710__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23572_25940 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23573_25941 = null;var count__23574_25942 = 0;var i__23575_25943 = 0;while(true){
if((i__23575_25943 < count__23574_25942))
{var arg__21712__auto___25944 = cljs.core._nth.call(null,chunk__23573_25941,i__23575_25943);a__21711__auto__.push(arg__21712__auto___25944);
{
var G__25945 = seq__23572_25940;
var G__25946 = chunk__23573_25941;
var G__25947 = count__23574_25942;
var G__25948 = (i__23575_25943 + 1);
seq__23572_25940 = G__25945;
chunk__23573_25941 = G__25946;
count__23574_25942 = G__25947;
i__23575_25943 = G__25948;
continue;
}
} else
{var temp__4092__auto___25949 = cljs.core.seq.call(null,seq__23572_25940);if(temp__4092__auto___25949)
{var seq__23572_25950__$1 = temp__4092__auto___25949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23572_25950__$1))
{var c__20293__auto___25951 = cljs.core.chunk_first.call(null,seq__23572_25950__$1);{
var G__25952 = cljs.core.chunk_rest.call(null,seq__23572_25950__$1);
var G__25953 = c__20293__auto___25951;
var G__25954 = cljs.core.count.call(null,c__20293__auto___25951);
var G__25955 = 0;
seq__23572_25940 = G__25952;
chunk__23573_25941 = G__25953;
count__23574_25942 = G__25954;
i__23575_25943 = G__25955;
continue;
}
} else
{var arg__21712__auto___25956 = cljs.core.first.call(null,seq__23572_25950__$1);a__21711__auto__.push(arg__21712__auto___25956);
{
var G__25957 = cljs.core.next.call(null,seq__23572_25950__$1);
var G__25958 = null;
var G__25959 = 0;
var G__25960 = 0;
seq__23572_25940 = G__25957;
chunk__23573_25941 = G__25958;
count__23574_25942 = G__25959;
i__23575_25943 = G__25960;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__21711__auto__);
};
var title = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__21710__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__25961){
var args__21710__auto__ = cljs.core.seq(arglist__25961);
return title__delegate(args__21710__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23580_25962 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23581_25963 = null;var count__23582_25964 = 0;var i__23583_25965 = 0;while(true){
if((i__23583_25965 < count__23582_25964))
{var arg__21712__auto___25966 = cljs.core._nth.call(null,chunk__23581_25963,i__23583_25965);a__21711__auto__.push(arg__21712__auto___25966);
{
var G__25967 = seq__23580_25962;
var G__25968 = chunk__23581_25963;
var G__25969 = count__23582_25964;
var G__25970 = (i__23583_25965 + 1);
seq__23580_25962 = G__25967;
chunk__23581_25963 = G__25968;
count__23582_25964 = G__25969;
i__23583_25965 = G__25970;
continue;
}
} else
{var temp__4092__auto___25971 = cljs.core.seq.call(null,seq__23580_25962);if(temp__4092__auto___25971)
{var seq__23580_25972__$1 = temp__4092__auto___25971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23580_25972__$1))
{var c__20293__auto___25973 = cljs.core.chunk_first.call(null,seq__23580_25972__$1);{
var G__25974 = cljs.core.chunk_rest.call(null,seq__23580_25972__$1);
var G__25975 = c__20293__auto___25973;
var G__25976 = cljs.core.count.call(null,c__20293__auto___25973);
var G__25977 = 0;
seq__23580_25962 = G__25974;
chunk__23581_25963 = G__25975;
count__23582_25964 = G__25976;
i__23583_25965 = G__25977;
continue;
}
} else
{var arg__21712__auto___25978 = cljs.core.first.call(null,seq__23580_25972__$1);a__21711__auto__.push(arg__21712__auto___25978);
{
var G__25979 = cljs.core.next.call(null,seq__23580_25972__$1);
var G__25980 = null;
var G__25981 = 0;
var G__25982 = 0;
seq__23580_25962 = G__25979;
chunk__23581_25963 = G__25980;
count__23582_25964 = G__25981;
i__23583_25965 = G__25982;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__21711__auto__);
};
var tr = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__21710__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__25983){
var args__21710__auto__ = cljs.core.seq(arglist__25983);
return tr__delegate(args__21710__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23588_25984 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23589_25985 = null;var count__23590_25986 = 0;var i__23591_25987 = 0;while(true){
if((i__23591_25987 < count__23590_25986))
{var arg__21712__auto___25988 = cljs.core._nth.call(null,chunk__23589_25985,i__23591_25987);a__21711__auto__.push(arg__21712__auto___25988);
{
var G__25989 = seq__23588_25984;
var G__25990 = chunk__23589_25985;
var G__25991 = count__23590_25986;
var G__25992 = (i__23591_25987 + 1);
seq__23588_25984 = G__25989;
chunk__23589_25985 = G__25990;
count__23590_25986 = G__25991;
i__23591_25987 = G__25992;
continue;
}
} else
{var temp__4092__auto___25993 = cljs.core.seq.call(null,seq__23588_25984);if(temp__4092__auto___25993)
{var seq__23588_25994__$1 = temp__4092__auto___25993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23588_25994__$1))
{var c__20293__auto___25995 = cljs.core.chunk_first.call(null,seq__23588_25994__$1);{
var G__25996 = cljs.core.chunk_rest.call(null,seq__23588_25994__$1);
var G__25997 = c__20293__auto___25995;
var G__25998 = cljs.core.count.call(null,c__20293__auto___25995);
var G__25999 = 0;
seq__23588_25984 = G__25996;
chunk__23589_25985 = G__25997;
count__23590_25986 = G__25998;
i__23591_25987 = G__25999;
continue;
}
} else
{var arg__21712__auto___26000 = cljs.core.first.call(null,seq__23588_25994__$1);a__21711__auto__.push(arg__21712__auto___26000);
{
var G__26001 = cljs.core.next.call(null,seq__23588_25994__$1);
var G__26002 = null;
var G__26003 = 0;
var G__26004 = 0;
seq__23588_25984 = G__26001;
chunk__23589_25985 = G__26002;
count__23590_25986 = G__26003;
i__23591_25987 = G__26004;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__21711__auto__);
};
var track = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__21710__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__26005){
var args__21710__auto__ = cljs.core.seq(arglist__26005);
return track__delegate(args__21710__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23596_26006 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23597_26007 = null;var count__23598_26008 = 0;var i__23599_26009 = 0;while(true){
if((i__23599_26009 < count__23598_26008))
{var arg__21712__auto___26010 = cljs.core._nth.call(null,chunk__23597_26007,i__23599_26009);a__21711__auto__.push(arg__21712__auto___26010);
{
var G__26011 = seq__23596_26006;
var G__26012 = chunk__23597_26007;
var G__26013 = count__23598_26008;
var G__26014 = (i__23599_26009 + 1);
seq__23596_26006 = G__26011;
chunk__23597_26007 = G__26012;
count__23598_26008 = G__26013;
i__23599_26009 = G__26014;
continue;
}
} else
{var temp__4092__auto___26015 = cljs.core.seq.call(null,seq__23596_26006);if(temp__4092__auto___26015)
{var seq__23596_26016__$1 = temp__4092__auto___26015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23596_26016__$1))
{var c__20293__auto___26017 = cljs.core.chunk_first.call(null,seq__23596_26016__$1);{
var G__26018 = cljs.core.chunk_rest.call(null,seq__23596_26016__$1);
var G__26019 = c__20293__auto___26017;
var G__26020 = cljs.core.count.call(null,c__20293__auto___26017);
var G__26021 = 0;
seq__23596_26006 = G__26018;
chunk__23597_26007 = G__26019;
count__23598_26008 = G__26020;
i__23599_26009 = G__26021;
continue;
}
} else
{var arg__21712__auto___26022 = cljs.core.first.call(null,seq__23596_26016__$1);a__21711__auto__.push(arg__21712__auto___26022);
{
var G__26023 = cljs.core.next.call(null,seq__23596_26016__$1);
var G__26024 = null;
var G__26025 = 0;
var G__26026 = 0;
seq__23596_26006 = G__26023;
chunk__23597_26007 = G__26024;
count__23598_26008 = G__26025;
i__23599_26009 = G__26026;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__21711__auto__);
};
var u = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__21710__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__26027){
var args__21710__auto__ = cljs.core.seq(arglist__26027);
return u__delegate(args__21710__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23604_26028 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23605_26029 = null;var count__23606_26030 = 0;var i__23607_26031 = 0;while(true){
if((i__23607_26031 < count__23606_26030))
{var arg__21712__auto___26032 = cljs.core._nth.call(null,chunk__23605_26029,i__23607_26031);a__21711__auto__.push(arg__21712__auto___26032);
{
var G__26033 = seq__23604_26028;
var G__26034 = chunk__23605_26029;
var G__26035 = count__23606_26030;
var G__26036 = (i__23607_26031 + 1);
seq__23604_26028 = G__26033;
chunk__23605_26029 = G__26034;
count__23606_26030 = G__26035;
i__23607_26031 = G__26036;
continue;
}
} else
{var temp__4092__auto___26037 = cljs.core.seq.call(null,seq__23604_26028);if(temp__4092__auto___26037)
{var seq__23604_26038__$1 = temp__4092__auto___26037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23604_26038__$1))
{var c__20293__auto___26039 = cljs.core.chunk_first.call(null,seq__23604_26038__$1);{
var G__26040 = cljs.core.chunk_rest.call(null,seq__23604_26038__$1);
var G__26041 = c__20293__auto___26039;
var G__26042 = cljs.core.count.call(null,c__20293__auto___26039);
var G__26043 = 0;
seq__23604_26028 = G__26040;
chunk__23605_26029 = G__26041;
count__23606_26030 = G__26042;
i__23607_26031 = G__26043;
continue;
}
} else
{var arg__21712__auto___26044 = cljs.core.first.call(null,seq__23604_26038__$1);a__21711__auto__.push(arg__21712__auto___26044);
{
var G__26045 = cljs.core.next.call(null,seq__23604_26038__$1);
var G__26046 = null;
var G__26047 = 0;
var G__26048 = 0;
seq__23604_26028 = G__26045;
chunk__23605_26029 = G__26046;
count__23606_26030 = G__26047;
i__23607_26031 = G__26048;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__21711__auto__);
};
var ul = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__21710__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__26049){
var args__21710__auto__ = cljs.core.seq(arglist__26049);
return ul__delegate(args__21710__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23612_26050 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23613_26051 = null;var count__23614_26052 = 0;var i__23615_26053 = 0;while(true){
if((i__23615_26053 < count__23614_26052))
{var arg__21712__auto___26054 = cljs.core._nth.call(null,chunk__23613_26051,i__23615_26053);a__21711__auto__.push(arg__21712__auto___26054);
{
var G__26055 = seq__23612_26050;
var G__26056 = chunk__23613_26051;
var G__26057 = count__23614_26052;
var G__26058 = (i__23615_26053 + 1);
seq__23612_26050 = G__26055;
chunk__23613_26051 = G__26056;
count__23614_26052 = G__26057;
i__23615_26053 = G__26058;
continue;
}
} else
{var temp__4092__auto___26059 = cljs.core.seq.call(null,seq__23612_26050);if(temp__4092__auto___26059)
{var seq__23612_26060__$1 = temp__4092__auto___26059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23612_26060__$1))
{var c__20293__auto___26061 = cljs.core.chunk_first.call(null,seq__23612_26060__$1);{
var G__26062 = cljs.core.chunk_rest.call(null,seq__23612_26060__$1);
var G__26063 = c__20293__auto___26061;
var G__26064 = cljs.core.count.call(null,c__20293__auto___26061);
var G__26065 = 0;
seq__23612_26050 = G__26062;
chunk__23613_26051 = G__26063;
count__23614_26052 = G__26064;
i__23615_26053 = G__26065;
continue;
}
} else
{var arg__21712__auto___26066 = cljs.core.first.call(null,seq__23612_26060__$1);a__21711__auto__.push(arg__21712__auto___26066);
{
var G__26067 = cljs.core.next.call(null,seq__23612_26060__$1);
var G__26068 = null;
var G__26069 = 0;
var G__26070 = 0;
seq__23612_26050 = G__26067;
chunk__23613_26051 = G__26068;
count__23614_26052 = G__26069;
i__23615_26053 = G__26070;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__21711__auto__);
};
var var$ = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__21710__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__26071){
var args__21710__auto__ = cljs.core.seq(arglist__26071);
return var$__delegate(args__21710__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23620_26072 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23621_26073 = null;var count__23622_26074 = 0;var i__23623_26075 = 0;while(true){
if((i__23623_26075 < count__23622_26074))
{var arg__21712__auto___26076 = cljs.core._nth.call(null,chunk__23621_26073,i__23623_26075);a__21711__auto__.push(arg__21712__auto___26076);
{
var G__26077 = seq__23620_26072;
var G__26078 = chunk__23621_26073;
var G__26079 = count__23622_26074;
var G__26080 = (i__23623_26075 + 1);
seq__23620_26072 = G__26077;
chunk__23621_26073 = G__26078;
count__23622_26074 = G__26079;
i__23623_26075 = G__26080;
continue;
}
} else
{var temp__4092__auto___26081 = cljs.core.seq.call(null,seq__23620_26072);if(temp__4092__auto___26081)
{var seq__23620_26082__$1 = temp__4092__auto___26081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23620_26082__$1))
{var c__20293__auto___26083 = cljs.core.chunk_first.call(null,seq__23620_26082__$1);{
var G__26084 = cljs.core.chunk_rest.call(null,seq__23620_26082__$1);
var G__26085 = c__20293__auto___26083;
var G__26086 = cljs.core.count.call(null,c__20293__auto___26083);
var G__26087 = 0;
seq__23620_26072 = G__26084;
chunk__23621_26073 = G__26085;
count__23622_26074 = G__26086;
i__23623_26075 = G__26087;
continue;
}
} else
{var arg__21712__auto___26088 = cljs.core.first.call(null,seq__23620_26082__$1);a__21711__auto__.push(arg__21712__auto___26088);
{
var G__26089 = cljs.core.next.call(null,seq__23620_26082__$1);
var G__26090 = null;
var G__26091 = 0;
var G__26092 = 0;
seq__23620_26072 = G__26089;
chunk__23621_26073 = G__26090;
count__23622_26074 = G__26091;
i__23623_26075 = G__26092;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__21711__auto__);
};
var video = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__21710__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__26093){
var args__21710__auto__ = cljs.core.seq(arglist__26093);
return video__delegate(args__21710__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23628_26094 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23629_26095 = null;var count__23630_26096 = 0;var i__23631_26097 = 0;while(true){
if((i__23631_26097 < count__23630_26096))
{var arg__21712__auto___26098 = cljs.core._nth.call(null,chunk__23629_26095,i__23631_26097);a__21711__auto__.push(arg__21712__auto___26098);
{
var G__26099 = seq__23628_26094;
var G__26100 = chunk__23629_26095;
var G__26101 = count__23630_26096;
var G__26102 = (i__23631_26097 + 1);
seq__23628_26094 = G__26099;
chunk__23629_26095 = G__26100;
count__23630_26096 = G__26101;
i__23631_26097 = G__26102;
continue;
}
} else
{var temp__4092__auto___26103 = cljs.core.seq.call(null,seq__23628_26094);if(temp__4092__auto___26103)
{var seq__23628_26104__$1 = temp__4092__auto___26103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23628_26104__$1))
{var c__20293__auto___26105 = cljs.core.chunk_first.call(null,seq__23628_26104__$1);{
var G__26106 = cljs.core.chunk_rest.call(null,seq__23628_26104__$1);
var G__26107 = c__20293__auto___26105;
var G__26108 = cljs.core.count.call(null,c__20293__auto___26105);
var G__26109 = 0;
seq__23628_26094 = G__26106;
chunk__23629_26095 = G__26107;
count__23630_26096 = G__26108;
i__23631_26097 = G__26109;
continue;
}
} else
{var arg__21712__auto___26110 = cljs.core.first.call(null,seq__23628_26104__$1);a__21711__auto__.push(arg__21712__auto___26110);
{
var G__26111 = cljs.core.next.call(null,seq__23628_26104__$1);
var G__26112 = null;
var G__26113 = 0;
var G__26114 = 0;
seq__23628_26094 = G__26111;
chunk__23629_26095 = G__26112;
count__23630_26096 = G__26113;
i__23631_26097 = G__26114;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__21711__auto__);
};
var wbr = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__21710__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__26115){
var args__21710__auto__ = cljs.core.seq(arglist__26115);
return wbr__delegate(args__21710__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23636_26116 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23637_26117 = null;var count__23638_26118 = 0;var i__23639_26119 = 0;while(true){
if((i__23639_26119 < count__23638_26118))
{var arg__21712__auto___26120 = cljs.core._nth.call(null,chunk__23637_26117,i__23639_26119);a__21711__auto__.push(arg__21712__auto___26120);
{
var G__26121 = seq__23636_26116;
var G__26122 = chunk__23637_26117;
var G__26123 = count__23638_26118;
var G__26124 = (i__23639_26119 + 1);
seq__23636_26116 = G__26121;
chunk__23637_26117 = G__26122;
count__23638_26118 = G__26123;
i__23639_26119 = G__26124;
continue;
}
} else
{var temp__4092__auto___26125 = cljs.core.seq.call(null,seq__23636_26116);if(temp__4092__auto___26125)
{var seq__23636_26126__$1 = temp__4092__auto___26125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23636_26126__$1))
{var c__20293__auto___26127 = cljs.core.chunk_first.call(null,seq__23636_26126__$1);{
var G__26128 = cljs.core.chunk_rest.call(null,seq__23636_26126__$1);
var G__26129 = c__20293__auto___26127;
var G__26130 = cljs.core.count.call(null,c__20293__auto___26127);
var G__26131 = 0;
seq__23636_26116 = G__26128;
chunk__23637_26117 = G__26129;
count__23638_26118 = G__26130;
i__23639_26119 = G__26131;
continue;
}
} else
{var arg__21712__auto___26132 = cljs.core.first.call(null,seq__23636_26126__$1);a__21711__auto__.push(arg__21712__auto___26132);
{
var G__26133 = cljs.core.next.call(null,seq__23636_26126__$1);
var G__26134 = null;
var G__26135 = 0;
var G__26136 = 0;
seq__23636_26116 = G__26133;
chunk__23637_26117 = G__26134;
count__23638_26118 = G__26135;
i__23639_26119 = G__26136;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__21711__auto__);
};
var circle = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__21710__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__26137){
var args__21710__auto__ = cljs.core.seq(arglist__26137);
return circle__delegate(args__21710__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23644_26138 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23645_26139 = null;var count__23646_26140 = 0;var i__23647_26141 = 0;while(true){
if((i__23647_26141 < count__23646_26140))
{var arg__21712__auto___26142 = cljs.core._nth.call(null,chunk__23645_26139,i__23647_26141);a__21711__auto__.push(arg__21712__auto___26142);
{
var G__26143 = seq__23644_26138;
var G__26144 = chunk__23645_26139;
var G__26145 = count__23646_26140;
var G__26146 = (i__23647_26141 + 1);
seq__23644_26138 = G__26143;
chunk__23645_26139 = G__26144;
count__23646_26140 = G__26145;
i__23647_26141 = G__26146;
continue;
}
} else
{var temp__4092__auto___26147 = cljs.core.seq.call(null,seq__23644_26138);if(temp__4092__auto___26147)
{var seq__23644_26148__$1 = temp__4092__auto___26147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23644_26148__$1))
{var c__20293__auto___26149 = cljs.core.chunk_first.call(null,seq__23644_26148__$1);{
var G__26150 = cljs.core.chunk_rest.call(null,seq__23644_26148__$1);
var G__26151 = c__20293__auto___26149;
var G__26152 = cljs.core.count.call(null,c__20293__auto___26149);
var G__26153 = 0;
seq__23644_26138 = G__26150;
chunk__23645_26139 = G__26151;
count__23646_26140 = G__26152;
i__23647_26141 = G__26153;
continue;
}
} else
{var arg__21712__auto___26154 = cljs.core.first.call(null,seq__23644_26148__$1);a__21711__auto__.push(arg__21712__auto___26154);
{
var G__26155 = cljs.core.next.call(null,seq__23644_26148__$1);
var G__26156 = null;
var G__26157 = 0;
var G__26158 = 0;
seq__23644_26138 = G__26155;
chunk__23645_26139 = G__26156;
count__23646_26140 = G__26157;
i__23647_26141 = G__26158;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__21711__auto__);
};
var g = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__21710__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__26159){
var args__21710__auto__ = cljs.core.seq(arglist__26159);
return g__delegate(args__21710__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23652_26160 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23653_26161 = null;var count__23654_26162 = 0;var i__23655_26163 = 0;while(true){
if((i__23655_26163 < count__23654_26162))
{var arg__21712__auto___26164 = cljs.core._nth.call(null,chunk__23653_26161,i__23655_26163);a__21711__auto__.push(arg__21712__auto___26164);
{
var G__26165 = seq__23652_26160;
var G__26166 = chunk__23653_26161;
var G__26167 = count__23654_26162;
var G__26168 = (i__23655_26163 + 1);
seq__23652_26160 = G__26165;
chunk__23653_26161 = G__26166;
count__23654_26162 = G__26167;
i__23655_26163 = G__26168;
continue;
}
} else
{var temp__4092__auto___26169 = cljs.core.seq.call(null,seq__23652_26160);if(temp__4092__auto___26169)
{var seq__23652_26170__$1 = temp__4092__auto___26169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23652_26170__$1))
{var c__20293__auto___26171 = cljs.core.chunk_first.call(null,seq__23652_26170__$1);{
var G__26172 = cljs.core.chunk_rest.call(null,seq__23652_26170__$1);
var G__26173 = c__20293__auto___26171;
var G__26174 = cljs.core.count.call(null,c__20293__auto___26171);
var G__26175 = 0;
seq__23652_26160 = G__26172;
chunk__23653_26161 = G__26173;
count__23654_26162 = G__26174;
i__23655_26163 = G__26175;
continue;
}
} else
{var arg__21712__auto___26176 = cljs.core.first.call(null,seq__23652_26170__$1);a__21711__auto__.push(arg__21712__auto___26176);
{
var G__26177 = cljs.core.next.call(null,seq__23652_26170__$1);
var G__26178 = null;
var G__26179 = 0;
var G__26180 = 0;
seq__23652_26160 = G__26177;
chunk__23653_26161 = G__26178;
count__23654_26162 = G__26179;
i__23655_26163 = G__26180;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__21711__auto__);
};
var line = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__21710__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__26181){
var args__21710__auto__ = cljs.core.seq(arglist__26181);
return line__delegate(args__21710__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23660_26182 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23661_26183 = null;var count__23662_26184 = 0;var i__23663_26185 = 0;while(true){
if((i__23663_26185 < count__23662_26184))
{var arg__21712__auto___26186 = cljs.core._nth.call(null,chunk__23661_26183,i__23663_26185);a__21711__auto__.push(arg__21712__auto___26186);
{
var G__26187 = seq__23660_26182;
var G__26188 = chunk__23661_26183;
var G__26189 = count__23662_26184;
var G__26190 = (i__23663_26185 + 1);
seq__23660_26182 = G__26187;
chunk__23661_26183 = G__26188;
count__23662_26184 = G__26189;
i__23663_26185 = G__26190;
continue;
}
} else
{var temp__4092__auto___26191 = cljs.core.seq.call(null,seq__23660_26182);if(temp__4092__auto___26191)
{var seq__23660_26192__$1 = temp__4092__auto___26191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23660_26192__$1))
{var c__20293__auto___26193 = cljs.core.chunk_first.call(null,seq__23660_26192__$1);{
var G__26194 = cljs.core.chunk_rest.call(null,seq__23660_26192__$1);
var G__26195 = c__20293__auto___26193;
var G__26196 = cljs.core.count.call(null,c__20293__auto___26193);
var G__26197 = 0;
seq__23660_26182 = G__26194;
chunk__23661_26183 = G__26195;
count__23662_26184 = G__26196;
i__23663_26185 = G__26197;
continue;
}
} else
{var arg__21712__auto___26198 = cljs.core.first.call(null,seq__23660_26192__$1);a__21711__auto__.push(arg__21712__auto___26198);
{
var G__26199 = cljs.core.next.call(null,seq__23660_26192__$1);
var G__26200 = null;
var G__26201 = 0;
var G__26202 = 0;
seq__23660_26182 = G__26199;
chunk__23661_26183 = G__26200;
count__23662_26184 = G__26201;
i__23663_26185 = G__26202;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__21711__auto__);
};
var path = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__21710__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__26203){
var args__21710__auto__ = cljs.core.seq(arglist__26203);
return path__delegate(args__21710__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23668_26204 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23669_26205 = null;var count__23670_26206 = 0;var i__23671_26207 = 0;while(true){
if((i__23671_26207 < count__23670_26206))
{var arg__21712__auto___26208 = cljs.core._nth.call(null,chunk__23669_26205,i__23671_26207);a__21711__auto__.push(arg__21712__auto___26208);
{
var G__26209 = seq__23668_26204;
var G__26210 = chunk__23669_26205;
var G__26211 = count__23670_26206;
var G__26212 = (i__23671_26207 + 1);
seq__23668_26204 = G__26209;
chunk__23669_26205 = G__26210;
count__23670_26206 = G__26211;
i__23671_26207 = G__26212;
continue;
}
} else
{var temp__4092__auto___26213 = cljs.core.seq.call(null,seq__23668_26204);if(temp__4092__auto___26213)
{var seq__23668_26214__$1 = temp__4092__auto___26213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23668_26214__$1))
{var c__20293__auto___26215 = cljs.core.chunk_first.call(null,seq__23668_26214__$1);{
var G__26216 = cljs.core.chunk_rest.call(null,seq__23668_26214__$1);
var G__26217 = c__20293__auto___26215;
var G__26218 = cljs.core.count.call(null,c__20293__auto___26215);
var G__26219 = 0;
seq__23668_26204 = G__26216;
chunk__23669_26205 = G__26217;
count__23670_26206 = G__26218;
i__23671_26207 = G__26219;
continue;
}
} else
{var arg__21712__auto___26220 = cljs.core.first.call(null,seq__23668_26214__$1);a__21711__auto__.push(arg__21712__auto___26220);
{
var G__26221 = cljs.core.next.call(null,seq__23668_26214__$1);
var G__26222 = null;
var G__26223 = 0;
var G__26224 = 0;
seq__23668_26204 = G__26221;
chunk__23669_26205 = G__26222;
count__23670_26206 = G__26223;
i__23671_26207 = G__26224;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__21711__auto__);
};
var polygon = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__21710__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__26225){
var args__21710__auto__ = cljs.core.seq(arglist__26225);
return polygon__delegate(args__21710__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23676_26226 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23677_26227 = null;var count__23678_26228 = 0;var i__23679_26229 = 0;while(true){
if((i__23679_26229 < count__23678_26228))
{var arg__21712__auto___26230 = cljs.core._nth.call(null,chunk__23677_26227,i__23679_26229);a__21711__auto__.push(arg__21712__auto___26230);
{
var G__26231 = seq__23676_26226;
var G__26232 = chunk__23677_26227;
var G__26233 = count__23678_26228;
var G__26234 = (i__23679_26229 + 1);
seq__23676_26226 = G__26231;
chunk__23677_26227 = G__26232;
count__23678_26228 = G__26233;
i__23679_26229 = G__26234;
continue;
}
} else
{var temp__4092__auto___26235 = cljs.core.seq.call(null,seq__23676_26226);if(temp__4092__auto___26235)
{var seq__23676_26236__$1 = temp__4092__auto___26235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23676_26236__$1))
{var c__20293__auto___26237 = cljs.core.chunk_first.call(null,seq__23676_26236__$1);{
var G__26238 = cljs.core.chunk_rest.call(null,seq__23676_26236__$1);
var G__26239 = c__20293__auto___26237;
var G__26240 = cljs.core.count.call(null,c__20293__auto___26237);
var G__26241 = 0;
seq__23676_26226 = G__26238;
chunk__23677_26227 = G__26239;
count__23678_26228 = G__26240;
i__23679_26229 = G__26241;
continue;
}
} else
{var arg__21712__auto___26242 = cljs.core.first.call(null,seq__23676_26236__$1);a__21711__auto__.push(arg__21712__auto___26242);
{
var G__26243 = cljs.core.next.call(null,seq__23676_26236__$1);
var G__26244 = null;
var G__26245 = 0;
var G__26246 = 0;
seq__23676_26226 = G__26243;
chunk__23677_26227 = G__26244;
count__23678_26228 = G__26245;
i__23679_26229 = G__26246;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__21711__auto__);
};
var polyline = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__21710__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__26247){
var args__21710__auto__ = cljs.core.seq(arglist__26247);
return polyline__delegate(args__21710__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23684_26248 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23685_26249 = null;var count__23686_26250 = 0;var i__23687_26251 = 0;while(true){
if((i__23687_26251 < count__23686_26250))
{var arg__21712__auto___26252 = cljs.core._nth.call(null,chunk__23685_26249,i__23687_26251);a__21711__auto__.push(arg__21712__auto___26252);
{
var G__26253 = seq__23684_26248;
var G__26254 = chunk__23685_26249;
var G__26255 = count__23686_26250;
var G__26256 = (i__23687_26251 + 1);
seq__23684_26248 = G__26253;
chunk__23685_26249 = G__26254;
count__23686_26250 = G__26255;
i__23687_26251 = G__26256;
continue;
}
} else
{var temp__4092__auto___26257 = cljs.core.seq.call(null,seq__23684_26248);if(temp__4092__auto___26257)
{var seq__23684_26258__$1 = temp__4092__auto___26257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23684_26258__$1))
{var c__20293__auto___26259 = cljs.core.chunk_first.call(null,seq__23684_26258__$1);{
var G__26260 = cljs.core.chunk_rest.call(null,seq__23684_26258__$1);
var G__26261 = c__20293__auto___26259;
var G__26262 = cljs.core.count.call(null,c__20293__auto___26259);
var G__26263 = 0;
seq__23684_26248 = G__26260;
chunk__23685_26249 = G__26261;
count__23686_26250 = G__26262;
i__23687_26251 = G__26263;
continue;
}
} else
{var arg__21712__auto___26264 = cljs.core.first.call(null,seq__23684_26258__$1);a__21711__auto__.push(arg__21712__auto___26264);
{
var G__26265 = cljs.core.next.call(null,seq__23684_26258__$1);
var G__26266 = null;
var G__26267 = 0;
var G__26268 = 0;
seq__23684_26248 = G__26265;
chunk__23685_26249 = G__26266;
count__23686_26250 = G__26267;
i__23687_26251 = G__26268;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__21711__auto__);
};
var rect = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__21710__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__26269){
var args__21710__auto__ = cljs.core.seq(arglist__26269);
return rect__delegate(args__21710__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23692_26270 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23693_26271 = null;var count__23694_26272 = 0;var i__23695_26273 = 0;while(true){
if((i__23695_26273 < count__23694_26272))
{var arg__21712__auto___26274 = cljs.core._nth.call(null,chunk__23693_26271,i__23695_26273);a__21711__auto__.push(arg__21712__auto___26274);
{
var G__26275 = seq__23692_26270;
var G__26276 = chunk__23693_26271;
var G__26277 = count__23694_26272;
var G__26278 = (i__23695_26273 + 1);
seq__23692_26270 = G__26275;
chunk__23693_26271 = G__26276;
count__23694_26272 = G__26277;
i__23695_26273 = G__26278;
continue;
}
} else
{var temp__4092__auto___26279 = cljs.core.seq.call(null,seq__23692_26270);if(temp__4092__auto___26279)
{var seq__23692_26280__$1 = temp__4092__auto___26279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23692_26280__$1))
{var c__20293__auto___26281 = cljs.core.chunk_first.call(null,seq__23692_26280__$1);{
var G__26282 = cljs.core.chunk_rest.call(null,seq__23692_26280__$1);
var G__26283 = c__20293__auto___26281;
var G__26284 = cljs.core.count.call(null,c__20293__auto___26281);
var G__26285 = 0;
seq__23692_26270 = G__26282;
chunk__23693_26271 = G__26283;
count__23694_26272 = G__26284;
i__23695_26273 = G__26285;
continue;
}
} else
{var arg__21712__auto___26286 = cljs.core.first.call(null,seq__23692_26280__$1);a__21711__auto__.push(arg__21712__auto___26286);
{
var G__26287 = cljs.core.next.call(null,seq__23692_26280__$1);
var G__26288 = null;
var G__26289 = 0;
var G__26290 = 0;
seq__23692_26270 = G__26287;
chunk__23693_26271 = G__26288;
count__23694_26272 = G__26289;
i__23695_26273 = G__26290;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__21711__auto__);
};
var svg = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__21710__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__26291){
var args__21710__auto__ = cljs.core.seq(arglist__26291);
return svg__delegate(args__21710__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__21710__auto__){var a__21711__auto__ = [];a__21711__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__21710__auto__)));
var seq__23004_26292 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__21710__auto__));var chunk__23005_26293 = null;var count__23006_26294 = 0;var i__23007_26295 = 0;while(true){
if((i__23007_26295 < count__23006_26294))
{var arg__21712__auto___26296 = cljs.core._nth.call(null,chunk__23005_26293,i__23007_26295);a__21711__auto__.push(arg__21712__auto___26296);
{
var G__26297 = seq__23004_26292;
var G__26298 = chunk__23005_26293;
var G__26299 = count__23006_26294;
var G__26300 = (i__23007_26295 + 1);
seq__23004_26292 = G__26297;
chunk__23005_26293 = G__26298;
count__23006_26294 = G__26299;
i__23007_26295 = G__26300;
continue;
}
} else
{var temp__4092__auto___26301 = cljs.core.seq.call(null,seq__23004_26292);if(temp__4092__auto___26301)
{var seq__23004_26302__$1 = temp__4092__auto___26301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23004_26302__$1))
{var c__20293__auto___26303 = cljs.core.chunk_first.call(null,seq__23004_26302__$1);{
var G__26304 = cljs.core.chunk_rest.call(null,seq__23004_26302__$1);
var G__26305 = c__20293__auto___26303;
var G__26306 = cljs.core.count.call(null,c__20293__auto___26303);
var G__26307 = 0;
seq__23004_26292 = G__26304;
chunk__23005_26293 = G__26305;
count__23006_26294 = G__26306;
i__23007_26295 = G__26307;
continue;
}
} else
{var arg__21712__auto___26308 = cljs.core.first.call(null,seq__23004_26302__$1);a__21711__auto__.push(arg__21712__auto___26308);
{
var G__26309 = cljs.core.next.call(null,seq__23004_26302__$1);
var G__26310 = null;
var G__26311 = 0;
var G__26312 = 0;
seq__23004_26292 = G__26309;
chunk__23005_26293 = G__26310;
count__23006_26294 = G__26311;
i__23007_26295 = G__26312;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__21711__auto__);
};
var text = function (var_args){
var args__21710__auto__ = null;if (arguments.length > 0) {
  args__21710__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__21710__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__26313){
var args__21710__auto__ = cljs.core.seq(arglist__26313);
return text__delegate(args__21710__auto__);
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
lt.plugins.cljrefactor.nsbrowser.handle_keypress = (function handle_keypress(props,ev){var kk = ev.which;var G__31585 = kk;if(cljs.core._EQ_.call(null,27,G__31585))
{ev.preventDefault();
return new cljs.core.Keyword(null,"on-escape","on-escape",674318241).cljs$core$IFn$_invoke$arity$1(props).call(null);
} else
{if(cljs.core._EQ_.call(null,13,G__31585))
{ev.preventDefault();
return new cljs.core.Keyword(null,"on-select","on-select",1062468636).cljs$core$IFn$_invoke$arity$1(props).call(null);
} else
{if(cljs.core._EQ_.call(null,40,G__31585))
{ev.preventDefault();
return new cljs.core.Keyword(null,"on-down","on-down",3936419650).cljs$core$IFn$_invoke$arity$1(props).call(null);
} else
{if(cljs.core._EQ_.call(null,38,G__31585))
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
lt.plugins.cljrefactor.nsbrowser.selected_idx = (function selected_idx(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__31587_SHARP_,p2__31586_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(p2__31586_SHARP_)))
{return p1__31587_SHARP_;
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
{return cljs.core.filter.call(null,(function (p__31590){var map__31591 = p__31590;var map__31591__$1 = ((cljs.core.seq_QMARK_.call(null,map__31591))?cljs.core.apply.call(null,cljs.core.hash_map,map__31591):map__31591);var name = cljs.core.get.call(null,map__31591__$1,new cljs.core.Keyword(null,"name","name",1017277949));return ((name.indexOf(search_for) > -1)) || (cljs.core._EQ_.call(null,lt.plugins.cljrefactor.nsbrowser.ns_abbr.call(null,name).indexOf(search_for),0));
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
lt.plugins.cljrefactor.nsbrowser.SearchInput = quiescent.component.call(null,(function (props){return quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",1534256180),cljs.core.partial.call(null,lt.plugins.cljrefactor.nsbrowser.handle_keypress,props),new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (p1__31592_SHARP_){return new cljs.core.Keyword(null,"on-change","on-change",606853840).cljs$core$IFn$_invoke$arity$1(props).call(null,(p1__31592_SHARP_["target"]["value"]));
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
lt.plugins.cljrefactor.nsbrowser.wrapper = (function wrapper(this$){var e__20972__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jalla","div.jalla",2032626207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"nsbrowser-wrapper"], null),"Retrieving namespaces..."], null)], null));var seq__31599_31612 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__31600_31613 = null;var count__31601_31614 = 0;var i__31602_31615 = 0;while(true){
if((i__31602_31615 < count__31601_31614))
{var vec__31603_31616 = cljs.core._nth.call(null,chunk__31600_31613,i__31602_31615);var ev__20973__auto___31617 = cljs.core.nth.call(null,vec__31603_31616,0,null);var func__20974__auto___31618 = cljs.core.nth.call(null,vec__31603_31616,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___31617,func__20974__auto___31618);
{
var G__31619 = seq__31599_31612;
var G__31620 = chunk__31600_31613;
var G__31621 = count__31601_31614;
var G__31622 = (i__31602_31615 + 1);
seq__31599_31612 = G__31619;
chunk__31600_31613 = G__31620;
count__31601_31614 = G__31621;
i__31602_31615 = G__31622;
continue;
}
} else
{var temp__4092__auto___31623 = cljs.core.seq.call(null,seq__31599_31612);if(temp__4092__auto___31623)
{var seq__31599_31624__$1 = temp__4092__auto___31623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31599_31624__$1))
{var c__20293__auto___31625 = cljs.core.chunk_first.call(null,seq__31599_31624__$1);{
var G__31626 = cljs.core.chunk_rest.call(null,seq__31599_31624__$1);
var G__31627 = c__20293__auto___31625;
var G__31628 = cljs.core.count.call(null,c__20293__auto___31625);
var G__31629 = 0;
seq__31599_31612 = G__31626;
chunk__31600_31613 = G__31627;
count__31601_31614 = G__31628;
i__31602_31615 = G__31629;
continue;
}
} else
{var vec__31604_31630 = cljs.core.first.call(null,seq__31599_31624__$1);var ev__20973__auto___31631 = cljs.core.nth.call(null,vec__31604_31630,0,null);var func__20974__auto___31632 = cljs.core.nth.call(null,vec__31604_31630,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___31631,func__20974__auto___31632);
{
var G__31633 = cljs.core.next.call(null,seq__31599_31624__$1);
var G__31634 = null;
var G__31635 = 0;
var G__31636 = 0;
seq__31599_31612 = G__31633;
chunk__31600_31613 = G__31634;
count__31601_31614 = G__31635;
i__31602_31615 = G__31636;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
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
lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_vars_res = (function __BEH__list_ns_vars_res(ed,res){var vec__31607 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-vars","ns-vars",3192584358),new cljs.core.Keyword(null,"results","results",2111450984)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__31607,0,null);var ret = cljs.core.nth.call(null,vec__31607,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var items_31637 = lt.plugins.cljrefactor.nsbrowser.maybe_select_first.call(null,cljs.core.map.call(null,((function (vec__31607,ok_QMARK_,ret){
return (function (p1__31605_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949)],[p1__31605_SHARP_]);
});})(vec__31607,ok_QMARK_,ret))
,new cljs.core.Keyword(null,"ns-vars","ns-vars",3192584358).cljs$core$IFn$_invoke$arity$1(ret)));lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vars","vars",1017516446),items_31637,new cljs.core.Keyword(null,"filtered-items","filtered-items",622763004),items_31637], null));
lt.plugins.cljrefactor.nsbrowser.render.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),items_31637,new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865),new cljs.core.Keyword(null,"selected-ns","selected-ns",1234365865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar)),new cljs.core.Keyword(null,"focus","focus",1111509066),true], null));
}
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.nsbrowser","list-ns-vars-res","lt.plugins.cljrefactor.nsbrowser/list-ns-vars-res",1973536863),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_vars_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.list-ns-vars-res","editor.eval.clj.result.refactor.list-ns-vars-res",3804778467),null], null), null));
lt.plugins.cljrefactor.nsbrowser.maybe_exclude = (function maybe_exclude(exclusions,items){var temp__4090__auto__ = cljs.core.map.call(null,cljs.core.re_pattern,exclusions);if(cljs.core.truth_(temp__4090__auto__))
{var ps = temp__4090__auto__;return cljs.core.filter.call(null,((function (ps,temp__4090__auto__){
return (function (item){return cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (ps,temp__4090__auto__){
return (function (p1__31608_SHARP_){return cljs.core.re_find.call(null,p1__31608_SHARP_,item);
});})(ps,temp__4090__auto__))
,ps))));
});})(ps,temp__4090__auto__))
,items);
} else
{return items;
}
});
lt.plugins.cljrefactor.nsbrowser.__BEH__list_ns_res = (function __BEH__list_ns_res(ed,res){var vec__31611 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-list","ns-list",3192294168),new cljs.core.Keyword(null,"results","results",2111450984)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__31611,0,null);var ret = cljs.core.nth.call(null,vec__31611,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.cljrefactor.nsbrowser.ns_bar);
return lt.object.raise.call(null,lt.plugins.cljrefactor.nsbrowser.ns_bar,new cljs.core.Keyword(null,"update-ns-list!","update-ns-list!",3589958961),cljs.core.map.call(null,((function (vec__31611,ok_QMARK_,ret){
return (function (p1__31609_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949)],[p1__31609_SHARP_]);
});})(vec__31611,ok_QMARK_,ret))
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
lt.plugins.cljrefactor.pprint.pprint_prefix_form = (function pprint_prefix_form(p__26367){var vec__26369 = p__26367;var name = cljs.core.nth.call(null,vec__26369,0,null);var libspecs = cljs.core.nthnext.call(null,vec__26369,1);cljs.core.print.call(null,[cljs.core.str("["),cljs.core.str(name)].join(''));
var ordered_libspecs = lt.plugins.cljrefactor.pprint.libspec_vectors_last.call(null,libspecs);return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (ordered_libspecs,vec__26369,name,libspecs){
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
});})(ordered_libspecs,vec__26369,name,libspecs))
,ordered_libspecs));
});
lt.plugins.cljrefactor.pprint.pprint_require_form = (function pprint_require_form(p__26370){var vec__26373 = p__26370;var _ = cljs.core.nth.call(null,vec__26373,0,null);var libspecs = cljs.core.nthnext.call(null,vec__26373,1);cljs.core.print.call(null,"(:require ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__26373,_,libspecs){
return (function (idx,libspec){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,libspecs) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__20464__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_26374_26392 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26374_26392,sb__20464__auto__,vec__26373,_,libspecs){
return (function (x__20465__auto__){return sb__20464__auto__.append(x__20465__auto__);
});})(_STAR_print_fn_STAR_26374_26392,sb__20464__auto__,vec__26373,_,libspecs))
;
if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{cljs.core.print.call(null,libspec);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26374_26392;
}return [cljs.core.str(sb__20464__auto__)].join('');
})())),cljs.core.str(")")].join(''));
} else
{if(lt.plugins.cljrefactor.pprint.prefix_form_QMARK_.call(null,libspec))
{return lt.plugins.cljrefactor.pprint.pprint_prefix_form.call(null,libspec);
} else
{return cljs.core.println.call(null,libspec);
}
}
});})(vec__26373,_,libspecs))
,libspecs));
});
lt.plugins.cljrefactor.pprint.form_is_QMARK_ = (function form_is_QMARK_(form,type){return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,form)),type));
});
lt.plugins.cljrefactor.pprint.pprint_gen_class_form = (function pprint_gen_class_form(p__26375){var vec__26379 = p__26375;var _ = cljs.core.nth.call(null,vec__26379,0,null);var elems = cljs.core.nthnext.call(null,vec__26379,1);if(cljs.core.empty_QMARK_.call(null,elems))
{cljs.core.println.call(null,"(:gen-class)");
} else
{cljs.core.println.call(null,"(:gen-class");
}
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__26379,_,elems){
return (function (idx,p__26380){var vec__26381 = p__26380;var key = cljs.core.nth.call(null,vec__26381,0,null);var val = cljs.core.nth.call(null,vec__26381,1,null);if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,cljs.core.partition.call(null,2,elems)) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(key),cljs.core.str(val),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,key,val);
}
});})(vec__26379,_,elems))
,cljs.core.partition.call(null,2,elems)));
});
lt.plugins.cljrefactor.pprint.pprint_import_form = (function pprint_import_form(p__26382){var vec__26384 = p__26382;var _ = cljs.core.nth.call(null,vec__26384,0,null);var imports = cljs.core.nthnext.call(null,vec__26384,1);cljs.core.print.call(null,"(:import ");
return cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (vec__26384,_,imports){
return (function (idx,import$){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,imports) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(import$),cljs.core.str(")")].join(''));
} else
{return cljs.core.println.call(null,import$);
}
});})(vec__26384,_,imports))
,imports));
});
lt.plugins.cljrefactor.pprint.pprint_ns = (function pprint_ns(p__26385){var vec__26389 = p__26385;var _ = cljs.core.nth.call(null,vec__26389,0,null);var name = cljs.core.nth.call(null,vec__26389,1,null);var more = cljs.core.nthnext.call(null,vec__26389,2);var ns_form = vec__26389;var docstring_QMARK_ = ((typeof cljs.core.first.call(null,more) === 'string')?cljs.core.first.call(null,more):null);var attrs_QMARK_ = ((cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,more)))?cljs.core.second.call(null,more):null);var forms = (cljs.core.truth_((function (){var and__19533__auto__ = docstring_QMARK_;if(cljs.core.truth_(and__19533__auto__))
{return attrs_QMARK_;
} else
{return and__19533__auto__;
}
})())?lt.plugins.cljrefactor.pprint.nthrest.call(null,more,2):((cljs.core.not.call(null,(function (){var or__19545__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__19545__auto__))
{return or__19545__auto__;
} else
{return attrs_QMARK_;
}
})()))?more:((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.rest.call(null,more):null)));return clojure.string.replace.call(null,(function (){var sb__20464__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_26390_26393 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26390_26393,sb__20464__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26389,_,name,more,ns_form){
return (function (x__20465__auto__){return sb__20464__auto__.append(x__20465__auto__);
});})(_STAR_print_fn_STAR_26390_26393,sb__20464__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26389,_,name,more,ns_form))
;
cljs.core.print.call(null,[cljs.core.str("(ns "),cljs.core.str(name)].join(''));
if(cljs.core.truth_((function (){var or__19545__auto__ = docstring_QMARK_;if(cljs.core.truth_(or__19545__auto__))
{return or__19545__auto__;
} else
{var or__19545__auto____$1 = attrs_QMARK_;if(cljs.core.truth_(or__19545__auto____$1))
{return or__19545__auto____$1;
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
cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (_STAR_print_fn_STAR_26390_26393,sb__20464__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26389,_,name,more,ns_form){
return (function (idx,form){if(cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,forms) - 1)))
{return cljs.core.println.call(null,[cljs.core.str(lt.plugins.cljrefactor.pprint.trim_newline.call(null,(function (){var sb__20464__auto____$1 = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_26391_26394 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26391_26394,sb__20464__auto____$1,_STAR_print_fn_STAR_26390_26393,sb__20464__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26389,_,name,more,ns_form){
return (function (x__20465__auto__){return sb__20464__auto____$1.append(x__20465__auto__);
});})(_STAR_print_fn_STAR_26391_26394,sb__20464__auto____$1,_STAR_print_fn_STAR_26390_26393,sb__20464__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26389,_,name,more,ns_form))
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
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26391_26394;
}return [cljs.core.str(sb__20464__auto____$1)].join('');
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
});})(_STAR_print_fn_STAR_26390_26393,sb__20464__auto__,docstring_QMARK_,attrs_QMARK_,forms,vec__26389,_,name,more,ns_form))
,forms));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26390_26393;
}return [cljs.core.str(sb__20464__auto__)].join('');
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
lt.plugins.cljrefactor.namespace.nsify = (function nsify(sub_path){return (function (p1__21668_SHARP_){return [cljs.core.str("(ns "),cljs.core.str(p1__21668_SHARP_),cljs.core.str(")\n")].join('');
}).call(null,(function (p1__21667_SHARP_){return clojure.string.join.call(null,".",p1__21667_SHARP_);
}).call(null,(function (parts){return cljs.core.map.call(null,(function (p1__21666_SHARP_){return clojure.string.replace.call(null,p1__21666_SHARP_,/_/,"-");
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
lt.plugins.cljrefactor.namespace.index_of_ns_type = (function index_of_ns_type(ns_decl,t){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__21670_SHARP_,p2__21669_SHARP_){if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,p2__21669_SHARP_)),t))
{return p1__21670_SHARP_;
} else
{return null;
}
}),cljs.core.drop.call(null,2,ns_decl)));
});
lt.plugins.cljrefactor.namespace.calc_imp_idx = (function calc_imp_idx(ns_decl){var req_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"require","require",2109600983));var imp_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"import","import",4124075799));return (2 + (cljs.core.truth_(imp_idx)?imp_idx:(function (){var x__19852__auto__ = 1;var y__19853__auto__ = req_idx;return ((x__19852__auto__ > y__19853__auto__) ? x__19852__auto__ : y__19853__auto__);
})()));
});
lt.plugins.cljrefactor.namespace.add_import = (function add_import(ns_decl,imp){var vec__21672 = cljs.core.split_at.call(null,lt.plugins.cljrefactor.namespace.calc_imp_idx.call(null,ns_decl),ns_decl);var pre = cljs.core.nth.call(null,vec__21672,0,null);var post = cljs.core.nth.call(null,vec__21672,1,null);if((cljs.core.seq.call(null,post)) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,post),new cljs.core.Keyword(null,"import","import",4124075799))))
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
lt.plugins.cljrefactor.namespace.add_require = (function add_require(ns_decl,req){var req_idx = lt.plugins.cljrefactor.namespace.index_of_ns_type.call(null,ns_decl,new cljs.core.Keyword(null,"require","require",2109600983));var vec__21674 = cljs.core.split_at.call(null,(cljs.core.truth_(req_idx)?(req_idx + 2):2),ns_decl);var pre = cljs.core.nth.call(null,vec__21674,0,null);var post = cljs.core.nth.call(null,vec__21674,1,null);if((cljs.core.seq.call(null,post)) && (cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,post),new cljs.core.Keyword(null,"require","require",2109600983))))
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
lt.plugins.cljrefactor.namespace.__BEH__clean_ns_res = (function __BEH__clean_ns_res(ed,res){var vec__21676 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",1013907767)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21676,0,null);var ret = cljs.core.nth.call(null,vec__21676,1,null);if(cljs.core.not.call(null,ok_QMARK_))
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
lt.plugins.cljrefactor.input_prompt.prompt_form = (function prompt_form(this$,init_value){var e__20972__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refactor-prompt","div.refactor-prompt",3754652772),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Enter new name: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"refactor-prompt",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),init_value], null)], null)], null));var seq__21607_21623 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__21608_21624 = null;var count__21609_21625 = 0;var i__21610_21626 = 0;while(true){
if((i__21610_21626 < count__21609_21625))
{var vec__21611_21627 = cljs.core._nth.call(null,chunk__21608_21624,i__21610_21626);var ev__20973__auto___21628 = cljs.core.nth.call(null,vec__21611_21627,0,null);var func__20974__auto___21629 = cljs.core.nth.call(null,vec__21611_21627,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___21628,func__20974__auto___21629);
{
var G__21630 = seq__21607_21623;
var G__21631 = chunk__21608_21624;
var G__21632 = count__21609_21625;
var G__21633 = (i__21610_21626 + 1);
seq__21607_21623 = G__21630;
chunk__21608_21624 = G__21631;
count__21609_21625 = G__21632;
i__21610_21626 = G__21633;
continue;
}
} else
{var temp__4092__auto___21634 = cljs.core.seq.call(null,seq__21607_21623);if(temp__4092__auto___21634)
{var seq__21607_21635__$1 = temp__4092__auto___21634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21607_21635__$1))
{var c__20293__auto___21636 = cljs.core.chunk_first.call(null,seq__21607_21635__$1);{
var G__21637 = cljs.core.chunk_rest.call(null,seq__21607_21635__$1);
var G__21638 = c__20293__auto___21636;
var G__21639 = cljs.core.count.call(null,c__20293__auto___21636);
var G__21640 = 0;
seq__21607_21623 = G__21637;
chunk__21608_21624 = G__21638;
count__21609_21625 = G__21639;
i__21610_21626 = G__21640;
continue;
}
} else
{var vec__21612_21641 = cljs.core.first.call(null,seq__21607_21635__$1);var ev__20973__auto___21642 = cljs.core.nth.call(null,vec__21612_21641,0,null);var func__20974__auto___21643 = cljs.core.nth.call(null,vec__21612_21641,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___21642,func__20974__auto___21643);
{
var G__21644 = cljs.core.next.call(null,seq__21607_21635__$1);
var G__21645 = null;
var G__21646 = 0;
var G__21647 = 0;
seq__21607_21623 = G__21644;
chunk__21608_21624 = G__21645;
count__21609_21625 = G__21646;
i__21610_21626 = G__21647;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
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
lt.plugins.cljrefactor.usages.result_entry = (function result_entry(this$,entry){var e__20972__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"entry".concat((cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(entry))?" active":""))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.line","span.line",4619821962),new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(entry)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),crate.core.raw.call(null,lt.plugins.cljrefactor.usages.highlight.call(null,new cljs.core.Keyword(null,"match","match",1117572407).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search-for","search-for",4597237398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))], null)], null));var seq__30311_30365 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__20972__auto__){
return (function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(entry));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"goto-line","goto-line",2802035088),new cljs.core.Keyword(null,"line-beg","line-beg",2201385629).cljs$core$IFn$_invoke$arity$1(entry));
});})(e__20972__auto__))
], null)));var chunk__30312_30366 = null;var count__30313_30367 = 0;var i__30314_30368 = 0;while(true){
if((i__30314_30368 < count__30313_30367))
{var vec__30315_30369 = cljs.core._nth.call(null,chunk__30312_30366,i__30314_30368);var ev__20973__auto___30370 = cljs.core.nth.call(null,vec__30315_30369,0,null);var func__20974__auto___30371 = cljs.core.nth.call(null,vec__30315_30369,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___30370,func__20974__auto___30371);
{
var G__30372 = seq__30311_30365;
var G__30373 = chunk__30312_30366;
var G__30374 = count__30313_30367;
var G__30375 = (i__30314_30368 + 1);
seq__30311_30365 = G__30372;
chunk__30312_30366 = G__30373;
count__30313_30367 = G__30374;
i__30314_30368 = G__30375;
continue;
}
} else
{var temp__4092__auto___30376 = cljs.core.seq.call(null,seq__30311_30365);if(temp__4092__auto___30376)
{var seq__30311_30377__$1 = temp__4092__auto___30376;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30311_30377__$1))
{var c__20293__auto___30378 = cljs.core.chunk_first.call(null,seq__30311_30377__$1);{
var G__30379 = cljs.core.chunk_rest.call(null,seq__30311_30377__$1);
var G__30380 = c__20293__auto___30378;
var G__30381 = cljs.core.count.call(null,c__20293__auto___30378);
var G__30382 = 0;
seq__30311_30365 = G__30379;
chunk__30312_30366 = G__30380;
count__30313_30367 = G__30381;
i__30314_30368 = G__30382;
continue;
}
} else
{var vec__30316_30383 = cljs.core.first.call(null,seq__30311_30377__$1);var ev__20973__auto___30384 = cljs.core.nth.call(null,vec__30316_30383,0,null);var func__20974__auto___30385 = cljs.core.nth.call(null,vec__30316_30383,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___30384,func__20974__auto___30385);
{
var G__30386 = cljs.core.next.call(null,seq__30311_30377__$1);
var G__30387 = null;
var G__30388 = 0;
var G__30389 = 0;
seq__30311_30365 = G__30386;
chunk__30312_30366 = G__30387;
count__30313_30367 = G__30388;
i__30314_30368 = G__30389;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
});
lt.plugins.cljrefactor.usages.result_item = (function result_item(this$,item){var e__20972__auto__ = crate.core.html.call(null,(function (){var file = new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.path","p.path",4266284629),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file","span.file",4619643154),lt.objs.files.basename.call(null,file)], null),"(",lt.objs.files.parent.call(null,file),")"], null),cljs.core.map.call(null,((function (file){
return (function (p1__30317_SHARP_){return lt.plugins.cljrefactor.usages.result_entry.call(null,this$,p1__30317_SHARP_);
});})(file))
,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(item))], null);
})());var seq__30324_30390 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__30325_30391 = null;var count__30326_30392 = 0;var i__30327_30393 = 0;while(true){
if((i__30327_30393 < count__30326_30392))
{var vec__30328_30394 = cljs.core._nth.call(null,chunk__30325_30391,i__30327_30393);var ev__20973__auto___30395 = cljs.core.nth.call(null,vec__30328_30394,0,null);var func__20974__auto___30396 = cljs.core.nth.call(null,vec__30328_30394,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___30395,func__20974__auto___30396);
{
var G__30397 = seq__30324_30390;
var G__30398 = chunk__30325_30391;
var G__30399 = count__30326_30392;
var G__30400 = (i__30327_30393 + 1);
seq__30324_30390 = G__30397;
chunk__30325_30391 = G__30398;
count__30326_30392 = G__30399;
i__30327_30393 = G__30400;
continue;
}
} else
{var temp__4092__auto___30401 = cljs.core.seq.call(null,seq__30324_30390);if(temp__4092__auto___30401)
{var seq__30324_30402__$1 = temp__4092__auto___30401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30324_30402__$1))
{var c__20293__auto___30403 = cljs.core.chunk_first.call(null,seq__30324_30402__$1);{
var G__30404 = cljs.core.chunk_rest.call(null,seq__30324_30402__$1);
var G__30405 = c__20293__auto___30403;
var G__30406 = cljs.core.count.call(null,c__20293__auto___30403);
var G__30407 = 0;
seq__30324_30390 = G__30404;
chunk__30325_30391 = G__30405;
count__30326_30392 = G__30406;
i__30327_30393 = G__30407;
continue;
}
} else
{var vec__30329_30408 = cljs.core.first.call(null,seq__30324_30402__$1);var ev__20973__auto___30409 = cljs.core.nth.call(null,vec__30329_30408,0,null);var func__20974__auto___30410 = cljs.core.nth.call(null,vec__30329_30408,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___30409,func__20974__auto___30410);
{
var G__30411 = cljs.core.next.call(null,seq__30324_30402__$1);
var G__30412 = null;
var G__30413 = 0;
var G__30414 = 0;
seq__30324_30390 = G__30411;
chunk__30325_30391 = G__30412;
count__30326_30392 = G__30413;
i__30327_30393 = G__30414;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
});
lt.plugins.cljrefactor.usages.search_results = (function search_results(this$,res){var e__20972__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),cljs.core.map.call(null,(function (p1__30330_SHARP_){return lt.plugins.cljrefactor.usages.result_item.call(null,this$,p1__30330_SHARP_);
}),res)], null));var seq__30337_30415 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__30338_30416 = null;var count__30339_30417 = 0;var i__30340_30418 = 0;while(true){
if((i__30340_30418 < count__30339_30417))
{var vec__30341_30419 = cljs.core._nth.call(null,chunk__30338_30416,i__30340_30418);var ev__20973__auto___30420 = cljs.core.nth.call(null,vec__30341_30419,0,null);var func__20974__auto___30421 = cljs.core.nth.call(null,vec__30341_30419,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___30420,func__20974__auto___30421);
{
var G__30422 = seq__30337_30415;
var G__30423 = chunk__30338_30416;
var G__30424 = count__30339_30417;
var G__30425 = (i__30340_30418 + 1);
seq__30337_30415 = G__30422;
chunk__30338_30416 = G__30423;
count__30339_30417 = G__30424;
i__30340_30418 = G__30425;
continue;
}
} else
{var temp__4092__auto___30426 = cljs.core.seq.call(null,seq__30337_30415);if(temp__4092__auto___30426)
{var seq__30337_30427__$1 = temp__4092__auto___30426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30337_30427__$1))
{var c__20293__auto___30428 = cljs.core.chunk_first.call(null,seq__30337_30427__$1);{
var G__30429 = cljs.core.chunk_rest.call(null,seq__30337_30427__$1);
var G__30430 = c__20293__auto___30428;
var G__30431 = cljs.core.count.call(null,c__20293__auto___30428);
var G__30432 = 0;
seq__30337_30415 = G__30429;
chunk__30338_30416 = G__30430;
count__30339_30417 = G__30431;
i__30340_30418 = G__30432;
continue;
}
} else
{var vec__30342_30433 = cljs.core.first.call(null,seq__30337_30427__$1);var ev__20973__auto___30434 = cljs.core.nth.call(null,vec__30342_30433,0,null);var func__20974__auto___30435 = cljs.core.nth.call(null,vec__30342_30433,1,null);lt.util.dom.on.call(null,e__20972__auto__,ev__20973__auto___30434,func__20974__auto___30435);
{
var G__30436 = cljs.core.next.call(null,seq__30337_30427__$1);
var G__30437 = null;
var G__30438 = 0;
var G__30439 = 0;
seq__30337_30415 = G__30436;
chunk__30338_30416 = G__30437;
count__30339_30417 = G__30438;
i__30340_30418 = G__30439;
continue;
}
}
} else
{}
}
break;
}
return e__20972__auto__;
});
lt.plugins.cljrefactor.usages.show_results = (function show_results(this$,res){var container = lt.object.__GT_content.call(null,this$);var results_ul = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul.res","ul.res",4464738363),container);return lt.util.dom.replace_with.call(null,results_ul,lt.plugins.cljrefactor.usages.search_results.call(null,this$,res));
});
lt.plugins.cljrefactor.usages.usages__GT_items = (function usages__GT_items(usages){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__30345){var map__30346 = p__30345;var map__30346__$1 = ((cljs.core.seq_QMARK_.call(null,map__30346))?cljs.core.apply.call(null,cljs.core.hash_map,map__30346):map__30346);var x = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243));return cljs.core.apply.call(null,cljs.core.hash_map,cljs.reader.read_string.call(null,x));
}),usages));
});
lt.plugins.cljrefactor.usages.items__GT_view = (function items__GT_view(items){return (function (x){return cljs.core.map.call(null,(function (k){var res = cljs.core.get.call(null,x,k);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),k,new cljs.core.Keyword(null,"items","items",1114430258),res], null);
}),cljs.core.keys.call(null,x));
}).call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"file","file",1017047278),items));
});
lt.plugins.cljrefactor.usages.find_symbol_op = (function find_symbol_op(ed,sym){return lt.plugins.cljrefactor.middleware.create_ns_op.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),"find-symbol",new cljs.core.Keyword(null,"name","name",1017277949),sym], null));
});
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res = (function __BEH__find_symbol__DOT__res(ed,res){var vec__30348 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"multiples","multiples",4102754261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",2701778243)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__30348,0,null);var ret = cljs.core.nth.call(null,vec__30348,1,null);var items = lt.plugins.cljrefactor.usages.usages__GT_items.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243).cljs$core$IFn$_invoke$arity$1(ret));if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{if(cljs.core.seq.call(null,items))
{lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.assoc_in.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,new cljs.core.Keyword(null,"active","active",3885920888)], null),true)], null));
} else
{lt.object.merge_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),null], null));
}
lt.plugins.cljrefactor.usages.show_results.call(null,lt.plugins.cljrefactor.usages.refactor_usages,lt.plugins.cljrefactor.usages.items__GT_view.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.cljrefactor.usages.refactor_usages))));
lt.object.update_BANG_.call(null,lt.plugins.cljrefactor.usages.refactor_usages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for","search-for",4597237398),new cljs.core.Keyword(null,"namespace","namespace",2266122445)], null),((function (vec__30348,ok_QMARK_,ret,items){
return (function (_){return new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});})(vec__30348,ok_QMARK_,ret,items))
);
}
return lt.objs.notifos.done_working.call(null,"Find usages completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","find-symbol.res","lt.plugins.cljrefactor.usages/find-symbol.res",2620470851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.find-symbol","editor.eval.clj.result.refactor.find-symbol",1593184613),null], null), null));
lt.plugins.cljrefactor.usages.__GT_idx_active = (function __GT_idx_active(items){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__30350_SHARP_,p2__30349_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(p2__30349_SHARP_)))
{return p1__30350_SHARP_;
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
lt.plugins.cljrefactor.usages.__BEH__find_symbol__DOT__start = (function __BEH__find_symbol__DOT__start(this$,ed,token){var ns = (function (){var or__19545__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__19545__auto__))
{return or__19545__auto__;
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
lt.plugins.cljrefactor.usages.replace_in_editors_BANG_ = (function replace_in_editors_BANG_(itemsByFile,p__30352){var map__30358 = p__30352;var map__30358__$1 = ((cljs.core.seq_QMARK_.call(null,map__30358))?cljs.core.apply.call(null,cljs.core.hash_map,map__30358):map__30358);var new$ = cljs.core.get.call(null,map__30358__$1,new cljs.core.Keyword(null,"new","new",1014013202));var old = cljs.core.get.call(null,map__30358__$1,new cljs.core.Keyword(null,"old","old",1014014361));var open_eds = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"editor.clj","editor.clj",3751346322));var open_ed_QMARK_ = ((function (open_eds,map__30358,map__30358__$1,new$,old){
return (function (file){return cljs.core.some.call(null,((function (open_eds,map__30358,map__30358__$1,new$,old){
return (function (p1__30351_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__30351_SHARP_))),file))
{return p1__30351_SHARP_;
} else
{return null;
}
});})(open_eds,map__30358,map__30358__$1,new$,old))
,open_eds);
});})(open_eds,map__30358,map__30358__$1,new$,old))
;var seq__30359 = cljs.core.seq.call(null,itemsByFile);var chunk__30360 = null;var count__30361 = 0;var i__30362 = 0;while(true){
if((i__30362 < count__30361))
{var fileItems = cljs.core._nth.call(null,chunk__30360,i__30362);var temp__4090__auto___30440 = open_ed_QMARK_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems));if(cljs.core.truth_(temp__4090__auto___30440))
{var open_ed_30441 = temp__4090__auto___30440;lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_.call(null,open_ed_30441,lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
} else
{lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems),lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
}
{
var G__30442 = seq__30359;
var G__30443 = chunk__30360;
var G__30444 = count__30361;
var G__30445 = (i__30362 + 1);
seq__30359 = G__30442;
chunk__30360 = G__30443;
count__30361 = G__30444;
i__30362 = G__30445;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30359);if(temp__4092__auto__)
{var seq__30359__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30359__$1))
{var c__20293__auto__ = cljs.core.chunk_first.call(null,seq__30359__$1);{
var G__30446 = cljs.core.chunk_rest.call(null,seq__30359__$1);
var G__30447 = c__20293__auto__;
var G__30448 = cljs.core.count.call(null,c__20293__auto__);
var G__30449 = 0;
seq__30359 = G__30446;
chunk__30360 = G__30447;
count__30361 = G__30448;
i__30362 = G__30449;
continue;
}
} else
{var fileItems = cljs.core.first.call(null,seq__30359__$1);var temp__4090__auto___30450 = open_ed_QMARK_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems));if(cljs.core.truth_(temp__4090__auto___30450))
{var open_ed_30451 = temp__4090__auto___30450;lt.plugins.cljrefactor.usages.replace_in_open_ed_BANG_.call(null,open_ed_30451,lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
} else
{lt.plugins.cljrefactor.usages.replace_in_hidden_ed_BANG_.call(null,new cljs.core.Keyword(null,"file","file",1017047278).cljs$core$IFn$_invoke$arity$1(fileItems),lt.plugins.cljrefactor.usages.create_replace_selections.call(null,fileItems,old),new$);
}
{
var G__30452 = cljs.core.next.call(null,seq__30359__$1);
var G__30453 = null;
var G__30454 = 0;
var G__30455 = 0;
seq__30359 = G__30452;
chunk__30360 = G__30453;
count__30361 = G__30454;
i__30362 = G__30455;
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
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__res = (function __BEH__rename_symbol__DOT__res(ed,res){var vec__30364 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"multiples","multiples",4102754261),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",2701778243)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__30364,0,null);var ret = cljs.core.nth.call(null,vec__30364,1,null);if(cljs.core.not.call(null,ok_QMARK_))
{lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"err","err",1014004951).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ret))], null));
} else
{var itemsByFile_30456 = lt.plugins.cljrefactor.usages.items__GT_view.call(null,lt.plugins.cljrefactor.usages.usages__GT_items.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",2701778243).cljs$core$IFn$_invoke$arity$1(ret)));var pos_30457 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret));lt.plugins.cljrefactor.usages.replace_in_editors_BANG_.call(null,itemsByFile_30456,new cljs.core.Keyword(null,"meta-lt","meta-lt",1969166786).cljs$core$IFn$_invoke$arity$1(ret));
lt.objs.editor.focus.call(null,ed);
lt.objs.editor.move_cursor.call(null,ed,pos_30457);
lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"Renamed ok !",pos_30457);
}
return lt.objs.notifos.done_working.call(null,"Rename completed");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.cljrefactor.usages","rename-symbol.res","lt.plugins.cljrefactor.usages/rename-symbol.res",1052900768),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.refactor.rename-symbol","editor.eval.clj.result.refactor.rename-symbol",3323570816),null], null), null));
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__start = (function __BEH__rename_symbol__DOT__start(ed,old,new$){if(cljs.core.seq.call(null,clojure.string.trim.call(null,new$)))
{var ns = (function (){var or__19545__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__19545__auto__))
{return or__19545__auto__;
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
lt.plugins.cljrefactor.usages.__BEH__rename_symbol__DOT__prompt = (function __BEH__rename_symbol__DOT__prompt(ed,token){var ns = (function (){var or__19545__auto__ = new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(or__19545__auto__))
{return or__19545__auto__;
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
lt.plugins.cljrefactor.__BEH__resolve_missing_selected = (function __BEH__resolve_missing_selected(ed,item){var G__21092_21106 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1017479852),G__21092_21106))
{lt.plugins.cljrefactor.add_missing_type.call(null,ed,item);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__21092_21106))
{lt.plugins.cljrefactor.add_missing_import.call(null,ed,item);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",1013907767),G__21092_21106))
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
return (function (p1__21093_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.Keyword(null,"type","type",1017479852)],[cljs.core.first.call(null,p1__21093_SHARP_),cljs.core.second.call(null,p1__21093_SHARP_)]);
});})(candidates))
,cljs.reader.read_string.call(null,candidates)));
} else
{return null;
}
});
lt.plugins.cljrefactor.__BEH__resolve_missing_res = (function __BEH__resolve_missing_res(ed,res){var vec__21095 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"candidates","candidates",3897560770)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21095,0,null);var ret = cljs.core.nth.call(null,vec__21095,1,null);if(cljs.core.not.call(null,ok_QMARK_))
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
var G__21513 = clojure.zip.up.call(null,n);
n = G__21513;
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
var G__21514 = clojure.zip.next.call(null,cur);
cur = G__21514;
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
lt.plugins.cljrefactor.form_refactor.move_up = (function move_up(form_str,candidate_str){var root = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var loc_QMARK_ = ((cljs.core.seq.call(null,root))?lt.plugins.cljrefactor.form_refactor.find_node.call(null,root,candidate_str):null);if(cljs.core.truth_((function (){var and__19533__auto__ = loc_QMARK_;if(cljs.core.truth_(and__19533__auto__))
{return clojure.zip.node.call(null,clojure.zip.remove.call(null,loc_QMARK_));
} else
{return and__19533__auto__;
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
var replace_cmd__delegate = function (ed,replace_fn,p__21494){var map__21499 = p__21494;var map__21499__$1 = ((cljs.core.seq_QMARK_.call(null,map__21499))?cljs.core.apply.call(null,cljs.core.hash_map,map__21499):map__21499);var fmt = cljs.core.get.call(null,map__21499__$1,new cljs.core.Keyword(null,"fmt","fmt",1014005759));var map__21500 = lt.plugins.cljrefactor.util.get_form.call(null,ed);var map__21500__$1 = ((cljs.core.seq_QMARK_.call(null,map__21500))?cljs.core.apply.call(null,cljs.core.hash_map,map__21500):map__21500);var form_str = cljs.core.get.call(null,map__21500__$1,new cljs.core.Keyword(null,"form-str","form-str",1486434586));var end = cljs.core.get.call(null,map__21500__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__21500__$1,new cljs.core.Keyword(null,"start","start",1123661780));if(cljs.core.truth_(form_str))
{var temp__4092__auto__ = (function (){var G__21501 = form_str;var G__21501__$1 = (((G__21501 == null))?null:replace_fn.call(null,G__21501));var G__21501__$2 = (((G__21501__$1 == null))?null:((function (G__21501,G__21501__$1,map__21500,map__21500__$1,form_str,end,start,map__21499,map__21499__$1,fmt){
return (function (p1__21492_SHARP_){if(cljs.core.truth_(fmt))
{return lt.plugins.cljrefactor.form_refactor.format_form.call(null,p1__21492_SHARP_);
} else
{return p1__21492_SHARP_;
}
});})(G__21501,G__21501__$1,map__21500,map__21500__$1,form_str,end,start,map__21499,map__21499__$1,fmt))
.call(null,G__21501__$1));return G__21501__$2;
})();if(cljs.core.truth_(temp__4092__auto__))
{var res = temp__4092__auto__;lt.objs.editor.replace.call(null,ed,start,end,res);
var p = ((lt.plugins.cljrefactor.util.set_form_QMARK_.call(null,res))?cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),((function (res,temp__4092__auto__,map__21500,map__21500__$1,form_str,end,start,map__21499,map__21499__$1,fmt){
return (function (p1__21493_SHARP_){return (p1__21493_SHARP_ + 2);
});})(res,temp__4092__auto__,map__21500,map__21500__$1,form_str,end,start,map__21499,map__21499__$1,fmt))
):cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var map__21502 = lt.plugins.cljrefactor.util.get_form.call(null,ed,p);var map__21502__$1 = ((cljs.core.seq_QMARK_.call(null,map__21502))?cljs.core.apply.call(null,cljs.core.hash_map,map__21502):map__21502);var s1 = cljs.core.get.call(null,map__21502__$1,new cljs.core.Keyword(null,"start","start",1123661780));var s2 = cljs.core.get.call(null,map__21502__$1,new cljs.core.Keyword(null,"end","end",1014004813));lt.objs.editor.set_selection.call(null,ed,s1,s2);
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
var p__21494 = null;if (arguments.length > 2) {
  p__21494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return replace_cmd__delegate.call(this,ed,replace_fn,p__21494);};
replace_cmd.cljs$lang$maxFixedArity = 2;
replace_cmd.cljs$lang$applyTo = (function (arglist__21515){
var ed = cljs.core.first(arglist__21515);
arglist__21515 = cljs.core.next(arglist__21515);
var replace_fn = cljs.core.first(arglist__21515);
var p__21494 = cljs.core.rest(arglist__21515);
return replace_cmd__delegate(ed,replace_fn,p__21494);
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
lt.plugins.cljrefactor.format.__BEH__format_res = (function __BEH__format_res(ed,res){var vec__21572 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatted-code","formatted-code",3575261136)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21572,0,null);var ret = cljs.core.nth.call(null,vec__21572,1,null);if(cljs.core.not.call(null,ok_QMARK_))
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
lt.plugins.cljrefactor.definition.get_definition_in_hidden_ed = (function get_definition_in_hidden_ed(file,line){var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,file));var ed = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mime","mime",1017255846),"text/x-clojure",new cljs.core.Keyword(null,"content","content",1965434859),content], null));var vec__21406 = lt.plugins.paredit.form_boundary.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),(lt.objs.editor.line.call(null,ed,(line - 1)).indexOf("(") + 1)], null));var start = cljs.core.nth.call(null,vec__21406,0,null);var end = cljs.core.nth.call(null,vec__21406,1,null);var sel = (cljs.core.truth_((function (){var and__19533__auto__ = start;if(cljs.core.truth_(and__19533__auto__))
{return end;
} else
{return and__19533__auto__;
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
lt.plugins.cljrefactor.definition.__BEH__finish_show_definition = (function __BEH__finish_show_definition(ed,p__21407){var map__21409 = p__21407;var map__21409__$1 = ((cljs.core.seq_QMARK_.call(null,map__21409))?cljs.core.apply.call(null,cljs.core.hash_map,map__21409):map__21409);var res = map__21409__$1;var line = cljs.core.get.call(null,map__21409__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__21409__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"show-def","show-def",673906855),new cljs.core.Keyword(null,"result-type","result-type",4725630556).cljs$core$IFn$_invoke$arity$1(res)))
{if(cljs.core.truth_((function (){var and__19533__auto__ = res;if(cljs.core.truth_(and__19533__auto__))
{var and__19533__auto____$1 = file;if(cljs.core.truth_(and__19533__auto____$1))
{return line;
} else
{return and__19533__auto____$1;
}
} else
{return and__19533__auto__;
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
var G__26599 = clojure.zip.up.call(null,n);
n = G__26599;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.threading.threading_locator = (function threading_locator(t){var G__26574 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__26574))
{return null;
} else
{if(cljs.core._EQ_.call(null,"some->>",G__26574))
{return ((function (G__26574){
return (function (p1__26572_SHARP_){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__26572_SHARP_))));
});
;})(G__26574))
} else
{if(cljs.core._EQ_.call(null,"->>",G__26574))
{return ((function (G__26574){
return (function (p1__26572_SHARP_){return clojure.zip.rightmost.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__26572_SHARP_))));
});
;})(G__26574))
} else
{if(cljs.core._EQ_.call(null,"some->",G__26574))
{return ((function (G__26574){
return (function (p1__26571_SHARP_){return clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__26571_SHARP_))));
});
;})(G__26574))
} else
{if(cljs.core._EQ_.call(null,"->",G__26574))
{return ((function (G__26574){
return (function (p1__26571_SHARP_){return clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,p1__26571_SHARP_))));
});
;})(G__26574))
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
lt.plugins.cljrefactor.threading.unwind_op = (function unwind_op(t){var G__26580 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__26580))
{return null;
} else
{if(cljs.core._EQ_.call(null,"some->>",G__26580))
{return ((function (G__26580){
return (function (p1__26577_SHARP_,p2__26578_SHARP_){return clojure.zip.append_child.call(null,p1__26577_SHARP_,p2__26578_SHARP_);
});
;})(G__26580))
} else
{if(cljs.core._EQ_.call(null,"->>",G__26580))
{return ((function (G__26580){
return (function (p1__26577_SHARP_,p2__26578_SHARP_){return clojure.zip.append_child.call(null,p1__26577_SHARP_,p2__26578_SHARP_);
});
;})(G__26580))
} else
{if(cljs.core._EQ_.call(null,"some->",G__26580))
{return ((function (G__26580){
return (function (p1__26575_SHARP_,p2__26576_SHARP_){return clojure.zip.insert_right.call(null,clojure.zip.down.call(null,p1__26575_SHARP_),p2__26576_SHARP_);
});
;})(G__26580))
} else
{if(cljs.core._EQ_.call(null,"->",G__26580))
{return ((function (G__26580){
return (function (p1__26575_SHARP_,p2__26576_SHARP_){return clojure.zip.insert_right.call(null,clojure.zip.down.call(null,p1__26575_SHARP_),p2__26576_SHARP_);
});
;})(G__26580))
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
return (function (p1__26581_SHARP_){return clojure.zip.replace.call(null,p1__26581_SHARP_,lt.plugins.cljrefactor.threading.unwrap_list_if_one.call(null,clojure.zip.node.call(null,p1__26581_SHARP_)));
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
var G__26600 = lt.plugins.cljrefactor.threading.do_thread_one.call(null,cand,cand_fn);
cand = G__26600;
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
lt.plugins.cljrefactor.threading.thread = (function thread(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__19533__auto__ = node;if(cljs.core.truth_(and__19533__auto__))
{return threading;
} else
{return and__19533__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.do_thread.call(null,node,lt.plugins.cljrefactor.threading.threading_locator.call(null,threading),threading));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.thread_one = (function thread_one(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__19533__auto__ = node;if(cljs.core.truth_(and__19533__auto__))
{return threading;
} else
{return and__19533__auto__;
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
return (function (p1__26582_SHARP_){return clojure.zip.replace.call(null,p1__26582_SHARP_,lt.plugins.cljrefactor.threading.maybe_wrap_in_list.call(null,clojure.zip.node.call(null,p1__26582_SHARP_)));
});})(demote,therest))
.call(null,clojure.zip.right.call(null,therest)),demote));
}
});
lt.plugins.cljrefactor.threading.do_unwind = (function do_unwind(root,unwind_fn){var cand = root;while(true){
if(!(lt.plugins.cljrefactor.threading.further_unwindable_QMARK_.call(null,cand)))
{return cand;
} else
{{
var G__26601 = lt.plugins.cljrefactor.threading.do_unwind_one.call(null,cand,unwind_fn);
cand = G__26601;
continue;
}
}
break;
}
});
lt.plugins.cljrefactor.threading.unwind = (function unwind(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__19533__auto__ = node;if(cljs.core.truth_(and__19533__auto__))
{return threading;
} else
{return and__19533__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.unwrap_threading.call(null,lt.plugins.cljrefactor.threading.do_unwind.call(null,node,lt.plugins.cljrefactor.threading.unwind_op.call(null,threading))));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.unwind_one = (function unwind_one(form_str){var node = lt.plugins.cljrefactor.parser.str__GT_seq_zip.call(null,form_str);var threading = (cljs.core.truth_(node)?lt.plugins.cljrefactor.threading.threaded_QMARK_.call(null,node):null);if(cljs.core.truth_((function (){var and__19533__auto__ = node;if(cljs.core.truth_(and__19533__auto__))
{return threading;
} else
{return and__19533__auto__;
}
})()))
{return lt.plugins.cljrefactor.parser.zip__GT_str.call(null,lt.plugins.cljrefactor.threading.maybe_unwrap_threading.call(null,lt.plugins.cljrefactor.threading.do_unwind_one.call(null,node,lt.plugins.cljrefactor.threading.unwind_op.call(null,threading))));
} else
{return null;
}
});
lt.plugins.cljrefactor.threading.format_form = (function format_form(form_str){return clojure.string.replace.call(null,form_str,/\s+\(/,"\n(");
});
lt.plugins.cljrefactor.threading.replace_cmd = (function replace_cmd(ed,replace_fn){var map__26586 = lt.plugins.cljrefactor.util.get_form.call(null,ed);var map__26586__$1 = ((cljs.core.seq_QMARK_.call(null,map__26586))?cljs.core.apply.call(null,cljs.core.hash_map,map__26586):map__26586);var end = cljs.core.get.call(null,map__26586__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__26586__$1,new cljs.core.Keyword(null,"start","start",1123661780));var form_str = cljs.core.get.call(null,map__26586__$1,new cljs.core.Keyword(null,"form-str","form-str",1486434586));if(cljs.core.truth_(form_str))
{var temp__4092__auto___26602 = (function (){var G__26587 = form_str;var G__26587__$1 = (((G__26587 == null))?null:replace_fn.call(null,G__26587));var G__26587__$2 = (((G__26587__$1 == null))?null:lt.plugins.cljrefactor.threading.format_form.call(null,G__26587__$1));return G__26587__$2;
})();if(cljs.core.truth_(temp__4092__auto___26602))
{var res_26603 = temp__4092__auto___26602;lt.objs.editor.replace.call(null,ed,start,end,res_26603);
var map__26588_26604 = lt.plugins.cljrefactor.util.get_form.call(null,ed,cljs.core.update_in.call(null,start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.inc));var map__26588_26605__$1 = ((cljs.core.seq_QMARK_.call(null,map__26588_26604))?cljs.core.apply.call(null,cljs.core.hash_map,map__26588_26604):map__26588_26604);var s1_26606 = cljs.core.get.call(null,map__26588_26605__$1,new cljs.core.Keyword(null,"start","start",1123661780));var s2_26607 = cljs.core.get.call(null,map__26588_26605__$1,new cljs.core.Keyword(null,"end","end",1014004813));lt.objs.editor.set_selection.call(null,ed,s1_26606,s2_26607);
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
lt.plugins.cljrefactor.macroexpand.__BEH__macroexpand_res = (function __BEH__macroexpand_res(ed,res){var vec__21649 = lt.plugins.cljrefactor.middleware.extract_result.call(null,res,new cljs.core.Keyword(null,"singles","singles",3108436125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expansion","expansion",1031782449)], null));var ok_QMARK_ = cljs.core.nth.call(null,vec__21649,0,null);var ret = cljs.core.nth.call(null,vec__21649,1,null);if(cljs.core.not.call(null,ok_QMARK_))
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