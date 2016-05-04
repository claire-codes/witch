$(function() {
    'use strict';

    var $filterBox = document.getElementById('filter-box');
    $filterBox.value = 'foo';
    var filterTerm;
    $filterBox.addEventListener("keyup", function() {
        if ($filterBox.value.length > 2) {
            var $listToFilter = document.querySelectorAll("#repo-list li .tech");
            filterTerm = $filterBox.value;
            console.log(filterTerm);
            for (var i = 0; i < $listToFilter.length; i++) {
                if (($listToFilter[i].innerHTML).match(filterTerm)) {
                    console.log("match");
                }
            }
        }
    })
});