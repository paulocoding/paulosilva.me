var getAge = function (d, m, y) {
    var bd = new Date();
    bd.setFullYear(y, m, d);
    bd = bd.getTime();
    // 1000ms*60s*60m*24h*365.25y
    // 31557600000 ms per year
    return Math.floor((Date.now() - bd)/31557600000);
  };
