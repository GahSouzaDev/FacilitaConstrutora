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
        // Material da janela
        const cubeBlackMaterial = new THREE.MeshPhongMaterial({
            color: 0x202020,    // Cor base branca
            specular: 0xffffff, // Reflexo branco
            shininess: 100      // Brilho alto pra parecer espelho
        });
        // Criar o loader de textura
const texture2Loader = new THREE.TextureLoader();

// Carregar a textura (substitua 'caminho/para/sua/textura.jpg' pelo caminho real da sua textura)
const pisoTexture = texture2Loader.load('piso-cozinha.png');

// Configurar propriedades da textura (opcionais)
pisoTexture.wrapS = THREE.RepeatWrapping; // Repetir textura no eixo S
pisoTexture.wrapT = THREE.RepeatWrapping; // Repetir textura no eixo T
pisoTexture.repeat.set(4, 4); // Quantas vezes a textura se repete (ajuste conforme necessário)

// Criar o material com a textura
const cubePisoMaterial = new THREE.MeshPhongMaterial({
    map: pisoTexture,   // Aplicar a textura
    color: 0xcccccc,    // Cor base (vai tingir a textura, use 0xffffff se quiser a cor original da textura)
    specular: 0xffffff, // Reflexo branco
    shininess: 100      // Brilho alto pra parecer espelho
});

//Cria textura pisos dos quartos
const texture4Loader = new THREE.TextureLoader();

// Carregar a textura (substitua 'caminho/para/sua/textura.jpg' pelo caminho real da sua textura)
const pisoTexture1 = texture4Loader.load('piso-quarto.png');

// Configurar propriedades da textura (opcionais)
pisoTexture1.wrapS = THREE.RepeatWrapping; // Repetir textura no eixo S
pisoTexture1.wrapT = THREE.RepeatWrapping; // Repetir textura no eixo T
pisoTexture1.repeat.set(4, 4); // Quantas vezes a textura se repete (ajuste conforme necessário)

// Criar o material com a textura
const cubePisoMaterial1 = new THREE.MeshPhongMaterial({
    map: pisoTexture1,   // Aplicar a textura
    color: 0xcccccc,    // Cor base (vai tingir a textura, use 0xffffff se quiser a cor original da textura)
    specular: 0xff
    , // Reflexo branco
    shininess: 100      // Brilho alto pra parecer espelho
});
       
// Criando o carregador de texturas
const textureLoader = new THREE.TextureLoader();

// Carregando a textura (substitua 'caminho/para/sua/textura.jpg' pelo caminho real da sua imagem)
const texture = textureLoader.load('tx-md2.png');

    // Criando o material com a textura
    const cubePortaMaterial = new THREE.MeshPhongMaterial({
        map: texture,       // Adiciona a textura como mapa base
        color: 0xD2B48C,    // A cor será multiplicada pela textura
        specular: 0xffffff, // Reflexo branco
        shininess: 100      // Brilho alto para efeito espelhado
    });

// Configurações adicionais da textura
texture.wrapS = THREE.RepeatWrapping;  // Repetição horizontal
texture.wrapT = THREE.RepeatWrapping;  // Repetição vertical
texture.repeat.set(1, 1);              // Quantidade de repetições (1x1 = sem repetição)

// Criando o carregador de texturas
const texture1Loader = new THREE.TextureLoader();

// Carregando a textura (substitua 'caminho/para/sua/textura.jpg' pelo caminho real da sua imagem)
const texture1 = texture1Loader.load('tx-md1.png');

    // Criando o material com a textura
    const cubePorta1Material = new THREE.MeshPhongMaterial({
        map: texture1,       // Adiciona a textura como mapa base
        color: 0x808080,    // A cor será multiplicada pela textura
        specular: 0xffffff, // Reflexo branco
        shininess: 100      // Brilho alto para efeito espelhado
    });

// Configurações adicionais da textura
texture1.wrapS = THREE.RepeatWrapping;  // Repetição horizontal
texture1.wrapT = THREE.RepeatWrapping;  // Repetição vertical
texture1.repeat.set(1, 1);              // Quantidade de repetições (1x1 = sem repetição)

// Criando o carregador de texturas
const texture3Loader = new THREE.TextureLoader();

// Carregando a textura (substitua 'caminho/para/sua/textura.jpg' pelo caminho real da sua imagem)
const texture3 = texture3Loader.load('JN1.png');

    // Criando o material com a textura
    const cubePortaJanelaMaterial = new THREE.MeshPhongMaterial({
        map: texture3,       // Adiciona a textura como mapa base
        color: 0x808080,    // A cor será multiplicada pela textura
        specular: 0x000000, // Reflexo branco
        shininess: 50      // Brilho alto para efeito espelhado
    });

// Configurações adicionais da textura
texture3.wrapS = THREE.RepeatWrapping;  // Repetição horizontal
texture3.wrapT = THREE.RepeatWrapping;  // Repetição vertical
texture3.repeat.set(1, 1);              // Quantidade de repetições (1x1 = sem repetição)
    
//------------------------Casa------------------------
//-----------------------Cozinha----------------------
    // Cria parede 1 cozinha
        // Geometria da parede encostada no muro
        const cube1Geometry = new THREE.BoxGeometry(4.6, 3, 0.15);    
        // Cria parede 1 cozinha
        const cubeCozinha1 = new THREE.Mesh(cube1Geometry, cubeMaterial);
            cubeCozinha1.position.set(-4.15, 1.1, 3.9);
    // Cria parede 2 cozinha / lavanderia
        // Geometria da parede da parte de baixo da lavanderia
        const cube2Geometry = new THREE.BoxGeometry(2, 1.1, 0.15);          
        // Cria parede 2 parte de baixo
        const cubeCozinha2 = new THREE.Mesh(cube2Geometry, cubeBaixoMaterial);
            cubeCozinha2.position.set(-6.375, 0.15, 2.83);
            cubeCozinha2.rotation.y = Math.PI / 2;
    //Cria parede das laterais da janela da cozinha (parede da cozinha com lavanderia)
        // Geometria da parede da esquerda da parede ca cozinha com lavanderia
        const cube3Geometry = new THREE.BoxGeometry(0.25, 3, 0.15);          
        // Cria parede 3 parte da esquerda
        const cubeCozinha3 = new THREE.Mesh(cube3Geometry, cubeBaixoMaterial);
            cubeCozinha3.position.set(-6.375, 1.1, 1.955);
            cubeCozinha3.rotation.y = Math.PI / 2;
        // Cria parede 4 parte da direita
        const cubeCozinha4 = new THREE.Mesh(cube3Geometry, cubeBaixoMaterial);
            cubeCozinha4.position.set(-6.375, 1.1, 3.7);
            cubeCozinha4.rotation.y = Math.PI / 2;
        // Geometria da parede da parte de cima da janela da parede da cozinha com lavanderia
        const cube5Geometry = new THREE.BoxGeometry(2, 0.85, 0.15);          
        // Cria parede de cima da janela (cozinha com lavanderia)
        const cubeCozinha5 = new THREE.Mesh(cube5Geometry, cubeBaixoMaterial);
            cubeCozinha5.position.set(-6.375, 2.175, 2.83);
            cubeCozinha5.rotation.y = Math.PI / 2;

//----------------------Vidro----------------------
    // Cria vidro da parede da cozinha com a lavanderia
         // Geometria do Vidro
         const cubeVidro1Geometry = new THREE.BoxGeometry(1.5, 1, 0.01);    
         // Vidro da cozinha com lavanderia
         const cubeVidro1 = new THREE.Mesh(cubeVidro1Geometry, cubeVidroMaterial);
             cubeVidro1.position.set(-6.375, 1.22, 2.83);
             cubeVidro1.rotation.y = Math.PI / 2;

//----------------------Janela----------------------
    // Cria Moldura da janela
         // Geometria da janela
         const cubeJanela1Geometry = new THREE.BoxGeometry(1.5, 0.05, 0.16);    
         // Cria parte de baixo da janela
         const cubeJanela1 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
             cubeJanela1.position.set(-6.375, 0.7, 2.83);
             cubeJanela1.rotation.y = Math.PI / 2;
        // Cria parte de cima da janela
        const cubeJanela2 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
            cubeJanela2.position.set(-6.375, 1.74, 2.83);
            cubeJanela2.rotation.y = Math.PI / 2;
        // Geometria da lateral da janela
        const cubeJanela2Geometry = new THREE.BoxGeometry(1.09, 0.05, 0.16);    
        // Cria parte da direita (perto da porta da lavanderia)
        const cubeJanela3 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela3.position.set(-6.375, 1.22, 2.1);
            cubeJanela3.rotation.y = Math.PI / 2;
            cubeJanela3.rotation.x = Math.PI / 2;
        // Cria parte da direita (perto da porta da lavanderia)
        const cubeJanela4 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela4.position.set(-6.375, 1.22, 3.58);
            cubeJanela4.rotation.y = Math.PI / 2;
            cubeJanela4.rotation.x = Math.PI / 2;

//----------------------Lavanderia----------------------
    //Cria parede da lavanderia
        // Geometria da parede da lavanderia
        const cubeLavanderiaGeometry = new THREE.BoxGeometry(1, 3, 0.15);    
        // Cria parede da lavanderia
        const cubeLavanderia = new THREE.Mesh(cubeLavanderiaGeometry, cubeMaterial);
            cubeLavanderia.position.set(-6.95, 1.1, 3.9);
            cubeLavanderia.rotation.y = Math.PI / 1;

//----------------------Cozinha----------------------
    //Cria parede da frente da cozinha
        // parede parte de baixo
        const cubeCozinha6 = new THREE.Mesh(cube2Geometry, cubeBaixoMaterial);
            cubeCozinha6.position.set(-1.925, 0.15, 2.83);
            cubeCozinha6.rotation.y = Math.PI / 2;
        // Cria parede 7 parte da esquerda da janela
        const cubeCozinha7 = new THREE.Mesh(cube3Geometry, cubeBaixoMaterial);
            cubeCozinha7.position.set(-1.925, 1.1, 1.955);
            cubeCozinha7.rotation.y = Math.PI / 2;
        // Cria parede 8 parte da direita da janela
        const cubeCozinha8 = new THREE.Mesh(cube3Geometry, cubeBaixoMaterial);
            cubeCozinha8.position.set(-1.925, 1.1, 3.725);
            cubeCozinha8.rotation.y = Math.PI / 2;
        // Cria parede 9 parte de cima da janela
        const cubeCozinha9 = new THREE.Mesh(cube5Geometry, cubeBaixoMaterial);
            cubeCozinha9.position.set(-1.925, 2.175, 2.83);
            cubeCozinha9.rotation.y = Math.PI / 2;

    // Cria vidro da frente da cozinha
        const cubeVidro2 = new THREE.Mesh(cubeVidro1Geometry, cubeVidroMaterial);
             cubeVidro2.position.set(-1.925, 1.22, 2.83);
             cubeVidro2.rotation.y = Math.PI / 2;

    // Cria moldura da janela da frente
        // Cria parte de baixo da janela
         const cubeJanela5 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
             cubeJanela5.position.set(-1.925, 0.7, 2.83);
             cubeJanela5.rotation.y = Math.PI / 2;
        // Cria parte de cima da janela
        const cubeJanela6 = new THREE.Mesh(cubeJanela1Geometry, cubeJanelaMaterial);
            cubeJanela6.position.set(-1.925, 1.74, 2.83);
            cubeJanela6.rotation.y = Math.PI / 2;
        // Cria parte da esquerda 
        const cubeJanela7 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela7.position.set(-1.925, 1.22, 2.1);
            cubeJanela7.rotation.y = Math.PI / 2;
            cubeJanela7.rotation.x = Math.PI / 2;
        // Cria parte da direita
        const cubeJanela8 = new THREE.Mesh(cubeJanela2Geometry, cubeJanelaMaterial);
            cubeJanela8.position.set(-1.925, 1.22, 3.58);
            cubeJanela8.rotation.y = Math.PI / 2;
            cubeJanela8.rotation.x = Math.PI / 2;
        
    // -----------Cria portas-----------              
        const cubePortaGeometry = new THREE.BoxGeometry(0.8, 2.1, 0.05);    
        // Cria porta da frente (cozinha)
        const cubePorta1 = new THREE.Mesh(cubePortaGeometry, cubePortaMaterial);
            cubePorta1.position.set(-1.925, 0.65, 1.4);
            cubePorta1.rotation.y = Math.PI / 2;
        // Cria porta da cozinha com lavanderia
        const cubePorta2 = new THREE.Mesh(cubePortaGeometry, cubePortaMaterial);
            cubePorta2.position.set(-6.375, 0.65, 1.4);
            cubePorta2.rotation.y = Math.PI / 2;

    // -----------Cria batentes-----------
         //Cria Batente de cima              
         const cubePorta1Geometry = new THREE.BoxGeometry(0.8, 0.05, 0.16);          
         const cubePorta3 = new THREE.Mesh(cubePorta1Geometry, cubePorta1Material);
             cubePorta3.position.set(-1.925, 1.725, 1.4);
             cubePorta3.rotation.y = Math.PI / 2;
         // Cria Batente das laterais            
         const cubePorta2Geometry = new THREE.BoxGeometry(0.05, 2.15, 0.16); 
    //Cria batentes laterais da porta da frente da cozinha
         // Cria batente esquerdo        
         const cubePorta4 = new THREE.Mesh(cubePorta2Geometry, cubePorta1Material);
             cubePorta4.position.set(-1.925, 0.675, 1.82);
             cubePorta4.rotation.y = Math.PI / 2;
         // Cria batente direito        
         const cubePorta5 = new THREE.Mesh(cubePorta2Geometry, cubePorta1Material);
             cubePorta5.position.set(-1.925, 0.675, 0.98);
             cubePorta5.rotation.y = Math.PI / 2;
    //Cria batentes da porta da cozinha com lavanderia
        // Cria batente de cima
        const cubePorta8 = new THREE.Mesh(cubePorta1Geometry, cubePorta1Material);
            cubePorta8.position.set(-6.375, 1.725, 1.4);
            cubePorta8.rotation.y = Math.PI / 2;
         // Cria batente esquerdo        
         const cubePorta6 = new THREE.Mesh(cubePorta2Geometry, cubePorta1Material);
             cubePorta6.position.set(-6.375, 0.675, 1.82);
             cubePorta6.rotation.y = Math.PI / 2;
         // Cria batente direito        
         const cubePorta7 = new THREE.Mesh(cubePorta2Geometry, cubePorta1Material);
             cubePorta7.position.set(-6.375, 0.675, 0.98);
             cubePorta7.rotation.y = Math.PI / 2;

    //Cria ultimas paredes da cozinha       
        // Geometria das paredes da lateral das portas
        const cubeLadoPorta1Geometry = new THREE.BoxGeometry(0.05, 3, 0.15);    
        // Cria parede da lado da porta1
        const cubeLadoPorta1 = new THREE.Mesh(cubeLadoPorta1Geometry, cubeMaterial);
            cubeLadoPorta1.position.set(-6.375, 1.1, 0.93);
            cubeLadoPorta1.rotation.y = Math.PI / 2;
        // Cria parede da lado da porta1
        const cubeLadoPorta2 = new THREE.Mesh(cubeLadoPorta1Geometry, cubeMaterial);
            cubeLadoPorta2.position.set(-1.925, 1.1, 0.93);
            cubeLadoPorta2.rotation.y = Math.PI / 2;
        // Geometria das paredes da parte de cima das portas
          const cubeCimaPorta1Geometry = new THREE.BoxGeometry(1, 0.89, 0.15);    
          // Cria parede de cima da porta da lavanderia
          const cubeCimaPorta1 = new THREE.Mesh(cubeCimaPorta1Geometry, cubeMaterial);
              cubeCimaPorta1.position.set(-6.375, 2.155, 1.41);
              cubeCimaPorta1.rotation.y = Math.PI / 2;
            // Cria parede de cima da porta da lavanderia
          const cubeCimaPorta2 = new THREE.Mesh(cubeCimaPorta1Geometry, cubeMaterial);
            cubeCimaPorta2.position.set(-1.925, 2.155, 1.41);
            cubeCimaPorta2.rotation.y = Math.PI / 2;
    // Cria piso da cozinha
        // Geometria do piso da cozinha
        const cubePisoCozinhaGeometry = new THREE.BoxGeometry(4.60, 0.01, 3);      
        const cubePisoCozinha = new THREE.Mesh(cubePisoCozinhaGeometry, cubePisoMaterial);
            cubePisoCozinha.position.set(-4.15, -0.4, 2.34);
            cubePisoCozinha.rotation.y = Math.PI / 1;
    //Cria piso lavanderia   
        // Geometria do piso
        const cubePisoLavanderiaGeometry = new THREE.BoxGeometry(1, 0.01, 1.5);      
        const cubePisoLavanderia = new THREE.Mesh(cubePisoLavanderiaGeometry, cubePisoMaterial);
            cubePisoLavanderia.position.set(-6.95, -0.4, 3.075);
            cubePisoLavanderia.rotation.y = Math.PI / 1;

//----------------------Quarto----------------------
    // Cria parede da cozinha com quarto
        // Geometria da parede
        const cubeCozinhaQuartoGeometry = new THREE.BoxGeometry(3, 3, 0.15);    
        const cubeCozinhaQuarto = new THREE.Mesh(cubeCozinhaQuartoGeometry, cubeMaterial);
            cubeCozinhaQuarto.position.set(-5.5, 1.1, 0.83);
            cubeCozinhaQuarto.rotation.y = Math.PI / 1;
    // Cria parede do quarto      
        const cubeQuarto1Geometry = new THREE.BoxGeometry(3.3, 3, 0.15);    
        // Cria parede do quarto com fundo da casa
        const cubeQuarto1 = new THREE.Mesh(cubeQuarto1Geometry, cubeMaterial);
            cubeQuarto1.position.set(-6.925, 1.1, -0.745);
            cubeQuarto1.rotation.y = Math.PI / 2;
    // Cria parede do quarto com janela
        // Geometria da parede das parte de baixo da janela
        const cubeQuartoJanela1Geometry = new THREE.BoxGeometry(3, 1.1, 0.15);    
        const cubeQuartoJanela1 = new THREE.Mesh(cubeQuartoJanela1Geometry, cubeMaterial);
            cubeQuartoJanela1.position.set(-5.5, 0.15, -2.32);
            cubeQuartoJanela1.rotation.y = Math.PI / 1;
    // Cria parede do quarto (dentro da casa)
        // Geometria da parede
        const cubeQuarto2Geometry = new THREE.BoxGeometry(2.1, 3, 0.15);    
        const cubeQuarto2 = new THREE.Mesh(cubeQuarto2Geometry, cubeMaterial);
            cubeQuarto2.position.set(-4.075, 1.1, -1.345);
            cubeQuarto2.rotation.y = Math.PI / 2;

//----------------------Banheiro----------------------
    // Cria parede do banheiro com janela
        // Geometria da parede das parte de baixo da janela
        const cubeBanheiroJanelaGeometry = new THREE.BoxGeometry(1.2, 1.9, 0.15);    
        const cubeBanheiroJanela = new THREE.Mesh(cubeBanheiroJanelaGeometry, cubeMaterial);
            cubeBanheiroJanela.position.set(-3.4, 0.55, -2.32);
            cubeBanheiroJanela.rotation.y = Math.PI / 1;        
    //Cria parede interna do quarto2
         const cubeQuarto3 = new THREE.Mesh(cubeQuarto2Geometry, cubeMaterial);
            cubeQuarto3.position.set(-2.75, 1.1, -1.345);
            cubeQuarto3.rotation.y = Math.PI / 2;

//----------------------Quarto----------------------
     // Cria parede das laterais da janela dos quartos
        const cubeQuarto4Geometry = new THREE.BoxGeometry(0.75, 3, 0.15);    
        // lateral esquerda quato 1
        const cubeQuarto4 = new THREE.Mesh(cubeQuarto4Geometry, cubeMaterial);
            cubeQuarto4.position.set(-4.375, 1.1, -2.32);
            cubeQuarto4.rotation.y = Math.PI / 1;  
        // lateral direita quato 1
        const cubeQuarto5 = new THREE.Mesh(cubeQuarto4Geometry, cubeMaterial);
            cubeQuarto5.position.set(-6.625, 1.1, -2.32);
            cubeQuarto5.rotation.y = Math.PI / 1; 

        // Cria parede em cima da janela
            const cubeQuarto6Geometry = new THREE.BoxGeometry(1.6, 0.85, 0.15);    
            // lateral esquerda quato 1
            const cubeQuarto6 = new THREE.Mesh(cubeQuarto6Geometry, cubeMaterial);
                cubeQuarto6.position.set(-5.5, 2.175, -2.32);
                cubeQuarto6.rotation.y = Math.PI / 1;  

        //Cira vidro do quarto 1
        const cubeVidro3 = new THREE.Mesh(cubeVidro1Geometry, cubeVidroMaterial);
             cubeVidro3.position.set(-5.5, 1.22, -2.32);
             cubeVidro3.rotation.y = Math.PI / 1;
        //Cria moldura da janela do quarto1
             const cubeJanela9 = new THREE.Mesh(cubeJanela1Geometry, cubeBlackMaterial);
             cubeJanela9.position.set(-5.5, 0.7, -2.32);
             cubeJanela9.rotation.y = Math.PI / 1;
        // Cria parte de cima da janela
        const cubeJanela10 = new THREE.Mesh(cubeJanela1Geometry, cubeBlackMaterial);
            cubeJanela10.position.set(-5.5, 1.74, -2.32);
            cubeJanela10.rotation.y = Math.PI / 1;
        //Cria moldura das laterias das janelas dos quartos
            const cubeJanela11 = new THREE.Mesh(cubeJanela2Geometry, cubeBlackMaterial);
            cubeJanela11.position.set(-6.25, 1.22, -2.32);
            cubeJanela11.rotation.y = Math.PI / 1;
            cubeJanela11.rotation.x = Math.PI / 1;  
            cubeJanela11.rotation.z = Math.PI / 2;   
        // Cria parte da direita (perto da porta da lavanderia)
        const cubeJanela12 = new THREE.Mesh(cubeJanela2Geometry, cubeBlackMaterial);
            cubeJanela12.position.set(-4.75, 1.22, -2.32);
            cubeJanela12.rotation.y = Math.PI / 1;
            cubeJanela12.rotation.x = Math.PI / 1;  
            cubeJanela12.rotation.z = Math.PI / 2;      
            
    // Cria porta da janela do quarto
        const cubePortaJanelaGeometry = new THREE.BoxGeometry(0.75, 1, 0.05);    
        const cubePortaJanela = new THREE.Mesh(cubePortaJanelaGeometry, cubePortaJanelaMaterial);
            cubePortaJanela.position.set(-5.125, 1.22, -2.32);
            cubePortaJanela.rotation.y = Math.PI / 1;   
    
    //Cria paredes do quarto2
        const cubeQuartoJanela2Geometry = new THREE.BoxGeometry(2.7, 1.1, 0.15);
        const cubeQuartoJanela2 = new THREE.Mesh(cubeQuartoJanela2Geometry, cubeMaterial);
            cubeQuartoJanela2.position.set(-1.35, 0.15, -2.32);
            cubeQuartoJanela2.rotation.y = Math.PI / 1;
        //parede do quarto dois (frente da casa)
        const cubeQuarto7 = new THREE.Mesh(cubeQuarto1Geometry, cubeMaterial);
            cubeQuarto7.position.set(0.075, 1.1, -0.745);
            cubeQuarto7.rotation.y = Math.PI / 2;
        //Cria paredes do quarto2
        const cubeQuarto8Geometry = new THREE.BoxGeometry(2.85, 3, 0.15);
        const cubeQuarto8 = new THREE.Mesh(cubeQuarto8Geometry, cubeMaterial);
            cubeQuarto8.position.set(-1.4, 1.1, 0.83);
            cubeQuarto8.rotation.y = Math.PI / 1;
        //Vidro do quarto dois
        const cubeVidro4 = new THREE.Mesh(cubeVidro1Geometry, cubeVidroMaterial);
            cubeVidro4.position.set(-1.35, 1.22, -2.32);
            cubeVidro4.rotation.y = Math.PI / 1;
        //Cria moldura da janela do quarto1
        const cubeJanela13 = new THREE.Mesh(cubeJanela1Geometry, cubeBlackMaterial);
            cubeJanela13.position.set(-1.35, 0.7, -2.32);
            cubeJanela13.rotation.y = Math.PI / 1;
        // Cria parte de cima da janela
        const cubeJanela14 = new THREE.Mesh(cubeJanela1Geometry, cubeBlackMaterial);
            cubeJanela14.position.set(-1.35, 1.74, -2.32);
            cubeJanela14.rotation.y = Math.PI / 1;
        //Cria moldura das laterias das janelas dos quartos
         const cubeJanela15 = new THREE.Mesh(cubeJanela2Geometry, cubeBlackMaterial);
            cubeJanela15.position.set(-0.6, 1.22, -2.32);
            cubeJanela15.rotation.y = Math.PI / 1;
            cubeJanela15.rotation.x = Math.PI / 1;  
            cubeJanela15.rotation.z = Math.PI / 2;   
        //Laterais da janela do quarto da frente da casa
         const cubeJanela16 = new THREE.Mesh(cubeJanela2Geometry, cubeBlackMaterial);
             cubeJanela16.position.set(-2.1, 1.22, -2.32);
             cubeJanela16.rotation.y = Math.PI / 1;
             cubeJanela16.rotation.x = Math.PI / 1;  
             cubeJanela16.rotation.z = Math.PI / 2; 
        const cubePortaJanela1 = new THREE.Mesh(cubePortaJanelaGeometry, cubePortaJanelaMaterial);
             cubePortaJanela1.position.set(-1.71, 1.22, -2.32);
             cubePortaJanela1.rotation.y = Math.PI / 1;
        
        //Parte de cima da janela 
        const cubeQuarto17 = new THREE.Mesh(cubeQuarto6Geometry, cubeMaterial);
             cubeQuarto17.position.set(-1.35, 2.175, -2.32);
             cubeQuarto17.rotation.y = Math.PI / 1; 
        //Laterais da janela do quarto da frente da casa
        const cubeQuarto18Geometry = new THREE.BoxGeometry(0.6, 3, 0.15);    
        // lateral esquerda quato 1
        const cubeQuarto18 = new THREE.Mesh(cubeQuarto18Geometry, cubeMaterial);
            cubeQuarto18.position.set(-2.38, 1.1, -2.32);
            cubeQuarto18.rotation.y = Math.PI / 1;  
        // lateral direita quato 1
        const cubeQuarto19 = new THREE.Mesh(cubeQuarto18Geometry, cubeMaterial);
            cubeQuarto19.position.set(-0.3, 1.1, -2.32);
            cubeQuarto19.rotation.y = Math.PI / 1; 
    //Cria piso dos quartos 
         // Cria piso da cozinha
        // Geometria do piso da cozinha
        const cubePisoQuartoGeometry = new THREE.BoxGeometry(2.78, 0.01, 3.25);      
        const cubePisoQuarto = new THREE.Mesh(cubePisoQuartoGeometry, cubePisoMaterial1);
            cubePisoQuarto.position.set(-1.35, -0.4, -0.75);
            cubePisoQuarto.rotation.y = Math.PI / 1;

    //Cria janela do banheiro
        // Cria vidro da parede da cozinha com a lavanderia
         // Geometria do Vidro
         const cubeVidro5Geometry = new THREE.BoxGeometry(0.8, 0.8, 0.01);    
         // Vidro da cozinha com lavanderia
         const cubeVidro5 = new THREE.Mesh(cubeVidro5Geometry, cubeVidroMaterial);
             cubeVidro5.position.set(-3.4, 1.9, -2.32);
             cubeVidro5.rotation.y = Math.PI / 1;

        const cubeBanheiro2Geometry = new THREE.BoxGeometry(1.3, 0.3, 0.15);          
             // Cria parede de cima da janela
        const cubeBanheiro2 = new THREE.Mesh(cubeBanheiro2Geometry, cubeBaixoMaterial);
            cubeBanheiro2.position.set(-3.4, 2.45, -2.32);
            cubeBanheiro2.rotation.y = Math.PI / 1;

        //Parede das laterais da janela do banheiro
     

        
        group.add(cubeCozinha1,cubeCozinha2, cubeCozinha3, cubeCozinha4, cubeCozinha5, cubeCozinha6, cubeCozinha7, cubeCozinha8, cubeCozinha9,     cubeVidro1, cubeVidro2, cubeJanela1, cubeJanela2, cubeJanela3, cubeJanela4, cubeJanela5, cubeJanela6, cubeJanela7, cubeJanela8, cubeLavanderia, cubePorta1, cubePorta2, cubePorta3, cubePorta4, cubePorta5, cubePorta6, cubePorta7, cubePorta8, cubeLadoPorta1, cubeLadoPorta2, cubeCimaPorta1, cubeCimaPorta2, cubePisoCozinha,      cubePisoLavanderia, cubeCozinhaQuarto, cubeQuarto1, cubeQuartoJanela1, cubeQuarto2, cubeQuarto3, cubeBanheiroJanela, cubeQuarto4, cubeQuarto5, cubeVidro3, cubeQuarto6, cubeJanela9, cubeJanela10, cubeJanela11, cubeJanela12, cubePortaJanela, cubeQuartoJanela2, cubeQuarto7, cubeQuarto8, cubeVidro4, cubeJanela13, cubeJanela14, cubeJanela15, cubeJanela16, cubePortaJanela1, cubeQuarto17, cubeQuarto18, cubeQuarto19, cubePisoQuarto, cubeVidro5, cubeBanheiro2); 
        
        return group;
    }