var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var l in r||(r={}))a.call(r,l)&&s(e,l,r[l]);if(t)for(var l of t(r))n.call(r,l)&&s(e,l,r[l]);return e};import{I as l,a as c,T as o,P as m,r as i,u as p,R as d,C as _,d as u,b as E,c as v,D as h,e as y,K as f,f as g,g as w,B as x,M as N,N as b,h as k,q as S,i as C,j as z,k as j,F as R,l as Y,m as M,n as F,S as I,o as W,p as D,s as q}from"./vendor.34bf2281.js";var B=l.createFromIconfont("//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js");c.defaults.baseURL="http://127.0.0.1:7001",c.defaults.withCredentials=!0,c.defaults.headers["X-Requested-With"]="XMLHttpRequest",c.defaults.headers.Authorization=`${localStorage.getItem("token")||null}`,c.defaults.headers.post["Content-Type"]="application/json",c.interceptors.response.use((e=>"object"!=typeof e.data?(o.show("服务器异常!"),Promise.reject(e)):200!=e.data.code?(e.data.msg&&o.show(e.data.msg),401==e.data.code&&(window.location.href="/login"),Promise.reject(e.data)):e.data));const $=c.get,T=c.post,O={1:{icon:"canyin"},2:{icon:"fushi"},3:{icon:"jiaotong"},4:{icon:"riyong"},5:{icon:"gouwu"},6:{icon:"xuexi"},7:{icon:"yiliao"},8:{icon:"lvxing"},9:{icon:"renqing"},10:{icon:"qita"},11:{icon:"gongzi"},12:{icon:"jiangjin"},13:{icon:"zhuanzhang"},14:{icon:"licai"},15:{icon:"tuikuang"},16:{icon:"qita"}},A=0,P=3,K=4,H=0,L=2,U=3,X=e=>e&&e.startsWith("http")?e:e=`http://127.0.0.1:7001${e}`;var Z={item:"_item_mkxeh_1",headerDate:"_header-date_mkxeh_7",date:"_date_mkxeh_18",money:"_money_mkxeh_22",itemIcon:"_item-icon_mkxeh_37"};const G=({bill:e})=>{const[t,a]=i.exports.useState(0),[n,s]=i.exports.useState(0),r=p();i.exports.useEffect((()=>{const t=e.bills.filter((e=>2==e.pay_type)).reduce(((e,t)=>e+=Number(t.amount)),0);a(t);const n=e.bills.filter((e=>1==e.pay_type)).reduce(((e,t)=>e+=Number(t.amount)),0);s(n)}),[e.bills]);return d.createElement("div",{className:Z.item},d.createElement("div",{className:Z.headerDate},d.createElement("div",{className:Z.date},e.date),d.createElement("div",{className:Z.money},d.createElement("span",null,d.createElement("img",{src:"//s.yezgea02.com/1615953405599/zhi%402x.png",alt:"支"}),d.createElement("span",null,"¥",n.toFixed(2))),d.createElement("span",null,d.createElement("img",{src:"//s.yezgea02.com/1615953405599/shou%402x.png",alt:"收"}),d.createElement("span",null,"¥",t.toFixed(2))))),e&&e.bills.map((e=>d.createElement(_,{className:Z.bill,key:e.id,onClick:()=>(e=>{r.push(`/detail?id=${e.id}`)})(e),title:d.createElement(d.Fragment,null,d.createElement(B,{className:Z.itemIcon,type:e.type_id?O[e.type_id].icon:1}),d.createElement("span",null,e.type_name)),description:d.createElement("span",{style:{color:2==e.pay_type?"red":"#39be77"}},`${1==e.pay_type?"-":"+"}${e.amount}`),help:d.createElement("div",null,u(Number(e.date)).format("HH:mm")," ",e.remark?`| ${e.remark}`:"")}))))};G.propTypes={bill:m.object};var J="_popup-type_4v4ui_1",Q="_header_4v4ui_7",V="_cross_4v4ui_20",ee="_content_4v4ui_28",te="_all_4v4ui_31",ae="_title_4v4ui_38",ne="_expense-wrap_4v4ui_43",se="_income-wrap_4v4ui_44",re="_active_4v4ui_58";const le=i.exports.forwardRef((({onSelect:e},t)=>{const[a,n]=i.exports.useState(!1),[s,r]=i.exports.useState("all"),[c,o]=i.exports.useState([]),[m,p]=i.exports.useState([]);i.exports.useEffect((async()=>{const{data:{list:e}}=await $("/type/list");o(e.filter((e=>1==e.type))),p(e.filter((e=>2==e.type)))}),[]),t&&(t.current={show:()=>{n(!0)},close:()=>{n(!1)}});const _=t=>{r(t.id),n(!1),e(t)};return d.createElement(E,{visible:a,direction:"bottom",onMaskClick:()=>n(!1),destroy:!1,mountContainer:()=>document.body},d.createElement("div",{className:J},d.createElement("div",{className:Q},"请选择类型",d.createElement(l,{type:"wrong",className:V,onClick:()=>n(!1)})),d.createElement("div",{className:ee},d.createElement("div",{onClick:()=>_({id:"all"}),className:v({[te]:!0,[re]:"all"==s})},"全部类型"),d.createElement("div",{className:ae},"支出"),d.createElement("div",{className:ne},c.map(((e,t)=>d.createElement("p",{key:t,onClick:()=>_(e),className:v({[re]:s==e.id})},e.name)))),d.createElement("div",{className:ae},"收入"),d.createElement("div",{className:se},m.map(((e,t)=>d.createElement("p",{key:t,onClick:()=>_(e),className:v({[re]:s==e.id})},e.name)))))))}));E.propTypes={onSelect:m.func};const ce=i.exports.forwardRef((({onSelect:e,mode:t="date"},a)=>{const[n,s]=i.exports.useState(!1),[r,l]=i.exports.useState(new Date);return a&&(a.current={show:()=>{s(!0)},close:()=>{s(!1)}}),d.createElement(E,{visible:n,direction:"bottom",onMaskClick:()=>s(!1),destroy:!1,mountContainer:()=>document.body},d.createElement("div",null,d.createElement(h,{visible:n,value:r,mode:t,onOk:a=>{l(a),s(!1),"month"==t?e(u(a).format("YYYY-MM")):"date"==t&&e(u(a).format("YYYY-MM-DD"))},onCancel:()=>s(!1)})))}));E.propTypes={mode:m.string,onSelect:m.func};var oe={addWrap:"_add-wrap_11omu_1",header:"_header_11omu_7",close:"_close_11omu_10",filter:"_filter_11omu_15",type:"_type_11omu_21",expense:"_expense_11omu_30",active:"_active_11omu_33",income:"_income_11omu_38",time:"_time_11omu_43",arrow:"_arrow_11omu_52",money:"_money_11omu_56",sufix:"_sufix_11omu_61",amount:"_amount_11omu_66",typeWarp:"_type-warp_11omu_70",typeBody:"_type-body_11omu_79",typeItem:"_type-item_11omu_83",iconfontWrap:"_iconfont-wrap_11omu_90",iconfont:"_iconfont_11omu_90",remark:"_remark_11omu_116"};const me=i.exports.forwardRef((({detail:e={},onReload:t},a)=>{const n=i.exports.useRef(),s=e&&e.id,[r,c]=i.exports.useState(!1),[m,p]=i.exports.useState("expense"),[_,h]=i.exports.useState([]),[g,w]=i.exports.useState([]),[x,N]=i.exports.useState({}),[b,k]=i.exports.useState(""),[S,C]=i.exports.useState(""),[z,j]=i.exports.useState(!1),[R,Y]=i.exports.useState(new Date);i.exports.useEffect((()=>{e.id&&(p(1==e.pay_type?"expense":"income"),N({id:e.type_id,name:e.type_name}),C(e.remark),k(e.amount),Y(u(Number(e.date)).$d))}),[e]),a&&(a.current={show:()=>{c(!0)},close:()=>{c(!1)}}),i.exports.useEffect((async()=>{const{data:{list:e}}=await $("/type/list"),t=e.filter((e=>1==e.type)),a=e.filter((e=>2==e.type));h(t),w(a),s||N(t[0])}),[]);const M=e=>{p(e),N("expense"==e?_[0]:g[0])},F=async()=>{if(!b)return void o.show("请输入具体金额");const e={amount:Number(b).toFixed(2),type_id:x.id,type_name:x.name,date:1e3*u(R).unix(),pay_type:"expense"==m?1:2,remark:S||""};s?(e.id=s,await T("/bill/update",e),o.show("修改成功")):(await T("/bill/add",e),k(""),p("expense"),N(_[0]),Y(new Date),C(""),o.show("添加成功")),c(!1),t&&t()};return d.createElement(E,{visible:r,direction:"bottom",onMaskClick:()=>c(!1),destroy:!1,mountContainer:()=>document.body},d.createElement("div",{className:oe.addWrap},d.createElement("header",{className:oe.header},d.createElement("span",{className:oe.close,onClick:()=>c(!1)},d.createElement(l,{type:"wrong"}))),d.createElement("div",{className:oe.filter},d.createElement("div",{className:oe.type},d.createElement("span",{onClick:()=>M("expense"),className:v({[oe.expense]:!0,[oe.active]:"expense"==m})},"支出"),d.createElement("span",{onClick:()=>M("income"),className:v({[oe.income]:!0,[oe.active]:"income"==m})},"收入")),d.createElement("div",{className:oe.time,onClick:()=>{n.current&&n.current.show()}},u(R).format("MM-DD")," ",d.createElement(l,{className:oe.arrow,type:"arrow-bottom"}))),d.createElement("div",{className:oe.money},d.createElement("span",{className:oe.sufix},"¥"),d.createElement("span",{className:v(oe.amount,oe.animation)},b)),d.createElement("div",{className:oe.typeWarp},d.createElement("div",{className:oe.typeBody},("expense"==m?_:g).map((e=>d.createElement("div",{onClick:()=>(e=>{N(e)})(e),key:e.id,className:oe.typeItem},d.createElement("span",{className:v({[oe.iconfontWrap]:!0,[oe.expense]:"expense"==m,[oe.income]:"income"==m,[oe.active]:x.id==e.id})},d.createElement(B,{className:oe.iconfont,type:O[e.id].icon})),d.createElement("span",null,e.name)))))),d.createElement("div",{className:oe.remark},z?d.createElement(y,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:S,placeholder:"请输入备注信息",onChange:e=>C(e),onBlur:()=>j(!1)}):d.createElement("span",{onClick:()=>j(!0)},S||"添加备注")),d.createElement(f,{type:"price",onKeyClick:e=>(e=>{if("close"!=(e=String(e)))if("delete"!=e)"ok"!=e?"."==e&&b.includes(".")||"."!=e&&b.includes(".")&&b&&b.split(".")[1].length>=2||k(b+e):F();else{let e=b.slice(0,b.length-1);k(e)}})(e)}),d.createElement(ce,{ref:n,onSelect:e=>{Y(e)}})))}));me.propTypes={detail:m.object,onReload:m.func};var ie={home:"_home_pyrz3_1",header:"_header_pyrz3_7",dataWrap:"_data-wrap_pyrz3_22",income:"_income_pyrz3_33",typeWrap:"_type-wrap_pyrz3_36",left:"_left_pyrz3_48",arrow:"_arrow_pyrz3_51",contentWrap:"_content-wrap_pyrz3_55",add:"_add_pyrz3_65"};var pe={data:"_data_f4sv2_1",total:"_total_f4sv2_5",time:"_time_f4sv2_13",date:"_date_f4sv2_35",title:"_title_f4sv2_39",expense:"_expense_f4sv2_45",income:"_income_f4sv2_51",structure:"_structure_f4sv2_55",head:"_head_f4sv2_60",tab:"_tab_f4sv2_70",active:"_active_f4sv2_80",content:"_content_f4sv2_88",item:"_item_f4sv2_88",left:"_left_f4sv2_93",type:"_type_f4sv2_100",name:"_name_f4sv2_115",right:"_right_f4sv2_124",percent:"_percent_f4sv2_129",momey:"_momey_f4sv2_135",proportion:"_proportion_f4sv2_138"};let de=null;var _e={user:"_user_2wwvo_1",head:"_head_2wwvo_5",info:"_info_2wwvo_14",content:"_content_2wwvo_33",logout:"_logout_2wwvo_43"};var ue="_header-warp_12wcp_1",Ee="_block_12wcp_4",ve="_header_12wcp_1";const he=({title:e=""})=>{const t=p();return d.createElement("div",{className:ue},d.createElement("div",{className:Ee},d.createElement(b,{className:ve,left:d.createElement(l,{type:"arrow-left",theme:"primary",onClick:()=>t.goBack()}),title:e})))};he.propTypes={title:m.string};var ye="_detail_1wagh_1",fe="_card_1wagh_8",ge="_type_1wagh_16",we="_expense_1wagh_29",xe="_income_1wagh_32",Ne="_iconfont_1wagh_35",be="_amount_1wagh_38",ke="_info_1wagh_43",Se="_time_1wagh_48",Ce="_remark_1wagh_61",ze="_operation_1wagh_75";var je={auth:"_auth_kpur3_1",head:"_head_kpur3_5",tab:"_tab_kpur3_16",avtive:"_avtive_kpur3_25",form:"_form_kpur3_30",operation:"_operation_kpur3_39",agree:"_agree_kpur3_42"};var Re="_account_u7md4_1",Ye="_form_u7md4_4",Me="_btn_u7md4_9";var Fe=j()((e=>{const{getFieldProps:t,getFieldError:a}=e.form;return d.createElement(d.Fragment,null,d.createElement(he,{title:"重制密码"}),d.createElement("div",{className:Re},d.createElement("div",{className:Ye},d.createElement(_,{title:"原密码"},d.createElement(y,r({clearable:!0,type:"text",placeholder:"请输入原密码"},t("oldpass",{rules:[{required:!0}]})))),d.createElement(_,{title:"新密码"},d.createElement(y,r({clearable:!0,type:"text",placeholder:"请输入新密码"},t("newpass",{rules:[{required:!0}]})))),d.createElement(_,{title:"确认密码"},d.createElement(y,r({clearable:!0,type:"text",placeholder:"请再此输入新密码确认"},t("newpass2",{rules:[{required:!0}]}))))),d.createElement(x,{className:Me,block:!0,theme:"primary",onClick:()=>{e.form.validateFields((async(e,t)=>{if(!e){if(console.log(t),t.newpass!=t.newpass2)return void o.show("新密码输入不一致");await T("/api/user/modify_pass",{old_pass:t.oldpass,new_pass:t.newpass,new_pass2:t.newpass2}),o.show("修改成功")}}))}},"提交")))}));var Ie="_about_1urnl_1";var We={userinfo:"_userinfo_1wov8_1",item:"_item_1wov8_8",title:"_title_1wov8_12",avatar:"_avatar_1wov8_16",avatarUrl:"_avatar-url_1wov8_20",desc:"_desc_1wov8_26",upload:"_upload_1wov8_32",signature:"_signature_1wov8_35"};const De=[{path:"/",component:()=>{const e=i.exports.useRef(),t=i.exports.useRef(),a=i.exports.useRef(),[n,s]=i.exports.useState(0),[r,c]=i.exports.useState(0),[o,m]=i.exports.useState({}),[p,_]=i.exports.useState(u().format("YYYY-MM")),[E,v]=i.exports.useState(1),[h,y]=i.exports.useState([]),[f,w]=i.exports.useState(0),[x,N]=i.exports.useState(A),[b,k]=i.exports.useState(H);i.exports.useEffect((()=>{S()}),[E,o,p]);const S=async()=>{const{data:e}=await $(`/bill/list?page=${E}&page_size=5&date=${p}&type_id=${o.id||"all"}`);y(1==E?e.list:h.concat(e.list)),s(e.totalExpense.toFixed(2)),c(e.totalIncome.toFixed(2)),w(e.totalPage),k(U),N(K)},C=()=>{N(P),1!=E?v(1):S()};return d.createElement("div",{className:ie.home},d.createElement("div",{className:ie.header},d.createElement("div",{className:ie.dataWrap},d.createElement("span",{className:ie.expense},"总支出: ",d.createElement("b",null,"¥ ",n)),d.createElement("span",{className:ie.income},"总收入: ",d.createElement("b",null,"¥ ",r))),d.createElement("div",{className:ie.typeWrap},d.createElement("div",{className:ie.left,onClick:()=>{e.current&&e.current.show()}},d.createElement("span",{className:ie.title},o.name||"全部类型"," ",d.createElement(l,{className:ie.arrow,type:"arrow-bottom"}))),d.createElement("div",{className:ie.right},d.createElement("span",{className:ie.time,onClick:()=>{t.current&&t.current.show()}},p,d.createElement(l,{className:ie.arrow,type:"arrow-bottom"}))))),d.createElement("div",{className:ie.contentWrap},h.length?d.createElement(g,{animationDuration:200,stayTime:400,refresh:{state:x,handler:C},load:{state:b,distance:200,handler:()=>{E<f&&(k(L),v(E+1))}}},h.map(((e,t)=>d.createElement(G,{bill:e,key:t})))):null),d.createElement("div",{className:ie.add,onClick:()=>{a.current&&a.current.show()}},d.createElement(B,{type:"tianjia"})),d.createElement(le,{ref:e,onSelect:e=>{N(P),v(1),m(e)}}),d.createElement(ce,{ref:t,mode:"month",onSelect:e=>{N(P),v(1),_(e)}}),d.createElement(me,{ref:a,onReload:C}))}},{path:"/data",component:()=>{const e=i.exports.useRef(),[t,a]=i.exports.useState(u().format("YYYY-MM")),[n,s]=i.exports.useState("expense"),[r,c]=i.exports.useState(0),[o,m]=i.exports.useState(0),[p,_]=i.exports.useState([]),[E,h]=i.exports.useState([]),[y,f]=i.exports.useState("expense");i.exports.useEffect((()=>(g(),()=>{})),[t]);const g=async()=>{const{data:e}=await $(`/bill/data?date=${t}`);c(e.total_expense),m(e.total_income);const a=e.total_data.filter((e=>1==e.pay_type)).sort(((e,t)=>t.number-e.number)),n=e.total_data.filter((e=>2==e.pay_type)).sort(((e,t)=>t.number-e.number));_(a),h(n),b("expense"==y?a:n)},x=e=>{s(e)},N=e=>{f(e),b("expense"==e?p:E)},b=e=>{window.echarts&&(de=echarts.init(document.getElementById("proportion")),de.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:e.map((e=>e.type_name))},series:[{name:"支出",type:"pie",radius:"55%",data:e.map((e=>({value:e.number,name:e.type_name}))),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}))};return d.createElement("div",{className:pe.data},d.createElement("div",{className:pe.total},d.createElement("div",{className:pe.time,onClick:()=>{e.current&&e.current.show()}},d.createElement("span",null,t),d.createElement(l,{className:pe.date,type:"date"})),d.createElement("div",{className:pe.title},"共支出"),d.createElement("div",{className:pe.expense},"¥",r),d.createElement("div",{className:pe.income},"共收入¥",o)),d.createElement("div",{className:pe.structure},d.createElement("div",{className:pe.head},d.createElement("span",{className:pe.title},"收支构成"),d.createElement("div",{className:pe.tab},d.createElement("span",{onClick:()=>x("expense"),className:v({[pe.expense]:!0,[pe.active]:"expense"==n})},"支出"),d.createElement("span",{onClick:()=>x("income"),className:v({[pe.income]:!0,[pe.active]:"income"==n})},"收入"))),d.createElement("div",{className:pe.content},("expense"==n?p:E).map((e=>d.createElement("div",{key:e.type_id,className:pe.item},d.createElement("div",{className:pe.left},d.createElement("div",{className:pe.type},d.createElement("span",{className:v({[pe.expense]:"expense"==n,[pe.income]:"income"==n})},d.createElement(B,{type:e.type_id?O[e.type_id].icon:1})),d.createElement("span",{className:pe.name},e.type_name)),d.createElement("div",{className:pe.progress},"¥",Number(e.number).toFixed(2)||0)),d.createElement("div",{className:pe.right},d.createElement("div",{className:pe.percent},d.createElement(w,{shape:"line",percent:Number(e.number/Number("expense"==n?r:o)*100).toFixed(2),theme:"primary"}))))))),d.createElement("div",{className:pe.proportion},d.createElement("div",{className:pe.head},d.createElement("span",{className:pe.title},"收支构成"),d.createElement("div",{className:pe.tab},d.createElement("span",{onClick:()=>N("expense"),className:v({[pe.expense]:!0,[pe.active]:"expense"==y})},"支出"),d.createElement("span",{onClick:()=>N("income"),className:v({[pe.income]:!0,[pe.active]:"income"==y})},"收入"))),d.createElement("div",{id:"proportion"}))),d.createElement(ce,{ref:e,mode:"month",onSelect:e=>{a(e)}}))}},{path:"/user",component:()=>{const e=p(),[t,a]=i.exports.useState({}),[n,s]=i.exports.useState(""),[r,l]=i.exports.useState(!1),[c,m]=i.exports.useState("");i.exports.useEffect((()=>{u()}),[]);const u=async()=>{const{data:e}=await $("/user/get_userinfo");a(e),m(X(e.avatar)),s(e.signature)};return d.createElement("div",{className:_e.user},d.createElement("div",{className:_e.head},d.createElement("div",{className:_e.info},d.createElement("span",null,"昵称：",t.username),d.createElement("span",null,d.createElement("img",{style:{width:30,height:30,verticalAlign:"-10px"},src:"//s.yezgea02.com/1615973630132/geqian.png"}),d.createElement("b",null,t.signature||"暂无内容"))),d.createElement("img",{className:_e.avatar,style:{width:60,height:60,borderRadius:8},src:c,alt:""})),d.createElement("div",{className:_e.content},d.createElement(_,{hasArrow:!0,title:"用户信息修改",onClick:()=>e.push("/userinfo"),icon:d.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/gxqm.png",alt:""})}),d.createElement(_,{hasArrow:!0,title:"重制密码",onClick:()=>e.push("/account"),icon:d.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/zhaq.png",alt:""})}),d.createElement(_,{hasArrow:!0,title:"关于我们",onClick:()=>e.push("/about"),icon:d.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615975178434/lianxi.png",alt:""})})),d.createElement(x,{className:_e.logout,block:!0,theme:"danger",onClick:async()=>{localStorage.removeItem("token"),e.push("/login")}},"退出登录"),d.createElement(N,{visible:r,title:"标题",closable:!0,onCancel:()=>l(!1),footer:d.createElement(x,{block:!0,theme:"primary",onClick:async()=>{const{data:e}=await T("/user/edit_userinfo",{signature:n});a(e),l(!1),o.show("修改成功")}},"确认")},d.createElement(y,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:n,placeholder:"请输入备注信息",onChange:e=>s(e)})))}},{path:"/detail",component:()=>{const e=i.exports.useRef(),t=k(),a=p(),{id:n}=S.parse(t.search),[s,r]=i.exports.useState({});i.exports.useEffect((()=>{l()}),[]);const l=async()=>{const{data:e}=await $(`/bill/detail?id=${n}`);r(e)};return d.createElement("div",{className:ye},d.createElement(he,{title:"账单详情"}),d.createElement("div",{className:fe},d.createElement("div",{className:ge},d.createElement("span",{className:v({[we]:1==s.pay_type,[xe]:2==s.pay_type})},d.createElement(B,{className:Ne,type:s.type_id?O[s.type_id].icon:1})),d.createElement("span",null,s.type_name||"")),1==s.pay_type?d.createElement("div",{className:v(be,we)},"-",s.amount):d.createElement("div",{className:v(be,xe)},"+",s.amount),d.createElement("div",{className:ke},d.createElement("div",{className:Se},d.createElement("span",null,"记录时间"),d.createElement("span",null,u(Number(s.date)).format("YYYY-MM-DD HH:mm"))),d.createElement("div",{className:Ce},d.createElement("span",null,"备注"),d.createElement("span",null,s.remark||"-"))),d.createElement("div",{className:ze},d.createElement("span",{onClick:()=>{N.confirm({title:"删除",content:"确认删除账单？",onOk:async()=>{await T("/bill/delete",{id:n}),o.show("删除成功"),a.goBack()}})}},d.createElement(B,{type:"shanchu"}),"删除"),d.createElement("span",{onClick:()=>{e.current&&e.current.show()}},d.createElement(B,{type:"tianjia"}),"编辑"))),d.createElement(me,{ref:e,detail:s,onReload:l}))}},{path:"/login",component:()=>{const e=i.exports.useRef(),[t,a]=i.exports.useState("login"),[n,s]=i.exports.useState(""),[r,l]=i.exports.useState(""),[c,m]=i.exports.useState(""),[p,u]=i.exports.useState(""),E=i.exports.useCallback((e=>{s(e)}),[]);return i.exports.useEffect((()=>{document.title="login"==t?"登录":"注册"}),[t]),d.createElement("div",{className:je.auth},d.createElement("div",{className:je.head}),d.createElement("div",{className:je.tab},d.createElement("span",{className:v({[je.active]:"login"==t}),onClick:()=>a("login")},"登录"),d.createElement("span",{className:v({[je.active]:"register"==t}),onClick:()=>a("register")},"注册")),d.createElement("div",{className:je.form},d.createElement(_,{icon:d.createElement(B,{type:"zhanghao"})},d.createElement(y,{clearable:!0,type:"text",placeholder:"请输入账号",onChange:e=>l(e)})),d.createElement(_,{icon:d.createElement(B,{type:"mima"})},d.createElement(y,{clearable:!0,type:"password",placeholder:"请输入密码",onChange:e=>m(e)})),"register"==t?d.createElement(_,{icon:d.createElement(B,{type:"mima"})},d.createElement(y,{clearable:!0,type:"text",placeholder:"请输入验证码",onChange:e=>u(e)}),d.createElement(C,{ref:e,charNum:4,onChange:E})):null),d.createElement("div",{className:je.operation},"register"==t?d.createElement("div",{className:je.agree},d.createElement(z,null),d.createElement("label",{className:"text-light"},"阅读并同意 ",d.createElement("a",null,"《掘掘手札条款》"))):null,d.createElement(x,{onClick:async()=>{if(r)if(c)try{if("login"==t){const{data:e}=await T("/user/login",{username:r,password:c});console.log("data",e),localStorage.setItem("token",e.token),window.location.href="/"}else{if(!p)return void o.show("请输入验证码");if(p!=n)return void o.show("验证码错误");const{data:e}=await T("/user/register",{username:r,password:c});o.show("注册成功"),a("login")}}catch(e){o.show(e.msg)}else o.show("请输入密码");else o.show("请输入账号")},block:!0,theme:"primary"},"login"==t?"登录":"注册")))}},{path:"/account",component:Fe},{path:"/about",component:()=>d.createElement(d.Fragment,null,d.createElement(he,{title:"关于我们"}),d.createElement("div",{className:Ie},d.createElement("h2",null,"关于项目"),d.createElement("article",null,"这个项目的初衷，是想让从事前端开发的同学，进入全栈开发的领域。当然，不能说学完本教程你就能胜任任何全栈开发。但至少，你已经可以从设计数据库表开始，把自己的一个想法转化成实际可见的项目。"),d.createElement("h2",null,"关于作者"),d.createElement("article",null,"从 2015 年实习开始至今，有 6 年前端开发经验。虽然没有在大厂呆过，但是正因如此，我深知奋战在中小厂的前端开发在从业 1 到 3 年后，会遇到什么瓶颈，小册中也详细的描述了怎样从初级到中级的进阶之路。"),d.createElement("h2",null,"关于小册"),d.createElement("article",null,"这是一本全栈小册，服务端采用 Node 上层架构 Egg.js，前端采用 React 框架 + Zarm 移动端组件库。本小册致力于让同学们学会服务端的开发流程，从设计数据库到接口的编写，前端的接口数据对接和页面制作，再到线上环境的部署。由于本人用的是 Mac，为了照顾到 Windows 系统的同学，全程关键步骤都会有 Windows 部分的讲解。")))},{path:"/userinfo",component:()=>{const e=p(),[t,a]=i.exports.useState({}),[n,s]=i.exports.useState(""),[r,l]=i.exports.useState(""),m=localStorage.getItem("token");i.exports.useEffect((()=>{_()}),[]);const _=async()=>{const{data:e}=await $("/user/get_userinfo");a(e),s(X(e.avatar)),l(e.signature)};return d.createElement(d.Fragment,null,d.createElement(he,{title:"用户信息"}),d.createElement("div",{className:We.userinfo},d.createElement("h1",null,"个人资料"),d.createElement("div",{className:We.item},d.createElement("div",{className:We.title},"头像"),d.createElement("div",{className:We.avatar},d.createElement("img",{className:We.avatarUrl,src:n,alt:""}),d.createElement("div",{className:We.desc},d.createElement("span",null,"支持 jpg、png、jpeg 格式大小 200KB 以内的图片"),d.createElement(R,{className:We.filePicker,onChange:e=>{if(console.log("file.file",e.file),e&&e.file.size>204800)return void o.show("上传头像不得超过 200 KB !!");let t=new FormData;t.append("file",e.file),c({method:"post",url:"http://127.0.0.1:7001/upload",data:t,headers:{"Content-Type":"multipart/form-data",Authorization:m}}).then((e=>{s(X(e.data))}))},accept:"image/*"},d.createElement(x,{className:We.upload,theme:"primary",size:"sx"},"点击上传"))))),d.createElement("div",{className:We.item},d.createElement("div",{className:We.title},"个性签名"),d.createElement("div",{className:We.signature},d.createElement(y,{clearable:!0,type:"text",value:r,placeholder:"请输入个性签名",onChange:e=>l(e)}))),d.createElement(x,{onClick:async()=>{await T("/user/edit_userinfo",{signature:r,avatar:n}),o.show("修改成功"),e.goBack()},style:{marginTop:50},block:!0,theme:"primary"},"保存")))}}];var qe="_tab_1udd2_1";const Be=({showNav:e})=>{const[t,a]=i.exports.useState("/"),n=p();return d.createElement(Y,{visible:e,className:qe,activeKey:t,onChange:e=>{a(e),n.push(e)}},d.createElement(Y.Item,{itemKey:"/",title:"账单",icon:d.createElement(B,{type:"zhangdan"})}),d.createElement(Y.Item,{itemKey:"/data",title:"统计",icon:d.createElement(B,{type:"tongji"})}),d.createElement(Y.Item,{itemKey:"/user",title:"我的",icon:d.createElement(B,{type:"wode"})}))};function $e(){const e=k(),{pathname:t}=e,a=["/","/data","/user"],[n,s]=i.exports.useState(!1);return i.exports.useEffect((()=>{console.log(t),s(a.includes(t))}),[t]),d.createElement(d.Fragment,null,d.createElement(M,{primaryColor:"#007fff",locale:F},d.createElement(I,null,De.map((e=>d.createElement(W,{exact:!0,key:e.path,path:e.path},d.createElement(e.component,null)))))),d.createElement(Be,{showNav:n}))}Be.propTypes={showNav:m.bool},D.render(d.createElement(d.StrictMode,null,d.createElement(q,null,d.createElement($e,null))),document.getElementById("root"));