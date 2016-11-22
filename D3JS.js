function LineChart()
{
	var width  = 460;
	var height = 268;
	dataPath = 'https://kuochiacheng.github.io/self-service-trip/Rdata/';
	dataFile = 'outputV2.csv';
	dataUrl = dataPath + dataFile;

d3.csv(dataUrl, function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.word);
		console.log(d.freq);
	});
	var maxFreq = d3.max(data, function(d) { return d.freq; });
	var ln = data.length;
	var ctrl  = d3.select("#kuo").append("svg").attr("width", width).attr("height", height);
	//定義freq畫線的規則
	var linesFreq = d3.line().
	x(function(d,i){ return i * (width/ln); }).  //寬值平均分配
	y(function(d){ return height - d.Freq * (height/maxFreq); });
	//開始freq畫線
	ctrl.append("path").data([data]).
	attr("class", "pathline")  //補上pathline屬性讓CSS控制
});

}