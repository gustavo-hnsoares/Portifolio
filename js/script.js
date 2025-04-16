document.getElementById('open_btn_menu').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const icon = document.getElementById('open_btn_icon');
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', event => {
        const sidebar = document.querySelector('.sidebar');
        const icon = document.getElementById('open_btn_icon');
        sidebar.classList.remove('open');
        icon.classList.replace('fa-times', 'fa-bars');
    });
});


function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getId('overlay').style.display = 'none';
}




