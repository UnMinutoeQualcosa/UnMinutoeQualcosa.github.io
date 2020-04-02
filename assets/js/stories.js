var currentSkin = getCurrentSkin();

class Audio {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}


const audioList = [
    new Audio("GiuseppeDambra", 2020, 3, 21),
    new Audio("AriannaFlorio", 2020, 3, 21),
    new Audio("AmicaCarolina", 2020, 3, 21),
    new Audio("EdgardoMariaIozia", 2020, 3, 21),
    new Audio("PierangeloMilano", 2020, 3, 21),
    new Audio("GianmarcoPorcellini", 2020, 3, 21),
    new Audio("MauroValentini", 2020, 3, 21),
    new Audio("ChiaraBonanni", 2020, 3, 21),
    new Audio("MartinaGermaniRiccardi", 2020, 3, 21),
    new Audio("DanieleAltinapoesia", 2020, 3, 21),
    new Audio("AndreaDevinco", 2020, 3, 21),
    new Audio("MarilenaLualdi", 2020, 3, 21),
    new Audio("NicolaPrudente", 2020, 3, 21),
    new Audio("GiovanniSalvini", 2020, 3, 21),
    new Audio("AliceSponton", 2020, 3, 21),
    new Audio("SabrinaQuartieri", 2020, 3, 21),
    new Audio("Paziente0", 2020, 3, 21),
    new Audio("FabioSabatini", 2020, 3, 21),
    new Audio("FlaviaAmoroso", 2020, 3, 21),
    new Audio("BendettoPalazzi", 2020, 3, 21),
    new Audio("CristianaFioroni", 2020, 3, 21),
    new Audio("IdaNapolitano", 2020, 3, 21),
    new Audio("SimonettaSimoncini", 2020, 3, 21),
    new Audio("AlessandraPaparatty", 2020, 3, 21),
    new Audio("GiuliaSolari", 2020, 3, 21),
    new Audio("AlessandraPaparatty2", 2020, 3, 21),
    new Audio("CarolinaCioffi", 2020, 3, 21),
    new Audio("CristianLongo", 2020, 3, 21),
    new Audio("DanieleAltina", 2020, 3, 21),
    new Audio("DanieleAltina2", 2020, 3, 21),
    new Audio("EdoardoMecca", 2020, 3, 21),
    new Audio("ElisabettaManuzzi", 2020, 3, 21),
    new Audio("FidanzatoCarolinaCioffi", 2020, 3, 21),
    new Audio("FlaviaTrupia", 2020, 3, 21),
    new Audio("FrancescaSpasiano", 2020, 3, 21),
    new Audio("FrancescoVellotti", 2020, 3, 21),
    new Audio("FrancescoZani", 2020, 3, 21),
    new Audio("FrancescoZani2", 2020, 3, 21),
    new Audio("FrancescoZani3", 2020, 3, 21),
    new Audio("GiovanniVerniani", 2020, 3, 21),
    new Audio("Herbert Cioffi", 2020, 3, 21),
    new Audio("JJGiacomozzi", 2020, 3, 21),
    new Audio("LorenzoLuporini", 2020, 3, 21),
    new Audio("LucioAltina", 2020, 3, 21),
    new Audio("MatteoButtinoni", 2020, 3, 21),
    new Audio("RobertoSalis", 2020, 3, 21),
    new Audio("SaraBrusco", 2020, 3, 21),
    new Audio("ShadiCioffi", 2020, 3, 21),
    new Audio("ShadiCioffi2", 2020, 3, 21),
    new Audio("ShadiCioffi3", 2020, 3, 21),
    new Audio("ShadiCioffi4", 2020, 3, 21),
    new Audio("FeniciaRocco", 2020, 3, 21),
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
                [value.name, "video", 0, "assets/mp3/" + value.name + ".mp3", "", "", false, false, timestamp(value.year, value.month, value.day)],
            ]
        )
    )
});