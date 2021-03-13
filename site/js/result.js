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

	var accuracy;
	var npt;
	var nwt;
	var nlt;
	var ppt;
	var awt;
	var alt;
	var lwt;
	var Llt;
	var pft;

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
		accuracy = "59.84%";
		nwt = "75";
		nlt = "50";
		ppt = "60%";
		pft = "1.80";

		if (amt == "50") 
		{ 
			npt = "$498.11";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "100") 
		{
			npt = "$996.22"; 
			awt = "$29.937";
			alt = "$-24.982";
			lwt = "$186.310";
			Llt = "$-71.629";
		}
		else if (amt == "150") 
		{ 
			npt = "$1494.33";
			awt = "$44.906";
			alt = "$-37.473";
			lwt = "$279.465";
			Llt = "$-107.444";
		}
		else if (amt == "200") 
		{ 
			npt = "$1992.44";
			awt = "$59.875";
			alt = "$-49.964";
			lwt = "$372.620";
			Llt = "$-143.259";
		}
		else if (amt == "250") 
		{
			npt = "$2490.55"; 
			awt = "$74.844";
			alt = "$-62.454";
			lwt = "$465.775";
			Llt = "$-179.073";
		}
		else if (amt == "300") 
		{
			npt = "$2988.66"; 
			awt = "$89.812";
			alt = "$-74.945";
			lwt = "$558.930";
			Llt = "$-214.888";
		}
		else if (amt == "350") 
		{ 
			npt = "$3486.77";
			awt = "$104.781";
			alt = "$-87.436";
			lwt = "$652.085";
			Llt = "$-250.703";
		}
		else if (amt == "400") 
		{ 
			npt = "$3984.88";
			awt = "$119.750";
			alt = "$-99.927";
			lwt = "$745.240";
			Llt = "$-286.517";
		}
		else if (amt == "450") 
		{ 
			npt = "$4482.99";
			awt = "$134.719";
			alt = "$-112.418";
			lwt = "$838.395";
			Llt = "$-322.332";
		}
		else if (amt == "500") 
		{ 
			npt = "$4981.10";
			awt = "$149.687";
			alt = "$-124.909";
			lwt = "$931.550";
			Llt = "$-358.146";
		}
		else if (amt == "1000") 
		{ 
			npt = "$9962.19";
			awt = "$299.374";
			alt = "$-249.818";
			lwt = "$1863.099";
			Llt = "$-716.293";
		}
		else if (amt == "1500") 
		{ 
			npt = "$14943.29";
			awt = "$449.062";
			alt = "$-374.727";
			lwt = "$2794.649";
			Llt = "$-1074.439";
		}
		else if (amt == "2000") 
		{ 
			npt = "$19924.38";
			awt = "$598.749";
			alt = "$-499.636";
			lwt = "$3726.198";
			Llt = "$-1432.586";
		}
		else if (amt == "2500") 
		{ 
			npt = "$24905.48";
			awt = "$748.436";
			alt = "$-624.545";
			lwt = "$4657.748";
			Llt = "$-1790.732";
		}
		else if (amt == "3000") 
		{ 
			npt = "$29886.57";
			awt = "$898.123";
			alt = "$-749.454";
			lwt = "$5589.297";
			Llt = "$-2148.879";
		}
		else if (amt == "3500") 
		{ 
			npt = "$34867.67";
			awt = "$1047.811";
			alt = "$-874.363";
			lwt = "$6520.847";
			Llt = "$-2507.025";
		}
		else if (amt == "4000") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "4500") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "5000") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "5500") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "6000") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "6500") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "6000") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "7500") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "10000") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "15000") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
		}
		else if (amt == "20000") 
		{ 
			npt = "$";
			awt = "$14.969";
			alt = "$-12.491";
			lwt = "$93.155";
			Llt = "$-35.815";
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
	document.getElementById("accuracy").innerHTML = accuracy;