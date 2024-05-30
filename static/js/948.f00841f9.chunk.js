"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[948],{738:(e,s,a)=>{a.d(s,{A:()=>c});const l="FilterForm_wrap__dKOTC",r="FilterForm_icon__23iPD",t="FilterForm_input__NJviq",n="FilterForm_button__2yayb";var d=a(858),o=a(713),i=a(579);const c=e=>{let{setSearchQuery:s,placeholder:a}=e;const{register:c,handleSubmit:u}=(0,d.mN)();return(0,i.jsx)("form",{onSubmit:u((e=>{s(e.name)})),children:(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)("input",{...c("name"),className:t,placeholder:a}),(0,i.jsxs)("button",{type:"submit",className:n,children:[(0,i.jsx)("div",{className:r,children:(0,i.jsx)(o.A,{name:"filter",width:14,height:14})}),"Filter"]})]})})}},229:(e,s,a)=>{a.d(s,{A:()=>h});var l=a(43),r=a(950);const t="Modal_backdrop__xTnIT",n="Modal_container__Ha+Ky",d="Modal_modal__DJDMv",o="Modal_btnClose__oHdcJ",i="Modal_title__3HkNf",c=(e,s,a)=>{(0,l.useEffect)((()=>{const a=s=>{"Escape"===s.code&&e(!1)},l=a=>{s.current&&!s.current.contains(a.target)&&e(!1)};return window.addEventListener("keydown",a),document.addEventListener("mousedown",l),document.body.classList.add("body-scroll-lock"),()=>{window.removeEventListener("keydown",a),document.removeEventListener("mousedown",l),document.body.classList.remove("body-scroll-lock")}}),[e,s,a])};var u=a(713),m=a(579);const p=document.querySelector("#root-modal"),h=e=>{let{onClose:s,children:a,title:h}=e;const _=(0,l.useRef)(null);return c(s,_),p&&(0,r.createPortal)((0,m.jsx)("div",{className:t,children:(0,m.jsx)("div",{className:n,children:(0,m.jsxs)("div",{className:d,ref:_,onClick:e=>e.stopPropagation(),children:[(0,m.jsx)("button",{className:o,onClick:()=>s(!1),children:(0,m.jsx)(u.A,{name:"close",width:24,height:24})}),(0,m.jsx)("div",{className:i,children:h}),(0,m.jsx)("div",{children:a})]})})}),p)}},727:(e,s,a)=>{a.r(s),a.d(s,{default:()=>te});var l=a(43);const r="AllSuppliersPage_container__qyFRJ",t="AllSuppliersPage_wrap__uBpkZ";var n=a(738);const d="AddNewSupplier_button__d3IGa";var o=a(229),i=(a(97),a(726)),c=a(713),u=a(858),m=a(403),p=a(899);const h="Dropdown_dropDown__ZVp5f",_="Dropdown_list__ga3Hp",v="Dropdown_stat__RbQB7";var j=a(962),x=a(579);const N=l.forwardRef(((e,s)=>{let{onSelect:a,onClose:r}=e;const t=(0,l.useRef)(null);return(0,j.A)(r,t,s),(0,x.jsx)("div",{className:h,ref:t,children:(0,x.jsx)("ul",{className:_,children:["Active","Deactive"].map((e=>(0,x.jsx)("li",{onClick:()=>{a(e)},className:v,children:e},e)))})})})),f="AddNewSupplierModal_wrap__V+wOy",S="AddNewSupplierModal_inputWrap__IxVCM",g="AddNewSupplierModal_input__OLvYr",A="AddNewSupplierModal_errormessage__AIkKV",b="AddNewSupplierModal_iconChevron__lEUnL",y="AddNewSupplierModal_buttonWrap__W3odG",w="AddNewSupplierModal_buttonAdd__bR6Sj",C="AddNewSupplierModal_buttonCancel__1zpgK",M="AddNewSupplierModal_calendar__1KLPG",k="AddNewSupplierModal_tile__naLTt",q="AddNewSupplierModal_label__Ay5o3",E="AddNewSupplierModal_iconCalendar__V0gU-",L=e=>{var s,a,r,t,n,d;let{onClose:o}=e;const[h,_]=(0,l.useState)(!1),[v,L]=(0,l.useState)(""),[D,F]=(0,l.useState)(!1),[R,T]=(0,l.useState)(null),I=null===R||void 0===R?void 0:R.toString(),K=null===I||void 0===I?void 0:I.split(" ").slice(1,4),Y=K&&["".concat(K[0]," ").concat(K[1]),K[2]],H=null===Y||void 0===Y?void 0:Y.join(", "),V=(0,l.useRef)(null),P=(0,l.useRef)(null),W=(0,l.useRef)(null),U=p.Ik({info:p.Yj().required("Suppliers Info is required"),address:p.Yj().required("Address is required"),company:p.Yj().required("Company is required"),date:p.Yj().required("Date is required"),ammount:p.ai().typeError("Ammount is required and must be a number").required(),status:p.Yj().required("Status is required")}).required(),{register:z,handleSubmit:B,control:G,setValue:Q,formState:{errors:J}}=(0,u.mN)({resolver:(0,m.t)(U)});return(0,l.useEffect)((()=>{Q("status",v),H&&Q("date",H)}),[v,H,Q]),(0,j.A)(F,W,P),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{onSubmit:B((e=>{console.log(e),o()})),children:[(0,x.jsxs)("div",{className:f,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...z("info"),className:g,placeholder:"Suppliers Info"}),(0,x.jsx)("p",{className:A,children:null===(s=J.info)||void 0===s?void 0:s.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...z("address"),className:g,placeholder:"Address"}),(0,x.jsx)("p",{className:A,children:null===(a=J.address)||void 0===a?void 0:a.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...z("company"),className:g,placeholder:"Company"}),(0,x.jsx)("p",{className:A,children:null===(r=J.company)||void 0===r?void 0:r.message})]}),(0,x.jsxs)("div",{className:S,children:[(0,x.jsx)(u.xI,{name:"date",control:G,render:e=>{let{field:s}=e;return(0,x.jsx)("input",{...s,className:g,placeholder:"Delivery date",value:H})}}),(0,x.jsx)("p",{className:A,children:null===(t=J.date)||void 0===t?void 0:t.message}),(0,x.jsx)("div",{className:E,onClick:()=>F(!D),ref:P,children:(0,x.jsx)(c.A,{name:"calendar",width:16,height:16})}),D&&(0,x.jsx)("div",{ref:W,children:(0,x.jsx)(i.Ay,{onChange:e=>{T(e),F(!1)},value:R,locale:"en-US",className:M,tileClassName:k,navigationLabel:e=>{let{label:s}=e;return(0,x.jsx)("span",{className:q,children:s})},formatShortWeekday:(e,s)=>s.toLocaleDateString(e,{weekday:"short"}).substring(0,2)})})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...z("ammount"),className:g,placeholder:"Ammount"}),(0,x.jsx)("p",{className:A,children:null===(n=J.ammount)||void 0===n?void 0:n.message})]}),(0,x.jsxs)("div",{className:S,children:[(0,x.jsx)(u.xI,{name:"status",control:G,render:e=>{let{field:s}=e;return(0,x.jsx)("input",{...s,className:g,placeholder:"Status",value:v,onChange:e=>L(e.target.value)})}}),(0,x.jsx)("p",{className:A,children:null===(d=J.status)||void 0===d?void 0:d.message}),(0,x.jsx)("div",{className:b,onClick:()=>_(!h),ref:V,children:(0,x.jsx)(c.A,{name:"chevron-down",width:16,height:16})}),h&&(0,x.jsx)(N,{onSelect:e=>{L(e),_(!1)},onClose:_,ref:V})]})]}),(0,x.jsxs)("div",{className:y,children:[(0,x.jsx)("button",{type:"submit",className:w,children:"Add"}),(0,x.jsx)("button",{type:"button",className:C,onClick:o,children:"Cancel"})]})]})})},D=()=>{const[e,s]=(0,l.useState)(!1),a=()=>{s(!1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{className:d,onClick:()=>s(!0),children:"Add a new suppliers"}),e&&(0,x.jsx)(o.A,{onClose:a,title:"Add a new supplier",children:(0,x.jsx)(L,{onClose:a})})]})};var F=a(931),R=a(111);const T="AllSuppliersTable_table__oNX8f",I="AllSuppliersTable_header__edyYm",K="AllSuppliersTable_subheader__es9F8",Y="AllSuppliersTable_row__8epUH",H="AllSuppliersTable_noResults__o4Xr0",V="AllSuppliersTable_col-info__aYutU",P="AllSuppliersTable_col-category__nMAdV",W="AllSuppliersTable_col-stock__TC0oL",U="AllSuppliersTable_buttonEdit__k7hGn",z="EditModal_wrap__WdunL",B="EditModal_inputWrap__fq0wA",G="EditModal_input__6aNia",Q="EditModal_errormessage__QEDXY",J="EditModal_iconChevron__DKAUP",O="EditModal_iconCalendar__bBuuB",X="EditModal_buttonWrap__ssqiW",Z="EditModal_buttonSave__BGkmN",$="EditModal_buttonCancel__3ebza",ee="EditModal_calendar__MH5dc",se="EditModal_tile__oDmrg",ae="EditModal_label__F+x5p",le=e=>{var s,a,r,t,n,d;let{data:o,onClose:h}=e;const[_,v]=(0,l.useState)(!1),[f,S]=(0,l.useState)(o.status),[g,A]=(0,l.useState)(!1),[b,y]=(0,l.useState)(new Date),w=null===b||void 0===b?void 0:b.toString(),C=null===w||void 0===w?void 0:w.split(" ").slice(1,4),M=C&&["".concat(C[0]," ").concat(C[1]),C[2]],k=null===M||void 0===M?void 0:M.join(", "),q=(0,l.useRef)(null),E=(0,l.useRef)(null),L=(0,l.useRef)(null),D=p.Ik({info:p.Yj().required("Suppliers Info is required"),address:p.Yj().required("Address is required"),company:p.Yj().required("Company is required"),date:p.Yj().required("Date is required"),ammount:p.ai().typeError("Ammount is required and must be a number").positive("Ammount must be a positive number").required(),status:p.Yj().required("Status is required")}).required(),{register:F,handleSubmit:R,control:T,setValue:I,formState:{errors:K}}=(0,u.mN)({resolver:(0,m.t)(D),defaultValues:{info:o.info,address:o.address,company:o.company,date:o.date,ammount:o.ammount,status:o.status}});return(0,l.useEffect)((()=>{I("status",f)}),[f,I]),(0,j.A)(A,L,E),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{onSubmit:R((e=>{console.log(e),h()})),children:[(0,x.jsxs)("div",{className:z,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...F("info"),className:G,placeholder:"Suppliers Info"}),(0,x.jsx)("p",{className:Q,children:null===(s=K.info)||void 0===s?void 0:s.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...F("address"),className:G,placeholder:"Address"}),(0,x.jsx)("p",{className:Q,children:null===(a=K.address)||void 0===a?void 0:a.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...F("company"),className:G,placeholder:"Company"}),(0,x.jsx)("p",{className:Q,children:null===(r=K.company)||void 0===r?void 0:r.message})]}),(0,x.jsxs)("div",{className:B,children:[(0,x.jsx)(u.xI,{name:"date",control:T,render:e=>{let{field:s}=e;return(0,x.jsx)("input",{...s,className:G,placeholder:"Delivery date",value:k})}}),(0,x.jsx)("p",{className:Q,children:null===(t=K.date)||void 0===t?void 0:t.message}),(0,x.jsx)("div",{className:O,onClick:()=>A(!g),ref:E,children:(0,x.jsx)(c.A,{name:"calendar",width:16,height:16})}),g&&(0,x.jsx)("div",{ref:L,children:(0,x.jsx)(i.Ay,{onChange:e=>{y(e),A(!1)},value:b,locale:"en-US",className:ee,tileClassName:se,navigationLabel:e=>{let{label:s}=e;return(0,x.jsx)("span",{className:ae,children:s})},formatShortWeekday:(e,s)=>s.toLocaleDateString(e,{weekday:"short"}).substring(0,2)})})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{...F("ammount"),className:G,placeholder:"Ammount"}),(0,x.jsx)("p",{className:Q,children:null===(n=K.ammount)||void 0===n?void 0:n.message})]}),(0,x.jsxs)("div",{className:B,children:[(0,x.jsx)(u.xI,{name:"status",control:T,render:e=>{let{field:s}=e;return(0,x.jsx)("input",{...s,className:G,placeholder:"Status",value:f,onChange:e=>S(e.target.value)})}}),(0,x.jsx)("p",{className:Q,children:null===(d=K.status)||void 0===d?void 0:d.message}),(0,x.jsx)("div",{className:J,onClick:()=>v(!_),ref:q,children:(0,x.jsx)(c.A,{name:"chevron-down",width:16,height:16})}),_&&(0,x.jsx)(N,{onSelect:e=>{S(e),v(!1)},onClose:v,ref:q})]})]}),(0,x.jsxs)("div",{className:X,children:[(0,x.jsx)("button",{type:"submit",className:Z,children:"Save"}),(0,x.jsx)("button",{type:"button",className:$,onClick:h,children:"Cancel"})]})]})})},re=e=>{let{searchQuery:s}=e;const a=[{header:"All suppliers",footer:e=>e.column.id,columns:[{accessorKey:"info",header:"Suppliers Info",footer:e=>e.column.id},{accessorKey:"address",header:"Address",footer:e=>e.column.id},{accessorKey:"company",header:"Company",footer:e=>e.column.id},{accessorKey:"date",header:"Delivery date",footer:e=>e.column.id},{accessorKey:"ammount",header:"Ammount",footer:e=>e.column.id},{accessorKey:"status",header:"Status",footer:e=>e.column.id},{accessorKey:"action",header:"Action",cell:e=>{let{row:s}=e;return(0,x.jsxs)("div",{className:U,onClick:()=>u(s.original),children:[(0,x.jsx)(c.A,{name:"edit",width:13,height:13}),"Edit"]})},footer:e=>e.column.id}]}],r=(0,l.useMemo)((()=>[{info:"Alex Shatov",address:"Mripur-1",company:"Square",date:"August 1, 2023",ammount:6952.53,status:"Active"},{info:"Philip Harbach",address:"Mripur-1",company:"Square",date:"August 1, 2023",ammount:6952.53,status:"Active"},{info:"Mirko Fisuk",address:"Mripur-1",company:"Square",date:"August 1, 2023",ammount:6952.53,status:"Active"},{info:"Olga Semklo",address:"Mripur-1",company:"Square",date:"August 1, 2023",ammount:6952.53,status:"Active"},{info:"Burak Long",address:"Mripur-1",company:"Square",date:"August 1, 2023",ammount:6952.53,status:"Active"}]),[]),[t,n]=(0,l.useState)(r),[d,i]=(0,l.useState)(null),u=e=>{i(e)},m=()=>{i(null)};(0,l.useEffect)((()=>{const e=s.toLowerCase();n(r.filter((s=>s.info.toLowerCase().includes(e))))}),[s,r]);const p=(0,F.N4)({data:t,columns:a,enableColumnResizing:!0,columnResizeMode:"onChange",getCoreRowModel:(0,R.HT)(),debugTable:!0,debugHeaders:!0,debugColumns:!0});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("table",{className:T,children:[(0,x.jsx)("thead",{children:p.getHeaderGroups().map(((e,s)=>(0,x.jsx)("tr",{className:0===s?I:K,children:e.headers.map((e=>(0,x.jsx)("th",{colSpan:e.colSpan,className:0===s?I:K,style:{width:e.getSize()},children:e.isPlaceholder?null:(0,F.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,x.jsx)("tbody",{children:p.getRowModel().rows.map((e=>(0,x.jsx)("tr",{children:e.getVisibleCells().map((e=>(0,x.jsx)("td",{className:"".concat(Y," ").concat("info"===e.column.id?V:"category"===e.column.id?P:"stock"===e.column.id?W:""),style:{width:e.column.getSize()},children:(0,F.Kv)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))})]}),0===t.length&&(0,x.jsx)("div",{className:H,children:"No results found for your search query."}),d&&(0,x.jsx)(o.A,{onClose:m,title:"Edit supplier",children:(0,x.jsx)(le,{onClose:m,data:d})})]})},te=()=>{const[e,s]=(0,l.useState)("");return(0,x.jsxs)("section",{className:r,children:[(0,x.jsxs)("div",{className:t,children:[(0,x.jsx)(n.A,{setSearchQuery:s,placeholder:"User Name"}),(0,x.jsx)(D,{})]}),(0,x.jsx)(re,{searchQuery:e})]})}},962:(e,s,a)=>{a.d(s,{A:()=>r});var l=a(43);const r=(e,s,a)=>{(0,l.useEffect)((()=>{const l=s=>{"Escape"===s.code&&e(!1)},r=l=>{!s.current||s.current.contains(l.target)||null===a||void 0===a||!a.current||null!==a&&void 0!==a&&a.current.contains(l.target)||e(!1)};return window.addEventListener("keydown",l),document.addEventListener("mousedown",r),()=>{window.removeEventListener("keydown",l),document.removeEventListener("mousedown",r)}}),[e,s,a])}}}]);
//# sourceMappingURL=948.f00841f9.chunk.js.map