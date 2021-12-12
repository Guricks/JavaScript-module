// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
// let div = document.createElement('div');
// div.setAttribute('class', 'father');
//         for (const post of posts) {
//             console.log(post);
//
//             let divPost = document.createElement('div');
//             divPost.setAttribute('class', 'wrapper_div');
//             let divWrap = document.createElement('div');
//             divWrap.setAttribute('class', 'wrapId');
//
//             let pUserId = document.createElement('p');
//             pUserId.innerText = `User Id: ${post.userId}`;
//
//             let pId = document.createElement('p');
//             pId.innerText = `Id: ${post.id}`;
//
//             let h4Tittle = document.createElement('h4');
//             h4Tittle.innerText = `${post.title}`;
//
//             let pBody = document.createElement('p');
//             pBody.innerText = `${post.body}`;
//
//             divPost.appendChild(h4Tittle);
//             divPost.appendChild(pBody);
//             divWrap.appendChild(pUserId);
//             divWrap.appendChild(pId);
//             divPost.appendChild(divWrap);
//             div.appendChild(divPost);
//             document.body.append(div);
//
//         }
//     });






//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => (response.json()))
    .then(comments => {
            console.log(comments)
            let fatherDiv = document.createElement('div');
            fatherDiv.classList.add('father');

            for (const comment of comments) {
                console.log(comment)
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.style.border = '2px solid green';
                commentDiv.style.paddingLeft = '200px';

                let commentId = document.createElement('p');
                commentId.innerText = `Id: ${comment.id}`;

                let commentName = document.createElement('h3');
                commentName.innerText = `${comment.name}`;

                let commentEmail = document.createElement('h5');
                commentEmail.innerText = `${comment.email}`;

                let commentBody = document.createElement('p');
                commentBody.innerText = `${comment.body}`;

                commentDiv.appendChild(commentId);
                commentDiv.appendChild(commentName);
                commentDiv.appendChild(commentEmail);
                commentDiv.appendChild(commentBody);
                fatherDiv.appendChild(commentDiv);
            }
            document.body.append(fatherDiv);
        }
    );


