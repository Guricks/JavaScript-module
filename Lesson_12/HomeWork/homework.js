// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
let div = document.createElement('div');
div.setAttribute('class', 'father');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            console.log(post);

            let divPost = document.createElement('div');
            divPost.setAttribute('class', 'wrapper_div');
            let divWrap = document.createElement('div');
            divWrap.setAttribute('class', 'wrapId');

            let pUserId = document.createElement('p');
            pUserId.innerText = `User Id: ${post.userId}`;

            let pId = document.createElement('p');
            pId.innerText = `Id: ${post.id}`;

            let h4Tittle = document.createElement('h4');
            h4Tittle.innerText = `${post.title}`;

            let pBody = document.createElement('p');
            pBody.innerText = `${post.body}`;



            divPost.appendChild(h4Tittle);
            divPost.appendChild(pBody);
            divWrap.appendChild(pUserId);
            divWrap.appendChild(pId);
            divPost.appendChild(divWrap);
            div.appendChild(divPost);
            document.body.append(div);

        }
    });






//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments