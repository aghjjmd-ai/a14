(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('change',f);});f();}
function row(a,b){return '<li><span>'+a+'</span><b>'+b+'</b></li>';}
var ca=$('cz-a');if(ca){var cs=$('cz-s');
 var Z={walk:['Light to medium','Heel and ball of the foot','Thin, breathable instep','A crew or quarter sock with an arch band stays put over a long day.'],stand:['Medium','Full sole, densest under the ball','Thin instep','Standing loads the forefoot; padding there matters more than at the heel.'],run:['Light, targeted','Heel, ball and a padded heel tab','Mesh instep','Choose a seamless toe to avoid rubbing over distance.'],hike:['Medium to full','Sole, toes and around the ankle','Padded over the boot laces','The sock must reach above the boot collar.'],sit:['None','No padding needed','Fine knit all over','A thin sock keeps smart shoes comfortable and feet cooler.'],cycle:['None to light','A little under the ball only','Very thin and ventilated','Cycling shoes fit closely; thick socks cause numb toes.']};
 on([ca,cs],function(){var z=Z[ca.value],snug=cs.value==='snug',lvl=z[0];if(snug&&/Medium|full/i.test(lvl))lvl='Light (your shoes are snug)';
  $('cz-o').innerHTML='<strong>'+lvl+' cushioning</strong><ul>'+row('Pad here',z[1])+row('Top of the foot',z[2])+'</ul><p>'+z[3]+(snug&&lvl!==z[0]?' In snug shoes, thicker padding would squeeze the foot, so stay one level lighter or size the shoe up.':'')+'</p>';});}
var wf=$('ws-f');if(wf){var wc=$('ws-c'),wd=$('ws-d');
 on([wf,wc,wd],function(){var f=wf.value,c=wc.value,d=wd.value==='sport',t=f==='wool'?'30°C or cool':(f==='cotton'&&c==='white'&&d)?'40°C':'30°C',cy=f==='wool'?'Wool or delicates':f==='bamboo'?'Gentle':'Normal';
  var det=f==='wool'?'Wool wash':f==='synth'?'Sports or regular, no softener':f==='bamboo'?'Mild liquid':'Regular';var dry=f==='wool'?'Flat, away from heat':'On a line, hung by the toe';
  var tip=c==='white'?'Wash whites separately. For greyness, soak first with an oxygen-based whitener.':c==='dark'?'Wash darks inside out with other darks; new pairs shed dye at first.':'Wash inside out to keep the pattern crisp.';
  $('ws-o').innerHTML='<strong>'+t+', '+cy.toLowerCase()+' cycle</strong><ul>'+row('Detergent',det)+row('Drying',dry)+row('Softener','No')+row('Pre-rinse',d?'Yes, in cold water':'Not needed')+'</ul><p>'+tip+'</p>';});}
var hs=$('hm-s');if(hs){var hl=$('hm-l');
 var H={trainer:{long:'Ankle or quarter',crop:'No-show or ankle',short:'No-show, or a crew worn on purpose',skirt:'No-show or ankle'},loafer:{long:'No-show, or fine mid-calf in cool weather',crop:'No-show',short:'No-show',skirt:'No-show'},dress:{long:'Mid-calf',crop:'Mid-calf in a deliberate colour',short:'Not a natural pairing; choose loafers',skirt:'Fine ankle or sheer sock'},ankle:{long:'Crew',crop:'Crew, showing a little above the boot',short:'Crew or slouch sock',skirt:'Crew or knee-high'},hike:{long:'Crew or higher',crop:'Crew or higher',short:'Crew',skirt:'Crew'},sandal:{long:'Usually none',crop:'None, or a fine ribbed sock as a style choice',short:'None',skirt:'None, or a fine ankle sock as a style choice'}};
 on([hs,hl],function(){var h=H[hs.value][hl.value],s=hs.value,note=s==='ankle'||s==='hike'?'The sock must come above the top of the boot, or the collar will rub.':s==='loafer'?'Choose a no-show with a silicone grip at the heel so it stays on.':s==='dress'?'Match the sock to the trousers and make sure no skin shows when you sit.':s==='sandal'?'If you do wear socks with sandals, make it look intended: clean, ribbed and in good condition.':'With trainers, either hide the sock or show it clearly.';
  $('hm-o').innerHTML='<strong>'+h+'</strong><p>'+note+'</p>';});}
})();
