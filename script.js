// script.js

// Configuração básica da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Controles de órbita
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Iluminação
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 4, -3);
scene.add(directionalLight);

// Adiciona o terreno à cena
const terrain = createTerrain(); // Função definida em scene.js
scene.add(terrain);

// Variáveis para armazenar o modelo e o telhado
let currentModel = null;
let currentTelhado = null;

// Função para carregar modelo e telhado
function loadModel(modelName) {
    // Remove o modelo e telhado anteriores, se existirem
    if (currentModel) {
        scene.remove(currentModel);
    }
    if (currentTelhado) {
        scene.remove(currentTelhado);
    }
    
    switch(modelName) {
        case 'casa1':
            currentModel = createCasa1(); // Função de casa1.js
            currentModel.position.y = 0.4; // Levanta a casa para ficar sobre o chão
            currentTelhado = createTelhado(); // Função de telhado.js
            currentTelhado.position.y = 0.4; // Alinha o telhado com a casa
            break;    
    }
    
    // Adiciona ambos à cena
    if (currentModel) {
        scene.add(currentModel);
    }
    if (currentTelhado) {
        scene.add(currentTelhado);
    }
}

// Configuração inicial
camera.position.set(9, 5, 5); // Ajustei para visualizar melhor o terreno
camera.lookAt(0, 0, 0);
loadModel('casa1'); // Modelo padrão

// Animação
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Resize handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Menu hamburguer
const hamburger = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const model = item.getAttribute('data-model');
        loadModel(model);
        menu.classList.remove('active');
    });
});

// Controle do telhado
const toggleTelhadoBtn = document.getElementById('toggle-telhado');
if (toggleTelhadoBtn) {
    toggleTelhadoBtn.addEventListener('click', () => {
        if (currentTelhado) {
            currentTelhado.visible = !currentTelhado.visible;
            toggleTelhadoBtn.textContent = currentTelhado.visible ? 'Esconder Telhado' : 'Mostrar Telhado';
        }
    });
    // Texto inicial do botão
    toggleTelhadoBtn.textContent = 'Esconder Telhado';
}