let num = Number(window.prompt("Enter the number",""));
if(!NaN){
    //Top View
      let i=1; 
       while (i<=num)
       { 
        let s="";
        // 5 - 1 => 4, 3, 2, 1, 0
        for(let k = num - i ; k>=1; k--)
            s += " ";
          for(let j=1;j <=i;)
           {
            s=s+"* "
            j++; 
           }                  
          console.log(s);
         i++;
        } 
    // Down View
     let x=num-1;
     while(x>=1)
      {  
        let s=" ";
        // 5 - 1 => 4, 3, 2, 1, 0
        for(let k = num - x - 1 ; k>=1; k--)
            s += " ";
        for(let j=x;j >=1;)
        {
        s=s+"* ";
        j--; 
        }                 
       console.log(s); 
     x--;
    }

}
else
console.log("Enter valid number");
