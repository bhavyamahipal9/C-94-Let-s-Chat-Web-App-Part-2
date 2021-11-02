function addUser(){
    user_id = document.getElementById("user_name").value;
    localStorage.setItem("User ID ", user_id);
    window.location = "let_chat_web_app_room.html";
}