webpackJsonp([2],{107:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=h[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(c(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(c(o.parts[a],t));h[o.id]={id:o.id,refs:1,parts:i}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],i=t.base?a[0]+t.base:a[0],u=a[1],l=a[2],s=a[3],c={css:u,media:l,sourceMap:s};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}function a(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function u(e){var t=document.createElement("style");return e.attrs.type="text/css",s(t,e.attrs),a(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",s(t,e.attrs),a(e,t),t}function s(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,o,r,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var s=y++;n=g||(g=u(t)),o=f.bind(null,n,s,!1),r=f.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=p.bind(null,n,t),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),o=d.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function f(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var o=n.css,r=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(o=k(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}var h={},b=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,y=0,v=[],k=n(244);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=b()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],l=h[u.id];l.refs--,a.push(l)}if(e){o(r(e,t),t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete h[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},108:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),s=o(l),c=n(17),f=n(211),d=o(f),p=n(139),h=(o(p),n(65)),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),m=n(112),g=o(m),y=n(114),v=o(y),k=n(113),x=o(k),w=(0,d.default)({loader:function(){return n.e(0).then(n.bind(null,247))},loading:x.default}),E=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={bookList:[]},n.loadList=n.loadList.bind(n),n.handleBookStatusUpdate=n.handleBookStatusUpdate.bind(n),n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.loadList()}},{key:"loadList",value:function(){var e=this;b.getAll().then(function(t){return e.setState({bookList:t})})}},{key:"handleBookStatusUpdate",value:function(e,t){var n=this;b.update(e,t).then(function(e){return e&&n.loadList()})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"app"},s.default.createElement(c.Route,{path:"/search",render:function(){return s.default.createElement(v.default,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}),s.default.createElement(c.Route,{path:"/details/:bookId",component:w}),s.default.createElement(c.Route,{path:"/",exact:!0,render:function(){return s.default.createElement(g.default,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}))}}]),t}(s.default.Component);t.default=E},109:function(e,t,n){var o=n(42);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;var a=n(107)(o,r);o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(42,function(){var t=n(42);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},110:function(e,t,n){var o=n(43);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;var a=n(107)(o,r);o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(43,function(){var t=n(43);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},111:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=o(r),i=n(6),u=o(i),l=n(17),s=function(e){var t=e.bookId,n=e.shelf,o=e.bookCoverImage,r=e.bookTitle,i=e.bookAuthors,u=e.handleStatusUpdate;return a.default.createElement("div",{className:"book"},a.default.createElement("div",{className:"book-top"},a.default.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'+o+'")'}}),a.default.createElement("div",{className:"book-shelf-changer"},a.default.createElement("select",{defaultValue:n,onChange:function(e){u({id:t},e.target.value)}},a.default.createElement("option",{value:"none",disabled:!0},"Move to..."),a.default.createElement("option",{value:"currentlyReading"},"Currently Reading"),a.default.createElement("option",{value:"wantToRead"},"Want to Read"),a.default.createElement("option",{value:"read"},"Read"),a.default.createElement("option",{value:"none"},"None")))),a.default.createElement("div",{className:"book-title"},r),a.default.createElement("div",{className:"book-authors"},i.map(function(e){return a.default.createElement("span",{key:e},e,a.default.createElement("br",null))})),a.default.createElement("div",{className:"book-authors"},a.default.createElement(l.Link,{className:"more",to:"/details/"+t},"More...")))};s.propTypes={bookId:u.default.string.isRequired,shelf:u.default.string,bookCoverImage:u.default.string,bookTitle:u.default.string,bookAuthors:u.default.array,handleStatusUpdate:u.default.func.isRequired},s.defaultProps={shelf:"none",bookCoverImage:"",bookTitle:"Title",bookAuthors:["No Authors"]},t.default=s},112:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=o(r),i=n(6),u=o(i),l=n(17),s=n(66),c=o(s),f=function(e){var t=e.books,n=e.handleBookStatusUpdate,o=[{name:"Currently Reading",slug:"currentlyReading"},{name:"Want to Read",slug:"wantToRead"},{name:"Read",slug:"read"}];return a.default.createElement("div",{className:"list-books"},a.default.createElement("div",{className:"list-books-title"},a.default.createElement("h1",null,"MyRead")),a.default.createElement("div",{className:"list-books-content"},o.map(function(e){return a.default.createElement(c.default,{key:e.slug,bookShelfTitle:e.name,books:t.filter(function(t){return t.shelf===e.slug}),handleStatusUpdate:n})})),a.default.createElement("div",{className:"open-search"},a.default.createElement(l.Link,{to:"/search"},"Add a book")))};f.propTypes={books:u.default.array,handleBookStatusUpdate:u.default.func.isRequired},f.defaultProps={books:[]},t.default=f},113:function(e,t,n){"use strict";function o(e){var t=e.isLoading,n=e.pastDelay,o=e.error;return t&&n?a.default.createElement("p",null,"Loading..."):o&&!t?a.default.createElement("p",null,"Error!"):null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(r)},114:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),s=o(l),c=n(6),f=o(c),d=n(17),p=n(65),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(p),b=n(66),m=o(b),g=function(e){function t(){var e,n,o,i;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={searchedList:[],query:""},i=n,a(o,i)}return i(t,e),u(t,[{key:"handleSearchUpdate",value:function(e){var t=this,n=e.target.value;this.setState({query:n}),h.search(n,20).then(function(e){for(var n=e,o=t.props.books,r=0;r<n.length;r++)for(var a=0;a<o.length;a++){if(n[r].id===o[a].id){n[r].shelf=o[a].shelf;break}n[r].shelf="none"}t.setState({searchedList:n})})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"search-books"},s.default.createElement("div",{className:"search-books-bar"},s.default.createElement(d.Link,{className:"close-search",to:"/"},"Close"),s.default.createElement("div",{className:"search-books-input-wrapper"},s.default.createElement("input",{type:"text",name:"searchTerm",placeholder:"Search by title or author",onChange:function(t){e.handleSearchUpdate(t)},value:this.state.query}))),s.default.createElement("div",{className:"search-books-results"},s.default.createElement(m.default,{bookShelfTitle:"Search Results",books:this.state.searchedList,handleStatusUpdate:this.props.handleBookStatusUpdate}),s.default.createElement("ol",{className:"books-grid"})))}}]),t}(l.Component);g.propTypes={books:f.default.array,handleBookStatusUpdate:f.default.func.isRequired},g.defaultProps={books:[]},t.default=g},115:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(4),a=o(r),i=n(41),u=o(i),l=n(17),s=n(108),c=o(s);n(110),n(109),u.default.render(a.default.createElement(l.BrowserRouter,null,a.default.createElement(c.default,null)),document.getElementById("root"))},117:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},132:function(e,t,n){e.exports=n.p+"bb9363b86b02777d23523851826414e0.svg"},133:function(e,t,n){e.exports=n.p+"3687aa988bec28f17ae39153db1646c3.svg"},134:function(e,t,n){e.exports=n.p+"78c6f53b2342643639fe1cbaf171bf47.svg"},139:function(e,t,n){(function(e){function n(e,t){for(var n=0,o=e.length-1;o>=0;o--){var r=e[o];"."===r?e.splice(o,1):".."===r?(e.splice(o,1),n++):n&&(e.splice(o,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function o(e,t){if(e.filter)return e.filter(t);for(var n=[],o=0;o<e.length;o++)t(e[o],o,e)&&n.push(e[o]);return n}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return r.exec(e).slice(1)};t.resolve=function(){for(var t="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return t=n(o(t.split("/"),function(e){return!!e}),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===i(e,-1);return e=n(o(e.split("/"),function(e){return!!e}),!r).join("/"),e||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function o(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=o(e.split("/")),a=o(n.split("/")),i=Math.min(r.length,a.length),u=i,l=0;l<i;l++)if(r[l]!==a[l]){u=l;break}for(var s=[],l=u;l<r.length;l++)s.push("..");return s=s.concat(a.slice(u)),s.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=a(e),n=t[0],o=t[1];return n||o?(o&&(o=o.substr(0,o.length-1)),n+o):"."},t.basename=function(e,t){var n=a(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return a(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(t,n(26))},211:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return"object"===b(n.m)&&e().every(function(e){return void 0!==e&&void 0!==n.m[e]})}function u(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function l(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach(function(o){var r=u(e[o]);r.loading?t.loading=!0:(t.loaded[o]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then(function(e){t.loaded[o]=e}).catch(function(e){t.error=e})})}catch(e){t.error=e}return t.promise=Promise.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function s(e){return e&&e.__esModule?e.default:e}function c(e,t){return m.createElement(s(e),t)}function f(e,t){function n(){return f||(f=e(s.loader)),f.promise}var u,l;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var s=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:c,webpack:null,modules:null},t),f=null;return y.push(n),"function"==typeof s.webpack&&v.push(function(){if(i(s.webpack))return n()}),l=u=function(t){function i(a){o(this,i);var u=r(this,t.call(this,a));return u.retry=function(){u.setState({error:null,loading:!0,timedOut:!1}),f=e(s.loader),u._loadModule()},n(),u.state={error:f.error,pastDelay:!1,timedOut:!1,loading:f.loading,loaded:f.loaded},u}return a(i,t),i.preload=function(){return n()},i.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},i.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(s.modules)&&s.modules.forEach(function(t){e.context.loadable.report(t)}),f.loading){"number"==typeof s.delay&&(0===s.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},s.delay)),"number"==typeof s.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},s.timeout));var t=function(){e._mounted&&(e.setState({error:f.error,loaded:f.loaded,loading:f.loading}),e._clearTimeouts())};f.promise.then(function(){t()}).catch(function(e){t()})}},i.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},i.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},i.prototype.render=function(){return this.state.loading||this.state.error?m.createElement(s.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?s.render(this.state.loaded,this.props):null},i}(m.Component),u.contextTypes={loadable:g.shape({report:g.func.isRequired})},l}function d(e){return f(u,e)}function p(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return f(l,e)}function h(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then(function(){if(e.length)return h(e)})}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=n(4),g=n(6),y=[],v=[];d.Map=p;var k=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return m.Children.only(this.props.children)},t}(m.Component);k.propTypes={report:g.func.isRequired},k.childContextTypes={loadable:g.shape({report:g.func.isRequired}).isRequired},d.Capture=k,d.preloadAll=function(){return new Promise(function(e,t){h(y).then(e,t)})},d.preloadReady=function(){return new Promise(function(e,t){h(v).then(e,e)})},e.exports=d},244:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var a;return a=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},42:function(e,t,n){var o=n(117);t=e.exports=n(67)(!1),t.push([e.i,".root,body,html{height:100%}body{line-height:1.5}.app,body{background:#fff}.list-books-title{padding:15px 0;background:orange;text-align:center}.list-books-title h1{font-weight:400;margin:0;color:#fff}.list-books-content{padding:0 0 80px;flex:1}.bookshelf{padding:0 10px 20px}@media (min-width:600px){.bookshelf{padding:0 20px 40px}}.bookshelf-title{border-bottom:1px solid #dedede}.bookshelf-books{text-align:center}.open-search{position:fixed;right:25px;bottom:25px}.open-search a{display:block;width:50px;height:50px;border-radius:50%;background:#2e7d32;background-image:url("+o(n(132))+");background-repeat:no-repeat;background-position:50%;background-size:28px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);font-size:0}.search-books-bar{position:fixed;width:100%;top:0;left:0;z-index:5;display:flex;box-shadow:0 10px 20px rgba(0,0,0,.19),0 0 6px rgba(0,0,0,.23);background-color:#fff}.search-books-input-wrapper{flex:1;background:#e9e}.search-books-bar input{width:100%;padding:15px 10px;font-size:1.25em;border:none;outline:none}.close-search{display:block;top:20px;left:15px;width:50px;height:53px;background:#fff;background-image:url("+o(n(133))+");background-position:50%;background-repeat:no-repeat;background-size:28px;font-size:0}.search-books-results{padding:80px 10px 20px}.books-grid{list-style-type:none;padding:0;margin:0;display:flex;justify-content:center;flex-wrap:wrap}.books-grid li{padding:10px 15px;text-align:left}.book{width:140px}.book-authors,.book-title{font-size:.8em}.book-title{margin-top:10px}.book-authors{color:#999}.book-top{position:relative;height:200px;display:flex;align-items:flex-end}.book-shelf-changer{position:absolute;right:0;bottom:-10px;width:40px;height:40px;border-radius:50%;background:#60ac5d;background-image:url("+o(n(134))+");background-repeat:no-repeat;background-position:50%;background-size:20px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.book-shelf-changer select{width:100%;height:100%;opacity:0;cursor:pointer}.book-cover{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);background:#eee}.book-cover-title{padding:20px 10px 0;text-align:center;font-size:.8em}",""])},43:function(e,t,n){t=e.exports=n(67)(!1),t.push([e.i,"html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}body{margin:0;padding:0;font-family:Roboto,sans-serif}",""])},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="https://reactnd-books-api.udacity.com",a=localStorage.token;a||(a=localStorage.token=Math.random().toString(36).substr(-8));var i={Accept:"application/json",Authorization:a};t.get=function(e){return fetch(r+"/books/"+e,{headers:i}).then(function(e){return e.json()}).then(function(e){return e.book})},t.getAll=function(){return fetch(r+"/books",{headers:i}).then(function(e){return e.json()}).then(function(e){return e.books})},t.update=function(e,t){return fetch(r+"/books/"+e.id,{method:"PUT",headers:o({},i,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},t.search=function(e,t){return fetch(r+"/search",{method:"POST",headers:o({},i,{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then(function(e){return e.json()}).then(function(e){return e.books})}},66:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(4),i=o(a),u=n(6),l=o(u),s=n(111),c=o(s),f=function(e){var t=e.bookShelfTitle,n=e.books,o=e.handleStatusUpdate;return i.default.createElement("div",{className:"bookshelf"},i.default.createElement("h2",{className:"bookshelf-title"},t),i.default.createElement("div",{className:"bookshelf-books"},i.default.createElement("ol",{className:"books-grid"},n.length>0&&n.map(function(e){return i.default.createElement("li",{key:e.id},i.default.createElement(c.default,r({shelf:e.shelf,bookId:e.id,bookCoverImage:e.imageLinks.thumbnail,bookTitle:e.title,bookAuthors:e.authors,handleStatusUpdate:o},e)))}))))};f.propTypes={bookShelfTitle:l.default.string,books:l.default.array,handleStatusUpdate:l.default.func.isRequired},f.defaultProps={bookShelfTitle:"No title set",books:[]},t.default=f},67:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}}},[115]);