//document.getElementById("counter_id").innerText = 5

countEl = document.getElementById("count-el")
entryEl = document.getElementById("entry-el")
count = 0
function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    entryEl.textContent += count + "-" 
    count = 0
    countEl.textContent = 0
}