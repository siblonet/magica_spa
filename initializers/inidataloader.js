function Logged_Checker() {
    const token = sessionStorage.getItem('magica');

    if (token) {

        return true;
    } else {
        return false;
    }
}

async function initDataLoader() {
    const homconnec = document.getElementById('homconnec');
    if (Logged_Checker()) {
        homconnec.innerText = "Mon Espace";
        homconnec.setAttribute("href", "/dashboard");
    }


    try {
        //const online = await requesttoBackend('GET', 'magicaservicegetting');

    } catch (error) {
        console.log(error)
    }

};

initDataLoader();