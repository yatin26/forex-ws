	var cur = localStorage.getItem("rtval");
	var sym;
	if (cur == "INR") {sym="₹";}
	else if (cur == "USD") {sym="$";}
	var amt = localStorage.getItem("amt");
	var txt = sym + amt;
	var lft = localStorage.getItem("ltval");
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
			npt = "$498.11";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		} else if (amt == "100") {
			npt = "$996.22"; 
			awt = "$29.937";
			alt = "$-24.982";
			lwt = "$186.310";
			Llt = "$-71.629";
		} else if (amt == "150") { 
			npt = "$1494.33";
			awt = "$44.906";
			alt = "$-37.473";
			lwt = "$279.465";
			Llt = "$-107.444";
		} else if (amt == "200") { 
			npt = "$1992.44";
			awt = "$59.875";
			alt = "$-49.964";
			lwt = "$372.620";
			Llt = "$-143.259";
		} else if (amt == "250") {
			npt = "$2490.55"; 
			awt = "$74.844";
			alt = "$-62.454";
			lwt = "$465.775";
			Llt = "$-179.073";
		} else if (amt == "300") {
			npt = "$2988.66"; 
			awt = "$89.812";
			alt = "$-74.945";
			lwt = "$558.930";
			Llt = "$-214.888";
		} else if (amt == "350") { 
			npt = "$3486.77";
			awt = "$104.781";
			alt = "$-87.436";
			lwt = "$652.085";
			Llt = "$-250.703";
		} else if (amt == "400") { 
			npt = "$3984.88";
			awt = "$119.750";
			alt = "$-99.927";
			lwt = "$745.240";
			Llt = "$-286.517";
		} else if (amt == "450") { 
			npt = "$4482.99";
			awt = "$134.719";
			alt = "$-112.418";
			lwt = "$838.395";
			Llt = "$-322.332";
		} else if (amt == "500") { 
			npt = "$4981.10";
			awt = "$149.687";
			alt = "$-124.909";
			lwt = "$931.550";
			Llt = "$-358.146";
		} else if (amt == "1000") { 
			npt = "$9962.19";
			awt = "$299.374";
			alt = "$-249.818";
			lwt = "$1863.099";
			Llt = "$-716.293";
		} else if (amt == "1500") { 
			npt = "$14943.29";
			awt = "$449.062";
			alt = "$-374.727";
			lwt = "$2794.649";
			Llt = "$-1074.439";
		} else if (amt == "2000") { 
			npt = "$19924.38";
			awt = "$598.749";
			alt = "$-499.636";
			lwt = "$3726.198";
			Llt = "$-1432.586";
		} else if (amt == "2500") { 
			npt = "$24905.48";
			awt = "$748.436";
			alt = "$-624.545";
			lwt = "$4657.748";
			Llt = "$-1790.732";
		} else if (amt == "3000") { 
			npt = "$29886.57";
			awt = "$898.123";
			alt = "$-749.454";
			lwt = "$5589.297";
			Llt = "$-2148.879";
		} else if (amt == "3500") { 
			npt = "$34867.67";
			awt = "$1047.811";
			alt = "$-874.363";
			lwt = "$6520.847";
			Llt = "$-2507.025";
		} else if (amt == "4000") { 
			npt = "$39848.76";
			awt = "$1197.498";
			alt = "$-999.272";
			lwt = "$7452.396";
			Llt = "$-2865.172";
		} else if (amt == "4500") { 
			npt = "$44829.86";
			awt = "$1347.185";
			alt = "$-1124.181";
			lwt = "$8383.946";
			Llt = "$-3223.318";
		} else if (amt == "5000") { 
			npt = "$49810.96";
			awt = "$1496.872";
			alt = "$-1249.089";
			lwt = "$9315.495";
			Llt = "$-3581.465";
		} else if (amt == "5500") { 
			npt = "$54792.05";
			awt = "$1646.560";
			alt = "$-1373.998";
			lwt = "$10247.045";
			Llt = "$-3939.611";
		} else if (amt == "6000") { 
			npt = "$59773.15";
			awt = "$1796.247";
			alt = "$-1498.907";
			lwt = "$11178.594";
			Llt = "$-4297.758";
		} else if (amt == "6500") { 
			npt = "$64754.24";
			awt = "$1945.934";
			alt = "$-1623.816";
			lwt = "$12110.144";
			Llt = "$-4655.904";
		} else if (amt == "7000") { 
			npt = "$69735.34";
			awt = "$2095.621";
			alt = "$-1748.725";
			lwt = "$13041.693";
			Llt = "$-5014.051";
		} else if (amt == "7500") { 
			npt = "$74716.43";
			awt = "$2245.309";
			alt = "$-1873.634";
			lwt = "$13973.243";
			Llt = "$-5372.197";
		} else if (amt == "10000") { 
			npt = "$99621.91";
			awt = "$2993.745";
			alt = "$-2498.179";
			lwt = "$18630.990";
			Llt = "$-7162.930";
		} else if (amt == "15000") { 
			npt = "$149432.87";
			awt = "$4490.617";
			alt = "$-3747.268";
			lwt = "$27946.485";
			Llt = "$-10744.395";
		} else if (amt == "20000") { 
			npt = "$199243.82";
			awt = "$5987.490";
			alt = "$-4996.358";
			lwt = "$37261.980";
			Llt = "$-14325.860";
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
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "100") {
			npt = "£"; 
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "150") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "200") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "250") {
			npt = "£"; 
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "300") {
			npt = "£"; 
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "350") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "400") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "450") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "1000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "1500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "2000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "2500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "3000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "3500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "4000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "4500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "5000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "5500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "6000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "6500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "7000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "7500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "10000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "15000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "20000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
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
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "100") {
			npt = "£"; 
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "150") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "200") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "250") {
			npt = "£"; 
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "300") {
			npt = "£"; 
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "350") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "400") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "450") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "1000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "1500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "2000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "2500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "3000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "3500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "4000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "4500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "5000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "5500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "6000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "6500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "7000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "7500") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "10000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "15000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
		} else if (amt == "20000") { 
			npt = "£";
			awt = "£";
			alt = "£";
			lwt = "£";
			Llt = "£";
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
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "100") {
			npt = "$"; 
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "150") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "200") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "250") {
			npt = "$"; 
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "300") {
			npt = "$"; 
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "350") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "400") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "450") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "500") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "1000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "1500") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "2000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "2500") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "3000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "3500") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "4000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "4500") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "5000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "5500") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "6000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "6500") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "7000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "7500") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "10000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "15000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
		} else if (amt == "20000") { 
			npt = "$";
			awt = "$";
			alt = "$";
			lwt = "$";
			Llt = "$";
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
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "100") {
			npt = "€"; 
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "150") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "200") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "250") {
			npt = "€"; 
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "300") {
			npt = "€"; 
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "350") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "400") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "450") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "500") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "1000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "1500") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "2000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "2500") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "3000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "3500") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "4000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "4500") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "5000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "5500") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "6000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "6500") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "7000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "7500") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "10000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "15000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
		} else if (amt == "20000") { 
			npt = "€";
			awt = "€";
			alt = "€";
			lwt = "€";
			Llt = "€";
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