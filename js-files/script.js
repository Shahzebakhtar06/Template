let ul = document.getElementsByClassName('pages')
let li = document.querySelectorAll('li')


li.forEach(eL => {
    eL.addEventListener('click',function(){
        ul.querySelector('.active').classList.remove('active');
        
        eL.classList.add('active');
    } )

})

let userDetails = document.querySelector('.user-detail')
let dropMenu = document.querySelector('.user-drop-menu')

userDetails.addEventListener('click',function(){
    dropMenu.style.display="block"
})

$(document).ready(function(){
    $('#myinput').on("keyup",function(){
        let srch=$(this).val().toLowerCase()
        $('#my-table tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(srch)>-1)
        })
    })
})