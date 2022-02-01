const fetchUsers = async (dropValue) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?name')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

        }

        let data = await response.json()
        console.log(data)
        createTableRow(data)
        return data

    } catch {
        error => console.log(error)
    }
}


const table = document.querySelector('.table')
const createTableRow = (data) => {
    data.forEach(user => {
        const newRow = document.createElement('tr')
        newRow.innerHTML +=
            `
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
        
        `
        table.appendChild(newRow)
    })
}

fetchUsers()

const dropdownName = document.querySelector('#name')
const dropdownUsername = document.querySelector('#username')
const dropdownEmail = document.querySelector('#email')


const search = (query) => {
    const input = document.querySelector('#inputSearch')
    console.log(input.value)

}



const handleSearch = (event) => {
    query = event.target.value
    console.log(query)
    if (event.key === 'Enter') {
        search(query)
    }
}




const dropdown = document.querySelector('#dropdown')
let dropValue = ''
console.log(dropValue)
const dropName = (event) => {
    dropValue = event.target.innerText.toLowerCase()

    console.log(dropValue)
}