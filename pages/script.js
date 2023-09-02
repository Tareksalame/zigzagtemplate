const website = ()=>
{
    // window.location.href = "https://miniu-ca90d07bcee7.herokuapp.com/";
    window.open('https://miniu-ca90d07bcee7.herokuapp.com/','_blank')

}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }else
        {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>{observer.observe(el)})