function e(a){throw a;}var h=void 0,j=!0,k=null,l=!1,m,aa=this;function n(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==h?d[f]=b:d=d[f]?d[f]:d[f]={}}function r(a,b){function c(){}c.prototype=b.prototype;a.Ma=b.prototype;a.prototype=new c};function ba(a,b){this.x=a!==h?a:0;this.y=b!==h?b:0}ba.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function s(a,b){this.x=a;this.y=b}r(s,ba);s.prototype.scale=function(a){this.x*=a;this.y*=a;return this};s.prototype.rotate=function(a){var b=Math.cos(a),a=Math.sin(a),c=this.y*b+this.x*a;this.x=this.x*b-this.y*a;this.y=c;return this};var t;HTMLCanvasElement.ta=new s(0,0);function fa(a){var b=u,c=HTMLCanvasElement.ta;c.x=0;c.y=0;var d=$(b).offset(),b=$(b).height();c.x=a.pageX-d.left;c.y=b-(a.pageY-d.top);return c}window.ya=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};n("requestAnimationFrame",window.requestAnimationFrame);
function ga(a,b){console.log(WebGLDebugUtils.glEnumToString(a)+" was caused by call to "+b)}var w=k,x=l,ha={},ia=k,y=k,ja=k,u=k,z=j,A={},B={},D={},ka={},la=Date.now(),E=0,ma=k,F=[];function G(a){var b=ha[a],c=w;if(a!=ia){console.log("selecting program "+a);ia=a;c.validateProgram(b);c.useProgram(b);for(var d in b.a)c.enableVertexAttribArray(b.a[d])}return b}function qa(){var a=u;w.ba=a.width;w.N=a.height}
function ra(){var a=w;H("default",function(b){b.o=a.getUniformLocation(b,"uMVPMatrix");b.a={vertexPositionAttribute:a.getAttribLocation(b,"aVertexPosition"),vertexColorAttribute:a.getAttribLocation(b,"aVertexColor")};b.mvpMatrixUniform=b.o;b.attribs=b.a});H("texture",function(b){b.o=a.getUniformLocation(b,"uMVPMatrix");b.Z=a.getUniformLocation(b,"uSampler");b.a={vertexColorAttribute:a.getAttribLocation(b,"aVertexColor"),textureCoordAttribute:a.getAttribLocation(b,"aTextureCoord"),vertexPositionAttribute:a.getAttribLocation(b,
"aVertexPosition")};b.mvpMatrixUniform=b.o;b.samplerUniform=b.Z;b.attribs=b.a})}
function H(a,b){var c=w,d=sa(a,"frag"),f=sa(a,"vert"),i=c.createShader(c.FRAGMENT_SHADER);c.shaderSource(i,d);c.compileShader(i);c.getShaderParameter(i,c.COMPILE_STATUS)?(d=c.createShader(c.VERTEX_SHADER),c.shaderSource(d,f),c.compileShader(d),c.getShaderParameter(d,c.COMPILE_STATUS)?(c=w,f=c.createProgram(),c.attachShader(f,i),c.attachShader(f,d),c.linkProgram(f),c.getProgramParameter(f,c.LINK_STATUS)||console.log("problem linking shader"),ha[a]=f,b&&b(f)):console.log("problem compiling vertex shader "+
a+"("+c.getShaderInfoLog(d)+"):\n"+f)):console.log("problem compiling fragment shader "+a+"("+c.getShaderInfoLog(i)+"):\n"+d)}function sa(a,b){var c="";$.ajax({url:"shaders/"+a+"."+b,async:l,type:"GET",success:function(a,b){"success"==b?c=a:console.log("error getting the shader data")}});return c}
function I(a,b,c){var d=h;"object"==typeof b&&(d=b.dataType,b=b.path);A[a]||(A[a]={});var f=A[a];if(f[b])if("loading"==f[b].status)c&&f[b].C.push(c);else if("loaded"==f[b].status)c&&c(f[b].data);else{if("try"==f[b].status){f[b].status="loading";if(D[a])D[a](a,{url:b,dataType:d});else D["default"](a,{url:b,dataType:d});c&&f[b].C.push(c)}}else f[b]={data:k,status:"try",C:[]},c&&f[b].C.push(c),I(a,{path:b,dataType:d})}
function J(a,b){var c=ka[a];c||(ka[a]=[],c=ka[a]);b&&c.push(b);var d=j;if("all"==a)for(var f in A){var i=A[f],g;for(g in i)if("loaded"!=i[g].status){d=l;break}if(!d)break}else for(g in i=A[a],i)if("loaded"!=i[g].status){d=l;break}if(d)for(;d=c.shift();)d()}function K(a,b){return b?A[a][b].data:k}
function ta(a,b){z&&(b.L=w.createTexture());A.texture[a].data=b;var c;if(z){c=w;var d=j;try{var f=0;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,1);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,b.L);c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,b);f=c.getError();0!=f&&(console.log("gl error "+f),d=l);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.LINEAR);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.LINEAR);c.bindTexture(c.TEXTURE_2D,k)}catch(i){console.log("got some error: "+
i),d=l}c=d}else c=j;return c}function ua(a,b){var c=new Image,d=b.url;c.addEventListener("load",function(){var b=A.texture[d];if(B[a](d,c)){b.status="loaded";for(var i;i=b.C.shift();)i(b.data);J(a);J("all")}else b.status="try",I(a,d)},l);c.src=d}
function va(a,b){var c=b.url;$.ajax({url:c,dataType:b.dataType,success:function(b,f){var i=A[a][c];if("success"==f){var g=B[a];g||e("No handler for asset of type "+a);if(g(c,b)){for(i.status="loaded";g=i.C.shift();)g(i.data);J(a);J("all")}else i.status="try",I(a,c)}else console.log("Error loading asset "+c)}})}function wa(){var a=h;z?(a=w,a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT)):(a=t,a.setTransform(1,0,0,1,0,0),a.fillRect(0,0,a.ba,a.N));ja&&ja.O();a=Date.now();E=a-la;la=a}
var xa=Date.now(),za=0,Aa=0,Ba=0,L=vec3.create();function Da(a){var a=fa(a),b=0,c=F.length;for(L.set([a.x,a.y]);b<c;b++)F[b](L,0)}function Ea(a){var a=fa(a),b=0,c=F.length;for(L.set([a.x,a.y]);b<c;b++)F[b](L,1)}function Fa(a){var a=fa(a),b=0,c=F.length;for(L.set([a.x,a.y]);b<c;b++)F[b](L,2)}function Ga(){if(!x){window.ya(Ga,u);wa();M.Da();var a=Date.now();za+=E;Aa++;if(1E3<a-xa){var b=za/Aa;Ba++;ma&&(ma.textContent=b.toFixed(2));za=Aa=0;xa=a}}}n("chesterGL.useGoogleAnalytics",l);
n("chesterGL.projection","3d");n("chesterGL.webglMode",z);n("chesterGL.usesOffscreenBuffer",l);n("chesterGL.debugSpanId","debug-info");n("chesterGL.update",k);n("chesterGL.mouseEvents",{Ia:0,Ja:1,Ka:2});n("chesterGL.mouseEvents.DOWN",0);n("chesterGL.mouseEvents.MOVE",1);n("chesterGL.mouseEvents.UP",2);n("chesterGL.viewportSize",function(){return new O(w.ba,w.N)});
n("chesterGL.setup",function(a){a=document.getElementById(a);try{if(u=a,z&&(w=a.getContext("experimental-webgl",{alpha:l,antialias:l}))&&window.WebGLDebugUtils)console.log("installing debug context"),w=WebGLDebugUtils.makeDebugContext(w,ga)}catch(b){console.log("ERROR: "+b)}w||(t=w=a.getContext("2d"),(!w||!t)&&e("Error initializing graphic context!"),z=l);qa();$(u).mousedown(Da);$(u).mousemove(Ea);$(u).mouseup(Fa);z&&ra();ma=document.getElementById("debug-info");B.texture=ta;D.texture=ua;D["default"]=
va});n("chesterGL.canvasResized",qa);n("chesterGL.initShader",H);n("chesterGL.registerAssetHandler",function(a,b){B[a]=b});n("chesterGL.loadAsset",I);n("chesterGL.assetsLoaded",J);n("chesterGL.getAsset",K);
n("chesterGL.setupPerspective",function(){var a=w;if(z){a.clearColor(0,0,0,1);a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA);a.enable(a.BLEND);a.disable(a.DEPTH_TEST);var b=a.ba,c=a.N;a.viewport(0,0,b,c);y=mat4.create();console.log("setting up 3d projection ("+b+","+c+")");var d=c/1.1566,a=mat4.perspective(60,b/c,0.5,1500),b=mat4.lookAt([b/2,c/2,d],[b/2,c/2,0],[0,1,0]);mat4.multiply(a,b,y)}});n("chesterGL.setRunningScene",function(a){a.type==P.SCENE&&(ja=a)});n("chesterGL.drawScene",wa);
n("chesterGL.run",Ga);n("chesterGL.togglePause",function(){x?(x=l,Ga()):x=j});n("chesterGL.addMouseHandler",function(a){-1==F.indexOf(a)&&F.push(a)});n("chesterGL.removeMouseHandler",function(a){a=F.indexOf(a);0<a&&F.splice(a,1)});function O(a,b){this.width=a;this.height=b}O.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};O.prototype.scale=function(a){this.width*=a;this.height*=a;return this};function Q(a,b,c){this.type=b||P.STANDALONE;c&&(this.parent=c);this.children=[];this.e=R.DEFAULT;a&&("string"===typeof a?(a=S.U(a),this.K(a.c),this.A(a.frame)):this.A(a));this.type==P.STANDALONE&&this.ma([1,1,1,1]);if(z&&this.type==P.STANDALONE&&(!c||c.type!=P.BLOCKGROUP))this.g=w.createBuffer(),this.f=new Float32Array(36);this.b=mat4.create();this.n=mat4.create();mat4.identity(this.b);this.P=[];this.Q=[]}
var R={DEFAULT:0,TEXTURE:1},Ha=["default","texture"],P={STANDALONE:0,BLOCKGROUP:1,SCENE:2,TMXBLOCK:3,PARTICLE:4},Ia=quat4.create([0,0,1,1]),Ja=new s(0,0);m=Q.prototype;m.title="";m.b=k;m.n=k;m.sa=j;m.d=l;m.v=l;m.l=l;m.R=0;m.g=k;m.f=k;m.position=vec3.create();m.r=k;m.color=quat4.create([1,1,1,1]);m.c=k;m.opacity=1;m.rotation=0;m.scale=1;m.update=k;m.frame=k;m.parent=k;m.children=k;m.P=k;m.Q=k;m.B=l;
m.A=function(a){"string"===typeof a&&(a=S.U(a).frame);this.frame=quat4.create(a);this.aa(a[2],a[3]);this.l=j};m.aa=function(a,b){this.r=new O(a,b);this.l=j};m.Ba=function(a){this.scale=a;this.d=j};m.ma=function(a){this.color=quat4.create(a);this.v=j};m.J=function(a){this.position=vec3.create(a);this.d=j};m.K=function(a){this.c=a;this.e=R.TEXTURE;var b=this;I("texture",a,function(a){b.r||b.aa(a.width,a.height);b.frame||b.A([0,0,a.width,a.height])})};m.Aa=function(a){this.rotation=a;this.d=j};
m.Ca=function(a){this.update=a};m.p=function(a){a.parent&&e("can't add a block twice!");this.B?this.P.push(a):(this.children.push(a),a.parent=this)};m.removeChild=function(a){(!a.parent||a.parent!=this)&&e("not our child!");this.B?this.Q.push(a):(a=this.children.indexOf(a),0<=a&&this.children.splice(a,1))};
m.transform=function(){var a=w;if(this.d||this.parent&&this.parent.d){mat4.identity(this.b);mat4.translate(this.b,this.position);mat4.rotate(this.b,this.rotation*(z?-1:1),[0,0,1]);mat4.scale(this.b,[this.scale,this.scale,1]);var b=this.parent?this.parent.b:k;b&&mat4.multiply(b,this.b,this.b)}if(this.type!=P.BLOCKGROUP){var b=this.f,c=this.parent&&this.parent.type==P.BLOCKGROUP;if(z){!c&&(this.l||this.v)&&a.bindBuffer(a.ARRAY_BUFFER,this.g);if(this.l||c&&this.d){var d=9,f=0.5*this.r.width,i=0.5*this.r.height,
g=36*this.R,q=this.position[2];if(c){var v=[f,i,0],o=[-f,i,0],p=[f,-i,0],f=[-f,-i,0];mat4.multiplyVec3(this.b,v);mat4.multiplyVec3(this.b,o);mat4.multiplyVec3(this.b,f);mat4.multiplyVec3(this.b,p);b[g]=f[0];b[g+1]=f[1];b[g+2]=q;b[g+d]=o[0];b[g+1+d]=o[1];b[g+2+d]=q;b[g+2*d]=p[0];b[g+1+2*d]=p[1];b[g+2+2*d]=q;b[g+3*d]=v[0];b[g+1+3*d]=v[1];b[g+2+3*d]=q}else b[g]=-f,b[g+1]=-i,b[g+2]=0,b[g+d]=-f,b[g+1+d]=i,b[g+2+d]=0,b[g+2*d]=f,b[g+1+2*d]=-i,b[g+2+2*d]=0,b[g+3*d]=f,b[g+1+3*d]=i,b[g+2+3*d]=0;this.e==R.TEXTURE&&
(q=K("texture",this.c),o=q.width,p=q.height,q=this.frame[0]/o,v=this.frame[1]/p,o=this.frame[2]/o,p=this.frame[3]/p,g+=3,b[g]=q,b[g+1]=v,b[g+d]=q,b[g+1+d]=v+p,b[g+2*d]=q+o,b[g+1+2*d]=v,b[g+3*d]=q+o,b[g+1+3*d]=v+p)}if(this.v){g=5+36*this.R;q=this.color;v=this.opacity;for(o=0;4>o;o++)b[g+d*o]=q[0]*v,b[g+1+d*o]=q[1]*v,b[g+2+d*o]=q[2]*v,b[g+3+d*o]=q[3]*v}z&&!c&&(this.l||this.v)&&a.bufferData(a.ARRAY_BUFFER,this.f,a.STATIC_DRAW)}}};
m.O=function(){this.B=j;this.update&&this.update(E);if(this.sa){this.transform();for(var a=this.children,b=a.length,c=0;c<b;c++)a[c].O();(!this.parent||this.parent.type!=P.BLOCKGROUP)&&this.D();for(this.B=this.l=this.v=this.d=l;a=this.P.shift();)this.p(a);for(;a=this.Q.shift();)this.removeChild(a)}else this.B=l};
m.D=function(){this.type==P.BLOCKGROUP&&e("Cannot call render on a BlockGroup block!");if(this.type!=P.SCENE)if(z){var a=w,b=G(Ha[this.e]);a.bindBuffer(a.ARRAY_BUFFER,this.g);a.vertexAttribPointer(b.a.vertexPositionAttribute,3,a.FLOAT,l,36,0);a.vertexAttribPointer(b.a.vertexColorAttribute,4,a.FLOAT,l,36,20);if(this.e!=R.DEFAULT&&this.e==R.TEXTURE){var c=K("texture",this.c);a.vertexAttribPointer(b.a.textureCoordAttribute,2,a.FLOAT,l,36,12);a.activeTexture(a.TEXTURE0);a.bindTexture(a.TEXTURE_2D,c.L);
a.uniform1i(b.Z,0);a.La=j}(this.d||this.parent&&this.parent.d)&&mat4.multiply(y,this.b,this.n);a.uniformMatrix4fv(b.o,l,this.n);a.drawArrays(a.TRIANGLE_STRIP,0,4)}else if(a=t,1==this.e){b=this.b;c=K("texture",this.c);a.globalAlpha=this.opacity;a.setTransform(b[0],b[1],b[4],b[5],b[12],a.N-b[13]);var b=this.r.width,d=this.r.height,f=this.frame;a.drawImage(c,f[0],c.height-(f[1]+d),f[2],f[3],-b/2,-d/2,b,d)}};n("chesterGL.Block",Q);n("chesterGL.Block.FullFrame",Ia);n("chesterGL.Block.SizeZero",Ja);
n("chesterGL.Block.TYPE",P);n("chesterGL.Block.PROGRAM",R);n("chesterGL.Block.PROGRAM_NAME",Ha);Q.prototype.title=Q.prototype.title;Q.prototype.addChild=Q.prototype.p;Q.prototype.removeChild=Q.prototype.removeChild;Q.prototype.setPosition=Q.prototype.J;Q.prototype.setRotation=Q.prototype.Aa;Q.prototype.setColor=Q.prototype.ma;Q.prototype.setFrame=Q.prototype.A;Q.prototype.setContentSize=Q.prototype.aa;Q.prototype.setTexture=Q.prototype.K;Q.prototype.setScale=Q.prototype.Ba;Q.prototype.setUpdate=Q.prototype.Ca;function T(a,b){this.M=1E3*a;this.q=b;this.k=0}m=T.prototype;m.q=k;m.M=0;m.k=0;m.u=l;m.z=l;m.update=function(a){this.z||(this.ca(),this.z=j);this.k+=a;0<this.M&&this.k>=this.M&&(this.u=j)};m.ca=function(){};function X(a,b,c){T.call(this,b,c);this.T=vec3.create(a)}r(X,T);X.prototype.T=k;X.prototype.pa=k;var Ka=vec3.create();X.prototype.update=function(a){T.prototype.update.call(this,a);a=this.q;if(this.u)a.J(this.T);else{var b=Math.min(1,this.k/this.M);vec3.lerp(this.pa,this.T,b,Ka);a.J(Ka)}};
X.prototype.ca=function(){this.q||e("invalid move action! - now block");this.pa=this.q.position};function La(a,b,c,d){this.delay=1E3*a;a=this.delay*b.length;c==j&&(a=-1);T.call(this,a,d);this.na=c==j;this.frames=b.slice(0)}r(La,T);m=La.prototype;m.s=0;m.delay=0;m.frames=k;m.na=l;
m.update=function(a){T.prototype.update.call(this,a);a=this.q;this.u?(this.s=this.frames.length-1,this.u=j,a.A(this.frames[this.s])):this.k>=this.delay*this.s&&(a.A(this.frames[this.s++]),this.s==this.frames.length&&(this.na?this.k=this.s=0:this.u=j))};var M={$:[]};M.la=function(a){M.$.push(a)};M.Da=function(){for(var a=E,b=0,c=M.$.length,b=0;b<c;b++){var d=M.$[b];!d.u&&d.update(a)}};Q.prototype.za=function(a){a.q=this;M.la(a)};n("chesterGL.ActionManager",M);n("chesterGL.MoveToAction",X);
n("chesterGL.AnimateAction",La);M.scheduleAction=M.la;Q.prototype.runAction=Q.prototype.za;var S={frames:{}};S.wa=function(a){if(a.meta&&"1.0"==a.meta.version){var b=a.meta.image;I("texture",b,function(c){var c=c.height,d=a.frames,f;for(f in d){var i=d[f],g={frame:{},c:""};g.frame=quat4.create([i.frame.x,c-(i.frame.y+i.frame.h),i.frame.w,i.frame.h]);g.c=b;S.frames[f]=g}})}else e("Unkown json data")};S.ua=function(a,b){A.frameset[a].data=b;return j};S.U=function(a){return S.frames[a]};S.va=function(a){console.log("loadFrames: will fetch "+a);I("frameset",{path:a,dataType:"json"},function(a){S.wa(a)})};
B.frameset=S.ua;n("chesterGL.BlockFrames",S);S.getFrame=S.U;S.loadFrames=S.va;function Ma(a){(a=Na[a])||e("Invalid map - make sure you call loadTMX first");Q.call(this,k,P.TMXBLOCK);for(var b=0;b<a.layers.length;b++){for(var c=a.layers[b],d=z?new Y(a.texture,c.blocks.length):new Q,f=0;f<c.blocks.length;f++){var i=c.blocks[f],g=h;z?g=d.da(i.frame):(g=new Q(i.frame),g.K(a.texture));g.J(i.position);d.p(g)}this.p(d)}}r(Ma,Q);Ma.prototype.D=function(){};var Na={};B.tmx=function(a,b){console.log("tmx loaded: "+a);A.tmx[a].data=b;return j};n("chesterGL.TMXBlock",Ma);
Ma.loadTMX=function(a){I("tmx",{path:a,dataType:"xml"},function(b){var c={},b=$(b).find("map"),d=b.find("tileset").first(),f=b.attr("orientation");if(d){c.tileSize=new O(parseInt(d.attr("tilewidth"),10),parseInt(d.attr("tileheight"),10));c.mapTileSize=new O(parseInt(b.attr("tilewidth"),10),parseInt(b.attr("tileheight"),10));d.attr("spacing")&&(c.spacing=parseInt(d.attr("spacing"),10));d.attr("margin")&&(c.margin=parseInt(d.attr("margin"),10));var d=d.find("image").first(),i=new O(parseInt(d.attr("width"),
10),parseInt(d.attr("height"),10));c.texture=d.attr("source");I("texture",c.texture);c.layers=[];b.find("layer").each(function(a,b){var d={blocks:[]},o=new O(parseInt($(b).attr("width"),10),parseInt($(b).attr("height"),10)),p=$(b).find("data").first();if(p){("base64"!=p.attr("encoding")||p.attr("compression"))&&e("Invalid TMX Data");for(var p=p.text().trim(),p=base64.decode(p),N=0,U=0;U<o.height;U++)for(var V=0;V<o.width;V++){var ca=((p.charCodeAt(N+3)&255)<<24|(p.charCodeAt(N+2)&255)<<16|(p.charCodeAt(N+
1)&255)<<8|p.charCodeAt(N+0)&255)-1,na={},da=c.margin||0,W=c.spacing||0,C=c.tileSize,ea=c.mapTileSize,Ca=parseInt((i.width-2*da+W)/(C.width+W),10),ca=quat4.create([ca%Ca*(C.width+W)+da,i.height-C.height-da-W-parseInt(ca/Ca,10)*(C.height+W)+da,C.width,C.height]);na.frame=ca;var oa,pa;"orthogonal"==f?(oa=V*ea.width+C.width/2,pa=(o.height-U-1)*ea.height+C.height/2):"isometric"==f?(oa=ea.width/2*(o.width+V-U-1)+C.width/2,pa=ea.height/2*(2*o.height-V-U-2)+C.height/2):e("Invalid orientation");na.position=
[oa,pa,0];d.blocks.push(na);N+=4}}else e("No data for layer!");c.layers.push(d)})}Na[a]=c})};function Z(a){Q.call(this,k,4);var b=this;I("texture",a.texture,function(){b.ja(a)})}r(Z,Q);var Oa=l;
function Pa(){H("particles",function(a){var b=w;a.o=b.getUniformLocation(a,"uMVPMatrix");a.Ea=b.getUniformLocation(a,"uSampler");a.Ha=b.getUniformLocation(a,"u_time");a.Ga=b.getUniformLocation(a,"u_startColor");a.Fa=b.getUniformLocation(a,"u_endColor");a.a={a_startPosition:b.getAttribLocation(a,"a_startPosition"),a_lifetime:b.getAttribLocation(a,"a_lifetime"),a_startTime:b.getAttribLocation(a,"a_startTime"),a_startSize:b.getAttribLocation(a,"a_startSize"),a_endSize:b.getAttribLocation(a,"a_endSize"),
a_speed:b.getAttribLocation(a,"a_speed")};a=b.getError();0!=a&&console.log("gl error: "+a)});Oa=j}m=Z.prototype;m.z=j;m.ka=k;m.ea=0;m.t=0;m.j=0;m.m=0;m.duration=0;m.X=0;m.ia=0;m.oa=k;m.I=k;m.fa=k;m.G=k;m.H=k;m.qa=0;m.ra=0;m.ga=0;m.ha=0;m.Y=l;m.elapsedTime=0;m.S=["SRC_ALPHA","ONE_MINUS_SRC_ALPHA"];
m.ja=function(a){this.e=-1;Oa||Pa();this.ka=a.texture;this.m=a.maxParticles;this.duration=1E3*parseFloat(a.duration);this.X=1E3*parseFloat(a.lifetime);this.ia=1E3*parseFloat(a.lifetimeVariance);this.oa=quat4.create(a.startColor);this.I=vec3.create(a.positionVariance);this.fa=quat4.create(a.endColor);this.G=vec3.create(a.speed);this.H=vec3.create(a.speedVariance);this.qa=parseFloat(a.startSize);this.ra=parseFloat(a.startSizeVariance);this.ga=parseFloat(a.endSize);this.ha=parseFloat(a.endSizeVariance);
this.elapsedTime=0;this.S=a.blendOptions.slice(0);this.z=j;this.g=w.createBuffer();this.f=new Float32Array(10*this.m);for(var a=G("particles"),b=w,c=0;c<this.m;c++)Qa(this,c);b.uniform4fv(a.Ga,this.oa);b.uniform4fv(a.Fa,this.fa);b.uniform1i(a.Ea,0);Ra(this);this.j=this.t=0;this.ea=this.m/Math.abs(this.X)};
function Qa(a,b,c,d){var f=a.f;f[10*b+0]=c||-1;f[10*b+1]=d||0;f[10*b+2]=a.qa+a.ra*(2*Math.random()-1);f[10*b+3]=a.ga+a.ha*(2*Math.random()-1);f[10*b+4]=a.G[0]+a.H[0]*(2*Math.random()-1);f[10*b+5]=a.G[1]+a.H[1]*(2*Math.random()-1);f[10*b+6]=a.G[2]+a.H[2]*(2*Math.random()-1);f[10*b+7]=(2*Math.random()-1)*a.I[0];f[10*b+8]=(2*Math.random()-1)*a.I[1];f[10*b+9]=(2*Math.random()-1)*a.I[2]}function Ra(a){var b=w;b.bindBuffer(b.ARRAY_BUFFER,a.g);b.bufferData(b.ARRAY_BUFFER,a.f,b.STATIC_DRAW)}var Sa=new Float32Array(10);
Z.prototype.update=function(a){if(G("particles")){this.elapsedTime+=a;var b=1/this.ea;for(this.t+=a;this.j<this.m&&this.t>b&&this.z;)Qa(this,this.j,Math.abs(this.X+this.ia*(2*Math.random()-1)),this.elapsedTime),this.j++,this.Y=j,this.t-=b;for(a=0;a<this.m;a++){var b=this.f,c=10*a;if(0<b[c]&&b[c]+b[c+1]<=this.elapsedTime&&a!=this.j-1){var d=b.subarray(c,c+10);Sa.set(d);Sa[0]=-1;d=b.subarray(c+10,10*this.j);b.set(d,c);b.set(Sa,10*(this.j-1));this.j--}}0<this.duration&&this.elapsedTime>this.duration&&
(this.z=l)}};
Z.prototype.D=function(){var a=G("particles");if(a){var b=w,c=K("texture",this.ka);b.enable(b.BLEND);b.blendFunc(b[this.S[0]],b[this.S[1]]);this.Y&&(Ra(this),this.Y=l);b.uniform1f(a.Ha,this.elapsedTime);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,c.L);b.bindBuffer(b.ARRAY_BUFFER,this.g);b.vertexAttribPointer(a.a.a_lifetime,3,b.FLOAT,l,40,0);b.vertexAttribPointer(a.a.a_startTime,3,b.FLOAT,l,40,4);b.vertexAttribPointer(a.a.a_startSize,3,b.FLOAT,l,40,8);b.vertexAttribPointer(a.a.a_endSize,3,
b.FLOAT,l,40,12);b.vertexAttribPointer(a.a.a_speed,3,b.FLOAT,l,40,16);b.vertexAttribPointer(a.a.a_startPosition,3,b.FLOAT,l,40,28);(this.d||this.parent&&this.parent.d)&&mat4.multiply(y,this.b,this.n);b.uniformMatrix4fv(a.o,l,this.n);b.drawArrays(b.POINTS,0,this.m)}};n("chesterGL.ParticleSystem",Z);Z.loadShaders=Pa;Z.prototype.loadProperties=Z.prototype.ja;function Y(a,b){z||e("BlockGroup only works on WebGL mode");Q.call(this,k,P.BLOCKGROUP);a?(this.c=a,this.e=R.TEXTURE):this.e=R.DEFAULT;this.F=b||10;var c=w;this.g=c.createBuffer();this.f=new Float32Array(36*this.F);this.V=c.createBuffer();this.i=new Uint16Array(6*this.F)}r(Y,Q);m=Y.prototype;m.F=0;m.W=l;m.V=k;m.i=k;m.da=function(a){a=new Q(a,P.STANDALONE,this);this.c&&a.K(this.c);return a};
m.p=function(a){this.children.length>=this.F&&e("Error: too many children - Make the initial size of the BlockGroup larger");a.parent!=this&&e("Invalid child: can only add children created with BlockGroup.create");this.c?this.c!=a.c&&e("Invalid child: only can add child with the same texture"):this.c=a.c;this.children.push(a);a.R=this.children.length-1;a.f=this.f;this.W=j};m.xa=function(){e("not implemented")};
m.O=function(){this.update&&this.update(E);if(this.sa){this.transform();for(var a=this.children,b=a.length,c=0;c<b;c++)a[c].O();a=w;a.bindBuffer(a.ARRAY_BUFFER,this.g);a.bufferData(a.ARRAY_BUFFER,this.f,a.STATIC_DRAW);if(this.W){a=(this.i[-1]||-1)+1;b=Math.max(this.children.length,1);for(c=0;c<b;c++){var d=6*c;this.i[d+0]=a;this.i[d+1]=a+1;this.i[d+2]=a+2;this.i[d+3]=a+2;this.i[d+4]=a+1;this.i[d+5]=a+3;a+=4}a=w;a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.V);a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.i,
a.STATIC_DRAW);this.W=l}this.D();this.l=this.v=this.d=l}};
m.D=function(){var a=w,b=G(Ha[this.e]),c=this.children.length;a.bindBuffer(a.ARRAY_BUFFER,this.g);a.vertexAttribPointer(b.a.vertexPositionAttribute,3,a.FLOAT,l,36,0);if(this.e!=R.DEFAULT&&this.e==R.TEXTURE){var d=K("texture",this.c);a.vertexAttribPointer(b.a.textureCoordAttribute,2,a.FLOAT,l,36,12);a.activeTexture(a.TEXTURE0);a.bindTexture(a.TEXTURE_2D,d.L);a.uniform1i(b.Z,0)}a.vertexAttribPointer(b.a.vertexColorAttribute,4,a.FLOAT,l,36,20);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.V);mat4.multiply(y,
this.b,this.n);a.uniformMatrix4fv(b.o,l,this.n);a.drawElements(a.TRIANGLES,6*c,a.UNSIGNED_SHORT,0)};n("chesterGL.BlockGroup",Y);Y.prototype.createBlock=Y.prototype.da;Y.prototype.addChild=Y.prototype.p;Y.prototype.removeBlock=Y.prototype.xa;