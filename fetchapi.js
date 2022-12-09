let USER_URL = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         data.forEach(element => {
//             // console.log(element.username, element.address.city)
//             const markup = `<li>${element.name}</li>`;
//             document.querySelector('.users').insertAdjacentHTML('beforeend', markup);
//         });
//     })
//     .catch((error) => {
//         console.log(error)
//     })




// advance displaying in console

// async function getUsers() {
//     try{
//         let response = await fetch(USER_URL);
//         return await response.json();
        
//     }
//     catch(error){
//         console.log("ewew");
//     }
// }

// async function renderUsers(){
//     let users = await getUsers();
//     try {
//         users.forEach(data => {
//             console.table(data)
            
//         });
//     } catch (error) {
//         console.log(error)
//     }

   
// }

// renderUsers();


//displaying in table

async function getUsers() {
    try{
        let response = await fetch(USER_URL);
        return await response.json();
        
    }
    catch(error){
        console.log("ewew");
    }
}

async function renderUsers(){
    let users = await getUsers();
    let data_table = document.querySelector("#data_table");
    let table ="";
    try {
        users.forEach(data => { 
            table  += `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.username}</td>
                    <td>${data.email}</td>
                    <td>${data.address.street}</td>
                    <td>${data.address.city}</td>
                </tr>
            `
            
        });

        data_table.innerHTML = table;
    } catch (error) {
        console.log(error)
    }

   
}

renderUsers();