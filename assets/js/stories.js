var currentSkin = getCurrentSkin();

class Audio {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

// N.B. il mese parte da 0 quindi 3 significa Aprile
const audioList = [
    new Audio("MolliniDiChiara", 2020, 3, 4),
    new Audio("RaffaeleFerrigni", 2020, 3, 4),
    new Audio("SaraDipalma", 2020, 3, 4),
    new Audio("SimoneMarangoni", 2020, 3, 4),
    new Audio("GiuseppeDambra", 2020, 3, 2),
    new Audio("AriannaFlorio", 2020, 3, 2),
    new Audio("AmicaCarolina", 2020, 3, 2),
    new Audio("EdgardoMariaIozia", 2020, 3, 2),
    new Audio("PierangeloMilano", 2020, 3, 2),
    new Audio("GianmarcoPorcellini", 2020, 3, 2),
    new Audio("MauroValentini", 2020, 3, 2),
    new Audio("ChiaraBonanni", 2020, 3, 2),
    new Audio("MartinaGermaniRiccardi", 2020, 3, 2),
    new Audio("DanieleAltinapoesia", 2020, 3, 2),
    new Audio("AndreaDevinco", 2020, 3, 2),
    new Audio("MarilenaLualdi", 2020, 3, 2),
    new Audio("NicolaPrudente", 2020, 3, 2),
    new Audio("GiovanniSalvini", 2020, 3, 2),
    new Audio("AliceSponton", 2020, 3, 2),
    new Audio("SabrinaQuartieri", 2020, 3, 2),
    new Audio("Paziente0", 2020, 3, 2),
    new Audio("FabioSabatini", 2020, 3, 2),
    new Audio("FlaviaAmoroso", 2020, 3, 2),
    new Audio("BendettoPalazzi", 2020, 3, 2),
    new Audio("CristianaFioroni", 2020, 3, 2),
    new Audio("IdaNapolitano", 2020, 3, 2),
    new Audio("SimonettaSimoncini", 2020, 3, 2),
    new Audio("AlessandraPaparatty", 2020, 3, 2),
    new Audio("GiuliaSolari", 2020, 3, 2),
    new Audio("AlessandraPaparatty2", 2020, 3, 2),
    new Audio("CarolinaCioffi", 2020, 3, 2),
    new Audio("CristianLongo", 2020, 3, 2),
    new Audio("DanieleAltina", 2020, 3, 2),
    new Audio("DanieleAltina2", 2020, 3, 2),
    new Audio("EdoardoMecca", 2020, 3, 2),
    new Audio("ElisabettaManuzzi", 2020, 3, 2),
    new Audio("FidanzatoCarolinaCioffi", 2020, 3, 2),
    new Audio("FlaviaTrupia", 2020, 3, 2),
    new Audio("FrancescaSpasiano", 2020, 3, 2),
    new Audio("FrancescoVellotti", 2020, 3, 2),
    new Audio("FrancescoZani", 2020, 3, 2),
    new Audio("FrancescoZani2", 2020, 3, 2),
    new Audio("FrancescoZani3", 2020, 3, 2),
    new Audio("GiovanniVerniani", 2020, 3, 2),
    new Audio("Herbert Cioffi", 2020, 3, 2),
    new Audio("JJGiacomozzi", 2020, 3, 2),
    new Audio("LorenzoLuporini", 2020, 3, 2),
    new Audio("LucioAltina", 2020, 3, 2),
    new Audio("MatteoButtinoni", 2020, 3, 2),
    new Audio("RobertoSalis", 2020, 3, 2),
    new Audio("SaraBrusco", 2020, 3, 2),
    new Audio("ShadiCioffi", 2020, 3, 2),
    new Audio("ShadiCioffi2", 2020, 3, 2),
    new Audio("ShadiCioffi3", 2020, 3, 2),
    new Audio("ShadiCioffi4", 2020, 3, 2),
    new Audio("FeniciaRocco", 2020, 3, 2),
];


var stories = new Zuck('stories', {
    backNative: true,
    previousTap: true,
    skin: currentSkin['name'],
    autoFullScreen: currentSkin['params']['autoFullScreen'],
    avatars: currentSkin['params']['avatars'],
    paginationArrows: currentSkin['params']['paginationArrows'],
    list: currentSkin['params']['list'],
    cubeEffect: currentSkin['params']['cubeEffect'],
    localStorage: true,
    stories: audioList.map(value =>
        Zuck.buildTimelineItem(
            value.name,
            "assets/img/UMEQ-01.png",
            "",
            "",
            timestamp(value.year, value.month, value.day),
            [
                [value.name, "video", 180, "assets/mp3/" + value.name + ".mp3", "", "", false, false, timestamp(value.year, value.month, value.day)],
            ]
        )
    )
});