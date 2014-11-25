var React = require('react/addons'),
	SetClass = require('classnames'),
	Tappable = require('../../touchstone/tappable'),
	Navigation = require('../../touchstone/navigation');

module.exports = React.createClass({
	mixins: [Navigation],
	propTypes: {
		className: React.PropTypes.string,
		showView: React.PropTypes.string,
		viewTransition: React.PropTypes.string,
		viewProps: React.PropTypes.object,
		component: React.PropTypes.string,
		onTap: React.PropTypes.func,
		loading: React.PropTypes.bool,
		label: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			component: 'button',
			className: ''
		};
	},
	render: function() {
		// Class Name
		var className = SetClass({
			'loading-button': true,
			'is-loading': this.props.loading
		});
		className += this.props.className ? (' ' + this.props.className) : '';

		// Set Variables
		var label = this.props.label ? <div className="loading-button-text">{this.props.label}</div> : null;
		var onTap = this.props.showView ? this.showViewFn(this.props.showView, this.props.viewTransition, this.props.viewProps) : this.props.onTap;

		// Output Component
		return (
			<Tappable className={className} component={this.props.component} onTap={onTap}>
				<span className="loading-button-icon-wrapper">
					<span className="loading-button-icon" />
				</span>
				{label}
			</Tappable>
		);
	}
});
