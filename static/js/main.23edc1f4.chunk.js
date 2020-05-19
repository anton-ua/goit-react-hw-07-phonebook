(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{32:function(t,e,n){t.exports={container:"App_container__3twmq"}},34:function(t,e,n){t.exports={buttonAdd:"AddContact_buttonAdd__2G28W"}},35:function(t,e,n){t.exports={enter:"TransitionLogo_enter__1tqM8",enterActive:"TransitionLogo_enterActive__3n2nV",exit:"TransitionLogo_exit__LTW0B",exitActive:"TransitionLogo_exitActive__1nRB_"}},36:function(t,e,n){t.exports={enter:"TransitionListItem_enter__2QprP",enterActive:"TransitionListItem_enterActive__3Su1q",exit:"TransitionListItem_exit__2Dca_",exitActive:"TransitionListItem_exitActive__2Ai0I"}},37:function(t,e,n){t.exports={button:"ContactsItem_button__2N-o9"}},38:function(t,e,n){t.exports={enter:"TransitionFilter_enter__2_ISb",enterActive:"TransitionFilter_enterActive__2pAPJ",exit:"TransitionFilter_exit__t3lk9",exitActive:"TransitionFilter_exitActive__1NwB_"}},42:function(t,e,n){t.exports=n(69)},69:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(8),i=n.n(o),u=n(14),l=n(15),s=n(16),m=n(17),b=n(32),f=n.n(b),_=n(5),d=n(7),p=n(12),O=n(34),T=n.n(O),h=n(70),E=n(35),C=n.n(E),A={name:"",number:""},v=function(t){Object(m.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contactToAdd:Object(p.a)({},A),isLogo:!1},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState((function(t){var e=t.contactToAdd;return{contactToAdd:Object(p.a)({},e,Object(d.a)({},a,c))}}))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.contactToAdd,a=n.name,c=n.number;a&&c&&(t.props.contacts.some((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contact")):(t.props.postContact(Object(p.a)({},t.state.contactToAdd)),t.reset()))},t.reset=function(){t.setState({contactToAdd:Object(p.a)({},A)})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({isLogo:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{in:this.state.isLogo,classNames:C.a,timeout:500,unmountOnExit:!0},r.a.createElement("h2",null,"Phonebook")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{name:"name"},"Name",r.a.createElement("input",{type:"text",placeholder:"Enter name",name:"name",value:this.state.contactToAdd.name,onChange:this.handleChange})),r.a.createElement("label",{name:"number"},"Number",r.a.createElement("input",{type:"text",placeholder:"Enter phone number",name:"number",value:this.state.contactToAdd.number,onChange:this.handleChange})),r.a.createElement("button",{className:T.a.buttonAdd,type:"submit"},"Add Contact")))}}]),n}(c.Component),j=n(18),S=n.n(j),x=n(1),g="FILTER_CONTACT",y="GET_CONTACTS_START",L="GET_CONTACTS_SUCCES",N="GET_CONTACTS_ERROR",R="POST_CONTACT_START",k="POST_CONTACT_SUCCESS",w="POST_CONTACT_ERROR",F="DELETE_CONTACT_START",I="DELETE_CONTACT_SUCESS",D="DELETE_CONTACT_ERROR",P=Object(x.a)(g),B=Object(x.a)(y),G=Object(x.a)(L),M=Object(x.a)(N),q=Object(x.a)(R),J=Object(x.a)(k),U=Object(x.a)(w),W=Object(x.a)(F),Q=Object(x.a)(I),V=Object(x.a)(D),X=function(t){return t.contacts},z=function(t){return t.filter},H=Object(_.b)((function(t){return{contacts:X(t)}}),(function(t){return{postContact:function(e){return t(function(t){return function(e){e(q()),S.a.post("http://localhost:8686/contacts",t).then((function(t){var n=t.data;return e(J(n))})).catch((function(t){return e(U(t))}))}}(e))}}}))(v),K=n(71),Y=n(36),Z=n.n(Y),$=n(37),tt=n.n($),et=function(t){var e=t.name,n=t.number,a=t.id,c=t.deleteContact;return r.a.createElement("li",null,r.a.createElement("p",null,e,": ",r.a.createElement("span",null,n),r.a.createElement("button",{type:"button",onClick:function(){return c(a)},className:tt.a.button},"X")))},nt=Object(_.b)(null,(function(t){return{deleteContact:function(e){return t(function(t){return function(e){e(W()),S.a.delete("http://localhost:8686/contacts/".concat(t)).then((function(){return e(Q(t))})).catch((function(t){return e(V(t))}))}}(e))}}}))(et),at=function(t){var e=t.contacts,n=t.filter,a=n?function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n):e;return r.a.createElement(K.a,{component:"ul"},a.map((function(t){var e=t.name,n=t.number,a=t.id;return r.a.createElement(h.a,{timeout:250,unmountOnExit:!0,key:a,classNames:Z.a},r.a.createElement(nt,{name:e,number:n,id:a}))})))},ct=Object(_.b)((function(t){return{contacts:X(t),filter:z(t)}}))(at),rt=n(38),ot=n.n(rt),it=function(t){var e=t.contacts,n=t.filter,a=t.handleFilter;return r.a.createElement(h.a,{classNames:ot.a,timeout:250,unmountOnExit:!0,in:e.length>1},r.a.createElement("div",null,r.a.createElement("p",null,"Find contact by name:"),r.a.createElement("input",{placeholder:"Find...",value:n,onChange:function(t){return a(t.target.value)}})))},ut=Object(_.b)((function(t){return{contacts:X(t),filter:z(t)}}),(function(t){return{handleFilter:function(e){return t(P(e))}}}))(it),lt=function(t){Object(m.a)(n,t);var e=Object(s.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return r.a.createElement("div",{className:f.a.container},r.a.createElement(H,null),r.a.createElement(ut,null),r.a.createElement(ct,null))}}]),n}(c.Component),st={fetchContacts:function(){return function(t){t(B()),S.a.get("http://localhost:8686/contacts").then((function(e){var n=e.data;return t(G(n))})).catch((function(e){return t(M(e))}))}}},mt=Object(_.b)(null,st)(lt),bt=n(6),ft=n(40),_t=Object(x.b)([],(a={},Object(d.a)(a,L,(function(t,e){return e.payload})),Object(d.a)(a,k,(function(t,e){var n=e.payload;return[].concat(Object(ft.a)(t),[n])})),Object(d.a)(a,I,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),dt=Object(x.b)("",Object(d.a)({},g,(function(t,e){return e.payload}))),pt=Object(bt.combineReducers)({contacts:_t,filter:dt}),Ot=n(39),Tt=n(11),ht=Object(bt.applyMiddleware)(Tt.a),Et=Object(bt.createStore)(pt,Object(Ot.composeWithDevTools)(ht));i.a.render(r.a.createElement(_.a,{store:Et},r.a.createElement(mt,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.23edc1f4.chunk.js.map