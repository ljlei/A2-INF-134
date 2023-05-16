import {Window} from "./core/ui"
import {Button} from "./widgets/button"
import { CheckBox } from "./widgets/checkbox";
import {Heading} from "./widgets/heading"
import { TextBox } from "./widgets/textbox";
import { ScrollBar } from "./widgets/scrollbar";
import { RadioButton } from "./widgets/radiobutton";

let w = new Window(window.innerHeight-10,'100%');

let lbl1 = new Heading(w);
lbl1.text = "Visually distinct (from default) button!";
lbl1.tabindex = 1;
lbl1.fontSize = 14;
lbl1.move(10,20);

let btn = new Button(w);
btn.tabindex = 2;
btn.fontSize = 16;
btn.backcolor = 'gray';
btn.move(12, 50);


let n = 0;
let callback = function(event:any) {
    btn.backcolor = 'aqua';
    console.log("clicked");
    lbl1.text = "Button has been clicked!";
    n++;
    btn.btnLabel = n + " time(s)";
}
btn.onClick(callback);

let lbl2 = new Heading(w);
lbl2.text = "Checkbox";
lbl2.tabindex = 1;
lbl2.fontSize = 14;
lbl2.move(10,100);

let lbl2_5 = new Heading(w);
lbl2_5.text = "not checked";
lbl2_5.tabindex = 1;
lbl2_5.fontSize = 14;
lbl2_5.move(40,135);

let checkbox = new CheckBox(w);
checkbox.move(12, 130);
let isChecked = false;
let callback2 = function(event?:any) {
    if(isChecked == true) {
        checkbox.btnLabel = " ";
        isChecked = false;
        lbl2_5.text = "not checked";
    }
    else {
        checkbox.btnLabel = "X";
        isChecked = true;
        lbl2_5.text = "checked";
    }
}
checkbox.onClick(callback2);

let lbl3 = new Heading(w);
lbl3.text = "Radio Button";
lbl3.tabindex = 1;
lbl3.fontSize = 14;
lbl3.move(12,170);

let radioButton = new RadioButton(w);
radioButton.move(12,200);
radioButton.addRadio();

let lbl5 = new Heading(w);
lbl5.text = "Text Box";
lbl5.tabindex = 1;
lbl5.fontSize = 14;
lbl5.move(12,240);

let textbox = new TextBox(w);
textbox.backcolor = "white";
textbox.move(12,255);


let lbl6 = new Heading(w);
lbl6.text = "Scroll Bar";
lbl6.tabindex = 1;
lbl6.fontSize = 14;
lbl6.move(12,435);

let scrollbar = new ScrollBar(w);
scrollbar.backcolor = "white";
scrollbar.move(12,460);