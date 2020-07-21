const addFunction = () => {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const data = JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
    });

    if (firstname == "") {
        alert("Error: First Name is empty!");
        return false;
    } else if (lastname == "") {
        alert("Error: Last Name is empty!");
        return false;
    } else if (username == "") {
        alert("Error: Username is empty!");
        return false;
    } else if (email == "") {
        alert("Error: Email is empty!");
        return false;
    } else if (password == "") {
        alert("Error: Password is empty!");
        return false;
    }

    fetch("/add_user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    window.location.reload();
};

const getFunction = () => {
    fetch("/get_user.php")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const tablebody = document.getElementById("tablebody");

            for (var i = 0; i < data.length; i++) {
                let content = tablebody.innerHTML;
                content +=
                    '<tr class="table" id="rowid"><td id="id">' +
                    data[i].id +
                    '</td><td id="firstname" contenteditable="true">' +
                    data[i].firstname +
                    '</td><td contenteditable="true">' +
                    data[i].lastname +
                    '</td><td contenteditable="true">' +
                    data[i].username +
                    '</td><td contenteditable="true">' +
                    data[i].email +
                    '</td><td id="password">' +
                    data[i].password +
                    "</td>" +
                    '<td><button type="button"' +
                    'onClick="deleteFunction()"' +
                    "value=" +
                    data[i].id +
                    "" +
                    ' id="delete" class="btn btn-danger btn-sm m-0">Delete</button></td>' +
                    '<td><button type="button" onClick="updateFunction(this)" id="update" class="btn btn-info btn-sm m-0">Edit</button></td>' +
                    "</tr>";

                tablebody.innerHTML = content;
            }
        });
};

function updateFunction(ref) {
    // Password and Id are not editable for security reasons, can't change id value as it's dictated by the database.

    var row = $(ref).closest("tr");

    id = row.find("td:eq(0)").text();
    firstname = row.find("td:eq(1)").text();
    lastname = row.find("td:eq(2)").text();
    username = row.find("td:eq(3)").text();
    email = row.find("td:eq(4)").text();

    const data = JSON.stringify({
        id: id,
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
    });

    fetch("/update_user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            alert = document.getElementById("alert");
            content = alert.innerHTML;

            content +=
                '<div class="alert alert-success" role="alert">' +
                "User record updated successfully" +
                "</div>";

            alert.innerHTML = content;
        })
        .catch((error) => {
            console.error("Error:", error);
            alert = document.getElementById("alert");
            content = alert.innerHTML;

            content +=
                '<div class="alert alert-danger" role="alert">' +
                "There was an error updating a user record" +
                "</div>";

            alert.innerHTML = content;
        });

    console.log(data);
}

const deleteFunction = () => {
    id = document.getElementById("delete").value;
    console.log("deez");

    const data = JSON.stringify({
        id: id,
    });

    fetch("/remove_user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    window.location.reload();
};

getFunction();