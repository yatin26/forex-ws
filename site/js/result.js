	var cur = localStorage.getItem("rtval");
	var lft = localStorage.getItem("ltval");
	var sym;
	if (cur == "INR") {sym="₹";}
	else if (cur == "USD") {sym="$";}
	var amt = localStorage.getItem("amt");
	var txt = sym + amt;
	var cp = lft+cur;
	var img1 = "images/"+cp+"/a"+amt+".png";
	var img2 = "images/"+cp+"/b"+amt+".png";

	var accuracy; var npt; var nwt; var nlt; var ppt; var awt; var alt; var lwt; var Llt; var pft;

	document.getElementById("result1").innerHTML=localStorage.getItem("ltval");
	document.getElementById("result2").innerHTML=localStorage.getItem("rtval");
	document.getElementById("result3").innerHTML=txt;
	document.getElementById("cptn").innerHTML = lft + "/" + cur + " - " + sym + amt;

	g1=document.getElementById("g1");
	g2=document.getElementById("g2");
	g1.src=img1;
	g2.src=img2;

	if (lft=="USD" && cur=="INR") 
	{
		acc = "59.84%";
		nwt = "75";
		nlt = "50";
		ppt = "60%";
		pft = "1.80";

		if (amt == "50") { 
			npt = sym + "498.11";
			awt = sym + "14.969";
			alt = sym + "-12.491";
			lwt = sym + "93.155";
			Llt = sym + "-35.815";
		} else if (amt == "100") {
			npt = sym + "996.22"; 
			awt = sym + "29.937";
			alt = sym + "-24.982";
			lwt = sym + "186.310";
			Llt = sym + "-71.629";
		} else if (amt == "150") { 
			npt = sym + "1494.33";
			awt = sym + "44.906";
			alt = sym + "-37.473";
			lwt = sym + "279.465";
			Llt = sym + "-107.444";
		} else if (amt == "200") { 
			npt = sym + "1992.44";
			awt = sym + "59.875";
			alt = sym + "-49.964";
			lwt = sym + "372.620";
			Llt = sym + "-143.259";
		} else if (amt == "250") {
			npt = sym + "2490.55"; 
			awt = sym + "74.844";
			alt = sym + "-62.454";
			lwt = sym + "465.775";
			Llt = sym + "-179.073";
		} else if (amt == "300") {
			npt = sym + "2988.66"; 
			awt = sym + "89.812";
			alt = sym + "-74.945";
			lwt = sym + "558.930";
			Llt = sym + "-214.888";
		} else if (amt == "350") { 
			npt = sym + "3486.77";
			awt = sym + "104.781";
			alt = sym + "-87.436";
			lwt = sym + "652.085";
			Llt = sym + "-250.703";
		} else if (amt == "400") { 
			npt = sym + "3984.88";
			awt = sym + "119.750";
			alt = sym + "-99.927";
			lwt = sym + "745.240";
			Llt = sym + "-286.517";
		} else if (amt == "450") { 
			npt = sym + "4482.99";
			awt = sym + "134.719";
			alt = sym + "-112.418";
			lwt = sym + "838.395";
			Llt = sym + "-322.332";
		} else if (amt == "500") { 
			npt = sym + "4981.10";
			awt = sym + "149.687";
			alt = sym + "-124.909";
			lwt = sym + "931.550";
			Llt = sym + "-358.146";
		} else if (amt == "1000") { 
			npt = sym + "9962.19";
			awt = sym + "299.374";
			alt = sym + "-249.818";
			lwt = sym + "1863.099";
			Llt = sym + "-716.293";
		} else if (amt == "1500") { 
			npt = sym + "14943.29";
			awt = sym + "449.062";
			alt = sym + "-374.727";
			lwt = sym + "2794.649";
			Llt = sym + "-1074.439";
		} else if (amt == "2000") { 
			npt = sym + "19924.38";
			awt = sym + "598.749";
			alt = sym + "-499.636";
			lwt = sym + "3726.198";
			Llt = sym + "-1432.586";
		} else if (amt == "2500") { 
			npt = sym + "24905.48";
			awt = sym + "748.436";
			alt = sym + "-624.545";
			lwt = sym + "4657.748";
			Llt = sym + "-1790.732";
		} else if (amt == "3000") { 
			npt = sym + "29886.57";
			awt = sym + "898.123";
			alt = sym + "-749.454";
			lwt = sym + "5589.297";
			Llt = sym + "-2148.879";
		} else if (amt == "3500") { 
			npt = sym + "34867.67";
			awt = sym + "1047.811";
			alt = sym + "-874.363";
			lwt = sym + "6520.847";
			Llt = sym + "-2507.025";
		} else if (amt == "4000") { 
			npt = sym + "39848.76";
			awt = sym + "1197.498";
			alt = sym + "-999.272";
			lwt = sym + "7452.396";
			Llt = sym + "-2865.172";
		} else if (amt == "4500") { 
			npt = sym + "44829.86";
			awt = sym + "1347.185";
			alt = sym + "-1124.181";
			lwt = sym + "8383.946";
			Llt = sym + "-3223.318";
		} else if (amt == "5000") { 
			npt = sym + "49810.96";
			awt = sym + "1496.872";
			alt = sym + "-1249.089";
			lwt = sym + "9315.495";
			Llt = sym + "-3581.465";
		} else if (amt == "5500") { 
			npt = sym + "54792.05";
			awt = sym + "1646.560";
			alt = sym + "-1373.998";
			lwt = sym + "10247.045";
			Llt = sym + "-3939.611";
		} else if (amt == "6000") { 
			npt = sym + "59773.15";
			awt = sym + "1796.247";
			alt = sym + "-1498.907";
			lwt = sym + "11178.594";
			Llt = sym + "-4297.758";
		} else if (amt == "6500") { 
			npt = sym + "64754.24";
			awt = sym + "1945.934";
			alt = sym + "-1623.816";
			lwt = sym + "12110.144";
			Llt = sym + "-4655.904";
		} else if (amt == "7000") { 
			npt = sym + "69735.34";
			awt = sym + "2095.621";
			alt = sym + "-1748.725";
			lwt = sym + "13041.693";
			Llt = sym + "-5014.051";
		} else if (amt == "7500") { 
			npt = sym + "74716.43";
			awt = sym + "2245.309";
			alt = sym + "-1873.634";
			lwt = sym + "13973.243";
			Llt = sym + "-5372.197";
		} else if (amt == "10000") { 
			npt = sym + "99621.91";
			awt = sym + "2993.745";
			alt = sym + "-2498.179";
			lwt = sym + "18630.990";
			Llt = sym + "-7162.930";
		} else if (amt == "15000") { 
			npt = sym + "149432.87";
			awt = sym + "4490.617";
			alt = sym + "-3747.268";
			lwt = sym + "27946.485";
			Llt = sym + "-10744.395";
		} else if (amt == "20000") { 
			npt = sym + "199243.82";
			awt = sym + "5987.490";
			alt = sym + "-4996.358";
			lwt = sym + "37261.980";
			Llt = sym + "-14325.860";
		}
	}

	else if (lft=="GBP" && cur=="INR") 
	{
		acc = "51.07%";
		nwt = "95";
		nlt = "90";
		ppt = "51.35%";
		pft = "1.25";

		if (amt == "50") { 
			npt = sym + "426.48";
			awt = sym + "22.499";
			alt = sym + "-19.010";
			lwt = sym + "88.682";
			Llt = sym + "-97.419";
		} else if (amt == "100") {
			npt = sym + "852.96"; 
			awt = sym + "44.998";
			alt = sym + "-38.021";
			lwt = sym + "177.364";
			Llt = sym + "-194.839";
		} else if (amt == "150") { 
			npt = sym + "1279.44";
			awt = sym + "67.497";
			alt = sym + "-57.031";
			lwt = sym + "266.046";
			Llt = sym + "-292.258";
		} else if (amt == "200") { 
			npt = sym + "1705.92";
			awt = sym + "89.997";
			alt = sym + "-76.042";
			lwt = sym + "354.729";
			Llt = sym + "-389.677";
		} else if (amt == "250") {
			npt = sym + "2132.40"; 
			awt = sym + "112.496";
			alt = sym + "-95.052";
			lwt = sym + "443.411";
			Llt = sym + "-487.097";
		} else if (amt == "300") {
			npt = sym + "2558.88"; 
			awt = sym + "134.995";
			alt = sym + "-114.063";
			lwt = sym + "532.093";
			Llt = sym + "-584.516";
		} else if (amt == "350") { 
			npt = sym + "2985.35";
			awt = sym + "157.494";
			alt = sym + "-133.073";
			lwt = sym + "620.775";
			Llt = sym + "-681.935";
		} else if (amt == "400") { 
			npt = sym + "3411.83";
			awt = sym + "179.993";
			alt = sym + "-152.083";
			lwt = sym + "709.457";
			Llt = sym + "-779.355";
		} else if (amt == "450") { 
			npt = sym + "3838.31";
			awt = sym + "202.492";
			alt = sym + "-171.094";
			lwt = sym + "798.139";
			Llt = sym + "-876.774";
		} else if (amt == "500") { 
			npt = sym + "4264.79";
			awt = sym + "224.991";
			alt = sym + "-190.104";
			lwt = sym + "886.822";
			Llt = sym + "-974.194";
		} else if (amt == "1000") { 
			npt = sym + "8529.58";
			awt = sym + "449.983";
			alt = sym + "-380.209";
			lwt = sym + "1773.643";
			Llt = sym + "-1948.387";
		} else if (amt == "1500") { 
			npt = sym + "12794.38";
			awt = sym + "674.974";
			alt = sym + "-570.313";
			lwt = sym + "2660.465";
			Llt = sym + "-2922.581";
		} else if (amt == "2000") { 
			npt = sym + "17059.17";
			awt = sym + "899.966";
			alt = sym + "-760.417";
			lwt = sym + "3547.286";
			Llt = sym + "-3896.774";
		} else if (amt == "2500") { 
			npt = sym + "21323.96";
			awt = sym + "1124.957";
			alt = sym + "-950.522";
			lwt = sym + "4434.108";
			Llt = sym + "-4870.968";
		} else if (amt == "3000") { 
			npt = sym + "25588.75";
			awt = sym + "1349.948";
			alt = sym + "-1140.626";
			lwt = sym + "5320.929";
			Llt = sym + "-5845.161";
		} else if (amt == "3500") { 
			npt = sym + "29853.54";
			awt = sym + "1574.940";
			alt = sym + "-1330.730";
			lwt = sym + "6207.751";
			Llt = sym + "-6819.355";
		} else if (amt == "4000") { 
			npt = sym + "34118.34";
			awt = sym + "1799.931";
			alt = sym + "-1520.835";
			lwt = sym + "7094.572";
			Llt = sym + "-7793.548";
		} else if (amt == "4500") { 
			npt = sym + "38383.13";
			awt = sym + "2024.923";
			alt = sym + "-1710.939";
			lwt = sym + "7981.394";
			Llt = sym + "-8767.742";
		} else if (amt == "5000") { 
			npt = sym + "42647.92";
			awt = sym + "2249.914";
			alt = sym + "-1901.043";
			lwt = sym + "8868.215";
			Llt = sym + "-9741.935";
		} else if (amt == "5500") { 
			npt = sym + "46912.71";
			awt = sym + "2474.905";
			alt = sym + "-2091.148";
			lwt = sym + "9755.037";
			Llt = sym + "-10716.129";
		} else if (amt == "6000") { 
			npt = sym + "51177.50";
			awt = sym + "2699.897";
			alt = sym + "-2281.252";
			lwt = sym + "10641.858";
			Llt = sym + "-11690.322";
		} else if (amt == "6500") { 
			npt = sym + "55442.30";
			awt = sym + "2924.888";
			alt = sym + "-2471.356";
			lwt = sym + "11528.680";
			Llt = sym + "-12664.516";
		} else if (amt == "7000") { 
			npt = sym + "59707.09";
			awt = sym + "3149.879";
			alt = sym + "-2661.461";
			lwt = sym + "12415.501";
			Llt = sym + "-13638.709";
		} else if (amt == "7500") { 
			npt = sym + "63971.88";
			awt = sym + "3374.871";
			alt = sym + "-2851.565";
			lwt = sym + "13302.323";
			Llt = sym + "-14612.903";
		} else if (amt == "10000") { 
			npt = sym + "85295.84";
			awt = sym + "4499.828";
			alt = sym + "-3802.087";
			lwt = sym + "17736.430";
			Llt = sym + "-19483.870";
		} else if (amt == "15000") { 
			npt = sym + "127943.76";
			awt = sym + "6749.742";
			alt = sym + "-5703.130";
			lwt = sym + "26604.645";
			Llt = sym + "-29225.805";
		} else if (amt == "20000") { 
			npt = sym + "170591.68";
			awt = sym + "8999.656";
			alt = sym + "-7604.173";
			lwt = sym + "35472.860";
			Llt = sym + "-38967.740";
		}
	}

	else if (lft=="GBP" && cur=="USD") 
	{
		acc = "66.67%";
		nwt = "5";
		nlt = "3";
		ppt = "62.50%";
		pft = "3.76";

		if (amt == "50") { 
			npt = sym + "0.85";
			awt = sym + "0.232";
			alt = sym + "-0.103";
			lwt = sym + "0.355";
			Llt = sym + "-0.139";
		} else if (amt == "100") {
			npt = sym + "1.70"; 
			awt = sym + "0.464";
			alt = sym + "-0.205";
			lwt = sym + "0.711";
			Llt = sym + "-0.278";
		} else if (amt == "150") { 
			npt = sym + "2.55";
			awt = sym + "0.696";
			alt = sym + "-0.308";
			lwt = sym + "1.066";
			Llt = sym + "-0.417";
		} else if (amt == "200") { 
			npt = sym + "3.41";
			awt = sym + "0.928";
			alt = sym + "-0.411";
			lwt = sym + "1.421";
			Llt = sym + "-0.556";
		} else if (amt == "250") {
			npt = sym + "4.26"; 
			awt = sym + "1.160";
			alt = sym + "-0.513";
			lwt = sym + "1.777";
			Llt = sym + "-0.695";
		} else if (amt == "300") {
			npt = sym + "5.11"; 
			awt = sym + "1.392";
			alt = sym + "-0.616";
			lwt = sym + "2.132";
			Llt = sym + "-0.834";
		} else if (amt == "350") { 
			npt = sym + "5.96";
			awt = sym + "1.623";
			alt = sym + "-0.719";
			lwt = sym + "2.487";
			Llt = sym + "-0.973";
		} else if (amt == "400") { 
			npt = sym + "6.81";
			awt = sym + "1.855";
			alt = sym + "-0.821";
			lwt = sym + "2.842";
			Llt = sym + "-1.112";
		} else if (amt == "450") { 
			npt = sym + "7.66";
			awt = sym + "2.087";
			alt = sym + "-0.924";
			lwt = sym + "3.198";
			Llt = sym + "-1.251";
		} else if (amt == "500") { 
			npt = sym + "8.52";
			awt = sym + "2.319";
			alt = sym + "-1.027";
			lwt = sym + "3.553";
			Llt = sym + "-1.390";
		} else if (amt == "1000") { 
			npt = sym + "17.03";
			awt = sym + "4.638";
			alt = sym + "-2.053";
			lwt = sym + "7.106";
			Llt = sym + "-2.780";
		} else if (amt == "1500") { 
			npt = sym + "25.55";
			awt = sym + "6.958";
			alt = sym + "-3.080";
			lwt = sym + "10.659";
			Llt = sym + "-4.170";
		} else if (amt == "2000") { 
			npt = sym + "34.06";
			awt = sym + "9.277";
			alt = sym + "-4.107";
			lwt = sym + "14.212";
			Llt = sym + "-5.560";
		} else if (amt == "2500") { 
			npt = sym + "42.58";
			awt = sym + "11.596";
			alt = sym + "-5.133";
			lwt = sym + "17.765";
			Llt = sym + "-6.950";
		} else if (amt == "3000") { 
			npt = sym + "51.10";
			awt = sym + "13.915";
			alt = sym + "-6.160";
			lwt = sym + "21.318";
			Llt = sym + "-8.340";
		} else if (amt == "3500") { 
			npt = sym + "59.61";
			awt = sym + "16.234";
			alt = sym + "-7.187";
			lwt = sym + "24.871";
			Llt = sym + "-9.730";
		} else if (amt == "4000") { 
			npt = sym + "68.13";
			awt = sym + "18.554";
			alt = sym + "-8.213";
			lwt = sym + "28.424";
			Llt = sym + "-11.120";
		} else if (amt == "4500") { 
			npt = sym + "76.64";
			awt = sym + "20.873";
			alt = sym + "-9.240";
			lwt = sym + "31.977";
			Llt = sym + "-12.510";
		} else if (amt == "5000") { 
			npt = sym + "85.16";
			awt = sym + "23.192";
			alt = sym + "-10.267";
			lwt = sym + "35.530";
			Llt = sym + "-13.900";
		} else if (amt == "5500") { 
			npt = sym + "93.68";
			awt = sym + "25.511";
			alt = sym + "-11.293";
			lwt = sym + "39.083";
			Llt = sym + "-15.290";
		} else if (amt == "6000") { 
			npt = sym + "102.19";
			awt = sym + "27.830";
			alt = sym + "-12.320";
			lwt = sym + "42.636";
			Llt = sym + "-16.680";
		} else if (amt == "6500") { 
			npt = sym + "110.71";
			awt = sym + "30.150";
			alt = sym + "-13.347";
			lwt = sym + "46.189";
			Llt = sym + "-18.070";
		} else if (amt == "7000") { 
			npt = sym + "119.22";
			awt = sym + "32.469";
			alt = sym + "-14.373";
			lwt = sym + "49.742";
			Llt = sym + "-19.460";
		} else if (amt == "7500") { 
			npt = sym + "127.74";
			awt = sym + "34.788";
			alt = sym + "-15.400";
			lwt = sym + "53.295";
			Llt = sym + "-20.850";
		} else if (amt == "10000") { 
			npt = sym + "170.32";
			awt = sym + "46.384";
			alt = sym + "-20.533";
			lwt = sym + "71.060";
			Llt = sym + "-27.800";
		} else if (amt == "15000") { 
			npt = sym + "255.48";
			awt = sym + "69.576";
			alt = sym + "-30.800";
			lwt = sym + "106.590";
			Llt = sym + "-41.700";
		} else if (amt == "20000") { 
			npt = sym + "340.64";
			awt = sym + "92.768";
			alt = sym + "-41.067";
			lwt = sym + "142.120";
			Llt = sym + "-55.600";
		}
	}

	else if (lft=="HKD" && cur=="USD") 
	{
		acc = "33.33%";
		nwt = "2";
		nlt = "6";
		ppt = "25.00%";
		pft = "0.83";

		if (amt == "50") { 
			npt = sym + "-0.00";
			awt = sym + "0.001";
			alt = sym + "-0.000";
			lwt = sym + "0.001";
			Llt = sym + "-0.001	";
		} else if (amt == "100") {
			npt = sym + "-0.00"; 
			awt = sym + "0.002";
			alt = sym + "-0.001";
			lwt = sym + "0.003";
			Llt = sym + "-0.002";
		} else if (amt == "150") { 
			npt = sym + "-0.00";
			awt = sym + "0.003";
			alt = sym + "-0.001";
			lwt = sym + "0.004";
			Llt = sym + "-0.003";
		} else if (amt == "200") { 
			npt = sym + "-0.00";
			awt = sym + "0.005";
			alt = sym + "-0.002";
			lwt = sym + "0.005";
			Llt = sym + "-0.003";
		} else if (amt == "250") {
			npt = sym + "-0.00"; 
			awt = sym + "0.006";
			alt = sym + "-0.002";
			lwt = sym + "0.006";
			Llt = sym + "-0.004";
		} else if (amt == "300") {
			npt = sym + "-0.00"; 
			awt = sym + "0.007";
			alt = sym + "-0.003";
			lwt = sym + "0.008";
			Llt = sym + "-0.005";
		} else if (amt == "350") { 
			npt = sym + "-0.00";
			awt = sym + "0.008";
			alt = sym + "-0.003";
			lwt = sym + "0.009";
			Llt = sym + "-0.006";
		} else if (amt == "400") { 
			npt = sym + "-0.00";
			awt = sym + "0.009";
			alt = sym + "-0.004";
			lwt = sym + "0.010";
			Llt = sym + "-0.007";
		} else if (amt == "450") { 
			npt = sym + "-0.00";
			awt = sym + "0.010";
			alt = sym + "-0.004";
			lwt = sym + "0.012";
			Llt = sym + "-0.008";
		} else if (amt == "500") { 
			npt = sym + "-0.00";
			awt = sym + "0.011";
			alt = sym + "-0.004";
			lwt = sym + "0.013";
			Llt = sym + "-0.009";
		} else if (amt == "1000") { 
			npt = sym + "-0.01";
			awt = sym + "0.023";
			alt = sym + "-0.009";
			lwt = sym + "0.026";
			Llt = sym + "-0.017";
		} else if (amt == "1500") { 
			npt = sym + "-0.01";
			awt = sym + "0.034";
			alt = sym + "-0.013";
			lwt = sym + "0.039";
			Llt = sym + "-0.026";
		} else if (amt == "2000") { 
			npt = sym + "-0.02";
			awt = sym + "0.045";
			alt = sym + "-0.018";
			lwt = sym + "0.052";
			Llt = sym + "-0.034";
		} else if (amt == "2500") { 
			npt = sym + "-0.02";
			awt = sym + "0.056";
			alt = sym + "-0.022";
			lwt = sym + "0.065";
			Llt = sym + "-0.043";
		} else if (amt == "3000") { 
			npt = sym + "-0.03";
			awt = sym + "0.068";
			alt = sym + "-0.027";
			lwt = sym + "0.078";
			Llt = sym + "-0.051";
		} else if (amt == "3500") { 
			npt = sym + "-0.03";
			awt = sym + "0.079";
			alt = sym + "-0.031";
			lwt = sym + "0.091";
			Llt = sym + "-0.060";
		} else if (amt == "4000") { 
			npt = sym + "-0.04";
			awt = sym + "0.090";
			alt = sym + "-0.036";
			lwt = sym + "0.104";
			Llt = sym + "-0.068";
		} else if (amt == "4500") { 
			npt = sym + "-0.04";
			awt = sym + "0.101";
			alt = sym + "-0.040";
			lwt = sym + "0.117";
			Llt = sym + "-0.077";
		} else if (amt == "5000") { 
			npt = sym + "-0.04";
			awt = sym + "0.113";
			alt = sym + "-0.045";
			lwt = sym + "0.130";
			Llt = sym + "-0.085";
		} else if (amt == "5500") { 
			npt = sym + "-0.05";
			awt = sym + "0.124";
			alt = sym + "-0.049";
			lwt = sym + "0.143";
			Llt = sym + "-0.094";
		} else if (amt == "6000") { 
			npt = sym + "-0.05";
			awt = sym + "0.135";
			alt = sym + "-0.054";
			lwt = sym + "0.156";
			Llt = sym + "-0.102";
		} else if (amt == "6500") { 
			npt = sym + "-0.06";
			awt = sym + "0.146";
			alt = sym + "-0.058";
			lwt = sym + "0.169";
			Llt = sym + "-0.111";
		} else if (amt == "7000") { 
			npt = sym + "-0.06";
			awt = sym + "0.158";
			alt = sym + "-0.063";
			lwt = sym + "0.182";
			Llt = sym + "-0.119";
		} else if (amt == "7500") { 
			npt = sym + "-0.07";
			awt = sym + "0.169";
			alt = sym + "-0.067";
			lwt = sym + "0.195";
			Llt = sym + "-0.128";
		} else if (amt == "10000") { 
			npt = sym + "-0.09";
			awt = sym + "0.225";
			alt = sym + "-0.090";
			lwt = sym + "0.260";
			Llt = sym + "-0.170";
		} else if (amt == "15000") { 
			npt = sym + "-0.13";
			awt = sym + "0.338";
			alt = sym + "-0.135";
			lwt = sym + "0.390";
			Llt = sym + "-0.255";
		} else if (amt == "20000") { 
			npt = sym + "-0.18";
			awt = sym + "0.450";
			alt = sym + "-0.180";
			lwt = sym + "0.520";
			Llt = sym + "-0.340";
		}
	} 

	else if (lft=="EUR" && cur=="INR") 
	{
		acc = "75.00%";
		nwt = "9";
		nlt = "2";
		ppt = "81.82%";
		pft = "6.61";

		if (amt == "50") { 
			npt = sym + "109.95";
			awt = sym + "14.395";
			alt = sym + "-9.800";
			lwt = sym + "39.800";
			Llt = sym + "-18.800";
		} else if (amt == "100") {
			npt = sym + "219.90"; 
			awt = sym + "29.789";
			alt = sym + "-19.600";
			lwt = sym + "79.601";
			Llt = sym + "-37.600";
		} else if (amt == "150") { 
			npt = sym + "329.85";
			awt = sym + "43.184";
			alt = sym + "-29.400";
			lwt = sym + "119.401";
			Llt = sym + "-56.400";
		} else if (amt == "200") { 
			npt = sym + "439.80";
			awt = sym + "57.578";
			alt = sym + "-39.200";
			lwt = sym + "159.201";
			Llt = sym + "-75.200";
		} else if (amt == "250") {
			npt = sym + "549.75"; 
			awt = sym + "71.973";
			alt = sym + "-49.000";
			lwt = sym + "199.001";
			Llt = sym + "-94.000";
		} else if (amt == "300") {
			npt = sym + "659.70"; 
			awt = sym + "86.367";
			alt = sym + "-58.800";
			lwt = sym + "238.802";
			Llt = sym + "-112.800";
		} else if (amt == "350") { 
			npt = sym + "769.65";
			awt = sym + "100.762";
			alt = sym + "-68.600";
			lwt = sym + "278.602";
			Llt = sym + "-131.600";
		} else if (amt == "400") { 
			npt = sym + "879.60";
			awt = sym + "115.156";
			alt = sym + "-78.400";
			lwt = sym + "318.402";
			Llt = sym + "-150.400";
		} else if (amt == "450") { 
			npt = sym + "989.56";
			awt = sym + "129.551";
			alt = sym + "-88.200";
			lwt = sym + "358.202";
			Llt = sym + "-169.200";
		} else if (amt == "500") { 
			npt = sym + "1099.51";
			awt = sym + "143.945";
			alt = sym + "-98.000";
			lwt = sym + "398.003";
			Llt = sym + "-188.000";
		} else if (amt == "1000") { 
			npt = sym + "2199.01";
			awt = sym + "287.890";
			alt = sym + "-195.999";
			lwt = sym + "796.005";
			Llt = sym + "-376.000";
		} else if (amt == "1500") { 
			npt = sym + "3298.52";
			awt = sym + "431.835";
			alt = sym + "-293.999";
			lwt = sym + "1194.008";
			Llt = sym + "-564.000";
		} else if (amt == "2000") { 
			npt = sym + "4398.02";
			awt = sym + "575.780";
			alt = sym + "-391.999";
			lwt = sym + "1592.010";
			Llt = sym + "-752.000";
		} else if (amt == "2500") { 
			npt = sym + "5497.53";
			awt = sym + "719.725";
			alt = sym + "-489.999";
			lwt = sym + "1990.013";
			Llt = sym + "-940.000";
		} else if (amt == "3000") { 
			npt = sym + "6597.04";
			awt = sym + "863.670";
			alt = sym + "-587.998";
			lwt = sym + "2388.015";
			Llt = sym + "-1128.000";
		} else if (amt == "3500") { 
			npt = sym + "7696.54";
			awt = sym + "1007.615";
			alt = sym + "-685.998";
			lwt = sym + "2786.018";
			Llt = sym + "-1316.000";
		} else if (amt == "4000") { 
			npt = sym + "8796.05";
			awt = sym + "1151.560";
			alt = sym + "-783.998";
			lwt = sym + "3184.020";
			Llt = sym + "-1504.000";
		} else if (amt == "4500") { 
			npt = sym + "9895.55";
			awt = sym + "1295.506";
			alt = sym + "-881.998";
			lwt = sym + "3582.023";
			Llt = sym + "-1692.000";
		} else if (amt == "5000") { 
			npt = sym + "10995.06";
			awt = sym + "1439.451";
			alt = sym + "-979.997";
			lwt = sym + "3980.025";
			Llt = sym + "-1880.000";
		} else if (amt == "5500") { 
			npt = sym + "12094.57";
			awt = sym + "1583.396";
			alt = sym + "-1077.997";
			lwt = sym + "4378.028";
			Llt = sym + "-2068.000";
		} else if (amt == "6000") { 
			npt = sym + "13194.07";
			awt = sym + "1727.341";
			alt = sym + "-1175.997";
			lwt = sym + "4776.030";
			Llt = sym + "-2256.000";
		} else if (amt == "6500") { 
			npt = sym + "14393.58";
			awt = sym + "1871.286";
			alt = sym + "-1273.997";
			lwt = sym + "5174.033";
			Llt = sym + "-2444.000";
		} else if (amt == "7000") { 
			npt = sym + "15393.08";
			awt = sym + "2015.231";
			alt = sym + "-1371.996";
			lwt = sym + "5572.035";
			Llt = sym + "-2632.000";
		} else if (amt == "7500") { 
			npt = sym + "16492.59";
			awt = sym + "2159.176";
			alt = sym + "-1469.996";
			lwt = sym + "5970.038";
			Llt = sym + "-2820.000";
		} else if (amt == "10000") { 
			npt = sym + "21990.12";
			awt = sym + "2878.901";
			alt = sym + "-1959.995";
			lwt = sym + "7960.050";
			Llt = sym + "-3760.000";
		} else if (amt == "15000") { 
			npt = sym + "32985.18";
			awt = sym + "4318.352";
			alt = sym + "-2939.992";
			lwt = sym + "11940.075";
			Llt = sym + "-5640.000";
		} else if (amt == "20000") { 
			npt = sym + "43980.24";
			awt = sym + "5757.802";
			alt = sym + "-3919.990";
			lwt = sym + "15920.100";
			Llt = sym + "-7520.000";
		}
	}

	document.getElementById("NProfit").innerHTML = npt;
	document.getElementById("NWTrade").innerHTML = nwt;
	document.getElementById("NLTrade").innerHTML = nlt;
	document.getElementById("PProfit").innerHTML = ppt;
	document.getElementById("AWTrade").innerHTML = awt;
	document.getElementById("ALTrade").innerHTML = alt;
	document.getElementById("LWTrade").innerHTML = lwt;
	document.getElementById("LLTrade").innerHTML = Llt;
	document.getElementById("Pfactor").innerHTML = pft;
	document.getElementById("acuracy").innerHTML = acc;