import numpy as np, potrace
from PIL import Image
from scipy import ndimage as ndi
S=8
im=Image.open('../before-owner-logo.png').convert('RGB')
X0,Y0,X1,Y1=118,40,312,206
c=im.crop((X0,Y0,X1,Y1)); c=c.resize((c.width*S,c.height*S),Image.BICUBIC)
a=np.array(c).astype(float)
r,g,b=a[...,0],a[...,1],a[...,2]
lum=.3*r+.59*g+.11*b
gold=((r-b)>34)&(r>105)
gold=ndi.binary_opening(gold,iterations=2)
gold=ndi.binary_closing(gold,iterations=2)
white=(lum>147)&~gold
white=ndi.binary_opening(white,iterations=2)
goldL=ndi.binary_dilation(gold,iterations=3)
def trace(mask,alpha=1.0,opt=0.6,turd=30):
    mask=ndi.gaussian_filter(mask.astype(float),1.6)>0.5
    bm=potrace.Bitmap(~mask)
    pl=bm.trace(turdsize=turd,alphamax=alpha,opticurve=True,opttolerance=opt)
    d=[]
    f=lambda p:f"{p.x/S+X0:.2f} {p.y/S+Y0:.2f}"
    for cu in pl:
        d.append("M"+f(cu.start_point))
        for s in cu.segments:
            if s.is_corner: d.append("L"+f(s.c)+"L"+f(s.end_point))
            else: d.append("C"+f(s.c1)+" "+f(s.c2)+" "+f(s.end_point))
        d.append("Z")
    return "".join(d)
open('gold.d','w').write(trace(goldL))
open('white.d','w').write(trace(white))
print(len(open('gold.d').read()),len(open('white.d').read()))
