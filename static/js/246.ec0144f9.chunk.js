"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[246],{40020:function(e,n,t){t.d(n,{Z:function(){return f}});var r,i=t(30168),l=t(63204),a=t(20890),o=t(22020),s=t(947),c=t(42320),u=t(80184);function f(e){var n=e.location,t=(0,o.$)("ui").t,f=(0,c.Z)(s.ZP.get(null!==n&&void 0!==n?n:""),[n]);return(0,u.jsx)(a.Z,{component:"span",children:null!==f&&void 0!==f&&f.name?f.nameWIthIcon:(0,u.jsxs)("span",{children:[(0,u.jsx)(l.Z,{sx:{verticalAlign:"text-bottom"}})," ",t(r||(r=(0,i.Z)(["inventory"])))]})})}},16246:function(e,n,t){t.d(n,{Z:function(){return B}});var r=t(30168),i=t(53174),l=t(54483),a=t(40117),o=t(62002),s=t(20890),c=t(47047),u=t(39504),f=t(68870),d=t(81918),x=t(13400),h=t(61889),v=t(42169),Z=t(72363),j=t(2199),m=t(24518),p=t(18455),y=t(72791),g=t(22020),b=t(95614),k=t(96106),w=t(71310),S=t(36944),P=t(40020),G=t(91702),A=t(25617),E=t(10157),M=t(75545),C=t(19272),N=t(31148),_=t(3997),O=t(44297),z=t(29439);var D,F,I,K=t(42320),R=t(50765),V=t(60393),W=t(46797),q=t(44217),L=t(80184),U=new Set(R.L);function B(e){var n,t,R,V,B=e.artifactId,H=e.artifactObj,Q=e.onEdit,T=e.onDelete,X=e.mainStatAssumptionLevel,J=void 0===X?0:X,Y=e.effFilter,ee=void 0===Y?U:Y,ne=e.probabilityFilter,te=(0,g.$)(["artifact"]).t,re=(0,y.useContext)(_.t).database,ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,y.useContext)(_.t).database,t=(0,y.useState)(n._getArt(e)),r=(0,z.Z)(t,2),i=r[0],l=r[1];return(0,y.useEffect)((function(){return l(n._getArt(e))}),[n,e]),(0,y.useEffect)((function(){return e?n.followArt(e,l):void 0}),[e,l,n]),i}(B),le=(0,K.Z)(N.y.get(null===(n=null!==H&&void 0!==H?H:ie)||void 0===n?void 0:n.setKey),[H,ie]),ae=!H,oe=null!==H&&void 0!==H?H:ie;if(!oe)return null;var se=oe.id,ce=oe.lock,ue=oe.slotKey,fe=oe.rarity,de=oe.level,xe=oe.mainStatKey,he=oe.substats,ve=oe.exclude,Ze=oe.location,je=void 0===Ze?"":Ze,me=Math.max(Math.min(J,4*fe),de),pe="flat"===O.ZP.unit(xe)?null:O.ZP.unit(xe),ye="roll"+(Math.floor(Math.max(de,0)/4)+1),ge=(0,L.jsx)(G.Z,{color:me!==de?"warning":void 0,children:(0,O.qs)(null!==(t=C.Z.mainStatValue(xe,fe,me))&&void 0!==t?t:0,O.ZP.unit(xe))}),be=C.Z.getArtifactEfficiency(oe,ee),ke=be.currentEfficiency,we=be.maxEfficiency,Se=0!==we,Pe=(null===le||void 0===le?void 0:le.getSlotName(ue))||"Unknown Piece Name",Ge=null===le||void 0===le?void 0:le.getSlotDesc(ue),Ae=Ge&&(0,L.jsx)(k.Z,{placement:"top",title:(0,L.jsx)(s.Z,{children:Ge}),children:(0,L.jsx)("span",{children:(0,L.jsx)(l.G,{icon:i.sqG})})}),Ee=null===le||void 0===le?void 0:le.setEffects,Me=le&&Ee&&(0,L.jsx)(k.Z,{placement:"top",title:(0,L.jsx)("span",{children:Object.keys(Ee).map((function(e){return(0,L.jsxs)("span",{children:[(0,L.jsx)(s.Z,{variant:"h6",children:(0,L.jsx)(A.Z,{color:"success",children:te("setEffectNum",{setNum:e})})}),(0,L.jsx)(s.Z,{children:le.setEffectDesc(e)})]},e)}))}),children:(0,L.jsx)("span",{children:(0,L.jsx)(l.G,{icon:i.sqG})})});return(0,L.jsx)(y.Suspense,{fallback:(0,L.jsx)(c.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:(0,L.jsxs)(w.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,L.jsxs)(u.Z,{className:"grad-".concat(fe,"star"),sx:{pt:1,pb:0,pr:0},children:[(0,L.jsxs)(f.Z,{component:"div",sx:{display:"flex",alignItems:"center",pr:1},children:[(0,L.jsx)(d.Z,{size:"small",label:(0,L.jsx)("strong",{children:" +".concat(de)}),color:ye}),(0,L.jsxs)(s.Z,{sx:{pl:1,flexGrow:1},children:[Pe," ",Ae]}),(0,L.jsx)(x.Z,{color:"primary",disabled:!ae,onClick:function(){return re.updateArt({lock:!ce},se)},children:ce?(0,L.jsx)(a.Z,{}):(0,L.jsx)(o.Z,{})})]}),(0,L.jsxs)(h.ZP,{container:!0,sx:{flexWrap:"nowrap"},children:[(0,L.jsxs)(h.ZP,{item:!0,flexGrow:1,children:[(0,L.jsx)(s.Z,{color:"text.secondary",variant:"body2",children:(0,L.jsx)(b.ZP,{slotKey:ue})}),(0,L.jsx)(s.Z,{variant:"h6",color:"".concat(O.ZP.getVariant(xe),".main"),children:(0,L.jsxs)("span",{children:[M.Z[xe]," ",O.ZP.get(xe)]})}),(0,L.jsx)(s.Z,{variant:"h5",children:(0,L.jsxs)("strong",{children:[ge,pe]})}),(0,L.jsx)(E.t,{stars:fe,colored:!0})]}),(0,L.jsx)(h.ZP,{item:!0,maxWidth:"40%",sx:{mt:-3,mb:-1,pl:-2},alignSelf:"flex-end",children:(0,L.jsx)(v.Z,{component:"img",image:null!==(R=null===le||void 0===le?void 0:le.slotIcons[ue])&&void 0!==R?R:"",width:"100%",height:"auto"})})]})]}),(0,L.jsxs)(u.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0},children:[he.map((function(e){return(0,L.jsx)($,{stat:e,effFilter:ee,rarity:fe},e.key)})),(0,L.jsxs)(f.Z,{sx:{display:"flex",my:1},children:[(0,L.jsx)(s.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:te(D||(D=(0,r.Z)(["editor.curSubEff"])))}),(0,L.jsx)(W.Z,{value:ke,max:900,valid:Se})]}),ke!==we&&(0,L.jsxs)(f.Z,{sx:{display:"flex",mb:1},children:[(0,L.jsx)(s.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:te(F||(F=(0,r.Z)(["editor.maxSubEff"])))}),(0,L.jsx)(W.Z,{value:we,max:900,valid:Se})]}),(0,L.jsx)(f.Z,{flexGrow:1}),ne&&(0,L.jsxs)("strong",{children:["Probability: ",(100*(0,q.B)(oe,ne)).toFixed(2),"%"]}),(0,L.jsxs)(s.Z,{color:"success.main",children:[null!==(V=null===le||void 0===le?void 0:le.name)&&void 0!==V?V:"Artifact Set"," ",Me]})]}),(0,L.jsx)(Z.Z,{children:(0,L.jsxs)(h.ZP,{container:!0,sx:{flexWrap:"nowrap"},children:[(0,L.jsx)(h.ZP,{item:!0,xs:"auto",flexShrink:1,children:ae?(0,L.jsx)(S.Z,{size:"small",inventory:!0,value:je,onChange:function(e){return re.setArtLocation(B,e)}}):(0,L.jsx)(P.Z,{location:je})}),(0,L.jsx)(h.ZP,{item:!0,flexGrow:1,sx:{mr:1}}),ae&&(0,L.jsx)(h.ZP,{item:!0,xs:"auto",children:(0,L.jsxs)(j.Z,{sx:{height:"100%"},children:[!!Q&&(0,L.jsx)(m.Z,{color:"info",onClick:function(){return Q(se)},size:"small",children:(0,L.jsx)(l.G,{icon:i.Xcf,className:"fa-fw"})}),(0,L.jsx)(p.Z,{title:(0,L.jsx)(s.Z,{children:te(I||(I=(0,r.Z)(["excludeArtifactTip"])))}),placement:"top",arrow:!0,children:(0,L.jsx)(m.Z,{onClick:function(){return re.updateArt({exclude:!ve},se)},color:ve?"error":"success",size:"small",children:(0,L.jsx)(l.G,{icon:ve?i.gPx:i.Stf,className:"fa-fw"})})}),!!T&&(0,L.jsx)(m.Z,{color:"error",size:"small",onClick:function(){return T(se)},disabled:ce,children:(0,L.jsx)(l.G,{icon:i.I7k,className:"fa-fw"})})]})})]})})]})})}function $(e){var n,t,r,i,l=e.stat,a=e.effFilter,o=e.rarity;if(!l.value)return null;var c=null!==(n=null===(t=l.rolls)||void 0===t?void 0:t.length)&&void 0!==n?n:0,u=l.key?C.Z.maxSubstatValues(l.key):0,d=l.key?C.Z.getSubstatRollData(l.key,o):[],x=7-d.length,h="roll".concat((0,V.uZ)(c,1,6)),v=null!==(r=l.efficiency)&&void 0!==r?r:0,Z=(0,V.V2)(.5+v/500*.5),j=null===(i=O.ZP.getStr(l.key))||void 0===i?void 0:i.split("%")[0],m="flat"===O.ZP.unit(l.key)?"":"%",p=l.key&&a.has(l.key);return(0,L.jsxs)(f.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,L.jsxs)(s.Z,{sx:{flexGrow:1},color:c?"".concat(h,".main"):"error.main",component:"span",children:[M.Z[l.key]," ",j,"+".concat((0,O.qs)(l.value,O.ZP.unit(l.key))).concat(m)]}),p&&(0,L.jsx)(f.Z,{display:"flex",gap:.25,height:"90%",children:l.rolls.sort().map((function(e){return(0,L.jsx)(H,{value:100*e/u,color:"roll".concat((0,V.uZ)(x+d.indexOf(e),1,6),".main")})}))}),(0,L.jsx)(s.Z,{sx:{opacity:Z,minWidth:40,textAlign:"right"},children:p?"".concat(v.toFixed(),"%"):"-"})]})}function H(e){var n=e.color,t=void 0===n?"red":n,r=e.value,i=void 0===r?50:r;return(0,L.jsx)(f.Z,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,L.jsx)(f.Z,{sx:{width:10,height:"".concat(100-(0,V.uZ)(i,0,100),"%"),bgcolor:"gray"}})})}},46797:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),i=t(25617),l=t(60393),a=t(80184);function o(e){var n=e.value,t=e.max,o=void 0===t?1:t,s=e.valid,c="number"===typeof n?["roll".concat((0,l.uZ)(Math.floor(n/o*10)-4,1,6)),n.toFixed()+"%"]:["secondary",n],u=(0,r.Z)(c,2),f=u[0],d=u[1];return s||(f="error"),(0,a.jsx)(i.Z,{color:f,children:d})}},44217:function(e,n,t){t.d(n,{B:function(){return g}});var r=t(29439),i=t(37762),l=t(4942),a=t(1413),o=t(93433),s=t(60393),c=t(19272),u=t(12354),f=[3,4,6],d={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},x={};function h(e,n,t,r){if(5!==e.length)for(var i=0,c=f;i<c.length;i++){var u=c[i];n[u]>0&&h([].concat((0,o.Z)(e),[u]),(0,a.Z)((0,a.Z)({},n),{},(0,l.Z)({},u,n[u]-u)),t-u,r*n[u]/t)}else(0,s.SR)(x,e,r)}h([0],{3:6,4:20,6:18},44,1),h([3],{3:3,4:20,6:18},41,1),h([4],{3:6,4:16,6:18},40,1),h([6],{3:6,4:20,6:12},38,1);for(var v=Array(6).fill(0).map((function(e,n){for(var t=[1],r=0,i=1;++r<=n;)i*=n-r+1,i/=r,t.push(i);return t})),Z=[[1]],j=function(){var e=Z[Z.length-1],n=Array(e.length+3).fill(0);e.forEach((function(e,t){for(var r=0,i=[0,1,2,3];r<i.length;r++){n[t+i[r]]+=e}})),Z.push(n.map((function(e){return e/4})))};Z.length<6;)j();for(var m=function(){var e=y[p],n=e.reduce((function(e,n){return e+n}));e.forEach((function(e,t,r){r[t]=n,n-=e}))},p=0,y=Z;p<y.length;p++)m();function g(e,n){if(e.rarity<=2)return NaN;var t=e.rarity,o=e.level,h=e.substats,j=(0,a.Z)({},n),m=new Set(Object.keys(j)),p=0,y=e.mainStatKey;if(y in j){var g=4*t;if(u[t][y][g]<j[y])return 0;delete j[y],m.delete(y)}var b,k=(0,i.Z)(h);try{for(k.s();!(b=k.n()).done;){var w=b.value,S=w.key,P=w.value;S?m.has(S)&&(m.delete(S),j[S]>P?j[S]-=P:delete j[S]):p+=1}}catch(F){k.e(F)}finally{k.f()}if(p+=4-h.length,m.size>p||Object.keys(j).length>4)return 0;for(var G=c.Z.rollsRemaining(o,t)-p,A=0,E=Object.entries(j);A<E.length;A++){var M=(0,r.Z)(E[A],2),C=M[0],N=M[1];j[C]=Math.max(Math.ceil(10*N/c.Z.maxSubstatValues(C,t)),1)}var _=0,O=Object.entries(j).map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],l=m.has(t)?1:0,a=Math.ceil(i/10)-l;return _+=a,{target:i,filler:l,minUpgrade:a}})).reverse();if(_>G)return 0;var z=(0,l.Z)({},G,1),D=G-_;return O.forEach((function(e,n){for(var t,i,l,a=e.target,o=e.filler,s=e.minUpgrade,c={},u=s;u<=s+D;u++)for(var f=a-7*(u+o),d=f>0?Z[u+o][f]:1,x=0,h=Object.entries(z);x<h.length;x++){var j,m=(0,r.Z)(h[x],2),p=m[0],y=m[1],g=parseInt(p);if(!(g<u)){var b=(i=u,l=4-n,v[t=g][i]*Math.pow(l-1,t-i)/Math.pow(l,t)),k=g-u;c[k]=(null!==(j=c[k])&&void 0!==j?j:0)+y*d*b}}z=c})),function(e,n,t){var r,l,a=null!==(r=d[e])&&void 0!==r?r:0,o=0,c={3:2,4:5,6:3},u=x[a],h=(0,i.Z)(n);try{for(h.s();!(l=h.n()).done;){var Z=l.value.key;if(Z){var j=d[Z];u=u[j],c[j]-=1}}}catch(F){h.e(F)}finally{h.f()}a&&(c[a]-=1);var m,p={3:0,4:0,6:0},y=(0,i.Z)(t);try{for(y.s();!(m=y.n()).done;){var g=m.value;p[d[g]]+=1}}catch(F){y.e(F)}finally{y.f()}var b=0;(0,s.Q1)(u,[],(function(e){return"number"===typeof e}),(function(e,n){b+=e;var t,r={3:0,4:0,6:0},l=(0,i.Z)(n);try{for(l.s();!(t=l.n()).done;){r[t.value]+=1}}catch(F){l.e(F)}finally{l.f()}var a,s=e,c=(0,i.Z)(f);try{for(c.s();!(a=c.n()).done;){var u=a.value,d=r[u],x=p[u];if(d<x)return;s*=v[d][x]}}catch(F){c.e(F)}finally{c.f()}o+=s}));var k,w=(0,i.Z)(f);try{for(w.s();!(k=w.n()).done;){var S=k.value;o/=v[c[S]][p[S]]}}catch(F){w.e(F)}finally{w.f()}return o/b}(e.mainStatKey,h,m)*Object.values(z).reduce((function(e,n){return e+n}))}}}]);
//# sourceMappingURL=246.ec0144f9.chunk.js.map