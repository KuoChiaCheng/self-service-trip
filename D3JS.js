function linechart()
{
	var width  = 460;
	var height = 268;
	dataPath = 'https://kuochiacheng.github.io/self-service-trip/Rdata/';
	dataFile = 'output1.csv';
	dataUrl = dataPath + dataFile;

d3.csv(dataUrl, function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.size);
	});
	var maxSize = d3.max(data, function(d) { return d.size; });
	var ln = data.length;
	var ctrl  = d3.select("#linechart").append("svg").attr("width", width).attr("height", height);
	//定義size畫線的規則
	var linesSize = d3.line().
	x(function(d,i){ return i * (width/ln); }).  //寬值平均分配
	y(function(d){ return height - d.size * (height/maxSize); });

	//開始size畫線
	ctrl.append("path").data([data]).
	attr("class", "pathline").  //補上pathline屬性讓CSS控制
	attr("d", linesSize);
});

}