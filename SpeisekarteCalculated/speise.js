const schnitzelGerichte = [
  {
    name: "Wiener Schnitzel",
    beschreibung: "Klassisches Kalbsschnitzel, paniert und goldbraun gebraten.",
    preis: 18.50
  },
  {
    name: "Jägerschnitzel",
    beschreibung: "Schweineschnitzel mit einer herzhaften Pilzrahmsauce.",
    preis: 16.00
  },
  {
    name: "Zigeunerschnitzel",
    beschreibung: "Schweineschnitzel mit einer würzigen Paprikasauce.",
    preis: 16.50
  },
  {
    name: "Rahmschnitzel",
    beschreibung: "Schweineschnitzel in einer cremigen Rahmsauce.",
    preis: 17.00
  },
  {
    name: "Schnitzel Wiener Art",
    beschreibung: "Paniertes Schweineschnitzel, serviert mit Zitrone.",
    preis: 15.50
  },
  {
    name: "Cordon Bleu",
    beschreibung: "Gefülltes Schnitzel mit Schinken und Käse, paniert und gebraten.",
    preis: 19.00
  },
  {
    name: "Parmesanschnitzel",
    beschreibung: "Schweineschnitzel mit einer knusprigen Parmesanpanade.",
    preis: 17.50
  },
  {
    name: "Schnitzel Holstein",
    beschreibung: "Schweineschnitzel mit Spiegelei und Sardellen.",
    preis: 18.00
  },
  {
    name: "Schnitzel Hawaii",
    beschreibung: "Schweineschnitzel mit Ananas und Käse überbacken.",
    preis: 17.00
  },
  {
    name: "Paprikaschnitzel",
    beschreibung: "Schweineschnitzel mit einer pikanten Paprikasauce.",
    preis: 16.50
  },
  {
    name: "Knoblauchschnitzel",
    beschreibung: "Schweineschnitzel mit einer aromatischen Knoblauchsauce.",
    preis: 16.00
  },
  {
    name: "Zwiebelschnitzel",
    beschreibung: "Schweineschnitzel mit gebratenen Zwiebeln.",
    preis: 16.50
  },
  {
    name: "Schnitzel mit Champignons",
    beschreibung: "Schweineschnitzel mit einer cremigen Champignonsauce.",
    preis: 17.00
  },
  {
    name: "Schnitzel mit Pfeffersauce",
    beschreibung: "Schweineschnitzel mit einer würzigen Pfeffersauce.",
    preis: 17.50
  },
  {
    name: "Schnitzel mit Spargel",
    beschreibung: "Schweineschnitzel mit frischem Spargel und Hollandaise.",
    preis: 19.50
  }
]

const getraenke = [
  {
    name: "Mineralwasser",
    beschreibung: "Erfrischendes stilles oder sprudelndes Wasser.",
    preis: 2.50
  },
  {
    name: "Cola",
    beschreibung: "Kohlensäurehaltiges Erfrischungsgetränk mit Koffein.",
    preis: 3.00
  },
  {
    name: "Orangensaft",
    beschreibung: "Frisch gepresster oder 100%iger Orangensaft.",
    preis: 3.50
  },
  {
    name: "Apfelsaftschorle",
    beschreibung: "Mischung aus Apfelsaft und Mineralwasser.",
    preis: 3.00
  },
  {
    name: "Bier",
    beschreibung: "Klassisches Lagerbier oder Pils.",
    preis: 4.00
  },
  {
    name: "Weißwein",
    beschreibung: "Trockener oder halbtrockener Weißwein.",
    preis: 5.50
  },
  {
    name: "Rotwein",
    beschreibung: "Vollmundiger Rotwein aus verschiedenen Rebsorten.",
    preis: 6.00
  },
  {
    name: "Kaffee",
    beschreibung: "Frisch gebrühter Kaffee, schwarz oder mit Milch.",
    preis: 2.50
  },
  {
    name: "Tee",
    beschreibung: "Verschiedene Sorten von heißem Tee.",
    preis: 2.00
  },
  {
    name: "Limonade",
    beschreibung: "Erfrischendes, kohlensäurehaltiges Zitronengetränk.",
    preis: 3.00
  }
];


const vorspeisen = [
  {
    name: "Bruschetta",
    beschreibung: "Geröstetes Brot mit Tomaten, Basilikum und Knoblauch.",
    preis: 6.50
  },
  {
    name: "Caprese",
    beschreibung: "Tomaten und Mozzarella mit frischem Basilikum und Balsamico.",
    preis: 7.00
  },
  {
    name: "Garnelen-Cocktail",
    beschreibung: "Gekochte Garnelen serviert mit Cocktailsauce.",
    preis: 9.00
  },
  {
    name: "Antipasti-Platte",
    beschreibung: "Verschiedene italienische Vorspeisen wie Oliven, Käse und Wurst.",
    preis: 12.00
  },
  {
    name: "Mozzarella-Sticks",
    beschreibung: "Frittierte Mozzarella-Sticks mit Marinara-Sauce.",
    preis: 7.50
  },
  {
    name: "Hühnerflügel",
    beschreibung: "Knusprige Hühnerflügel mit einer Auswahl an Dips.",
    preis: 8.50
  },
  {
    name: "Frühlingsrollen",
    beschreibung: "Knusprige Frühlingsrollen gefüllt mit Gemüse und Fleisch.",
    preis: 6.00
  },
  {
    name: "Calamari",
    beschreibung: "Frittierte Tintenfischringe mit Zitronenscheiben und Aioli.",
    preis: 9.50
  },
  {
    name: "Samosas",
    beschreibung: "Indische Teigtaschen gefüllt mit gewürztem Gemüse oder Fleisch.",
    preis: 5.50
  },
  {
    name: "Tzatziki mit Pita",
    beschreibung: "Griechischer Joghurt-Dip mit Knoblauch und Gurken, serviert mit Pita-Brot.",
    preis: 5.00
  }
];

const beilagen = [
  {
    name: "Pommes Frites",
    beschreibung: "Knusprig frittierte Kartoffelstäbchen.",
    preis: 3.50
  },
  {
    name: "Kartoffelsalat",
    beschreibung: "Traditioneller deutscher Kartoffelsalat mit Essig und Öl.",
    preis: 4.00
  },
  {
    name: "Bratkartoffeln",
    beschreibung: "Gebratene Kartoffelscheiben mit Zwiebeln und Speck.",
    preis: 4.50
  },
  {
    name: "Sauerkraut",
    beschreibung: "Fermentierter Weißkohl, leicht säuerlich im Geschmack.",
    preis: 3.00
  },
  {
    name: "Gurkensalat",
    beschreibung: "Frischer Gurkensalat mit Dill und saurer Sahne.",
    preis: 3.50
  },
  {
    name: "Rotkohl",
    beschreibung: "Gekochter Rotkohl, leicht süßlich und würzig.",
    preis: 3.50
  },
  {
    name: "Spätzle",
    beschreibung: "Hausgemachte deutsche Eierteig-Nudeln.",
    preis: 4.00
  },
  {
    name: "Gemischter Salat",
    beschreibung: "Frischer Salat mit verschiedenen Gemüsesorten.",
    preis: 4.00
  },
  {
    name: "Erbsen und Möhren",
    beschreibung: "Gedünstete Erbsen und Möhren, leicht gewürzt.",
    preis: 3.50
  },
  {
    name: "Kartoffelpüree",
    beschreibung: "Cremiges Kartoffelpüree mit Butter und Milch.",
    preis: 3.50
  }
];

const salate = [
  {
    name: "Caesar Salad",
    beschreibung: "Römersalat mit Caesar-Dressing, Croutons und Parmesan.",
    preis: 8.50
  },
  {
    name: "Griechischer Salat",
    beschreibung: "Tomaten, Gurken, Oliven und Feta-Käse mit Olivenöl-Dressing.",
    preis: 7.50
  },
  {
    name: "Caprese Salad",
    beschreibung: "Tomaten und Mozzarella mit Basilikum und Balsamico.",
    preis: 8.00
  },
  {
    name: "Nicoise Salad",
    beschreibung: "Gemischter Salat mit Thunfisch, Eiern, grünen Bohnen und Oliven.",
    preis: 9.00
  },
  {
    name: "Cobb Salad",
    beschreibung: "Gemischter Salat mit Hähnchen, Speck, Avocado, Ei und Blauschimmelkäse.",
    preis: 10.00
  },
  {
    name: "Waldorfsalat",
    beschreibung: "Sellerie, Äpfel, Walnüsse und Trauben in einer Mayonnaise-Dressing.",
    preis: 7.00
  },
  {
    name: "Quinoa-Salat",
    beschreibung: "Quinoa mit Gemüse, Kichererbsen und Zitronen-Dressing.",
    preis: 8.50
  },
  {
    name: "Rucola-Salat",
    beschreibung: "Frischer Rucola mit Parmesan und Pinienkernen.",
    preis: 7.50
  },
  {
    name: "Spinatsalat",
    beschreibung: "Frischer Spinat mit roten Zwiebeln, Speck und einem warmen Speck-Dressing.",
    preis: 8.00
  },
  {
    name: "Asiatischer Hühnersalat",
    beschreibung: "Gemischter Salat mit gegrilltem Hähnchen, Mandarinen, Mandeln und Sesam-Dressing.",
    preis: 9.50
  }
];

function CE(what, ...adds) {
  return Object.assign(document.createElement(what), ...adds)
}
function setResult() {
  const pars = document.getElementsByClassName('line_sum')
  let sum = 0.0
  for (let index = 0; index < pars.length; index++) {
    const element = pars[index];
    if (element.innerText != '' ) {
      sum += Number.parseFloat(element.innerText)
    }
  }
  result.innerText = sum.toFixed(2) + ' €'
}

function Reset() {
  const radios = document.getElementsByClassName('radio')
  const numbers = document.getElementsByClassName('number')
  const sums = document.getElementsByClassName('line_sum')
  for (let index = 0; index < radios.length; index++) {
    const rd = radios[index]
    const nm = numbers[index]
    const sum = sums[index]
    rd.checked = false
    nm.value = 0
    sum.innerText = ''
    setResult()
  }
}

function generate_block(items, header) {
  let h3 = Object.assign(document.createElement('h3'), { innerText: header })
  document.body.append(h3)
  let div
  items.forEach(
    item => {
      div = document.createElement('div')
      div.className = 'gericht_info'
      let input1 = CE('input', { type: 'number', value: 0, className: 'number', min: 0 },)
      let input2 = CE('input', { type: 'checkbox', className: 'radio' })
      const price = item.preis
      const line_sum = CE('p', { className: 'line_sum', innerText: '' })
      const set = () => {
        if (input2.checked){
          line_sum.innerText = Number.parseFloat(price * input1.value).toFixed(2) + ' €'
          setResult()
        }else{
          line_sum.innerText = ''
          setResult()
        }
          
      }
      input1.onchange = () => set()
      input2.onchange = () => set()
      
      const ps = [
        CE('p', { innerText: item.name }),
        CE('p', { innerText: item.beschreibung }),
        CE('p', { innerText: Number.parseFloat(item.preis).toFixed(2) + ' €', className: 'preis' }),
        input1,
        input2,
        line_sum
      ]
      div.append(...ps)
      document.body.append(div)
    }
  )

}



generate_block(vorspeisen, 'Vorspeisen')
generate_block(schnitzelGerichte, 'Schnitzel-Gerichte')
generate_block(beilagen, 'Beilagen')
generate_block(salate, 'Salate')
generate_block(getraenke, 'Getränke')

