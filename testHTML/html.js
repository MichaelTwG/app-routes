const data = {
    username: "username0",
    password: "password0"
};

fetch('http://172.31.206.129:3000/login', 
{method: 'POST', 
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => {
    if (data.status === false) {
        console.log("USUARIO O CONTRASEÑA INCORRECTOS");
    } else if (data.status === true){
        console.log("todo true")
    }
})
.catch(err => console.log(err));