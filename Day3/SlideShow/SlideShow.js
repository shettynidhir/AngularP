function dispimg()
{
    source=["one.jpg","two.jpg","three.jpg","four.jpg"];
    let slide=document.getElementById("slide");

    i=0;
    setInterval(function()
    {
        slide.src=source[i];
        i++;
        if(i==3)
            i=0;
    },2000)
}