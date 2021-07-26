//addition function
function add(a,b)
{
    return(a+b);
}

//Subtract function

function sub(a ,b)
{
    return(a-b);
}

//Multiplication function

function mul(a, b)
{
    return(a*b);
}

//division function

function div(a,b)
{
    if(b <= 0)
     {
         return('Error');
     }
     else
     {
         return(a/b);
     }
}


console.log(add(4,5));
console.log(sub(8,4));
console.log(mul(2,4));
console.log(div(2,0));

let output = document.getElementById('output');
output.innerHTML = 0;