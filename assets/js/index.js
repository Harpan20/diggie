window.onload = (event) => {
    let myAlert = document.querySelectorAll('.show')[0];
    if (myAlert) {
        let bsAlert = new bootstrap.Toast(myAlert);
        bsAlert.show();
    }
};