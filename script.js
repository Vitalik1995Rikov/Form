

var allowDrinksCheckbox = document.getElementById("dsTable");
var drinkSelect = document.getElementById("buttonDesibled");
    allowDrinksCheckbox.addEventListener("change", function(event) {
        if (event.target.checked) {
            drinkSelect.disabled = false;
        } else {
        drinkSelect.disabled = true;
        }
    }, false);


function notEye() { 
    let items = document.getElementById('dsTable').querySelectorAll('input[type="radio"]:checked');
    items.forEach(items => items.style.display === 'initial' ? items.style.display = 'none' : items.style.display = 'none');   
}


function eye() { 
    let items = document.getElementById('dsTable').querySelectorAll('input[type="radio"]:checked');
    items.forEach(items => items.style.display === 'none' ? items.style.display = 'initial' : items.style.display = 'initial');  
}


function deleteRow() { 
    let items = document.getElementById('dsTable').querySelectorAll('input[type="checkbox"]:checked');
    let isAdmin = confirm("Вы уверены?");
    items.forEach(item => item.closest('tr').remove());
}




    let i = 4;

    function foo() {
      var elem = document.getElementById("dsTable").lastChild;
      
    }

    function add() {
    const table = document.getElementById('dsTable');
    // const table = document.querySelectorAll('dsTable');
    let length = table.length;
    const tbody = table.children[0];
    const tr = document.createElement('tr');
    const tdValues = ['<input type="checkbox" name="a3">', `Элемент+${i}`, `Описание элемента + ${i}`, '<input type="radio" name="r3">'];
    tr.innerHTML = '<td>' + tdValues[0] + '</td> <td>' + tdValues[1] + '</td> <td>' + tdValues[2] + '</td> <td>' + tdValues[3] + '</td>';
    tbody.appendChild(tr)
    i++;
}


function checkedAll() {
    let items = document.getElementById('dsTable').querySelectorAll('input'); 
    let len, i;
    for (i = 0, len = items.length; i < len; i += 1) {
        if (items.item(i).type && items.item(i).type === "checkbox") {       
            if ('input[type="checkbox"]:checked') {
                items.item(i).checked = true;
                } else {
            items.item(i).checked = false;
            }       
        }
    }
}


