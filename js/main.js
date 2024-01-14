const nav = document.getElementById('nav-main');
nav.innerHTML = createNavigation();

const footer = document.getElementById('footer-main');
footer.innerHTML = createFooter(); 

function createNavigation() {
    return `
    <img id="nav-logo" src="./images/Capture.PNG" alt="M&K Global Impact globe logo">
    <ul class="nav-list">
    <li class="nav-item">
        <a href="#">Contact</a>
    </li>
</ul>`
}

function createFooter() {
    return `
<p>
   M&K Global Impact &copy; 2023
</p>
<p id="footer-icons">
    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
</p>
<p></p>
`
}