(this["webpackJsonplearning-diary"]=this["webpackJsonplearning-diary"]||[]).push([[0],{38:function(e,t){},39:function(e,t,n){e.exports=n(70)},45:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),c=n.n(l),u=n(10),o=n(11),i=n(14),s=n(13),m=(n(44),n(15)),d=n(2),p=(n(45),n(3)),h=n(12),b=n(8),v=n.n(b),f=n(16),C=n(35),g=n.n(C).a.create({baseURL:"http://localhost:4200/api",headers:{"Content-type":"application/json"}}),E=new(function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return g.get("/columns")}},{key:"get",value:function(e){return g.get("/columns/".concat(e))}},{key:"create",value:function(e){return g.post("/columns",e)}},{key:"update",value:function(e,t){return g.put("/columns/".concat(e),t)}},{key:"delete",value:function(e){return g.delete("/columns/".concat(e))}},{key:"deleteAll",value:function(){return g.delete("/columns")}},{key:"findByTitle",value:function(e){return g.get("/columns?title=".concat(e))}}]),e}()),y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeTitle=a.onChangeTitle.bind(Object(p.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(p.a)(a)),a.saveColumn=a.saveColumn.bind(Object(p.a)(a)),a.newColumn=a.newColumn.bind(Object(p.a)(a)),a.state={id:null,title:"",description:"",published:!1,submitted:!1},a}return Object(o.a)(n,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"saveColumn",value:function(){var e=this,t=this.state,n=t.title,a=t.description;this.props.createColumn(n,a).then((function(t){e.setState({id:t.id,title:t.title,description:t.description,published:t.published,submitted:!0}),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"newColumn",value:function(){this.setState({id:null,title:"",description:"",published:!1,submitted:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"submit-form"},this.state.submitted?r.a.createElement("div",null,r.a.createElement("h4",null,"You submitted successfully!"),r.a.createElement("button",{className:"btn btn-success",onClick:this.newColumn},"Add")):r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.title,onChange:this.onChangeTitle,name:"title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.description,onChange:this.onChangeDescription,name:"description"})),r.a.createElement("button",{onClick:this.saveColumn,className:"btn btn-success"},"Submit")))}}]),n}(a.Component),O=Object(h.b)(null,{createColumn:function(e,t){return function(){var n=Object(f.a)(v.a.mark((function n(a){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.create({title:e,description:t});case 3:return r=n.sent,a({type:"CREATE_COLUMN",payload:r.data}),n.abrupt("return",Promise.resolve(r.data));case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}})(y),j=n(17),k=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeTitle=a.onChangeTitle.bind(Object(p.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(p.a)(a)),a.getColumn=a.getColumn.bind(Object(p.a)(a)),a.updateStatus=a.updateStatus.bind(Object(p.a)(a)),a.updateContent=a.updateContent.bind(Object(p.a)(a)),a.removeColumn=a.removeColumn.bind(Object(p.a)(a)),a.state={currentColumn:{id:null,title:"",description:"",published:!1},message:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getColumn(this.props.match.params.id)}},{key:"onChangeTitle",value:function(e){var t=e.target.value;this.setState((function(e){return{currentColumn:Object(j.a)(Object(j.a)({},e.currentColumn),{},{title:t})}}))}},{key:"onChangeDescription",value:function(e){var t=e.target.value;this.setState((function(e){return{currentColumn:Object(j.a)(Object(j.a)({},e.currentColumn),{},{description:t})}}))}},{key:"getColumn",value:function(e){var t=this;E.get(e).then((function(e){t.setState({currentColumn:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updateStatus",value:function(e){var t=this,n={id:this.state.currentColumn.id,title:this.state.currentColumn.title,description:this.state.currentColumn.description,published:e};this.props.updateColumn(this.state.currentColumn.id,n).then((function(n){console.log(n),t.setState((function(t){return{currentColumn:Object(j.a)(Object(j.a)({},t.currentColumn),{},{published:e})}})),t.setState({message:"The status was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"updateContent",value:function(){var e=this;this.props.updateColumn(this.state.currentColumn.id,this.state.currentColumn).then((function(t){console.log(t),e.setState({message:"The column was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"removeColumn",value:function(){var e=this;this.props.deleteColumn(this.state.currentColumn.id).then((function(){e.props.history.push("/columns")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.currentColumn;return r.a.createElement("div",null,t?r.a.createElement("div",{className:"edit-form"},r.a.createElement("h4",null,"Column"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:t.title,onChange:this.onChangeTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{type:"text",className:"form-control",id:"description",value:t.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("strong",null,"Status:")),t.published?"Published":"Pending")),t.published?r.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updateStatus(!1)}},"UnPublish"):r.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updateStatus(!0)}},"Publish"),r.a.createElement("button",{className:"badge badge-danger mr-2",onClick:this.removeColumn},"Delete"),r.a.createElement("button",{type:"submit",className:"badge badge-success",onClick:this.updateContent},"Update"),r.a.createElement("p",null,this.state.message)):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"Please click on a Column...")))}}]),n}(a.Component),N=Object(h.b)(null,{updateColumn:function(e,t){return function(){var n=Object(f.a)(v.a.mark((function n(a){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.update(e,t);case 3:return r=n.sent,a({type:"UPDATE_COLUMN",payload:t}),n.abrupt("return",Promise.resolve(r.data));case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},deleteColumn:function(e){return function(){var t=Object(f.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.delete(e);case 3:n({type:"DELETE_COLUMN",payload:{id:e}}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})(k),T=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeSearchTitle=a.onChangeSearchTitle.bind(Object(p.a)(a)),a.refreshData=a.refreshData.bind(Object(p.a)(a)),a.setActiveColumn=a.setActiveColumn.bind(Object(p.a)(a)),a.findByTitle=a.findByTitle.bind(Object(p.a)(a)),a.removeAllColumns=a.removeAllColumns.bind(Object(p.a)(a)),a.state={currentColumn:null,currentIndex:-1,searchTitle:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.retrieveColumns()}},{key:"onChangeSearchTitle",value:function(e){var t=e.target.value;this.setState({searchTitle:t})}},{key:"refreshData",value:function(){this.setState({currentColumn:null,currentIndex:-1})}},{key:"setActiveColumn",value:function(e,t){this.setState({currentColumn:e,currentIndex:t})}},{key:"removeAllColumns",value:function(){var e=this;this.props.deleteAllColumns().then((function(t){console.log(t),e.refreshData()})).catch((function(e){console.log(e)}))}},{key:"findByTitle",value:function(){this.refreshData(),this.props.findColumnsByTitle(this.state.searchTitle)}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTitle,a=t.currentColumn,l=t.currentIndex,c=this.props.columns;return r.a.createElement("div",{className:"list row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by title",value:n,onChange:this.onChangeSearchTitle}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.findByTitle},"Search")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"Columns List"),r.a.createElement("ul",{className:"list-group"},c&&c.map((function(t,n){return r.a.createElement("li",{className:"list-group-item "+(n===l?"active":""),onClick:function(){return e.setActiveColumn(t,n)},key:n},t.title)}))),r.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllColumns},"Remove All")),r.a.createElement("div",{className:"col-md-6"},a?r.a.createElement("div",null,r.a.createElement("h4",null,"Column"),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("strong",null,"Title:"))," ",a.title),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("strong",null,"Description:"))," ",a.description),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("strong",null,"Status:"))," ",a.published?"Published":"Pending"),r.a.createElement(m.b,{to:"/columns/"+a.id,className:"badge badge-warning"},"Edit")):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"Please click on a Column..."))))}}]),n}(a.Component),S=Object(h.b)((function(e){return{columns:e.columns}}),{retrieveColumns:function(){return function(){var e=Object(f.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.getAll();case 3:n=e.sent,t({type:"RETRIEVE_COLUMNS",payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},findColumnsByTitle:function(e){return function(){var t=Object(f.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.findByTitle(e);case 3:a=t.sent,n({type:"RETRIEVE_COLUMNS",payload:a.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},deleteAllColumns:function(){return function(){var e=Object(f.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.deleteAll();case 3:return n=e.sent,t({type:"DELETE_ALL_COLUMNS",payload:n.data}),e.abrupt("return",Promise.resolve(n.data));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})(T),x=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement(m.b,{to:"/columns",className:"navbar-brand"},"Learning-Diary"),r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/columns",className:"nav-link"},"Columns")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/add",className:"nav-link"},"Add")))),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:["/","/columns"],component:S}),r.a.createElement(d.a,{exact:!0,path:"/add",component:O}),r.a.createElement(d.a,{path:"/columns/:id",component:N}))))}}]),n}(a.Component),w=n(19),D=n(36),A=n(37),P=n(38),L=n.n(P),U=Object(w.combineReducers)({columns:L.a}),B=[A.a],M=Object(w.createStore)(U,{},Object(D.composeWithDevTools)(w.applyMiddleware.apply(void 0,B)));c.a.render(r.a.createElement(h.a,{store:M},r.a.createElement(x,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e3259cbf.chunk.js.map