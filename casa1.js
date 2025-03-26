function createCasa1() {

        const group = new THREE.Group();
                    
        // Material da parede inteira
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,    // Cor base branca
            specular: 0xffffff, // Reflexo branco
            shininess: 100      // Brilho alto pra parecer espelho
        });
        // Material da parede metade cima
        const cubeCimaMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,    // Cor base branca
            specular: 0xffffff, // Reflexo branco
            shininess: 100      // Brilho alto pra parecer espelho
        });
        // Material da parede metade baixo
        const cubeBaixoMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,    // Cor base branca
            specular: 0xffffff, // Reflexo branco
            shininess: 100      // Brilho alto pra parecer espelho
        });
        const cubeVidroMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,      // Cor base branca
            specular: 0xffffff,   // Reflexo branco
            shininess: 100,       // Brilho alto pra parecer espelho
            transparent: true,    // Habilita transparência
            opacity: 0.4         // Define o nível de transparência (0 = totalmente transparente, 1 = opaco)
        });
        // Material da janela
        const cubeJanelaMaterial = new THREE.MeshPhongMaterial({
            color:0x808080,    // Cor base branca
            specular: 0xffffff, // Reflexo branco
            shininess: 100      // Brilho alto pra parecer espelho
        });
    
    // Cria parede 1 cozinha
        // Geometria da parede encostada no muro
        const cube1Geometry = new THREE.BoxGeometry(4.6, 2.8, 0.15);    
        // Cria parede 1 cozinha
        const cubeCozinha1 = new THREE.Mesh(cube1Geometry, cubeMaterial);
            cubeCozinha1.position.set(-4.15, 1, 3.9);
    // Cria parede 2 cozinha / lavanderia
        // Geometria da parede da parte de baixo da lavanderia
        const cube2Geometry = new THREE.BoxGeometry(2.85, 1.1, 0.15);          
        // Cria parede 2 parte de baixo
        const cubeCozinha2 = new THREE.Mesh(cube2Geometry, cubeBaixoMaterial);
            cubeCozinha2.position.set(-6.375, 0.15, 2.4);
            cubeCozinha2.rotation.y = Math.PI / 2;

    // Cria vidro da parede da cozinha com a lavanderia
         // Geometria do Vidro
         const cubeVidro1Geometry = new THREE.BoxGeometry(1.5, 1, 0.01);    
         // Vidro da cozinha com lavanderia
         const cubeVidro1 = new THREE.Mesh(cubeVidro1Geometry, cubeVidroMaterial);
             cubeVidro1.position.set(-6.375, 1.22, 2.4);
             cubeVidro1.rotation.y = Math.PI / 2;

    // Cria Moldura da janela
         // Geometria da janela
         const cubeJanela1Geometry = new THREE.BoxGeometry(1.5, 0.05, 0.16);    
         // Cria parte de baixo da janela
         const cubeJanela1 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
             cubeJanela1.position.set(-6.375, 0.7, 2.4);
             cubeJanela1.rotation.y = Math.PI / 2;
        // Cria parte de cima da janela
        const cubeJanela2 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
            cubeJanela2.position.set(-6.375, 1.74, 2.4);
            cubeJanela2.rotation.y = Math.PI / 2;
        // Geometria da lateral da janela
        const cubeJanela2Geometry = new THREE.BoxGeometry(1.09, 0.05, 0.16);    
        // Cria parte da direita (perto da porta da lavanderia)
        const cubeJanela3 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela3.position.set(-6.375, 1.22, 1.63);
            cubeJanela3.rotation.y = Math.PI / 2;
            cubeJanela3.rotation.x = Math.PI / 2;
                // Cria parte da direita (perto da porta da lavanderia)
        const cubeJanela4 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela4.position.set(-6.375, 1.22, 3.15);
            cubeJanela4.rotation.y = Math.PI / 2;
            cubeJanela4.rotation.x = Math.PI / 2;

        group.add(cubeCozinha1,cubeCozinha2, cubeVidro1, cubeJanela1, cubeJanela2, cubeJanela3, cubeJanela4 );
        
        return group;
    }