const fetchPromise1 = fetch (
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

const fetchPromise2 = fetch (
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);

const fetchPromise3 = fetch (
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

const fetchPromise4 = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

fetchPromise1
    .then((response) => {
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`);
    });

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (const response of responses){
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });

Promise.all([fetchPromise1, fetchPromise2, fetchPromise4])
    .then((responses) => {
        for (const response of responses){
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });

Promise.any([fetchPromise1, fetchPromise2, fetchPromise4])
    .then((response) => {
      console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });


document.querySelector("#promise1").addEventListener("click", () => {
    console.log("hello");
    fetchPromise1
        .then((response) => {
            if (!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data[0].name);
        })
        .catch((error) => {
            console.error(`Could not get products: ${error}`);
        });
});

document.querySelector("#promise2").addEventListener("click", () => {
    Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (const response of responses){
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });
});

document.querySelector("#promise3").addEventListener("click", () => {
    
    Promise.all([fetchPromise1, fetchPromise2, fetchPromise4])
        .then((responses) => {
            for (const response of responses){
                console.log(`${response.url}: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(`Failed to fetch: ${error}`);
        });

});

document.querySelector("#promise4").addEventListener("click", () => {
    
    Promise.any([fetchPromise1, fetchPromise2, fetchPromise4])
        .then((response) => {
        console.log(`${response.url}: ${response.status}`);
        })
        .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
        });

});

document.querySelector("#promise5").addEventListener("click", () => {
    async function fetchProducts() {
        try {
            const response = await fetch(
                "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
            );
            if (!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Could not get products: ${error}`);
        }
    }
    const promise = fetchProducts();
    promise.then((data) => console.log(data[0].name));

});