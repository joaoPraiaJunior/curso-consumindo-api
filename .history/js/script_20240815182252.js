import filtrarVideos from "./filtrarVideos.js";
import filtrarVideosPorBotoes from "./filtrarVideosPorBotoes.js";
import videos from "./videos.js";


videos();
filtrarVideos();
filtrarVideosPorBotoes();

function onLoad() {
    var now = new Date().getTime();
    var page_load_time = now - window.performance.measure("start").startTime;
    console.log("Tempo de carregamento percebido pelo usuário: " + page_load_time);
}

onLoad();



