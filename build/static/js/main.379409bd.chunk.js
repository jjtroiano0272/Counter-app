(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(10),s=n.n(o),a=(n(16),n(8)),l=n(7),u=n(2),i=n(3),d=n(5),b=n(4),h=n(0),j=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).styles={fontSize:14,fontWeight:"bold"},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e,t){console.log("previous props: ",e),console.log("previous state: ",t),e.counter.value,this.props.counter.value}},{key:"componentWillUnmount",value:function(){console.log("Counter - UNmounted.")}},{key:"getBadgeClasses",value:function(){var e="badge align-center m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}},{key:"onDelete",value:function(){}},{key:"renderTags",value:function(){return 0===this.state.tags.length?Object(h.jsx)("p",{children:"'N'il ya pas des tagues!'"}):Object(h.jsx)("ul",{style:{listStyleType:"none"},children:this.state.tags.map((function(e){return Object(h.jsx)("li",{children:e},e)}))})}},{key:"render",value:function(){var e=this;return console.log("Counter - rendered"),Object(h.jsx)(c.a.Fragment,{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-1 mx-auto",children:Object(h.jsx)("span",{style:this.styles,className:this.getBadgeClasses(),children:this.formatCount()})}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm",children:"+"}),Object(h.jsx)("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-secondary btn-sm m-2",disabled:0===this.props.counter.value?"disabled":"",children:"-"}),Object(h.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2",children:"Delete"})]})]})})}}]),n}(r.Component),p=j,m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){console.log("Counters - rendered");var e=this.props,t=e.onReset,n=e.counters,r=e.onDelete,c=e.onIncrement,o=e.onDecrement;return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:t,className:"btn btn-primary btn-sm m-2",children:"Reset"}),n.map((function(e){return Object(h.jsx)(p,{onDelete:r,onIncrement:c,onDecrement:o,counter:e},e.id)}))]})}}]),n}(r.Component),v=m,f=function(e){return console.log("NavBar - rendered"),Object(h.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(h.jsxs)("a",{href:"#",className:"navbar-brand",children:["Navbar"," ",Object(h.jsx)("span",{className:"badge badge-pill badge-secondary",children:e.totalCounters})]})})},g=(n(11),n(20),n(9),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleIncrement=function(t){var n=Object(l.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(a.a)({},t),n[r].value++,e.setState({counters:n})},e.handleDecrement=function(t){var n=Object(l.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(a.a)({},t),n[r].value--,e.setState({counters:n})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},console.log("App - constructor"),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log("App - mounted")}},{key:"render",value:function(){return console.log("App - rendered"),Object(h.jsx)(c.a.Fragment,{children:Object(h.jsxs)("main",{className:"container",children:[Object(h.jsx)(f,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),Object(h.jsx)(v,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete})]})})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};n(21);s.a.render(Object(h.jsx)(g,{}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.379409bd.chunk.js.map