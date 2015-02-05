/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * Modified from stock Link plugin.  Adds Unlink button to existing Link Dialog, removing the need for a separate toolbar button.
 * Author: Aron Pasieka
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
			editor.addCommand( 'condensedlink', new CKEDITOR.dialogCommand( 'condensedlinkDialog') );
			editor.ui.addButton( 'condensedlink', {
				label: editor.lang.link.toolbar,
				command: 'condensedlink',
				icon : this.path + "icons/link.png"
			} );
			CKEDITOR.dialog.add( 'condensedlinkDialog', this.path + 'dialogs/link.js' );
		}
	} );
} )();
