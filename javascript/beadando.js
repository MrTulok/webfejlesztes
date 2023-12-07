
	//hamburger menu
	const menu_btn = document.querySelector(".hamburger");
	const menu_mobile = document.querySelector(".mobile-nav");

	menu_btn.addEventListener("click", function () {
		menu_btn.classList.toggle("is-active");
		menu_mobile.classList.toggle("is-active");
	});

	const lenyil = document.querySelectorAll(".nyil");
	const drop = document.querySelectorAll(".kicsi");

	//lenyilo menu
	lenyil.forEach(function(le,index){
		le.addEventListener("mouseover", function () {
			drop[index].classList.toggle("is-active");
			le.classList.toggle("is-active");
		});
	});

	//lenyilo szovegek
	const gomb = document.getElementsByClassName("kerdes");
	let i

	for (i = 0; i < gomb.length; i++) {
		gomb[i].addEventListener("click", function () {
			this.classList.toggle("is-active");
			const tart = this.nextElementSibling;
			if (tart.style.maxHeight) {
				tart.style.maxHeight = null;
			} else {
				tart.style.maxHeight = tart.scrollHeight + "px";
			}
		});
	};
//album
$(document).ready(function() {
	$('#kepek').galleria(
	height=500,
	width=500
	); 
});

//validálás

$(document).ready(function(){
	$("#myform").validate({ 
		rules: {
			nev: "required",
			szoveg:"required",
			email: {
				required: true,
				email: true
			},
			telefon: {
				digits: true,
			},
			igen:{
				required:true,
			},
		},
		messages: {
			nev: "Adja meg a nevét!",
			email: "Valós email címet adjon meg!",
			szoveg: " Írjon szöveget!",
			telefon:"Valós telefonszámot adjon meg!",
			igen:"<br>Iratkozzon fel hírlevelünkre!"
		},
			
	});
});

//kérdezés
 function tarsas(){
	const nemek = document.querySelectorAll(".nemtars");

	nemek.forEach(function(elem){
		elem.classList.add("is-active")
	});
 }

 function kertes(){
	const igenek = document.querySelectorAll(".nemtars")

	igenek.forEach(function(elem){
		elem.classList.remove("is-active")
	});
 }

document.getElementById("mehet").addEventListener("click",function(){

	const a = document.getElementById("kint").checked;
	const b = document.getElementById("tars").checked;

	const c = document.getElementById("fal").checked;
	const e = document.getElementById("kert").checked;

	const f = document.getElementById("fajtak").value;

	const k = document.getElementById("kicsi").checked;
	const l = document.getElementById("kozep").checked;
	const m = document.getElementById("nagy").checked;

	const n = document.getElementById("0").checked;
	const p = document.getElementById("100").checked;
	const q = document.getElementById("200").checked;
	const r = document.getElementById("egyedi").checked;

	if ((a == 1 || b == 1) && e == 1 && f == "Fa" && k == 1 && n == 1) {
		document.getElementById("favirag").style.display = "block";
	} else {
		document.getElementById("favirag").style.display = "none";
	}

	if (a == 1 && e == 1 && f == "Fa" && k == 1 && n == 1) {
		document.getElementById("gesztenye").style.display = "block";
	} else{
		document.getElementById("gesztenye").style.display = "none";
	}

	if (a == 1 && e == 1 && f == "Kovácsoltvas" && k == 1 && n == 1) {
		document.getElementById("szel").style.display = "block";
	}else{
		document.getElementById("szel").style.display = "none";
	}

	if (a == 1 && e == 1 && (f == "Kovácsoltvas" || f == "Kő") && k == 1 && n == 1) {
		document.getElementById("szel").style.display = "block";
	}else{
		document.getElementById("szel").style.display = "none";
	}

	if (a == 1 && e == 1 && (f == "Kovácsoltvas" || f == "Kő") && k == 1 && p == 1) {
		document.getElementById("foldgomb").style.display = "block";
	}else{
		document.getElementById("foldgomb").style.display = "none";
	}

	if (a == 1 && e == 1 && f == "Kovácsoltvas" && l == 1 && p == 1) {
		document.getElementById("haromszek").style.display = "block";
	}else{
		document.getElementById("haromszek").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && f == "Kovácsoltvas" && l == 1 && p == 1) {
		document.getElementById("harmonia").style.display = "block";
	}else{
		document.getElementById("harmonia").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && f == "Kő" && l == 1 && p == 1) {
		document.getElementById("sarkany2").style.display = "block";
	}else{
		document.getElementById("sarkany2").style.display = "none";
	}

	if (a == 1 && e == 1 && f == "Kovácsoltvas" && k == 1 && p == 1) {
		document.getElementById("dallam").style.display = "block";
	}else{
		document.getElementById("dallam").style.display = "none";
	}

	if (a == 1 && e == 1 && (f == "Kovácsoltvas" || f =="Kő") && m == 1 && r == 1) {
		document.getElementById("kaloz").style.display = "block";
	}else{
		document.getElementById("kaloz").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && f == "Kovácsoltvas" && m == 1 && p == 1) {
		document.getElementById("napocska").style.display = "block";
		document.getElementById("napsugar").style.display = "block";
		document.getElementById("meteor").style.display = "block";
		
	}else{
		document.getElementById("napocska").style.display = "none";
		document.getElementById("napsugar").style.display = "none";
		document.getElementById("meteor").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && f == "Kovácsoltvas" && m == 1 && q == 1) {
		document.getElementById("spiral").style.display = "block";
	}else{
		document.getElementById("spiral").style.display = "none";
	}

	if (a == 1 && e == 1 && f == "Kő" && k == 1 && r == 1) {
		document.getElementById("hattyu").style.display = "block";
	}else{
		document.getElementById("hattyu").style.display = "none";
	}

	if (a == 1 && e == 1 && f == "Kő" && l == 1 && r == 1) {
	document.getElementById("letra").style.display = "block";
	}else{
		document.getElementById("letra").style.display = "none";
	}

	if (a == 1 && e == 1 && (f == "Kovácsoltvas" || f == "Kő") && m == 1 && r == 1) {
		document.getElementById("viragora").style.display = "block";
	}else{
		document.getElementById("viragora").style.display = "none";
	}

	if (a == 1 && e == 1 && f == "Kő" && m == 1 && r == 1) {
		document.getElementById("kogomb").style.display = "block";
		document.getElementById("gemeskut").style.display = "block";
	}else{
		document.getElementById("kogomb").style.display = "none";
		document.getElementById("gemeskut").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && (f == "Kovácsoltvas" || f == "Kő") && k == 1 && r == 1) {
		document.getElementById("csodaszarvas").style.display = "block";
	}else{
		document.getElementById("csodaszarvas").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && (f == "Kovácsoltvas" || f=="Festés") &&  m== 1 && r == 1) {
		document.getElementById("zodiakus").style.display = "block";
	}else{
		document.getElementById("zodiakus").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && f == "Kő" && k == 1 && r == 1) {
		document.getElementById("marvany").style.display = "block";
	}else{
		document.getElementById("marvany").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && f == "Kő" && k == 1 && r == 1) {
		document.getElementById("patikus").style.display = "block";
	}else{
		document.getElementById("patikus").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && (f == "Kovácsoltvas" || f=="Festés") && m == 1 && r == 1) {
		document.getElementById("naphold").style.display = "block";
	}else{
		document.getElementById("naphold").style.display = "none";
	}

	if ((a == 1 || b == 1) && c == 1 && f === "Festés" && m == 1 && r == 1) {
		document.getElementById("sarkany1").style.display = "block";
	}else{
		document.getElementById("sarkany1").style.display = "none";
	}

	const elemek = ["favirag","gesztenye","szel","foldgomb","napocska","napsugar","haromszek","harmonia","dallam","kaloz","meteor","spiral","hattyu","kogomb","viragora","csodaszarvas","letra","gemeskut","zodiakus","marvany","patikus","naphold","sarkany1","sarkany2"]

	let igaz_e = false

	elemek.forEach(function(elem){
		if (document.getElementById(elem).style.display === "block"){
			igaz_e=true;
		}
	});
	
	if (igaz_e){
		document.getElementById("termekek").style.display = "flex";
		document.getElementById("nincs").style.display = "none";
	}else{
		document.getElementById("nincs").style.display = "block";
	}
});