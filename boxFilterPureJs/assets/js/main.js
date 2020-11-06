var buttonCollection = document.getElementsByClassName('button');
var boxContainer = document.getElementById('boxContainer');

addButtonCollection();

function addButtonCollection(){
    for(var i = 0;i<buttonCollection.length; i++){
        var item = buttonCollection[i];
    
        item.addEventListener('click', buttonClick);
    }
}

function buttonClick(){
    var color = this.getAttribute('filter-color');

    boxContainer.classList='';
    boxContainer.classList.add('filter-box-div');
    boxContainer.classList.add(color);
}
