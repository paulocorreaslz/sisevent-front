(function(e){function t(t){for(var r,n,i=t[0],c=t[1],u=t[2],m=0,d=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var r={},a={app:0},o=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("Menu"),s("router-view")],1)},o=[],n={name:"app",msg:"",data:function(){return{msg:""}}},i=n,c=s("2877"),u=Object(c["a"])(i,a,o,!1,null,null,null),l=u.exports,m=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mx-auto list"},[s("Message"),s("p",{on:{click:e.printPdf}},[s("a",{attrs:{href:"#"}},[e._v(" Imprimir ")])]),s("div",{staticClass:"table"},[s("div",{staticClass:"tr"},[s("div",{staticClass:"td"},[s("h4",[e._v("Lista de Clientes")]),s("ul",e._l(e.customers,function(t,r){return s("li",{key:r},[s("router-link",{attrs:{to:{name:"customer-details",params:{customer:t,id:t.id}}}},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t\t")])],1)}),0)]),s("div",{staticClass:"td"},[s("router-view",{on:{refreshData:e.refreshList}})],1)])])],1)},p=[],v=s("bc3a"),f=s.n(v),g=f.a.create({baseURL:"http://localhost:8800/api"}),h={name:"customers-list",props:["msgalert"],data:function(){return{customers:[],messageList:""}},methods:{retrieveCustomers:function(){var e=this,t={headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,PATCH,POST,DELETE","Content-Type":"application/json"}};g.get("/customers",t).then(function(t){e.customers=t.data,console.log(t.data),console.log("apos get customers"),e.messageList=e.$route.params.message,console.log(e.messageList)}).catch(function(e){console.log(e),alert(e)})},refreshList:function(){this.retrieveCustomers()},printPdf:function(){g.get("/getCustomerReport",{responseType:"arraybuffer",headers:{"Content-Type":"application/json",Accept:"application/pdf"}}).then(function(e){var t=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=t,s.setAttribute("download","file.pdf"),document.body.appendChild(s),s.click()}).catch(function(e){console.log(e),alert(e)})}},mounted:function(){this.retrieveCustomers()},watch:{$route:function(e,t){this.retrieveCustomers(),this.refreshList()}}},b=h,C=Object(c["a"])(b,d,p,!1,null,null,null),_=C.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"submitform"},[e.submitted?s("div",[s("h4",[e._v(" Cliente cadastrado!")]),s("button",{staticClass:"btn btn-success",on:{click:e.newCustomer}},[e._v("Add")])]):s("div",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[e._v("Nome")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.name,expression:"customer.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",required:"",name:"name"},domProps:{value:e.customer.name},on:{input:function(t){t.target.composing||e.$set(e.customer,"name",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"age"}},[e._v("Idade")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.age,expression:"customer.age"}],staticClass:"form-control",attrs:{type:"number",id:"age",required:"",name:"age"},domProps:{value:e.customer.age},on:{input:function(t){t.target.composing||e.$set(e.customer,"age",t.target.value)}}})]),s("button",{staticClass:"btn btn-success",on:{click:e.saveCustomer}},[e._v("Submit")])])])},w=[],O=(s("7f7f"),{name:"add-customer",data:function(){return{customer:{id:0,name:"",age:0,active:!1,address:{id:0,street:"",placenumber:0,postalcode:""}},submitted:!1}},methods:{saveCustomer:function(){var e=this,t={name:this.customer.name,age:this.customer.age};g.post("/customer",t).then(function(t){e.customer.id=t.data.id,e.customer=t.data.customer,console.log(t.data)}).catch(function(e){console.log(e)}),this.submitted=!0},newCustomer:function(){this.submitted=!1,this.customer={}}}}),P=O,j=Object(c["a"])(P,y,w,!1,null,null,null),x=j.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchform"},[s("h4",[e._v("Localizar por idade")]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],staticClass:"form-control",attrs:{type:"number",id:"age",required:"",name:"age"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})]),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-success",on:{click:e.searchCustomersAge}},[e._v("Search")])]),s("br"),s("h4",[e._v("Localizar por nome")]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",required:"",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-success",on:{click:e.searchCustomersName}},[e._v("Search")])]),s("ul",{staticClass:"search-result"},[0==e.verifyTotal()?s("div",[s("li",[e._v(" Nenhum! ")])]):s("div",e._l(e.customers,function(t,r){return s("li",{key:r},[s("h6",[e._v(e._s(t.name)+" (idade: "+e._s(t.age)+")")])])}),0)])])},A=[],k={name:"search-customer",data:function(){return{age:0,name:"",customers:[],totalCustomers:0}},methods:{verifyTotal:function(){return 0==this.customers.length?this.totalCustomers=0:this.totalCustomers=this.customers.length},searchCustomersAge:function(){var e=this;g.get("/customers/age/"+this.age).then(function(t){e.customers=t.data,console.log(t.data),e.verifyTotal()}).catch(function(e){console.log(e)})},searchCustomersName:function(){var e=this;g.get("/customers/name/"+this.name).then(function(t){e.customers=t.data,console.log(t.data),e.verifyTotal()}).catch(function(e){console.log(e)})}},watch:{}},N=k,E=Object(c["a"])(N,$,A,!1,null,null,null),S=E.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list"},[this.customer?s("div",[s("h4",[e._v("Cliente")]),s("div",[s("label",[e._v("Nome: ")]),e._v(" "+e._s(this.customer.name)+"\n    ")]),s("div",[s("label",[e._v("Idade: ")]),e._v(" "+e._s(this.customer.age)+"\n    ")]),s("div",[s("label",[e._v("Ativo: ")]),e._v(" "+e._s(this.customer.active)+"\n    ")]),this.customer.active?s("button",{staticClass:"button btn-primary",on:{click:function(t){return e.updateActive(!1)}}},[e._v("Inactive")]):s("button",{staticClass:"button btn-primary",on:{click:function(t){return e.updateActive(!0)}}},[e._v("Active")]),s("button",{staticClass:"button btn-danger",on:{click:function(t){return e.deleteCustomer()}}},[e._v("Delete")]),s("p"),s("div",{staticClass:"submitform"},[null!=e.customer.address?s("div",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[e._v("Rua")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.customer.address.street,expression:"customer.address.street",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"street",required:"",name:"street"},domProps:{value:e.customer.address.street},on:{input:function(t){t.target.composing||e.$set(e.customer.address,"street",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"age"}},[e._v("Numero")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.customer.address.placenumber,expression:"customer.address.placenumber",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"number",id:"placenumber",required:"",name:"placenumber"},domProps:{value:e.customer.address.placenumber},on:{input:function(t){t.target.composing||e.$set(e.customer.address,"placenumber",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"age"}},[e._v("Codigo postal")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.customer.address.postalcode,expression:"customer.address.postalcode",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"number",id:"postalcode",required:"",name:"postalcode"},domProps:{value:e.customer.address.postalcode},on:{input:function(t){t.target.composing||e.$set(e.customer.address,"postalcode",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("button",{staticClass:"btn btn-success",on:{click:e.addAddress}},[e._v("Salvar")])]):s("div",[s("h4",[e._v(" Cadastrar Endereço:")]),s("div",{staticClass:"submitform"},[e.submittedAddress?s("div",[s("h4",[e._v(" Nenhum endereço!")])]):s("div",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[e._v("Rua")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.street,expression:"address.street"}],staticClass:"form-control",attrs:{type:"text",id:"street",required:"",name:"street"},domProps:{value:e.address.street},on:{input:function(t){t.target.composing||e.$set(e.address,"street",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"age"}},[e._v("Numero")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.placenumber,expression:"address.placenumber"}],staticClass:"form-control",attrs:{type:"number",id:"placenumber",required:"",name:"placenumber"},domProps:{value:e.address.placenumber},on:{input:function(t){t.target.composing||e.$set(e.address,"placenumber",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"age"}},[e._v("Código postal")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.postalcode,expression:"address.postalcode"}],staticClass:"form-control",attrs:{type:"number",id:"postalcode",required:"",name:"postalcode"},domProps:{value:e.address.postalcode},on:{input:function(t){t.target.composing||e.$set(e.address,"postalcode",t.target.value)}}})]),s("button",{staticClass:"btn btn-success",on:{click:e.addAddress}},[e._v("Salvar")])])])])])]):s("div",[s("br"),s("p",[e._v("Selecione um cliente...")])])])},L=[],M=(s("8e6e"),s("ac6a"),s("456d"),s("bd86"));s("3e8f");function q(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function D(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?q(s,!0).forEach(function(t){Object(M["a"])(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):q(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}var U={name:"customer",props:["customer"],data:function(){return{messagelocal:"",submittedAddress:!1,newcustomer:{id:0,name:"",age:0,address:{street:"",placenumber:0,postalcode:0}},address:{street:"",placenumber:0,postalcode:0}}},methods:{setMessage:function(e){this.messagelocal=e.target.value,this.$emit("messageChanged",this.messagelocal)},updateActive:function(e){var t=this,s={id:this.customer.id,name:this.customer.name,age:this.customer.age,active:e,address:this.customer.address};g.put("/customer/"+this.customer.id,s).then(function(e){t.customer.active=e.data.active,console.log(e.data)}).catch(function(e){console.log(e)})},deleteCustomer:function(){var e=this;g.delete("/customer/"+this.customer.id).then(function(t){console.log(t.data),e.$emit("refreshData"),e.mensagem="Usuario deletado!",console.log(e.mensagem),e.$router.push({name:"customers",params:{message:e.mensagem}})}).catch(function(e){console.log(e)})},addAddress:function(){var e=this;this.newcustomer.address=D({},this.address);var t=D({},this.newcustomer);console.log(t),g.post("/address",t).then(function(t){e.mensagem="Endereço cadastrado!",console.log(e.mensagem),e.$router.push({name:"customers",params:{message:e.mensagem}}),console.log(t.data)}).catch(function(e){console.log(e)}),this.submittedAddress=!0},newAddress:function(){this.submittedAddress=!1,this.customer={}}},mounted:function(){this.newcustomer=D({},this.customer)},watch:{customer:function(e,t){console.log("alterou customer:"),console.log(e),console.log(t),this.newcustomer=D({},this.customer)}}},R=U,I=Object(c["a"])(R,T,L,!1,null,null,null),B=I.exports;r["a"].use(m["a"]);var z=new m["a"]({mode:"history",routes:[{path:"/",name:"customers",alias:"/customer",component:_,children:[{path:"/customer/:id",name:"customer-details",component:B,props:!0}]},{path:"/add",name:"add",component:x},{path:"/search",name:"search",component:S}]}),J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mx-auto list"},[e._m(0),s("nav",{staticClass:"navbar navbar-light",staticStyle:{"background-color":"#e3f2fd"}},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[e._v("Clientes")]),s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/add"}},[e._v("Adicionar")]),s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/search"}},[e._v("Buscar")])],1),s("br")])},V=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"site-info"},[s("h1",[e._v("Aplicação")]),s("h3",[e._v("Vue - Spring Boot MVC")])])}],G={name:"Menu",data:function(){return{mensagem:""}}},H=G,F=Object(c["a"])(H,J,V,!1,null,null,null),K=F.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return""!=e.mensagem?s("div",{staticClass:"alert alert-success",attrs:{msgalert:e.mensagem,role:"alert"},on:{messageChanged:function(t){e.mensagem=t}}},[e._v("\n\t"+e._s(e.mensagem)+"\n")]):e._e()},W=[],X={name:"Message",data:function(){return{mensagem:""}}},Y=X,Z=Object(c["a"])(Y,Q,W,!1,null,null,null),ee=Z.exports;r["a"].component("Menu",K),r["a"].component("Message",ee),r["a"].config.productionTip=!1,new r["a"]({router:z,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.b1ea66d4.js.map