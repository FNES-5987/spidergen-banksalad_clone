
/**
Constructor
Do not call Function in Constructor.
*/
function MainPage()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainPage, AView);


MainPage.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainPage.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MainPage.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
