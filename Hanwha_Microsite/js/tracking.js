var trackingTitle = "";
function pageTracking(txt)
{
	trackingTitle = txt;
	if (txt == "")
	{
		switch (featureIndex)
		{
			case 0:
			{
				trackingTitle = "SOLAR ENERGY";
				break;
			}case 1:
			{
				if (nowShowPage == 1)
				{
					trackingTitle = "THE GROWTH IN POPULARITY OF SOLAR ENERGY - 1";
				}else if (nowShowPage == 2)
				{
					trackingTitle = "THE GROWTH IN POPULARITY OF SOLAR ENERGY - 2";
				}
				
				break;
			}case 2:
			{
				trackingTitle = "LEADS ENERGY PARADIGM SHIFT";
				break;
			}case 3:
			{
				trackingTitle = "GLOBAL R&D NETWORK";
				break;
			}case 5:
			{
				trackingTitle = "MILESTONE";
				break;
			}case 6:
			{
				trackingTitle = "DON'T JUST BUY PERC, BUY Q.ANTUM";
				break;
			}case 7:
			{
				trackingTitle = "Advanced Module Performance";
				break;
			}case 9:
			{
				trackingTitle = "EVOLVING FROM PERC TO Q.ANTUM: YIELD SECURITY";
				break;
			}case 10:
			{
				if ($("body").hasClass("w_vw"))
				{
					trackingTitle = "ANTI-PID / ANTI-LID LIGHT INDUCED DEGRADATION";
				}else{
					if (nowShowPage == 10)
					{
						trackingTitle = "ANTI-PID";
					}else if (nowShowPage == 11)
					{
						trackingTitle = "ANTI-LID LIGHT INDUCED DEGRADATION";
					}
				}
				break;
			}case 11:
			{
				if ($("body").hasClass("w_vw"))
				{
					trackingTitle = "HOT-SPOT PROTECT / TRA.Q™";
				}else{
					if (nowShowPage == 12)
					{
						trackingTitle = "HOT-SPOT PROTECT";
					}else if (nowShowPage == 13)
					{
						trackingTitle = "TRA.Q™";
					}
				}
				break;
			}case 12:
			{
				trackingTitle = "CERTIFIED EFFICIENCY";
				break;
			}case 13:
			{
				trackingTitle = "LEVEL OF POWER GENERATION : STANDARD VS. Q.ANTUM";
				break;
			}case 14:
			{
				trackingTitle = "DR. JÖRG MÜLLER INTERVIEW";
				break;
			}case 15:
			{
				trackingTitle = "UNCOMPROMISING QUALITY ASSURANCE";
				break;
			}case 16:
			{
				trackingTitle = "Our Modules Work Reliable Regardless of Harsh Environment";
				break;
			}case 17:
			{
				trackingTitle = "DR. KARL HEINZ KUSTERS INTERVIEW";
				break;
			}case 18:
			{
				trackingTitle = "'ENGINEERED IN GERMANY' EARNS GLOBAL RECOGNITION";
				break;
			}case 19:
			{
				trackingTitle = "2017 INTERSOLAR AWARD";
				break;
			}case 20:
			{
				trackingTitle = "PV MAGAZINE AWARD";
				break;
			}case 21:
			{
				trackingTitle = "EUPD RESEARCH TOP BRAND PV 2017";
				break;
			}case 22:
			{
				trackingTitle = "SOLAR INDUSTRY AWARDS 2015";
				break;
			}case 24:
			{
				trackingTitle = "REWRITING HISTORY OF SOLAR ENERGY WITH THE WORLD’S LARGEST PRODUCTION CAPACITY";
				break;
			}case 25:
			{
				trackingTitle = "PROVIDING ENERGY SOLUTIONS TO GLOBAL MARKET";
				break;
			}case 26:
			{
				trackingTitle = "SOLAR ENERGY FOR ALL";
				break;
			}
		}
	}

	if (trackingTitle != "")
	{
		console.log("featureIndex : " + featureIndex + ", trackingTitle : Solar RnD>" + trackingTitle);

		if (typeof scTrackPage === 'function') {
			console.log("scTrackPage Send : Solar RnD>" + trackingTitle);
			scTrackPage("Solar RnD>" + trackingTitle);
		}else{
			console.log("scTrackPage not function");
		}
	}
}

function innerTracking(txt)
{
	if (txt != "")
	{
		if (typeof dtmDataLayer === 'object') {
			console.log("internallink Send : " + txt);
			dtmDataLayer.internallink=txt; 
			_satellite.track('internallink');
		}else{
			console.log("dtmDataLayer not function");
		}
	}	
}