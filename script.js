let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('hero nav a footer');
window.onscroll=()=>{
    section.forEach(sec=>{
        let.top=window.screenY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top>offset && top<offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav footer a[href*='+id+']' ).classList.add('active')
            })
        }
    })
}