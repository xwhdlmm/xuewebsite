var data = [];
var dataStr = '1、雪<br>\
<br>\
&nbsp;&nbsp;&nbsp;皎皎兮似轻云之蔽月<br>\
&nbsp;&nbsp;&nbsp;飘飘兮若回风之流雪<br>\
<br>\
<br>\
2、雪<br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;妆点万家清景<br>\
&nbsp;&nbsp;&nbsp;&nbsp;普绽琼花鲜丽<br>\
<br>\
<br>\
3、雪<br>\
<br>\
&nbsp;&nbsp;&nbsp;谁剪轻琼作物华<br>\
&nbsp;&nbsp;&nbsp;春绕天涯，水绕天涯<br>\
<br>\
<br>\
4、雪<br>\
<br>\
&nbsp;&nbsp;&nbsp;班姬续史之姿<br>\
&nbsp;&nbsp;&nbsp;谢庭咏雪之态<br>\
<br>\
<br>\
5、雪<br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;胪边人似月<br>\
&nbsp;&nbsp;&nbsp;&nbsp;皓腕凝霜雪<br>\
<br>\
<br>\
6、雪<br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;落尽琼花天不惜<br>\
&nbsp;&nbsp;&nbsp;&nbsp;封他梅蕊玉无香<br>\
<br>\
<br>\
7、雪<br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;擢纤纤之素手<br>\
&nbsp;&nbsp;&nbsp;&nbsp;雪皓腕而露形<br>\
<br>\
<br>\
8、千玺<br>\
<br>\
帅到不可描述<br>\
<br>\
<br>\
9、千玺<br>\
<br>\
帅到不可描述<br>\
<br>\
<br>\
10、千玺<br>\
<br>\
帅到不可描述<br>\
<br>\
<br>\
11、千玺<br>\
<br>\
帅到不可描述<br>\
<br>\
<br>\
12、千玺<br>\
<br>\
帅到不可描述<br>\
<br>\
<br>\
13、千玺<br>\
<br>\
帅到不可描述<br>\
<br>\
<br>\
14、千玺<br>\
<br>\
帅到不可描述<br>\
<br>\
<br>\
15、雪<br>\
<br>\
如果能遇见 请珍惜啊<br>\
就算只能擦肩一刹那<br>\
该如何说着时光荏苒啊<br>\
有谁能静静跟随呢<br>\
<br>\
<br>\
16、千玺<br>\
<br>\
帅到不可描述<br>\
<br>\
<br>\
';
 
//下面的代码是将dataStr中的内容拆分存放到data数组中
var d = dataStr.split('<br><br><br>');
for(var i = 0;i < d.length-1; i++) {
 var c = d[i].split('<br><br>');
 data.push({
 img:'xue'+(i)+'.jpg',
 caption:c[0].split('、')[1],
 desc:c[1]
 });
}
