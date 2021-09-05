"use strict";
$(window).on('load', function () {
    var options = {
        data: [
            {
                "name": "Declan Haley",
                "email": "Cras.lorem.lorem14@548nonquam.ca",
                "icon": "img/user2.png"
	},
            {
                "name": "Francis Marsh",
                "email": "neque14@548arcu.edu",
                "icon": "img/user3.png"
	},
            {
                "name": "Gage Figueroa",
                "email": "Sed.auctor.odio14@548magnis.ca",
                "icon": "img/user3.png"
	},
            {
                "name": "Asher Gay",
                "email": "Phasellus14@548nonsapien.ca",
                "icon": "img/user2.png"
	},
            {
                "name": "Erasmus Roach",
                "email": "amet14@548aptent.net",
                "icon": "img/user2.png"
	},
            {
                "name": "Francis Johnston",
                "email": "Ut.sagittis.lobortis14@548Donecsollicitudin.com",
                "icon": "img/user3.png"
	},
            {
                "name": "Dustin Mckinney",
                "email": "velit.Quisque14@548liberodui.co.uk",
                "icon": "img/user3.png"
	},
            {
                "name": "Zane Camacho",
                "email": "et.netus14@548Phasellusvitae.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Murphy Larsen",
                "email": "sit.amet14@548felisadipiscing.com",
                "icon": "img/user2.png"
	},
            {
                "name": "Shad Kemp",
                "email": "justo14@548laoreetlectus.co.uk",
                "icon": "img/user3.png"
	},
            {
                "name": "Octavius Wolfe",
                "email": "sociis14@548aptenttacitisociosqu.org",
                "icon": "img/user2.png"
	},
            {
                "name": "Cooper Bell",
                "email": "Quisque14@548apurus.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Lev Mccarthy",
                "email": "diam14@548amet.co.uk",
                "icon": "img/user3.png"
	},
            {
                "name": "Arthur Mejia",
                "email": "Nulla.dignissim14@548urna.ca",
                "icon": "img/user3.png"
	},
            {
                "name": "Ferris Cameron",
                "email": "vulputate.velit14@548In.net",
                "icon": "img/user2.png"
	},
            {
                "name": "Ivor Greer",
                "email": "nisi14@548Nuncmauriselit.ca",
                "icon": "img/user2.png"
	},
            {
                "name": "Alan Church",
                "email": "et.ipsum14@548dolor.co.uk",
                "icon": "img/user3.png"
	},
            {
                "name": "Walter Berry",
                "email": "neque14@548lacus.edu",
                "icon": "img/user3.png"
	},
            {
                "name": "Hyatt Bowman",
                "email": "lobortis.ultrices14@548mollis.org",
                "icon": "img/user2.png"
	},
            {
                "name": "Acton Bradley",
                "email": "commodo.tincidunt14@548ut.com",
                "icon": "img/user2.png"
	},
            {
                "name": "Duncan Hancock",
                "email": "Donec14@548sem.net",
                "icon": "img/user3.png"
	},
            {
                "name": "Macaulay Trujillo",
                "email": "in.sodales.elit14@548Donec.ca",
                "icon": "img/user3.png"
	},
            {
                "name": "Jack Estrada",
                "email": "nibh14@548Quisquetinciduntpede.net",
                "icon": "img/user2.png"
	},
            {
                "name": "Edward Wilkerson",
                "email": "Quisque.fringilla.euismod14@548idliberoDonec.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Clarke Mullen",
                "email": "nunc.Quisque.ornare14@548leo.com",
                "icon": "img/user3.png"
	},
            {
                "name": "Steel Rodriquez",
                "email": "a14@548diam.ca",
                "icon": "img/user2.png"
	},
            {
                "name": "Jerome Edwards",
                "email": "tincidunt14@548consectetuer.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Quentin Blevins",
                "email": "In.scelerisque14@548idrisus.co.uk",
                "icon": "img/user3.png"
	},
            {
                "name": "Maxwell Baxter",
                "email": "lacinia.mattis14@548erateget.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Beau Mcclain",
                "email": "dis.parturient14@548feugiatnon.co.uk",
                "icon": "img/user2.png"
	},
            {
                "name": "Jarrod Valenzuela",
                "email": "adipiscing14@548FuscefeugiatLorem.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Grant Rosario",
                "email": "feugiat14@548rutrumFuscedolor.co.uk",
                "icon": "img/user3.png"
	},
            {
                "name": "Wade Atkinson",
                "email": "et14@548euerosNam.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Ryder Lindsey",
                "email": "Quisque.fringilla.euismod14@548Suspendissealiquetmolestie.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Upton Schmidt",
                "email": "arcu.Nunc.mauris14@548quis.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Seth Tate",
                "email": "elit.a.feugiat14@548turpisnon.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Emery Shields",
                "email": "mi.Aliquam.gravida14@548vestibulummassarutrum.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Slade Bolton",
                "email": "venenatis.a14@548fringillami.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Lucas Yates",
                "email": "purus.in14@548idnuncinterdum.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Dean Rosa",
                "email": "vulputate.ullamcorper14@548commodoipsum.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Ahmed Daniel",
                "email": "ligula14@548idsapien.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Hector Hardin",
                "email": "egestas14@548Nullam.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Byron Dickerson",
                "email": "sociis14@548Proinultrices.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Myles Workman",
                "email": "magnis.dis14@548odioPhasellusat.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Jerry Howard",
                "email": "tortor.nibh14@548sitamet.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Igor Chase",
                "email": "sagittis14@548gravida.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Aquila Mcclure",
                "email": "dictum14@548Phasellusinfelis.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "John Hansen",
                "email": "ut14@548molestietellus.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Forrest Goodwin",
                "email": "enim.nec.tempus14@548massalobortis.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Griffin Lott",
                "email": "enim.Curabitur.massa14@548convalliserat.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Alec Cooke",
                "email": "dolor.quam.elementum14@548nonmassanon.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Malcolm Howell",
                "email": "mauris.aliquam14@548pretium.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Xavier Huber",
                "email": "elit14@548eu.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Mohammad Knowles",
                "email": "semper.pretium14@548ipsumnonarcu.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Ferdinand Larson",
                "email": "feugiat.nec.diam14@548Proinvel.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Omar Bradley",
                "email": "lectus14@548nisiCum.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Lucius Foster",
                "email": "Etiam.vestibulum.massa14@548etmalesuada.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Abraham Payne",
                "email": "vestibulum.lorem14@548vitaerisus.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Rashad Hancock",
                "email": "dignissim.pharetra14@548elitpharetraut.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Reece Waters",
                "email": "nulla.ante14@548scelerisqueloremipsum.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Hammett Nash",
                "email": "nisl.Quisque.fringilla14@548tristiquenequevenenatis.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Gregory Chan",
                "email": "mi.lorem.vehicula14@548ultricesposuere.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Bert Massey",
                "email": "Proin.vel14@548quislectusNullam.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Prescott Mccall",
                "email": "at.velit14@548eueros.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Reed Hardy",
                "email": "viverra14@548sapiencursus.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Gareth Kelley",
                "email": "Etiam14@548quismassa.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Keaton Freeman",
                "email": "mauris.erat.eget14@548ultricesDuis.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Felix Fletcher",
                "email": "Cum.sociis14@548miacmattis.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Yardley Madden",
                "email": "orci.Ut.sagittis14@548ipsumnunc.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Clayton Cabrera",
                "email": "non.lacinia14@548eratSednunc.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Burton Workman",
                "email": "Fusce14@548Uttinciduntorci.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Jamal Clayton",
                "email": "fermentum.arcu14@548consectetuercursus.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Richard Mccray",
                "email": "at.lacus14@548Phasellusataugue.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Chester Olson",
                "email": "accumsan.neque14@548lobortistellusjusto.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Cedric Ayala",
                "email": "leo14@548Duisat.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Fritz Thompson",
                "email": "ante14@548Vestibulumuteros.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Duncan Cervantes",
                "email": "ut.lacus.Nulla14@548luctussitamet.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Rooney Coleman",
                "email": "elit14@548quamvel.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Brenden Hancock",
                "email": "semper14@548ullamcorpermagna.com",
                "icon": "img/user3.png"
	},
            {
                "name": "Lewis Stafford",
                "email": "augue.scelerisque.mollis14@548pretiumetrutrum.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Tanner Mccarty",
                "email": "dui.Fusce.aliquam14@548Proin.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Uriel Brennan",
                "email": "Mauris.nulla14@548Curabitur.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Harding Long",
                "email": "cursus.a.enim14@548volutpat.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Gray Klein",
                "email": "tempus.non.lacinia14@548dolor.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Steven Barker",
                "email": "sit14@548mauris.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Hunter Odonnell",
                "email": "tincidunt.neque14@548egetmetus.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Orson Key",
                "email": "ligula.Aenean14@548et.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Nathan Conley",
                "email": "eu.tellus14@548mi.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Stuart Hewitt",
                "email": "euismod.et14@548in.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Zeus Young",
                "email": "et.nunc.Quisque14@548necorci.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Gareth Melendez",
                "email": "lorem.lorem14@548purusgravidasagittis.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Ray Hammond",
                "email": "ac14@548musProin.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Logan King",
                "email": "ante14@548sedturpisnec.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Cole Harper",
                "email": "Fusce.fermentum.fermentum14@548Nullafacilisis.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Emerson Wooten",
                "email": "pede14@548massaQuisqueporttitor.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Murphy Gomez",
                "email": "ut.molestie14@548volutpatnunc.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Norman Cherry",
                "email": "massa14@548Nullasemper.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Hammett Wong",
                "email": "nascetur.ridiculus.mus14@548scelerisquesed.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Lester Aguilar",
                "email": "Pellentesque14@548magna.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Garth Castaneda",
                "email": "Etiam.ligula14@548DonecfringillaDonec.co.uk",
                "icon": "img/user1.png"
	}
],


        getValue: "name",

        template: {
            type: "description",
            fields: {
                description: "email"
            }
        },

        list: {
            match: {
                enabled: true
            }
        },

    };

    $("#example-mail").easyAutocomplete(options);


    var options1 = {
        data: [
            {
                "name": "Declan Haley",
                "email": "Cras.lorem.lorem14@548nonquam.ca",
                "icon": "img/user2.png"
	},
            {
                "name": "Francis Marsh",
                "email": "neque14@548arcu.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Gage Figueroa",
                "email": "Sed.auctor.odio14@548magnis.ca",
                "icon": "img/user2.png"
	},
            {
                "name": "Asher Gay",
                "email": "Phasellus14@548nonsapien.ca",
                "icon": "img/user3.png"
	},
            {
                "name": "Erasmus Roach",
                "email": "amet14@548aptent.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Francis Johnston",
                "email": "Ut.sagittis.lobortis14@548Donecsollicitudin.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Dustin Mckinney",
                "email": "velit.Quisque14@548liberodui.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Zane Camacho",
                "email": "et.netus14@548Phasellusvitae.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Murphy Larsen",
                "email": "sit.amet14@548felisadipiscing.com",
                "icon": "img/user2.png"
	},
            {
                "name": "Shad Kemp",
                "email": "justo14@548laoreetlectus.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Octavius Wolfe",
                "email": "sociis14@548aptenttacitisociosqu.org",
                "icon": "img/user3.png"
	},
            {
                "name": "Cooper Bell",
                "email": "Quisque14@548apurus.ca",
                "icon": "img/user2.png"
	},
            {
                "name": "Lev Mccarthy",
                "email": "diam14@548amet.co.uk",
                "icon": "img/user3.png"
	},
            {
                "name": "Arthur Mejia",
                "email": "Nulla.dignissim14@548urna.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Ferris Cameron",
                "email": "vulputate.velit14@548In.net",
                "icon": "img/user2.png"
	},
            {
                "name": "Ivor Greer",
                "email": "nisi14@548Nuncmauriselit.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Alan Church",
                "email": "et.ipsum14@548dolor.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Walter Berry",
                "email": "neque14@548lacus.edu",
                "icon": "img/user2.png"
	},
            {
                "name": "Hyatt Bowman",
                "email": "lobortis.ultrices14@548mollis.org",
                "icon": "img/user3.png"
	},
            {
                "name": "Acton Bradley",
                "email": "commodo.tincidunt14@548ut.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Duncan Hancock",
                "email": "Donec14@548sem.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Macaulay Trujillo",
                "email": "in.sodales.elit14@548Donec.ca",
                "icon": "img/user3.png"
	},
            {
                "name": "Jack Estrada",
                "email": "nibh14@548Quisquetinciduntpede.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Edward Wilkerson",
                "email": "Quisque.fringilla.euismod14@548idliberoDonec.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Clarke Mullen",
                "email": "nunc.Quisque.ornare14@548leo.com",
                "icon": "img/user3.png"
	},
            {
                "name": "Steel Rodriquez",
                "email": "a14@548diam.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Jerome Edwards",
                "email": "tincidunt14@548consectetuer.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Quentin Blevins",
                "email": "In.scelerisque14@548idrisus.co.uk",
                "icon": "img/user3.png"
	},
            {
                "name": "Maxwell Baxter",
                "email": "lacinia.mattis14@548erateget.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Beau Mcclain",
                "email": "dis.parturient14@548feugiatnon.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Jarrod Valenzuela",
                "email": "adipiscing14@548FuscefeugiatLorem.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Grant Rosario",
                "email": "feugiat14@548rutrumFuscedolor.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Wade Atkinson",
                "email": "et14@548euerosNam.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Ryder Lindsey",
                "email": "Quisque.fringilla.euismod14@548Suspendissealiquetmolestie.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Upton Schmidt",
                "email": "arcu.Nunc.mauris14@548quis.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Seth Tate",
                "email": "elit.a.feugiat14@548turpisnon.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Emery Shields",
                "email": "mi.Aliquam.gravida14@548vestibulummassarutrum.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Slade Bolton",
                "email": "venenatis.a14@548fringillami.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Lucas Yates",
                "email": "purus.in14@548idnuncinterdum.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Dean Rosa",
                "email": "vulputate.ullamcorper14@548commodoipsum.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Ahmed Daniel",
                "email": "ligula14@548idsapien.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Hector Hardin",
                "email": "egestas14@548Nullam.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Byron Dickerson",
                "email": "sociis14@548Proinultrices.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Myles Workman",
                "email": "magnis.dis14@548odioPhasellusat.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Jerry Howard",
                "email": "tortor.nibh14@548sitamet.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Igor Chase",
                "email": "sagittis14@548gravida.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Aquila Mcclure",
                "email": "dictum14@548Phasellusinfelis.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "John Hansen",
                "email": "ut14@548molestietellus.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Forrest Goodwin",
                "email": "enim.nec.tempus14@548massalobortis.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Griffin Lott",
                "email": "enim.Curabitur.massa14@548convalliserat.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Alec Cooke",
                "email": "dolor.quam.elementum14@548nonmassanon.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Malcolm Howell",
                "email": "mauris.aliquam14@548pretium.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Xavier Huber",
                "email": "elit14@548eu.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Mohammad Knowles",
                "email": "semper.pretium14@548ipsumnonarcu.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Ferdinand Larson",
                "email": "feugiat.nec.diam14@548Proinvel.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Omar Bradley",
                "email": "lectus14@548nisiCum.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Lucius Foster",
                "email": "Etiam.vestibulum.massa14@548etmalesuada.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Abraham Payne",
                "email": "vestibulum.lorem14@548vitaerisus.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Rashad Hancock",
                "email": "dignissim.pharetra14@548elitpharetraut.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Reece Waters",
                "email": "nulla.ante14@548scelerisqueloremipsum.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Hammett Nash",
                "email": "nisl.Quisque.fringilla14@548tristiquenequevenenatis.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Gregory Chan",
                "email": "mi.lorem.vehicula14@548ultricesposuere.org",
                "icon": "img/user3.png"
	},
            {
                "name": "Bert Massey",
                "email": "Proin.vel14@548quislectusNullam.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Prescott Mccall",
                "email": "at.velit14@548eueros.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Reed Hardy",
                "email": "viverra14@548sapiencursus.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Gareth Kelley",
                "email": "Etiam14@548quismassa.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Keaton Freeman",
                "email": "mauris.erat.eget14@548ultricesDuis.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Felix Fletcher",
                "email": "Cum.sociis14@548miacmattis.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Yardley Madden",
                "email": "orci.Ut.sagittis14@548ipsumnunc.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Clayton Cabrera",
                "email": "non.lacinia14@548eratSednunc.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Burton Workman",
                "email": "Fusce14@548Uttinciduntorci.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Jamal Clayton",
                "email": "fermentum.arcu14@548consectetuercursus.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Richard Mccray",
                "email": "at.lacus14@548Phasellusataugue.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Chester Olson",
                "email": "accumsan.neque14@548lobortistellusjusto.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Cedric Ayala",
                "email": "leo14@548Duisat.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Fritz Thompson",
                "email": "ante14@548Vestibulumuteros.com",
                "icon": "img/user1.png"
	},
            {
                "name": "Duncan Cervantes",
                "email": "ut.lacus.Nulla14@548luctussitamet.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Rooney Coleman",
                "email": "elit14@548quamvel.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Brenden Hancock",
                "email": "semper14@548ullamcorpermagna.com",
                "icon": "img/user3.png"
	},
            {
                "name": "Lewis Stafford",
                "email": "augue.scelerisque.mollis14@548pretiumetrutrum.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Tanner Mccarty",
                "email": "dui.Fusce.aliquam14@548Proin.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Uriel Brennan",
                "email": "Mauris.nulla14@548Curabitur.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Harding Long",
                "email": "cursus.a.enim14@548volutpat.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Gray Klein",
                "email": "tempus.non.lacinia14@548dolor.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Steven Barker",
                "email": "sit14@548mauris.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Hunter Odonnell",
                "email": "tincidunt.neque14@548egetmetus.edu",
                "icon": "img/user1.png"
	},
            {
                "name": "Orson Key",
                "email": "ligula.Aenean14@548et.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Nathan Conley",
                "email": "eu.tellus14@548mi.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Stuart Hewitt",
                "email": "euismod.et14@548in.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Zeus Young",
                "email": "et.nunc.Quisque14@548necorci.ca",
                "icon": "img/user1.png"
	},
            {
                "name": "Gareth Melendez",
                "email": "lorem.lorem14@548purusgravidasagittis.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Ray Hammond",
                "email": "ac14@548musProin.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Logan King",
                "email": "ante14@548sedturpisnec.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Cole Harper",
                "email": "Fusce.fermentum.fermentum14@548Nullafacilisis.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Emerson Wooten",
                "email": "pede14@548massaQuisqueporttitor.org",
                "icon": "img/user1.png"
	},
            {
                "name": "Murphy Gomez",
                "email": "ut.molestie14@548volutpatnunc.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Norman Cherry",
                "email": "massa14@548Nullasemper.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Hammett Wong",
                "email": "nascetur.ridiculus.mus14@548scelerisquesed.co.uk",
                "icon": "img/user1.png"
	},
            {
                "name": "Lester Aguilar",
                "email": "Pellentesque14@548magna.net",
                "icon": "img/user1.png"
	},
            {
                "name": "Garth Castaneda",
                "email": "Etiam.ligula14@548DonecfringillaDonec.co.uk",
                "icon": "img/user1.png"
	}
],


        getValue: "name",

        template: {
            type: "iconLeft",
            fields: {
                iconSrc: "icon"
            }
        },

        list: {
            match: {
                enabled: true
            }
        },

    };

    $("#example-mail2").easyAutocomplete(options1);

});


$(window).on("resize", function () {
    $("#example-mail").easyAutocomplete(options);
    $("#example-mail2").easyAutocomplete(options1);
});
