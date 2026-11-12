// usage: node render_caption.js "<line1>\n<line2>" out.png [topPx]
const {chromium}=require('playwright');const path=require('path');
(async()=>{const [text,out,top]=process.argv.slice(2);const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1080,height:1920}});
const u='file://'+path.join(__dirname,'caption.html')+'?text='+encodeURIComponent(text.replace(/\\n/g,'\n'))+(top?'&top='+top:'');
await p.goto(u);await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:out,omitBackground:true});await b.close();})();
