main();

function main() {
    
    funcaoUm("batata").then((data) => {
        console.log(data);
    });
}

function funcaoUm(item) {
    const listaCompras = {  
        batata: 13,  
        sabao: 3, 
        abobrinha: 5,  
        toalha: 1, 
        cenoura: 8,  
        balas: 10, 
        xuxu: 0  
    }  
    for (const [key, value] of Object.entries(listaCompras)) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
            
        //         console.log("freeze 3s");
        // freeze(30000);
        // console.log("done");
                // sleep()
                
                if(key == item){
                    console.log(listaCompras[item])
        
                }
        
            resolve();
        }, 3000);
    });
}
}

