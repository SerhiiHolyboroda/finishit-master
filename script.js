let f1 =  document.forms['f1'];
let hide = f1.elements['hide'];
let hide1 = f1.elements['hide1'];
let edit = f1.elements['edit'];
let style = f1.elements['style'];
let but = f1.elements['but'];
let add = f1.elements['add'];
let a = f1.hide.value ;
let hidediv = document.querySelector('.hidediv')
//hidediv.style.display = 'none'
let div1 = document.querySelector('#div1');
console.log(div1.innerHTML);
// hide.value = div1.innerTEXT;

// a.innerHTML += '<p>Lorem ipsum dolor sit amet</p>';
// console.log(a);

hide.style.display = 'none';
but.style.display = 'none';
add.style.display = 'none';
hide1.style.display = 'none';
edit.addEventListener('click', function(){
    hide.style.display = 'block';
    hide1.style.display = 'none';
    but.style.display = 'block';
    add.style.display = 'block';
    hide.value = div1.innerHTML;
    hidediv.style.display = 'none' ;

})
hidediv.style.display = 'none' ;
style.addEventListener('click', function(){
//    hide1.style.display = 'block';
    hide.style.display = 'none';
    but.style.display = 'none';
    hidediv.style.display = 'block' ;
})


but.addEventListener('click', function(){

    div1.innerHTML  = hide.value ;

})
//hidediv.style.display = 'none' ;
//style.addEventListener('click', function(){
//
//    hidediv.style.display = 'block' ;
//
//})
 
//if (document.querySelector('.n12px').checked) {
// console.log('gfdg')
//}
// 
//document.querySelector('.n12px').onclick  
//document.querySelector('.n12px').addEventListener('click', function(){
//    alert('fdsfsdf')
//    div1.style.fontWeight = 12; 
//    div1.innerHTML  = hide.value ;
//})
     
 

//for (var i = 0, length = radios.length; i < length; i++) {
//    if (radios[i].checked) {
//        // do whatever you want with the checked radio
//        alert(radios[i].value);
//
//        // only one radio can be logically checked, don't check the rest
//        break;
//    }
//}
 
//document.getElementsByName('radioButton').onclick =  function displayRadioValue() { 
//var ele = document.getElementsByName('radioButton'); 
//              
//            for(i = 0; i < ele.length; i++) { 
//                if(ele[i].checked) 
//               alert('fdsfs')
//            } 
//            } 
var e = document.getElementById("select");
var d = document.getElementsByName("radioButton");
 console.log(e.value)
f1.onchange = f1.oninput = calcTotal;
 
 function calcTotal() {

div1.style.fontFamily = e.value;
div1.style.fontWeight = d.value;
     
 }



 document.getElementById("hidecolor").hidden = true;
 document.getElementById("hidebackground").hidden = true;
getDiv = x => document.querySelector(x);
//getDiv('#color').onclick = function(event){
//document.getElementById("div2").hidden = true;
//getDiv("#div1").hidden = false;
//}
 

getDiv('#divs1').onclick = function(event){
    div1.style.color = '#03fcd3';
//document.body.style.backgroundColor = '#03fcd3';
}
getDiv('#divs2').onclick = function(event){
//document.body.style.backgroundColor = '#d93807';
    div1.style.color = '#d93807'
}
getDiv('#divs3').onclick = function(event){
div1.style.color =  '#07d989';
}
getDiv('#divs4').onclick = function(event){
div1.style.color =  '#54d907';
}
getDiv('#divs5').onclick = function(event){
div1.style.color =  ' #435259';
}
getDiv('#divs6').onclick = function(event){
div1.style.color =  '#ff1e00';
}

getDiv('#divs7').onclick = function(event){
div1.style.color =  '#0026ff';
}
getDiv('#divs8').onclick = function(event){
div1.style.color = '#dd00ff';
}
getDiv('#divs9').onclick = function(event){
div1.style.color = '#540d0d';
}


let buttcol = document.querySelector('.buttcol')
let butfcol = document.querySelector('.butfcol')

buttcol.onclick = function(event){
//document.getElementById("div2").hidden = true;
getDiv("#hidecolor").hidden = false;
getDiv("#hidebackground").hidden = true;
}
butfcol.onclick = function(event){
//document.getElementById("div2").hidden = true;
getDiv("#hidebackground").hidden = false;
getDiv("#hidecolor").hidden = true;

}

getDiv('#divs10').onclick = function(event){
div1.style.backgroundColor = '#03fcd3';
//document.body.style.backgroundColor = '#03fcd3';
}
getDiv('#divs11').onclick = function(event){
//document.body.style.backgroundColor = '#d93807';
div1.style.backgroundColor = '#d93807'
}
getDiv('#divs12').onclick = function(event){
div1.style.backgroundColor =  '#07d989';
}
getDiv('#divs13').onclick = function(event){
div1.style.backgroundColor =  '#54d907';
}
getDiv('#divs14').onclick = function(event){
div1.style.backgroundColor =  ' #435259';
}
getDiv('#divs15').onclick = function(event){
div1.style.backgroundColor =  '#ff1e00';
}

getDiv('#divs16').onclick = function(event){
div1.style.backgroundColor =  '#0026ff';
}
getDiv('#divs17').onclick = function(event){
div1.style.backgroundColor = '#dd00ff';
}
getDiv('#divs18').onclick = function(event){
div1.style.backgroundColor = '#540d0d';
}


//getDiv('#color').onclick = function(event){
//document.getElementById("div2").hidden = true;
//getDiv("#div1").hidden = false;
//}


let bold = document.querySelector('#customCheck1')
let cursive = document.querySelector('#customCheck2')
 
bold.onchange   = callme;
cursive.onchange  = callme;
 
  function callme() {
      if(bold.checked == true && cursive.checked == true ){div1.style.fontWeight =  "bold" ;   div1.style.fontFamily  = "cursive" ; }
 if(bold.checked == true )  div1.style.fontWeight =  "bold" ;
 if(bold.checked == false )  div1.style.fontWeight =  "" ;
 if(cursive.checked == true )  div1.style.fontFamily = "cursive"  ;
 if(cursive.checked == false )  div1.style.fontFamily = ""  ;
 }

let chose1 = document.querySelector('.chose1')
chose1.style.display = 'none';
let move = document.querySelector('.move')
 add.addEventListener('click', function(){
     chose1.style.display = 'block';
     move.style.display = 'none';
      
 })
let tablecreator = document.querySelector('.tablecreator')
tablecreator.style.display = 'none';
let listreactor = document.querySelector('.listreactor')
listreactor.style.display = 'none';

let tables = document.querySelector('.tabless')
let lists = document.querySelector('.listss')
 
tables.onchange   = callmeplease1;
lists.onchange  = callmeplease2;
 
  function callmeplease1() {
      
 if(tables.checked == true )  tablecreator.style.display = 'block';
  listreactor.style.display = 'none';
 
  }
function callmeplease2() {
      
  
 if(lists.checked == true )  listreactor.style.display = 'block';
 tablecreator.style.display = 'none';
  }
let ctable = document.querySelector('#ctable')
let clist = document.querySelector('#clist')

ctable.addEventListener('click', function(){
let countTR = document.querySelector('.countTR')   
let countTD = document.querySelector('.countTD')   
let widthTD = document.querySelector('.widthTD')   
let heightTD = document.querySelector('.heightTD')   
let typeB = document.querySelector('.typeB') 
var selector = document.getElementById('borders');
    var value = selector[selector.selectedIndex].value;
    var selector1 = document.getElementById('bcolors');
    var value1 = selector1[selector1.selectedIndex].value;
    console.log(countTR.value , countTD.value , widthTD.value ,  heightTD.value,typeB.value, selector.value , selector1.value, );
//    let newTable = document.createElement("table");
//    for (i = 1; i < countTR; i++) {
 
   
 
//}

//    for(let i = 0 ; i < countTR ; i++){
////        let newTr = document.createElement("tr");
////        newTable.appendChild(newTr);
//
//    }
//    var tbl = document.createElement('table');
//
//// tbody
//var tr = tbl.insertRow();
//var tc = tr.insertCell();
//var tt = document.createTextNode("tbody");
//tc.appendChild(tt);
//
//
//// thead
// 
//    
//    var th = tbl.createTHead();   
//var thr = th.insertRow();
//  
//  
//    
 
  function createTable(parent , cols, rows){
      let table =  document.createElement('table')
       table.style.border = typeB.value  + 'px';
       
      table.style.borderStyle  = value ;
      table.style.borderColor  = value1 ;
        
      for( let i = 0 ; i < rows ; i++){
          let tr = document.createElement('tr');
          tr.style.borderStyle  = value ;
      tr.style.borderColor  = value1 ;
          for(let j = 0; j< cols ; j++){
              let td = document.createElement('td')
              td.style.borderStyle  = value ;
      td.style.borderColor  = value1 ;
              td.style.height =  heightTD.value + 'px';
              td.style.width = widthTD.value + 'px';
              tr.appendChild(td)
          }
          table.appendChild(tr)
      }
      console.log(table)
       parent.appendChild(table)
  }
  createTable( div1 ,  countTR.value, countTD.value )
 


// 
//document.getElementById('div1').appendChild(tbl);
//    newTable.innerHTML = 
//     div1.appendChild(newTable);
      
    chose1.style.display = 'none';
    tablecreator.style.display = 'none';
    move.style.display = 'block';
})
clist.addEventListener('click', function(){
    move.style.display = 'none';
}) 
let save = document.querySelector('#save')
save.addEventListener('click', function(){
// table.style.display = 'block'
     
})

 
clist.addEventListener('click', function(){
    let co = document.querySelector('.countLi')
     
    let ul =  document.createElement('ul')
    let li =  document.createElement('li')
      
  li.innerHTML +=  "li";
 
  ul.appendChild(li);
 div1.appendChild(ul)
 chose1.style.display = 'none';
    tablecreator.style.display = 'none';
    listreactor.style.display = 'none';
    move.style.display = 'block';

    
 
})

