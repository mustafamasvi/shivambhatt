(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(164),c=(t(173),t(163)),l=t.n(c);function o(){return r.a.createElement("footer",null,r.a.createElement("ul",{className:"icons"},l.a.socialLinks.map(function(e){var a=e.icon,t=e.name,n=e.url;return r.a.createElement("li",{key:n},r.a.createElement("a",{href:n,className:"icon "+a},r.a.createElement("span",{className:"label"},t)))})))}var s=t(174);function u(){return r.a.createElement("header",null,r.a.createElement("span",{className:"avatar"},r.a.createElement("img",{height:"128px",src:s,alt:""})),r.a.createElement("h1",null,l.a.authorName),r.a.createElement("p",null,l.a.heading))}function m(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© ",l.a.authorName)))}a.default=function(){return r.a.createElement(i.a,null,r.a.createElement("section",{id:"main"},r.a.createElement(u,null),r.a.createElement(o,null)),r.a.createElement(m,null))}},160:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Shivam Bhatt"}}}}},162:function(e,a,t){"use strict";t.r(a);t(42);var n=t(0),r=t.n(n),i=t(6),c=t.n(i),l=t(66),o=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},163:function(e,a){e.exports={siteTitle:"Shivam Bhatt",manifestName:"Shivam",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/images/avatar.png",pathPrefix:"/",authorName:"Shivam Bhatt",heading:"Full Stack Developer",socialLinks:[{icon:"fa-linkedin",name:"Linkedin",url:"https://www.linkedin.com/in/shivam-bhatt-041b45107/"},{icon:"fa-github",name:"Github",url:"https://github.com/shivambhatt"},{icon:"fa-instagram",name:"Instagram",url:"https://instagram.com/5hivam_bhatt"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com/shivam.bhatt.378"}]}},164:function(e,a,t){"use strict";var n=t(8),r=t.n(n),i=t(161),c=t(0),l=t.n(c),o=t(6),s=t.n(o),u=t(165),m=t.n(u),d=(t(41),t(160),l.a.createContext({}));function h(e){var a=e.staticQueryData,t=e.data,n=e.query,r=e.render,i=t?t.data:a[n]&&a[n].data;return l.a.createElement(l.a.Fragment,null,i&&r(i),!i&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var f=function(e){var a=e.data,t=e.query,n=e.render,r=e.children;return l.a.createElement(d.Consumer,null,function(e){return l.a.createElement(h,{data:a,query:t,render:n||r,staticQueryData:e})})};f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};t(167);var p=function(e){function a(){var a;return(a=e.call(this)||this).state={isPreloaded:!0},a}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({isPreloaded:!1})},1e3)},t.render=function(){var e=this.props.children,a=this.state.isPreloaded;return l.a.createElement(f,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Full Stack Developer"},{name:"keywords",content:"site, web"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement("div",{className:a?"main-body is-preload":"main-body"},l.a.createElement("div",{id:"wrapper"},e)))},data:i})},a}(c.Component);p.propTypes={children:s.a.node.isRequired};a.a=p},173:function(e,a,t){var n=t(12).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||t(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},174:function(e,a,t){e.exports=t.p+"static/avatar1-84971da01cf3b4582b4628bb611e26e6.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-a796fb64e864a696293d.js.map