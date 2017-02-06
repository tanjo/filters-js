(function(){var t;t=function(t){var e,a,i,n,d,r,h,o,c,g,f,m,u,l,w,I,s,v,E,D,y,p,B,L,k,_;e=document.getElementById("result"),r=e.getContext("2d"),e.width=t.width,e.height=t.height,r.drawImage(t,0,0,t.width,t.height),t.style.display="none",l=r.getImageData(0,0,e.width,e.height),h=l.data,E=function(){r.putImageData(l,0,0)},D=document.getElementById("original"),D.addEventListener("click",E),m=function(){var t,e,a,i,n,d;for(i=r.createImageData(l.width,l.height),n=i.data,e=a=0,d=h.length;a<d;e=a+=4)t=(h[e]+h[e+1]+h[e+2])/3,n[e]=t,n[e+1]=t,n[e+2]=t,n[e+3]=h[e+3];r.putImageData(i,0,0)},u=document.getElementById("grayscale"),u.addEventListener("click",m),o=function(){var t,e,a,i,n,d,o,c,g,f,m,u,w,I,s,v,E,D,y,p;for(I=r.createImageData(l.width,l.height),s=I.data,g=[-1,-1,0,-1,1,1,0,1,1],p=o=1,v=l.height-1;1<=v?o<v:o>v;p=1<=v?++o:--o)for(y=c=1,E=l.width-1;1<=E?c<E:c>E;y=1<=E?++c:--c){for(e=m=0;m<3;e=++m){for(d=4*(p*l.width+y)+e,D=0,n=u=-1;u<=1;n=++u)for(i=w=-1;w<=1;i=++w)f=3*(n+1)+(i+1),a=4*((p+n)*l.width+(y+i))+e,D+=g[f]*h[a];D>255&&(s[d]=255),D<0?s[d]=0:s[d]=D}t=4*(p*l.width+y)+3,s[t]=h[t]}r.putImageData(I,0,0)},c=document.getElementById("emboss"),c.addEventListener("click",o),B=function(){var t,e,a,i,n,d,o,c,g,f,m,u,w,I,s,v,E,D,y,p;for(I=r.createImageData(l.width,l.height),s=I.data,g=[0,-1,0,-1,5,-1,0,-1,0],p=o=1,v=l.height-1;1<=v?o<v:o>v;p=1<=v?++o:--o)for(y=c=1,E=l.width-1;1<=E?c<E:c>E;y=1<=E?++c:--c){for(e=m=0;m<3;e=++m){for(d=4*(p*l.width+y)+e,D=0,n=u=-1;u<=1;n=++u)for(i=w=-1;w<=1;i=++w)f=3*(n+1)+(i+1),a=4*((p+n)*l.width+(y+i))+e,D+=g[f]*h[a];D>255&&(s[d]=255),D<0?s[d]=0:s[d]=D}t=4*(p*l.width+y)+3,s[t]=h[t]}r.putImageData(I,0,0)},L=document.getElementById("sharp"),L.addEventListener("click",B),s=function(){var t,e,a,i,n;for(a=r.createImageData(l.width,l.height),i=a.data,t=e=0,n=h.length;e<n;t=e+=4)i[t]=255-h[t],i[t+1]=255-h[t+1],i[t+2]=255-h[t+2],i[t+3]=h[t+3];r.putImageData(a,0,0)},v=document.getElementById("negative"),v.addEventListener("click",s),a=function(){var t,e,a,i,n,d;for(t=function(t){var e;return e=1.5,e*(t-127)+127},i=r.createImageData(l.width,l.height),n=i.data,e=a=0,d=h.length;a<d;e=a+=4)n[e]=t(h[e]),n[e+1]=t(h[e+1]),n[e+2]=t(h[e+2]),n[e+3]=h[e+3];r.putImageData(i,0,0)},i=document.getElementById("contrast_enhancement"),i.addEventListener("click",a),n=function(){var t,e,a,i,n,d;for(t=function(t){var e;return e=.5,e*(t-127)+127},i=r.createImageData(l.width,l.height),n=i.data,e=a=0,d=h.length;a<d;e=a+=4)n[e]=t(h[e]),n[e+1]=t(h[e+1]),n[e+2]=t(h[e+2]),n[e+3]=h[e+3];r.putImageData(i,0,0)},d=document.getElementById("contrast_reduction"),d.addEventListener("click",n),g=function(){var t,e,a,i,n,d,o,c,g,f,m,u,w,I,s,v,E,D,y,p;for(I=r.createImageData(l.width,l.height),s=I.data,g=[.00390625,.015625,.0234375,.015625,.00390625,.015625,.0625,.09375,.0625,.015625,.0234375,.09375,.140625,.09375,.0234375,.015625,.0625,.09375,.0625,.015625,.00390625,.015625,.0234375,.015625,.00390625],p=o=2,v=l.height-2;2<=v?o<v:o>v;p=2<=v?++o:--o)for(y=c=2,E=l.width-2;2<=E?c<E:c>E;y=2<=E?++c:--c){for(e=m=0;m<3;e=++m){for(d=4*(p*l.width+y)+e,D=0,n=u=-2;u<=2;n=++u)for(i=w=-2;w<=2;i=++w)f=5*(n+2)+(i+2),a=4*((p+n)*l.width+(y+i))+e,D+=g[f]*h[a];D>255&&(s[d]=255),D<0?s[d]=0:s[d]=D}t=4*(p*l.width+y)+3,s[t]=h[t]}r.putImageData(I,0,0)},f=document.getElementById("gaussian_filter"),f.addEventListener("click",g),k=function(){var t,e,a,i,n,d,o,c,g,f,m,u,w,I,s,v,E,D,y,p;for(I=r.createImageData(l.width,l.height),s=I.data,g=[-1,0,1,-2,0,2,-1,0,1],p=o=1,v=l.height-1;1<=v?o<v:o>v;p=1<=v?++o:--o)for(y=c=1,E=l.width-1;1<=E?c<E:c>E;y=1<=E?++c:--c){for(e=m=0;m<3;e=++m){for(d=4*(p*l.width+y)+e,D=0,n=u=-1;u<=1;n=++u)for(i=w=-1;w<=1;i=++w)f=3*(n+1)+(i+1),a=4*((p+n)*l.width+(y+i))+e,D+=g[f]*h[a];D>255&&(s[d]=255),D<0?s[d]=0:s[d]=D}t=4*(p*l.width+y)+3,s[t]=h[t]}r.putImageData(I,0,0)},_=document.getElementById("sobel_filter"),_.addEventListener("click",k),w=function(){var t,e,a,i,n,d,o,c,g,f,m,u,w,I,s,v,E,D,y,p;for(I=r.createImageData(l.width,l.height),s=I.data,g=[1,1,1,1,-8,1,1,1,1],p=o=1,v=l.height-1;1<=v?o<v:o>v;p=1<=v?++o:--o)for(y=c=1,E=l.width-1;1<=E?c<E:c>E;y=1<=E?++c:--c){for(e=m=0;m<3;e=++m){for(d=4*(p*l.width+y)+e,D=0,n=u=-1;u<=1;n=++u)for(i=w=-1;w<=1;i=++w)f=3*(n+1)+(i+1),a=4*((p+n)*l.width+(y+i))+e,D+=g[f]*h[a];D>255&&(s[d]=255),D<0?s[d]=0:s[d]=D}t=4*(p*l.width+y)+3,s[t]=h[t]}r.putImageData(I,0,0)},I=document.getElementById("laplacian_filter"),I.addEventListener("click",w),y=function(){var t,e,a,i,n,d,o,c,g,f,m,u,w,I,s,v,E,D,y;for(m=r.createImageData(l.width,l.height),u=m.data,D=n=0,w=l.height-2;n<w;D=n+=5)for(v=d=0,I=l.width-2;d<I;v=d+=5){for(s=[0,0,0,0],t=0,a=o=0;o<=4;a=++o)for(e=c=0;c<=4;e=++c)y=D+a,E=v+e,E<l.width&&y<l.height&&(t+=1,i=4*(y*l.width+E),s[0]+=h[i],s[1]+=h[i+1],s[2]+=h[i+2],s[3]+=h[i+3]);for(a=g=0;g<=4;a=++g)for(e=f=0;f<=4;e=++f)y=D+a,E=v+e,E<l.width&&y<l.height&&(i=4*(y*l.width+E),u[i]=s[0]/t,u[i+1]=s[1]/t,u[i+2]=s[2]/t,u[i+3]=s[3]/t)}r.putImageData(m,0,0)},p=document.getElementById("pixelization"),p.addEventListener("click",y)},window.onload=function(){var e,a;e=document.getElementById("preview"),a=document.getElementById("getfile"),a.onchange=function(){var e,i;e=new Image,e.onload=function(){t(this)},i=new FileReader,i.onload=function(){return e.src=i.result},i.readAsDataURL(a.files[0])}}}).call(this);