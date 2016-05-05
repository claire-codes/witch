$(function() {
    'use strict';

    var $filterBox = document.getElementById('filter-box');
    var filterTerm;
    var $listItems = document.querySelectorAll("#repo-list li");
    var $listToFilter = document.querySelectorAll("#repo-list li .tech");
    $filterBox.addEventListener("keyup", function() {
        if ($filterBox.value.length > 2) {
            filterTerm = $filterBox.value;
            console.log(filterTerm);
            for (var i = 0; i < $listToFilter.length; i++) {
                if (($listToFilter[i].innerHTML).match(filterTerm)) {
                    console.log("match");
                    $listItems[i].style.display = "block";
                } else {
                    $listItems[i].style.display = "none";
                }
            }
        } else {
            for (var i = 0; i < $listToFilter.length; i++) {
                $listItems[i].style.display = "block";
            }
        }
    })
});