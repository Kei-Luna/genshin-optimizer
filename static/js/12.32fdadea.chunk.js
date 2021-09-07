(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[12,19,23],{206:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(20),c=n(25),r=n(10),i=n(1),s=function(){return Object(i.jsx)(r.a,{icon:c.A})},l=function(e){var t=e.stars,n=e.colored,c=void 0!==n&&n;return Object(i.jsx)("span",{className:c?"text-5star":"",children:t?Object(a.a)(Array(t).keys()).map((function(e,t){return Object(i.jsx)(s,{},t)})):null})}},207:function(e,t,n){"use strict";var a={weaponTypes:{bow:n.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:n.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:n.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:n.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:n.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:n.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:n.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:n.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:n.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:n.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=a},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(130),c=n(69),r=n(20),i=n(9),s=n(4),l=n(18),o=n(70),u=n(122),d=n(108),j=n(41),b=n(87),v=n(40),h=n(212),f=n(14),O=n(12),m=n(48),p=n(213),x=function e(){if(Object(l.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")};x.getElementalName=function(e){return b.a[e].name},x.getLevelString=function(e){return"".concat(e.level,"/").concat(j.a[e.ascension])},x.getTalentFieldValue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e[t]?Object(O.f)(e[t],n):a},x.hasOverride=function(e,t){return"finalHP"===t?x.hasOverride(e,"hp")||x.hasOverride(e,"hp_")||x.hasOverride(e,"characterHP"):"finalDEF"===t?x.hasOverride(e,"def")||x.hasOverride(e,"def_")||x.hasOverride(e,"characterDEF"):"finalATK"===t?x.hasOverride(e,"atk")||x.hasOverride(e,"atk_")||x.hasOverride(e,"characterATK"):!!(null===e||void 0===e?void 0:e.baseStatOverrides)&&t in e.baseStatOverrides},x.getBaseStatValue=function(e,t,n,a){return"enemyLevel"===a?e.level:a.includes("enemyRes_")?10:a in j.b?j.b[a]:0},x.getStatValueWithOverride=function(e,t,n,a){var c,r;return x.hasOverride(e,a)?null!==(c=null===(r=e.baseStatOverrides)||void 0===r?void 0:r[a])&&void 0!==c?c:0:x.getBaseStatValue(e,t,n,a)},x.calculateBuild=function(e,t,n,a,c){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=Object.fromEntries(Object.entries(e.equippedArtifacts).map((function(e){var n=Object(s.a)(e,2),a=n[0],c=n[1];return[a,t._getArt(c)]}))),l=x.createInitialStats(e,t,n,a);return l.mainStatAssumptionLevel=r,x.calculateBuildwithArtifact(l,i,c)},x.calculateBuildwithArtifact=function(e,t,n){var a,c=o.a.setToSlots(t),r=u.a.setEffectsStats(n,e,c),l=Object(O.d)(e);Object.values(t).forEach((function(e){e&&(l[e.mainStatKey]=(l[e.mainStatKey]||0)+o.a.mainStatValue(e.mainStatKey,e.rarity,Math.max(Math.min(l.mainStatAssumptionLevel,4*e.rarity),e.level)),e.substats.forEach((function(e){return e&&e.key&&(l[e.key]=(l[e.key]||0)+e.value)})))})),Object(m.a)(l,r),d.a.parseConditionalValues({artifact:null===l||void 0===l||null===(a=l.conditionalValues)||void 0===a?void 0:a.artifact},(function(e,t,n){var a,r,i=Object(s.a)(n,3),o=i[1],u=i[2];if(!(parseInt(u)>(null!==(a=null===c||void 0===c||null===(r=c[o])||void 0===r?void 0:r.length)&&void 0!==a?a:0))){var j=d.a.resolve(e,l,t).stats;Object(m.a)(l,j)}})),l.equippedArtifacts=Object.fromEntries(Object.entries(t).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return[n,null===a||void 0===a?void 0:a.id]}))),l.setToSlots=c;var j=Object(h.a)(l,null===l||void 0===l?void 0:l.modifiers),b=Object(v.c)(j,l),f=b.initialStats;return(0,b.formula)(f),Object(i.a)(Object(i.a)({},l),f)},x.createInitialStats=function(e,t,n,l){var o,u,b,v,h=e=Object(O.d)(e),g=h.key,y=h.elementKey,S=h.level,w=h.ascension,N=h.hitMode,k=h.infusionAura,_=h.reactionMode,E=h.talent,K=h.constellation,T=h.equippedArtifacts,C=h.conditionalValues,A=void 0===C?{}:C,W=h.equippedWeapon,I=null!==(o=t._getWeapon(W))&&void 0!==o?o:Object(p.a)(n.weaponTypeKey),V=["enemyLevel"].concat(Object(r.a)(Object.keys(j.b))),B=Object.fromEntries(V.map((function(t){return[t,x.getStatValueWithOverride(e,n,l,t)]})));B.characterHP=n.getBase("hp",S,w),B.characterDEF=n.getBase("def",S,w),B.characterATK=n.getBase("atk",S,w),B.characterLevel=S,B.characterEle=null!==(u=null!==(b=n.elementKey)&&void 0!==b?b:y)&&void 0!==u?u:"anemo",B.characterKey=g,B.hitMode=N,B.infusionAura=k,B.reactionMode=_,B.conditionalValues=A,B.weaponType=n.weaponTypeKey,B.tlvl=Object.fromEntries(Object.entries(null!==E&&void 0!==E?E:{}).map((function(e){var t=Object(s.a)(e,2);return[t[0],t[1]-1]}))),B.constellation=K,B.ascension=w,B.weapon={key:I.key,refineIndex:I.refine-1},B.equippedArtifacts=T,["physical"].concat(Object(r.a)(f.d)).forEach((function(t){var a="".concat(t,"_enemyRes_");B[a]=x.getStatValueWithOverride(e,n,l,a),a="".concat(t,"_enemyImmunity"),B[a]=x.getStatValueWithOverride(e,n,l,a)}));var H=(null===(v=e)||void 0===v?void 0:v.baseStatOverrides)||{};Object.entries(H).forEach((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];B.hasOwnProperty(n)||(B[n]=a)}));var F=n.getSpecializedStat(w);if(F){var M=n.getSpecializedStatVal(w);Object(m.a)(B,Object(c.a)({},F,M))}for(var R in n.getTalentStatsAll(B,B.characterEle).forEach((function(e){return Object(m.a)(B,e)})),B.tlvl){var L;B.tlvl[R]+=null!==(L=B["".concat(R,"Boost")])&&void 0!==L?L:0}var q=l.getMainStatValue(I.level,I.ascension);B.weaponATK=q;var z=l.getSubStatKey();z&&Object(m.a)(B,Object(c.a)({},z,l.getSubStatValue(I.level,I.ascension))),Object(m.a)(B,l.stats(B));A.artifact;var D=A.weapon,P=Object(a.a)(A,["artifact","weapon"]);return d.a.parseConditionalValues(Object(i.a)(Object(i.a)({},I.key&&{weapon:Object(c.a)({},I.key,null===D||void 0===D?void 0:D[I.key])}),P),(function(e,t,n){if(("character"!==n[0]||"talents"!==n[3]||n[4]===y)&&d.a.canShow(e,B)){var a=d.a.resolve(e,B,t).stats;Object(m.a)(B,a)}})),B},x.getDisplayStatKeys=function(e,t){var n=t.characterSheet,a=t.weaponSheet,c=t.artifactSheets,r=e.characterEle,l=["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","heal_","enerRech_","".concat(r,"_dmg_")];n.isAutoElemental||l.push("physical_dmg_");var o=Object(O.d)(v.a[r]),u=n.weaponTypeKey;o.includes("shattered_hit")||"claymore"!==u||o.push("shattered_hit");var j={},b=n.getTalent(r),h=function(t,n){return t.forEach((function(t){var a;t.formula&&(null===t||void 0===t||null===(a=t.canShow)||void 0===a?void 0:a.call(t,e))&&(j[n]||(j[n]=[]),j[n].push(t.formula.keys))}))},f=function(t,n){if(t.conditional&&d.a.canShow(t.conditional,e)){var a=d.a.resolve(t.conditional,e,null).fields;a&&h(a,n)}t.fields&&h(t.fields,n)};b&&Object.entries(b.sheets).forEach((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1].sections;"normal"!==n&&"charged"!==n&&"plunging"!==n||(n="auto"),a.forEach((function(e){return f(e,"talentKey_".concat(n))}))}));var m="weapon_".concat(e.weapon.key);return a.document&&a.document.map((function(e){return f(e,m)})),e.setToSlots&&Object.entries(e.setToSlots).map((function(e){var t=Object(s.a)(e,2);return[t[0],t[1].length]})).forEach((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1],r=c[n];r&&Object.entries(r.setEffects).forEach((function(e){var t=Object(s.a)(e,2),c=t[0],r=t[1].document;a<parseInt(c)||r&&r.map((function(e){return f(e,"artifact_".concat(n,"_").concat(c))}))}))})),Object(i.a)(Object(i.a)({basicKeys:l},j),{},{transReactions:o})}},209:function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return T})),n.d(t,"c",(function(){return W}));var a=n(20),c=n(4),r=n(25),i=n(10),s=n(0),l=n(143),o=n(126),u=n(224),d=n(541),j=n(188),b=n(127),v=n(73),h=n(534),f=n(330),O=n(189),m=n(187),p=n(207),x=n(121),g=n(35),y=n(14),S=n(86),w=n(206),N=n(123),k=n(208),_=n(1);function E(e){var t=e.onSelect,n=e.weaponTypeKey,a=Object(s.useContext)(g.b),c=Object(S.b)(x.b.getAll(),[]);return Object(_.jsx)(_.Fragment,{children:a._getCharKeys().filter((function(e){var t;return!n||(null===c||void 0===c||null===(t=c[e])||void 0===t?void 0:t.weaponTypeKey)===n})).sort().map((function(e){return Object(_.jsx)(K,{characterKey:e,onSelect:t},e)}))})}function K(e){var t=e.characterKey,n=e.onSelect,a=Object(S.b)(x.b.get(t),[t]);return a?Object(_.jsx)(m.a.Item,{onClick:function(){return n(t)},children:a.nameWIthIcon}):null}function T(e){var t=e.characterSheet,n=e.onSelect,a=e.filter,r=Object(s.useState)(!1),i=Object(c.a)(r,2),d=i[0],j=i[1],b=t?Object(_.jsxs)("span",{children:[Object(_.jsx)(l.a,{src:t.thumbImg,className:"thumb-small my-n1 ml-n2",roundedCircle:!0}),Object(_.jsxs)("h6",{className:"d-inline",children:[" ",t.name," "]})]}):Object(_.jsx)("span",{children:"Select a Character"});return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(o.a,{as:u.a,onClick:function(){return j(!0)},children:b}),Object(_.jsx)(W,{show:d,onHide:function(){return j(!1)},onSelect:n,filter:a})]})}var C={rarity:"Rarity",level:"Level",name:"Name"};function A(e,t){return t===e?"":t}function W(e){var t=e.show,n=e.onHide,m=e.onSelect,E=e.filter,K=void 0===E?function(){return!0}:E,T=Object(s.useContext)(g.b),W=Object(s.useState)((function(){return Object.keys(C)[0]})),I=Object(c.a)(W,2),V=I[0],B=I[1],H=Object(s.useReducer)(A,""),F=Object(c.a)(H,2),M=F[0],R=F[1],L=Object(s.useReducer)(A,""),q=Object(c.a)(L,2),z=q[0],D=q[1],P=Object(S.b)(x.b.getAll(),[]),U=function(e){var t,n;return null!==(t=null===(n=T._getChar(e))||void 0===n?void 0:n.level)&&void 0!==t?t:0},G=function(e){var t;return null===P||void 0===P||null===(t=P[e])||void 0===t?void 0:t.star},J=P?Object(a.a)(new Set(y.c)).filter((function(e){return K(T._getChar(e),P[e])})).filter((function(e){var t,n;return(!M||M===(null===P||void 0===P||null===(t=P[e])||void 0===t?void 0:t.elementKey))&&(!z||z===(null===P||void 0===P||null===(n=P[e])||void 0===n?void 0:n.weaponTypeKey))})).sort((function(e,t){if("name"===V)return e<t?-1:e>t?1:0;if("level"===V){var n=U(t)-U(e);return n||G(t)-G(e)}var a=G(t)-G(e);return a||U(t)-U(e)})):[];return P?Object(_.jsx)(d.a,{show:t,size:"xl",contentClassName:"bg-transparent",onHide:n,children:Object(_.jsxs)(j.a,{bg:"lightcontent",text:"lightfont",children:[Object(_.jsx)(j.a.Header,{children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{xs:"auto",children:Object(_.jsx)(u.a,{children:y.d.map((function(e){return Object(_.jsx)(o.a,{variant:M&&M!==e?"secondary":e,className:"py-1 px-2 text-white",onClick:function(){return R(e)},children:Object(_.jsx)("h3",{className:"mb-0",children:N.b[e]})},e)}))})}),Object(_.jsx)(v.a,{children:Object(_.jsx)(u.a,{children:y.j.map((function(e){var t;return Object(_.jsx)(o.a,{variant:z&&z!==e?"secondary":"success",className:"py-1 px-2",onClick:function(){return D(e)},children:Object(_.jsx)("h3",{className:"mb-0",children:Object(_.jsx)(l.a,{src:null===(t=p.a.weaponTypes)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(_.jsxs)(v.a,{xs:"auto",children:[Object(_.jsx)("span",{children:"Sort by: "}),Object(_.jsx)(h.a,{type:"radio",name:"level",value:V,onChange:B,children:Object.entries(C).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(_.jsx)(f.a,{value:n,variant:V===n?"success":"primary",children:Object(_.jsx)("h6",{className:"mb-0",children:a})},n)}))})]}),Object(_.jsx)(v.a,{xs:"auto",children:Object(_.jsx)(o.a,{onClick:n,variant:"danger",children:Object(_.jsx)(i.a,{icon:r.B})})})]})}),Object(_.jsx)(j.a.Body,{children:Object(_.jsx)(b.a,{children:J.map((function(e){var t,a=P[e],c=T._getChar(e);return Object(_.jsx)(v.a,{lg:3,md:4,className:"mb-2",children:Object(_.jsxs)(o.a,{className:"w-100",variant:"secondary",onClick:function(){n(),m(e)},children:[Object(_.jsx)("h5",{children:a.name}),Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{xs:"auto",className:"pr-0",children:Object(_.jsx)(l.a,{src:a.thumbImg,className:"thumb-big grad-".concat(a.star,"star p-0"),thumbnail:!0})}),Object(_.jsxs)(v.a,{children:[c?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("h5",{className:"mb-0",children:["Lv. ",k.a.getLevelString(c)," ","C".concat(c.constellation)]}),Object(_.jsxs)("h6",{className:"mb-0",children:[Object(_.jsx)(O.a,{variant:"info",children:Object(_.jsx)("strong",{className:"mx-1",children:c.talent.auto})})," ",Object(_.jsx)(O.a,{variant:"info",children:Object(_.jsx)("strong",{className:"mx-1",children:c.talent.skill})})," ",Object(_.jsx)(O.a,{variant:"info",children:Object(_.jsx)("strong",{className:"mx-1",children:c.talent.burst})})]})]}):Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("h4",{children:Object(_.jsx)(O.a,{variant:"primary",children:"NEW"})})}),Object(_.jsx)("h6",{className:"mb-0",children:Object(_.jsx)(w.a,{stars:a.star,colored:!0})}),Object(_.jsxs)("h3",{className:"mb-0",children:[a.elementKey&&N.a[a.elementKey]," ",Object(_.jsx)(l.a,{src:null===(t=p.a.weaponTypes)||void 0===t?void 0:t[a.weaponTypeKey],className:"inline-icon"})]})]})]})]})},e)}))})})]})}):null}},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a,c=n(106),r=n(25),i=n(10),s=n(187),l=n(120),o=n(121),u=n(86),d=n(209),j=n(1);function b(e){var t=e.location,n=e.onEquip,b=e.weaponTypeKey,v=e.disableUnequip,h=void 0!==v&&v,f=e.editable,O=void 0!==f&&f,m=Object(l.a)(["artifact"]).t,p=Object(u.b)(o.b.get(t),[t]),x=(null===p||void 0===p?void 0:p.name)?p.nameWIthIcon:Object(j.jsxs)("span",{children:[Object(j.jsx)(i.a,{icon:r.c})," ",m(a||(a=Object(c.a)(["filterLocation.inventory"])))]});return O?Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a.Toggle,{className:"text-left",children:x}),Object(j.jsxs)(s.a.Menu,{children:[!h&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(s.a.Item,{onClick:function(){},children:[Object(j.jsx)(i.a,{icon:r.c})," Inventory"]}),Object(j.jsx)(s.a.Divider,{})]}),Object(j.jsx)(d.b,{onSelect:n,weaponTypeKey:b})]})]}):x}},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(4),c=n(20),r=n(71),i=n(40);function s(e){var t=new Set;return e(new Proxy({},{get:function(e,n,a){t.add(n.toString())}})),Object(c.a)(t)}var l=Object.freeze(Object.fromEntries(Object.entries(i.b).map((function(e){var t=Object(a.a)(e,2);return[t[0],s(t[1])]}))));function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.keys(i.d),a=new Set,r=[new Set,new Set];return n.forEach((function(n){return u(e,n,t,r,a)})),r.flatMap((function(e){return Object(c.a)(e)}))}function u(e,t,n,a,c){var s,o;c.has(t)||(c.add(t),null===(s=l[t])||void 0===s||s.forEach((function(t){return u(e,t,n,a,c)})),(null!==(o=n[t])&&void 0!==o?o:[]).forEach((function(t){return r.a.getCurrent(t,e)[1].forEach((function(t){return u(e,t,n,a,c)}))})),a[Object(i.e)(t)].add(t))}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a=function(e){return c(function(e){switch(e){case"sword":return"DullBlade";case"bow":return"HuntersBow";case"claymore":return"WasterGreatsword";case"polearm":return"BeginnersProtector";case"catalyst":return"ApprenticesNotes";default:return"DullBlade"}}(e))},c=function(e){return{id:"",key:e,level:1,ascension:0,refine:1,location:""}}},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var a=n(4),c=n(189),r=n(72),i=n(14),s=n(1);function l(e,t){var n=t.characterSheet,r=t.weaponSheet,i=t.artifactSheets,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"anemo";if("basicKeys"===e)return"Basic Stats";if("genericAvgHit"===e)return"Generic Optimization Values";if("transReactions"===e)return"Transformation Reaction";if(e.startsWith("talentKey_")){var o,u,d=e.split("talentKey_")[1];return null!==(o=null===n||void 0===n||null===(u=n.getTalentOfKey(d,l))||void 0===u?void 0:u.name)&&void 0!==o?o:d}if(e.startsWith("weapon_")){var j,b=e.split("weapon_")[1];return null!==(j=null===r||void 0===r?void 0:r.name)&&void 0!==j?j:b}if(e.startsWith("artifact_")){var v,h=e.split("_"),f=Object(a.a)(h,3),O=f[1],m=f[2];return Object(s.jsxs)("span",{children:[null===(v=i[O])||void 0===v?void 0:v.name," ",Object(s.jsxs)(c.a,{variant:"success",children:[m,"-Set"]})]})}return""}function o(e){return{key:e,level:1,ascension:0,hitMode:"avgHit",reactionMode:null,equippedArtifacts:Object.fromEntries(i.h.map((function(e){return[e,""]}))),equippedWeapon:"",conditionalValues:{},baseStatOverrides:{},buildSettings:Object(r.a)(),talent:{auto:1,skill:1,burst:1},infusionAura:"",constellation:0}}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(4),c=n(25),r=n(10),i=n(0),s=n(188),l=n(143),o=n(127),u=n(73),d=n(126),j=n(207),b=n(210),v=n(206),h=n(123),f=n(35),O=n(34),m=n(86),p=n(124),x=n(1);function g(e){var t,n=e.weaponId,g=e.onEdit,y=e.onDelete,S=e.onClick,w=e.cardClassName,N=void 0===w?"":w,k=e.bg,_=void 0===k?"":k,E=e.footer,K=void 0!==E&&E,T=e.editable,C=void 0!==T&&T,A=Object(i.useContext)(f.b),W=Object(i.useState)(void 0),I=Object(a.a)(W,2),V=I[0],B=I[1];Object(i.useEffect)((function(){return n?A.followWeapon(n,B):void 0}),[n,B,A]);var H=V,F=Object(m.b)((null===H||void 0===H?void 0:H.key)&&p.a.get(H.key),[null===H||void 0===H?void 0:H.key]);if(!H||!F)return null;var M=H.level,R=H.ascension,L=H.refine,q=(H.id,F.weaponType),z=F.getMainStatValue(M,R).toFixed(O.b.fixedUnit("atk")),D=F.getSubStatKey(),P=F.getSubStatValue(M,R).toFixed(O.b.fixedUnit(D)),U=p.a.getLevelString(H),G=[["weaponATK",z]];return(null===F||void 0===F?void 0:F.passiveName)&&G.push([D,P]),Object(x.jsxs)(s.a,{className:N,bg:_||"darkcontent",text:"lightfont",children:[Object(x.jsxs)(s.a.Header,{children:[Object(x.jsx)(l.a,{src:null===(t=j.a.weaponTypes)||void 0===t?void 0:t[q],className:"inline-icon"})," ",Object(x.jsx)("h5",{className:"d-inline",children:F.name})]}),Object(x.jsxs)(s.a.Body,{onClick:function(){return null===S||void 0===S?void 0:S(n)},className:S?"cursor-pointer":"",children:[Object(x.jsxs)(o.a,{children:[Object(x.jsx)(u.a,{xs:"auto",className:"pr-0",children:Object(x.jsx)(l.a,{src:F.img,className:"thumb-big grad-".concat(F.rarity,"star p-0"),thumbnail:!0})}),Object(x.jsxs)(u.a,{children:[Object(x.jsxs)("h5",{className:"mb-0",children:["Level ",U," "]}),Object(x.jsxs)("h5",{children:["Refinement ",L]}),Object(x.jsx)("h6",{className:"mb-0",children:Object(x.jsx)(v.a,{stars:F.rarity,colored:!0})})]})]}),Object(x.jsx)(o.a,{children:G.map((function(e){var t=Object(a.a)(e,2),n=t[0],c=t[1],r=O.b.getStatUnit(n);return Object(x.jsxs)(u.a,{xs:12,children:[Object(x.jsxs)("h6",{className:"d-inline",children:[h.a[n]," ",O.b.getStatName(n)]}),Object(x.jsx)("span",{className:"float-right",children:c+r})]},n)}))}),!1]}),K&&Object(x.jsx)(s.a.Footer,{children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(u.a,{children:Object(x.jsx)(b.a,{location:null===H||void 0===H?void 0:H.location,onEquip:function(e){return A.setWeaponLocation(n,e)},weaponTypeKey:q,disableUnequip:!!H.location,editable:C})}),Object(x.jsx)(u.a,{xs:"auto",children:Object(x.jsxs)("span",{className:"float-right align-top ml-1",children:[g&&Object(x.jsx)(d.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){return g(n)},children:Object(x.jsx)(r.a,{icon:c.k})}),y&&Object(x.jsx)(d.a,{variant:"danger",size:"sm",disabled:!!H.location,onClick:function(){return y(n)},children:Object(x.jsx)(r.a,{icon:c.E})})]})})]})})]})}},218:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return S}));var a=n(20),c=n(4),r=n(25),i=n(10),s=n(0),l=n(541),o=n(188),u=n(127),d=n(73),j=n(224),b=n(126),v=n(143),h=n(207),f=n(206),O=n(14),m=n(86),p=n(124),x=n(1);function g(e,t){return t===e?"":t}function y(e){var t=e.show,n=e.onHide,y=e.onSelect,S=e.filter,w=void 0===S?function(){return!0}:S,N=Object(m.b)(p.a.getAll(),[]),k=Object(s.useReducer)(g,""),_=Object(c.a)(k,2),E=_[0],K=_[1],T=N?Object(a.a)(new Set(O.i)).filter((function(e){return w(N[e])})).filter((function(e){var t;return!E||E===(null===N||void 0===N||null===(t=N[e])||void 0===t?void 0:t.weaponType)})).sort((function(e,t){var n,a,c,r;return(null!==(n=null===N||void 0===N||null===(a=N[t])||void 0===a?void 0:a.rarity)&&void 0!==n?n:0)-(null!==(c=null===N||void 0===N||null===(r=N[e])||void 0===r?void 0:r.rarity)&&void 0!==c?c:0)})):[];return N?Object(x.jsx)(l.a,{show:t,size:"xl",contentClassName:"bg-transparent",onHide:n,children:Object(x.jsxs)(o.a,{bg:"lightcontent",text:"lightfont",children:[Object(x.jsx)(o.a.Header,{children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(j.a,{children:O.j.map((function(e){var t;return Object(x.jsx)(b.a,{variant:E&&E!==e?"secondary":"success",className:"py-1 px-2",onClick:function(){return K(e)},children:Object(x.jsx)("h3",{className:"mb-0",children:Object(x.jsx)(v.a,{src:null===(t=h.a.weaponTypes)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(x.jsx)(d.a,{xs:"auto",children:Object(x.jsx)(b.a,{onClick:n,variant:"danger",children:Object(x.jsx)(i.a,{icon:r.B})})})]})}),Object(x.jsx)(o.a.Body,{children:Object(x.jsx)(u.a,{children:T.map((function(e){var t,a=N[e];return Object(x.jsx)(d.a,{lg:3,md:4,className:"mb-2",children:Object(x.jsx)(b.a,{className:"w-100 h-100 align-top",variant:"secondary",onClick:function(){n(),y(e)},children:Object(x.jsxs)(u.a,{className:"h-100",children:[Object(x.jsx)(d.a,{xs:"auto",className:"pr-0",children:Object(x.jsx)(v.a,{src:a.img,className:"thumb-big grad-".concat(a.rarity,"star p-0"),thumbnail:!0})}),Object(x.jsxs)(d.a,{children:[Object(x.jsxs)("h5",{className:"mb-0",children:[Object(x.jsx)(v.a,{src:null===(t=h.a.weaponTypes)||void 0===t?void 0:t[a.weaponType],className:"inline-icon"})," ",a.name]}),Object(x.jsx)("h6",{className:"mb-0",children:Object(x.jsx)(f.a,{stars:a.rarity,colored:!0})})]})]})})},e)}))})})]})}):null}function S(e){var t,n=e.weaponSheet,a=e.onSelect,r=e.filter,i=Object(s.useState)(!1),l=Object(c.a)(i,2),o=l[0],u=l[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a,{as:j.a,onClick:function(){return u(!0)},children:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:"Select a Weapon"}),Object(x.jsx)(y,{show:o,onHide:function(){return u(!1)},onSelect:a,filter:r})]})}},537:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(191),c=n(229),r=n(1);function i(){return Object(r.jsx)(a.a,{children:Object(r.jsx)(c.default,{editable:!0,characterKey:"Traveler",tabName:"talent"})})}}}]);
//# sourceMappingURL=12.32fdadea.chunk.js.map