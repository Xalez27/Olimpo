function showPopup(god) {
    var popup = document.getElementById('popup');
    var godInfo = document.getElementById('godInfo');
    var overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    
    var foundGod = gods.find(g => g.name.toLowerCase() === god.toLowerCase());
    if (foundGod) {
        // L'istruzione sottostante permette di ottenere la descrizione del dio da poter visualizzare
        godInfo.innerText = foundGod.description;
        
        // Lo switch permette di ottenere il colore del bordo in base al dio selezionato 
        switch (foundGod.domain) {
            case 'tuono':
                popup.style.borderColor = 'yellow';
                break;
            case 'inferno':
                popup.style.borderColor = 'red';
                break;
            case 'mare':
                popup.style.borderColor = 'mediumblue';
                break;
            case 'guerra':
                popup.style.borderColor = 'crimson';
                break;
            case 'amore':
                popup.style.borderColor = 'DeepPink';
                break;
            case 'matrimonio':
                popup.style.borderColor = 'magenta';
                break;
            case 'raccolto':
                popup.style.borderColor = 'cyan';
                break;
            case 'strategia':
                popup.style.borderColor = 'goldenrod';
                break;
            case 'sun':
                popup.style.borderColor = 'gold';
                break;
            case 'caccia':
                popup.style.borderColor = 'green';
                break;
            case 'fuoco':
                popup.style.borderColor = 'lightpink';
                break;
            case 'messaggero':
                popup.style.borderColor = 'darkorange';
                break;
            case 'vino':
                popup.style.borderColor = 'blueviolet';
                break;
            default:
                popup.style.borderColor = 'white'; // colore di default
        }
    } else {
        // se non viene trovato nessun dio il popup comparirà senza testo
        godInfo.innerText = '';
        popup.style.borderColor = 'white';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none'; // serve per nascondere l'overlay
}


var gods = document.getElementsByClassName('god');
for (var i = 0; i < gods.length; i++) {
    gods[i].addEventListener('click', function() {
        var godId = this.id;
        showPopup(godId);
    });
}

// array degli dèi dei contenente tutte le varie informazioni poi passate alle altre funzioni
var gods = [
    { name: 'Zeus', image: './immagini/zeus.png', description: 'Zeus è il re degli dei e il signore del cielo e del tuono. È noto per la sua forza e il suo potere, e spesso è rappresentato con un fulmine nella mano. È il figlio di Crono e Rea, e il fratello maggiore di Poseidone e Ade. Zeus governa il Monte Olimpo, dove vive con gli altri dei dell\'Olimpo. È diventato il capo degli dèi dopo aver ucciso il padre Cronus, che aveva divorato i suoi figli' , domain: 'tuono' },
    { name: 'Ade', image: './immagini/ade.png', description: 'Ade è il dio degli Inferi, il regno dei morti. È spesso rappresentato come un uomo severo e oscuro, e la sua arma caratteristica è il bidente. Come fratello di Zeus e Poseidone, è uno dei tre principali dei dell\'Olimpo. Ade è noto per essere spietato con coloro che osano sfidare l\'ordine del mondo dei morti, e il suo amato e fedele cane a tre teste Cerbero veglia sull\'entrata dell\'Inferno', domain: 'inferno' },
    { name: 'Poseidone', image: './immagini/poseidone.png', description: 'Poseidone è il dio del mare e dei terremoti. È solitamente raffigurato con un tridente, che usa per scuotere la terra e creare tempeste marine. Come fratello di Zeus e Ade, Poseidone è uno dei tre fratelli che governano l/\'Olimpo. È noto per il suo carattere impulsivo e la sua gelosia per il regno di suo fratello Zeus.', domain: 'mare' },
    { name: 'Ares', image: './immagini/ares.png', description: 'Ares è il dio della guerra, della violenza e del caos. È spesso rappresentato come un guerriero feroce, armato di elmo, scudo e spada. Ares è noto per il suo desiderio di combattimento e la sua mancanza di compassione per coloro che soffrono a causa delle sue guerre. È figlio di Zeus e Hera, e spesso è invocato dagli eserciti prima della battaglia.', domain: 'guerra' },
    { name: 'Afrodite', image: './immagini/afrodite.png', description: 'Afrodite è la dea dell\'amore, della bellezza e della fertilità. È spesso rappresentata come una donna affascinante e sensuale, circondata da un alone di desiderio e passione. Afrodite è sposata con Efesto, il dio del fuoco, ma è famosa per i suoi numerosi affari amorosi con altri dei e mortali. È anche la madre di Eros, il dio dell\'amore.', domain: 'amore' },
    { name: 'Era', image: './immagini/era.png', description: 'Era è la regina degli dei e la dea del matrimonio e della famiglia. È spesso rappresentata come una donna maestosa e severa, con una corona regale e un atteggiamento fiero. Era è la moglie di Zeus e la madre di Ares e Eris. È gelosa della fedeltà di Zeus e punisce coloro che osano tradirla.', domain: 'matrimonio' },
    { name: 'Demetra', image: './immagini/demetra.png', description: 'Demetra è la dea della fertilità, dell\'agricoltura e delle stagioni. È spesso raffigurata come una donna con una cornucopia di frutta e verdura, simbolo della sua generosità e della sua capacità di nutrire il mondo. Demetra è la madre di Persefone, la dea dei fiori, e spesso è invocata durante le cerimonie agricole per assicurare un buon raccolto.', domain: 'raccolto' },
    { name: 'Atena', image: './immagini/atena.png', description: 'Atena è la dea della saggezza, della guerra strategica e delle arti. È spesso raffigurata con un elmo, uno scudo e una lancia, simboli del suo coraggio e della sua abilità militare. Atena è anche la patrona delle città e dei guerrieri, ed è considerata una guida e una protettrice per gli eroi. È la figlia preferita di Zeus, nata dalla sua testa completamente armata.', domain: 'strategia' },
    { name: 'Apollo', image: './immagini/apollo.png', description: 'Apollo è il dio del sole, della musica e della profezia. È spesso raffigurato con un arco e una lira, simboli del suo potere divino e della sua bellezza. Apollo è noto per le sue doti di guaritore e musicista, nonché per la sua capacità di prevedere il futuro. È il fratello gemello di Artemide, la dea della caccia.', domain: 'sun' },
    { name: 'Artemide', image: './immagini/artemide.png', description: 'Artemide è la dea della caccia, della natura selvaggia e della luna. Solitamente viene rappresentata con un arco e una freccia, simboli della sua abilità di cacciatrice e del suo potere sulla natura. Artemide è una devota protettrice degli animali e delle fanciulle, e spesso è invocata durante le battute di caccia e i riti di passaggio.', domain: 'caccia' },
    { name: 'Efesto', image: './immagini/Efesto.png', description: 'Efesto è il dio del fuoco, dei metalli e della forgia. È spesso rappresentato come un uomo muscoloso e barbuto, intento a lavorare al suo banco di lavoro. Efesto è noto per la sua abilità di fabbro e inventore, e ha forgiato molte delle armi e delle armature degli dei dell\'Olimpo. È il marito infelice di Afrodite, ma è rispettato da tutti per le sue abilità artigianali.', domain: 'fuoco' },
    { name: 'Ermes', image: './immagini/ermes.png', description: 'Ermes è il dio dei viaggiatori, dei ladri e degli ambasciatori. È spesso rappresentato con un elmo alato e sandali alati, simboli della sua velocità e agilità. Ermes è noto per essere un astuto ingannatore e un abile diplomatico, e spesso agisce come messaggero degli dei. È anche il patrono dei commercianti e degli atleti.', domain: 'messaggero' },
    { name: 'Dionisio', image: './immagini/dionisio.png', description: 'Dionisio è il dio del vino, della gioia e della follia. È spesso rappresentato come un giovane allegro e ubriaco, circondato da satiri e menadi. Dionisio è noto per i suoi festini selvaggi e le sue feste sfrenate, che spesso portano alla perdizione e alla trasformazione. È considerato un dio benevolo dai suoi seguaci, ma può anche essere vendicativo con coloro che osano opporsi al suo dominio.', domain: 'vino' }
];

function displayGods(sortMethod) {
    var container = document.querySelector('.container');
    
    container.innerHTML = '';
    // ordinamento
    switch (sortMethod) {
        case 'AZ':
            gods.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'ZA':
            gods.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            gods.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    gods.forEach(god => {
        var godDiv = document.createElement('div');
        godDiv.className = 'god';
        godDiv.id = god.name.toLowerCase(); 
        
        var godName = document.createElement('h2');
        godName.className = 'god-name';
        godName.innerText = god.name; 
        godDiv.appendChild(godName); 

        var godImage = document.createElement('img'); 
        godImage.src = god.image; 
        godImage.alt = god.name;
        godDiv.appendChild(godImage); 
        
        godDiv.setAttribute('domain', god.domain); 
        godDiv.addEventListener('click', function() {
            showPopup(god.name);
        });
        container.appendChild(godDiv);
       
        switch (god.domain) {
            case 'tuono':
                godDiv.style.borderColor = 'yellow'; 
                break;
            case 'inferno':
                godDiv.style.borderColor = 'red'; 
                break;
            case 'mare':
                godDiv.style.borderColor = 'mediumblue'; 
                break;
            case 'guerra':
                godDiv.style.borderColor = 'crimson'; 
                break;
            case 'amore':
                godDiv.style.borderColor = 'DeepPink'; 
                break;
            case 'matrimonio':
                godDiv.style.borderColor = 'magenta'; 
                break;
            case 'raccolto':
                godDiv.style.borderColor = 'cyan'; 
                break;
            case 'strategia':
                godDiv.style.borderColor = 'goldenrod';
                break;
            case 'sun':
                godDiv.style.borderColor = 'gold'; 
                break;
            case 'caccia':
                godDiv.style.borderColor = 'green'; 
                break;
            case 'fuoco':
                godDiv.style.bord
                break;
            case 'messaggero':
                godDiv.style.borderColor = 'darkorange';  
                break;
            case 'vino':
                godDiv.style.borderColor = 'blueviolet'; 
                break;
            default:
                godDiv.style.borderColor = 'white'; 
        }
    });
}

// ordina alfabeticamente da A-Z di default
displayGods('AZ');


document.getElementById('ordinaAZ').addEventListener('click', function() {
    displayGods('AZ');
    document.querySelector('.container').style.marginLeft = '240px'; 
});


document.getElementById('ordinaZA').addEventListener('click', function() {
    displayGods('ZA');
    document.querySelector('.container').style.marginLeft = '240px'; 
});