
/**
Constructor
Do not call Function in Constructor.
*/
class bankslad_cloneApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function bankslad_cloneApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function bankslad_cloneApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};
