console.log('script is loaded')
// style for select options
const taskCategory=document.querySelectorAll('.task-category');

taskCategory.forEach(i=>{
    i.style.borderRadius='10px'
    i.style.boxShadow='inset 0px 0px 2px 0px #1a1a1a'
    i.style.opacity='.8'
    i.style.width='80px'

    if(i.innerHTML==='Personal'){
        i.style.backgroundColor='#df9a17';
    }
    else if(i.innerHTML==='Work'){
        i.style.backgroundColor='#cc3020';

    }
    else if(i.innerHTML==='School'){
        i.style.backgroundColor='#572890';

    }
    else if(i.innerHTML==='Shoping'){
        i.style.backgroundColor='#13736d';

    }
    else if(i.innerHTML==='Other'){
        i.style.backgroundColor='#44b81a';

    }
});
// end here select option
