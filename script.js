// catching all the elements 
let filterDepartment = document.querySelector("#departmentFilter")
let filterGendert = document.querySelector("#genderFilter")
let sortSalaryOrder = document.querySelector("#sortSalaryOrder")

let tbody = document.querySelector("tbody")

// function for async fetching of the data

let getData = async(url)=>{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    showData(data);
}

// function to display the data from the DOM

let showData = (arr)=>{
    let originaldata = arr.data;
    console.log(originaldata);

    originaldata.array.forEach((ele,i)=> {
        let row = document.createElement("tr")
        row.innerHTML = 
        `<td>${i+1}</td>
        <td>${ele.name}</td>
        <td>${ele.gender}</td>
        <td>${ele.department}</td>
        <td>${ele.salary}</td>
        `
        tbody.append(row)
    });
}
//  URL to get the data
getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
