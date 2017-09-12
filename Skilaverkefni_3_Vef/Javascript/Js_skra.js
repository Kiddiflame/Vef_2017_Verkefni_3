function Pizza(verd, staerd, alegg)
{
	this.verd = verd;
	this.staerd = staerd;
	this.alegg = alegg;

}

var piz1 = new Pizza(2300, 'Medium', ['Ostur', 'Pepperoni']);
var piz2 = new Pizza(3600, 'Stor', ['Ostur, Pepperoni, Nautahakk, Sveppir'])

	var details1 = ' Price: '+ piz1.verd + ', Size: ' +piz1.staerd+ ', Alegg: '+piz1.alegg;
	var elpizza1 = document.getElementById('pizza1');
	elpizza1.textContent = details1;


	var details2 = ' Price: '+ piz2.verd + ', Size: ' +piz2.staerd+ ', Alegg: '+piz2.alegg;
	var elpizza2 = document.getElementById('pizza2');
	elpizza2.textContent = details2;

