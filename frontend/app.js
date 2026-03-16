let loggedIn = false

function openAuth() {

    document.getElementById("authModal").classList.remove("hidden")
    document.getElementById("authModal").classList.add("modal")

}

function switchAuth(type) {

    document.getElementById("loginForm").classList.add("hidden")
    document.getElementById("registerForm").classList.add("hidden")

    if (type === "login") {
        document.getElementById("loginForm").classList.remove("hidden")
    }

    else {
        document.getElementById("registerForm").classList.remove("hidden")
    }

}

function login() {

    loggedIn = true

    document.getElementById("authModal").classList.remove("modal")
    document.getElementById("authModal").classList.add("hidden")

    document.getElementById("navTabs").classList.remove("hidden")

    document.getElementById("landing").classList.add("hidden")

    document.getElementById("scanner").classList.remove("hidden")

    document.getElementById("loginBtn").innerText = "Logout"

}

document.getElementById("loginBtn").onclick = function () {

    if (loggedIn) {

        location.reload()

    } else {

        openAuth()

    }

}

function showPage(page) {

    document.getElementById("scanner").classList.add("hidden")
    document.getElementById("dashboard").classList.add("hidden")

    document.getElementById(page).classList.remove("hidden")

}

function fakeScan() {

    let risk = Math.random()

    let label = "Low Risk"

    if (risk > 0.6) label = "High Risk"
    else if (risk > 0.3) label = "Suspicious"

    document.getElementById("riskLabel").innerText = label

    document.getElementById("scanResult").classList.remove("hidden")

    addHistory(label)

}

let count = 0

function addHistory(label) {

    count++

    document.getElementById("totalScans").innerText = count

    let row =   `
                <tr>
                <td>#${count}</td>
                <td>example input</td>
                <td>${label}</td>
                </tr>
                `

    document.getElementById("historyTable").innerHTML += row

}

document.getElementById("themeToggle").onclick = function () {

    document.body.classList.toggle("light")

}