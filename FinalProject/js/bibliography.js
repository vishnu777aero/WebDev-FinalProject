window.resetAppData = () => {
    localStorage.clear();
    document.cookie = 'username=;';

    alert("Data cleared successfully!");
}