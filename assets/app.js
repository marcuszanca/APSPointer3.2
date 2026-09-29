const stores = Array.from({length:18},(_,i)=>({key:`demo-${i+1}`,label:`Unidade Demo ${String(i+1).padStart(2,'0')}`}));
const vendors=['Ubiquiti','Cisco','D-Link','Intelbras'];
const sectors=['Vendas','Estoque','Administrativo','Recepção','Operação','Expedição'];
let devices=[]; let selectedStore=null; let statusFilter='ALL'; let vendorFilter='ALL'; let query=''; let countdown=60;
let id=1;
for(let s=0;s<stores.length;s++){
  const qty=2+(s%3);
  for(let j=0;j<qty;j++){
    const status=(id%13===0)?'DOWN':(id%9===0)?'UNSTABLE':'UP';
    devices.push({id:id++,store:stores[s].key,name:`AP-DEMO-${String(s+1).padStart(2,'0')}-${j+1}`,ip:`192.0.2.${20+s*4+j}`,vendor:vendors[(s+j)%vendors.length],sector:sectors[(s*2+j)%sectors.length],status,latency:status==='DOWN'?null:4+((s*7+j*11)%32),loss:status==='DOWN'?100:status==='UNSTABLE'?50:0});
  }
}
const $=id=>document.getElementById(id);
function tickClock(){ $('clock').textContent=new Date().toLocaleTimeString('pt-BR'); }
setInterval(tickClock,1000); tickClock();
function counts(list){return {total:list.length,up:list.filter(d=>d.status==='UP').length,unstable:list.filter(d=>d.status==='UNSTABLE').length,down:list.filter(d=>d.status==='DOWN').length}}
function filtered(){return devices.filter(d=>(statusFilter==='ALL'||d.status===statusFilter)&&(vendorFilter==='ALL'||d.vendor===vendorFilter)&&(!query||`${d.name} ${d.ip} ${d.vendor} ${d.sector} ${stores.find(s=>s.key===d.store)?.label}`.toLowerCase().includes(query)))}
function renderSummary(){const c=counts(devices);$('sumTotal').textContent=c.total;$('sumUp').textContent=c.up;$('sumUnstable').textContent=c.unstable;$('sumDown').textContent=c.down;$('vAll').textContent=devices.length;vendors.forEach(v=>{const n=devices.filter(d=>d.vendor===v).length; const id=v==='D-Link'?'vDlink':`v${v}`; $(id).textContent=n})}
function renderStores(){const list=filtered();$('storeGrid').innerHTML=stores.map(s=>{const all=devices.filter(d=>d.store===s.key);const visible=list.filter(d=>d.store===s.key); if((statusFilter!=='ALL'||vendorFilter!=='ALL'||query)&&!visible.length)return '';const c=counts(all);return `<article class="store-card ${selectedStore===s.key?'selected':''}" data-store="${s.key}"><h3>${s.label}</h3><div class="counts"><span>${c.up} online</span><span>${c.down} offline</span></div><div class="dots">${all.map(d=>`<span class="dot ${d.status}" title="${d.status}"></span>`).join('')}</div></article>`}).join('');document.querySelectorAll('.store-card').forEach(el=>el.addEventListener('click',()=>selectStore(el.dataset.store)))}
function selectStore(key){selectedStore=selectedStore===key?null:key;renderStores();renderDrawer()}
function renderDrawer(){const box=$('drawer');if(!selectedStore){box.classList.add('hidden');return}const store=stores.find(s=>s.key===selectedStore);const list=devices.filter(d=>d.store===selectedStore);const c=counts(list);$('drawerTitle').textContent=store.label;$('drawerSub').textContent='Ambiente fictício para demonstração pública do dashboard.';$('dTotal').textContent=c.total;$('dUp').textContent=c.up;$('dUnstable').textContent=c.unstable;$('dDown').textContent=c.down;$('deviceGrid').innerHTML=list.map(d=>`<article class="device-card"><div class="device-top"><h4>${d.name}</h4><span class="status ${d.status}">${d.status==='UP'?'ONLINE':d.status==='DOWN'?'OFFLINE':'INSTÁVEL'}</span></div><div class="device-meta"><div>${d.vendor} • ${d.sector}</div><div>IP de documentação: ${d.ip}</div><div class="latency">${d.latency===null?'Sem resposta':`${d.latency} ms • perda ${d.loss}%`}</div></div></article>`).join('');box.classList.remove('hidden')}
function simulate(){devices=devices.map((d,i)=>{let st=d.status;if(i%17===0)st=st==='UP'?'UNSTABLE':'UP';if(i%29===0)st=st==='DOWN'?'UP':'DOWN';return {...d,status:st,latency:st==='DOWN'?null:3+((i*7+Date.now()/1000|0)%38),loss:st==='DOWN'?100:st==='UNSTABLE'?50:0}});countdown=60;renderAll()}
function renderAll(){renderSummary();renderStores();renderDrawer()}
document.querySelectorAll('.summary-card').forEach(b=>b.addEventListener('click',()=>{statusFilter=b.dataset.filter;document.querySelectorAll('.summary-card').forEach(x=>x.classList.toggle('active',x===b));renderStores()}));
document.querySelectorAll('#vendorFilters button').forEach(b=>b.addEventListener('click',()=>{vendorFilter=b.dataset.vendor;document.querySelectorAll('#vendorFilters button').forEach(x=>x.classList.toggle('active',x===b));renderStores()}));
$('search').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();renderStores()});$('clearSearch').addEventListener('click',()=>{$('search').value='';query='';renderStores()});
setInterval(()=>{countdown--;if(countdown<=0)simulate();$('countdown').textContent=countdown},1000);renderAll();
