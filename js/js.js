$(document).ready(function(){



///// loading /////
    $('.loadingLogo').ready(function(){
        $('.loadingLogo').delay(2000).fadeIn(300)
    })

    $('#loading').ready(function(){ 
        $('#loading').delay(3000).animate({top:'-200%'},1000)
    })

/////////////////////////////////////////
///// main /////
    
    ///// main1 video /////
    $('.videoBOX').delay(4200).animate({width:'40%',top:'50%'},600,function(){
        $('.main1_LogoText').show(10).animate({top:'80px'},600,function(){
            $('.main_textBox').fadeIn(1000)
        })
        
    })

    setInterval(function(){
      $('.scroll02').animate({'top':'53%'},450)
      $('.scroll02').animate({'top':'50%'},300)
    },600)
    

    setInterval(function(){
      $('.CenterScRoll img').animate({'top':'70%'},450)
      $('.CenterScRoll img').animate({'top':'45%'},300)
    },600)
  


/////////// header //////////////
   
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 이벤트를 발생시킬 스크롤의 이동 범위
    var navbarHeight = $("header").outerHeight();
  

    $(window).scroll(function(event){
      didScroll = true;
    });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      if(Math.abs(lastScrollTop-st) <= delta)
          return;

      if (st > lastScrollTop && st>navbarHeight){
          $("header").css({opacity:'0'}); // header 숨기기
      } else {
          if(st + $(window).height() < $(document).height()) {
              $("header").css({opacity:'1'}); // header 보이기
          }
      }

      lastScrollTop = st;
    }

    



   $(function(){ 
       $(".menu1").click(function(){
         var pt = $(".main3").offset().top;
         $("html").animate({scrollTop:pt}, 300); 
      });
      $(".menu2").click(function(){
        var pt = $(".product").offset().top;
         $("html").animate({scrollTop:pt}, 300); 
     }); 
      $(".menu3").click(function(){ 
       var pt = $(".projects").offset().top; 
       $("html").animate({scrollTop:pt}, 300); 
      });
  });


  $('.instaa').mouseenter(function(){
    $('.instagramIcon').css({opacity:'1'},150)
  })
  $('.instaa').mouseleave(function(){
    $('.instagramIcon').css({opacity:'0'},150)
  })


    $(window).scroll(function(){
    
      sc = $(window).scrollTop()
        console.log("sc",sc);
        $('.scroll_number').text(sc)
        

        if(sc > 200){ 
            $('.scroll').fadeOut(600)
        }
        else if(sc <= 200){
            $('.scroll').fadeIn(600)
        }


        //main1 사라지기
        if(sc > 400){ 
            $('.main1').fadeOut()
            $('.main2').fadeIn()
            $('.bottomHeader').css({bottom:'0'})
        
        }
        else if(sc <= 400){
            $('.main1').fadeIn()
            $('.main2').fadeOut()
            $('.bottomHeader').css({bottom:'-80px'})
        }

        if(sc > 600){
            $('.aboutTON_img1MAN').animate({left:'8%', opacity:'1'},600)
        } 
        
        if(sc > 800){
            $('.aboutTON_text1').animate({marginTop:'19%', opacity:'1'},600)
            $('.chair01IMG').animate({right:'8%', opacity:'1'},500)
        } 

        if(sc > 1600){
            $('.about1').fadeOut()
            $('.about2').fadeIn()
        }
        if(sc <= 1590){
            $('.about1').fadeIn()
            $('.about2').fadeOut()
        }

        if(sc > 1700){
            $('.about2 video').animate({left:'10%', opacity:'1'},600)
            $('.aboutTON_text2').delay(600).animate({right:'10%', opacity:'1'},600)
        } 

        
       
/////////////////////////////////////////
        // main3 //
        if(sc >2600){
            $('.main3').fadeIn(1000)
            
         }
         else if(sc <=2600){
            $('.main3').fadeOut(1000)
            
         }

         if(sc >3000){
            $('.history01BG_video').fadeOut(800)
            
         }
         else if(sc <=3000){
            $('.history01BG_video').fadeIn(800)
            
         }

         if(sc >3500){
            $('.history_mapIMG').animate({top:'60%',opacity:'1'},800)
            $('#Display').animate({top:'63%',opacity:'1'},600)
            setInterval(function(){
              $('#Display').animate({'top':'62.8%'},350)
              $('#Display').animate({'top':'63%'},200)
            },400)
            $('.historyIMG01').delay(300).animate({top:'66%',opacity:'1'},790)
            $('.historyText01').delay(290).animate({top:'68%',opacity:'1'},780)
         }

         if(sc >4100){
            $('.historyIMG02').animate({top:'77%',opacity:'1'},800)
            $('.historyText02').animate({top:'79.5%',opacity:'1'},790)
         }
         
         if(sc >4700){
            $('.historyIMG03').animate({top:'89%',opacity:'1'},800)
            $('.historyText03').animate({top:'91%',opacity:'1'},790)
         }

         if(sc >6600){
          $('#lighting').css({opacity:'0.74'})
          }
         else if(sc <=6600){
           $('#lighting').css({opacity:'0'})
          }
        
         if(sc >6800){
            $('.howMake_mainText').animate({top:'0.8%'},800).fadeIn()
         }
         
         if(sc >15500){
          $('.productStart').css({marginTop:'0',opacity:'1'})
          
        }
      
       


        if(sc >16500){
          $('.product01').css({marginLeft:'0'})
        }
     
        if(sc > 16900){
          $('#text1').textillate({  

            // loop:true,  			
            autoStart: true,  
                        
            // in animation settings
            in: {  	    
            effect: 'fadeInDown',			  
            delay: 25,    
             reverse: true,    
            callback: function () {}
            }
          });
          $('.product02IMG').css({opacity:'0.8'})
        }
        

        if(sc > 17600){
          $('#text2').css({top:'30%',opacity:'1'})
          $('#product02Wrap1').delay(150).css({top:'30%',opacity:'1'})
          $('#product02Wrap2').delay(150).css({top:'53.5%',opacity:'1'})
        }


   //////////////////////////////////
        if(sc>=15988 &&  sc<=18399){$('.product').css({'background-color':'#fff'}) }
        else if(sc>=18400 && sc<=19199){$('.product').css({'background-color':'#b49879'})}
        else if(sc>=19200 && sc<=19899){$('.product').css({'background-color':'#695950'})}
        else if(sc>=19900 && sc<=20599){$('.product').css({'background-color':'#e2987a'})}
        else if(sc>=20600 && sc<=21299){$('.product').css({'background-color':'#e3d59d'})}
        else if(sc>=21300 && sc<=21999){$('.product').css({'background-color':'#aaccf2'})}
        else if(sc>=22000 && sc<=24000){$('.product').css({'background-color':'#ffe3eb'})}
        

        if(sc > 18400){
          $('.product03Chair01').show()
          $('.product03Chair02').hide()
          $('.product03Chair03').hide()
          $('.product03Chair04').hide()
          $('.product03Chair05').hide()
          $('.product03Chair06').hide()
       }
       
         if(sc > 19200){
            $('.product03Chair02').show()
            $('.product03Chair01').hide()
            $('.product03Chair03').hide()
            $('.product03Chair04').hide()
            $('.product03Chair05').hide()
            $('.product03Chair06').hide()
         }
         

         if(sc > 19900){
           $('.product03Chair03').show()
           $('.product03Chair02').hide()
           $('.product03Chair01').hide()
           $('.product03Chair04').hide()
           $('.product03Chair05').hide()
           $('.product03Chair06').hide()
         }
         
         if(sc > 20600){
           $('.product03Chair04').show()
           $('.product03Chair03').hide()
           $('.product03Chair02').hide()
           $('.product03Chair01').hide()
           $('.product03Chair05').hide()
           $('.product03Chair06').hide()
         }
         

         if(sc > 21300){
           $('.product03Chair05').show()
           $('.product03Chair04').hide()
           $('.product03Chair02').hide()
           $('.product03Chair01').hide()
           $('.product03Chair03').hide()
           $('.product03Chair06').hide()
         }
         

         if(sc > 22000){
           $('.product03Chair06').show()
           $('.product03Chair05').hide()
           $('.product03Chair02').hide()
           $('.product03Chair01').hide()
           $('.product03Chair03').hide()
           $('.product03Chair04').hide()
         }
         
         if(sc > 27000){
           $('.projectsVideo').css({'filter':'grayscale(86%)'})
         }
        else if(sc <= 27000){
          $('.projectsVideo').css({'filter':'grayscale(0%)'})
        }
        if(sc > 29600){
          $('.projectsVideo').css({'filter':'grayscale(0%)'})
        }

    });

    
///////////////////////////////////////////
/////////// History ////////////
    

    
/////////////////////////////////////////
    //// how make video play button ////



    TweenMax.set(".play-circle-01", {
        rotation: 90,
        transformOrigin: "center"
      })
      
      TweenMax.set(".play-circle-02", {
        rotation: -90,
        transformOrigin: "center"
      })
      
      TweenMax.set(".play-perspective", {
        xPercent: 6.5,
        scale: .175,
        transformOrigin: "center",
        perspective: 1
      })
      
      TweenMax.set(".play-video", {
        visibility: "hidden",
        opacity: 0,
      })
      
      TweenMax.set(".play-triangle", {
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        rotationY: 10,
        scaleX: 2
      })
      
      const rotateTL = new TimelineMax({ paused: true })
        .to(".play-circle-01", .7, {
          opacity: .1,
          rotation: '+=360',
          strokeDasharray: 456,
          ease: Power1.easeInOut
        }, 0)
        .to(".play-circle-02", .7, {
          opacity: .1,
          rotation: '-=360',
          strokeDasharray: 411,
          ease: Power1.easeInOut
        }, 0)
      
      const openTL = new TimelineMax({ paused: true })
        .to(".play-backdrop", 1, {
          opacity: .95,
          visibility: "visible",
          ease: Power2.easeInOut
        }, 0)
        .to(".play-close", 1, {
          opacity: 1,
          ease: Power2.easeInOut
        }, 0)
        .to(".play-perspective", 1, {
          xPercent: 0,
          scale: 1,
          ease: Power2.easeInOut
        }, 0)
        .to(".play-triangle", 1, {
          scaleX: 1,
          ease: ExpoScaleEase.config(2, 1, Power2.easeInOut)
        }, 0)
        .to(".play-triangle", 1, {
          rotationY: 0,
          ease: ExpoScaleEase.config(10, .01, Power2.easeInOut)
        }, 0)
        .to(".play-video", 1, {
          visibility: "visible",
          opacity: 1
        }, .5)
      
      
      const button = document.querySelector(".play-button")
      const backdrop = document.querySelector(".play-backdrop")
      const close = document.querySelector(".play-close")
      
      button.addEventListener("mouseover", () => rotateTL.play())
      button.addEventListener("mouseleave", () => rotateTL.reverse())
      button.addEventListener("click", () => openTL.play())
      backdrop.addEventListener("click", () => openTL.reverse())
      close.addEventListener("click", e => {
        e.stopPropagation()
        openTL.reverse()
      })
  
  //// how make learn more POPUp ////    
      $('.learnMore_bt1').click(function(){
        $('.howMake_popUp1').show(300)
      })
      $('.learnMore_bt2').click(function(){
        $('.howMake_popUp2').show(300)
      })
      $('.learnMore_bt3').click(function(){
        $('.howMake_popUp3').show(300)
      })
      $('.learnMore_bt4').click(function(){
        $('.howMake_popUp4').show(300)
      })
      $('.learnMore_bt5').click(function(){
        $('.howMake_popUp5').show(300)
      })
      $('.learnMore_bt6').click(function(){
        $('.howMake_popUp6').show(300)
      })
      $('.learnMore_bt7').click(function(){
        $('.howMake_popUp7').show(300)
      })
      $('.learnMore_bt8').click(function(){
        $('.howMake_popUp8').show(300)
      })
      $('.learnMore_bt9').click(function(){
        $('.howMake_popUp9').show(300)
      })

      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp1').hide(300)
      })  
      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp2').hide(300)
      })
      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp3').hide(300)
      })
      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp4').hide(300)
      })
      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp5').hide(300)
      })
      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp6').hide(300)
      })
      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp7').hide(300)
      })
      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp8').hide(300)
      })
      $('.howMake_popUp_closeBT').click(function(){
        $('.howMake_popUp9').hide(300)
      })

////////////////// slide ////////////////////
      let slide_num = 0;

       $('#next_bt').click(function(){
           slide_num = slide_num - 100;
           if(slide_num<-300){slide_num=0}
           $('#slide_box01').stop().animate({'left':slide_num+'%'})
           $('#slide_box02').stop().animate({'left':slide_num+'%'})
       })
       $('#prev_bt').click(function(){
           slide_num = slide_num + 100;
           if(slide_num>0){slide_num=-300}
           $('#slide_box01').stop().animate({'left':slide_num+'%'})
           $('#slide_box02').stop().animate({'left':slide_num+'%'})
       })
////////// designer ////////////
       $('.designerImgBox>ul>li:nth-child(1)').click(function(){
        $('.designers_popUp1').show()
       })







       $('#designer_close_BT').click(function(){
        $('.designers_popUp1').hide()
       })

       $('#designer_next_bt').click(function(){
        slide_num = slide_num - 100;
        if(slide_num<-1900){slide_num=0}
        $('#designer_slideBox').stop().animate({'left':slide_num+'%'})
      })
      $('#designer_prev_bt').click(function(){
        slide_num = slide_num + 100;
        if(slide_num>0){slide_num=-1900}
        $('#designer_slideBox').stop().animate({'left':slide_num+'%'})
      })



  ////////////////////////  content //////////////////////// 
      //   var xOffset = 10;
      //   var yOffset = 30;

      //   $(document).on("mouseover",".images img:nth-child(8)",function(e){ //마우스 오버시

      // $("body").append("<p id='preview'><img src='"+ $(this).attr("src","../images/Chair_811.PNG") +"' width='400px' /></p>"); //보여줄 이미지를 선언						 
      // $("#preview")
      // .css("top",(e.pageY - xOffset) + "px")
      // .css("left",(e.pageX + yOffset) + "px")
      // .fadeIn("fast"); //미리보기 화면 설정 셋팅
      // });

      // $(document).on("mousemove",".images img:nth-child(8)",function(e){ //마우스 이동시
      // $("#preview")
      // .css("top",(e.pageY - xOffset) + "px")
      // .css("left",(e.pageX + yOffset) + "px");
      // });

      // $(document).on("mouseout",".images img:nth-child(8)",function(){ //마우스 아웃시
      // $("#preview").remove();
      // });


////////////////////////////////////////////////////////
  //////////////////////// Footer //////////////////////////// 
      $('.Enter').click(function(){
        
        $(this).animate({top:'32%'},300,function(){
          $(this).animate({top:'31%'},200,function(){
            alert('전송준비중입니다.')
          })  
        })
      })
    

})