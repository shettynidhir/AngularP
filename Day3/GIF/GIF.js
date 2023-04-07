function timer()
{
    document.getElementById("gif").style.display="none";
    i=5;
    int_time=setInterval(function()
    {
        
    
        document.getElementById("time").innerHTML=i;
        i=i-1;
          
        if(i<0)
        {
   
            document.getElementById("clock").style.display="none";
            document.getElementById("gif").style.display="block";
            clearInterval(int_time);
        }
        
    },1000)


}   