
/**
Constructor
Do not call Function in Constructor.
*/
function bankslad_cloneApp()
{
	AApplication.call(this);
	console.log(this);

	this.pageId = null;
	this.navBarView = null;
	this.footerView = null;

}
afc.extendsClass(bankslad_cloneApp, AApplication);


bankslad_cloneApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

bankslad_cloneApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};

// 내비게이터 생성
bankslad_cloneApp.prototype.setNavigator = function(navi)
{
	this.navi = navi;
	
	
	ANavigator.reportBackKeyEvent = function()
	{
		var navigator = theApp.navi || ANavigator.getRootNavigator();
		if (navigator) {
			history.back();
		}
		return false;
	};
};

// 화면 등록
bankslad_cloneApp.prototype.registerPage = function(menu)
{
	// 네비게이터를 등록하지 않았다면 리턴한다.
	if(!this.navi) return;
	
	for (var key in menu) {
		this.navi.registerPage(`Source/PageView/${key}.lay`, key);
	}
};

// 화면 이동 함수
bankslad_cloneApp.prototype.goPage = function(pageId, data, isPop)
{
	window.scrollTo(0, 0);
	
	if (!isPop) {
		window.history.pushState(pageId, null, `?page=${pageId}`);
	}
	
	this.pageId = pageId;
	this.navi.goPage(pageId, data);
	
	document.title = `뱅크샐러드 | ${menuCollection[pageId]}`;
};

// 뒤로가기 함수
bankslad_cloneApp.prototype.goPrevPage = function(data)
{
	return this.navi.goPrevPage(data);
};

var theApp = null;

AApplication.start = function()
{
    afc.scriptReady(function()
    {
        if(window._version) _version.setFileVersion();
	    theApp = new bankslad_cloneApp();
	    theApp.isLoadTheme = false;
        if(PROJECT_OPTION.unitUrl) theApp.unitTest(PROJECT_OPTION.unitUrl);
        else theApp.onReady();
    });
};

if(!AApplication.manualStart)
{
    $(document).ready(function()
    {
        AApplication.start();
    });
}
else if(AApplication.manualStart == 2)
{
    AApplication.start();
}

