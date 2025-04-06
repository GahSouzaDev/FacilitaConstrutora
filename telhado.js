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
        color: 0xFFA07A,
        specular: 0x222222,
        shininess: 5,
        side: THREE.DoubleSide
    });

    const texture1Loader = new THREE.TextureLoader();
    const telha1Texture = texture1Loader.load('telhado.png');
    telha1Texture.wrapS = THREE.RepeatWrapping;
    telha1Texture.wrapT = THREE.RepeatWrapping;
    telha1Texture.repeat.set(0.81, 1);

    const telha1Material = new THREE.MeshPhongMaterial({
        map: telha1Texture,
        color: 0xFFA07A,
        specular: 0x222222,
        shininess: 5,
        side: THREE.DoubleSide
    });

    const texture2Loader = new THREE.TextureLoader();
    const telha2Texture = texture2Loader.load('telhado.png');
    telha2Texture.wrapS = THREE.RepeatWrapping;
    telha2Texture.wrapT = THREE.RepeatWrapping;
    telha2Texture.repeat.set(0.81, 0.65);

    const telha2Material = new THREE.MeshPhongMaterial({
        map: telha2Texture,
        color: 0xFFA07A,
        specular: 0x222222,
        shininess: 5,
        side: THREE.DoubleSide
    });

    // Cumeeira (viga central no topo)
    const vigaGeometry = new THREE.BoxGeometry(0.2, 0.2, 6.7);
    const cumeeira = new THREE.Mesh(vigaGeometry, madeiraMaterial);
    
    const novaInclinacao = Math.PI / 10; // 18 graus
    const baseCaibro = 4.4;
    const alturaOriginal = baseCaibro * Math.sin(Math.PI / 6);
    const novaAltura = baseCaibro * Math.sin(novaInclinacao);
    const diferencaAltura = alturaOriginal - novaAltura;

    cumeeira.position.set(-3.4, 4.7 - diferencaAltura, 0.75);
    telhadoGroup.add(cumeeira);

    // Caibros existentes
    const caibroGeometry = new THREE.BoxGeometry(4.4, 0.1, 0.1);
    const numCaibros = 7;

    for (let i = 0; i < numCaibros; i++) {
        const caibroEsq = new THREE.Mesh(caibroGeometry, madeiraMaterial);
        const caibroDir = new THREE.Mesh(caibroGeometry, madeiraMaterial);
        
        const zPos = -2.55 + (i * 0.6);

        caibroEsq.position.set(-5.45, 3.65 - diferencaAltura / 2, zPos);
        caibroEsq.rotation.z = novaInclinacao;
        telhadoGroup.add(caibroEsq);

        caibroDir.position.set(-1.35, 3.65 - diferencaAltura / 2, zPos);
        caibroDir.rotation.z = -novaInclinacao;
        telhadoGroup.add(caibroDir);
    }

    // Novos caibros
    const caibroEsqGeometry = new THREE.BoxGeometry(4.4, 0.1, 0.1);
    const caibroDirGeometry = new THREE.BoxGeometry(2.9, 0.1, 0.1);
    const numNovosCaibros = 5;

    for (let i = 1; i <= numNovosCaibros; i++) {
        const caibroEsq = new THREE.Mesh(caibroEsqGeometry, madeiraMaterial);
        const caibroDir = new THREE.Mesh(caibroDirGeometry, madeiraMaterial);
        
        const zPos = 1.05 + (i * 0.6);

        caibroEsq.position.set(-5.45, 3.65 - diferencaAltura / 2, zPos);
        caibroEsq.rotation.z = novaInclinacao;
        telhadoGroup.add(caibroEsq);

        caibroDir.position.set(-1.94, 3.85 - diferencaAltura / 2, zPos);
        caibroDir.rotation.z = -novaInclinacao;
        telhadoGroup.add(caibroDir);
    }

    // Telhas
    const telhaGeometry = new THREE.PlaneGeometry(3.7, 4.5);

    const telhaEsq = new THREE.Mesh(telhaGeometry, telhaMaterial);
    telhaEsq.position.set(-5.54, 3.73 - diferencaAltura / 2, -0.75);
    telhaEsq.rotation.z = Math.PI / 2;
    telhaEsq.rotation.x = Math.PI / 2;
    telhaEsq.rotation.y = novaInclinacao;
    const telha1Geometry = new THREE.PlaneGeometry(3, 4.5);
    const telhaEsq1 = new THREE.Mesh(telha1Geometry, telha1Material);
    telhaEsq1.position.set(-5.54, 3.73 - diferencaAltura / 2, 2.6);
    telhaEsq1.rotation.z = Math.PI / 2;
    telhaEsq1.rotation.x = Math.PI / 2;
    telhaEsq1.rotation.y = novaInclinacao;
    telhadoGroup.add(telhaEsq, telhaEsq1);

    const telhaDir = new THREE.Mesh(telhaGeometry, telhaMaterial);
    telhaDir.position.set(-1.26, 3.73 - diferencaAltura / 2, -0.75);
    telhaDir.rotation.z = Math.PI / 2;
    telhaDir.rotation.x = Math.PI / 2;
    telhaDir.rotation.y = -novaInclinacao;
    const telha2Geometry = new THREE.PlaneGeometry(3, 3.05);
    const telhaDir1 = new THREE.Mesh(telha2Geometry, telha2Material);
    telhaDir1.position.set(-1.95, 3.955 - diferencaAltura / 2, 2.59);
    telhaDir1.rotation.z = Math.PI / 2;
    telhaDir1.rotation.x = Math.PI / 2;
    telhaDir1.rotation.y = -novaInclinacao;
    telhadoGroup.add(telhaDir, telhaDir1);

    // Laje
    const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 100
    });

    const cubeGeometry = new THREE.BoxGeometry(3.1, 3, 0.1);
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-5.5, 2.55, -0.75);
    cube.rotation.z = Math.PI / 2;
    cube.rotation.x = Math.PI / 2;

    const cube1Geometry = new THREE.BoxGeometry(3.21, 3, 0.1);
    const cube1 = new THREE.Mesh(cube1Geometry, cubeMaterial);
    cube1.position.set(-3.5, 2.55, -0.70);
    cube1.rotation.z = Math.PI / 2;
    cube1.rotation.x = Math.PI / 2;

    const cube2 = new THREE.Mesh(cube1Geometry, cubeMaterial);
    cube2.position.set(-1.5, 2.55, -0.70);
    cube2.rotation.z = Math.PI / 2;
    cube2.rotation.x = Math.PI / 2;

    const cube2Geometry = new THREE.BoxGeometry(3.1, 4.5, 0.1);
    const cube3 = new THREE.Mesh(cube2Geometry, cubeMaterial);
    cube3.position.set(-4.2, 2.55, 2.3);
    cube3.rotation.z = Math.PI / 2;
    cube3.rotation.x = Math.PI / 2;

    const cube4Geometry = new THREE.BoxGeometry(3.3, 0.15, 0.5);
    const cube4 = new THREE.Mesh(cube4Geometry, cubeMaterial);
    cube4.position.set(0.075, 2.45, -0.745);
    cube4.rotation.z = Math.PI / 2;
    cube4.rotation.x = Math.PI / 2;

    const cube5 = new THREE.Mesh(cube4Geometry, cubeMaterial);
    cube5.position.set(-6.925, 2.45, -0.745);
    cube5.rotation.z = Math.PI / 2;
    cube5.rotation.x = Math.PI / 2;

    const cube6Geometry = new THREE.BoxGeometry(3.1, 0.15, 1);
    const cube6 = new THREE.Mesh(cube6Geometry, cubeMaterial);
    cube6.position.set(-1.925, 2.875, 2.425);
    cube6.rotation.z = Math.PI / 2;
    cube6.rotation.x = Math.PI / 2;

    const cube7Geometry = new THREE.BoxGeometry(0.15, 2.15, 0.3);
    const cube7 = new THREE.Mesh(cube7Geometry, cubeMaterial);
    cube7.position.set(-0.925, 2.891, 0.83);
    cube7.rotation.z = Math.PI / 2;
    cube7.rotation.x = Math.PI / 2;
    cube7.rotation.y = -novaInclinacao;

    const cube8Geometry = new THREE.BoxGeometry(0.15, 1.5, 0.25);
    const cube8 = new THREE.Mesh(cube8Geometry, cubeMaterial);
    cube8.position.set(-1.2, 2.65, 0.83);
    cube8.rotation.z = Math.PI / 2;
    cube8.rotation.x = Math.PI / 2;

    const cube9Geometry = new THREE.BoxGeometry(0.15, 1, 0.37);
    const cube9 = new THREE.Mesh(cube9Geometry, cubeMaterial);
    cube9.position.set(-1.4, 2.85, 0.83);
    cube9.rotation.z = Math.PI / 2;
    cube9.rotation.x = Math.PI / 2;

    const cube10Geometry = new THREE.BoxGeometry(0.15, 0.15, 0.8);
    const cube10 = new THREE.Mesh(cube10Geometry, cubeMaterial);
    cube10.position.set(-1.925, 2.975, 0.83);
    cube10.rotation.z = Math.PI / 2;
    cube10.rotation.x = Math.PI / 2;

    const cube11Geometry = new THREE.BoxGeometry(3.1, 0.15, 0.5);
    const cube11 = new THREE.Mesh(cube11Geometry, cubeMaterial);
    cube11.position.set(-6.375, 2.625, 2.425);
    cube11.rotation.z = Math.PI / 2;
    cube11.rotation.x = Math.PI / 2;

    const cube12Geometry = new THREE.BoxGeometry(0.15, 0.6, 0.3);
    const cube12 = new THREE.Mesh(cube12Geometry, cubeMaterial);
    cube12.position.set(-6.625, 2.635, 0.83);
    cube12.rotation.z = Math.PI / 2;
    cube12.rotation.x = Math.PI / 2;
    cube12.rotation.y = novaInclinacao;

    const cube13Geometry = new THREE.BoxGeometry(0.15, 0.15, 0.3);
    const cube13 = new THREE.Mesh(cube13Geometry, cubeMaterial);
    cube13.position.set(-6.375, 2.725, 0.83);
    cube13.rotation.z = Math.PI / 2;
    cube13.rotation.x = Math.PI / 2;

    const cube14Geometry = new THREE.BoxGeometry(0.15, 4.3, 0.3);
    const cube14 = new THREE.Mesh(cube14Geometry, cubeMaterial);
    cube14.position.set(-4.15, 2.725, 3.9);
    cube14.rotation.z = Math.PI / 2;
    cube14.rotation.x = Math.PI / 2;

    const cube15Geometry = new THREE.BoxGeometry(0.15, 4, 0.3);
    const cube15 = new THREE.Mesh(cube15Geometry, cubeMaterial);
    cube15.position.set(-3.95, 2.875, 3.9);
    cube15.rotation.z = Math.PI / 2;
    cube15.rotation.x = Math.PI / 2;

    const cube16Geometry = new THREE.BoxGeometry(0.15, 3, 0.3);
    const cube16 = new THREE.Mesh(cube16Geometry, cubeMaterial);
    cube16.position.set(-5.95, 2.875, 3.9);
    cube16.rotation.z = Math.PI / 2;
    cube16.rotation.x = Math.PI / 2;
    cube16.rotation.y = novaInclinacao;

    const cube17 = new THREE.Mesh(cube16Geometry, cubeMaterial);
    cube17.position.set(-4.75, 3.265, 3.9);
    cube17.rotation.z = Math.PI / 2;
    cube17.rotation.x = Math.PI / 2;
    cube17.rotation.y = novaInclinacao;

    const cube18Geometry = new THREE.BoxGeometry(0.15, 3.25, 0.35);
    const cube18 = new THREE.Mesh(cube18Geometry, cubeMaterial);
    cube18.position.set(-3.55, 3.1, 3.9);
    cube18.rotation.z = Math.PI / 2;
    cube18.rotation.x = Math.PI / 2;

    const cube19Geometry = new THREE.BoxGeometry(0.15, 1.675, 0.3);
    const cube19 = new THREE.Mesh(cube19Geometry, cubeMaterial);
    cube19.position.set(-2.7, 3.5, 3.9);
    cube19.rotation.z = Math.PI / 2;
    cube19.rotation.x = Math.PI / 2;
    cube19.rotation.y = -novaInclinacao;

    const cube20Geometry = new THREE.BoxGeometry(0.15, 1.78, 0.65);
    const cube20 = new THREE.Mesh(cube20Geometry, cubeMaterial);
    cube20.position.set(-3.35, 3.25, 3.9);
    cube20.rotation.z = Math.PI / 2;
    cube20.rotation.x = Math.PI / 2;

    const cube21Geometry = new THREE.BoxGeometry(0.15, 3.75, 0.3);
    const cube21 = new THREE.Mesh(cube21Geometry, cubeMaterial);
    cube21.position.set(-1.7, 3.135, -2.32);
    cube21.rotation.z = Math.PI / 2;
    cube21.rotation.x = Math.PI / 2;
    cube21.rotation.y = -novaInclinacao;

    const cube22Geometry = new THREE.BoxGeometry(0.15, 3.75, 0.3);
    const cube22 = new THREE.Mesh(cube22Geometry, cubeMaterial);
    cube22.position.set(-5.15, 3.135, -2.32);
    cube22.rotation.z = Math.PI / 2;
    cube22.rotation.x = Math.PI / 2;
    cube22.rotation.y = novaInclinacao;

    const cube23Geometry = new THREE.BoxGeometry(0.15, 5.8, 0.4);
    const cube23 = new THREE.Mesh(cube23Geometry, cubeMaterial);
    cube23.position.set(-3.45, 2.7, -2.32);
    cube23.rotation.z = Math.PI / 2;
    cube23.rotation.x = Math.PI / 2;

    const cube24Geometry = new THREE.BoxGeometry(0.15, 4.5, 0.4);
    const cube24 = new THREE.Mesh(cube24Geometry, cubeMaterial);
    cube24.position.set(-3.45, 2.9, -2.32);
    cube24.rotation.z = Math.PI / 2;
    cube24.rotation.x = Math.PI / 2;

    const cube25Geometry = new THREE.BoxGeometry(0.15, 3, 0.4);
    const cube25 = new THREE.Mesh(cube25Geometry, cubeMaterial);
    cube25.position.set(-3.45, 3.1, -2.32);
    cube25.rotation.z = Math.PI / 2;
    cube25.rotation.x = Math.PI / 2;

    const cube26Geometry = new THREE.BoxGeometry(0.15, 1.5, 0.4);
    const cube26 = new THREE.Mesh(cube26Geometry, cubeMaterial);
    cube26.position.set(-3.45, 3.4, -2.32);
    cube26.rotation.z = Math.PI / 2;
    cube26.rotation.x = Math.PI / 2;

    // Adiciona lajes ao grupo
    telhadoGroup.add(cube, cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24, cube25, cube26);

    // Função para criar o painel solar
    function createPainelSolar() {
        const painelGroup = new THREE.Group();
    
        // Carregar textura para o painel solar
        const painelTextureLoader = new THREE.TextureLoader();
        const painelTexture = painelTextureLoader.load('painel-solar.png'); // Substitua pelo nome do seu arquivo
        painelTexture.wrapS = THREE.RepeatWrapping;
        painelTexture.wrapT = THREE.RepeatWrapping;
        painelTexture.repeat.set(1, 1); // Ajuste a repetição conforme necessário

        // Material reflexivo com textura
        const painelMaterial = new THREE.MeshPhongMaterial({
            map: painelTexture,         // Textura aplicada
            color: 0x4682B4,           // Cor base
            specular: 0xffffff,        // Reflexo branco intenso
            shininess: 100,            // Alto brilho
            reflectivity: 1,           // Máxima refletividade
            side: THREE.DoubleSide
        });
        const bordaMaterial = new THREE.MeshPhongMaterial({
            color: 0x333333,
            specular: 0x555555,
            shininess: 50
        });
    
        const larguraTotal = 1.65;
        const alturaTotal = 1;
        const espessuraBorda = 0.05;
        const espessuraCentro = 0.02;
    
        const bordaTopGeometry = new THREE.BoxGeometry(larguraTotal, espessuraBorda, espessuraBorda);
        const bordaTop = new THREE.Mesh(bordaTopGeometry, bordaMaterial);
        bordaTop.position.set(0, alturaTotal/2 - espessuraBorda/2, 0);
        painelGroup.add(bordaTop);
    
        const bordaBottomGeometry = new THREE.BoxGeometry(larguraTotal, espessuraBorda, espessuraBorda);
        const bordaBottom = new THREE.Mesh(bordaBottomGeometry, bordaMaterial);
        bordaBottom.position.set(0, -alturaTotal/2 + espessuraBorda/2, 0);
        painelGroup.add(bordaBottom);
    
        const bordaLeftGeometry = new THREE.BoxGeometry(espessuraBorda, alturaTotal - 2 * espessuraBorda, espessuraBorda);
        const bordaLeft = new THREE.Mesh(bordaLeftGeometry, bordaMaterial);
        bordaLeft.position.set(-larguraTotal/2 + espessuraBorda/2, 0, 0);
        painelGroup.add(bordaLeft);
    
        const bordaRightGeometry = new THREE.BoxGeometry(espessuraBorda, alturaTotal - 2 * espessuraBorda, espessuraBorda);
        const bordaRight = new THREE.Mesh(bordaRightGeometry, bordaMaterial);
        bordaRight.position.set(larguraTotal/2 - espessuraBorda/2, 0, 0);
        painelGroup.add(bordaRight);
    
        const centroGeometry = new THREE.BoxGeometry(
            larguraTotal - 2 * espessuraBorda, 
            alturaTotal - 2 * espessuraBorda, 
            espessuraCentro
        );
        const centro = new THREE.Mesh(centroGeometry, painelMaterial);
        centro.position.set(0, 0, 0);
        painelGroup.add(centro);
    
        return painelGroup;
    }

    // Função para adicionar os painéis ao telhado
    function adicionarPaineisAoTelhado(telhadoGroup) {
        const painel1 = createPainelSolar();
        const painel2 = createPainelSolar();
        const painel3 = createPainelSolar();
    
        painel1.position.set(-1.9, 3.55, -1);
        painel1.rotation.x = Math.PI /2;   
        painel1.rotation.y = Math.PI /-10;    
    
        painel2.position.set(-1.9, 3.55, 0.5);
        painel2.rotation.x = Math.PI /2;   
        painel2.rotation.y = Math.PI /-10;    
    
        painel3.position.set(-1.9, 3.55, 2);
        painel3.rotation.x = Math.PI /2;   
        painel3.rotation.y = Math.PI /-10;    
    
        telhadoGroup.add(painel1, painel2, painel3);
    }

    // Chama a função para adicionar os painéis
    adicionarPaineisAoTelhado(telhadoGroup);

    return telhadoGroup;
}