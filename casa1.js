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
            opacity: 0.5         // Define o nível de transparência (0 = totalmente transparente, 1 = opaco)
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
        const cube2Geometry = new THREE.BoxGeometry(2., 1.1, 0.15);          
        // Cria parede 2 parte de baixo
        const cubeCozinha2 = new THREE.Mesh(cube2Geometry, cubeBaixoMaterial);
            cubeCozinha2.position.set(-6.375, 0.15, 2.4);
            cubeCozinha2.rotation.y = Math.PI / 2;
    //Cria parede das laterais da janela da cozinha (parede da cozinha com lavanderia)
        // Geometria da parede da esquerda da parede ca cozinha com lavanderia
        const cube3Geometry = new THREE.BoxGeometry(0.5, 2.8, 0.15);          
        // Cria parede 3 parte da esquerda
        const cubeCozinha3 = new THREE.Mesh(cube3Geometry, cubeBaixoMaterial);
            cubeCozinha3.position.set(-6.375, 1, 1.625);
            cubeCozinha3.rotation.y = Math.PI / 2;
        // Cria parede 4 parte da direita
        const cubeCozinha4 = new THREE.Mesh(cube3Geometry, cubeBaixoMaterial);
            cubeCozinha4.position.set(-6.375, 1, 3.575);
            cubeCozinha4.rotation.y = Math.PI / 2;
        // Geometria da parede da parte de cima da janela da parede da cozinha com lavanderia
        const cube5Geometry = new THREE.BoxGeometry(2, 0.65, 0.15);          
        // Cria parede de cima da janela (cozinha com lavanderia)
        const cubeCozinha5 = new THREE.Mesh(cube5Geometry, cubeBaixoMaterial);
            cubeCozinha5.position.set(-6.375, 2.075, 2.4);
            cubeCozinha5.rotation.y = Math.PI / 2;

    // Cria vidro da parede da cozinha com a lavanderia
         // Geometria do Vidro
         const cubeVidro1Geometry = new THREE.BoxGeometry(1.5, 1, 0.01);    
         // Vidro da cozinha com lavanderia
         const cubeVidro1 = new THREE.Mesh(cubeVidro1Geometry, cubeVidroMaterial);
             cubeVidro1.position.set(-6.375, 1.22, 2.6);
             cubeVidro1.rotation.y = Math.PI / 2;

    // Cria Moldura da janela
         // Geometria da janela
         const cubeJanela1Geometry = new THREE.BoxGeometry(1.5, 0.05, 0.16);    
         // Cria parte de baixo da janela
         const cubeJanela1 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
             cubeJanela1.position.set(-6.375, 0.7, 2.6);
             cubeJanela1.rotation.y = Math.PI / 2;
        // Cria parte de cima da janela
        const cubeJanela2 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
            cubeJanela2.position.set(-6.375, 1.74, 2.6);
            cubeJanela2.rotation.y = Math.PI / 2;
        // Geometria da lateral da janela
        const cubeJanela2Geometry = new THREE.BoxGeometry(1.09, 0.05, 0.16);    
        // Cria parte da direita (perto da porta da lavanderia)
        const cubeJanela3 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela3.position.set(-6.375, 1.22, 1.86);
            cubeJanela3.rotation.y = Math.PI / 2;
            cubeJanela3.rotation.x = Math.PI / 2;
        // Cria parte da direita (perto da porta da lavanderia)
        const cubeJanela4 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela4.position.set(-6.375, 1.22, 3.33);
            cubeJanela4.rotation.y = Math.PI / 2;
            cubeJanela4.rotation.x = Math.PI / 2;

    //Cria parede da lavanderia
        // Geometria da parede da lavanderia
        const cubeLavanderiaGeometry = new THREE.BoxGeometry(1, 2.8, 0.15);    
        // Cria parede da lavanderia
        const cubeLavanderia = new THREE.Mesh(cubeLavanderiaGeometry, cubeMaterial);
            cubeLavanderia.position.set(-6.95, 1, 3.9);
            cubeLavanderia.rotation.y = Math.PI / 1;

    //Cria parede da frente da cozinha
        // parede parte de baixo
        const cubeCozinha6 = new THREE.Mesh(cube2Geometry, cubeBaixoMaterial);
            cubeCozinha6.position.set(-1.925, 0.15, 2.4);
            cubeCozinha6.rotation.y = Math.PI / 2;
        // Cria parede 7 parte da esquerda da janela
        const cubeCozinha7 = new THREE.Mesh(cube3Geometry, cubeBaixoMaterial);
            cubeCozinha7.position.set(-1.925, 1, 1.625);
            cubeCozinha7.rotation.y = Math.PI / 2;
        // Cria parede 8 parte da direita da janela
        const cubeCozinha8 = new THREE.Mesh(cube3Geometry, cubeBaixoMaterial);
            cubeCozinha8.position.set(-1.925, 1, 3.575);
            cubeCozinha8.rotation.y = Math.PI / 2;
        // Cria parede 9 parte de cima da janela
        const cubeCozinha9 = new THREE.Mesh(cube5Geometry, cubeBaixoMaterial);
            cubeCozinha9.position.set(-1.925, 2.075, 2.4);
            cubeCozinha9.rotation.y = Math.PI / 2;

    // Cria vidro da frente da cozinha
        const cubeVidro2 = new THREE.Mesh(cubeVidro1Geometry, cubeVidroMaterial);
             cubeVidro2.position.set(-1.925, 1.22, 2.6);
             cubeVidro2.rotation.y = Math.PI / 2;

    // Cria moldura da janela da frente
        // Cria parte de baixo da janela
         const cubeJanela5 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
             cubeJanela5.position.set(-1.925, 0.7, 2.6);
             cubeJanela5.rotation.y = Math.PI / 2;
        // Cria parte de cima da janela
        const cubeJanela6 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
            cubeJanela6.position.set(-1.925, 1.74, 2.6);
            cubeJanela6.rotation.y = Math.PI / 2;
        // Cria parte da esquerda 
        const cubeJanela7 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela7.position.set(-1.925, 1.22, 1.86);
            cubeJanela7.rotation.y = Math.PI / 2;
            cubeJanela7.rotation.x = Math.PI / 2;
        // Cria parte da direita (perto da porta da lavanderia)
        const cubeJanela8 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela8.position.set(-1.925, 1.22, 3.33);
            cubeJanela8.rotation.y = Math.PI / 2;
            cubeJanela8.rotation.x = Math.PI / 2;
            

        group.add(cubeCozinha1,cubeCozinha2, cubeCozinha3, cubeCozinha4, cubeCozinha5, cubeCozinha6, cubeCozinha7, cubeCozinha8, cubeCozinha9,     cubeVidro1, cubeVidro2, cubeJanela1, cubeJanela2, cubeJanela3, cubeJanela4, cubeJanela5, cubeJanela6, cubeJanela7, cubeJanela8, cubeLavanderia );
        
        return group;
    }