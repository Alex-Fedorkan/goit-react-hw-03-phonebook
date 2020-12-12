(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{184:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n.n(c),o=n(70),i=n.n(o),s=(n(81),n(82),n(46)),u=n(8),b=n(2),l=n(3),j=n(6),d=n(7),m=n(186),h=(n(83),Object(c.createContext)()),f=n(16),O=n(34),x=function(t){var e=t.handleFormSubmit;return Object(a.jsx)(f.d,{initialValues:{name:"",number:""},validationSchema:O.a({name:O.b().required("Required"),number:O.b().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("Required")}),onSubmit:e,children:Object(a.jsxs)(f.c,{autoComplete:"off",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)(f.b,{name:"name",type:"text"}),Object(a.jsx)(f.a,{name:"name"}),Object(a.jsx)("label",{htmlFor:"number",children:"Number"}),Object(a.jsx)(f.b,{name:"number",type:"text"}),Object(a.jsx)(f.a,{name:"number"}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})})},p=function(t){var e=t.id,n=t.name,c=t.number;return Object(a.jsxs)("li",{children:[n,": ",c,Object(a.jsx)(h.Consumer,{children:function(t){var n=t.deleteContact;return Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})}})]})},v=function(t){var e=t.contacts;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(a.jsx)(p,{id:e,name:n,number:c},e)}))})},C=function(t){var e=t.value,n=t.handleInputChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})},g=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",deleteContact:function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))}},t.addNewContact=function(e,n){var a=e.name,c=e.number,r=n.setSubmitting,o=n.resetForm;if(t.state.contacts.find((function(t){return t.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts.")),o({name:a,number:c}),void r(!1);t.setState((function(t){var e=[].concat(Object(u.a)(t.contacts),[{id:Object(m.a)(),name:a,number:c}]);return Object(s.a)(Object(s.a)({},t),{},{contacts:e})})),o({name:a,number:c}),r(!1)},t.handleFindInputChange=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(a.jsx)(h.Provider,{value:this.state,children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(x,{handleFormSubmit:this.addNewContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{value:this.filter,handleInputChange:this.handleFindInputChange}),Object(a.jsx)(v,{contacts:this.getVisibleContacts()})]})})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))},82:function(t,e,n){},83:function(t,e,n){}},[[184,1,2]]]);
//# sourceMappingURL=main.5aa48a4e.chunk.js.map