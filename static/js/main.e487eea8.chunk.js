(this.webpackJsonpthe_stripes_nft_dapp=this.webpackJsonpthe_stripes_nft_dapp||[]).push([[0],{246:function(n,e){},255:function(n,e){},273:function(n,e){},275:function(n,e){},294:function(n,e){},295:function(n,e){},358:function(n,e){},360:function(n,e){},393:function(n,e){},395:function(n,e){},396:function(n,e){},401:function(n,e){},403:function(n,e){},409:function(n,e){},411:function(n,e){},424:function(n,e){},436:function(n,e){},439:function(n,e){},444:function(n,e){},452:function(n,e){},461:function(n,e){},463:function(n,e){},533:function(n,e,t){},534:function(n,e,t){"use strict";t.r(e);var c,r,a,o,i,s,l,d,u,p,x,b,j,h,f,g,O=t(1),m=t(85),y=t.n(m),v=t(16),C=t.n(v),w=t(43),A=t(69),E=t(14),S=t(58),T=t(68),_=t.n(T),N=t(220),k=t.n(N),M=t(70),D=t(221),I=t(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},n),{},{account:e.payload.account});default:return n}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},U=Object(M.b)({blockchain:R,data:P}),F=[D.a],W=Object(M.c)(M.a.apply(void 0,F)),z=Object(M.d)(U,W),Y=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},H=function(){return function(){var n=Object(w.a)(C.a.mark((function n(e){var t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(Y("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},B=function(n){return{type:"CONNECTION_FAILED",payload:n}},G=function(n){return function(){var e=Object(w.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(H());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},Q=t(15),X=Q.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),q=Q.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),nn=Q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),en=(Q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),tn=(Q.a.div(p||(p=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(3)),cn=Q.a.button(x||(x=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=Q.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),an=Q.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),on=Q.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),sn=Q.a.img(f||(f=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),ln=Q.a.a(g||(g=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var dn=function(){var n,e,t=Object(S.b)(),c=Object(S.c)((function(n){return n.blockchain})),r=Object(S.c)((function(n){return n.data})),a=Object(O.useState)(!1),o=Object(A.a)(a,2),i=o[0],s=o[1],l=Object(O.useState)("Ready? Rock Paper Scissors."),d=Object(A.a)(l,2),u=d[0],p=d[1],x=Object(O.useState)(1),b=Object(A.a)(x,2),j=b[0],h=b[1],f=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(A.a)(f,2),m=g[0],y=g[1],v=function(){""!==c.account&&null!==c.smartContract&&t(H(c.account))},E=function(){var n=Object(w.a)(C.a.mark((function n(){var e,t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,y(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){E()}),[]),Object(O.useEffect)((function(){v()}),[c.account]),Object(tn.jsx)(X,{children:Object(tn.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(tn.jsx)("a",{href:m.MARKETPLACE_LINK,children:Object(tn.jsx)(on,{alt:"logo",src:"/config/images/logo.gif"})}),Object(tn.jsx)(J,{}),Object(tn.jsxs)(an,{flex:1,style:{padding:24},test:!0,children:[Object(tn.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(tn.jsx)(sn,{alt:"example",src:"/config/images/example.gif"})}),Object(tn.jsx)(Z,{}),Object(tn.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(tn.jsxs)(nn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",m.MAX_SUPPLY]}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(tn.jsx)(ln,{target:"_blank",href:m.SCAN_LINK,children:(n=m.CONTRACT_ADDRESS,e=15,n.length>e?"".concat(n.substring(0,e),"..."):n)})}),Object(tn.jsxs)("span",{style:{textAlign:"center"},children:[Object(tn.jsx)(cn,{onClick:function(n){window.open("https://youtu.be/myjEoDypUD8","_blank")},style:{margin:"5px"},children:"Relive it"}),Object(tn.jsx)(cn,{style:{margin:"5px"},onClick:function(n){window.open(m.MARKETPLACE_LINK,"_blank")},children:m.MARKETPLACE})]}),Object(tn.jsx)(J,{}),Number(r.totalSupply)>=m.MAX_SUPPLY?Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(tn.jsx)(J,{}),Object(tn.jsx)(ln,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsxs)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(tn.jsx)(q,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Only relevant for 2 days, maybe 3. except mic shinoda 1, that's timeless. Didn't do mic tyson. Pretty sure he'd sue. Maybe that's why I should. Hmmmmmmmm"}),Object(tn.jsx)(J,{}),""===c.account||null===c.smartContract?Object(tn.jsxs)($,{ai:"center",jc:"center",children:[Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Greatest night in television history NFT"}),Object(tn.jsx)(J,{}),Object(tn.jsx)(cn,{onClick:function(n){n.preventDefault(),t(function(){var n=Object(w.a)(C.a.mark((function n(e){var t,c,r,a,o,i,s,l,d;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(a=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return _.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(d=new _.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){e(G(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(B("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),e(B("Something went wrong."));case 31:n.next=34;break;case 33:e(B("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(e){return n.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(J,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(tn.jsx)(V,{}),Object(tn.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(tn.jsx)(rn,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),h(n)}()},children:"-"}),Object(tn.jsx)(V,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(tn.jsx)(V,{}),Object(tn.jsx)(rn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>50&&(n=50),h(n)}()},children:"+"})]}),Object(tn.jsx)(J,{}),Object(tn.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(tn.jsx)(cn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=m.WEI_COST,e=m.GAS_LIMIT,r=String(n*j),a=String(e*j);console.log("Cost: ",r),console.log("Gas limit: ",a),p("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(c.account).send({gasLimit:String(a),to:m.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(n){console.log(n),p("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),p("WOW, the ".concat(m.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),t(H(c.account))}))}(),v()},children:i?"BUSY":"MINT"})})]})]}),Object(tn.jsx)(V,{})]}),Object(tn.jsx)(Z,{}),Object(tn.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(tn.jsx)(sn,{alt:"example",src:"/config/images/example1.gif",style:{transform:"scaleX(-1)"}})})]}),Object(tn.jsx)(V,{}),Object(tn.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:"We'll make a sizeable dono towards helping victims of violence via red cross"}),Object(tn.jsx)(J,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:"We'll be making a rock vs paper scissor game, it's gonna be epic (maybe). Then we'll add some more value, metaverse or some shit. The most ambitious project ever since etherrock ofc."})]})]})})},un=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,538)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),a(n),o(n)}))};t(533);y.a.render(Object(tn.jsx)(S.a,{store:z,children:Object(tn.jsx)(dn,{})}),document.getElementById("root")),un()}},[[534,1,2]]]);
//# sourceMappingURL=main.e487eea8.chunk.js.map