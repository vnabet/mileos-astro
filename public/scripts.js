const filterBtn = document.querySelector('.filter-btn');
const filter = document.querySelector('.plots-filter');
const main = document.querySelector('main');

console.log(filter, filterBtn)

if(filter && filterBtn) {
    filterBtn.addEventListener('click', (e)=> {
      filter.classList.toggle('visible');
      e.stopPropagation();
      e.preventDefault();

      if(filter.classList.contains('visible')) {

        filter.style.top = filterPosition() + 'px';

        document.addEventListener('click', hideFilter)
        document.addEventListener('scroll', hideFilter)
      } else {
        document.removeEventListener('click',hideFilter);
        document.removeEventListener('scroll',hideFilter);
      }
    })
    
    
    filter.addEventListener('click', (e) => {
      console.log('filter');
      e.stopPropagation();
    })


    function hideFilter() {
      document.querySelector('.plots-filter').classList.remove('visible');
      document.removeEventListener('click',hideFilter);
        document.removeEventListener('scroll',hideFilter);
    }


    function filterPosition() {
      const {  
        top: ft,  
        height: fh  
      } = filterBtn.getBoundingClientRect();

      const {  
        top: mt,   
      } = main.getBoundingClientRect();

      return parseFloat(ft) - parseFloat(mt) + parseFloat(fh) + 5;
    }
}


