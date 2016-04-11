var React = require('react');

var Button = React.createClass({
    onSubmit: function() {
        var A = (this.props.value1 - this.props.value2);
        console.log(this.props.value1);
    },
    render: function() {
        return (
            <button className="btn btn-primary" onClick={this.onSubmit}>{this.props.type}</button>
        );
    }

});

module.exports = Button;
