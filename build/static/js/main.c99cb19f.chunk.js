(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";function newPuzzle(e){e({type:"NEW_PUZZLE"})}function checkSolutionValidity(e){for(var t=[],r=[],o=!1,a=0;a<e.length;a++){var n=e[a].value,c=e[a].type;"("===n?t.push(n):")"===n?t.length>0?t.pop():o=!0:r.push(c)}if("operand"===r[r.length-1])return!1;if(!0===o)return!1;if(t.length>0)return!1;for(var i=!1,s=0;s<r.length;s++)s%2===0?"letter"!==r[s]&&(i=!0):s%2===1&&"operand"!==r[s]&&(i=!0);return!i}function evaluateSolutionArr(charArr){for(var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],solutionExpression="",i=0;i<charArr.length;i++){var valToAdd="";valToAdd=alphabet.includes(charArr[i].value)?alphabet.indexOf(charArr[i].value)+1:charArr[i].value,solutionExpression+=valToAdd}String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)},solutionExpression=solutionExpression.replaceAll("\xd7","*"),solutionExpression=solutionExpression.replaceAll("\xf7","/");var solutionEvaluation=-1;try{solutionEvaluation=eval(solutionExpression)}catch(_unused){return"HUGE ERROR"}return solutionEvaluation}function submitAnswer(e){var t=e.dispatch;if(!0===checkSolutionValidity(e.solutionCharArr)){var r=evaluateSolutionArr(e.solutionCharArr);return e.letterCharArr.length>0?void t({type:"SUBMIT_ANS",reasonIncorrect:"characters",isCorrectSolution:!1}):("HUGE ERROR"===r&&t({type:"SUBMIT_ANS",reasonIncorrect:"invalid",isCorrectSolution:!1}),r%27===0?(console.log("correct solution"),void t({type:"SUBMIT_ANS",reasonIncorrect:"",isCorrectSolution:!0})):(console.log("incorrect solution"),void t({type:"SUBMIT_ANS",reasonIncorrect:"miscalculation",isCorrectSolution:!1})))}return console.log("solution is not valid"),void t({type:"SUBMIT_ANS",reasonIncorrect:"invalid",isCorrectSolution:!1})}function canMoveBox(e,t){return"letter"===e.value.type?"operand"!==t.type:"operand"===e.value.type?"letter"!==t.type:(console.log(e.type),!0)}function canMoveChar(e,t){return"letter"===e.type?"operand"!==t.type:"operand"!==e.type||"letter"!==t.type}function moveChar(e,t,r,o,a){"letter"===e.type?letterMove(e,t,r,o,a):"operand"===e.type&&operandMove(e,t,r,o,a)}function letterMove(e,t,r,o,a){a({type:"ADD_CHAR",char:e,index:t,box:o}),a({type:"REMOVE_CHAR",char:e,index:t,box:r})}function operandMove(e,t,r,o,a){"operand"===o.type?a({type:"REMOVE_CHAR",char:e,index:t,box:r}):"solution"===o.type&&"operand"===r.type?a({type:"ADD_CHAR",char:e,index:t,box:o}):"solution"===o.type&&"solution"===r.type&&(a({type:"ADD_CHAR",char:e,index:t,box:o}),a({type:"REMOVE_CHAR",char:e,index:t,box:r}))}function hoveringOver(e,t){t({type:"HOVERING_OVER",identifier:e})}function removeHoverEffect(e){e({type:"REMOVE_HOVER"})}__webpack_require__.d(__webpack_exports__,"e",function(){return newPuzzle}),__webpack_require__.d(__webpack_exports__,"g",function(){return submitAnswer}),__webpack_require__.d(__webpack_exports__,"a",function(){return canMoveBox}),__webpack_require__.d(__webpack_exports__,"b",function(){return canMoveChar}),__webpack_require__.d(__webpack_exports__,"d",function(){return moveChar}),__webpack_require__.d(__webpack_exports__,"c",function(){return hoveringOver}),__webpack_require__.d(__webpack_exports__,"f",function(){return removeHoverEffect})},14:function(e,t,r){e.exports=r.p+"static/media/gun.863baa79.wav"},20:function(e,t,r){e.exports=r.p+"static/media/cock.abbdba57.wav"},213:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o),n=r(19),c=r.n(n),i=r(9),s=(r(90),r(2)),l=r(3),u=r(5),p=r(4),d=r(6),h=r(1);var b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={backgroundColor:""},e.backgroundColor=e.backgroundColor.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"backgroundColor",value:function(){this.setState({backgroundColor:"blue"})}},{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.backgroundColor[0]).toString()+", "+parseInt(255-this.props.backgroundColor[1]).toString()+","+parseInt(255-this.props.backgroundColor[2]).toString()+")";return a.a.createElement("div",{className:"background",style:{backgroundColor:e}})}}]),t}(a.a.Component),m=Object(i.b)(function(e,t){return e})(b);function O(e,t){t({type:"SET_PAGE",page:e})}function g(e){e({type:"TOGGLE_DICTIONARY"})}var v=r(14),C=r.n(v),B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).click=e.click.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"click",value:function(){this.props.onClick(),new Audio(C.a).play()}},{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.homeBtnBgColor[0]).toString()+", "+parseInt(255-this.props.homeBtnBgColor[1]).toString()+","+parseInt(255-this.props.homeBtnBgColor[2]).toString()+")",t="rgb("+parseInt(255-this.props.homeBtnBorderColor[0]).toString()+", "+parseInt(255-this.props.homeBtnBorderColor[1]).toString()+","+parseInt(255-this.props.homeBtnBorderColor[2]).toString()+")",r="rgb("+parseInt(255-this.props.homeBtnColor[0]).toString()+", "+parseInt(255-this.props.homeBtnColor[1]).toString()+","+parseInt(255-this.props.homeBtnColor[2]).toString()+")",o=this.props.homeBtnBorderWidth;return a.a.createElement("div",{className:"button",onClick:this.click,style:{backgroundColor:e,border:o+"px solid "+t,color:r}},this.props.buttonText)}}]),t}(a.a.Component),E=Object(i.b)(function(e){return e})(B),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).setPageGame=e.setPageGame.bind(Object(h.a)(Object(h.a)(e))),e.setPageInstructions=e.setPageInstructions.bind(Object(h.a)(Object(h.a)(e))),e.setPageSettings=e.setPageSettings.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"setPageGame",value:function(){O("game",this.props.dispatch)}},{key:"setPageInstructions",value:function(){O("instructions",this.props.dispatch)}},{key:"setPageSettings",value:function(){O("settings",this.props.dispatch)}},{key:"render",value:function(){return a.a.createElement("div",{className:"page home-page"},a.a.createElement(m,null),a.a.createElement("div",{className:"home-page-title"},"Quassinobally"),a.a.createElement("div",{className:"home-page-buttons"},a.a.createElement(E,{onClick:this.setPageGame,buttonText:"Play"}),a.a.createElement(E,{onClick:this.setPageInstructions,buttonText:"Instructions"}),a.a.createElement(E,{onClick:this.setPageSettings,buttonText:"Settings"})))}}]),t}(a.a.Component),j=r(20),y=r.n(j);var _=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={hover:!1},e.setPageHome=e.setPageHome.bind(Object(h.a)(Object(h.a)(e))),e.toggleHover=e.toggleHover.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"setPageHome",value:function(){new Audio(y.a).play(),O("home",this.props.dispatch)}},{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.backHomeBtnBgColor[0]).toString()+", "+parseInt(255-this.props.backHomeBtnBgColor[1]).toString()+","+parseInt(255-this.props.backHomeBtnBgColor[2]).toString()+")",t="";return t=this.state.hover?{backgroundColor:e}:{backgroundColor:"transparent"},a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"header-back-button",onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover,onClick:this.setPageHome,style:t},a.a.createElement("img",{src:r(92),alt:"back-bitch"}),a.a.createElement("div",{className:"header-back-button-text"},"Home")))}}]),t}(a.a.Component),k=Object(i.b)(function(e,t){return e})(_),x=r(12),w="ADD_CHAR",S="REMOVE_CHAR",T="SUBMIT_ANS",A="TOGGLE_GAPS",H="NEW_PUZZLE",N="HOVERING_OVER",R="REMOVE_HOVER",I="SET_PAGE",G="SET_BG_COLOR",D="SET_BOX_COLOR",M="SET_BOX_BORDER_WIDTH",L="SET_LETTER_COLOR",W="SET_BOXBORDER_COLOR",P="CLOSE_INCORRECT_MODAL",V="SET_HOME_BTN_BG_COLOR",z="SET_HOME_BTN_COLOR",q="SET_HOME_BTN_BORDER_COLOR",U="SET_HOME_BTN_BORDER_WIDTH",X="TOGGLE_DICTIONARY",Y="SET_GAME_BTN_BG_COLOR",K="SET_GAME_BTN_TEXT_COLOR",Z="SET_GAME_BTN_BORDER_COLOR",F="SET_GAME_BTN_BORDER_WIDTH",J="SET_BACK_HOME_BTN_BG_COLOR",Q="SET_BACK_HOME_BTN_TEXT_COLOR";var $=r(21);function ee(e,t){for(var r=0;r<t.length;r++)if(e===t[r].identifier)return r;return console.log("not found in index"),null}function te(e){return"rgb("+parseInt(255-e[0]).toString()+", "+parseInt(255-e[1]).toString()+","+parseInt(255-e[2]).toString()+")"}var re=r(10);var oe={beginDrag:function(e,t,r){return console.log(r),new Audio(y.a).play(),(0,e.dispatch)({type:"TOGGLE_GAPS"}),{props:e}},isDragging:function(e,t,r){},endDrag:function(e){return(0,e.dispatch)({type:"TOGGLE_GAPS"}),{props:e}}},ae={hover:function(e,t,r){r.getDecoratedComponentInstance().hoveringOver()},drop:function(e,t,r){r.getDecoratedComponentInstance().removeHoverEffect();var o=Object(n.findDOMNode)(r).getBoundingClientRect(),a=(o.left+o.right)/2,c=0;t.getClientOffset().x>a&&(c=1);var i=e.dispatch,s=t.getItem().props.value,l=e.currentlyHovering,u=t.getItem().props.currentBox,p=e.currentBox,d=ee(l,function(e){return"letter"===e.type?e.letterCharArr:"operand"===e.type?e.operandCharArr:"solution"===e.type?e.solutionCharArr:void 0}(p))+c;re.b(s,p)?re.d(s,d,u,p,i):console.log("cant move")}},ne=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this))).state={type:e.value.type,value:e.value.value,identifier:e.value.identifier},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"hoveringOver",value:function(){re.c(this.state.identifier,this.props.dispatch)}},{key:"removeHoverEffect",value:function(){re.f(this.props.dispatch)}},{key:"render",value:function(){this.props.value.identifier;var e,t=this.props,r=t.connectDropTarget,o=t.connectDragSource,n=this.state.identifier===this.props.currentlyHovering?"push-left":"",c=this.props.isDragging?"dragging":"",i="rgb("+parseInt(255-this.props.letterColor[0]).toString()+", "+parseInt(255-this.props.letterColor[1]).toString()+","+parseInt(255-this.props.letterColor[2]).toString()+")";return o(r(a.a.createElement("div",{className:"length-"+this.props.length+" character "+this.props.value.type+"-character "+n+" "+c,style:{color:i,fontSize:(e=this.props.length,$.isBrowser?e<7?"10vw":(60/e).toString()+"vw":$.isMobile?e<7?"15vw":(110/e).toString()+"vw":void 0)}},this.props.value.value)))}}]),t}(a.a.Component);ne=Object(x.DragSource)("character",oe,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(ne),ne=Object(x.DropTarget)("character",ae,function(e,t){return{connectDropTarget:e.dropTarget(),isOverCurrent:t.isOver({shallow:!0})}})(ne);var ce=Object(i.b)(function(e){return e})(ne),ie=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={noGaps:!1},r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.boxType,t=[];"letter"===e?t=this.props.letterCharArr:"operand"===e?t=this.props.operandCharArr:"solution"===e&&(t=this.props.solutionCharArr);for(var r=[],o=0;o<t.length;o++)r.push(a.a.createElement(ce,{key:o,value:t[o],currentBox:this.props.currentBox,removeGaps:this.removeGaps,length:t.length}));return a.a.createElement("div",{className:"characters"},r)}}]),t}(a.a.Component),se={hover:function(e,t,r){},drop:function(e,t,r){if(r.removeHoverEffect(),new Audio(C.a).play(),t.isOver({shallow:!0})){var o=t.getItem().props,a=o.currentBox,c=(o.value.index,r.props),i=e.dispatch,s=Object(n.findDOMNode)(r).getBoundingClientRect(),l=(s.left+s.right)/2,u=0;t.getClientOffset().x>l&&(u=function(e){return"letter"===e.type?e.letterCharArr.length:"operand"===e.type?e.operandCharArr.length:"solution"===e.type?e.solutionCharArr.length:void 0}(c)),re.a(o,c)?re.d(o.value,u,a,c,i):console.log("cant move")}}};var le=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).removeHoverEffect=r.removeHoverEffect.bind(Object(h.a)(Object(h.a)(r))),r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"removeHoverEffect",value:function(){re.f(this.props.dispatch)}},{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.boxColor[0]).toString()+", "+parseInt(255-this.props.boxColor[1]).toString()+","+parseInt(255-this.props.boxColor[2]).toString()+")",t=this.props.boxBorderWidth+"px solid rgb("+parseInt(255-this.props.boxBorderColor[0]).toString()+", "+parseInt(255-this.props.boxBorderColor[1]).toString()+","+parseInt(255-this.props.boxBorderColor[2]).toString()+")";return(0,this.props.connectDropTarget)(a.a.createElement("div",{className:"box",style:{backgroundColor:e,border:t}},a.a.createElement(ie,{boxType:this.props.type,letterCharArr:this.props.letterCharArr,operandCharArr:this.props.operandCharArr,solutionCharArr:this.props.solutionCharArr,currentBox:this.props})))}}]),t}(a.a.Component);le=Object(x.DropTarget)("character",se,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver({shallow:!0})}})(le);var ue=Object(i.b)(function(e,t){return e})(le),pe=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(ue,{type:"letter"})}}]),t}(ue),de=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={operands:"+-\xd7\xf7",droppable:["operand"]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(ue,{type:"operand",value:this.state.operands})}}]),t}(a.a.Component),he=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={droppable:["operand","letter"]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(ue,{type:"solution",value:""})}}]),t}(a.a.Component),be=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"boxes"},a.a.createElement(pe,null),a.a.createElement(de,null),a.a.createElement(he,null))}}]),t}(a.a.Component);var me=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).click=r.click.bind(Object(h.a)(Object(h.a)(r))),r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"click",value:function(){new Audio(C.a).play(),"new-word"===this.props.type?re.e(this.props.dispatch):"submit"===this.props.type?re.g(this.props):"dictionary"===this.props.type&&g(this.props.dispatch)}},{key:"render",value:function(){return a.a.createElement("div",{className:"button",onClick:this.click,style:{backgroundColor:this.props.bgColor,border:this.props.borderWidth+"px solid "+this.props.borderColor,color:this.props.textColor}},this.props.text)}}]),t}(a.a.Component),Oe=Object(i.b)(function(e,t){return e})(me),ge=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"stopClose",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},{key:"render",value:function(){var e=this;return this.props.show?a.a.createElement("div",{className:"modal-backdrop"},a.a.createElement("div",{className:"modal",onClick:function(t){return e.stopClose(t)}},this.props.children)):null}}]),t}(a.a.Component),ve=Object(i.b)(function(e){return e})(ge),Ce=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).click=e.click.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"click",value:function(){new Audio(y.a).play(),this.props.onClick()}},{key:"render",value:function(){return a.a.createElement("div",{className:"button",onClick:this.click},this.props.text)}}]),t}(a.a.Component),Be=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).newPuzzle=e.newPuzzle.bind(Object(h.a)(Object(h.a)(e))),e.goHome=e.goHome.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"newPuzzle",value:function(){re.e(this.props.dispatch)}},{key:"goHome",value:function(){O("home",this.props.dispatch),re.e(this.props.dispatch)}},{key:"render",value:function(){return this.props.show?a.a.createElement("div",{className:"modal-content"},a.a.createElement("div",{className:"modal-title-section"},a.a.createElement("div",{className:"modal-title"},"Correct solution!"),a.a.createElement("div",{className:"modal-subtitle"},"You solved the puzzle in x seconds!")),a.a.createElement("div",{className:"correct-buttons"},a.a.createElement(Ce,{onClick:this.newPuzzle,text:"Another Puzzle"}),a.a.createElement(Ce,{onClick:this.goHome,text:"Home"}))):null}}]),t}(a.a.Component),Ee=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={reasonIncorrect:e.reasonIncorrect,incorrectString:""},r.goHome=r.goHome.bind(Object(h.a)(Object(h.a)(r))),r}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.state.reasonIncorrect;"characters"===e?this.setState({incorrectString:"You must use all of the characters in the character box in your solution."}):"invalid"===e?this.setState({incorrectString:"There is a problem with your solution. Make sure you include an operand in between each letter and have used any parentheses correctly."}):"miscalculation"===e?this.setState({incorrectString:"There was a problem with the computation."}):console.log(e)}},{key:"goHome",value:function(){O("home",this.props.dispatch),re.e(this.props.dispatch)}},{key:"render",value:function(){return this.props.show?a.a.createElement("div",{className:"modal-content"},a.a.createElement("div",{className:"modal-title-section"},a.a.createElement("div",{className:"modal-title"},"Incorrect Solution."),a.a.createElement("div",{className:"modal-subtitle"},this.state.incorrectString)),a.a.createElement("div",{className:"correct-buttons"},a.a.createElement(Ce,{onClick:this.props.closeModal,text:"Retry"}),a.a.createElement(Ce,{onClick:this.goHome,text:"Home"}))):null}}]),t}(a.a.Component),fe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.show?a.a.createElement("div",{className:"modal-content dictionary"},a.a.createElement("div",{className:"dictionary-columns"},a.a.createElement("div",{className:"dictionary-column"},"A = 1 ",a.a.createElement("br",null),"C = 3 ",a.a.createElement("br",null),"E = 5 ",a.a.createElement("br",null),"G = 7 ",a.a.createElement("br",null),"I = 9 ",a.a.createElement("br",null),"K = 11 ",a.a.createElement("br",null),"M = 13 ",a.a.createElement("br",null),"O = 15 ",a.a.createElement("br",null),"Q = 17 ",a.a.createElement("br",null),"S = 19 ",a.a.createElement("br",null),"U = 21 ",a.a.createElement("br",null),"W = 23 ",a.a.createElement("br",null),"Y = 25 ",a.a.createElement("br",null)),a.a.createElement("div",{className:"dictionary-column"},"B = 2 ",a.a.createElement("br",null),"D = 4 ",a.a.createElement("br",null),"F = 6 ",a.a.createElement("br",null),"H = 8 ",a.a.createElement("br",null),"J = 10 ",a.a.createElement("br",null),"L = 12 ",a.a.createElement("br",null),"N = 14 ",a.a.createElement("br",null),"P = 16 ",a.a.createElement("br",null),"R = 18 ",a.a.createElement("br",null),"T = 20 ",a.a.createElement("br",null),"V = 22 ",a.a.createElement("br",null),"X = 24 ",a.a.createElement("br",null),"Z = 26 ",a.a.createElement("br",null))),a.a.createElement(Ce,{onClick:this.props.closeModal,text:"Close"})):null}}]),t}(a.a.Component);var je=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).closeIncorrectModal=e.closeIncorrectModal.bind(Object(h.a)(Object(h.a)(e))),e.closeDictionaryModal=e.closeDictionaryModal.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"closeIncorrectModal",value:function(){(0,this.props.dispatch)({type:"CLOSE_INCORRECT_MODAL"})}},{key:"closeDictionaryModal",value:function(){g(this.props.dispatch)}},{key:"render",value:function(){var e=this.props.dispatch,t=te(this.props.gameBtnBgColor),r=te(this.props.gameBtnBorderColor),o=te(this.props.gameBtnTextColor),n=this.props.gameBtnBorderWidth;return a.a.createElement("div",{className:"buttons"},a.a.createElement(Oe,{bgColor:t,borderColor:r,textColor:o,borderWidth:n,type:"new-word",text:"New Word"}),a.a.createElement(Oe,{bgColor:t,borderColor:r,textColor:o,borderWidth:n,dispatch:e,type:"submit",text:"Submit"}),a.a.createElement(Oe,{bgColor:t,borderColor:r,textColor:o,borderWidth:n,type:"dictionary",text:"Dictionary"}),a.a.createElement(ve,{show:this.props.correctSubmittedAnswer||this.props.incorrectSubmittedAnswer||this.props.showDictionary},a.a.createElement(Be,{dispatch:e,show:this.props.correctSubmittedAnswer}),a.a.createElement(Ee,{reasonIncorrect:this.props.reasonIncorrect,dispatch:e,closeModal:this.closeIncorrectModal,show:this.props.incorrectSubmittedAnswer}),a.a.createElement(fe,{show:this.props.showDictionary,closeModal:this.closeDictionaryModal})))}}]),t}(a.a.Component),ye=Object(i.b)(function(e,t){return e})(je),_e=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"page game-root"},a.a.createElement(k,null),a.a.createElement(m,null),a.a.createElement(be,null),a.a.createElement(ye,null))}}]),t}(a.a.Component),ke=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"page instructions-page"},a.a.createElement(k,null),a.a.createElement(m,null),a.a.createElement("div",{className:"instruction"},"Quassinobally is a word and math game where each word is a puzzle."),a.a.createElement("div",{className:"instruction"},'Each letter has a value attached to it based on its position in the alphabet- A = 1, B = 2, C = 3 etc.. The "Reference" button on the game page contains a reference of the value of each letter.'),a.a.createElement("div",{className:"instruction"},"The object of the game is to construct an equation using all of the letters in each word that is equal to a number modulus 27 that equals 0."),a.a.createElement("div",{className:"instruction"},"That is to say, your answer must be a multiple of 27, or 0."),a.a.createElement("div",{className:"instruction"},'For example, if the starting word is "cab" c-a-b would be a solution, because the value of C = 3, A = 1, and B = 2. Thus, 3 - 1 - 2 = 0.'),a.a.createElement("div",{className:"instruction"},"To construct a solution, drag the letters and operands from the letter and operand box into the solution box (the bottom box). You may use any and as many operands as you wish as long as it is a valid mathematical expression. Keep an eye on the number of operands you use."),a.a.createElement("div",{className:"instruction"},'If you wish to multiply a value, you must use the multiplication operand. For example if the puzzle you are solving is the word "dad", ((d)a - d) may seem like a correct solution at first glance, but is missing the multiplication operand. A correct solution may instead be ((d) \xd7 a - d).'),a.a.createElement("div",{className:"instruction"},"In the settings page you can customize the application to your liking. \u263a"))}}]),t}(a.a.Component),xe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).updateRedVal=e.updateRedVal.bind(Object(h.a)(Object(h.a)(e))),e.updateBlueVal=e.updateBlueVal.bind(Object(h.a)(Object(h.a)(e))),e.updateGreenVal=e.updateGreenVal.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateColor",value:function(e,t,r){var o=[e,t,r];this.props.updateColor(o)}},{key:"updateRedVal",value:function(e){var t=e.target.value,r=this.props.green,o=this.props.blue;this.updateColor(t,r,o)}},{key:"updateGreenVal",value:function(e){var t=this.props.red,r=e.target.value,o=this.props.blue;this.updateColor(t,r,o)}},{key:"updateBlueVal",value:function(e){var t=this.props.red,r=this.props.green,o=e.target.value;this.updateColor(t,r,o)}},{key:"render",value:function(){return a.a.createElement("div",{className:"color-picker"},a.a.createElement("input",{type:"range",className:"color-selector",step:"1",min:"0",max:"255",value:this.props.red,onChange:this.updateRedVal}),a.a.createElement("input",{type:"range",className:"color-selector",step:"1",min:"0",max:"255",value:this.props.green,onChange:this.updateGreenVal}),a.a.createElement("input",{type:"range",className:"color-selector",step:"1",min:"0",max:"255",value:this.props.blue,onChange:this.updateBlueVal}))}}]),t}(a.a.Component),we=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="rgb("+parseInt(255-this.props.red).toString()+", "+parseInt(255-this.props.green).toString()+","+parseInt(255-this.props.blue).toString()+")";return a.a.createElement("div",{className:"color-display",style:{backgroundColor:e}},a.a.createElement("div",{style:{color:e}},"nut"))}}]),t}(a.a.Component),Se=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).updateVal=e.updateVal.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateVal",value:function(e){this.props.updateVal(e.target.value)}},{key:"render",value:function(){return a.a.createElement("input",{type:"range",step:this.props.step,min:this.props.min,max:this.props.max,value:this.props.value,onChange:this.updateVal})}}]),t}(a.a.Component);var Te=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).updateBackgroundColor=e.updateBackgroundColor.bind(Object(h.a)(Object(h.a)(e))),e.updateBoxColor=e.updateBoxColor.bind(Object(h.a)(Object(h.a)(e))),e.updateLetterColor=e.updateLetterColor.bind(Object(h.a)(Object(h.a)(e))),e.updateBoxBorderColor=e.updateBoxBorderColor.bind(Object(h.a)(Object(h.a)(e))),e.updateHomeBtnBgColor=e.updateHomeBtnBgColor.bind(Object(h.a)(Object(h.a)(e))),e.updateHomeBtnColor=e.updateHomeBtnColor.bind(Object(h.a)(Object(h.a)(e))),e.updateHomeBtnBorderColor=e.updateHomeBtnBorderColor.bind(Object(h.a)(Object(h.a)(e))),e.updateHomeBtnBorderWidth=e.updateHomeBtnBorderWidth.bind(Object(h.a)(Object(h.a)(e))),e.updateBoxBorderWidth=e.updateBoxBorderWidth.bind(Object(h.a)(Object(h.a)(e))),e.updateGameBtnBackgroundColor=e.updateGameBtnBackgroundColor.bind(Object(h.a)(Object(h.a)(e))),e.updateGameBtnTextColor=e.updateGameBtnTextColor.bind(Object(h.a)(Object(h.a)(e))),e.updateGameBtnBorderColor=e.updateGameBtnBorderColor.bind(Object(h.a)(Object(h.a)(e))),e.updateGameBtnBorderWidth=e.updateGameBtnBorderWidth.bind(Object(h.a)(Object(h.a)(e))),e.updateBackHomeBtnBackgroundColor=e.updateBackHomeBtnBackgroundColor.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateBackgroundColor",value:function(e){!function(e,t){t({type:"SET_BG_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateBoxColor",value:function(e){!function(e,t){t({type:"SET_BOX_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateBoxBorderWidth",value:function(e){!function(e,t){t({type:"SET_BOX_BORDER_WIDTH",width:e})}(e,this.props.dispatch)}},{key:"updateLetterColor",value:function(e){!function(e,t){t({type:"SET_LETTER_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateBoxBorderColor",value:function(e){!function(e,t){t({type:"SET_BOXBORDER_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateHomeBtnBgColor",value:function(e){!function(e,t){t({type:"SET_HOME_BTN_BG_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateHomeBtnColor",value:function(e){!function(e,t){t({type:"SET_HOME_BTN_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateHomeBtnBorderColor",value:function(e){!function(e,t){t({type:"SET_HOME_BTN_BORDER_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateHomeBtnBorderWidth",value:function(e){!function(e,t){t({type:"SET_HOME_BTN_BORDER_WIDTH",width:e})}(e,this.props.dispatch)}},{key:"updateGameBtnBackgroundColor",value:function(e){!function(e,t){t({type:"SET_GAME_BTN_BG_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateGameBtnTextColor",value:function(e){!function(e,t){t({type:"SET_GAME_BTN_TEXT_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateGameBtnBorderColor",value:function(e){!function(e,t){console.log("set text color"),t({type:"SET_GAME_BTN_BORDER_COLOR",color:e})}(e,this.props.dispatch)}},{key:"updateGameBtnBorderWidth",value:function(e){!function(e,t){t({type:"SET_GAME_BTN_BORDER_WIDTH",width:e})}(e,this.props.dispatch)}},{key:"updateBackHomeBtnBackgroundColor",value:function(e){!function(e,t){t({type:"SET_BACK_HOME_BTN_BG_COLOR",color:e})}(e,this.props.dispatch)}},{key:"render",value:function(){var e=this.props.backgroundColor[0],t=this.props.backgroundColor[1],r=this.props.backgroundColor[2],o=this.props.boxColor[0],n=this.props.boxColor[1],c=this.props.boxColor[2],i=this.props.letterColor[0],s=this.props.letterColor[1],l=this.props.letterColor[2],u=this.props.boxBorderWidth,p=this.props.boxBorderColor[0],d=this.props.boxBorderColor[1],h=this.props.boxBorderColor[2],b=this.props.homeBtnBgColor[0],O=this.props.homeBtnBgColor[1],g=this.props.homeBtnBgColor[2],v=this.props.homeBtnColor[0],C=this.props.homeBtnColor[1],B=this.props.homeBtnColor[2],E=this.props.homeBtnBorderColor[0],f=this.props.homeBtnBorderColor[1],j=this.props.homeBtnBorderColor[2],y=this.props.homeBtnBorderWidth,_=this.props.gameBtnBgColor[0],x=this.props.gameBtnBgColor[1],w=this.props.gameBtnBgColor[2],S=this.props.gameBtnTextColor[0],T=this.props.gameBtnTextColor[1],A=this.props.gameBtnTextColor[2],H=this.props.gameBtnBorderColor[0],N=this.props.gameBtnBorderColor[1],R=this.props.gameBtnBorderColor[2],I=this.props.gameBtnBorderWidth,G=this.props.backHomeBtnBgColor[0],D=this.props.backHomeBtnBgColor[1],M=this.props.backHomeBtnBgColor[2];return a.a.createElement("div",{className:"page settings-page"},a.a.createElement(k,null),a.a.createElement(m,null),a.a.createElement("div",{className:"settings-modifier"},a.a.createElement("div",{className:"background-color"},"Background Color"),a.a.createElement(xe,{red:e,green:t,blue:r,updateColor:this.updateBackgroundColor}),a.a.createElement("div",{className:"box-color"},"Box Color"),a.a.createElement(xe,{red:o,green:n,blue:c,updateColor:this.updateBoxColor}),a.a.createElement(we,{red:o,green:n,blue:c}),a.a.createElement("div",{className:"box-border-width"},"Box Border Width"),a.a.createElement(Se,{step:"1",min:"0",max:"15",value:u,updateVal:this.updateBoxBorderWidth}),a.a.createElement("div",{className:"letter-color"},"Letter color"),a.a.createElement(xe,{red:i,green:s,blue:l,updateColor:this.updateLetterColor}),a.a.createElement(we,{red:i,green:s,blue:l}),a.a.createElement("div",{className:"letter-color"},"Box Border Color"),a.a.createElement(xe,{red:p,green:d,blue:h,updateColor:this.updateBoxBorderColor}),a.a.createElement(we,{red:p,green:d,blue:h}),a.a.createElement("div",{className:"home-button-background-color"},"Home Button Background Color"),a.a.createElement(xe,{red:b,green:O,blue:g,updateColor:this.updateHomeBtnBgColor}),a.a.createElement(we,{red:b,green:O,blue:g}),a.a.createElement("div",{className:"home-button-background-color"},"Home Button Text Color"),a.a.createElement(xe,{red:v,green:C,blue:B,updateColor:this.updateHomeBtnColor}),a.a.createElement(we,{red:v,green:C,blue:B}),a.a.createElement("div",{className:"home-button-background-color"},"Home Button Border Color"),a.a.createElement(xe,{red:E,green:f,blue:j,updateColor:this.updateHomeBtnBorderColor}),a.a.createElement(we,{red:E,green:f,blue:j}),a.a.createElement("div",{className:"home-button-border-width"},"Home Button Border Width"),a.a.createElement(Se,{step:"1",min:"0",max:"10",value:y,updateVal:this.updateHomeBtnBorderWidth}),a.a.createElement("div",{className:"game-button-background-color"},"Game Button Background Color"),a.a.createElement(xe,{red:_,green:x,blue:w,updateColor:this.updateGameBtnBackgroundColor}),a.a.createElement(we,{red:_,green:x,blue:w}),a.a.createElement("div",{className:"game-button-background-color"},"Game Button Text Color"),a.a.createElement(xe,{red:S,green:T,blue:A,updateColor:this.updateGameBtnTextColor}),a.a.createElement(we,{red:S,green:T,blue:A}),a.a.createElement("div",{className:"game-button-background-color"},"Game Button Border Color"),a.a.createElement(xe,{red:H,green:N,blue:R,updateColor:this.updateGameBtnBorderColor}),a.a.createElement(we,{red:H,green:N,blue:R}),a.a.createElement("div",{className:"game-button-border-width"},"Game Button Border Width"),a.a.createElement(Se,{step:"1",min:"0",max:"10",value:I,updateVal:this.updateGameBtnBorderWidth}),a.a.createElement("div",{className:"back-home-button-background-color"},"Back Home Button Background Color"),a.a.createElement(xe,{red:G,green:D,blue:M,updateColor:this.updateBackHomeBtnBackgroundColor}),a.a.createElement(we,{red:G,green:D,blue:M})))}}]),t}(a.a.Component),Ae=Object(i.b)(function(e,t){return e})(Te),He=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.showHome?a.a.createElement(f,{dispatch:this.props.dispatch}):this.props.showGame?a.a.createElement(_e,{dispatch:this.props.dispatch}):this.props.showInstructions?a.a.createElement(ke,{dispatch:this.props.dispatch}):this.props.showSettings?a.a.createElement(Ae,null):a.a.createElement("div",null,"you fuckdedup")}}]),t}(a.a.Component),Ne=Object(i.b)(function(e){return e})(He),Re=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(Ne,null)}}]),t}(a.a.Component),Ie=r(79),Ge=r.n(Ie),De=r(80),Me=r.n(De),Le=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return $.isBrowser?(console.log("is browser"),a.a.createElement(x.DragDropContextProvider,{backend:Ge.a},a.a.createElement(Re,null))):$.isMobile?(console.log("is mobile"),a.a.createElement(x.DragDropContextProvider,{backend:Me.a},a.a.createElement(Re,null))):void 0}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=r(26),Pe=r(11),Ve=r(7),ze=r(212);function qe(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<15;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function Ue(e,t){for(var r=[],o=0;o<e.length;o++)r.push({type:t,value:e[o],identifier:qe()});return r}var Xe="+-\xd7\xf7()",Ye={letterCharArr:Ue(ze({exactly:1,maxLength:10})[0],"letter"),operandCharArr:Ue(Xe,"operand"),solutionCharArr:[],currentlyHovering:"",noGaps:!0,answerSubmitted:!1,reasonIncorrect:"",correctSubmittedAnswer:!1,incorrectSubmittedAnswer:!1,lackingChars:!1,invalidAnswer:!1,showHome:!0,showGame:!1,showDictionary:!1,showInstructions:!1,showSettings:!1,backgroundColor:[0,128,255],boxColor:[0,255,255],letterColor:[0,0,255],boxBorderWidth:3,boxBorderColor:[0,0,255],homeBtnBgColor:[0,128,255],homeBtnColor:[255,255,255],homeBtnBorderColor:[255,255,255],homeBtnBorderWidth:2,gameBtnBgColor:[0,128,255],gameBtnTextColor:[255,255,255],gameBtnBorderColor:[255,255,255],gameBtnBorderWidth:2,backHomeBtnBgColor:[255,128,255],backHomeBtnTextColor:[255,255,255]};var Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var r={type:t.char.type,value:t.char.value,identifier:qe()};if("letter"===t.box.type)return Object(Ve.a)({},e,{letterCharArr:[].concat(Object(Pe.a)(e.letterCharArr.slice(0,t.index)),[r],Object(Pe.a)(e.letterCharArr.slice(t.index)))});if("operand"===t.box.type)return Object(Ve.a)({},e,{operandCharArr:[].concat(Object(Pe.a)(e.operandCharArr.slice(0,t.index)),[r],Object(Pe.a)(e.operandCharArr.slice(t.index)))});if("solution"===t.box.type)return Object(Ve.a)({},e,{solutionCharArr:[].concat(Object(Pe.a)(e.solutionCharArr.slice(0,t.index)),[r],Object(Pe.a)(e.solutionCharArr.slice(t.index)))});break;case S:var o=t.char.identifier;if("letter"===t.box.type){var a=ee(o,e.letterCharArr);return Object(Ve.a)({},e,{letterCharArr:[].concat(Object(Pe.a)(e.letterCharArr.slice(0,a)),Object(Pe.a)(e.letterCharArr.slice(a+1)))})}if("solution"===t.box.type){var n=ee(o,e.solutionCharArr);return Object(Ve.a)({},e,{solutionCharArr:[].concat(Object(Pe.a)(e.solutionCharArr.slice(0,n)),Object(Pe.a)(e.solutionCharArr.slice(n+1)))})}return console.log(t.box.type),e;case T:return Object(Ve.a)({},e,{reasonIncorrect:t.reasonIncorrect,correctSubmittedAnswer:t.isCorrectSolution,incorrectSubmittedAnswer:!t.isCorrectSolution});case A:return Object(Ve.a)({},e,{noGaps:!e.noGaps});case H:return Object(Ve.a)({},e,{letterCharArr:Ue(ze({exactly:1,maxLength:10})[0],"letter"),operandCharArr:Ue(Xe,"operand"),solutionCharArr:[],noGaps:!0,answerSubmitted:!1,correctSubmittedAnswer:!1,incorrectSubmittedAnswer:!1});case I:if("home"===t.page)return Object(Ve.a)({},e,{showHome:!0,showGame:!1,showInstructions:!1,showSettings:!1});if("game"===t.page)return Object(Ve.a)({},e,{showHome:!1,showGame:!0,showInstructions:!1,showSettings:!1});if("instructions"===t.page)return Object(Ve.a)({},e,{showHome:!1,showGame:!1,showInstructions:!0,showSettings:!1});if("settings"===t.page)return Object(Ve.a)({},e,{showHome:!1,showGame:!1,showInstructions:!1,showSettings:!0});break;case G:return Object(Ve.a)({},e,{backgroundColor:t.color});case D:return Object(Ve.a)({},e,{boxColor:t.color});case L:return Object(Ve.a)({},e,{letterColor:t.color});case M:return Object(Ve.a)({},e,{boxBorderWidth:t.width});case W:return Object(Ve.a)({},e,{boxBorderColor:t.color});case P:return Object(Ve.a)({},e,{incorrectSubmittedAnswer:!1});case V:return Object(Ve.a)({},e,{homeBtnBgColor:t.color});case z:return Object(Ve.a)({},e,{homeBtnColor:t.color});case q:return Object(Ve.a)({},e,{homeBtnBorderColor:t.color});case U:return Object(Ve.a)({},e,{homeBtnBorderWidth:t.width});case X:return Object(Ve.a)({},e,{showDictionary:!e.showDictionary});case N:return Object(Ve.a)({},e,{currentlyHovering:t.identifier});case R:return Object(Ve.a)({},e,{currentlyHovering:""});case Y:return Object(Ve.a)({},e,{gameBtnBgColor:t.color});case K:return Object(Ve.a)({},e,{gameBtnTextColor:t.color});case Z:return Object(Ve.a)({},e,{gameBtnBorderColor:t.color});case F:return Object(Ve.a)({},e,{gameBtnBorderWidth:t.width});case J:return Object(Ve.a)({},e,{backHomeBtnBgColor:t.color});case Q:return Object(Ve.a)({},e,{backHomeBtnTextColor:t.color});default:return e}},Ze=Object(We.createStore)(Ke);c.a.render(a.a.createElement(i.a,{store:Ze},a.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,r){e.exports=r(213)},90:function(e,t,r){},92:function(e,t,r){e.exports=r.p+"static/media/back.9c17417b.svg"}},[[81,2,1]]]);
//# sourceMappingURL=main.c99cb19f.chunk.js.map