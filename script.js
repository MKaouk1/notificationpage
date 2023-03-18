const unreadMessages = document.querySelector('.unread');
const unReadMessagesCount = document.getElementById("numOfUnreadMessages");
const markAll = document.getElementById("mark-as-read")

unReadMessagesCount.innerText = unreadMessages.clientHeight;

unreadMessages.forEach((message) => {
    message.addEventListener('click',() =>{
    message.classList.remove('unread');
    const newUnreadMessages = document.querySelectorAll('unread');
    unReadMessagesCount.innerText = newUnreadMessages.length;
    });
});

markAll.addEventListener('click', () => {
    unreadMessages.forEach((message) => {
    message.classList.remove('unread');
    });
    const newUnreadMessages = document.querySelectorAll('.unread');
    unReadMessagesCount.innerText = newUnreadMessages.length;
})