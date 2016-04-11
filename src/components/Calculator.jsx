var React = require('react');

var NumberField = require('./NumberField.jsx')
var Button = require('./Button.jsx');

var Calculator = React.createClass({
    getInitialState: function() {
        return {value: ""};
    },
    onSubmitAdd: function(e) {
      var firstNumber = this.refs.fieldNumber1.state.value;
      var secondNumber = this.refs.fieldNumber2.state.value;
      var result = (parseInt(firstNumber) + parseInt(secondNumber));
      if (isNaN(result)) {
          alert('Please enter numbers only');
      } else {
        console.log(result);
        this.setState({value: result});
      };;
    },
    onSubmitSubtract: function(e) {
      var firstNumber = this.refs.fieldNumber1.state.value;
      var secondNumber = this.refs.fieldNumber2.state.value;
      var result = (parseInt(firstNumber) - parseInt(secondNumber));
      if (isNaN(result)) {
          alert('Please enter numbers only');
      } else {
        console.log(result);
        this.setState({value: result});
      };
    },
    onSubmitMultiply: function(e) {
      var firstNumber = this.refs.fieldNumber1.state.value;
      var secondNumber = this.refs.fieldNumber2.state.value;
      var result = (parseInt(firstNumber) * parseInt(secondNumber));
      if (isNaN(result)) {
          alert('Please enter numbers only');
      } else {
        console.log(result);
        this.setState({value: result});
      };;
    },
    onSubmitDivide: function(e) {
      var firstNumber = this.refs.fieldNumber1.state.value;
      var secondNumber = this.refs.fieldNumber2.state.value;
      var result = (parseInt(firstNumber) / parseInt(secondNumber));
      if (isNaN(result)) {
          alert('Please enter numbers only');
      } else {
        console.log(result);
        this.setState({value: result});
      };

    },
    onSubmitClear: function(e) {
      var result = "";
      console.log(result);
      this.setState({value: result});
      this.refs.fieldNumber1.clear();
      this.refs.fieldNumber2.clear();

    },
    render: function() {
      var divStyle = {
        background: '#f2f2f2',
      }
      var divStyle2 = {
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 30,
      }
      var divStyle3 = {
        display: 'block',
        width: 125,
        textAlign: 'center'
      }
      return (
          <div className="col-sm-7">
              <div className="panel panel-default">
                  <div className="panel-body" style={divStyle}>
                      <div className="row">
                          <div className="col-sm-12" style={divStyle2}>
                              <h2>Simple Calculator</h2>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-sm-6">
                              <NumberField placeHolder="Number e.g. 1337" ref="fieldNumber1" />
                          </div>
                          <div className="col-sm-6">
                              <NumberField placeHolder="Number e.g. 2108" ref="fieldNumber2" />
                          </div>
                      </div>

                      <div className="row" style={divStyle2}>
                        <div className="col-sm-3">
                            <button className="btn btn-primary" style={divStyle3} onClick={this.onSubmitAdd}>+ add</button>
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-primary" style={divStyle3} onClick={this.onSubmitSubtract}>- Subtract</button>
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-primary" style={divStyle3} onClick={this.onSubmitMultiply}>* Multiply</button>
                        </div>
                        <div className="col-sm-3">
                            <button className="btn btn-primary" style={divStyle3} onClick={this.onSubmitDivide}>/ Divide</button>
                        </div>

                      </div>
                      <div className="row">
                        <div className="col-sm-8">
                            <input className="form-control" placeholder="Result" value={this.state.value}/>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-danger" style={divStyle3} onClick={this.onSubmitClear}>Clear</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      )

    }

});


module.exports = Calculator;
