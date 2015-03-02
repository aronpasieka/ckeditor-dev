/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * Modified from stock Link plugin.  Adds Unlink button to existing Link Dialog, removing the need for a separate toolbar button.
 * Modified by: Aron Pasieka
 */

'use strict';

( function() {
	CKEDITOR.plugins.add( 'condensedlink', {
		requires: 'link',
		// jscs:disable maximumLineLength
		lang: 'af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn',
		// jscs:enable maximumLineLength
		hidpi: true,
		init: function( editor ) {
			var allowed = 'a[!href]',
				required = 'a[href]';

			if ( CKEDITOR.dialog.isTabEnabled( editor, 'condensedlink', 'advanced' ) )
				allowed = allowed.replace( ']', ',accesskey,charset,dir,id,lang,name,rel,tabindex,title,type]{*}(*)' );
			if ( CKEDITOR.dialog.isTabEnabled( editor, 'condensedlink', 'target' ) )
				allowed = allowed.replace( ']', ',target,onclick]' );

			// Add the link and unlink buttons.
			editor.addCommand( 'condensedlink', new CKEDITOR.dialogCommand( 'condensedlinkDialog', {
				allowedContent: allowed,
				requiredContent: required
			} ) );

			editor.setKeystroke( CKEDITOR.CTRL + 76 /*L*/, 'condensedlink' );

			if ( editor.ui.addButton ) {
				editor.ui.addButton( 'condensedlink', {
					label: editor.lang.link.toolbar,
					command: 'condensedlink',
					icon : this.path + "icons/link.png"
				} );
			}

			CKEDITOR.dialog.add( 'condensedlinkDialog', this.path + 'dialogs/link.js' );

			editor.on( 'doubleclick', function( evt ) {
				var element = CKEDITOR.plugins.link.getSelectedLink( editor ) || evt.data.element;

				if ( !element.isReadOnly() ) {
					if ( element.is( 'a' ) ) {
						evt.data.dialog = ( element.getAttribute( 'name' ) && ( !element.getAttribute( 'href' ) || !element.getChildCount() ) ) ? 'anchor' : 'condensedlinkDialog';
						// Pass the link to be selected along with event data.
						evt.data.link = element;
					} else if ( CKEDITOR.plugins.link.tryRestoreFakeAnchor( editor, element ) ) {
						evt.data.dialog = 'anchor';
					}
				}
			}, null, null, 0 );
			
		}
	} );
} )();
