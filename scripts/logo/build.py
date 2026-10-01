from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
F='/usr/share/fonts/truetype/sand-box/google/Montserrat/Montserrat-VariableFont_wght.ttf'
def inst(w):
    return instancer.instantiateVariableFont(TTFont(F),{'wght':w})
def text_path(font,s,cap_px,width_px,x_center,baseline,skip_space_extra=0):
    gs=font.getGlyphSet(); cmap=font.getBestCmap(); upm=font['head'].unitsPerEm
    capH=font['OS/2'].sCapHeight; sc=cap_px/capH
    glyphs=[cmap[ord(c)] for c in s]
    adv=[font['hmtx'][g][0] for g in glyphs]
    # ink extents
    from fontTools.pens.boundsPen import BoundsPen
    def bounds(g):
        bp=BoundsPen(gs); gs[g].draw(bp); return bp.bounds
    first=bounds(glyphs[0]); last=bounds(glyphs[-1])
    n=len(s)
    nat=sum(adv[:-1])*sc + last[2]*sc - first[0]*sc   # ink width with 0 tracking
    track=(width_px-nat)/(n-1)
    x=0; out=[]; parts=[]
    x0=-first[0]*sc
    pos=x0; res=[]
    for i,g in enumerate(glyphs):
        pen=SVGPathPen(gs,ntos=lambda v:f"{v:.2f}")
        tp=TransformPen(pen,(sc,0,0,-sc,pos,baseline))
        gs[g].draw(tp); res.append((s[i],pen.getCommands(),pos))
        pos+=adv[i]*sc+track
    left=x_center-width_px/2
    return res,left,track
def svgtext(font,s,cap,width,xc,base):
    res,left,track=text_path(font,s,cap,width,xc,base)
    return [(ch,d,left,pos) for ch,d,pos in res]
import re
def translate_d(d,dx):
    # path commands from SVGPathPen are absolute; shift x via group transform instead
    return d
CX=196.0
white='#FFFFFF'; gold='#C79248'; navy='#19293D'
f_bold=inst(800); f_mid=inst(600); f_tag=inst(600)
def group(font,s,cap,width,xc,base,fills):
    res,left,track=text_path(font,s,cap,width,xc,base)
    g=[]
    for (ch,d,pos),fill in zip(res,fills):
        g.append(f'<path fill="{fill}" d="{d}" transform="translate({left:.2f} 0)"/>')
    return "\n".join(g), track
gold_d=open('gold.d').read(); white_d=open('white.d').read()
def make(white_c,gold_c,bg=None,vb=(40,34,312,256)):
    x,y,w,h=vb
    t1,tr1=group(f_mid,"SEATTLE",12.8,136,CX,222,[white_c]*7)
    t2,tr2=group(f_bold,"MASTERFIX",30,276,CX,259,[white_c]*6+[gold_c]*3)
    t3,tr3=group(f_tag,"PRECISION CRAFTSMANSHIP",8.8,218,CX,278,[white_c]*23)
    # strip spaces (zero-area glyph paths are empty) fine
    lines=[(58,107,214),(275,333,214),(58,80,273),(313,335,273)]
    ls=''.join(f'<rect x="{a}" y="{y_-0.6}" width="{b-a}" height="1.2" fill="{gold_c}"/>' for a,b,y_ in lines)
    bgr=f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{bg}"/>' if bg else ''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x} {y} {w} {h}" role="img" aria-labelledby="t"><title id="t">Seattle MasterFix Precision Craftsmanship</title>
{bgr}
<path fill="{white_c}" fill-rule="evenodd" d="{white_d}"/>
<path fill="{gold_c}" fill-rule="evenodd" d="{gold_d}"/>
<g>{t1}</g>
<g>{t2}</g>
<g>{t3}</g>
{ls}
</svg>'''
import os
os.makedirs('out',exist_ok=True)
open('out/logo.svg','w').write(make(white,gold))
open('out/logo-on-navy.svg','w').write(make(white,gold,bg=navy))
open('out/logo-on-light.svg','w').write(make(navy,'#9A6A1E'))
