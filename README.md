# JavaScript-Practices

# 1. Simple Calculator
<img width="569" alt="Screen Shot 2022-07-04 at 10 42 49 AM" src="https://user-images.githubusercontent.com/67844037/177177039-8b122f9c-259c-4677-bf40-7e5cc8b2fc2a.png">

## :books: What I've learned

1. interecting with html and js
- using `<script>` tag : index.html - line 22

2. using `<span>` tag
- `<span>` is an inline element, so in this case, `<span>` is used.

3. set html value with *textContent*
```
document.getElementByTagId("<id>").textContent = <value>
```

# 2. BlackJack Game
<img width="569" alt="Screen Shot 2022-07-04 at 12 43 43 PM" src="https://user-images.githubusercontent.com/67844037/177194026-379925de-6c3c-43bd-8ebe-c2d0f9b077b4.png">

<img width="568" alt="Screen Shot 2022-07-04 at 12 43 10 PM" src="https://user-images.githubusercontent.com/67844037/177193961-2081becc-cc73-4871-b8f7-45e4004822e0.png">
<img width="568" alt="Screen Shot 2022-07-04 at 12 43 20 PM" src="https://user-images.githubusercontent.com/67844037/177193983-089f2ad6-32a4-4d8f-be4b-708913a126f6.png">
<img width="569" alt="Screen Shot 2022-07-04 at 12 44 03 PM" src="https://user-images.githubusercontent.com/67844037/177194062-aeb5486a-2b7f-4358-9962-fbafe79554ba.png">
(https://youtu.be/jS4aFq5-91M?t=12997)

## 📚 What I've learned

1. onclick() : ✅ , onClick() : ❌ in HTML
> onClick will work in html, but if you're defining the handler in JS, you need to use the lowercased onclick.
(https://stackoverflow.com/questions/4380719/onclick-or-onclick)

2. When the value will be keep changing value, using array
```
let cards = [firCard, secCard]

cards[0] = Math.floor(Math.random() * 11) + 1;
cards[1] = Math.floor(Math.random() * 11) + 1;
```

3. Math.random()
- `Math.random() * 4` = 0.000 to 3.999
- `Math.floor(Math.random() * 4)` = 0 | 1 | 2 | 3

<br>
image source: https://raw.githubusercontent.com/scrimba/learn-javascript/main/3.%20Build%20a%20Blackjack%20game/18.%20Add%20to%20the%20sum%20when%20newCard%20is%20clicked/images/table.png



# 3. Build Crome Extension
<img width="569" alt="Screen Shot 2022-07-06 at 4 58 54 PM" src="https://user-images.githubusercontent.com/67844037/177642095-5b14ec9b-6829-4eb8-b3e6-34924b986df3.png">

## 📚 What I've learned

### 1. addEventListener()
```
addEventListener(type, listener);
```
- type : "click" -> an event will be triggered when the user clicks on the button

### 2. How to load chrome extension
- create `manifest.json`
```
{
    "manifest_version": 3,
    "version": "1.0",
    "name": "Leads tracker",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    },
    "permissions": [
        "tabs"
    ]
}
```
- go to *chrome://extensions/* and click `Load unpacked`.
- select the project.

### 3. How to get a current chrome tab/ address
- use `chrome.tabs.query`
- make sure you set "permissions" with "tabs" at `manifest.json`

```
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
```
