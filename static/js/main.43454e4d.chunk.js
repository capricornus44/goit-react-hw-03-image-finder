(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__3h79-",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__R39pD"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__31gf9",modal:"Modal_modal__EqBCh"}},25:function(e,t,a){e.exports={loader:"Spinner_loader__3r3ES"}},26:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__2ivvv"}},27:function(e,t,a){e.exports={button:"Button_button__1fCHB"}},28:function(e,t,a){e.exports={app:"App_app__1t6Tc"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a.n(o),s=a(14),i=a(4),l=a(5),u=a(7),h=a(6),m=a(10),d=a(23),p=a.n(d),g=function(e){var t=e.request,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,o=e.perPage,c=void 0===o?15:o;return p.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=20669309-c97d1ec468a66ad87fd39e114&image_type=photo&orientation=horizontal&per_page=").concat(c)).then((function(e){return e.data.hits}))},b=(a(51),a(9)),j=a.n(b),f=a(1),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({searchQuery:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchQuery;""!==a.trim()?(e.props.onSubmit(a),e.setState({searchQuery:""})):m.b.error("Enter correct value!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:j.a.searchbar,children:Object(f.jsxs)("form",{className:j.a.searchForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:j.a.searchFormButton,children:Object(f.jsx)("span",{className:j.a.searchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:j.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleChange})]})})}}]),a}(r.Component),v=a(24),O=a.n(v),_=a(25),x=a.n(_),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)(O.a,{className:x.a.loader,type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(r.Component),k=a(12),I=a.n(k),w=function(e){var t=e.src,a=e.source,r=(e.id,e.alt),n=e.onClick;return Object(f.jsx)("li",{className:I.a.imageGalleryItem,children:Object(f.jsx)("img",{src:t,alt:r,className:I.a.imageGalleryItemImage,onClick:function(){return n(a)}})})},S=a(26),L=a.n(S),F=function(e){var t=e.hits,a=e.onClick;return Object(f.jsx)("ul",{className:L.a.imageGallery,children:t.map((function(e){return Object(f.jsx)(w,{src:e.webformatURL,source:e.largeImageURL,id:e.id,alt:e.tags,onClick:a},e.id)}))})},B=a(27),N=a.n(B),G=function(e){var t=e.type,a=void 0===t?"button":t,r=e.onClick;return Object(f.jsx)("button",{className:N.a.button,type:a,onClick:r,children:"Load more"})},M=a(13),q=a.n(M),P=document.querySelector("#modal-root"),U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:q.a.overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:q.a.modal,children:Object(f.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),P)}}]),a}(r.Component),D=(a(73),a(28)),E=a.n(D),R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1,hits:[],currentPage:1,request:"",isLoading:!1,error:null,largeImageURL:""},e.onChangeQuery=function(t){e.setState({request:t,currentPage:1,hits:[],error:null})},e.fetchHits=function(){var t=e.state,a={currentPage:t.currentPage,request:t.request};e.setState({isLoading:!0}),g(a).then((function(t){e.setState((function(e){return{hits:[].concat(Object(s.a)(e.hits),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.request!==this.state.request&&this.fetchHits(this.state.request)}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isLoading,r=e.showModal,n=e.largeImageURL;return Object(f.jsxs)("div",{className:E.a.app,children:[Object(f.jsx)(y,{onSubmit:this.onChangeQuery}),Object(f.jsx)(F,{hits:t,onClick:this.toggleModal}),a&&Object(f.jsx)(C,{}),t.length>0&&!a&&Object(f.jsx)(G,{onClick:this.fetchHits}),Object(f.jsx)(m.a,{autoClose:3e3,position:"top-right",type:"default"}),r&&Object(f.jsx)(U,{largeImageURL:n,onClose:this.toggleModal})]})}}]),a}(r.Component);a(74),a(75);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1iO6e",searchForm:"Searchbar_searchForm__H0o40",searchFormButton:"Searchbar_searchFormButton__2MuhZ",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3xIO9",searchFormInput:"Searchbar_searchFormInput__3Xg_o"}}},[[76,1,2]]]);
//# sourceMappingURL=main.43454e4d.chunk.js.map