function switchScene(id) {
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

document.getElementById('btn-start').addEventListener('click', () => {
    switchScene('scene-game');
});