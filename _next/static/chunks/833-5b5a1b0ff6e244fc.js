"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{540:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(5286),o=n(310),s=n(1007),i=n(9528),r=n(5185);let l=e=>{let{className:t=""}=e,[n,l]=(0,o.useState)(null),[c,d]=(0,o.useState)(""),[m,x]=(0,o.useState)(""),f=new Date().getFullYear(),[h,p]=(0,o.useState)(!1);return console.log("adsadsa",h),(0,a.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"1000",className:"  w-full bg-[#313131] h-full mo:pb-5   relative bottom-[0px] ".concat(t,"  "),children:(0,a.jsx)("div",{className:"w-container m-auto md:w-full mo:w-full md:px-[30px]  mo:px-5 ",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:" mt-[95px] mo:mt-6",children:(0,a.jsx)("img",{src:"./logo.png",width:231,height:51,className:"mo:w-[102px] mo:h-[23px]"})}),(0,a.jsx)("div",{className:"  text-[50px] mo:text-xl font-semibold leading-normal mt-[43px] mo:mt-[26px] text-[#FFFFFF]",children:"Get Started"}),(0,a.jsxs)("div",{className:" lg:bg-[url(/footerBgIcon.svg)] bg-contain bg-no-repeat w-full  ",children:[(0,a.jsxs)("div",{className:"text-center mt-[21px] h-auto",children:[(0,a.jsxs)("div",{className:" text-[25px] mo:text-[10px] font-normal leading-normal text-[#8A8A8A]",children:[(0,a.jsx)("div",{children:"Stay Ahead of the Game: Subscribe to Receive the Latest"}),(0,a.jsx)("div",{children:"Updates from EnReach Network!"})]}),(0,a.jsxs)("div",{className:"mt-[27px] mo:mt-10  flex justify-center mo:flex-col mo:!w-full  mo:bg-[url(/mo-footerBgIcon.svg)] mo:bg-contain mo:bg-no-repeat  ",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{value:c,onChange:e=>{d(e.target.value),x("")},placeholder:"sample@email.com",className:" w-[393px] mo:!w-[204px] h-[67px] mo:!h-[38px] rounded-[33px] bg-[#242424]"}),(0,a.jsx)("div",{className:"h-5 mt-2 mo:text-xs text-center text-red-600",children:m})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:()=>{if(c&&!h){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)){x("must be a valid email address ");return}p(!0),fetch("https://email.enreach.network/email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c})}).then(e=>e.json()).then(()=>{r.o.success("Submit subscription successfully！"),d("")}).catch(()=>{r.o.success("Submit subscription failed, please try again later!")}).finally(()=>{console.log("jinru le"),p(!1)})}},className:" bg-[#4281FF] btn items-center mo:!justify-center  text-[#FFFFFF] rounded-[33.5px] w-[198px] mo:w-[204px] h-[67px] mo:h-[38px]  text-[25px] mo:text-base font-semibold leading-normal ",children:"Submit"})})]})]}),(0,a.jsxs)("div",{className:"mt-[224px] mo:mt-6 mb-5 mo:w-full mo:flex mo:justify-center mo:flex-col mo:items-center",children:[(0,a.jsx)(i.V,{}),(0,a.jsxs)("div",{className:"text-xl mo:text-sm  mo:text-center mo:font-semibold font-medium leading-normal mt-[23px] text-[#FFFFFF]",children:[(0,a.jsx)("div",{children:"Get in Touch"}),(0,a.jsx)("a",{href:"mailto:contact@enreach.network",children:"contact@enreach.network"})]}),(0,a.jsx)("div",{className:"flex mo:mt-[60px] w-full justify-end mo:justify-between gap-[81px] mo:gap-[33px] smd:gap-10",children:s.p_.map((e,t)=>(0,a.jsx)("div",{onMouseOver:()=>{l({index:t,isHover:!0})},onMouseLeave:()=>{l({index:t,isHover:!1})},onClick:()=>window.open(e.link,"_blank"),className:"".concat((null==n?void 0:n.index)===t&&"text-[#ffffff]"," "),children:(0,a.jsx)("span",{className:"text-xl mo:text-xs cursor-pointer  font-medium leading-normal  ".concat((null==n?void 0:n.isHover)&&n.index===t?"text-[#BEBEBE]":"text-[#8A8A8A]"),children:e.name})},"list_".concat(t)))}),(0,a.jsxs)("div",{className:"flex w-full justify-end mo:justify-center text-[#737373] mo:text-xs mo:mt-[11px] text-xl  font-medium leading-normal  ",children:["\xa9 EnReach Foundation, ",f,". All rights reserved."]})]})]})]})})})}},8931:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(5286),o=n(310),s=n(423),i=n(7518),r=n(8861),l=n.n(r),c=n(7945),d=n(9420),m=n(8333),x=n(6836);let f={"t-side":(e,t)=>new KeyframeEffect(e,"add"===t?[{transform:"scaleY(0)",transformOrigin:"0 0",opacity:0},{transform:"scaleY(1)",transformOrigin:"0 0",opacity:1}]:"remove"===t?[{transform:"scaleY(1)",transformOrigin:"0 0",opacity:1},{transform:"scaleY(0)",transformOrigin:"0 0",opacity:0}]:[],{duration:300,easing:"ease-in-out"}),"r-side":(e,t)=>new KeyframeEffect(e,"add"===t?[{transform:"scaleX(0)",transformOrigin:"100% 0",opacity:0},{transform:"scaleX(1)",transformOrigin:"100% 0",opacity:1}]:"remove"===t?[{transform:"scaleX(1)",transformOrigin:"100% 0",opacity:1},{transform:"scaleX(0)",transformOrigin:"100% 0",opacity:0}]:[],{duration:300,easing:"ease-in-out"}),scale:(e,t)=>new KeyframeEffect(e,"add"===t?[{transform:"scale(0.8)",opacity:0},{transform:"scale(1)",opacity:1}]:"remove"===t?[{transform:"scale(1)",opacity:1},{transform:"scale(0.8)",opacity:0}]:[],{duration:300,easing:"ease-in-out"}),opacity:(e,t)=>new KeyframeEffect(e,"add"===t?[{opacity:0},{opacity:1}]:"remove"===t?[{opacity:1},{opacity:0}]:[],{duration:200,easing:"ease-in-out"})},h=o.memo(e=>{let{className:t,containerClassName:n,children:s,menus:i,chooseItem:r,...h}=e,p=(0,m.useRouter)(),[u,g]=(0,c.A)(!1),b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scale",t=(0,o.useRef)(null);return(0,o.useEffect)(()=>{t.current&&(0,x.Ay)(t.current,"string"==typeof e?f[e]:e)},[t.current]),t}("t-side"),v=(0,m.usePathname)();(0,d.A)(b,()=>u&&g(!1));let y=e=>{"function"==typeof r&&r(e),e.onClick&&e.onClick(),g()};return(0,a.jsxs)("div",{...h,style:{position:"relative"},className:l()(t),ref:b,children:[(0,a.jsx)("div",{className:"flex  ",onClick:()=>{g()},children:s}),u&&i.length>0&&(0,a.jsx)("div",{style:{filter:"drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))"},className:l()("absolute w-[13.75rem] top-full right-[-115px] mo:right-[-1rem]",n),children:(0,a.jsx)("div",{className:" w-full  bg-[#373737] h-[330px]  text-center mt-[.625rem] rounded-2xl z-[-9999999999] relative",children:i.map((e,t)=>(0,a.jsx)(o.Fragment,{children:(0,a.jsx)("div",{className:l()("flex items-center justify-center   mo:py-[10px] text-center w-full  text-black hover:text-green-2 cursor-pointer"),onClick:()=>e.href?p.push(e.href):y(e),children:(0,a.jsx)("div",{className:" flex flex-col text-center  justify-center h-[34px] ".concat(v===e.href&&"bg-[#4281FF] rounded-xl","  w-full"),children:(0,a.jsx)("div",{className:" text-sm font-bold text-white text-center justify-center mo:text-[15px] font-AlbertSans mo:font-extrabold flex items-center ",children:e.name})})})},"poper_menu_item".concat(t)))})})]})});var p=n(1202),u=n(1007),g=n(6573);let b=e=>{let{className:t="",containerClassName:n="",rightClassName:r=""}=e,c=[{name:"Season 1",href:"https://dashboard.enreach.network",target:"_blank"},{name:"Edge Node",href:"https://edge-node.enreach.network",target:"_blank"}],d=(0,g.A)(),[m,x]=(0,o.useState)([...u.e6]);return(0,o.useEffect)(()=>{d?x(()=>{let e=[...u.e6];return e.splice(2,1,...c),e}):x([...u.e6])},[d]),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:" w-container mo:w-full mo:px-[12px] m-auto flex pt-10 mo:pt-5  items-center  ".concat(n," md:w-full  "),children:[(0,a.jsx)("div",{className:"w-[50%] lg:px-10 ".concat(t),children:(0,a.jsxs)(s.default,{href:"/",className:" flex items-center gap-[13px] mo:h-[32px] w-[105px]",children:[(0,a.jsx)("img",{src:"./flower.svg",className:"mo:hidden"}),(0,a.jsx)("img",{src:"./logo.png",className:"lg:hidden"}),(0,a.jsx)("span",{className:"text-[#FFF] mo:hidden  text-[35px] font-semibold leading-normal",children:"EnReach"})]})}),(0,a.jsx)("div",{className:"flex lg:hidden justify-end  w-[50%]",children:(0,a.jsx)(h,{containerClassName:"!w-[106px] !h-[579px] mo:!right-[0px] ",menus:m,className:"absolute z-[99999]",children:(0,a.jsx)(i.fcC,{className:l()("w-6 h-6 !text-white")})})}),(0,a.jsx)("div",{className:"flex mo:hidden ".concat(r," justify-end gap-[36px] md:gap-5 smd:gap-0  w-[50%] button-container"),children:m.map((e,t)=>(0,a.jsx)(a.Fragment,{children:2===t?(0,a.jsxs)(p.bL,{openDelay:200,closeDelay:200,children:[(0,a.jsx)(p.l9,{asChild:!0,children:(0,a.jsx)("div",{className:" headerBtn  text-[#FFFFFF] font-extrabold md:font-semibold text-xl md:text-base bg-[rgba(255, 255, 255, 1)] leading-6",children:"Participate"})}),(0,a.jsx)(p.ZL,{children:(0,a.jsxs)(p.UC,{className:"HoverCardContent",sideOffset:10,children:[(0,a.jsx)("div",{className:"flex flex-col  items-center text-[#FFF]  font-extrabold md:font-semibold text-base bg-[rgba(255, 255, 255, 1)] leading-6",children:c.map((e,t)=>(0,a.jsx)("a",{href:e.href,target:e.target,className:" hover:bg-[#4281FF] text-center w-full p-[10px] hover:rounded-xl",children:e.name},"seBtn_".concat(t)))}),(0,a.jsx)(p.i3,{className:"HoverCardArrow"})]})})]},"btn_".concat(t)):(0,a.jsx)("a",{href:e.href,target:e.target,className:" headerBtn  text-[#FFFFFF] font-extrabold md:font-semibold text-xl md:text-base bg-[rgba(255, 255, 255, 1)] leading-6",children:e.name},"btn_".concat(t))}))})]})})}},9528:(e,t,n)=>{n.d(t,{V:()=>s});var a=n(5286);n(310);let o=[{href:"https://discord.gg/Rc4BMUjbNB",icon:"./discord.svg"},{href:"https://x.com/EnReachNetwork",icon:"./x.svg"},{href:"https://t.me/EnReachNetwork",icon:"./telegram.svg"}];function s(){return(0,a.jsx)("div",{className:"flex items-center gap-8",children:o.map(e=>{let{href:t,icon:n}=e;return(0,a.jsx)("a",{className:" mo:w-6 mo:h-6 border-white/20 hover:bg-white/10 rounded-full ",href:t,target:"_blank",rel:"noreferrer",children:(0,a.jsx)("img",{src:n})},t)})})}},6573:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(310);let o=()=>{let[e,t]=(0,a.useState)(!1),n=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=()=>{t(1e3>=n())};return(0,a.useEffect)(()=>(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),e}},1007:(e,t,n)=>{n.d(t,{NC:()=>r,SY:()=>o,e6:()=>a,p_:()=>i,wB:()=>s});let a=[{name:"Home",href:"/",target:"_self"},{name:"About Us",href:"/aboutUs",target:"_self"},{},{name:"Docs",href:"https://docs.enreach.network",target:"_blank"},{name:"Sign In",href:"http://dashboard.enreach.network"}],o=[{title:"P2P CDN",content:"Real-time delivery of internet content, static & dynamic.",icon:"IconTeam"},{title:"AI at the Edge",content:"AI inference, closer to where data is generated.",icon:"IconEfficiency"},{title:"Media Streaming",content:"Immersice content. Live media. Near-zero latency fulfilled.",icon:"IconStack"},{title:"Cloud Gaming",content:"Games hosted by EnReach nodes, scalable with player demand.",icon:"IconMatch"},{title:"Autonomous Systems",content:"Supporting auto-drive vehicles and IoT devices with edge resilience.",icon:"IconReliability"}],s=[{title:"Openness for the Infinite Edge"},{title:"Open Protocol ",subTitle:"Connecting Edge Nodes",content:"A decentralized protocol enabling robust data storage and transmission functions through a vast network of connected edge nodes.\xa0",icon:"IconProtocol",gif:"./box1.gif"},{title:"Open Platform",subTitle:"Enabling Edge Intelligence",content:"A complete cloud enabling AI model/computation functions deployment, execution, and context data management across the network.\xa0",icon:"IconCloud",gif:"./box2.gif"},{title:"Open App Ecosystem",subTitle:"Forstering Edge Innovation",content:"An open ecosystem fostering innovation, incentivizing application growth, and guided by community-driven governance.",gif:"./box3.gif",icon:"IconEcosystem"}],i=[{name:"Media Kit",link:"https://enreach.network/Enreach Media kit.zip"},{name:"Privacy Policy",link:"privacy"},{name:"Terms & Conditions",link:"terms"}],r=[{title:"Leveraging Blockchain for Distributed Efficiency",contnet:"We utilize blockchain to enable decentralized coordination and transparency across edge nodes, ensuring optimal resource allocation, data security, and seamless scalability."},{title:"Establishing a Complete Edge Intelligence Tech Stack",contnet:"Our comprehensive stack standardizes resources, orchestrates workflows, and provides developer-friendly tools, supporting the entire lifecycle of edge and AI applications from creation to scaling."},{title:"Building the Core Competency of Smart Orchestration",contnet:"We develop state-of-the-art technologies to sense, optimize, and schedule heterogeneous, massive-scale resources. This enables precise orchestration tailored to complex, real-world demands."},{title:"Providing Industry-Ready Solutions",contnet:"Leveraging our robust infrastructure, we deliver practical and scalable solutions tailored to real-world industries, enabling meaningful adoption and bridging the gap between Web3 technology and industry applications."}]}}]);