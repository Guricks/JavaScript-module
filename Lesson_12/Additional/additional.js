// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        let fatherDiv = document.createElement('div');
        fatherDiv.classList.add('father');
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `<p>${user.id}</p>
                                 <h2>${user.name}</h2>
                                 <h4>${user.username}</h4>
                                 <h4>${user.email}</h4>`;

            let addressDiv = document.createElement('div');
            addressDiv.classList.add('address');
            addressDiv.innerHTML = `<h4>${user.address.city}</h4>
                                    <h5>${user.address.street}</h5>
                                    <h5>${user.address.suite}</h5>
                                    <h5>${user.address.zipcode}</h5>`;
            let geoDiv = document.createElement('div');
            geoDiv.classList.add('geo');
            geoDiv.innerHTML = `<h6>${user.address.geo.lat}</h6>
                                <h6>${user.address.geo.lng}</h6>`;
            let companyDiv = document.createElement('div');
            companyDiv.classList.add('company');
            companyDiv.innerHTML = `<h4>${user.company.name}</h4>
                                    <p>${user.company.bs}</p>
                                    <p>${user.company.catchPhrase}</p>`;
            let phoneWebDiv = document.createElement('div');
            phoneWebDiv.classList.add('phone');
            phoneWebDiv.innerHTML = `<h5>${user.phone}</h5>
                                     <h5>${user.website}</h5>`;

            let buttonPosts = document.createElement('button');
            buttonPosts.classList.add('button');
            buttonPosts.innerText = 'Enter posts';

            buttonPosts.onclick = () => {
                let fatherPost = document.createElement('div');
                fatherPost.classList.add('father-post');
                fatherPost.style.width = '100%';
                let btnPost = document.createElement('button');
                btnPost.classList.add('btn');
                btnPost.innerText = 'Close';

                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        console.log(posts)

                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let postDiv = document.createElement('div');
                                    postDiv.classList.add('post');
                                postDiv.style.width = '100%'
                                postDiv.innerHTML = `<p>ID: ${post.id}</p>
                                 <h3>${post.title}</h3>
                                   <p>${post.body}</p>`;
                                btnPost.onclick = () => {
                                    fatherPost.style.width = '0';
                                }




                                let buttonComments = document.createElement('button');
                                buttonComments.classList.add('button');
                                buttonComments.innerText = 'Enter comment';

                                buttonComments.onclick = () => {
                                    let fatherComment = document.createElement('div');
                                    fatherComment.classList.add('father-comm');
                                    fatherComment.style.width = '100%';
                                    let btnComment = document.createElement('button');
                                    btnComment.classList.add('btn');
                                    btnComment.innerText = 'Close';
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(value => value.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if (post.id === comment.postId) {
                                                    let commentDiv = document.createElement('div');
                                                    commentDiv.classList.add('comment');
                                                    commentDiv.innerHTML = `<p>${comment.id}</p>
                                                         <h3>${comment.name}</h3>
                                                        <h5>${comment.email}</h5>
                                                        <p>${comment.body}</p>`;
                                                    btnComment.onclick = () => {

                                                        fatherComment.style.width = '0';
                                                    };

                                                    fatherComment.appendChild(commentDiv);
                                                    fatherComment.appendChild(btnComment);
                                                    document.body.append(fatherComment);
                                                }
                                            }
                                        })
                                }
                                postDiv.appendChild(buttonComments);
                                fatherPost.appendChild(btnPost);
                                fatherPost.appendChild(postDiv);
                                document.body.append(fatherPost);
                            }
                        }
                    })

            }
            userDiv.appendChild(addressDiv);
            addressDiv.appendChild(geoDiv);
            userDiv.appendChild(companyDiv);
            userDiv.appendChild(phoneWebDiv);
            userDiv.appendChild(buttonPosts);
            fatherDiv.appendChild(userDiv);
        }

        document.body.append(fatherDiv);
    });
