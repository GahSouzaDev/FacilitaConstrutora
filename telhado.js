function createTelhado() {
    const telhadoGroup = new THREE.Group();
    
    // Material da madeira
    const madeiraMaterial = new THREE.MeshPhongMaterial({
        color: 0x8B4513,
        specular: 0x222222,
        shininess: 10
    });

    // Carregar textura para as telhas
    const textureLoader = new THREE.TextureLoader();
    const telhaTexture = textureLoader.load('telhado.png');
    telhaTexture.wrapS = THREE.RepeatWrapping;
    telhaTexture.wrapT = THREE.RepeatWrapping;
    telhaTexture.repeat.set(0.5, 1);

    // Material das telhas cerâmicas com textura
    const telhaMaterial = new THREE.MeshPhongMaterial({
        map: telhaTexture,
        color: 0xB22222,
        specular: 0x222222,
        shininess: 5,
        side: THREE.DoubleSide
    });

    // Cumeeira (viga central no topo)
    const vigaGeometry = new THREE.BoxGeometry(0.2, 0.2, 6.7);
    const cumeeira = new THREE.Mesh(vigaGeometry, madeiraMaterial);
    cumeeira.position.set(-3.4, 4.65, 0.75);
    telhadoGroup.add(cumeeira);

    // Caibros existentes (vigas inclinadas)
    const caibroGeometry = new THREE.BoxGeometry(4.4, 0.1, 0.1);
    const numCaibros = 7;

    for (let i = 0; i < numCaibros; i++) {
        const caibroEsq = new THREE.Mesh(caibroGeometry, madeiraMaterial);
        const caibroDir = new THREE.Mesh(caibroGeometry, madeiraMaterial);
        
        const zPos = -2.55 + (i * 0.6);

        // Caibro esquerdo
        caibroEsq.position.set(-5.35, 3.6, zPos);
        caibroEsq.rotation.z = Math.PI / 6;
        telhadoGroup.add(caibroEsq);

        // Caibro direito
        caibroDir.position.set(-1.45, 3.6, zPos);
        caibroDir.rotation.z = -Math.PI / 6;
        telhadoGroup.add(caibroDir);
    }

    // Novos caibros (5 adicionais com tamanhos diferentes)
    const caibroEsqGeometry = new THREE.BoxGeometry(4.4, 0.1, 0.1); // Tamanho maior para caibros esquerdos
    const caibroDirGeometry = new THREE.BoxGeometry(3.8, 0.1, 0.1); // Tamanho menor para caibros direitos
    const numNovosCaibros = 5;

    for (let i = 1; i <= numNovosCaibros; i++) {
        const caibroEsq = new THREE.Mesh(caibroEsqGeometry, madeiraMaterial);
        const caibroDir = new THREE.Mesh(caibroDirGeometry, madeiraMaterial);
        
        // Posicionamento começando após os caibros existentes
        const zPos = 1.05 + (i * 0.6); // Começa após o último caibro existente (1.8 = -2.4 + 7 * 0.6)

        // Caibro esquerdo
        caibroEsq.position.set(-5.35, 3.6, zPos);
        caibroEsq.rotation.z = Math.PI / 6;
        telhadoGroup.add(caibroEsq);

        // Caibro direito
        caibroDir.position.set(-1.75, 3.75, zPos);
        caibroDir.rotation.z = -Math.PI / 6;
        telhadoGroup.add(caibroDir);
    }

    // Telhas (duas águas)
    const telhaGeometry = new THREE.PlaneGeometry(3.7, 4.5);

    const telhaEsq = new THREE.Mesh(telhaGeometry, telhaMaterial);
    telhaEsq.position.set(-5.35, 3.7, -0.75);
    telhaEsq.rotation.z = Math.PI / 2; 
    telhaEsq.rotation.x = Math.PI / 2;  
    telhaEsq.rotation.y = Math.PI / 6;
    
    telhadoGroup.add(telhaEsq);

    const telhaDir = new THREE.Mesh(telhaGeometry, telhaMaterial);
    telhaDir.position.set(-1.45, 3.7, -0.75);
    telhaDir.rotation.z = Math.PI / 2;
    telhaDir.rotation.x = Math.PI / 2;
    telhaDir.rotation.y = -Math.PI / 6;
    telhadoGroup.add(telhaDir);

    return telhadoGroup;
}