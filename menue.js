$(document).ready(function() {
    var $filterBtns = $(".filter-btn");
    var $menuItems = $(".menu-item");
    var $viewMoreBtn = $("#viewMoreBtn");
    var currentCategory = "all";


    function getInitialCount() {
        var width = $(window).width();
        if (width <= 576) return 1;
        if (width <= 992) return 2;
        return 3;
    }


    function showItems(category) {
        var initialCount = getInitialCount();
        var countAll = {burger:0, pizza:0, pasta:0};

        $menuItems.removeClass("show");

        if(category === "all") {
            $menuItems.each(function() {
                var $item = $(this);

                if($item.hasClass("burger")) {
                    countAll.burger++;
                    if(countAll.burger <= initialCount) $item.addClass("show");
                }

                if($item.hasClass("pizza")) {
                    countAll.pizza++;
                    if(countAll.pizza <= initialCount) $item.addClass("show");
                }

                if($item.hasClass("pasta")) {
                    countAll.pasta++;
                    if(countAll.pasta <= initialCount) $item.addClass("show");
                }
            });

            if(countAll.burger > initialCount || countAll.pizza > initialCount || countAll.pasta > initialCount) {
                $viewMoreBtn.show();
            } else {
                $viewMoreBtn.hide();
            }

        } else {
            $menuItems.filter("." + category).addClass("show");
            $viewMoreBtn.hide();
        }
    }


    $filterBtns.click(function() {
        $filterBtns.removeClass("active");
        $(this).addClass("active");
        currentCategory = $(this).data("category");
        showItems(currentCategory);
    });

  
$viewMoreBtn.click(function() {
    $menuItems.addClass("show"); 
    $viewMoreBtn.hide();
});

    
    showItems("all");
});
