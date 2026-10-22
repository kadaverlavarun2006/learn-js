fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        const table = document.getElementById("postsTable");

        posts.forEach(post => {

            table.innerHTML += `<tr>
            <td>${post.userId}</td>
             <td>${post.id}</td>
              <td>${post.title}</td>
               <td>${post.body}</td>
            </tr>`
        });


    });