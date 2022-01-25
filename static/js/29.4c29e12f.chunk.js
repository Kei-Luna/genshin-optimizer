(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[29],{1032:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a(4),i=a(3),r=a(104),c=a(51),o=a(17),s=a(365),l=a(1014),d=a(488),h=a(410),j=a(362),b=a(385),u=a(411),m=a(80),x=a(281),O=a(223),f=a(275),p=a(1),g=a(84),y=a(98),w=a(135),v=a(58),k=a(287),G=a(285),z=a(308),B=a.p+"static/media/art_editor.e1c49f87.png",T=a.p+"static/media/build_generator.2002f43b.png",K=a.p+"static/media/character_editor.b21d8cc2.png",C=a.p+"static/media/talent_scr.3bb2e9ad.png",A=a.p+"static/media/tools.9c56cfe9.png",E=a(0);function L(e){var t=e.image,a=e.title,n=e.content,r=e.t,c=Object(p.useState)(!1),o=Object(i.a)(c,2),l=o[0],u=o[1];return Object(E.jsxs)(G.a,{children:[Object(E.jsx)(d.a,{sx:{p:1,pb:0},children:Object(E.jsx)(h.a,{component:"img",image:t,alt:"test",sx:{width:"100%",height:"auto"}})}),Object(E.jsx)(j.a,{action:Object(E.jsx)(z.a,{expand:l,onClick:function(){return u(!l)},"aria-expanded":l,"aria-label":"show more",children:Object(E.jsx)(s.a,{})}),titleTypographyProps:{variant:"subtitle1"},title:a(r)}),Object(E.jsx)(b.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(E.jsx)(d.a,{sx:{pt:0},children:n(r)})})]})}var _=[{image:B,title:function(e){return Object(E.jsx)(u.a,{component:v.b,to:"/artifact",children:Object(E.jsx)(y.a,{i18nKey:"features.artifact.title",t:e,children:"Artifact Editor & Inventory"})})},content:function(e){return Object(E.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(E.jsx)(y.a,{i18nKey:"features.artifact.content",t:e,children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:"Fully featured Artifact editor."}),Object(E.jsx)("li",{children:"Add Artifacts by scanning a screenshot."}),Object(E.jsx)("li",{children:"Automatically calculate the exact rolled value of each artifact."}),Object(E.jsx)("li",{children:"Calculate substat efficiency, using the roll calculations. Use a single number to determine whether to keep or trash an artifact!"}),Object(E.jsx)("li",{children:"Maintains a completely sortable, filterable artifact inventory."}),Object(E.jsxs)("li",{children:["Imports artifact database from ",Object(E.jsx)(u.a,{component:v.b,to:"/scanner",children:"3rd party automatic scanners"}),"."]})]})})})}},{image:K,title:function(e){return Object(E.jsx)(u.a,{component:v.b,to:"/character",children:Object(E.jsx)(y.a,{i18nKey:"features.characterEditor.title",t:e,children:"Character & Weapon Editor"})})},content:function(e){return Object(E.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(E.jsx)(y.a,{i18nKey:"features.characterEditor.content",t:e,children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:"Fully featured Character editor."}),Object(E.jsx)("li",{children:"Automatically populate character stats at every milestone level/ascension."}),Object(E.jsx)("li",{children:"Fully editable stats for customization."}),Object(E.jsx)("li",{children:"Calculate current stats based on weapon/artifacts."}),Object(E.jsx)("li",{children:"Fully featured weapon editor, with milestone level/ascension stats"}),Object(E.jsx)("li",{children:"Apply conditional passives, from talents & weapons & artifacts to accurately mimic in-game conditions. "})]})})})}},{image:C,title:function(e){return Object(E.jsx)(u.a,{component:v.b,to:"/character",children:Object(E.jsx)(y.a,{i18nKey:"features.characterCalc.title",t:e,children:"Character Damage Calculations"})})},content:function(e){return Object(E.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(E.jsx)(y.a,{i18nKey:"features.characterCalc.content",t:e,children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:"All the details for every character's talents."}),Object(E.jsx)("li",{children:"All numbers should reflect real in game damage (within 1% error)."}),Object(E.jsx)("li",{children:"Conditional stats and modifications from every Constellation accounted for."}),Object(E.jsx)("li",{children:"Shows calculations for all the numbers, along with formulas."}),Object(E.jsx)("li",{children:"Enemy editor with level/ resistance fields to customize damage calculations."}),Object(E.jsx)("li",{children:"Account for elemental infusion for normal/charged/plunging attacks."}),Object(E.jsx)("li",{children:"Real time damage calculations."})]})})})}},{image:T,title:function(e){return Object(E.jsx)(u.a,{component:v.b,to:"/build",children:Object(E.jsx)(y.a,{i18nKey:"features.build.title",t:e,children:"Build Generator"})})},content:function(e){return Object(E.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(E.jsx)(y.a,{i18nKey:"features.build.content",t:e,children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:"Generates builds for specific characters using artifact inventory."}),Object(E.jsx)("li",{children:"Allows the maximization of character build based on specified optimization target."}),Object(E.jsx)("li",{children:"Limit builds by artifact sets, main stats..."}),Object(E.jsx)("li",{children:"Fully featured build settings to fine-tune build results."}),Object(E.jsx)("li",{children:"Compare generated artifact build against artifacts currently on character."}),Object(E.jsx)("li",{children:"Use conditional stats from artifact sets, e.g. Embled of Severed Fate's 4-set Elemental Burst DMG Bonus conversion, as part of the build calculations."})]})})})}},{image:A,title:function(e){return Object(E.jsx)(u.a,{component:v.b,to:"/tools",children:Object(E.jsx)(y.a,{i18nKey:"features.tools.title",t:e,children:"Tools and Gadgets"})})},content:function(e){return Object(E.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(E.jsx)(y.a,{i18nKey:"features.tools.content",t:e,children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:"Server time, with countdown to reset."}),Object(E.jsx)("li",{children:"Resin Counter."}),Object(E.jsx)("li",{children:"Experience Calculator, to optimize EXP. books usage."})]})})})}}];function D(e){var t=e.href,a=e.icon,n=e.children;return Object(E.jsx)(x.a,{variant:"text",size:"small",component:"a",href:t,target:"_blank",rel:"noreferrer",startIcon:a,children:n})}function S(){var e=Object(w.a)("page_home").t;return g.a.pageview("/home"),Object(E.jsxs)(O.a,{my:1,display:"flex",flexDirection:"column",gap:1,children:[Object(E.jsx)(k.a,{children:Object(E.jsx)(d.a,{children:Object(E.jsxs)(y.a,{i18nKey:"intro",t:e,children:[Object(E.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:"What is Genshin Optimizer?"}),Object(E.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["Genshin Optimizer (GO) is an open-source fan-made website for the action-RPG gacha game ",Object(E.jsx)(u.a,{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:Object(E.jsx)("strong",{children:"Genshin Impact"})}),". It is mainly intended to help players with the complex aspect of the game: Artifact Optimization. Since artifacts are heavily RNG-based elements that directly contribute to how effective your characters are in the game, GO will try to find the best artifacts for your characters based on your current artifact inventory."]}),Object(E.jsx)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"GO can keep track of your artifacts, and allows more ease in filtering/comparing artifacts, it serves as a tool to help user find good artifacts in their inventory to level up, and bad artifacts to use as fodder."}),Object(E.jsx)(m.a,{variant:"body1",color:"text.secondary",children:"Since GO can replicate the exact stats of any character, along with calculate all their damage numbers to up 1% accuracy, it can also serve as a Damage calculator, and a tool for theory crafting."})]})})}),Object(E.jsx)(k.a,{children:Object(E.jsx)(d.a,{children:Object(E.jsxs)(y.a,{i18nKey:"notGO",t:e,children:[Object(E.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:"What Genshin Optimizer is NOT:"}),Object(E.jsx)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"GO does NOT tell you how to play the game. The information/calculations are intended to be un-opinionated as possible."}),Object(E.jsx)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"GO does NOT supplement your lack of in-game knowledge, inappriate configuration of the builder can provide misleading results. Please research your characters, and figure out how you want to use them before configuring them on GO. Think of GO as more of a calculator."}),Object(E.jsx)(m.a,{variant:"body1",color:"text.secondary",children:"GO does NOT generally take consideration of Energy Recharge, or team rotations. Please keep those mechanics in mind when you use this tool."})]})})}),Object(E.jsx)(k.a,{children:Object(E.jsxs)(d.a,{children:[Object(E.jsx)(m.a,{variant:"h5",gutterBottom:!0,color:"warning.main",children:"Where are Version 2.4 Characters/Weapons in GO?"}),Object(E.jsx)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:'Ever since version 2.0, MHY has released characters/weapons with kits that seem to defy the original design considerations of the Optimizer. Unfortunately, to design a hyper optimized system, GO is designed with a lot of assumptions to what "general" forms the formulas in Genshin will take. These assumptions have been feature crept to obsoletion. Weapons like Moonglow and Spindle, characters like Kujou Sara and Gurou, are no longer able to fit into the Optimizer ecosystem. As 2.4 has been released, we\'ve seen MHY double down on these "incompatible" game mechanics, which makes implementing the new characters almost pointless.'}),Object(E.jsx)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"The good news is that we've been anticipating this feature creep, and we've designed a new system to accommodate the new changes. However, we will need a lot more time putting vision into code, and even more time migrating all the existing characters/artifact/weapons to the new system. We cannot promise any concrete ETAs, since such an undertaking can have many perilous setbacks, and quite a lot of unanticipated issues. There will be somewhat minimal updates to the implementation process of this system for the same reason, so the only thing you can do for now is to please keep in mind that we are presently working on a solution."})]})}),Object(E.jsx)(k.a,{sx:{width:"100%"},children:Object(E.jsxs)(d.a,{children:[Object(E.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:Object(E.jsx)(y.a,{i18nKey:"quickLinks.title",t:e,children:"Quick Links"})}),Object(E.jsx)(G.a,{sx:{mb:1},children:Object(E.jsxs)(d.a,{children:[Object(E.jsx)(m.a,{variant:"h6",gutterBottom:!0,children:Object(E.jsx)(y.a,{i18nKey:"quickLinks.scannerTitle",t:e,children:"Do you want to automate some of the artifact input process?"})}),Object(E.jsx)(m.a,{color:"text.secondary",gutterBottom:!0,children:Object(E.jsx)(y.a,{i18nKey:"quickLinks.scannerText",t:e,children:"Here is a list of compatible automatic scanners that can feed data into GO. These programs will automatically scan artifacts from your game, and exporting that data into a file. This file can then be imported to GO."})}),Object(E.jsx)(x.a,{component:v.b,size:"small",to:"/scanner",variant:"contained",startIcon:Object(E.jsx)(l.a,{}),children:Object(E.jsx)(y.a,{i18nKey:"quickLinks.scannerBtn",t:e,children:"Scanner List"})})]})}),Object(E.jsx)(G.a,{children:Object(E.jsxs)(d.a,{children:[Object(E.jsx)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:Object(E.jsxs)(y.a,{i18nKey:"quickLinks.goGithubText",t:e,children:["GO is completely open-source, written in TypeScript, with the ",Object(E.jsx)(o.a,{icon:r.e}),"React framework."]})}),Object(E.jsx)(x.a,{size:"small",variant:"contained",component:"a",href:"https://github.com/frzyc/genshin-optimizer",target:"_blank",rel:"noreferrer",startIcon:Object(E.jsx)(o.a,{icon:r.b}),children:Object(E.jsx)(y.a,{i18nKey:"quickLinks.goGithubBtn",t:e,children:"Genshin Optimizer Github"})})]})})]})}),Object(E.jsx)(k.a,{children:Object(E.jsxs)(d.a,{children:[Object(E.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:Object(E.jsx)(y.a,{i18nKey:"features.title",t:e,children:"Features"})}),Object(E.jsx)(f.a,{container:!0,spacing:2,children:_.map((function(t,a){return Object(E.jsx)(f.a,{item:!0,xs:12,md:4,children:Object(E.jsx)(L,Object(n.a)(Object(n.a)({},t),{},{t:e}))},a)}))})]})}),Object(E.jsx)(k.a,{children:Object(E.jsxs)(f.a,{container:!0,children:[Object(E.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(E.jsx)(d.a,{children:Object(E.jsxs)(y.a,{i18nKey:"helpDev",t:e,children:[Object(E.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:"Want to help the developer?"}),Object(E.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["If you want to financially support the developer, please consider donating via ",Object(E.jsx)(D,{href:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",icon:Object(E.jsx)(o.a,{icon:r.d}),children:"Paypal"})," or ",Object(E.jsx)(D,{href:"https://www.patreon.com/frzyc",icon:Object(E.jsx)(o.a,{icon:r.c}),children:"Patreon"}),". GO does not host ads, and will not lock any features behind a paywall."]}),Object(E.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["If you want to help with localization/translation of GO to your native language, request a feature or report a bug, join our ",Object(E.jsx)(D,{href:"https://discord.gg/CXUbQXyfUs",icon:Object(E.jsx)(o.a,{icon:r.a}),children:"discord"}),". This is where you will find more GO-related information, and checkout what is being actively worked on."]}),Object(E.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["You can also join the ",Object(E.jsx)(D,{href:"https://discord.gg/8Hpz2F7AnR",icon:Object(E.jsx)(o.a,{icon:r.a}),children:"Genshin Dev discord"})," if you are interested in creating Genshin apps."]})]})})}),Object(E.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(E.jsx)(d.a,{sx:{width:"100%",height:"100%",minHeight:300},children:Object(E.jsx)("iframe",{src:"https://discord.com/widget?id=785153694478893126&theme=dark",width:"100%",height:"100%",frameBorder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",title:"discordFrame"})})})]})}),Object(E.jsx)(k.a,{children:Object(E.jsx)(d.a,{children:Object(E.jsxs)(y.a,{i18nKey:"credits",t:e,children:[Object(E.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:"Credit where credit is due"}),Object(E.jsxs)(m.a,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["GO is the culmination of hundreds of hours of programming/designing by two maintainers, ",Object(E.jsx)(D,{href:"https://github.com/frzyc",icon:Object(E.jsx)(o.a,{icon:c.E}),children:Object(E.jsx)("strong",{children:" frzyc"})})," and ",Object(E.jsx)(D,{href:"https://github.com/lantua",icon:Object(E.jsx)(o.a,{icon:c.E}),children:Object(E.jsx)("strong",{children:" lantua"})}),". There are also a ton of other resources that aid in the creation of this website. Time to take a bow and thank them."]}),Object(E.jsx)(m.a,{component:"div",variant:"body1",color:"text.secondary",children:Object(E.jsxs)("ul",{children:[Object(E.jsxs)("li",{children:["Thanks to everyone in the community, and especially people on our ",Object(E.jsx)(u.a,{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",children:"discord"})," for providing feedback and helping us improve this tool."]}),Object(E.jsxs)("li",{children:["Thanks to ",Object(E.jsx)(u.a,{href:"https://github.com/Dimbreath",target:"_blank",rel:"noreferrer",children:"Dimbreath"}),", for giving us a reliable, consistent source for Genshin data and numbers. All our calculations would be moot without them."]}),Object(E.jsx)("li",{children:"Special thanks to members of our community who has gone the extra mile, and has been helping us with localization/translation of GO to other languages, help us test formulas by recording in-game data, and programmers who has helped us with source code contributions."}),Object(E.jsx)("li",{children:"Thanks for everyone else, for sharing this tool, and getting more people to use this tool."}),Object(E.jsxs)("li",{children:["Lastly, and most importantly, thank ",Object(E.jsx)("strong",{children:"YOU"}),", for using GO right now."]})]})})]})})})]})}},285:function(e,t,a){"use strict";var n=a(10),i=a(487),r=Object(n.a)(i.a)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));t.a=r},287:function(e,t,a){"use strict";var n=a(10),i=a(487),r=Object(n.a)(i.a)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.a=r},308:function(e,t,a){"use strict";var n=a(4),i=a(65),r=a(10),c=a(282),o=a(0),s=Object(r.a)((function(e){e.expand;var t=Object(i.a)(e,["expand"]);return Object(o.jsx)(c.a,Object(n.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));t.a=s}}]);
//# sourceMappingURL=29.4c29e12f.chunk.js.map