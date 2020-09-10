# BUG?

## In JavaScript, array methods forEach() and splice() work in the following manner:


### 1. forEach()

The **forEach()** method executes a provided function once for each array element.

### Syntax:
```javascript
arr.forEach(callback(currentElement, index, array))
```
The ```callback``` is a Function to execute on each element. It accepts between one and three arguments:
- currentValue
The current element being processed in the array.
- index: Optional. The index of currentValue in the array.
- array Optional. The array forEach() was called upon.

### 1. splice()

The **splice()** method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

### Syntax:
```javascript
let arrDeletedItems = array.splice(start, deleteCount)
```

`start` Required. An integer that specifies at what position to start removing array items. Use negative values to specify the position from the end of the array.

`deleteCount:` Optional. The number of items to be removed. If set to 0, no items will be removed

**From the JSON below,** we sought to remove entries for which the user had no passion using **foreach()** and **splice()**

```javascript
const professionals = [{
        Name: 'Joy',
        Proficiency: 'Expert',
        Passion: true
    },
    {
        Name: 'James',
        Proficiency: 'Pro',
        Passion: false
    },
    {
        Name: 'Stella',
        Proficiency: 'Beginner',
        Passion: true
    },
    {
        Name: 'Will',
        Proficiency: 'Expert',
        Passion: false
    },
    {
        Name: 'Joe',
        Proficiency: 'Intermediate',
        Passion: true
    },

    {
        Name: 'Mike',
        Proficiency: 'Pro',
        Passion: false
    },
    {
        Name: 'Allan',
        Proficiency: 'Beginner',
        Passion: false
    }
]
```

1. code *instanceOne.js* shows the results which seem flawed-- the last 'false' value is still retained.
2. code *instanceTwo.js* shows the expected results-- all 'false' values are removed using **filter()**