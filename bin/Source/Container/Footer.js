
/**
Constructor
Do not call Function in Constructor.
*/
function Footer()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(Footer, AView);


Footer.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Footer.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

Footer.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
