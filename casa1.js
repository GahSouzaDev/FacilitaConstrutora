function createCasa1() {

        const group = new THREE.Group();
        
        // Geometria do cubo
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        
        // Material espelhado
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,    // Cor base branca
            specular: 0xffffff, // Reflexo branco
            shininess: 100      // Brilho alto pra parecer espelho
        });
        
        // Cria o cubo
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(0, 0, 0);
        group.add(cube);
        
        return group;
    }