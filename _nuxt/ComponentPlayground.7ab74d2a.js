import{u as m}from"./asyncData.2cc2dc0e.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.f3c339a1.js";import f from"./Ellipsis.71c9f60a.js";import _ from"./ComponentPlaygroundData.10f2c2c2.js";import"./TabsHeader.96603378.js";import"./ComponentPlaygroundProps.d3f716f4.js";import"./ProseH4.9934d4ab.js";import"./ProseCodeInline.05499491.js";import"./Badge.4fbdf2ec.js";import"./MDCSlot.04f8f9e7.js";import"./slot.b04732a0.js";import"./ProseP.7fa7461e.js";import"./index.3a4c1947.js";import"./ComponentPlaygroundSlots.vue.9f39c812.js";import"./ComponentPlaygroundTokens.vue.37368544.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-2515e4cc"]]);export{V as default};
