let square = +prompt("Kvadrat tomoni uzunligini kiriting")
while(isNaN(square) || square==0){
    square = +prompt("Xato! Iltimos, boshqatdan urinib, son kiriting")
}
if (square%2==0) {
    square+=1
}

let sum = ""
for (let i = 0; i < square; i++) {
    for (let j = 0; j < square; j++) {
       if (i==j || i==0 || j==0 || i==square-1 || j==square-1 || i+j==square-1) {
        sum+="🔵"
        
       } else{
        sum+="🟡"
       }
       }
       console.log(sum);
    sum="" 
    }
    
    
    
