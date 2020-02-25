const St = imports.gi.St;

/*
 * Return status icon.
 */
function createStatusIcon(icon_name){
	let params = { style_class : icon_name };

	// St.IconType got removed in Gnome 3.6. This is for backwards compatibility with Gnome 3.4.
	if( St.IconType ){
		params.icon_type = St.IconType.FULLCOLOR;
	}

	return new St.Icon(params);
}
