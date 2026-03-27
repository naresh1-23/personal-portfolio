const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Playfair+Display:wght@700;900&family=DM+Mono:wght@400&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html,body{width:100%;overflow-x:hidden;}
    html{scroll-behavior:smooth;}
    ::-webkit-scrollbar{width:3px;}
    ::-webkit-scrollbar-thumb{background:#3a2e6e;}
    ::selection{background:rgba(124,88,210,.35);color:#fff;}

    .cur-dot{position:fixed;width:8px;height:8px;border-radius:50%;background:#7c58d2;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform .08s;}
    .cur-ring{position:fixed;width:36px;height:36px;border-radius:50%;border:1px solid rgba(124,88,210,.4);pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .25s;}
    .cur-ring.on{width:54px;height:54px;border-color:rgba(124,88,210,.7);}

    .display{font-family:'Playfair Display',serif;}
    .mono{font-family:'DM Mono',monospace;}

    .npill{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:500;letter-spacing:.06em;color:rgba(226,223,245,.4);padding:7px 16px;border-radius:40px;transition:all .2s;text-transform:uppercase;}
    .npill:hover{color:#e2dff5;background:rgba(255,255,255,.05);}
    .npill.on{color:#e2dff5;background:rgba(124,88,210,.2);}

    .eyebrow{font-size:.72rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#7c58d2;margin-bottom:14px;display:flex;align-items:center;gap:10px;}
    .eyebrow::after{content:'';flex:1;max-width:48px;height:1px;background:#7c58d2;opacity:.5;}

    .gcard{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;transition:border-color .3s,background .3s;position:relative;overflow:hidden;}
    .gcard::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 20%,rgba(124,88,210,.07) 0%,transparent 70%);pointer-events:none;opacity:0;transition:opacity .4s;}
    .gcard:hover{border-color:rgba(124,88,210,.3);background:rgba(255,255,255,.05);}
    .gcard:hover::before{opacity:1;}

    .chip{display:inline-flex;align-items:center;font-size:.71rem;font-weight:500;letter-spacing:.04em;padding:4px 11px;border-radius:40px;background:rgba(124,88,210,.12);border:1px solid rgba(124,88,210,.25);color:rgba(196,180,255,.85);white-space:nowrap;}

    .etab{background:none;border:none;cursor:pointer;width:100%;text-align:left;padding:16px 20px;border-left:2px solid rgba(255,255,255,.06);transition:all .2s;font-family:'DM Sans',sans-serif;color:rgba(226,223,245,.45);}
    .etab:hover{color:#e2dff5;border-left-color:rgba(124,88,210,.5);background:rgba(255,255,255,.02);}
    .etab.on{color:#e2dff5;border-left-color:#7c58d2;background:rgba(124,88,210,.08);}

    .pcard{display:flex;flex-direction:column;gap:14px;padding:28px;border-radius:16px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);transition:all .35s;text-decoration:none;color:inherit;position:relative;overflow:hidden;}
    .pcard::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--ac);transform:scaleX(0);transform-origin:left;transition:transform .4s;}
    .pcard:hover{border-color:rgba(255,255,255,.14);background:rgba(255,255,255,.055);transform:translateY(-4px);box-shadow:0 24px 60px rgba(0,0,0,.45);}
    .pcard:hover::after{transform:scaleX(1);}

    .btnp{display:inline-flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;font-size:.82rem;font-weight:500;letter-spacing:.05em;padding:13px 26px;border-radius:8px;background:#7c58d2;color:#fff;border:none;cursor:pointer;text-decoration:none;transition:all .25s;}
    .btnp:hover{background:#9272e0;box-shadow:0 8px 28px rgba(124,88,210,.45);transform:translateY(-1px);}

    .btng{display:inline-flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;font-size:.82rem;font-weight:500;letter-spacing:.05em;padding:12px 24px;border-radius:8px;background:transparent;color:rgba(226,223,245,.7);border:1px solid rgba(255,255,255,.12);cursor:pointer;text-decoration:none;transition:all .25s;}
    .btng:hover{border-color:rgba(255,255,255,.28);color:#e2dff5;background:rgba(255,255,255,.04);}

    .crow{display:flex;align-items:center;gap:16px;padding:18px 0;border-bottom:1px solid rgba(255,255,255,.06);}
    .crow:last-child{border-bottom:none;}
    .cicon{width:40px;height:40px;border-radius:10px;background:rgba(124,88,210,.12);border:1px solid rgba(124,88,210,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .clink{color:rgba(226,223,245,.65);text-decoration:none;font-size:.875rem;transition:color .2s;}
    .clink:hover{color:#c4b4ff;}

    .skchip{display:inline-flex;align-items:center;font-size:.82rem;padding:6px 14px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:rgba(226,223,245,.75);margin:4px;transition:all .2s;}
    .skchip:hover{background:rgba(124,88,210,.15);border-color:rgba(124,88,210,.35);color:#e2dff5;}

    .arow{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-radius:10px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);margin-bottom:8px;transition:background .2s;}
    .arow:hover{background:rgba(255,255,255,.04);}

    @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
    @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
    @keyframes pulse-ring{0%{transform:scale(1);opacity:.4;}100%{transform:scale(2.4);opacity:0;}}

    .fu{animation:fadeUp .7s ease both;}
    .d1{animation-delay:.1s;}.d2{animation-delay:.2s;}.d3{animation-delay:.35s;}.d4{animation-delay:.5s;}

    .hbg{position:absolute;inset:0;background:radial-gradient(ellipse 90% 65% at 65% 40%,rgba(80,40,180,.2) 0%,transparent 68%),radial-gradient(ellipse 50% 40% at 15% 85%,rgba(40,80,200,.1) 0%,transparent 65%);pointer-events:none;}
    .hgrid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;mask-image:radial-gradient(ellipse 65% 60% at 60% 35%,black 0%,transparent 80%);}

    .gtext{background:linear-gradient(135deg,#e2dff5 0%,#b89cf5 40%,#7c58d2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

    .abadge{display:inline-flex;align-items:center;gap:8px;font-size:.75rem;font-weight:500;letter-spacing:.05em;padding:6px 14px;border-radius:40px;background:rgba(58,200,120,.1);border:1px solid rgba(58,200,120,.25);color:rgba(100,220,150,.9);}
    .adot{width:7px;height:7px;border-radius:50%;background:#3ac878;position:relative;flex-shrink:0;}
    .adot::after{content:'';position:absolute;inset:-3px;border-radius:50%;border:1px solid rgba(58,200,120,.5);animation:pulse-ring 2s ease-out infinite;}

    .orb{position:absolute;border-radius:50%;border:1px solid rgba(124,88,210,.1);animation:float 8s ease-in-out infinite;pointer-events:none;}

    section { width:100%; padding:96px 0; }

    .cont{width:100%;max-width:100%;margin:0;padding:0 80px;box-sizing:border-box;}
    .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(124,88,210,.22),transparent);width:100%;}
    .g2{display:grid;grid-template-columns:1fr 1fr;gap:24px;}

    @media(max-width:1024px){ .cont{padding:0 40px;} }
    @media(max-width:768px){
      .g2{grid-template-columns:1fr;}
      .elayout{flex-direction:column!important;}
      .dnone{display:none!important;}
      section{padding:72px 0;}
      .htitle{font-size:clamp(2.8rem,10vw,4rem)!important;}
      .cont{padding:0 24px;}
    }
  `}</style>
);

export default GlobalStyles;