import $, { event } from 'jquery'


$(document).ready(()=>{
    $('.ri-menu-line').click(()=>{
        $('.navouter').toggle(500)
        $('.mob-nav').toggle(500).css('display','block')
    })
    // $('.singlefeature','#carouselExample').click(()=>{
    //     $('.navouter').show(500)
    //     $('.mob-nav').hide(500)
    // })
    $(document).ready(()=>{
       if(!$(event.target).closest('.mob-nav','ri-menu-line').length){
            $('.mob-nav').hide()
            $('.navouter').show()
       }
    })
})