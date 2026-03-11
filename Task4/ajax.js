//      DAY4
//      TASK4
//      AJAX

let xhr = new XMLHttpRequest()
xhr.open("GET", "rockbands.json")

xhr.onreadystatechange = function(){
    if (xhr.readyState == 4)
        if (xhr.status == 200 && xhr.status<300){
            let data = JSON.parse(xhr.responseText)

            let bands = document.getElementById("band")
            let keyBand = Object.keys(data)
            for (let i =0; i < keyBand.length ; i++){
                let optionBand = document.createElement("option")
                optionBand.value = keyBand[i]
                optionBand.innerHTML = keyBand[i].charAt(0).toUpperCase()+keyBand[i].slice(1)
                bands.appendChild(optionBand)
            }

            bands.onchange = function(){
                let artists = document.getElementById("artist")
                artists.innerHTML = '<option value = "">Plase select</option>'
                let bandSelect = bands.value

                if(bandSelect == "") return

                let art = data[bandSelect]

                for(let j = 0; j <art.length; j++){
                    let options = document.createElement("option")
                    options.value = art[j].value
                    options.innerHTML = art[j].name
                    artists.appendChild(options)
                }

                artists.onchange = function(){
                    let link = artists.value
                    if(link != ""){
                        window.open(link)
                    }
                }
            }

        }
}

xhr.send('')