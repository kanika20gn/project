function adduser()
{
    username = document.getElementById("namech").value;
    localStorage.setItem("namechild" , username)
    window.location = "letschat_room.html";
}