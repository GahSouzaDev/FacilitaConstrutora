function createTelhado() {
    const telhadoGroup = new THREE.Group();
    
    // Material da madeira
    const madeiraMaterial = new THREE.MeshPhongMaterial({
        color: 0x8B4513, // Marrom escuro para madeira
        specular: 0x222222,
        shininess: 10
    });

    // Carregar textura para as telhas
    const textureLoader = new THREE.TextureLoader();
    const telhaTexture = textureLoader.load('telhado.png'); // Substitua pelo caminho da sua textura
    telhaTexture.wrapS = THREE.RepeatWrapping;
    telhaTexture.wrapT = THREE.RepeatWrapping;
    telhaTexture.repeat.set(0.5, 1); // Sem repetição, como no exemplo

    // Material das telhas cerâmicas com textura
    const telhaMaterial = new THREE.MeshPhongMaterial({
        map: telhaTexture, // Aplica a textura
        color: 0xB22222, // Vermelho tijolo
        specular: 0x222222,
        shininess: 5,
        side: THREE.DoubleSide // Renderiza ambos os lados
    });

    // Cumeeira (viga central no topo)
    const vigaGeometry = new THREE.BoxGeometry(0.2, 0.2, 7); // Comprimento fixo baseado na casa
    const cumeeira = new THREE.Mesh(vigaGeometry, madeiraMaterial);
    cumeeira.position.set(-3.4, 4.65,0.7); // Posição fixa no topo da casa
    telhadoGroup.add(cumeeira);

    // Caibros (vigas inclinadas)
    const caibroGeometry = new THREE.BoxGeometry(4.4, 0.1, 0.1); // Comprimento fixo
    const numCaibros = 7;

    for (let i = 0; i < numCaibros; i++) {
        const caibroEsq = new THREE.Mesh(caibroGeometry, madeiraMaterial);
        const caibroDir = new THREE.Mesh(caibroGeometry, madeiraMaterial);
        
        const zPos = -2.75 + (i * 0.6); // Incremento fixo de 1 unidade no eixo Z

        // Caibro esquerdo
        caibroEsq.position.set(-5.35, 3.6, zPos); // Posição fixa
        caibroEsq.rotation.z = Math.PI / 6; // Inclinação fixa de 30 graus
        telhadoGroup.add(caibroEsq);

        // Caibro direito
        caibroDir.position.set(-1.45, 3.6, zPos); // Posição fixa
        caibroDir.rotation.z = -Math.PI / 6; // Inclinação oposta fixa
        telhadoGroup.add(caibroDir);
    }

    // Telhas (duas águas)
    const telhaGeometry = new THREE.PlaneGeometry(3.7, 4.5); // Dimensões fixas

    const telhaEsq = new THREE.Mesh(telhaGeometry, telhaMaterial);
    telhaEsq.position.set(-5.35, 3.7, -0.95); // Posição fixa
    telhaEsq.rotation.z = Math.PI / 2; 
    telhaEsq.rotation.x = Math.PI / 2;  
    telhaEsq.rotation.y = Math.PI / 6; // Inclinação fixa
    telhadoGroup.add(telhaEsq);

    const telhaDir = new THREE.Mesh(telhaGeometry, telhaMaterial);
    telhaDir.position.set(-1.45, 3.7, -0.95); // Posição fixa
    telhaDir.rotation.z = Math.PI / 2;
    telhaDir.rotation.x = Math.PI / 2;
    telhaDir.rotation.y = -Math.PI / 6; // Inclinação fixa oposta
    telhadoGroup.add(telhaDir);

    return telhadoGroup;
}