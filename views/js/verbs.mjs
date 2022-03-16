

  const checkAnswers = () => {


   //For all INPUTS, mark the correct answer by a green INPUT border and the wrong one by red border
   
   let check = document.querySelectorAll('.input_Text')
   check.forEach(element => element.addEventListener('input',(e)=>{
      
      var data = element.getAttribute('data-verb').toString();
      var value = e.target.value;
      
      
            if (value == ""){
            element.style.border = "1px solid blue";
            element.style.color = "black";
            }
   
            else if (data === value){
               e.target.readOnly = true;
               element.style.border = "3px ridge rgba(0,181,47,0.9)";
               element.parentElement.style.background = "green";
               element.style.color = "green";
              
            }
            //Check letter if is written in correct order
            //
            else if (data.startsWith(value)){
            element.style.color = "green";
            }
            
            else{
               element.style.border = "3px solid red";
               element.style.color = "red";  
            }
      }))
   }
   
   //Show phrasal Verbs
   
    const phrasalVerbAnswer = function() {
      let buttonPhrasal = document.querySelectorAll('.showAnswerPhrasal');
      
            /*
            for( let butt of buttonPhrasal)
            butt.addEventListener('click', function(){
               butt.nextElementSibling.classList.toggle('hidden');
            })*/
            
   
      buttonPhrasal.forEach((item) => {
         item.addEventListener('click', function(){
            item.nextElementSibling.classList.toggle('hidden');
            
         })
      })
   }
   
  

/*
   (function($) {
       
      $('.hideJQ').not(':first').addClass('hide');
      // Ukaž zvolenou lekci a schovej ostatní
                 $('.dropdown-menu li').on('click',function(){
                  var eq = $(this).index();
                  
                  $('.hideJQ').addClass('hide');
                  $('.hideJQ').eq(eq).removeClass('hide');
               });
              
               $('#showAllIrregular').on('click', function(){
                   $('.hideJQ').removeClass('hide');
               })
    
    })(jQuery);*/
   
   checkAnswers();
   phrasalVerbAnswer();