(function(){"use strict";var e={8016:function(e,t,a){var o=a(5130),s=a(6768);function n(e,t,a,o,n,r){const l=(0,s.g2)("NavBarVue"),i=(0,s.g2)("router-view"),c=(0,s.g2)("FooterTemplate");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(l),(0,s.bF)(i),(0,s.bF)(c)],64)}var r=a(4232),l=a.p+"img/vans.42410729.jpg",i=a.p+"img/cart-1.535aea7b.jpg",c=a.p+"img/cart-2.1246c8bc.jpg",d=a.p+"img/cart-3.2ccb387a.jpg";const u=e=>((0,s.Qi)("data-v-13f0b1c0"),e=e(),(0,s.jt)(),e),p={class:"left"},f={class:"logo"},h=u((()=>(0,s.Lk)("img",{src:l,alt:""},null,-1))),v={class:"search"},m=u((()=>(0,s.Lk)("span",{class:"material-symbols-sharp"},"search",-1))),k={class:"right"},b=u((()=>(0,s.Lk)("span",{class:"material-symbols-sharp"},"person",-1))),C={href:"javascript:void(0)"},g=u((()=>(0,s.Lk)("span",{class:"badge"},"0",-1))),L={class:"top"},w=u((()=>(0,s.Lk)("h3",null,"Shopping Cart",-1))),y=(0,s.Fv)('<div class="my-cart" data-v-13f0b1c0><div class="cart-items" data-v-13f0b1c0><div class="left-cart" data-v-13f0b1c0><img src="'+i+'" alt="" data-v-13f0b1c0><div class="text" data-v-13f0b1c0><h2 data-v-13f0b1c0>Throwback Hip Bag</h2><h4 data-v-13f0b1c0>Salmon</h4><p data-v-13f0b1c0>QTY: 1</p></div></div><div class="right-cart" data-v-13f0b1c0><h2 data-v-13f0b1c0>$900</h2><span class="material-symbols-sharp" data-v-13f0b1c0> delete </span></div></div><div class="cart-items" data-v-13f0b1c0><div class="left-cart" data-v-13f0b1c0><img src="'+c+'" alt="" data-v-13f0b1c0><div class="text" data-v-13f0b1c0><h2 data-v-13f0b1c0>Throwback Hip Bag</h2><h4 data-v-13f0b1c0>Salmon</h4><p data-v-13f0b1c0>QTY: 5</p></div></div><div class="right-cart" data-v-13f0b1c0><h2 data-v-13f0b1c0>$1800</h2><span class="material-symbols-sharp" data-v-13f0b1c0> delete </span></div></div><div class="cart-items" data-v-13f0b1c0><div class="left-cart" data-v-13f0b1c0><img src="'+d+'" alt="" data-v-13f0b1c0><div class="text" data-v-13f0b1c0><h2 data-v-13f0b1c0>Throwback Hip Bag</h2><h4 data-v-13f0b1c0>Salmon</h4><p data-v-13f0b1c0>QTY: 4</p></div></div><div class="right-cart" data-v-13f0b1c0><h2 data-v-13f0b1c0>$2600</h2><span class="material-symbols-sharp" data-v-13f0b1c0> delete </span></div></div></div><div class="top" data-v-13f0b1c0><div class="subtotal" data-v-13f0b1c0><h3 data-v-13f0b1c0>Subtotal</h3><p data-v-13f0b1c0>Shipping and taxes calculated at checkout.</p></div><span class="sub-amount" data-v-13f0b1c0>$262.00</span></div>',2),_={class:"shopping-btn"};function F(e,t,a,n,l,i){const c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("header",null,[(0,s.Lk)("div",p,[(0,s.Lk)("div",f,[(0,s.bF)(c,{to:"/"},{default:(0,s.k6)((()=>[h])),_:1})]),(0,s.Lk)("div",v,[m,(0,s.bo)((0,s.Lk)("input",{type:"search",placeholder:"Search Products",name:"search","onUpdate:modelValue":t[0]||(t[0]=e=>l.search=e)},null,512),[[o.Jo,l.search]])])]),(0,s.Lk)("nav",{class:(0,r.C4)({toggleNav:l.showNav})},[(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.bF)(c,{to:"/",class:"active",onClick:t[1]||(t[1]=e=>l.showNav=!l.showNav)},{default:(0,s.k6)((()=>[(0,s.eW)("Home")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(c,{to:"/shop",onClick:t[2]||(t[2]=e=>l.showNav=!l.showNav)},{default:(0,s.k6)((()=>[(0,s.eW)("Shop")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(c,{to:"/about",onClick:t[3]||(t[3]=e=>l.showNav=!l.showNav)},{default:(0,s.k6)((()=>[(0,s.eW)("About us")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(c,{to:"/contact",onClick:t[4]||(t[4]=e=>l.showNav=!l.showNav)},{default:(0,s.k6)((()=>[(0,s.eW)("Contact us")])),_:1})])])],2),(0,s.Lk)("div",k,[(0,s.bF)(c,{to:"/register"},{default:(0,s.k6)((()=>[b])),_:1}),(0,s.Lk)("a",C,[(0,s.Lk)("span",{class:"material-symbols-sharp",onClick:t[5]||(t[5]=(...e)=>i.toggleCart&&i.toggleCart(...e))},"shopping_cart"),g]),!1===l.showNav?((0,s.uX)(),(0,s.CE)("span",{key:0,onClick:t[6]||(t[6]=(...e)=>i.toggleNav&&i.toggleNav(...e)),class:"material-symbols-sharp",id:"show-mwnu"},"menu")):((0,s.uX)(),(0,s.CE)("span",{key:1,onClick:t[7]||(t[7]=(...e)=>i.toggleNav&&i.toggleNav(...e)),class:"material-symbols-sharp",id:"show-mwnu"},"close"))]),(0,s.Lk)("div",{class:(0,r.C4)(["side-shopping-cart",{showCart:l.showCart}])},[(0,s.Lk)("div",L,[w,(0,s.Lk)("span",{class:"material-symbols-sharp",onClick:t[8]||(t[8]=e=>l.showCart=!l.showCart)},"close")]),y,(0,s.Lk)("div",_,[(0,s.Lk)("button",{onClick:t[9]||(t[9]=e=>l.showCart=!l.showCart)},[(0,s.bF)(c,{to:"/cart"},{default:(0,s.k6)((()=>[(0,s.eW)("View Cart")])),_:1})]),(0,s.Lk)("button",{onClick:t[10]||(t[10]=e=>l.showCart=!l.showCart)},[(0,s.bF)(c,{to:"/checkout"},{default:(0,s.k6)((()=>[(0,s.eW)("Checkout")])),_:1})]),(0,s.Lk)("span",{onClick:t[11]||(t[11]=e=>l.showCart=!l.showCart)},[(0,s.eW)("or "),(0,s.bF)(c,{to:"/shop"},{default:(0,s.k6)((()=>[(0,s.eW)("Continue Shopping")])),_:1})])])],2)])}var S={name:"NavBar",data(){return{search:"",showNav:!1,showCart:!1}},methods:{toggleNav(){this.showNav=!this.showNav},toggleCart(){this.showCart=!this.showCart}}},A=a(1241);const E=(0,A.A)(S,[["render",F],["__scopeId","data-v-13f0b1c0"]]);var T=E;const N=e=>((0,s.Qi)("data-v-cd2340b4"),e=e(),(0,s.jt)(),e),I={class:"footer-icons"},W=N((()=>(0,s.Lk)("svg",{width:"9",height:"8",viewBox:"0 0 9 8"},[(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.43044 2.01763C4.20198 2.38004 4.12486 2.80517 4.12486 3.00696C4.12486 3.13991 4.05847 3.2642 3.94764 3.33873C3.83681 3.41326 3.69598 3.42833 3.57171 3.37896C3.49044 3.34667 3.39989 3.31384 3.30198 3.27834C3.04833 3.18637 2.74529 3.0765 2.42621 2.91169C2.10216 2.74431 1.74904 2.51698 1.34908 2.17945C1.35404 2.33012 1.38755 2.46812 1.44386 2.59602C1.5753 2.89457 1.85401 3.18975 2.31554 3.46466C2.44181 3.53987 2.51679 3.67745 2.51116 3.8236C2.50553 3.96974 2.42018 4.10122 2.28849 4.16663L2.28805 4.16685L2.28757 4.16708L2.28649 4.16761L2.28388 4.16889L2.27684 4.17226C2.27135 4.17486 2.26425 4.17815 2.25561 4.18202C2.23832 4.18978 2.21479 4.1999 2.18543 4.21157C2.12676 4.23488 2.0444 4.2645 1.94161 4.29367C1.83351 4.32435 1.70189 4.3548 1.55078 4.37673C1.63701 4.68088 1.82918 4.87072 2.03627 5.01412C2.15804 5.09845 2.27585 5.16051 2.39425 5.22289C2.4237 5.23841 2.45319 5.25394 2.48279 5.26985C2.54745 5.30459 2.63246 5.35155 2.70276 5.40742C2.75702 5.45053 2.91481 5.58438 2.91481 5.81155C2.91481 5.9568 2.84849 6.06999 2.80651 6.13049C2.7574 6.20126 2.69541 6.26513 2.63051 6.32098C2.49957 6.43363 2.32381 6.54189 2.11542 6.63057C1.87548 6.73268 1.58255 6.81297 1.2477 6.84189C1.27513 6.85651 1.30429 6.87047 1.33522 6.88378C1.6288 7.01014 2.05815 7.06186 2.57539 7.01516C3.60087 6.92257 4.81744 6.45773 5.65361 5.72899C6.29461 4.99357 6.56609 4.26592 6.67908 3.72664C6.73623 3.45384 6.7529 3.22867 6.75565 3.07497C6.75702 2.99819 6.75491 2.93951 6.75271 2.90197C6.75161 2.88322 6.75048 2.86977 6.74976 2.86203L6.74903 2.85475C6.73716 2.75686 6.76202 2.65782 6.81894 2.57699L6.74914 2.85564L6.74923 2.85633L6.81894 2.57699L7.5609 2.91673C7.55476 2.92604 7.56646 2.90839 7.5609 2.91673C7.5609 2.91673 7.56341 3.02243 7.56222 3.0892C7.5587 3.28607 7.53762 3.56172 7.46886 3.8899C7.331 4.5479 7.00173 5.4149 6.24413 6.2756C6.23297 6.28827 6.22103 6.30023 6.20836 6.31141C5.22888 7.17573 3.83384 7.70615 2.64841 7.81318C2.0563 7.86664 1.47721 7.8182 1.01448 7.61903C0.535329 7.4128 0.165766 7.033 0.0939387 6.46223C0.0781412 6.33669 0.122962 6.21112 0.214839 6.12351C0.306716 6.03589 0.434855 5.99653 0.560485 6.01733C1.08522 6.1042 1.51159 6.01578 1.79775 5.894C1.82628 5.88186 1.87832 5.85712 1.87832 5.85712C1.87832 5.85712 1.67888 5.74345 1.57492 5.67146C1.1493 5.37672 0.696379 4.87855 0.696379 4.0086C0.696379 3.78732 0.876965 3.60794 1.09973 3.60794C1.12906 3.60794 1.15782 3.60739 1.18599 3.60635C0.980502 3.39979 0.816425 3.17076 0.704743 2.91708C0.478326 2.40281 0.49016 1.83928 0.725227 1.25554C0.775582 1.13049 0.885814 1.03894 1.01863 1.01186C1.15144 0.984784 1.28907 1.0258 1.38494 1.12103C1.96468 1.69689 2.41932 2.00496 2.79838 2.20075C3.01615 2.31324 3.20289 2.38736 3.38967 2.45617C3.45442 2.18313 3.56756 1.87656 3.74671 1.59236C4.07763 1.06742 4.64862 0.603027 5.53659 0.603027C6.08741 0.603027 6.44184 0.87266 6.66502 1.05746C6.69191 1.07973 6.71524 1.0992 6.73573 1.11632C6.78733 1.1594 6.82097 1.18749 6.84839 1.20736C7.03175 1.12103 7.19731 1.06054 7.34453 1.03268C7.50103 1.00305 7.72657 0.993969 7.91227 1.14166C8.10767 1.29706 8.13029 1.52058 8.12359 1.65298C8.11656 1.79153 8.07503 1.93028 8.03137 2.04589C7.94217 2.28205 7.80026 2.53308 7.68962 2.71408C7.64115 2.79337 7.59639 2.8629 7.5609 2.91673C7.56797 3.00419 7.56013 2.90847 7.5609 2.91673L6.81894 2.57699L6.8194 2.57634L6.82172 2.57302L6.83176 2.55849C6.84073 2.54543 6.85404 2.52588 6.87061 2.50101C6.90384 2.45113 6.94977 2.38048 7.00007 2.2982C7.07155 2.18126 7.14615 2.05 7.20595 1.92583C7.18168 1.93712 7.15597 1.94948 7.12875 1.963C7.12329 1.96571 7.11776 1.96831 7.11218 1.97077C6.86539 2.07975 6.64304 2.01587 6.48694 1.92807C6.37916 1.86744 6.26913 1.77458 6.1897 1.70755C6.17482 1.69499 6.16101 1.68333 6.14849 1.67296C5.95962 1.51658 5.79247 1.40434 5.53659 1.40434C4.98329 1.40434 4.64674 1.67448 4.43044 2.01763Z"})],-1))),x=N((()=>(0,s.Lk)("svg",{width:"8",height:"8",viewBox:"0 0 8 8"},[(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.59564 0.984375C2.89847 0.984375 2.03687 1.19658 1.34001 1.6804C0.628737 2.17423 0.09375 2.95034 0.09375 4.03544C0.09375 4.69687 0.333058 5.1983 0.574931 5.53416C0.679323 5.67911 0.784268 5.79346 0.871055 5.87752L0.518039 7.18469C0.479016 7.32918 0.53443 7.48149 0.659933 7.57468C0.785437 7.66788 0.958064 7.68492 1.10197 7.61831L2.58869 6.93017C3.43084 7.19136 4.58464 7.10231 5.54435 6.69412C6.5965 6.24661 7.50953 5.37102 7.50953 4.03544C7.50953 2.85463 6.94689 2.0672 6.14832 1.59298C5.37505 1.13379 4.41156 0.984375 3.59564 0.984375ZM1.7294 5.84416C1.76936 5.69618 1.71023 5.5405 1.57928 5.44821L1.57783 5.44714C1.57527 5.44525 1.57001 5.4413 1.56243 5.43527C1.54722 5.42321 1.52285 5.40301 1.49229 5.37472C1.43096 5.31794 1.34611 5.22989 1.26052 5.11105C1.09041 4.87483 0.917725 4.51815 0.917725 4.03544C0.917725 3.21362 1.30971 2.65489 1.8344 2.29061C2.3735 1.91632 3.05686 1.74714 3.59564 1.74714C4.32448 1.74714 5.11194 1.88377 5.70343 2.23501C6.26962 2.57123 6.68555 3.11864 6.68555 4.03544C6.68555 4.98814 6.05362 5.63809 5.20034 6.00101C4.3271 6.37243 3.3179 6.39792 2.72797 6.16388C2.61658 6.11969 2.48982 6.12313 2.38143 6.1733L1.53466 6.56524L1.7294 5.84416ZM3.64702 3.35625C3.48309 3.23485 3.24677 3.24696 3.09833 3.38438L2.27436 4.14714C2.11347 4.29608 2.11347 4.53756 2.27436 4.6865C2.43525 4.83544 2.6961 4.83544 2.85699 4.6865L3.42023 4.16511L4.16225 4.71463C4.32618 4.83603 4.5625 4.82391 4.71094 4.6865L5.53491 3.92373C5.69581 3.7748 5.69581 3.53332 5.53491 3.38438C5.37402 3.23544 5.11317 3.23544 4.95228 3.38438L4.38904 3.90577L3.64702 3.35625Z"})],-1))),O=N((()=>(0,s.Lk)("svg",{width:"9",height:"9",viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.746094 3.26117C0.746094 1.90962 1.74214 0.813965 2.97083 0.813965H5.93714C7.16582 0.813965 8.16187 1.90962 8.16187 3.26117V6.52411C8.16187 7.87567 7.16582 8.97132 5.93714 8.97132H2.97083C1.74214 8.97132 0.746094 7.87567 0.746094 6.52411V3.26117ZM2.97083 1.6297C2.1517 1.6297 1.48767 2.36013 1.48767 3.26117V6.52411C1.48767 7.42515 2.1517 8.15558 2.97083 8.15558H5.93714C6.75626 8.15558 7.42029 7.42515 7.42029 6.52411V3.26117C7.42029 2.36013 6.75626 1.6297 5.93714 1.6297H2.97083ZM3.7124 4.89264C3.7124 5.34316 4.04442 5.70838 4.45398 5.70838C4.86354 5.70838 5.19556 5.34316 5.19556 4.89264C5.19556 4.44212 4.86354 4.07691 4.45398 4.07691C4.04442 4.07691 3.7124 4.44212 3.7124 4.89264ZM4.45398 3.26117C3.63486 3.26117 2.97083 3.99161 2.97083 4.89264C2.97083 5.79368 3.63486 6.52411 4.45398 6.52411C5.27311 6.52411 5.93714 5.79368 5.93714 4.89264C5.93714 3.99161 5.27311 3.26117 4.45398 3.26117ZM6.12253 2.44544C5.81536 2.44544 5.56635 2.71935 5.56635 3.05724C5.56635 3.39513 5.81536 3.66904 6.12253 3.66904C6.4297 3.66904 6.67871 3.39513 6.67871 3.05724C6.67871 2.71935 6.4297 2.44544 6.12253 2.44544Z"})],-1))),j=N((()=>(0,s.Lk)("svg",{width:"8",height:"7",viewBox:"0 0 8 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.50015 1.19968C1.99665 1.11278 2.76171 1.03252 3.89246 1.03252C5.02321 1.03252 5.78827 1.11278 6.28476 1.19968C6.62039 1.25842 6.85877 1.58973 6.85877 2.06374V5.00695C6.85877 5.48095 6.62039 5.81226 6.28476 5.871C5.78827 5.9579 5.02321 6.03817 3.89246 6.03817C2.76171 6.03817 1.99665 5.9579 1.50015 5.871C1.16453 5.81226 0.926148 5.48095 0.926148 5.00695V2.06374C0.926148 1.58973 1.16453 1.25842 1.50015 1.19968ZM3.89246 0.198242C2.73147 0.198242 1.92747 0.280581 1.38616 0.37532C0.61158 0.510886 0.18457 1.27374 0.18457 2.06374V5.00695C0.18457 5.79694 0.611581 6.5598 1.38616 6.69536C1.92747 6.7901 2.73147 6.87244 3.89246 6.87244C5.05345 6.87244 5.85745 6.7901 6.39876 6.69536C7.17334 6.5598 7.60035 5.79694 7.60035 5.00695V2.06374C7.60035 1.27374 7.17334 0.510886 6.39876 0.37532C5.85745 0.280581 5.05345 0.198242 3.89246 0.198242ZM3.34671 2.33329C3.46727 2.2607 3.61357 2.26865 3.72735 2.35399L4.83971 3.18826C4.94287 3.26563 5.00482 3.39587 5.00482 3.53534C5.00482 3.67481 4.94287 3.80506 4.83971 3.88242L3.72735 4.7167C3.61357 4.80203 3.46727 4.80999 3.34671 4.7374C3.22615 4.66481 3.15088 4.52346 3.15088 4.36962V2.70107C3.15088 2.54723 3.22615 2.40588 3.34671 2.33329Z"})],-1))),B={class:"footer-links"},M=N((()=>(0,s.Lk)("div",{class:"footer-link"},[(0,s.Lk)("img",{src:l,alt:"",width:"100px"}),(0,s.Lk)("h3",null,"STEP 2023 EDITION"),(0,s.Lk)("p",null,[(0,s.eW)("Step into the forefront of fashion with our latest collection"),(0,s.Lk)("br"),(0,s.eW)(" of shoes. From sleek heels to trendy sneakers.")])],-1))),P={class:"footer-link"},D=N((()=>(0,s.Lk)("h2",null,"NAVIGATION",-1))),V={class:"footer-link"},X=N((()=>(0,s.Lk)("h2",null,"EXTRA",-1))),Y={class:"footer-link"},Z=N((()=>(0,s.Lk)("h2",null,"CATEGORIES",-1))),H={class:"footer-link"},K=N((()=>(0,s.Lk)("h2",null,"CATEGORIES",-1))),Q={class:"bottom"};function R(e,t,a,o,n,r){const l=(0,s.g2)("OfferDeals"),i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(l),(0,s.Lk)("footer",null,[(0,s.Lk)("div",I,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[W])),_:1}),(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[x])),_:1}),(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[O])),_:1}),(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[j])),_:1})]),(0,s.Lk)("div",B,[M,(0,s.Lk)("div",P,[D,(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Search ")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("All collections")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("All products")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("privacy policy")])),_:1})])])]),(0,s.Lk)("div",V,[X,(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("about us")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("contact us")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("faq's")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Shipping & Delivery")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Terms & Conditions")])),_:1})])])]),(0,s.Lk)("div",Y,[Z,(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Women")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Kids")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Men")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Featured")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Bestseller")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Latest")])),_:1})])])]),(0,s.Lk)("div",H,[K,(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Sneakers")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Brogue boots")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Leather Shoes")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Running Shoes")])),_:1})]),(0,s.Lk)("li",null,[(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("Sports Shoes")])),_:1})])])])]),(0,s.Lk)("div",Q,[(0,s.eW)("© 2023 Copyright: "),(0,s.bF)(i,{to:"#"},{default:(0,s.k6)((()=>[(0,s.eW)("All VanS")])),_:1})])])],64)}const q=e=>((0,s.Qi)("data-v-dcadb132"),e=e(),(0,s.jt)(),e),$={class:"offer"},G=q((()=>(0,s.Lk)("div",{class:"text"},[(0,s.Lk)("span",null,"All Products"),(0,s.Lk)("h1",null,"Get 20% off"),(0,s.Lk)("h3",null,"for first order")],-1))),J={class:"search"},U=q((()=>(0,s.Lk)("span",{class:"material-symbols-sharp"},"trending_flat",-1)));function z(e,t,a,n,r,l){return(0,s.uX)(),(0,s.CE)("div",$,[G,(0,s.Lk)("div",J,[(0,s.bo)((0,s.Lk)("input",{type:"email",name:"email",placeholder:"Enter Email Address","onUpdate:modelValue":t[0]||(t[0]=e=>r.input=e)},null,512),[[o.Jo,r.input]]),U])])}var ee={name:"OfferDeals",data(){return{input:""}},methods:{}};const te=(0,A.A)(ee,[["render",z],["__scopeId","data-v-dcadb132"]]);var ae=te,oe={name:"FooterTemplate",components:{OfferDeals:ae}};const se=(0,A.A)(oe,[["render",R],["__scopeId","data-v-cd2340b4"]]);var ne=se,re={name:"App",components:{NavBarVue:T,FooterTemplate:ne}};const le=(0,A.A)(re,[["render",n]]);var ie=le,ce=a(1387);const de=e=>((0,s.Qi)("data-v-599119dc"),e=e(),(0,s.jt)(),e),ue=de((()=>(0,s.Lk)("div",{class:"hero"},[(0,s.Lk)("div",{class:"hero-content"},[(0,s.Lk)("h1",null,"Trendmark"),(0,s.Lk)("h2",null,"SNEAKERS 2023 LIMITED EDITION"),(0,s.Lk)("p",null,[(0,s.eW)(" In another building I was shown his manufactory of shoes, which, like the other,"),(0,s.Lk)("br"),(0,s.eW)(" is full of ingenuity, and, in regard to subdivision of labour,... ")]),(0,s.Lk)("button",null,"Shop Now")]),(0,s.Lk)("div",{class:"empty-div"})],-1))),pe={class:"categories"},fe=de((()=>(0,s.Lk)("span",null,"All Products",-1))),he=de((()=>(0,s.Lk)("h1",null,[(0,s.Lk)("span",{class:"bold"},"Meet"),(0,s.eW)(" Categories")],-1))),ve={class:"category"},me={class:"products"},ke=de((()=>(0,s.Lk)("div",{class:"product-top"},[(0,s.Lk)("div",{class:"product-title"},[(0,s.Lk)("span",null,"All Products"),(0,s.Lk)("h1",null,[(0,s.Lk)("span",{class:"bold"},"All the"),(0,s.eW)(" Sneakers")])]),(0,s.Lk)("button")],-1))),be={class:"product"},Ce={class:"products"},ge=de((()=>(0,s.Lk)("div",{class:"product-top"},[(0,s.Lk)("div",{class:"product-title"},[(0,s.Lk)("span",null,"All Products"),(0,s.Lk)("h1",null,[(0,s.Lk)("span",{class:"bold"},"Recent"),(0,s.eW)(" Sneakers")])]),(0,s.Lk)("button")],-1))),Le={class:"product"},we={class:"mycarousel-div"},ye=de((()=>(0,s.Lk)("div",{class:"text"},[(0,s.Lk)("span",null,"All Products"),(0,s.Lk)("h1",null,"Featured Sneakers")],-1))),_e={class:"mycarousel"};function Fe(e,t,a,o,n,r){const l=(0,s.g2)("OfferDeals"),i=(0,s.g2)("CategoriesCard"),c=(0,s.g2)("ProductCard"),d=(0,s.g2)("FlashDeals"),u=(0,s.g2)("Slide"),p=(0,s.g2)("Carousel");return(0,s.uX)(),(0,s.CE)(s.FK,null,[ue,(0,s.bF)(l),(0,s.Lk)("section",pe,[fe,he,(0,s.Lk)("div",ve,[(0,s.bF)(i,{name:"Nike",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_22eca85c-e0ed-454e-bd65-a7b15dc1f2a6_160x108.png?v=1652704862"}),(0,s.bF)(i,{name:"Adidas",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_6e052360-fcef-4210-8418-6447ce19beb0_230x152.png?v=1652703852"}),(0,s.bF)(i,{name:"Jordan",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_e7732272-ad87-4a9b-8d37-66efdc87a029_230x152.png?v=1652705011"}),(0,s.bF)(i,{name:"Pabs",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_19972c6b-4425-46a2-953f-0c475ac18327_230x152.png?v=1653042872"}),(0,s.bF)(i,{name:"Xell",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_0764dfd1-2fa2-401a-866a-05b4ac81b0ec_240x158.png?v=1653043727"})])]),(0,s.Lk)("section",me,[ke,(0,s.Lk)("div",be,[(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "}),(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "}),(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "}),(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "})])]),(0,s.Lk)("section",Ce,[ge,(0,s.Lk)("div",Le,[(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "}),(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "}),(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "}),(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "})])]),(0,s.bF)(d),(0,s.Lk)("div",we,[ye,(0,s.Lk)("div",_e,[(0,s.bF)(p,{"items-to-show":4,wrapAround:!0,transition:500,"items-to-scroll":1,autoplay:4e3,"wrap-around":!0,breakpoints:{800:{itemsToShow:2,snapAlign:"center"},100:{itemsToShow:1,snapAlign:"center"},1e3:{itemsToShow:2,snapAlign:"start"},1200:{itemsToShow:4.95,snapAlign:"start"}}},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(10,(e=>(0,s.bF)(u,{key:e},{default:(0,s.k6)((()=>[(0,s.bF)(c,{name:"Sprite Yoga Softy Set",url:"https://steps-workdo.myshopify.com/cdn/shop/products/1_985a6bf5-0b39-44e3-a16d-d33453ebffe1_240x158.png?v=1653047793",price:"1900",description:"In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. "})])),_:2},1024))),64))])),_:1})])])],64)}var Se=a(1114),Ae=a(4048);const Ee={class:"my-categories"},Te=["src"];function Ne(e,t,a,o,n,l){return(0,s.uX)(),(0,s.CE)("div",Ee,[(0,s.Lk)("img",{src:a.url},null,8,Te),(0,s.Lk)("h3",null,(0,r.v_)(a.name),1)])}var Ie={name:"CategoriesCard",props:{name:String,url:String}};const We=(0,A.A)(Ie,[["render",Ne],["__scopeId","data-v-1591e56c"]]);var xe=We,Oe=a(1168);const je={class:"flash"},Be={class:"content"},Me=(0,s.Fv)('<div data-v-fe2d8e1c><button id="cat" data-v-fe2d8e1c>FLASH DEALS</button></div><img src="'+Oe+'" alt="" data-v-fe2d8e1c><div class="rating" data-v-fe2d8e1c><span class="fa fa-star checked" data-v-fe2d8e1c></span><span class="fa fa-star checked" data-v-fe2d8e1c></span><span class="fa fa-star checked" data-v-fe2d8e1c></span><span class="fa fa-star checked" data-v-fe2d8e1c></span><span class="fa fa-star" data-v-fe2d8e1c></span></div><h1 data-v-fe2d8e1c>Barley Textured Panelled Low-Top Shoes</h1><h2 data-v-fe2d8e1c>SNEAKERS 2024 LILITED EDITION</h2><p data-v-fe2d8e1c>Elevate your fashion game with our exquisite collection of shoes. Crafted with precision and attention to detail, these shoes combine comfort and elegance to give...</p><h1 data-v-fe2d8e1c>$300</h1>',7);function Pe(e,t,a,o,n,r){const l=(0,s.g2)("AddToCartButton");return(0,s.uX)(),(0,s.CE)("section",je,[(0,s.Lk)("div",Be,[Me,(0,s.bF)(l,{title:"Add to Cart"})])])}var De=a(5214),Ve={name:"FlashDeals",data(){return{}},methods:{},components:{AddToCartButton:De.A}};const Xe=(0,A.A)(Ve,[["render",Pe],["__scopeId","data-v-fe2d8e1c"]]);var Ye=Xe,Ze={name:"HomeView",data(){return{}},components:{ProductCard:Ae.A,FlashDeals:Ye,OfferDeals:ae,CategoriesCard:xe,Carousel:Se.FN,Slide:Se.q7}};const He=(0,A.A)(Ze,[["render",Fe],["__scopeId","data-v-599119dc"]]);var Ke=He;const Qe=[{path:"/",name:"home",component:Ke},{path:"/about",name:"about",component:()=>a.e(594).then(a.bind(a,4151))},{path:"/cart",name:"cart",component:()=>a.e(949).then(a.bind(a,134))},{path:"/product",name:"product",component:()=>a.e(964).then(a.bind(a,6350))},{path:"/checkout",name:"checkout",component:()=>a.e(251).then(a.bind(a,6174))},{path:"/register",name:"register",component:()=>a.e(224).then(a.bind(a,6600))},{path:"/login",name:"login",component:()=>a.e(966).then(a.bind(a,6548))},{path:"/contact",name:"contact",component:()=>a.e(353).then(a.bind(a,933))},{path:"/shop",name:"shop",component:()=>a.e(883).then(a.bind(a,5873))}],Re=(0,ce.aE)({history:(0,ce.LA)("/"),routes:Qe});var qe=Re;(0,o.Ef)(ie).use(qe).mount("#app")},5214:function(e,t,a){a.d(t,{A:function(){return d}});var o=a(6768),s=a(4232);const n={class:"add-to-cart"};function r(e,t,a,r,l,i){return(0,o.uX)(),(0,o.CE)("button",n,(0,s.v_)(a.title),1)}var l={name:"AddToCartButton",props:{title:String}},i=a(1241);const c=(0,i.A)(l,[["render",r]]);var d=c},4048:function(e,t,a){a.d(t,{A:function(){return b}});var o=a(6768),s=a(4232);const n=e=>((0,o.Qi)("data-v-e108e2fc"),e=e(),(0,o.jt)(),e),r=n((()=>(0,o.Lk)("span",{class:"material-symbols-sharp"},"favorite",-1))),l=n((()=>(0,o.Lk)("span",{class:"material-symbols-sharp"},"compare_arrows",-1))),i=n((()=>(0,o.Lk)("span",{class:"material-symbols-sharp"},"visibility",-1))),c={class:"content"},d=["src"],u=n((()=>(0,o.Lk)("div",{class:"rating"},[(0,o.Lk)("span",{class:"fa fa-star checked"}),(0,o.Lk)("span",{class:"fa fa-star checked"}),(0,o.Lk)("span",{class:"fa fa-star checked"}),(0,o.Lk)("span",{class:"fa fa-star checked"}),(0,o.Lk)("span",{class:"fa fa-star"})],-1))),p=n((()=>(0,o.Lk)("small",null,"usd",-1)));function f(e,t,a,n,f,h){const v=(0,o.g2)("router-link"),m=(0,o.g2)("AddToCartButton");return(0,o.uX)(),(0,o.CE)("div",{class:"my-product",onMouseover:t[0]||(t[0]=e=>f.showIcons=!0),onMouseleave:t[1]||(t[1]=e=>f.showIcons=!1)},[(0,o.Lk)("div",{class:(0,s.C4)(["icons-top",{showIcons:f.showIcons}])},[(0,o.bF)(v,{to:"/product"},{default:(0,o.k6)((()=>[r])),_:1}),(0,o.bF)(v,{to:"/product"},{default:(0,o.k6)((()=>[l])),_:1}),(0,o.bF)(v,{to:"/product"},{default:(0,o.k6)((()=>[i])),_:1})],2),(0,o.Lk)("div",c,[(0,o.bF)(v,{to:"/product"},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:a.url,alt:"product-image"},null,8,d),(0,o.Lk)("h3",null,(0,s.v_)(a.name),1),(0,o.Lk)("p",null,(0,s.v_)(a.description),1),u,(0,o.Lk)("h2",null,[(0,o.eW)((0,s.v_)(a.price)+" ",1),p])])),_:1}),(0,o.bF)(m,{title:"Add To Cart"})])],32)}var h=a(5214),v={name:"ProductCard",data(){return{showIcons:!1}},components:{AddToCartButton:h.A},props:{name:String,url:String,description:String,price:String}},m=a(1241);const k=(0,m.A)(v,[["render",f],["__scopeId","data-v-e108e2fc"]]);var b=k},1168:function(e,t,a){e.exports=a.p+"img/p2.2eec09e0.avif"}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,n){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,i=0;i<o.length;i++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(l=!1,n<r&&(r=n));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+{224:"register",251:"checkout",353:"contact",594:"about",883:"shop",949:"cart",964:"product",966:"login"}[e]+"."+{224:"734c2dc6",251:"d620da63",353:"7dc85788",594:"ab661d5f",883:"0ce9d22d",949:"eda11af8",964:"05c17d59",966:"d7d959c5"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+{224:"register",251:"checkout",353:"contact",594:"about",883:"shop",949:"cart",964:"product",966:"login"}[e]+"."+{224:"ad3d04e8",251:"e196151e",353:"c8406ad1",594:"d7b48cae",883:"883dd510",949:"d86e3d75",964:"8def582d",966:"6451e51d"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ecomsales:";a.l=function(o,s,n,r){if(e[o])e[o].push(s);else{var l,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){l=u;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+n),l.src=o),e[o]=[s];var p=function(t,a){l.onerror=l.onload=null,clearTimeout(f);var s=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,s,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",a.nc&&(r.nonce=a.nc);var l=function(a){if(r.onerror=r.onload=null,"load"===a.type)s();else{var o=a&&a.type,l=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+l+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=l,r.parentNode&&r.parentNode.removeChild(r),n(i)}};return r.onerror=r.onload=l,r.href=t,o?o.parentNode.insertBefore(r,o.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){s=r[o],n=s.getAttribute("data-href");if(n===e||n===t)return s}},o=function(o){return new Promise((function(s,n){var r=a.miniCssF(o),l=a.p+r;if(t(r,l))return s();e(o,l,null,s,n)}))},s={524:0};a.f.miniCss=function(e,t){var a={224:1,251:1,353:1,594:1,883:1,949:1,964:1,966:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=o(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={524:0};a.f.j=function(t,o){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)o.push(s[2]);else{var n=new Promise((function(a,o){s=e[t]=[a,o]}));o.push(s[2]=n);var r=a.p+a.u(t),l=new Error,i=function(o){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var n=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,s[1](l)}};a.l(r,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,r=o[0],l=o[1],i=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(i)var d=i(a)}for(t&&t(o);c<r.length;c++)n=r[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},o=self["webpackChunkecomsales"]=self["webpackChunkecomsales"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(8016)}));o=a.O(o)})();
//# sourceMappingURL=app.d22ee37b.js.map