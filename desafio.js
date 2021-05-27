const listaCompras = {  
    batata: 13,  
    sabao: 3, 
    abobrinha: 5,  
    toalha: 1, 
    cenoura: 8,  
    balas: 10, 
    xuxu: 0  
}  
// const sleep = (ms) => { 
//     return setTimeout(()=> {}, ms) 
// } 
// const timer = ms => new Promise( res => setTimeout(res, ms));

// const sleep = (ms)=>{
//     timer(13000).then(_=>console.log("done"));

// }


function freeze(time) {
    const stop = new Date().getTime() + time;
    while(new Date().getTime() < stop);       
}
function sleep(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        
    }, 3000);
});}

// const pegar = (item) => Sleep(3000) 
// Return  
const looping = async _ => { 
    console.log('Começou') 
    // Console.log(item, retornoFuncaoPegar) 
    
    for (const [key, value] of Object.entries(listaCompras)) {
        console.log(key, value);
    }
    // console.log(listaCompras)
    console.log('Terminou') 

} 
//1- Crie uma função que receba o item, corrija e utilize a 
//função sleep para esperar 3 segundos em cada item e retorne a quantidade do item 
const ex1=(item)=>{
    
    for (const [key, value] of Object.entries(listaCompras)) {
//         console.log("freeze 3s");
// freeze(30000);
// console.log("done");
        sleep()
    
        
        if(key == item){
            console.log(listaCompras[item])

        }

    }
}
ex1("batata")
ex1("sabao")
//2- Completar a função looping para printar na tela conforme a seguir
looping()