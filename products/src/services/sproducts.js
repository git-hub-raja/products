
export default function productAPIs() {
    return {
        readProductsFromServer: () => new Promise((resolve, reject) => {
            fetch('https://dummyjson.com/products?limit=100&skip=0')
            .then(res => res.json())
            .then(response => {
                resolve((response && response.products) || []);
            })
            .then(error => reject([]));
        })
    }
}
    