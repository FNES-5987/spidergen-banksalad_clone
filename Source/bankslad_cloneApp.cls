
/**
Constructor
Do not call Function in Constructor.
*/
class bankslad_cloneApp()
{
	super();
	console.log(this);

	this.pageId = null;
	this.navBarView = null;
	this.footerView = null;

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

// 내비게이터 생성
function bankslad_cloneApp*setNavigator(navi)
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
function bankslad_cloneApp*registerPage(menu)
{
	// 네비게이터를 등록하지 않았다면 리턴한다.
	if(!this.navi) return;
	
	for (var key in menu) {
		this.navi.registerPage(`Source/PageView/${key}.lay`, key);
	}
};

// 화면 이동 함수
function bankslad_cloneApp*goPage(pageId, data, isPop)
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
function bankslad_cloneApp*goPrevPage(data)
{
	return this.navi.goPrevPage(data);
};
