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
    telhaTexture.repeat.set(1, 1);

    // Material das telhas cerâmicas com textura
    const telhaMaterial = new THREE.MeshPhongMaterial({
        map: telhaTexture,
        color: 0xB22222,
        specular: 0x222222,
        shininess: 5,
        side: THREE.DoubleSide
    });

     // Carregar textura para as telhas
     const texture1Loader = new THREE.TextureLoader();
     const telha1Texture = texture1Loader.load('telhado.png');
     telha1Texture.wrapS = THREE.RepeatWrapping;
     telha1Texture.wrapT = THREE.RepeatWrapping;
     telha1Texture.repeat.set(0.9, 1);
 
     // Material das telhas cerâmicas com textura
     const telha1Material = new THREE.MeshPhongMaterial({
         map: telha1Texture,
         color: 0xB22222,
         specular: 0x222222,
         shininess: 5,
         side: THREE.DoubleSide
     });

    // Cumeeira (viga central no topo)
    const vigaGeometry = new THREE.BoxGeometry(0.2, 0.2, 6.7);
    const cumeeira = new THREE.Mesh(vigaGeometry, madeiraMaterial);
    
    // Ajuste da altura da cumeeira proporcional à nova inclinação
    const novaInclinacao = Math.PI / 10; // 18 graus
    const baseCaibro = 4.4; // Comprimento do caibro esquerdo
    const alturaOriginal = baseCaibro * Math.sin(Math.PI / 6); // Altura com 30 graus
    const novaAltura = baseCaibro * Math.sin(novaInclinacao); // Altura com 18 graus
    const diferencaAltura = alturaOriginal - novaAltura;

    cumeeira.position.set(-3.4, 4.7 - diferencaAltura, 0.75); // Ajuste da altura
    telhadoGroup.add(cumeeira);

    // Caibros existentes (vigas inclinadas)
    const caibroGeometry = new THREE.BoxGeometry(4.4, 0.1, 0.1);
    const numCaibros = 7;

    for (let i = 0; i < numCaibros; i++) {
        const caibroEsq = new THREE.Mesh(caibroGeometry, madeiraMaterial);
        const caibroDir = new THREE.Mesh(caibroGeometry, madeiraMaterial);
        
        const zPos = -2.55 + (i * 0.6);

        // Caibro esquerdo
        caibroEsq.position.set(-5.45, 3.65 - diferencaAltura / 2, zPos); // Ajuste proporcional
        caibroEsq.rotation.z = novaInclinacao; // Nova inclinação
        telhadoGroup.add(caibroEsq);

        // Caibro direito
        caibroDir.position.set(-1.35, 3.65 - diferencaAltura / 2, zPos); // Ajuste proporcional
        caibroDir.rotation.z = -novaInclinacao; // Nova inclinação
        telhadoGroup.add(caibroDir);
    }

    // Novos caibros (5 adicionais com tamanhos diferentes)
    const caibroEsqGeometry = new THREE.BoxGeometry(4.4, 0.1, 0.1);
    const caibroDirGeometry = new THREE.BoxGeometry(2.9, 0.1, 0.1);
    const numNovosCaibros = 5;

    for (let i = 1; i <= numNovosCaibros; i++) {
        const caibroEsq = new THREE.Mesh(caibroEsqGeometry, madeiraMaterial);
        const caibroDir = new THREE.Mesh(caibroDirGeometry, madeiraMaterial);
        
        const zPos = 1.05 + (i * 0.6);

        // Caibro esquerdo
        caibroEsq.position.set(-5.45, 3.65 - diferencaAltura / 2, zPos);
        caibroEsq.rotation.z = novaInclinacao;
        telhadoGroup.add(caibroEsq);

        // Caibro direito
        caibroDir.position.set(-1.94, 3.85 - diferencaAltura / 2, zPos);
        caibroDir.rotation.z = -novaInclinacao;
        telhadoGroup.add(caibroDir);
    }

    // Telhas (duas águas)
    const telhaGeometry = new THREE.PlaneGeometry(3.7, 4.5);

    const telhaEsq = new THREE.Mesh(telhaGeometry, telhaMaterial);
    telhaEsq.position.set(-5.5, 3.73 - diferencaAltura / 2, -0.75);
    telhaEsq.rotation.z = Math.PI / 2;
    telhaEsq.rotation.x = Math.PI / 2;
    telhaEsq.rotation.y = novaInclinacao; // Nova inclinação
    const telha1Geometry = new THREE.PlaneGeometry(3, 4.5);
    const telhaEsq1 = new THREE.Mesh(telha1Geometry, telha1Material);
    telhaEsq1.position.set(-5.5, 3.73 - diferencaAltura / 2, 2.6);
    telhaEsq1.rotation.z = Math.PI / 2;
    telhaEsq1.rotation.x = Math.PI / 2;
    telhaEsq1.rotation.y = novaInclinacao; // Nova inclinação
    telhadoGroup.add(telhaEsq, telhaEsq1);

    const telhaDir = new THREE.Mesh(telhaGeometry, telhaMaterial);
    telhaDir.position.set(-1.3, 3.73 - diferencaAltura / 2, -0.75);
    telhaDir.rotation.z = Math.PI / 2;
    telhaDir.rotation.x = Math.PI / 2;
    telhaDir.rotation.y = -novaInclinacao; // Nova inclinação
 
    telhadoGroup.add(telhaDir);

    return telhadoGroup;
}