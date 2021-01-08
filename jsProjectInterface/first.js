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
    window.location = "Star-Wars/star-Wars.html";
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
});

(function(){
    var Game=
    {
        playerName:"Islam",
        playerScore:451,
        gameName:"Star Wars",
        time:Date.now().toString()

    }
    var Game1=
    {
        playerName:"Islam",
        playerScore:451,
        gameName:"Sudden Game",
        time:Date.now().toString()

    }
    var Game2=
    {
        playerName:"Islam",
        playerScore:451,
        gameName:"Puzzle Photo",
        time:Date.now().toString()

    }
    var Game3=
    {
        playerName:"Islam",
        playerScore:451,
        gameName:"Space Race",
        time:Date.now().toString()

    }
    var Game4=
    {
        playerName:"Islam",
        playerScore:451,
        gameName:"Star Wars",
        time:Date.now().toString()

    }
    var Game5=
    {
        playerName:"Islam",
        playerScore:451,
        gameName:"Star Wars",
        time:Date.now().toString()

    }
    var gameArr = [Game, Game1,Game2,Game3,Game4,Game5];
    localStorage.setItem("ourGame",JSON.stringify(gameArr))
    
    })();


//localStorage.setItem("ourGame",JSON.stringify(Game))

var CommunityData= JSON.parse(localStorage.getItem('ourGame'));
var communityHeight = 800;
var communityFooter = 1050;
function DisplayCommunityData(Gamename){
    for( var i = 0 ; i<CommunityData.length; i++){
        if(CommunityData[i]['gameName'] == Gamename){
            var data = $("<div class='Post'><h3>"+ CommunityData[i]['gameName']
                         +"</h3><h4 id='playerName'>"+CommunityData[i]['playerName']
                         +"</h4><h4 id='playerScore'>Score : "+CommunityData[i]['playerScore']
                         +"</h4><p>"+CommunityData[i]['time']+"</p></div>");

            $(".layerCommunityContent").append(data);
            if(i>5){
                communityHeight+=100; communityFooter+=100;
                $(".layerCommunityContent").css({
                    height: communityHeight
                })
                $(".Footer").css({
                    top: communityFooter
                })
             }
        }
    }
}
$(".gamesNavbar ul li a").click(function()
{
    $(".layerCommunityContent").html(" ");
    DisplayCommunityData($(this).text());
    return false;
})




