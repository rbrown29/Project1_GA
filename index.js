fetch("https://api.coincap.io/v2/markets")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        w3.displayObject("api", data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));