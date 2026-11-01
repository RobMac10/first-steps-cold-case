(function(){
 var b=document.getElementById('pr');
 if(b)b.addEventListener('click',function(){window.print();});
 if(/[?&]print=1/.test(location.search))setTimeout(function(){window.print();},400);
})();
