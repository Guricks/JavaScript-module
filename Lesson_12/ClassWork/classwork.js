// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(posts => {
//     let button = document.createElement('button');
//     button.innerText = 'Enter post';
//     button.style.width = '300px';
//     button.style.height = '30px';
//     button.style.marginLeft = '40%';
//     button.onclick = (e) => {
//         e.preventDefault();
//         let fatherDiv = document.createElement('div');
//         for (const post of posts) {
//             console.log(post);
//             let postDiv = document.createElement('div');
//             postDiv.style.border = '2px solid black';
//             postDiv.style.marginBottom = '10px';
//             postDiv.style.padding = '7px';
//             postDiv.innerHTML = `<p>ID: ${post.id}</p>
//                                  <h3>${post.title}</h3>
//                                   <p>${post.body}</p>`;
//
//             let buttonComments = document.createElement('button');
//             buttonComments.innerText = 'Enter comment';
//             buttonComments.style.width = '200px';
//             buttonComments.style.height = '30px';
//             buttonComments.style.marginLeft = '45%';
//
//             buttonComments.onclick = () => {
//                 fetch('https://jsonplaceholder.typicode.com/comments')
//                     .then(value => value.json())
//                     .then(comments => {
//                         for (const comment of comments) {
//                             if (post.id === comment.postId) {
//                                 let commentDiv = document.createElement('div');
//                                 commentDiv.style.borderBottom = '1px solid blue';
//                                 commentDiv.style.padding = '0 50px';
//                                 commentDiv.innerHTML = `<p>${comment.id}</p>
//                                                     <h3>${comment.name}</h3>
//                                                     <h5>${comment.email}</h5>
//                                                     <p>${comment.body}</p>`;
//                                 postDiv.appendChild(commentDiv);
//                             }
//                             buttonComments.disabled = true;
//                         }
//                     })
//             }
//
//             fatherDiv.appendChild(postDiv);
//             postDiv.appendChild(buttonComments);
//         }
//
//         document.body.append(fatherDiv);
//         button.disabled = true;
//     }
//     document.body.append(button);
// });
//


