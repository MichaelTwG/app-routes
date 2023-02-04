const data = {
    username: "homunculo1",
    password: "homunculo1",
    email: "homunculo1_email"
};

fetch('http://172.20.22.83:3000/singup', 
{
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));