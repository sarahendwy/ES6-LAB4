//      DAY4
//      TASK4
//      AJAX

let xhr = new XMLHttpRequest()
xhr.open("GET", "rockbands.json")

let bands = document.getElementById("band")
let artists = document.getElementById("artist")


xhr.onreadystatechange = function(){
    if (xhr.readyState == 4)
        if (xhr.status >=200 && xhr.status<300){
            let data = JSON.parse(xhr.responseText)
            console.log(data)

            
            let keyBand = Object.keys(data)
            for (let i = 0; i < keyBand.length ; i++){
                let optionBand = document.createElement("option")
                optionBand.value = keyBand[i]
                optionBand.innerHTML = keyBand[i]
                bands.appendChild(optionBand)
            }

            bands.onchange = function(){
                artists.innerHTML = '<option value = "">Plase select</option>'
                let bandSelect = bands.value

                if(bandSelect == "") return;

                let art = data[bandSelect]

                for(let i = 0; i <art.length; i++){
                    let optionArt = document.createElement("option")
                    optionArt.value = art[i].value
                    optionArt.innerHTML = art[i].name
                    artists.appendChild(optionArt)
                }

                artists.onchange = function(){
                    if(artists.value != ""){
                        window.open(artists.value)
                    }
                }
            }

        }
}

xhr.send('')