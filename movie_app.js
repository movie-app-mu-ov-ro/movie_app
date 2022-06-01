// Loading screen
fetch('https://tinted-good-pufferfish.glitch.me/movies')
    .then(function (res) {
        console.log(res)
        return res.json();
    }).then(function (data){
    console.log(data)
    $("#loading-image").addClass('hide')

    console.log(data[23].title)

    // const info = data.map(function (x){
    //     $(".card-header").append(data[23].title)
    // })

    data.forEach(function (movie){
            $(".card-header").append(data[23].title)
    })
})



