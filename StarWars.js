$(document).ready(function(){
    $(".generate").on("click",  function(){
        let randomNumber = Math.ceil(Math.random()*88)
        var inpu = $(".number-selector")
        inpu.val(randomNumber)
        $.get(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json` , function(data){
        $(".name-box").text(data["name"] || "Info not available")
        $(".Gender").text(data["gender"] || "Info not available")
        $(".Height").text(data["height"] || "Info not available")
        $(".Mass").text(data["mass"] || "Info not available")
        $(".Homeworld").text(data["homeworld"] || "Info not available")
        $(".Born").text(data["born"] || "Info not available")
        $(".BornLocation").text(data["bornLocation"] || "Info not available")
        $(".Died").text(data["died"] || "Info not available")
        $(".DiedLocation").text(data["diedLocation"] || "Info not available")
        $(".Species").text(data["species"] || "Info not available")
        $(".Masters").text(data["masters(index)"] || "Info not available")
        $(".image").attr("src", data["image"] || "no-image-available.webp")
        })
    })

    $(".search").on("click", function(){
        var inpu = $(".number-selector").val()
        $.get(`https://akabab.github.io/starwars-api/api/id/${inpu}.json` , function(data){      
              $(".name-box").text(data["name"] || "Info not available")
              $(".Gender").text(data["gender"] || "Info not available")
              $(".Height").text(data["height"] || "Info not available")
              $(".Mass").text(data["mass"] || "Info not available")
              $(".Homeworld").text(data["homeworld"] || "Info not available")
              $(".Born").text(data["born"] || "Info not available")
              $(".BornLocation").text(data["bornLocation"] || "Info not available")
              $(".Died").text(data["died"] || "Info not available")
              $(".DiedLocation").text(data["diedLocation"] || "Info not available")
              $(".Species").text(data["species"] || "Info not available")
              $(".Masters").text(data["masters[index]"] || "Info not available")
              $(".image").attr("src", data["image"])
              if(inpu >= 89){
                alert('Not available')
              }
        })
    })
   /* $(".inp").on("keydown",function(e){
        if(e.keycode === 38){
            e.preventDefault();
            var currentValue = parseInt($(this).val()(currentValue)+1);
        }
        else if(e.keycode === 40){
            e.preventDefault();
            var currentValue = parseInt($(this).val()(currentValue-1));
        }
    })*/
})