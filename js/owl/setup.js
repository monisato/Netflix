// $ => jquery 

$('.owl-carousel').owlCarousel({
    loop:false, // em loop ou não
    margin:10, // margem entre as imagens
    nav:false, // menu de setinhas embaixo do carrosel
    responsive:{ // qtd de itens de acordo com a largura
        0:{
            items:1 
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})