var app = app || {};

(function($) {
    "use strict";

    app.WhichFilter = {
        init: function() {
            var $filterBox = document.getElementById("filter-box");
            var filterTerm,
                i;
            $filterBox.addEventListener("keyup", function() {
                var $listItems = document.querySelectorAll("#repo-list li");
                var $listToFilter = document.querySelectorAll("#repo-list li .tech");
                if ($filterBox.value.length > 2) {
                    filterTerm = $filterBox.value;
                    for (i = 0; i < $listToFilter.length; i++) {
                        if (($listToFilter[i].innerHTML).match(filterTerm)) {
                            $listItems[i].style.display = "block";
                        } else {
                            $listItems[i].style.display = "none";
                        }
                    }
                } else {
                    for (i = 0; i < $listToFilter.length; i++) {
                        $listItems[i].style.display = "block";
                    }
                }
            });
        }
    };
})(jQuery);