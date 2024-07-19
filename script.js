document.getElementById('toggleSwitch').addEventListener('change', function() {
    let row2 = document.getElementById('row2');
    let cont1ba = document.getElementById('cont1ba'); 
    let cont1bc = document.getElementById('cont1bc'); 
    if (this.checked) {
        row2.style.zIndex = '10';
        cont1ba.style.fontWeight = '500'; 
        cont1bc.style.fontWeight = '700'; 
    } else {
        row2.style.zIndex = '0';
        cont1ba.style.fontWeight = '700'; 
        cont1bc.style.fontWeight = '500'; 
    }
});
