// Loading screen
function movieApp() {


    const url = 'https://tinted-good-pufferfish.glitch.me/movies';
    fetch(url)
        .then(function (res) {
            console.log(res)
            return res.json();
        }).then(function (data) {
        console.log(data)
        $("#loading-image").addClass('hide')
        console.log(data[0].title)

        const htmlText = data.map(function (o) {
            return `
         <div class="card">
        <div class="card-header">Title: ${o.title}</div>
        <div class="card-body"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_s11214cj0Z8H_o9SkPsIArI8tsF4SIQZg&usqp=CAU"></div>
        <div class="card-footer">Rating: ${o.rating}</div>
        <div class="card-footer">ID: ${o.id}</div>
        
        
        
<form>
            <button class="delete" value=${o.id}>Delete</button>
</form>        
</div>
   
<br>


`;
        });

        $('#movies').append(htmlText)


        $(".delete").click(deleteMovie)

        // console.log(deleteMovie(293))
//  Create Movie Form

        let title = document.getElementById('addMovie')
        let rating = document.getElementById('addRating')
        const btn1 = document.getElementById("btn1")


        btn1.addEventListener("click", createMovie)

    });
}

function deleteMovie(event) {
    event.preventDefault()
    fetch(`${url}/${event.target.value}`, {

        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .catch(error => console.error(error))
}

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








