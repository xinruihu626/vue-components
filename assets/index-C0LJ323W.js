import{d,r as p,f as v,u as n,b as m,o as u}from"./index-DmvcB-pk.js";const k=d({__name:"index",setup(_){let a=p([{title:"购物",start:"2025-08-01 08:00",end:"2025-08-01 12:00",editable:!0},{title:"敲代码",start:"2025-08-02 08:00",end:"2025-08-02 12:00"}]),r=e=>{a.value.push({start:e.dateStr+" 12:00",end:e.dateStr+" 18:00",title:"学习"})},o=e=>{console.log(e)},s=e=>{let l=document.createElement("div"),t=e.timeText.split("-"),c=t[0].replace("上午","").replace("下午","").replace("时",""),i=t[1].replace("上午","").replace("下午","").replace("时","");return l.innerHTML=`
                    <img src="src/assets/logo.png" style="width: 30px; height: 30px">
                    <div>开始时间: ${c}</div>
                    <div>开始时间: ${i}</div>
                    <div>标题: ${e.event._def.title}</div>
                `,{domNodes:[l]}};return(e,l)=>{const t=m("m-calendar");return u(),v(t,{events:n(a),onDateClick:n(r),onEventClick:n(o),displayEventEnd:"",eventContent:n(s)},null,8,["events","onDateClick","onEventClick","eventContent"])}}});export{k as default};
