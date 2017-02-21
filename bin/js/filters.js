(function(){var t,e;e="image.png",t=function(t){var a,n,r,i,o,d,h,g,f,c,m,u,l,p,I,s,v,w,E,D,y,M,k,B,L,x,b,_,z,R,U,T,A,C,F,S,j,q,G,H,J,K,N,O,P,Q,V,W,X,Y,Z,$,tt,et,at,nt,rt,it,ot,dt,ht,gt,ft,ct,mt,ut;o=document.getElementById("result"),c=o.getContext("2d"),o.width=t.width,o.height=t.height,c.drawImage(t,0,0,t.width,t.height),t.style.display="none",S=c.getImageData(0,0,o.width,o.height),m=S.data,rt=function(){var t,a;return window.open(o.toDataURL("image/png")),a=o.toDataURL("png"),t=document.createElement("a"),t.href=a,t.download=e,t.click()},it=document.getElementById("save"),it.disabled=null,it.addEventListener("click",rt),P=function(){c.putImageData(S,0,0),e="image.png"},Q=document.getElementById("original"),Q.addEventListener("click",P),T=function(){var t,a,n,r,i,o;for(r=c.createImageData(S.width,S.height),i=r.data,a=n=0,o=m.length;n<o;a=n+=4)t=(m[a]+m[a+1]+m[a+2])/3,i[a]=t,i[a+1]=t,i[a+2]=t,i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-grayscale.png",r},A=document.getElementById("grayscale"),A.addEventListener("click",T),u=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(S.width,S.height),I=p.data,d=[-1,-1,0,-1,1,1,0,1,1],y=g=1,v=S.height-1;1<=v?g<v:g>v;y=1<=v?++g:--g)for(D=f=1,w=S.width-1;1<=w?f<w:f>w;D=1<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*S.width+D)+a,E=0,i=l=-1;l<=1;i=++l)for(r=s=-1;s<=1;r=++s)h=3*(i+1)+(r+1),n=4*((y+i)*S.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*S.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-emboss.png"},l=document.getElementById("emboss"),l.addEventListener("click",u),ht=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(S.width,S.height),I=p.data,d=[0,-1,0,-1,5,-1,0,-1,0],y=g=1,v=S.height-1;1<=v?g<v:g>v;y=1<=v?++g:--g)for(D=f=1,w=S.width-1;1<=w?f<w:f>w;D=1<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*S.width+D)+a,E=0,i=l=-1;l<=1;i=++l)for(r=s=-1;s<=1;r=++s)h=3*(i+1)+(r+1),n=4*((y+i)*S.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*S.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-sharp.png"},gt=document.getElementById("sharp"),gt.addEventListener("click",ht),N=function(){var t,a,n,r,i;for(n=c.createImageData(S.width,S.height),r=n.data,t=a=0,i=m.length;a<i;t=a+=4)r[t]=255-m[t],r[t+1]=255-m[t+1],r[t+2]=255-m[t+2],r[t+3]=m[t+3];c.putImageData(n,0,0),e="image-negative.png"},O=document.getElementById("negative"),O.addEventListener("click",N),d=function(){var t,a,n,r,i,o;for(t=function(t){var e;return e=1.5,e*(t-127)+127},r=c.createImageData(S.width,S.height),i=r.data,a=n=0,o=m.length;n<o;a=n+=4)i[a]=t(m[a]),i[a+1]=t(m[a+1]),i[a+2]=t(m[a+2]),i[a+3]=m[a+3];c.putImageData(r,0,0),e="image-contrast-enhancement.png"},h=document.getElementById("contrast_enhancement"),h.addEventListener("click",d),g=function(){var t,a,n,r,i,o;for(t=function(t){var e;return e=.5,e*(t-127)+127},r=c.createImageData(S.width,S.height),i=r.data,a=n=0,o=m.length;n<o;a=n+=4)i[a]=t(m[a]),i[a+1]=t(m[a+1]),i[a+2]=t(m[a+2]),i[a+3]=m[a+3];c.putImageData(r,0,0),e="image-contrast-reduction.png"},f=document.getElementById("contrast_reduction"),f.addEventListener("click",g),R=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(S.width,S.height),I=p.data,d=[.00390625,.015625,.0234375,.015625,.00390625,.015625,.0625,.09375,.0625,.015625,.0234375,.09375,.140625,.09375,.0234375,.015625,.0625,.09375,.0625,.015625,.00390625,.015625,.0234375,.015625,.00390625],y=g=2,v=S.height-2;2<=v?g<v:g>v;y=2<=v?++g:--g)for(D=f=2,w=S.width-2;2<=w?f<w:f>w;D=2<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*S.width+D)+a,E=0,i=l=-2;l<=2;i=++l)for(r=s=-2;s<=2;r=++s)h=5*(i+2)+(r+2),n=4*((y+i)*S.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*S.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-gaussian-filter.png"},U=document.getElementById("gaussian_filter"),U.addEventListener("click",R),mt=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(S.width,S.height),I=p.data,d=[-1,0,1,-2,0,2,-1,0,1],y=g=1,v=S.height-1;1<=v?g<v:g>v;y=1<=v?++g:--g)for(D=f=1,w=S.width-1;1<=w?f<w:f>w;D=1<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*S.width+D)+a,E=0,i=l=-1;l<=1;i=++l)for(r=s=-1;s<=1;r=++s)h=3*(i+1)+(r+1),n=4*((y+i)*S.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*S.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-sobel-filter.png"},ut=document.getElementById("sobel_filter"),ut.addEventListener("click",mt),G=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y;for(p=c.createImageData(S.width,S.height),I=p.data,d=[1,1,1,1,-8,1,1,1,1],y=g=1,v=S.height-1;1<=v?g<v:g>v;y=1<=v?++g:--g)for(D=f=1,w=S.width-1;1<=w?f<w:f>w;D=1<=w?++f:--f){for(a=u=0;u<3;a=++u){for(o=4*(y*S.width+D)+a,E=0,i=l=-1;l<=1;i=++l)for(r=s=-1;s<=1;r=++s)h=3*(i+1)+(r+1),n=4*((y+i)*S.width+(D+r))+a,E+=d[h]*m[n];E>255&&(I[o]=255),E<0?I[o]=0:I[o]=E}t=4*(y*S.width+D)+3,I[t]=m[t]}c.putImageData(p,0,0),e="image-laplacian-filter.png"},H=document.getElementById("laplacian_filter"),H.addEventListener("click",G),X=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D;for(g=c.createImageData(S.width,S.height),f=g.data,E=i=0,p=S.height-2;i<p;E=i+=5)for(v=o=0,I=S.width-2;o<I;v=o+=5){for(s=[0,0,0,0],t=0,n=d=0;d<=4;n=++d)for(a=h=0;h<=4;a=++h)D=E+n,w=v+a,w<S.width&&D<S.height&&(t+=1,r=4*(D*S.width+w),s[0]+=m[r],s[1]+=m[r+1],s[2]+=m[r+2],s[3]+=m[r+3]);for(n=u=0;u<=4;n=++u)for(a=l=0;l<=4;a=++l)D=E+n,w=v+a,w<S.width&&D<S.height&&(r=4*(D*S.width+w),f[r]=s[0]/t,f[r+1]=s[1]/t,f[r+2]=s[2]/t,f[r+3]=s[3]/t)}c.putImageData(g,0,0),e="image-pixelization.png"},Y=document.getElementById("pixelization"),Y.addEventListener("click",X),Z=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D;for(g=c.createImageData(S.width,S.height),f=g.data,E=i=0,p=S.height-7;i<p;E=i+=15)for(v=o=0,I=S.width-7;o<I;v=o+=15){for(s=[0,0,0,0],t=0,n=d=0;d<=14;n=++d)for(a=h=0;h<=14;a=++h)D=E+n,w=v+a,w<S.width&&D<S.height&&(t+=1,r=4*(D*S.width+w),s[0]+=m[r],s[1]+=m[r+1],s[2]+=m[r+2],s[3]+=m[r+3]);for(n=u=0;u<=14;n=++u)for(a=l=0;l<=14;a=++l)D=E+n,w=v+a,w<S.width&&D<S.height&&(r=4*(D*S.width+w),f[r]=s[0]/t,f[r+1]=s[1]/t,f[r+2]=s[2]/t,f[r+3]=s[3]/t)}c.putImageData(g,0,0),e="image-pixelization-hard.png"},$=document.getElementById("pixelization_hard"),$.addEventListener("click",Z),a=function(){var t,a,n,r,i,o;for(r=c.createImageData(S.width,S.height),i=r.data,t=127,a=n=0,o=m.length;n<o;a=n+=4)i[a]=m[a]>t?255:0,i[a+1]=m[a+1]>t?255:0,i[a+2]=m[a+2]>t?255:0,i[a+3]=m[a+3];c.putImageData(r,0,0),e="image-binarization.png"},n=document.getElementById("binarization"),n.addEventListener("click",a),V=function(){var t,a,n,r,i,o,d,h,g,f,m,u;for(h=T(),g=h.data,a=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),n=r=0,f=g.length;r<f;n=r+=4)a[g[n]]+=1;for(o=h.width*h.height/2,t=0,u=0,n=i=255;i>=0;n=--i)if(t+=a[n],t>=o){u=n;break}for(n=d=0,m=g.length;d<m;n=d+=4)g[n]=g[n]>u?255:0,g[n+1]=g[n+1]>u?255:0,g[n+2]=g[n+2]>u?255:0,g[n+3]=g[n+3];c.putImageData(h,0,0),e="image-percentile-method.png"},W=document.getElementById("percentile_method"),W.addEventListener("click",V),p=function(){var t,a,n,r,i,o;for(r=c.createImageData(S.width,S.height),i=r.data,t=[.73412,.647019,.07914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter1.png",r},I=document.getElementById("filter1"),I.addEventListener("click",p),s=function(){var t,a,n,r,i,o;for(r=c.createImageData(S.width,S.height),i=r.data,t=[.073412,.0647019,.07914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter2.png",r},v=document.getElementById("filter2"),v.addEventListener("click",s),w=function(){var t,a,n,r,i,o;for(r=c.createImageData(S.width,S.height),i=r.data,t=[.9,0,.5],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter3.png",r},E=document.getElementById("filter3"),E.addEventListener("click",w),D=function(){var t,a,n,r,i,o;for(r=c.createImageData(S.width,S.height),i=r.data,t=[.373412,.347019,.3914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter4.png",r},y=document.getElementById("filter4"),y.addEventListener("click",D),M=function(){var t,a,n,r,i,o;for(r=c.createImageData(S.width,S.height),i=r.data,t=[.0073412,.647019,.7914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter5.png",r},k=document.getElementById("filter5"),k.addEventListener("click",M),B=function(){var t,a,n,r,i,o;for(r=c.createImageData(S.width,S.height),i=r.data,t=[.93412,.647019,.0057914],a=n=0,o=m.length;n<o;a=n+=4)i[a]=255/(1+Math.exp(t[0]*(127-m[a]))),i[a+1]=255/(1+Math.exp(t[1]*(127-m[a+1]))),i[a+2]=255/(1+Math.exp(t[2]*(127-m[a+2]))),i[a+3]=m[a+3];return c.putImageData(r,0,0),e="image-filter6.png",r},L=document.getElementById("filter6"),L.addEventListener("click",B),tt=function(t){var a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y,M,k,B,L,x,b,_,z,R,U,T,A,C,F;for(null==t&&(t=5),w=c.createImageData(S.width,S.height),E=w.data,"number"!=typeof t&&(t=5),C=t,s=256/C,d=255/(C-1),r=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),h=f=0,M=C;0<=M?f<M:f>M;h=0<=M?++f:--f)for(g=u=k=Math.floor(h*s),B=Math.floor((h+1)*s);k<=B?u<B:u>B;g=k<=B?++u:--u)r[g]=d*h;for(A=t,I=256/A,o=255/(A-1),n=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),h=l=0,L=A;0<=L?l<L:l>L;h=0<=L?++l:--l)for(g=v=x=Math.floor(h*I),b=Math.floor((h+1)*I);x<=b?v<b:v>b;g=x<=b?++v:--v)n[g]=o*h;for(T=t,p=256/T,i=255/(T-1),a=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),h=D=0,_=T;0<=_?D<_:D>_;h=0<=_?++D:--D)for(g=y=z=Math.floor(h*p),R=Math.floor((h+1)*p);z<=R?y<R:y>R;g=z<=R?++y:--y)a[g]=i*h;for(h=F=0,U=m.length;F<U;h=F+=4)E[h]=r[m[h]],E[h+1]=n[m[h+1]],E[h+2]=a[m[h+2]],E[h+3]=m[h+3];return c.putImageData(w,0,0),e="image-posterization.png",w},et=document.getElementById("posterization"),et.addEventListener("click",tt),J=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w;for(g=c.createImageData(S.width,S.height),f=g.data,w=i=1,u=S.height-1;1<=u?i<u:i>u;w=1<=u?++i:--i)for(v=o=1,l=S.width-1;1<=l?o<l:o>l;v=1<=l?++o:--o){for(r=4*(w*S.width+v),s=[],I=[],p=[],n=d=-1;d<=1;n=++d)for(a=h=-1;h<=1;a=++h)t=4*((w+n)*S.width+(v+a)),s.push(m[t]),I.push(m[t+1]),p.push(m[t+2]);s.sort(function(t,e){return t>e?-1:t<e?1:0}),I.sort(function(t,e){return t>e?-1:t<e?1:0}),p.sort(function(t,e){return t>e?-1:t<e?1:0}),f[r]=s[4],f[r+1]=I[4],f[r+2]=p[4],f[r+3]=m[r+3]}return c.putImageData(g,0,0),e="image-median-filter.png",g},K=document.getElementById("median_filter"),K.addEventListener("click",J),j=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y,M,k,B,L,x;for(v=tt(64),w=v.data,x=g=2,D=S.height-2;2<=D?g<D:g>D;x=2<=D?++g:--g)for(L=f=2,y=S.width-2;2<=y?f<y:f>y;L=2<=y?++f:--f){for(d=4*(x*S.width+L),o=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),i=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),r=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),n=I=-2;I<=2;n=++I)for(a=s=-2;s<=2;a=++s)t=4*((x+n)*S.width+(L+a)),o[m[t]]+=1,i[m[t+1]]+=1,r[m[t+2]]+=1;for(p=0,l=0,u=0,B=0,k=0,M=0,h=E=0;E<=255;h=++E)p<o[h]&&(p=o[h],B=h),l<i[h]&&(l=i[h],k=h),u<r[h]&&(u=r[h],M=h);w[d]=B,w[d+1]=k,w[d+2]=M,w[d+3]=m[d+3]}return c.putImageData(v,0,0),e="image-kaiga.png",v},q=document.getElementById("kaiga"),q.addEventListener("click",j),x=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D;for(l=c.createImageData(S.width,S.height),p=l.data,t=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],D=h=2,s=S.height;2<=s?h<s:h>s;D=2<=s?++h:--h)for(E=g=2,v=S.width;2<=v?g<v:g>v;E=2<=v?++g:--g){for(o=4*(D*S.width+E),w=[0,0,0],i=f=-2;f<=0;i=++f)for(r=u=-2;u<=0;r=++u)for(d=3*(i+2)+(r+2),n=4*((D+i)*S.width+(E+r)),a=I=0;I<3;a=++I)w[a]+=m[n+a]*t[d];p[o]=w[0],p[o+1]=w[1],p[o+2]=w[2],p[o+3]=m[o+3]}return c.putImageData(l,0,0),e="image-fir-filter.png",l},b=document.getElementById("fir_filter"),b.addEventListener("click",x),_=function(){var t,a,n,r,i,o;for(r=T(),i=r.data,n=255,_=1.5,t=a=0,o=i.length;a<o;t=a+=4)i[t]=n*Math.pow(m[t]/n,1/_),i[t+1]=n*Math.pow(m[t+1]/n,1/_),i[t+2]=n*Math.pow(m[t+2]/n,1/_),i[t+3]=i[t+3];c.putImageData(r,0,0),e="image-gamma.png"},z=document.getElementById("gamma"),z.addEventListener("click",_),at=function(){var t,a,n,r,i,o,d,h,g,f,u;for(h=T(),g=h.data,r=i=0,u=m.length;i<u;r=i+=4){for(f=m[r],a=m[r+1],t=m[r+2],o=Math.max(f,a,t),d=Math.min(f,a,t),f===a&&f===t?n=0:f>=a&&f>=t?n=60*((a-t)/(o-d)):a>=f&&a>=t?n=60*((t-f)/(o-d))+120:t>=f&&t>=a&&(n=60*((f-a)/(o-d))+240);n<0;)n+=360;(n<=30||n>=300)&&(g[r]=f,g[r+1]=a,g[r+2]=t)}return c.putImageData(h,0,0),e="image-red.png",h},nt=document.getElementById("red"),nt.addEventListener("click",at),C=function(){var t,a,n,r,i,o,d,h,g,f,u;for(h=T(),g=h.data,r=i=0,u=m.length;i<u;r=i+=4){for(f=m[r],a=m[r+1],t=m[r+2],o=Math.max(f,a,t),d=Math.min(f,a,t),f===a&&f===t?n=0:f>=a&&f>=t?n=60*((a-t)/(o-d)):a>=f&&a>=t?n=60*((t-f)/(o-d))+120:t>=f&&t>=a&&(n=60*((f-a)/(o-d))+240);n<0;)n+=360;n<=180&&n>=30&&(g[r]=f,g[r+1]=a,g[r+2]=t)}return c.putImageData(h,0,0),e="image-green.png",h},F=document.getElementById("green"),F.addEventListener("click",C),r=function(){var t,a,n,r,i,o,d,h,g,f,u;for(h=T(),g=h.data,r=i=0,u=m.length;i<u;r=i+=4){for(f=m[r],a=m[r+1],t=m[r+2],o=Math.max(f,a,t),d=Math.min(f,a,t),f===a&&f===t?n=0:f>=a&&f>=t?n=60*((a-t)/(o-d)):a>=f&&a>=t?n=60*((t-f)/(o-d))+120:t>=f&&t>=a&&(n=60*((f-a)/(o-d))+240);n<0;)n+=360;n<=300&&n>=180&&(g[r]=f,g[r+1]=a,g[r+2]=t)}return c.putImageData(h,0,0),e="image-blue.png",h},i=document.getElementById("blue"),i.addEventListener("click",r),ft=function(){var t,a,n,r,i,o,d,h,g,f,u,l,p,I,s,v,w,E,D,y,M,k,B,L,x,b,_,z,R,U,A,C,F,S;for(v=T(),w=v.data,"number"!=typeof U&&(U=5),F=U,I=256/F,o=255/(F-1),n=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),d=g=0,y=F;0<=y?g<y:g>y;d=0<=y?++g:--g)for(h=f=M=Math.floor(d*I),k=Math.floor((d+1)*I);M<=k?f<k:f>k;h=M<=k?++f:--f)n[h]=o*d;for(C=U,p=256/C,i=255/(C-1),a=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),d=u=0,B=C;0<=B?u<B:u>B;d=0<=B?++u:--u)for(h=s=L=Math.floor(d*p),x=Math.floor((d+1)*p);L<=x?s<x:s>x;h=L<=x?++s:--s)a[h]=i*d;for(A=U,l=256/A,r=255/(A-1),t=function(){var t,e;for(e=[],t=1;t<=256;t++)e.push(0);return e}(),d=E=0,b=A;0<=b?E<b:E>b;d=0<=b?++E:--E)for(h=D=_=Math.floor(d*l),z=Math.floor((d+1)*l);_<=z?D<z:D>z;h=_<=z?++D:--D)t[h]=r*d;for(d=S=0,R=m.length;S<R;d=S+=4)w[d]=n[w[d]],w[d+1]=a[w[d+1]],w[d+2]=t[w[d+2]],w[d+3]=w[d+3];return c.putImageData(v,0,0),e="image-simple.png",v},ct=document.getElementById("simple"),ct.addEventListener("click",ft),ot=function(){var t,a,n,r,i,o,d,h;for(r=c.createImageData(S.width,S.height),i=r.data,t=a=0,o=m.length;a<o;t=a+=4)i[t]=m[t],i[t+1]=m[t+1],i[t+2]=m[t+2],i[t+3]=m[t+3];return c.putImageData(r,0,0),c.font="64px 'ＭＳ Ｐゴシック'",n=c.measureText("㊙"),d=(S.width-n.width)/2,h=S.height-n.width,c.fillStyle="red",c.fillText("㊙",d,h),e="image-secret.png"},dt=document.getElementById("secret"),dt.addEventListener("click",ot)},window.onload=function(){var e,a;e=document.getElementById("preview"),a=document.getElementById("getfile"),a.onchange=function(){var e,n;e=new Image,e.onload=function(){t(this)},n=new FileReader,n.onload=function(){return e.src=n.result},n.readAsDataURL(a.files[0])}}}).call(this);