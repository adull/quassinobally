(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"d",function(){return n}),r.d(t,"o",function(){return a}),r.d(t,"p",function(){return c}),r.d(t,"c",function(){return i}),r.d(t,"n",function(){return s}),r.d(t,"e",function(){return l}),r.d(t,"h",function(){return u}),r.d(t,"g",function(){return p}),r.d(t,"m",function(){return h}),r.d(t,"f",function(){return d}),r.d(t,"b",function(){return b}),r.d(t,"i",function(){return m}),r.d(t,"l",function(){return O}),r.d(t,"j",function(){return v}),r.d(t,"k",function(){return g});var o="ADD_CHAR",n="REMOVE_CHAR",a="SUBMIT_ANS",c="TOGGLE_GAPS",i="NEW_PUZZLE",s="SET_PAGE",l="SET_BG_COLOR",u="SET_BOX_COLOR",p="SET_BOX_BORDER_WIDTH",h="SET_LETTER_COLOR",d="SET_BOXBORDER_COLOR",b="CLOSE_INCORRECT_MODAL",m="SET_HOME_BTN_BG_COLOR",O="SET_HOME_BTN_COLOR",v="SET_HOME_BTN_BORDER_COLOR",g="SET_HOME_BTN_BORDER_WIDTH"},11:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return newPuzzle}),__webpack_require__.d(__webpack_exports__,"d",function(){return submitAnswer}),__webpack_require__.d(__webpack_exports__,"a",function(){return canMoveChar}),__webpack_require__.d(__webpack_exports__,"b",function(){return moveChar});var _reducers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(53),_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10);function newPuzzle(e){e({type:"NEW_PUZZLE"})}function checkSolutionValidity(e){for(var t=[],r=[],o=!1,n=0;n<e.length;n++){var a=e[n].value,c=e[n].type;"("===a?t.push(a):")"===a?t.length>0?t.pop():o=!0:r.push(c)}if("operand"===r[r.length-1])return!1;if(!0===o)return!1;if(t.length>0)return!1;for(var i=!1,s=0;s<r.length;s++)s%2===0?"letter"!==r[s]&&(i=!0):s%2===1&&"operand"!==r[s]&&(i=!0);return!i}function evaluateSolutionArr(charArr){for(var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],solutionExpression="",i=0;i<charArr.length;i++){var valToAdd="";valToAdd=alphabet.includes(charArr[i].value)?alphabet.indexOf(charArr[i].value)+1:charArr[i].value,solutionExpression+=valToAdd}String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)},solutionExpression=solutionExpression.replaceAll("\xd7","*"),solutionExpression=solutionExpression.replaceAll("\xf7","/");var solutionEvaluation=-1;try{solutionEvaluation=eval(solutionExpression)}catch(_unused){return"HUGE ERROR"}return solutionEvaluation}function submitAnswer(e){var t=e.dispatch;if(!0===checkSolutionValidity(e.solutionCharArr)){var r=evaluateSolutionArr(e.solutionCharArr);return e.letterCharArr.length>0?void t({type:"SUBMIT_ANS",reasonIncorrect:"characters",isCorrectSolution:!1}):("HUGE ERROR"===r&&t({type:"SUBMIT_ANS",reasonIncorrect:"invalid",isCorrectSolution:!1}),r%27===0?(console.log("correct solution"),void t({type:"SUBMIT_ANS",reasonIncorrect:"",isCorrectSolution:!0})):(console.log("incorrect solution"),void t({type:"SUBMIT_ANS",reasonIncorrect:"miscalculation",isCorrectSolution:!1})))}return console.log("solution is not valid"),void t({type:"SUBMIT_ANS",reasonIncorrect:"invalid",isCorrectSolution:!1})}function canMoveChar(e,t){return"letter"===e.value.type?"operand"!==t.type:"operand"===e.value.type?"letter"!==t.type:void console.log(e.type)}function moveChar(e,t,r,o,n){"letter"===e.type?letterMove(e,t,r,o,n):"operand"===e.type&&operandMove(e,t,r,o,n)}function letterMove(e,t,r,o,n){n({type:"ADD_CHAR",char:e,index:t,box:o}),n({type:"REMOVE_CHAR",char:e,index:t,box:r})}function operandMove(e,t,r,o,n){"operand"===o.type?n({type:"REMOVE_CHAR",char:e,index:t,box:r}):"solution"===o.type&&"operand"===r.type?n({type:"ADD_CHAR",char:e,index:t,box:o}):"solution"===o.type&&"solution"===r.type&&(n({type:"ADD_CHAR",char:e,index:t,box:o}),n({type:"REMOVE_CHAR",char:e,index:t,box:r}))}},14:function(e,t,r){"use strict";function o(e,t){for(var r=0;r<t.length;r++)if(e===t[r].identifier)return r;return console.log("not found in index"),null}function n(e){return"letter"===e.type?e.letterCharArr:"operand"===e.type?e.operandCharArr:"solution"===e.type?e.solutionCharArr:void 0}function a(e){return"letter"===e.type?e.letterCharArr.length:"operand"===e.type?e.operandCharArr.length:"solution"===e.type?e.solutionCharArr.length:void 0}r.d(t,"a",function(){return o}),r.d(t,"b",function(){return n}),r.d(t,"c",function(){return a})},16:function(e,t,r){e.exports=r.p+"static/media/gun.863baa79.wav"},216:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(22),c=r.n(a),i=r(9),s=(r(93),r(2)),l=r(3),u=r(5),p=r(4),h=r(6),d=r(1);function b(e,t){t({type:"SET_PAGE",page:e})}var m=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).setPageHome=e.setPageHome.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setPageHome",value:function(){b("home",this.props.dispatch)}},{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header-back-button",onClick:this.setPageHome},n.a.createElement("img",{src:r(95)}),n.a.createElement("div",{className:"header-back-button-text"},"Home")))}}]),t}(n.a.Component),O=Object(i.b)(function(e,t){return e})(m),v=r(13),g=(r(10),r(14)),C=r(11),f=r(81),j=r.n(f);var E={beginDrag:function(e){return new Audio(j.a).play(),(0,e.dispatch)({type:"TOGGLE_GAPS"}),{props:e}},endDrag:function(e){return(0,e.dispatch)({type:"TOGGLE_GAPS"}),e.removeGap(),{props:e}}},y={hover:function(e,t,r){r.getDecoratedComponentInstance();e.isCurrentlyOver(e.value.identifier)},drop:function(e,t,r){e.isCurrentlyOver("");var o=Object(a.findDOMNode)(r).getBoundingClientRect(),n=(o.left+o.right)/2,c=0;t.getClientOffset().x>n&&(c=1);var i=e.dispatch,s=t.getItem().props.value,l=e.currentlyOver,u=t.getItem().props.currentBox,p=e.currentBox,h=g.b(p),d=g.a(l,h)+c;C.a(e,p)?C.b(s,d,u,p,i):console.log("cant move")}},B=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this))).state={type:e.value.type,value:e.value.value,identifier:e.value.identifier,pushLeft:!1,pushRight:!1},r.hoverLeft=r.hoverLeft.bind(Object(d.a)(Object(d.a)(r))),r.hoverRight=r.hoverRight.bind(Object(d.a)(Object(d.a)(r))),r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"hoverLeft",value:function(){this.setState({pushLeft:!0,pushRight:!1})}},{key:"hoverRight",value:function(){this.setState({pushLeft:!1,pushRight:!0})}},{key:"render",value:function(){var e=this.props.currentlyOver,t=this.props.value.identifier,r=this.props,o=r.connectDropTarget,a=r.connectDragSource,c=e!==t||this.props.noGaps?"":"push-left",i="rgb("+parseInt(255-this.props.letterColor[0]).toString()+", "+parseInt(255-this.props.letterColor[1]).toString()+","+parseInt(255-this.props.letterColor[2]).toString()+")";return a(o(n.a.createElement("div",{className:"length-"+this.props.length+" character "+this.props.value.type+"-character "+c,style:{color:i}},this.props.value.value)))}}]),t}(n.a.Component);B=Object(v.DragSource)("character",E,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(B),B=Object(v.DropTarget)("character",y,function(e,t){return{connectDropTarget:e.dropTarget(),isOverCurrent:t.isOver({shallow:!0})}})(B);var _=Object(i.b)(function(e){return e})(B),k=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={currentlyOver:""},r.isCurrentlyOver=r.isCurrentlyOver.bind(Object(d.a)(Object(d.a)(r))),r.removeGap=r.removeGap.bind(Object(d.a)(Object(d.a)(r))),r.removeAllGaps=r.removeAllGaps.bind(Object(d.a)(Object(d.a)(r))),r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"removeAllGaps",value:function(){console.log("remove all gaps")}},{key:"isCurrentlyOver",value:function(e){this.props.isOverNothing||this.setState({currentlyOver:e})}},{key:"removeGap",value:function(){this.setState({currentlyOver:""})}},{key:"render",value:function(){var e=this.props.boxType,t=[];"letter"===e?t=this.props.letterCharArr:"operand"===e?t=this.props.operandCharArr:"solution"===e&&(t=this.props.solutionCharArr);for(var r=[],o=0;o<t.length;o++)r.push(n.a.createElement(_,{key:o,value:t[o],currentBox:this.props.currentBox,isCurrentlyOver:this.isCurrentlyOver,currentlyOver:this.state.currentlyOver,removeGap:this.removeGap,length:t.length}));return n.a.createElement("div",{className:"characters"},r)}}]),t}(n.a.Component),x=r(16),S=r.n(x),w={hover:function(e,t,r){},drop:function(e,t,r){if(new Audio(S.a).play(),t.isOver({shallow:!0})){var o=t.getItem().props,n=o.currentBox,c=(o.value.index,r.props),i=e.dispatch,s=Object(a.findDOMNode)(r).getBoundingClientRect(),l=(s.left+s.right)/2,u=0;t.getClientOffset().x>l&&(u=Object(g.c)(c)),C.a(o,c)?C.b(o.value,u,n,c,i):console.log("cant move")}}};var A=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.boxColor[0]).toString()+", "+parseInt(255-this.props.boxColor[1]).toString()+","+parseInt(255-this.props.boxColor[2]).toString()+")",t=this.props.boxBorderWidth+"px solid rgb("+parseInt(255-this.props.boxBorderColor[0]).toString()+", "+parseInt(255-this.props.boxBorderColor[1]).toString()+","+parseInt(255-this.props.boxBorderColor[2]).toString()+")";return(0,this.props.connectDropTarget)(n.a.createElement("div",{className:"box",style:{backgroundColor:e,border:t}},n.a.createElement(k,{boxType:this.props.type,letterCharArr:this.props.letterCharArr,operandCharArr:this.props.operandCharArr,solutionCharArr:this.props.solutionCharArr,currentBox:this.props})))}}]),t}(n.a.Component);A=Object(v.DropTarget)("character",w,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver({shallow:!0})}})(A);var N=Object(i.b)(function(e,t){return e})(A),R=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(N,{type:"letter"})}}]),t}(N),I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={operands:"+-\xd7\xf7",droppable:["operand"]},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(N,{type:"operand",value:this.state.operands})}}]),t}(n.a.Component),T=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={droppable:["operand","letter"]},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(N,{type:"solution",value:""})}}]),t}(n.a.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"boxes"},n.a.createElement(R,null),n.a.createElement(I,null),n.a.createElement(T,null))}}]),t}(n.a.Component);var D=function(e){function t(e){var r;Object(s.a)(this,t);var o=(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).props.type.replace(/-/g," ").replace(/^./,function(e){return e.toUpperCase()});return r.state={type:o},r.click=r.click.bind(Object(d.a)(Object(d.a)(r))),r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"click",value:function(){new Audio(S.a).play(),"New word"===this.state.type&&C.c(this.props.dispatch),"Submit"===this.state.type&&C.d(this.props)}},{key:"render",value:function(){return n.a.createElement("div",{className:"button "+this.state.type,onClick:this.click},this.state.type)}}]),t}(n.a.Component),G=Object(i.b)(function(e,t){return e})(D),M=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"stopClose",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},{key:"render",value:function(){var e=this;return this.props.show?n.a.createElement("div",{className:"modal-backdrop"},n.a.createElement("div",{className:"modal",onClick:function(t){return e.stopClose(t)}},this.props.children)):null}}]),t}(n.a.Component),L=Object(i.b)(function(e){return e})(M),P=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).newPuzzle=e.newPuzzle.bind(Object(d.a)(Object(d.a)(e))),e.goHome=e.goHome.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"newPuzzle",value:function(){C.c(this.props.dispatch)}},{key:"goHome",value:function(){b("home",this.props.dispatch),C.c(this.props.dispatch)}},{key:"render",value:function(){return this.props.show?n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-title-section"},n.a.createElement("div",{className:"modal-title"},"Correct solution!"),n.a.createElement("div",{className:"modal-subtitle"},"You solved the puzzle in x seconds!")),n.a.createElement("div",{className:"correct-buttons"},n.a.createElement("div",{className:"button next-puzzle",onClick:this.newPuzzle},"Another Puzzle"),n.a.createElement("div",{className:"button back-home",onClick:this.goHome},"Home"))):null}}]),t}(n.a.Component),W=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={reasonIncorrect:e.reasonIncorrect,incorrectString:""},r.goHome=r.goHome.bind(Object(d.a)(Object(d.a)(r))),r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){console.log("construct subtitle");var e=this.state.reasonIncorrect;"characters"===e?this.setState({incorrectString:"You must use all of the characters in the character box in your solution."}):"invalid"===e?this.setState({incorrectString:"There is a problem with your solution. Make sure you include an operand in between each letter and have used any parentheses correctly."}):"miscalculation"===e?this.setState({incorrectString:"There was a problem with the computation."}):console.log(e)}},{key:"goHome",value:function(){b("home",this.props.dispatch),C.c(this.props.dispatch)}},{key:"render",value:function(){return this.props.show?n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-title-section"},n.a.createElement("div",{className:"modal-title"},"Incorrect Solution."),n.a.createElement("div",{className:"modal-subtitle"},this.state.incorrectString)),n.a.createElement("div",{className:"correct-buttons"},n.a.createElement("div",{className:"button close",onClick:this.props.closeModal},"Retry"),n.a.createElement("div",{className:"button back-home",onClick:this.goHome},"Home"))):null}}]),t}(n.a.Component);var V=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).closeModal=e.closeModal.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"closeModal",value:function(){(0,this.props.dispatch)({type:"CLOSE_INCORRECT_MODAL"})}},{key:"render",value:function(){console.log();var e=this.props.dispatch;return n.a.createElement("div",{className:"buttons"},n.a.createElement(G,{type:"new-word"}),n.a.createElement(G,{dispatch:e,type:"submit"}),n.a.createElement(G,{type:"three"}),n.a.createElement(L,{show:this.props.correctSubmittedAnswer||this.props.incorrectSubmittedAnswer},n.a.createElement(P,{dispatch:e,show:this.props.correctSubmittedAnswer}),n.a.createElement(W,{reasonIncorrect:this.props.reasonIncorrect,dispatch:e,closeModal:this.closeModal,show:this.props.incorrectSubmittedAnswer})))}}]),t}(n.a.Component),z=Object(i.b)(function(e,t){return e})(V);var U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={backgroundColor:""},e.backgroundColor=e.backgroundColor.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"backgroundColor",value:function(){this.setState({backgroundColor:"blue"})}},{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.backgroundColor[0]).toString()+", "+parseInt(255-this.props.backgroundColor[1]).toString()+","+parseInt(255-this.props.backgroundColor[2]).toString()+")";return n.a.createElement("div",{className:"background",style:{backgroundColor:e}})}}]),t}(n.a.Component),q=Object(i.b)(function(e,t){return e})(U),X=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"game-root"},n.a.createElement(O,null),n.a.createElement(q,null),n.a.createElement(H,null),n.a.createElement(z,null))}}]),t}(n.a.Component),Z=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).click=e.click.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"click",value:function(){this.props.onClick(),new Audio(S.a).play()}},{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.homeBtnBgColor[0]).toString()+", "+parseInt(255-this.props.homeBtnBgColor[1]).toString()+","+parseInt(255-this.props.homeBtnBgColor[2]).toString()+")",t="rgb("+parseInt(255-this.props.homeBtnBorderColor[0]).toString()+", "+parseInt(255-this.props.homeBtnBorderColor[1]).toString()+","+parseInt(255-this.props.homeBtnBorderColor[2]).toString()+")",r="rgb("+parseInt(255-this.props.homeBtnColor[0]).toString()+", "+parseInt(255-this.props.homeBtnColor[1]).toString()+","+parseInt(255-this.props.homeBtnColor[2]).toString()+")",o=this.props.homeBtnBorderWidth;return n.a.createElement("div",{className:"button",onClick:this.click,style:{backgroundColor:e,border:o+"px solid "+t,color:r}},this.props.buttonText)}}]),t}(n.a.Component),J=Object(i.b)(function(e){return e})(Z),K=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).setPageGame=e.setPageGame.bind(Object(d.a)(Object(d.a)(e))),e.setPageInstructions=e.setPageInstructions.bind(Object(d.a)(Object(d.a)(e))),e.setPageSettings=e.setPageSettings.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setPageGame",value:function(){b("game",this.props.dispatch)}},{key:"setPageInstructions",value:function(){b("instructions",this.props.dispatch)}},{key:"setPageSettings",value:function(){b("settings",this.props.dispatch)}},{key:"render",value:function(){return n.a.createElement("div",{className:"page home-page"},n.a.createElement(q,null),n.a.createElement("div",{className:"home-page-title"},"Quassinobally"),n.a.createElement("div",{className:"home-page-buttons"},n.a.createElement(J,{onClick:this.setPageGame,buttonText:"Play"}),n.a.createElement(J,{onClick:this.setPageInstructions,buttonText:"Instructions"}),n.a.createElement(J,{onClick:this.setPageSettings,buttonText:"Settings"})))}}]),t}(n.a.Component),Y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"page instructions-page"},n.a.createElement(O,null),n.a.createElement(q,null))}}]),t}(n.a.Component),Q=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).updateRedVal=e.updateRedVal.bind(Object(d.a)(Object(d.a)(e))),e.updateBlueVal=e.updateBlueVal.bind(Object(d.a)(Object(d.a)(e))),e.updateGreenVal=e.updateGreenVal.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"updateColor",value:function(e,t,r){var o=[e,t,r];this.props.updateColor(o)}},{key:"updateRedVal",value:function(e){var t=e.target.value,r=this.props.green,o=this.props.blue;this.updateColor(t,r,o)}},{key:"updateGreenVal",value:function(e){var t=this.props.red,r=e.target.value,o=this.props.blue;this.updateColor(t,r,o)}},{key:"updateBlueVal",value:function(e){var t=this.props.red,r=this.props.green,o=e.target.value;this.updateColor(t,r,o)}},{key:"render",value:function(){return n.a.createElement("div",{className:"color-picker"},n.a.createElement("input",{type:"range",className:"color-selector",step:"1",min:"0",max:"255",value:this.props.red,onChange:this.updateRedVal}),n.a.createElement("input",{type:"range",className:"color-selector",step:"1",min:"0",max:"255",value:this.props.green,onChange:this.updateGreenVal}),n.a.createElement("input",{type:"range",className:"color-selector",step:"1",min:"0",max:"255",value:this.props.blue,onChange:this.updateBlueVal}))}}]),t}(n.a.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.red).toString()+", "+parseInt(255-this.props.green).toString()+","+parseInt(255-this.props.blue).toString()+")";return n.a.createElement("div",{className:"color-display",style:{backgroundColor:e}},n.a.createElement("div",{style:{color:e}},"nut"))}}]),t}(n.a.Component),$=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).updateVal=e.updateVal.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"updateVal",value:function(e){this.props.updateVal(e.target.value)}},{key:"render",value:function(){return n.a.createElement("input",{type:"range",step:this.props.step,min:this.props.min,max:this.props.max,value:this.props.value,onChange:this.updateVal})}}]),t}(n.a.Component);var ee=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).updateBackgroundColor=e.updateBackgroundColor.bind(Object(d.a)(Object(d.a)(e))),e.updateBoxColor=e.updateBoxColor.bind(Object(d.a)(Object(d.a)(e))),e.updateLetterColor=e.updateLetterColor.bind(Object(d.a)(Object(d.a)(e))),e.updateBoxBorderColor=e.updateBoxBorderColor.bind(Object(d.a)(Object(d.a)(e))),e.updateHomeBtnBgColor=e.updateHomeBtnBgColor.bind(Object(d.a)(Object(d.a)(e))),e.updateHomeBtnColor=e.updateHomeBtnColor.bind(Object(d.a)(Object(d.a)(e))),e.updateHomeBtnBorderColor=e.updateHomeBtnBorderColor.bind(Object(d.a)(Object(d.a)(e))),e.updateHomeBtnBorderWidth=e.updateHomeBtnBorderWidth.bind(Object(d.a)(Object(d.a)(e))),e.updateBoxBorderWidth=e.updateBoxBorderWidth.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"updateBackgroundColor",value:function(e){!function(e,t){t({type:"SET_BG_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateBoxColor",value:function(e){!function(e,t){t({type:"SET_BOX_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateBoxBorderWidth",value:function(e){!function(e,t){t({type:"SET_BOX_BORDER_WIDTH",width:e})}(e,this.props.dispatch)}},{key:"updateLetterColor",value:function(e){!function(e,t){t({type:"SET_LETTER_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateBoxBorderColor",value:function(e){!function(e,t){t({type:"SET_BOXBORDER_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateHomeBtnBgColor",value:function(e){!function(e,t){t({type:"SET_HOME_BTN_BG_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateHomeBtnColor",value:function(e){!function(e,t){t({type:"SET_HOME_BTN_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateHomeBtnBorderColor",value:function(e){!function(e,t){t({type:"SET_HOME_BTN_BORDER_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateHomeBtnBorderWidth",value:function(e){!function(e,t){t({type:"SET_HOME_BTN_BORDER_WIDTH",width:e})}(e,this.props.dispatch)}},{key:"render",value:function(){var e=this.props.backgroundColor[0],t=this.props.backgroundColor[1],r=this.props.backgroundColor[2],o=this.props.boxColor[0],a=this.props.boxColor[1],c=this.props.boxColor[2],i=this.props.letterColor[0],s=this.props.letterColor[1],l=this.props.letterColor[2],u=this.props.boxBorderWidth,p=this.props.boxBorderColor[0],h=this.props.boxBorderColor[1],d=this.props.boxBorderColor[2],b=this.props.homeBtnBgColor[0],m=this.props.homeBtnBgColor[1],v=this.props.homeBtnBgColor[2],g=this.props.homeBtnColor[0],C=this.props.homeBtnColor[1],f=this.props.homeBtnColor[2],j=this.props.homeBtnBorderColor[0],E=this.props.homeBtnBorderColor[1],y=this.props.homeBtnBorderColor[2],B=this.props.homeBtnBorderWidth;return console.log(B),n.a.createElement("div",{className:"page settings-page"},n.a.createElement(O,null),n.a.createElement(q,null),n.a.createElement("div",{className:"settings-modifier"},n.a.createElement("div",{className:"background-color"},"Background Color"),n.a.createElement(Q,{red:e,green:t,blue:r,updateColor:this.updateBackgroundColor}),n.a.createElement("div",{className:"box-color"},"Box Color"),n.a.createElement(Q,{red:o,green:a,blue:c,updateColor:this.updateBoxColor}),n.a.createElement(F,{red:o,green:a,blue:c}),n.a.createElement("div",{className:"box-border-width"},"Box Border Width"),n.a.createElement($,{step:"1",min:"0",max:"15",value:u,updateVal:this.updateBoxBorderWidth}),n.a.createElement("div",{className:"letter-color"},"Letter color"),n.a.createElement(Q,{red:i,green:s,blue:l,updateColor:this.updateLetterColor}),n.a.createElement(F,{red:i,green:s,blue:l}),n.a.createElement("div",{className:"letter-color"},"Box Border Color"),n.a.createElement(Q,{red:p,green:h,blue:d,updateColor:this.updateBoxBorderColor}),n.a.createElement(F,{red:p,green:h,blue:d}),n.a.createElement("div",{className:"home-button-background-color"},"Home Button Background Color"),n.a.createElement(Q,{red:b,green:m,blue:v,updateColor:this.updateHomeBtnBgColor}),n.a.createElement(F,{red:b,green:m,blue:v}),n.a.createElement("div",{className:"home-button-background-color"},"Home Button Text Color"),n.a.createElement(Q,{red:g,green:C,blue:f,updateColor:this.updateHomeBtnColor}),n.a.createElement(F,{red:g,green:C,blue:f}),n.a.createElement("div",{className:"home-button-background-color"},"Home Button Border Color"),n.a.createElement(Q,{red:j,green:E,blue:y,updateColor:this.updateHomeBtnBorderColor}),n.a.createElement(F,{red:j,green:E,blue:y}),n.a.createElement("div",{className:"home-button-border-width"},"Home Button Border Width"),n.a.createElement($,{step:"1",min:"0",max:"10",value:B,updateVal:this.updateHomeBtnBorderWidth})))}}]),t}(n.a.Component),te=Object(i.b)(function(e,t){return e})(ee),re=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.showHome?n.a.createElement(K,{dispatch:this.props.dispatch}):this.props.showGame?n.a.createElement(X,{dispatch:this.props.dispatch}):this.props.showInstructions?n.a.createElement(Y,{dispatch:this.props.dispatch}):this.props.showSettings?n.a.createElement(te,null):n.a.createElement("div",null,"you fuckdedup")}}]),t}(n.a.Component),oe=Object(i.b)(function(e){return e})(re),ne=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(oe,null)}}]),t}(n.a.Component),ae=r(82),ce=r.n(ae),ie=r(83),se=r.n(ie),le=r(56),ue=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return le.isBrowser?(console.log("is browser"),n.a.createElement(v.DragDropContextProvider,{backend:ce.a},n.a.createElement(ne,null))):le.isMobile?(console.log("is mobile"),n.a.createElement(v.DragDropContextProvider,{backend:se.a},n.a.createElement(ne,null))):void 0}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=r(21),he=r(53),de=Object(pe.createStore)(he.a);c.a.render(n.a.createElement(i.a,{store:de},n.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,r){"use strict";var o=r(12),n=r(8),a=r(10),c=r(14),i=r(195);function s(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<15;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function l(e,t){for(var r=[],o=0;o<e.length;o++)r.push({type:t,value:e[o],identifier:s()});return r}var u="+-\xd7\xf7()",p={letterCharArr:l(i({exactly:1,maxLength:10})[0],"letter"),operandCharArr:l(u,"operand"),solutionCharArr:[],noGaps:!0,answerSubmitted:!1,reasonIncorrect:"",correctSubmittedAnswer:!1,incorrectSubmittedAnswer:!1,lackingChars:!1,invalidAnswer:!1,showHome:!0,showGame:!1,showInstructions:!1,showSettings:!1,backgroundColor:[0,128,255],boxColor:[0,255,255],letterColor:[0,0,255],boxBorderWidth:3,boxBorderColor:[0,0,255],homeBtnBgColor:[0,128,255],homeBtnColor:[255,255,255],homeBtnBorderColor:[255,255,255],homeBtnBorderWidth:2};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.a:var r={type:t.char.type,value:t.char.value,identifier:s()};if("letter"===t.box.type)return Object(n.a)({},e,{letterCharArr:[].concat(Object(o.a)(e.letterCharArr.slice(0,t.index)),[r],Object(o.a)(e.letterCharArr.slice(t.index)))});if("operand"===t.box.type)return Object(n.a)({},e,{operandCharArr:[].concat(Object(o.a)(e.operandCharArr.slice(0,t.index)),[r],Object(o.a)(e.operandCharArr.slice(t.index)))});if("solution"===t.box.type)return Object(n.a)({},e,{solutionCharArr:[].concat(Object(o.a)(e.solutionCharArr.slice(0,t.index)),[r],Object(o.a)(e.solutionCharArr.slice(t.index)))});case a.d:var h=t.char.identifier;if("letter"===t.box.type){var d=Object(c.a)(h,e.letterCharArr);return Object(n.a)({},e,{letterCharArr:[].concat(Object(o.a)(e.letterCharArr.slice(0,d)),Object(o.a)(e.letterCharArr.slice(d+1)))})}if("solution"===t.box.type){var b=Object(c.a)(h,e.solutionCharArr);return Object(n.a)({},e,{solutionCharArr:[].concat(Object(o.a)(e.solutionCharArr.slice(0,b)),Object(o.a)(e.solutionCharArr.slice(b+1)))})}return console.log(t.box.type),e;case a.o:return Object(n.a)({},e,{reasonIncorrect:t.reasonIncorrect,correctSubmittedAnswer:t.isCorrectSolution,incorrectSubmittedAnswer:!t.isCorrectSolution});case a.p:return Object(n.a)({},e,{noGaps:!e.noGaps});case a.c:return Object(n.a)({},e,{letterCharArr:l(i({exactly:1,maxLength:10})[0],"letter"),operandCharArr:l(u,"operand"),solutionCharArr:[],noGaps:!0,answerSubmitted:!1,correctSubmittedAnswer:!1,incorrectSubmittedAnswer:!1});case a.n:if("home"===t.page)return Object(n.a)({},e,{showHome:!0,showGame:!1,showInstructions:!1,showSettings:!1});if("game"===t.page)return Object(n.a)({},e,{showHome:!1,showGame:!0,showInstructions:!1,showSettings:!1});if("instructions"===t.page)return Object(n.a)({},e,{showHome:!1,showGame:!1,showInstructions:!0,showSettings:!1});if("settings"===t.page)return Object(n.a)({},e,{showHome:!1,showGame:!1,showInstructions:!1,showSettings:!0});case a.e:return Object(n.a)({},e,{backgroundColor:t.color});case a.h:return Object(n.a)({},e,{boxColor:t.color});case a.m:return Object(n.a)({},e,{letterColor:t.color});case a.g:return Object(n.a)({},e,{boxBorderWidth:t.width});case a.f:return Object(n.a)({},e,{boxBorderColor:t.color});case a.b:return Object(n.a)({},e,{incorrectSubmittedAnswer:!1});case a.i:return Object(n.a)({},e,{homeBtnBgColor:t.color});case a.l:return Object(n.a)({},e,{homeBtnColor:t.color});case a.j:return Object(n.a)({},e,{homeBtnBorderColor:t.color});case a.k:return Object(n.a)({},e,{homeBtnBorderWidth:t.width});default:return e}}},81:function(e,t,r){e.exports=r.p+"static/media/cock.e1b8dc8a.wav"},84:function(e,t,r){e.exports=r(216)},93:function(e,t,r){},95:function(e,t,r){e.exports=r.p+"static/media/back.9c17417b.svg"}},[[84,2,1]]]);
//# sourceMappingURL=main.e5be61d5.chunk.js.map