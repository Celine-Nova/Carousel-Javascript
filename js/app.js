var app = {
    
    //j'initialise le compteur
    counter: 1,
    
    init: function() {
        // Le fait de déclarer des propriétés de app. (app.fields par exemple) dans le init, outre le fait de permettre d'appeler ces éléments dans le reste du script dans app., permet de s'assurer que la valeur est définie après le chargement du DOM (grâce au app.init() situé tout à la fin du fichier JS)
                
        //je récupère les chevrons suivant et precedent
        let right = document.getElementById('right');
        let left = document.getElementById('left');
        //je récupère les photos
        app.pictures = document.getElementsByTagName('img');
        app.li = document.getElementsByTagName('li');
    
         //je déclenche un evènement click sur les chevrons suivant et précedent
        right.addEventListener('click', app.rightPicture);
        right.addEventListener('click', app.changeColor);
        left.addEventListener('click', app.leftPicture);
        left.addEventListener('click', app.changeColor);
      
        //j'initialise l'affichage d'une photo
        app.pictures[0].style.display = 'block';
        //j'initialise la couleur du background du 1er li
        app.li[0].style.backgroundColor = "pink";
         app.scrollAuto();
    },
    
    rightPicture: function() {
        //j'incremente le compteur
        app.counter++;
        //si ccompteur est superieur à la longueur du tableau de photo = mettre le compteurr à 1
        if (app.counter > app.pictures.length){
            app.counter = 1;
            
        }
        for ( let i = 0; i < app.pictures.length; i++){
            //je cache les photos
            app.pictures[i].style.display = 'none';
            
        }
        //j'affiche la photo que je veux (celle qui correspond au compteur)
        app.pictures[app.counter-1].style.display = 'block'; 
        
    },

    leftPicture: function(){
        app.counter--;
        //si compteur est inerieur à 1, le compteur est égal à la longueur du tableau donc(3)
        if (app.counter < 1){
            app.counter = app.pictures.length;
            
        }
        // console.log(photos[0]);

        for ( let i = 0; i < app.pictures.length; i++){
            //je cache les photos
            app.pictures[i].style.display = 'none';
         }
         //j'affiche celle que je veux
         app.pictures[app.counter-1].style.display = 'block';
     },
     changeColor: function(){
        //si le compteur est superieur à la longueur du tableau mettre  compteur =1
        if (app.counter > app.li.length){
            app.counter = 1;
        }

        for ( let i = 0; i < app.li.length; i++){
           
            // je mets la couleur des backgound en blanc 
            app.li[i].style.backgroundColor = 'white';
         }

        // je mets le background color en rose pour le li qui correspond
        app.li[app.counter-1].style.backgroundColor = 'pink';
     
     },

     //fonction pour me defilement automatique au chargement de la page
     scrollAuto: function(){
         setInterval(app.rightPicture,5000);
         setInterval(app.changeColor,5000);
     },
};  

app.init();