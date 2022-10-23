

//to get

async function getData() {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts',
            { method: 'GET' }
        );
        const data1 = await response.json();
        console.log(data1);


        for (let i = 0; i < data1.length; i++) {
            let myData = data1[i];
            let para = document.getElementById('loading');

            let Post = document.createElement('div')
            let postId = document.createElement('p');
            let postuserId = document.createElement('p');
            let posttitle = document.createElement('p');
            let postbody = document.createElement('p');
            let button1 = document.createElement('BUTTON');
            let button2 = document.createElement('BUTTON');

            postId.innerHTML = myData.id;
            postuserId.innerHTML = myData.userId;
            posttitle.innerHTML = myData.title;
            postbody.innerHTML = myData.body;
            let btntext1 = document.createTextNode("EDIT");
            let btntext2 = document.createTextNode("DELETE");

            Post.setAttribute('class', 'indi-div-post')
            postId.setAttribute('class', 'pId')
            postuserId.setAttribute('class', 'puId')
            posttitle.setAttribute('class', 'ptitle')
            postbody.setAttribute('class', 'pbody')
            button1.setAttribute('class', 'button1')
            button2.setAttribute('class', 'button2')

            para.appendChild(Post);
            Post.appendChild(postId);
            Post.appendChild(postuserId);
            Post.appendChild(posttitle);
            Post.appendChild(postbody);
            Post.appendChild(button1);
            Post.appendChild(button2);
            button1.appendChild(btntext1);
            button2.appendChild(btntext2);

            
            
            // const ebutton = document.querySelectorAll(".button1").forEach(button1 =>
            //     button1.addEventListener(click, function handleClick(event){
            //         console.log('btnclicked', event)
            //         let url = "http://jsonplaceholder.typicode.com/posts/1";

            //         let payload ={
            //                     userId: 1,
            //                     id: 1,
            //                     title: "Lessgo",
            //                     body: "She couldn't decide if the glass was half empty or half full so she drank it."
            //                     }

            //         let options={
            //         method: "PUT",
            //         body: JSON.stringify(payload)
            //         }

            //         fetch(url, options)
            //        .then(response => console.log(response))
            //         }))


                }
        }
    catch (err) {
        console.log(err);
    }
}

getData();


//to post
let form = document.getElementById('Upostform');

form.addEventListener('submit', function (e) {
    e.preventDefault();


    let secondId = document.getElementById('Id').value;
    let secondtitle = document.getElementById('Title').value;
    let secondbody = document.getElementById('Body').value;
    let secondUserId = document.getElementById('UserId').value;

    async function postData() {
        try {
            const response = await fetch('http://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        title: secondtitle,
                        body: secondbody,
                        id: secondId,
                        userId: secondUserId,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
            const data2 = await response.json();
            console.log(data2);

            let postresult = document.getElementById('makePostdiv');

            let makePost = document.createElement('div');
            let makePostContentId = document.createElement('p');
            let makePostContentTitle = document.createElement('p');
            let makePostContentBody = document.createElement('p');
            let makePostContentUserId = document.createElement('p');
            let button1 = document.createElement('BUTTON');
            let button2 = document.createElement('BUTTON');



            makePostContentId.innerHTML = ` ${secondId}`
            makePostContentUserId.innerHTML = ` ${secondUserId}`
            makePostContentTitle.innerHTML = ` ${secondtitle}`
            makePostContentBody.innerHTML = ` ${secondbody}`
            let btntext1 = document.createTextNode("EDIT");
            let btntext2 = document.createTextNode("DELETE");


            postresult.setAttribute('class', 'indi-div-post')
            makePostContentId.setAttribute('class', 'pId')
            makePostContentUserId.setAttribute('class', 'pUId')
            makePostContentTitle.setAttribute('class', 'ptitle')
            makePostContentBody.setAttribute('class', 'pbody')
            button1.setAttribute('class', 'button1')
            button2.setAttribute('class', 'button2')



            postresult.appendChild(makePost);
            makePost.appendChild(makePostContentId);
            makePost.appendChild(makePostContentTitle);
            makePost.appendChild(makePostContentBody);
            makePost.appendChild(button1);
            makePost.appendChild(button2);
            button1.appendChild(btntext1);
            button2.appendChild(btntext2);




        }
        catch (err) {
            console.log(err);
        }
    }

    postData();
})


//to update
let url = "http://jsonplaceholder.typicode.com/posts/1";

let payload ={
    userId: 1,
    id: 1,
    title: "Lessgo",
    body: "She couldn't decide if the glass was half empty or half full so she drank it."
}

let options={
    method: "PUT",
    body: JSON.stringify(payload)
}

fetch(url, options)
.then(response => console.log(response))



//to delete

let durl = "http://jsonplaceholder.typicode.com/posts/2";

let doptions={
    method: "DELETE",
    body: JSON.stringify(payload)
}

fetch(durl, doptions)
.then(response => console.log(response))



