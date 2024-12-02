// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.



// - Exercise - 1


  // Coloquei o gtag.js logo abaixo da tag head no html, conforme documentação oficial do Google.

  // Mas também, deixei o trecho do código logo abaixo:

  //window.dataLayer = window.dataLayer || [];
  //function gtag(){dataLayer.push(arguments);}
  //gtag('js', new Date());
  //gtag('config', 'G-096NHNN8Q2');


  // - Exercise - 2


    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector("body > nav > ul > li:nth-child(4) > a").addEventListener('click', function () {
         
            console.log('botao contato clicado')
            gtag('event', 'click', {
                page_location: ["http://localhost:3000/case/"],
                element_name: "entre_em_contato",
                element_group: "menu"
        
             })
        })

    })

   // - Exercise - 3


   document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('click', function (e) {
    if (e.target.closest('[href*="http://autos.dp6.com.br/autos_revista_vfinal.pdf"]')) {
        console.log('botao arquivo download clicado')
        gtag('event', 'file_download', {
            page_location: ["http://localhost:3000/case/"],
            element_name: "download_pdf",
            element_group: "menu"
        
            })

        }
    })

})



// - Exercise - 4

// Lorem button

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('[data-id="lorem"]').addEventListener('click', function () {
     
        console.log('botao lorem clicado')
        gtag('event', 'click', {
            page_location: ["http://localhost:3000/case/analise"],
            element_name: "lorem",
            element_group: "ver_mais"
    
         })
    })

})

// Ipsum button

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('[data-id="ipsum"]').addEventListener('click', function () {
     
        console.log('botao ipsum clicado')
        gtag('event', 'click', {
            page_location: ["http://localhost:3000/case/analise"],
            element_name: "ipsum",
            element_group: "ver_mais"
    
         })
    })

})

// Dolor button

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('[data-id="dolor"]').addEventListener('click', function () {
     
        console.log('botao dolor clicado')
        gtag('event', 'click', {
            page_location: ["http://localhost:3000/case/analise"],
            element_name: "dolor",
            element_group: "ver_mais"
    
         })
    })

})


// - Exercise - 5

document.addEventListener('DOMContentLoaded', function(){
document.querySelector("body > main > section > form").addEventListener('click', function(){
    console.log('interação com o form')

      gtag('event', 'form_start', {
            page_location: "http://localhost:3000/case/sobre",
            form_id: "contato_id", // adicionei um form_id no html porque não havia.
            form_name: "contato_name", // adicionei um form_name no html porque não havia.
            form_class: "contato",
            form_destination: "http://localhost:3000/case/sobre#contato",
            
        })
   
    })
})

// - Exercise - 6


document.addEventListener('DOMContentLoaded', function(){
    var email = 
    document.querySelector(".contato").addEventListener('submit', function(){
        
       console.log('form de contato enviado')

      gtag('event', 'form_submit', {
            page_location: "http://localhost:3000/case/sobre",
            form_id: "contato_id", // adicionei um form_id no html porque não havia.
            form_name: "contato_name", // adicionei um form_name no html porque não havia.
            form_class: "contato",
            form_destination: "http://localhost:3000/case/sobre#contato",
            form_submit_text: document.querySelector("body > main > section > form > ul > li:nth-child(5) > button").innerText

        })
    })

})


// - Exercise - 7

var message = 'Obrigado pelo seu contato!';
	
		(function googleFormValidation() {
			if(document.body.innerText.includes(message)) {
				console.log(message);
				gtag('event', 'view_form_success', {
                    page_location: "http://localhost:3000/case/sobre",
                    form_id: document.querySelector("#contato_id").id, // adicionei um form_id no html porque não havia.
                    form_name: document.querySelector('[name="contato_name"]').name, // adicionei um form_id no html porque não havia.
                    form_class: document.querySelector(".contato").class,
                    
                
                })
			}else {
				setTimeout(googleFormValidation, 500);
			}
	})();
	








