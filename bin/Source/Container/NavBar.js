
/**
Constructor
Do not call Function in Constructor.
*/
function NavBar()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(NavBar, AView);


NavBar.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	this.header_area.setStyle('position', 'fixed');

};

NavBar.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	

};

NavBar.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
