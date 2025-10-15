document.getElementById('a_btn').addEventListener('click', function() {
    document.querySelector('.a_screen').classList.add('active');
    document.querySelector('.b_screen').classList.remove('active');
});

document.getElementById('b_btn').addEventListener('click', function() {
    document.querySelector('.b_screen').classList.add('active');
    document.querySelector('.a_screen').classList.remove('active');
});

// 初期表示を設定
document.querySelector('.a_screen').classList.add('active');
