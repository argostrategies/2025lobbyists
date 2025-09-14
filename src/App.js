import React, { useState, useMemo } from "react";
// Use RELATIVE imports so CRA can resolve them without alias configuration:
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";

const lobbyists = [
{
  "name": "AB Public Affairs ",
  "email": "anne@abpublicaffairs.com ",
  "phone": "206-913-7880",
  "address": "4412 California Ave SW #16728, Seattle, WA 98116",
  "clients": [
    "AARP WA ST OFFICE",
    "CAMPION ADVOCACY FUND",
    "State of WA Human Rights Commission",
    "Washington State Public Health Association"
  ]
},
{
  "name": "ABBY G MOORE",
  "email": "ABBY@ABBYMOOREPA.COM",
  "phone": "2532300451",
  "address": "1624 Water Street SW , Olympia, WA 98501",
  "clients": [
    "AMAROK",
    "Association for Accessible Medicines",
    "Association of Health Information Outsourcing Services (AHIOS) (thru MultiState Associates LLC)",
    "BrightSpring Health Services (THRU MULTISTATE ASSOCIATES LLC)",
    "EMD Serono c/o MultiState Associates LLC",
    "Haploos Inc",
    "INDIVIOR PLC",
    "JENOPTIK Smart Mobility Solutions LLC",
    "Lafayette Square Foundation, Inc.",
    "MASTERCARD WORLDWIDE",
    "NCART",
    "Public Libraries of Washington",
    "Recology",
    "WA COUNCIL FOR BEHAVIORAL HEALTH",
    "WA INDEPENDENT TELECOMMUNICATIONS ASSN",
    "Washington Behavioral Health Alliance",
    "Wireless Infrastructure Association (thru MultiState Associates LLC)"
  ]
},
{
  "name": "ADAM GLICKMAN",
  "email": "amber.aman@seiu775.org",
  "phone": "4254401856",
  "address": "215 Columbia, Seattle, WA 98104",
  "clients": [
    "SEIU 775"
  ]
},
{
  "name": "AHNE PLLC*",
  "email": "ahne@protonmail.com",
  "phone": "3607891641",
  "address": "PO BOX 2528 , OLYMPIA, WA 98507",
  "clients": [
    "CGI TECHNOLOGIES & SOLUTIONS INC",
    "OVERTON & ASSOC",
    "PORT GAMBLE S'KLALLAM TRIBE",
    "SPOKANE TRIBE OF INDIANS"
  ]
},
{
  "name": "AJ Johnson",
  "email": "aj@wscff.org",
  "phone": "360-943-3030",
  "address": "1069 Adams Street SE, Olympia, WA 98501",
  "clients": [
    "WA ST COUNCIL OF FIRE FIGHTERS"
  ]
},
{
  "name": "ALEX HUR",
  "email": "ALEXH55@GMAIL.COM",
  "phone": "(206)795-8047",
  "address": "8416 17TH AVE SW , SEATTLE, WA 98106",
  "clients": [
    "COMMUNITIES IN SCHOOLS OF WA",
    "Can Manufacturers Institute",
    "Cities Insurance Assn of WA",
    "Grindr LLC",
    "Inatai Foundation",
    "MASTER BLDRS ASSN OF KING & SNO COUNTIES",
    "Meta Platforms, Inc.",
    "NON-PROFIT INSURANCE PROGRAM",
    "Northwest Education Access",
    "ONEAMERICA",
    "Ripple",
    "STATEWIDE POVERTY ACTION NETWORK",
    "Schools Insurance Assn of WA",
    "UNITED SCHOOLS INSURANCE PROGRAM",
    "WA RURAL CO INSURANCE PROGRAM",
    "WFIS",
    "Washington Schools Risk Management Pool"
  ]
},
{
  "name": "ALISHA BENSON",
  "email": "ABENSON@GREATERSPOKANE.ORG",
  "phone": "5096241393",
  "address": "801 W RIVERSIDE STE 200, SPOKANE, WA 99201",
  "clients": [
    "GREATER SPOKANE INC"
  ]
},
{
  "name": "ALLIANCES NORTHWEST*",
  "email": "ELIASON@ALLIANCESNW.COM",
  "phone": "2066504364",
  "address": "3322 164th St SW , Lynnwood, WA 98087",
  "clients": [
    "AMAZON.COM SERVICES LLC",
    "BP AMERICA INC",
    "Delta Dental of WA",
    "Fiserv, Inc.",
    "New York Life Insurance Company",
    "PUGET SOUND ENERGY INC",
    "PepsiCo, Inc.",
    "Synchrony Financial",
    "Trupanion, Inc.",
    "WA ASSN OF REALTORS"
  ]
},
{
  "name": "AMBER CARTER GOVT RELATIONS LLC*",
  "email": "AMBER.CARTER@COMCAST.NET",
  "phone": "3605614861",
  "address": "120 41ST AVE NE , OLYMPIA, WA 98506",
  "clients": [
    "AMERICAN RECYCLABLE PLASTIC BAG ALLIANCE",
    "COLUMBIA RIVER STEAMSHIP OPERATORS ASSN",
    "Coalition for Protein Packaging",
    "IDENTITY CLARK CO",
    "MARITIME FIRE & SAFETY ASSN",
    "Novolex",
    "PORT OF VANCOUVER",
    "PORTLAND VANCOUVER JUNCTION RAILROAD",
    "Seattle Mariners",
    "The American Waterways Operators",
    "WA RETAIL ASSN",
    "Washington Workforce Association"
  ]
},
{
  "name": "AMY R FREEMAN",
  "email": "AMY@AMYFREEMANLAW.COM",
  "phone": "2064918843",
  "address": "1725 MARKET ST #219, SEATTLE, WA 98107",
  "clients": [
    "MULTI-SERVICE CENTER LONG TERM CARE OMBUDSMAN PROGRAM"
  ]
},
{
  "name": "ANDREA E HOWELL",
  "email": "ahowell@spi-ind.com",
  "phone": "5303788104",
  "address": "PO Box 496028 , Redding, CA 96049",
  "clients": [
    "Sierra Pacific Industries"
  ]
},
{
  "name": "ANDREA IMLER",
  "email": "AIMLER@WTA.ORG",
  "phone": "2069658558",
  "address": "705 2ND AVE #300, SEATTLE, WA 98104",
  "clients": [
    "Washington Trails Association"
  ]
},
{
  "name": "ANDREA M TULL",
  "email": "compliance_wa_centene_1@multistate.us",
  "phone": "2534421510",
  "address": "1145 BROADWAY STE 300, TACOMA, WA 98402",
  "clients": [
    "Centene Corporation on behalf of its affiliates and subsidiaries"
  ]
},
{
  "name": "ANDREW J BUSZ",
  "email": "ANDREWB@WSHA.ORG",
  "phone": "2062162533",
  "address": "999 Third Avenue, Suite 1400, SEATTLE, WA 98104",
  "clients": [
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "ANN VINING",
  "email": "ANN@NOHLA.ORG",
  "phone": "2063256464",
  "address": "1301 5th Ave Ste 1200 , SEATTLE, WA 98101-2677",
  "clients": [
    "Northwest Health Law Advocates"
  ]
},
{
  "name": "ANNE E BRYANT",
  "email": "ANNE@PHYINS.COM",
  "phone": "2063437300",
  "address": "601 Union Street Suite 500, SEATTLE, WA 98101",
  "clients": [
    "Physicians Insurance RRG",
    "Physicians Insurance a Mutual Co"
  ]
},
{
  "name": "AXEL SWANSON",
  "email": "ASWANSON@WSAC.ORG",
  "phone": "3604893021",
  "address": "206 10TH AVE SE, OLYMPIA, WA 98501",
  "clients": [
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Aaron Czyzewski",
  "email": "sicaem@me.com",
  "phone": "2064323637",
  "address": "618 NW 3rd St , Renton, WA 98057",
  "clients": [
    "FOOD LIFELINE"
  ]
},
{
  "name": "Aaron Dickson",
  "email": "aaron@communityemploymentalliance.org",
  "phone": "3605360125",
  "address": "2119 Humboldt Street , Bellingham, WA 98225",
  "clients": [
    "Community Employment Alliance"
  ]
},
{
  "name": "Aaron Holmes",
  "email": "aaron@fulcrumgovstrategies.com",
  "phone": "2174160822",
  "address": "21 Brighton Rd, Springfield, IL 62702",
  "clients": [
    "Vapor Technology Assoc"
  ]
},
{
  "name": "Aaron Hunt ",
  "email": "amhunt@up.com",
  "phone": "503-249-3079",
  "address": "301 NE 2nd Ave, Portland, OR 97232",
  "clients": [
    "UNION PACIFIC RAILROAD CO"
  ]
},
{
  "name": "Aaron Keating",
  "email": "aaron@eoionline.org",
  "phone": "2065296371",
  "address": "603 Stewart Street Suite 715, Seattle, WA 98101",
  "clients": [
    "ECONOMIC OPPORTUNITY INSTITUTE"
  ]
},
{
  "name": "Aaron Ostrom",
  "email": "aaron@fusewashington.org",
  "phone": "2064210133",
  "address": "1402 Third Ave., Suite 406 , Seattle, WA 98101",
  "clients": [
    "Fuse Washington"
  ]
},
{
  "name": "Adam V Day",
  "email": "Adam@thecivicforge.com",
  "phone": "2069142170",
  "address": "11437 Vashon Hwy SW Suite 300, Vashon, WA 98070",
  "clients": [
    "Vashon Park District"
  ]
},
{
  "name": "Adam Zarrin",
  "email": "compliance_wa_bcu_1@multistate.us",
  "phone": "2029691823 x 2228",
  "address": "10 G Street NE, Suite 510, Washington, DC 20002",
  "clients": [
    "Blood Cancer United, Inc."
  ]
},
{
  "name": "Adrienne Stuart",
  "email": "adriennestuart@gmail.com",
  "phone": "2066054201",
  "address": "6135 Panorama Drive NE, Tacoma, WA 98422",
  "clients": [
    "Open Doors for Multicultural Families"
  ]
},
{
  "name": "Advocates, Inc.",
  "email": "EHRENFLYGARE@GMAIL.COM",
  "phone": "2533106552",
  "address": "PO BOX 24444, Federal Way, WA 98093",
  "clients": [
    "Active in Democracy on behalf of Local 31",
    "American Car Rental Association",
    "Ball Corporation",
    "Cithaeron",
    "Electronic Transactions Association",
    "Friends of Boeing Field",
    "Hometap Equity Partners, LLC",
    "Kenmore Air Harbor, LLC",
    "Moneytree, Inc.",
    "NAIOP Washington State",
    "PUYALLUP TRIBE OF INDIANS",
    "RAI Services Company",
    "Veritec Solutions",
    "Waymo LLC",
    "Wild Salmon Center"
  ]
},
{
  "name": "Aidan Ali-Sullivan",
  "email": "waymo2@politicomlaw.com",
  "phone": "4159032800",
  "address": "28 Liberty Ship Way, Sausalito, CA 94965",
  "clients": [
    "Waymo LLC"
  ]
},
{
  "name": "Alasdair Whitney",
  "email": "awhitney@ij.org",
  "phone": "7036829320",
  "address": "901 N. Glebe Road Suite 900, Arlington, VA 22203",
  "clients": [
    "Institute for Justice"
  ]
},
{
  "name": "Alessandra de la Torre",
  "email": "alessandra@nwenergy.org",
  "phone": "(206) 621-0094 ext 114",
  "address": "811 1st Ave, Suite 305, Seattle, WA 98104",
  "clients": [
    "NORTHWEST ENERGY COALITION"
  ]
},
{
  "name": "Alex Alston Consulting",
  "email": "Alex@alexalstonconsulting.com",
  "phone": "253-370-1482",
  "address": "118 19th Ave. SW, Olympia, WA 98105",
  "clients": [
    "CENTRAL PUGET SOUND REGIONAL TRANSIT AUTHORITY / SOUND TRANSIT",
    "CITY OF SEATTLE",
    "Eastrail Partners",
    "Everytown for Gun Safety Action Fund",
    "Experience Learning Commuity DBA Museum of Pop Culture (MoPOP)",
    "FareStart",
    "Inseparable Action",
    "New Venture Fund",
    "Pacific Whale Watch Association",
    "The Association of Plastic Recyclers (APR)",
    "UNIVERSITY OF WASHINGTON",
    "WA Academy of Family Physicians",
    "WA POISON CENTER",
    "WASHINGTON BIKES",
    "Youth Villages, Inc."
  ]
},
{
  "name": "Alex Castro",
  "email": "alex@wagunresponsibility.org",
  "phone": "661-400-0798",
  "address": "PO Box 4187, Seattle, WA 98194",
  "clients": [
    "Alliance for Gun Responsibility"
  ]
},
{
  "name": "Alex Galeana",
  "email": "alex@childrenscampaignfund.org",
  "phone": "9497021188",
  "address": "504 5th Ave S, Seattle, WA 98104",
  "clients": [
    "CCF Action"
  ]
},
{
  "name": "Alex Hamasaki",
  "email": "alex.hamasaki@heart.org",
  "phone": "2063269632",
  "address": "601 Union Ste 2450, Seattle, WA 98101",
  "clients": [
    "AMERICAN HEART ASSN"
  ]
},
{
  "name": "Alex Leupp",
  "email": "Verizon1@nmgovlaw.com",
  "phone": "4153896800",
  "address": "c/o 2350 Kerner Blvd., Ste. 250, San Rafael, CA 94901",
  "clients": [
    "VERIZON"
  ]
},
{
  "name": "Alex Martin",
  "email": "compliance_wa_tenaska_2@multistate.us",
  "phone": "(402) 691-9586",
  "address": "14302 FNB Parkway, Omaha, NE 68154",
  "clients": [
    "Tenaska"
  ]
},
{
  "name": "Alex Tischenko",
  "email": "alex@responsivegovaction.org",
  "phone": "7083748631",
  "address": "1440 West Taylor Street, Suite 950, Suite 300-A, Chicago, IL 60607",
  "clients": [
    "Institute for Responsive Government Action"
  ]
},
{
  "name": "Alex Wehinger",
  "email": "alex@wsma.org",
  "phone": "360-701-5052",
  "address": "1800 Cooper Point Rd. SW Building 7A, Olympia, WA 98502",
  "clients": [
    "WA ST MEDICAL ASSN"
  ]
},
{
  "name": "Alexandra Flores-Quilty",
  "email": "afq@freespeechforpeople.org",
  "phone": "503-740-6516",
  "address": "48 North Pleasant Street Suite 304, Amherst, MA 01002",
  "clients": [
    "FREE SPEECH FOR PEOPLE, INC."
  ]
},
{
  "name": "Alexei Calambokidis",
  "email": "acalambokidis@gmail.com",
  "phone": "3607912228",
  "address": "600 Franklin St SE Apt 216, Olympia, WA 98501",
  "clients": [
    "TROUT UNLIMITED"
  ]
},
{
  "name": "Alexis Mansanarez",
  "email": "alexis@opportunityinstitute.org",
  "phone": "2537094847",
  "address": "2401 S. Jackson St., Seattle, WA 98144",
  "clients": [
    "ECONOMIC OPPORTUNITY INSTITUTE"
  ]
},
{
  "name": "Alicia B. Eyler",
  "email": "ABEyler@fredhutch.org",
  "phone": "2066672033",
  "address": "1100 North Fairview J2-4177, Seattle, WA 98109",
  "clients": [
    "Fred Hutchinson Cancer Center"
  ]
},
{
  "name": "Alizeh Bhojani",
  "email": "abhojani@legalvoice.org",
  "phone": "425-273-2820",
  "address": "907 Pine Street, Ste 500, Seattle, WA 98101",
  "clients": [
    "LEGAL VOICE"
  ]
},
{
  "name": "Allison Holub",
  "email": "allison.ford@uber.com",
  "phone": "2025319780",
  "address": "1515 3rd Street, San Francisco, CA 94158",
  "clients": [
    "Uber Technologies Inc and Affiliates"
  ]
},
{
  "name": "Altinay Karasapan",
  "email": "altinay.karasapan@climatesolutions.org",
  "phone": "2064439570",
  "address": "1809 7th Ave #1212, Seattle, WA 98101",
  "clients": [
    "CLIMATE SOLUTIONS"
  ]
},
{
  "name": "Alyss Patel",
  "email": "alyss.patel@novartis.com",
  "phone": "602-295-2081",
  "address": "2934 Danbury Ave., Highlands Ranch, CO 80126",
  "clients": [
    "Novartis Services, Inc."
  ]
},
{
  "name": "Alyssa Odegaard",
  "email": "aodegaard@leadingagewa.org",
  "phone": "2539648870",
  "address": "1102 Broadway STE 201, Tacoma, WA 98402",
  "clients": [
    "LEADINGAGE WA"
  ]
},
{
  "name": "Alyssa Patrick",
  "email": "apatrick@wacommunityhealth.org",
  "phone": "360-786-9722",
  "address": "101 Capital Way N, Suite 200 , Olympia, WA 98125",
  "clients": [
    "WA ASSN FOR COMMUNITY HEALTH"
  ]
},
{
  "name": "Amanda Sandoval",
  "email": "asandoval@uwkc.org",
  "phone": "206-461-3700",
  "address": "720 2nd ave, seattle, WA 98104",
  "clients": [
    "UNITED WAY OF KING CO"
  ]
},
{
  "name": "Amber D Lewis Consulting LLC",
  "email": "amber@lewisconsulting.us",
  "phone": "3609153882",
  "address": "PO BOX 1583, OLYMPIA, WA 98507",
  "clients": [
    "AAA Washington",
    "Auto Club MAPFRE Insurance Company",
    "Baldwin Risk Partners, LLC",
    "CVS HEALTH",
    "Huy Advocates",
    "Kinship Health",
    "Mott MacDonald, LLC",
    "PORT MADISON ENTERPRISES AN AGENCY OF THE SUQUAMISH TRIBE",
    "PORT OF CENTRALIA",
    "WA ASSN FOR BEHAVIOR ANALYSIS",
    "WA ASSN FOR MARRIAGE & FAMILY THERAPY",
    "Weidner Property Management"
  ]
},
{
  "name": "Amber McPhee-Millard",
  "email": "ammcpheemillard@outlook.com",
  "phone": "9255194510",
  "address": "6124 Libby RD NE, Olympia, WA 98506",
  "clients": [
    "NORTHWEST AGRICULTURE BUSINESS CENTER",
    "WA ASSN FOR CHILDREN & FAMILIES"
  ]
},
{
  "name": "Amber Ulvenes",
  "email": "Amber@ulvenesconsulting.com",
  "phone": "3602800384",
  "address": "1610 WATER ST SW , OLYMPIA, WA 98501",
  "clients": [
    "AMERICAN ACADEMY OF PEDIATRICS-WA CHAPTER",
    "First Five FUNdamentals",
    "Kaiser Foundation Health Plan of Washington",
    "Kaiser Foundation Health Plan of the Northwest",
    "MIDWIVES ASSOCIATION OF WA STATE",
    "Open Arms Perinatal Services",
    "RESOLUTION WA",
    "TEAMCHILD",
    "ZERO WASTE WA"
  ]
},
{
  "name": "Ana Martinez",
  "email": "meta2@politicomlaw.com",
  "phone": "(415) 903-2800",
  "address": "28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "Meta Platforms, Inc."
  ]
},
{
  "name": "Andrea H. Reay",
  "email": "AndreaR@TacomaChamber.org",
  "phone": "12066834585",
  "address": "950 Pacific Ave Suite 300, Tacoma, WA 98401, WA 98401",
  "clients": [
    "TPCC"
  ]
},
{
  "name": "Andrea Kadlec",
  "email": "andreak@dr-wa.org",
  "phone": "2063241521",
  "address": "315 Fifth Ave S Suite 850, Seattle, WA 98104",
  "clients": [
    "DISABILITY RIGHTS WA"
  ]
},
{
  "name": "Andrea Schmitt",
  "email": "andrea.schmitt@columbialegal.org",
  "phone": "3609436260",
  "address": "711 Capitol Way S, Olympia, WA 98506",
  "clients": [
    "Columbia Legal Services"
  ]
},
{
  "name": "Andrea Smiley",
  "email": "andreas@biaw.com",
  "phone": "3608522733",
  "address": "300 Deschutes Way SW, Suite 300,, Tumwater, WA 98501",
  "clients": [
    "BUILDING INDUSTRY ASSN OF WA"
  ]
},
{
  "name": "Andres Guerrero-Guzman",
  "email": "andres@wildliferecreation.org",
  "phone": "2067480082",
  "address": "1402 3rd Ave #714, Seattle, WA 98101",
  "clients": [
    "WA WILDLIFE & RECREATION COALITION ACTION FUND"
  ]
},
{
  "name": "Andrew Kushner",
  "email": "andrew.kushner@responsiblelending.org",
  "phone": "510.379.5513",
  "address": "1970 Broadway Suite 350, Oakland, CA 94609",
  "clients": [
    "Center for Responsible Lending"
  ]
},
{
  "name": "Andrew Lusch",
  "email": "alusch@cosaction.com",
  "phone": "(540) 441-7227",
  "address": "c/o Convention of States Action 7670 Opportunity Rd., Ste. 205, San Diego, CA 92111",
  "clients": [
    "Convention of States Action"
  ]
},
{
  "name": "Andy Barth",
  "email": "andyb@inlandpower.com",
  "phone": "5098629032",
  "address": "10110 W Hallett Rd., Spokane, WA 99224",
  "clients": [
    "INLAND POWER & LIGHT"
  ]
},
{
  "name": "Ann Rivers",
  "email": "annrivers@hamptonlumber.com",
  "phone": "3604507994",
  "address": "33911 NE 24th Ave., LaCenter, WA 98629",
  "clients": [
    "HAMPTON TREE FARMS LLC"
  ]
},
{
  "name": "Ann Simons",
  "email": "Simonsae@comcast.net",
  "phone": "360-789-7699",
  "address": "835 Colchester Drive East , Port Orchard, WA 98366",
  "clients": [
    "Juul Labs Inc."
  ]
},
{
  "name": "Anna Boone",
  "email": "annabo@zillowgroup.com",
  "phone": "360-556-2063",
  "address": "1301 Second Ave., Floor 36, Seattle, WA 98101",
  "clients": [
    "Zillow Group"
  ]
},
{
  "name": "Anna Fahey",
  "email": "anna@sightline.org",
  "phone": "2066502630",
  "address": "92 Lenora St. #189, SEATTLE, WA 98121",
  "clients": [
    "Sightline Institute"
  ]
},
{
  "name": "Anna Powell",
  "email": "doordash2@politicomlaw.com",
  "phone": "4159032800",
  "address": "28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "DoorDash, Inc"
  ]
},
{
  "name": "Anna Zivarts",
  "email": "annaz@dr-wa.org",
  "phone": "206.324.1521 x 242",
  "address": "315 S 5th Street, Seattle, WA 98104",
  "clients": [
    "DISABILITY RIGHTS WA"
  ]
},
{
  "name": "Anne Anderson",
  "email": "anne@evergreenpublicrelations.com",
  "phone": "3602245301",
  "address": "11216 31st St NE, Lake Stevens, WA 98258",
  "clients": [
    "WSNIA"
  ]
},
{
  "name": "Anne Murray",
  "email": "anne.murray@bms.com",
  "phone": "503-508-3448",
  "address": "1145 High St. SE, Salem, OR 97302",
  "clients": [
    "BRISTOL-MYERS SQUIBB CO"
  ]
},
{
  "name": "Anne Simaytis",
  "email": "asimayti@nmdp.org",
  "phone": "414-850-7467",
  "address": "500 N. 5th Street , Minneapolis, MN 55401",
  "clients": [
    "National Marrow Donor Program"
  ]
},
{
  "name": "Anni-Michele Jean-Pierre",
  "email": "anni-michele@childrensalliance.org ",
  "phone": "206-324-0340",
  "address": "210 S Hudson St Suite 300, Seattle, WA 98134",
  "clients": [
    "Children's Alliance"
  ]
},
{
  "name": "Annie M McGrath",
  "email": "annie@mcgrathpubaffairs.com",
  "phone": "4253069350",
  "address": "PO Box 12348, Olympia, WA 98508",
  "clients": [
    "AIDS Healthcare Foundation",
    "AMERICAN INTERNATIONAL GROUP INC",
    "AWC Employee Benefit Trust",
    "Allegis Redwood Maxim Public Affairs",
    "BSA - THE SOFTWARE ALLIANCE",
    "Blue Origin LLC",
    "Corebridge Financial, Inc.",
    "ENTERTAINMENT SOFTWARE ASSN",
    "EVERGREEN TREATMENT SERVICES",
    "GENENTECH",
    "Greater Seattle Business Assn",
    "Kooth USA LLC",
    "NATIONWIDE INSURANCE",
    "Pediatric Interim Care Center The Newborn Nursery",
    "Philips North America",
    "STATE FARM INSURANCE COMPANIES",
    "TikTok Inc.",
    "US Travel Insurance Association",
    "Unite USA dba Unite Us",
    "WA INSURERS",
    "WA ST HOSPITAL ASSN",
    "WA ST PSYCHIATRIC ASSN",
    "WA TOURISM ALLIANCE",
    "WA WINE INSTITUTE",
    "Washington State Medical Oncology Society",
    "Washington Vaccine Association"
  ]
},
{
  "name": "Anthony Auriemma",
  "email": "aauriemm@starbucks.com",
  "phone": "(206) 898-1570",
  "address": "2401 UTAH AVE S, Seattle, WA 98134",
  "clients": [
    "STARBUCKS"
  ]
},
{
  "name": "Anthony Blankenship",
  "email": "anthony.blankenship@civilsurvival.org",
  "phone": "2063174546",
  "address": "927 N. Northlake Way , Seattle, WA 98103",
  "clients": [
    "Civil Survival Project"
  ]
},
{
  "name": "Anthony J Yuchasz Jr",
  "email": "tyuchasz@outlook.com",
  "phone": "2065790884",
  "address": "1441 NW 105th St , Seattle, WA 98177",
  "clients": [
    "CITY OF SEATTLE",
    "Enterprise Community Partners, Inc.",
    "King County Housing Authority",
    "Mercy Housing Northwest",
    "Plymouth Housing Group"
  ]
},
{
  "name": "Antonio Acosta",
  "email": "dmema@kelleydrye.com",
  "phone": "9164422952",
  "address": "25120 Pacific Hwy S #200, Kent, WA 98032",
  "clients": [
    "Western States Regional Council of Carpenters"
  ]
},
{
  "name": "Antonio Ginatta",
  "email": "antonio.ginatta@columbialegal.org",
  "phone": "3609436260",
  "address": "711 Capitol Way S Suite 706, Olympia, WA 98501",
  "clients": [
    "Columbia Legal Services"
  ]
},
{
  "name": "April Messenger",
  "email": "jamessenger1211@gmail.com",
  "phone": "3603381362",
  "address": "1718 7th Ave SE, Olympia, WA 98501",
  "clients": [
    "Firelands Workers United / Trabajadores Unidos"
  ]
},
{
  "name": "April Putney",
  "email": "aprilp@sea2026.org",
  "phone": "2064503622",
  "address": "800 Occidental Ave S, Seattle, WA 98104",
  "clients": [
    "SeattleFWC26"
  ]
},
{
  "name": "Arbutus Consulting LLC",
  "email": "brian@arbutusllc.com",
  "phone": "(360) 489-8121",
  "address": "2026 36th Lane NE, OLYMPIA, WA 98506",
  "clients": [
    "CITY OF KIRKLAND",
    "CITY OF LACEY",
    "City of Duvall, Washington",
    "City of Ferndale",
    "City of Vancouver",
    "Elevance Health, and its Affiliates",
    "PORT OF BELLINGHAM",
    "PORT OF WALLA WALLA",
    "STATEWIDE POVERTY ACTION NETWORK",
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Arthur Longworth",
  "email": "arthur.longworth@teamchild.org",
  "phone": "5096716598",
  "address": "615 S 9th St, suite 102, Tacoma, WA 98337",
  "clients": [
    "TEAMCHILD"
  ]
},
{
  "name": "Ashlen Strong",
  "email": "ashlens@wsha.org",
  "phone": "206-216-2550",
  "address": "999 Third Ave, Suite 1400 , Seattle, WA 98104",
  "clients": [
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "Ashley Sutton ",
  "email": "hopskipdrive1@hopskipdrive.com",
  "phone": "2534415272",
  "address": "PO BOX 7721, Tacoma, WA 98417",
  "clients": [
    "HopSkipDrive, Inc."
  ]
},
{
  "name": "Ashley-Nichole Holland",
  "email": "ashley@historicsouthdowntown.org",
  "phone": "2535141605",
  "address": "409 B Maynard Ave, Seattle, WA 98104",
  "clients": [
    "Historic South Downtown"
  ]
},
{
  "name": "Audrey Miller García",
  "email": "audrey.garcia@cancer.org",
  "phone": "3603202969",
  "address": "3044 NW Market St Apt 3, Seattle, WA 98107",
  "clients": [
    "AMERICAN CANCER SOCIETY CANCER ACTION NETWORK"
  ]
},
{
  "name": "Austin Neilson",
  "email": "austinneilson@stateandfed.com",
  "phone": "2064468082",
  "address": "25 Massachusetts Avenue, Suite 400, Washington, DC 20001",
  "clients": [
    "GENERAL MOTORS LLC"
  ]
},
{
  "name": "Axis Consulting Group",
  "email": "joshua.swanson@axisgov.org",
  "phone": "3602506795",
  "address": "1023 Lansdale Rd. SE, Olympia, WA 98501",
  "clients": [
    "IUOE LOCAL 302"
  ]
},
{
  "name": "AyeNay Abye",
  "email": "ayenay@tubmanhealth.org",
  "phone": "2067250747",
  "address": "PO Box 18612 , Seattle, WA 98118",
  "clients": [
    "Tubman Center for Health"
  ]
},
{
  "name": "B.E. Davies Consulting",
  "email": "brooke@bedaviesconsulting.com",
  "phone": "540-336-7465",
  "address": "1721 Water Street SW , Olympia, WA 98501",
  "clients": [
    "ASSN OF WA SPIRITS & WINE DISTRIBUTORS",
    "Avalon Health Services, LLC d/b/a Avalon Healthcare Solutions",
    "COSMETOLOGISTS OF WASHINGTON UNITED",
    "Catholic Charities of Spokane",
    "ELI LILLY & COMPANY",
    "Electronic Payments Coalition,  Inc",
    "GREATER SEATTLE CHAMBER OF COMMERCE",
    "HAMPTON TREE FARMS LLC",
    "IonQ, Inc.",
    "LIFECENTER NORTHWEST",
    "Marinsa Pacific, LLC",
    "Maverick Gaming LLC",
    "NIPPC - Northwest & Intermountain Power Producers Coalition",
    "NW Rare Disease Coalition",
    "Northwest Center",
    "Northwest RiverPartners",
    "PORT OF BREMERTON",
    "PORT OF SEATTLE",
    "Pasado's Safe Haven",
    "Pediatrix Medical Group",
    "Port of Whitman",
    "Seattle Arena Company",
    "Sony Interactive Entertainment",
    "TECHNOLOGY NETWORK",
    "THE COLLEGE BOARD",
    "Uber Technologies Inc and Affiliates",
    "WA BEVERAGE ASSN",
    "WA CANNABUSINESS ASSN",
    "WA CHARTERS ACTION",
    "Washington Community Investment Coalition",
    "Washington Independent Physicians Practice Association"
  ]
},
{
  "name": "B.E. Strategic ",
  "email": "bre@b-e-strategic.com",
  "phone": "360-632-7143",
  "address": "2881 Brown Rd , Ellensburg, WA 98926",
  "clients": [
    "WA Blueberry Commission",
    "WA ST FARM BUREAU",
    "WA ST TREE FRUIT ASSN",
    "Western Community Insurance Company"
  ]
},
{
  "name": "BETTY BUCKLEY",
  "email": "BETTYB@WITA-TEL.ORG",
  "phone": "3602642233",
  "address": "PO Box 2473, Olympia, WA 985072473",
  "clients": [
    "WA INDEPENDENT TELECOMMUNICATIONS ASSN"
  ]
},
{
  "name": "BILLY R WALLACE JR",
  "email": "BWALLACE@NWLABORERS.ORG",
  "phone": "4257413556",
  "address": "12101 Tukwila International Blvd. Suite 300, Tukwila, WA 98168",
  "clients": [
    "WA & NORTHERN IDAHO DIST COUNCIL LABORERS UNION"
  ]
},
{
  "name": "BMcConsulting",
  "email": "bryan@bmcconsulting.net",
  "phone": "2069536026",
  "address": "7105 Marble Beach Rd NW , Gig Harbor, WA 98332",
  "clients": [
    "ACTION DD",
    "CENTURYLINK",
    "CITY OF KIRKLAND",
    "City of Bremerton",
    "City of Poulsbo",
    "FIRE SPRINKLER ADVISORY BD OF PUGET SOUND",
    "Kitsap Mental Health Services",
    "WA REFLEXOLOGY ASSN",
    "WA ST ASSN OF FIRE CHIEFS"
  ]
},
{
  "name": "BOSWELL CONSULTING*",
  "email": "BRAD@BOSWELLCONSULTING.ORG",
  "phone": "(206) 300-6270",
  "address": "PO BOX 551 , Kirkland, WA 98083",
  "clients": [
    "Avalanche Energy Designs, Inc.",
    "CLEANTECH ALLIANCE",
    "CONSTRUCTION INDUSTRY TRAINING COUNCIL OF WA",
    "Democracy Live, Inc.",
    "Electric Era Technologies, Inc.",
    "GREATER SEATTLE CHAMBER OF COMMERCE",
    "Hood River-White Salmon Bridge Authority",
    "MCG Health",
    "NUCOR STEEL SEATTLE INC",
    "PEACEHEALTH",
    "PORT OF KALAMA",
    "Par Pacific Holdings, Inc.",
    "Redwood Materials, Inc",
    "Scout Clean Energy, LLC",
    "Seattle Arena Company",
    "The Williams Companies",
    "Trustmark Benefits",
    "U.S. Oil & Refining Company",
    "Uber Technologies Inc and Affiliates",
    "VALLEY MEDICAL CENTER",
    "Valet Living LLC",
    "WA BEVERAGE ASSN",
    "WASTE MANAGEMENT OF WASHINGTON, INC."
  ]
},
{
  "name": "BRACKEN R KILLPACK",
  "email": "BRACKEN@WSDA.ORG",
  "phone": "2064481914",
  "address": "126 NW CANAL ST , SEATTLE, WA 98107",
  "clients": [
    "WA ST DENTAL ASSN"
  ]
},
{
  "name": "BRANDON HOUSKEEPER",
  "email": "brandon@houskeeperpublicaffairs.com",
  "phone": "3605563724",
  "address": "5115 DeMarie Ct. SE, Olympia, WA 98501",
  "clients": [
    "ALLIANCE FOR AUTOMOTIVE INNOVATION",
    "ALLIANCE OF WESTERN ENERGY CONSUMERS",
    "AMERICAN WOOD COUNCIL",
    "ASSOCIATED BUILDERS & CONTRACTORS (WESTERN WA CHAPTER)",
    "American Family Life Assurance Company (AFLAC)",
    "BOISE CASCADE COMPANY",
    "HF Sinclair",
    "NW GROCERY ASSN",
    "PACKAGING CORP OF AMERICA",
    "Southwest Washington Contractors Association",
    "TC ENERGY, GAS TRANSMISSION NORHTWEST, LLC",
    "WESTERN WOOD PRESERVERS INSTITUTE"
  ]
},
{
  "name": "BRENDA WIEST",
  "email": "BRENDA.WIEST@TEAMSTERS117.ORG",
  "phone": "2064414860",
  "address": "14675 INTERURBAN AVE S STE 307 , TUKWILA, WA 98168",
  "clients": [
    "TEAMSTERS LOCAL UNION #117"
  ]
},
{
  "name": "BUCHHOLZ & ASSOC LLC*",
  "email": "BEN@BUCHHOLZFARMS.COM",
  "phone": "2065520236",
  "address": "120 STATE AVE NE #150 , OLYMPIA, WA 98501",
  "clients": [
    "BUCHHOLZ FARMS",
    "Darigold",
    "Far West Agribusiness Association",
    "NORTHWEST AGRICULTURAL COOPERATIVE COUNCIL",
    "Northwest Grain Growers, Inc.",
    "WA CATTLE FEEDERS ASSN",
    "WA FRIENDS OF FARMS & FORESTS",
    "Western Refinery Services"
  ]
},
{
  "name": "Banks Consulting Group",
  "email": "brad@banksconsultinggroup.com",
  "phone": "3609186508",
  "address": "7741 52nd Avenue NE, Lacey, WA 98516",
  "clients": [
    "Co-Responder Outreach Alliance",
    "WA ST ASSN OF HOME CARE SERVICES",
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Barbara Gilchrist",
  "email": "Barbara@wacharters.org",
  "phone": "206-424-2780",
  "address": "506 2nd Ave, Suite 630 , Seattle, WA 98104",
  "clients": [
    "WA CHARTERS ACTION"
  ]
},
{
  "name": "Benjamin Mitchell",
  "email": "bmitchell@graduatetacoma.org",
  "phone": "2532721600",
  "address": "919 S 9th St , Tacoma, WA 98405",
  "clients": [
    "Foundation for Tacoma Students"
  ]
},
{
  "name": "Bill Clarke",
  "email": "BILL@CLARKE-LAW.NET",
  "phone": "(360) 561-7540",
  "address": "1501 CAPITOL WAY STE 203 , OLYMPIA, WA 98501",
  "clients": [
    "1-800 CONTACTS",
    "AG WATER BOARD OF WHATCOM COUNTY",
    "AMAZON.COM SERVICES LLC",
    "BIOTECHNOLOGY INNOVATION ORGANIZATION",
    "CITY OF SUMNER",
    "Copenhagen Infrastructure Partners",
    "GRANT PUD",
    "International Bottled Water Association",
    "KITTITAS CO BOARD OF COMMISSIONERS",
    "Kittitas Reclamation District",
    "Manulife Investment Management Timberland and Agriculture",
    "REGIONAL WATER COOPERATIVE OF PIERCE CO",
    "SHEET METAL & AIR CONDITION CONTRACTORS WEST WA",
    "The Trust for Public Land",
    "WA ASSN OF REALTORS",
    "WA PUBLIC UTILITIES DISTS ASSN",
    "WILDERNESS SOCIETY"
  ]
},
{
  "name": "Billie Dickinson",
  "email": "billie@wsma.org",
  "phone": "3604708969",
  "address": "1800 Cooper Point Road SW Building 7-A , Olympia, WA 98502",
  "clients": [
    "WA ST MEDICAL ASSN"
  ]
},
{
  "name": "Billy J Hetherington",
  "email": "billy@laborerslocal242.com",
  "phone": "2065523284",
  "address": "22323 Pacific Hwy. S., Des Moines, WA 98198",
  "clients": [
    "LABORERS LOCAL UNION 242"
  ]
},
{
  "name": "Blue Spruce Strategies, LLC",
  "email": "lisa@blue-spruce.com",
  "phone": "3602010779",
  "address": "1155 N STATE ST #503, BELLINGHAM, WA 98225",
  "clients": [
    "American Rivers, Inc.",
    "NOOKSACK INDIAN TRIBE"
  ]
},
{
  "name": "Bogard & Johnson LLC",
  "email": "BECKY@BOGARDJOHNSON.COM",
  "phone": "3609563322",
  "address": "200 UNION AVE SE, OLYMPIA, WA 985011393",
  "clients": [
    "AMERICAN EXPRESS TRAVEL RELATED SERVICES",
    "APTA Washington",
    "COMMUNITY RESIDENTIAL SERVICES ASSN",
    "CULTURAL ACCESS WA",
    "Children's Alliance",
    "GENERAL MOTORS LLC",
    "IGT GLOBAL SOLUTIONS AND ITS AFFILIATES",
    "International Business Machines Corporation (IBM)",
    "Life Science Washington",
    "Polaris",
    "Seattle Sports Commission",
    "WA ST ASSN OF HEADSTART ECEAP",
    "WA ST DESTINATION MARKETING ORGANIZATIONS ASSN",
    "WA ST DIST & MUNICIPAL COURT JUDGES ASSN",
    "WA ST NURSES ASSN",
    "WILLAMETTE DENTAL MANAGEMENT CORP",
    "WSLHA",
    "Washington Filmworks",
    "Washington Homeownership Resource Center"
  ]
},
{
  "name": "Brad Forbes",
  "email": "compliance_wa_alz_1@multistate.us",
  "phone": "206-783-4288",
  "address": "1107 NE 45th St, Suite 230, Seattle, WA 98105",
  "clients": [
    "ALZHEIMERS ASSN WA ST CHAPTER"
  ]
},
{
  "name": "Brad Payne",
  "email": "brad@fpiw.org",
  "phone": "360–352-4242",
  "address": "16108 Ash Way #107, Lynnwood, WA 98087",
  "clients": [
    "FPIW Action"
  ]
},
{
  "name": "Brad Tower",
  "email": "brad@towerltd.org",
  "phone": "3604026900",
  "address": "8617 Tobacco Lane SE, Olympia, WA 98513",
  "clients": [
    "ARROW LAUNCH SERVICES INC",
    "COMMUNITY BANKERS OF WA",
    "Commonwealth Real Estate Services",
    "WASHINGTON LIQUOR STORE ASSOCIATION",
    "Washington Christmas Tree Growers"
  ]
},
{
  "name": "Braden Sigua",
  "email": "bsigua@pacsci.org",
  "phone": "4255823356",
  "address": "200 Sue Bird Court N., Seattle, WA 98109",
  "clients": [
    "PACIFIC SCIENCE CENTER"
  ]
},
{
  "name": "Brandon Anderson",
  "email": "brandona@speea.org",
  "phone": "360-259-4899",
  "address": "15205 52nd Ave S, Tukwila, WA 98188",
  "clients": [
    "SOCIETY OF PROFESSIONAL ENGINEERING EMPLOYEES IN AEROSPACE SPEEA"
  ]
},
{
  "name": "Brandon Vick",
  "email": "compliance_wa_namic_1@multistate.us",
  "phone": "(360) 609-4363",
  "address": "3601 Vincennes Road, Indianapolis, IN 46268",
  "clients": [
    "National Association of Mutual Insurance Companies (NAMIC)"
  ]
},
{
  "name": "Brandy Flores",
  "email": "pfizer2@politicomlaw.com",
  "phone": "(415) 903-2800",
  "address": "c/o 28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "PFIZER INC"
  ]
},
{
  "name": "Breann Westmore",
  "email": "compliance_wa_humana_1@multistate.us",
  "phone": "502-235-0426",
  "address": "500 West Main Street, Louisville, KY 40202",
  "clients": [
    "Humana, Inc."
  ]
},
{
  "name": "Brenda Snyder",
  "email": "brenda.snyder@cvshealth.com",
  "phone": "360-515-6213",
  "address": "600 University St. , Seattle, WA 98101",
  "clients": [
    "CVS HEALTH"
  ]
},
{
  "name": "Brett Michelin",
  "email": "brett.michelin@accessiblemeds.org",
  "phone": "202-249-7100",
  "address": "601 New Jersey Avenue, NW, Suite 850, Washington, DC 20001",
  "clients": [
    "Association for Accessible Medicines"
  ]
},
{
  "name": "Brett Swift",
  "email": "bswift@pewtrusts.org",
  "phone": "2025522000",
  "address": "901 E Street NW, Washington, DC 20004",
  "clients": [
    "The Pew Charitable Trusts"
  ]
},
{
  "name": "Brewer Public Affairs",
  "email": "CHRISTINE@OLYGOV.COM",
  "phone": "3606281698",
  "address": "PO BOX 14996, TUMWATER, WA 98511",
  "clients": [
    "A Place for Rover, Inc.",
    "AMERICAN COUNCIL OF LIFE INSURERS",
    "AMERICAN FAMILY MUTUAL INSURANCE",
    "AMERICAN PROPERTY CASUALTY INSURANCE ASSOCIATION",
    "ASSOCIATED GENERAL CONTRACTORS OF WA",
    "Architects and Engineers Legislative Council",
    "HopSkipDrive, Inc.",
    "LIABILITY REFORM COALITION",
    "MAPLEBEAR INC. D/B/A INSTACART",
    "Medical Evaluation Specialists, LLC",
    "Office of the Commissioner of Major League Baseball",
    "PREMERA BLUE CROSS",
    "PROFESSIONAL INSURANCE AGENTS ASSN",
    "SCHINDLER ELEVATOR CORP",
    "SERVICE CONTRACT INDUSTRY CNCL",
    "Sun Life Financial (U.S.) Services Company Inc.",
    "WSIA",
    "Washington Defense Trial Lawyers",
    "Washington State Financial Services Association"
  ]
},
{
  "name": "Brian Lombardozzi",
  "email": "brian.lombardozzi@stateandfed.com",
  "phone": "202-393-3430",
  "address": "711 D Street NW, 3rd Floor, Washington, DC 20004",
  "clients": [
    "Alliance for American Manufacturing"
  ]
},
{
  "name": "Brittany Benesi",
  "email": "brittany.benesi@aspca.org",
  "phone": "9166287163",
  "address": "12160 Sierra Drive, Truckee, CA 96161",
  "clients": [
    "AMERICAN SOCIETY FOR THE PREVENTION OF CRUELTY TO ANIMALS"
  ]
},
{
  "name": "Brittany Duffy",
  "email": "Brittany.Duffy@otsuka-us.com",
  "phone": "503-481-3746",
  "address": "3710 Washburn AVE N, Minneapolis, MN 55412",
  "clients": [
    "OTSUKA AMERICA PHARMACEUTICAL INC"
  ]
},
{
  "name": "Brownstein Hyatt Farber Schreck LLP",
  "email": "amanderson@bhfs.com",
  "phone": "3032231316",
  "address": "1155 F st NW Suite 1200, Washington, DC 20004",
  "clients": [
    "Veteran Benefits Guide"
  ]
},
{
  "name": "Bruce Lai",
  "email": "apple2@politicomlaw.com",
  "phone": "415-903-2800",
  "address": "c/o 28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "APPLE INC"
  ]
},
{
  "name": "Bryce Yadon",
  "email": "bryce@by-consulting.com",
  "phone": "2532494430",
  "address": "9246b 17th Ave Sw , Seattle, WA 98106",
  "clients": [
    "DISABILITY RIGHTS WA",
    "Downtown Seattle Association",
    "FUTUREWISE",
    "Habitat for Humanity Seattle-King County",
    "King County",
    "Polymeric Exteriors Product Association",
    "TRANSPORTATION CHOICES COALITION",
    "Washington Advocacy Partners"
  ]
},
{
  "name": "Brynn Brady",
  "email": "BRYNN@CEIBACONSULTING.COM",
  "phone": "2536863387",
  "address": "701 NORTH G ST , TACOMA, WA 98403",
  "clients": [
    "AMAZON.COM SERVICES LLC",
    "AMERICAN HEART ASSN",
    "Audubon Washington",
    "BANK OF AMERICA CORP",
    "City of Woodinville",
    "Lundbeck Pharmaceuticals LLC",
    "Novelis c/o MultiState Associates LLC",
    "Pierce County Regional Council",
    "REGIONAL FISHERIES ENHANCEMENT GROUP COALITION",
    "SANOFI US",
    "SPECIAL OLYMPICS WA",
    "TACOMA-PIERCE CO HEALTH DEPT",
    "WA ASSN OF CONSERVATION DISTRICTS",
    "WA STATE ASSN OF COUNTIES (WSAC)",
    "Washington Association of Land Trusts"
  ]
},
{
  "name": "Bud Sizemore",
  "email": "therese@wscff.org",
  "phone": "3609433030",
  "address": "1069 Adams Street SE, Olympia, WA 98501",
  "clients": [
    "WA ST COUNCIL OF FIRE FIGHTERS"
  ]
},
{
  "name": "C Squared Consulting",
  "email": "kevinvandewege@hotmail.com",
  "phone": "360-477-0548",
  "address": "202 18TH AVE SW, OLYMPIA, WA 98501",
  "clients": [
    "Board of Registration for Professional Engineers and Land Surveyors",
    "Coalition for Community Solar Access",
    "Detente Management",
    "Emerald Downs Racing LLC",
    "WA ASSN OF NURSE ANESTHETISTS",
    "WA ST FARM BUREAU",
    "Western Systems Inc"
  ]
},
{
  "name": "CANDICE N BOCK",
  "email": "CANDICEB@AWCNET.ORG",
  "phone": "3607534137",
  "address": "1076 FRANKLIN ST SE, OLYMPIA, WA 98501",
  "clients": [
    "ASSN OF WA CITIES"
  ]
},
{
  "name": "CAREY L MORRIS",
  "email": "careymorris27@gmail.com",
  "phone": "3609617125",
  "address": "1913 LAKE LOUISE RD , BELLINGHAM, WA 98229",
  "clients": [
    "BUILDING CHANGES",
    "EQUAL RIGHTS WA",
    "Humane World for Animals",
    "LEAGUE OF EDUCATION VOTERS",
    "LEAGUE OF EDUCATION VOTERS FOUNDATION",
    "RETIRED PUBLIC EMPLOYEES COUNCIL OF WA",
    "Start Early",
    "WA ASSN OF NATUROPATHIC PHYSICIANS",
    "WA ST COALITION  AGAINST DOMESTIC VIOLENCE",
    "Washington State Charter School Commission"
  ]
},
{
  "name": "CARL GIPSON",
  "email": "CARL.GIPSON@ATT.COM",
  "phone": "4256289754",
  "address": "20309 N Creek Pkwy, Bothell, WA 98011",
  "clients": [
    "AT&T SERVICES INC"
  ]
},
{
  "name": "CARL SCHROEDER",
  "email": "CARLS@AWCNET.ORG",
  "phone": "3607534137",
  "address": "1076 FRANKLIN ST SE, OLYMPIA, WA 985011346",
  "clients": [
    "ASSN OF WA CITIES"
  ]
},
{
  "name": "CAROLYN LOGUE",
  "email": "CAROLYN.LOGUE@COMCAST.NET",
  "phone": "3607893491",
  "address": "6514 78TH AVE NE, OLYMPIA, WA 98516",
  "clients": [
    "ABC Inland Pacific",
    "Aerospace Machinists Joint Training Committee",
    "Northwest HPBA",
    "SOUTH SOUND CHAMBERS OF COMMERCE LEG COMM",
    "Stride, Inc.",
    "WA DENTURIST ASSN",
    "WA FOOD INDUSTRY",
    "WA INDEPENDENT MEDICAL EXAM COALITION",
    "WAACCA",
    "Washington Academy of Anesthesiologist Assistants",
    "Washington Library Association",
    "Washington State Student Transportation Coalition"
  ]
},
{
  "name": "CASCADE GOVT AFFAIRS LLC*",
  "email": "charlie@cascadegovt.com",
  "phone": "2539066685",
  "address": "PO BOX 6846, TACOMA, WA 98417",
  "clients": [
    "AHAM - Assn of Home Appliance Manufacturers",
    "AMAROK",
    "BETHEL SCHOOL DISTRICT",
    "BRINC Drones Inc.",
    "CASCADE NATURAL GAS",
    "CONSUMER TECHNOLOGY ASSN (THROUGH MULTISTATE ASSOCIATES LLC)",
    "Clover Park School District",
    "Diageo North America, Inc.",
    "FRANKLIN PIERCE SCHOOL DISTRICT",
    "FRED MEYER (OXLEY & ASSOC)",
    "Federal Way Public Schools",
    "Graduation Alliance, Inc.",
    "Humana, Inc. ",
    "Lamb Weston, Inc",
    "NW NATURAL GAS",
    "National Electrical Manufacturers Association (NEMA) c/o MultiState Associates LLC",
    "PUGET SOUND SCHOOL COALITION/KING CO SCHOOL COALITION (THRU K AND L GATES)",
    "Puyallup School District",
    "School Alliance",
    "Sumner-Bonney Lake School District",
    "Supernal, LLC",
    "TACOMA PUBLIC SCHOOLS",
    "TWO JINN INC",
    "University Place School District",
    "WA STATE ATHLETIC TRAINERS ASSN",
    "Washington Skills Centers Association",
    "White River School District"
  ]
},
{
  "name": "CASEY TRUPIN",
  "email": "casey_trupin@hotmail.com",
  "phone": "2069153215",
  "address": "2033 E Newton St , Seattle, WA 98112",
  "clients": [
    "North Forty Group LLC"
  ]
},
{
  "name": "CATHLEEN MACCAUL",
  "email": "compliance_wa_aarp_1@multistate.us",
  "phone": "206-218-5915   ",
  "address": "18000 International Blvd, STE 1020, Seatac, WA 98188",
  "clients": [
    "AARP WA ST OFFICE"
  ]
},
{
  "name": "CFM Strategic Communications",
  "email": "cindyb@cfmpdx.com",
  "phone": "360-747-3805",
  "address": "1220 Main Street, Suite 400, Vancouver, WA 98660",
  "clients": [
    "City of Duvall, Washington",
    "Clark Regional Wastewater District",
    "Discovery Clean Water Alliance",
    "King County Water District 54",
    "PORT OF BELLINGHAM",
    "Skamania County",
    "YWCA Clark County"
  ]
},
{
  "name": "CHELENE WHITEAKER",
  "email": "CHELENEW@WSHA.ORG",
  "phone": "2062162545",
  "address": "999 3rd Avenue , SEATTLE, WA 98104",
  "clients": [
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "CHRISTIAN M MCCABE",
  "email": "CHRIS@NWPULPANDPAPER.ORG",
  "phone": "3605298638",
  "address": "300 Deschutes Way SW, Suite 201, Tumwater, WA 98501",
  "clients": [
    "Northwest Pulp & Paper Association"
  ]
},
{
  "name": "CHRISTOPHER BANDOLI",
  "email": "chris@bandoliconsulting.com",
  "phone": "206-369-2299",
  "address": "4810 Pt. Fosdick Dr. NW, Ste 167, Gig Harbor, WA 98335",
  "clients": [
    " SCAN Health Plan ",
    "AMERICAN INSTITUTE OF ARCHITECTS WA COUNCIL",
    "AMERICAS HEALTH INSURANCE PLANS",
    "CIGNA CORPORATE SERVICES",
    "NATL ASSN OF INSURANCE & FINANCIAL ADVISORS",
    "National Association of Benefits and Insurance Professionals, Washington State Chapter"
  ]
},
{
  "name": "CHRISTOPHERSEN INC*",
  "email": "VICKI@CHRISTOPHERSENINC.COM",
  "phone": "(360) 485-2026",
  "address": "721 4th Ave #3329 , Kirkland, WA 98033",
  "clients": [
    "ASSN OF WA SPIRITS & WINE DISTRIBUTORS",
    "African Community Housing & Development",
    "Avalon Health Services, LLC d/b/a Avalon Healthcare Solutions",
    "Biomass One, LP",
    "Catholic Charities of Spokane",
    "Electronic Payments Coalition,  Inc",
    "FORTERRA",
    "HAMPTON TREE FARMS LLC",
    "LIFECENTER NORTHWEST",
    "LIFELONG",
    "MERCK SHARP & DOHME LLC & AFFILIATES",
    "Marinsa Pacific, LLC",
    "Maverick Gaming LLC",
    "NATO/Pacific Northwest Theatre Owners Association",
    "NIPPC - Northwest & Intermountain Power Producers Coalition",
    "NORTHWEST KIDNEY CENTERS",
    "NW Rare Disease Coalition",
    "Northwest Center",
    "Northwest RiverPartners",
    "PORT OF BREMERTON",
    "Pediatrix Medical Group",
    "Port of Whitman",
    "Recompose",
    "TECHNOLOGY NETWORK",
    "THE COLLEGE BOARD",
    "WA CANNABUSINESS ASSN",
    "WA CHARTERS ACTION",
    "WA REFUSE & RECYCLING ASSN",
    "Washington Independent Physicians Practice Association"
  ]
},
{
  "name": "CIVIC GROUP*",
  "email": "SCOTT@CIVICGROUP.NET",
  "phone": "2063001232",
  "address": "PO Box 7396 , OLYMPIA, WA 98507",
  "clients": [
    "Associated Day Spas of Washington",
    "CISCO SYSTEMS, INC.",
    "EBAY INC",
    "MASTER BLDRS ASSN OF KING & SNO COUNTIES",
    "PACIFIC MERCHANT SHIPPING ASSN",
    "Salesforce, Inc.",
    "StubHub",
    "WA ASSN OF SEWER & WATER DISTRICTS",
    "WA BEER & WINE DISTRIBUTORS ASSN",
    "WA ST AUTO DEALERS ASSN INC",
    "WEYERHAEUSER CO"
  ]
},
{
  "name": "CLIFFORD TRAISMAN & ASSOC*",
  "email": "CLIFFORD@CTASSOCIATES.ORG",
  "phone": "2063692235",
  "address": "4780 34TH AVE NE , SEATTLE, WA 98105",
  "clients": [
    "Bellevue School District",
    "Center for Responsible Forestry",
    "HIGHLINE PUBLIC SCHOOLS",
    "Monument Policy Group, LLC dba Monument Advocacy",
    "Northshore School District 417",
    "SEATTLE PUBLIC SCHOOLS",
    "Washington Conservation Action",
    "Washington Conservation Action Education Fund"
  ]
},
{
  "name": "COMMUNICO*",
  "email": "GREG@GREGHANON.COM",
  "phone": "2532798282",
  "address": "1930 11TH AVE E , SEATTLE, WA 98102",
  "clients": [
    "COSTCO WHOLESALE",
    "T-MOBILE USA INC",
    "The Williams Companies",
    "Washington State Veterinary Medical Association",
    "Western States Petroleum Assn."
  ]
},
{
  "name": "Cadena Consulting",
  "email": "lyset@cadenaconsulting.com",
  "phone": "915-497-6085",
  "address": "6523 California Ave SW #345, Seattle, WA 98136",
  "clients": [
    "Battelle",
    "Bellevue Chamber of Commerce",
    "CITY OF BURIEN",
    "Capitol Venture LLC",
    "Evergreen Social Impact",
    "GoWest Credit Union Association",
    "PUGET SOUND SCHOOL COALITION/KING CO SCHOOL COALITION (THRU K AND L GATES)",
    "SOUTHERN GLAZER'S WINE & SPIRITS",
    "VIRGINIA MASON FRANCISCAN HEALTH",
    "WA ST TRANSIT ASSN",
    "WA ST UNIVERSITY",
    "WASTE MANAGEMENT OF WASHINGTON, INC."
  ]
},
{
  "name": "Caedmon Magboo Cahill",
  "email": "cmcahill@aclu-wa.org",
  "phone": "(206) 624-2184",
  "address": "PO Box 2728 , Seattle, WA 98111",
  "clients": [
    "AMERICAN CIVIL LIBERTIES UNION OF WA"
  ]
},
{
  "name": "Caitlin Kelly",
  "email": "ckelly@aldf.org",
  "phone": "707-795-2533",
  "address": "525 E. Cotati Ave. , Cotati, CA 94931",
  "clients": [
    "Animal Legal Defense Fund"
  ]
},
{
  "name": "Caleb Gwerder",
  "email": "cgwerder@wsfb.com",
  "phone": "360-357-9975",
  "address": "975 Carpenter RD NE, Lacey, WA 98516",
  "clients": [
    "WA ST FARM BUREAU"
  ]
},
{
  "name": "Caleb Weaver",
  "email": "caleb@ridwell.com",
  "phone": "206-965-5141",
  "address": "600 1st Ave Ste 330 PMB 73341, Seattle, WA 98104",
  "clients": [
    "Ridwell"
  ]
},
{
  "name": "Caleb Williamson",
  "email": "cwilliamson@actonline.org",
  "phone": "2028277588",
  "address": "1401 K Street NW Suite 501, Washington, DC 20005",
  "clients": [
    "ACT | The App Association"
  ]
},
{
  "name": "Callie Riley",
  "email": "compliance_wa_ccan_1@multistate.us",
  "phone": "5614451621",
  "address": "8156 S. Wadsworth Blvd, E-16, Littleton, CO 80128",
  "clients": [
    "Compassion & Choices Action Network"
  ]
},
{
  "name": "Cameron M. Bailey",
  "email": "bailey.cameron.m@gmail.com",
  "phone": "360-433-7804",
  "address": "217 W Pear Street, Centralia, WA 98531",
  "clients": [
    "CITY OF GRANITE FALLS",
    "SNOHOMISH CO FIRE DIST 26",
    "Skagit PUD",
    "Town of Concrete"
  ]
},
{
  "name": "Capitol Path Consulting",
  "email": "john@thecapitolpath.com",
  "phone": "5092302882",
  "address": "24641 E. Mica Peak Road, Liberty Lake, WA 99019",
  "clients": [
    "Adams County",
    "Adams County Public Hospital District #2",
    "Apricus Energy Partners Inc.",
    "Business Impact NW",
    "CITY OF GRANITE FALLS",
    "CITY OF QUINCY",
    "COLUMBIA BASIN DEVELOPMENT LEAGUE",
    "City of Chelan",
    "City of Sunnyside",
    "HIP of Spokane County",
    "Maddie's Place",
    "Manzanita House",
    "Ritzville School District",
    "Thrive International"
  ]
},
{
  "name": "Cara Helmer",
  "email": "carah@wsha.org",
  "phone": "2065771827",
  "address": "999 Third Avenue, Suite 1400, Seattle, WA 98104",
  "clients": [
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "Carissa Kemp",
  "email": "compliance_wa_sanofi_1@multistate.us",
  "phone": "6513413444",
  "address": "55 Corporate Drive, Bridgewater, NJ 08807, Bridgewater, NJ 07960",
  "clients": [
    "SANOFI US"
  ]
},
{
  "name": "Carlos Gutierrez",
  "email": "cgutierrez@chpa.org",
  "phone": "202-429-3521",
  "address": "1625 I \"Eye\" Street, NW, Suite 600, Washington, DC 20006",
  "clients": [
    "CONSUMER HEALTHCARE PRODUCTS ASSN"
  ]
},
{
  "name": "Carly Michiels",
  "email": "cmichiels@washingtonports.org",
  "phone": "3609430760",
  "address": "1501 CAPITOL WAY S STE 304 , OLYMPIA, WA 98501",
  "clients": [
    "Washington Public Ports Association"
  ]
},
{
  "name": "Carma Matti-Jackson",
  "email": "carmamattijackson@whca.org",
  "phone": "360/352-3304",
  "address": "303 Cleveland Ave SE Suite 206, Tumwater, WA 98501",
  "clients": [
    "WA HEALTH CARE ASSN"
  ]
},
{
  "name": "Carolanne Sanders",
  "email": "carolanne.sanders@wearepda.org",
  "phone": "2143350614",
  "address": "1031 SW 112th St , Seattle, WA 98146",
  "clients": [
    "Purpose Dignity Action"
  ]
},
{
  "name": "Carolyn Brotherton",
  "email": "carolyn@opportunityinstitute.org",
  "phone": "206-633-6580",
  "address": "509 Olive Wy Suite 302, Seattle, WA 98101",
  "clients": [
    "ECONOMIC OPPORTUNITY INSTITUTE"
  ]
},
{
  "name": "Carter Carlson",
  "email": "carter@abcwestwa.org",
  "phone": "3606888640",
  "address": "1621 114th Ave SE #116 , Bellevue, WA 98004",
  "clients": [
    "ASSOCIATED BUILDERS & CONTRACTORS (WESTERN WA CHAPTER)"
  ]
},
{
  "name": "Cascade AIDS Project",
  "email": "dramos@capnw.org",
  "phone": "(971)720-6620",
  "address": "520 NW Davis St. Suite 215, Portland, OR 97209",
  "clients": [
    "Cascade AIDS Project"
  ]
},
{
  "name": "Cascadia Law Group",
  "email": "bbadger@cascadialaw.com",
  "phone": "(360) 528-3027",
  "address": "606 Columbia St NW Ste 212 , Olympia, WA 98501",
  "clients": [
    "Charm Industrial, Inc.",
    "The Pew Charitable Trusts"
  ]
},
{
  "name": "Cascadia Policy Solutions LLC",
  "email": "bbadger@cascadialaw.com",
  "phone": "3605283027",
  "address": "606 Columbia St NW, Suite 212, Olympia, WA 98501",
  "clients": [
    "CLIMATE SOLUTIONS",
    "Innergex Renewable Development LLC"
  ]
},
{
  "name": "Casey MacLean",
  "email": "casey@renewablenw.org",
  "phone": "5032234544",
  "address": "421 SW 6th Ave Suite 1400, Portland, OR 97204-1625",
  "clients": [
    "RENEWABLE NORTHWEST"
  ]
},
{
  "name": "Cassie Bordelon",
  "email": "cassie@climatejobswa.org",
  "phone": "3154308539",
  "address": "906 Columbia St SW, Olympia, WA 98501",
  "clients": [
    "Climate Jobs Washington"
  ]
},
{
  "name": "Catherine A. Murahashi",
  "email": "muracat@aol.com",
  "phone": "4252699915",
  "address": "14937 SE 43rd St, BELLEVUE, WA 98006",
  "clients": [
    "The Arc of Washington State"
  ]
},
{
  "name": "Catherine Gould",
  "email": "catie@sightline.org",
  "phone": "2064471880 ext 123",
  "address": "1402 Third Avenue Suite 500, Seattle, WA 98101",
  "clients": [
    "Sightline Institute"
  ]
},
{
  "name": "Catherine Morrison",
  "email": "maxim@venable.com",
  "phone": "4109101500",
  "address": "7227 Lee Deforest Drive, Columbia, MD 21046",
  "clients": [
    "Maxim Healthcare Services, Inc."
  ]
},
{
  "name": "Cecelia Black",
  "email": "ceceliab@dr-wa.org",
  "phone": "206-324-1521",
  "address": "315 5th Ave S #850, seattle, WA 98104",
  "clients": [
    "DISABILITY RIGHTS WA"
  ]
},
{
  "name": "Cedar Strategies LLC",
  "email": "andrew@cedarstrategiesllc.com",
  "phone": "406-529-4552",
  "address": "632 sw 100th St , Seattle, WA 98106",
  "clients": [
    "Tobacco-Free Action Fund"
  ]
},
{
  "name": "Chad Campbell",
  "email": "chad@iuoe612.org",
  "phone": "2533416013",
  "address": "8899 Windham Ct NE, Lacey, WA 98516",
  "clients": [
    "INTL UNION OF OPERATING ENGINEERS LOCAL 612"
  ]
},
{
  "name": "Chad See",
  "email": "flc1@freezerlongline.biz",
  "phone": "2062842522",
  "address": "2303 W COMMODORE WAY SUITE 202, SEATTLE, WA 98199",
  "clients": [
    "FREEZER LONGLINE COALITION"
  ]
},
{
  "name": "Charlee Thompson",
  "email": "charlee@nwenergy.org",
  "phone": "618-315-7775",
  "address": "811 1st Avenue, Suite 305, Seattle, WA 98104",
  "clients": [
    "NORTHWEST ENERGY COALITION"
  ]
},
{
  "name": "Charles Knutson",
  "email": "cgk@amazon.com",
  "phone": "206.228.5952",
  "address": "2121 7th Ave, Seattle, WA 98121",
  "clients": [
    "AMAZON.COM SERVICES LLC"
  ]
},
{
  "name": "Charlie Fisher",
  "email": "cfisher@ospirg.org",
  "phone": "2068535725",
  "address": "1536 SE 11th Ave Suite A, Portland, OR 97214",
  "clients": [
    "WA PUBLIC INTEREST RESEARCH GROUP"
  ]
},
{
  "name": "Charlotte Linton",
  "email": "charlotte@childrensalliance.org",
  "phone": "2063240340",
  "address": "210 S Hudson St , Seattle, WA 98134",
  "clients": [
    "Children's Alliance"
  ]
},
{
  "name": "Chelsea Martin",
  "email": "CMartin@modernelectricwater.com",
  "phone": "509-928-4540",
  "address": "904 North Pines Road, Spokane Valley, WA 99206",
  "clients": [
    "Modern Electric Water Company"
  ]
},
{
  "name": "Chelsea Moore",
  "email": "cmoore@aclu-wa.org",
  "phone": "(206) 624-2184",
  "address": "PO Box 2728 , Seattle, WA 98111",
  "clients": [
    "AMERICAN CIVIL LIBERTIES UNION OF WA"
  ]
},
{
  "name": "Chetan Soni",
  "email": "Chetan@childrenscampaignfund.org",
  "phone": "2067412484",
  "address": "PO Box 19777, Seattle, WA 98109",
  "clients": [
    "CCF Action"
  ]
},
{
  "name": "Cheyanne Cook",
  "email": "ALCS_PL_Lobbyist1@altria.com",
  "phone": "2023541500",
  "address": "101 Constitution Ave. NW, Suite 400W, Washington, DC 20001",
  "clients": [
    "ALTRIA CLIENT SERVICES LLC & ITS AFFILIATES"
  ]
},
{
  "name": "Chloe Merino",
  "email": "chloem@dr-wa.org",
  "phone": "206 324 1521",
  "address": "315 5th Ave. South Suite 850, Seattle, WA 98104",
  "clients": [
    "DISABILITY RIGHTS WA"
  ]
},
{
  "name": "Chris Korsmo",
  "email": "chris@wacharters.org",
  "phone": "206-999-5547",
  "address": "210 S Hudson St, Suite 302 , Seattle, WA 98134",
  "clients": [
    "WA CHARTERS ACTION"
  ]
},
{
  "name": "Christina Ko",
  "email": "cko@savechildren.org",
  "phone": "5096798208",
  "address": "5923 42nd Ave SW, Seattle, WA 98136",
  "clients": [
    "SAVE THE CHILDREN ACTION NETWORK"
  ]
},
{
  "name": "Christine Reid",
  "email": "christinereid@ibew77.com",
  "phone": "2067180477",
  "address": "1522 196th St SE, #D105, CHRISTINE J REID, Bothell, WA 98012",
  "clients": [
    "IBEW LOCAL 77"
  ]
},
{
  "name": "Christoph Mair",
  "email": "cmair@wslc.org",
  "phone": "2062818901",
  "address": "321 16th Ave S, Seattle, WA 98144",
  "clients": [
    "Washington State Labor Council"
  ]
},
{
  "name": "Christopher Ellis",
  "email": "cellis@bacnorthwest.org",
  "phone": "206-482-7447",
  "address": "15208 52nd Ave S. Ste 120, Tukwila, WA 98188",
  "clients": [
    "BAC Local 1 WA/AK"
  ]
},
{
  "name": "Christopher Finarelli",
  "email": "cfinarelli@thehcpa.org",
  "phone": " 202-833-7313",
  "address": "1625 I St. NW, Suite 700, Washington DC, DC 20006",
  "clients": [
    "Household and Commercial Products Assn"
  ]
},
{
  "name": "Christopher Herman",
  "email": "tcilurso@washingtonports.org",
  "phone": "3609430760",
  "address": "1501 Capitol Way Ste 304 , Olympia, WA 98501",
  "clients": [
    "Washington Public Ports Association"
  ]
},
{
  "name": "Christopher Rosenquist",
  "email": "as.oce.director.legislativeaffairs@wwu.edu",
  "phone": "253-987-0050",
  "address": "516 High St VU 519, Bellingham, WA 98225",
  "clients": [
    "ASSOC STUDENTS OF WESTERN WA UNIVERSITY"
  ]
},
{
  "name": "Cindy Black",
  "email": "cindy@fixdemocracyfirst.org",
  "phone": "2065523287",
  "address": "1402 3rd Ave #201 Ste 500, Seattle, WA 98101",
  "clients": [
    "FIX DEMOCRACY FIRST"
  ]
},
{
  "name": "Clark Hansen",
  "email": "compliance_wa_als@multistate.us",
  "phone": "(509) 224-3886",
  "address": "4343 Anna Lane, Wenatchee, WA 98801",
  "clients": [
    "The ALS Association"
  ]
},
{
  "name": "Cline, Aoibheann",
  "email": "Acline@nrahq.org",
  "phone": "7032671258",
  "address": "11250 Waples Mill Rd., Fairfax, VA 22030",
  "clients": [
    "NATL RIFLE ASSN OF AMERICA"
  ]
},
{
  "name": "Clowers Consulting",
  "email": "joren@clowersconsulting.com",
  "phone": "3606696100",
  "address": "1403 4th Ave W , Olympia, WA 98502",
  "clients": [
    "Sno-King Water District Coalition",
    "White Salmon Valley Pool Metropolitan Park District"
  ]
},
{
  "name": "Cody Nagle",
  "email": "cody.nagle@civilsurvival.org",
  "phone": "2065529328",
  "address": "PO Box 634, Port Orchard, WA 98366",
  "clients": [
    "Civil Survival Project"
  ]
},
{
  "name": "Colleen Kerr",
  "email": "colleenkerr@microsoft.com",
  "phone": "2062004781",
  "address": "One Microsoft Way, Redmond, WA 98052",
  "clients": [
    "MICROSOFT CORP"
  ]
},
{
  "name": "Collin Bannister",
  "email": "collin.bannister@wsu.edu",
  "phone": "5095532294",
  "address": "3951 sr 272 P.O Box 223, Colfax, WA 99111",
  "clients": [
    "ASSOC STUDENTS OF WA ST UNIVERSITY"
  ]
},
{
  "name": "Columbia Policy Advisors",
  "email": "josh@columbia-policy.com",
  "phone": "360-561-3560",
  "address": "900 Jefferson Street SE #1144 , Olympia, WA 98501",
  "clients": [
    "Benton County Commissioners",
    "CLARK COUNTY",
    "City of Battle Ground",
    "City of Ellensburg",
    "Evergreen Forest Stewards",
    "Island County",
    "Lewis County",
    "North Olympic Legislative Alliance ",
    "PORT BLAKELY",
    "SNOHOMISH CO",
    "San Juan County",
    "Skagit County",
    "Whatcom Co"
  ]
},
{
  "name": "Communications Workers of America",
  "email": "carissa@washtech.org",
  "phone": "425-381-6806",
  "address": "2812 Lombard Ave, #206, Everett, WA 98201",
  "clients": [
    "Communications Workers of America"
  ]
},
{
  "name": "Conner-Bennett Sharpe",
  "email": "conner-bennett.sharpe@climatesolutions.org",
  "phone": "12062500254",
  "address": "1809 7th Ave, Suite 1212, Seattle, WA 98101",
  "clients": [
    "CLIMATE SOLUTIONS"
  ]
},
{
  "name": "Conor Marshall",
  "email": "conorm@mountaineers.org",
  "phone": "206-521-6001",
  "address": "7700 Sand Point Way NE, Seattle, WA 98115",
  "clients": [
    "The Mountaineers"
  ]
},
{
  "name": "Consulting Services NW, LLC",
  "email": "mgjurasic@lobbywa.com",
  "phone": "360.481.6000",
  "address": "3403 Steamboat Is Rd NW #381, Olympia, WA 98502",
  "clients": [
    "FAMILY WINERIES OF WA ST",
    "GOVT BLDG OWNERS & LESSORS ASSN",
    "INTL COUNCIL OF SHOPPING CENTERS (ICSC)",
    "Manufactured Housing Communities of WA",
    "NATL ASSN OF CREDIT MGMT",
    "Plumbing-Heating-Cooling Contractors of Washington",
    "Roofing Contractors Association of Washington (RCAW)",
    "TOWING AND RECOVERY ASSN OF WA",
    "WA APARTMENT ASSN",
    "WA COLLECTORS ASSN",
    "WA ST SELF STORAGE ASSN"
  ]
},
{
  "name": "Corey Guilmette",
  "email": "corey.guilmette@civilsurvival.org",
  "phone": "2063174546",
  "address": "927 N. Northlake Way , Seattle, WA 98103",
  "clients": [
    "Civil Survival Project"
  ]
},
{
  "name": "Cory Shaw",
  "email": "cshaw@warocks.org",
  "phone": "206-878-1622",
  "address": "22223 7th Avenue South , Des Moines, WA 98198",
  "clients": [
    "WA AGGREGATES & CONCRETE ASSN"
  ]
},
{
  "name": "Courtney Lee",
  "email": "cnlee@amazon.com",
  "phone": "503-724-2392",
  "address": "1320 SW Broadway, Suite 400, Portland, OR 97201",
  "clients": [
    "AMAZON.COM SERVICES LLC"
  ]
},
{
  "name": "Courtney Normand",
  "email": "courtney.normand@ppallianceadvocates.org",
  "phone": "2063207651",
  "address": "2001 East Madison Street, Seattle, WA 98122",
  "clients": [
    "PLANNED PARENTHOOD ALLIANCE ADVOCATES"
  ]
},
{
  "name": "Crystal Leatherman",
  "email": "cleatherman@washingtonretail.org",
  "phone": "3608840771",
  "address": "618 Quince St SE, Olympia, WA 98501",
  "clients": [
    "WA RETAIL ASSN"
  ]
},
{
  "name": "Crystal McGaffin",
  "email": "crystalm@wsda.org",
  "phone": "2069735231",
  "address": "126 NW Canal St #300, Seattle, WA 98107",
  "clients": [
    "WA ST DENTAL ASSN"
  ]
},
{
  "name": "Curtis Augustine",
  "email": "autosinnovate1@politicomlaw.com",
  "phone": "4159032800",
  "address": "1415 L Street, Suite 1190, Sacramento, CA 95814",
  "clients": [
    "ALLIANCE FOR AUTOMOTIVE INNOVATION"
  ]
},
{
  "name": "Curtis Knapp",
  "email": "curtis@lifesciencewa.org",
  "phone": "5099543186",
  "address": "188 East Blaine St Ste 150, Seattle, WA 98102",
  "clients": [
    "Life Science Washington"
  ]
},
{
  "name": "Curtis Steinhauer",
  "email": "csteinhauer@wsac.org",
  "phone": "3607531886",
  "address": "WSAC 206 10TH AVE SE, Olympia, WA 98501",
  "clients": [
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Cyan Strategies",
  "email": "MICHAEL@CYANSTRATEGIES.COM",
  "phone": "2064236154",
  "address": "3829C S EDMUNDS ST, SEATTLE, WA 98118",
  "clients": [
    "NISSAN NORTH AMERICA"
  ]
},
{
  "name": "D'Arcy Harrison",
  "email": "darsula7@gmail.com",
  "phone": "2062806854",
  "address": "715 24th Ave Apt 103, Seattle, WA 98122",
  "clients": [
    "COSMETOLOGISTS OF WASHINGTON UNITED"
  ]
},
{
  "name": "DAN MCGRADY",
  "email": "DAN.MCGRADY@PEMCO.COM",
  "phone": "2066287989",
  "address": "PO BOX 778, SEATTLE, WA 98111",
  "clients": [
    "PEMCO Insurance"
  ]
},
{
  "name": "DANE AUSTRENG",
  "email": " danea@seiu1199nw.org",
  "phone": "425-917-1199",
  "address": "19823 58th Pl S #200, Kent, WA 98032",
  "clients": [
    "SEIU HEALTHCARE 1199 NW"
  ]
},
{
  "name": "DANIEL P STEELE",
  "email": "DSTEELE@WASA-OLY.ORG",
  "phone": "3609435717",
  "address": "825 5TH AVE SE , OLYMPIA, WA 98501",
  "clients": [
    "WA ASSN OF SCHOOL ADMINISTRATORS"
  ]
},
{
  "name": "DARCY A NONEMACHER",
  "email": "darcy@waconservationaction.org",
  "phone": "2066312603",
  "address": "1417 4th Avenue Suite 800, SEATTLE, WA 98101",
  "clients": [
    "Washington Conservation Action",
    "Washington Conservation Action Education Fund"
  ]
},
{
  "name": "DAVE KNUTSON",
  "email": "DAVIDKNUTSON@COMCAST.NET",
  "phone": "3609709660",
  "address": "4223 AMBER CT SE , OLYMPIA, WA 98501",
  "clients": [
    "COMMUNITY HEALTH NETWORK OF WA",
    "PACIFIC NORTHWEST UNIVERSITY OF HEALTH SCIENCES",
    "WA OSTEOPATHIC MEDICAL ASSN"
  ]
},
{
  "name": "DAVID C ARBAUGH",
  "email": "DAVE@ARBAUGH-ASSOCIATES.COM",
  "phone": "3604323700",
  "address": "PO BOX 1070 , SHELTON, WA 98584",
  "clients": [
    "CHELAN CO PUBLIC UTILITY DIST #1",
    "CITY OF RICHLAND",
    "ENERGY NORTHWEST",
    "Mason County PUD No. 3",
    "PORTLAND GENERAL ELECTRIC",
    "Public Utility Risk Management Services",
    "Renewable Hydrogen Alliance",
    "Sierra Pacific Industries",
    "Washington Public Power Association"
  ]
},
{
  "name": "DAVID R SWARTLEY",
  "email": "david.swartley@usbank.com",
  "phone": "503-464-1433",
  "address": "Columbia Center, 17650 NE Sandy Blvd, Gresham, OR 97230",
  "clients": [
    "US BANCORP"
  ]
},
{
  "name": "DAVID S FOSTER",
  "email": "DAVIDFOSTER9@GMAIL.COM",
  "phone": "2063728523",
  "address": "3308 43rd Ave SW, SEATTLE, WA 98105",
  "clients": [
    "ARTSFUND",
    "American Behavioral Health Systems Inc",
    "CITY OF RENTON",
    "City of Tukwila",
    "Creative West",
    "Humanities Washington",
    "INTERCITY TRANSIT",
    "KING CO COUNCIL",
    "KinderCare Learning Companies, LLC",
    "PACIFIC SCIENCE CENTER",
    "SEATTLE AQUARIUM SOCIETY",
    "SEATTLE SYMPHONY",
    "Sound",
    "Spokane Low Income Housing Consortium",
    "Tobacco-Free Action Fund"
  ]
},
{
  "name": "DAVOR GJURASIC",
  "email": "DGJURASIC@COMCAST.NET",
  "phone": "3605611923",
  "address": "PO BOX 12297, OLYMPIA, WA 98508",
  "clients": [
    "CITY OF SEQUIM",
    "NISQUALLY INDIAN TRIBE",
    "PORT GAMBLE S'KLALLAM TRIBE",
    "SNOHOMISH CO PTBA CORP",
    "WA ST PATROL TROOPERS ASSN"
  ]
},
{
  "name": "DAWN P VYVYAN",
  "email": "dpvyvyan@outlook.com",
  "phone": "2066283014",
  "address": "117 E LOUISA STE 310 , SEATTLE, WA 98102",
  "clients": [
    "CENTER FOR ENVIRONMENTAL LAW & POLICY",
    "CONFEDERATED TRIBES & BANDS OF THE YAKAMA NATION",
    "PUYALLUP TRIBE OF INDIANS",
    "SAUK-SUIATTLE INDIAN TRIBE"
  ]
},
{
  "name": "DEBORAH HERRON",
  "email": "deb.herron@stateandfed.com",
  "phone": "503-539-5333",
  "address": "12811 NW Lorraine Drive , PORTLAND, OR 97229",
  "clients": [
    "WALMART INC."
  ]
},
{
  "name": "DEDI LITTLE",
  "email": "DEDI@WSPARX.ORG",
  "phone": "3604809671",
  "address": "1624 Water Street , OLYMPIA, WA 98501",
  "clients": [
    "WA ST PHARMACY ASSN"
  ]
},
{
  "name": "DEKKER DIRKSEN",
  "email": "DEKKER.DIRKSEN@CHNWA.ORG",
  "phone": "2066527165",
  "address": "1111 3rd Ave Suite 400 , SEATTLE, WA 98101",
  "clients": [
    "COMMUNITY HEALTH NETWORK OF WA"
  ]
},
{
  "name": "DENNIS EAGLE",
  "email": "DENNIS@WFSE.ORG",
  "phone": "3603527603",
  "address": "1212 JEFFERSON ST SE STE 300, OLYMPIA, WA 98501",
  "clients": [
    "WA FEDERATION OF STATE EMPLOYEES"
  ]
},
{
  "name": "DENNIS J LAWSON",
  "email": "DENNIS@WSCFF.ORG",
  "phone": "3609433030",
  "address": "1069 ADAMS ST SE, OLYMPIA, WA 98501",
  "clients": [
    "WA ST COUNCIL OF FIRE FIGHTERS"
  ]
},
{
  "name": "DIEDRICK GOVERNMENTAL AFFAIRS LLC",
  "email": "diedrickgovernmentalaffairs@gmail.com",
  "phone": "4253141589",
  "address": "6315 199th Way SW, Rochester, WA 98579",
  "clients": [
    "Certification Board for Music Therapists",
    "WA ST SCHOOL RETIREES ASSN"
  ]
},
{
  "name": "DJIBRIL V DIOP",
  "email": "ddiop@washingtonea.org",
  "phone": "253-765-7155",
  "address": "724 Columbia N.W. Suite 220, Olympia, WA 98501",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "DMYTRO NESTERENKO",
  "email": "amber.aman@seiu775.org",
  "phone": "4254401856",
  "address": "215 Columbia, Seattle, WA 98104",
  "clients": [
    "SEIU 775"
  ]
},
{
  "name": "DONNA CHRISTENSEN, PACIFIC GOVERNMENT AFFAIRS",
  "email": "DonnaRchristensen@icloud.com",
  "phone": "2064782242",
  "address": "15655 19TH AVE SW, Burien, WA 981662707",
  "clients": [
    "Asia Pacific Cultural Center",
    "CHILDREN'S ADVOCACY CENTERS OF WA",
    "Catholic Community Services of Western WA",
    "WA COALITION FOR GIFTED EDUCATION",
    "WA ST CATHOLIC CONFERENCE",
    "Washington Coalition for Open Government",
    "Washington Continuing Care Residents Association",
    "Washington State Alliance of YMCAs"
  ]
},
{
  "name": "DOTY & ASSOC INC*",
  "email": "DYLANDOTY@GMAIL.COM",
  "phone": "2067906492",
  "address": "PO BOX 65702 , Tacoma, WA 98464",
  "clients": [
    "ACTION DD",
    "CCD Black Diamond Partners LLC",
    "CENTURYLINK",
    "ENTERPRISE HOLDINGS LLC",
    "FIRE SPRINKLER ADVISORY BD OF PUGET SOUND",
    "GB AUCTIONS, INC",
    "KITSAP TRANSIT",
    "Kitsap Mental Health Services",
    "LAMAR ADVERTISING",
    "MUCKLESHOOT INDIAN TRIBE",
    "PARATRANSIT SERVICES",
    "Starfire Sports",
    "WA ST ASSN OF FIRE CHIEFS",
    "WA ST BAIL AGENTS ASSN"
  ]
},
{
  "name": "Da Hae Kim",
  "email": "dkim@nwlc.org",
  "phone": "2023193052",
  "address": "1350 I Street NW Suite 700, Washington, DC 20005",
  "clients": [
    "National Women's Law Center (NWLC)"
  ]
},
{
  "name": "Damiana Merryweather",
  "email": "damiana@fusewashington.org",
  "phone": "206-235-6511",
  "address": "605 1st Ave Ste 401, Seattle, WA 98104",
  "clients": [
    "Fuse Washington"
  ]
},
{
  "name": "Dan Bertolet",
  "email": "dan@sightline.org",
  "phone": "2064471880",
  "address": "1402 3rd Ave #500 , SEATTLE, WA 98101",
  "clients": [
    "Sightline Institute"
  ]
},
{
  "name": "Dan Kirschner",
  "email": "dkirschner@nwga.org",
  "phone": "5033446637",
  "address": "1914 Willamette Dr, Suite 260, West Linn, OR 97068",
  "clients": [
    "Northwest Gas Association"
  ]
},
{
  "name": "Daniel Goodman",
  "email": "daniel@washingtonjustice.org",
  "phone": "2064641011",
  "address": "1809 7th Ave #1500, Seattle, WA 98101",
  "clients": [
    "WA ST ASSN FOR JUSTICE"
  ]
},
{
  "name": "Daniel Landsman",
  "email": "dlandsman@famm.org",
  "phone": "2028499002",
  "address": "1100 H Street NW, Suite 1000, Washington, DC 20005",
  "clients": [
    "Families Against Mandatory Minimums"
  ]
},
{
  "name": "Daniel Ryan Serres",
  "email": "dan@columbiariverkeeper.org",
  "phone": "5038902441",
  "address": "1125 SE Madison Suite 103A , Portland, OR 97214",
  "clients": [
    "Columbia Riverkeeper"
  ]
},
{
  "name": "Daniel Zotos",
  "email": "daniel.zotos@redwoodmaterials.com",
  "phone": "7202756796",
  "address": "2800 Lockheed Way , Carson City, NV 89706",
  "clients": [
    "Redwood Materials, Inc"
  ]
},
{
  "name": "Danielle (Skippy) Shaw",
  "email": "Skippy.shaw@tnc.org",
  "phone": "2064966484",
  "address": "410 N 4th St , Mount Vernon, WA 98273",
  "clients": [
    "THE NATURE CONSERVANCY"
  ]
},
{
  "name": "Darbi Gottlieb",
  "email": "DGottlieb@advamed.org",
  "phone": "202-783-8700",
  "address": "1301 Pennsylvania Ave NW, Suite 400, Washington, DC 20004",
  "clients": [
    "ADVANCED MEDICAL TECHNOLOGY ASSN"
  ]
},
{
  "name": "Darcelina Soloria",
  "email": "darcelina@wacharters.org",
  "phone": "509-701-4581",
  "address": "506 2nd Ave Suite 630, Seattle, WA 98104",
  "clients": [
    "WA CHARTERS ACTION"
  ]
},
{
  "name": "David Benjamin Mendoza",
  "email": "David.mendoza@tnc.org",
  "phone": "206-992-7705",
  "address": "74 Wall Street , Seattle, WA 98121",
  "clients": [
    "THE NATURE CONSERVANCY"
  ]
},
{
  "name": "David Gecas",
  "email": "davidgecas@waprosecutors.org",
  "phone": "3607532175",
  "address": "206 10th Ave SE, Olympia, WA 98501",
  "clients": [
    "WA Assn of Prosecuting Attorneys"
  ]
},
{
  "name": "David Karlsruher",
  "email": "compliance_me_cgi_1@multistate.us",
  "phone": "5126479445",
  "address": "2500 Bee Cave Road, Building III, Austin, TX 78746",
  "clients": [
    "CGI TECHNOLOGIES & SOLUTIONS INC"
  ]
},
{
  "name": "David Keepnews",
  "email": "dkeepnews@wsna.org",
  "phone": "206-575-7979",
  "address": "575 Andover Park W Suite 101, Tukwila, WA 98188",
  "clients": [
    "WA ST NURSES ASSN"
  ]
},
{
  "name": "David Lloyd",
  "email": "Inseparable2@politicomlaw.com",
  "phone": "4159032800",
  "address": "c/o 28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "Inseparable Action"
  ]
},
{
  "name": "David Namura",
  "email": "google5@politicomlaw.com",
  "phone": "206-733-8645",
  "address": "1600 7th Avenue, Suite 1500, Seattle, WA 98191",
  "clients": [
    "Google LLC and its Affiliates"
  ]
},
{
  "name": "David Sawyer",
  "email": "SAWYERDJ@GMAIL.COM",
  "phone": "2536782276",
  "address": "PO BOX 111853, Tacoma, WA 98411",
  "clients": [
    "The gallery glass & wares"
  ]
},
{
  "name": "David T. Ducharme",
  "email": "DAVID@DUCHARMEINC.COM",
  "phone": "(206) 369-0440",
  "address": "4217 WILLIAMS AVE N, RENTON, WA 98056",
  "clients": [
    "BROADBAND COMMUNICATIONS ASSN OF WA",
    "Chevron U.S.A. Inc. and Affiliates",
    "DISTILLED SPIRITS COUNCIL OF THE US",
    "NATL UTILITY CONTRACTORS ASSN WA CHAPTER",
    "WA ST TREE FRUIT ASSN"
  ]
},
{
  "name": "Dawn Rains",
  "email": "dawn@treehouseforkids.org",
  "phone": "206-267-5110",
  "address": "2100 24th Ave S, Suite 200, Seattle, WA 98144",
  "clients": [
    "TREEHOUSE"
  ]
},
{
  "name": "DeLee Shoemaker",
  "email": "DELEES@MICROSOFT.COM",
  "phone": "360-481-3348",
  "address": "One Microsoft Way, Redmond, WA 98052-6399",
  "clients": [
    "MICROSOFT CORP",
    "WA ROUNDTABLE"
  ]
},
{
  "name": "DeVere Public Affairs and Consulting",
  "email": "jeff@deveregov.com",
  "phone": "3602509627",
  "address": "6723 Prairie Ridge Dr. NE, Olympia, WA 98516",
  "clients": [
    "Critical Response Group, Inc.",
    "DDC Public Affairs on behalf of Lockheed Martin",
    "EXPLORE INFORMATION SERVICES",
    "Everett Ship Repair LLC",
    "Ice Floe LLC",
    "L3HARRIS",
    "WA ST COUNCIL OF POLICE & SHERIFFS",
    "WA ST PATROL LIEUTENANTS AND CAPTAINS ASSN",
    "WA TRUCKING ASSN"
  ]
},
{
  "name": "Deanna Dawson",
  "email": "deannad@awcnet.org",
  "phone": "360-753-4137",
  "address": "1076 Franklins St SE, Olympia, WA 98501",
  "clients": [
    "ASSN OF WA CITIES"
  ]
},
{
  "name": "Debbie Driver",
  "email": "hntb3@politicomlaw.com",
  "phone": "415-903-2800",
  "address": "c/o 28 Liberty Ship Way Suite 2815, Sausalito, CA 94965",
  "clients": [
    "HNTB CORP"
  ]
},
{
  "name": "Debora Munguia, Capitol Consulting",
  "email": "debmunguia@outlook.com",
  "phone": "3607894866",
  "address": "1501 Capitol Way S Suite 203-C, OLYMPIA, WA 98501",
  "clients": [
    "BIG BROTHERS BIG SISTERS",
    "CITY OF CHENEY",
    "CITY OF EDMONDS",
    "CITY OF SHORELINE",
    "MASON CO",
    "SPOKANE TRANSIT AUTHORITY",
    "Thurston County",
    "WOODLAND PARK ZOO SOCIETY"
  ]
},
{
  "name": "Deirdre Smallwood",
  "email": "deirdre.a.smallwood@bofa.com",
  "phone": "831-214-1763",
  "address": "400 4th Street, 2nd Floor, Lake Oswego, OR 97034",
  "clients": [
    "BANK OF AMERICA CORP"
  ]
},
{
  "name": "Denise Rodriguez",
  "email": "denise@homeownership-wa.org",
  "phone": "206.992.2381",
  "address": "5101 14th Ave NW Suite 315, Seattle, WA 98107",
  "clients": [
    "Washington Homeownership Resource Center"
  ]
},
{
  "name": "Derek Young",
  "email": "dyoung@wsac.org",
  "phone": "3607531886",
  "address": "WSAC, 206 Tenth Ave SE, Olympia, WA 98501",
  "clients": [
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Derrick Nunnally",
  "email": "derrickn@awcnet.org",
  "phone": "3607534137",
  "address": "1076 Franklin Street SE, Olympia, WA 98501",
  "clients": [
    "ASSN OF WA CITIES"
  ]
},
{
  "name": "Desimone Consulting Group",
  "email": "max@desimonecg.com",
  "phone": "2069636195",
  "address": "78 Orchard Rd N , Tacoma, WA 98406",
  "clients": [
    "Catholic Charities of Spokane",
    "Developmental Disability Ally Pac",
    "Inland Construction & Development",
    "LIFELONG",
    "NATO/Pacific Northwest Theatre Owners Association",
    "NW Rare Disease Coalition",
    "Northwest RiverPartners",
    "PORT OF BREMERTON",
    "Pilot Mental Health Campaign",
    "Port of Whitman",
    "Washington Independent Physicians Practice Association"
  ]
},
{
  "name": "Devon S. Connor-Green",
  "email": "dsconnorgreen@protonmail.com",
  "phone": "4159498500",
  "address": "1517 Capitol Way S. , Olympia, WA 98501",
  "clients": [
    "ARNPS UNITED OF WA ST",
    "ASSN OF ADV PRACTICE PSYCHIATRIC NURSES",
    "Children's Alliance",
    "GILEAD SCIENCES INC",
    "Tubman Center for Health"
  ]
},
{
  "name": "Dewey Square Group",
  "email": "anthony.kusich@deweysquare.com",
  "phone": "2026385616",
  "address": "1801 K St NW Suite 900, Washington, DC 20006",
  "clients": [
    "Housing Solutions Coalition "
  ]
},
{
  "name": "Dharia McGrew",
  "email": "DMcGrew@phrma.org",
  "phone": "916-233-3480",
  "address": "1215 K Street, Suite 970, Sacramento, CA 95814",
  "clients": [
    "PHARMACEUTICAL RSRCH/MFG OF AMERICA"
  ]
},
{
  "name": "Dominique Davis",
  "email": "dom@communitypassageways.org",
  "phone": "(206) 474-5613‬",
  "address": "1835 S 244th PL, Des Moines, WA 98198",
  "clients": [
    "Community Passageways"
  ]
},
{
  "name": "Donald Donovan",
  "email": "donnyd@iam751.org",
  "phone": "2067640306",
  "address": "9125 15th Place S, Seattle, WA 98108",
  "clients": [
    "Intl Assn of Machinists & Aerospace Workers Dist Lodge 751"
  ]
},
{
  "name": "Dorothy Miller",
  "email": "dorothy.miller@seattlechildrens.org",
  "phone": "2069411248",
  "address": "6901 Sand Point Way NE , Seattle, WA 98115",
  "clients": [
    "Seattle Children's Hospital"
  ]
},
{
  "name": "Doug Mah & Associates, LLC",
  "email": "Doug@dougmahassociates.com",
  "phone": "3605564960",
  "address": "PO box 2814 , Olympia, WA 98507-2814",
  "clients": [
    "Thurston County Chamber of Commerce"
  ]
},
{
  "name": "Dunia Faulx",
  "email": "compliance_wa_elevance_1@multistate.us",
  "phone": "253-820-1765",
  "address": "1001 Pennsylvania Avenue NW, Suite 710, Washington, DC 20004",
  "clients": [
    "Elevance Health, and its Affiliates"
  ]
},
{
  "name": "Dustin Lambro",
  "email": "dlambro@ufcw3000.org",
  "phone": "2067942606",
  "address": "102 S 49th Pl Unit B , Renton, WA 98055",
  "clients": [
    "UFCW 3000"
  ]
},
{
  "name": "Dylan D Ekins",
  "email": "wslb.blet@gmail.com",
  "phone": "5098632348",
  "address": "220 S 27th Street Suite B, Tacoma, WA 98402",
  "clients": [
    "BROTHERHOOD OF LOCOMOTIVE ENGINEERS & TRAINMEN"
  ]
},
{
  "name": "Dylan O'Connor",
  "email": "dylan@wagunresponsibility.org",
  "phone": "661-400-0798",
  "address": "200 Broadway #300, Seattle, WA 98122",
  "clients": [
    "Alliance for Gun Responsibility"
  ]
},
{
  "name": "Dziedzic Public Affairs",
  "email": "ERIN@DZPUBLICAFFAIRS.COM",
  "phone": "4254665177",
  "address": "1603 Columbia St SW , Olympia, WA 98501",
  "clients": [
    "American Diabetes Association",
    "Arboretum Foundation",
    "BLEEDING DISORDER FOUNDATION OF WA",
    "Burke Museum Association",
    "Downtown Emergency Service Center",
    "FOUNDATION FOR HEALTHY GENERATIONS",
    "HOPELINK",
    "King County",
    "Northwest Health Law Advocates",
    "SEIU Healthcare 1199NW Multi-Employer Training and Education Fund",
    "SNOHOMISH CO",
    "SeattleFWC26",
    "Vancouver Housing Authority",
    "Washington School-Based Health Alliance",
    "Washington Trails Association",
    "WithinReach"
  ]
},
{
  "name": "ELIZABETH TRAUTMAN",
  "email": "etrautman@stand.org",
  "phone": "206.406.6010",
  "address": "1756 NW 58th st, Unit D, Seattle, WA 98107",
  "clients": [
    "STAND FOR CHILDREN, INC."
  ]
},
{
  "name": "EMILY E HANSEN",
  "email": "EWALTERS@WASHINGTONEA.ORG",
  "phone": "2537657082",
  "address": "PO BOX 9100 , FEDERAL WAY, WA 980639100",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "EMILY MURPHY STRATEGIES LLC*",
  "email": "EMILYMURPHYSTRATEGIES@GMAIL.COM",
  "phone": "2063071886",
  "address": "1122 East Pike Street #655, SEATTLE, WA 98122",
  "clients": [
    "Child Care Aware of WA",
    "Civil Survival Project"
  ]
},
{
  "name": "ENGAGE STRATEGIES SPC*",
  "email": "CRAIG.ENGELKING@GMAIL.COM",
  "phone": "3605617701",
  "address": "6035 95TH AVE SW, OLYMPIA, WA 98512",
  "clients": [
    "FairVote Washington",
    "ISLANDWOOD",
    "KALISPEL TRIBE",
    "LUMMI TRIBE",
    "NORTHWEST ENERGY COALITION",
    "Sierra Club Washington State Chapter",
    "Sightline Institute",
    "WA PUBLIC INTEREST RESEARCH GROUP",
    "WA State Community Action Partnership",
    "Washington Outdoor School Consortium on behalf Wa School Principals Education Foundation"
  ]
},
{
  "name": "ERIC LOHNES",
  "email": "eric.lohnes@stateandfed.com",
  "phone": "3604801851",
  "address": "724 Columbia St NW, Suite 303, Olympia, WA 98501",
  "clients": [
    "PHARMACEUTICAL RSRCH/MFG OF AMERICA"
  ]
},
{
  "name": "ERICA D HALLOCK",
  "email": "ehallock1224@gmail.com",
  "phone": "5099912390",
  "address": "10409 N. Wieber Drive , SPOKANE, WA 99208",
  "clients": [
    "Better Health Together",
    "Excelsior Wellness",
    "Family Impact Network",
    "Spokane Guilds' School & Neuromuscular Center DBA Joya",
    "Spokane Teaching Health Center",
    "Start Early",
    "WA CHARTERS ACTION",
    "WA ST NURSES ASSN"
  ]
},
{
  "name": "ERIK STROM",
  "email": "estrom@russellinvestments.com",
  "phone": "2065054396",
  "address": "1301 2ND AVE FLOOR 18 , SEATTLE, WA 98101",
  "clients": [
    "RUSSELL INVESTMENT GROUP"
  ]
},
{
  "name": "EVERGREEN PUBLIC AFFAIRS LLC*",
  "email": "bob@evergreenpublic.com",
  "phone": "(206) 852-3616",
  "address": "349 Sixteenth Ave, SEATTLE, WA 98122-5614",
  "clients": [
    "Community Employment Alliance",
    "NATL ASSN OF SOCIAL WORKERS WA ST CHAPTER",
    "WA ASSN OF DRUG COURTS"
  ]
},
{
  "name": "Eileen Sullivan",
  "email": "Eileen@Sullivanadvocacy.com",
  "phone": "2536779469",
  "address": "3322 164th St. SW, Lynwood, WA 98087",
  "clients": [
    "COMCAST CABLE COMMUNICATIONS",
    "ChargePoint Inc",
    "Dropbox, Inc.",
    "First American Title Insurance Company",
    "Fiserv, Inc.",
    "Hims, Inc.",
    "Housing Solutions Coalition",
    "MED-Project WA, LLC",
    "Match Group, LLC",
    "McLANE COMPANY, Inc.",
    "Meta Platforms, Inc.",
    "PROLIANCE SURGEONS",
    "Vantage Data Centers",
    "WA STATE CONVENTION CENTER PUBLIC FACILITIES DIST"
  ]
},
{
  "name": "Eileen Zimmer",
  "email": "eileen.zimmer@novartis.com",
  "phone": "5186308037",
  "address": "One Health Plaza Bldg. 401 433, East Hanover, NJ 07936",
  "clients": [
    "Novartis Pharmaceuticals Corporation"
  ]
},
{
  "name": "Eli Taylor Goss",
  "email": "elig@budgetandpolicy.org",
  "phone": "512-466-3279",
  "address": "509 Olive Way Ste 833, Seattle, WA 98101",
  "clients": [
    "WA ST BUDGET & POLICY CENTER"
  ]
},
{
  "name": "Elise Orlick",
  "email": "elise.orlick@fairvotewa.org",
  "phone": "5712691054",
  "address": "PO Box 395, Bothell, WA 98041",
  "clients": [
    "FairVote Washington"
  ]
},
{
  "name": "Elizabeth Hendren",
  "email": "elizabeth@svlawcenter.org",
  "phone": "(206) 895-1820",
  "address": "810 3rd Ave Suite 630, Seattle, WA 98104",
  "clients": [
    "Sexual Violence Law Center"
  ]
},
{
  "name": "Emily Brice",
  "email": "emily@nohla.org",
  "phone": "(206) 325-6464",
  "address": "1301 5th Avenue Suite 1200, Seattle, WA 98101",
  "clients": [
    "Northwest Health Law Advocates"
  ]
},
{
  "name": "Emily Kelly",
  "email": "emily.kelly@stateandfed.com",
  "phone": "708-275-6313",
  "address": "240 East Hacienda Avenue, Campbell, CA 95008",
  "clients": [
    "ChargePoint Inc"
  ]
},
{
  "name": "Emily Mikkelsen",
  "email": "emily@childrensalliance.org",
  "phone": "2063240340",
  "address": "210 S. Hudson St. , Seattle, WA 98134",
  "clients": [
    "Children's Alliance"
  ]
},
{
  "name": "Emily Moore",
  "email": "emily@sightline.org",
  "phone": "206-447-1880",
  "address": "1402 Third Ave, Seattle, WA 98101",
  "clients": [
    "Sightline Institute"
  ]
},
{
  "name": "Emily Myers",
  "email": "Emyers@uaw.net",
  "phone": "2066336080",
  "address": "2633 Eastlake Ave E, Seattle, WA 98102",
  "clients": [
    "United Automobile, Aerospace and Agricultural Implement Workers of America"
  ]
},
{
  "name": "Emily Villanueva",
  "email": "compliance_wa_nmma_2@multistate.us",
  "phone": "3129466200",
  "address": "601 Pennsylvania Avenue NW, Suite 320, Washington, DC 20004",
  "clients": [
    "National Marine Manufacturers Association (NMMA)"
  ]
},
{
  "name": "Emily Vyhnanek",
  "email": "emilyv@budgetandpolicy.org",
  "phone": "5093385367",
  "address": "1402 3rd Ave Suite #1215, Seattle, WA 98101",
  "clients": [
    "WA ST BUDGET & POLICY CENTER"
  ]
},
{
  "name": "Emma Scalzo",
  "email": "emma@balanceourtaxcode.com",
  "phone": " (206) 420-0133",
  "address": "605 1st Ave Ste 401, Seattle, WA 98104",
  "clients": [
    "Fuse Washington"
  ]
},
{
  "name": "Emmett Mills",
  "email": "emmett@wssra.org",
  "phone": "3604135496",
  "address": "4726 Pacific Ave SE , Lacey, WA 98503",
  "clients": [
    "WA ST SCHOOL RETIREES ASSN"
  ]
},
{
  "name": "Ennis Public Affairs ",
  "email": "mike.ennis@ennispublicaffairs.com",
  "phone": "3603671743",
  "address": "22613 88th St.E., Buckley, WA 98321",
  "clients": [
    "Ash Grove Cement Co., a CRH Company",
    "BUILDING INDUSTRY ASSN OF WA",
    "Plastics Industry Association",
    "WA AIRPORT MANAGEMENT ASSN",
    "WA ASPHALT PAVEMENT ASSN",
    "WA TRUCKING ASSN"
  ]
},
{
  "name": "Enright Consulting",
  "email": "cat.holm@enrightadvocacy.com",
  "phone": "360-970-9481",
  "address": "PO Box 61557 , Vancouver, WA 98666",
  "clients": [
    "AMAROK"
  ]
},
{
  "name": "Environmental and Energy Consulting",
  "email": "julie@caleec.com",
  "phone": "916 426-9170",
  "address": "1121 L Street, Suite 309 , Sacramento, CA 95814",
  "clients": [
    "Electric Vehicle Charging Association"
  ]
},
{
  "name": "Eowyn Savela",
  "email": "eowyn.savela@ppgwni.org",
  "phone": "3603253178",
  "address": "1509 Cornwall Ave, Bellingham, WA 98225",
  "clients": [
    "Planned Parenthood Advocates of Greater Washington and North Idaho "
  ]
},
{
  "name": "Eric Gonzalez Alfaro ",
  "email": "egonzalez@earthjustice.org",
  "phone": "206-343-7340",
  "address": "810 3rd Ave #610 , Seattle, WA 98104",
  "clients": [
    "Earthjustice",
    "Unemployment Law Project",
    "Washington Community Alliance Action Fund"
  ]
},
{
  "name": "Eric Negomir",
  "email": "ericnegomir@whca.org",
  "phone": "3603523304",
  "address": "303 Cleveland Ave SE Suite 206, Tumwater, WA 98501",
  "clients": [
    "WA HEALTH CARE ASSN"
  ]
},
{
  "name": "Eric Von Brandenfels",
  "email": "Evonbrandenfels@pspilots.org",
  "phone": "2065958208",
  "address": "101 Stewart street, Seattle, WA 98101",
  "clients": [
    "Puget Sound Pilots"
  ]
},
{
  "name": "Eric ffitch",
  "email": "effitch@washingtonports.org",
  "phone": "3607631179",
  "address": "1501 CAPITOL WAY S STE 304 , OLYMPIA, WA 98501",
  "clients": [
    "Washington Public Ports Association"
  ]
},
{
  "name": "Erik Castaneda",
  "email": "ecastaneda@1800contacts.com",
  "phone": "8016646983",
  "address": "261 W Data Drive, Draper, UT 84020",
  "clients": [
    "1-800 CONTACTS"
  ]
},
{
  "name": "Erin Callahan",
  "email": "dpac1@politicomlaw.com",
  "phone": "4159032800",
  "address": "c/o 28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "Diabetes Patient Advocacy Coalition"
  ]
},
{
  "name": "Erin Frasier",
  "email": "erin@wabuildingtrades.org",
  "phone": "360-357-6778",
  "address": "906 Columbia St SW Ste 107, Olympia, WA 98501",
  "clients": [
    "WA ST BUILDING & CONSTRUCTION TRADES COUNCIL"
  ]
},
{
  "name": "Erin Haick",
  "email": "ehaick@seiu925.org",
  "phone": "2063223010",
  "address": "1914 N 34th Street #100, Seattle, WA 98103",
  "clients": [
    "SERVICE EMPLOYEES INTL UNION DIST 925"
  ]
},
{
  "name": "Erin Kester",
  "email": "Erin.Kester@rwe.com",
  "phone": "503-915-0031",
  "address": "100 Federal St. 6th Floor, Boston, MA 02110",
  "clients": [
    "RWE Offshore Wind Holdings, LLC"
  ]
},
{
  "name": "Erin Lee",
  "email": "amber.aman@seiu775.org",
  "phone": "4254401856",
  "address": "215 Columbia, Seattle, WA 98104",
  "clients": [
    "SEIU 775"
  ]
},
{
  "name": "Erin Raden",
  "email": "eraden@consumerbrandsassociation.org",
  "phone": "520-991-0014",
  "address": "1001 19th Street North 7th Floor, Arlington, VA 22209",
  "clients": [
    "Consumer Brands Association"
  ]
},
{
  "name": "Esther Warwick",
  "email": "ewarwick@arcofkingcounty.org",
  "phone": "2068297005",
  "address": "660 SW 39th St. Suite 205, Renton, WA 98057",
  "clients": [
    "The Arc of King County"
  ]
},
{
  "name": "Ethan Frenchman",
  "email": "ethan.frenchman@columbialegal.org",
  "phone": "206-464-5911",
  "address": "1301 5th Ave Suite 1200, SEATTLE, WA 98101",
  "clients": [
    "Columbia Legal Services"
  ]
},
{
  "name": "Ethan Murray",
  "email": "compliance_wa_giffords_2@multistate.us",
  "phone": "949-306-2991",
  "address": "1310 L Street NW, Suite 600, Washington, DC 20005",
  "clients": [
    "Giffords"
  ]
},
{
  "name": "Ethan Robinson",
  "email": "ethan.robinson@habitatskc.org",
  "phone": "(206) 453-2950",
  "address": "500 Naches Ave SW STE 500, Renton, WA 98057",
  "clients": [
    "Habitat for Humanity Seattle-King County"
  ]
},
{
  "name": "FMS Global Strategies",
  "email": "paulasardinas@fmsglobalstrategies.com",
  "phone": "206-823-9344",
  "address": "PO Box 2941, Renton, WA 98059",
  "clients": [
    "STAND FOR CHILDREN, INC.",
    "UNITED WAY OF KING CO"
  ]
},
{
  "name": "Fabian Urbina",
  "email": "chevron3@nmgovlaw.com",
  "phone": "4153896800",
  "address": "c/o 2350 Kerner Blvd., Ste. 250, San Rafael, CA 94901",
  "clients": [
    "Chevron U.S.A. Inc. and Affiliates"
  ]
},
{
  "name": "Fe LopezGaetke",
  "email": "fe.lopezgaetke@wearepda.org",
  "phone": "4254653513",
  "address": "110 Prefontaine Pl S , Seattle, WA 98104",
  "clients": [
    "Purpose Dignity Action"
  ]
},
{
  "name": "Fernando Mejia-Ledesma",
  "email": "fernando@juststrategy.org",
  "phone": "206-568-5400",
  "address": "3518 S Edmunds St, Seattle, WA 98118",
  "clients": [
    "Alliance for a Just Society"
  ]
},
{
  "name": "Francesca Vega",
  "email": "Francesca.Vega@seattlechildrens.org",
  "phone": "206-618-2980",
  "address": "PO Box 5371 M/S S-100, Seattle, WA 98145-5005",
  "clients": [
    "Seattle Children's Hospital"
  ]
},
{
  "name": "Freeburg Policy Solutions",
  "email": "jifreeburg@yahoo.com",
  "phone": "206-245-0059",
  "address": "3213 Mountain View Ave N, Renton, WA 98056",
  "clients": [
    "Issaquah Alps Trails Club"
  ]
},
{
  "name": "G SCOTT RICHARDS",
  "email": "GSCOTTRICHARDS@OUTLOOK.COM",
  "phone": "3609511465",
  "address": "PO BOX 1976, OLYMPIA, WA 98507",
  "clients": [
    "Bonneville Environmental Foundation",
    "Clean Fuels Alliance America",
    "THE NATURE CONSERVANCY",
    "WA PUBLIC UTILITIES DISTS ASSN"
  ]
},
{
  "name": "GAIL TORAASON MCGAFFICK INC*",
  "email": "MPWRMNT@OUTLOOK.COM",
  "phone": "360-481-3818",
  "address": "PO BOX 47, OLYMPIA, WA 98507-0047",
  "clients": [
    "Fresenius Medical Care",
    "VIRGINIA MASON FRANCISCAN HEALTH"
  ]
},
{
  "name": "GALLATIN PUBLIC AFFAIRS*",
  "email": "BruceG@GALLATINPA.COM",
  "phone": "2066967971 ",
  "address": "110 Prefontaine Place Suite 510, SEATTLE, WA 98104",
  "clients": [
    "Novolex"
  ]
},
{
  "name": "GARY STRANNIGAN",
  "email": "Gary.Strannigan@premera.com",
  "phone": "4259189048",
  "address": "PO BOX 327 MS 355, Seattle, WA 981110327",
  "clients": [
    "PREMERA BLUE CROSS"
  ]
},
{
  "name": "GLEN R SMITH",
  "email": "GLENSMITH5050@GMAIL.COM",
  "phone": "2069105050",
  "address": "PO BOX 2911 , SEATTLE, WA 981112911",
  "clients": [
    "WA ST GROUND WATER ASSN"
  ]
},
{
  "name": "GORDON THOMAS HONEYWELL GOV AFFAIRS*",
  "email": "hcroce@GTH-GOV.COM",
  "phone": "2533128363",
  "address": "PO Box 1677, 1201 Pacific Ave Ste 2200, Tacoma, WA 98401",
  "clients": [
    "#1A LifeSafer",
    "1A Smart Start LLC",
    "Adult Family Home Council",
    "Bamboo Health",
    "Benton County Commissioners",
    "CITY OF BELLEVUE",
    "CITY OF COVINGTON",
    "CITY OF GIG HARBOR",
    "CITY OF ISSAQUAH",
    "CITY OF KELSO",
    "CITY OF KENMORE",
    "CITY OF KENNEWICK",
    "CITY OF KENT",
    "CITY OF LAKE FOREST PARK",
    "CITY OF LAKEWOOD",
    "CITY OF LONGVIEW",
    "CITY OF MOUNTLAKE TERRACE",
    "CITY OF PASCO",
    "CITY OF PORT ORCHARD",
    "CITY OF REDMOND",
    "CITY OF SEATAC",
    "CITY OF TACOMA",
    "CITY OF TOPPENISH",
    "CLARK COUNTY",
    "COLUMBIA RIVER ECONOMIC DEVELOPMENT COUNCIL",
    "COWLITZ PUD",
    "Carahsoft Technology Corporation",
    "Cascade Water Alliance",
    "City Of Othello",
    "City of Aberdeen",
    "City of Airway Heights",
    "City of Bainbridge Island",
    "City of Battle Ground",
    "City of Blaine",
    "City of Bothell",
    "City of Ellensburg",
    "City of Hoquiam",
    "City of La Center",
    "City of Lynden",
    "City of Lynnwood",
    "City of Medical Lake",
    "City of Moses Lake",
    "City of Newcastle",
    "City of Spokane Valley",
    "City of Sultan",
    "Consumer Brands Association",
    "Economic Alliance Snohomish County ",
    "Evergreen Forest Stewards",
    "FEDEX",
    "Food Northwest",
    "GOODWILL OF THE OLYMPICS & RAINIER REGION",
    "Greater Grays Harbor, Inc",
    "HIGHLINE COLLEGE",
    "Haploos Inc",
    "INLAND POWER & LIGHT",
    "Innovia Foundation",
    "Island County",
    "Jaguar Transport Holdings LLC",
    "LendingTree, LLC",
    "Lewis County",
    "Lewis PUD 01",
    "MGA Home Healthcare Washington LLC",
    "McCain Foods USA, Inc",
    "North Olympic Legislative Alliance",
    "PACIFIC COAST SHELLFISH GROWERS ASSN",
    "PIERCE TRANSIT",
    "PISCES INTERNATIONAL",
    "PORT BLAKELY",
    "PRA Group, Inc.",
    "Pacific Lutheran University",
    "Palo Alto Networks",
    "Port of Hoodsport",
    "Port of Longview",
    "Port of Pasco",
    "Puget Sound & Pacific Railroad",
    "RELX INC",
    "Roblox",
    "SNOHOMISH CO",
    "SSMCP",
    "San Juan County",
    "Skagit County",
    "Stobaugh & Strong, P.C.",
    "THERMO FISHER SCIENTIFIC, INC.",
    "TOTAL WINE & MORE",
    "Team Select Home Care",
    "Town of Yacolt",
    "WA ASSN OF WHEAT GROWERS",
    "WA GRAIN COMMISSION",
    "WA OIL MARKETERS ASSN",
    "WA POTATO & ONION ASSN",
    "WA ST POTATO COMMISSION",
    "Washington School Counselor Association",
    "Watco",
    "Whatcom Co",
    "Whatcom Transportation Authority",
    "YAKIMA CO"
  ]
},
{
  "name": "GORDON THOMAS HONEYWELL LAW*",
  "email": "hcroce@gth-gov.com",
  "phone": "2533128363",
  "address": "1201 PACIFIC AVENUE Suite 2200, TACOMA, WA 98402",
  "clients": [
    "ASSN OF WA SPIRITS & WINE DISTRIBUTORS"
  ]
},
{
  "name": "GREG B MARKLEY",
  "email": "GREG@WSCFF.ORG",
  "phone": "3609433030",
  "address": "1069 ADAMS ST SE, OLYMPIA, WA 98501",
  "clients": [
    "WA ST COUNCIL OF FIRE FIGHTERS"
  ]
},
{
  "name": "Gabriela Quintana",
  "email": "gabriela@opportunityinstitute.org",
  "phone": "206-529-6361",
  "address": "509 Olive Way, Suite 302, Seattle, WA 98101",
  "clients": [
    "ECONOMIC OPPORTUNITY INSTITUTE"
  ]
},
{
  "name": "Gabriella Nazari",
  "email": "gabbi@prochoicewashington.org ",
  "phone": "206-624-1990 x3",
  "address": "1916 Pike Place, Suite 12 #1449 , Seattle, WA 98101",
  "clients": [
    "PRO-CHOICE WASHINGTON"
  ]
},
{
  "name": "George Allen",
  "email": "compliance_wa_cocacola_1@multistate.us",
  "phone": "(206) 859-9062",
  "address": "2121 6th Ave, Apt N2311, Seattle, WA 98121",
  "clients": [
    "The Coca-Cola Company"
  ]
},
{
  "name": "Giovanni Severino",
  "email": "giovanni@progresowa.org",
  "phone": "5099012798",
  "address": "6 S. 2nd St. Suite 907, Yakima, WA 98901",
  "clients": [
    "Progreso, Latino Progress"
  ]
},
{
  "name": "Glen Melin",
  "email": "gmelin@leadingagewa.org",
  "phone": "3605096553",
  "address": "24610 Taree Blvd NE , Kingston, WA 98346",
  "clients": [
    "LEADINGAGE WA"
  ]
},
{
  "name": "Graham Taylor",
  "email": "gtaylor@npca.org",
  "phone": "360.688.0917",
  "address": "1200 5th Ave #1118 , Seattle, WA 98101",
  "clients": [
    "National Parks Conservation Association"
  ]
},
{
  "name": "Greenberg Traurig",
  "email": "SacramentoGovCompliance@gtlaw.com",
  "phone": "5039566146",
  "address": "400 Capitol Mall, Ste 2400, Sacramento, CA 95814",
  "clients": [
    "Expedia Group"
  ]
},
{
  "name": "Greg Lane",
  "email": "gregl@biaw.com",
  "phone": "3603527800",
  "address": "300 Deschutes Way SW, Suite 300,, Tumwater, WA 98501",
  "clients": [
    "BUILDING INDUSTRY ASSN OF WA"
  ]
},
{
  "name": "Grist Public Affairs LLC",
  "email": "joanna@gristpublicaffairs.com",
  "phone": "2067956837",
  "address": "5206 Palatine Ave N, SEATTLE, WA 98103",
  "clients": [
    "AARP WA ST OFFICE",
    "ASSN OF WA SCHOOL PRINCIPALS",
    "Coalition for Organic and Regenerative Agriculture through Tilth Alliance",
    "Friends of Lopez Island Pool",
    "Gretchen Garth",
    "Hazardous Waste Management Program through King County",
    "INTERCITY TRANSIT",
    "Methow Valley Citizens Council Action Fund",
    "Open Doors for Multicultural Families",
    "PUGET SOUND CLEAN AIR AGENCY",
    "Sightline Institute",
    "Washington Wildlife First"
  ]
},
{
  "name": "Guadalupe Paredes Velazquez",
  "email": "Lupe@FirelandsWA.org",
  "phone": "3606606498",
  "address": "PO Box 8, Aberdeen, WA 98520",
  "clients": [
    "Firelands Workers United / Trabajadores Unidos"
  ]
},
{
  "name": "Guillermo Rogel",
  "email": "guillermo@frontandcentered.org",
  "phone": "3603595696",
  "address": "4730 Rainier Ave , Seattle, WA 98118",
  "clients": [
    "Front and Centered",
    "Washington Advocacy Partners"
  ]
},
{
  "name": "Guy Palumbo",
  "email": "guyp@amazon.com",
  "phone": "202-442-2900",
  "address": "2121 7th Ave., Seattle, WA 98121",
  "clients": [
    "AMAZON.COM SERVICES LLC"
  ]
},
{
  "name": "H2 Government Relations",
  "email": "jim_hedrick@comcast.net",
  "phone": "3607894700",
  "address": "5342 N COMMERCIAL ST , RUSTON, WA 98407",
  "clients": [
    "ASSN OF WA ST PUBLIC FACILITIES DISTS",
    "CITY OF FEDERAL WAY",
    "CITY OF MONROE",
    "CITY OF PUYALLUP",
    "City of Maple Valley",
    "GREATER SPOKANE INC",
    "Lynnwood Public Facilities District",
    "MUCKLESHOOT INDIAN TRIBE",
    "NORTHWEST YACHT BROKERS ASSN",
    "PACIFIC PROPANE GAS ASSN",
    "PORT OF EVERETT",
    "The Home Depot",
    "WA DISTILLERS GUILD",
    "WA ST RADIOLOGICAL SOCIETY",
    "WALGREENS",
    "Washington Multi Family Housing Association"
  ]
},
{
  "name": "HOLLY CHISA",
  "email": "HOLLYCHISA@HPCADVOCACY.COM",
  "phone": "3607916647",
  "address": "PO BOX 1414, OLYMPIA, WA 98507",
  "clients": [
    "AMAROK",
    "CIGAR ASSN OF AMERICA",
    "COMCAST CABLE COMMUNICATIONS",
    "Consumer Brands Association",
    "ReMA PACIFIC NW CHAPTER",
    "UNITED TRUSTEES ASSN",
    "Wizards of the Coast LLC"
  ]
},
{
  "name": "Hannah Lindell-Smith",
  "email": "hannah.lindellsmith@gmail.com",
  "phone": "2062914108",
  "address": "4842 50th Ave SW, Seattle, WA 98116",
  "clients": [
    "Washington Community Alliance Action Fund"
  ]
},
{
  "name": "Hannah Thompson-Garner",
  "email": "hannah@narn.org",
  "phone": "2062292035",
  "address": "1037 NE 65th St.,, #174, Seattle, WA 98115",
  "clients": [
    "Northwest Animal Rights Network"
  ]
},
{
  "name": "Hannah Woerner",
  "email": "hannah.woerner@columbialegal.org",
  "phone": "3609436260",
  "address": "711 Capitol Way S, Ste 706, Olympia, WA 98501",
  "clients": [
    "Columbia Legal Services"
  ]
},
{
  "name": "Harlan Levy",
  "email": "harlan.levy@wellsfargo.com",
  "phone": "(503) 936-5786",
  "address": "13984 Chelsea Drive , Lake Oswego, OR 97035",
  "clients": [
    "WELLS FARGO & CO"
  ]
},
{
  "name": "Hawa Elias",
  "email": "hawa.Elias@chpw.org",
  "phone": "2063076188",
  "address": "1111 3rd Ave STE 400, Seattle, WA 98101",
  "clients": [
    "COMMUNITY HEALTH NETWORK OF WA"
  ]
},
{
  "name": "Hazel Brown",
  "email": "hazel@wagunresponsibility.org",
  "phone": "6614000798",
  "address": "PO Box 4187, Seattle, WA 98194",
  "clients": [
    "Alliance for Gun Responsibility"
  ]
},
{
  "name": "Heather Andrews",
  "email": "handrews@afphq.org",
  "phone": "7032243200",
  "address": "4201 Wilson Blvd, Suite 1000, Arlington, VA 22203",
  "clients": [
    "Americans for Prosperity"
  ]
},
{
  "name": "Heather Kurtenbach",
  "email": "Heather@wabuildingtrades.org",
  "phone": "206.503.0540",
  "address": "8827 Hartwood Ct Se , Olympia, WA 98513",
  "clients": [
    "WA ST BUILDING & CONSTRUCTION TRADES COUNCIL"
  ]
},
{
  "name": "Heather Trim",
  "email": "heather@zerowastewashington.org",
  "phone": "(206) 441-1790",
  "address": "PO Box 84817 Suite 200, Seattle, WA 98124",
  "clients": [
    "ZERO WASTE WA"
  ]
},
{
  "name": "Hemstad Consulting",
  "email": "anthony@hemstad.us",
  "phone": "(253) 335-9163",
  "address": "130 Sherman St NW , Olympia, WA 98502",
  "clients": [
    "City of Des Moines",
    "South King Fire",
    "Washington Housing Development, LLC",
    "Washington State Fire Fighters JATC",
    "Washington State Golf Association (dba Washington Golf)"
  ]
},
{
  "name": "Hillary Norris",
  "email": "hillary@wsma.org",
  "phone": "2037257882",
  "address": "4502 42nd Ave SW, Apt 424, Seattle, WA 98116",
  "clients": [
    "WA ST MEDICAL ASSN"
  ]
},
{
  "name": "Holli Johnson",
  "email": "hotrod6204@outlook.com",
  "phone": "3607535177",
  "address": "P.O. Box 706 , Olympia, WA 98507-0706",
  "clients": [
    "Rayonier"
  ]
},
{
  "name": "Holly Hines",
  "email": "holly@waconservationaction.org",
  "phone": "206-426-0420",
  "address": "1417 Fourth Avenue Suite 800, Seattle, WA 98101",
  "clients": [
    "Washington Conservation Action",
    "Washington Conservation Action Education Fund"
  ]
},
{
  "name": "Hometown Consulting",
  "email": "joedepintowa@gmail.com",
  "phone": "360.888.8344",
  "address": "1201 E Yelm Ave STE 400 #247, Yelm, WA 98597",
  "clients": [
    "City of McCleary",
    "City of Orting",
    "HERITAGE CAPITAL ADVOCACY",
    "Plumbing-Heating-Cooling Contractors of Washington"
  ]
},
{
  "name": "Hugh Ewart",
  "email": "hugh.ewart@addunahealth.com",
  "phone": "2063999218",
  "address": "7513 14th Ave NW , SEATTLE, WA 98117",
  "clients": [
    "WA ASSN FOR COMMUNITY HEALTH"
  ]
},
{
  "name": "Huy Advocates",
  "email": "gabe@galandabroadman.com",
  "phone": "206-557-7509",
  "address": "PO Box 15146, Seattle, WA 98115",
  "clients": [
    "Huy Advocates"
  ]
},
{
  "name": "Incumbent.com LLC",
  "email": "wa@incumbent.com",
  "phone": "2068011131",
  "address": "120 State Ave. NE #255 , Olympia, WA 98501",
  "clients": [
    "Washington State Bowling Proprietors' Association"
  ]
},
{
  "name": "Insight Strategic Partners LLC",
  "email": "info@insightstrategicpartners.com",
  "phone": "2063825552",
  "address": "PO Box 21961, Seattle, WA 98111",
  "clients": [
    "AMAZON.COM SERVICES LLC",
    "Adobe Inc.",
    "Airbnb, Inc.",
    "BOEING",
    "Blackstone Real Estate Services LLC",
    "Chevron U.S.A. Inc. and Affiliates",
    "Chick-Fil-A, Inc.",
    "Child Care Aware of WA",
    "Cookware Sustainability Alliance (thru MultiState Associates LLC)",
    "DoorDash, Inc",
    "Estee Lauder Companies Inc",
    "Everytown for Gun Safety Action Fund",
    "Experience Learning Commuity DBA Museum of Pop Culture (MoPOP)",
    "Families Against Mandatory Minimums",
    "FareStart",
    "Fred Hutchinson Cancer Center",
    "Global Payments, Inc.",
    "HERO House NW",
    "Helion Energy",
    "Inmar",
    "Inseparable Action",
    "King County",
    "LYFT INC",
    "New Venture Fund",
    "NextEra Energy Resources, LLC",
    "PORT OF SKAGIT",
    "PUGET SOUND ENERGY INC",
    "Pacific Whale Watch Association",
    "Payactiv",
    "Port of Anacortes",
    "Port of Port Townsend",
    "Prologis, Inc.",
    "SALTCHUK RESOURCES INC",
    "Seattle Colleges",
    "Seattle Theatre Group",
    "SkyNRG Americas, Inc",
    "Swinomish Indian Tribal Community",
    "TRANSALTA USA INC",
    "Third Stone",
    "WA TECHNOLOGY INDUSTRY ASSN",
    "WA TRUST FOR HISTORIC PRESERVATION",
    "Youth Villages, Inc.",
    "Zillow Group"
  ]
},
{
  "name": "Irene Plenefisch",
  "email": "irenep@microsoft.com",
  "phone": "(425) 705-6673",
  "address": "One Microsoft Way , Redmond, WA 98502-6399",
  "clients": [
    "MICROSOFT CORP"
  ]
},
{
  "name": "Isela Bonilla",
  "email": "aswsuv.dla@wsu.edu",
  "phone": "5093915259",
  "address": "4227 Pacific ave, Lacey, WA 98503",
  "clients": [
    "ASSOC STUDENTS OF WA ST UNIVERSITY VANCOUVER"
  ]
},
{
  "name": "JACK FIELD",
  "email": "jack@wafeeders.org",
  "phone": "5099291711",
  "address": "PO BOX 10831 , YAKIMA, WA 98909",
  "clients": [
    "WA CATTLE FEEDERS ASSN"
  ]
},
{
  "name": "JAMES A MATTEUCCI JR",
  "email": "MERCK@NMGOVLAW.COM",
  "phone": "4153896800",
  "address": "2350 KERNER BLVD STE 250, SAN RAFAEL, CA 94901",
  "clients": [
    "MERCK SHARP & DOHME LLC & AFFILIATES"
  ]
},
{
  "name": "JAMES CURRY",
  "email": "pmi3@nmgovlaw.com",
  "phone": "4153896800",
  "address": "2350 Kerner Blvd., Ste. 250, San Rafael, CA 94901",
  "clients": [
    "PMI US Corporate Services Inc. and Affiliates"
  ]
},
{
  "name": "JAMES L KING JR",
  "email": "JIMKINGJR@YAHOO.COM",
  "phone": "(360) 480-0038",
  "address": "120 STATE AVE NE #199, OLYMPIA, WA 98501-8212",
  "clients": [
    "Automotive Recyclers of Washington",
    "Citizens for Parks and Recreation"
  ]
},
{
  "name": "JAMES MCMAHAN",
  "email": "JAMES@WASPC.ORG",
  "phone": "3604862394",
  "address": "3060 WILLAMETTE DR NE , LACEY, WA 98516",
  "clients": [
    "WA ASSN OF SHERIFFS & POLICE CHIEFS"
  ]
},
{
  "name": "JANIE M WHITE",
  "email": "jwhite@washingtonea.org",
  "phone": "253-765-7034",
  "address": "PO BOX 9100 , FEDERAL WAY, WA 980639100",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "JARED AXELROD",
  "email": "jaxelrod@amazon.com",
  "phone": "2067881511",
  "address": "440 Terry Avenue North, SEATTLE, WA 98109",
  "clients": [
    "AMAZON.COM SERVICES LLC"
  ]
},
{
  "name": "JARED MASON-GERE",
  "email": "jmasongere@washingtonea.org",
  "phone": "360-742-4255",
  "address": "724 COLUMBIA ST NW, SUITE 220 , OLYMPIA, WA 98501",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "JEAN M LEONARD*",
  "email": "jean@jeanleonard.net",
  "phone": "(360) 426-7821",
  "address": "PO Box 12348, Olympia, WA 98508-2348",
  "clients": [
    "AMERICAN INTERNATIONAL GROUP INC",
    "AWC Employee Benefit Trust",
    "Allegis Redwood Maxim Public Affairs",
    "BSA - THE SOFTWARE ALLIANCE",
    "Blue Origin LLC",
    "Corebridge Financial, Inc.",
    "ENTERTAINMENT SOFTWARE ASSN",
    "Greater Seattle Business Assn",
    "NATIONWIDE INSURANCE",
    "Pediatric Interim Care Center The Newborn Nursery",
    "Philips North America",
    "STATE FARM INSURANCE COMPANIES",
    "TikTok Inc.",
    "US Travel Insurance Association",
    "WA INSURERS",
    "WA TOURISM ALLIANCE",
    "WA WINE INSTITUTE"
  ]
},
{
  "name": "JEB C SHEPARD",
  "email": "JEB@WSMA.ORG",
  "phone": "3603524848",
  "address": "1800 COOPER POINT RD BLDG 7 STE A, OLYMPIA, WA 98502",
  "clients": [
    "WA ST MEDICAL ASSN"
  ]
},
{
  "name": "JEFFREY S GOMBOSKY",
  "email": "JEFFGOMBOSKY@GMAIL.COM",
  "phone": "3608709758",
  "address": "2312 WEDGEWOOD DR SE , OLYMPIA, WA 985013839",
  "clients": [
    "ABBOTT LABORATORIES",
    "ANHEUSER-BUSCH COMPANIES INC",
    "CTIA - The Wireless Assocation",
    "Carvana",
    "ENTERPRISE HOLDINGS LLC",
    "Graduation Alliance, Inc.",
    "Live Nation Entertainment, Inc.",
    "MULTICARE HEALTH SYSTEM",
    "PHARMACEUTICAL RSRCH/MFG OF AMERICA",
    "Plasma Protein Therapeutics Association",
    "TESLA",
    "WA HEALTH CARE ASSN"
  ]
},
{
  "name": "JENNIFER ZIEGLER",
  "email": "jennifer@zieglergov.com",
  "phone": "3607906089",
  "address": "1501 Capitol Way S. Suite 203C, OLYMPIA, WA 98501",
  "clients": [
    "AEROSPACE FUTURES ALLIANCE OF WASHINGTON LTD",
    "Association of Washington Healthcare Plans",
    "BEHIND THE BADGE FOUNDATION",
    "City of Clyde Hill",
    "City of Medina",
    "City of West Richland",
    "HNTB CORP",
    "Hayden AI Technologies, Inc.",
    "KAISER ALUMINUM",
    "LES SCHWAB TIRE CENTERS",
    "Puget Sound Regional Council",
    "Sanitary Service Co",
    "Town of Hunts Point",
    "Toyota Motor North America, Inc.",
    "WA ALLIANCE OF BOYS & GIRLS CLUB",
    "WA ROUNDTABLE",
    "WA ST MAJOR LEAGUE BASEBALL STADIUM PUBLIC FACILITIES DISTRICT (PFD)",
    "WRC Real Estate LLC"
  ]
},
{
  "name": "JERROLD B BONAGOFSKY",
  "email": "JERRYB@LOGGERS.COM",
  "phone": "(360) 352-5033",
  "address": "PO BOX 2168 , OLYMPIA, WA 98507-2168",
  "clients": [
    "WA CONTRACT LOGGERS ASSN INC"
  ]
},
{
  "name": "JERRY VANDERWOOD",
  "email": "JVANDERWOOD@AGCWA.COM",
  "phone": "4252793755",
  "address": "410 11TH AVE SE #301, OLYMPIA, WA 98501",
  "clients": [
    "ASSOCIATED GENERAL CONTRACTORS OF WA"
  ]
},
{
  "name": "JESSICA FORTESCUE",
  "email": "JESSICA@JFCONSULTINGSERVICES.COM",
  "phone": "2532269147",
  "address": "3609 N Mullen St, TACOMA, WA 98407",
  "clients": [
    "ASSN of WA Housing Authorities",
    "BRISTOL-MYERS SQUIBB CO",
    "Bellwether Housing",
    "Delta Dental of WA",
    "Football Northwest LLC",
    "HEALTHCARE DISTRIBUTION ALLIANCE c/o MultiState Associates LLC",
    "MICROSOFT CORP",
    "Mary's Place",
    "PFIZER INC",
    "PROVIDENCE HEALTH & SERVICES- WA",
    "RUSSELL INVESTMENT GROUP",
    "WA FOREST PROTECTION ASSN",
    "WA ROUNDTABLE",
    "WASTE CONNECTIONS INC",
    "Washington Mortgage Bankers Association",
    "Washington State Opportunity Scholarship"
  ]
},
{
  "name": "JIm Meadows",
  "email": "JMeadows@washingtonea.org",
  "phone": "253-508-9810",
  "address": "PO Box 9100 , Federal Way, WA 98036-9100",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "JMB Strategies",
  "email": "jmbstrategies@outlook.com",
  "phone": "2063542529",
  "address": "4570 Avery Ln SE, Suite C PMB 260, Lacey, WA 98503",
  "clients": [
    "BASIN DISPOSAL INC",
    "Consolidated Disposal Service Inc",
    "GENERAL MOTORS LLC",
    "NORTHWEST MARINE TRADE ASSN",
    "PACIFICORP",
    "SABEY CORPORATION",
    "Torre Refuse & Recycling, LLC"
  ]
},
{
  "name": "JOEL AUNE",
  "email": "JAUNE@WASA-OLY.ORG",
  "phone": "3609435717",
  "address": "P O Box 14459 , Tumwater, WA 98511",
  "clients": [
    "WA ASSN OF SCHOOL ADMINISTRATORS"
  ]
},
{
  "name": "JOHAN W HELLMAN",
  "email": "JOHAN.HELLMAN@BNSF.COM",
  "phone": "2069537592",
  "address": "330 E. Mill Plain Blvd. , Vancouver, WA 98660",
  "clients": [
    "BURLINGTON NORTHERN SANTA FE RAILROAD"
  ]
},
{
  "name": "JOHN ROTHLIN",
  "email": "JOHN.ROTHLIN@AVISTACORP.COM",
  "phone": "3609567436",
  "address": "1501 S CAPITOL WAY STE 101, OLYMPIA, WA 98501",
  "clients": [
    "AVISTA CORP"
  ]
},
{
  "name": "JOHN SCHLATTER",
  "email": "JOHN.SCHLATTER@takeda.COM",
  "phone": "2533121524",
  "address": "6612 44TH AVENUE E, TACOMA, WA 98443",
  "clients": [
    "TAKEDA PHARMACEUTICALS AMERICA, INC."
  ]
},
{
  "name": "JOHN STUHLMILLER",
  "email": "stuhlmillersolutions@gmail.com",
  "phone": "3608706017",
  "address": "11330 Fellowship LN NW , Olympia, WA 98502",
  "clients": [
    "SYNGENTA Corporation",
    "WA ST WATER RESOURCES ASSN",
    "Yakima-Klickitat Farm Association"
  ]
},
{
  "name": "JOSEPH A KENDO",
  "email": "JKENDO@WSLC.ORG",
  "phone": "2062818901",
  "address": "321 16TH AVE S, SEATTLE, WA 98144",
  "clients": [
    "Washington State Labor Council"
  ]
},
{
  "name": "JOSH D MCDONALD",
  "email": "josh@wwi.wine",
  "phone": "2532281590",
  "address": "325 WASHINGTON ST NE BOX #302 , OLYMPIA, WA 98501",
  "clients": [
    "WA WINE INSTITUTE"
  ]
},
{
  "name": "JOSIE CUMMINGS",
  "email": "josie.cummings@avistacorp.com",
  "phone": "3609729825",
  "address": "1501 Capitol Way S, Suite 101, Olympia, WA 98501",
  "clients": [
    "AVISTA CORP"
  ]
},
{
  "name": "JUDITH KREBS",
  "email": "amber.aman@seiu775.org",
  "phone": "4254401856",
  "address": "215 Columbia, Seattle, WA 98104",
  "clients": [
    "SEIU 775"
  ]
},
{
  "name": "JULIE K SALVI",
  "email": "JSALVI@WASHINGTONEA.ORG",
  "phone": "2537657165",
  "address": "724 COLUMBIA NW STE 220 , OLYMPIA, WA 98501",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "JUSTIN D LEIGHTON",
  "email": "justin@watransit.com",
  "phone": "3607869734",
  "address": "2629 12th Court SW, Olympia, WA 98502",
  "clients": [
    "WA ST TRANSIT ASSN"
  ]
},
{
  "name": "Jacob Cassady",
  "email": "jcassady@aham.org",
  "phone": "202.872.5955 x327 ",
  "address": "1111 19th Street NW; Suite 1150, Washington, DC 20036",
  "clients": [
    "AHAM - Assn of Home Appliance Manufacturers"
  ]
},
{
  "name": "Jacob Squirrel",
  "email": "jacob_squirrel@yahoo.com",
  "phone": "2062715771",
  "address": "2013 bethel st ne, olympia, WA 98506",
  "clients": [
    "Quaker Voice on Washington Public Policy"
  ]
},
{
  "name": "Jacqueline Reyes",
  "email": "jacqueline_reyes@tws.org",
  "phone": "2067057695",
  "address": "4435 35th Ave SW #422, Seattle, WA 98126",
  "clients": [
    "WILDERNESS SOCIETY"
  ]
},
{
  "name": "Jacqueline White",
  "email": "jackie@nwpulpandpaper.org",
  "phone": "3605298638",
  "address": "300 Deschutes Way S.W. Suite 201, Olympia, WA 98501",
  "clients": [
    "Northwest Pulp & Paper Association"
  ]
},
{
  "name": "Jacqui Cain",
  "email": "jcain@aftwa.org",
  "phone": "2064328088",
  "address": "604 Oakesdale Ave SW Suite 103, Renton, WA 98057",
  "clients": [
    "AFT Washington"
  ]
},
{
  "name": "Jaime Bodden",
  "email": "jbodden@wsac.org",
  "phone": "(360) 489-3011",
  "address": "206 10th Ave SE , Olympia, WA 98501",
  "clients": [
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Jaimini Parekh",
  "email": "jparekh@earthjustice.org",
  "phone": "206-701-7613",
  "address": "810 Third Avenue, Suite 610, Seattle, WA 98136",
  "clients": [
    "Earthjustice"
  ]
},
{
  "name": "Jake García",
  "email": "Jake@LatinoCommunityFund.org",
  "phone": "3609044762",
  "address": "1225 S Weller St , Seattle, WA 98114",
  "clients": [
    "Latino Community Fund of Washington State",
    "Progreso, Latino Progress"
  ]
},
{
  "name": "Jake Mayson",
  "email": "jake.mayson@walgreens.com",
  "phone": "505-500-5521",
  "address": "108 Wilmot Rd. MS 1844, Deerfield, IL 60015",
  "clients": [
    "WALGREENS"
  ]
},
{
  "name": "Jake Swanton",
  "email": "Inseparable3@politicomlaw.com",
  "phone": "4159032800",
  "address": "28 Liberty Ship Way, Sausalito, CA 94965",
  "clients": [
    "Inseparable Action"
  ]
},
{
  "name": "James Cockburn",
  "email": "jcockburn@washingtonports.org",
  "phone": "3609430760",
  "address": "1501 Capitol Way Ste 304 , Olympia, WA 98501",
  "clients": [
    "Washington Public Ports Association"
  ]
},
{
  "name": "James P Justin (Government Relations Consulting Inc.)",
  "email": "JIM@JIMJUSTINGOV.COM",
  "phone": "3608702618",
  "address": "1501 S CAPITOL WAY STE 203, OLYMPIA, WA 98501",
  "clients": [
    "AT&T SERVICES INC",
    "Auth9 Inc.",
    "BOEING EMPLOYEES CREDIT UNION",
    "Cypress Creek Renewables",
    "DoorDash, Inc",
    "EarthGen",
    "Fred Hutchinson Cancer Center",
    "Google LLC and its Affiliates",
    "LYFT INC",
    "MUNICIPAL RESEARCH & SERVICES CENTER",
    "PARTNERSHIP FOR LEARNING",
    "Parametrix",
    "Path with Art",
    "Payactiv",
    "Port Townsend Paper Company",
    "Sagitec Solutions LLC",
    "TREEHOUSE",
    "Teaching Strategies",
    "UNIVERSITY OF WASHINGTON",
    "WA ECONOMIC DEVELOPMENT ASSN",
    "WA ROUNDTABLE",
    "WA TECHNOLOGY INDUSTRY ASSN"
  ]
},
{
  "name": "James Richard Theofelis Jr.",
  "email": "jim@northstaradvocates.org",
  "phone": "206-228-8657",
  "address": "PO BOX 22437, Seattle, WA 98122",
  "clients": [
    "NorthStar Advocates"
  ]
},
{
  "name": "James Riley Benge",
  "email": "riley.benge@warealtor.org",
  "phone": "3609433100",
  "address": "504 14th Ave SE, Olympia, WA 98501",
  "clients": [
    "WA ASSN OF REALTORS"
  ]
},
{
  "name": "Jamie Anderson",
  "email": "janderson@washingtonea.org",
  "phone": "360-836-1790",
  "address": "2509 Broadway, Vancouver, WA 98663",
  "clients": [
    "VANCOUVER EDUCATION ASSN"
  ]
},
{
  "name": "Jan Himebaugh",
  "email": "janh@biaw.com",
  "phone": "(360) 352-7800",
  "address": "300 Deschutes Way SW, Suite 300, Tumwater, WA 98501",
  "clients": [
    "BUILDING INDUSTRY ASSN OF WA"
  ]
},
{
  "name": "Jane Douthit",
  "email": "Jane.Douthit@regence.com",
  "phone": "2063325212",
  "address": "1111 Lake Washington Blvd. N., Suite 900, Renton, WA 98056",
  "clients": [
    "REGENCE BLUE SHIELD"
  ]
},
{
  "name": "Janet Kelly",
  "email": "janet.kelly@pse.com",
  "phone": "4254562137",
  "address": "PO Box 97034, Mailstop EST11E, Bellevue, WA 98009",
  "clients": [
    "PUGET SOUND ENERGY INC"
  ]
},
{
  "name": "Janice Deguchi",
  "email": "janiced@nhwa.org",
  "phone": "2064618430",
  "address": "1225 S Weller St, Suite 510, Seattle, WA 98144",
  "clients": [
    "NEIGHBORHOOD HOUSE"
  ]
},
{
  "name": "Jasmin Weaver",
  "email": "Jasmin@civic-ventures.com",
  "phone": "2063321208",
  "address": "1301 Second Avenue, Suite 2850, SEATTLE, WA 98101",
  "clients": [
    "Civic Ventures"
  ]
},
{
  "name": "Jason Callahan",
  "email": "jason.callahan@greendiamond.com",
  "phone": "2535690942",
  "address": "215 N. 3rd Street, Ste 250, Shelton, WA 98584",
  "clients": [
    "GREEN DIAMOND RESOURCE COMPANY"
  ]
},
{
  "name": "Jason Hewitt",
  "email": "jasonh@washingtonpipetrades.org",
  "phone": "2539210877",
  "address": "7030 Tacoma Mall Blvd, Ste 300, Tacoma, WA 98409",
  "clients": [
    "WA State Assn of Plumbers & Pipefitters"
  ]
},
{
  "name": "Jason Spadaro",
  "email": "jspadaro@wfpa.org",
  "phone": "36035201500",
  "address": "724 Columbia St NW, Suite 250, Olympia, WA 98501",
  "clients": [
    "WA FOREST PROTECTION ASSN"
  ]
},
{
  "name": "Jason Walker",
  "email": "jwalker@waprosecutors.org",
  "phone": "3607532175",
  "address": "206 10th Avenue SE, Olympia, WA 98501",
  "clients": [
    "WA Assn of Prosecuting Attorneys"
  ]
},
{
  "name": "Jax Foley",
  "email": "jaxfoley@stateandfed.com",
  "phone": "984-833-8333",
  "address": "48 North Pleasant Street Suite 304, Amherst, MA 01002",
  "clients": [
    "FREE SPEECH FOR PEOPLE, INC."
  ]
},
{
  "name": "Jayme Peloli ",
  "email": "wilkeson.historical.district@gmail.com",
  "phone": "2532133055",
  "address": "523 Chruch Street, Wilkeson, WA 98396",
  "clients": [
    "Wilkeson Historical District"
  ]
},
{
  "name": "Jayme Shoun",
  "email": "jayme@washingtonstem.org",
  "phone": "3602598636",
  "address": "210 S Hudson Street, Seattle, WA 98134",
  "clients": [
    "WA STEM CENTER"
  ]
},
{
  "name": "Jayne Stevenson",
  "email": "jstevenson@pacificenvironment.org",
  "phone": "6127707612",
  "address": "4308B Wallingford Ave N, Seattle, WA 98103",
  "clients": [
    "Pacific Environment"
  ]
},
{
  "name": "Jazmyn Clark",
  "email": "jclark@aclu-wa.org",
  "phone": "2066242184",
  "address": "PO Box 2728 , Seattle, WA 98111",
  "clients": [
    "AMERICAN CIVIL LIBERTIES UNION OF WA"
  ]
},
{
  "name": "Jean Welch Hill",
  "email": "jean.hill@WACatholics.org",
  "phone": "2067847680",
  "address": "710 9th Ave, Seattle, WA 98014",
  "clients": [
    "WA ST CATHOLIC CONFERENCE"
  ]
},
{
  "name": "Jeff DeLuca",
  "email": "jeff@wapartnership.org",
  "phone": "360-464-4290",
  "address": "PO Box 7130, Olympia, WA 98507",
  "clients": [
    "WA State Community Action Partnership"
  ]
},
{
  "name": "Jeff Johnson",
  "email": "emwc.jeffjohnson@gmail.com",
  "phone": "2534054726",
  "address": "932 S Sunset Dr, Tacoma, WA 98465",
  "clients": [
    "REGIONAL WATER COOPERATIVE OF PIERCE CO"
  ]
},
{
  "name": "Jennifer Baker",
  "email": "Jennifer.Baker@Cigna.com",
  "phone": "503-577-8856",
  "address": "4308 SE Glenwood Street , Portland, OR 97206",
  "clients": [
    "CIGNA CORPORATE SERVICES"
  ]
},
{
  "name": "Jennifer Lawrence Hanscom",
  "email": "alf@wsma.org",
  "phone": "206-441-9762",
  "address": "1215 4th Ave Ste 1901 , Seattle, WA 98161",
  "clients": [
    "WA ST MEDICAL ASSN"
  ]
},
{
  "name": "Jennifer Muhm",
  "email": "JenniferMuhm@gmail.com",
  "phone": "206-245-3077",
  "address": "1111 Lake Washington Blvd N, Suite 900, Renton, WA 98056",
  "clients": [
    "REGENCE BLUE SHIELD"
  ]
},
{
  "name": "Jennifer Spall",
  "email": "jennifer.spall@jpmchase.com",
  "phone": "4254421341",
  "address": "1301 2nd Ave, Floor 22, 1, Seattle, WA 98101",
  "clients": [
    "JPMorgan Chase Holdings LLC"
  ]
},
{
  "name": "Jenny L. Morgan",
  "email": "jennymorgan@waschoolcounselor.org",
  "phone": "3608700852",
  "address": "2041 SE Cole Rd , Shelton, WA 98584",
  "clients": [
    "Washington School Counselor Association"
  ]
},
{
  "name": "Jeremy Lucas",
  "email": "jlucas@oceana.org",
  "phone": "2533507012",
  "address": "21675 SE 267th St, Maple Valley, WA 98038",
  "clients": [
    "Oceana, Inc."
  ]
},
{
  "name": "Jeremy Price",
  "email": "jeremy.price@hfsinclair.com",
  "phone": "360-298-4740",
  "address": "8505 S. Texas Rd., Anacortes, WA 98221",
  "clients": [
    "HF Sinclair"
  ]
},
{
  "name": "Jeremy Une",
  "email": "jbmac@email.com",
  "phone": "2067554042",
  "address": "13717 SE 258th Pl #44 13717 SE 258th Pl #44, Kent, WA 98042",
  "clients": [
    "ATU Local 587"
  ]
},
{
  "name": "Jess Russell",
  "email": "jess@roomone.org",
  "phone": "5099972050",
  "address": "PO Box 222, Twisp, WA 98856",
  "clients": [
    "Room One"
  ]
},
{
  "name": "Jessica Emsley",
  "email": "jessica.emsley@chnwa.org",
  "phone": "2066138977",
  "address": "1111 3rd Avenue Ste 400, Seattle, WA 98136",
  "clients": [
    "COMMUNITY HEALTH NETWORK OF WA"
  ]
},
{
  "name": "Jessica Epley",
  "email": "jessica.epley@ziply.com",
  "phone": "5034310458",
  "address": "135 Lake Street South Suite 155, Kirkland, WA 98033",
  "clients": [
    "Northwest Fiber, LLC dba Ziply Fiber"
  ]
},
{
  "name": "Jessica Hauffe",
  "email": "jhauffe@wsna.org",
  "phone": "206-575-7979",
  "address": "575 Andover Park West Suite 101, Seattle, WA 98188",
  "clients": [
    "WA ST NURSES ASSN"
  ]
},
{
  "name": "Jessica Mortensen",
  "email": "jessica.mortensen@reachoutandread.org",
  "phone": "206-524-3579",
  "address": "2400 NW 80th St., #315 , Seattle, WA 98117",
  "clients": [
    "REACH OUT & READ INC"
  ]
},
{
  "name": "Jessica Spiegel",
  "email": "jspiegel@wspa.org",
  "phone": "(360) 918-2178",
  "address": "P.O.Box 6069, Suite 106, Olympia, WA 98507",
  "clients": [
    "Western States Petroleum Assn."
  ]
},
{
  "name": "Jim Blundell",
  "email": "jim.blundell@t-mobile.com",
  "phone": "2068903237",
  "address": "12920 SE 38th Street, Bellevue, WA 98006-1350",
  "clients": [
    "T-MOBILE USA INC"
  ]
},
{
  "name": "Joan Jones",
  "email": "jjones@washingtonea.org",
  "phone": "206-283-8443",
  "address": "5501 4th Ave S Suite 101, Seattle, WA 98108",
  "clients": [
    "SEATTLE EDUCATION ASSN"
  ]
},
{
  "name": "Jocelyn Medearis-Viera",
  "email": "jmv@stateandfed.com",
  "phone": "209-672-9501",
  "address": "48 North Pleasant Street, Suite 304, Amherst, MA 01002",
  "clients": [
    "FREE SPEECH FOR PEOPLE, INC."
  ]
},
{
  "name": "Jodie Alberts",
  "email": "jodie@bellevuechamber.org",
  "phone": "(425) 454-2464",
  "address": "330 112th Ave NE #100th, Bellevue, WA 98004",
  "clients": [
    "Bellevue Chamber of Commerce"
  ]
},
{
  "name": "Joe Adamack",
  "email": "jadamack@gowest.org",
  "phone": "206-340-4812",
  "address": "18000 International Blvd Ste 1102, SeaTac, WA 98188",
  "clients": [
    "GoWest Credit Union Association"
  ]
},
{
  "name": "Joe Dooley",
  "email": "google3@politicomlaw.com",
  "phone": "4159032800",
  "address": "28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "Google LLC and its Affiliates"
  ]
},
{
  "name": "Joel D Baxter",
  "email": "joel.baxter@westrock.com",
  "phone": "3605618097",
  "address": "9066 Campus Meadows Loop NE , Lacey, WA 98516",
  "clients": [
    "Smurfit Westrock"
  ]
},
{
  "name": "John Bonifaz",
  "email": "jbonifaz@freespeechforpeople.org",
  "phone": "4132532700",
  "address": "48 North Pleasant Street, Suite 304, Amherst, MA 01002",
  "clients": [
    "FREE SPEECH FOR PEOPLE, INC."
  ]
},
{
  "name": "John Keane",
  "email": "JKEANE@AHAM.ORG",
  "phone": "3198996272",
  "address": "1111 19TH STREET NW SUITE 1150 , WASHINGTON, DC 20036",
  "clients": [
    "AHAM - Assn of Home Appliance Manufacturers"
  ]
},
{
  "name": "John Traynor",
  "email": "jtraynor@wslc.org",
  "phone": "2064842062",
  "address": "321 16th ave south, seattle, WA 982144",
  "clients": [
    "Washington State Labor Council"
  ]
},
{
  "name": "John Ulric Seng",
  "email": "john@sparknorthwest.org",
  "phone": "(206) 328-2441",
  "address": "1402 3rd Ave , Seattle, WA 98101",
  "clients": [
    "Spark Northwest"
  ]
},
{
  "name": "Johns-Brown Governmental Relations",
  "email": "ljohnsbrown@gmail.com",
  "phone": "360 464-5975",
  "address": "P O Box 6300 , Olympia, WA 98507",
  "clients": [
    "Full Life Care",
    "Health Care for All - Washington",
    "Innovations Human Trafficking Collaborative"
  ]
},
{
  "name": "Jon Gould",
  "email": "jon.gould@akinfamily.org",
  "phone": "2066832674",
  "address": "3233 16th Ave. S, Seattle, WA 98144",
  "clients": [
    "Akin"
  ]
},
{
  "name": "Jonathan Buxton",
  "email": "jbuxton@pcmanet.org",
  "phone": "405-313-4862",
  "address": "325 7th Street NW, 9th Floor, 9th Floor, Washington, DC 20004",
  "clients": [
    "PHARMACEUTICAL CARE MANAGEMENT ASSN"
  ]
},
{
  "name": "Jonathan Kocher",
  "email": "Jkocher@rmi.org",
  "phone": "6194594267",
  "address": "1111 Broadway, Oakland, CA 94607",
  "clients": [
    "Rocky Mountain Institute"
  ]
},
{
  "name": "Jonthomas Williams",
  "email": "jonthomas@wacharters.org",
  "phone": "206-406-6531",
  "address": "506 2nd Ave Suite 630, Seattle, WA 98104",
  "clients": [
    "WA CHARTERS ACTION"
  ]
},
{
  "name": "Jordan Mitchell",
  "email": "airbnb1@nmgovlaw.com",
  "phone": "4153896800",
  "address": "c/o 2350 Kerner Boulevard, Suite 250, San Rafael, CA 94901",
  "clients": [
    "Airbnb, Inc."
  ]
},
{
  "name": "Joseph G. Lopez",
  "email": "jlopez@thechurchcouncil.org",
  "phone": "206-525-1213",
  "address": "PO Box 18467 , Seattle, WA 98118",
  "clients": [
    "Church Council of Greater Seattle"
  ]
},
{
  "name": "Joseph Nolan",
  "email": "joseph.m.nolan@lmco.com",
  "phone": "571 431 8163",
  "address": "2121 Crystal Drive Ste. 100, Arlington, VA 22202",
  "clients": [
    "Lockheed Martin Corp."
  ]
},
{
  "name": "Juan Cotto",
  "email": "juanjcotto@yahoo.com",
  "phone": "2069926270",
  "address": "522 Lakeside Ave. S. #5 , Seattle, WA 98144",
  "clients": [
    "BLOODWORKS NW"
  ]
},
{
  "name": "Julia Gorton",
  "email": "juliag@wahospitality.org",
  "phone": "3609567279",
  "address": "510 Plum Street SE , Olympia, WA 98501",
  "clients": [
    "WA Hospitality Assn"
  ]
},
{
  "name": "Julia Marks",
  "email": "jmarks@legalvoice.org",
  "phone": "925-247-8335",
  "address": "907 Pine St , Seattle, WA 98101",
  "clients": [
    "LEGAL VOICE"
  ]
},
{
  "name": "Julia Patterson",
  "email": "jpatt3kids@gmail.com",
  "phone": "(206)276-5779",
  "address": "19226 39th Ave S, SeaTac, WA 98188",
  "clients": [
    "Starfire Sports"
  ]
},
{
  "name": "Juliana Roe",
  "email": "Juliana.Roe11@T-Mobile.com",
  "phone": "253-376-8022",
  "address": "12920 SE 38th St., Bellevue, WA 98006",
  "clients": [
    "T-MOBILE USA INC"
  ]
},
{
  "name": "Julie Boyd",
  "email": "jhaeber@ultragenyx.com",
  "phone": "415-483-8800",
  "address": "60 Leveroni Court , Novato, CA 94949",
  "clients": [
    "Ultragenyx Pharmaceutical Inc."
  ]
},
{
  "name": "Julie Chinitz",
  "email": "julie@tubmanhealth.org",
  "phone": "2067250747",
  "address": "P.O. Box 18612 , Seattle, WA 98118",
  "clients": [
    "Tubman Center for Health"
  ]
},
{
  "name": "Juliet Schindler",
  "email": "juliet.schindler@wgu.edu",
  "phone": "3854286486",
  "address": "4001 South 700 E., Suite 700, Salt Lake City, UT 84107",
  "clients": [
    "Western Governors University"
  ]
},
{
  "name": "Justin Allegro",
  "email": "justin.allegro@tnc.org",
  "phone": "703-340-7553",
  "address": "74 Wall Street, Seattle, WA 98121",
  "clients": [
    "THE NATURE CONSERVANCY"
  ]
},
{
  "name": "Justin Stang",
  "email": "justinstang@pcsga.org",
  "phone": "3604630370",
  "address": "120 State Ave. NE #142, Olympia, WA 98501",
  "clients": [
    "PACIFIC COAST SHELLFISH GROWERS ASSN"
  ]
},
{
  "name": "K & L GATES*",
  "email": "lacey.stanage@klgates.com",
  "phone": "(206) 370-7814",
  "address": "925 FOURTH AVE STE 2900, SEATTLE, WA 981041158",
  "clients": [
    "IonQ, Inc.",
    "PUGET SOUND SCHOOL COALITION/KING CO SCHOOL COALITION (THRU K AND L GATES)",
    "School Alliance"
  ]
},
{
  "name": "K.A. Clauson, Inc.",
  "email": "kim@clausoninc.com",
  "phone": "206-399-9937",
  "address": "3322 164th St SW, Lynnwood, WA 98087",
  "clients": [
    "AMAZON.COM SERVICES LLC",
    "Delta Air Lines",
    "NINTENDO OF AMERICA",
    "PHARMACEUTICAL RSRCH/MFG OF AMERICA",
    "STARBUCKS",
    "VERIZON",
    "WA Hospitality Assn"
  ]
},
{
  "name": "KAREN L STRICKLAND",
  "email": "KSTRICKLAND@AFTWA.ORG",
  "phone": "2064328088",
  "address": "604 Oakesdale AVE SW, Suite 103, Renton, WA 98057",
  "clients": [
    "AFT Washington"
  ]
},
{
  "name": "KATHRYN KOLAN",
  "email": "katie@kathrynkolanpublicaffairs.com",
  "phone": "(206) 618-4821",
  "address": "2735 Simmons Road NW, STE B, Olympia, WA 98502",
  "clients": [
    "AIDS Healthcare Foundation",
    "AMERICAN INTERNATIONAL GROUP INC",
    "AWC Employee Benefit Trust",
    "Allegis Redwood Maxim Public Affairs",
    "BSA - THE SOFTWARE ALLIANCE",
    "Blue Origin LLC",
    "Corebridge Financial, Inc.",
    "ENTERTAINMENT SOFTWARE ASSN",
    "EVERGREEN TREATMENT SERVICES",
    "GENENTECH",
    "Greater Seattle Business Assn",
    "Kooth USA LLC",
    "NATIONWIDE INSURANCE",
    "Pediatric Interim Care Center The Newborn Nursery",
    "Philips North America",
    "STATE FARM INSURANCE COMPANIES",
    "TikTok Inc.",
    "US Travel Insurance Association",
    "Unite USA dba Unite Us",
    "WA INSURERS",
    "WA ST HOSPITAL ASSN",
    "WA ST PSYCHIATRIC ASSN",
    "WA TOURISM ALLIANCE",
    "Washington State Medical Oncology Society",
    "Washington Vaccine Association"
  ]
},
{
  "name": "KELSI HAMILTON",
  "email": "wcalegchair@gmail.com",
  "phone": "3602696865",
  "address": "790 S Market Blvd, CHEHALIS, WA 98532",
  "clients": [
    "WA COLLECTORS ASSN"
  ]
},
{
  "name": "KIMBERLY SCOTT",
  "email": "kscott@wscpa.org",
  "phone": "4258902104",
  "address": "170 120th Avenue Northeast, Bellevue, WA 98005",
  "clients": [
    "WA SOCIETY OF CPA'S"
  ]
},
{
  "name": "KRISTEN FEDERICI",
  "email": "KRISTEN.FEDERICI@MOLINAHEALTHCARE.COM",
  "phone": "2533417733",
  "address": "2714 N ALDER ST , TACOMA, WA 98407",
  "clients": [
    "Molina Healthcare Inc"
  ]
},
{
  "name": "KRISTIN ANG",
  "email": "ang@fanwa.org",
  "phone": "(206)-625-9790",
  "address": "3720 Airport Way S. , Seattle, WA 98134",
  "clients": [
    "FAITH ACTION NETWORK"
  ]
},
{
  "name": "KRISTINA HERMACH",
  "email": "KRISTINA.HERMACH@GILEAD.COM",
  "phone": "3609519559",
  "address": "918 SAN FRANCISCO AVE NE, OLYMPIA, WA 985063954",
  "clients": [
    "GILEAD SCIENCES INC"
  ]
},
{
  "name": "KRISTOFER T JOHNSON",
  "email": "KrisJ@awb.org ",
  "phone": "3609431600",
  "address": "1414 CHERRY ST, OLYMPIA, WA 98501",
  "clients": [
    "ASSN OF WA BUSINESS"
  ]
},
{
  "name": "KRISTOPHER I TEFFT",
  "email": "KRIS.TEFFT@WSIASSN.ORG",
  "phone": "3607546416",
  "address": "828 7th Ave SE, OLYMPIA, WA 98501",
  "clients": [
    "AMERICAN COUNCIL OF LIFE INSURERS",
    "AMERICAN FAMILY MUTUAL INSURANCE",
    "AMERICAN PROPERTY CASUALTY INSURANCE ASSOCIATION",
    "Architects and Engineers Legislative Council",
    "LIABILITY REFORM COALITION",
    "MAPLEBEAR INC. D/B/A INSTACART",
    "Medical Evaluation Specialists, LLC",
    "Office of the Commissioner of Major League Baseball",
    "PROFESSIONAL INSURANCE AGENTS ASSN",
    "SERVICE CONTRACT INDUSTRY CNCL",
    "Sun Life Financial (U.S.) Services Company Inc.",
    "WSIA",
    "Washington Defense Trial Lawyers",
    "Washington State Financial Services Association"
  ]
},
{
  "name": "Kaitie Dong",
  "email": "kaitied@budgetandpolicy.org",
  "phone": "2066602147",
  "address": "113 Cherry St. Box 87190 , Seattle, WA 98104-2205",
  "clients": [
    "WA ST BUDGET & POLICY CENTER"
  ]
},
{
  "name": "Kameron Simmons",
  "email": "flock1@politicomlaw.com",
  "phone": "4159032800",
  "address": "c/o Politicom Law LLP, 28 Liberty Ship Way, STE 2815, Sausalito, CA 94965",
  "clients": [
    "Flock Group Inc. dba Flock Safety"
  ]
},
{
  "name": "Karen Blase",
  "email": "compliance_wa_ebsi_1@multistate.us",
  "phone": "6108971291",
  "address": "401 Plymouth Road Suite 400, Plymouth Meeting, PA 19462",
  "clients": [
    "Emergent BioSolutions"
  ]
},
{
  "name": "Karen Estevenin",
  "email": "karen@pte17.org",
  "phone": "206-328-7321",
  "address": "2900 Eastlake Ave. E. Suite 300, Seattle, WA 98102",
  "clients": [
    "PROF & TECH EMPLOYEES LOCAL 17"
  ]
},
{
  "name": "Karen Lang",
  "email": "karen.lang@pemco.com",
  "phone": "360-915-4924",
  "address": "1300 Dexter Ave N , Seattle, WA 98109",
  "clients": [
    "PEMCO Insurance"
  ]
},
{
  "name": "Karen Pillar",
  "email": "karen.pillar@teamchild.org",
  "phone": "12063222458",
  "address": "1225 S. Weller Street Suite 420 , Seattle, WA 98144",
  "clients": [
    "TEAMCHILD"
  ]
},
{
  "name": "Karina Patel",
  "email": "karina@tubmanhealth.org",
  "phone": "2067250747",
  "address": "P.O. Box 18612 , Seattle, WA 98118",
  "clients": [
    "Tubman Center for Health"
  ]
},
{
  "name": "Karyssa Jackson",
  "email": "lyft@politicomlaw.com",
  "phone": "4159032800",
  "address": "c/o 28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "LYFT INC"
  ]
},
{
  "name": "Kate Brouns",
  "email": "kate@renewablenw.org",
  "phone": "5035775598",
  "address": "421 SW 6th Ave #1400, Portland, OR 97204",
  "clients": [
    "RENEWABLE NORTHWEST"
  ]
},
{
  "name": "Katerina LaMarche",
  "email": "katerinal@wsha.org",
  "phone": " (206) 281-7211",
  "address": "999 3rd Ave #1400, Seattle, WA 98104",
  "clients": [
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "Kathleen Durkin",
  "email": "katid@wfse.org",
  "phone": "3603395125",
  "address": "906 Columbia St. SW, Olympia, WA 98501",
  "clients": [
    "WA FEDERATION OF STATE EMPLOYEES"
  ]
},
{
  "name": "Kathryn Horvath",
  "email": "kathryn.horvath@publicinterestnetwork.org",
  "phone": "206-848-6866",
  "address": "5241 38th Ave NE, Seattle, WA 98105",
  "clients": [
    "WA PUBLIC INTEREST RESEARCH GROUP"
  ]
},
{
  "name": "Katie Beeson",
  "email": "katie@wafood.org",
  "phone": "3607892136",
  "address": "410 11th Ave SE, Olympia, WA 98501",
  "clients": [
    "WA FOOD INDUSTRY"
  ]
},
{
  "name": "Katie Jolma",
  "email": "katiej@archer-publicaffairs.com",
  "phone": "3607989829",
  "address": "PO Box 326, Vancouver, WA 98666",
  "clients": [
    "COUNCIL FOR THE HOMELESS",
    "Columbia River Mental Health Services"
  ]
},
{
  "name": "Katrina Johnson",
  "email": "katrina@blacklivesseattle.org",
  "phone": "2063330350",
  "address": "505 Broadway E #328, Seattle, WA 98108",
  "clients": [
    "Black Lives Matter Seattle-King County"
  ]
},
{
  "name": "Kaylee Galloway",
  "email": "kaylee@alloftheaboveconsulting.com",
  "phone": "3604899192",
  "address": "PO Box 53 , Bellingham, WA 98227",
  "clients": [
    "REGIONAL FISHERIES ENHANCEMENT GROUP COALITION"
  ]
},
{
  "name": "Kelli Carson",
  "email": "kelli@washingtonjustice.org",
  "phone": "4253517113",
  "address": "1809 7th Ave #1500, Seattle, WA 98101",
  "clients": [
    "WA ST ASSN FOR JUSTICE"
  ]
},
{
  "name": "Kelly Campbell",
  "email": "kelly@columbiariverkeeper.org",
  "phone": "5419535475",
  "address": "1125 SE Madison Street Suite 103A, Portland, OR 97214",
  "clients": [
    "Columbia Riverkeeper"
  ]
},
{
  "name": "Kelly Fukai",
  "email": "kfukai@washingtontechnology.org",
  "phone": "5094483303",
  "address": "1871 NW Gilman Blvd Suite 2d, Issaquah, WA 98027",
  "clients": [
    "WA TECHNOLOGY INDUSTRY ASSN"
  ]
},
{
  "name": "Kelly Olson",
  "email": "kelly.olson@civilsurvival.org",
  "phone": "2063174546",
  "address": "927 N. Northlake Way , Seattle, WA 98103",
  "clients": [
    "Civil Survival Project"
  ]
},
{
  "name": "Kelly Wicker",
  "email": "kelly@kellywicker.com",
  "phone": "360-239-0432",
  "address": "P.O. Box 3718 , Lacey, WA 98509",
  "clients": [
    "Latino Civic Alliance"
  ]
},
{
  "name": "Kelsey Beck",
  "email": "kelsey.x.beck@kp.org",
  "phone": "206-379-3218",
  "address": "1300 SW 27th Street, Renton, WA 98105",
  "clients": [
    "Kaiser Foundation Health Plan of Washington"
  ]
},
{
  "name": "Kelsey Wulfkuhle",
  "email": "kwulfkuhle@usofcare.org",
  "phone": "785-633-8985",
  "address": "2776 S Arlington Mill Drive, Suite 504, Arlington, VA 22206",
  "clients": [
    "United States of Care Action"
  ]
},
{
  "name": "Kendall Kosai",
  "email": "kkosai@adl.org",
  "phone": "2063482100",
  "address": "2200 6th Avenue, 835, Seattle, WA 98121",
  "clients": [
    "Anti-Defamation League (ADL) Pacific Northwest Office"
  ]
},
{
  "name": "Kenton Brine",
  "email": "kenton.brine@nwinsurance.org",
  "phone": "3604816539",
  "address": "1500 Water St SW, #200, OLYMPIA, WA 98501",
  "clients": [
    "NW Insurance Council"
  ]
},
{
  "name": "Kerston Swartz",
  "email": "kerston.swartz@zoo.org",
  "phone": "2068197487",
  "address": "5500 Phinney Avenue N, Seattle, WA 98103",
  "clients": [
    "WOODLAND PARK ZOO SOCIETY"
  ]
},
{
  "name": "Kevin Schilling",
  "email": "kevin@wsda.org",
  "phone": "+1 (206) 948-0381",
  "address": "126 NW Canal Street , Seattle, WA 98107",
  "clients": [
    "WA ST DENTAL ASSN"
  ]
},
{
  "name": "Khalid Pagan",
  "email": "kpagan@lenovo.com",
  "phone": "3128822168",
  "address": "8001 Development Drive , Morrisville, NC 27560",
  "clients": [
    "Lenovo"
  ]
},
{
  "name": "Khalil Hamiduddin",
  "email": "khahamid31@gmail.com",
  "phone": "2067949626",
  "address": "3720 Airport Way S, Seattle, WA 98134",
  "clients": [
    "SERVICE EMPLOYEES INTL UNION LOCAL 6"
  ]
},
{
  "name": "Kiara Daniels",
  "email": "kdaniels24@icloud.com",
  "phone": "253-353-9344",
  "address": "1308 S I St., Tacoma, WA 98405",
  "clients": [
    "Washington Community Alliance Action Fund"
  ]
},
{
  "name": "Kim Lowry",
  "email": "kim.m.lowry@lmco.com",
  "phone": "703-413-6987",
  "address": "2121 Crystal Drive Suite 100, Arlington, VA 22202",
  "clients": [
    "Lockheed Martin Corp."
  ]
},
{
  "name": "King Co Sexual Assault Resource Center",
  "email": "lredden@kcsarc.org",
  "phone": "425-226-5062",
  "address": "PO Box 300, Renton, WA 98057",
  "clients": [
    "KING CO SEXUAL ASSAULT RESOURCE CENTER"
  ]
},
{
  "name": "Kira Munson",
  "email": "Kmunson@wslc.org",
  "phone": "2062818901",
  "address": "321 16th Ave S, Seattle, WA 98144",
  "clients": [
    "Washington State Labor Council"
  ]
},
{
  "name": "Kirsten Gregory",
  "email": "kirsteng@pasadosafehaven.org",
  "phone": "3602179057",
  "address": "PO Box 171, Sultan, WA 98294",
  "clients": [
    "Pasado's Safe Haven"
  ]
},
{
  "name": "Kris Carlson",
  "email": "kris_carlson@selinc.com",
  "phone": "2023224486",
  "address": "2350 NE Hopkins Court , Pullman, WA 99163",
  "clients": [
    "Schweitzer Engineering Laboratories"
  ]
},
{
  "name": "Kristen L. Boyles",
  "email": "kboyles@earthjustice.org",
  "phone": "2063437340",
  "address": "810 Third Ave., Suite 610, Seattle, WA 98104",
  "clients": [
    "Earthjustice"
  ]
},
{
  "name": "Kristin Wiggins",
  "email": "kwigginsconsulting@gmail.com",
  "phone": "2063756081",
  "address": "6746 Division Ave NW , Seattle, WA 98117",
  "clients": [
    "Akin",
    "HealthPoint",
    "Inatai Foundation",
    "Institute for Child Success",
    "ONEAMERICA",
    "Perigee Fund",
    "The Imagine Institute",
    "WA STEM CENTER"
  ]
},
{
  "name": "Kristina Brown",
  "email": "Kristina.Brown@Kindering.org",
  "phone": "4254570073",
  "address": "911 SE 10th St , North Bend, WA 98045",
  "clients": [
    "Kindering"
  ]
},
{
  "name": "Krystal LoPilato",
  "email": "lopilato@everytown.org",
  "phone": "6463248250",
  "address": "PO Box 4184, New York, NY 10163",
  "clients": [
    "Everytown for Gun Safety Action Fund"
  ]
},
{
  "name": "Krystelle Purkey",
  "email": "krystelle@purkeygac.com",
  "phone": "2533279334",
  "address": "10611 interlaaken drive sw, Lakewood, WA 98498",
  "clients": [
    "COMMUNITY ASSOC INSTITUTE",
    "Hometap Equity Partners, LLC",
    "NAIOP Washington State",
    "Skokomish Indian Tribe",
    "Skokomish Indian Tribe Enterprises, Inc.",
    "Washington Multi Family Housing Association"
  ]
},
{
  "name": "Kurt Spiegel",
  "email": "kurts@wfse.org",
  "phone": "3609517076",
  "address": "12627 Gilling Lane SE, Yelm, WA 98597",
  "clients": [
    "WA FEDERATION OF STATE EMPLOYEES"
  ]
},
{
  "name": "Kurt Swanson",
  "email": "kurt@ualocal32.com",
  "phone": "2064593564",
  "address": "7030 Tacoma Mall Blvd, Tacoma, WA 98409",
  "clients": [
    "WA State Assn of Plumbers & Pipefitters"
  ]
},
{
  "name": "Kyla Shkerich Blair Consulting",
  "email": "kyla@ksblairconsulting.com",
  "phone": "4258915519",
  "address": "23316 12th Pl S, Des Moines, WA 98198",
  "clients": [
    "Adams County Public Hospital District #2",
    "CITY OF QUINCY",
    "COLUMBIA BASIN DEVELOPMENT LEAGUE",
    "City of Chelan",
    "City of Sunnyside",
    "HIP of Spokane County",
    "Maddie's Place",
    "Ritzville School District",
    "Thrive International"
  ]
},
{
  "name": "Kyle Wojewoda",
  "email": "Kyle.Wojewoda@Symetra.com",
  "phone": "4252566316",
  "address": "777 108th Ave NE, Suite 700, 777 108th Ave NE, Suite 700, Bellevue, WA 98004",
  "clients": [
    "Symetra Life Insurance Company"
  ]
},
{
  "name": "LARRY C DELANEY",
  "email": "ldelaney@washingtonea.org",
  "phone": "253-765-7031",
  "address": "PO BOX 9100 , FEDERAL WAY, WA 980639100",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "LAURI ST OURS",
  "email": "lauristours@whca.org",
  "phone": "3603523304",
  "address": "303 CLEVELAND AVE SE SUITE 206 , TUMWATER, WA 98501",
  "clients": [
    "WA HEALTH CARE ASSN"
  ]
},
{
  "name": "LAURIE M VALERIANO",
  "email": "lvaleriano@toxicfreefuture.org",
  "phone": "2066321545",
  "address": "4649 SUNNYSIDE AVE N #540 E , SEATTLE, WA 98103",
  "clients": [
    "TOXIC-FREE FUTURE"
  ]
},
{
  "name": "LEE NEWGENT",
  "email": "lee@leenewgent.org",
  "phone": "206-550-4862",
  "address": "PO Box 66416, Burien, WA 98166",
  "clients": [
    "Pharmaceutical Industry Labor-Management Association"
  ]
},
{
  "name": "LEE PHILLIPS",
  "email": "LEEP@SUNRISEEMAIL.COM",
  "phone": "4252124234",
  "address": "PO BOX 2569, EVERETT, WA 98213",
  "clients": [
    "SUNRISE SERVICES INC"
  ]
},
{
  "name": "LINDSEY R GRAD",
  "email": "LINDSEYG@SEIU1199NW.ORG",
  "phone": "425-917-1199",
  "address": "19823 58th Pl S Ste. 200, Kent, WA 98032",
  "clients": [
    "SEIU HEALTHCARE 1199 NW"
  ]
},
{
  "name": "LIZ ANDERSON",
  "email": "landerson@wpuda.org",
  "phone": "3607412678",
  "address": "212 Union Ave SE #201, Olympia, WA 98501",
  "clients": [
    "WA PUBLIC UTILITIES DISTS ASSN"
  ]
},
{
  "name": "LORI L GRASSI",
  "email": "LGRASSI@CHIROHEALTH.ORG",
  "phone": "253-988-0500",
  "address": "1120 Pacific Avenue, #206, Tacoma, WA 98402",
  "clients": [
    "WA ST CHIROPRACTIC ASSN"
  ]
},
{
  "name": "LORRELL NOAHR",
  "email": "lnoahr@washingtonea.org",
  "phone": "3609567744",
  "address": "724 COLUMBIA N.W., SUITE 220 , OLYMPIA, WA 98501",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "LUKE ESSER",
  "email": "LUKEESSER@AOL.COM",
  "phone": "4257474563",
  "address": "404 158TH PL SE , BELLEVUE, WA 980084837",
  "clients": [
    "Boilermakers Local 502",
    "CITY OF BELLINGHAM",
    "CITY OF FEDERAL WAY",
    "CITY OF MONROE",
    "CITY OF PUYALLUP",
    "CITY OF SPOKANE",
    "CITY OF YAKIMA",
    "City of Mercer Island",
    "City of Olympia",
    "City of Sammamish",
    "KALISPEL TRIBE",
    "SEIU 775",
    "WA ST CATHOLIC CONFERENCE"
  ]
},
{
  "name": "LaDessa Croucher",
  "email": "lcroucher@resolutionwa.org",
  "phone": "425-530-8309",
  "address": "c/o DRC of Thurston County, P.O. Box 6184, Olympia, WA 98507-6184",
  "clients": [
    "RESOLUTION WA"
  ]
},
{
  "name": "Laura Feinstein",
  "email": "feinstei76@gmail.com",
  "phone": "206-767-6868",
  "address": "3311 Lafayette Ave S, Seattle, WA 98144",
  "clients": [
    "Sightline Institute"
  ]
},
{
  "name": "Lauren Johnson",
  "email": "lauren@wsda.org",
  "phone": "2064481914",
  "address": "126 NW Canal St Ste 300, Seattle, WA 98107",
  "clients": [
    "WA ST DENTAL ASSN"
  ]
},
{
  "name": "Lauren McCloy",
  "email": "lauren@nwenergy.org",
  "phone": "2066210094",
  "address": "811 1st Ave. NE, Seattle, WA 98104",
  "clients": [
    "NORTHWEST ENERGY COALITION"
  ]
},
{
  "name": "Lauren Platt",
  "email": "lauren.platt@providence.org",
  "phone": "2069494425",
  "address": "2760 South Main Street, SEATTLE, WA 98144",
  "clients": [
    "PROVIDENCE HEALTH & SERVICES- WA"
  ]
},
{
  "name": "Laurie Weidner",
  "email": "laurie.weidner@rpecwa.org",
  "phone": "360-352-8262",
  "address": "906 Columbia St, SW Suite 501, Olympia, WA 98501",
  "clients": [
    "RETIRED PUBLIC EMPLOYEES COUNCIL OF WA"
  ]
},
{
  "name": "Leah Griffin",
  "email": "leah@washingtonjustice.org",
  "phone": "3607084750",
  "address": "9056 11th Ave SW, Seattle, WA 98106",
  "clients": [
    "WA ST ASSN FOR JUSTICE"
  ]
},
{
  "name": "Leah Lindahl",
  "email": "compliance_wa_hda_1@multistate.us",
  "phone": "303-829-4121",
  "address": "1275 Pennsylvania Ave NW, Suite 600, Washington, DC 20004",
  "clients": [
    "HEALTHCARE DISTRIBUTION ALLIANCE c/o MultiState Associates LLC"
  ]
},
{
  "name": "Leah Missik",
  "email": "leah.missik@climatesolutions.org",
  "phone": "2064543176",
  "address": "1809 7th Ave Suite 1212, Seattle, WA 98101",
  "clients": [
    "CLIMATE SOLUTIONS"
  ]
},
{
  "name": "Lee Che P. Leong",
  "email": "lee.che@nohla.org",
  "phone": "2064202747",
  "address": "1301 5th Avenue, Suite 1200, Seattle, WA 98101",
  "clients": [
    "Northwest Health Law Advocates"
  ]
},
{
  "name": "Leila Reynolds",
  "email": "leilar@budgetandpolicy.org",
  "phone": "2069318400",
  "address": "4610 48th Ave S, Seattle, WA 98118",
  "clients": [
    "WA ST BUDGET & POLICY CENTER"
  ]
},
{
  "name": "Leonard A Mc Comb",
  "email": "twomedicine@live.com",
  "phone": "3609511661",
  "address": "2255 Wildwood Rd , CURTIS, WA 98538",
  "clients": [
    "COMMUNITY HEALTH NETWORK OF WA",
    "PORT OF EVERETT",
    "Unite USA dba Unite Us",
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "Leslie K. Emerick, LLC",
  "email": "lesemerick@lkemerick.com",
  "phone": "3602806142",
  "address": "1904 54th Ln SE, OLYMPIA, WA 98501",
  "clients": [
    "AMERICAN MASSAGE THERAPY ASSN- WA CHAPTER",
    "Fresenius Medical Care",
    "HOME CARE ASSN OF WA",
    "Home Care Association of America",
    "WA ST HOSPICE & PALLIATIVE CARE ORG",
    "Washington Acupuncture and Eastern Medicine Association",
    "Washington State Podiatric Medical Association"
  ]
},
{
  "name": "Linda Garcia",
  "email": "linda@wapartnership.org",
  "phone": "4253904596",
  "address": "P.O. Box 7130 , Olympia, WA 98507",
  "clients": [
    "WA State Community Action Partnership"
  ]
},
{
  "name": "Lindsey Hueer",
  "email": "lhueer@toyassociation.org",
  "phone": "3605663027",
  "address": "1375 Broadway, New York, NY 10018",
  "clients": [
    "ASSN OF WA BUSINESS",
    "The Toy Association"
  ]
},
{
  "name": "Lindsey Schromen-Wawrin",
  "email": "Lindsey@FirelandsWA.org",
  "phone": "3604064321",
  "address": "PO Box 8 , Aberdeen, WA 98520",
  "clients": [
    "Firelands Workers United / Trabajadores Unidos"
  ]
},
{
  "name": "Lindsey Viscarra",
  "email": "NORDlobbying@gmail.com",
  "phone": "2023291983",
  "address": "1779 Massachusetts Avenue Suite 500, Washington, DC 20036",
  "clients": [
    "National Organization for Rare Disorders"
  ]
},
{
  "name": "Lisa Daugaard",
  "email": "lisa.daugaard@wearepda.org",
  "phone": "(206) 392 0050",
  "address": "110 Prefontaine Place S , Seattle, WA 98104",
  "clients": [
    "Purpose Dignity Action"
  ]
},
{
  "name": "Lisa Thatcher",
  "email": "LISATHATCHER@COMCAST.NET",
  "phone": "(253) 686-8746",
  "address": "PO Box 39437 , Lakewood, WA 98496",
  "clients": [
    "ASSN OF WA PUBLIC HOSPITAL DISTRICTS",
    "CLARK PUBLIC UTILITIES",
    "Drumfire Public Affairs on behalf of Coalition for High Performance Recycling (CHPR) ",
    "Eastern Wa St Historical Society",
    "GLAXO SMITHKLINE",
    "KITSAP PUD 01",
    "PORT OF TACOMA",
    "SPOKANE INTL AIRPORT",
    "The Northwest Seaport Alliance",
    "Trouves Health Care Corporation",
    "WA ACADEMY OF EYE PHYSICIANS & SURGEONS",
    "WA CITIES INSURANCE AUTHORITY",
    "WA SOCIETY OF CPA'S",
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "Lobby Washington, LLC ",
  "email": "chet@lobbywa.com",
  "phone": "360.705.0113",
  "address": "123 Fir Street NE #201, Olympia, WA 98506",
  "clients": [
    "BLDG OWNERS & MANAGERS ASSN OF KING CO",
    "CONSOLIDATED BOOKKEEPING & MANAGEMENT SERVICES INC",
    "GOVT BLDG OWNERS & LESSORS ASSN",
    "HABITAT FOR HUMANITY OF WA ST",
    "INTL COUNCIL OF SHOPPING CENTERS (ICSC)",
    "NATL ASSN OF CREDIT MGMT",
    "RENTAL HOUSING ASSN OF WA",
    "Roofing Contractors Association of Washington (RCAW)",
    "TOWING AND RECOVERY ASSN OF WA",
    "TPC Habitat for Humanity",
    "WA COLLECTORS ASSN",
    "WA ST DENTAL ASSN",
    "WA ST SELF STORAGE ASSN"
  ]
},
{
  "name": "Lodestar Strategic LLC",
  "email": "brian@lodestarstrategic.com",
  "phone": "2067479890",
  "address": "7739 29th Ave NE , Seattle, WA 98115",
  "clients": [
    "At-sea Processors Association",
    "Binti, Inc.",
    "Chelan Douglas Regional Port Authority",
    "City of Leavenworth",
    "City of Wenatchee",
    "Coalition for Affordable Housing Development",
    "Coalition for Better Community Health",
    "DTG Enterprises,Inc.",
    "Gretchen Garth",
    "Hayden Homes",
    "McKinstry",
    "Mount St. Helens Institute",
    "North Central Accountable Community of Health",
    "Northeastern University",
    "Rivian Automotive LLC",
    "STACK Infrastructure",
    "VertueLab",
    "WA PUBLIC UTILITIES DISTS ASSN",
    "Washington Independent Collision Repairers Association"
  ]
},
{
  "name": "Logan Noel-Endres",
  "email": "endres@childcare.org",
  "phone": "206-376-2250",
  "address": "1501 Pacific Ave, Suite 305, Tacoma, WA 98402",
  "clients": [
    "BrightSpark Early Learning Services"
  ]
},
{
  "name": "London A. Breedlove",
  "email": "dpa@wspapsych.org",
  "phone": "3125043039",
  "address": "470 NE 9th Street, East Wenatchee, WA 98801",
  "clients": [
    "WA ST PSYCHOLOGICAL ASSN"
  ]
},
{
  "name": "LuGina Mendez-Harper",
  "email": "lmendezharper@primetherapeutics.com",
  "phone": "(505) 206-1089",
  "address": "10707 East Deawalter Avenue, Mesa, AZ 85212",
  "clients": [
    "Prime Therapeutics, LLC"
  ]
},
{
  "name": "Ludeman Public Affairs",
  "email": "brent@ludemanpartners.com",
  "phone": "2067906255",
  "address": "PO Box 1099 , Gig Harbor, WA 98335",
  "clients": [
    "1-800 CONTACTS",
    "ACTIVEHOURS, INC. DBA EARNIN",
    "ALTRIA CLIENT SERVICES LLC & ITS AFFILIATES",
    "AT&T SERVICES INC",
    "Accelerate Learning Inc.",
    "BUILDING INDUSTRY ASSN OF WA",
    "Bitcoin Depot",
    "CAL PORTLAND COMPANY",
    "CONTINENTAL CASUALTY COMPANY (CNA Insurance Companies)",
    "Chubb",
    "Communicare Technology Inc., d/b/a Pulsara",
    "Expedia Group",
    "Hazel Health Inc.",
    "Household and Commercial Products Assn",
    "IO Management Company LLC",
    "KEYBANK",
    "LKQ Corporation",
    "MALLINCKRODT PHARMACEUTICALS",
    "Michael LaCorte Dentistry, PC",
    "NATL ELECTRICAL CONTRACTORS ASSN",
    "National Insurance Crime Bureau",
    "Qualtrics LLC",
    "REAL ESTATE VALUATION ADVOCACY ASSOC",
    "SCI Shared Resources LLC",
    "SH Advisors LLC",
    "Smurfit Westrock",
    "Turo Inc.",
    "Veteran Benefits Guide",
    "Viatris Inc.",
    "WALMART INC.",
    "WELLS FARGO & CO",
    "Waymo LLC"
  ]
},
{
  "name": "Luis Moscoso",
  "email": "luism@allaboardwashington.org",
  "phone": "206.200.8663",
  "address": "1221 Mottman Rd. SW K 101, Tumwater, WA 98512",
  "clients": [
    "ALL ABOARD WASHINGTON"
  ]
},
{
  "name": "Lynda Hall",
  "email": "Lynda@treehouseforkids.org",
  "phone": "2067677000",
  "address": "Treehouse 2100 24th Ave S. Suite 200, Seattle, WA 98144",
  "clients": [
    "TREEHOUSE"
  ]
},
{
  "name": "MARIE SULLIVAN PUBLIC AFFAIRS CORP.",
  "email": "MARIE@MSPUBLICAFFAIRS.COM",
  "phone": "3608706911",
  "address": "2132 BEVERLY BEACH DR NW , OLYMPIA, WA 98502",
  "clients": [
    "CONFEDERATED TRIBES OF THE UMATILLA INDIAN RESERVATION",
    "EASTERN WA QUALITY SCHOOLS COALITION",
    "Public Works  Board",
    "QUINAULT INDIAN NATION",
    "WA ST PTA",
    "Walla Walla School District 140",
    "Washington MESA"
  ]
},
{
  "name": "MARK J JOHNSON",
  "email": "mjohnson@washingtonretail.org",
  "phone": "(360)943-9198",
  "address": "PO BOX 2227 , OLYMPIA, WA 98507-2227",
  "clients": [
    "WA RETAIL ASSN"
  ]
},
{
  "name": "MARY G FISCHER",
  "email": "MFISCHER@INSTITUTEFAMILY.ORG",
  "phone": "2539271550",
  "address": "34004 16TH AVE S STE 200, FEDERAL WAY, WA 98003",
  "clients": [
    "INSTITUTE FOR FAMILY DEVELOPMENT"
  ]
},
{
  "name": "MARY STAPLES",
  "email": "compliance_wa_nacds_1@multistate.us",
  "phone": "8173082103",
  "address": "211 East Southlake Blvd, Suite 108, SOUTHLAKE, TX 76092",
  "clients": [
    "National Association of Chain Drug Stores"
  ]
},
{
  "name": "MATTHEW A COMISKY",
  "email": "MCOMISKY@AMFOREST.ORG",
  "phone": "3603523910",
  "address": "924 CAPITOL WAY S STE 103, OLYMPIA, WA 98501",
  "clients": [
    "AMERICAN FOREST RESOURCE CNCL"
  ]
},
{
  "name": "MATTHEW HANEY",
  "email": "MHANEY@SEIU6.ORG",
  "phone": "2064487348",
  "address": "3720 AIRPORT WAY S, SEATTLE, WA 98124",
  "clients": [
    "SERVICE EMPLOYEES INTL UNION LOCAL 6"
  ]
},
{
  "name": "MAURICIO AYON",
  "email": "mauricioayon@gmail.com",
  "phone": "2062906855",
  "address": "1806 E Yesler Way , SEATTLE, WA 98122",
  "clients": [
    "WA COMMUNITY ACTION NETWORK"
  ]
},
{
  "name": "MAXFORD NELSEN",
  "email": "MNELSEN@FREEDOMFOUNDATION.COM",
  "phone": "3609563482",
  "address": "P.O. Box 552 , OLYMPIA, WA 98507",
  "clients": [
    "FREEDOM FOUNDATION"
  ]
},
{
  "name": "MCBRIDE PUBLIC AFFAIRS LLC*",
  "email": "tom@MCBRIDEPA.COM",
  "phone": "(360) 481-1824",
  "address": "1001 Cooper Point Rd SW, Suite 140-720, Olympia, WA 98502",
  "clients": [
    "AMGEN INC",
    "AlR Distribution USA, Inc.",
    "Albemarle Corporation",
    "Association for Consumer Debt Relief (thru MultiState Associates LLC)",
    "BOEING",
    "Baxter Healthcare Corporation (thru MultiState Associates LLC)",
    "CA, Inc. and its Affiliates",
    "DART CONTAINER CORP (THROUGH MULTISTATE ASSOCIATES LLC)",
    "Elevance Health, and its Affiliates",
    "GPD Holdings LLC d/b/a CoinFlip",
    "Gainwell Holding Corp.",
    "General Dynamics (thru KWR Acuity Strategies, LLC)",
    "Genesys Contact Center (thru KWR Acuity Strategies, LLC)",
    "Growth Energy",
    "HONDA NORTH AMERICA (THRU MULTISTATE ASSOCIATES LLC)",
    "ID.me (thru KWR Acuity Strategies, LLC)",
    "KITSAP CO",
    "Lenovo (thru KWR Acuity Strategies, LLC)",
    "L’Oréal USA S/D, Inc.",
    "MT SPOKANE 2000",
    "McDonald's USA, LLC",
    "Molson Coors Beverage Company USA LLC",
    "NATIONAL ELEVATOR INDUSTRY INC",
    "Prime Therapeutics, LLC",
    "QUEST DIAGNOSTICS",
    "S. C. Johnson & Son",
    "SPOKANE PUBLIC FACILITIES DIST",
    "SURPLUS LINE ASSN OF WA",
    "Superior Court Judges Association",
    "TK Elevator",
    "UNION PACIFIC RAILROAD CO",
    "Uber Technologies Inc and Affiliates",
    "VMware LLC",
    "VSP Vision, Inc. (thru MultiState Associates LLC)",
    "WA ASSN OF JUVENILE COURT ADMINISTRATORS",
    "WHATCOM CO COUNCIL OF GOVERNMENTS",
    "ZERO WASTE WA"
  ]
},
{
  "name": "MEGAN HARTMAN",
  "email": "megan.hartman@premera.com",
  "phone": "425.918.6293",
  "address": "PO Box 327, MS 316, Seattle, WA 98111-0327",
  "clients": [
    "PREMERA BLUE CROSS"
  ]
},
{
  "name": "MELANIE J SMITH",
  "email": "SMITH.MELANIEJ@GMAIL.COM",
  "phone": "206-659-8144",
  "address": "830 N. 6th Ave SW , Tumwater, WA 98512",
  "clients": [
    "ALZHEIMERS ASSN WA ST CHAPTER",
    "COMMITTEE FOR CHILDREN",
    "Cascade AIDS Project",
    "Coalition of ACHs",
    "MULTI-SERVICE CENTER LONG TERM CARE OMBUDSMAN PROGRAM",
    "Seattle/King County Coalition on Homelessness",
    "WA ST COALITION  AGAINST DOMESTIC VIOLENCE",
    "WA ST PSYCHOLOGICAL ASSN",
    "Washington State Charter School Commission",
    "Wonderland Child & Family Services"
  ]
},
{
  "name": "MELLANI MCALEENAN",
  "email": "mellanimcaleenan@aaawa.com",
  "phone": "425-971-0406",
  "address": "AAA Washington 3605 132nd Ave SE, Bellevue, WA 98006",
  "clients": [
    "AAA Washington"
  ]
},
{
  "name": "MICHAEL M MORAN",
  "email": "MORANPUBLICAFFAIRS@GMAIL.COM",
  "phone": "3604811733",
  "address": "120 STATE AVE NE #259, OLYMPIA, WA 98501",
  "clients": [
    "CHEHALIS CONFEDERATED TRIBES",
    "COLVILLE CONFEDERATED TRIBES",
    "King County",
    "Second Harvest Inland Northwest",
    "WA ST SCHOOL RETIREES ASSN"
  ]
},
{
  "name": "MICHAEL SHAW",
  "email": "MICHAEL_SHAW@COMCAST.NET",
  "phone": "2065956108",
  "address": "5411 40TH AVE SW , SEATTLE, WA 98136",
  "clients": [
    "AMERICAN PLANNING ASSN WA CHAPTER",
    "AMERICAN PUBLIC WORKS ASSN",
    "CENTRAL PUGET SOUND REGIONAL TRANSIT AUTHORITY / SOUND TRANSIT",
    "KING CO COUNCIL",
    "LIBERTY MUTUAL INSURANCE",
    "Pierce County",
    "TWO JINN INC",
    "WA ASSN OF COUNTY OFFICIALS",
    "WA ST BAR ASSN",
    "WA ST TRANSIT ASSN",
    "Washington State Association of County Auditors"
  ]
},
{
  "name": "MICHAEL TEMPLE",
  "email": "TEMPLE2800@MSN.COM",
  "phone": "3609510006",
  "address": "2800 18TH AVE SE , OLYMPIA, WA 98501",
  "clients": [
    "SPOKANE TRIBE OF INDIANS"
  ]
},
{
  "name": "MICHELE WILLMS",
  "email": "MWILLMS@AGCWA.COM",
  "phone": "360-352-5000",
  "address": "410 11TH AVE SE #203, OLYMPIA, WA 98501",
  "clients": [
    "ASSOCIATED GENERAL CONTRACTORS OF WA"
  ]
},
{
  "name": "MILLER NASH LLP*",
  "email": "KAREN.KANE@MILLERNASH.COM",
  "phone": "2066248300",
  "address": "605 5th Ave S, Suite 900, SEATTLE, WA 98104",
  "clients": [
    "JAMESTOWN S'KLALLAM TRIBE"
  ]
},
{
  "name": "MITCH DENNING",
  "email": "MEDENNING@COMCAST.NET",
  "phone": "3609435717",
  "address": "825 5TH AVE SE , OLYMPIA, WA 985011501",
  "clients": [
    "WA ASSN OF SCHOOL ADMINISTRATORS"
  ]
},
{
  "name": "MJB CONSULTING*",
  "email": "MIKEJBURG@COMCAST.NET",
  "phone": "3602233020",
  "address": "5135 BELLWETHER LANE , BELLINGHAM, WA 98226",
  "clients": [
    "American Cleaning Institute",
    "American Coatings Association",
    "INDEPENDENT COLLEGES OF WASHINGTON",
    "Inseparable Action",
    "Marathon Petroleum Corporation and its Subsidiaries",
    "OPTOMETRIC PHYSICIANS OF WA",
    "Reckitt Benckiser LLC",
    "SPOKANE COUNTY",
    "TICKET NETWORK",
    "WA ST FAIRS ASSN",
    "WA ST FARM BUREAU",
    "WA ST TREE FRUIT ASSN"
  ]
},
{
  "name": "MK Strategies",
  "email": "molly@mkpublicaffairs.com",
  "phone": "503-708-2539",
  "address": "3229 NE 104th St. , Seattle, WA 98125",
  "clients": [
    "Rivian Automotive LLC"
  ]
},
{
  "name": "MOLLY FIRTH",
  "email": "mollybfirth@gmail.com",
  "phone": "206-478-6137",
  "address": "8325 8th Ave NW , SEATTLE, WA 98117",
  "clients": [
    "Seattle Children's Hospital"
  ]
},
{
  "name": "Madeleine Foutch",
  "email": "amber.aman@seiu775.org",
  "phone": "4254401856",
  "address": "215 Columbia, Seattle, WA 98104",
  "clients": [
    "SEIU 775"
  ]
},
{
  "name": "Maggie Douglas",
  "email": "maggie.douglas@pse.com",
  "phone": "2535092030",
  "address": "355 110th Ave NE , Bellevue, WA 98004",
  "clients": [
    "PUGET SOUND ENERGY INC"
  ]
},
{
  "name": "Maggie J Humphreys",
  "email": "maggie@momsrising.org",
  "phone": "(206) 641-9612",
  "address": "12011 Bel-Red Rd , Bellevue, WA 98005",
  "clients": [
    "MOMSRISING TOGETHER"
  ]
},
{
  "name": "Malika Lamont",
  "email": "malika.lamont@wearepda.org",
  "phone": "2067175064",
  "address": "110 Prefontaine Pl S, Suite 502, Seattle, WA 98104",
  "clients": [
    "Purpose Dignity Action"
  ]
},
{
  "name": "Mallorie Davies",
  "email": "mdavies@nwlaborers.org",
  "phone": "4252105885",
  "address": "12101 Tukwila International Blvd Suite 300, Seattle, WA 98168",
  "clients": [
    "WA & NORTHERN IDAHO DIST COUNCIL LABORERS UNION"
  ]
},
{
  "name": "Malorie Toman",
  "email": "malorie@wsma.org",
  "phone": "303.990.4968",
  "address": "1800 Cooper Point Road SW Bldg 7-A, Olympia, WA 98502",
  "clients": [
    "WA Chapter, ACEP",
    "WA ST MEDICAL ASSN"
  ]
},
{
  "name": "Marc Côté",
  "email": "marc@parkviewservices.org",
  "phone": "2063340731",
  "address": "4720 200th St SW Suite 200, Lynnwood, WA 98036-6545",
  "clients": [
    "Parkview Services"
  ]
},
{
  "name": "Marco Rosaire Rossi",
  "email": "marcorosaire@gmail.com",
  "phone": "312 961 3825",
  "address": "5414 S Pine Street, Tacoma, WA 98409",
  "clients": [
    "Washingtonians for Public Banking"
  ]
},
{
  "name": "Maria Lorena Gonzalez",
  "email": "mlgonzalez@aclu-wa.org",
  "phone": "(206) 624-2184",
  "address": "P.O. Box 2728 , Seattle, WA 98111",
  "clients": [
    "AMERICAN CIVIL LIBERTIES UNION OF WA"
  ]
},
{
  "name": "Maria Lucia Chavez",
  "email": "malou@nwirp.org",
  "phone": "2069578633",
  "address": "615 2nd Avenue Suite 400, Seattle, WA 98104",
  "clients": [
    "Northwest Immigrant Rights Project"
  ]
},
{
  "name": "Marian Dacca Public Affairs",
  "email": "marian@mdpublicaffairs.com",
  "phone": "2069208881",
  "address": "12819 SE 38th ST #296, Bellevue, WA 98006",
  "clients": [
    "AT&T SERVICES INC",
    "BOEING EMPLOYEES CREDIT UNION",
    "CHELAN CO PUBLIC UTILITY DIST #1",
    "Cypress Creek Renewables",
    "DoorDash, Inc",
    "ENERGY NORTHWEST",
    "EarthGen",
    "Elmhurst Mutual Power & Light Company",
    "Glass Packaging Institute (GPI)",
    "MUNICIPAL RESEARCH & SERVICES CENTER",
    "Mason County PUD No. 3",
    "NW GROCERY ASSN",
    "Network of Independent Prosthetic and Orthotic Providers",
    "Ohop Mutual Light Company",
    "Port of Edmonds",
    "Renewable Hydrogen Alliance",
    "SNOHOMISH CO PUBLIC UTILITY DIST #1",
    "Scout Motors Inc",
    "Tacoma Public Utilities",
    "WA ASSN OF BUILDING OFFICIALS",
    "WA ASSN OF VEHICLE SUBAGENTS",
    "WA TECHNOLOGY INDUSTRY ASSN",
    "Washington Public Power Association"
  ]
},
{
  "name": "Marianna Hyke",
  "email": "dmema@kelleydrye.com",
  "phone": "9164422952",
  "address": "25120 Pacific Hwy S #200, Kent, WA 98032",
  "clients": [
    "Western States Regional Council of Carpenters"
  ]
},
{
  "name": "Marie Neumiller",
  "email": "mneumiller@congressionalsportsmen.org",
  "phone": "5097031462",
  "address": "110 North Carolina Ave SE, Washington DC, DC 20003",
  "clients": [
    "Congressional Sportsmen's Foundation"
  ]
},
{
  "name": "Mariner Strategies",
  "email": "andrew.kingman@stateandfed.com",
  "phone": "774-313-9543",
  "address": "38 School Street, Manchester-by-the-Sea, MA 01944",
  "clients": [
    "State Privacy & Security Coalition"
  ]
},
{
  "name": "Mark Sektnan",
  "email": "mark.sektnan@apci.org",
  "phone": "9164491370",
  "address": "1415 L Street Suite 670, SACRAMENTO, CA 95814",
  "clients": [
    "AMERICAN PROPERTY CASUALTY INSURANCE ASSOCIATION"
  ]
},
{
  "name": "Mark Watson",
  "email": "mark@protec17.org",
  "phone": "2063515190",
  "address": "4213 4th avenue NE, Seattle, WA 98105",
  "clients": [
    "PROF & TECH EMPLOYEES LOCAL 17"
  ]
},
{
  "name": "Mary Catherine McAleer",
  "email": "marycatherine.mcaleer@weyerhaeuser.com",
  "phone": "(425) 213-9980",
  "address": "1501 Capitol Way S Suite 301, Olympia, WA 98501",
  "clients": [
    "WEYERHAEUSER CO"
  ]
},
{
  "name": "Mary Hull-Drury",
  "email": "mary.drury@warealtor.org",
  "phone": "3609433100",
  "address": "504 14th Ave SE , Olympia, WA 98507-0719",
  "clients": [
    "WA ASSN OF REALTORS"
  ]
},
{
  "name": "Matt Prokop",
  "email": "mprokop@diabetes.org",
  "phone": "4028267494",
  "address": "5630 Falcon Circle, Lincoln, NE 68516",
  "clients": [
    "American Diabetes Association"
  ]
},
{
  "name": "Matthew Bradley",
  "email": "Matthew.bradley@novartis.com",
  "phone": "314-724-8799",
  "address": "855 Courtwood Lane , St. Louis, MO 63011",
  "clients": [
    "Novartis Pharmaceuticals Corporation"
  ]
},
{
  "name": "Matthew Helder",
  "email": "matthew.b.helder@gsk.com",
  "phone": "202-661-7618",
  "address": "1201 F St NW, Suite 480, Washington, DC 20004",
  "clients": [
    "GLAXO SMITHKLINE"
  ]
},
{
  "name": "Matthew Landers",
  "email": "mlanders@fredhutch.org",
  "phone": "206-667-6277",
  "address": "1100 Fairview Ave N, Mail Stop J2-417, Seattle, WA 98109",
  "clients": [
    "Fred Hutchinson Cancer Center"
  ]
},
{
  "name": "Matthew Richardson",
  "email": "matthew.richardson@nursefamilypartnership.org",
  "phone": "360-764-0991",
  "address": "1801 California St., Suite 2400, Denver, CO 80202",
  "clients": [
    "NURSE FAMILY PARTNERSHIP"
  ]
},
{
  "name": "Matthew Welsh",
  "email": "Mtwe@lundbeck.com",
  "phone": "407-221-5901",
  "address": "2223 San Marco Drive , Los Angeles, CA 90068",
  "clients": [
    "Lundbeck Pharmaceuticals LLC"
  ]
},
{
  "name": "Maxima Patashnik",
  "email": "mpatashnik@gmail.com",
  "phone": "4257534276",
  "address": "1819 E Republican St 209, Seattle, WA 98112",
  "clients": [
    "JEWISH FEDERATION OF GREATER SEATTLE"
  ]
},
{
  "name": "Maxwell Lau",
  "email": "max@childrensalliance.org",
  "phone": "(206) 324-0340",
  "address": "210 S Hudson St Suite 300, Seattle, WA 98134",
  "clients": [
    "Children's Alliance"
  ]
},
{
  "name": "Maya Gillett",
  "email": "maya.gillett@tnc.org",
  "phone": "(206) 679-1838",
  "address": "2811 16th Ave S, Seattle, WA 98144",
  "clients": [
    "BlueGreen Alliance, Inc."
  ]
},
{
  "name": "McCabe Public Affairs",
  "email": "devin@gomboskypublicaffairs.com",
  "phone": "3607422676",
  "address": "5209 Russell Ave NW Apt. 311, Seattle, WA 98107",
  "clients": [
    "ANHEUSER-BUSCH COMPANIES INC",
    "Ardon Health, LLC",
    "Associated Day Spas of Washington",
    "CTIA - The Wireless Assocation",
    "Council for Responsible Nutrition",
    "EDUCATIONAL SERVICE DISTRICT 105",
    "ENTERPRISE HOLDINGS LLC",
    "Educational Service District 113",
    "Graduation Alliance, Inc.",
    "Live Nation Entertainment, Inc.",
    "MULTICARE HEALTH SYSTEM",
    "NORTHWEST CAREER COLLEGE FEDERATION",
    "PHARMACEUTICAL RSRCH/MFG OF AMERICA",
    "Pacific Education Institute",
    "Plasma Protein Therapeutics Association",
    "TESLA",
    "WA ASSN OF SEWER & WATER DISTRICTS",
    "WA HEALTH CARE ASSN",
    "WA ST DENTAL HYGIENISTS ASSN"
  ]
},
{
  "name": "Megan Bailey",
  "email": "megan_m_bailey@whirlpool.com",
  "phone": "269-923-5000",
  "address": "650 Massachusetts Ave NW #600, Washington, DC 20001",
  "clients": [
    "Whirlpool Corporation"
  ]
},
{
  "name": "Megan Johnston",
  "email": "mjohnston@resolutionwa.org",
  "phone": "360-628-9560",
  "address": "P.O. Box 6188, Olympia, WA 98507-6188",
  "clients": [
    "RESOLUTION WA"
  ]
},
{
  "name": "Megan Managan",
  "email": "megan@wabankers.com",
  "phone": "2063443472",
  "address": "601 Union Street, Suite 1720, Seattle, WA 98101",
  "clients": [
    "WA BANKERS ASSN"
  ]
},
{
  "name": "Megan Stokes",
  "email": "compliance_wa_ccia_1@multistate.us",
  "phone": "202-783-0070",
  "address": "25 Massachusetts Avenue NW, #300, Washington, DC 20001",
  "clients": [
    "Computer & Communications Industry Association (CCIA)"
  ]
},
{
  "name": "Meghan Smith",
  "email": "msmith@pirg.org",
  "phone": "2077769634",
  "address": "24 Dighton St, Boston, MA 02135",
  "clients": [
    "WA PUBLIC INTEREST RESEARCH GROUP"
  ]
},
{
  "name": "Melanie Thurlow",
  "email": "melanie.thurlow@libertymutual.com",
  "phone": "206-240-9035",
  "address": "1001 4th Street Suite 3350, Seattle, WA 98154",
  "clients": [
    "LIBERTY MUTUAL INSURANCE"
  ]
},
{
  "name": "Melinda Young-Flynn",
  "email": "melinday@budgetandpolicy.org",
  "phone": "2062977648",
  "address": "509 Olive Way Suite 833, Seattle, WA 98101",
  "clients": [
    "WA ST BUDGET & POLICY CENTER"
  ]
},
{
  "name": "Melissa M Gombosky",
  "email": "MELISSAGOMBOSKY@GMAIL.COM",
  "phone": "3608780783",
  "address": "2312 WEDGEWOOD DR SE , OLYMPIA, WA 98501",
  "clients": [
    "ALTRIA CLIENT SERVICES LLC & ITS AFFILIATES",
    "APPLE INC",
    "Accelerate Learning Inc.",
    "American Staffing Association",
    "Ardon Health, LLC",
    "Association of American Publishers",
    "EDUCATIONAL SERVICE DISTRICT 105",
    "EVERGREEN SCHOOL DIST #114",
    "Educational Service District 113",
    "Hazel Health Inc.",
    "INLAND EMPIRE PAPER",
    "Michael LaCorte Dentistry, PC",
    "PROCTER & GAMBLE CO",
    "Qualtrics LLC",
    "Richland School District",
    "Safelite Group, Inc.",
    "Spokane Public Schools",
    "The Baseball Club of Tacoma",
    "WA ASSN OF SCHOOL ADMINISTRATORS"
  ]
},
{
  "name": "Mercer May",
  "email": "teladoc2@politicomlaw.com",
  "phone": "4159032800",
  "address": "c/o 28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "Teladoc Health, Inc."
  ]
},
{
  "name": "Mia Shigemura",
  "email": "mias@budgetandpolicy.org",
  "phone": "2062620973",
  "address": "509 Olive Way, Suite 833 , Seattle, WA 98101",
  "clients": [
    "WA ST BUDGET & POLICY CENTER"
  ]
},
{
  "name": "Michael DeCramer",
  "email": "mdecramer@wta.org",
  "phone": "2065573403",
  "address": "705 Second Ave. Suite 300, Seattle, WA 98104",
  "clients": [
    "Washington Trails Association"
  ]
},
{
  "name": "Michael Duchemin",
  "email": "mike@rffow.org",
  "phone": "3607109375",
  "address": "637 N E Haugen Street, Poulsbo, WA 98370",
  "clients": [
    "RETIRED FIREFIGHTERS OF WA"
  ]
},
{
  "name": "Michael Findlay",
  "email": "Mfindlay@nssf.org",
  "phone": "2029217020",
  "address": "400 N. Capitol Street NW, Suite 475, Washington, DC 20001",
  "clients": [
    "National Shooting Sports Foundation, Inc."
  ]
},
{
  "name": "Michael Hogg",
  "email": "mhogg@namanow.org",
  "phone": "5713679006",
  "address": "1777 N Kent St, Ste 1010, Arlington, VA 22209",
  "clients": [
    "NORTHWEST AUTOMATIC VENDING ASSN"
  ]
},
{
  "name": "Michael Mattmiller",
  "email": "michael.mattmiller@microsoft.com",
  "phone": "4257033256",
  "address": "One Microsoft Way, Redmond, WA 98052",
  "clients": [
    "MICROSOFT CORP"
  ]
},
{
  "name": "Michael Penuelas",
  "email": "michaelpenuelas@gmail.com",
  "phone": "2062184345",
  "address": "1111 N 40th St, Seattle, WA 98103",
  "clients": [
    "PUGET SOUND KEEPER ALLIANCE"
  ]
},
{
  "name": "Michael Transue",
  "email": "CMJTRANSUE@TRANSUE.ONMICROSOFT.COM",
  "phone": "(253) 223-2508",
  "address": "5420 N COMMERCIAL ST , RUSTON, WA 98407-3114",
  "clients": [
    "Axon Enterprise, Inc.",
    "CITY OF FIFE",
    "Compass Pathways, Inc. (through National Strategies, LLC)",
    "Connections Health Solutions (thru National Strategies, LLC)",
    "Drivewyze, Inc. (thru National Strategies, LLC)",
    "FRATERNAL ORDER OF POLICE",
    "FirstCash, Inc. dba Cash America",
    "Key Recovery & Life Skills Center",
    "LeMay-America's Car Museum",
    "MECHANICAL CONTRACTORS ASSN WESTERN WA",
    "NAMI WA",
    "NOVO NORDISK INC",
    "Oregon Bioscience Assn",
    "TPCC",
    "WA AGGREGATES & CONCRETE ASSN"
  ]
},
{
  "name": "Michael Whalen",
  "email": "Mwhalen@ufcw367.org",
  "phone": "2539068071",
  "address": "7615 48th st ct w apt E4 , University Place, WA 98467",
  "clients": [
    "UFCW#367"
  ]
},
{
  "name": "Michael Zimmer",
  "email": "mzimmer@wes.org",
  "phone": "517-285-4126",
  "address": "One Battery Park Plaza , New York City, NY 10004",
  "clients": [
    "World Education Services, Inc."
  ]
},
{
  "name": "Michele Thomas",
  "email": "michelet@wliha.org",
  "phone": "2064429455",
  "address": "415 1st Ave N P. O. Box 19740 P. O. Box 19740, Seattle, WA 98109-4503",
  "clients": [
    "WA LOW-INCOME HOUSING ALLIANCE",
    "Washington Housing Alliance Action Fund"
  ]
},
{
  "name": "Michelle O'Dell",
  "email": "rouski@mac.com",
  "phone": "206-914-7066",
  "address": "4740 Shellridge Rd NW, Olympia, WA 98502",
  "clients": [
    "The Arc of Washington State"
  ]
},
{
  "name": "Mike Nelson",
  "email": "mnelson@wscpa.org",
  "phone": "425-495-1307",
  "address": "170 120th Ave NE Ste E101 , Bellevue, WA 98005",
  "clients": [
    "WA SOCIETY OF CPA'S"
  ]
},
{
  "name": "Mike Pugsley",
  "email": "mike@ashleyhousekids.com",
  "phone": "360-239-5528",
  "address": "33811 9th S , Federal Way, WA 98003",
  "clients": [
    "Ashley House"
  ]
},
{
  "name": "Miles B. Johnson",
  "email": "miles@columbiariverkeeper.org",
  "phone": "5414900487",
  "address": "407 Portway Ave., Suite 301, HOOD RIVER, OR 97031",
  "clients": [
    "Columbia Riverkeeper"
  ]
},
{
  "name": "Minna Long",
  "email": "minna@wabuildingtrades.org",
  "phone": "3605296676",
  "address": "906 Columbia St. SW Suite 107, Olympia, WA 98501",
  "clients": [
    "WA ST BUILDING & CONSTRUCTION TRADES COUNCIL"
  ]
},
{
  "name": "Model Solutions LLC",
  "email": "noah@modelsolutions.org",
  "phone": "253-973-1892",
  "address": "6523 83rd Avenue W, University Place, WA 98467",
  "clients": [
    "CARMAX AUTO SUPERSTORES, INC",
    "Dun & Bradstreet, Inc.",
    "Ensono, Inc.",
    "FFF Enterprises, Inc.",
    "FIRST Washington",
    "Mi-Case",
    "NORTHWEST ENERGY EFFICIENCY COUNCIL (NEEC)",
    "Sandoz Inc.",
    "SentinelOne, Inc.",
    "UiPath Inc.",
    "Western Governors University"
  ]
},
{
  "name": "Molecule Team",
  "email": "tim@moleculeteam.com",
  "phone": "2062262417",
  "address": "2917 11th Ave West, Seattle, WA 98119",
  "clients": [
    "Neste US Inc"
  ]
},
{
  "name": "Molly Gallagher",
  "email": "mollyg@povertyaction.org",
  "phone": "2066946794",
  "address": "1501 N 45th St , Seattle, WA 98103",
  "clients": [
    "STATEWIDE POVERTY ACTION NETWORK"
  ]
},
{
  "name": "Molly Webster",
  "email": "mollyw@budgetandpolicy.org",
  "phone": "2062620973",
  "address": "509 Olive Way Ste 833, Seattle, WA 98101",
  "clients": [
    "WA ST BUDGET & POLICY CENTER"
  ]
},
{
  "name": "Montana Williams",
  "email": "meta3@politicomlaw.com",
  "phone": "(415) 903-2800",
  "address": "c/o 28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "Meta Platforms, Inc."
  ]
},
{
  "name": "Mozhdeh Oskouian",
  "email": "mozhdeh@nwirp.org",
  "phone": "2062402142",
  "address": "615 Second Avenue Suite 400, Seattle, WA 98104",
  "clients": [
    "Northwest Immigrant Rights Project"
  ]
},
{
  "name": "Mykhail Lembke",
  "email": "lembke23@uw.edu",
  "phone": "2065438760",
  "address": "4001 E Stevens Way NE, Seattle, WA 98195",
  "clients": [
    "GRADUATE & PROF STUDENT SENATE/U OF W"
  ]
},
{
  "name": "Myle Tang",
  "email": "mtang@stand.org",
  "phone": "8006634032",
  "address": "2121 SW Broadway 130, Portland, OR 97201",
  "clients": [
    "STAND FOR CHILDREN, INC."
  ]
},
{
  "name": "NASUE NISHIDA",
  "email": "nnishida@washingtonea.org",
  "phone": "360-350-2930",
  "address": "724 COLUMBIA NW STE 220 , OLYMPIA, WA 98501",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "NATHAN GORTON",
  "email": "NATHAN.GORTON@WAREALTOR.ORG",
  "phone": "3609433100",
  "address": "504 14TH AVE SE , OLYMPIA, WA 98501",
  "clients": [
    "WA ASSN OF REALTORS"
  ]
},
{
  "name": "NEIL STREGE",
  "email": "NEILS@WAROUNDTABLE.COM",
  "phone": "2066230180",
  "address": "520 PIKE ST STE 1212, SEATTLE, WA 98101",
  "clients": [
    "WA ROUNDTABLE"
  ]
},
{
  "name": "NEIL T HARTMAN",
  "email": "neil@washingtonpipetrades.org",
  "phone": "2534747462",
  "address": "7030 Tacoma Mall Blvd, Suite 300, Tacoma, WA 98409",
  "clients": [
    "WA State Assn of Plumbers & Pipefitters"
  ]
},
{
  "name": "NORTHWEST POLICY GROUP*",
  "email": "TIMJ@NWPOLICYGROUP.COM",
  "phone": "(360) 223-5996",
  "address": "336 36TH ST #212, BELLINGHAM, WA 982256580",
  "clients": [
    "WA ST FOOD TRUCK ASSN"
  ]
},
{
  "name": "NWP",
  "email": "lily@nwpconsulting.com",
  "phone": "2062821805",
  "address": "105 S Main St #332, Seattle, WA 98104",
  "clients": [
    "Inlandboatmen's Union",
    "International Longshore and Warehouse Union Washington Area District Council",
    "MASTERS MATES & PILOTS UNION",
    "Weld Seattle"
  ]
},
{
  "name": "Nadine Nadow",
  "email": "nadine@conservationnw.org",
  "phone": "9785017045",
  "address": "1600B Warren Ave. N, Seattle, WA 98109",
  "clients": [
    "Conservation NW"
  ]
},
{
  "name": "Nancy Coleman-Chavez",
  "email": "nancy.coleman-chavez@dailypay.com",
  "phone": "5163145647",
  "address": "55 Water Street, Fl 42, New York, NY 10041",
  "clients": [
    "DailyPay, Inc."
  ]
},
{
  "name": "Nancy Sapiro",
  "email": "NSAPIRO@NWJUSTICE.NET",
  "phone": "2069097454",
  "address": "208 29TH AVE , SEATTLE, WA 98122",
  "clients": [
    "AAUW of Washington State",
    "AMERICAN CONGRESS OF OBSTETRICIANS AND GYNECOLOGISTS",
    "CEDAR RIVER CLINICS",
    "End of Life Washington",
    "GRANDMOTHERS AGAINST GUN VIOLENCE",
    "JEWISH FEDERATION OF GREATER SEATTLE",
    "League of Women Voters Washington",
    "PUGET SOUND ADVOCATES FOR RETIREMENT ACTION",
    "WA EMPLOYMENT LAWYERS ASSN"
  ]
},
{
  "name": "Nancyrose Houston",
  "email": "nancyrose@naapr.org",
  "phone": "425-223-1692",
  "address": "24401 104th Ave SE, Kent, WA 98030",
  "clients": [
    "New Americans Alliance for Policy and Research"
  ]
},
{
  "name": "Natalie Doelman",
  "email": "natalie@wastatedairy.com",
  "phone": "3608673712",
  "address": "PO Box 1768 , Elma, WA 98541",
  "clients": [
    "WA ST DAIRY FEDERATION"
  ]
},
{
  "name": "Natalie Hester",
  "email": "natalie@hesterconsulting.org",
  "phone": "2063567078",
  "address": "11112 Cornell Ave South, Seattle, WA 98178",
  "clients": [
    "BRISTOL-MYERS SQUIBB CO",
    "Commonwealth Real Estate Services",
    "Delta Dental of WA",
    "Football Northwest LLC",
    "HEALTHCARE DISTRIBUTION ALLIANCE c/o MultiState Associates LLC",
    "MICROSOFT CORP",
    "Mary's Place",
    "REPUBLIC SERVICES",
    "RUSSELL INVESTMENT GROUP",
    "Seattle Sports Commission",
    "Spokane Teaching Health Center",
    "Tobacco-Free Action Fund",
    "WA FOREST PROTECTION ASSN",
    "WA ROUNDTABLE",
    "Washington State Opportunity Scholarship"
  ]
},
{
  "name": "Natasha Jackson",
  "email": "njackson@nwga.org",
  "phone": "5033446637",
  "address": "1914 Willamette Falls Dr. Suite 260, West Linn, OR 97068",
  "clients": [
    "Northwest Gas Association"
  ]
},
{
  "name": "Nathan Koch",
  "email": "nathan.koch@akinfamily.org",
  "phone": "5096010479",
  "address": "2611 N.E. 125th St. Ste. 145, Seattle, WA 98125",
  "clients": [
    "Akin"
  ]
},
{
  "name": "Nathan Tippmann",
  "email": "nathan.j.tippmann@evergreen.edu",
  "phone": "605-415-6640",
  "address": "906 Columbia St SW #201, Olympia, WA 98501",
  "clients": [
    "GEODUCK STUDENT UNION OF THE EVERGREEN STATE COLLEGE"
  ]
},
{
  "name": "Nathaniel Brown",
  "email": "nathaniel@thinkhubbell.com",
  "phone": "9712195561",
  "address": "438 1st St, Lake Oswego, OR 97034",
  "clients": [
    "Northwest Kidney Council through Giant Leap Media Group, LLC dba Hubbell Communications",
    "Northwest Kidney Council through Hubbell Communications, LLC"
  ]
},
{
  "name": "Nathaniel Rees",
  "email": "nathaniel@wildliferecreation.org",
  "phone": "3015180446",
  "address": "6740 14th Avenue NW, Seattle, WA 98117",
  "clients": [
    "WA WILDLIFE & RECREATION COALITION ACTION FUND"
  ]
},
{
  "name": "Neal Mizushima",
  "email": "neal.mizushima@gmail.com",
  "phone": "4254576356",
  "address": "17601 NE 141st St , Redmond, WA 98052",
  "clients": [
    "Nonprofit Association of Washington"
  ]
},
{
  "name": "Nicholas Carton",
  "email": "compliance_wa_juul@multistate.us",
  "phone": "703-684-1110",
  "address": "1000 F Street NW, Suite 800, Washington, DC 20004",
  "clients": [
    "Juul Labs Inc."
  ]
},
{
  "name": "Nicholas Gullickson",
  "email": "nich@wscff.org",
  "phone": "360-943-3030",
  "address": "1069 Adams Street SE, Olympia, WA 98501",
  "clients": [
    "WA ST COUNCIL OF FIRE FIGHTERS"
  ]
},
{
  "name": "Nicholas Johnson",
  "email": "lyft@politicomlaw.com",
  "phone": "4159032800",
  "address": "c/o 28 Liberty Ship Way, Suite 2815, Sausalito, CA 94965",
  "clients": [
    "LYFT INC"
  ]
},
{
  "name": "Nick Allen",
  "email": "nicka@inatai.org",
  "phone": "2069403907",
  "address": "1301 5th Ave., Suite 2600, Seattle, WA 98101",
  "clients": [
    "Inatai Foundation"
  ]
},
{
  "name": "Nick Federici",
  "email": "NICKFEDERICI@GMAIL.COM",
  "phone": "3604811936",
  "address": "2714 North Alder Street , Tacoma, WA 98407",
  "clients": [
    "Boyer Children's Clinic",
    "CAMPION ADVOCACY FUND",
    "CITY OF SPOKANE",
    "CITY OF YAKIMA",
    "City of Mercer Island",
    "City of Olympia",
    "City of Sammamish",
    "ECONOMIC OPPORTUNITY INSTITUTE",
    "FAIRFAX HOSPITAL",
    "PIONEER HUMAN SERVICES",
    "SEIU 775",
    "Seattle Children's Hospital",
    "TOXIC-FREE FUTURE",
    "The Aluminum Association",
    "The Arc of Washington State",
    "The Grand Cinema",
    "UNITED WAY OF KING CO",
    "VERIFIED VOTING",
    "WA INFORMATION NETWORK 211",
    "WA LOW-INCOME HOUSING ALLIANCE"
  ]
},
{
  "name": "Nick Schilligo",
  "email": "nschilligo@1800contacts.com",
  "phone": "312-304-1100",
  "address": "261 W. Data Dr., Draper, UT 84020",
  "clients": [
    "1-800 CONTACTS"
  ]
},
{
  "name": "Nicolas Garcia",
  "email": "ngarcia@wpuda.org",
  "phone": "3607412675",
  "address": "212 Union Ave SE, #201, Olympia, WA 98501",
  "clients": [
    "WA PUBLIC UTILITIES DISTS ASSN"
  ]
},
{
  "name": "Nicole D. Gomez",
  "email": "nikkig@wfse.org",
  "phone": "360-352-7603",
  "address": "906 Columbia St. SW, Olympia, WA 98501",
  "clients": [
    "WA FEDERATION OF STATE EMPLOYEES"
  ]
},
{
  "name": "Nicole Downs",
  "email": "compliance_wa_tenaska_1@multistate.us",
  "phone": "402-334-6685",
  "address": "14302 FNB Parkway, Omaha, NE 68154",
  "clients": [
    "Tenaska"
  ]
},
{
  "name": "Nicole Kern",
  "email": "nicole.kern@ppallianceadvocates.org",
  "phone": "2063207651",
  "address": "2001 E Madison St, Seattle, WA 98074",
  "clients": [
    "PLANNED PARENTHOOD ALLIANCE ADVOCATES"
  ]
},
{
  "name": "Nicole M Grant",
  "email": "nicolemauragrant@ibew46.com",
  "phone": "2533407680",
  "address": "19802 62nd Ave S, Kent, WA 98032",
  "clients": [
    "International Brotherhood of Electrical Workers 46"
  ]
},
{
  "name": "Nilu Jenks",
  "email": "nilu.jenks@fairvotewa.org",
  "phone": "2066015946",
  "address": "11761 Sand Point Way NE , Seattle, WA 98125",
  "clients": [
    "FairVote Washington"
  ]
},
{
  "name": "Noah Seidel",
  "email": "noah@ddombuds.org",
  "phone": "8337278900",
  "address": "315 5th ave S, Seattle, WA 98104",
  "clients": [
    "DISABILITY RIGHTS WA"
  ]
},
{
  "name": "Noelani Derrickson",
  "email": "noelani.derrickson@stateandfed.com",
  "phone": "808-220-8990",
  "address": "3500 Deer Creek Rd., Palo Alto, CA 94304",
  "clients": [
    "TESLA"
  ]
},
{
  "name": "Northwest Communications, Inc",
  "email": "tom@northwestcommunicationsinc.com",
  "phone": "2066601262",
  "address": "700 NW Gilman Blvd. #102, Issaquah, WA 98075",
  "clients": [
    "Housing Solutions Coalition"
  ]
},
{
  "name": "Northwest Solutions",
  "email": "mara@northwest-solutions.com",
  "phone": "3607420515",
  "address": "2209 Newport Street NE, OLYMPIA, WA 98506",
  "clients": [
    "CITY OF OMAK",
    "CITY OF WALLA WALLA",
    "NoaNet"
  ]
},
{
  "name": "ORRICK HERRINGTON & SUTCLIFFE LLP",
  "email": "orrick@fiveringslaw.com",
  "phone": "2403318804",
  "address": "1152 15th Street NW, First Floor, Washington, DC 20005",
  "clients": [
    "Point Digital Finance, Inc."
  ]
},
{
  "name": "OYSTER BAY PUBLIC AFFAIRS*",
  "email": "AMY@OYSTERBAYPUBLICAFFAIRS.COM",
  "phone": "3602391013",
  "address": "PO BOX 4173 , OLYMPIA, WA 98501",
  "clients": [
    "ADT LLC dba ADT Security Services",
    "ASTRAZENECA PHARMACEUTICALS LP",
    "JOHNSON & JOHNSON SERVICES, INC.",
    "MaiaLearning, Inc.",
    "NATL ASSN OF VISION CARE PLANS",
    "Novocure",
    "VERTEX PHARMACEUTICALS INC",
    "WA BEER & WINE DISTRIBUTORS ASSN",
    "WA ST MEDICAL ASSN",
    "WA ST SOCIETY OF ANESTHESIOLOGISTS",
    "Washington State Public Health Association"
  ]
},
{
  "name": "Orlando Cano Consulting LLC",
  "email": "ocperu@outlook.com",
  "phone": "2068545157",
  "address": "PO Box 65027 , Shoreline, WA 98155",
  "clients": [
    "Chief Seattle Club",
    "Historic South Downtown",
    "Inatai Foundation",
    "ONEAMERICA",
    "PHARMACEUTICAL CARE MANAGEMENT ASSN",
    "UNIVERSITY OF WASHINGTON",
    "Visa U.S.A. Inc.",
    "WA STEM CENTER",
    "Wa St Public Stadium Authority",
    "Washington Immigrant Solidarity Network",
    "Western States Regional Council of Carpenters",
    "YOUTHCARE"
  ]
},
{
  "name": "PACIFIC NW REGIONAL STRATEGIES LLC*",
  "email": "josh.a.estes@gmail.com",
  "phone": "4256228256",
  "address": "PO BOX 171 , Mukilteo, WA 98275",
  "clients": [
    "THE KUSHERY",
    "awwppw washington area council"
  ]
},
{
  "name": "PATRICK CONNOR",
  "email": "compliance_wa_nfib_1@multistate.us",
  "phone": "3607868675",
  "address": "111 21st Ave SW, OLYMPIA, WA 98501",
  "clients": [
    "NATL FEDERATION OF INDEPENDENT BUSINESS"
  ]
},
{
  "name": "PATRICK DUNN & ASSOCIATES LTD*",
  "email": "PATDUNNOLY@GMAIL.COM",
  "phone": "2069200865",
  "address": "13531 NORTHSHIRE ROAD NW, SEATTLE, WA 981774033",
  "clients": [
    "Sanitary Service Co"
  ]
},
{
  "name": "PATRICK S BOSS (Cascade Consulting Group)",
  "email": "BOSS.CONSULTING2@GMAIL.COM",
  "phone": "(360) 878-7073",
  "address": "PO BOX 1940 , MOSES LAKE, WA 98837",
  "clients": [
    "COLUMBIA BASIN RAILROAD(CBR)/CENTRAL WA RAILROAD (CWR)",
    "PORT OF GRANT CO DIST 01 - Quincy"
  ]
},
{
  "name": "PIERCE CONSULTING SVCS LLC*",
  "email": "CINDI@CINDILHOLMSTROM.COM",
  "phone": "360-870-2729",
  "address": "PO BOX 4410 , TUMWATER, WA 98501",
  "clients": [
    "BRISTOL-MYERS SQUIBB CO",
    "Bellwether Housing",
    "Bristol Myers Squibb c/o Commoneo, LLC",
    "DELOITTE CONSULTING LLP",
    "Delta Dental of WA",
    "Football Northwest LLC",
    "HEALTHCARE DISTRIBUTION ALLIANCE c/o MultiState Associates LLC",
    "MICROSOFT CORP",
    "Mary's Place",
    "PROVIDENCE HEALTH & SERVICES- WA",
    "RUSSELL INVESTMENT GROUP",
    "WA FOREST PROTECTION ASSN",
    "WA ROUNDTABLE",
    "WASTE CONNECTIONS INC",
    "Washington State Opportunity Scholarship"
  ]
},
{
  "name": "PINNACLE GOVERNMENT AFFAIRS, LLC",
  "email": "PINNACLEGOVERNMENTAFFAIRS@GMAIL.COM",
  "phone": "3607917100",
  "address": "1204 FARWELL AVE NW, OLYMPIA, WA 98502",
  "clients": [
    "Marine Exchange of Puget Sound",
    "Sports Betting Alliance",
    "The Recycling Partnership",
    "Washington Cannabis Licensee Association"
  ]
},
{
  "name": "PLAUCHE & CARR LLP*",
  "email": "sarah@plauchecarr.com",
  "phone": "2065884188",
  "address": "1218 3rd Ave Suite 2000, SEATTLE, WA 98101",
  "clients": [
    "TAYLOR SHELLFISH CO INC",
    "TROUT UNLIMITED"
  ]
},
{
  "name": "PNW Advocacy",
  "email": "julia@pnwadvocacy.com",
  "phone": "3609514479",
  "address": "5448 FOREST SHORES DR NW, OLYMPIA, WA 98502",
  "clients": [
    "RAI Services Company",
    "WA Hospitality Assn"
  ]
},
{
  "name": "PNW Consulting LLC",
  "email": "wyatt@pnwconsulting.net",
  "phone": "3604647919",
  "address": "PO Box 11722, Olympia, WA 98508",
  "clients": [
    "AMALGAMATED TRANSIT UNION LEG COUNCIL",
    "Committee of Interns and Residents",
    "SAMISH INDIAN NATION"
  ]
},
{
  "name": "POTTS & ASSOC*",
  "email": "ZAK@pottsassociates.com",
  "phone": "509-993-2417",
  "address": "520 W JAY AVE , SPOKANE, WA 99218",
  "clients": [
    "ESP Designs",
    "Evergreen Herbal",
    "FERRY CO COMMISSION",
    "GRANT CO COMMISSION",
    "KLICKITAT COUNTY COMMISSIONERS",
    "LINCOLN CO COMMISSION",
    "OKANOGAN CO COMMISSION",
    "PEND OREILLE CO COMMISSION"
  ]
},
{
  "name": "PREET KAUR",
  "email": "Preet.Kaur@premera.com",
  "phone": "4253818176",
  "address": "PO Box 327 MS 355, Seattle, WA 98111-0327",
  "clients": [
    "PREMERA BLUE CROSS"
  ]
},
{
  "name": "PRINCIPLED SOLUTIONS, INC.*",
  "email": "PrincipledSolutions@comcast.net",
  "phone": "3608705225",
  "address": "1107 West Bay Drive Northwest 201, Olympia, WA 98502",
  "clients": [
    "Accenture LLP",
    "Bio Energy (Washington), LLC",
    "Dell Technologies Inc. c/o 50 to 1 LLC",
    "Fortinet, Inc.",
    "HIGHLINE GRAIN LLC",
    "Heritage Distilling Company",
    "NORTHSTAR CONTRACTING GROUP LP",
    "Wonderschool, Inc.",
    "Workday"
  ]
},
{
  "name": "Pacific Public Affairs",
  "email": "info@pacificpub.com",
  "phone": "2066825066",
  "address": "PO Box 2629 , Seattle, WA 98111",
  "clients": [
    "AMAZON.COM SERVICES LLC",
    "Aging in PACE Washington",
    "Mary's Place"
  ]
},
{
  "name": "Palattao Burnes Strategies",
  "email": "nora@palattaoburnes.com",
  "phone": "3603491026",
  "address": "1501 Capitol Way S , Olympia, WA 98501",
  "clients": [
    "ALTRIA CLIENT SERVICES LLC & ITS AFFILIATES",
    "Brigit",
    "EDUCATIONAL SERVICE DISTRICT 105",
    "Educational Service District 113",
    "FOOD LIFELINE",
    "JPMorgan Chase Holdings LLC",
    "MId-States Distributing",
    "Northwest Pulp & Paper Association",
    "PERSONAL CARE PRODUCTS COUNCIL",
    "PHARMACEUTICAL CARE MANAGEMENT ASSN",
    "Pacific Education Institute",
    "Pearson Education, Inc. and Affiliates",
    "WA BEER & WINE DISTRIBUTORS ASSN",
    "WA FARM FORESTRY ASSN",
    "WA GROWERS LEAGUE",
    "Western States Regional Council of Carpenters"
  ]
},
{
  "name": "Paragon Strategic Partners LLC",
  "email": "paragonstrategicpartners@gmail.com",
  "phone": "360-522-5048",
  "address": "PO Box 1081, Tenino, WA 98589",
  "clients": [
    "ASSN OF ALCOHOLISM & ADDICTIONS PROGRAMS",
    "Climate Jobs Washington",
    "IRON WORKERS DIST CNCL OF THE PNW",
    "IRON WORKERS LOCAL UNION 86",
    "International Brotherhood of Electrical Workers 46",
    "International Union of Elevator Constructors Local 19",
    "NORTHWEST ENERGY COALITION",
    "Northwest Regional Council of SMART",
    "RENEWABLE NORTHWEST",
    "Washington Association of Fish and Wildlife Professionals",
    "Washington Maritime Blue"
  ]
},
{
  "name": "Paribello Public Affairs",
  "email": "Paribello@gmail.com",
  "phone": "3604028405",
  "address": "3027A 59th Ave SW , Seattle, WA 98116-2819",
  "clients": [
    "Airbnb, Inc.",
    "Firebrand Wealth Management, LLC",
    "Friends of the Columbia Gorge",
    "Ilani Resort and Casino",
    "King County Medical Society",
    "Save Our Wild Salmon",
    "Swinomish Indian Tribal Community",
    "Washington Solar Energy Industries Association"
  ]
},
{
  "name": "Patricia Flores",
  "email": "Patty@FirelandsWA.org",
  "phone": "(360) 406-4321",
  "address": "PO Box 8, Aberdeen, WA 98520",
  "clients": [
    "Firelands Workers United / Trabajadores Unidos"
  ]
},
{
  "name": "Patricia Hunter",
  "email": "stateombuds@mschelps.org",
  "phone": "2532636573",
  "address": "1200 S. 336th St., Federal Way, WA 98466",
  "clients": [
    "MULTI-SERVICE CENTER LONG TERM CARE OMBUDSMAN PROGRAM"
  ]
},
{
  "name": "Paul B Benz",
  "email": "pbbenz5319@gmail.com",
  "phone": "2066259790",
  "address": "3720 AIRPORT WAY S , SEATTLE, WA 981342217",
  "clients": [
    "Quaker Voice on Washington Public Policy",
    "WA Coalition for Police Accountability"
  ]
},
{
  "name": "Paul Jewell",
  "email": "pjewell@wsac.org",
  "phone": "(360) 753-1886",
  "address": "206 Tenth Ave SE , Olympia, WA 98501",
  "clients": [
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Peggen & Mara Political Consulting LLP",
  "email": "mara@northwest-solutions.com",
  "phone": "3607420515",
  "address": "4749 PLOVER ST NE , Lacey, WA 98516",
  "clients": [
    "EDELSON PC",
    "Hoh Tribe",
    "Nez Perce Tribe",
    "SQUAXIN ISLAND TRIBE",
    "STILLAGUAMISH TRIBE OF INDIANS",
    "Willapa Bay Gillnetters Association"
  ]
},
{
  "name": "Peggi Lewis Fu",
  "email": "Peggi@awhpnw.org",
  "phone": "360-524-3060 ",
  "address": "1420 Marvin Road NE, Suite C, # 146, Lacey, WA 98516",
  "clients": [
    "Association of Washington Healthcare Plans"
  ]
},
{
  "name": "Peter Steelquist",
  "email": "psteelquist@surfrider.org",
  "phone": "3604772033",
  "address": "PO BOX 73550 , San Clemente, CA 92673",
  "clients": [
    "Surfrider Foundation"
  ]
},
{
  "name": "Peterson Public Affairs",
  "email": "kylie@petersonaffairs.com",
  "phone": "(509) 381-8992",
  "address": "PO BOX 11062 , Spokane Valley, WA 99212",
  "clients": [
    "WA ASSN FOR SUBSTANCE ABUSE & VIOLENCE PREVENTION"
  ]
},
{
  "name": "Pettigrew Consulting Services",
  "email": "eric@pettigrewconsultingservices.com",
  "phone": " (206) 979-5999‬",
  "address": "324 Powell Ave. SW , Renton, WA 98057",
  "clients": [
    "CITY OF SEATTLE",
    "COLLEGE SUCCESS FOUNDATION",
    "Center for Independence",
    "Excellent Schools Washington",
    "Homestead Community Land Trust",
    "Junior Achievement of Washington",
    "Making A Difference Foundation",
    "Northwest Minority Builders Alliance",
    "Office of the Commissioner of Major League Baseball",
    "PARTNERSHIP FOR LEARNING",
    "Rise Above",
    "Rise Up Academy",
    "Seattle Soccer, LLC",
    "UNIVERSITY OF WASHINGTON",
    "Washington State Office of Minority & Women's Business Enterprises",
    "YMCA of Greater Seattle"
  ]
},
{
  "name": "Prachi Dave",
  "email": "prachi.dave@civilsurvival.org",
  "phone": "2063174546",
  "address": "927 N. Northlake Way, Seattle, WA 98103",
  "clients": [
    "Civil Survival Project"
  ]
},
{
  "name": "Propolis Communications",
  "email": "kelsey@propolis.buzz",
  "phone": "4253063614",
  "address": "2328 Lakemoor Dr SW , Olympia, WA 98512",
  "clients": [
    "ASSN OF WA CITIES",
    "C-TRAN",
    "EPR Leadership Forum (Thru MultiState Associates LLC)",
    "Olympia Tumwater Foundation",
    "PUD No. 1 of Douglas County",
    "Port of Olympia",
    "WA ACADEMY OF PHYSICIAN ASSISTANTS",
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Public Affairs Consulting, LLC",
  "email": "CHET@LOBBYWA.COM",
  "phone": "3607050113",
  "address": "123 Fir St NE #201, OLYMPIA, WA 98506",
  "clients": [
    "FAMILY WINERIES OF WA ST",
    "Manufactured Housing Communities of WA",
    "Plumbing-Heating-Cooling Contractors of Washington",
    "WA APARTMENT ASSN"
  ]
},
{
  "name": "RENEE R SINCLAIR",
  "email": "RENEE@TVW.ORG",
  "phone": "3605295315",
  "address": "1058 Capitol Way S, OLYMPIA, WA 98501",
  "clients": [
    "WA PUBLIC AFFAIRS NETWORK DBA TVW"
  ]
},
{
  "name": "RHONDA WEAVER",
  "email": "RHONDA_WEAVER@CABLE.COMCAST.COM",
  "phone": "3604811377",
  "address": "15815 25th Ave W , Lynnwood, WA 98087",
  "clients": [
    "COMCAST CABLE COMMUNICATIONS"
  ]
},
{
  "name": "RICHARD WHITE",
  "email": "RICHARD.A.WHITE7@BOEING.COM",
  "phone": "4569659992",
  "address": "PO BOX 3707 MC 11-116 , SEATTLE, WA 98124",
  "clients": [
    "BOEING"
  ]
},
{
  "name": "RNJ Strategies",
  "email": "rebecca@rebeccanjohnson.com",
  "phone": "206-214-8848",
  "address": "2104 Harrison Ave NW Ste 2 # 1003 , Olympia, WA 98502",
  "clients": [
    "AFT Washington",
    "Alliance for Gun Responsibility",
    "Anti-Defamation League (ADL) Pacific Northwest Office",
    "CCF Action",
    "Defend Washington",
    "Intl Assn of Machinists & Aerospace Workers Dist Lodge 751",
    "KING CO SEXUAL ASSAULT RESOURCE CENTER",
    "KidVantage",
    "King County",
    "Marine Engineers' Beneficial Association",
    "PARENT TRUST FOR WA CHILDREN",
    "PUBLIC SCHOOL EMPLOYEES OF WA",
    "SERVICE EMPLOYEES INTL UNION DIST 925",
    "UFCW 3000",
    "WA ST BUDGET & POLICY CENTER"
  ]
},
{
  "name": "ROB MAKIN CONSULTING*",
  "email": "ROB@RGMAKIN.COM",
  "phone": "2069101832",
  "address": "PO Box 4354 , Tumwater, WA 98501",
  "clients": [
    "BOEHRINGER INGELHEIM PHARMACEUTICALS INC",
    "Capitol Venture LLC",
    "DELOITTE CONSULTING LLP",
    "HEALTHCARE DISTRIBUTION ALLIANCE c/o MultiState Associates LLC",
    "LYNDEN INCORPORATED",
    "MICROSOFT CORP",
    "SABEY CORPORATION",
    "Schweitzer Engineering Laboratories",
    "VIRGINIA MASON FRANCISCAN HEALTH",
    "WA ST UNIVERSITY"
  ]
},
{
  "name": "ROMAN M DANIELS-BROWN",
  "email": "ROMANDB@LIVE.COM",
  "phone": "3608704789",
  "address": "1725 52ND AVE SE , OLYMPIA, WA 98501",
  "clients": [
    "ASSN OF DENTAL SUPPORT ORGANIZATIONS",
    "AXS Group LLC",
    "Astria Health",
    "Confluence Health",
    "DaVita Inc.",
    "Life Flight Network",
    "Lucid USA, Inc",
    "NORTHWEST MARINE TRADE ASSN",
    "Novartis Services, Inc.",
    "PORT OF MOSES LAKE",
    "Space Exploration Technologies Corp. (SpaceX)",
    "TAKEDA PHARMACEUTICALS AMERICA, INC.",
    "U.S. Anesthesia Partners, Inc.",
    "WA AMBULATORY SURGERY CENTER ASSN"
  ]
},
{
  "name": "ROSE GUNDERSEN",
  "email": "rgundersen@washingonretail.org",
  "phone": "3602006452",
  "address": "618 QUINCE ST SE STE A, OLYMPIA, WA 98501",
  "clients": [
    "WA RETAIL ASSN"
  ]
},
{
  "name": "ROWLAND THOMPSON",
  "email": "ANEWSPAPER@AOL.COM",
  "phone": "3609439960",
  "address": "PO BOX 29 , OLYMPIA, WA 985070029",
  "clients": [
    "ALLIED DAILY NEWSPAPERS OF WA",
    "AMERICAN TRAFFIC SOLUTIONS INC",
    "Real Estate Equity Exchange, Inc. d/b/a Unison",
    "WA ST ASSN OF BROADCASTERS",
    "WA ST AUTO DEALERS ASSN INC",
    "WINE INSTITUTE"
  ]
},
{
  "name": "Rachael Seevers",
  "email": "rachaels@dr-wa.org",
  "phone": "206-324-1521",
  "address": "315 5th Ave S, Seattle, WA 98104",
  "clients": [
    "DISABILITY RIGHTS WA"
  ]
},
{
  "name": "Radu Smintina",
  "email": "rsmintina@schoolsoutwashington.org",
  "phone": "2063232396",
  "address": "625 Andover Park W #101, Tukwila, WA 98188",
  "clients": [
    "SCHOOLS OUT WA"
  ]
},
{
  "name": "Ramona Hattendorf",
  "email": "rhattendorf@arcofkingcounty.org",
  "phone": "206-829-7048 ",
  "address": "660 SW 39th Street Suite 205, Seattle, WA 98057",
  "clients": [
    "The Arc of King County"
  ]
},
{
  "name": "Randazzo LLC",
  "email": "MatthewRandazzoV@gmail.com",
  "phone": "3604608823",
  "address": "5033 Harrison Ave NW , Olympia, WA 98502",
  "clients": [
    "Snoqualmie Tribe"
  ]
},
{
  "name": "Rare Bird Strategies",
  "email": "Katherine@rarebird-strategies.com",
  "phone": "3604812565",
  "address": "2208 Capitol Way S , Olympia, WA 98501",
  "clients": [
    "April Housing",
    "BETHEL SCHOOL DISTRICT",
    "CONSUMER HEALTHCARE PRODUCTS ASSN",
    "Clover Park School District",
    "Dieringer School District",
    "FRANKLIN PIERCE SCHOOL DISTRICT",
    "Federal Way Public Schools",
    "Fife Public Schools",
    "Graduation Alliance, Inc.",
    "Hallmark Cards, Inc.",
    "LEADINGAGE WA",
    "PARTNERS IN CAREERS",
    "PeaceHealth Networks On Demand, LLC",
    "Prodigy Learning (US) Inc",
    "Puyallup School District",
    "Sumner-Bonney Lake School District",
    "TACOMA PUBLIC SCHOOLS",
    "TAH Operations LLC",
    "UCB, INC",
    "Ultragenyx Pharmaceutical Inc.",
    "University Place School District",
    "VIRGINIA MASON FRANCISCAN HEALTH",
    "WA ST CHAPTER OF ASSOC PUBLIC SAFETY COMMUNICATIONS OFFICIALS",
    "Washington Skills Centers Association",
    "White River School District"
  ]
},
{
  "name": "Rebecca Curry",
  "email": "rebeccac@rewiringamerica.org",
  "phone": "601-919-7606",
  "address": "3218 Georgia Ave NW, Suite 1, Washington, DC 20011",
  "clients": [
    "Rewiring America Inc."
  ]
},
{
  "name": "Rebecca George",
  "email": "rebecca@washingtonindiangaming.org",
  "phone": "3606201346",
  "address": "525 Pear ST SE , Olympia, WA 98501",
  "clients": [
    "Washington Indian Gaming Assocation"
  ]
},
{
  "name": "Rebecca Schrack",
  "email": "becca@childrensalliance.org",
  "phone": "2063240340",
  "address": "210 S Hudson St , Seattle, WA 98134",
  "clients": [
    "Children's Alliance"
  ]
},
{
  "name": "Rebekah Gardea",
  "email": "rebekah@qlawfoundation.org",
  "phone": "9093194710",
  "address": "5607 15th Ave NE , Seattle, WA 98105",
  "clients": [
    "QLaw Foundation of Washington"
  ]
},
{
  "name": "Reid Saaris",
  "email": "saaris@gmail.com",
  "phone": "8143673678",
  "address": "425 SW Langston Place, Renton, WA 98057",
  "clients": [
    "Children's Alliance"
  ]
},
{
  "name": "Reiny Cohen",
  "email": "reiny@fusewashington.org",
  "phone": "2062514083",
  "address": "1402 3rd Ave, #406 , Seattle, WA 98109",
  "clients": [
    "Fuse Washington"
  ]
},
{
  "name": "Remy Kerr",
  "email": "remyk@wsha.org",
  "phone": "2062162514",
  "address": "999 Third Ave Suite 1400, Seattle, WA 98104",
  "clients": [
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "Renee Hopkins",
  "email": "RENEE@WAGUNRESPONSIBILITY.ORG",
  "phone": "661-400-0798",
  "address": "PO BOX 4187, SEATTLE, WA 98194",
  "clients": [
    "Alliance for Gun Responsibility"
  ]
},
{
  "name": "Renée Sunde",
  "email": "rsunde@washingtonretail.org",
  "phone": "360-480-4435",
  "address": "618 Quince St , Olympia, WA 98507",
  "clients": [
    "WA RETAIL ASSN"
  ]
},
{
  "name": "Resource Public Affairs LLC",
  "email": "david@resourcepa.com",
  "phone": "2063690638",
  "address": "4150 Hillcrest Ave SW , Seattle, WA 98116",
  "clients": [
    "Divert, Inc.",
    "Fire Boss, LLC",
    "Perimeter Solutions",
    "Plus Power",
    "Royal Caribbean Group"
  ]
},
{
  "name": "Rian Watt",
  "email": "rian@opportunityinstitute.org",
  "phone": "8476873099",
  "address": "1414 12th Avenue, Unit 601, Seattle, WA 98122",
  "clients": [
    "ECONOMIC OPPORTUNITY INSTITUTE"
  ]
},
{
  "name": "Richard B Chisa",
  "email": "rchisa@pseofwa.org",
  "phone": "(253) 876-7423",
  "address": "PO Box 798, Auburn, WA 98071",
  "clients": [
    "PUBLIC SCHOOL EMPLOYEES OF WA"
  ]
},
{
  "name": "Richard Burton",
  "email": "RBurton@aftwa.org",
  "phone": "2062424777",
  "address": "604 Oakesdale Avenue SW, Renton, WA 98057",
  "clients": [
    "AFT Washington"
  ]
},
{
  "name": "Rise Consulting",
  "email": "andrew@folkestadpa.com",
  "phone": "4257531543",
  "address": "PO Box 12066, Seattle, WA 98102",
  "clients": [
    "City of Chelan",
    "Fair Work Center",
    "HIP of Spokane County",
    "Maddie's Place",
    "Northwest Consumer Law Center",
    "Northwest Justice Project",
    "PROF & TECH EMPLOYEES LOCAL 17",
    "Ritzville School District",
    "Thrive International",
    "UFCW 3000",
    "WA ST ASSN FOR JUSTICE",
    "WeTrain Washington"
  ]
},
{
  "name": "Robert Hayden",
  "email": "rhayden@pewtrusts.org",
  "phone": "202-552-2000",
  "address": "901 E Street NW , Washington, DC 20004",
  "clients": [
    "The Pew Charitable Trusts"
  ]
},
{
  "name": "Robert Jackson",
  "email": "robbyjackson44@gmail.com",
  "phone": "7025334804",
  "address": "1777 North Kent Street Suite 9, Arlington, VA 22209",
  "clients": [
    "NORTHWEST AUTOMATIC VENDING ASSN"
  ]
},
{
  "name": "Robert Rilling-Smith",
  "email": "bxr@akc.org",
  "phone": "919-816-3960",
  "address": "8051 Arco Corporate Drive, Suite 100, Raleigh, NC 27617",
  "clients": [
    "American Kennel Club, Inc."
  ]
},
{
  "name": "Robert Singleton",
  "email": "robert@progresschamber.org",
  "phone": "707.569.4546",
  "address": "1390 Chain Bridge Rd. #A108, McLean, VA 22101",
  "clients": [
    "Chamber of Progress"
  ]
},
{
  "name": "Ron Davis",
  "email": "ronpdavis@gmail.com",
  "phone": "503-858-5802",
  "address": "5716 15th Ave NE #D, Seattle, WA 98105",
  "clients": [
    "Sightline Institute"
  ]
},
{
  "name": "Rose Feliciano",
  "email": "rfeliciano@technet.org",
  "phone": "206-326-0712",
  "address": "1102 A Street, PO Box 445, Tacoma, WA 98401",
  "clients": [
    "TECHNOLOGY NETWORK"
  ]
},
{
  "name": "Rosemary Barber",
  "email": "rosemary@fusewashington.org",
  "phone": "6072223731",
  "address": "605 1st Ave , Seattle, WA 98104",
  "clients": [
    "Fuse Washington"
  ]
},
{
  "name": "Roxana Gomez",
  "email": "roxana@lcycwa.org",
  "phone": "2069709769",
  "address": "PO Box 28629 , Seattle, WA 98118",
  "clients": [
    "Legal Counsel for Youth and Children"
  ]
},
{
  "name": "Roz Thompson",
  "email": "roz@awsp.org",
  "phone": "360.357.7951",
  "address": "1021 8th Ave SE, Olympia, WA 98501",
  "clients": [
    "ASSN OF WA SCHOOL PRINCIPALS"
  ]
},
{
  "name": "Russell Gregrey Brown",
  "email": "rbrown@waprosecutors.org",
  "phone": "3607532175",
  "address": "206 10th Avenue Southeast, Olympia, WA 98501",
  "clients": [
    "WA Assn of Prosecuting Attorneys"
  ]
},
{
  "name": "Ryan Donohue",
  "email": "ryan.donohue@habitatskc.org",
  "phone": "2065777949",
  "address": "500 Naches Ave SW, Ste 200, Renton, WA 98057",
  "clients": [
    "Habitat for Humanity Seattle-King County"
  ]
},
{
  "name": "Ryan Naples",
  "email": "ryan.naples@dailypay.com",
  "phone": "5163145647",
  "address": "55 Water Street, 43rd Floor, New York, NY 10041",
  "clients": [
    "DailyPay, Inc."
  ]
},
{
  "name": "Ryan R. Tomasich",
  "email": "ryan.r.tomasich@boeing.com",
  "phone": "425-237-0320",
  "address": "PO Box 3707 MC 11-116, Seattle, WA 98124",
  "clients": [
    "BOEING"
  ]
},
{
  "name": "Ryan Spiller",
  "email": "jryanspiller@outlook.com",
  "phone": "360-789-5246",
  "address": "2815 Stirling st se , olympia, WA 98501",
  "clients": [
    "EQUAL JUSTICE COALITION",
    "WA FIRE COMMISSIONERS ASSN"
  ]
},
{
  "name": "S&H Government Relations ",
  "email": "t.sandison@comcast.net",
  "phone": "360-888-5923",
  "address": "4625 Village Dr SE, Olympia, WA 98501",
  "clients": [
    "Community Employment Alliance",
    "NATL ASSN OF SOCIAL WORKERS WA ST CHAPTER"
  ]
},
{
  "name": "SAMANTHA CASNE",
  "email": "scasne@washingtonea.org",
  "phone": "253-765-7161",
  "address": "PO BOX 9100 , FEDERAL WAY, WA 980639100",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "SAMUEL WILCOXSON",
  "email": "samuel.wilcoxson@premera.com",
  "phone": "425.918.4418",
  "address": "PO Box 327 MS 316, Seattle, WA 98111-0327",
  "clients": [
    "PREMERA BLUE CROSS"
  ]
},
{
  "name": "SCOTT DILLEY",
  "email": "sdilley@wafla.org",
  "phone": "360-455-8064",
  "address": "975 Carpenter Rd NE, Suite 201, Lacey, WA 98516",
  "clients": [
    "wafla"
  ]
},
{
  "name": "SDMC",
  "email": "sam@sdmartinconsulting.com",
  "phone": "2066514556",
  "address": "711 Capitol Way South Suite 201, Olympia, WA 98501",
  "clients": [
    "SCHOOLS OUT WA",
    "The Mockingbird Society"
  ]
},
{
  "name": "SEAN N GRAHAM",
  "email": "SEAN@WSMA.ORG",
  "phone": "3602594184",
  "address": "1800 COOPER POINT RD SW STE 7A, OLYMPIA, WA 98502",
  "clients": [
    "WA Chapter, ACEP",
    "WA ST MEDICAL ASSN"
  ]
},
{
  "name": "SEIB POLICY & PUBLIC AFFAIRS*",
  "email": "patty@seibppa.com",
  "phone": "3602802525",
  "address": "PO BOX 7871, OLYMPIA, WA 985077871",
  "clients": [
    "CARING FOR WASHINGTON",
    "LifePoint Health",
    "Molina Healthcare Inc",
    "RURAL HEALTH CLINIC ASSN",
    "Samaritan Healthcare (Grant County Public Hospital District No. 1)",
    "San Juan County Public Hospital District #3 dba Orcas Island Health Care District",
    "Skagit County Public Hospital District No. 2",
    "Skyline Health",
    "TriState Health"
  ]
},
{
  "name": "SHAWN I BUNNEY",
  "email": "SHAWNBUNNEY@COMCAST.NET",
  "phone": "2532080163",
  "address": "5360 W TAPPS DR E , LAKE TAPPS, WA 98391",
  "clients": [
    "Nash Cascadia Verde LLC"
  ]
},
{
  "name": "SHEELA TALLMAN",
  "email": "sheela_tallman@uhg.com ",
  "phone": "(206) 926-6496",
  "address": "904 7th Avenue, SEATTLE, WA 98104",
  "clients": [
    "UNITED HEALTHCARE SERVICES INC"
  ]
},
{
  "name": "SHEILA BABB ANDERSON",
  "email": "SANDERSON@CAMPIONADVOCACYFUND.ORG",
  "phone": "2066865310",
  "address": "1904 3RD AVE STE 405, SEATTLE, WA 98101",
  "clients": [
    "CAMPION ADVOCACY FUND"
  ]
},
{
  "name": "SIMONE BOE",
  "email": "SBOE@WASHINGTONEA.ORG",
  "phone": "2537657100",
  "address": "PO BOX 9100 , FEDERAL WAY, WA 980639100",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "SL Public Affairs",
  "email": "samantha@louderbackpa.com",
  "phone": "(360)789-7477",
  "address": "8518 42nd St W , University Place, WA 98466",
  "clients": [
    "AMAROK",
    "AMERICAN FOREST RESOURCE CNCL",
    "American Apparel & Footwear Association",
    "Association of Washington Healthcare Plans",
    "Consumer Direct Care Network Washington LLC.",
    "PMI US Corporate Services Inc. and Affiliates",
    "Printing Industries of Washington",
    "Public Generating Pool",
    "Sports Betting Alliance",
    "WA AMBULANCE ASSN",
    "WA Hospitality Assn",
    "WA RURAL ELECTRIC CO-OP ASSN",
    "Wenatchee Valley Chamber of Commerce"
  ]
},
{
  "name": "SOUND VIEW STRATEGIES LLC*",
  "email": "KELLY@SOUNDVIEWSTRATEGIES.BIZ",
  "phone": "2063825552",
  "address": "401 2nd Avenue South, Suite 307, SEATTLE, WA 98104",
  "clients": [
    "City of Clyde Hill",
    "City of Medina",
    "Hayden AI Technologies, Inc.",
    "MICROSOFT CORP",
    "Town of Beaux Arts Village",
    "Town of Hunts Point",
    "Town of Yarrow Point"
  ]
},
{
  "name": "STAUFFACHER COMMUNICATIONS*",
  "email": "GOCOUGS@BILLSTAUFFACHER.COM",
  "phone": "2535661284",
  "address": "1501 Capitol Way S. Suite 102, Olympia, WA 98501",
  "clients": [
    "ALASKA AIRLINES",
    "AMERICAN FOREST & PAPER ASSN",
    "AMERICAN TRAFFIC SOLUTIONS INC",
    "APPLE INC",
    "BUILDING INDUSTRY ASSN OF WA",
    "BURLINGTON NORTHERN SANTA FE RAILROAD",
    "CONSUMER DATA INDUSTRY ASSN",
    "Centene Corporation on behalf of its affiliates and subsidiaries",
    "Comprehensive Life Resources",
    "Council for Responsible Nutrition",
    "DISH Network Corporation",
    "DirecTV, LLC",
    "Electrify America LLC through Bulfinch Strategies Group LLC",
    "General Cigar Co., Inc.",
    "INDEPENDENT INS AGENTS & BROKERS OF WA",
    "LEGACY HEALTH SYSTEM",
    "Northwest Pulp & Paper Association",
    "Northwest Wall and Ceiling Contractors Association",
    "PMI US Corporate Services Inc. and Affiliates",
    "Rayonier",
    "Real Estate Equity Exchange, Inc. d/b/a Unison",
    "Securities Industry and Financial Markets Association",
    "TRUE BLUE INC",
    "Turo Inc.",
    "U.S. Tire Manufacturers Association",
    "WA BEER & WINE DISTRIBUTORS ASSN"
  ]
},
{
  "name": "STEPHEN F MULLIN",
  "email": "STEVE@WAROUNDTABLE.COM",
  "phone": "2066230180",
  "address": "520 PIKE ST STE 1212, SEATTLE, WA 98101",
  "clients": [
    "WA ROUNDTABLE"
  ]
},
{
  "name": "STEVEN STRACHAN",
  "email": "steve@waspc.org",
  "phone": "3604862380",
  "address": "3060 WILLAMETTE DR NE , Lacey, WA 98516",
  "clients": [
    "WA ASSN OF SHERIFFS & POLICE CHIEFS"
  ]
},
{
  "name": "STEWART GOVERNMENT AFFAIRS",
  "email": "SARA@SARASTEWARTINC.COM",
  "phone": "(360) 229-8168",
  "address": "6722 Apricot Lane SW, Rochester, WA 98579",
  "clients": [
    "AMERICAN SOCIETY FOR THE PREVENTION OF CRUELTY TO ANIMALS",
    "PIERCE CO ALLIANCE",
    "WA ASSN OF DRUG COURTS",
    "WA MENTAL HEALTH COUNSELORS ASSN",
    "WA ST SOCIETY FOR CLINICAL SOCIAL WORK",
    "Washington Smoke-Free Association"
  ]
},
{
  "name": "STRATEGIES 360*",
  "email": "ayas@STRATEGIES360.COM",
  "phone": "(206) 282-1990",
  "address": "2200 6th Ave, Suite 780, SEATTLE, WA 98121",
  "clients": [
    "AGRI BEEF CO",
    "ASSN OF WA SCHOOL PRINCIPALS",
    "Avangrid Power",
    "CITY OF ARLINGTON",
    "CITY OF MARYSVILLE",
    "CITY OF STANWOOD",
    "COMPASS HEALTH",
    "City of Tumwater",
    "Comprehensive Healthcare",
    "Copenhagen Infrastructure Partners",
    "Fourfront Contributor ",
    "Jefferson County",
    "Lakin Tire West LLC",
    "North Pacific Paper Company, LLC",
    "RealPage, Inc.",
    "Southport Real Estate",
    "Tenaska"
  ]
},
{
  "name": "SUSAN S TRACY",
  "email": "TRACY2123@COMCAST.NET",
  "phone": "(360) 701-4089",
  "address": "2123 WEDGEWOOD DR SE, OLYMPIA, WA 98501",
  "clients": [
    "WA ACADEMY OF EYE PHYSICIANS & SURGEONS"
  ]
},
{
  "name": "SUSAN W CHAMPLAIN",
  "email": "SUSAN.W.CHAMPLAIN@BOEING.COM",
  "phone": "2063049314",
  "address": "PO BOX 3707 11-116 , SEATTLE, WA 98124",
  "clients": [
    "BOEING"
  ]
},
{
  "name": "SUZANNE C HANSON",
  "email": "SHANSON@WFIS.ORG",
  "phone": "2539129347",
  "address": "PO Box 31019 , Seattle, WA 98103",
  "clients": [
    "WFIS"
  ]
},
{
  "name": "SVEN PETERSON",
  "email": "sven.peterson@premera.com",
  "phone": "4259183489",
  "address": "PO Box 327, Seattle, WA 981110327",
  "clients": [
    "PREMERA BLUE CROSS"
  ]
},
{
  "name": "SYBILL HYPPOLITE",
  "email": "shyppolite@wslc.org",
  "phone": "206-281-8901",
  "address": "321 16th Ave South, Seattle, WA 98144",
  "clients": [
    "Washington State Labor Council"
  ]
},
{
  "name": "SYDNEY SMITH  ZVARA",
  "email": "SZvara@comcast.net",
  "phone": "4252408415",
  "address": "7252 FAIRWAY AVE SE, SNOQUALMIE, WA 98065",
  "clients": [
    "Washington State Health Insurance Pool"
  ]
},
{
  "name": "Samantha Bailey",
  "email": "sbailey@wsna.org",
  "phone": "2065757979",
  "address": "575 Andover Park W Suite 101, Seattle, WA 98188",
  "clients": [
    "WA ST NURSES ASSN"
  ]
},
{
  "name": "Samantha Grad",
  "email": "samantha.grad@teamsters117.org",
  "phone": "206-794-9663",
  "address": "14675 Interurban Ave S #307 , Tukwila, WA 98168",
  "clients": [
    "TEAMSTERS LOCAL UNION #117"
  ]
},
{
  "name": "Samantha Hatzenbeler",
  "email": "sam@opportunityinstitute.org",
  "phone": "206-529-6375",
  "address": "509 Olive Way Suite 302, Seattle, WA 98101",
  "clients": [
    "ECONOMIC OPPORTUNITY INSTITUTE"
  ]
},
{
  "name": "Samantha Kersul",
  "email": "compliance_WA_Tiktok_1@multistate.us",
  "phone": "7036841110",
  "address": "5800 Bristol City Parkway, Culver City, CA 90230",
  "clients": [
    "TikTok Inc."
  ]
},
{
  "name": "Sandra R. Toussaint",
  "email": "stoussaint@aclu-wa.org",
  "phone": "206-635-1101",
  "address": "PO Box 2728 , Seattle, WA 98111",
  "clients": [
    "AMERICAN CIVIL LIBERTIES UNION OF WA"
  ]
},
{
  "name": "Sanjay Walvekar",
  "email": "sanjayw@wsba.org",
  "phone": "206.733.5903 ",
  "address": "1325 Fourth Avenue, Suite 600, Seattle, WA 98101",
  "clients": [
    "WA ST BAR ASSN"
  ]
},
{
  "name": "Sapphire Group Inc.",
  "email": "amya@sapphiregroupinc.com",
  "phone": "5095990404",
  "address": "3019 Duportail St 110 , Richland, WA 99352",
  "clients": [
    "Washington Childcare Centers Association"
  ]
},
{
  "name": "Sara Kofman",
  "email": "sara.kofman@lilly.com",
  "phone": "9714133910",
  "address": "1 Lilly Corporate Ctr , Indianapolis, IN 46285",
  "clients": [
    "ELI LILLY & COMPANY"
  ]
},
{
  "name": "Sarah Nagy",
  "email": "sarah.nagy@columbialegal.org",
  "phone": "360 740 2710",
  "address": "711 Capitol Way S Suite 706, Olympia, WA 98501",
  "clients": [
    "Columbia Legal Services"
  ]
},
{
  "name": "Sarah Sumadi",
  "email": "lobbyreg@everytown.org",
  "phone": "6463248250",
  "address": "P.O. Box 4184, New York, NY 10163",
  "clients": [
    "Everytown for Gun Safety Action Fund"
  ]
},
{
  "name": "Sattriona Nyachwaya",
  "email": "sznyachwaya@aclu-wa.org",
  "phone": "2064918710",
  "address": "P.O. Box 2728, SEATTLE, WA 98111",
  "clients": [
    "AMERICAN CIVIL LIBERTIES UNION OF WA"
  ]
},
{
  "name": "Scott A. Cave",
  "email": "sccomm@sosmail.us",
  "phone": "(360) 789-2772",
  "address": "3308 Fishtrap Loop NE, Olympia, WA 98506",
  "clients": [
    "CascadiaNOW!"
  ]
},
{
  "name": "Scott Brown",
  "email": "compliance_wa_vertex_1@multistate.us",
  "phone": "3144777474",
  "address": "18 Huntleigh Woods, St. Louis, MO 63131",
  "clients": [
    "VERTEX PHARMACEUTICALS INC"
  ]
},
{
  "name": "Scott Middleton ",
  "email": "smiddleton@mcaww.net",
  "phone": "(206) 442-9029",
  "address": "1100 Olive Way Suite 1250, Seattle, WA 98101",
  "clients": [
    "MECHANICAL CONTRACTORS ASSN WESTERN WA"
  ]
},
{
  "name": "Sean Behl",
  "email": "behlsean@gmail.com",
  "phone": "3609362151",
  "address": "10715 8th Ave NE Unit E-249, Seattle, WA 98125",
  "clients": [
    "Associated Students of the University of Washington - Seattle"
  ]
},
{
  "name": "Sean DeWitz",
  "email": "seand@wahospitality.org",
  "phone": "7013061989",
  "address": "510 Plum St SE , Olympia, WA 98501",
  "clients": [
    "WA Hospitality Assn"
  ]
},
{
  "name": "Sean Holihan",
  "email": "sholihan@giffords.org",
  "phone": "202-968-4655",
  "address": "250 Massachusetts Ave NW, Suite 400, Washington, DC 20001",
  "clients": [
    "Giffords"
  ]
},
{
  "name": "Sean P Pickard",
  "email": "spickard@deltadentalwa.com",
  "phone": "(206) 528-2304",
  "address": "400 Fairview Ave N , Seattle, WA 98109",
  "clients": [
    "Delta Dental of WA"
  ]
},
{
  "name": "Sean Southard",
  "email": "sean.m.southard@whirlpool.com",
  "phone": "269-923-5000",
  "address": "650 Massachusetts Ave NW #600, Washington, DC 20001",
  "clients": [
    "Whirlpool Corporation"
  ]
},
{
  "name": "Serena Campas",
  "email": "serena@rewiringamerica.org",
  "phone": "520-240-5731",
  "address": "3218 Georgia Ave NW, Suite 1, Washington, DC 20011",
  "clients": [
    "Rewiring America Inc."
  ]
},
{
  "name": "Serlin Haley LLP",
  "email": "aserlin@serlinhaley.com",
  "phone": "6178305241",
  "address": "51 Franklin Street, 3rd Floor, Boston, MA 02110",
  "clients": [
    "AMERIPEN",
    "Center for Baby and Adult Hygiene Products (BAHP)"
  ]
},
{
  "name": "Sermonti Public Affairs",
  "email": "tony@sermontipublicaffairs.com",
  "phone": "3602592330",
  "address": "PO Box 2655 , Olympia, WA 98507",
  "clients": [
    "APPRAISERS COALITION OF WA",
    "Air Methods Corporation",
    "GeoToll, Inc.",
    "HABITAT FOR HUMANITY OF WA ST",
    "METRO PARKS OF TACOMA",
    "MOTION PICTURE ASSOCIATION, INC.",
    "MOTOR VEHICLE SOFTWARE CORP",
    "Peninsula Metropolitan Park District",
    "Seattle's Finest Security & Traffic Control, LLC",
    "WA ASSN OF CRIMINAL DEFENSE LAWYERS",
    "WA BREWERS GUILD",
    "WA DEFENDER ASSN",
    "WA ST INDEPENDENT AUTO DEALERS ASSN"
  ]
},
{
  "name": "Seth Greiner",
  "email": "seth.greiner@nmss.org",
  "phone": "7203691665",
  "address": "180 Nickerson St. Suite 100, Seattle, WA 98109",
  "clients": [
    "NATL MULTIPLE SCLEROSIS SOCIETY GREATER NW CHAPTER"
  ]
},
{
  "name": "Seth Worley",
  "email": "seth@ua598.org",
  "phone": "5097274068",
  "address": "77708 E Canyon Meadows Dr., Kennewick, WA 99338",
  "clients": [
    "UA Plumbers and Steamfitters Local 598"
  ]
},
{
  "name": "Shannon Grimes",
  "email": "shannon@sightline.org",
  "phone": "4062415365",
  "address": "3412 18th Ave S , Seattle, WA 98144",
  "clients": [
    "Sightline Institute"
  ]
},
{
  "name": "Shannon Marie Blood",
  "email": "shannon.blood@reachoutandread.org",
  "phone": "360-584-7779",
  "address": "POB 2363 , Olympia, WA 98503",
  "clients": [
    "REACH OUT & READ INC"
  ]
},
{
  "name": "Sharmila Swenson",
  "email": "sharmila.swenson@symetra.com",
  "phone": "4252565353",
  "address": "777 108th Avenue NE, Suite 1200, Bellevue, WA 98004",
  "clients": [
    "Symetra Life Insurance Company"
  ]
},
{
  "name": "Shawn Latham",
  "email": "shawn@arcwa.org",
  "phone": "2533045762",
  "address": "4304 Lakeview Ct SE, Lacey, WA 98503",
  "clients": [
    "The Arc of Washington State"
  ]
},
{
  "name": "Sheri Call",
  "email": "sheri@watrucking.org",
  "phone": "(253) 838-1650",
  "address": "2102 Carriage Drive SW Bldg. F, Olympia, WA 98502",
  "clients": [
    "WA TRUCKING ASSN"
  ]
},
{
  "name": "Sherrie Tinoco",
  "email": "sherrie@wscadv.org",
  "phone": "3607513471",
  "address": "107 Spring Street, Seattle, WA 98104",
  "clients": [
    "WA ST COALITION  AGAINST DOMESTIC VIOLENCE"
  ]
},
{
  "name": "Shruti Sannon",
  "email": "tsannon@aclu-wa.org",
  "phone": "206.624.2184",
  "address": "PO Box 2728 , Seattle, WA 98111",
  "clients": [
    "AMERICAN CIVIL LIBERTIES UNION OF WA"
  ]
},
{
  "name": "Sienna Jarrard",
  "email": "siennajarrard@gmail.com",
  "phone": "4252474411",
  "address": "17018 NE 29th Place, Bellevue, WA 98008",
  "clients": [
    "ASSOCIATED STUDENTS OF THE UNIVERSITY OF WA BOTHELL"
  ]
},
{
  "name": "Silver Consulting",
  "email": "alexa.r.silver@gmail.com",
  "phone": "3609514564",
  "address": "5729 Littlerock Rd SW Suite 107, Tumwater, WA 98512",
  "clients": [
    "Behavioral Health Solutions",
    "San Juan County Public Hospital District #3 dba Orcas Island Health Care District",
    "Skagit County Public Hospital District No. 2",
    "Skyline Health",
    "Tobacco-Free Action Fund",
    "WA ASSN FOR COMMUNITY HEALTH"
  ]
},
{
  "name": "Solidarity Poilcy",
  "email": "solidaritypolicywa@gmail.com",
  "phone": "2064658586",
  "address": "3813 S. Ferdinand St., Seattle, WA 98118",
  "clients": [
    "Lavender Rights Project",
    "Washington Ethnic Studies Now"
  ]
},
{
  "name": "Sophia Steele",
  "email": "fppc@bmhlaw.com",
  "phone": "425-890-9723",
  "address": "19223 SE 232nd Street, Renton, WA 98058",
  "clients": [
    "Western States Petroleum Assn."
  ]
},
{
  "name": "Soumyo Lahiri-Gupta",
  "email": "soumyo@weareoneamerica.org",
  "phone": "206-452-8419",
  "address": "1225 S WELLER ST SUITE 430, SEATTLE, WA 98144",
  "clients": [
    "ONEAMERICA"
  ]
},
{
  "name": "Sound Government Solutions",
  "email": "carrie@sound-gov.com",
  "phone": "253-759-9595",
  "address": "3110 Ruston Way Suite F, Tacoma, WA 98402",
  "clients": [
    "FORD MOTOR CO",
    "JAMESTOWN S'KLALLAM TRIBE",
    "Peninsula Metropolitan Park District",
    "Progressive",
    "REGENCE BLUE SHIELD",
    "Republic National Distributing Company",
    "Teladoc Health, Inc.",
    "USAA",
    "Veritec Solutions",
    "WA BANKERS ASSN",
    "Washington Land Title Association"
  ]
},
{
  "name": "Sristi Kamal",
  "email": "kamal@westernlaw.org",
  "phone": "206-487-7207",
  "address": "119 1st Ave. S., Ste 330, Seattle, WA 98104",
  "clients": [
    "Western Environmental Law Center"
  ]
},
{
  "name": "Stacy Dym",
  "email": "stacy@arcwa.org",
  "phone": "(206) 235-0297",
  "address": "2638 State Ave NE, Olympia, WA 98506",
  "clients": [
    "The Arc of Washington State"
  ]
},
{
  "name": "Stafford Strong",
  "email": "Stafford.Strong@charter.com",
  "phone": "(360) 258-5109",
  "address": "222 NE Park Plaza Dr. Suite 231, Vancouver, WA 98684",
  "clients": [
    "Charter Communications Operating, LLC"
  ]
},
{
  "name": "Stefan Moritz",
  "email": "stefan@8.unitehere.org",
  "phone": "2069633166",
  "address": "5030 1st Ave S Suite 201, Seattle, WA 98134",
  "clients": [
    "UNITE HERE Local 8"
  ]
},
{
  "name": "Stefany Zelepuza",
  "email": "szelepuza@wpuda.org",
  "phone": "3607412675",
  "address": "212 Union Ave SE, Ste 201, Olympia, WA 98501",
  "clients": [
    "WA PUBLIC UTILITIES DISTS ASSN"
  ]
},
{
  "name": "Stephan Blanford",
  "email": "stephan.blanford@gmail.com",
  "phone": "2066506859",
  "address": "113 Cherry St Box 87190, Seattle, WA 98104",
  "clients": [
    "Children's Alliance"
  ]
},
{
  "name": "Stephen M Wolfe Jr",
  "email": "michael@driveforwardseattle.org",
  "phone": "2063279487",
  "address": "7100 Fort Dent Way Suite 100, Tukwila, WA 98188",
  "clients": [
    "Drive Forward"
  ]
},
{
  "name": "Sterling Harders",
  "email": "amber.aman@seiu775.org",
  "phone": "4254401856",
  "address": "215 Columbia, Seattle, WA 98104",
  "clients": [
    "SEIU 775"
  ]
},
{
  "name": "Steve Brooks",
  "email": "sbrooks@washingtonfirechiefs.org",
  "phone": "3609702820",
  "address": "605 11TH AVE SE Suite 211, Olympia, WA 98501",
  "clients": [
    "WA ST ASSN OF FIRE CHIEFS"
  ]
},
{
  "name": "Steven Ellis",
  "email": "stevene@awcnet.org",
  "phone": "360-753-4137",
  "address": "1076 Franklin st SE, Olympia, WA 98501",
  "clients": [
    "ASSN OF WA CITIES"
  ]
},
{
  "name": "Steven Mazulo",
  "email": "Stevemazulo@gmail.com",
  "phone": "509-951-2868 ",
  "address": "27614 n cottonwood rd , Chattaroy, WA 99003",
  "clients": [
    "SMART TD PAC"
  ]
},
{
  "name": "Streuli Public Affairs",
  "email": "mark@streulipa.com",
  "phone": "360-250-3352",
  "address": "8021 57th LN NE , Olympia, WA 98516",
  "clients": [
    "Ducks Unlimited",
    "Google LLC and its Affiliates",
    "IRON WORKERS DIST CNCL OF THE PNW",
    "IUPAT DISTRICT COUNCIL 5",
    "Natural Fibers Alliance",
    "Olympic Ambulance",
    "WA ASSN OF WHEAT GROWERS",
    "WA CATTLEMEN'S ASSN",
    "WA GRAIN COMMISSION",
    "WA POTATO & ONION ASSN",
    "WA ST POTATO COMMISSION",
    "WA ST WATER RESOURCES ASSN",
    "Washington Masonry & Tile Labor Management Cooperation Committee",
    "Water Quality Association"
  ]
},
{
  "name": "Sue Nightingale",
  "email": "Sue.Nightingale@washingtonea.org",
  "phone": "426-564-4016",
  "address": "3000 Landerholm Cir SE, A123 , Bellevue, WA 98007",
  "clients": [
    "WA EDUCATION ASSN"
  ]
},
{
  "name": "Sundial Advocacy LLC",
  "email": "nick@sundialadvocacy.com",
  "phone": "3603382467",
  "address": "PO Box 1063, Olympia, WA 98501",
  "clients": [
    "AMERICAN MEDICAL RESPONSE",
    "Accenture LLP",
    "Acentra Health, including affiliated entity CNSI",
    "CARBONQUEST, Inc.",
    "CITY OF KENT",
    "Consumer Direct Care Network Washington LLC.",
    "Families Against Mandatory Minimums",
    "INVENERGY",
    "MICROSOFT CORP",
    "Metrc, LLC",
    "PORT OF SEATTLE",
    "Point Digital Finance, Inc.",
    "Port of Port Angeles",
    "Public Generating Pool",
    "RUSSELL INVESTMENT GROUP",
    "Swimply",
    "UNITED HEALTHCARE SERVICES INC",
    "Upstream",
    "WA AMBULANCE ASSN",
    "WA ASSN OF REALTORS",
    "WA Hospitality Assn",
    "WA REFUSE & RECYCLING ASSN",
    "WA RURAL ELECTRIC CO-OP ASSN",
    "Workday",
    "Zap Energy, Inc."
  ]
},
{
  "name": "Susanna Waldman",
  "email": "susanna@wmsa.org",
  "phone": "2069563652",
  "address": "1800 COOPER POINT RD SW STE 7A, OLYMPIA, WA 98502",
  "clients": [
    "WA ST MEDICAL ASSN"
  ]
},
{
  "name": "T K BENTLER/PUBLIC AFFAIRS ASSOC*",
  "email": "tkbentler@comcast.net",
  "phone": "(360) 789-1176",
  "address": "5838 Athens Beach Rd NW , OLYMPIA, WA 98502",
  "clients": [
    "RAI Services Company"
  ]
},
{
  "name": "TAMARA L RANCORE",
  "email": "TLRANCORE@GMAIL.COM",
  "phone": "3604901159",
  "address": "61 SE MAJESTIC VIEW DR , SHELTON, WA 98584",
  "clients": [
    "ESCROW ASSN OF WA",
    "RITE AID CORPORATION",
    "Tow Truck Operators of Washington",
    "WA PAWNBROKERS ASSN",
    "WA ST FIRE FIGHTERS ASSN"
  ]
},
{
  "name": "THE NEXUS GROUP LLC*",
  "email": "fyancey@comcast.net",
  "phone": "3603591339",
  "address": "1711 Camden Park Dr. SW , OLYMPIA, WA 98512",
  "clients": [
    "ASSN OF WA SCHOOL PRINCIPALS",
    "WA ASSN OF SCHOOL ADMINISTRATORS",
    "WA ST SCHOOL RETIREES ASSN"
  ]
},
{
  "name": "THE RUNA GROUP",
  "email": "annabel@therunagroup.us",
  "phone": "2067084979",
  "address": "PO BOX 16702, SEATTLE, WA 98116",
  "clients": [
    "Always Be Learning, Inc."
  ]
},
{
  "name": "TIM HERBERT",
  "email": "TIM@WASHINGTONPIPETRADES.ORG",
  "phone": "(253) 474-7462",
  "address": "7030 TACOMA MALL BLVD #300, TACOMA, WA 98409",
  "clients": [
    "WA State Assn of Plumbers & Pipefitters"
  ]
},
{
  "name": "TIM LAYTON",
  "email": "genentech@nmgovlaw.com",
  "phone": "3603394381",
  "address": "7430 MANZANITA DRIVE NW, OLYMPIA, WA 98502",
  "clients": [
    "GENENTECH"
  ]
},
{
  "name": "TOM BUGERT",
  "email": "tom.bugert@helionenergy.com",
  "phone": "425-879-1729",
  "address": "1415 75th St SW, Everett, WA 98203",
  "clients": [
    "Helion Energy"
  ]
},
{
  "name": "TOM ECHOLS",
  "email": "TOMECHOLS@AOL.COM",
  "phone": "3607050551",
  "address": "806 PUGET ST NE, OLYMPIA, WA 98506",
  "clients": [
    "7-ELEVEN INC",
    "COALITION OF COASTAL FISHERIES",
    "HUNTERS HERITAGE COUNCIL",
    "Hood Canal Beach Seiners",
    "Hoyt Legal, LLC",
    "PMI US Corporate Services Inc. and Affiliates",
    "PURSE SEINE VESSEL OWNERS ASSN"
  ]
},
{
  "name": "TRENT MATSON",
  "email": "TRENT.MATSON@MONEYTREEINC.COM",
  "phone": "2062463500",
  "address": "820 SW 34TH ST. SUITE D, RENTON, WA 98057",
  "clients": [
    "Moneytree, Inc."
  ]
},
{
  "name": "Taylor Consulting LLC",
  "email": "taylorcoug@hotmail.com",
  "phone": "2532089071",
  "address": "18300 122ND LN SE , Yelm, WA 98597",
  "clients": [
    "Pacific Northwest Farmers Cooperative Inc",
    "WA ASSN FOR CAREER & TECHNICAL EDUCATION",
    "WA ST GRANGE",
    "WA ST NURSERY & LANDSCAPE ASSN"
  ]
},
{
  "name": "Teresa Bui",
  "email": "tbui@pacificenvironment.org",
  "phone": "415.399.8850",
  "address": "1012 Torney Ave, San Francisco, CA 94129",
  "clients": [
    "Pacific Environment"
  ]
},
{
  "name": "Teresa Taylor",
  "email": "ttaylor@wacops.org",
  "phone": "360-352-8224",
  "address": "200 Union Avenue SE , Olympia, WA 98501",
  "clients": [
    "WA ST COUNCIL OF POLICE & SHERIFFS"
  ]
},
{
  "name": "Terrell Sweat",
  "email": "tsweat@ITS.JNJ.com",
  "phone": "6505156157",
  "address": "PO Box 2324, Pocatello, ID 83206",
  "clients": [
    "JOHNSON & JOHNSON SERVICES, INC."
  ]
},
{
  "name": "Terri Standish-Kuon",
  "email": "terri@icwashington.org",
  "phone": "2066234494",
  "address": "600 Stewart Street Suite 600, Seattle, WA 98101",
  "clients": [
    "INDEPENDENT COLLEGES OF WASHINGTON"
  ]
},
{
  "name": "Teryn Yazdani",
  "email": "teryn@columbiariverkeeper.org",
  "phone": "541-387-3030",
  "address": "1125 SE Madison Street Suite 103A, Portland, OR 97214",
  "clients": [
    "Columbia Riverkeeper"
  ]
},
{
  "name": "The Cascadia Group",
  "email": "adankingjr5@gmail.com",
  "phone": "3605532874",
  "address": "PO Box 2655, Olympia, WA 98507",
  "clients": [
    "Bonney Lake Food Bank - The Market",
    "Coalition for Organic and Regenerative Agriculture through Tilth Alliance",
    "FRANKLIN CO PUBLIC UTILITY DIST",
    "FRANKLIN COUNTY",
    "Nonprofit Association of Washington",
    "Pierce County Human Services Coalition",
    "WA STATE COUNCIL OF COUNTY & CITY EMPLOYEES",
    "Washington Wildlife First",
    "Washington Youth Alliance Action Fund"
  ]
},
{
  "name": "The Gano Group",
  "email": "jasongano@gmail.com",
  "phone": "2536828495",
  "address": "4250 Martin Way East ste 105, PMB 114, olympia, WA 98516",
  "clients": [
    "1DROP Operations LLC",
    "C&A Development",
    "Step By Step",
    "The Cliff Avril Family Foundation"
  ]
},
{
  "name": "The Holt Company",
  "email": "tom@theholtcompany.com",
  "phone": "5039567461",
  "address": "2432 NW 141st Place, Portland, OR 97229",
  "clients": [
    "PeaceHealth Networks On Demand, LLC"
  ]
},
{
  "name": "The Nichols Group Government Relations LLC",
  "email": "troy@thenicholsgroupgr.com",
  "phone": "360-918-6838",
  "address": "111 21St Ave SW , Olympia, WA 98501-2809",
  "clients": [
    "AMERICAN CHEMISTRY COUNCIL",
    "American Promotional Events Northwest Inc. DBA TNT Fireworks",
    "Capital Region ESD 113",
    "City of Shelton",
    "DailyPay, Inc.",
    "INVENERGY",
    "KOCH GOVERNMENT AFFAIRS LLC & AFFILIATES",
    "Lewis County",
    "National Shooting Sports Foundation, Inc.",
    "PHILLIPS 66",
    "Rivian Automotive LLC",
    "Seabrook Land Company LLC",
    "TECK AMERICAN/TECK WA",
    "Tri-Cities Intermodal LLC",
    "WILLAPA-GRAYS HARBOR OYSTER GROWERS ASSN",
    "Washington School Information Processing Cooperative (WSIPC)",
    "Water Quality Association"
  ]
},
{
  "name": "The Warren Group, LLC",
  "email": "warren-group@outlook.com",
  "phone": "360-951-5551",
  "address": "PO Box 463 , Olympia, WA 98507",
  "clients": [
    "Copenhagen Infrastructure Partners",
    "Klickitat County PUD",
    "OKANOGAN CO PUD",
    "Twelve",
    "Washington State Green Hydrogen Alliance",
    "Western Systems Inc"
  ]
},
{
  "name": "Thomas M Davis",
  "email": "TDAVIS@WFPA.ORG",
  "phone": "3603521500",
  "address": "724 COLUMBIA ST NW, SUITE 250, OLYMPIA, WA 98501",
  "clients": [
    "WA FOREST PROTECTION ASSN"
  ]
},
{
  "name": "Tidewater Consults",
  "email": "tidewaterconsults@gmail.com",
  "phone": "3607897115",
  "address": "319 Logger Ct SE , Olympia, WA 98503",
  "clients": [
    "SWCA",
    "WA ST SOC OF ORAL/MAXILLOFACIAL SURGERY",
    "WFIS"
  ]
},
{
  "name": "Tiffani McCoy",
  "email": "tiffani@houseourneighbors.org",
  "phone": "206-822-1812",
  "address": "600 1st Ave, Suite 533, Seattle, WA 98104",
  "clients": [
    "House Our Neighbors"
  ]
},
{
  "name": "Tiffany Brace",
  "email": "tiffany@nonprofitwa.org",
  "phone": "8552992922",
  "address": "1265 S Main St #206, Seattle, WA 98144",
  "clients": [
    "Nonprofit Association of Washington"
  ]
},
{
  "name": "Tiffany Roberts",
  "email": "p66.3@nmgovlaw.com",
  "phone": "4153896800",
  "address": "c/o 2350 Kerner Blvd., Ste. 250, San Rafael, CA 94901",
  "clients": [
    "PHILLIPS 66"
  ]
},
{
  "name": "Timothy Grisham",
  "email": "tim@countyofficials.org",
  "phone": "3604893044",
  "address": "206 Tenth Ave NE, Olympia, WA 98506",
  "clients": [
    "WA ASSN OF COUNTY OFFICIALS"
  ]
},
{
  "name": "Todd Allred Advocacy",
  "email": "toddallredadvocacy@gmail.com",
  "phone": "2063480483",
  "address": "P.O. Box 58007, RENTON, WA 98058",
  "clients": [
    "Plumbing-Heating-Cooling Contractors of Washington"
  ]
},
{
  "name": "Todd H Carlisle",
  "email": "toddc@dr-wa.org",
  "phone": "2534954023",
  "address": "Disability Rights Washington 315 5th Avenue South, Suite 850, Seattle, WA 98104",
  "clients": [
    "DISABILITY RIGHTS WA"
  ]
},
{
  "name": "Tom Tucker",
  "email": "tom.tucker@stateandfed.com",
  "phone": "614-798-2684",
  "address": "7400 Safelite Way, Columbus, OH 43235",
  "clients": [
    "Safelite Group, Inc."
  ]
},
{
  "name": "Tom Wolf",
  "email": "thomas.wolf@bp.com",
  "phone": "3604837438",
  "address": "4519 Grandview Road , Blaine, WA 98230",
  "clients": [
    "BP AMERICA INC"
  ]
},
{
  "name": "Ton Johnson",
  "email": "tjohnson@wfse.org",
  "phone": "3603527603",
  "address": "1212 Jefferson St SE #300 , Olympia, WA 98501",
  "clients": [
    "WA FEDERATION OF STATE EMPLOYEES"
  ]
},
{
  "name": "Toyer Strategic Advisors",
  "email": "david@toyerstrategic.com",
  "phone": "4253225226",
  "address": "3705 Colby Ave #1, Everett, WA 98201",
  "clients": [
    "Washington Housing Development, LLC"
  ]
},
{
  "name": "Traci Underwood",
  "email": "traci@opportunityinstitute.org",
  "phone": "206-529-6370",
  "address": "603 Stewart St, Ste 715, Seattle, WA 98101",
  "clients": [
    "ECONOMIC OPPORTUNITY INSTITUTE"
  ]
},
{
  "name": "Travis Dutton",
  "email": "tdutton@wsac.org",
  "phone": "3607531886",
  "address": "WSAC, 206 10th Ave SE, Olympia, WA 98501",
  "clients": [
    "WA STATE ASSN OF COUNTIES (WSAC)"
  ]
},
{
  "name": "Travis Nelson",
  "email": "tnelson@wpuda.org",
  "phone": "360 741 2680",
  "address": "212 Union Avenue SE, Suite 201, Olympia, WA 98501",
  "clients": [
    "WA PUBLIC UTILITIES DISTS ASSN"
  ]
},
{
  "name": "Treasure Mackley",
  "email": "treasure@investwanow.org",
  "phone": "(206) 612-1011",
  "address": "509 Olive Way Ste 1133 , Seattle, WA 98101",
  "clients": [
    "Invest in Washington Now"
  ]
},
{
  "name": "Tremont Strategies Group LLC",
  "email": "info@tremontstrategies.com",
  "phone": "(617) 236-5830",
  "address": "One Beacon Street, Suite 16300, Boston, MA 02108",
  "clients": [
    "American Knife & Tool Institute"
  ]
},
{
  "name": "Trevor Justin Government Relations",
  "email": "trevor@tjgovrelations.com",
  "phone": "360-280-2847",
  "address": "1501 Capitol Way S STE 203, Olympia, WA 98501",
  "clients": [
    "CITY OF EVERETT",
    "CITY OF LAKE STEVENS",
    "CITY OF SUMNER",
    "Dentegra Insurance Company",
    "Google LLC and its Affiliates",
    "LYFT INC",
    "MENTOR Washington",
    "National Assn of Dental Plans (NADP)",
    "Northwest Housing Association PAC",
    "PARTNERSHIP FOR LEARNING",
    "Parametrix",
    "RECREATIONAL BOATING ASSN OF WA",
    "SHEET METAL & AIR CONDITION CONTRACTORS WEST WA",
    "TREEHOUSE",
    "Teaching Strategies",
    "UNIVERSITY OF WASHINGTON",
    "WA RECREATION & PARKS ASSN"
  ]
},
{
  "name": "Trevor R Sandison ",
  "email": "T.sandison@comcast.net",
  "phone": "360-888-5923",
  "address": "4625 Village Dr SE, Olympia, WA 98501",
  "clients": [
    "AMERICAN CANCER SOCIETY CANCER ACTION NETWORK",
    "Northwest Harvest EMM"
  ]
},
{
  "name": "Trish McDaid-O'Neill",
  "email": "compliance_wa_az_1@multistate.us",
  "phone": "(360) 607-2917",
  "address": "3906 NW 119th Street, Vancouver, WA 98685",
  "clients": [
    "ASTRAZENECA PHARMACEUTICALS LP"
  ]
},
{
  "name": "US Solar & Storage Holdings",
  "email": "compliance_wa_solar@multistate.us",
  "phone": "7036841110",
  "address": "23761 Coronel Drive, Mission Viejo, CA 92691",
  "clients": [
    "Tenaska"
  ]
},
{
  "name": "Vanessa Hernandez",
  "email": "vhernandez@aclu-wa.org",
  "phone": "2066242184",
  "address": "PO Box 2728 , Seattle, WA 98111",
  "clients": [
    "AMERICAN CIVIL LIBERTIES UNION OF WA"
  ]
},
{
  "name": "Vanessa R. Saavedra",
  "email": "vanessa@nohla.org",
  "phone": "2063256464",
  "address": "1301 Fifth Avenue, Suite 1200, Seattle, WA 98101",
  "clients": [
    "Northwest Health Law Advocates"
  ]
},
{
  "name": "Vasu Reddy",
  "email": "compliance_wa_nwlc_2@multistate.us",
  "phone": "2025885180",
  "address": "1350 I Street NW, Suite 700, Washington, DC 20005",
  "clients": [
    "National Women's Law Center (NWLC)",
    "National Women's Law Center Action Fund"
  ]
},
{
  "name": "Venable LLP",
  "email": "adilobbying@venable.com",
  "phone": "2023444000",
  "address": "600 Massachusetts Ave., NW, Washington, DC 20001",
  "clients": [
    "Alliance for Digital Innovation"
  ]
},
{
  "name": "Veronica Vanslyke",
  "email": "veronica.vanslyke@amfam.com",
  "phone": "2533132954",
  "address": "6000 American Parkway, Madison, WI 53783",
  "clients": [
    "AMERICAN FAMILY MUTUAL INSURANCE"
  ]
},
{
  "name": "Victoria Mena",
  "email": "victoria@blacklivesseattle.org",
  "phone": "(206) 333-0350",
  "address": "505 Broadway East, unit 328, Seattle, WA 98102",
  "clients": [
    "Black Lives Matter Seattle-King County"
  ]
},
{
  "name": "WA MEDIA SVCS INC*",
  "email": "JOYCE@WAMEDIA.COM",
  "phone": "3607909129",
  "address": "407 W BAY DR, OLYMPIA, WA 98502",
  "clients": [
    "LEOFF1 COALITION"
  ]
},
{
  "name": "WA ST NURSES ASSN",
  "email": "HTRAN@WSNA.ORG",
  "phone": "(206) 575-7979",
  "address": "575 ANDOVER PARK W STE 101, SEATTLE, WA 98188",
  "clients": [
    "SCHOOL NURSES ORGANIZATION OF WA"
  ]
},
{
  "name": "WILLIAM F DEWEY",
  "email": "BILLD@TAYLORSHELLFISH.COM",
  "phone": "3604323334",
  "address": "130 SE LYNCH RD , SHELTON, WA 98584",
  "clients": [
    "TAYLOR SHELLFISH CO INC"
  ]
},
{
  "name": "WILLIAM J MCSHERRY",
  "email": "WILLIAM.MCSHERRY@BOEING.COM",
  "phone": "2067662610",
  "address": "PO BOX 3707 MC 11-116 , SEATTLE, WA 981242207",
  "clients": [
    "BOEING"
  ]
},
{
  "name": "Waldo Emerson Waldron-Ramsey",
  "email": "waldowaldronramsey@washingtoncan.org",
  "phone": "2063890050",
  "address": "1806 E. Yesler Way , Seattle, WA 98122",
  "clients": [
    "WA COMMUNITY ACTION NETWORK"
  ]
},
{
  "name": "Washington Government Relations, LLC",
  "email": "jim@washingtongr.com",
  "phone": "253-297-3760",
  "address": "711 St Helens Avenue, Ste 202, Tacoma, WA 98402",
  "clients": [
    "National Association of Residential Property Managers",
    "Tacoma-Pierce County Association of Realtors"
  ]
},
{
  "name": "Water Street Public Affairs LLC",
  "email": "kastama@waterstreetpa.com",
  "phone": "2532325313",
  "address": "600 1st Ave Ste 330 PMB 40425, Seattle, WA 98104-2246",
  "clients": [
    "AMAZON.COM SERVICES LLC",
    "BENTON PUD",
    "CenTrio Energy",
    "Center for Sustainable Infrastructure",
    "Cithaeron",
    "Expressive Rights Alliance",
    "FRANKLIN CO PUBLIC UTILITY DIST",
    "FRANKLIN COUNTY",
    "Hometap Equity Partners, LLC",
    "Myno Carbon Corp.",
    "Point Digital Finance, Inc.",
    "Prime Therapeutics, LLC",
    "Unlock Technologies",
    "WA BANKERS ASSN",
    "WA ST DAIRY FEDERATION",
    "WaBA dba Clean and Prosperous WA",
    "Yakima Basin Joint Board"
  ]
},
{
  "name": "Waypoint Consulting Group",
  "email": "TeresitaCTorres@gmail.com",
  "phone": "206.258.1597",
  "address": "5725 S 292nd St , Auburn, WA 98001",
  "clients": [
    "Andrea Lee Wang",
    "CLIMATE SOLUTIONS",
    "Cedar Grove",
    "Delta Dental of WA",
    "Joint Council of Teamsters No 28",
    "NON-PROFIT INSURANCE PROGRAM",
    "Puget Sound Pilots",
    "STATEWIDE POVERTY ACTION NETWORK",
    "WA WILDLIFE & RECREATION COALITION ACTION FUND",
    "Washington State Opportunity Scholarship"
  ]
},
{
  "name": "Weinman Consulting Services",
  "email": "mikejweinman@gmail.com",
  "phone": "2536917877",
  "address": "1102 A Street Suite 618, Tacoma, WA 98401",
  "clients": [
    "WASTE CONNECTIONS INC"
  ]
},
{
  "name": "White Tudor LLC",
  "email": "kate@whitetudor.com",
  "phone": "(360) 402-1272",
  "address": "2417 Capitol Way S, Olympia, WA 98501",
  "clients": [
    "Ashley House",
    "CENTER FOR DIAGNOSTIC IMAGING",
    "Community Health Center of Snohomish County",
    "NATURAL RESOURCES DEFENSE COUNCIL INC. AND ITS AFFILIATES",
    "WA ASSN OF AREA AGENCIES ON AGING",
    "WA OCCUPATIONAL THERAPY ASSN",
    "WelbeHealth"
  ]
},
{
  "name": "Yvette Maganya",
  "email": "yvettemaganya2014@gmail.com",
  "phone": "2063315800",
  "address": "907 Pine Street Suite 500 , Seattle, WA 98101",
  "clients": [
    "If/When/How",
    "LEGAL VOICE"
  ]
},
{
  "name": "Yvonne Kraus",
  "email": "yvonne@wildliferecreation.org",
  "phone": "2065725561",
  "address": "329 Randolph Avenue , Seattle, WA 98122",
  "clients": [
    "WA WILDLIFE & RECREATION COALITION ACTION FUND"
  ]
},
{
  "name": "ZOSIA E STANLEY",
  "email": "zosias@wsha.org",
  "phone": "2062162511",
  "address": "999 Third Avenue, Suite 1400 , Seattle, WA 98104",
  "clients": [
    "WA ST HOSPITAL ASSN"
  ]
},
{
  "name": "jennifer wallace",
  "email": "jennifer@countyofficials.org",
  "phone": "3604816160",
  "address": "206 Tenth Avenue SW, olympia, WA 98501",
  "clients": [
    "WA ASSN OF COUNTY OFFICIALS"
  ]
}
];

export default function LobbyistDirectory() {
  const [search, setSearch] = useState("");

  // --- Helpers for name normalization ---
  const UPPER_EXCEPTIONS = new Set([
    "LLC","LLP","PLLC","INC","CO","CO.","WA","OR","ID","P.S.","PS","PC","PSC","CPA"
  ]);

  const isAllCaps = (s) => !!s && s === s.toUpperCase();

  const titleWord = (w) => {
    if (UPPER_EXCEPTIONS.has(w)) return w; // keep acronyms/suffixes
    // Handle O' and Mc/Mac prefixes
    if (/^O'\w+/i.test(w)) {
      const rest = w.slice(2).toLowerCase();
      return "O'" + rest.charAt(0).toUpperCase() + rest.slice(1);
    }
    if (/^Mc\w+/i.test(w)) {
      const rest = w.slice(2).toLowerCase();
      return "Mc" + rest.charAt(0).toUpperCase() + rest.slice(1);
    }
    if (/^Mac\w+/i.test(w)) {
      const rest = w.slice(3).toLowerCase();
      return "Mac" + rest.charAt(0).toUpperCase() + rest.slice(1);
    }
    // Default Title Case
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  };

  const smartTitleCase = (name) => {
    if (!name) return "";
    const trimmed = name.trim();
    if (!isAllCaps(trimmed)) return trimmed; // leave mixed-case as-is
    return trimmed.split(/\s+/).map((w) => titleWord(w)).join(" ");
  };

  const normalizePhone = (p) => (p || "").toString().trim();
  const normalizeEmail = (e) => (e || "").toString().trim();
  const normalizeAddress = (a) => (a || "").toString().trim();

  // Normalize the dataset without mutating original
  const data = useMemo(
    () =>
      (lobbyists || []).map((l) => ({
        ...l,
        name: smartTitleCase(l.name || ""),
        email: normalizeEmail(l.email),
        phone: normalizePhone(l.phone),
        address: normalizeAddress(l.address),
        clients: Array.isArray(l.clients) ? l.clients.filter(Boolean) : [],
      })),
    []
  );

  const filtered = useMemo(() => {
    const q = (search || "").toLowerCase();
    if (!q) return data;
    return data.filter((l) =>
      (l.name || "").toLowerCase().includes(q) ||
      (l.email || "").toLowerCase().includes(q) ||
      (l.address || "").toLowerCase().includes(q) ||
      (l.clients || []).some((c) => (c || "").toLowerCase().includes(q))
    );
  }, [data, search]);

  const mapsHref = (addr) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
  const mailHref = (email) => (email ? `mailto:${email}` : undefined);
  const telHref = (phone) =>
    phone ? `tel:${String(phone).replace(/[^0-9+]/g, "")}` : undefined;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">2025 WA Lobbyist Directory</h1>
      <p className="text-sm text-gray-600 mb-3">
        Search by lobbyist, client, email, or address.
      </p>

      <Input
        placeholder="Search…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6"
      />

 <div className="space-y-6">
  {filtered.map((lobbyist, index) => (
    <div
      key={index}
      className="pb-6 border-b border-gray-300 last:border-b-0"
    >
      <Card>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-xl font-semibold">{lobbyist.name}</h2>

              {lobbyist.address && (
                <p className="text-sm text-gray-700 flex items-center gap-2">
                  <a
                    className="inline-block text-gray-500 hover:text-blue-600 no-underline"
                    href={mapsHref(lobbyist.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍
                  </a>
                  <span>{lobbyist.address}</span>
                </p>
              )}

              {lobbyist.email && (
                <p className="text-sm flex items-center gap-2">
                  <a
                    className="inline-block text-gray-500 hover:text-blue-600 no-underline"
                    href={mailHref(lobbyist.email)}
                  >
                    📧
                  </a>
                  <span>{lobbyist.email}</span>
                </p>
              )}

              {lobbyist.phone && (
                <p className="text-sm flex items-center gap-2">
                  <a
                    className="inline-block text-gray-500 hover:text-blue-600 no-underline"
                    href={telHref(lobbyist.phone)}
                  >
                    📞
                  </a>
                  <span>{lobbyist.phone}</span>
                </p>
              )}
            </div>

            <div className="text-sm bg-gray-100 rounded px-2 py-1">
              {lobbyist.clients.length} client
              {lobbyist.clients.length === 1 ? "" : "s"}
            </div>
          </div>

          {lobbyist.clients.length > 0 && (
            <div className="mt-3 ml-4">
              <h3 className="font-medium">Clients</h3>
              <ul className="list-disc list-inside text-sm mt-1 ml-4">
                {lobbyist.clients.map((client, i) => (
                  <li key={i}>
                    {typeof client === "string" ? client : client.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  ))}
</div>
);
} 
