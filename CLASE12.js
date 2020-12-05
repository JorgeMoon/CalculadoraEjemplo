
/* VARIABLES */
let num = [];
let btn;
let ID ="";
let ID2 =[];
let n ="";
let n1 ="";

$("#resultado").html(0);

//objeto de claves
let btnKey = {
    "0":48,
    "1":49,
    "2":50,
    "3":51,
    "4":52,
    "5":53,
    "6":54,
    "7":55,
    "8":56,
    "9":57,
    "+":43,
    "-":45,
    "X":42,
    "/":47,
    "=":13,
    "C":46
}
//objeto de btn a numero
let btnNum = {
    cero:0,
    uno:1,
    dos:2,
    tres:3,
    cuatro:4,
    cinco:5,
    seis:6,
    siete:7,
    ocho:8,
    nueve:9,
    suma:"+",
    resta:"-",
    producto:"*",
    division:"/",
    resultado:"=",
    borrar:"C"
}
//pescar teclado
$(document).on('keypress',function(e) {
   // console.log(e.keyCode)
    comprobarTeclado(e);
});
/* Pescar el click */
$("button").click(function(){
   let x = $(this).attr("id")
   // console.log("aprete un boton --> "+ x)
   comprobarClick(x)
}); 

//comprobar
function comprobarClick(x){
    for (const key in btnKey) {
        if (btnKey.hasOwnProperty(key)) {
             if(btnKey[key] == x){
                 //console.log("comprobarClick->>"+x+"key"+key);           
               saveImput(key);
               mostrar(x);
               animacionBtn(x);
            } 
        }
    } 
};
function comprobarTeclado(e){
    
    for (const key in btnKey) {
        if (btnKey.hasOwnProperty(key)) {
             if(btnKey[key] == e.keyCode){
                btn = e.keyCode;
                ID = btn;
                //console.log("keypress --> btnKey[key] = "+ btn + "key = "+key)
                saveImput(key);
                mostrar(e.keyCode);
                 //console.log(ID);
                 animacionBtn(ID);  
            } 
        }
    } 
};
function mostrar(x) {
    
   for (const keyEvento in btnNum) {
       if (btnNum.hasOwnProperty(keyEvento)) {
           const element = btnNum[keyEvento];
           if(element == keyEvento){
          // console.log(keyEvento)
           }
       }
   }
   updateVisor(x); 
}; 
function saveImput(key){
    num.push(key);
};
function animacionBtn(ID){    
    aux="";
    ID2.push(ID);
    //console.log("ID -->"+ID)
    for (const k in ID2) {
        
        if (ID2.hasOwnProperty(k)) {
            const element = ID2[k];
           // console.log("recorriendo --> "+ element+"k="+k+" ID="+ID)
            $("#"+element).removeClass("colorBoton")
            aux=element;
        } 
    }
    $("#"+aux).addClass("colorBoton");     
};

/* FUNCION VISOR */
function updateVisor(x){
    $("#resultado").html(0);          //Limpio
    visor = saveImputNumber(x);
    $("#resultado").html(visor);
};

/* FUNCIONES DE CALCULO */
function saveImputNumber(x){

   n = num.join("");

        /* Control de "=" y calcular */
        if(x=="13"){
            num.pop(); //elimino ultimo elemento "="
            n1 = num.join("");
                //evaluo cadena
                n1 = eval(n1);
                $("#preview").html(n1);       
        }

        /* FUNCION BORRAR "C" */
        if(x=="46"){        //suprimir o backspace || x=="8" 99
            n =0;
            num=[];
            $("#preview").html("");     
        }
    return n;
};