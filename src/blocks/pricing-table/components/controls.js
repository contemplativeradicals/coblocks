/**
 * Internal dependencies
 */
import icons from './../../../utils/icons';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;
const { Toolbar } = wp.components;

class Controls extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			isSelected,
			attributes,
			setAttributes,
		} = this.props;

		const {
			count,
			contentAlign,
		} = attributes;

		return (
			isSelected && (
				<Fragment>
					<BlockControls>
						<AlignmentToolbar
							value={ contentAlign }
							onChange={ ( nextContentAlign ) => setAttributes( { contentAlign: nextContentAlign } ) }
						/>
						<Toolbar
							className="coblocks__toolbar--numeral"
							controls={ '123'.split( '' ).map( ( number ) => ( {
								icon: icons.blank,
								// translators: %s: tables count e.g: "1", "2", "3"
								title: sprintf( __( '%s Tables' ), number ),
								isActive: count == number,
								subscript: number,
								onClick: () =>
									setAttributes( {
										count: number,
									} )
								} )
							) }
						/>
					</BlockControls>
				</Fragment>
			)
		);
	}
};

export default Controls;
