// importing local code, code we have written
import {IdleUpWidgetState, PressedWidgetState } from "../core/ui";
import {Window, Widget, RoleType, EventArgs} from "../core/ui";
// importing code from SVG.js library
import {Rect, Text, Box} from "../core/ui";

class ScrollBar extends Widget{
    private _rect: Rect;
    private _text: Text;
    private _input: string;
    private _fontSize: number;
    private _text_y: number;
    private _text_x: number;
    private defaultText: string = "";
    private defaultFontSize: number = 18;
    private defaultWidth: number = 19;
    private defaultHeight: number = 150;
    private eventrect: Rect;
    private thumb: Rect;
    // private isChecked: boolean;

    constructor(parent:Window){
        super(parent);
        // set defaults
        this.height = this.defaultHeight;
        this.width = this.defaultWidth;
        this._input = this.defaultText;
        this._fontSize = this.defaultFontSize;
        // set Aria role
        this.role = RoleType.button;
        // render widget
        this.render();
        // set default or starting state
        this.setState(new IdleUpWidgetState());
        // prevent text selection
        this.selectable = false;
        // this.isChecked = false;
    }

    set fontSize(size:number){
        this._fontSize= size;
        this.update();
    }

    private positionText(){
        let box:Box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y());
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0){
            this._text.y(this._text_y);
        }
    }
    
    render(): void {
        this._group = (this.parent as Window).window.group();
        this._rect = this._group.rect(this.width, this.height);
        this.thumb = this._group.rect(this.width, this.height/3);
        this._rect.stroke("black");
        this._text = this._group.text(this._input);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent rect on top of text to 
        // prevent selection cursor and to handle mouse events
        this.eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);

        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(this.eventrect);
    }

    override update(): void {

        
        if(this._text != null)
            this._text.font('size', this._fontSize);
            this._text.text(this._input);
            this.positionText();
        
        if(this._rect != null)
            // this._rect = this._group.rect(this.width, this.height);
            this._rect.fill(this.backcolor);
            this.thumb.fill("gray");

        if(this.height != this.defaultHeight)
            this._rect.width(this.width);
            this._rect.height(this.height);
            this.eventrect.width(this.width);
            this.eventrect.height(this.height);
        // this.registerEvent(this.eventrect);
        super.update();
    }
    
    pressReleaseState(): void{

        if (this.previousState instanceof PressedWidgetState)
            this.raise(new EventArgs(this));
    }
    headerString: string = 'Button has NOT been clicked';
    //TODO: implement the onClick event using a callback passed as a parameter
    onClick(callback: {(event?:any): void}):void{
        this.attach(callback);
        console.log("clicked");
    }
    
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    
    idleupState(): void {
        this.backcolor = "white";
    }
    idledownState(): void {
        console.log("Idle down");

    }
    pressedState(callback?: (event: any) => void): void {
        console.log("pressed");
    }
    hoverState(): void {
        console.log("Mouse hover triggered");

    }
    hoverPressedState(): void {
        throw new Error("Method not implemented.");
    }
    pressedoutState(): void {
        throw new Error("Method not implemented.");
    }
    moveState(): void {
        throw new Error("Method not implemented.");
    }
    keyupState(keyEvent?: KeyboardEvent): void {
        throw new Error("Method not implemented.");
    }

    set btnHeight(height: number) {
		this.height = height;
		this.update();
	}

	get btnHeight() {
		return this.height;
	}

    set btnWidth(width: number) {
		this.width = width;
		this.update();
	}

	get btnWidth() {
		return this.width;
	}

    set btnLabel(label: string) {
		this._input = label;
		this.update();
	}

	get btnLabel() {
		return this._input;
	}
}

export {ScrollBar}