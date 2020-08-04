var fase=1;
var espaco=0;
var errou=0;
var contagem=0;
var ultimaPalavra="";
var tela=0;

//Variaveis para Menu
var largura=200;
var altura=50
var xMenu=190;
var yMenu1=175;
var yMenu2=275;
var yMenu3=375;

//Armazenando de palavras
let palavras =[];

palavras[0] = "sensato";
palavras[1] = "comilao";
palavras[2] = "gentil";
palavras[3] = "chorosa";
palavras[4] = "sonhador";
palavras[5] = "pequenos";
palavras[6] = "brincalhao";
palavras[7] = "risonho";
palavras[8] = "barrigudo";
palavras[9] = "sossegado";
palavras[10]="riquinho";
palavras[11]="desenhista";


//POSIÇÃO DAS PALAVRAS
let sensato=[];
let comilao=[];
let gentil=[];
let chorosa=[];
let sonhador=[];
let pequenos=[];
let brincalhao=[];
let risonho=[];
let barrigudo=[];
let sossegado=[];
let riquinho=[];
let desenhista=[];

//AUDIOS E IMAGENS DO JOGO 
let audio1;
let audio2;
let audio3;
let img;
let img2;
let aluno;
let educador;

//Função para carregamento de imagem/audio

	function preload() {
audio1=createAudio('abertura.mp3');
audio2=createAudio('perdeu.mp3');
audio3=createAudio('ganhou.mp3');
img=loadImage('cabeça.png');
img2=loadImage('forca1.png');
aluno=loadImage('r.png');
educador=loadImage('t.png');

}
//Função que executa apenas uma vez
function setup() {
  //Criação da tela que vamos trablhar 
  createCanvas(600, 600);
 //AUDIO ABERTURA
 audio1.loop(true);
  
}
//Função que executa repetidas  uma vez
function draw() {
	
   
   if(tela==1){
  //Cor da tela do jogo
  background('#FA58D0');
   fill('#151515');
   stroke(20);
  //Tela do jogo
    textSize(45);
    text("SALVE",400,50);
   //Fases do jogo
    textSize(20);
    text("Fase: "+fase ,10,30);
    text("Ultima palavra: "+ultimaPalavra,10,50);

    //Desenho da forca
    fill('#F7F8E0');
  rect(200, 160, 30, 300);
  rect(200,160,200,30);
  rect(120,450,200,30);
  line(390, 190, 390, 230);
  line(390, 190, 230, 230);

  if(fase==2){

  	ultimaPalavra="Sensato";
  }
  if(fase==3){

  	ultimaPalavra="Comilão";

  }
  if(fase==4){

  	ultimaPalavra="Gentil";
  }
  if(fase==5){

  	ultimaPalavra="Chorosa";
  }
  if(fase==6){

  	ultimaPalavra="Sonhador";
  }
  if(fase==7){

  	ultimaPalavra="Pequenos";
  }
  if(fase==8){

  	ultimaPalavra="Brincalhão";
  }
  if(fase==9){

  	ultimaPalavra="Risonho";
  }
  if(fase==10){

  	ultimaPalavra="Barrigudo";
  }
  if(fase==11){

  	ultimaPalavra="Sossegado";
  }
  if(fase==12){

  	ultimaPalavra="Riquinho";
  }
  if(fase==13){
  	tela=2;

  }
  if(errou==6){
  	tela=3;

  }

  //Boneco de palito
  //Cabeça
if(errou>0){

  	image(img,360, 230, 60, 60);



}
 //Tronco
if(errou>1){
	
 	line(390, 280, 390, 400);

}

  
 //Braço Esquerdo
if(errou>2){

  	line(390, 290, 310, 330);
  
}
  //Braço Direito
 if(errou>3){

  	line(390, 290, 460, 330);

}
  //Perna Esquerda
if(errou>4){


  line(390, 400, 310, 430);


}
  //Perna Direita
if(errou>5){

  line(390, 400, 460, 430);


}

  //SENSATO
	if(espaco==0){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);

		if(sensato[0]=="true"){
			fill('#1C1C1C')
			text("S",190,545);
			text("s",295,545);


		}
		if(sensato[1]=="true"){
			fill('#1C1C1C')
			text("e",225,545);


		}

		if(sensato[2]=="true"){
			fill('#1C1C1C')
			text("n",260,545);


		}
		if(sensato[4]=="true"){
			fill('#1C1C1C')
			text("a",330,545);


		}

		if(sensato[5]=="true"){
			fill('#1C1C1C')
			text("t",365,545);


		}
		if(sensato[6]=="true"){
			fill('#1C1C1C')
			text("o",400,545);


		}

	}
	
	//COMILÃO
	if(espaco==1){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);

		if(comilao[0]=="true"){                                               
		    fill('#1C1C1C');                                                                 
			text("C",190,545);
			

		}
		if(comilao[1]=="true"){
			fill('#1C1C1C')
			text("o",225,545);
			text("o",400,545);

		}

		if(comilao[2]=="true"){
			fill('#1C1C1C')
			text("m",260,545);
			
		}

		if(comilao[3]=="true"){
			fill('#1C1C1C')
			text("i",295,545);
		
		}

		if(comilao[4]=="true"){
			fill('#1C1C1C')
			text("l",330,545);
		
		}
		if(comilao[5]=="true"){
			fill('#1C1C1C')
			text("ã",365,545);
		
		}


	}

	//GENTIL
	if(espaco==2){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);

		if(gentil[0]=="true"){
			fill('#1C1C1C');
			text("G",190,545);
		}
		if(gentil[1]=="true"){
			fill('#1C1C1C');
			text("e",225,545);
		}
		if(gentil[2]=="true"){
			fill('#1C1C1C');
			text("n",260,545);
			
		}
		if(gentil[3]=="true"){
			fill('#1C1C1C');
			text("t",295,545);
			
		}
		if(gentil[4]=="true"){
			fill('#1C1C1C');
			text("i",330,545);
		}
		if(gentil[5]=="true"){
			fill('#1C1C1C');
			text("l",365,545);
		}
	}
	
	//CHOROSA
	if(espaco==3){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);

		if(chorosa[0]=="true"){
			fill('#1C1C1C')
			text("C",190,545);


		}
		if(chorosa[1]=="true"){
			fill('#1C1C1C')
			text("h",225,545);


		}
		if(chorosa[2]=="true"){
			fill('#1C1C1C')
			text("o",260,545);
			text("o",330,545);


		}

		if(chorosa[3]=="true"){
			fill('#1C1C1C')
			text("r",295,545);


		}
		if(chorosa[5]=="true"){
			fill('#1C1C1C')
			text("s",365,545);


		}
		if(chorosa[6]=="true"){
			fill('#1C1C1C')
			text("a",400,545);


		}

	}

	//SONHADOR
	if(espaco==4){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);
		rect(425,550,30,10);

		if(sonhador[0]=="true"){
			fill('#1C1C1C');
			text("S",190,545);
			
		}
		if(sonhador[1]=="true"){
			fill('#1C1C1C');
			text("o",225,545);
			text("o",400,545);


		}
		if(sonhador[2]=="true"){
			fill('#1C1C1C');
			text("n",260,545);


		}
		if(sonhador[3]=="true"){
			fill('#1C1C1C');
			text("h",295,545);
			
		}

		if(sonhador[4]=="true"){
			fill('#1C1C1C');
			text("a",330,545);
			
		}
		if(sonhador[5]=="true"){
			fill('#1C1C1C');
			text("d",365,545);
			
		}
		if(sonhador[7]=="true"){
			fill('#1C1C1C');
			text("r",435,545);
			
		}

	}
		


	//PEQUENOS
	if(espaco==5){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);
		rect(425,550,30,10);

		if(pequenos[0]=="true"){
			fill('#1C1C1C')
			text("P",190,545);


		}
		if(pequenos[1]=="true"){
			fill('#1C1C1C')
			text("e",225,545);
			text("e",330,545);


		}
		if(pequenos[2]=="true"){
			fill('#1C1C1C')
			text("q",260,545);


		}
		if(pequenos[3]=="true"){
			fill('#1C1C1C')
			text("u",295,545);


		}
		if(pequenos[5]=="true"){
			fill('#1C1C1C')
			text("n",365,545);


		}
		if(pequenos[6]=="true"){
			fill('#1C1C1C')
			text("o",400,545);


		}

		if(pequenos[7]=="true"){
			fill('#1C1C1C')
			text("s",435,545);
		}

	}

	//Brincalhão
	if(espaco==6){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);
		rect(425,550,30,10);
		rect(460,550,30,10);
		rect(495,550,30,10);

		if(brincalhao[0]=="true"){
			fill('#1C1C1C')
			text("B",190,545);

		}
		if(brincalhao[1]=="true"){
			fill('#1C1C1C')
			text("r",225,545);

		}
		if(brincalhao[2]=="true"){
			fill('#1C1C1C')
			text("i",260,545);


		}
		if(brincalhao[3]=="true"){
			fill('#1C1C1C')
			text("n",295,545);


		}
		if(brincalhao[4]=="true"){
			fill('#1C1C1C')
			text("c",330,545);

		}
		if(brincalhao[5]=="true"){
			fill('#1C1C1C')
			text("a",365,545);
			text("ã",470,545)


		}

		if(brincalhao[6]=="true"){
			fill('#1C1C1C')
			text("l",400,545);
		}
		if(brincalhao[7]=="true"){
			fill('#1C1C1C')
			text("h",435,545);
		}
		if(brincalhao[9]=="true"){
			fill('#1C1C1C')
			text("o",505,545);
		}

	}

	//RISONHO
	if(espaco==7){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);

		if(risonho[0]=="true"){
			fill('#1C1C1C')
			text("R",190,545);


		}
		if(risonho[1]=="true"){
			fill('#1C1C1C')
			text("i",225,545);
			
		}
		if(risonho[2]=="true"){
			fill('#1C1C1C')
			text("s",260,545);

		}
		if(risonho[3]=="true"){
			fill('#1C1C1C')
			text("o",295,545);
			text("o",400,545);

		}
		if(risonho[4]=="true"){
			fill('#1C1C1C')
			text("n",330,545);

		}
		if(risonho[5]=="true"){
			fill('#1C1C1C')
			text("h",365,545);


		}

	}

	//Barrigudo
	if(espaco==8){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);
		rect(425,550,30,10);
		rect(460,550,30,10);

		if(barrigudo[0]=="true"){
			fill('#1C1C1C')
			text("B",190,545);


		}
		if(barrigudo[1]=="true"){
			fill('#1C1C1C')
			text("a",225,545);
			
		}
		if(barrigudo[2]=="true"){
			fill('#1C1C1C')
			text("r",260,545);
			text("r",295,545);

		}
		
		if(barrigudo[4]=="true"){
			fill('#1C1C1C')
			text("i",330,545);

		}
		if(barrigudo[5]=="true"){
			fill('#1C1C1C')
			text("g",365,545);
		}
		if(barrigudo[6]=="true"){
			fill('#1C1C1C')
			text("u",400,545);
		}
		if(barrigudo[7]=="true"){
			fill('#1C1C1C')
			text("d",435,545);
		}
		if(barrigudo[8]=="true"){
			fill('#1C1C1C')
			text("o",470,545);
		}

	}

	//Sossegado
	if(espaco==9){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);
		rect(425,550,30,10);
		rect(460,550,30,10);

		if(sossegado[0]=="true"){
			fill('#1C1C1C')
			text("S",190,545);
			text("s",260,545);
			text("s",295,545);



		}
		if(sossegado[1]=="true"){
			fill('#1C1C1C')
			text("o",225,545);
			
		}
		if(sossegado[4]=="true"){
			fill('#1C1C1C')
			text("e",330,545);

		}
		if(sossegado[5]=="true"){
			fill('#1C1C1C')
			text("g",365,545);
		}
		if(sossegado[6]=="true"){
			fill('#1C1C1C')
			text("a",400,545);
		}
		if(sossegado[7]=="true"){
			fill('#1C1C1C')
			text("d",435,545);
		}
		if(sossegado[8]=="true"){
			fill('#1C1C1C')
			text("o",470,545);
		}
			
	}

	//Riquinho
	if(espaco==10){
		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);
		rect(425,550,30,10);

		if(riquinho[0]=="true"){
			fill('#1C1C1C')
			text("R",190,545);

		}
		if(riquinho[1]=="true"){
			fill('#1C1C1C')
			text("i",225,545);
			text("i",330,545);

		}
		if(riquinho[2]=="true"){
			fill('#1C1C1C')
			text("q",260,545);


		}
		if(riquinho[3]=="true"){
			fill('#1C1C1C')
			text("u",295,545);


		}
		if(riquinho[5]=="true"){
			fill('#1C1C1C')
			text("n",365,545);
			
		}

		if(riquinho[6]=="true"){
			fill('#1C1C1C')
			text("h",400,545);
		}
		if(riquinho[7]=="true"){
			fill('#1C1C1C')
			text("o",435,545);
		}
		
	}

	//Desenhista
	if(espaco==11){

		rect(180,550,30,10);
		rect(215,550,30,10);
		rect(250,550,30,10);
		rect(285,550,30,10);
		rect(320,550,30,10);
		rect(355,550,30,10);
		rect(390,550,30,10);
		rect(425,550,30,10);
		rect(460,550,30,10);
		rect(495,550,30,10);

		if(desenhista[0]=="true"){
			fill('#1C1C1C')
			text("D",190,545);

		}
		if(desenhista[1]=="true"){
			fill('#1C1C1C')
			text("e",225,545);
			text("e",295,545)

		}
		if(desenhista[2]=="true"){
			fill('#1C1C1C')
			text("s",260,545);
			text("s",435,545);


		}
		
		if(desenhista[4]=="true"){
			fill('#1C1C1C')
			text("n",330,545);

		}
		if(desenhista[5]=="true"){
			fill('#1C1C1C')
			text("h",365,545);

		}

		if(desenhista[6]=="true"){
			fill('#1C1C1C')
			text("i",400,545);
		}
		if(desenhista[8]=="true"){
			fill('#1C1C1C')
			text("t",470,545);
		}
		if(desenhista[9]=="true"){
			fill('#1C1C1C')
			text("a",505,545);
		}

	}

}

	//Menu do jogo
	if(tela==0){
     image(img2,0,0,600,600);
     fill('#2ECCFA')
    

    //Menu com três opçoes 
    //Iniciar o jogo

    	textSize(26);
    
    	if( mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu1 && mouseY < yMenu1+altura){
      
      		stroke(200);
      		fill('#F6CEEC');
      		rect(xMenu, yMenu1, largura, altura, 15);
        	if (mouseIsPressed) {
          		tela=1;
        	}
      
   		 }
    fill('#FBFBEF');
 
   	text("Jogar", 260,210);
    
    //Informações do jogo 
    
    if( mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu2 && mouseY < yMenu2+altura){
       
   	 	stroke(200);
    	fill('#F6CEEC');
    	rect(xMenu, yMenu2, largura, altura, 15);
        	if (mouseIsPressed) {
          	tela=4;
        	}
       
     	}
    
   	 	fill('#FBFBEF');
    	text("Informações", 220,310); 
    
    // Creditos do jogo
     	if( mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu3 && mouseY < yMenu3+altura){
        	stroke(200);
       	 	fill('#F6CEEC');
        	rect(xMenu, yMenu3, largura, altura, 15);
       
       		 if (mouseIsPressed) {
          	tela=5;
        	}
       
    	 }
    
  	 	fill('#FBFBEF');
   		text("Créditos", 240,410); 
  }

  	// TELA DA COMQUISTA
	if(tela==2){
		background('#F781D8');
		textSize(30);
		text("PARABÉNS!!",190,200);
		text("Você adivinhou todos os adjetivos e\nconseguiu os salvar da forca marginal.\nJá está pronto para caracterizar o mundo!",30,250);
		audio3.play(true);
		audio1.stop(true);


	}

	//TELA DE GAME OVER
	if(tela==3){
		background('#F781D8');
		textSize(30);
		text("GOME OVER",190,200);
		text("Aaaahh :(( Você não conseguiu dessa vez."+"\nMas não desista! Que tal tentar de novo,\nmas agora vamos utilizar um dicionário?"
			+"\nOs adjetivos precisam da sua ajuda!",30,250);
		audio2.play(true);
		audio1.stop(true);

	}
	//Tela de informações
	if(tela==4){
		background('#F781D8')
		textSize(30);
		text("Especificação:",10,40);
		textSize(20);
		text("O jogo foi desenvolvido para ajudar as crianças do terceiro ano do\nensino fundamental na compreenção de adjetivos que são\npalavras que caracterizam pessoas, animais e objetos.",10,70);
		textSize(30);
		text("Como jogar:",10,165);
		textSize(20);
		text("No jogo da forca tentamos adivinhar qual é a palavra misteriosa."
			+"\nAtravés das letras, vamos construir a palavra de tentativa em"
			+"\ntentativa, então para salvar os nossos adjetivos da forca marginal"
			+"\nsiga as instruções:\n• Selecione uma letra no teclado que você acredita existir\nna palavra."
			+"\n• Vá tentando letra após letra até descobrir a palavra toda."
			+"\n• O jogo consiste em 12 níveis, e ao acertar uma palavra você\navançará para o próximo."
			+"\n• Cuidado com as letras erradas, você tem um limite de tentativas.\nSe o bonequinho se completar na forca, os nossos adjetivos"
			+"\nnão serão salvos.\nUma dica: Para ganhar o jogo, você será convidado a conhecer"
			+"\nas diferenças entre: o g/gu; o c/qu; o r/rr; o s/ss; o nh/ch/lh!",10,190);
		//Texto da tecla voltar 
		text("voltar",420,570);

	//Voltar pra tela inicial(tela 0)
		if( mouseX > 400 && mouseX < 520 && mouseY > 540 && mouseY < 590){
        	stroke(200);
       	 	fill('#F6CEEC');
        	rect(400, 540, 120, 50, 15);
       
       		 if (mouseIsPressed) {
          	tela=0;
        	}
       
    	 }

	}
	//Tela de agradecimentos
	if(tela==5){
		//TEXTOS RELATIVOS AO AGRADECIMENTO 
		background('#F781D8')
		textSize(30);
		text("Desenvolvedor:",10,40);
		textSize(25);
		text("Rafael de lima nunes - 20190075214",10,80);
		textSize(30);
		text("Educador:",10,120);
		textSize(25);
		text("Tulio de Araujo Nascimento, Graduando em Letras -\nLíngua Portuguesa pela UFRN",10,160);
		textSize(30);
		text("Apoio:",10,230);
		textSize(25);
		text("Pablo Durkheim Fernandes do Nascimento -\nGraduando em Ciência e tecnologia pela UFRN",10,270);
		textSize(30);
		//Identificação dos participantes 
		image(aluno,70,330,180,180);
		textSize(25);
		text("Aluno",70,550);
		image(educador,280,330,180,180);
		textSize(25);
		text("Educador",280,550);
		//Texto da tecla voltar
		text("voltar",420,570);

	//Voltar pra tela inicial(tela 0)
		if( mouseX > 400 && mouseX < 520 && mouseY > 540 && mouseY < 590){
        	stroke(200);
       	 	fill('#F6CEEC');
        	rect(400, 540, 120, 50, 15);
       
       		 if (mouseIsPressed) {
          	tela=0;
        	}
       
    	 }

	}


}
//Usando Teclado
function keyTyped(){	
	//Identificar letras
	//SENSATO
	if(espaco==0){

		pzero();
	
	}else{
		//COMILÃO
		if(espaco==1){

			pum();


		}else{
			//GENTIL
			if(espaco==2){
			
				pdois();

			}else{
				//CHOROSA
				if(espaco==3){

					ptres();		
				}else{
					//SONHADOR
					if(espaco==4){

						pquatro();
			
					}else{
						//PEQUENOS
						if(espaco==5){

							pcinco();

						}else{
							//Brincalhão 
							if(espaco==6){

								pseis();

							}else{
							//RISONHO
								if(espaco==7){

									psete();

								}else{
										//Barrigudo
									if(espaco==8){

										poito();

									}else{
									//Sossegado
										if(espaco==9){

											pnove();
										}else{
										//Riquinho
											if(espaco==10){

												pdez();

											}else{
											//Desenhista
												if(espaco==11){

													ponze();
												}	
											}
										}
									}
								}
							}
						}

					}
				}

			}

		}

	}

function pzero(){


	if(palavras[0].match(key)){
			
			if(key==='s'){
			
				if(sensato[0]!="true" && sensato[3]!="true"){

					contagem+=2;

				}
				sensato[0]="true";
				sensato[3]="true";


			}

			if(key==='e'){
			
			 	if(sensato[1]!="true"){

					contagem+=1;
				
				}
				sensato[1]="true";

			}

			if(key==='n'){
			
				if(sensato[2]!="true"){

					contagem+=1;
				
				}
				sensato[2]="true";

			}
			if(key==='a'){
			
				if(sensato[4]!="true"){

					contagem+=1;
				
				}
				sensato[4]="true";

			}

			if(key==='t'){
				
				if(sensato[5]!="true"){

					contagem+=1;
				
				}
				sensato[5]="true";

			}
			if(key==='o'){

				if(sensato[6]!="true"){

					contagem+=1;
				
				}
				sensato[6]="true";

			}
			//Muança de Fase
			if(contagem==7){

				espaco=1;
				fase++;
				errou=0;
			}
		}else{

			errou++;
		}



}	
function pum(){


	if(palavras[1].match(key)){
		
			if(key==='c'){

				if(comilao[0]!="true"){

					contagem+=1;
				
				}
				comilao[0]="true";

			}
			if(key==='o'){
				if(comilao[1]!="true" && comilao[6]!="true"){

					contagem+=2;
				
				}
				
				comilao[1]="true";
				comilao[6]="true";

			}
			if(key==='m'){
				if(comilao[2]!="true"){

					contagem+=1;
				
				}
			
				comilao[2]="true";

			}
			if(key==='i'){
				if(comilao[3]!="true"){

					contagem+=1;
				
				}
			
				comilao[3]="true";
			}
			if(key==='l'){
				if(comilao[4]!="true"){

					contagem+=1;
				
				}
			
				comilao[4]="true";
			}
			if(key==='a'){
				if(comilao[5]!="true"){

					contagem+=1;
				
				}
			
				comilao[5]="true";
			}
			// Muança de fase
			if(contagem==14){

				espaco=2;
				fase++;
				errou=0;
			}
		}else{

		errou++;

	}



	
}	
function pdois(){



		if(palavras[2].match(key)){
	
			if(key==='g'){
				if(gentil[0]!="true"){

					contagem+=1;
				
				}
			
				gentil[0]="true";

			}
			if(key==='e'){
				if(gentil[1]!="true"){

					contagem+=1;
				
				}
			
				gentil[1]="true";
			
			}
			if(key==='n'){
				if(gentil[2]!="true"){

					contagem+=1;
				
				}
			
				gentil[2]="true";

			}
			if(key==='t'){
				if(gentil[3]!="true"){

					contagem+=1;
				
				}
			
				gentil[3]="true";

			}
			if(key==='i'){
				if(gentil[4]!="true"){

					contagem+=1;
				
				}
			
				gentil[4]="true";

			}
			if(key==='l'){
				if(gentil[5]!="true"){

					contagem+=1;
				
				}
			
				gentil[5]="true";
			}
			//Mudança de Fase
			if(contagem==20){

				espaco=3;
				fase++;
				errou=0;
			}
		
		}else{

			errou++;

		}

	
}	
function ptres(){


	if(palavras[3].match(key)){
	
			if(key==='c'){
				if(chorosa[0]!="true"){

					contagem+=1;
				
				}
			
				chorosa[0]="true";

			}

			if(key==='h'){
				if(chorosa[1]!="true"){

					contagem+=1;
				
				}
			
				chorosa[1]="true";
			
			}

			if(key==='o'){
				if(chorosa[2]!="true" && chorosa[4]!="true"){

					contagem+=2;
				
				}
			
				chorosa[2]="true";
				chorosa[4]="true";

			}
			if(key==='r'){
				if(chorosa[3]!="true"){

					contagem+=1;
				
				}

			
				chorosa[3]="true";

			}
			if(key==='s'){
				if(chorosa[5]!="true"){

					contagem+=1;
				
				}
			
				chorosa[5]="true";

			}
			if(key==='a'){
				if(chorosa[6]!="true"){

					contagem+=1;
				
				}
			
				chorosa[6]="true";

			}
			//Mudança de Fase
			if(contagem==27){

				espaco=4;
				fase++;
				errou=0;
			}
		}else{

			errou++;

		}

	
}	
function pquatro(){
	


	if(palavras[4].match(key)){
	
			if(key==='s'){
				if(sonhador[0]!="true"){

					contagem+=1;
				
				}

				sonhador[0]="true";

			}
			if(key==='o'){
				if(sonhador[2]!="true" && sonhador[6]!="true"){

					contagem+=2;
				
				}

				sonhador[1]="true";
				sonhador[6]="true";
		
			}
			if(key==='n'){
				if(sonhador[2]!="true"){

					contagem+=1;
				
				}

				sonhador[2]="true";

			}
			if(key==='h'){
				if(sonhador[3]!="true"){

					contagem+=1;
				
				}

				sonhador[3]="true";

			}
			if(key==='a'){
				if(sonhador[4]!="true"){

					contagem+=1;
				
				}

				sonhador[4]="true";

			}
			if(key==='d'){
				if(sonhador[5]!="true"){

					contagem+=1;
				
				}

				sonhador[5]="true";

			}
			if(key==='r'){
				if(sonhador[7]!="true"){

					contagem+=1;
				
				}

			sonhador[7]="true";

			}
			//Mudança de Fase
			if(contagem==35){

				espaco=5;
				fase++;
				errou=0;
			}
		}else{

			errou++;

		}

}	
function pcinco(){


		if(palavras[5].match(key)){

	
			if(key==='p'){
				if(pequenos[0]!="true"){

					contagem+=1;
				
				}
			
				pequenos[0]="true";

			}

			if(key==='e'){
				if(pequenos[1]!="true" && pequenos[4]!="true"){

					contagem+=2;
				
				}
			
				pequenos[1]="true";
				pequenos[4]="true";
		
			}

			if(key==='q'){
				if(pequenos[2]!="true"){

					contagem+=1;
				
				}
			
				pequenos[2]="true";

			}
			if(key==='u'){
				if(pequenos[3]!="true"){

					contagem+=1;
				
				}
				
				pequenos[3]="true";

			}
			if(key==='n'){
				if(pequenos[5]!="true"){

					contagem+=1;
				
				}
			
				pequenos[5]="true";

			}
			if(key==='o'){
				if(pequenos[6]!="true"){

					contagem+=1;
				
				}
			
				pequenos[6]="true";

			}
			if(key==='s'){
				if(pequenos[7]!="true"){

					contagem+=1;
				
				}
				
				pequenos[7]="true";

			}
			//Mudança de Fase
			if(contagem==43){

				espaco=6;
				fase++;
				errou=0;
			}

		}else{

			errou++;

		}

	
}	
function pseis(){



	if(palavras[6].match(key)){
	
			if(key==='b'){
				if(brincalhao[0]!="true"){

					contagem+=1;
				
				}
				
			
				brincalhao[0]="true";
			}

			if(key==='r'){
				if(brincalhao[1]!="true"){

					contagem+=1;
				
				}
				
				brincalhao[1]="true";
			}

			if(key==='i'){
				if(brincalhao[2]!="true"){

					contagem+=1;
				
				}
			
				brincalhao[2]="true";

			}
			if(key==='n'){
				if(brincalhao[3]!="true"){

					contagem+=1;
				
				}
			
				brincalhao[3]="true";

			}
			if(key==='c'){
				if(brincalhao[4]!="true"){

					contagem+=1;
				
				}
			
				brincalhao[4]="true";

			}
			if(key==='a'){
				if(brincalhao[5]!="true" && brincalhao[8]!="true"){

					contagem+=2;
				
				}
			
				brincalhao[5]="true";
				brincalhao[8]="true";
			}
			if(key==='l'){
				if(brincalhao[6]!="true"){

					contagem+=1;
				
				}
			
				brincalhao[6]="true";

			}
			if(key==='h'){
				if(brincalhao[7]!="true"){

					contagem+=1;
				
				}
			
				brincalhao[7]="true";

			}
			if(key==='o'){
				if(brincalhao[9]!="true"){

					contagem+=1;
				
				}
			
				brincalhao[9]="true";

			}
			//Mudança de Fase
			if(contagem==53){

				espaco=7;
				fase++;
				errou=0;
			}
		}else{

			errou++;

		}

	
}	
function psete(){



	if(palavras[7].match(key)){
			if(key==='r'){
				if(risonho[0]!="true"){

					contagem+=1;
				
				}
			
				risonho[0]="true";

			}

			if(key==='i'){
				if(risonho[1]!="true"){

					contagem+=1;
				
				}
			
			
				risonho[1]="true";
			
			}

			if(key==='s'){
				if(risonho[2]!="true"){

					contagem+=1;
				
				}
			
			
				risonho[2]="true";

			}
			if(key==='o'){
				if(risonho[3]!="true" && risonho[6]!="true"){

					contagem+=2;
				
				}
			
			
				risonho[3]="true";
				risonho[6]="true";

			}
			if(key==='n'){
				if(risonho[4]!="true"){

					contagem+=1;
				
				}

			
				risonho[4]="true";

			}
			if(key==='h'){
				if(risonho[5]!="true"){

					contagem+=1;
				
				}
			
				risonho[5]="true";

			}
			//Mudança de Fase
			if(contagem==60){

				espaco=8;
				fase++;
				errou=0;
			}
		}else{

			errou++;

		}
	
}	
function poito(){
	

	 if(palavras[8].match(key)){
	
			if(key==='b'){
				if(barrigudo[0]!="true"){

					contagem+=1;
				
				}
			
				barrigudo[0]="true";

			}	

			if(key==='a'){
				if(barrigudo[1]!="true"){

					contagem+=1;
				
				}
			
				barrigudo[1]="true";
			
			}

			if(key==='r'){
				if(barrigudo[2]!="true" && barrigudo[3]!="true"){

					contagem+=2;
				
				}
			
				barrigudo[2]="true";
				barrigudo[3]="true";

			}
			if(key==='i'){
				if(barrigudo[4]!="true"){

					contagem+=1;
				
				}
			
				barrigudo[4]="true";

			}
			if(key==='g'){
				if(barrigudo[5]!="true"){

					contagem+=1;
				
				}
			
				barrigudo[5]="true";

			}
			if(key==='u'){
				if(barrigudo[6]!="true"){

					contagem+=1;
				
				}
			
				barrigudo[6]="true";

			}
			if(key==='d'){
				if(barrigudo[7]!="true"){

					contagem+=1;
				
				}
			
				barrigudo[7]="true";

			}
			if(key==='o'){
				if(barrigudo[8]!="true"){

					contagem+=1;
				
				}
			
				barrigudo[8]="true";

			}
			//Mudança de Fase
			if(contagem==69){

				espaco=9;
				fase++;
				errou=0;
			}
		}else{

			errou++;

		}


}	
function pnove(){


	if(palavras[9].match(key)){
	
			if(key==='s'){
				if(sossegado[0]!="true" && sossegado[2]!="true" && sossegado[3]!="true"){

					contagem+=3;
				
				}
				
			
				sossegado[0]="true";
				sossegado[2]="true";
				sossegado[3]="true";

			}
			if(key==='o'){
				if(sossegado[1]!="true"){

					contagem+=1;
				
				}
			
				sossegado[1]="true";
			
			}
			if(key==='e'){
				if(sossegado[4]!="true"){

					contagem+=1;
				
				}
			
				sossegado[4]="true";
			}
			if(key==='g'){
				if(sossegado[5]!="true"){

					contagem+=1;
				
				}
			
				sossegado[5]="true";
			}
			if(key==='a'){
				if(sossegado[6]!="true"){

					contagem+=1;
				
				}
			
				sossegado[6]="true";
			}
			if(key==='d'){
				if(sossegado[7]!="true"){

					contagem+=1;
				
				}

				sossegado[7]="true";
			}
			if(key==='o'){
				if(sossegado[8]!="true"){

					contagem+=1;
				
				}
			
				sossegado[8]="true";
			}
			//Mudança de Fase
			if(contagem==78){

				espaco=10;
				fase++;
				errou=0;
			}

		}else{

			errou++;

		}

	
}	
function pdez(){


	if(palavras[10].match(key)){
	
			if(key==='r'){
				if(riquinho[0]!="true"){

					contagem+=1;
				
				}
				

				riquinho[0]="true";

			}
			if(key==='i'){
				if(riquinho[1]!="true" && riquinho[4]!="true"){

					contagem+=2;
				
				}

				riquinho[1]="true";
				riquinho[4]="true";
		
			}
			if(key==='q'){
				if(riquinho[2]!="true"){

					contagem+=1;
				
				}

				riquinho[2]="true";

			}
			if(key==='u'){
				if(riquinho[3]!="true"){

					contagem+=1;
				
				}

				riquinho[3]="true";

			}
			if(key==='n'){
				if(riquinho[5]!="true"){

					contagem+=1;
				
				}

				riquinho[5]="true";

			}
			if(key==='h'){
				if(riquinho[6]!="true"){

					contagem+=1;
				
				}

				riquinho[6]="true";

			}
			if(key==='o'){
				if(riquinho[7]!="true"){

					contagem+=1;
				
				}

				riquinho[7]="true";
			}
			//Mudança de Fase
			if(contagem==86){

				espaco=11;
				fase++;
				errou=0;
			}

		}else{

			errou++;

		}

	
}	
function ponze(){
	

		if(palavras[11].match(key)){
	
			if(key==='d'){
				if(desenhista[0]!="true"){

					contagem+=1;
				
				}
				

			desenhista[0]="true";

			}
			if(key==='e'){
				if(desenhista[1]!="true" && desenhista[3]!="true"){

					contagem+=2;
				
				}

			desenhista[1]="true";
			desenhista[3]="true";
		
			}
			if(key==='s'){
				if(desenhista[2]!="true" && desenhista[7]!="true"){

					contagem+=2;
				
				}

			desenhista[2]="true";
			desenhista[7]="true";

			}
			
			if(key==='n'){
				if(desenhista[4]!="true"){

					contagem+=1;
				
				}

			desenhista[4]="true";

			}
			if(key==='h'){
				if(desenhista[5]!="true"){

					contagem+=1;
				
				}

			desenhista[5]="true";

			}
			if(key==='i'){
				if(desenhista[6]!="true"){

					contagem+=1;
				
				}

			desenhista[6]="true";

			}
			if(key==='t'){
				if(desenhista[8]!="true"){

					contagem+=1;
				
				}

			desenhista[8]="true";

			}
			if(key==='a'){
				if(desenhista[9]!="true"){

					contagem+=1;
				
				}

			desenhista[9]="true";

			}
			//Mudança de Fase
			if(contagem==96){

				espaco=12;
				fase++;
				errou=0;
			}
		}else{

			errou++;

		}
		
			
	}

}	
function mouseMoved() {
  if(tela==0){
  	audio1.loop(true);
  }
}
