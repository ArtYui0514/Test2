window.addEventListener("DOMContentLoaded",function(){

	var areaSelect = document.getElementById("area");
	var prefSelect = document.getElementById("pref");

	var prefList = [
		["北海道","青森","岩手","岩手","秋田","山形","福島"],
		["東京","茨城","栃木","群馬","埼玉","千葉","神奈川"],
		["新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知"],
		["京都","大阪","三重","滋賀","兵庫","奈良","和歌山"],
		["鳥取","島根","岡山","広島","山口"],
		["徳島" ,"香川","愛媛","高知"],
		["福岡","佐賀","長崎","大分","熊本","宮崎","鹿児島","沖縄"]
	];

		areaSelect.addEventListener("change", function(){
			prefSelect.innerHTML = "";

			if( this.value == "") return;

			var list = prefList[this.value];
			for(var i=0; i<list.length; i++){
				var option = document.createElement('option');
				option.value = i;
				option.text = list[i];
				prefSelect.appendChild(option);
			}
		}
	);
});
