var app = app || {};

(function() {
    "use strict";

    app.WhichFilter = {
        init: function(inputSelector, listItemsSelector) {
            var $filterBox = document.querySelector(inputSelector);
            var filterTerm,
                i;
            $filterBox.addEventListener("keyup", function() {
                var $listItems = document.querySelectorAll(listItemsSelector);
                if ($filterBox.value.length > 2) {
                    filterTerm = $filterBox.value;
                    for (i = 0; i < $listItems.length; i++) {
                        if (($listItems[i].innerHTML).match(filterTerm)) {
                            $listItems[i].style.display = "list-item";
                        } else {
                            $listItems[i].style.display = "none";
                        }
                    }
                } else {
                    for (i = 0; i < $listItems.length; i++) {
                        $listItems[i].style.display = "list-item";
                    }
                }
            });
        }
    };
})();