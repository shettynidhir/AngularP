

// //Question-1
// function filter_prime(x)
// {
//     m=x/2
//     flag=true
//     if (x == 0 || x == 1) 
//         flag = false; 
//     for(i = 2; i <= m; i++)  
//     {  
//         if((x % i == 0))  
//         {  
//            flag=false
//            break
//         }  
//     }  

//     if(flag)
//     return x
      
// }

// arr = [23,11,4,78,44]
// var prime = arr.filter(filter_prime)
// console.log(prime)

//------------------------------------------------------
//Question-2
// function toupper(s){
//         return s.toUpperCase()
//     }    
// arr = ["Peterson","John","Reba","Manipal"]
// var str = arr.map(toupper)
// console.log(str);


//---------------------------------------------------------------
//Question3
// function length_str(s)
// {
//     return s.length
   
//     // 
// }
// function max_length(l1,l2)
// {
//     if(l1>l2)
//         max=l1
//     else
//         max=l2
    
//     return max
    
// }
// arr = new Array("Peterson","John","Reba","Manipal","MaryIsland")
// len = arr.map(length_str)
// console.log(len)
// max=0
// maxlen=len.reduce(max_length)
// console.log(maxlen)

//----------------------------------------------------------
//Question4
// function slength(s)
// {
//     return s.length;
// }
// function length_sum(l1,l2)
// {
//     return l1+l2
// }

// arr=new Array("Peterson","John","Reba","Manipal")
// len=arr.map(slength)
// sum=len.reduce(length_sum)
// console.log(sum)

//--------------------------------------------------------------
//Question-5
//  function perc(st1,st2)
// {
//     if(st1.mark>st2.mark)
//         return st1.name
//     else    
//         return st2.name
// }


// stud = [
//     {sno:1,name:"Jose",mark:90},
//     {sno:2,name:"Kiran",mark:97},
//     {sno:3,name:"Mohit",mark:89},
//      {sno:4,name:"Vinay",mark:60},
//     {sno:5,name:"Arjun",mark:55},
// ]

// stud_name=stud.reduce(perc)
//  console.log(stud_name)

//-----------------------------------------------------------------
//Question-6
// function posneg(n)
// {
//     return Math.abs(n)
// }

// arr=[-6,-3,-9,-10]
// res=arr.map(posneg)
// console.log(res)

//----------------------------------------------------------------
//Question-7

// function perc(student)
// {
//     if(student.perc>70)
//         return student.name
// }

// stud = [
//     {sno:1,name:"Jose",perc:70},
//     {sno:2,name:"Kiran",perc:80},
//     {sno:3,name:"Mohit",perc:99},
//      {sno:4,name:"Vinay",perc:65},
//     {sno:5,name:"Arjun",perc:77},
// ]

// res=stud.filter(perc)
// console.log(res)



