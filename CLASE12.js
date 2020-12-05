
/* VARIABLES */
let num = [];
let btn;
let ID ="";
let ID2 =[];
let n ="";
let n1 ="";

$("#resultado").html(0); // Para siempre tener el visor con un dato

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
                console.log("comprobarClick->>"+x+"key"+key);           
               saveImput(key);
               updateVisor(x);
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
                console.log("keypress --> btnKey[key] = "+ btn + "key = "+key)
                saveImput(key);
                updateVisor(e.keyCode); 
                 //console.log(ID);
                 animacionBtn(ID);  
            } 
        }
    } 
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
    /* cuando x es un producto */
   // if(x=="X"){x="*"}
  
    n = num.join("");

        /* Control de "=" y calcular */
        if(x=="13"){

            num.pop(); //elimino ultimo elemento "="
            n1 = num.join("");
            n1 = n1.replaceAll("X", '*')//reeplazar X --> * para poder evaluar la cadena 
                //evaluo cadena
            n1 = eval(n1);
            $("#preview").html(n1);       
        }

        borrar(x);

    return n;
};

function borrar(x){
        /* FUNCION BORRAR "C" */
        if(x=="46"){        //suprimir o backspace || x=="8" 99
            num.pop(); //elimino ultimo elemento
            n = num.join("");
            $("#preview").html("");     
        }
}