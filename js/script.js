// Scroll reveal per tutte le sezioni con la classe .visible
function revealOnScroll() {
  document.querySelectorAll('.intro-section, .report-section, .divider, .values-section, .sustainability-icons').forEach(function(sec) {
    var rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 70) sec.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// SCROLL REPORT CENTRATO ULTRA RAPIDO E EVIDENZA
document.getElementById('nav-report').addEventListener('click', function(e){
  e.preventDefault();
  const reportSec = document.getElementById('report');
  const rect = reportSec.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const target = rect.top + scrollTop - (window.innerHeight/2) + (reportSec.offsetHeight/2);

  window.requestAnimationFrame(function scrollStep(startTime){
    const duration = 150;
    const initial = window.scrollY;
    const distance = target-initial;
    function animate(now){
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed/duration);
      window.scrollTo(0, initial + distance * t); // linear for ultra fast!
      if(t < 1) window.requestAnimationFrame(animate);
    }
    window.requestAnimationFrame(function(now){ animate(now); });
  });

  setTimeout(()=> {
    document.querySelectorAll('.main-nav a').forEach(a=>a.classList.remove('active'));
    this.classList.add('active');
    reportSec.classList.add('spotlight');
    setTimeout(()=>reportSec.classList.remove('spotlight'),800);
  },200);
});

document.getElementById('nav-benefits').addEventListener('click', function(){
  document.querySelectorAll('.main-nav a').forEach(a=>a.classList.remove('active'));
  this.classList.add('active');
});

// LINGUA DINAMICA
let isItalian = true;
function toggleLanguage() {
  isItalian = !isItalian;
  document.getElementById('lang-btn').textContent = isItalian ? 'ENG' : 'ITA';
  document.getElementById('title').children[2].textContent = isItalian ? 'Sostenibilità' : 'Sustainability';
  document.getElementById('nav-report').textContent = isItalian ? 'Report' : 'Report';
  document.getElementById('nav-benefits').textContent = isItalian ? 'Benefici' : 'Benefits';
  document.getElementById('intro-title').textContent = isItalian ? 'La Sostenibilità per Barilla' : 'Sustainability for Barilla';
  document.getElementById('intro-desc').innerHTML = isItalian ?
    'Barilla integra la sostenibilità in ogni aspetto della sua filiera,<br>promuovendo innovazione, inclusione sociale e rispetto per l’ambiente.<br><strong>Scopri la nostra filosofia prima di esplorare i benefici concreti.</strong>' :
    'Barilla integrates sustainability into every aspect of its supply chain,<br>promoting innovation, social inclusion, and respect for the environment.<br><strong>Discover our philosophy before exploring the concrete benefits.</strong>';
  document.getElementById('report-title').textContent = isItalian ? 'Report di Sostenibilità 2024' : '2024 Sustainability Report';
  document.getElementById('report-desc').textContent = isItalian ? 'Scarica il report di sostenibilità 2024 in italiano' : 'Download the 2024 sustainability in english';
  document.getElementById('download-link').innerHTML = isItalian ? '<i class="fas fa-file-download"></i> Scarica (ITA)' : '<i class="fas fa-file-download"></i> Download (ENG)';
 document.getElementById('download-link').innerHTML = isItalian ? '<i class="fas fa-file-download"></i> Scarica (ITA)' : '<i class="fas fa-file-download"></i> Download (ENG)';
document.getElementById('download-link').setAttribute('href', isItalian ?
  'docs/2024_barilla_group_rapporto_sostenibilita_ita_interattivo.pdf' :
  'docs/2024_barilla_group_sustainability_report_eng_interactive.pdf');
document.getElementById('download-link').setAttribute('aria-label', isItalian ?
  'Scarica il Rapporto di Sostenibilità 2024 (ITA)' :
  'Download Sustainability Report 2024 (ENG)');
document.getElementById('download-link').setAttribute('download', '');
document.getElementById('download-link').setAttribute('aria-label', isItalian ?
  'Scarica il Rapporto di Sostenibilità 2024 (ITA)' :
  'Download Sustainability Report 2024 (ENG)');
  document.getElementById('divider-text').textContent = isItalian ?
    '“La sostenibilità è il nostro ingrediente principale.”' :
    '"Sustainability is our main ingredient."';
  document.getElementById('valori-title').textContent = isItalian ? 'I Valori di Barilla' : 'Barilla’s Values';
  document.getElementById('valori-desc').innerHTML = isItalian ?
    'Da sempre Barilla crede nella responsabilità sociale e ambientale.<br>L’azienda investe in innovazione, qualità delle materie prime e rispetto delle persone e del territorio.<br><strong>Crediamo che fare impresa significhi creare valore condiviso e un impatto positivo per tutti.</strong>' :
    'Barilla has always believed in social and environmental responsibility.<br>The company invests in innovation, high quality raw materials, and respect for people and the land.<br><strong>We believe doing business means creating shared value and a positive impact for all.</strong>';
  document.getElementById('benefit1-title').textContent = isItalian ? 'Ambiente' : 'Environment';
  document.getElementById('benefit1-text').textContent = isItalian ? 'Riduzione CO₂ e impatto ecologico controllato' : 'CO₂ reduction and controlled environmental impact';
  document.getElementById('benefit2-title').textContent = isItalian ? 'Comunità' : 'Community';
  document.getElementById('benefit2-text').textContent = isItalian ? 'Progetti di inclusione e nutrizione sostenibile' : 'Inclusion and sustainable nutrition projects';
  document.getElementById('benefit3-title').textContent = isItalian ? 'Packaging' : 'Packaging';
  document.getElementById('benefit3-text').textContent = isItalian ? '100% riciclabile, da fonti responsabili' : '100% recyclable, from responsible sources';
  document.getElementById('footer-text').innerHTML = isItalian ?
    '&copy; 2025 Pagina realizzata per il Project Work - CdS Informatica per le Aziende Digitali. Tutti i diritti riservati.' :
    '&copy; 2025 Page created for the Project Work - CdS Informatica per le Aziende Digitali. All rights reserved.';
}
