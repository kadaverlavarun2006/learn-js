//api =application program interface
//example-bookmyshow
//it redirects to bank app to phonepay to pay via api
//every language contains api
function getdatafrom() {
    //to make api request we need to us tetch 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
getdatafrom()