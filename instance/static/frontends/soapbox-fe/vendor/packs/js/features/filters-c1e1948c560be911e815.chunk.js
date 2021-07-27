(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{674:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return k});var i,s,l,r=a(0),n=a(2),o=a(6),d=a(1),c=(a(3),a(8)),h=a(9),f=a(32),b=a(29),u=a(13),m=a(4),_=a.n(m),p=a(227),g=a(127),j=a(228),O=a(53),v=a(62),w=a(50),M=a(10),x=a(583),C=Object(h.c)({heading:{id:"column.filters",defaultMessage:"Muted words"},subheading_add_new:{id:"column.filters.subheading_add_new",defaultMessage:"Add New Filter"},keyword:{id:"column.filters.keyword",defaultMessage:"Keyword or phrase"},expires:{id:"column.filters.expires",defaultMessage:"Expire after"},expires_hint:{id:"column.filters.expires_hint",defaultMessage:"Expiration dates are not currently supported"},home_timeline:{id:"column.filters.home_timeline",defaultMessage:"Home timeline"},public_timeline:{id:"column.filters.public_timeline",defaultMessage:"Public timeline"},notifications:{id:"column.filters.notifications",defaultMessage:"Notifications"},conversations:{id:"column.filters.conversations",defaultMessage:"Conversations"},drop_header:{id:"column.filters.drop_header",defaultMessage:"Drop instead of hide"},drop_hint:{id:"column.filters.drop_hint",defaultMessage:"Filtered posts will disappear irreversibly, even if filter is later removed"},whole_word_header:{id:"column.filters.whole_word_header",defaultMessage:"Whole word"},whole_word_hint:{id:"column.filters.whole_word_hint",defaultMessage:"When the keyword or phrase is alphanumeric only, it will only be applied if it matches the whole word"},add_new:{id:"column.filters.add_new",defaultMessage:"Add New Filter"},create_error:{id:"column.filters.create_error",defaultMessage:"Error adding filter"},delete_error:{id:"column.filters.delete_error",defaultMessage:"Error deleting filter"},subheading_filters:{id:"column.filters.subheading_filters",defaultMessage:"Current Filters"},delete:{id:"column.filters.delete",defaultMessage:"Delete"}}),N={null:"Never"},k=Object(c.connect)(function(e){return{filters:e.get("filters")}})(i=Object(f.c)((l=s=function(i){function e(){for(var m,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return m=i.call.apply(i,[this].concat(t))||this,Object(d.a)(Object(n.a)(m),"state",{phrase:"",expires_at:"",home_timeline:!0,public_timeline:!1,notifications:!1,conversations:!1,irreversible:!1,whole_word:!0}),Object(d.a)(Object(n.a)(m),"handleInputChange",function(e){var t;m.setState(((t={})[e.target.name]=e.target.value,t))}),Object(d.a)(Object(n.a)(m),"handleSelectChange",function(e){var t;m.setState(((t={})[e.target.name]=e.target.value,t))}),Object(d.a)(Object(n.a)(m),"handleCheckboxChange",function(e){var t;m.setState(((t={})[e.target.name]=e.target.checked,t))}),Object(d.a)(Object(n.a)(m),"handleAddNew",function(e){e.preventDefault();var t=m.props,a=t.intl,i=t.dispatch,s=m.state,l=s.phrase,r=s.whole_word,n=s.expires_at,o=s.irreversible,d=m.state,c=d.home_timeline,h=d.public_timeline,f=d.notifications,b=d.conversations,u=[];c&&u.push("home"),h&&u.push("public"),f&&u.push("notifications"),b&&u.push("thread"),i(Object(g.b)(l,n,u,r,o)).then(function(e){return i(Object(g.d)())}).catch(function(e){i(w.a.error(a.formatMessage(C.create_error)))})}),Object(d.a)(Object(n.a)(m),"handleFilterDelete",function(e){var t=m.props,a=t.intl,i=t.dispatch;i(Object(g.c)(e.currentTarget.dataset.value)).then(function(e){return i(Object(g.d)())}).catch(function(e){i(w.a.error(a.formatMessage(C.delete_error)))})}),m}Object(o.a)(e,i);var t=e.prototype;return t.componentDidMount=function(){this.props.dispatch(Object(g.d)())},t.render=function(){var a=this,e=this.props,i=e.intl,t=e.filters,s=Object(r.a)(b.a,{id:"empty_column.filters",defaultMessage:"You haven't created any muted words yet."});return Object(r.a)(p.a,{className:"filter-settings-panel",icon:"filter",heading:i.formatMessage(C.heading),backBtnSlim:!0},void 0,Object(r.a)(x.a,{text:i.formatMessage(C.subheading_add_new)}),Object(r.a)(v.i,{},void 0,Object(r.a)("div",{className:"filter-settings-panel"},void 0,Object(r.a)("fieldset",{disabled:!1},void 0,Object(r.a)(v.b,{},void 0,Object(r.a)("div",{className:"two-col"},void 0,Object(r.a)(v.j,{label:i.formatMessage(C.keyword),required:!0,type:"text",name:"phrase",onChange:this.handleInputChange}),Object(r.a)("div",{className:"input with_label required"},void 0,Object(r.a)(v.h,{label:i.formatMessage(C.expires),hint:i.formatMessage(C.expires_hint),items:N,defaultValue:N.never,onChange:this.handleSelectChange})))),Object(r.a)(v.b,{},void 0,Object(r.a)("label",{className:"checkboxes required"},void 0,Object(r.a)(b.a,{id:"filters.context_header",defaultMessage:"Filter contexts"})),Object(r.a)("span",{className:"hint"},void 0,Object(r.a)(b.a,{id:"filters.context_hint",defaultMessage:"One or multiple contexts where the filter should apply"})),Object(r.a)("div",{className:"two-col"},void 0,Object(r.a)(v.a,{label:i.formatMessage(C.home_timeline),name:"home_timeline",checked:this.state.home_timeline,onChange:this.handleCheckboxChange}),Object(r.a)(v.a,{label:i.formatMessage(C.public_timeline),name:"public_timeline",checked:this.state.public_timeline,onChange:this.handleCheckboxChange}),Object(r.a)(v.a,{label:i.formatMessage(C.notifications),name:"notifications",checked:this.state.notifications,onChange:this.handleCheckboxChange}),Object(r.a)(v.a,{label:i.formatMessage(C.conversations),name:"conversations",checked:this.state.conversations,onChange:this.handleCheckboxChange}))),Object(r.a)(v.b,{},void 0,Object(r.a)(v.a,{label:i.formatMessage(C.drop_header),hint:i.formatMessage(C.drop_hint),name:"irreversible",checked:this.state.irreversible,onChange:this.handleCheckboxChange}),Object(r.a)(v.a,{label:i.formatMessage(C.whole_word_header),hint:i.formatMessage(C.whole_word_hint),name:"whole_word",checked:this.state.whole_word,onChange:this.handleCheckboxChange}))),Object(r.a)(O.a,{className:"button button-primary setup",text:i.formatMessage(C.add_new),onClick:this.handleAddNew}),Object(r.a)(x.a,{text:i.formatMessage(C.subheading_filters)}),Object(r.a)(j.a,{scrollKey:"filters",emptyMessage:s},void 0,t.map(function(e,t){return Object(r.a)("div",{className:"filter__container"},t,Object(r.a)("div",{className:"filter__details"},void 0,Object(r.a)("div",{className:"filter__phrase"},void 0,Object(r.a)("span",{className:"filter__list-label"},void 0,Object(r.a)(b.a,{id:"filters.filters_list_phrase_label",defaultMessage:"Keyword or phrase:"})),Object(r.a)("span",{className:"filter__list-value"},void 0,e.get("phrase"))),Object(r.a)("div",{className:"filter__contexts"},void 0,Object(r.a)("span",{className:"filter__list-label"},void 0,Object(r.a)(b.a,{id:"filters.filters_list_context_label",defaultMessage:"Filter contexts:"})),Object(r.a)("span",{className:"filter__list-value"},void 0,e.get("context").map(function(e,t){return Object(r.a)("span",{className:"context"},t,e)}))),Object(r.a)("div",{className:"filter__details"},void 0,Object(r.a)("span",{className:"filter__list-label"},void 0,Object(r.a)(b.a,{id:"filters.filters_list_details_label",defaultMessage:"Filter settings:"})),Object(r.a)("span",{className:"filter__list-value"},void 0,e.get("irreversible")?Object(r.a)("span",{},void 0,Object(r.a)(b.a,{id:"filters.filters_list_drop",defaultMessage:"Drop"})):Object(r.a)("span",{},void 0,Object(r.a)(b.a,{id:"filters.filters_list_hide",defaultMessage:"Hide"})),e.get("whole_word")&&Object(r.a)("span",{},void 0,Object(r.a)(b.a,{id:"filters.filters_list_whole-word",defaultMessage:"Whole word"}))))),Object(r.a)("div",{className:"filter__delete",role:"button",tabIndex:"0",onClick:a.handleFilterDelete,"data-value":e.get("id"),"aria-label":i.formatMessage(C.delete)},void 0,Object(r.a)(M.a,{className:"filter__delete-icon",id:"times",size:40}),Object(r.a)("span",{className:"filter__delete-label"},void 0,Object(r.a)(b.a,{id:"filters.filters_list_delete",defaultMessage:"Delete"}))))})))))},e}(u.a),Object(d.a)(s,"propTypes",{params:_.a.object.isRequired,dispatch:_.a.func.isRequired,intl:_.a.object.isRequired}),i=l))||i)||i}}]);
//# sourceMappingURL=filters-c1e1948c560be911e815.chunk.js.map