"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[909],{68:(e,s,r)=>{r.d(s,{A:()=>u});var o=r(43);const l="Dropdown_dropDown__VO0hG",t="Dropdown_container__wdJNh",c="Dropdown_list__T+o5-",n="Dropdown_category__mKHwx";var a=r(962);const d=["Medicine","Head","Hand","Dental Care","Skin Care","Eye Care","Vitamins & Supplements","Orthopedic Products","Baby Care"];var i=r(579);const u=o.forwardRef(((e,s)=>{let{onSelect:r,onClose:u}=e;const m=(0,o.useRef)(null);return(0,a.A)(u,m,s),(0,i.jsx)("div",{className:l,ref:m,children:(0,i.jsx)("div",{className:t,children:(0,i.jsx)("ul",{className:c,children:d.map((e=>(0,i.jsx)("li",{onClick:()=>{r(e)},className:n,children:e},e)))})})})}))},738:(e,s,r)=>{r.d(s,{A:()=>i});const o="FilterForm_wrap__dKOTC",l="FilterForm_icon__23iPD",t="FilterForm_input__NJviq",c="FilterForm_button__2yayb";var n=r(858),a=r(713),d=r(579);const i=e=>{let{setSearchQuery:s,placeholder:r}=e;const{register:i,handleSubmit:u}=(0,n.mN)();return(0,d.jsx)("form",{onSubmit:u((e=>{s(e.name)})),children:(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("input",{...i("name"),className:t,placeholder:r}),(0,d.jsxs)("button",{type:"submit",className:c,children:[(0,d.jsx)("div",{className:l,children:(0,d.jsx)(a.A,{name:"filter",width:14,height:14})}),"Filter"]})]})})}},229:(e,s,r)=>{r.d(s,{A:()=>h});var o=r(43),l=r(950);const t="Modal_backdrop__xTnIT",c="Modal_container__Ha+Ky",n="Modal_modal__DJDMv",a="Modal_btnClose__oHdcJ",d="Modal_title__3HkNf",i=(e,s,r)=>{(0,o.useEffect)((()=>{const r=s=>{"Escape"===s.code&&e(!1)},o=r=>{s.current&&!s.current.contains(r.target)&&e(!1)};return window.addEventListener("keydown",r),document.addEventListener("mousedown",o),document.body.classList.add("body-scroll-lock"),()=>{window.removeEventListener("keydown",r),document.removeEventListener("mousedown",o),document.body.classList.remove("body-scroll-lock")}}),[e,s,r])};var u=r(713),m=r(579);const p=document.querySelector("#root-modal"),h=e=>{let{onClose:s,children:r,title:h}=e;const _=(0,o.useRef)(null);return i(s,_),p&&(0,l.createPortal)((0,m.jsx)("div",{className:t,children:(0,m.jsx)("div",{className:c,children:(0,m.jsxs)("div",{className:n,ref:_,onClick:e=>e.stopPropagation(),children:[(0,m.jsx)("button",{className:a,onClick:()=>s(!1),children:(0,m.jsx)(u.A,{name:"close",width:24,height:24})}),(0,m.jsx)("div",{className:d,children:h}),(0,m.jsx)("div",{children:r})]})})}),p)}},909:(e,s,r)=>{r.r(s),r.d(s,{default:()=>X});var o=r(43),l=r(738);const t="AllProductsPage_container__n1dyy",c="AddNewProduct_icon__MFMLA";var n=r(713),a=r(229);const d="AddNewProductModal_wrap__U+mpS",i="AddNewProductModal_inputWrap__jAL8w",u="AddNewProductModal_input__SF6J9",m="AddNewProductModal_errormessage__sDoOW",p="AddNewProductModal_iconChevron__edSiP",h="AddNewProductModal_buttonWrap__cJclg",_="AddNewProductModal_buttonAdd__wSxIX",x="AddNewProductModal_buttonCancel__5dJ84";var j=r(858),v=r(403),g=r(899),N=r(68),b=r(579);const y=e=>{var s,r,l,t,c;let{onClose:a}=e;const[y,f]=(0,o.useState)(!1),[w,C]=(0,o.useState)(""),A=(0,o.useRef)(null),S=g.Ik({productInfo:g.Yj().required("Product info is required"),category:g.Yj().required("Category is required"),suppliers:g.Yj().required("Suppliers is required"),stock:g.Yj().required("Stock is required"),price:g.ai().typeError("Price is required and must be a number").required()}).required(),{register:k,handleSubmit:P,reset:M,control:q,setValue:E,formState:{errors:D}}=(0,j.mN)({resolver:(0,v.t)(S)});return(0,o.useEffect)((()=>{E("category",w)}),[w,E]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("form",{onSubmit:P((e=>{console.log(e),M()})),children:[(0,b.jsxs)("div",{className:d,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("input",{...k("productInfo"),className:u,placeholder:"Product info"}),(0,b.jsx)("p",{className:m,children:null===(s=D.productInfo)||void 0===s?void 0:s.message})]}),(0,b.jsxs)("div",{className:i,children:[(0,b.jsx)(j.xI,{name:"category",control:q,render:e=>{let{field:s}=e;return(0,b.jsx)("input",{...s,className:u,placeholder:"Category",value:w})}}),(0,b.jsx)("p",{className:m,children:null===(r=D.category)||void 0===r?void 0:r.message}),(0,b.jsx)("div",{className:p,onClick:()=>f(!y),ref:A,children:(0,b.jsx)(n.A,{name:"chevron-down",width:16,height:16})}),y&&(0,b.jsx)(N.A,{onSelect:e=>{C(e),f(!1)},onClose:f,ref:A})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("input",{...k("suppliers"),className:u,placeholder:"Suppliers"}),(0,b.jsx)("p",{className:m,children:null===(l=D.suppliers)||void 0===l?void 0:l.message})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("input",{...k("stock"),className:u,placeholder:"Stock"}),(0,b.jsx)("p",{className:m,children:null===(t=D.stock)||void 0===t?void 0:t.message})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("input",{...k("price"),className:u,placeholder:"Price",type:"number"}),(0,b.jsx)("p",{className:m,children:null===(c=D.price)||void 0===c?void 0:c.message})]})]}),(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("button",{type:"submit",className:_,children:"Add"}),(0,b.jsx)("button",{type:"button",className:x,onClick:a,children:"Cancel"})]})]})})},f=()=>{const[e,s]=(0,o.useState)(!1),r=()=>{s(!1)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:c,onClick:()=>s(!0),children:(0,b.jsx)(n.A,{name:"add",width:20,height:20})}),e&&(0,b.jsx)(a.A,{onClose:r,title:"Add a new product",children:(0,b.jsx)(y,{onClose:r})})]})};var w=r(931),C=r(111);const A="AllProductsTable_table__RucKg",S="AllProductsTable_header__L8aca",k="AllProductsTable_subheader__AUKOw",P="AllProductsTable_row__-xfsz",M="AllProductsTable_noResults__dcB5-",q="AllProductsTable_col-info__KTKqG",E="AllProductsTable_col-category__K37vU",D="AllProductsTable_col-stock__7Jp11",T="AllProductsTable_buttonsWrap__S3MdH",L="AllProductsTable_buttonEdit__yCkyO",F="AllProductsTable_buttonDelete__hTPUZ",K="EditModal_wrap__6LjQN",H="EditModal_inputWrap__8rLVE",I="EditModal_input__DemmQ",R="EditModal_errormessage__Twc9m",J="EditModal_iconChevron__Y44qd",Y="EditModal_buttonWrap__wH5ct",V="EditModal_buttonAdd__MgbNJ",W="EditModal_buttonCancel__nZEvv",O=e=>{var s,r,l,t,c;let{data:a,onClose:d}=e;const[i,u]=(0,o.useState)(!1),[m,p]=(0,o.useState)(a.category),h=(0,o.useRef)(null),_=g.Ik({info:g.Yj().required("Product info is required"),category:g.Yj().required("Category is required"),suppliers:g.Yj().required("Suppliers is required"),stock:g.ai().required("Stock is required"),price:g.ai().typeError("Price is required and must be a number").required().positive("Price must be a positive number").test("is-decimal","Price can be a decimal number",(e=>void 0!==e&&/^\d+(\.\d{1,2})?$/.test(e.toString())))}).required(),{register:x,handleSubmit:y,control:f,setValue:w,formState:{errors:C}}=(0,j.mN)({resolver:(0,v.t)(_),defaultValues:{info:a.info,category:a.category,suppliers:a.suppliers,stock:a.stock,price:a.price}});return(0,o.useEffect)((()=>{w("category",m)}),[m,w]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("form",{onSubmit:y((e=>{console.log(e),d()})),children:[(0,b.jsxs)("div",{className:K,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("input",{...x("info"),className:I,placeholder:"Product info"}),(0,b.jsx)("p",{className:R,children:null===(s=C.info)||void 0===s?void 0:s.message})]}),(0,b.jsxs)("div",{className:H,children:[(0,b.jsx)(j.xI,{name:"category",control:f,render:e=>{let{field:s}=e;return(0,b.jsx)("input",{...s,className:I,placeholder:"Category",value:m,onChange:e=>p(e.target.value)})}}),(0,b.jsx)("p",{className:R,children:null===(r=C.category)||void 0===r?void 0:r.message}),(0,b.jsx)("div",{className:J,onClick:()=>u(!i),ref:h,children:(0,b.jsx)(n.A,{name:"chevron-down",width:16,height:16})}),i&&(0,b.jsx)(N.A,{onSelect:e=>{p(e),u(!1)},onClose:u,ref:h})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("input",{...x("suppliers"),className:I,placeholder:"Suppliers"}),(0,b.jsx)("p",{className:R,children:null===(l=C.suppliers)||void 0===l?void 0:l.message})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("input",{...x("stock"),className:I,placeholder:"Stock"}),(0,b.jsx)("p",{className:R,children:null===(t=C.stock)||void 0===t?void 0:t.message})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(j.xI,{name:"price",control:f,render:e=>{let{field:s}=e;return(0,b.jsx)("input",{...s,className:I,placeholder:"Price",onChange:e=>{const r=e.target.value.replace(",",".");s.onChange(r)}})}}),(0,b.jsx)("p",{className:R,children:null===(c=C.price)||void 0===c?void 0:c.message})]})]}),(0,b.jsxs)("div",{className:Y,children:[(0,b.jsx)("button",{type:"submit",className:V,children:"Add"}),(0,b.jsx)("button",{type:"button",className:W,onClick:d,children:"Cancel"})]})]})})},Q="DeleteModal_text__nLnZI",z="DeleteModal_buttonWrap__m5M8N",U="DeleteModal_buttonDelete__y+Mnb",G="DeleteModal_buttonCancel__ycUPy",Z=e=>{let{data:s,onClose:r}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("p",{className:Q,children:["Are you sure you want to delete ",s.info,"?"]}),(0,b.jsxs)("div",{className:z,children:[(0,b.jsx)("button",{type:"submit",className:U,onClick:()=>{r()},children:"Delete"}),(0,b.jsx)("button",{type:"button",className:G,onClick:r,children:"Cancel"})]})]})},B=e=>{let{searchQuery:s}=e;const r=[{header:"All products",footer:e=>e.column.id,columns:[{accessorKey:"info",header:"Product Info",footer:e=>e.column.id},{accessorKey:"category",header:"Category",footer:e=>e.column.id},{accessorKey:"stock",header:"Stock",footer:e=>e.column.id},{accessorKey:"suppliers",header:"Suppliers",footer:e=>e.column.id},{accessorKey:"price",header:"Price",footer:e=>e.column.id},{accessorKey:"action",header:"Action",cell:e=>{let{row:s}=e;return(0,b.jsxs)("div",{className:T,children:[(0,b.jsx)("div",{className:L,onClick:()=>p(s.original),children:(0,b.jsx)(n.A,{name:"edit",width:13,height:13})}),(0,b.jsx)("div",{className:F,onClick:()=>h(s.original),children:(0,b.jsx)(n.A,{name:"delete",width:13,height:13})})]})},footer:e=>e.column.id}]}],l=(0,o.useMemo)((()=>[{info:"Moringa",category:"Medicine",stock:12,suppliers:"Square",price:89.66},{info:"Antibiotic 250 mg",category:"Medicine",stock:12,suppliers:"Square",price:89.66},{info:"Headache Relief",category:"Medicine",stock:12,suppliers:"Square",price:89.66},{info:"Pharmacy",category:"Medicine",stock:12,suppliers:"Square",price:89.66},{info:"Magnesium",category:"Medicine",stock:12,suppliers:"Square",price:89.66}]),[]),[t,c]=(0,o.useState)(l),[d,i]=(0,o.useState)(null),[u,m]=(0,o.useState)(null),p=e=>{i(e)},h=e=>{m(e)},_=()=>{i(null)},x=()=>{m(null)};(0,o.useEffect)((()=>{const e=s.toLowerCase();c(l.filter((s=>s.info.toLowerCase().includes(e))))}),[s,l]);const j=(0,w.N4)({data:t,columns:r,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:(0,C.HT)(),debugTable:!0,debugHeaders:!0,debugColumns:!0});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("table",{className:A,children:[(0,b.jsx)("thead",{children:j.getHeaderGroups().map(((e,s)=>(0,b.jsx)("tr",{className:0===s?S:k,children:e.headers.map((e=>(0,b.jsx)("th",{colSpan:e.colSpan,className:0===s?S:k,style:{width:e.getSize()},children:e.isPlaceholder?null:(0,w.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,b.jsx)("tbody",{children:j.getRowModel().rows.map((e=>(0,b.jsx)("tr",{children:e.getVisibleCells().map((e=>(0,b.jsx)("td",{className:"".concat(P," ").concat("info"===e.column.id?q:"category"===e.column.id?E:"stock"===e.column.id?D:""),style:{width:e.column.getSize()},children:(0,w.Kv)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))})]}),0===t.length&&(0,b.jsx)("div",{className:M,children:"No results found for your search query."}),d&&(0,b.jsx)(a.A,{onClose:_,title:"Edit product",children:(0,b.jsx)(O,{onClose:_,data:d})}),u&&(0,b.jsx)(a.A,{onClose:x,title:"Delete Product",children:(0,b.jsx)(Z,{onClose:x,data:u})})]})},X=()=>{const[e,s]=(0,o.useState)("");return(0,b.jsxs)("section",{className:t,children:[(0,b.jsx)(l.A,{setSearchQuery:s,placeholder:"Product Name"}),(0,b.jsx)(f,{}),(0,b.jsx)(B,{searchQuery:e})]})}},962:(e,s,r)=>{r.d(s,{A:()=>l});var o=r(43);const l=(e,s,r)=>{(0,o.useEffect)((()=>{const o=s=>{"Escape"===s.code&&e(!1)},l=o=>{!s.current||s.current.contains(o.target)||null===r||void 0===r||!r.current||null!==r&&void 0!==r&&r.current.contains(o.target)||e(!1)};return window.addEventListener("keydown",o),document.addEventListener("mousedown",l),()=>{window.removeEventListener("keydown",o),document.removeEventListener("mousedown",l)}}),[e,s,r])}}}]);
//# sourceMappingURL=909.660f740c.chunk.js.map