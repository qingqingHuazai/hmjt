export class Script {
  addScritp(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.id="Amap";
    script.onload = function () {
      if (callback != undefined || callback != null) {
        setTimeout(function () {
          callback();
        }, 1000)
      }
    }
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}




