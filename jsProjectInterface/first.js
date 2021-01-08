///<reference path="./typings/globals/jquery/index.d.ts" />
$(".Navbar ul li a").mouseenter(function()
{
    $(this).css("color","#BF900F");
})
$(".Navbar ul li a").mouseleave(function()
{
    $(this).css("color","antiquewhite");
})
$(".Navbar h1,img").click(function()
{
    window.location="index.html";
})
$(".FirstCard .startGame").click(function()
{

})
$(".SecondCard .startGame").click(function()
{
    
})
$(".ThirdCard .startGame").click(function()
{
    
})
$(".FouthCard .startGame").click(function()
{
    
})

// First Card Animation 
$(".FirstCard").mouseenter(function()
{
    $(this).animate({"top":"60px"},400,function()
    {
        $(".FirstCardInfo").animate({"top":"300px"},700);
        
    } )
    
})
$(".FirstCard").mouseleave(function()
{
    $(this).animate({"top":"80px"},300,function()
    {
        $(".FirstCardInfo").animate({"top":"600px"},300);
    })
})


// Second card animation 

$(".SecondCard").mouseenter(function()
{
    $(this).animate({"top":"60px"},400,function()
    {
        $(".SecondCardInfo").animate({"top":"300px"},700);
        
    } )
    
})
$(".SecondCard").mouseleave(function()
{
    $(this).animate({"top":"80px"},300,function()
    {
        $(".SecondCardInfo").animate({"top":"600px"},300);
    })
})


// Third Card Animation 
$(".ThirdCard").mouseenter(function()
{
    $(this).animate({"top":"710px"},400,function()
    {
        $(".ThirdCardInfo").animate({"top":"300px"},700);
        
    } )
    
})
$(".ThirdCard").mouseleave(function()
{
    $(this).animate({"top":"750px"},300,function()
    {
        $(".ThirdCardInfo").animate({"top":"600px"},300);
    })
})


// Fourth Card Animation

$(".FouthCard").mouseenter(function()
{
    $(this).animate({"top":"710px"},400,function()
    {
        $(".FourthCardInfo").animate({"top":"300px"},700);
        
    } )
    
})
$(".FouthCard").mouseleave(function()
{
    $(this).animate({"top":"750px"},300,function()
    {
        $(".FourthCardInfo").animate({"top":"600px"},300);
    })
})

var Game=
{
    playerName:"Islam",
    playerScore:451,
    gameName:"Sudden",
    time:Date.now().toString()

}
localStorage.setItem("ourGame",JSON.stringify(Game))

JSON.parse(localStorage.getItem('ourGame'));






