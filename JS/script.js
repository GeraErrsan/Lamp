function validateForm() {
    var x = document.forms["main"]["login"].value;
		if (x == null || x == "" || !validateEmail(x)) {
            alert("Ошибка проверки");
            return false;
        }
    }
        
function validateEmail(email) {
    var re = ^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$;
    return re.test(email);
    }
        
function limitText( area ,limit ) {
    area.value = area.value.substring(0,limit);
    document.getElementById("counter").value = 200 - area.value.length;
    }