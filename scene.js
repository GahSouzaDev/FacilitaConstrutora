// scene.js

// Função para criar o terreno com grama e muro
function createTerrain() {
    const terrainGroup = new THREE.Group();

    // Dimensões do terreno
    const terrainWidth = 20.1;  // 20 metros de comprimento
    const terrainDepth = 8.1;   // 8 metros de largura
    const wallHeight = 2;     // 2 metros de altura para o muro
    const wallThickness = 0.14; // 14 cm de espessura

    // Textura de grama
    const grassTexture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/terrain/grasslight-big.jpg');
    grassTexture.wrapS = THREE.RepeatWrapping;
    grassTexture.wrapT = THREE.RepeatWrapping;
    grassTexture.repeat.set(4, 1); // Ajusta a repetição da textura

    // Chão com textura de grama
    const groundGeometry = new THREE.PlaneGeometry(terrainWidth, terrainDepth);
    const groundMaterial = new THREE.MeshPhongMaterial({ map: grassTexture });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2; // Rotaciona para ficar horizontal
    ground.position.y = 0;
    terrainGroup.add(ground);

    // Material do muro (concreto cinza)
    const wallMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 }); // Cinza

    // Muro frontal (20m de comprimento)
    const frontWallGeometry = new THREE.BoxGeometry(terrainWidth, wallHeight, wallThickness);
    const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
    frontWall.position.set(0, wallHeight / 2, -terrainDepth / 2);
    terrainGroup.add(frontWall);

    // Muro traseiro (20m de comprimento)
    const backWallGeometry = new THREE.BoxGeometry(terrainWidth, wallHeight, wallThickness);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, wallHeight / 2, terrainDepth / 2);
    terrainGroup.add(backWall);

    // Muro lateral esquerdo (8m de largura)
    const leftWallGeometry = new THREE.BoxGeometry(wallThickness, wallHeight, terrainDepth);
    const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    leftWall.position.set(-terrainWidth / 2, wallHeight / 2, 0);
    terrainGroup.add(leftWall);

   

    return terrainGroup;
}

// Exporta a função para uso em outros arquivos (se necessário)
if (typeof module !== 'undefined') {
    module.exports = { createTerrain };
}