/* Brand + collection tokens. Document-local; reload restores defaults. */
(() => {
  const defaults={brand:{...RPH_DATA.brandTheme},collections:Object.fromEntries(RPH_DATA.collectionTheme.map(item=>[item.id,item.color]))};
  const properties={brandPrimary:'--brand-primary',brandDark:'--color-dark',brandLight:'--color-light'};
  window.RPHTheme={
    current:structuredClone(defaults),
    collectionToken(id){return `var(--collection-${id}, var(--brand-primary))`;},
    apply(){
      Object.entries(properties).forEach(([key,property])=>document.documentElement.style.setProperty(property,this.current.brand[key]));
      RPH_DATA.collectionTheme.forEach(item=>{const value=this.current.collections[item.id];if(value)document.documentElement.style.setProperty(`--collection-${item.id}`,value);else document.documentElement.style.removeProperty(`--collection-${item.id}`);});
      document.querySelectorAll('[data-collection]').forEach(element=>element.style.setProperty('--series-color',this.collectionToken(element.dataset.collection)));
    },
    reset(){this.current=structuredClone(defaults);this.apply();},
    init(){
      this.apply();
      document.addEventListener('input',event=>{
        const input=event.target;
        if(input.matches('[data-brand-color]'))this.current.brand[input.dataset.brandColor]=input.value;
        else if(input.matches('[data-collection-color]'))this.current.collections[input.dataset.collectionColor]=input.value;
        else return;
        this.apply();const output=document.querySelector(`[data-color-value="${input.id}"]`);if(output)output.textContent=input.value.toUpperCase();
      });
    }
  };
})();
