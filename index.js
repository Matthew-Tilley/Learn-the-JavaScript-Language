



var calc = 
{
    status: "Awesome",
    plus: function(a,b)
    {
        return  (console.log(this),
                console.log(a+b),
                console.log(arguments),
                console.log(this.status),
                console.log("KJSADKJHSDA"))
    }

}


calc.plus(2,3);





// function plus(a,b)
// {
//     return  console.log(a+b),
//             console.log(this),
//             console.log(arguments)
// }


// plus(99, 1);




// var plus = function(a,b)
// {
//     return console.log(a+b);
// }(9,391);





// function plus(a,b)
// {
//     var sum = a + b;
//     return sum;
// }


