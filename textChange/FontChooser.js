class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	
	var min = this.props.min > 1 ? parseInt(this.props.min) : 1;
	var max = parseInt(this.props.max);
	 if(max < min)[min,max] = [max,min];
	var size = parseInt(this.props.size);
	 if(size < min) size = min;
	 if(size > max) size = max;
	var originalSize = size;

	this.state = { isHidden : true,
					isBold : false,
					min : min,
					max : max,
					originalSize : size,
					size: parseInt(size) };}
	
	//show and hide side on click
	toggle(){
		this.setState( { isHidden : !this.state.isHidden } );
		var formEl = document.getElementsByClassName('form');
		for(let element of formEl){
			element.hidden = this.state.isHidden;
		}
	 }

	 //checkbox for font weight 
	 handleChangeCheckbox(){
		 this.setState( { isBold : !this.state.isBold } )
	 }

	 //increase font size
	 increaseFontSize(){
		 if(this.state.size < this.state.max){
			 this.setState({ size : this.state.size + 1 });
		 }
	 }

	 //decrease font size
	 decreaseFontSize(){
		 if(this.state.size > this.state.min){
			 this.setState({size : this.state.size - 1});
		 }
	 }

	 //reset font size
	 resetFontSize(){
		 this.setState({ size: parseInt(this.state.originalSize) });
	 }
    

    render() {
		 var weight = this.state.isBold ? 'bold' : 'normal';
		 var myColor = (this.state.size === this.state.min || this.state.size === this.state.max) ? 'red' : 'black'; 
		 
	return(
	       <div>
	       <input className='form' type="checkbox" id="boldCheckbox" hidden='true' defaultChecked={this.state.isBold} onChange={this.handleChangeCheckbox.bind(this)}/>
	       <button className='form' id="decreaseButton" hidden='true' onClick={this.decreaseFontSize.bind(this)}>-</button>
	       <span className='form' id="fontSizeSpan" hidden='true' onDoubleClick={this.resetFontSize.bind(this)}>{this.state.size}</span>
	       <button className='form' id="increaseButton" hidden='true' onClick={this.increaseFontSize.bind(this)}>+</button>
	       <span id="textSpan"  style={{fontWeight:weight, fontSize:this.state.size, color:myColor}} onClick={this.toggle.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

