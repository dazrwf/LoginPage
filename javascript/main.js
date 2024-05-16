$(document).ready(function () {
    fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(data => {
        data.forEach(element => {
            const allData = `
            <div class="w-[25%] flex flex-col flex-nowrap justify-center border-solid border-[1px] border-[#787373] p-[10px] box-border">
                <h3 class="id w-[90%] text-center">Id: ${element.id}</h3>
                <h3 class="name w-[90%]">Name: ${element.name}</h3>
                <h3 class="email w-[90%]">Email: ${element.email}</h3>
                <p class="coment w-[90%]">Comment: ${element.body}</p>
             </div>`
            $("#allComents").append(allData);
        });
    })
    $('#login').on('submit', function (e) {
        e.preventDefault();
        var userName = $(this).find("#userNsame").val().trim();
        var password = $(this).find("#password").val().trim();
        if (userName === "") {
            alert("نام کاربری را وارد کنید!");
            return;
        }
        if (password === "") {
            alert("رمز عبور را وارد کنید!");
            return;
        }
        const myObj = { user: userName, pass: password };
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(myObj),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    alert("همه چی اوکی");
                } else {
                    alert("یه مشکلی وجود داره");
                }
            })
            .catch((error) => console.error('Error:', error));
        console.log(myObj);
    });
});