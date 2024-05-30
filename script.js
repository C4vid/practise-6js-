// 1

// function func1(n) {

//     return parseInt(n / 10)
    
// }
// console.log(func1(152));

// 2

// function func2(n) {

//     return n % 10 
    
// }
// console.log(func2(32));


// 3

// function func3(m , n){
//     return parseInt (m / n )
    
// }

// console.log(func3(240, 60));

// 4

// function func4(a){
//     let b = a % 10  
//     let c = parseInt(a / 10 ) % 10
//     let d = parseInt(a / 100 ) % 10
//     let e = parseInt(a / 1000 ) % 10
//     return ( b + '' + c + '' + d + '' + e )
// }

// console.log(func4(1234));


// 5
// function func5(a, b){

// if((a % 2 === 0 && b %2 ===0) ||(a % 2 === 1 && b %2 ===1)){
//     return "Yes"
// } else {
//     return "NO"
// }




//     if(a % 2 == b % 2 ){
//         if(a % 2 == 1 && b % 2 == 1){
//             console.log('her ikisi tekdir');
//         }else{
//             console.log('her ikisi cutdur');
//         }
//     }else{
//         if(a % 2 == 0 && b % 2 == 1 ){
//             console.log(a + ' cut' + '' + b + ' tekdir');
//         }else{
//             console.log(b + ' cut' + '' +   a + ' tekdir');
//         }
//     }

// }
// func5(5, 5)


// 6

// function func6(a) {

//     let b = a % 10  
//     let c = parseInt(a / 10 ) % 10
//     let d = parseInt(a / 100 ) % 10
//     let e = parseInt(a / 1000 ) % 10
    
//     if((c + '' +  d) == (d + '' + c)){

//         console.log('polindromdur');

//     }else{
//         console.log('polindrom deyil');
//     }
    
// }

// func6(1331)

// 7
// function func7(a){

//     if(a < 0){
//         console.log('negative');
//     }else{
//         console.log('positive');
//     }

// }
// func7(-5)

// function func8(a){

//     if(a % 2 == 0 ){
//         console.log(a-1);
//     }else{
//         console.log(a-2);
//     }

// }
// func8(7)


// 9

// function func9(a){

// switch (a) {
//     case 1:
//         case 2:
//             case 12:
//                 return 'qis';
//     case 3:     
//         case 4:
//             case 5:
//                 return 'yaz';
//     case 6:     
//         case 7:
//             case 8:
//                 return 'yay';
//     case 9:     
//         case 10:
//             case 11:
//                 return 'payiz';
//   default:
//     return '1 il 12 aydir'
// }
// }
// console.log(func9(12));



