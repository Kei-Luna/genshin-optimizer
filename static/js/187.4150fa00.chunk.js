"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[187],{36944:function(e,n,t){t.d(n,{Z:function(){return C},d:function(){return S}});var r,i,l,a,o=t(1413),c=t(30168),s=t(45987),u=t(63204),d=t(49670),f=t(23786),h=t(57064),x=t(20890),v=t(94721),Z=t(72791),p=t(22020),m=t(947),j=t(56928),g=t(42320),y=t(33890),b=t(2380),k=t(80184),w=["value","onChange","unSelectText","unSelectIcon","inventory","noUnselect","filter"];function C(e){var n,t=e.value,C=e.onChange,P=e.unSelectText,A=e.unSelectIcon,E=e.inventory,G=void 0!==E&&E,M=e.noUnselect,R=void 0!==M&&M,I=e.filter,F=void 0===I?function(){return!0}:I,N=(0,s.Z)(e,w),_=(0,p.$)("ui").t,O=(0,Z.useContext)(j.t).database,z=(0,g.Z)(m.ZP.getAll,[]),D=(0,g.Z)(m.ZP.get(t),[t]),K=O._getCharKeys().filter((function(e){return(null===z||void 0===z?void 0:z[e])&&F(z[e],e)})).sort();return(0,k.jsxs)(y.Z,(0,o.Z)((0,o.Z)({},N),{},{title:null!==(n=null===D||void 0===D?void 0:D.name)&&void 0!==n?n:G?_(r||(r=(0,c.Z)(["inventory"]))):null!==P&&void 0!==P?P:_(i||(i=(0,c.Z)(["unselect"]))),color:t?"success":"primary",startIcon:null!==D&&void 0!==D&&D.thumbImg?(0,k.jsx)(b.Z,{src:D.thumbImgSide}):G?(0,k.jsx)(u.Z,{}):null!==A&&void 0!==A?A:(0,k.jsx)(d.Z,{}),children:[!R&&(G?(0,k.jsxs)(f.Z,{onClick:function(){return C("")},selected:""===t,disabled:""===t,children:[(0,k.jsx)(h.Z,{children:(0,k.jsx)(u.Z,{})}),(0,k.jsx)(x.Z,{variant:"inherit",noWrap:!0,children:_(l||(l=(0,c.Z)(["inventory"])))})]}):(0,k.jsxs)(f.Z,{onClick:function(){return C("")},selected:""===t,disabled:""===t,children:[(0,k.jsx)(h.Z,{children:(0,k.jsx)(d.Z,{})}),(0,k.jsx)(x.Z,{variant:"inherit",noWrap:!0,children:_(a||(a=(0,c.Z)(["unselect"])))})]})),!R&&(0,k.jsx)(v.Z,{},"div"),!!z&&S(z,K,C,t)]}))}function S(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return n.map((function(n){var i,l;return(0,k.jsxs)(f.Z,{onClick:function(){return t(n)},selected:r===n,disabled:r===n,children:[(0,k.jsx)(h.Z,{children:(0,k.jsx)(b.Z,{src:null===(i=e[n])||void 0===i?void 0:i.thumbImgSide})}),(0,k.jsx)(x.Z,{variant:"inherit",noWrap:!0,children:null===e||void 0===e||null===(l=e[n])||void 0===l?void 0:l.name})]},n)}))}},40020:function(e,n,t){t.d(n,{Z:function(){return d}});var r,i=t(30168),l=t(63204),a=t(20890),o=t(22020),c=t(947),s=t(42320),u=t(80184);function d(e){var n=e.location,t=(0,o.$)("ui").t,d=(0,s.Z)(c.ZP.get(null!==n&&void 0!==n?n:""),[n]);return(0,u.jsx)(a.Z,{component:"span",children:null!==d&&void 0!==d&&d.name?d.nameWIthIcon:(0,u.jsxs)("span",{children:[(0,u.jsx)(l.Z,{sx:{verticalAlign:"text-bottom"}})," ",t(r||(r=(0,i.Z)(["inventory"])))]})})}},2380:function(e,n,t){var r=(0,t(93457).Z)("img")((function(e){var n=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:n.spacing(-3),marginLeft:n.spacing(-1.25),marginRight:n.spacing(-1),marginBottom:n.spacing(-1)}}));n.Z=r},10600:function(e,n,t){t.d(n,{CC:function(){return v},ZP:function(){return Z}});var r=t(29439),i=t(1413),l=t(45987),a=t(66934),o=t(28e3),c=t(24518),s=t(72791),u=t(80184),d=["children","disableRipple","disableFocusRipple","disableTouchRipple"],f=["value","onChange","disabled","float"],h=(0,a.ZP)(o.ZP)((function(e){var n=e.theme;return{backgroundColor:n.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:n.palette.primary.dark},"&.Mui-focused":{backgroundColor:n.palette.primary.dark},"&.Mui-disabled":{backgroundColor:n.palette.primary.dark}}})),x=(0,a.ZP)(c.Z)((function(e){return{backgroundColor:e.theme.palette.primary.main,padding:0,overflow:"hidden",div:{width:"100%",height:"100%"}}}));function v(e){var n=e.children,t=(e.disableRipple,e.disableFocusRipple,e.disableTouchRipple,(0,l.Z)(e,d));return(0,u.jsx)(x,(0,i.Z)((0,i.Z)({disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},t),{},{children:n}))}function Z(e){var n=e.value,t=void 0===n?0:n,a=e.onChange,o=e.disabled,c=void 0!==o&&o,d=e.float,x=void 0!==d&&d,v=(0,l.Z)(e,f),Z=(0,s.useState)(t),p=(0,r.Z)(Z,2),m=p[0],j=p[1],g=(0,s.useState)(!1),y=(0,r.Z)(g,2),b=y[0],k=y[1],w=(0,s.useMemo)((function(){return x?parseFloat:parseInt}),[x]),C=(0,s.useCallback)((function(){a(m),k(!1)}),[a,m,k]),S=(0,s.useCallback)((function(){k(!0)}),[k]);(0,s.useEffect)((function(){return j(t)}),[t,j]);var P=(0,s.useCallback)((function(e){return j(w(e.target.value)||0)}),[j,w]),A=(0,s.useCallback)((function(e){return"Enter"===e.key&&C()}),[C]);return(0,u.jsx)(h,(0,i.Z)({value:b&&!m?"":m,"aria-label":"custom-input",type:"number",inputProps:{step:x?.1:1},onChange:P,onBlur:C,onFocus:S,disabled:c,onKeyDown:A},v))}},92443:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),i=t(45987),l=t(66934),a=t(24518),o=t(80184),c=["children","disabled"],s=(0,l.ZP)(a.Z)((function(e){var n=e.theme;return{"&.Mui-disabled":{backgroundColor:n.palette.primary.dark,color:n.palette.text.secondary}}}));function u(e){var n=e.children,t=(e.disabled,(0,i.Z)(e,c));return(0,o.jsx)(s,(0,r.Z)((0,r.Z)({},t),{},{disabled:!0,children:n}))}},72838:function(e,n,t){t.d(n,{Z:function(){return B},N:function(){return $}});var r,i,l,a=t(30168),o=t(53174),c=t(54483),s=t(40117),u=t(62002),d=t(20890),f=t(47047),h=t(39504),x=t(68870),v=t(81918),Z=t(13400),p=t(61889),m=t(42169),j=t(72363),g=t(2199),y=t(24518),b=t(18455),k=t(72791),w=t(22020),C=t(95614),S=t(96106),P=t(71310),A=t(36944),E=t(40020),G=t(91702),M=t(25617),R=t(10157),I=t(75545),F=t(19272),N=t(31148),_=t(56928),O=t(79406),z=t(63372),D=t(42320),K=t(50765),W=t(60393),T=t(46797),U=t(44217),V=t(80184),q=new Set(K.L);function B(e){var n,t,K,W,B=e.artifactId,$=e.artifactObj,H=e.onEdit,Q=e.onDelete,X=e.mainStatAssumptionLevel,J=void 0===X?0:X,Y=e.effFilter,ee=void 0===Y?q:Y,ne=e.probabilityFilter,te=(0,w.$)(["artifact"]).t,re=(0,k.useContext)(_.t).database,ie=(0,z.Z)(B),le=(0,D.Z)(N.y.get(null===(n=null!==$&&void 0!==$?$:ie)||void 0===n?void 0:n.setKey),[$,ie]),ae=!$,oe=null!==$&&void 0!==$?$:ie;if(!oe)return null;var ce=oe.id,se=oe.lock,ue=oe.slotKey,de=oe.rarity,fe=oe.level,he=oe.mainStatKey,xe=oe.substats,ve=oe.exclude,Ze=oe.location,pe=void 0===Ze?"":Ze,me=Math.max(Math.min(J,4*de),fe),je=O.ZP.unit(he),ge="roll"+(Math.floor(Math.max(fe,0)/4)+1),ye=F.Z.getArtifactEfficiency(oe,ee),be=ye.currentEfficiency,ke=ye.maxEfficiency,we=0!==ke,Ce=(null===le||void 0===le?void 0:le.getSlotName(ue))||"Unknown Piece Name",Se=null===le||void 0===le?void 0:le.getSlotDesc(ue),Pe=Se&&(0,V.jsx)(S.Z,{placement:"top",title:(0,V.jsx)(d.Z,{children:Se}),children:(0,V.jsx)("span",{children:(0,V.jsx)(c.G,{icon:o.sqG})})}),Ae=null===le||void 0===le?void 0:le.setEffects,Ee=le&&Ae&&(0,V.jsx)(S.Z,{placement:"top",title:(0,V.jsx)("span",{children:Object.keys(Ae).map((function(e){return(0,V.jsxs)("span",{children:[(0,V.jsx)(d.Z,{variant:"h6",children:(0,V.jsx)(M.Z,{color:"success",children:te("setEffectNum",{setNum:e})})}),(0,V.jsx)(d.Z,{children:le.setEffectDesc(e)})]},e)}))}),children:(0,V.jsx)("span",{children:(0,V.jsx)(c.G,{icon:o.sqG})})});return(0,V.jsx)(k.Suspense,{fallback:(0,V.jsx)(f.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:(0,V.jsxs)(P.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,V.jsxs)(h.Z,{className:"grad-".concat(de,"star"),sx:{pt:1,pb:0,pr:0},children:[(0,V.jsxs)(x.Z,{component:"div",sx:{display:"flex",alignItems:"center",pr:1},children:[(0,V.jsx)(v.Z,{size:"small",label:(0,V.jsx)("strong",{children:" +".concat(fe)}),color:ge}),(0,V.jsxs)(d.Z,{sx:{pl:1,flexGrow:1},children:[Ce," ",Pe]}),(0,V.jsx)(Z.Z,{color:"primary",disabled:!ae,onClick:function(){return re.updateArt({lock:!se},ce)},children:se?(0,V.jsx)(s.Z,{}):(0,V.jsx)(u.Z,{})})]}),(0,V.jsxs)(p.ZP,{container:!0,sx:{flexWrap:"nowrap"},children:[(0,V.jsxs)(p.ZP,{item:!0,flexGrow:1,children:[(0,V.jsx)(d.Z,{color:"text.secondary",variant:"body2",children:(0,V.jsx)(C.ZP,{slotKey:ue})}),(0,V.jsx)(d.Z,{variant:"h6",color:"".concat(O.ZP.getVariant(he),".main"),children:(0,V.jsxs)("span",{children:[I.Z[he]," ",O.ZP.get(he)]})}),(0,V.jsx)(d.Z,{variant:"h5",children:(0,V.jsx)("strong",{children:(0,V.jsxs)(G.Z,{color:me!==fe?"warning":void 0,children:[(0,O.qs)(null!==(t=F.Z.mainStatValue(he,de,me))&&void 0!==t?t:0,O.ZP.unit(he)),je]})})}),(0,V.jsx)(R.t,{stars:de,colored:!0})]}),(0,V.jsx)(p.ZP,{item:!0,maxWidth:"40%",sx:{mt:-3,mb:-1,pl:-2},alignSelf:"flex-end",children:(0,V.jsx)(m.Z,{component:"img",image:null!==(K=null===le||void 0===le?void 0:le.slotIcons[ue])&&void 0!==K?K:"",width:"100%",height:"auto"})})]})]}),(0,V.jsxs)(h.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0},children:[xe.map((function(e){return(0,V.jsx)(L,{stat:e,effFilter:ee,rarity:de},e.key)})),(0,V.jsxs)(x.Z,{sx:{display:"flex",my:1},children:[(0,V.jsx)(d.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:te(r||(r=(0,a.Z)(["editor.curSubEff"])))}),(0,V.jsx)(T.Z,{value:be,max:900,valid:we})]}),be!==ke&&(0,V.jsxs)(x.Z,{sx:{display:"flex",mb:1},children:[(0,V.jsx)(d.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:te(i||(i=(0,a.Z)(["editor.maxSubEff"])))}),(0,V.jsx)(T.Z,{value:ke,max:900,valid:we})]}),(0,V.jsx)(x.Z,{flexGrow:1}),ne&&(0,V.jsxs)("strong",{children:["Probability: ",(100*(0,U.B)(oe,ne)).toFixed(2),"%"]}),(0,V.jsxs)(d.Z,{color:"success.main",children:[null!==(W=null===le||void 0===le?void 0:le.name)&&void 0!==W?W:"Artifact Set"," ",Ee]})]}),(0,V.jsx)(j.Z,{children:(0,V.jsxs)(p.ZP,{container:!0,sx:{flexWrap:"nowrap"},children:[(0,V.jsx)(p.ZP,{item:!0,xs:"auto",flexShrink:1,children:ae?(0,V.jsx)(A.Z,{size:"small",inventory:!0,value:pe,onChange:function(e){return re.setArtLocation(B,e)}}):(0,V.jsx)(E.Z,{location:pe})}),(0,V.jsx)(p.ZP,{item:!0,flexGrow:1,sx:{mr:1}}),ae&&(0,V.jsx)(p.ZP,{item:!0,xs:"auto",children:(0,V.jsxs)(g.Z,{sx:{height:"100%"},children:[!!H&&(0,V.jsx)(y.Z,{color:"info",onClick:function(){return H(ce)},size:"small",children:(0,V.jsx)(c.G,{icon:o.Xcf,className:"fa-fw"})}),(0,V.jsx)(b.Z,{title:(0,V.jsx)(d.Z,{children:te(l||(l=(0,a.Z)(["excludeArtifactTip"])))}),placement:"top",arrow:!0,children:(0,V.jsx)(y.Z,{onClick:function(){return re.updateArt({exclude:!ve},ce)},color:ve?"error":"success",size:"small",children:(0,V.jsx)(c.G,{icon:ve?o.gPx:o.Stf,className:"fa-fw"})})}),!!Q&&(0,V.jsx)(y.Z,{color:"error",size:"small",onClick:function(){return Q(ce)},disabled:se,children:(0,V.jsx)(c.G,{icon:o.I7k,className:"fa-fw"})})]})})]})})]})})}function L(e){var n,t,r,i=e.stat,l=e.effFilter,a=e.rarity;if(!i.value)return null;var o=null!==(n=null===(t=i.rolls)||void 0===t?void 0:t.length)&&void 0!==n?n:0,c=i.key?F.Z.maxSubstatValues(i.key):0,s=i.key?F.Z.getSubstatRollData(i.key,a):[],u=7-s.length,f="roll".concat((0,W.uZ)(o,1,6)),h=null!==(r=i.efficiency)&&void 0!==r?r:0,v=(0,W.V2)(.5+h/500*.5),Z=O.ZP.getStr(i.key),p=O.ZP.unit(i.key),m=i.key&&l.has(i.key);return(0,V.jsxs)(x.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,V.jsxs)(d.Z,{sx:{flexGrow:1},color:o?"".concat(f,".main"):"error.main",component:"span",children:[I.Z[i.key]," ",Z,"+".concat((0,O.qs)(i.value,O.ZP.unit(i.key))).concat(p)]}),m&&(0,V.jsx)(x.Z,{display:"flex",gap:.25,height:"1.3em",children:i.rolls.sort().map((function(e,n){return(0,V.jsx)($,{value:100*e/c,color:"roll".concat((0,W.uZ)(u+s.indexOf(e),1,6),".main")},"".concat(n).concat(e))}))}),(0,V.jsx)(d.Z,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:m?"".concat(h.toFixed(),"%"):"-"})]})}function $(e){var n=e.color,t=void 0===n?"red":n,r=e.value,i=void 0===r?50:r;return(0,V.jsx)(x.Z,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,V.jsx)(x.Z,{sx:{width:10,height:"".concat(100-(0,W.uZ)(i,0,100),"%"),bgcolor:"gray"}})})}},46797:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),i=t(25617),l=t(60393),a=t(80184);function o(e){var n=e.value,t=e.max,o=void 0===t?1:t,c=e.valid,s="number"===typeof n?["roll".concat((0,l.uZ)(Math.floor(n/o*10)-4,1,6)),n.toFixed()+"%"]:["secondary",n],u=(0,r.Z)(s,2),d=u[0],f=u[1];return c||(d="error"),(0,a.jsx)(i.Z,{color:d,children:f})}},44217:function(e,n,t){t.d(n,{B:function(){return y}});var r=t(29439),i=t(37762),l=t(4942),a=t(1413),o=t(93433),c=t(60393),s=t(19272),u=t(12354),d=[3,4,6],f={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},h={};function x(e,n,t,r){if(5!==e.length)for(var i=0,s=d;i<s.length;i++){var u=s[i];n[u]>0&&x([].concat((0,o.Z)(e),[u]),(0,a.Z)((0,a.Z)({},n),{},(0,l.Z)({},u,n[u]-u)),t-u,r*n[u]/t)}else(0,c.SR)(h,e,r)}x([0],{3:6,4:20,6:18},44,1),x([3],{3:3,4:20,6:18},41,1),x([4],{3:6,4:16,6:18},40,1),x([6],{3:6,4:20,6:12},38,1);for(var v=Array(6).fill(0).map((function(e,n){for(var t=[1],r=0,i=1;++r<=n;)i*=n-r+1,i/=r,t.push(i);return t})),Z=[[1]],p=function(){var e=Z[Z.length-1],n=Array(e.length+3).fill(0);e.forEach((function(e,t){for(var r=0,i=[0,1,2,3];r<i.length;r++){n[t+i[r]]+=e}})),Z.push(n.map((function(e){return e/4})))};Z.length<6;)p();for(var m=function(){var e=g[j],n=e.reduce((function(e,n){return e+n}));e.forEach((function(e,t,r){r[t]=n,n-=e}))},j=0,g=Z;j<g.length;j++)m();function y(e,n){if(e.rarity<=2)return NaN;var t=e.rarity,o=e.level,x=e.substats,p=(0,a.Z)({},n),m=new Set(Object.keys(p)),j=0,g=e.mainStatKey;if(g in p){var y=4*t;if(u[t][g][y]<p[g])return 0;delete p[g],m.delete(g)}var b,k=(0,i.Z)(x);try{for(k.s();!(b=k.n()).done;){var w=b.value,C=w.key,S=w.value;C?m.has(C)&&(m.delete(C),p[C]>S?p[C]-=S:delete p[C]):j+=1}}catch(O){k.e(O)}finally{k.f()}if(j+=4-x.length,m.size>j||Object.keys(p).length>4)return 0;for(var P=s.Z.rollsRemaining(o,t)-j,A=0,E=Object.entries(p);A<E.length;A++){var G=(0,r.Z)(E[A],2),M=G[0],R=G[1];p[M]=Math.max(Math.ceil(10*R/s.Z.maxSubstatValues(M,t)),1)}var I=0,F=Object.entries(p).map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],l=m.has(t)?1:0,a=Math.ceil(i/10)-l;return I+=a,{target:i,filler:l,minUpgrade:a}})).reverse();if(I>P)return 0;var N=(0,l.Z)({},P,1),_=P-I;return F.forEach((function(e,n){for(var t,i,l,a=e.target,o=e.filler,c=e.minUpgrade,s={},u=c;u<=c+_;u++)for(var d=a-7*(u+o),f=d>0?Z[u+o][d]:1,h=0,x=Object.entries(N);h<x.length;h++){var p,m=(0,r.Z)(x[h],2),j=m[0],g=m[1],y=parseInt(j);if(!(y<u)){var b=(i=u,l=4-n,v[t=y][i]*Math.pow(l-1,t-i)/Math.pow(l,t)),k=y-u;s[k]=(null!==(p=s[k])&&void 0!==p?p:0)+g*f*b}}N=s})),function(e,n,t){var r,l,a=null!==(r=f[e])&&void 0!==r?r:0,o=0,s={3:2,4:5,6:3},u=h[a],x=(0,i.Z)(n);try{for(x.s();!(l=x.n()).done;){var Z=l.value.key;if(Z){var p=f[Z];u=u[p],s[p]-=1}}}catch(O){x.e(O)}finally{x.f()}a&&(s[a]-=1);var m,j={3:0,4:0,6:0},g=(0,i.Z)(t);try{for(g.s();!(m=g.n()).done;){var y=m.value;j[f[y]]+=1}}catch(O){g.e(O)}finally{g.f()}var b=0;(0,c.Q1)(u,[],(function(e){return"number"===typeof e}),(function(e,n){b+=e;var t,r={3:0,4:0,6:0},l=(0,i.Z)(n);try{for(l.s();!(t=l.n()).done;){r[t.value]+=1}}catch(O){l.e(O)}finally{l.f()}var a,c=e,s=(0,i.Z)(d);try{for(s.s();!(a=s.n()).done;){var u=a.value,f=r[u],h=j[u];if(f<h)return;c*=v[f][h]}}catch(O){s.e(O)}finally{s.f()}o+=c}));var k,w=(0,i.Z)(d);try{for(w.s();!(k=w.n()).done;){var C=k.value;o/=v[s[C]][j[C]]}}catch(O){w.e(O)}finally{w.f()}return o/b}(e.mainStatKey,x,m)*Object.values(N).reduce((function(e,n){return e+n}))}},63372:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(29439),i=t(72791),l=t(56928);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,i.useContext)(l.t),t=n.database,a=(0,i.useState)(t._getArt(e)),o=(0,r.Z)(a,2),c=o[0],s=o[1];return(0,i.useEffect)((function(){return s(t._getArt(e))}),[t,e]),(0,i.useEffect)((function(){return e?t.followArt(e,s):void 0}),[e,s,t]),c}}}]);
//# sourceMappingURL=187.4150fa00.chunk.js.map