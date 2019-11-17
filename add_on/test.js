script = document.createElement('script');
var code = '(' + function() {  

    console.log("already add test.js");
    function addOnTest( x, y){
        return x * y;
    }


} + ')();';



script.textContent = code;
document.documentElement.appendChild(script);