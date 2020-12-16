$(document).ready(function() {
    console.log("Ready Language.js");//DEBUGING

      let data = {
        'italian':
            {
                //Nav Section
                'nav_home':'Homepage',
                'nav_about': 'Descrizione',
                'nav_booking':'Prenotazioni',
                'nav_menu':'Menù',
                'nav_contact':'Contatto',
                //About Section
                'about_title':'Chi Siamo ?',
                'about_desc':'\n' +
                    'La Bontá riassume il lavoro di un\'azienda familiare al servizio dei concittadini.\n' +
                    'Il gusto raffinato dei prodotti italiani, si sposa velocemente con il nostro impasto artigianale e si trasforma nel risultato delle pizze che scegli',
                //Menu Section
                'menu_tittle' : 'PRODOTTI DI STAGIONE ABBINATI AI MIGLIORI INGREDIENTI PER CREARE UN MENU MODERNO ED UNICO.',
                'L':'Pranzo & Cena',
                'W':'Lista Dei Vini',
                'B': 'Offerte Pranzo',
                'Download':'Clicka per Scaricare',
                //Booking & Delivery
                'bookEventHeader':'Prenota Un Evento',
                'bookEventDesc':'Noi offriamo i nostri grandi e unici spazi per il tuo evento',

                'deliveryHeader':'Ordina Ora',
                'deliveryDesc':'Offriamo la nostra consegna rapida per soddisfare i tuoi gusti',
                //Modal Booking
                'head':'Quando Desideri Unirti A Noi ?',
                'name':'Nome',
                'email':'Indirizzo Email',
                'phone':'Numero di Telefono',
                'date' : 'Data',
                'time' : 'Orario',
                'peopleNo' : 'Numero di Persone',
                'bookButton' : 'Prenota',
                //Eating TimeFrame
                'brunch':'Brunch',
                'brunchDt':'Sabato - Domenica',
                // 'brunchT':'11 am - 4 pm',

                'lunch':'Pranzo',
                'lunchDt':'Sabato - Domenica',
                // 'lunchT': '12:30 pm - 4 pm',

                'dinner':'Cena',
                'dinerDt':'Sabato - Domenica ',
                // 'dinnerT':'4 pm - 23:59 pm',

                //Footer
                'news':'Bulletin',
                'newsPlaceHolder':'Inserisci il tuo indirizzo email',
                'address':'Indirizzo',
                'socialMedia' : 'Sui Social',
                'author':'Realizzato da Enxhi Tabaku',
                'rights':'Tutti i Diritti Riservati'

        },//Italian END

      'albanian' :
            {
                //Nav Section
                'nav_home':'Kryefaqja',
                'nav_about': 'Pershkrimi',
                'nav_booking':'Rezervime',
                'nav_menu':'Menu',
                'nav_contact':'Kontakt',
                //About Section
                'about_title':'Rreth Nesh',
                'about_desc':
                    'la Bonta permbledh punen e nje biznesi familjar ne sherbim te bashkqytetareve Lushnjare.' +
                    ' Shijet e rafinuar te produkteve italiane, martohen shpejte me brumin tone artizanal dhe kthehen ne rezultatin e picave qe ju zgjidhni.',
                //Menu Section
                'menu_tittle' : 'PRODUKTE TE STINES KOMBINUAR ME INGREDIENTET ME TE MIRE PER TE DHURUAR NJE MENU MODERNE DHE UNIKE',
                'L':'Dreka & Darka',
                'W':'Lista E Vererave',
                'B': 'Paketat E Drekes',
                'Download':'Kliko Dhe Shkarko',
                //Booking & Delivery
                'bookEventHeader':'Rezervo Nje Event',
                'bookEventDesc':'Ne ofrojm vendet tona te medha dhe unike per eventin tuaj',

                'deliveryHeader':'Porosit Tani',
                'deliveryDesc':'Ofrojm sherbimin e shpejte Taxi per te kenaqur shijet tuaja',
                //Modal Booking
                'head':'Kur Deshiron Te Na Bashkohesh ?',
                'name':'Emri',
                'email':'Adrresa Email',
                'phone':'Numri i Telefonit',
                'date' : 'Data',
                'time' : 'Orari',
                'peopleNo' : 'Numri i Personave',
                'bookButton' : 'Rezervo',
                //Eating TimeFrame
                'brunch':'Brunch',
                'brunchDt':'E Shtune - E Djele',
                // 'brunchT':'11 am - 4 pm',

                'lunch':'Dreka',
                'lunchDt':'E Shtune - E Djele',
                // 'lunchT': '12:30 pm - 4 pm',

                'dinner':'Darka',
                'dinerDt':'E Shtune - E Djele',
                // 'dinnerT':'4 pm - 23:59 pm',

                //Footer
                'news':'Buletini',
                'newsPlaceHolder':'Vendos adrresen email',
                'address':'Vendndodhja',
                'socialMedia' : 'Rrjetet Social',
                'author':'Realizuar nga Enxhi Tabaku',
                'rights':'Te Gjitha Te Drejtat E Rezervuara'

            }
    }
    //Main Navbar
    let navbar_lang_links =  $('#myNavbar').children('.langList').children().children();
    let navbar_options = $('#myNavbar').children('.optList').children()
    let nav_home = navbar_options.children('.nav_home')
    let nav_about = navbar_options.children('.nav_about')
    let nav_booking = navbar_options.children('.nav_booking')
    let nav_menu = navbar_options.children('.nav_menu')
    let nav_contact = navbar_options.children('.nav_contact')

    //About Section
    let about_title = $('#aboutHeader');
    let about_desc = $('#aboutLaBontaPar').children();

    //Menu Section
    let menu_title = $('#panelHeaderMenu').children();
    let lunch_dinner = $('.L');
    let wine_list = $('.W');
    let business_lunch=$('.B');
    let toDownload = $('.toDownload_menuSec');
    // console.log(lunch_dinner)

    //Booking & Delivery
    let bookEvent_header = $('#bookTableButton').children('h1');
    let bookEvent_p = $('#bookTableButton').children('p');

    let delivery_header = $('#orderNowButton').children('h1');
    let delivery_p = $('#orderNowButton').children('p');

    //Book Modal
    let header = $('.headerModal')
    let input_name = $("label[for='inputName']");
    let input_email = $("label[for='inputEmail']");
    let input_phone = $("label[for='inputPhoneNo']");
    let input_date = $("label[for='inputDate']");
    let input_time = $("label[for='inputTime']");
    let input_peopleNo = $("label[for='inputNumberOfPeople']");
    let book_button = $("#bookATable");

    //Eating Time Frame
    let brunch = $('.brunch').children('h1');
    let brunchDt = $('.brunch').children('.days');
    // let brunchTime = $('.brunch').children('.time');

    let lunch = $('.lunch').children('h1');
    let lunchDt = $('.lunch').children('.days');
    // let lunchTime = $('.lunch').children('.time');

    let dinner = $('.dinner').children('h1');
    let dinnerDt = $('.dinner').children('.days');
    // let dinnerTime = $('.dinner').children('.time');

    //Footer
    let newsletter = $('.newsletter');
    let newsletterPlaceHolder = $('#newsletterEmail');
    let address = $('.address');
    let social_media = $('.socialMedia');
    let author = $('.author');
    let rights = $('.rightsReserved');

       navbar_lang_links.click(function(){
            let language_opt = $(this).data('language');

            if(language_opt=='english')
                location.reload()//Reload page if EN is clicked to turn into default English language
           else{
                //Navbar
                nav_home.text(data[language_opt].nav_home)
                nav_about.text(data[language_opt].nav_about)
                nav_booking.text(data[language_opt].nav_booking)
                nav_menu.text(data[language_opt].nav_menu)
                nav_contact.text(data[language_opt].nav_contact)
                //About
                about_title.text(data[language_opt].about_title)
                about_desc.text(data[language_opt].about_desc)
                //Menu Sec
                menu_title.text(data[language_opt].menu_tittle)
                lunch_dinner.text(data[language_opt].L)
                wine_list.text(data[language_opt].W)
                business_lunch.text(data[language_opt].B)
                toDownload.text(data[language_opt].Download)
                //Booking & Delivery
                bookEvent_header.text(data[language_opt].bookEventHeader)
                bookEvent_p.text(data[language_opt].bookEventDesc)

                delivery_header.text(data[language_opt].deliveryHeader)
                delivery_p.text(data[language_opt].deliveryDesc)
                //Booking Modal
                header.text(data[language_opt].head)
                input_name.text(data[language_opt].name)
                input_email.text(data[language_opt].email)
                input_phone.text(data[language_opt].phone)
                input_date.text(data[language_opt].date)
                input_time.text(data[language_opt].time)
                input_peopleNo.text(data[language_opt].peopleNo)
                book_button.val(data[language_opt].bookButton)
                //Eating Time Frame
                brunch.text(data[language_opt].brunch)
                lunch.text(data[language_opt].lunch)
                dinner.text(data[language_opt].dinner)
                // brunchTime.text(data[language_opt].brunchT)
                // lunchTime.text(data[language_opt].lunchT)
                // dinnerTime.text(data[language_opt].dinnerT)
                brunchDt.text(data[language_opt].brunchDt)
                lunchDt.text(data[language_opt].lunchDt)
                dinnerDt.text(data[language_opt].dinerDt)
                //Footer
                newsletter.text(data[language_opt].news)
                address.text(data[language_opt].address)
                social_media.text(data[language_opt].socialMedia)
                author.text(data[language_opt].author)
                rights.text(data[language_opt].rights)
                newsletterPlaceHolder.attr('placeholder',data[language_opt].newsPlaceHolder)
            }//End Else

     });





});