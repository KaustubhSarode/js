// let http = new XMLHttpRequest();
// let url = 'https://jsonplaceholder.typicode.com/posts';
// let method = 'GET';
// http.open(method, url);
// http.send();
// http.onreadystatechange = function () {
//     if(http.readyState === 4 && http.status === 200) {
//         console.log(JSON.parse(http.responseText));
//     }
// };

let http = new XMLHttpRequest();
let url = 'https://jsonplaceholder.typicode.com/posts';
let method = 'posts';
let data = 'title=new&body=description';
http.open(method, url);
http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
http.send(data);

http.onreadystatechange = function () {
    if(http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log(JSON.parse(http.responseText));
    }
};