/* Navigation behavior stays separate from view state and sample data. */
window.RPHNavigation={
  emit(name,detail){document.dispatchEvent(new CustomEvent(`rph:${name}`,{detail}));},
  closeMenu(){document.body.classList.remove('menu-open');document.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded','false');this.syncMenu();},
  syncMenu(){const sidebar=document.querySelector('.workspace-sidebar');if(sidebar)sidebar.inert=matchMedia('(max-width: 760px)').matches&&!document.body.classList.contains('menu-open');},
  init(){
    document.addEventListener('click',event=>{
      const target=event.target.closest('button,a');if(!target)return;
      if(target.matches('[data-menu-toggle]')){const open=document.body.classList.toggle('menu-open');target.setAttribute('aria-expanded',String(open));this.syncMenu();}
      if(target.matches('[data-menu-close]'))this.closeMenu();
      if(target.matches('[data-lang]'))this.emit('language',target.dataset.lang);
      if(target.matches('[data-tab]'))this.emit('tab',{group:target.dataset.tabGroup,value:target.dataset.tab,id:target.id});
      if(target.matches('[data-slide]'))this.emit('slide',Number(target.dataset.slide));
    });
    document.addEventListener('keydown',event=>{
      if(document.querySelector('dialog[open]'))return;
      const tab=event.target.closest('[role="tab"]');
      if(tab&&['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
        event.preventDefault();const tabs=[...tab.parentElement.querySelectorAll('[role="tab"]')];let index=tabs.indexOf(tab);
        index=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
        tabs[index].click();document.getElementById(tabs[index].id)?.focus({preventScroll:true});return;
      }
      if(event.key==='Escape'){if(document.body.dataset.page==='presentation')location.href=RPHI18n.href('index.html');else {this.closeMenu();document.querySelector('[data-menu-toggle]')?.focus();}}
      if(document.body.dataset.page==='presentation'&&!event.target.matches('input,select,textarea,button[data-lang]')){
        if(event.key==='ArrowLeft'){event.preventDefault();this.emit('slide',-1);}
        if(event.key==='ArrowRight'){event.preventDefault();this.emit('slide',1);}
      }
    });
    matchMedia('(max-width: 760px)').addEventListener('change',()=>this.syncMenu());this.syncMenu();
  }
};
