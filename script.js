function selectMovie(movie) {
    document.getElementById("movieName").value = movie;
}

async function bookMovie() {

    const movieName =
        document.getElementById("movieName").value;

    const seats =
        document.getElementById("seatCount").value;

    const response = await fetch("/book", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            movieName,
            seats
        })

    });

    const data = await response.json();

    document.getElementById("message").innerHTML =
        `✅ Booking Confirmed for ${movieName}`;
}