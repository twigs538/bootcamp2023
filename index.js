window.onload = function () {
    let personalList = new Array(
        {item: "Personal information: Tshepiso Moloko"},
        {item: "Education background: BSc Computer Science"},
        {item: "Projects done: Made my own uber app"},
        {item: "Working experience: Intern at WeThinkCode"},
        {item: "Interesting information for employers: Hardworking individual aspiring to become a full stack developer :)"}
    );

    let listUl = "<ul>";
    for (let i = 0; i < personalList.length; i++){
        console.log(personalList[i].item);
        listUl += "<li>" + personalList[i].item + "</li>";
    }
    listUl += "</ul>";
    document.getElementById("listItems").innerHTML = listUl;
}