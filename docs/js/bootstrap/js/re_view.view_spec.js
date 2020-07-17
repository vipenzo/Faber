goog.provide('re_view.view_spec');
/**
 * Global registry for view specs
 */
re_view.view_spec.spec_registry = cljs.core.PersistentArrayMap.EMPTY;
/**
 * Define a view spec
 */
re_view.view_spec.defspecs = (function re_view$view_spec$defspecs(specs){
return (re_view.view_spec.spec_registry = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.view_spec.spec_registry,cljs.core.reduce_kv((function (m,k,v){
var G__49343 = m;
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49343,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),v,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),k], null));
} else {
return G__49343;
}
}),specs,specs)], 0)));
});
re_view.view_spec.Hiccup_QMARK_ = (function re_view$view_spec$Hiccup_QMARK_(p1__49347_SHARP_){
return ((cljs.core.vector_QMARK_(p1__49347_SHARP_)) && ((cljs.core.first(p1__49347_SHARP_) instanceof cljs.core.Keyword)));
});
re_view.view_spec.SVG_QMARK_ = (function re_view$view_spec$SVG_QMARK_(p1__49349_SHARP_){
return ((re_view.view_spec.Hiccup_QMARK_(p1__49349_SHARP_)) && (clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__49349_SHARP_)),"svg")));
});
re_view.view_spec.Element_QMARK_ = re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.util.is_react_element_QMARK_,re_view.view_spec.Hiccup_QMARK_,cljs.core.string_QMARK_,cljs.core.nil_QMARK_], 0));
re_view.view_spec.builtins = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Boolean","Boolean",20610060),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"String","String",584378334),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Function","Function",1904540321),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Map","Map",-197728088),cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Vector","Vector",-767641200),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455),re_view.view_spec.Element_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Hiccup","Hiccup",-786840006),re_view.view_spec.Hiccup_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SVG","SVG",1636684280),re_view.view_spec.SVG_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Object","Object",-1579320773),cljs.core.object_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),cljs.core.keyword_QMARK_], null)], null);
re_view.view_spec.defspecs(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins));
re_view.view_spec.spec_kinds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__49356){
var vec__49366 = p__49356;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49366,(0),null);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49366,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pred,name);
}),cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins);
/**
 * Resolves a spec. Keywords are looked up in the spec registry recursively until a function or set is found.
 *   If a map's :spec is a namespaced keyword, it is resolved and merged (without overriding existing keys)
 */
re_view.view_spec.resolve_spec = (function re_view$view_spec$resolve_spec(k){
if((k instanceof cljs.core.Keyword)){
var G__49385 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_registry,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw Error(["View spec not registered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
})();
return (re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(G__49385) : re_view.view_spec.resolve_spec.call(null,G__49385));
} else {
if(cljs.core.set_QMARK_(k)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),k,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),new cljs.core.Keyword(null,"Set","Set",-1553598550)], null);
} else {
if(cljs.core.fn_QMARK_(k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),k], null);
} else {
if(cljs.core.map_QMARK_(k)){
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"spec","spec",347520401));
if(((cljs.core.fn_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
return k;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,(re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(spec) : re_view.view_spec.resolve_spec.call(null,spec))], 0));
}
} else {
throw Error(["Invalid spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

}
}
}
}
});
re_view.view_spec.spec_kind = (function re_view$view_spec$spec_kind(p__49402){
var map__49404 = p__49402;
var map__49404__$1 = (((((!((map__49404 == null))))?(((((map__49404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49404):map__49404);
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49404__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49404__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_kinds,spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.set_QMARK_(spec)){
return new cljs.core.Keyword(null,"Set","Set",-1553598550);
} else {
return spec_name;
}
}
});
/**
 * Resolves specs in map
 */
re_view.view_spec.normalize_props_map = (function re_view$view_spec$normalize_props_map(p__49410){
var map__49411 = p__49410;
var map__49411__$1 = (((((!((map__49411 == null))))?(((((map__49411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49411):map__49411);
var props = map__49411__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49411__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49411__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var props__$1 = props;
var props__$2 = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,re_view.view_spec.resolve_spec(v));
}),props__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918)], 0)));
var props__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),re_view.view_spec.resolve_spec(k));
}),props__$2,keys);
var props__$4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view.view_spec.resolve_spec(k),new cljs.core.Keyword(null,"required","required",1807647006),true));
}),props__$3,required);
return cljs.core.reduce_kv((function (m,k,v){
var map__49418 = v;
var map__49418__$1 = (((((!((map__49418 == null))))?(((((map__49418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49418):map__49418);
var spec = map__49418__$1;
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49418__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var pass_through = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49418__$1,new cljs.core.Keyword(null,"pass-through","pass-through",-1285552122));
var required__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49418__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var G__49420 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,spec);
var G__49420__$1 = ((cljs.core.not(pass_through))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49420,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.conj,k):G__49420);
var G__49420__$2 = (cljs.core.truth_(required__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49420__$1,new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.conj,k):G__49420__$1);
if(cljs.core.truth_(default$)){
return cljs.core.assoc_in(G__49420__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("props","defaults","props/defaults",999110366),k], null),default$);
} else {
return G__49420__$2;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$4,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.PersistentVector.EMPTY], 0)),props__$4);
});
/**
 * Resolves specs in vector
 */
re_view.view_spec.resolve_spec_vector = (function re_view$view_spec$resolve_spec_vector(specs){
if(cljs.core.truth_(specs)){
var vec__49421 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.Keyword(null,"&","&",509580121)),specs);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49421,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49421,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.resolve_spec,req),new cljs.core.Keyword(null,"&more","&more",-116680563),(function (){var G__49424 = cljs.core.second(opt);
if((G__49424 == null)){
return null;
} else {
return re_view.view_spec.resolve_spec(G__49424);
}
})()], null);
} else {
return null;
}
});
re_view.view_spec.validate_spec = (function re_view$view_spec$validate_spec(k,p__49425,value){
var map__49426 = p__49425;
var map__49426__$1 = (((((!((map__49426 == null))))?(((((map__49426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49426):map__49426);
var spec_map = map__49426__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49426__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49426__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49426__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
if(cljs.core.truth_((function (){var and__4115__auto__ = spec_map;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(cljs.core.fn_QMARK_(spec)))) && ((!(cljs.core.set_QMARK_(spec)))));
} else {
return and__4115__auto__;
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invalid-spec?","invalid-spec?",541170561),k,spec_map], 0));
} else {
}

if((value == null)){
if(cljs.core.truth_(required)){
throw Error(["Prop is required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = spec;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((spec.cljs$core$IFn$_invoke$arity$1 ? spec.cljs$core$IFn$_invoke$arity$1(value) : spec.call(null,value)));
} else {
return and__4115__auto__;
}
})())){
console.log("value",value);

console.log("spec",spec);

throw Error(["Validation failed for prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," with spec ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = spec_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return spec;
}
})())," and value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
} else {
return null;
}
}
});
re_view.view_spec.validate_props = (function re_view$view_spec$validate_props(display_name,p__49431,props){
var map__49432 = p__49431;
var map__49432__$1 = (((((!((map__49432 == null))))?(((((map__49432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49432):map__49432);
var prop_specs = map__49432__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49432__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var prop_keys_49479 = cljs.core.keys(props);
try{var seq__49437_49480 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(required,cljs.core.filterv(((function (prop_keys_49479,map__49432,map__49432__$1,prop_specs,required){
return (function (p1__49430_SHARP_){
return cljs.core.not((function (){var G__49445 = cljs.core.namespace(p1__49430_SHARP_);
var fexpr__49444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"props",null], null), null);
return (fexpr__49444.cljs$core$IFn$_invoke$arity$1 ? fexpr__49444.cljs$core$IFn$_invoke$arity$1(G__49445) : fexpr__49444.call(null,G__49445));
})());
});})(prop_keys_49479,map__49432,map__49432__$1,prop_specs,required))
,cljs.core.keys(props))));
var chunk__49438_49481 = null;
var count__49439_49482 = (0);
var i__49440_49483 = (0);
while(true){
if((i__49440_49483 < count__49439_49482)){
var k_49484 = chunk__49438_49481.cljs$core$IIndexed$_nth$arity$2(null,i__49440_49483);
re_view.view_spec.validate_spec(k_49484,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_49484),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_49484));


var G__49489 = seq__49437_49480;
var G__49490 = chunk__49438_49481;
var G__49491 = count__49439_49482;
var G__49492 = (i__49440_49483 + (1));
seq__49437_49480 = G__49489;
chunk__49438_49481 = G__49490;
count__49439_49482 = G__49491;
i__49440_49483 = G__49492;
continue;
} else {
var temp__5735__auto___49493 = cljs.core.seq(seq__49437_49480);
if(temp__5735__auto___49493){
var seq__49437_49494__$1 = temp__5735__auto___49493;
if(cljs.core.chunked_seq_QMARK_(seq__49437_49494__$1)){
var c__4556__auto___49495 = cljs.core.chunk_first(seq__49437_49494__$1);
var G__49496 = cljs.core.chunk_rest(seq__49437_49494__$1);
var G__49497 = c__4556__auto___49495;
var G__49498 = cljs.core.count(c__4556__auto___49495);
var G__49499 = (0);
seq__49437_49480 = G__49496;
chunk__49438_49481 = G__49497;
count__49439_49482 = G__49498;
i__49440_49483 = G__49499;
continue;
} else {
var k_49500 = cljs.core.first(seq__49437_49494__$1);
re_view.view_spec.validate_spec(k_49500,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_49500),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_49500));


var G__49501 = cljs.core.next(seq__49437_49494__$1);
var G__49502 = null;
var G__49503 = (0);
var G__49504 = (0);
seq__49437_49480 = G__49501;
chunk__49438_49481 = G__49502;
count__49439_49482 = G__49503;
i__49440_49483 = G__49504;
continue;
}
} else {
}
}
break;
}
}catch (e49435){if((e49435 instanceof Error)){
var e_49505 = e49435;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error validating props in ",display_name], 0));

throw e_49505;
} else {
throw e49435;

}
}
return props;
});
re_view.view_spec.validate_children = (function re_view$view_spec$validate_children(display_name,p__49446,children){
var map__49447 = p__49446;
var map__49447__$1 = (((((!((map__49447 == null))))?(((((map__49447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49447):map__49447);
var children_spec = map__49447__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var _AMPERSAND_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,new cljs.core.Keyword(null,"&more","&more",-116680563));
if(cljs.core.truth_(children_spec)){
try{var children_49506__$1 = re_view.util.flatten_seqs(children);
var remaining_req_49507 = req;
var remaining_children_49508 = children_49506__$1;
var i_49509 = (0);
while(true){
if(cljs.core.empty_QMARK_(remaining_req_49507)){
if(cljs.core.empty_QMARK_(remaining_children_49508)){
} else {
if(cljs.core.truth_(_AMPERSAND_more)){
var seq__49456_49510 = cljs.core.seq(remaining_children_49508);
var chunk__49457_49511 = null;
var count__49458_49512 = (0);
var i__49459_49513 = (0);
while(true){
if((i__49459_49513 < count__49458_49512)){
var child_49518 = chunk__49457_49511.cljs$core$IIndexed$_nth$arity$2(null,i__49459_49513);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_49518);


var G__49519 = seq__49456_49510;
var G__49520 = chunk__49457_49511;
var G__49521 = count__49458_49512;
var G__49522 = (i__49459_49513 + (1));
seq__49456_49510 = G__49519;
chunk__49457_49511 = G__49520;
count__49458_49512 = G__49521;
i__49459_49513 = G__49522;
continue;
} else {
var temp__5735__auto___49525 = cljs.core.seq(seq__49456_49510);
if(temp__5735__auto___49525){
var seq__49456_49526__$1 = temp__5735__auto___49525;
if(cljs.core.chunked_seq_QMARK_(seq__49456_49526__$1)){
var c__4556__auto___49527 = cljs.core.chunk_first(seq__49456_49526__$1);
var G__49528 = cljs.core.chunk_rest(seq__49456_49526__$1);
var G__49529 = c__4556__auto___49527;
var G__49530 = cljs.core.count(c__4556__auto___49527);
var G__49531 = (0);
seq__49456_49510 = G__49528;
chunk__49457_49511 = G__49529;
count__49458_49512 = G__49530;
i__49459_49513 = G__49531;
continue;
} else {
var child_49532 = cljs.core.first(seq__49456_49526__$1);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_49532);


var G__49533 = cljs.core.next(seq__49456_49526__$1);
var G__49534 = null;
var G__49535 = (0);
var G__49536 = (0);
seq__49456_49510 = G__49533;
chunk__49457_49511 = G__49534;
count__49458_49512 = G__49535;
i__49459_49513 = G__49536;
continue;
}
} else {
}
}
break;
}
} else {
throw Error(["Expected fewer children. Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_49506__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
}
}
} else {
if(cljs.core.empty_QMARK_(remaining_children_49508)){
throw Error(["Expected more children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name),". Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_49506__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
} else {
re_view.view_spec.validate_spec(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_49509)].join('')),cljs.core.first(remaining_req_49507),cljs.core.first(remaining_children_49508));

var G__49538 = cljs.core.rest(remaining_req_49507);
var G__49539 = cljs.core.rest(remaining_children_49508);
var G__49540 = (i_49509 + (1));
remaining_req_49507 = G__49538;
remaining_children_49508 = G__49539;
i_49509 = G__49540;
continue;
}
}
break;
}
}catch (e49450){if((e49450 instanceof Error)){
var e_49541 = e49450;
console.error(["Error validating children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join(''));

throw Error(e_49541);
} else {
throw e49450;

}
}} else {
}

return children;
});

//# sourceMappingURL=re_view.view_spec.js.map
