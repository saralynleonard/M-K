const nav = document.getElementById('nav-main');
nav.innerHTML = createNavigation();

function getCurrentYear() {
    return new Date().getFullYear()
}

const footer = document.getElementById('footer-main');
footer.innerHTML = createFooter(); 

function createNavigation() {
    return `
    <a href="./index.html" id="nav-logo"><img id="nav-logo" src="./images/logo.PNG" alt="M&K Global Impact globe logo"></a>
    <!--<ul class="nav-list">
    <li class="nav-item">
        <a href="#">Contact</a>
    </li>
</ul>--!>
`
}

function createFooter() {
    return `
<p>
   M&K Global Impact &copy; ${getCurrentYear()}
</p>
<div id="address">
<p>
    136 West Dares Beach Road #207, Prince Frederick, MD 20678
</p>
<p>
    <i class="fa-solid fa-phone"></i> 301-373-0790 <br>
    <i class="fa-solid fa-envelope"></i> mkglobalimpact@gmail.com
</p>
</div>
<p id="footer-links">
    <!--<a href="#"><i class="fa-brands fa-linkedin"></i></a>-->
</p>
<p></p>
`
}