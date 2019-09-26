(window.webpackJsonpsocialApp=window.webpackJsonpsocialApp||[]).push([[0],{52:function(e,t,n){e.exports=n(91)},57:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(7),r=n.n(s),i=(n(57),n(11)),c=n(8),l=n(15),u=n(16),m=n(17),d=n(43),h=n.n(d).a.initializeApp({apiKey:"AIzaSyDFtFSywiZ3BJ9KSxLEfOgRjmnmqsRfxCg",authDomain:"react-notes-61e38.firebaseapp.com",databaseURL:"https://react-notes-61e38.firebaseio.com",projectId:"react-notes-61e38",storageBucket:"",messagingSenderId:"72182355328",appId:"1:72182355328:web:35ff3ba8f20ca05c4fdd65"}),f=n(14),p=n(45),b=n.n(p),g=n(123),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.login=function(e){e.preventDefault(),h.auth().signInWithEmailAndPassword(n.state.email,n.state.password).catch((function(e){n.setState({fireErrors:e.message})}))},n.register=function(e){e.preventDefault(),h.auth().createUserWithEmailAndPassword(n.state.email,n.state.password).catch((function(e){n.setState({fireErrors:e.message})}))},n.getAction=function(e){"reg"===e?n.setState({formTitle:"Register New User",loginBtn:!1,fireErrors:""}):n.setState({formTitle:"Login",loginBtn:!0,fireErrors:""})},n.state={email:"",password:"",fireErrors:"",formTitle:"Login",loginBtn:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,n=this.state.fireErrors?o.a.createElement("div",{className:"error"},this.state.fireErrors):null,a=this.state.loginBtn?o.a.createElement("button",{type:"submit",className:"loginBtn",onClick:this.login},"Enter "):o.a.createElement("button",{type:"submit",className:"loginBtn",onClick:this.register},"Register"),s=this.state.loginBtn?o.a.createElement("button",{className:"registerBtn",onClick:function(){return t.getAction("reg")}},"Register"):o.a.createElement("button",{className:"registerBtn",onClick:function(){return t.getAction("login")}},"Login"),r=this.props.classes;return o.a.createElement("div",{className:"form_block"},o.a.createElement("div",{id:"title"},this.state.formTitle),o.a.createElement("div",{className:"body"},n,o.a.createElement("form",null,o.a.createElement(g.a,{className:r.input,type:"text",value:this.state.email,onChange:this.handleChange,name:"email",label:"Email"}),o.a.createElement(g.a,(e={type:"password",className:r.input,value:this.state.password,onChange:this.handleChange,name:"password"},Object(f.a)(e,"type","password"),Object(f.a)(e,"label","Password"),e))),o.a.createElement("div",{className:"buttons"},a,s)))}}]),t}(a.Component),E=b()({input:{margin:"0.5rem"}})(v),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleRemoveNote=function(e){n.props.removeNote(e)},n.noteContent=e.noteContent,n.noteId=e.noteId,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"note fade_in"},o.a.createElement("p",null,this.noteContent))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleUserInput=function(e){n.setState({noteNewContent:e.target.value})},n.writeNote=function(e){n.props.addNote(n.state.noteNewContent),n.setState({noteNewContent:""})},n.state={noteNewContent:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"noteForm"},o.a.createElement("input",{type:"text",placeholder:"Please write text here...",value:this.state.noteNewContent,onChange:this.handleUserInput}),o.a.createElement("button",{className:"btnAdd",onClick:this.writeNote},"Add"))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).logOut=function(){h.auth().signOut()},n.addNote=function(e){n.database.push().set({noteContent:e})},n.removeNote=function(e){n.database.child(e).remove()},n.database=h.database().ref().child("notes"),n.state={notes:[],userEmail:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.state.notes;this.database.on("child_added",(function(n){t.push({id:n.key,noteContent:n.val().noteContent}),e.setState({notes:t})})),this.database.on("child_removed",(function(n){for(var a=0;a<t.length;a++)t[a].id===n.key&&t.splice(a,1);e.setState({notes:t})}))}},{key:"componentDidMount",value:function(){var e=h.auth().currentUser;e&&this.setState({userEmail:e.email})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"boxes_home"},o.a.createElement("div",{className:"box_me"},o.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpErtT1Ehnevyx6fpihxPb8kB-2N7jf0-jsGQfSrqHE6R02ZHM-Q",alt:""}),o.a.createElement("span",{className:"my_email"},this.state.userEmail),o.a.createElement("button",{onClick:this.logOut},"logOut")),o.a.createElement("div",{className:"notesBody"},o.a.createElement("div",{className:"noteForm"},o.a.createElement(w,{addNote:this.addNote})),o.a.createElement("div",{className:"notex_box"},this.state.notes.map((function(t,n){return o.a.createElement(N,{noteContent:t.noteContent,noteId:t.id,key:t.id,removeNote:e.removeNote})})))),o.a.createElement("div",{className:"other_user"},o.a.createElement("h2",null,"other")))}}]),t}(a.Component),j=(n(90),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).authListener=function(){h.auth().onAuthStateChanged((function(e){e?n.setState({user:e}):n.setState({user:null})}))},n.state={user:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.user?o.a.createElement(O,null):o.a.createElement(E,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.a5abc3cb.chunk.js.map