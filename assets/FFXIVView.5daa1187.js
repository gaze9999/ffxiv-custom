import{d as f,o as w,w as V,r as v,c as F,a as p,b as g,e as o,V as T,f as y,g as x,u as r,F as D,h as I,i as l,t as u,j as _,k,l as j,m as B,n as L,_ as S}from"./index.3bebea9b.js";const X=async(i="jp")=>{const a=await fetch(`https://lodestonenews.com/news/topics?locale=${i}`,{method:"GET",headers:new Headers({Accept:"application/json"})});if(!a.ok)throw new Error(a.statusText);return await a.json()},$={class:"mr-3"},b=["href"],E={class:"topic_detail"},N=["src","alt"],A=f({__name:"FFXIVView",props:{locale:null},setup(i){const a=i;w(()=>m()),V(()=>a.locale,()=>m());let d=v([]);const m=()=>X(a.locale).then(t=>{d.value=t}),s=F(()=>d.value?d.value.map(t=>{const e=new Date(new Date(t.time).getTime()-36e5);return{...t,timeStamp:`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate().toString().length===1?"0"+e.getDate():e.getDate()}`}}).sort((t,e)=>new Date(t.time).getTime()-new Date(e.time).getTime()).reverse():[{description:"none",id:"none",image:"none",time:"none",title:"none",url:"none"}]);return(t,e)=>(p(),g(T,{density:"compact"},{default:o(()=>[(p(!0),y(D,null,x(r(s),(n,c)=>(p(),g(I,{key:c,value:n,"active-color":"primary"},{prepend:o(()=>[l("p",$,u(n.timeStamp),1)]),default:o(()=>[_(L,null,{default:o(()=>[_(k,null,{default:o(({isHovering:h})=>[l("a",{href:n.url,target:"_blank",class:"text-primary"},u(n.title),9,b),_(j,{"model-value":h,activator:"parent","location-strategy":"connected",location:"bottom start"},{default:o(()=>[l("div",E,[l("img",{src:r(s)[c].image,alt:r(s)[c].id},null,8,N),B(" "+u(r(s)[c].description),1)])]),_:2},1032,["model-value"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}))}});const H=S(A,[["__scopeId","data-v-d88ca857"]]);export{H as default};
