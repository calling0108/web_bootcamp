'use strict';

(function () {
    var let = 10;

    function foo() {
        let = 20;
        console.log(let);
    }
    
    foo();
}())