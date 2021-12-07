function getYearDate() {   
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("getCurrentYearDateForThisWebsite").innerHTML = year;
}

getYearDate();