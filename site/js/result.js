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
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "100") {
			awt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "150") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "200") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "250") {
			awt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "300") {
			awt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "350") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "400") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "450") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "1000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "1500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "2000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "2500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "3000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "3500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "4000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "4500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "5000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "5500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "6000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "6500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "7000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "7500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "10000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "15000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "20000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
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
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "100") {
			awt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "150") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "200") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "250") {
			awt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "300") {
			awt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "350") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "400") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "450") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "1000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "1500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "2000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "2500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "3000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "3500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "4000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "4500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "5000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "5500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "6000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "6500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "7000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "7500") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "10000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "15000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "20000") { 
			awt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
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
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "100") {
			npt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "150") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "200") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "250") {
			npt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "300") {
			npt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "350") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "400") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "450") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "1000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "1500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "2000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "2500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "3000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "3500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "4000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "4500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "5000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "5500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "6000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "6500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "7000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "7500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "10000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "15000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "20000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
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
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "100") {
			npt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "150") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "200") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "250") {
			npt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "300") {
			npt = sym + ""; 
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "350") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "400") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "450") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "1000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "1500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "2000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "2500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "3000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "3500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "4000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "4500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "5000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "5500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "6000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "6500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "7000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "7500") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "10000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "15000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
		} else if (amt == "20000") { 
			npt = sym + "";
			awt = sym + "";
			alt = sym + "";
			lwt = sym + "";
			Llt = sym + "";
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