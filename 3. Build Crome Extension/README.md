<img width="567" alt="Screen Shot 2022-07-06 at 4 58 54 PM" src="https://user-images.githubusercontent.com/67844037/177642095-5b14ec9b-6829-4eb8-b3e6-34924b986df3.png">

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
