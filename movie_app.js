// Loading screen
const url = 'https://tinted-good-pufferfish.glitch.me/movies';
fetch(url)
    .then(function (res) {
        console.log(res)
        return res.json();
    }).then(function (data){
    console.log(data)
    $("#loading-image").addClass('hide')

    console.log(data[0].title)

    // const info = data.map(function (x){
    //     $(".card-header").append(data[23].title)
    // })

//     data.forEach(function (movie, index){
//         if (index < 1) {
//             $(".card-header").append(data[0].title)
//             $(".card-body").append(data[0].rating)
//             $(".card-footer").append(data[0].id)
//         }
//     })
// })




    const htmlText = data.map(function(o){

        return`
         <div class="card">
        <div class="card-header">Title: ${o.title}</div>
        <div class="card-body"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_s11214cj0Z8H_o9SkPsIArI8tsF4SIQZg&usqp=CAU"></div>
        <div class="card-footer">Rating: ${o.rating}</div>
        <div class="card-footer">ID: ${o.id}</div>
        <button type="button" class="btn btn-primary" onclick="myFunction"><span class="bi bi-trash"></span></button></div>
<br>

`;
    });

    $('#movies').append(htmlText)

    function deleteMovie(id) {
        const removeMovie = fetch(`${url}/${id}`, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch(error => console.error(error))
    }


//         `<div class="card">
//     <div class="container">
//         <div class="card-header">Title:${o.title}</div>
//         <div class="card-body">Rating:${o.rating}</div>
//         <div class="card-footer">ID:${o.id}</div>
//     </div>
// </div>`

    // return `
    //   <div class="div-conatiner">
    //   <p class="p-name"> Title: ${o.title}</p>
    //   <p class="p-loc"> Rating: ${o.rating}</p>
    //   <p class="p-desc"> ID: ${o.id}</p><br>
    //   </div>
    //   `;



    let title = document.getElementById('addMovie')
    let rating = document.getElementById('addRating')
    const btn1 = document.getElementById("btn1")

    function createMovie() {

        let movie = {
            'title': title.value,
            'rating': rating.value
        }

        const url = 'https://tinted-good-pufferfish.glitch.me/movies';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };
        fetch(url, options)
            .then( response => console.log(response) ) /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */



        console.log(movie)
    }

    btn1.addEventListener("click", createMovie)














});










