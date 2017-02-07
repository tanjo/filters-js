(function(){var t;t=function(t){var e,a,i,n,d,r,h,o,c,g,f,m,l,u,w,I,v,s,E,D,p,y,B,L,k,_,b,R,x,z,U,A,C,F;i=document.getElementById("result"),o=i.getContext("2d"),i.width=t.width,i.height=t.height,o.drawImage(t,0,0,t.width,t.height),t.style.display="none",I=o.getImageData(0,0,i.width,i.height),c=I.data,x=function(){var t,e;return window.open(i.toDataURL("image/png")),e=i.toDataURL("png"),t=document.createElement("a"),t.href=e,t.download="image.png",t.click()},z=document.getElementById("save"),z.disabled=null,z.addEventListener("click",x),p=function(){o.putImageData(I,0,0)},y=document.getElementById("original"),y.addEventListener("click",p),u=function(){var t,e,a,i,n,d;for(i=o.createImageData(I.width,I.height),n=i.data,e=a=0,d=c.length;a<d;e=a+=4)t=(c[e]+c[e+1]+c[e+2])/3,n[e]=t,n[e+1]=t,n[e+2]=t,n[e+3]=c[e+3];o.putImageData(i,0,0)},w=document.getElementById("grayscale"),w.addEventListener("click",u),g=function(){var t,e,a,i,n,d,r,h,g,f,m,l,u,w,v,s,E,D,p,y;for(w=o.createImageData(I.width,I.height),v=w.data,g=[-1,-1,0,-1,1,1,0,1,1],y=r=1,s=I.height-1;1<=s?r<s:r>s;y=1<=s?++r:--r)for(p=h=1,E=I.width-1;1<=E?h<E:h>E;p=1<=E?++h:--h){for(e=m=0;m<3;e=++m){for(d=4*(y*I.width+p)+e,D=0,n=l=-1;l<=1;n=++l)for(i=u=-1;u<=1;i=++u)f=3*(n+1)+(i+1),a=4*((y+n)*I.width+(p+i))+e,D+=g[f]*c[a];D>255&&(v[d]=255),D<0?v[d]=0:v[d]=D}t=4*(y*I.width+p)+3,v[t]=c[t]}o.putImageData(w,0,0)},f=document.getElementById("emboss"),f.addEventListener("click",g),U=function(){var t,e,a,i,n,d,r,h,g,f,m,l,u,w,v,s,E,D,p,y;for(w=o.createImageData(I.width,I.height),v=w.data,g=[0,-1,0,-1,5,-1,0,-1,0],y=r=1,s=I.height-1;1<=s?r<s:r>s;y=1<=s?++r:--r)for(p=h=1,E=I.width-1;1<=E?h<E:h>E;p=1<=E?++h:--h){for(e=m=0;m<3;e=++m){for(d=4*(y*I.width+p)+e,D=0,n=l=-1;l<=1;n=++l)for(i=u=-1;u<=1;i=++u)f=3*(n+1)+(i+1),a=4*((y+n)*I.width+(p+i))+e,D+=g[f]*c[a];D>255&&(v[d]=255),D<0?v[d]=0:v[d]=D}t=4*(y*I.width+p)+3,v[t]=c[t]}o.putImageData(w,0,0)},A=document.getElementById("sharp"),A.addEventListener("click",U),E=function(){var t,e,a,i,n;for(a=o.createImageData(I.width,I.height),i=a.data,t=e=0,n=c.length;e<n;t=e+=4)i[t]=255-c[t],i[t+1]=255-c[t+1],i[t+2]=255-c[t+2],i[t+3]=c[t+3];o.putImageData(a,0,0)},D=document.getElementById("negative"),D.addEventListener("click",E),n=function(){var t,e,a,i,n,d;for(t=function(t){var e;return e=1.5,e*(t-127)+127},i=o.createImageData(I.width,I.height),n=i.data,e=a=0,d=c.length;a<d;e=a+=4)n[e]=t(c[e]),n[e+1]=t(c[e+1]),n[e+2]=t(c[e+2]),n[e+3]=c[e+3];o.putImageData(i,0,0)},d=document.getElementById("contrast_enhancement"),d.addEventListener("click",n),r=function(){var t,e,a,i,n,d;for(t=function(t){var e;return e=.5,e*(t-127)+127},i=o.createImageData(I.width,I.height),n=i.data,e=a=0,d=c.length;a<d;e=a+=4)n[e]=t(c[e]),n[e+1]=t(c[e+1]),n[e+2]=t(c[e+2]),n[e+3]=c[e+3];o.putImageData(i,0,0)},h=document.getElementById("contrast_reduction"),h.addEventListener("click",r),m=function(){var t,e,a,i,n,d,r,h,g,f,m,l,u,w,v,s,E,D,p,y;for(w=o.createImageData(I.width,I.height),v=w.data,g=[.00390625,.015625,.0234375,.015625,.00390625,.015625,.0625,.09375,.0625,.015625,.0234375,.09375,.140625,.09375,.0234375,.015625,.0625,.09375,.0625,.015625,.00390625,.015625,.0234375,.015625,.00390625],y=r=2,s=I.height-2;2<=s?r<s:r>s;y=2<=s?++r:--r)for(p=h=2,E=I.width-2;2<=E?h<E:h>E;p=2<=E?++h:--h){for(e=m=0;m<3;e=++m){for(d=4*(y*I.width+p)+e,D=0,n=l=-2;l<=2;n=++l)for(i=u=-2;u<=2;i=++u)f=5*(n+2)+(i+2),a=4*((y+n)*I.width+(p+i))+e,D+=g[f]*c[a];D>255&&(v[d]=255),D<0?v[d]=0:v[d]=D}t=4*(y*I.width+p)+3,v[t]=c[t]}o.putImageData(w,0,0)},l=document.getElementById("gaussian_filter"),l.addEventListener("click",m),C=function(){var t,e,a,i,n,d,r,h,g,f,m,l,u,w,v,s,E,D,p,y;for(w=o.createImageData(I.width,I.height),v=w.data,g=[-1,0,1,-2,0,2,-1,0,1],y=r=1,s=I.height-1;1<=s?r<s:r>s;y=1<=s?++r:--r)for(p=h=1,E=I.width-1;1<=E?h<E:h>E;p=1<=E?++h:--h){for(e=m=0;m<3;e=++m){for(d=4*(y*I.width+p)+e,D=0,n=l=-1;l<=1;n=++l)for(i=u=-1;u<=1;i=++u)f=3*(n+1)+(i+1),a=4*((y+n)*I.width+(p+i))+e,D+=g[f]*c[a];D>255&&(v[d]=255),D<0?v[d]=0:v[d]=D}t=4*(y*I.width+p)+3,v[t]=c[t]}o.putImageData(w,0,0)},F=document.getElementById("sobel_filter"),F.addEventListener("click",C),v=function(){var t,e,a,i,n,d,r,h,g,f,m,l,u,w,v,s,E,D,p,y;for(w=o.createImageData(I.width,I.height),v=w.data,g=[1,1,1,1,-8,1,1,1,1],y=r=1,s=I.height-1;1<=s?r<s:r>s;y=1<=s?++r:--r)for(p=h=1,E=I.width-1;1<=E?h<E:h>E;p=1<=E?++h:--h){for(e=m=0;m<3;e=++m){for(d=4*(y*I.width+p)+e,D=0,n=l=-1;l<=1;n=++l)for(i=u=-1;u<=1;i=++u)f=3*(n+1)+(i+1),a=4*((y+n)*I.width+(p+i))+e,D+=g[f]*c[a];D>255&&(v[d]=255),D<0?v[d]=0:v[d]=D}t=4*(y*I.width+p)+3,v[t]=c[t]}o.putImageData(w,0,0)},s=document.getElementById("laplacian_filter"),s.addEventListener("click",v),k=function(){var t,e,a,i,n,d,r,h,g,f,m,l,u,w,v,s,E,D,p;for(m=o.createImageData(I.width,I.height),l=m.data,D=n=0,u=I.height-2;n<u;D=n+=5)for(s=d=0,w=I.width-2;d<w;s=d+=5){for(v=[0,0,0,0],t=0,a=r=0;r<=4;a=++r)for(e=h=0;h<=4;e=++h)p=D+a,E=s+e,E<I.width&&p<I.height&&(t+=1,i=4*(p*I.width+E),v[0]+=c[i],v[1]+=c[i+1],v[2]+=c[i+2],v[3]+=c[i+3]);for(a=g=0;g<=4;a=++g)for(e=f=0;f<=4;e=++f)p=D+a,E=s+e,E<I.width&&p<I.height&&(i=4*(p*I.width+E),l[i]=v[0]/t,l[i+1]=v[1]/t,l[i+2]=v[2]/t,l[i+3]=v[3]/t)}o.putImageData(m,0,0)},_=document.getElementById("pixelization"),_.addEventListener("click",k),e=function(){var t,e,a,i,n,d;for(i=o.createImageData(I.width,I.height),n=i.data,t=127,e=a=0,d=c.length;a<d;e=a+=4)n[e]=c[e]>t?255:0,n[e+1]=c[e+1]>t?255:0,n[e+2]=c[e+2]>t?255:0,n[e+3]=c[e+3];o.putImageData(i,0,0)},a=document.getElementById("binarization"),a.addEventListener("click",e),B=function(){},L=document.getElementById("percentile_method"),L.addEventListener("click",B),b=function(){var t,e,a,i,n,d,r,h,g,f,m,l,u,w,v,s,E,D,p;for(m=o.createImageData(I.width,I.height),l=m.data,D=n=0,u=I.height-7;n<u;D=n+=15)for(s=d=0,w=I.width-7;d<w;s=d+=15){for(v=[0,0,0,0],t=0,a=r=0;r<=14;a=++r)for(e=h=0;h<=14;e=++h)p=D+a,E=s+e,E<I.width&&p<I.height&&(t+=1,i=4*(p*I.width+E),v[0]+=c[i],v[1]+=c[i+1],v[2]+=c[i+2],v[3]+=c[i+3]);for(a=g=0;g<=14;a=++g)for(e=f=0;f<=14;e=++f)p=D+a,E=s+e,E<I.width&&p<I.height&&(i=4*(p*I.width+E),l[i]=v[0]/t,l[i+1]=v[1]/t,l[i+2]=v[2]/t,l[i+3]=v[3]/t)}o.putImageData(m,0,0)},R=document.getElementById("pixelization_hard"),R.addEventListener("click",b)},window.onload=function(){var e,a;e=document.getElementById("preview"),a=document.getElementById("getfile"),a.onchange=function(){var e,i;e=new Image,e.onload=function(){t(this)},i=new FileReader,i.onload=function(){return e.src=i.result},i.readAsDataURL(a.files[0])}}}).call(this);