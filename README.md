# advanced-react-circular-slider

![](https://img.shields.io/badge/version-2.4.5-green.svg) ![](https://img.shields.io/badge/license-MIT-blue.svg)

A highly customizable circular slider with no dependencies. See some [live demos here!](https://jsdev63.github.io/advanced_react-circular-slider/)

<img src="/public/slider2.png" alt="CircularSlider example image" width="100%" />

<img src="/public/circular-slider.png" alt="CircularSlider example image" width="100%" />

## install

```
npm install @jsdev63/advanced_react-circular-slider
```

## example

```javascript
import React from 'react';
import CircularSlider from '@jsdev63/advanced_react-circular-slider';

const App = () => {
    return (
        <CircularSlider
            onChange={ value => { console.log(value); } }
        />
    )
};

export default App;
```

Use min and max props to define the range of numbers. Use prependToValue/appendToValue if you want to prepend/append e.g. "$" or "°" to the value. Or simply use the data prop and pass any number or string sequence as an array to be spread in 360°. See some [live demos here!](https://jsdev63.github.io/advanced_react-circular-slider/)

```javascript
import React from 'react';
import CircularSlider from '@jsdev63/advanced_react-circular-slider';

const App = () => {
    return (
<CircularSlider
width={400}
limit={270}
offsetAngle={-45}
labelOffset={20}
direction={1}
data={[
  {
    key: 1,
    value: "STAFFING",
  },
  {
    key: 2,
    value: "TEAM",
  },
  {
    key: 1,
    value: "PROJECT",
  },
  {
    key: 1,
    value: "MANAGED",
  }
]}
knobPosition="bottom"
valueFontSize="2rem"
renderLabelValue={null}
progressLineCap="flat"
progressSize={16}
progressColorFrom={'#5215FC'}
progressColorTo={'#280885'}
doubleLineType="progress"
trackColor="#a9a9a9"
trackSize={16}
knobColor = "blue"
knobSize= {40}
knobEl={<SlideIcon width={40} height={40} />}
>
</CircularSlider>
    )
};

export default App;
```

## Props

prop                 | type   | default       | Affects
---------------------|--------|---------------|--------
width                | number | 280           | width of the slider
direction            | number | 1             | clockwise (**1**) or anticlockwise (**-1**)
min                  | number | 0             | smallest value
max                  | number | 360           | largest value
limit                | number | 360           | maximum angle
offsetAngle          | number | -45           | offset angle
data                 | array  | []            | array of data to be spread in 360°
dataIndex            | number | 0             | initially place knob at a certain value in the array
knobEl               | string | null          | knob element
knobColor            | string | #4e63ea       | knob color
knobSize             | number | 32            | knob size, should be large than track size
hideKnob             | boolean| false         | hide knob
knobDraggable        | boolean| true          | knob not draggable
knobPosition         | string | top           | knob's 0 position to be **top**, **right**, **bottom** or **left**
label                | string | ANGLE         | label
labelColor           | string | #272b77       | label and value color
labelOffset          | number | 20            | spacing between label and circle
activedlabelColor    | string | #c54a1b       | actived label and value color
labelBottom          | boolean| false         | label position at bottom
labelFontSize        | string | 1rem          | label font-size
valueFontSize        | string | 4rem          | label value font-size
appendToValue        | string | ''            | append character to value
prependToValue       | string | ''            | prepend character to value
renderLabelValue     | jsx    | null          | add custom jsx code for the labels and styles
verticalOffset       | string | 2rem          | vertical offset of the label and value
hideLabelValue       | boolean| false         | hide label and value
progressColorFrom    | string | #80C3F3       | progress track gradient start color
progressColorTo      | string | #4990E2       | progress track gradient end color
progressSize         | number | 8             | progress track size
progressLineCap      | string | round         | progress track cap to be **round** or **flat**
trackColor           | string | #DDDEFB       | background track color
trackSize            | number | 8             | background track size
doubleLineType       | string | progress      | type of double line **progress** or **track**
doubleLineColor      | string | gradiant      | double line color mode **gradiant** or **null** or **color string**
onChange             | func   | value => {}   | returns label value


## license

[MIT License](https://opensource.org/licenses/MIT)
