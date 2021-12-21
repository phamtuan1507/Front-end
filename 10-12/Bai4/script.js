// var a = 1; 
// let b = "2"; 

// var c = a + b;
// console.log(c);

// for(var i = 0;i < 5;i++) {
//     if(i == 1) {
//         console.log(i);
//     }
// }

// alert("hello"); // thông báo 

// var arr = ['C#','Java','PHP'];
// for(var i = 0; i < arr.length;i++)
// {
//     console.log(arr[i])
// }

// var a = document.getElementById("text-home").text;
// console.log(a);
// var b = document.getElementsByClassName("menu-item");
// // console.log(b);
// for(var i =0;i <b.length;i++){
//     console.log(b[i].text);
// }

// function onClicktexthome() {
//     console.log("onClickTextHome");
// }

function onClickResponse() {
    var menu_item = document.getElementsByClassName("menu-item");
    for(var i = 0;i < menu_item.length; i++)
    {
        // console.log(i);
        menu_item[i].className = menu_item[i].className + " text-red";
    }
}