function validate() {
    var username = document.getElementById('username')
    var usernameNotice = document.getElementById('usernameNotice')

    var password = document.getElementById('password')
    var passwordNotice = document.getElementById('passwordNotice')

    if (username.value == "") {
        usernameNotice.style.display = 'block'
    }else{
        usernameNotice.style.display = 'none'
    }
}