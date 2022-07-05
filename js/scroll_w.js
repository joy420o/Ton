 window.onload = function () {
            $("#wrap>div").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveLeft = $(this).next().offset().left;
							count = $(this).index()+1; // 1 2 3		
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                            moveLeft = $(this).prev().offset().left;
							count = $(this).index()-1; // 0 1 2	
                        }
                    }
                    // 화면 이동 0.8초(800)
					
                    $("html,body").stop().animate({scrollLeft:moveLeft},200);
                });
            });
        }