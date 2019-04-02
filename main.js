
var input = "";
var xhttp = new XMLHttpRequest();
var yhttp = new XMLHttpRequest();
var zhttp = new XMLHttpRequest();
var firstOfApril = "";
var PicEvo ="";
var obj = "";
var obj2 = "";
var gregoryus = 0;
var x=1;


function waNeGek(){
  switch(x){
    case 0:
  document.getElementById("pokeImg").src = `${obj.sprites.front_default}`;
    x++;
  break;
    case 1:
  document.getElementById("pokeImg").src = `${obj.sprites.back_default}`;
      x=0;
    break;
  }
}

function funcGregoryus(){
  gregoryus ++;
  console.log(gregoryus);
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+gregoryus, true);
  xhttp.send();
  loadDoc(); 
}



function loadDoc() {
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(xhttp.response);
        console.log(obj);
        changeAll();
      }
    };}



    function loadDoc2() {
      yhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          obj2 = JSON.parse(yhttp.response);
          console.log(obj2);
          ifEvo();
        }
      };}
      function loadDoc3() {
        zhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            obj3 = JSON.parse(zhttp.response);
            console.log("greg"+obj3.sprites.front_default);
            document.getElementById("evoImg").src = `${obj3.sprites.front_default}`;
            document.getElementById("evoImg").style.display = "inline";

          }
        };}
  
  

  function lookup(){
    input = document.getElementById("infill").value;
    console.log("https://pokeapi.co/api/v2/pokemon/"+input);
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+input, true);
    xhttp.send();
    loadDoc();
  }
  function lookup2(){
    yhttp.open("GET",`${firstOfApril}`,true);
    yhttp.send();
    loadDoc2();
  }
  function lookup3(){
    console.log("https://pokeapi.co/api/v2/pokemon/"+PicEvo);

    zhttp.open("GET","https://pokeapi.co/api/v2/pokemon/"+PicEvo,true);
    zhttp.send();

    loadDoc3();
  }

  function changeAll(){
    x = 1;
    document.getElementById("idNum").innerHTML = obj.id;
    gregoryus = obj.id;
    document.getElementById("pokeImg").src = `${obj.sprites.front_default}`;
    document.getElementById("move1").innerHTML = obj.moves[0].move.name;
    document.getElementById("move2").innerHTML = obj.moves[1].move.name;
    document.getElementById("move3").innerHTML = obj.moves[2].move.name;
    document.getElementById("move4").innerHTML = obj.moves[3].move.name;
    document.getElementById("infill").value = obj.name;
    firstOfApril = obj.species.url;
    console.log(firstOfApril);
    lookup2();
    //
  }
function ifEvo(){
    if (obj2.evolves_from_species == null){
      console.log("hey!");
      document.getElementById("evoImg").style.display = "none";
    }else{
      console.log(obj2.evolves_from_species.name);
      PicEvo = obj2.evolves_from_species.name;
      lookup3();
    }
}

