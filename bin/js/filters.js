(function(){var t,e;e="image.png",t=function(t){var a,n,r,i,o,d,h,g,f,c,m,u,l,p,I,s,v,w,E,D,y,M,k,B,L,x,b,_,z,R,U,A,C,F,j,q,G,H,J,K,N,O,P,Q,S,T,V,W,X,Y,Z,$,tt,et,at,nt,rt,it,ot,dt,ht,gt,ft,ct;o=document.getElementById("result"),c=o.getContext("2d"),o.width=t.width,o.height=t.height,c.drawImage(t,0,0,t.width,t.height),t.style.display="none",q=c.getImageData(0,0,o.width,o.height),m=q.data,rt=function(){var t,a;return window.open(o.toDataURL("image/png")),a=o.toDataURL("png"),t=document.createElement("a"),t.href=a,t.download=e,t.click()},it=document.getElementById("save"),it.disabled=null,it.addEventListener("click",rt),S=function(){c.putImageData(q,0,0),e="image.png"},T=document.getElementById("original"),T.addEventListener("click",S),A=function(){var t,a,n,r,i,o;for(r=c.createImageData(q.width,q.height),i=r.data,a=n=0,o=m.length;n<o;a=n+=4)t=(m[a]+m[a+1]+m[a+2])/3,i[a]=t,i[a+1]=t,i[a+2]=t,i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-grayscale.png",r},C=document.getElementById("grayscale"),C.addEventListener("click",A),u=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(q.width,q.height),I=p.data,d=[-1,-1,0,-1,1,1,0,1,1],y=g=1,v=q.height-1;1<=v?g<v:g>v;y=1<=v?++g:--g)for(D=f=1,w=q.width-1;1<=w?f<w:f>w;D=1<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*q.width+D)+a,E=0,i=l=-1;l<=1;i=++l)for(r=s=-1;s<=1;r=++s)h=3*(i+1)+(r+1),n=4*((y+i)*q.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*q.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-emboss.png"},l=document.getElementById("emboss"),l.addEventListener("click",u),ot=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(q.width,q.height),I=p.data,d=[0,-1,0,-1,5,-1,0,-1,0],y=g=1,v=q.height-1;1<=v?g<v:g>v;y=1<=v?++g:--g)for(D=f=1,w=q.width-1;1<=w?f<w:f>w;D=1<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*q.width+D)+a,E=0,i=l=-1;l<=1;i=++l)for(r=s=-1;s<=1;r=++s)h=3*(i+1)+(r+1),n=4*((y+i)*q.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*q.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-sharp.png"},dt=document.getElementById("sharp"),dt.addEventListener("click",ot),P=function(){var t,a,n,r,i;for(n=c.createImageData(q.width,q.height),r=n.data,t=a=0,i=m.length;a<i;t=a+=4)r[t]=255-m[t],r[t+1]=255-m[t+1],r[t+2]=255-m[t+2],r[t+3]=m[t+3];c.putImageData(n,0,0),e="image-negative.png"},Q=document.getElementById("negative"),Q.addEventListener("click",P),d=function(){var t,a,n,r,i,o;for(t=function(t){var e;return e=1.5,e*(t-127)+127},r=c.createImageData(q.width,q.height),i=r.data,a=n=0,o=m.length;n<o;a=n+=4)i[a]=t(m[a]),i[a+1]=t(m[a+1]),i[a+2]=t(m[a+2]),i[a+3]=m[a+3];c.putImageData(r,0,0),e="image-contrast-enhancement.png"},h=document.getElementById("contrast_enhancement"),h.addEventListener("click",d),g=function(){var t,a,n,r,i,o;for(t=function(t){var e;return e=.5,e*(t-127)+127},r=c.createImageData(q.width,q.height),i=r.data,a=n=0,o=m.length;n<o;a=n+=4)i[a]=t(m[a]),i[a+1]=t(m[a+1]),i[a+2]=t(m[a+2]),i[a+3]=m[a+3];c.putImageData(r,0,0),e="image-contrast-reduction.png"},f=document.getElementById("contrast_reduction"),f.addEventListener("click",g),R=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(q.width,q.height),I=p.data,d=[.00390625,.015625,.0234375,.015625,.00390625,.015625,.0625,.09375,.0625,.015625,.0234375,.09375,.140625,.09375,.0234375,.015625,.0625,.09375,.0625,.015625,.00390625,.015625,.0234375,.015625,.00390625],y=g=2,v=q.height-2;2<=v?g<v:g>v;y=2<=v?++g:--g)for(D=f=2,w=q.width-2;2<=w?f<w:f>w;D=2<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*q.width+D)+a,E=0,i=l=-2;l<=2;i=++l)for(r=s=-2;s<=2;r=++s)h=5*(i+2)+(r+2),n=4*((y+i)*q.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*q.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-gaussian-filter.png"},U=document.getElementById("gaussian_filter"),U.addEventListener("click",R),ft=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(q.width,q.height),I=p.data,d=[-1,0,1,-2,0,2,-1,0,1],y=g=1,v=q.height-1;1<=v?g<v:g>v;y=1<=v?++g:--g)for(D=f=1,w=q.width-1;1<=w?f<w:f>w;D=1<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*q.width+D)+a,E=0,i=l=-1;l<=1;i=++l)for(r=s=-1;s<=1;r=++s)h=3*(i+1)+(r+1),n=4*((y+i)*q.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*q.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-sobel-filter.png"},ct=document.getElementById("sobel_filter"),ct.addEventListener("click",ft),J=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(q.width,q.height),I=p.data,d=[1,1,1,1,-8,1,1,1,1],y=g=1,v=q.height-1;1<=v?g<v:g>v;y=1<=v?++g:--g)for(D=f=1,w=q.width-1;1<=w?f<w:f>w;D=1<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*q.width+D)+a,E=0,i=l=-1;l<=1;i=++l)for(r=s=-1;s<=1;r=++s)h=3*(i+1)+(r+1),n=4*((y+i)*q.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*q.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-laplacian-filter.png"},K=document.getElementById("laplacian_filter"),K.addEventListener("click",J),X=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D;for(g=c.createImageData(q.width,q.height),f=g.data,E=i=0,p=q.height-2;i<p;E=i+=5)for(v=o=0,I=q.width-2;o<I;v=o+=5){for(s=[0,0,0,0],t=0,n=d=0;d<=4;n=++d)for(a=h=0;h<=4;a=++h)D=E+n,w=v+a,w<q.width&&D<q.height&&(t+=1,r=4*(D*q.width+w),s[0]+=m[r],s[1]+=m[r+1],s[2]+=m[r+2],s[3]+=m[r+3]);for(n=u=0;u<=4;n=++u)for(a=l=0;l<=4;a=++l)D=E+n,w=v+a,w<q.width&&D<q.height&&(r=4*(D*q.width+w),f[r]=s[0]/t,f[r+1]=s[1]/t,f[r+2]=s[2]/t,f[r+3]=s[3]/t)}c.putImageData(g,0,0),e="image-pixelization.png"},Y=document.getElementById("pixelization"),Y.addEventListener("click",X),Z=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D;for(g=c.createImageData(q.width,q.height),f=g.data,E=i=0,p=q.height-7;i<p;E=i+=15)for(v=o=0,I=q.width-7;o<I;v=o+=15){for(s=[0,0,0,0],t=0,n=d=0;d<=14;n=++d)for(a=h=0;h<=14;a=++h)D=E+n,w=v+a,w<q.width&&D<q.height&&(t+=1,r=4*(D*q.width+w),s[0]+=m[r],s[1]+=m[r+1],s[2]+=m[r+2],s[3]+=m[r+3]);for(n=u=0;u<=14;n=++u)for(a=l=0;l<=14;a=++l)D=E+n,w=v+a,w<q.width&&D<q.height&&(r=4*(D*q.width+w),f[r]=s[0]/t,f[r+1]=s[1]/t,f[r+2]=s[2]/t,f[r+3]=s[3]/t)}c.putImageData(g,0,0),e="image-pixelization-hard.png"},$=document.getElementById("pixelization_hard"),$.addEventListener("click",Z),a=function(){var t,a,n,r,i,o;for(r=c.createImageData(q.width,q.height),i=r.data,t=127,a=n=0,o=m.length;n<o;a=n+=4)i[a]=m[a]>t?255:0,i[a+1]=m[a+1]>t?255:0,i[a+2]=m[a+2]>t?255:0,i[a+3]=m[a+3];c.putImageData(r,0,0),e="image-binarization.png"},n=document.getElementById("binarization"),n.addEventListener("click",a),V=function(){var t,a,n,r,i,o,d,h,g,f,m,u;for(h=A(),g=h.data,a=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),n=r=0,f=g.length;r<f;n=r+=4)a[g[n]]+=1;for(o=h.width*h.height/2,t=0,u=0,n=i=255;i>=0;n=--i)if(t+=a[n],t>=o){u=n;break}for(n=d=0,m=g.length;d<m;n=d+=4)g[n]=g[n]>u?255:0,g[n+1]=g[n+1]>u?255:0,g[n+2]=g[n+2]>u?255:0,g[n+3]=g[n+3];c.putImageData(h,0,0),e="image-percentile-method.png"},W=document.getElementById("percentile_method"),W.addEventListener("click",V),p=function(){var t,a,n,r,i,o;for(r=c.createImageData(q.width,q.height),i=r.data,t=[.73412,.647019,.07914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter1.png",r},I=document.getElementById("filter1"),I.addEventListener("click",p),s=function(){var t,a,n,r,i,o;for(r=c.createImageData(q.width,q.height),i=r.data,t=[.073412,.0647019,.07914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter2.png",r},v=document.getElementById("filter2"),v.addEventListener("click",s),w=function(){var t,a,n,r,i,o;for(r=c.createImageData(q.width,q.height),i=r.data,t=[.9,0,.5],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter3.png",r},E=document.getElementById("filter3"),E.addEventListener("click",w),D=function(){var t,a,n,r,i,o;for(r=c.createImageData(q.width,q.height),i=r.data,t=[.373412,.347019,.3914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter4.png",r},y=document.getElementById("filter4"),y.addEventListener("click",D),M=function(){var t,a,n,r,i,o;for(r=c.createImageData(q.width,q.height),i=r.data,t=[.0073412,.647019,.7914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter5.png",r},k=document.getElementById("filter5"),k.addEventListener("click",M),B=function(){var t,a,n,r,i,o;for(r=c.createImageData(q.width,q.height),i=r.data,t=[.93412,.647019,.0057914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter6.png",r},L=document.getElementById("filter6"),L.addEventListener("click",B),tt=function(t){var a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y,M,k,B,L,x,b,_,z,R,U,A,C,F,j;for(null==t&&(t=5),w=c.createImageData(q.width,q.height),E=w.data,"number"!=typeof t&&(t=5),F=t,s=256/F,d=255/(F-1),r=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),h=f=0,M=F;0<=M?f<M:f>M;h=0<=M?++f:--f)for(g=u=k=Math.floor(h*s),B=Math.floor((h+1)*s);k<=B?u<B:u>B;g=k<=B?++u:--u)r[g]=d*h;for(C=t,I=256/C,o=255/(C-1),n=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),h=l=0,L=C;0<=L?l<L:l>L;h=0<=L?++l:--l)for(g=v=x=Math.floor(h*I),b=Math.floor((h+1)*I);x<=b?v<b:v>b;g=x<=b?++v:--v)n[g]=o*h;for(A=t,p=256/A,i=255/(A-1),a=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),h=D=0,_=A;0<=_?D<_:D>_;h=0<=_?++D:--D)for(g=y=z=Math.floor(h*p),R=Math.floor((h+1)*p);z<=R?y<R:y>R;g=z<=R?++y:--y)a[g]=i*h;for(h=j=0,U=m.length;j<U;h=j+=4)E[h]=r[m[h]],E[h+1]=n[m[h+1]],E[h+2]=a[m[h+2]],E[h+3]=m[h+3];return c.putImageData(w,0,0),e="image-posterization.png",w},et=document.getElementById("posterization"),et.addEventListener("click",tt),N=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w;for(g=c.createImageData(q.width,q.height),f=g.data,w=i=1,u=q.height-1;1<=u?i<u:i>u;w=1<=u?++i:--i)for(v=o=1,l=q.width-1;1<=l?o<l:o>l;v=1<=l?++o:--o){for(r=4*(w*q.width+v),s=[],I=[],p=[],n=d=-1;d<=1;n=++d)for(a=h=-1;h<=1;a=++h)t=4*((w+n)*q.width+(v+a)),s.push(m[t]),I.push(m[t+1]),p.push(m[t+2]);s.sort(function(t,e){return t>e?-1:t<e?1:0}),I.sort(function(t,e){return t>e?-1:t<e?1:0}),p.sort(function(t,e){return t>e?-1:t<e?1:0}),f[r]=s[4],f[r+1]=I[4],f[r+2]=p[4],f[r+3]=m[r+3]}return c.putImageData(g,0,0),e="image-median-filter.png",g},O=document.getElementById("median_filter"),O.addEventListener("click",N),G=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y,M,k,B,L,x;for(v=tt(64),w=v.data,x=g=2,D=q.height-2;2<=D?g<D:g>D;x=2<=D?++g:--g)for(L=f=2,y=q.width-2;2<=y?f<y:f>y;L=2<=y?++f:--f){for(d=4*(x*q.width+L),o=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),i=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),r=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),n=I=-2;I<=2;n=++I)for(a=s=-2;s<=2;a=++s)t=4*((x+n)*q.width+(L+a)),o[m[t]]+=1,i[m[t+1]]+=1,r[m[t+2]]+=1;for(p=0,l=0,u=0,B=0,k=0,M=0,h=E=0;E<=255;h=++E)p<o[h]&&(p=o[h],B=h),l<i[h]&&(l=i[h],k=h),u<r[h]&&(u=r[h],M=h);w[d]=B,w[d+1]=k,w[d+2]=M,w[d+3]=m[d+3]}return c.putImageData(v,0,0),e="image-kaiga.png",v},H=document.getElementById("kaiga"),H.addEventListener("click",G),x=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D;for(l=c.createImageData(q.width,q.height),p=l.data,t=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],D=h=2,s=q.height;2<=s?h<s:h>s;D=2<=s?++h:--h)for(E=g=2,v=q.width;2<=v?g<v:g>v;E=2<=v?++g:--g){for(o=4*(D*q.width+E),w=[0,0,0],i=f=-2;f<=0;i=++f)for(r=u=-2;u<=0;r=++u)for(d=3*(i+2)+(r+2),n=4*((D+i)*q.width+(E+r)),a=I=0;I<3;a=++I)w[a]+=m[n+a]*t[d];p[o]=w[0],p[o+1]=w[1],p[o+2]=w[2],p[o+3]=m[o+3]}return c.putImageData(l,0,0),e="image-fir-filter.png",l},b=document.getElementById("fir_filter"),b.addEventListener("click",x),_=function(){var t,a,n,r,i,o;for(r=A(),i=r.data,n=255,_=1.5,t=a=0,o=i.length;a<o;t=a+=4)i[t]=n*Math.pow(m[t]/n,1/_),i[t+1]=n*Math.pow(m[t+1]/n,1/_),i[t+2]=n*Math.pow(m[t+2]/n,1/_),i[t+3]=i[t+3];c.putImageData(r,0,0),e="image-gamma.png"},z=document.getElementById("gamma"),z.addEventListener("click",_),at=function(){var t,a,n,r,i,o,d,h,g,f,u;for(h=A(),g=h.data,r=i=0,u=m.length;i<u;r=i+=4){for(f=m[r],a=m[r+1],t=m[r+2],o=Math.max(f,a,t),d=Math.min(f,a,t),f===a&&f===t?n=0:f>=a&&f>=t?n=60*((a-t)/(o-d)):a>=f&&a>=t?n=60*((t-f)/(o-d))+120:t>=f&&t>=a&&(n=60*((f-a)/(o-d))+240);n<0;)n+=360;(n<=30||n>=300)&&(g[r]=f,g[r+1]=a,g[r+2]=t)}return c.putImageData(h,0,0),e="image-red.png",h},nt=document.getElementById("red"),nt.addEventListener("click",at),F=function(){var t,a,n,r,i,o,d,h,g,f,u;for(h=A(),g=h.data,r=i=0,u=m.length;i<u;r=i+=4){for(f=m[r],a=m[r+1],t=m[r+2],o=Math.max(f,a,t),d=Math.min(f,a,t),f===a&&f===t?n=0:f>=a&&f>=t?n=60*((a-t)/(o-d)):a>=f&&a>=t?n=60*((t-f)/(o-d))+120:t>=f&&t>=a&&(n=60*((f-a)/(o-d))+240);n<0;)n+=360;n<=180&&n>=30&&(g[r]=f,g[r+1]=a,g[r+2]=t)}return c.putImageData(h,0,0),e="image-green.png",h},j=document.getElementById("green"),j.addEventListener("click",F),r=function(){var t,a,n,r,i,o,d,h,g,f,u;for(h=A(),g=h.data,r=i=0,u=m.length;i<u;r=i+=4){for(f=m[r],a=m[r+1],t=m[r+2],o=Math.max(f,a,t),d=Math.min(f,a,t),f===a&&f===t?n=0:f>=a&&f>=t?n=60*((a-t)/(o-d)):a>=f&&a>=t?n=60*((t-f)/(o-d))+120:t>=f&&t>=a&&(n=60*((f-a)/(o-d))+240);n<0;)n+=360;n<=300&&n>=180&&(g[r]=f,g[r+1]=a,g[r+2]=t)}return c.putImageData(h,0,0),e="image-blue.png",h},i=document.getElementById("blue"),i.addEventListener("click",r),ht=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y,M,k,B,L,x,b,_,z,R,U,C,F,j,q;for(v=A(),w=v.data,"number"!=typeof U&&(U=5),j=U,I=256/j,o=255/(j-1),n=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),d=g=0,y=j;0<=y?g<y:g>y;d=0<=y?++g:--g)for(h=f=M=Math.floor(d*I),k=Math.floor((d+1)*I);M<=k?f<k:f>k;h=M<=k?++f:--f)n[h]=o*d;for(F=U,p=256/F,i=255/(F-1),a=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),d=u=0,B=F;0<=B?u<B:u>B;d=0<=B?++u:--u)for(h=s=L=Math.floor(d*p),x=Math.floor((d+1)*p);L<=x?s<x:s>x;h=L<=x?++s:--s)a[h]=i*d;for(C=U,l=256/C,r=255/(C-1),t=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),d=E=0,b=C;0<=b?E<b:E>b;d=0<=b?++E:--E)for(h=D=_=Math.floor(d*l),z=Math.floor((d+1)*l);_<=z?D<z:D>z;h=_<=z?++D:--D)t[h]=r*d;for(d=q=0,R=m.length;q<R;d=q+=4)w[d]=n[w[d]],w[d+1]=a[w[d+1]],w[d+2]=t[w[d+2]],w[d+3]=w[d+3];return c.putImageData(v,0,0),e="image-simple.png",v},gt=document.getElementById("simple"),gt.addEventListener("click",ht)},window.onload=function(){var e,a;e=document.getElementById("preview"),a=document.getElementById("getfile"),a.onchange=function(){var e,n;e=new Image,e.onload=function(){t(this)},n=new FileReader,n.onload=function(){return e.src=n.result},n.readAsDataURL(a.files[0])}}}).call(this);